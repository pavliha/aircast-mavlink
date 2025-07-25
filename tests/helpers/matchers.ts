/**
 * Custom Jest matchers for MAVLink testing
 */

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Matchers<R> {
      toBeValidMAVLinkMessage(): R
      toHaveValidPayload(expectedFields?: Record<string, unknown>): R
      toBeCompatibleWith(otherMessage: unknown): R
      toHaveValidChecksum(): R
      toBeWithinRange(min: number, max: number): R
    }
  }
}

const matchers = {
  /**
   * Validates that an object is a valid MAVLink message structure
   */
  toBeValidMAVLinkMessage(received: unknown) {
    const message = received as Record<string, unknown>
    const pass =
      message &&
      typeof message.message_name === 'string' &&
      typeof message.system_id === 'number' &&
      typeof message.component_id === 'number' &&
      typeof message.sequence === 'number' &&
      typeof message.payload === 'object' &&
      message.payload !== null

    return {
      message: () => {
        const basic = `expected ${JSON.stringify(received)}`
        if (pass) {
          return `${basic} not to be a valid MAVLink message`
        } else {
          const missing = []
          if (!received) missing.push('object to exist')
          if (typeof message?.message_name !== 'string') missing.push('message_name (string)')
          if (typeof message?.system_id !== 'number') missing.push('system_id (number)')
          if (typeof message?.component_id !== 'number') missing.push('component_id (number)')
          if (typeof message?.sequence !== 'number') missing.push('sequence (number)')
          if (typeof message?.payload !== 'object' || message?.payload === null)
            missing.push('payload (object)')

          return `${basic} to be a valid MAVLink message, but missing: ${missing.join(', ')}`
        }
      },
      pass,
    }
  },

  /**
   * Validates that a message has a valid payload with expected fields
   */
  toHaveValidPayload(received: Record<string, unknown>, expectedFields?: Record<string, unknown>) {
    const hasPayload = received && typeof received.payload === 'object' && received.payload !== null

    if (!hasPayload) {
      return {
        message: () => `expected ${JSON.stringify(received)} to have a valid payload object`,
        pass: false,
      }
    }

    if (!expectedFields) {
      return {
        message: () => `expected ${JSON.stringify(received)} not to have a valid payload`,
        pass: true,
      }
    }

    const mismatches: string[] = []
    const payload = received.payload as Record<string, unknown>
    for (const [key, expectedValue] of Object.entries(expectedFields)) {
      const actualValue = payload[key]

      if (typeof expectedValue === 'bigint') {
        if (actualValue !== expectedValue) {
          mismatches.push(`${key}: expected ${expectedValue}, got ${actualValue}`)
        }
      } else if (typeof expectedValue === 'number' && !Number.isInteger(expectedValue)) {
        const tolerance = 0.0001
        if (Math.abs(Number(actualValue) - expectedValue) > tolerance) {
          mismatches.push(`${key}: expected ~${expectedValue}, got ${actualValue}`)
        }
      } else if (Array.isArray(expectedValue)) {
        if (
          !Array.isArray(actualValue) ||
          JSON.stringify(actualValue) !== JSON.stringify(expectedValue)
        ) {
          mismatches.push(
            `${key}: expected ${JSON.stringify(expectedValue)}, got ${JSON.stringify(actualValue)}`
          )
        }
      } else {
        if (actualValue !== expectedValue) {
          mismatches.push(`${key}: expected ${expectedValue}, got ${actualValue}`)
        }
      }
    }

    const pass = mismatches.length === 0

    return {
      message: () => {
        if (pass) {
          return `expected payload not to match expected fields`
        } else {
          return `expected payload to match expected fields, but found mismatches:\n${mismatches.join('\n')}`
        }
      },
      pass,
    }
  },

  /**
   * Validates that two messages are compatible (same core structure)
   */
  toBeCompatibleWith(received: Record<string, unknown>, otherMessage: Record<string, unknown>) {
    const receivedValid = received && typeof received === 'object'
    const otherValid = otherMessage && typeof otherMessage === 'object'

    if (!receivedValid || !otherValid) {
      return {
        message: () => `expected both messages to be valid objects`,
        pass: false,
      }
    }

    const compatible =
      received.message_name === otherMessage.message_name &&
      received.system_id === otherMessage.system_id &&
      received.component_id === otherMessage.component_id

    return {
      message: () => {
        if (compatible) {
          return `expected messages not to be compatible`
        } else {
          const differences = []
          if (received.message_name !== otherMessage.message_name) {
            differences.push(
              `message_name: ${received.message_name} vs ${otherMessage.message_name}`
            )
          }
          if (received.system_id !== otherMessage.system_id) {
            differences.push(`system_id: ${received.system_id} vs ${otherMessage.system_id}`)
          }
          if (received.component_id !== otherMessage.component_id) {
            differences.push(
              `component_id: ${received.component_id} vs ${otherMessage.component_id}`
            )
          }
          return `expected messages to be compatible, but found differences: ${differences.join(', ')}`
        }
      },
      pass: compatible,
    }
  },

  /**
   * Validates that a parsed message has a valid checksum
   */
  toHaveValidChecksum(received: Record<string, unknown>) {
    const hasChecksum =
      received && typeof received.checksum === 'number' && typeof received.crc_ok === 'boolean'

    if (!hasChecksum) {
      return {
        message: () => `expected ${JSON.stringify(received)} to have checksum and crc_ok fields`,
        pass: false,
      }
    }

    const pass = received.crc_ok === true

    return {
      message: () => {
        if (pass) {
          return `expected message not to have valid checksum`
        } else {
          return `expected message to have valid checksum, but crc_ok was ${(received as Record<string, unknown>).crc_ok} (checksum: 0x${((received as Record<string, unknown>).checksum as number).toString(16)})`
        }
      },
      pass,
    }
  },

  /**
   * Validates that a number is within a specified range
   */
  toBeWithinRange(received: number, min: number, max: number) {
    const isNumber = typeof received === 'number' && !isNaN(received)

    if (!isNumber) {
      return {
        message: () => `expected ${received} to be a number`,
        pass: false,
      }
    }

    const pass = received >= min && received <= max

    return {
      message: () => {
        if (pass) {
          return `expected ${received} not to be within range ${min} to ${max}`
        } else {
          return `expected ${received} to be within range ${min} to ${max}`
        }
      },
      pass,
    }
  },
}

// Register matchers with Jest
if (typeof expect !== 'undefined' && expect.extend) {
  expect.extend(matchers)
}

export default matchers
