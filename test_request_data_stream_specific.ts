#!/usr/bin/env tsx

import { CommonSerializer } from './src/generated/dialects/common/index.js';
import { createConnection } from 'net';

const serializer = new CommonSerializer();

async function testRequestDataStreamSpecific() {
  console.log('🚀 Testing REQUEST_DATA_STREAM response specifically...\n');
  
  return new Promise<void>((resolve) => {
    let sequenceNumber = 0;
    let gpsMessageCount = 0;
    let dataStreamResponseCount = 0;
    
    const socket = createConnection({ host: 'dev.aircast.one', port: 5760 }, () => {
      console.log('✅ Connected to SITL');
      
      // Send heartbeat first
      const heartbeat = {
        message_name: 'HEARTBEAT',
        system_id: 255,
        component_id: 190,
        sequence: sequenceNumber++,
        payload: {
          type: 6, // GCS
          autopilot: 0,
          base_mode: 0,
          custom_mode: 0,
          system_status: 4,
          mavlink_version: 3
        }
      };
      
      console.log('📤 Sending HEARTBEAT...');
      socket.write(serializer.serialize(heartbeat));
      
      // Wait, then send REQUEST_DATA_STREAM for GPS
      setTimeout(() => {
        const requestDataStream = {
          message_name: 'REQUEST_DATA_STREAM',
          system_id: 255,
          component_id: 190,
          sequence: sequenceNumber++,
          payload: {
            target_system: 1,
            target_component: 0,
            req_stream_id: 1, // GPS stream
            req_message_rate: 2, // 2 Hz
            start_stop: 1 // Start
          }
        };
        
        console.log('📤 Sending REQUEST_DATA_STREAM for GPS (stream ID 1, 2Hz)...');
        const frame = serializer.serialize(requestDataStream);
        console.log('   Frame checksum:', '0x' + (frame[frame.length-2] | (frame[frame.length-1] << 8)).toString(16).padStart(4, '0'));
        socket.write(frame);
        
        console.log('⏳ Monitoring responses for GPS and DATA_STREAM messages...\n');
        
        // Close after 8 seconds
        setTimeout(() => {
          console.log(`\n📊 RESULTS SUMMARY:`);
          console.log(`   GPS_RAW_INT messages (ID 24): ${gpsMessageCount}`);
          console.log(`   DATA_STREAM responses (ID 67): ${dataStreamResponseCount}`);
          
          if (gpsMessageCount > 0) {
            console.log('\n🎉 ✅ SUCCESS! REQUEST_DATA_STREAM is working!');
            console.log('   SITL is sending GPS telemetry as requested');
          } else if (dataStreamResponseCount > 0) {
            console.log('\n⚠️  PARTIAL SUCCESS: SITL acknowledged the request but no GPS data yet');
          } else {
            console.log('\n❌ REQUEST_DATA_STREAM may not be working as expected');
          }
          
          socket.end();
          resolve();
        }, 8000);
        
      }, 1000);
    });
    
    let receivedData = Buffer.alloc(0);
    
    socket.on('data', (data) => {
      receivedData = Buffer.concat([receivedData, data]);
      
      // Parse MAVLink messages
      while (receivedData.length > 0) {
        const magicIndex = receivedData.indexOf(0xFE);
        if (magicIndex === -1) break;
        
        if (magicIndex > 0) {
          receivedData = receivedData.slice(magicIndex);
        }
        
        if (receivedData.length < 8) break;
        
        const length = receivedData[1];
        const totalFrameSize = length + 8;
        
        if (receivedData.length < totalFrameSize) break;
        
        const frame = receivedData.slice(0, totalFrameSize);
        receivedData = receivedData.slice(totalFrameSize);
        
        const messageId = frame[5];
        const systemId = frame[3];
        const componentId = frame[4];
        
        // Check for specific messages we care about
        if (messageId === 24) { // GPS_RAW_INT
          gpsMessageCount++;
          console.log(`🛰️  GPS_RAW_INT #${gpsMessageCount} received from SITL`);
          
          // Parse some GPS data
          const payload = frame.slice(6, 6 + length);
          if (payload.length >= 30) {
            const lat = payload.readInt32LE(4);  // latitude in 1e7 degrees
            const lon = payload.readInt32LE(8);  // longitude in 1e7 degrees
            const alt = payload.readInt32LE(12); // altitude in mm
            console.log(`   Lat: ${lat/1e7}°, Lon: ${lon/1e7}°, Alt: ${alt/1000}m`);
          }
          
        } else if (messageId === 67) { // DATA_STREAM
          dataStreamResponseCount++;
          console.log(`📊 DATA_STREAM response #${dataStreamResponseCount} - SITL acknowledged stream request`);
          
        } else if (messageId === 0) { // HEARTBEAT  
          // Don't log every heartbeat, just the first few
          if (dataStreamResponseCount === 0 && gpsMessageCount === 0) {
            console.log('💓 HEARTBEAT from SITL');
          }
        }
      }
    });
    
    socket.on('error', (err) => {
      console.error('❌ Connection error:', err.message);
      resolve();
    });
    
    socket.on('close', () => {
      console.log('\n🔌 Connection closed');
      resolve();
    });
  });
}

testRequestDataStreamSpecific().catch(console.error);