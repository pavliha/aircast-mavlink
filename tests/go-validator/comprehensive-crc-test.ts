/**
 * Comprehensive CRC test to identify the mismatch
 * Testing different interpretations of the data
 */

// Official MAVLink C implementation (converted to TypeScript)
class MAVLinkCRC {
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

// Test data from your issue
const testData = new Uint8Array([0x06, 0x00, 0xff, 0xbe, 0x42, 0x01, 0x00, 0x01, 0x01, 0x00, 0x01]);
const expectedCrc = 0x8234;

console.log('=== COMPREHENSIVE CRC ANALYSIS ===\n');
console.log('Test Data:', Array.from(testData).map(b => `0x${b.toString(16).padStart(2, '0')}`).join(', '));
console.log('Expected Result: 0x' + expectedCrc.toString(16).toUpperCase());
console.log();

// Test 1: With CRC_EXTRA 148 (REQUEST_DATA_STREAM)
console.log('Test 1: Using CRC_EXTRA 148 (REQUEST_DATA_STREAM)');
let result1 = MAVLinkCRC.calculate(testData, 148);
console.log('Result: 0x' + result1.toString(16).toUpperCase());
console.log('Matches:', result1 === expectedCrc);
console.log();

// Test 2: Try different CRC_EXTRA values to see if we can match
console.log('Test 2: Trying different CRC_EXTRA values...');
for (let crcExtra = 0; crcExtra < 256; crcExtra++) {
  let result = MAVLinkCRC.calculate(testData, crcExtra);
  if (result === expectedCrc) {
    console.log(`MATCH! CRC_EXTRA = ${crcExtra} gives 0x${result.toString(16).toUpperCase()}`);
  }
}
console.log();

// Test 3: Try excluding the first byte (length might not be included)
console.log('Test 3: Excluding first byte (length)');
const testDataNoLength = testData.subarray(1);
console.log('Data without length:', Array.from(testDataNoLength).map(b => `0x${b.toString(16).padStart(2, '0')}`).join(', '));
let result3 = MAVLinkCRC.calculate(testDataNoLength, 148);
console.log('Result: 0x' + result3.toString(16).toUpperCase());
console.log('Matches:', result3 === expectedCrc);
console.log();

// Test 4: Try excluding last byte
console.log('Test 4: Excluding last byte');
const testDataNoLast = testData.subarray(0, -1);
console.log('Data without last byte:', Array.from(testDataNoLast).map(b => `0x${b.toString(16).padStart(2, '0')}`).join(', '));
let result4 = MAVLinkCRC.calculate(testDataNoLast, 148);
console.log('Result: 0x' + result4.toString(16).toUpperCase());
console.log('Matches:', result4 === expectedCrc);
console.log();

// Test 5: Try with MAVLink v2 format interpretation
// In MAVLink v2, the frame format is:
// START(1) + LEN(1) + INCOMPAT_FLAGS(1) + COMPAT_FLAGS(1) + SEQ(1) + SYSID(1) + COMPID(1) + MSGID(3) + PAYLOAD + CHECKSUM(2)
console.log('Test 5: MAVLink v2 frame format interpretation');
console.log('Assuming data represents: LEN + INCOMPAT + COMPAT + SEQ + SYSID + COMPID + MSGID(3) + PAYLOAD...');
// Let's try just the payload part (after MSGID)
if (testData.length > 9) { // LEN(1) + FLAGS(2) + SEQ(1) + SYSID(1) + COMPID(1) + MSGID(3) = 9 bytes
  const payloadData = testData.subarray(9);
  console.log('Payload data:', Array.from(payloadData).map(b => `0x${b.toString(16).padStart(2, '0')}`).join(', '));
  let result5 = MAVLinkCRC.calculate(payloadData, 148);
  console.log('Result: 0x' + result5.toString(16).toUpperCase());
  console.log('Matches:', result5 === expectedCrc);
  console.log();
}

// Test 6: Try with full MAVLink header (everything except start byte and checksum)
console.log('Test 6: Full MAVLink frame data (should be what CRC covers)');
// According to MAVLink spec, CRC covers everything except START byte and CHECKSUM itself
// Your data might already be this format
let result6 = MAVLinkCRC.calculate(testData, 148);
console.log('Result: 0x' + result6.toString(16).toUpperCase());
console.log('Matches:', result6 === expectedCrc);
console.log();

// Test 7: Let's try reverse engineering - what would the data need to be?
console.log('Test 7: Reverse engineering attempt...');
console.log('Trying with MESSAGE_ID 66 (REQUEST_DATA_STREAM) different CRC_EXTRA values from different dialects...');

// Common CRC_EXTRA values for message ID 66 in different dialects
const possibleCrcExtras = [148, 21, 47, 132, 67, 43]; // Different dialect values
for (let crcExtra of possibleCrcExtras) {
  let result = MAVLinkCRC.calculate(testData, crcExtra);
  console.log(`CRC_EXTRA ${crcExtra}: 0x${result.toString(16).toUpperCase()}`);
  if (result === expectedCrc) {
    console.log(`*** MATCH! CRC_EXTRA = ${crcExtra} ***`);
  }
}