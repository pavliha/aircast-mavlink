/**
 * Utility functions for MAVLink testing
 */

import { MAVLinkParsedMessage } from './test-base'

/**
 * Generate test data for performance testing
 */
export function generateTestMessages(count: number, baseMessage: any): any[] {
  const messages = []
  for (let i = 0; i < count; i++) {
    messages.push({
      ...baseMessage,
      sequence: i,
      payload: {
        ...baseMessage.payload,
        // Add some variation based on index
        ...(baseMessage.payload.time_boot_ms !== undefined && { time_boot_ms: i * 1000 }),
        ...(baseMessage.payload.lat !== undefined && { lat: baseMessage.payload.lat + i }),
        ...(baseMessage.payload.lon !== undefined && { lon: baseMessage.payload.lon + i }),
      },
    })
  }
  return messages
}

/**
 * Create corrupted version of a message for error testing
 */
export function corruptMessage(
  message: any,
  corruptionType: 'missing_field' | 'invalid_type' | 'out_of_range' = 'missing_field'
): any {
  const corrupted = JSON.parse(JSON.stringify(message))

  switch (corruptionType) {
    case 'missing_field':
      delete corrupted.payload
      break
    case 'invalid_type':
      corrupted.system_id = 'invalid'
      break
    case 'out_of_range':
      corrupted.system_id = 999
      break
  }

  return corrupted
}

/**
 * Compare two messages for equality, handling floating point precision
 */
export function messagesEqual(
  msg1: MAVLinkParsedMessage,
  msg2: MAVLinkParsedMessage,
  tolerance = 0.0001
): boolean {
  // Compare basic fields
  if (
    msg1.message_name !== msg2.message_name ||
    msg1.system_id !== msg2.system_id ||
    msg1.component_id !== msg2.component_id ||
    msg1.sequence !== msg2.sequence
  ) {
    return false
  }

  // Compare payload fields
  const payload1 = msg1.payload
  const payload2 = msg2.payload

  const keys1 = Object.keys(payload1)
  const keys2 = Object.keys(payload2)

  if (keys1.length !== keys2.length) {
    return false
  }

  for (const key of keys1) {
    const val1 = payload1[key]
    const val2 = payload2[key]

    if (typeof val1 !== typeof val2) {
      return false
    }

    if (Array.isArray(val1)) {
      if (!Array.isArray(val2) || val1.length !== val2.length) {
        return false
      }
      for (let i = 0; i < val1.length; i++) {
        if (typeof val1[i] === 'number' && typeof val2[i] === 'number') {
          if (Math.abs(val1[i] - val2[i]) > tolerance) {
            return false
          }
        } else if (val1[i] !== val2[i]) {
          return false
        }
      }
    } else if (typeof val1 === 'number' && typeof val2 === 'number') {
      if (Math.abs(val1 - val2) > tolerance) {
        return false
      }
    } else if (val1 !== val2) {
      return false
    }
  }

  return true
}

/**
 * Extract unique message types from a list of messages
 */
export function getUniqueMessageTypes(messages: MAVLinkParsedMessage[]): string[] {
  const types = new Set<string>()
  messages.forEach((msg) => types.add(msg.message_name))
  return Array.from(types).sort()
}

/**
 * Group messages by type
 */
export function groupMessagesByType(
  messages: MAVLinkParsedMessage[]
): Record<string, MAVLinkParsedMessage[]> {
  const groups: Record<string, MAVLinkParsedMessage[]> = {}

  messages.forEach((msg) => {
    if (!groups[msg.message_name]) {
      groups[msg.message_name] = []
    }
    groups[msg.message_name].push(msg)
  })

  return groups
}

/**
 * Calculate statistics for numeric payload fields across messages
 */
export function calculateFieldStats(
  messages: MAVLinkParsedMessage[],
  fieldName: string
): {
  min: number
  max: number
  avg: number
  count: number
} {
  const values = messages
    .map((msg) => msg.payload[fieldName])
    .filter((val) => typeof val === 'number' && !isNaN(val))

  if (values.length === 0) {
    return { min: 0, max: 0, avg: 0, count: 0 }
  }

  const min = Math.min(...values)
  const max = Math.max(...values)
  const avg = values.reduce((sum, val) => sum + val, 0) / values.length

  return { min, max, avg, count: values.length }
}

/**
 * Create a hex dump of byte array for debugging
 */
export function hexDump(bytes: Uint8Array, bytesPerLine = 16): string {
  const lines: string[] = []

  for (let i = 0; i < bytes.length; i += bytesPerLine) {
    const chunk = bytes.slice(i, i + bytesPerLine)
    const hex = Array.from(chunk)
      .map((b) => b.toString(16).padStart(2, '0').toUpperCase())
      .join(' ')

    const ascii = Array.from(chunk)
      .map((b) => (b >= 32 && b <= 126 ? String.fromCharCode(b) : '.'))
      .join('')

    const offset = i.toString(16).padStart(8, '0').toUpperCase()
    lines.push(`${offset}: ${hex.padEnd(bytesPerLine * 3 - 1)} |${ascii}|`)
  }

  return lines.join('\n')
}

/**
 * Validate message field constraints
 */
export function validateFieldConstraints(message: MAVLinkParsedMessage): string[] {
  const errors: string[] = []

  // Basic field validation
  if (message.system_id < 0 || message.system_id > 255) {
    errors.push(`system_id out of range: ${message.system_id}`)
  }

  if (message.component_id < 0 || message.component_id > 255) {
    errors.push(`component_id out of range: ${message.component_id}`)
  }

  if (message.sequence < 0 || message.sequence > 255) {
    errors.push(`sequence out of range: ${message.sequence}`)
  }

  // Message-specific validation
  switch (message.message_name) {
    case 'HEARTBEAT':
      if (message.payload.type < 0 || message.payload.type > 255) {
        errors.push(`HEARTBEAT.type out of range: ${message.payload.type}`)
      }
      if (message.payload.autopilot < 0 || message.payload.autopilot > 255) {
        errors.push(`HEARTBEAT.autopilot out of range: ${message.payload.autopilot}`)
      }
      break

    case 'GPS_RAW_INT':
      if (message.payload.fix_type < 0 || message.payload.fix_type > 255) {
        errors.push(`GPS_RAW_INT.fix_type out of range: ${message.payload.fix_type}`)
      }
      if (message.payload.satellites_visible < 0 || message.payload.satellites_visible > 255) {
        errors.push(
          `GPS_RAW_INT.satellites_visible out of range: ${message.payload.satellites_visible}`
        )
      }
      break
  }

  return errors
}

/**
 * Create test timeout wrapper for async operations
 */
export function withTimeout<T>(
  promise: Promise<T>,
  timeoutMs: number,
  operation: string
): Promise<T> {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error(`${operation} timed out after ${timeoutMs}ms`)), timeoutMs)
    }),
  ])
}

/**
 * Retry operation with exponential backoff
 */
export async function retryOperation<T>(
  operation: () => Promise<T>,
  maxRetries = 3,
  baseDelayMs = 100
): Promise<T> {
  let lastError: Error = new Error('No error occurred')

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await operation()
    } catch (error) {
      lastError = error as Error

      if (attempt === maxRetries) {
        break
      }

      const delayMs = baseDelayMs * Math.pow(2, attempt)
      await new Promise((resolve) => setTimeout(resolve, delayMs))
    }
  }

  throw new Error(
    `Operation failed after ${maxRetries + 1} attempts. Last error: ${lastError.message}`
  )
}

/**
 * Mock fetch for testing HTTP operations
 */
export function createMockFetch(responses: Record<string, any>) {
  return jest.fn((url: string) => {
    const response = responses[url]
    if (!response) {
      return Promise.reject(new Error(`No mock response for URL: ${url}`))
    }

    return Promise.resolve({
      ok: true,
      status: 200,
      text: () =>
        Promise.resolve(typeof response === 'string' ? response : JSON.stringify(response)),
      json: () => Promise.resolve(response),
    })
  })
}
