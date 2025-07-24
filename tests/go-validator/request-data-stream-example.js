#!/usr/bin/env node

/**
 * Focused example testing REQUEST_DATA_STREAM - the message that was causing SITL issues
 */

const { spawn } = require('child_process');

async function testRequestDataStream() {
  console.log('🚨 REQUEST_DATA_STREAM Compatibility Test\n');
  console.log('This tests the exact message that was causing \"wrong checksum\" errors with SITL\n');
  
  // The REQUEST_DATA_STREAM message that was failing
  const jsonMessage = {
    message_name: 'REQUEST_DATA_STREAM',
    system_id: 255,
    component_id: 190,
    sequence: 1,
    payload: {
      target_system: 1,        // Target system ID (autopilot)
      target_component: 1,     // Target component ID (autopilot)
      req_stream_id: 1,        // Stream ID: RAW_SENSORS (includes GPS_RAW_INT)
      req_message_rate: 2,     // Requested message rate in Hz
      start_stop: 1            // 1 = start, 0 = stop
    }
  };

  console.log('📝 REQUEST_DATA_STREAM JSON Message:');
  console.log(JSON.stringify(jsonMessage, null, 2));
  console.log('\nThis was causing: "wrong checksum, expected 003c, got 020b, message id is 66"\n');

  // Test with both dialects
  const dialects = ['common', 'ardupilotmega'];
  
  for (const dialect of dialects) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`🧪 Testing with ${dialect.toUpperCase()} dialect`);
    console.log(`${'='.repeat(60)}`);
    
    try {
      // Load the appropriate dialect
      const dialectModule = require(`../../dist/dialects/${dialect}`);
      const SerializerClass = dialect === 'common' ? dialectModule.CommonSerializer : dialectModule.ArdupilotmegaSerializer;
      const ParserClass = dialect === 'common' ? dialectModule.CommonParser : dialectModule.ArdupilotmegaParser;
      
      const serializer = new SerializerClass();
      const parser = new ParserClass();

      // Serialize with aircast-mavlink
      console.log('\n🔧 Step 1: Aircast-mavlink Serialization');
      const serializedBytes = serializer.serialize(jsonMessage);
      const parsedMessages = parser.parseBytes(serializedBytes);
      const parsedMessage = parsedMessages[0];

      console.log(`  ✅ Serialization successful!`);
      console.log(`  Binary length: ${serializedBytes.length} bytes`);
      console.log(`  Binary array: [${Array.from(serializedBytes).join(', ')}]`);
      console.log(`  Hex: ${Array.from(serializedBytes).map(b => b.toString(16).padStart(2, '0')).join(' ')}`);
      console.log(`  Aircast checksum: 0x${parsedMessage.checksum.toString(16).padStart(4, '0')}`);
      console.log(`  CRC OK: ${parsedMessage.crc_ok}`);

      // Parse with Go application
      console.log('\n🐹 Step 2: Go Application Parsing');
      const goResult = await validateWithGo(serializedBytes, dialect, 'REQUEST_DATA_STREAM');
      
      console.log(`  Go parsing result:`);
      console.log(JSON.stringify(goResult, null, 4));

      // Analysis
      console.log('\n🔍 Compatibility Analysis:');
      console.log(`  Message ID: ${goResult.message_id} (should be 66 for REQUEST_DATA_STREAM)`);
      console.log(`  System/Component: ${goResult.system_id}/${goResult.component_id}`);
      console.log(`  Sequence: ${goResult.sequence}`);
      console.log(`  Generated checksum: 0x${goResult.checksum.toString(16).padStart(4, '0')}`);
      console.log(`  SITL expected: 0x003c`);
      console.log(`  Error \"got\": 0x020b`);
      
      // Compare with known values from the error logs
      if (goResult.checksum === 0x003c) {
        console.log(`  🎉 SUCCESS: Checksum matches SITL expectation!`);
        console.log(`  This resolves the \"wrong checksum\" error!`);
      } else if (goResult.checksum === 0x020b) {
        console.log(`  ⚠️  IDENTIFIED: This generates the \"got 020b\" checksum from error logs`);
        console.log(`  This explains why SITL rejected the message`);
      } else {
        console.log(`  ❓ DIFFERENT: Generated checksum doesn't match either expected or error values`);
        console.log(`  This needs further investigation`);
      }
      
      // Validate basic structure
      const success = goResult.success && 
                     goResult.message_id === 66 &&
                     goResult.system_id === jsonMessage.system_id &&
                     goResult.component_id === jsonMessage.component_id &&
                     goResult.sequence === jsonMessage.sequence;
      
      console.log(`  Frame Structure: ${success ? '✅ VALID' : '❌ INVALID'}`);
      
    } catch (error) {
      console.log(`  ❌ ERROR with ${dialect} dialect: ${error.message}`);
      if (error.message.includes('Cannot find module')) {
        console.log(`  This might indicate REQUEST_DATA_STREAM is not available in ${dialect} dialect`);
      }
    }
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log('📋 SUMMARY & RECOMMENDATIONS');
  console.log(`${'='.repeat(60)}`);
  console.log('Based on the original error logs:');
  console.log('- SITL expected checksum: 0x003c');
  console.log('- Aircast generated checksum: 0x020b');
  console.log('- Message ID: 66 (REQUEST_DATA_STREAM)');
  console.log('');
  console.log('If aircast-mavlink generates 0x003c → ✅ Compatible with SITL');
  console.log('If aircast-mavlink generates 0x020b → ❌ Explains SITL rejection');
  console.log('If aircast-mavlink generates other   → ❓ Needs investigation');
  console.log('');
  console.log('Next steps:');
  console.log('1. Check which dialect produces the correct checksum');
  console.log('2. Update aircast-agent configuration to use compatible dialect');
  console.log('3. Verify fix by testing with actual SITL connection');
}

/**
 * Helper function to validate with Go application
 */
async function validateWithGo(serializedBytes, dialect, messageName) {
  return new Promise((resolve, reject) => {
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
        reject(new Error(`Go validator exited with code ${code}: ${errorOutput}`));
        return;
      }

      try {
        const result = JSON.parse(output);
        resolve(result);
      } catch (error) {
        reject(new Error(`Failed to parse Go validator output: ${error}`));
      }
    });

    goValidator.on('error', (error) => {
      reject(new Error(`Failed to spawn Go validator: ${error}`));
    });

    // Send the validation request
    const request = {
      data: Array.from(serializedBytes),
      dialect: dialect,
      message: messageName
    };

    goValidator.stdin.write(JSON.stringify(request));
    goValidator.stdin.end();
  });
}

testRequestDataStream().catch(console.error);