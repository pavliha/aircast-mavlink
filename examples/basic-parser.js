// Basic MAVLink parser example
// Shows how to parse MAVLink messages from raw bytes

const { MAVLinkParser } = require('../dist/parser');

// Create parser instance
const parser = new MAVLinkParser({
  validateCRC: false, // Disable CRC validation for demo
  allowProtocolV1: true,
  allowProtocolV2: true
});

// Example HEARTBEAT message (MAVLink v1)
const heartbeatBytes = new Uint8Array([
  0xFE, 0x09, 0x00, 0x01, 0x01, 0x00, // Header
  0x04, 0x03, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // Payload
  0xB6, 0x3C // Checksum
]);

console.log('=== Basic MAVLink Parser Example ===\n');

// Parse a single message
console.log('1. Parsing single HEARTBEAT message:');
try {
  const message = parser.parseMessage(heartbeatBytes);
  console.log('✓ Parsed successfully:');
  console.log({
    message_name: message.message_name,
    system_id: message.system_id,
    component_id: message.component_id,
    protocol_version: message.protocol_version,
    payload: message.payload
  });
} catch (error) {
  console.error('✗ Parse error:', error.message);
}

console.log('\n2. Parsing streaming data:');

// Simulate streaming data - send partial message first
const partialData = heartbeatBytes.slice(0, 10);
console.log('   → Sending partial data (10 bytes)...');
let messages = parser.parseBytes(partialData);
console.log(`   → Got ${messages.length} messages`);

// Send remaining data
const remainingData = heartbeatBytes.slice(10);
console.log('   → Sending remaining data (7 bytes)...');
messages = parser.parseBytes(remainingData);
console.log(`   → Got ${messages.length} messages`);

if (messages.length > 0) {
  console.log('   ✓ Complete message received:');
  console.log(`     ${messages[0].message_name} from system ${messages[0].system_id}`);
}

console.log('\n3. Handling multiple messages:');

// Concatenate two HEARTBEAT messages
const doubleHeartbeat = new Uint8Array([
  // First message
  0xFE, 0x09, 0x00, 0x01, 0x01, 0x00,
  0x04, 0x03, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0xB6, 0x3C,
  // Second message with different sequence
  0xFE, 0x09, 0x02, 0x01, 0x01, 0x00,
  0x04, 0x03, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0xB7, 0x3E
]);

messages = parser.parseBytes(doubleHeartbeat);
console.log(`   → Parsed ${messages.length} messages from buffer`);
messages.forEach((msg, i) => {
  console.log(`   Message ${i + 1}: ${msg.message_name} (seq: ${msg.sequence})`);
});

console.log('\n4. Error handling with invalid data:');

// Mix invalid data with valid message
const mixedData = new Uint8Array([
  0x12, 0x34, 0x56, // Invalid bytes
  ...heartbeatBytes // Valid HEARTBEAT
]);

messages = parser.parseBytes(mixedData);
console.log(`   → Found ${messages.length} valid messages in mixed data`);

console.log('\n=== Example Complete ===');