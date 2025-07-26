#!/usr/bin/env tsx

import { spawn } from 'child_process'

// Test with the exact frame that gomavlib generates (with their checksum)
const gomavlibFrame = [
  0xfe, 0x06, 0x00, 0xff, 0xbe, 0x42, 0x01, 0x00, 0x01, 0x01, 0x00, 0x01, 0x34, 0x82,
]

async function validateWithGomavlib(frameBytes: number[]): Promise<any> {
  return new Promise((resolve, reject) => {
    const validator = spawn('./validator', [], {
      cwd: '/Users/pavliha/Code/aircast/aircast-mavlink/tests/go-validator',
      stdio: ['pipe', 'pipe', 'pipe'],
    })

    const request = {
      data: frameBytes,
      dialect: 'common',
      message: 'REQUEST_DATA_STREAM',
    }

    let stdout = ''
    let stderr = ''

    validator.stdout.on('data', (data) => {
      stdout += data.toString()
    })

    validator.stderr.on('data', (data) => {
      stderr += data.toString()
    })

    validator.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`Validator exited with code ${code}: ${stderr}`))
        return
      }

      try {
        const result = JSON.parse(stdout)
        resolve(result)
      } catch (error) {
        reject(new Error(`Failed to parse JSON output: ${error}`))
      }
    })

    validator.stdin.write(JSON.stringify(request))
    validator.stdin.end()
  })
}

async function runTest() {
  console.log('🧪 Testing gomavlib-generated frame for validation...\n')
  console.log(
    'Frame bytes:',
    gomavlibFrame.map((b: number) => '0x' + b.toString(16).padStart(2, '0')).join(' ')
  )
  console.log('Checksum: 0x8234')

  try {
    const result = await validateWithGomavlib(gomavlibFrame)

    if (result.success) {
      console.log('\n✅ GOMAVLIB FRAME VALIDATES SUCCESSFULLY')
      console.log("This confirms that if we can generate checksum 0x8234, we'll be compatible")
      console.log(`📋 Message ID: ${result.message_id}`)
      console.log(`🔐 Checksum valid: ${result.checksum_valid}`)
    } else {
      console.log('\n❌ UNEXPECTED: Even gomavlib frame failed validation')
      console.log(`❗ Error: ${result.error}`)
    }
  } catch (error) {
    console.error('❌ Test failed:', error)
  }
}

runTest()
