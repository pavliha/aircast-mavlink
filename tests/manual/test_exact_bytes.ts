#!/usr/bin/env tsx

// Test the exact MCRF4XX algorithm on the exact bytes from PCAP analysis
;(() => {
  function mcrf4xxCrc(data: Uint8Array, crcExtra: number): number {
    let crc = 0xffff

    // Process all message bytes using MCRF4XX algorithm
    for (let i = 0; i < data.length; i++) {
      let tmp = data[i] ^ (crc & 0xff)
      tmp ^= tmp << 4
      crc = ((crc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4)) & 0xffff
    }

    // Add CRC_EXTRA byte using the same algorithm
    let tmp = crcExtra ^ (crc & 0xff)
    tmp ^= tmp << 4
    crc = ((crc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4)) & 0xffff

    return crc
  }

  // Test exact bytes from PCAP analysis: fe 06 00 01 01 42 00 02 b2 01 00 01 3c 00
  // The message data for CRC calculation should be: 06 00 01 01 42 00 02 b2 01 00 01
  const messageData = new Uint8Array([
    0x06, 0x00, 0x01, 0x01, 0x42, 0x00, 0x02, 0xb2, 0x01, 0x00, 0x01,
  ])
  const crcExtra = 148 // CRC_EXTRA for REQUEST_DATA_STREAM (ID 66)

  console.log('Testing exact PCAP bytes...')
  console.log(
    'Message data:',
    Array.from(messageData)
      .map((b: number) => '0x' + b.toString(16).padStart(2, '0'))
      .join(' ')
  )
  console.log('CRC_EXTRA:', crcExtra)

  const calculatedCrc = mcrf4xxCrc(messageData, crcExtra)
  console.log(`Calculated CRC: 0x${calculatedCrc.toString(16).padStart(4, '0')}`)
  console.log(`Expected (PCAP): 0x003c`)
  console.log(`Match: ${calculatedCrc === 0x003c ? '✅ Yes!' : '❌ No'}`)

  if (calculatedCrc !== 0x003c) {
    console.log('\n🔍 Let me try different interpretations...')

    // Maybe the CRC_EXTRA value is wrong?
    console.log('\nTrying different CRC_EXTRA values:')
    for (let crcExtraTest = 0; crcExtraTest <= 255; crcExtraTest++) {
      const testCrc = mcrf4xxCrc(messageData, crcExtraTest)
      if (testCrc === 0x003c) {
        console.log(`🎯 Found match! CRC_EXTRA=${crcExtraTest} produces 0x003c`)
        break
      }
    }

    // Maybe the message ID is different in the CRC calculation?
    console.log('\nTrying message data without message ID:')
    const messageDataNoId = new Uint8Array([
      0x06, 0x00, 0x01, 0x01, 0x00, 0x02, 0xb2, 0x01, 0x00, 0x01,
    ])
    const crcNoId = mcrf4xxCrc(messageDataNoId, crcExtra)
    console.log(`CRC without message ID: 0x${crcNoId.toString(16).padStart(4, '0')}`)

    // Maybe it's a different algorithm entirely?
    console.log('\nTesting with table-based CRC for comparison...')
  }
})()
