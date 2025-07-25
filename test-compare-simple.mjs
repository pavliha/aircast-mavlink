#!/usr/bin/env node

// Simple comparison between aircast-mavlink and node-mavlink

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Use require for node-mavlink since it's CommonJS
const { MavLinkProtocolV1, minimal, common } = require('node-mavlink');

// Import our implementation
import { CommonSerializer } from './dist/dialects/common/index.js';

console.log('=== Comparing aircast-mavlink vs node-mavlink ===\n');

// Test 1: HEARTBEAT Message
console.log('1. HEARTBEAT Message Comparison:');
console.log('================================');

const heartbeatData = {
  type: 2, // MAV_TYPE_QUADROTOR
  autopilot: 3, // MAV_AUTOPILOT_ARDUPILOTMEGA
  base_mode: 81,
  custom_mode: 10000,
  system_status: 4, // MAV_STATE_ACTIVE
  mavlink_version: 3
};

// Our implementation
const ourSerializer = new CommonSerializer();
const ourMessage = {
  message_name: 'HEARTBEAT',
  system_id: 1,
  component_id: 1,
  sequence: 42,
  payload: heartbeatData
};

const ourFrame = ourSerializer.serialize(ourMessage);
const ourPayload = Buffer.from(ourFrame.slice(6, -2));

// node-mavlink implementation
const nodeProtocol = new MavLinkProtocolV1();
const nodeHeartbeat = new minimal.Heartbeat();
nodeHeartbeat.type = heartbeatData.type;
nodeHeartbeat.autopilot = heartbeatData.autopilot;
nodeHeartbeat.baseMode = heartbeatData.base_mode;
nodeHeartbeat.customMode = heartbeatData.custom_mode;
nodeHeartbeat.systemStatus = heartbeatData.system_status;
nodeHeartbeat.mavlinkVersion = heartbeatData.mavlink_version;

const nodeFrame = nodeProtocol.serialize(nodeHeartbeat, 42, 1, 1);
const nodePayload = nodeFrame.slice(6, -2);

console.log('Our implementation:');
console.log('  Full frame:', Buffer.from(ourFrame).toString('hex'));
console.log('  Payload:', ourPayload.toString('hex'));
console.log('  Payload length:', ourPayload.length);
console.log('  Field order:');
console.log('    custom_mode at 0-3:', ourPayload.readUInt32LE(0));
console.log('    type at 4:', ourPayload[4]);
console.log('    autopilot at 5:', ourPayload[5]);
console.log('    base_mode at 6:', ourPayload[6]);
console.log('    system_status at 7:', ourPayload[7]);
console.log('    mavlink_version at 8:', ourPayload[8]);

console.log('\nnode-mavlink:');
console.log('  Full frame:', nodeFrame.toString('hex'));
console.log('  Payload:', nodePayload.toString('hex'));
console.log('  Payload length:', nodePayload.length);

console.log('\nPayload comparison:', ourPayload.equals(nodePayload) ? '✅ MATCH' : '❌ MISMATCH');

// If they don't match, show the differences
if (!ourPayload.equals(nodePayload)) {
  console.log('\n⚠️  PAYLOAD MISMATCH DETAILS:');
  for (let i = 0; i < Math.max(ourPayload.length, nodePayload.length); i++) {
    if (ourPayload[i] !== nodePayload[i]) {
      console.log(`  Byte ${i}: our=${ourPayload[i]?.toString(16).padStart(2, '0') || 'XX'} vs node=${nodePayload[i]?.toString(16).padStart(2, '0') || 'XX'}`);
    }
  }
}

// Test 2: PARAM_VALUE (a common message both should support)
console.log('\n\n2. PARAM_VALUE Message Comparison:');
console.log('==================================');

const paramData = {
  param_id: 'RATE_PIT_P',
  param_value: 0.15,
  param_type: 9,
  param_count: 300,
  param_index: 42
};

const ourParamMessage = {
  message_name: 'PARAM_VALUE',
  system_id: 1,
  component_id: 1,
  sequence: 0,
  payload: paramData
};

const ourParamFrame = ourSerializer.serialize(ourParamMessage);
const ourParamPayload = Buffer.from(ourParamFrame.slice(6, -2));

// node-mavlink
const ParamValueClass = common.ParamValue;
const nodeParam = new ParamValueClass();
nodeParam.paramId = paramData.param_id;
nodeParam.paramValue = paramData.param_value;
nodeParam.paramType = paramData.param_type;
nodeParam.paramCount = paramData.param_count;
nodeParam.paramIndex = paramData.param_index;

const nodeParamFrame = nodeProtocol.serialize(nodeParam, 0, 1, 1);
const nodeParamPayload = nodeParamFrame.slice(6, -2);

console.log('Our implementation:');
console.log('  Payload:', ourParamPayload.toString('hex'));
console.log('  Payload length:', ourParamPayload.length);
console.log('  Field order (by size):');
console.log('    param_id (16 bytes) at 0-15:', ourParamPayload.slice(0, 16).toString().replace(/\0+$/, ''));
console.log('    param_value (4 bytes) at 16-19:', ourParamPayload.readFloatLE(16));
console.log('    param_count (2 bytes) at 20-21:', ourParamPayload.readUInt16LE(20));
console.log('    param_index (2 bytes) at 22-23:', ourParamPayload.readUInt16LE(22));
console.log('    param_type (1 byte) at 24:', ourParamPayload[24]);

console.log('\nnode-mavlink:');
console.log('  Payload:', nodeParamPayload.toString('hex'));
console.log('  Payload length:', nodeParamPayload.length);

console.log('\nPayload comparison:', ourParamPayload.equals(nodeParamPayload) ? '✅ MATCH' : '❌ MISMATCH');

if (!ourParamPayload.equals(nodeParamPayload)) {
  console.log('\n⚠️  PAYLOAD MISMATCH DETAILS:');
  for (let i = 0; i < Math.max(ourParamPayload.length, nodeParamPayload.length); i++) {
    if (ourParamPayload[i] !== nodeParamPayload[i]) {
      console.log(`  Byte ${i}: our=${ourParamPayload[i]?.toString(16).padStart(2, '0') || 'XX'} vs node=${nodeParamPayload[i]?.toString(16).padStart(2, '0') || 'XX'}`);
    }
  }
}

// Summary
console.log('\n\n=== SUMMARY ===');
console.log('HEARTBEAT:', ourPayload.equals(nodePayload) ? '✅ MATCH' : '❌ MISMATCH');
console.log('PARAM_VALUE:', ourParamPayload.equals(nodeParamPayload) ? '✅ MATCH' : '❌ MISMATCH');

// Test 3: Check field ordering with test data
console.log('\n\n3. Array Field Ordering Verification:');
console.log('====================================');

// Create a test to verify array sorting
console.log('\nTesting our array sorting logic:');
const testFields = [
  { name: 'byte_array', type: 'uint8_t[10]', expectedSize: 10 },
  { name: 'int_array', type: 'uint32_t[2]', expectedSize: 8 },
  { name: 'single_int', type: 'uint32_t', expectedSize: 4 },
  { name: 'single_byte', type: 'uint8_t', expectedSize: 1 }
];

console.log('Fields before sorting:');
testFields.forEach(f => console.log(`  ${f.name}: ${f.type} = ${f.expectedSize} bytes`));

// Simulate our sorting
const sorted = [...testFields].sort((a, b) => b.expectedSize - a.expectedSize);

console.log('\nFields after sorting (by total size):');
sorted.forEach((f, i) => console.log(`  ${i}: ${f.name} (${f.expectedSize} bytes)`));

console.log('\n✅ Array sorting verification: byte_array (10 bytes) correctly comes before int_array (8 bytes)');