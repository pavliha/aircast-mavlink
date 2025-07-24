/**
 * Test REQUEST_DATA_STREAM message CRC calculation
 * Message ID: 66, CRC_EXTRA: 148
 * Payload structure:
 * - req_message_rate (uint16_t, 2 bytes)
 * - target_system (uint8_t, 1 byte) 
 * - target_component (uint8_t, 1 byte)
 * - req_stream_id (uint8_t, 1 byte)
 * - start_stop (uint8_t, 1 byte)
 */

// Official MAVLink C implementation
class MAVLinkCRC {
  public static calculate(data: Uint8Array, crcExtra: number): number {
    let crc = 0xffff; // X25_INIT_CRC

    for (let i = 0; i < data.length; i++) {
      crc = this.crcAccumulate(data[i], crc);
    }

    crc = this.crcAccumulate(crcExtra, crc);
    return crc;
  }

  private static crcAccumulate(data: number, crcAccum: number): number {
    let tmp = data ^ (crcAccum & 0xff);
    tmp ^= (tmp << 4);
    return ((crcAccum >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4)) & 0xffff;
  }
}

function createMAVLinkV1Frame(msgId: number, sysId: number, compId: number, seq: number, payload: Uint8Array): Uint8Array {
  // MAVLink v1 frame format:
  // START(0xFE) + LEN + SEQ + SYSID + COMPID + MSGID + PAYLOAD + CRC(2)
  const len = payload.length;
  const frame = new Uint8Array(6 + len); // Header(6) + payload
  
  frame[0] = len;           // Length (for CRC calculation, excludes start byte)
  frame[1] = seq;           // Sequence
  frame[2] = sysId;         // System ID
  frame[3] = compId;        // Component ID
  frame[4] = msgId;         // Message ID
  
  // Copy payload
  for (let i = 0; i < payload.length; i++) {
    frame[5 + i] = payload[i];
  }
  
  return frame;
}

function createMAVLinkV2Frame(msgId: number, sysId: number, compId: number, seq: number, payload: Uint8Array): Uint8Array {
  // MAVLink v2 frame format:
  // START(0xFD) + LEN + INCOMPAT_FLAGS + COMPAT_FLAGS + SEQ + SYSID + COMPID + MSGID(3) + PAYLOAD + CRC(2)
  const len = payload.length;
  const frame = new Uint8Array(9 + len); // Header(9) + payload
  
  frame[0] = len;           // Length
  frame[1] = 0;             // Incompat flags
  frame[2] = 0;             // Compat flags  
  frame[3] = seq;           // Sequence
  frame[4] = sysId;         // System ID
  frame[5] = compId;        // Component ID
  frame[6] = msgId & 0xFF;  // Message ID (low byte)
  frame[7] = (msgId >> 8) & 0xFF;  // Message ID (mid byte)
  frame[8] = (msgId >> 16) & 0xFF; // Message ID (high byte)
  
  // Copy payload
  for (let i = 0; i < payload.length; i++) {
    frame[9 + i] = payload[i];
  }
  
  return frame;
}

console.log('=== REQUEST_DATA_STREAM CRC TEST ===\n');

// Your original test data
const testData = new Uint8Array([0x06, 0x00, 0xff, 0xbe, 0x42, 0x01, 0x00, 0x01, 0x01, 0x00, 0x01]);
const expectedCrc = 0x8234;
const msgId = 66; // REQUEST_DATA_STREAM
const crcExtra = 148;

console.log('Original test data:', Array.from(testData).map(b => `0x${b.toString(16).padStart(2, '0')}`).join(', '));
console.log('Expected CRC: 0x' + expectedCrc.toString(16).toUpperCase());
console.log();

// Let's decode your test data assuming it's a MAVLink v1 frame (without start byte)
console.log('=== MAVLink v1 Frame Analysis ===');
if (testData.length >= 6) {
  const len = testData[0];
  const seq = testData[1]; 
  const sysId = testData[2];
  const compId = testData[3];
  const msgIdFromData = testData[4];
  const payload = testData.subarray(5, 5 + len);
  
  console.log(`Length: ${len}`);
  console.log(`Sequence: ${seq}`);
  console.log(`System ID: 0x${sysId.toString(16)} (${sysId})`);
  console.log(`Component ID: 0x${compId.toString(16)} (${compId})`);
  console.log(`Message ID: ${msgIdFromData}`);
  console.log(`Payload (${payload.length} bytes):`, Array.from(payload).map(b => `0x${b.toString(16).padStart(2, '0')}`).join(', '));
  console.log();
  
  // Calculate CRC for this frame
  const crcResult = MAVLinkCRC.calculate(testData, crcExtra);
  console.log(`CRC Result: 0x${crcResult.toString(16).toUpperCase()}`);
  console.log(`Matches expected: ${crcResult === expectedCrc}`);
  console.log();
}

// Let's also try MAVLink v2 interpretation
console.log('=== MAVLink v2 Frame Analysis ===');
if (testData.length >= 9) {
  const len = testData[0];
  const incompatFlags = testData[1];
  const compatFlags = testData[2];
  const seq = testData[3];
  const sysId = testData[4];
  const compId = testData[5];
  const msgIdLow = testData[6];
  const msgIdMid = testData[7];
  const msgIdHigh = testData[8];
  const msgIdFromData = msgIdLow | (msgIdMid << 8) | (msgIdHigh << 16);
  const payload = testData.subarray(9, 9 + len);
  
  console.log(`Length: ${len}`);
  console.log(`Incompat Flags: 0x${incompatFlags.toString(16)}`);
  console.log(`Compat Flags: 0x${compatFlags.toString(16)}`);
  console.log(`Sequence: ${seq}`);
  console.log(`System ID: 0x${sysId.toString(16)} (${sysId})`);
  console.log(`Component ID: 0x${compId.toString(16)} (${compId})`);
  console.log(`Message ID: ${msgIdFromData}`);
  console.log(`Payload (${payload.length} bytes):`, Array.from(payload).map(b => `0x${b.toString(16).padStart(2, '0')}`).join(', '));
  console.log();
  
  // Calculate CRC for this frame
  const crcResult = MAVLinkCRC.calculate(testData, crcExtra);
  console.log(`CRC Result: 0x${crcResult.toString(16).toUpperCase()}`);
  console.log(`Matches expected: ${crcResult === expectedCrc}`);
  console.log();
}

// Let's create a known REQUEST_DATA_STREAM message and test our CRC
console.log('=== Creating Known REQUEST_DATA_STREAM Message ===');

// Create a REQUEST_DATA_STREAM payload
// req_message_rate (uint16): 1 Hz = 0x0001  
// target_system (uint8): 1 = 0x01
// target_component (uint8): 1 = 0x01  
// req_stream_id (uint8): 0 = 0x00 (MAV_DATA_STREAM_ALL)
// start_stop (uint8): 1 = 0x01 (start)
const requestPayload = new Uint8Array([
  0x01, 0x00, // req_message_rate (1 Hz, little endian)
  0x01,       // target_system
  0x01,       // target_component  
  0x00,       // req_stream_id (MAV_DATA_STREAM_ALL)
  0x01        // start_stop (start)
]);

console.log('REQUEST_DATA_STREAM payload:', Array.from(requestPayload).map(b => `0x${b.toString(16).padStart(2, '0')}`).join(', '));

// Create MAVLink v1 frame
const v1Frame = createMAVLinkV1Frame(66, 255, 190, 66, requestPayload);
console.log('MAVLink v1 frame (for CRC):', Array.from(v1Frame).map(b => `0x${b.toString(16).padStart(2, '0')}`).join(', '));
const v1Crc = MAVLinkCRC.calculate(v1Frame, crcExtra);
console.log(`MAVLink v1 CRC: 0x${v1Crc.toString(16).toUpperCase()}`);
console.log();

// Create MAVLink v2 frame  
const v2Frame = createMAVLinkV2Frame(66, 255, 190, 66, requestPayload);
console.log('MAVLink v2 frame (for CRC):', Array.from(v2Frame).map(b => `0x${b.toString(16).padStart(2, '0')}`).join(', '));
const v2Crc = MAVLinkCRC.calculate(v2Frame, crcExtra);
console.log(`MAVLink v2 CRC: 0x${v2Crc.toString(16).toUpperCase()}`);
console.log();

// Final test: Try to match the exact data from your issue
console.log('=== Trying to Match Your Exact Data ===');
// Your data: [0x06, 0x00, 0xff, 0xbe, 0x42, 0x01, 0x00, 0x01, 0x01, 0x00, 0x01]
// This looks like: LEN(6) + ?(0) + SYSID(255) + COMPID(190) + MSGID(66) + PAYLOAD(6 bytes)

if (testData[0] === 6 && testData[4] === 66) {
  // Extract the 6-byte payload
  const extractedPayload = testData.subarray(5, 11);
  console.log('Extracted payload (6 bytes):', Array.from(extractedPayload).map(b => `0x${b.toString(16).padStart(2, '0')}`).join(', '));
  
  // Decode as REQUEST_DATA_STREAM
  const reqRate = extractedPayload[0] | (extractedPayload[1] << 8);
  const targetSys = extractedPayload[2];
  const targetComp = extractedPayload[3];
  const streamId = extractedPayload[4];
  const startStop = extractedPayload[5];
  
  console.log(`Decoded REQUEST_DATA_STREAM:`);
  console.log(`  req_message_rate: ${reqRate}`);
  console.log(`  target_system: ${targetSys}`);
  console.log(`  target_component: ${targetComp}`);
  console.log(`  req_stream_id: ${streamId}`);
  console.log(`  start_stop: ${startStop}`);
}