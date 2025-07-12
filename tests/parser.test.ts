import { MAVLinkParser } from '../src/parser';

describe('MAVLinkParser', () => {
  let parser: MAVLinkParser;

  beforeEach(() => {
    parser = new MAVLinkParser({ validateCRC: false });
  });

  describe('parseBytes', () => {
    test('should parse HEARTBEAT message (MAVLink v1)', () => {
      // HEARTBEAT message: FE 09 00 01 01 00 04 03 01 00 00 00 00 00 00 B6 3C
      const heartbeatV1 = new Uint8Array([
        0xFE, 0x09, 0x00, 0x01, 0x01, 0x00, // Header
        0x04, 0x03, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // Payload
        0xB6, 0x3C // Checksum
      ]);

      const messages = parser.parseBytes(heartbeatV1);
      
      expect(messages).toHaveLength(1);
      expect(messages[0].message_name).toBe('HEARTBEAT');
      expect(messages[0].message_id).toBe(0);
      expect(messages[0].system_id).toBe(1);
      expect(messages[0].component_id).toBe(1);
      expect(messages[0].protocol_version).toBe(1);
    });

    test('should parse HEARTBEAT message (MAVLink v2)', () => {
      // HEARTBEAT message: FD 09 00 00 01 01 01 00 00 00 04 03 01 00 00 00 00 00 00 32 A6
      const heartbeatV2 = new Uint8Array([
        0xFD, 0x09, 0x00, 0x00, 0x01, 0x01, 0x01, 0x00, 0x00, 0x00, // Header
        0x04, 0x03, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // Payload
        0x32, 0xA6 // Checksum
      ]);

      const messages = parser.parseBytes(heartbeatV2);
      
      expect(messages).toHaveLength(1);
      expect(messages[0].message_name).toBe('HEARTBEAT');
      expect(messages[0].message_id).toBe(0);
      expect(messages[0].system_id).toBe(1);
      expect(messages[0].component_id).toBe(1);
      expect(messages[0].protocol_version).toBe(2);
    });

    test('should handle incomplete data', () => {
      // Send partial HEARTBEAT message
      const partialData = new Uint8Array([0xFE, 0x09, 0x00]);
      
      const messages1 = parser.parseBytes(partialData);
      expect(messages1).toHaveLength(0);

      // Send rest of the message
      const restData = new Uint8Array([
        0x01, 0x01, 0x00, // Rest of header
        0x04, 0x03, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // Payload
        0xB6, 0x3C // Checksum
      ]);

      const messages2 = parser.parseBytes(restData);
      expect(messages2).toHaveLength(1);
      expect(messages2[0].message_name).toBe('HEARTBEAT');
    });

    test('should handle multiple messages in single buffer', () => {
      // Two HEARTBEAT messages concatenated
      const doubleHeartbeat = new Uint8Array([
        // First message
        0xFE, 0x09, 0x00, 0x01, 0x01, 0x00,
        0x04, 0x03, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0xB6, 0x3C,
        // Second message  
        0xFE, 0x09, 0x02, 0x01, 0x01, 0x00,
        0x04, 0x03, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0xB7, 0x3E
      ]);

      const messages = parser.parseBytes(doubleHeartbeat);
      
      expect(messages).toHaveLength(2);
      expect(messages[0].sequence).toBe(0);
      expect(messages[1].sequence).toBe(2);
    });

    test('should skip invalid data and find valid frames', () => {
      // Invalid data followed by valid HEARTBEAT
      const mixedData = new Uint8Array([
        0x12, 0x34, 0x56, // Invalid data
        0xFE, 0x09, 0x00, 0x01, 0x01, 0x00, // Valid HEARTBEAT
        0x04, 0x03, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0xB6, 0x3C
      ]);

      const messages = parser.parseBytes(mixedData);
      
      expect(messages).toHaveLength(1);
      expect(messages[0].message_name).toBe('HEARTBEAT');
    });

    test('should handle GPS_RAW_INT message', () => {
      // GPS_RAW_INT message (ID 24)
      const gpsRawInt = new Uint8Array([
        0xFE, 0x1E, 0x00, 0x01, 0x01, 0x18, // Header (message ID 24)
        // Payload (30 bytes)
        0x10, 0x27, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // time_usec
        0x03, // fix_type
        0xE4, 0x0C, 0x02, 0x14, // lat (348000228)
        0x88, 0x13, 0x00, 0x0C, // lon (201326472)
        0x10, 0x27, 0x00, 0x00, // alt (10000)
        0xFF, 0xFF, // eph (65535)
        0xFF, 0xFF, // epv (65535)
        0xFF, 0xFF, // vel (65535)
        0xFF, 0xFF, // cog (65535)
        0x08, // satellites_visible
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // padding
        0xD4, 0x9A // Checksum
      ]);

      const messages = parser.parseBytes(gpsRawInt);
      
      expect(messages).toHaveLength(1);
      expect(messages[0].message_name).toBe('GPS_RAW_INT');
      expect(messages[0].message_id).toBe(24);
    });
  });

  describe('parseMessage', () => {
    test('should parse single complete message', () => {
      const heartbeat = new Uint8Array([
        0xFE, 0x09, 0x00, 0x01, 0x01, 0x00,
        0x04, 0x03, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0xB6, 0x3C
      ]);

      const message = parser.parseMessage(heartbeat);
      
      expect(message).not.toBeNull();
      expect(message!.message_name).toBe('HEARTBEAT');
      expect(message!.payload.type).toBe(4);
      expect(message!.payload.autopilot).toBe(3);
    });

    test('should throw error for invalid message', () => {
      const invalidData = new Uint8Array([0x12, 0x34, 0x56]);
      
      expect(() => parser.parseMessage(invalidData)).toThrow();
    });
  });

  describe('parser options', () => {
    test('should disable CRC validation when configured', () => {
      const parserNoCRC = new MAVLinkParser({ validateCRC: false });
      
      // HEARTBEAT with wrong checksum
      const heartbeatBadCRC = new Uint8Array([
        0xFE, 0x09, 0x00, 0x01, 0x01, 0x00,
        0x04, 0x03, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00 // Wrong checksum
      ]);

      const messages = parserNoCRC.parseBytes(heartbeatBadCRC);
      
      expect(messages).toHaveLength(1);
      expect(messages[0].message_name).toBe('HEARTBEAT');
    });

    test('should reject messages with bad CRC when validation enabled', () => {
      const parserWithCRC = new MAVLinkParser({ validateCRC: true });
      
      // HEARTBEAT with wrong checksum
      const heartbeatBadCRC = new Uint8Array([
        0xFE, 0x09, 0x00, 0x01, 0x01, 0x00,
        0x04, 0x03, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00 // Wrong checksum
      ]);

      const messages = parserWithCRC.parseBytes(heartbeatBadCRC);
      
      expect(messages).toHaveLength(0);
    });
  });

  describe('buffer management', () => {
    test('should reset parser state', () => {
      const partialData = new Uint8Array([0xFE, 0x09, 0x00]);
      parser.parseBytes(partialData);
      
      const statsBefore = parser.getStats();
      expect(statsBefore.bufferUsed).toBeGreaterThan(0);
      
      parser.reset();
      
      const statsAfter = parser.getStats();
      expect(statsAfter.bufferUsed).toBe(0);
    });

    test('should provide buffer statistics', () => {
      const stats = parser.getStats();
      
      expect(stats).toHaveProperty('bufferSize');
      expect(stats).toHaveProperty('bufferUsed');
      expect(typeof stats.bufferSize).toBe('number');
      expect(typeof stats.bufferUsed).toBe('number');
    });
  });

  describe('JSON serialization', () => {
    test('should produce serializable JSON output', () => {
      const heartbeat = new Uint8Array([
        0xFE, 0x09, 0x00, 0x01, 0x01, 0x00,
        0x04, 0x03, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0xB6, 0x3C
      ]);

      const messages = parser.parseBytes(heartbeat);
      const jsonString = JSON.stringify(messages[0]);
      const parsed = JSON.parse(jsonString);
      
      expect(parsed.message_name).toBe('HEARTBEAT');
      expect(parsed.system_id).toBe(1);
      expect(parsed.payload.type).toBe(4);
      expect(typeof parsed.timestamp).toBe('number');
    });
  });
});