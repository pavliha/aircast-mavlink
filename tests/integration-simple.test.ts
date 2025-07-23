import { CommonParser, CommonSerializer } from '../src/generated/dialects/common/decoder';
import { MinimalParser, MinimalSerializer } from '../src/generated/dialects/minimal/decoder';

describe('Simple Integration Tests', () => {
  describe('Common Dialect - HEARTBEAT only', () => {
    let parser: CommonParser;
    let serializer: CommonSerializer;

    beforeEach(() => {
      parser = new CommonParser();
      serializer = new CommonSerializer();
    });

    test('should serialize and parse HEARTBEAT correctly', () => {
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

      console.log('Original message:', originalMessage);

      // Serialize to bytes
      const serializedBytes = serializer.serialize(originalMessage);
      console.log('Serialized bytes:', Array.from(serializedBytes).map(b => '0x' + b.toString(16).padStart(2, '0')).join(' '));
      
      // Parse bytes back to message
      const parsedMessages = parser.parseBytes(serializedBytes);
      console.log('Parsed messages count:', parsedMessages.length);
      
      expect(parsedMessages).toHaveLength(1);
      const parsedMessage = parsedMessages[0];
      
      console.log('Parsed message:', parsedMessage);
      
      // Verify basic message properties
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

    test('should debug SYS_STATUS serialization', () => {
      const sysStatusMessage = {
      message_name: 'SYS_STATUS',
      system_id: 1,
      component_id: 1,
      sequence: 5,
      payload: {
        onboard_control_sensors_present: 0x3FFFFFFF,
        onboard_control_sensors_enabled: 0x0F,
        onboard_control_sensors_health: 0x07,
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

      console.log('SYS_STATUS original:', sysStatusMessage);

      try {
        const serializedBytes = serializer.serialize(sysStatusMessage);
        console.log('SYS_STATUS serialized bytes:', Array.from(serializedBytes).map(b => '0x' + b.toString(16).padStart(2, '0')).join(' '));
        
        const parsedMessages = parser.parseBytes(serializedBytes);
        console.log('SYS_STATUS parsed:', parsedMessages.length > 0 ? parsedMessages[0] : 'No messages');
        
        if (parsedMessages.length > 0) {
          const parsed = parsedMessages[0];
          expect(parsed.message_name).toBe('SYS_STATUS');
          console.log('SYS_STATUS payload:', parsed.payload);
        }
      } catch (error) {
        console.error('SYS_STATUS serialization error:', error);
        throw error; // Re-throw to fail the test
      }
    });
  });

  describe('Minimal Dialect - Simple tests', () => {
    let parser: MinimalParser;
    let serializer: MinimalSerializer;

    beforeEach(() => {
      parser = new MinimalParser();
      serializer = new MinimalSerializer();
    });

    test('should serialize and parse HEARTBEAT correctly', () => {
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

  describe('Error Handling', () => {
    test('should throw error for unknown message type', () => {
      const parser = new CommonParser();
      const serializer = new CommonSerializer();
      
      const invalidMessage = {
        message_name: 'UNKNOWN_MESSAGE_TYPE',
        system_id: 1,
        component_id: 1,
        sequence: 0,
        payload: {}
      };

      expect(() => {
        serializer.serialize(invalidMessage);
      }).toThrow('Unknown message type: UNKNOWN_MESSAGE_TYPE');
    });
  });
});