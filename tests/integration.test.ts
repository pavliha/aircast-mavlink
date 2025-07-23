import { CommonParser, CommonSerializer } from '../src/generated/dialects/common';
import { MinimalParser, MinimalSerializer } from '../src/generated/dialects/minimal';

describe('Integration Tests - Message Parsing and Serialization', () => {
  describe('Common Dialect', () => {
    let parser: CommonParser;
    let serializer: CommonSerializer;

    beforeEach(() => {
      parser = new CommonParser();
      serializer = new CommonSerializer();
    });

    describe('HEARTBEAT Message Round-trip', () => {
      test('should parse and serialize HEARTBEAT message correctly', () => {
        // Create original message object
        const originalMessage = {
      message_name: 'HEARTBEAT',
      system_id: 1,
      component_id: 1,
      sequence: 42,
      payload: {
          type: 6,
          autopilot: 8,
          base_mode: 81,
          custom_mode: 12345,
          system_status: 4,
          mavlink_version: 3
        }
        };

        // Serialize to bytes
        const serializedBytes = serializer.serialize(originalMessage);

        // Verify we got bytes
        expect(serializedBytes).toBeInstanceOf(Uint8Array);
        expect(serializedBytes.length).toBeGreaterThan(0);

        // Parse bytes back to message
        const parsedMessages = parser.parseBytes(serializedBytes);

        // Should get exactly one message
        expect(parsedMessages).toHaveLength(1);

        const parsedMessage = parsedMessages[0];

        // Verify message metadata
        expect(parsedMessage.message_name).toBe('HEARTBEAT');
        expect(parsedMessage.message_id).toBe(0);
        expect(parsedMessage.system_id).toBe(1);
        expect(parsedMessage.component_id).toBe(1);
        expect(parsedMessage.sequence).toBe(42);
        expect(parsedMessage.protocol_version).toBe(2);
        expect(parsedMessage.crc_ok).toBe(true);
        expect(parsedMessage.dialect).toBe('common');

        // Verify payload fields match
        expect(parsedMessage.payload.type).toBe(6);
        expect(parsedMessage.payload.autopilot).toBe(8);
        expect(parsedMessage.payload.base_mode).toBe(81);
        expect(parsedMessage.payload.custom_mode).toBe(12345);
        expect(parsedMessage.payload.system_status).toBe(4);
        expect(parsedMessage.payload.mavlink_version).toBe(3);
      });

      test('should handle HEARTBEAT with default values', () => {
        const originalMessage = {
      message_name: 'HEARTBEAT',
      system_id: 255,
      component_id: 250,
      sequence: 0,
      payload: {
          type: 0,
        autopilot: 0,
        base_mode: 0,
        custom_mode: 0,
        system_status: 0,
        mavlink_version: 3
        }
        };

        const serializedBytes = serializer.serialize(originalMessage);
        const parsedMessages = parser.parseBytes(serializedBytes);

        expect(parsedMessages).toHaveLength(1);
        const parsedMessage = parsedMessages[0];

        expect(parsedMessage.system_id).toBe(255);
        expect(parsedMessage.component_id).toBe(250);
        expect(parsedMessage.payload.type).toBe(0);
        expect(parsedMessage.payload.autopilot).toBe(0);
        expect(parsedMessage.payload.base_mode).toBe(0);
        expect(parsedMessage.payload.custom_mode).toBe(0);
        expect(parsedMessage.payload.system_status).toBe(0);
        expect(parsedMessage.payload.mavlink_version).toBe(3);
      });
    });

    describe('SYS_STATUS Message Round-trip', () => {
      test('should parse and serialize SYS_STATUS message correctly', () => {
        const originalMessage = {
      message_name: 'SYS_STATUS',
      system_id: 1,
      component_id: 1,
      sequence: 5,
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
        };

        const serializedBytes = serializer.serialize(originalMessage);
        const parsedMessages = parser.parseBytes(serializedBytes);

        expect(parsedMessages).toHaveLength(1);
        const parsedMessage = parsedMessages[0];

        expect(parsedMessage.message_name).toBe('SYS_STATUS');
        expect(parsedMessage.message_id).toBe(1);
        expect(parsedMessage.payload.onboard_control_sensors_present).toBe(0x3FFFFFFF);
        expect(parsedMessage.payload.onboard_control_sensors_enabled).toBe(0x1FFFFFFF);
        expect(parsedMessage.payload.onboard_control_sensors_health).toBe(0x0FFFFFFF);
        expect(parsedMessage.payload.load).toBe(500);
        expect(parsedMessage.payload.voltage_battery).toBe(11800);
        expect(parsedMessage.payload.current_battery).toBe(1500);
        expect(parsedMessage.payload.battery_remaining).toBe(85);
        expect(parsedMessage.payload.drop_rate_comm).toBe(12);
        expect(parsedMessage.payload.errors_comm).toBe(5);
      });
    });

    describe('GPS_RAW_INT Message Round-trip', () => {
      test('should parse and serialize GPS_RAW_INT message with arrays correctly', () => {
        const originalMessage = {
      message_name: 'GPS_RAW_INT',
      system_id: 1,
      component_id: 1,
      sequence: 10,
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
        };

        const serializedBytes = serializer.serialize(originalMessage);
        const parsedMessages = parser.parseBytes(serializedBytes);

        expect(parsedMessages).toHaveLength(1);
        const parsedMessage = parsedMessages[0];

        expect(parsedMessage.message_name).toBe('GPS_RAW_INT');
        expect(parsedMessage.payload.time_usec).toBe(BigInt('1234567890123456'));
        expect(parsedMessage.payload.fix_type).toBe(3);
        expect(parsedMessage.payload.lat).toBe(473977420);
        expect(parsedMessage.payload.lon).toBe(85345200);
        expect(parsedMessage.payload.alt).toBe(54321);
        expect(parsedMessage.payload.eph).toBe(150);
        expect(parsedMessage.payload.epv).toBe(200);
        expect(parsedMessage.payload.vel).toBe(1250);
        expect(parsedMessage.payload.cog).toBe(18500);
        expect(parsedMessage.payload.satellites_visible).toBe(12);
      });
    });

    describe('STATUSTEXT Message Round-trip', () => {
      test('should parse and serialize STATUSTEXT message with string correctly', () => {
        const originalMessage = {
      message_name: 'STATUSTEXT',
      system_id: 1,
      component_id: 1,
      sequence: 15,
      payload: {
          severity: 6,
          text: "System initialized successfully"
        }
        };

        const serializedBytes = serializer.serialize(originalMessage);
        const parsedMessages = parser.parseBytes(serializedBytes);

        expect(parsedMessages).toHaveLength(1);
        const parsedMessage = parsedMessages[0];

        expect(parsedMessage.message_name).toBe('STATUSTEXT');
        expect(parsedMessage.payload.severity).toBe(6);
        expect(parsedMessage.payload.text).toBe("System initialized successfully");
      });

      test('should handle STATUSTEXT with maximum length string', () => {
        const maxText = 'A'.repeat(50); // STATUSTEXT text field is char[50]

        const originalMessage = {
      message_name: 'STATUSTEXT',
      system_id: 1,
      component_id: 1,
      sequence: 16,
      payload: {
          severity: 6,
          text: maxText
        }
        };

        const serializedBytes = serializer.serialize(originalMessage);
        const parsedMessages = parser.parseBytes(serializedBytes);

        expect(parsedMessages).toHaveLength(1);
        const parsedMessage = parsedMessages[0];

        expect(parsedMessage.payload.text).toBe(maxText);
      });
    });

    describe('Multiple Messages', () => {
      test('should handle multiple different messages in sequence', () => {
        const messages = [
          {
            message_name: 'HEARTBEAT',
            system_id: 1,
            component_id: 1,
            sequence: 0,
            payload: {
              type: 6,
              autopilot: 8,
              base_mode: 0,
              custom_mode: 0,
              system_status: 4,
              mavlink_version: 3
            }
          },
          {
            message_name: 'SYS_STATUS',
            system_id: 1,
            component_id: 1,
            sequence: 1,
            payload: {
              onboard_control_sensors_present: 0x1FFFFFFF,
              onboard_control_sensors_enabled: 0x0FFFFFFF,
              onboard_control_sensors_health: 0x07FFFFFF,
              load: 250,
              voltage_battery: 12000,
              current_battery: 1000,
              battery_remaining: 90,
              drop_rate_comm: 0,
              errors_comm: 0,
              errors_count1: 0,
              errors_count2: 0,
              errors_count3: 0,
              errors_count4: 0
            }
          },
          {
            message_name: 'STATUSTEXT',
            system_id: 1,
            component_id: 1,
            sequence: 2,
            payload: {
              severity: 6,
              text: "Multi-message test"
            }
          }
        ];

        // Serialize all messages and concatenate bytes
        const allBytes: number[] = [];
        for (const message of messages) {
          const bytes = serializer.serialize(message);
          allBytes.push(...Array.from(bytes));
        }

        const combinedBytes = new Uint8Array(allBytes);

        // Parse all messages at once
        const parsedMessages = parser.parseBytes(combinedBytes);

        expect(parsedMessages).toHaveLength(3);

        // Verify first message (HEARTBEAT)
        expect(parsedMessages[0].message_name).toBe('HEARTBEAT');
        expect(parsedMessages[0].sequence).toBe(0);
        expect(parsedMessages[0].payload.type).toBe(6);

        // Verify second message (SYS_STATUS)
        expect(parsedMessages[1].message_name).toBe('SYS_STATUS');
        expect(parsedMessages[1].sequence).toBe(1);
        expect(parsedMessages[1].payload.load).toBe(250);

        // Verify third message (STATUSTEXT)
        expect(parsedMessages[2].message_name).toBe('STATUSTEXT');
        expect(parsedMessages[2].sequence).toBe(2);
        expect(parsedMessages[2].payload.text).toBe("Multi-message test");
      });
    });

    describe('Error Handling', () => {
      test('should throw error for unknown message type', () => {
        const invalidMessage = {
      message_name: 'UNKNOWN_MESSAGE_TYPE',
      system_id: 1,
      component_id: 1,
      sequence: 0,
      payload: {
          
        }
        };

        expect(() => {
          serializer.serialize(invalidMessage);
        }).toThrow('Unknown message type: UNKNOWN_MESSAGE_TYPE');
      });

      test('should handle corrupted serialized data gracefully', () => {
        // Create valid message first
        const validMessage = {
      message_name: 'HEARTBEAT',
      system_id: 1,
      component_id: 1,
      sequence: 0,
      payload: {
          type: 6,
        autopilot: 8,
        base_mode: 0,
        custom_mode: 0,
        system_status: 4,
        mavlink_version: 3
        }
        };

        const validBytes = serializer.serialize(validMessage);

        // Corrupt the bytes by changing some middle bytes
        const corruptedBytes = new Uint8Array(validBytes);
        corruptedBytes[10] = 0xFF;
        corruptedBytes[11] = 0xFF;

        // Parser should handle corrupted data without crashing
        const parsedMessages = parser.parseBytes(corruptedBytes);

        // May parse successfully with wrong checksum or skip the message
        // The important thing is it doesn't crash
        expect(Array.isArray(parsedMessages)).toBe(true);
      });
    });
  });

  describe('Minimal Dialect', () => {
    let parser: MinimalParser;
    let serializer: MinimalSerializer;

    beforeEach(() => {
      parser = new MinimalParser();
      serializer = new MinimalSerializer();
    });

    describe('HEARTBEAT Message Round-trip', () => {
      test('should parse and serialize HEARTBEAT message correctly', () => {
        const originalMessage = {
      message_name: 'HEARTBEAT',
      system_id: 2,
      component_id: 3,
      sequence: 100,
      payload: {
          type: 1,
          autopilot: 3,
          base_mode: 157,
          custom_mode: 999,
          system_status: 3,
          mavlink_version: 3
        }
        };

        const serializedBytes = serializer.serialize(originalMessage);
        const parsedMessages = parser.parseBytes(serializedBytes);

        expect(parsedMessages).toHaveLength(1);
        const parsedMessage = parsedMessages[0];

        expect(parsedMessage.message_name).toBe('HEARTBEAT');
        expect(parsedMessage.system_id).toBe(2);
        expect(parsedMessage.component_id).toBe(3);
        expect(parsedMessage.sequence).toBe(100);
        expect(parsedMessage.dialect).toBe('minimal');

        expect(parsedMessage.payload.type).toBe(1);
        expect(parsedMessage.payload.autopilot).toBe(3);
        expect(parsedMessage.payload.base_mode).toBe(157);
        expect(parsedMessage.payload.custom_mode).toBe(999);
        expect(parsedMessage.payload.system_status).toBe(3);
        expect(parsedMessage.payload.mavlink_version).toBe(3);
      });
    });

    describe('PROTOCOL_VERSION Message Round-trip', () => {
      test('should parse and serialize PROTOCOL_VERSION message with arrays correctly', () => {
        const originalMessage = {
      message_name: 'PROTOCOL_VERSION',
      system_id: 1,
      component_id: 1,
      sequence: 50,
      payload: {
          version: 200,
        min_version: 100,
        max_version: 300,
        spec_version_hash: [0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08],
        library_version_hash: [0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18]
        }
        };

        const serializedBytes = serializer.serialize(originalMessage);
        const parsedMessages = parser.parseBytes(serializedBytes);

        expect(parsedMessages).toHaveLength(1);
        const parsedMessage = parsedMessages[0];

        expect(parsedMessage.message_name).toBe('PROTOCOL_VERSION');
        expect(parsedMessage.message_id).toBe(300);
        expect(parsedMessage.payload.version).toBe(200);
        expect(parsedMessage.payload.min_version).toBe(100);
        expect(parsedMessage.payload.max_version).toBe(300);
        expect(parsedMessage.payload.spec_version_hash).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
        expect(parsedMessage.payload.library_version_hash).toEqual([17, 18, 19, 20, 21, 22, 23, 24]);
      });

      test('should handle PROTOCOL_VERSION with partial arrays', () => {
        const originalMessage = {
      message_name: 'PROTOCOL_VERSION',
      system_id: 1,
      component_id: 1,
      sequence: 51,
      payload: {
          version: 150,
        min_version: 50,
        max_version: 200,
        spec_version_hash: [0xAA, 0xBB, 0xCC]
        }
        };

        const serializedBytes = serializer.serialize(originalMessage);
        const parsedMessages = parser.parseBytes(serializedBytes);

        expect(parsedMessages).toHaveLength(1);
        const parsedMessage = parsedMessages[0];

        expect(parsedMessage.payload.version).toBe(150);
        expect(parsedMessage.payload.min_version).toBe(50);
        expect(parsedMessage.payload.max_version).toBe(200);
        // Arrays should be padded with zeros for missing elements
        expect(parsedMessage.payload.spec_version_hash).toEqual([0xAA, 0xBB, 0xCC, 0, 0, 0, 0, 0]);
        expect(parsedMessage.payload.library_version_hash).toEqual([0, 0, 0, 0, 0, 0, 0, 0]);
      });
    });
  });

  describe('Cross-Dialect Compatibility', () => {
    test('minimal dialect messages should be parseable by common dialect parser', () => {
      const minimalParser = new MinimalParser();
      const minimalSerializer = new MinimalSerializer();
      const commonParser = new CommonParser();

      // Create HEARTBEAT in minimal dialect
      const heartbeatMessage = {
      message_name: 'HEARTBEAT',
      system_id: 1,
      component_id: 1,
      sequence: 0,
      payload: {
          base_mode: 89,
        custom_mode: 5432,
        system_status: 4,
        mavlink_version: 3
        }
        };

      // Serialize with minimal
      const serializedBytes = minimalSerializer.serialize(heartbeatMessage);

      // Parse with both parsers
      const minimalParsed = minimalParser.parseBytes(serializedBytes);
      const commonParsed = commonParser.parseBytes(serializedBytes);

      // Both should parse successfully
      expect(minimalParsed).toHaveLength(1);
      expect(commonParsed).toHaveLength(1);

      // Payload should be identical
      expect(minimalParsed[0].payload.type).toBe(commonParsed[0].payload.type);
      expect(minimalParsed[0].payload.autopilot).toBe(commonParsed[0].payload.autopilot);
      expect(minimalParsed[0].payload.custom_mode).toBe(commonParsed[0].payload.custom_mode);

      // Only dialect identifier should differ
      expect(minimalParsed[0].dialect).toBe('minimal');
      expect(commonParsed[0].dialect).toBe('common');
    });
  });

  describe('Data Type Validation', () => {
    test('should handle all MAVLink data types correctly', () => {
      const parser = new CommonParser();
      const serializer = new CommonSerializer();

      // Test with GPS_RAW_INT which has various data types
      const gpsMessage = {
      message_name: 'GPS_RAW_INT',
      system_id: 1,
      component_id: 1,
      sequence: 0,
      payload: {
          time_usec: BigInt('18446744073709551615'),
        fix_type: 255,
        lat: 2147483647,
        lon: -2147483648,
        alt: 54321,
        eph: 65535,
        epv: 200,
        vel: 1250,
        cog: 18500,
        satellites_visible: 255,
        alt_ellipsoid: 2147483647
        }
        };

      const serializedBytes = serializer.serialize(gpsMessage);
      const parsedMessages = parser.parseBytes(serializedBytes);

      expect(parsedMessages).toHaveLength(1);
      const parsed = parsedMessages[0];

      // Verify extreme values are preserved
      expect(parsed.payload.time_usec).toBe(BigInt('18446744073709551615'));
      expect(parsed.payload.fix_type).toBe(255);
      expect(parsed.payload.lat).toBe(2147483647);
      expect(parsed.payload.lon).toBe(-2147483648);
      expect(parsed.payload.eph).toBe(65535);
      expect(parsed.payload.satellites_visible).toBe(255);
    });
  });
});
