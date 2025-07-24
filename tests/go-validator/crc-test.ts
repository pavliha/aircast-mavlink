/**
 * Test case to compare CRC implementations
 * Testing with the data you provided that shows the mismatch
 */

// Your current implementation
class MAVLinkCRC_Current {
  public static calculate(data: Uint8Array, crcExtra: number): number {
    let crc = 0xffff;

    // Process all message bytes using MCRF4XX algorithm
    for (let i = 0; i < data.length; i++) {
      let tmp = data[i] ^ (crc & 0xff);
      tmp ^= (tmp << 4);
      crc = ((crc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4)) & 0xffff;
    }

    // Add CRC_EXTRA byte using the same algorithm
    let tmp = crcExtra ^ (crc & 0xff);
    tmp ^= (tmp << 4);
    crc = ((crc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4)) & 0xffff;

    return crc;
  }
}

// Official MAVLink C implementation (converted to TypeScript)
class MAVLinkCRC_Official {
  public static calculate(data: Uint8Array, crcExtra: number): number {
    let crc = 0xffff; // X25_INIT_CRC

    // Process all message bytes using official crc_accumulate algorithm
    for (let i = 0; i < data.length; i++) {
      crc = this.crcAccumulate(data[i], crc);
    }

    // Add CRC_EXTRA byte using the same algorithm
    crc = this.crcAccumulate(crcExtra, crc);

    return crc;
  }

  private static crcAccumulate(data: number, crcAccum: number): number {
    let tmp = data ^ (crcAccum & 0xff);
    tmp ^= (tmp << 4);
    return ((crcAccum >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4)) & 0xffff;
  }
}

// Test with your problematic data
const testData = new Uint8Array([0x06, 0x00, 0xff, 0xbe, 0x42, 0x01, 0x00, 0x01, 0x01, 0x00, 0x01]);
const crcExtra = 148;

console.log('Test Data:', Array.from(testData).map(b => `0x${b.toString(16).padStart(2, '0')}`).join(', '));
console.log('CRC_EXTRA:', crcExtra);
console.log();

const currentResult = MAVLinkCRC_Current.calculate(testData, crcExtra);
const officialResult = MAVLinkCRC_Official.calculate(testData, crcExtra);

console.log('Current Implementation Result: 0x' + currentResult.toString(16));
console.log('Official Implementation Result: 0x' + officialResult.toString(16));
console.log('Expected (gomavlib): 0x8234');
console.log();

console.log('Current matches expected:', currentResult === 0x8234);
console.log('Official matches expected:', officialResult === 0x8234);