const { CommonParser, CommonSerializer } = require('./dist/dialects/common');

const parser = new CommonParser();
const serializer = new CommonSerializer();

// Create a REQUEST_DATA_STREAM message like the working test
const message = {
  message_name: 'REQUEST_DATA_STREAM',
  system_id: 255,
  component_id: 190,
  sequence: 66,
  payload: {
    req_message_rate: 1,
    target_system: 1,
    target_component: 1,
    req_stream_id: 0,
    start_stop: 1
  }
};

console.log('Input message:', JSON.stringify(message, null, 2));

try {
  const serialized = serializer.serialize(message);
  console.log('Serialized bytes:', Array.from(serialized).map(b => '0x' + b.toString(16).padStart(2, '0')).join(', '));
  console.log('Length:', serialized.length);
  
  // Parse it back
  const parsed = parser.parseBytes(serialized);
  console.log('Parsed back:', JSON.stringify(parsed[0], null, 2));
} catch (error) {
  console.error('Error:', error.message);
}
