#!/usr/bin/env node

// Test our implementation against a real SITL instance

import net from 'net';
import { CommonSerializer, CommonParser } from './dist/dialects/common/index.js';

const SITL_HOST = 'dev.aircast.one';
const SITL_PORT = 5762;

console.log('🚁 Testing aircast-mavlink against SITL\n');

const serializer = new CommonSerializer();
const parser = new CommonParser();

const client = net.createConnection(SITL_PORT, SITL_HOST);

let sequence = 0;
let receivedMessages = 0;

client.on('connect', () => {
  console.log('✅ Connected to SITL\n');
  
  // Send heartbeat every second
  const heartbeatInterval = setInterval(() => {
    const heartbeat = {
      message_name: 'HEARTBEAT',
      system_id: 255,
      component_id: 190,
      sequence: sequence++,
      payload: {
        type: 6, // MAV_TYPE_GCS
        autopilot: 8, // MAV_AUTOPILOT_INVALID
        base_mode: 0,
        custom_mode: 0,
        system_status: 4, // MAV_STATE_ACTIVE
        mavlink_version: 3
      }
    };
    
    const frame = serializer.serialize(heartbeat);
    client.write(Buffer.from(frame));
    console.log(`📤 Sent HEARTBEAT #${sequence}`);
  }, 1000);
  
  // Close after 5 seconds
  setTimeout(() => {
    clearInterval(heartbeatInterval);
    console.log(`\n📊 Test complete. Received ${receivedMessages} messages from SITL`);
    client.end();
    process.exit(0);
  }, 5000);
});

// Buffer for incoming data
let buffer = Buffer.alloc(0);

client.on('data', (data) => {
  buffer = Buffer.concat([buffer, data]);
  
  // Try to parse messages
  while (buffer.length > 0) {
    try {
      const result = parser.parse(buffer);
      
      if (result && result.frame) {
        receivedMessages++;
        
        // Show heartbeats and interesting messages
        if (result.message.message_name === 'HEARTBEAT' && result.frame.system_id === 1) {
          const payload = result.message.payload;
          const isArmed = (payload.base_mode & 128) !== 0;
          console.log(`📥 HEARTBEAT from vehicle: mode=${payload.base_mode} armed=${isArmed}`);
        } else if (result.message.message_name === 'STATUSTEXT') {
          const text = result.message.payload.text.replace(/\0+$/, '');
          if (text) {
            console.log(`📝 STATUS: ${text}`);
          }
        }
        
        // Remove parsed bytes from buffer
        buffer = buffer.slice(result.bytesConsumed);
      } else {
        // Need more data
        break;
      }
    } catch (error) {
      console.error('Parse error:', error);
      // Skip bad byte and try again
      buffer = buffer.slice(1);
    }
  }
});

client.on('error', (err) => {
  console.error('❌ Connection error:', err.message);
  process.exit(1);
});