#!/usr/bin/env tsx

// Debug CRC calculation step by step
;(() => {
  const data = new Uint8Array([0x06, 0x00, 0xff, 0xbe, 0x42, 0x01, 0x00, 0x01, 0x00, 0x01, 0x01])
  const crcExtra = 148

  console.log('🔍 Step-by-step CRC calculation debug')
  console.log(
    'Data:',
    Array.from(data)
      .map((b: number) => '0x' + b.toString(16).padStart(2, '0'))
      .join(' ')
  )
  console.log('CRC_EXTRA:', crcExtra, '(0x' + crcExtra.toString(16) + ')')
  console.log('Expected result: 0xc453')
  console.log('Our result: 0xf502')
  console.log()

  // Our current implementation
  function calculateMCRF4XX_Current(data: Uint8Array, crcExtra: number): number {
    let crc = 0xffff

    console.log('Initial CRC: 0x' + crc.toString(16))

    for (let i = 0; i < data.length; i++) {
      const byte = data[i]
      let tmp = byte ^ (crc & 0xff)
      tmp ^= tmp << 4
      crc = ((crc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4)) & 0xffff
      console.log(`Byte ${i} (0x${byte.toString(16)}): CRC = 0x${crc.toString(16)}`)
    }

    console.log('After data, before CRC_EXTRA: 0x' + crc.toString(16))

    let tmp = crcExtra ^ (crc & 0xff)
    tmp ^= tmp << 4
    crc = ((crc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4)) & 0xffff

    console.log('Final CRC after CRC_EXTRA: 0x' + crc.toString(16))
    return crc
  }

  // Test with the official MAVLink C algorithm implementation
  function calculateMCRF4XX_Official(data: Uint8Array, crcExtra: number): number {
    let crc = 0xffff

    // Process each byte
    for (let i = 0; i < data.length; i++) {
      let tmp = data[i] ^ (crc & 0xff)
      tmp ^= tmp << 4
      crc = ((crc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4)) & 0xffff
    }

    // Add CRC_EXTRA
    let tmp = crcExtra ^ (crc & 0xff)
    tmp ^= tmp << 4
    crc = ((crc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4)) & 0xffff

    return crc
  }

  console.log('\n=== CURRENT IMPLEMENTATION ===')
  const result1 = calculateMCRF4XX_Current(data, crcExtra)

  console.log('\n=== OFFICIAL ALGORITHM ===')
  const result2 = calculateMCRF4XX_Official(data, crcExtra)

  console.log('\n=== RESULTS ===')
  console.log('Current impl:', '0x' + result1.toString(16))
  console.log('Official impl:', '0x' + result2.toString(16))
  console.log('Expected (gomavlib):', '0xc453')
  console.log('Match current?', result1 === 0xc453 ? '✅' : '❌')
  console.log('Match official?', result2 === 0xc453 ? '✅' : '❌')

  // Let's also try with different CRC_EXTRA values to see if we have the wrong value
  console.log('\n=== TESTING DIFFERENT CRC_EXTRA VALUES ===')
  for (let testCrcExtra = 140; testCrcExtra <= 155; testCrcExtra++) {
    const testResult = calculateMCRF4XX_Official(data, testCrcExtra)
    if (testResult === 0xc453) {
      console.log(
        `🎯 FOUND IT! CRC_EXTRA ${testCrcExtra} (0x${testCrcExtra.toString(16)}) gives 0x${testResult.toString(16)}`
      )
    }
  }
})()
