const { CommonParser, CommonSerializer } = require('./dist/dialects/common');

const parser = new CommonParser();
const serializer = new CommonSerializer();

// Create a SYS_STATUS message like the test case
const message = {
  message_name: 'SYS_STATUS',
  system_id: 255,
  component_id: 190,
  sequence: 5,
  payload: {
    onboard_control_sensors_present: 1073741823,
    onboard_control_sensors_enabled: 536870911,
    onboard_control_sensors_health: 268435455,
    load: 500,
    voltage_battery: 11800,
    current_battery: 1500,
    battery_remaining: 85,
    drop_rate_comm: 12,
    errors_comm: 5,
    errors_count1: 0,
    errors_count2: 0,
    errors_count3: 0,
    errors_count4: 0
    // Omitting extension fields - they should default to 0
  }
};

console.log('Input message:', JSON.stringify(message, null, 2));

try {
  const serialized = serializer.serialize(message);
  console.log('Serialized bytes:', Array.from(serialized).map(b => '0x' + b.toString(16).padStart(2, '0')).join(', '));
  console.log('Length:', serialized.length);
  console.log('Payload length:', serialized.length - 8); // subtract header and checksum
  
  // Extract just the payload part for comparison
  const payload = serialized.slice(6, -2); // remove header (6 bytes) and checksum (2 bytes)
  console.log('Payload only:', Array.from(payload).map(b => '0x' + b.toString(16).padStart(2, '0')).join(', '));
  console.log('Payload size:', payload.length);
  
  // Parse it back
  const parsed = parser.parseBytes(serialized);
  console.log('Parsed back successfully, payload:', JSON.stringify(parsed[0].payload, null, 2));
} catch (error) {
  console.error('Error:', error.message);
}
