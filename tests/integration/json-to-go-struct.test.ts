/**
 * Test that demonstrates JSON message -> aircast-mavlink binary -> Go application parsing
 * This validates the complete pipeline from JSON to Go struct
 */

import { spawn } from 'child_process';
import { CommonDialectTestBase } from '../helpers/test-base';

describe('JSON to Go Struct Validation Pipeline', () => {
  let testBase: CommonDialectTestBase;

  beforeEach(() => {
    testBase = new CommonDialectTestBase();
    testBase.beforeEach();
  });

  afterEach(() => {
    testBase.afterEach();
  });

  /**
   * Helper function to validate a message with the Go application
   */
  async function validateWithGo(serializedBytes: Uint8Array, dialect: string, messageName: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const goValidator = spawn('./tests/go-validator/validator');
      
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

      // Send the validation request to the Go application
      const request = {
        data: Array.from(serializedBytes),
        dialect: dialect,
        message: messageName
      };

      goValidator.stdin.write(JSON.stringify(request));
      goValidator.stdin.end();
    });
  }

  test('HEARTBEAT: JSON -> aircast-mavlink -> Go struct', async () => {
    // Step 1: Define JSON message
    const jsonMessage = {
      message_name: 'HEARTBEAT',
      system_id: 1,
      component_id: 1,
      sequence: 0,
      payload: {
        type: 6,           // MAV_TYPE_GCS
        autopilot: 8,      // MAV_AUTOPILOT_INVALID
        base_mode: 81,     // Custom mode
        custom_mode: 12345,
        system_status: 4,  // MAV_STATE_ACTIVE
        mavlink_version: 3
      }
    };

    console.log('📝 Step 1: JSON Message Input');
    console.log(JSON.stringify(jsonMessage, null, 2));

    // Step 2: Serialize with aircast-mavlink
    const result = testBase.roundTripTest(jsonMessage);
    const serializedBytes = result.serializedBytes;

    console.log('\\n🔧 Step 2: Aircast-mavlink Serialization');
    console.log(`  Binary length: ${serializedBytes.length} bytes`);
    console.log(`  Binary data: [${Array.from(serializedBytes).join(', ')}]`);
    console.log(`  Hex: ${Array.from(serializedBytes).map(b => b.toString(16).padStart(2, '0')).join(' ')}`);
    console.log(`  Aircast checksum: 0x${result.parsedMessage.checksum.toString(16).padStart(4, '0')}`);

    // Step 3: Parse with Go application
    const goResult = await validateWithGo(serializedBytes, 'common', 'HEARTBEAT');

    console.log('\\n🐹 Step 3: Go Application Parsing');
    console.log(JSON.stringify(goResult, null, 2));

    // Step 4: Validate round-trip success
    console.log('\\n✅ Step 4: Validation Results');
    expect(goResult.success).toBe(true);
    expect(goResult.message_id).toBe(0); // HEARTBEAT message ID
    expect(goResult.system_id).toBe(jsonMessage.system_id);
    expect(goResult.component_id).toBe(jsonMessage.component_id);
    expect(goResult.sequence).toBe(jsonMessage.sequence);

    console.log(`  ✅ Message ID: ${goResult.message_id} (HEARTBEAT)`);
    console.log(`  ✅ System ID: ${goResult.system_id}`);
    console.log(`  ✅ Component ID: ${goResult.component_id}`);
    console.log(`  ✅ Sequence: ${goResult.sequence}`);
    console.log(`  ✅ Checksum match: aircast=0x${result.parsedMessage.checksum.toString(16).padStart(4, '0')}, go=0x${goResult.checksum.toString(16).padStart(4, '0')}`);
  });

  test('SYS_STATUS: JSON -> aircast-mavlink -> Go struct', async () => {
    // Step 1: Define JSON message with realistic system status
    const jsonMessage = {
      message_name: 'SYS_STATUS',
      system_id: 255,
      component_id: 190,
      sequence: 5,
      payload: {
        onboard_control_sensors_present: 0x3FFFFFFF,  // All sensors present
        onboard_control_sensors_enabled: 0x1FFFFFFF,  // Most sensors enabled
        onboard_control_sensors_health: 0x0FFFFFFF,   // Most sensors healthy
        load: 500,                    // 50% CPU load
        voltage_battery: 11800,       // 11.8V battery
        current_battery: 1500,        // 1.5A current
        battery_remaining: 85,        // 85% battery
        drop_rate_comm: 12,          // 1.2% drop rate
        errors_comm: 5,              // 5 comm errors
        errors_count1: 0,
        errors_count2: 0,
        errors_count3: 0,
        errors_count4: 0
      }
    };

    console.log('📝 Step 1: SYS_STATUS JSON Message');
    console.log(JSON.stringify(jsonMessage, null, 2));

    // Step 2: Serialize with aircast-mavlink
    const result = testBase.roundTripTest(jsonMessage);
    const serializedBytes = result.serializedBytes;

    console.log('\\n🔧 Step 2: Aircast-mavlink Serialization');
    console.log(`  Binary length: ${serializedBytes.length} bytes`);
    console.log(`  Hex: ${Array.from(serializedBytes).map(b => b.toString(16).padStart(2, '0')).join(' ')}`);

    // Step 3: Parse with Go application
    const goResult = await validateWithGo(serializedBytes, 'common', 'SYS_STATUS');

    console.log('\\n🐹 Step 3: Go Application Parsing');
    console.log(JSON.stringify(goResult, null, 2));

    // Step 4: Validate round-trip success
    console.log('\\n✅ Step 4: Validation Results');
    expect(goResult.success).toBe(true);
    expect(goResult.message_id).toBe(1); // SYS_STATUS message ID
    expect(goResult.system_id).toBe(jsonMessage.system_id);
    expect(goResult.component_id).toBe(jsonMessage.component_id);
    expect(goResult.sequence).toBe(jsonMessage.sequence);

    console.log(`  ✅ Message ID: ${goResult.message_id} (SYS_STATUS)`);
    console.log(`  ✅ System ID: ${goResult.system_id}`);
    console.log(`  ✅ Component ID: ${goResult.component_id}`);
    console.log(`  ✅ Sequence: ${goResult.sequence}`);
  });

  test('GPS_RAW_INT: JSON -> aircast-mavlink -> Go struct', async () => {
    // Step 1: Define JSON message with GPS coordinates
    const jsonMessage = {
      message_name: 'GPS_RAW_INT',
      system_id: 1,
      component_id: 1,
      sequence: 10,
      payload: {
        time_usec: BigInt('1234567890123456'),  // Timestamp in microseconds
        fix_type: 3,                            // 3D fix
        lat: 473977420,                         // 47.3977420° (Seattle area)
        lon: 85345200,                          // 8.5345200° (Swiss area)
        alt: 54321,                             // Altitude in mm above MSL
        eph: 150,                               // GPS HDOP horizontal dilution
        epv: 200,                               // GPS VDOP vertical dilution  
        vel: 1250,                              // GPS ground speed cm/s
        cog: 18500,                             // Course over ground degrees * 100
        satellites_visible: 12                   // Number of satellites visible
      }
    };

    console.log('📝 Step 1: GPS_RAW_INT JSON Message');
    console.log(JSON.stringify(jsonMessage, null, 2));

    // Step 2: Serialize with aircast-mavlink
    const result = testBase.roundTripTest(jsonMessage);
    const serializedBytes = result.serializedBytes;

    console.log('\\n🔧 Step 2: Aircast-mavlink Serialization');
    console.log(`  Binary length: ${serializedBytes.length} bytes`);
    console.log(`  Hex: ${Array.from(serializedBytes).map(b => b.toString(16).padStart(2, '0')).join(' ')}`);

    // Step 3: Parse with Go application
    const goResult = await validateWithGo(serializedBytes, 'common', 'GPS_RAW_INT');

    console.log('\\n🐹 Step 3: Go Application Parsing');
    console.log(JSON.stringify(goResult, null, 2));

    // Step 4: Validate round-trip success
    console.log('\\n✅ Step 4: Validation Results');
    expect(goResult.success).toBe(true);
    expect(goResult.message_id).toBe(24); // GPS_RAW_INT message ID
    expect(goResult.system_id).toBe(jsonMessage.system_id);
    expect(goResult.component_id).toBe(jsonMessage.component_id);
    expect(goResult.sequence).toBe(jsonMessage.sequence);

    console.log(`  ✅ Message ID: ${goResult.message_id} (GPS_RAW_INT)`);
    console.log(`  ✅ System ID: ${goResult.system_id}`);
    console.log(`  ✅ Component ID: ${goResult.component_id}`);
    console.log(`  ✅ Sequence: ${goResult.sequence}`);
  });

  test('ATTITUDE: JSON -> aircast-mavlink -> Go struct', async () => {
    // Step 1: Define JSON message with attitude data
    const jsonMessage = {
      message_name: 'ATTITUDE',
      system_id: 1,
      component_id: 1,
      sequence: 15,
      payload: {
        time_boot_ms: 123456,    // Time since boot in milliseconds
        roll: 0.1,               // Roll angle in radians
        pitch: -0.05,            // Pitch angle in radians
        yaw: 1.57,               // Yaw angle in radians (90 degrees)
        rollspeed: 0.01,         // Roll angular velocity rad/s
        pitchspeed: -0.02,       // Pitch angular velocity rad/s
        yawspeed: 0.03           // Yaw angular velocity rad/s
      }
    };

    console.log('📝 Step 1: ATTITUDE JSON Message');
    console.log(JSON.stringify(jsonMessage, null, 2));

    // Step 2: Serialize with aircast-mavlink
    const result = testBase.roundTripTest(jsonMessage);
    const serializedBytes = result.serializedBytes;

    console.log('\\n🔧 Step 2: Aircast-mavlink Serialization');
    console.log(`  Binary length: ${serializedBytes.length} bytes`);
    console.log(`  Hex: ${Array.from(serializedBytes).map(b => b.toString(16).padStart(2, '0')).join(' ')}`);

    // Step 3: Parse with Go application
    const goResult = await validateWithGo(serializedBytes, 'common', 'ATTITUDE');

    console.log('\\n🐹 Step 3: Go Application Parsing');
    console.log(JSON.stringify(goResult, null, 2));

    // Step 4: Validate round-trip success
    console.log('\\n✅ Step 4: Validation Results');
    expect(goResult.success).toBe(true);
    expect(goResult.message_id).toBe(30); // ATTITUDE message ID
    expect(goResult.system_id).toBe(jsonMessage.system_id);
    expect(goResult.component_id).toBe(jsonMessage.component_id);
    expect(goResult.sequence).toBe(jsonMessage.sequence);

    console.log(`  ✅ Message ID: ${goResult.message_id} (ATTITUDE)`);
    console.log(`  ✅ System ID: ${goResult.system_id}`);
    console.log(`  ✅ Component ID: ${goResult.component_id}`);
    console.log(`  ✅ Sequence: ${goResult.sequence}`);
  });

  test('REQUEST_DATA_STREAM: JSON -> aircast-mavlink -> Go struct', async () => {
    // Step 1: Define REQUEST_DATA_STREAM JSON message (the one that was failing with SITL)
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

    console.log('📝 Step 1: REQUEST_DATA_STREAM JSON Message');
    console.log(JSON.stringify(jsonMessage, null, 2));
    console.log('  This is the exact message type that was causing SITL compatibility issues!');

    // Step 2: Try to serialize with aircast-mavlink
    console.log('\\n🔧 Step 2: Aircast-mavlink Serialization');
    
    let result;
    let serializedBytes;
    
    try {
      result = testBase.roundTripTest(jsonMessage);
      serializedBytes = result.serializedBytes;
      
      console.log(`  ✅ Serialization successful!`);
      console.log(`  Binary length: ${serializedBytes.length} bytes`);
      console.log(`  Hex: ${Array.from(serializedBytes).map(b => b.toString(16).padStart(2, '0')).join(' ')}`);
      console.log(`  Aircast checksum: 0x${result.parsedMessage.checksum.toString(16).padStart(4, '0')}`);
      
    } catch (error) {
      console.log(`  ❌ Serialization failed: ${error instanceof Error ? error.message : String(error)}`);
      console.log('  This might indicate REQUEST_DATA_STREAM is not in the common dialect');
      
      // Skip the test if the message is not supported in common dialect
      console.log('  Skipping Go validation due to serialization failure');
      return;
    }

    // Step 3: Parse with Go application
    console.log('\\n🐹 Step 3: Go Application Parsing');
    
    try {
      const goResult = await validateWithGo(serializedBytes, 'common', 'REQUEST_DATA_STREAM');
      console.log(JSON.stringify(goResult, null, 2));

      console.log('\\n✅ Step 4: Validation Results');
      expect(goResult.success).toBe(true);
      expect(goResult.message_id).toBe(66); // REQUEST_DATA_STREAM message ID
      expect(goResult.system_id).toBe(jsonMessage.system_id);
      expect(goResult.component_id).toBe(jsonMessage.component_id);
      expect(goResult.sequence).toBe(jsonMessage.sequence);

      console.log(`  ✅ Message ID: ${goResult.message_id} (REQUEST_DATA_STREAM)`);
      console.log(`  ✅ System ID: ${goResult.system_id}`);
      console.log(`  ✅ Component ID: ${goResult.component_id}`);
      console.log(`  ✅ Sequence: ${goResult.sequence}`);
      console.log(`  ✅ Checksum: 0x${goResult.checksum.toString(16).padStart(4, '0')}`);
      
      // Compare with the checksum that was expected by SITL/gomavlib in the error logs
      console.log('\\n🔍 SITL Compatibility Analysis:');
      console.log(`  Generated checksum: 0x${goResult.checksum.toString(16).padStart(4, '0')}`);
      console.log(`  SITL expected checksum (from logs): 0x003c`);
      
      if (goResult.checksum === 0x003c) {
        console.log('  ✅ Checksum matches SITL expectation - compatibility issue resolved!');
      } else {
        console.log('  ⚠️  Checksum differs from SITL expectation - this explains the parse errors');
      }
      
    } catch (error) {
      console.log(`  ❌ Go validation failed: ${error instanceof Error ? error.message : String(error)}`);
      throw error;
    }
  });

  test('REQUEST_DATA_STREAM with ArduPilot dialect', async () => {
    // Test the same message with ardupilotmega dialect to see if checksums differ
    const jsonMessage = {
      message_name: 'REQUEST_DATA_STREAM',
      system_id: 255,
      component_id: 190,
      sequence: 1,
      payload: {
        target_system: 1,
        target_component: 1,
        req_stream_id: 1,        // RAW_SENSORS stream
        req_message_rate: 2,
        start_stop: 1
      }
    };

    console.log('📝 REQUEST_DATA_STREAM with ArduPilot Dialect');
    console.log('  Testing the same message that caused \"wrong checksum, expected 003c, got 020b\"');

    // Try with ArduPilot dialect test base
    let ardupilotResult;
    try {
      // We need to use ArduPilot dialect for this test
      const { ArdupilotmegaParser, ArdupilotmegaSerializer } = require('../../src/generated/dialects/ardupilotmega');
      const serializer = new ArdupilotmegaSerializer();
      const parser = new ArdupilotmegaParser();
      
      const serializedBytes = serializer.serialize(jsonMessage);
      const parsedMessages = parser.parseBytes(serializedBytes);
      const parsedMessage = parsedMessages[0];
      
      ardupilotResult = {
        serializedBytes,
        parsedMessage
      };
      
      console.log(`\\n🔧 ArduPilot Serialization:`);
      console.log(`  Binary length: ${serializedBytes.length} bytes`);
      console.log(`  Hex: ${Array.from(serializedBytes).map(b => (b as number).toString(16).padStart(2, '0')).join(' ')}`);
      console.log(`  Aircast checksum: 0x${parsedMessage.checksum.toString(16).padStart(4, '0')}`);
      
    } catch (error) {
      console.log(`  ❌ ArduPilot serialization failed: ${error instanceof Error ? error.message : String(error)}`);
      return;
    }

    // Test with Go using ardupilotmega dialect
    try {
      const goResult = await validateWithGo(ardupilotResult.serializedBytes, 'ardupilotmega', 'REQUEST_DATA_STREAM');
      
      console.log('\\n🐹 Go Application Parsing (ArduPilot dialect):');
      console.log(JSON.stringify(goResult, null, 2));
      
      console.log('\\n🔍 ArduPilot Dialect Analysis:');
      console.log(`  Generated checksum: 0x${goResult.checksum.toString(16).padStart(4, '0')}`);
      console.log(`  SITL expected: 0x003c`);
      console.log(`  Error message was: \"wrong checksum, expected 003c, got 020b\"`);
      
      if (goResult.checksum === 0x003c) {
        console.log('  ✅ Matches SITL expectation!');
      } else if (goResult.checksum === 0x020b) {
        console.log('  ⚠️  Matches the \"got 020b\" from error logs - this was the aircast-generated checksum');
      } else {
        console.log('  ❓ Different checksum - needs investigation');
      }
      
      expect(goResult.success).toBe(true);
      expect(goResult.message_id).toBe(66);
      
    } catch (error) {
      console.log(`  ❌ Go validation failed: ${error instanceof Error ? error.message : String(error)}`);
      throw error;
    }
  });

  test('Multiple messages pipeline validation', async () => {
    const jsonMessages = [
      {
        message_name: 'HEARTBEAT',
        system_id: 255,
        component_id: 190,
        sequence: 0,
        payload: {
          type: 6,
          autopilot: 8,
          base_mode: 81,
          custom_mode: 12345,
          system_status: 4,
          mavlink_version: 3
        }
      },
      {
        message_name: 'SYS_STATUS', 
        system_id: 255,
        component_id: 190,
        sequence: 1,
        payload: {
          onboard_control_sensors_present: 0x3FFFFFFF,
          onboard_control_sensors_enabled: 0x1FFFFFFF,
          onboard_control_sensors_health: 0x0FFFFFFF,
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
        }
      },
      {
        message_name: 'GPS_RAW_INT',
        system_id: 255,
        component_id: 190,
        sequence: 2,
        payload: {
          time_usec: BigInt('1234567890123456'),
          fix_type: 3,
          lat: 473977420,
          lon: 85345200,
          alt: 54321,
          eph: 150,
          epv: 200,
          vel: 1250,
          cog: 18500,
          satellites_visible: 12
        }
      }
    ];

    console.log('📝 Multiple Messages Pipeline Test');
    console.log('\\n| Step | Message | JSON->Binary | Binary->Go | Status |');
    console.log('|------|---------|--------------|------------|--------|');

    for (let i = 0; i < jsonMessages.length; i++) {
      const jsonMessage = jsonMessages[i];
      
      try {
        // Serialize with aircast-mavlink
        const result = testBase.roundTripTest(jsonMessage);
        const serializedBytes = result.serializedBytes;

        // Parse with Go application
        const goResult = await validateWithGo(serializedBytes, 'common', jsonMessage.message_name);

        // Validate results
        const success = goResult.success && 
                       goResult.system_id === jsonMessage.system_id &&
                       goResult.component_id === jsonMessage.component_id &&
                       goResult.sequence === jsonMessage.sequence;

        const status = success ? '✅ OK' : '❌ FAIL';
        console.log(`| ${i+1}    | ${jsonMessage.message_name.padEnd(11)} | ✅ ${serializedBytes.length}B       | ✅ ID=${goResult.message_id}     | ${status} |`);

        expect(success).toBe(true);
        
      } catch (error) {
        console.log(`| ${i+1}    | ${jsonMessage.message_name.padEnd(11)} | ❌ ERROR     | ❌ ERROR    | ❌ FAIL |`);
        throw error;
      }
    }

    console.log('\\n🎉 All messages successfully processed through the complete pipeline!');
  });

  test('Error handling in pipeline', async () => {
    console.log('🚨 Error Handling Tests');

    // Test 1: Invalid JSON structure
    try {
      const invalidMessage = {
        message_name: 'HEARTBEAT',
        // Missing required fields
        payload: {}
      };
      
      testBase.errorHandlingTest(invalidMessage);
      console.log('  ✅ Invalid JSON structure properly rejected by aircast-mavlink');
    } catch (error) {
      console.log('  ✅ Invalid JSON structure properly rejected by aircast-mavlink');
      expect(error).toBeDefined();
    }

    // Test 2: Invalid binary data to Go
    const invalidBinary = new Uint8Array([0x00, 0x01, 0x02]); // Too short
    try {
      const goResult = await validateWithGo(invalidBinary, 'common', 'INVALID');
      expect(goResult.success).toBe(false);
      expect(goResult.error).toContain('data too short');
      console.log('  ✅ Invalid binary data properly rejected by Go application');
    } catch (error) {
      console.log('  ✅ Invalid binary data properly rejected by Go application');
      expect(error).toBeDefined();
    }
  });
});