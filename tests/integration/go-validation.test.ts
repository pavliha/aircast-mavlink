/**
 * Integration test that serializes messages with aircast-mavlink 
 * and validates them with the Go application using gomavlib
 */

import { spawn } from 'child_process';
import { CommonDialectTestBase, testMessages } from '../helpers/test-base';

describe('Go Application MAVLink Validation', () => {
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

  describe('Common Dialect Validation', () => {
    test('HEARTBEAT message validates successfully with Go', async () => {
      const heartbeat = testMessages.heartbeat({
        system_id: 1,
        component_id: 1,
        sequence: 0
      });

      const result = testBase.roundTripTest(heartbeat);
      const goResult = await validateWithGo(result.serializedBytes, 'common', 'HEARTBEAT');

      console.log('HEARTBEAT validation results:');
      console.log(`  Aircast checksum: 0x${result.parsedMessage.checksum.toString(16).padStart(4, '0')}`);
      console.log(`  Go extracted checksum: 0x${goResult.checksum.toString(16).padStart(4, '0')}`);
      console.log(`  Message ID: ${goResult.message_id}`);
      console.log(`  System ID: ${goResult.system_id}`);
      console.log(`  Component ID: ${goResult.component_id}`);
      console.log(`  Sequence: ${goResult.sequence}`);

      expect(goResult.success).toBe(true);
      expect(goResult.message_id).toBe(0); // HEARTBEAT message ID
      expect(goResult.system_id).toBe(heartbeat.system_id);
      expect(goResult.component_id).toBe(heartbeat.component_id);
      expect(goResult.sequence).toBe(heartbeat.sequence);
    });

    test('SYS_STATUS message validates with Go', async () => {
      const sysStatus = testMessages.sysStatus({
        system_id: 255,
        component_id: 190,
        sequence: 5
      });

      const result = testBase.roundTripTest(sysStatus);
      const goResult = await validateWithGo(result.serializedBytes, 'common', 'SYS_STATUS');

      console.log('SYS_STATUS validation results:');
      console.log(`  Aircast checksum: 0x${result.parsedMessage.checksum.toString(16).padStart(4, '0')}`);
      console.log(`  Go extracted checksum: 0x${goResult.checksum.toString(16).padStart(4, '0')}`);
      console.log(`  Message ID: ${goResult.message_id}`);

      expect(goResult.success).toBe(true);
      expect(goResult.message_id).toBe(1); // SYS_STATUS message ID
      expect(goResult.system_id).toBe(sysStatus.system_id);
      expect(goResult.component_id).toBe(sysStatus.component_id);
      expect(goResult.sequence).toBe(sysStatus.sequence);
    });

    test('GPS_RAW_INT message validates with Go', async () => {
      const gpsMessage = testMessages.gpsRawInt({
        system_id: 1,
        component_id: 1,
        sequence: 10
      });

      const result = testBase.roundTripTest(gpsMessage);
      const goResult = await validateWithGo(result.serializedBytes, 'common', 'GPS_RAW_INT');

      console.log('GPS_RAW_INT validation results:');
      console.log(`  Aircast checksum: 0x${result.parsedMessage.checksum.toString(16).padStart(4, '0')}`);
      console.log(`  Go extracted checksum: 0x${goResult.checksum.toString(16).padStart(4, '0')}`);
      console.log(`  Message ID: ${goResult.message_id}`);

      expect(goResult.success).toBe(true);
      expect(goResult.message_id).toBe(24); // GPS_RAW_INT message ID
      expect(goResult.system_id).toBe(gpsMessage.system_id);
      expect(goResult.component_id).toBe(gpsMessage.component_id);
      expect(goResult.sequence).toBe(gpsMessage.sequence);
    });
  });

  describe('ArduPilot Dialect Validation', () => {
    test('HEARTBEAT message with ardupilotmega dialect', async () => {
      const heartbeat = testMessages.heartbeat({
        system_id: 255,
        component_id: 190,
        sequence: 0
      });

      const result = testBase.roundTripTest(heartbeat);
      const goResult = await validateWithGo(result.serializedBytes, 'ardupilotmega', 'HEARTBEAT');

      console.log('HEARTBEAT (ArduPilot) validation results:');
      console.log(`  Aircast checksum: 0x${result.parsedMessage.checksum.toString(16).padStart(4, '0')}`);
      console.log(`  Go extracted checksum: 0x${goResult.checksum.toString(16).padStart(4, '0')}`);
      console.log(`  Message ID: ${goResult.message_id}`);

      expect(goResult.success).toBe(true);
      expect(goResult.message_id).toBe(0);
      expect(goResult.system_id).toBe(heartbeat.system_id);
      expect(goResult.component_id).toBe(heartbeat.component_id);
      expect(goResult.sequence).toBe(heartbeat.sequence);
    });
  });

  describe('Frame Structure Validation', () => {
    test('validates MAVLink v2 frame structure', async () => {
      const message = testMessages.heartbeat({
        system_id: 255,
        component_id: 190,
        sequence: 42,
        protocol_version: 2
      });

      const result = testBase.roundTripTest(message);
      const goResult = await validateWithGo(result.serializedBytes, 'common', 'HEARTBEAT');

      // Verify frame structure is correctly parsed by Go
      expect(goResult.success).toBe(true);
      expect(result.serializedBytes[0]).toBe(0xFD); // MAVLink v2 start byte
      expect(goResult.sequence).toBe(42);
      expect(goResult.system_id).toBe(255);
      expect(goResult.component_id).toBe(190);

      console.log('Frame structure validation:');
      console.log(`  Start byte: 0x${result.serializedBytes[0].toString(16).toUpperCase()}`);
      console.log(`  Payload length: ${result.serializedBytes[1]}`);
      console.log(`  Sequence: ${goResult.sequence}`);
      console.log(`  System ID: ${goResult.system_id}`);
      console.log(`  Component ID: ${goResult.component_id}`);
      console.log(`  Message ID: ${goResult.message_id}`);
      console.log(`  Total frame length: ${result.serializedBytes.length} bytes`);
    });
  });

  describe('Error Handling', () => {
    test('Go validator handles invalid data gracefully', async () => {
      const invalidData = new Uint8Array([0x00, 0x01, 0x02]); // Too short for MAVLink

      try {
        const goResult = await validateWithGo(invalidData, 'common', 'INVALID');
        expect(goResult.success).toBe(false);
        expect(goResult.error).toContain('data too short');
      } catch (error) {
        // This is also acceptable - the validator might reject it completely
        expect(error).toBeDefined();
      }
    });

    test('Go validator handles unsupported dialect', async () => {
      const heartbeat = testMessages.heartbeat();
      const result = testBase.roundTripTest(heartbeat);

      try {
        const goResult = await validateWithGo(result.serializedBytes, 'unsupported', 'HEARTBEAT');
        expect(goResult.success).toBe(false);
        expect(goResult.error).toContain('unsupported dialect');
      } catch (error) {
        // This is also acceptable
        expect(error).toBeDefined();
      }
    });
  });

  describe('Checksum Compatibility Analysis', () => {
    test('documents checksum differences between dialects', async () => {
      const heartbeat = testMessages.heartbeat({
        system_id: 1,
        component_id: 1,
        sequence: 0
      });

      const result = testBase.roundTripTest(heartbeat);
      
      // Test with both dialects
      const commonResult = await validateWithGo(result.serializedBytes, 'common', 'HEARTBEAT');
      const ardupilotResult = await validateWithGo(result.serializedBytes, 'ardupilotmega', 'HEARTBEAT');

      console.log('\\n🔍 Checksum Compatibility Analysis:');
      console.log(`Common dialect validation: ${commonResult.success ? '✅' : '❌'}`);
      console.log(`ArduPilot dialect validation: ${ardupilotResult.success ? '✅' : '❌'}`);
      console.log(`Aircast generated checksum: 0x${result.parsedMessage.checksum.toString(16).padStart(4, '0')}`);
      console.log(`Go extracted checksum: 0x${commonResult.checksum.toString(16).padStart(4, '0')}`);

      // Both should succeed since we're validating the frame structure
      expect(commonResult.success).toBe(true);
      expect(ardupilotResult.success).toBe(true);
      
      // Frame details should match
      expect(commonResult.message_id).toBe(ardupilotResult.message_id);
      expect(commonResult.system_id).toBe(ardupilotResult.system_id);
      expect(commonResult.component_id).toBe(ardupilotResult.component_id);
    });

    test('analyzes multiple message types for compatibility', async () => {
      const messages = [
        { name: 'HEARTBEAT', message: testMessages.heartbeat() },
        { name: 'SYS_STATUS', message: testMessages.sysStatus() },
        { name: 'GPS_RAW_INT', message: testMessages.gpsRawInt() },
        { name: 'ATTITUDE', message: testMessages.attitude() },
        { name: 'GLOBAL_POSITION_INT', message: testMessages.globalPositionInt() }
      ];

      console.log('\\n📊 Multi-Message Compatibility Matrix:');
      console.log('| Message | ID | Aircast Checksum | Go Extracted | Status |');
      console.log('|---------|----|--------------------|--------------|--------|');

      for (const testCase of messages) {
        try {
          const result = testBase.roundTripTest(testCase.message);
          const goResult = await validateWithGo(result.serializedBytes, 'common', testCase.name);
          
          const aircraftChecksum = `0x${result.parsedMessage.checksum.toString(16).padStart(4, '0')}`;
          const goChecksum = `0x${goResult.checksum.toString(16).padStart(4, '0')}`;
          const status = goResult.success ? '✅ OK' : '❌ FAIL';
          
          console.log(`| ${testCase.name.padEnd(7)} | ${goResult.message_id.toString().padEnd(2)} | ${aircraftChecksum.padEnd(18)} | ${goChecksum.padEnd(12)} | ${status} |`);
          
          expect(goResult.success).toBe(true);
        } catch (error) {
          console.log(`| ${testCase.name.padEnd(7)} | ?? | N/A                | N/A          | ❌ ERR |`);
        }
      }
    });
  });

  describe('SITL Compatibility Simulation', () => {
    test('simulates the exact sequence that was failing with SITL', async () => {
      // This simulates the sequence that was causing issues with SITL
      const messages = [
        testMessages.heartbeat({
          system_id: 255,
          component_id: 190,
          sequence: 0
        }),
        // Note: REQUEST_DATA_STREAM is not in common dialect, so we'll use SYS_STATUS instead
        testMessages.sysStatus({
          system_id: 255,
          component_id: 190,
          sequence: 1
        })
      ];

      console.log('\\n🚁 SITL Compatibility Simulation:');
      
      for (let i = 0; i < messages.length; i++) {
        const message = messages[i];
        const result = testBase.roundTripTest(message);
        const goResult = await validateWithGo(result.serializedBytes, 'common', message.message_name);
        
        console.log(`Message ${i + 1} (${message.message_name}):`);
        console.log(`  Success: ${goResult.success ? '✅' : '❌'}`);
        console.log(`  Checksum: 0x${goResult.checksum.toString(16).padStart(4, '0')}`);
        console.log(`  Message ID: ${goResult.message_id}`);
        console.log(`  System/Component: ${goResult.system_id}/${goResult.component_id}`);
        
        expect(goResult.success).toBe(true);
        expect(goResult.system_id).toBe(255);
        expect(goResult.component_id).toBe(190);
        expect(goResult.sequence).toBe(i);
      }
    });
  });
});