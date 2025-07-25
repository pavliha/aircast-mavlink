const { CommonParser, CommonSerializer } = require('./dist/dialects/common');

const parser = new CommonParser();
const serializer = new CommonSerializer();

// Create a SYS_STATUS message - all core fields should be preserved
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
    errors_count1: 0,  // Core field - should NOT be trimmed
    errors_count2: 0,  // Core field - should NOT be trimmed
    errors_count3: 0,  // Core field - should NOT be trimmed
    errors_count4: 0   // Core field - should NOT be trimmed
    // Extension fields omitted - these SHOULD be trimmed since they're all 0
  }
};

console.log('Testing SYS_STATUS core payload preservation...');

try {
  const serialized = serializer.serialize(message);
  
  // Extract the payload (skip header and checksum)
  const payload = serialized.slice(6, -2);
  
  console.log('Expected payload size: 31 bytes (core fields only)');
  console.log('Actual payload size:', payload.length, 'bytes');
  console.log('Payload hex:', Array.from(payload).map(b => '0x' + b.toString(16).padStart(2, '0')).join(' '));
  
  if (payload.length === 31) {
    console.log('✅ SUCCESS: Payload is exactly 31 bytes as expected\!');
  } else {
    console.log('❌ ISSUE: Payload should be 31 bytes but got', payload.length);
  }
  
  // Parse it back
  const parsed = parser.parseBytes(serialized);
  console.log('Round-trip successful:', parsed[0].crc_ok);
  
} catch (error) {
  console.error('Error:', error.message);
}
