#!/usr/bin/env node

// Direct comparison between aircast-mavlink and node-mavlink
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Use require for node-mavlink since it's CommonJS
const { MavLinkProtocolV1, MavLinkProtocolV2, minimal, common } = require('node-mavlink');

// Import our implementation
import { CommonSerializer } from './dist/dialects/common/index.js';
import { MinimalSerializer } from './dist/dialects/minimal/index.js';

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
console.log('  Payload:', ourPayload.toString('hex'));
console.log('  Field order:');
console.log('    custom_mode at 0-3:', ourPayload.readUInt32LE(0));
console.log('    type at 4:', ourPayload[4]);
console.log('    autopilot at 5:', ourPayload[5]);

console.log('\nnode-mavlink:');
console.log('  Payload:', nodePayload.toString('hex'));
console.log('  Field order:');
console.log('    custom_mode at 0-3:', nodePayload.readUInt32LE(0));
console.log('    type at 4:', nodePayload[4]);
console.log('    autopilot at 5:', nodePayload[5]);

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

// Test 2: GPS_RAW_INT
console.log('\n\n2. GPS_RAW_INT Message Comparison:');
console.log('==================================');

const gpsData = {
  time_usec: '1234567890123456',
  fix_type: 3,
  lat: 473977420,
  lon: 853452000,
  alt: 100000,
  eph: 150,
  epv: 200,
  vel: 500,
  cog: 1800,
  satellites_visible: 12
};

const ourGpsMessage = {
  message_name: 'GPS_RAW_INT',
  system_id: 1,
  component_id: 1,
  sequence: 0,
  payload: gpsData
};

const ourGpsFrame = ourSerializer.serialize(ourGpsMessage);
const ourGpsPayload = Buffer.from(ourGpsFrame.slice(6, -2));

// node-mavlink
const nodeGps = new common.GpsRawInt();
nodeGps.timeUsec = BigInt(gpsData.time_usec);
nodeGps.fixType = gpsData.fix_type;
nodeGps.lat = gpsData.lat;
nodeGps.lon = gpsData.lon;
nodeGps.alt = gpsData.alt;
nodeGps.eph = gpsData.eph;
nodeGps.epv = gpsData.epv;
nodeGps.vel = gpsData.vel;
nodeGps.cog = gpsData.cog;
nodeGps.satellitesVisible = gpsData.satellites_visible;

const nodeGpsFrame = nodeProtocol.serialize(nodeGps, 0, 1, 1);
const nodeGpsPayload = nodeGpsFrame.slice(6, -2);

console.log('Our implementation:');
console.log('  Payload:', ourGpsPayload.toString('hex'));
console.log('  time_usec at 0-7:', ourGpsPayload.readBigUInt64LE(0).toString());
console.log('  lat at 8-11:', ourGpsPayload.readInt32LE(8));
console.log('  lon at 12-15:', ourGpsPayload.readInt32LE(12));

console.log('\nnode-mavlink:');
console.log('  Payload:', nodeGpsPayload.toString('hex'));

console.log('\nPayload comparison:', ourGpsPayload.equals(nodeGpsPayload) ? '✅ MATCH' : '❌ MISMATCH');

// Test 3: PROTOCOL_VERSION (from minimal dialect)
console.log('\n\n3. PROTOCOL_VERSION Message Comparison:');
console.log('=======================================');

const protocolVersionData = {
  version: 200,
  min_version: 100,
  max_version: 300,
  spec_version_hash: [0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF, 0x11, 0x22],
  library_version_hash: [0x33, 0x44, 0x55, 0x66, 0x77, 0x88, 0x99, 0xAA]
};

// Our implementation
const ourMinimalSerializer = new MinimalSerializer();
const ourProtocolVersion = {
  message_name: 'PROTOCOL_VERSION',
  system_id: 1,
  component_id: 1,
  sequence: 0,
  payload: protocolVersionData
};

const ourPVFrame = ourMinimalSerializer.serialize(ourProtocolVersion);
let ourPVPayload;
if (ourPVFrame[0] === 0xFD) {
  ourPVPayload = Buffer.from(ourPVFrame.slice(10, -2));
} else {
  ourPVPayload = Buffer.from(ourPVFrame.slice(6, -2));
}

// node-mavlink - uses v2 for message ID > 255
const nodeProtocolV2 = new MavLinkProtocolV2();
const nodePV = new minimal.ProtocolVersion();
nodePV.version = protocolVersionData.version;
nodePV.minVersion = protocolVersionData.min_version;
nodePV.maxVersion = protocolVersionData.max_version;
nodePV.specVersionHash = protocolVersionData.spec_version_hash;
nodePV.libraryVersionHash = protocolVersionData.library_version_hash;

const nodePVFrame = nodeProtocolV2.serialize(nodePV, 0, 1, 1);
let nodePVPayload;
if (nodePVFrame[0] === 0xFD) {
  nodePVPayload = nodePVFrame.slice(10, -2);
} else {
  nodePVPayload = nodePVFrame.slice(6, -2);
}

console.log('Our implementation:');
console.log('  Payload:', ourPVPayload.toString('hex'));
console.log('  Payload length:', ourPVPayload.length);
console.log('  Field order:');
console.log('    spec_version_hash at 0-7:', [...ourPVPayload.slice(0, 8)]);
console.log('    library_version_hash at 8-15:', [...ourPVPayload.slice(8, 16)]);
console.log('    version at 16-17:', ourPVPayload.readUInt16LE(16));

console.log('\nnode-mavlink:');
console.log('  Payload:', nodePVPayload.toString('hex'));
console.log('  Payload length:', nodePVPayload.length);

console.log('\nPayload comparison:', ourPVPayload.equals(nodePVPayload) ? '✅ MATCH' : '❌ MISMATCH');

// Summary
console.log('\n\n=== SUMMARY ===');
console.log('HEARTBEAT:', ourPayload.equals(nodePayload) ? '✅ MATCH' : '❌ MISMATCH');
console.log('GPS_RAW_INT:', ourGpsPayload.equals(nodeGpsPayload) ? '✅ MATCH' : '❌ MISMATCH');
console.log('PROTOCOL_VERSION:', ourPVPayload.equals(nodePVPayload) ? '✅ MATCH' : '❌ MISMATCH');