import { MinimalParser } from '../src/generated/dialects/minimal/decoder';

describe('Generated Decoder Tests', () => {
  let parser: MinimalParser;

  beforeEach(() => {
    parser = new MinimalParser();
  });

  describe('MinimalParser', () => {
    test('should initialize with correct dialect name', () => {
      expect(parser.getDialectName()).toBe('minimal');
    });

    test('should support HEARTBEAT message (ID 0)', () => {
      expect(parser.supportsMessage(0)).toBe(true);
    });

    test('should support PROTOCOL_VERSION message (ID 300)', () => {
      expect(parser.supportsMessage(300)).toBe(true);
    });

    test('should not support unknown message', () => {
      expect(parser.supportsMessage(999)).toBe(false);
    });

    test('should return supported message IDs', () => {
      const ids = parser.getSupportedMessageIds();
      expect(ids).toContain(0);    // HEARTBEAT
      expect(ids).toContain(300);  // PROTOCOL_VERSION
      expect(ids.length).toBe(2);
    });

    test('should decode HEARTBEAT message correctly', () => {
      // Create a valid MAVLink frame for HEARTBEAT
      // Field order: type, autopilot, baseMode, customMode, systemStatus, mavlinkVersion
      const frame = {
        magic: 0xFE,
        length: 9,
        sequence: 1,
        system_id: 1,
        component_id: 1,
        message_id: 0,
        payload: new Uint8Array([
          0x01,                   // type (uint8_t) = 1 (fixed wing)
          0x03,                   // autopilot (uint8_t) = 3 (ArduPilot)
          0x8D,                   // base_mode (uint8_t) = 141
          0x04, 0x00, 0x00, 0x00, // custom_mode (uint32_t) = 4
          0x04,                   // system_status (uint8_t) = 4 (standby)
          0x03                    // mavlink_version (uint8_t) = 3
        ]),
        checksum: 0x3CB6,
        crc_ok: true,
        protocol_version: 1 as const
      };

      const result = parser.decode(frame);

      expect(result.message_id).toBe(0);
      expect(result.message_name).toBe('HEARTBEAT');
      expect(result.system_id).toBe(1);
      expect(result.component_id).toBe(1);
      expect(result.protocol_version).toBe(1);
      expect(result.crc_ok).toBe(true);
      expect(result.dialect).toBe('minimal');

      // Check payload fields
      expect(result.payload.type).toBe(1);
      expect(result.payload.autopilot).toBe(3);
      expect(result.payload.baseMode).toBe(141);
      expect(result.payload.customMode).toBe(4);
      expect(result.payload.systemStatus).toBe(4);
      expect(result.payload.mavlinkVersion).toBe(3);
    });

    test('should decode PROTOCOL_VERSION message correctly', () => {
      const frame = {
        magic: 0xFD,
        length: 22,
        sequence: 2,
        system_id: 1,
        component_id: 1,
        message_id: 300,
        payload: new Uint8Array([
          0xC8, 0x00,                         // version (uint16_t) = 200
          0x64, 0x00,                         // min_version (uint16_t) = 100
          0x2C, 0x01,                         // max_version (uint16_t) = 300
          0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, // spec_version_hash[8]
          0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18  // library_version_hash[8]
        ]),
        checksum: 0x1234,
        crc_ok: true,
        protocol_version: 2 as const
      };

      const result = parser.decode(frame);

      expect(result.message_id).toBe(300);
      expect(result.message_name).toBe('PROTOCOL_VERSION');
      expect(result.protocol_version).toBe(2);

      expect(result.payload.version).toBe(200);
      expect(result.payload.minVersion).toBe(100);
      expect(result.payload.maxVersion).toBe(300);
      expect(result.payload.specVersionHash).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
      expect(result.payload.libraryVersionHash).toEqual([17, 18, 19, 20, 21, 22, 23, 24]);
    });

    test('should handle unknown message ID', () => {
      const frame = {
        magic: 0xFE,
        length: 5,
        sequence: 1,
        system_id: 1,
        component_id: 1,
        message_id: 999,
        payload: new Uint8Array([0x01, 0x02, 0x03, 0x04, 0x05]),
        checksum: 0x1234,
        crc_ok: true,
        protocol_version: 1 as const
      };

      const result = parser.decode(frame);

      expect(result.message_id).toBe(999);
      expect(result.message_name).toBe('UNKNOWN_999');
      expect(result.payload.raw_payload).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle partial payload gracefully', () => {
      // HEARTBEAT with incomplete payload - only first 4 fields
      const frame = {
        magic: 0xFE,
        length: 7, // type(1) + autopilot(1) + baseMode(1) + customMode(4) = 7 bytes
        sequence: 1,
        system_id: 1,
        component_id: 1,
        message_id: 0,
        payload: new Uint8Array([
          0x01,                   // type
          0x03,                   // autopilot  
          0x8D,                   // baseMode
          0x04, 0x00, 0x00, 0x00  // customMode
        ]),
        checksum: 0x1234,
        crc_ok: true,
        protocol_version: 1 as const
      };

      const result = parser.decode(frame);

      expect(result.message_name).toBe('HEARTBEAT');
      expect(result.payload.type).toBe(1);
      expect(result.payload.autopilot).toBe(3);
      expect(result.payload.baseMode).toBe(141);
      expect(result.payload.customMode).toBe(4);
      // Missing fields should have default values
      expect(result.payload.systemStatus).toBe(0);
      expect(result.payload.mavlinkVersion).toBe(0);
    });

    test('should handle empty payload', () => {
      const frame = {
        magic: 0xFE,
        length: 0,
        sequence: 1,
        system_id: 1,
        component_id: 1,
        message_id: 0,
        payload: new Uint8Array([]),
        checksum: 0x1234,
        crc_ok: true,
        protocol_version: 1 as const
      };

      const result = parser.decode(frame);

      expect(result.message_name).toBe('HEARTBEAT');
      // All fields should have default values
      expect(result.payload.type).toBe(0);
      expect(result.payload.autopilot).toBe(0);
      expect(result.payload.baseMode).toBe(0);
      expect(result.payload.customMode).toBe(0);
      expect(result.payload.systemStatus).toBe(0);
      expect(result.payload.mavlinkVersion).toBe(0);
    });

    test('should get message definition', () => {
      const heartbeatDef = parser.getMessageDefinition(0);
      expect(heartbeatDef).toBeDefined();
      expect(heartbeatDef?.name).toBe('HEARTBEAT');
      expect(heartbeatDef?.id).toBe(0);
      expect(heartbeatDef?.fields).toHaveLength(6);

      const unknownDef = parser.getMessageDefinition(999);
      expect(unknownDef).toBeUndefined();
    });

    test('should preserve frame metadata in decoded message', () => {
      const frame = {
        magic: 0xFD,
        length: 9,
        sequence: 42,
        system_id: 5,
        component_id: 10,
        message_id: 0,
        payload: new Uint8Array(9).fill(0),
        checksum: 0x5678,
        signature: new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
        crc_ok: false,
        protocol_version: 2 as const
      };

      const result = parser.decode(frame);

      expect(result.sequence).toBe(42);
      expect(result.system_id).toBe(5);
      expect(result.component_id).toBe(10);
      expect(result.checksum).toBe(0x5678);
      expect(result.signature).toEqual(frame.signature);
      expect(result.crc_ok).toBe(false);
      expect(result.protocol_version).toBe(2);
    });
  });

  describe('Array handling', () => {
    test('should decode arrays correctly in PROTOCOL_VERSION', () => {
      const frame = {
        magic: 0xFE,
        length: 22,
        sequence: 1,
        system_id: 1,
        component_id: 1,
        message_id: 300,
        payload: new Uint8Array([
          0xC8, 0x00,                         // version
          0x64, 0x00,                         // min_version  
          0x2C, 0x01,                         // max_version
          0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF, 0x11, 0x22, // spec_version_hash[8]
          0x33, 0x44, 0x55, 0x66, 0x77, 0x88, 0x99, 0xAA  // library_version_hash[8]
        ]),
        checksum: 0x1234,
        crc_ok: true,
        protocol_version: 1 as const
      };

      const result = parser.decode(frame);

      expect(result.payload.specVersionHash).toEqual([0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF, 0x11, 0x22]);
      expect(result.payload.libraryVersionHash).toEqual([0x33, 0x44, 0x55, 0x66, 0x77, 0x88, 0x99, 0xAA]);
    });

    test('should handle partial arrays', () => {
      const frame = {
        magic: 0xFE,
        length: 10, // Incomplete payload
        sequence: 1,
        system_id: 1,
        component_id: 1,
        message_id: 300,
        payload: new Uint8Array([
          0xC8, 0x00,                         // version
          0x64, 0x00,                         // min_version  
          0x2C, 0x01,                         // max_version
          0xAA, 0xBB, 0xCC, 0xDD              // Only 4 bytes of spec_version_hash
        ]),
        checksum: 0x1234,
        crc_ok: true,
        protocol_version: 1 as const
      };

      const result = parser.decode(frame);

      expect(result.payload.version).toBe(200);
      expect(result.payload.minVersion).toBe(100);
      expect(result.payload.maxVersion).toBe(300);
      // Arrays should show partial data when insufficient
      expect(result.payload.specVersionHash).toEqual([0xAA, 0xBB, 0xCC, 0xDD]);
      expect(result.payload.libraryVersionHash).toEqual([]);
    });
  });

  describe('parseBytes method', () => {
    test('should parse complete MAVLink messages from raw bytes', () => {
      // HEARTBEAT message: FE 09 00 01 01 00 04 03 01 00 00 00 00 00 00 B6 3C
      const heartbeatBytes = new Uint8Array([
        0xFE, 0x09, 0x00, 0x01, 0x01, 0x00, // Header
        0x01, 0x03, 0x8D, 0x04, 0x00, 0x00, 0x00, 0x04, 0x03, // Payload
        0xB6, 0x3C // Checksum
      ]);

      const messages = parser.parseBytes(heartbeatBytes);
      
      expect(messages).toHaveLength(1);
      expect(messages[0].message_name).toBe('HEARTBEAT');
      expect(messages[0].payload.type).toBe(1);
      expect(messages[0].payload.autopilot).toBe(3);
    });

    test('should handle partial messages across multiple calls', () => {
      // Split HEARTBEAT message into two parts
      const part1 = new Uint8Array([0xFE, 0x09, 0x00, 0x01, 0x01, 0x00, 0x01, 0x03]);
      const part2 = new Uint8Array([0x8D, 0x04, 0x00, 0x00, 0x00, 0x04, 0x03, 0xB6, 0x3C]);

      const messages1 = parser.parseBytes(part1);
      expect(messages1).toHaveLength(0); // No complete messages yet

      const messages2 = parser.parseBytes(part2);
      expect(messages2).toHaveLength(1);
      expect(messages2[0].message_name).toBe('HEARTBEAT');
    });

    test('should parse multiple messages in single buffer', () => {
      // Two HEARTBEAT messages back to back
      const doubleHeartbeat = new Uint8Array([
        // First HEARTBEAT
        0xFE, 0x09, 0x00, 0x01, 0x01, 0x00,
        0x01, 0x03, 0x8D, 0x04, 0x00, 0x00, 0x00, 0x04, 0x03,
        0xB6, 0x3C,
        // Second HEARTBEAT  
        0xFE, 0x09, 0x01, 0x01, 0x01, 0x00,
        0x02, 0x04, 0x8E, 0x05, 0x00, 0x00, 0x00, 0x05, 0x03,
        0xC7, 0x4D
      ]);

      const messages = parser.parseBytes(doubleHeartbeat);
      
      expect(messages).toHaveLength(2);
      expect(messages[0].message_name).toBe('HEARTBEAT');
      expect(messages[1].message_name).toBe('HEARTBEAT');
      expect(messages[0].payload.type).toBe(1);
      expect(messages[1].payload.type).toBe(2);
    });

    test('should skip invalid data and find valid messages', () => {
      const mixedData = new Uint8Array([
        0x12, 0x34, 0x56, // Invalid bytes
        0xFE, 0x09, 0x00, 0x01, 0x01, 0x00, // Valid HEARTBEAT
        0x01, 0x03, 0x8D, 0x04, 0x00, 0x00, 0x00, 0x04, 0x03,
        0xB6, 0x3C,
        0x78, 0x9A // More invalid bytes
      ]);

      const messages = parser.parseBytes(mixedData);
      
      expect(messages).toHaveLength(1);
      expect(messages[0].message_name).toBe('HEARTBEAT');
    });

    test('should handle MAVLink v2 messages', () => {
      // Protocol version message in MAVLink v2 format
      const v2Message = new Uint8Array([
        0xFD, 0x16, 0x00, 0x00, 0x02, 0x01, 0x01, 0x2C, 0x01, 0x00, // v2 header
        0xC8, 0x00, 0x64, 0x00, 0x2C, 0x01, // version, min_version, max_version
        0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, // spec hash
        0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, // library hash
        0x34, 0x12 // checksum
      ]);

      const messages = parser.parseBytes(v2Message);
      
      expect(messages).toHaveLength(1);
      expect(messages[0].message_name).toBe('PROTOCOL_VERSION');
      expect(messages[0].protocol_version).toBe(2);
    });

    test('should reset buffer when needed', () => {
      const heartbeatBytes = new Uint8Array([
        0xFE, 0x09, 0x00, 0x01, 0x01, 0x00,
        0x01, 0x03, 0x8D, 0x04, 0x00, 0x00, 0x00, 0x04, 0x03,
        0xB6, 0x3C
      ]);

      parser.parseBytes(heartbeatBytes);
      parser.resetBuffer();
      
      // Should still work after reset
      const messages = parser.parseBytes(heartbeatBytes);
      expect(messages).toHaveLength(1);
      expect(messages[0].message_name).toBe('HEARTBEAT');
    });
  });
});