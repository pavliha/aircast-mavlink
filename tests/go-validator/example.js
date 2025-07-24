#!/usr/bin/env node

/**
 * Standalone example showing JSON -> aircast-mavlink binary -> Go struct parsing
 */

const { spawn } = require('child_process');
const { CommonSerializer, CommonParser } = require('../../dist/dialects/common');

async function runExample() {
  console.log('🚀 JSON to Go Struct Validation Example\n');
  
  // Step 1: Define JSON message
  const jsonMessage = {
    message_name: 'HEARTBEAT',
    system_id: 255,
    component_id: 190,
    sequence: 42,
    payload: {
      type: 6,           // MAV_TYPE_GCS
      autopilot: 8,      // MAV_AUTOPILOT_INVALID  
      base_mode: 81,     // Custom mode
      custom_mode: 12345,
      system_status: 4,  // MAV_STATE_ACTIVE
      mavlink_version: 3
    }
  };

  console.log('📝 Step 1: JSON Message Input:');
  console.log(JSON.stringify(jsonMessage, null, 2));

  // Step 2: Serialize with aircast-mavlink
  const serializer = new CommonSerializer();
  const serializedBytes = serializer.serialize(jsonMessage);

  console.log('\n🔧 Step 2: Aircast-mavlink Serialization:');
  console.log(`  Binary length: ${serializedBytes.length} bytes`);
  console.log(`  Binary array: [${Array.from(serializedBytes).join(', ')}]`);
  console.log(`  Hex representation: ${Array.from(serializedBytes).map(b => b.toString(16).padStart(2, '0')).join(' ')}`);

  // Verify we can parse it back with aircast-mavlink
  const parser = new CommonParser();
  const parsedMessages = parser.parseBytes(serializedBytes);
  const parsedMessage = parsedMessages[0];

  console.log('\n🔄 Aircast Round-trip Verification:');
  console.log(`  Parsed message name: ${parsedMessage.message_name}`);
  console.log(`  System ID: ${parsedMessage.system_id}`);
  console.log(`  Component ID: ${parsedMessage.component_id}`);
  console.log(`  Sequence: ${parsedMessage.sequence}`);
  console.log(`  Checksum: 0x${parsedMessage.checksum.toString(16).padStart(4, '0')}`);
  console.log(`  CRC OK: ${parsedMessage.crc_ok}`);

  // Step 3: Send to Go application for parsing
  console.log('\n🐹 Step 3: Go Application Parsing:');
  
  const goValidator = spawn('./validator');
  
  let output = '';
  let errorOutput = '';

  goValidator.stdout.on('data', (data) => {
    output += data.toString();
  });

  goValidator.stderr.on('data', (data) => {
    errorOutput += data.toString();
  });

  goValidator.on('close', (code) => {
    if (code !== 0) {
      console.error(`❌ Go validator failed with code ${code}: ${errorOutput}`);
      return;
    }

    try {
      const goResult = JSON.parse(output);
      console.log('  Go parsing result:');
      console.log(JSON.stringify(goResult, null, 4));
      
      console.log('\n✅ Step 4: Validation Results:');
      console.log(`  ✅ Success: ${goResult.success}`);
      console.log(`  ✅ Message ID: ${goResult.message_id} (HEARTBEAT)`);
      console.log(`  ✅ System ID: ${goResult.system_id}`);
      console.log(`  ✅ Component ID: ${goResult.component_id}`);
      console.log(`  ✅ Sequence: ${goResult.sequence}`);
      console.log(`  ✅ Checksum: 0x${goResult.checksum.toString(16).padStart(4, '0')}`);
      
      // Validate that checksums match
      const checksumsMatch = parsedMessage.checksum === goResult.checksum;
      console.log(`  ${checksumsMatch ? '✅' : '❌'} Checksum match: ${checksumsMatch}`);
      
      // Validate frame data matches
      const frameDataMatch = 
        goResult.system_id === jsonMessage.system_id &&
        goResult.component_id === jsonMessage.component_id &&
        goResult.sequence === jsonMessage.sequence &&
        goResult.message_id === 0; // HEARTBEAT message ID

      console.log(`  ${frameDataMatch ? '✅' : '❌'} Frame data match: ${frameDataMatch}`);
      
      if (checksumsMatch && frameDataMatch) {
        console.log('\n🎉 Complete pipeline validation successful!');
        console.log('   JSON → aircast-mavlink → Binary → Go application → Struct ✅');
      } else {
        console.log('\n❌ Pipeline validation failed');
      }
      
    } catch (error) {
      console.error(`❌ Failed to parse Go validator output: ${error}`);
    }
  });

  goValidator.on('error', (error) => {
    console.error(`❌ Failed to spawn Go validator: ${error}`);
  });

  // Send the validation request to the Go application
  const request = {
    data: Array.from(serializedBytes),
    dialect: 'common',
    message: 'HEARTBEAT'
  };

  goValidator.stdin.write(JSON.stringify(request));
  goValidator.stdin.end();
}

runExample().catch(console.error);