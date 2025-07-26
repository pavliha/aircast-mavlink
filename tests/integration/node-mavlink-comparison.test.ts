import { describe, it, expect } from '@jest/globals'
import { CommonSerializer } from '../../src/generated/dialects/common'
import { MinimalSerializer, MinimalParser } from '../../src/generated/dialects/minimal'

describe('Node-MAVLink Compatibility Tests', () => {
  const commonSerializer = new CommonSerializer()
  const minimalSerializer = new MinimalSerializer()
  const minimalParser = new MinimalParser()

  describe('Array Field Ordering', () => {
    it('should serialize PROTOCOL_VERSION with correct field order', () => {
      const message = {
        message_name: 'PROTOCOL_VERSION',
        system_id: 1,
        component_id: 1,
        sequence: 0,
        payload: {
          version: 200,
          min_version: 100,
          max_version: 300,
          spec_version_hash: [0xaa, 0xbb, 0xcc, 0xdd, 0xee, 0xff, 0x11, 0x22],
          library_version_hash: [0x33, 0x44, 0x55, 0x66, 0x77, 0x88, 0x99, 0xaa],
        },
      }

      const frame = minimalSerializer.serialize(message)

      // Extract payload based on MAVLink version
      let payload: Buffer
      if (frame[0] === 0xfd) {
        // MAVLink v2: skip 10-byte header and 2-byte checksum
        payload = Buffer.from(frame.slice(10, -2))
      } else {
        // MAVLink v1: skip 6-byte header and 2-byte checksum
        payload = Buffer.from(frame.slice(6, -2))
      }

      // Verify field order: arrays first (8 bytes each), then uint16_t fields
      expect(payload.length).toBe(22)

      // spec_version_hash at bytes 0-7
      expect(Array.from(payload.slice(0, 8))).toEqual([
        0xaa, 0xbb, 0xcc, 0xdd, 0xee, 0xff, 0x11, 0x22,
      ])

      // library_version_hash at bytes 8-15
      expect(Array.from(payload.slice(8, 16))).toEqual([
        0x33, 0x44, 0x55, 0x66, 0x77, 0x88, 0x99, 0xaa,
      ])

      // version at bytes 16-17 (little-endian)
      expect(payload.readUInt16LE(16)).toBe(200)

      // min_version at bytes 18-19
      expect(payload.readUInt16LE(18)).toBe(100)

      // max_version at bytes 20-21
      expect(payload.readUInt16LE(20)).toBe(300)
    })

    it('should parse PROTOCOL_VERSION with correct field order', () => {
      // Create a frame with known values in wire format order
      const payload = Buffer.alloc(22)

      // Arrays first (8 bytes each)
      payload.set([0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08], 0) // spec_version_hash
      payload.set([0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18], 8) // library_version_hash

      // Then uint16_t fields
      payload.writeUInt16LE(250, 16) // version
      payload.writeUInt16LE(150, 18) // min_version
      payload.writeUInt16LE(350, 20) // max_version

      const frame = {
        magic: 0xfe,
        length: 22,
        sequence: 0,
        system_id: 1,
        component_id: 1,
        message_id: 300,
        payload: new Uint8Array(payload),
        checksum: 0x0000,
        crc_ok: true,
        protocol_version: 1 as const,
      }

      const decoded = minimalParser.decode(frame)

      expect(decoded.message_name).toBe('PROTOCOL_VERSION')
      expect(decoded.payload.spec_version_hash).toEqual([
        0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08,
      ])
      expect(decoded.payload.library_version_hash).toEqual([
        0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18,
      ])
      expect(decoded.payload.version).toBe(250)
      expect(decoded.payload.min_version).toBe(150)
      expect(decoded.payload.max_version).toBe(350)
    })

    it('should handle PARAM_VALUE with char array', () => {
      const message = {
        message_name: 'PARAM_VALUE',
        system_id: 1,
        component_id: 1,
        sequence: 0,
        payload: {
          param_id: 'RATE_PIT_P',
          param_value: 0.15,
          param_type: 9, // MAV_PARAM_TYPE_REAL32
          param_count: 300,
          param_index: 42,
        },
      }

      const frame = commonSerializer.serialize(message)
      const payload = Buffer.from(frame.slice(6, -2))

      // Expected field order by size:
      // 1. param_id: char[16] = 16 bytes (largest)
      // 2. param_value: float = 4 bytes
      // 3. param_count: uint16_t = 2 bytes
      // 4. param_index: uint16_t = 2 bytes
      // 5. param_type: uint8_t = 1 byte

      expect(payload.length).toBe(25)

      // param_id at bytes 0-15 (null-padded string)
      const paramId = Buffer.from(payload.slice(0, 16)).toString('utf8').replace(/\0+$/, '')
      expect(paramId).toBe('RATE_PIT_P')

      // param_value at bytes 16-19
      expect(payload.readFloatLE(16)).toBeCloseTo(0.15)

      // param_count at bytes 20-21
      expect(payload.readUInt16LE(20)).toBe(300)

      // param_index at bytes 22-23
      expect(payload.readUInt16LE(22)).toBe(42)

      // param_type at byte 24
      expect(payload[24]).toBe(9)
    })
  })

  describe('Mixed Array Sizes', () => {
    it('should correctly order fields with different array sizes', () => {
      // Test with a hypothetical message that has multiple arrays
      const fields = [
        { name: 'small_array', type: 'uint8_t[5]', size: 5 },
        { name: 'large_array', type: 'uint8_t[20]', size: 20 },
        { name: 'medium_array', type: 'uint16_t[4]', size: 8 },
        { name: 'single_int', type: 'uint32_t', size: 4 },
        { name: 'single_byte', type: 'uint8_t', size: 1 },
      ]

      // Expected order by size (descending)
      const expectedOrder = [
        'large_array', // 20 bytes
        'medium_array', // 8 bytes
        'small_array', // 5 bytes
        'single_int', // 4 bytes
        'single_byte', // 1 byte
      ]

      // Sort by size descending
      const sorted = [...fields].sort((a, b) => b.size - a.size)
      const actualOrder = sorted.map((f) => f.name)

      expect(actualOrder).toEqual(expectedOrder)
    })
  })

  describe('Real-world Message Tests', () => {
    it('should handle GPS_RAW_INT correctly', () => {
      const message = {
        message_name: 'GPS_RAW_INT',
        system_id: 1,
        component_id: 1,
        sequence: 0,
        payload: {
          time_usec: '1234567890123456',
          fix_type: 3,
          lat: 473977420,
          lon: 853452000,
          alt: 100000,
          eph: 150,
          epv: 200,
          vel: 500,
          cog: 1800,
          satellites_visible: 12,
        },
      }

      const frame = commonSerializer.serialize(message)
      const payload = Buffer.from(frame.slice(6, -2))

      // GPS_RAW_INT field sizes:
      // time_usec: uint64_t = 8 bytes (largest)
      // lat, lon, alt: int32_t = 4 bytes each
      // eph, epv, vel, cog: uint16_t = 2 bytes each
      // fix_type, satellites_visible: uint8_t = 1 byte each

      // Verify time_usec comes first (8 bytes)
      const timeUsec = payload.readBigUInt64LE(0)
      expect(timeUsec.toString()).toBe('1234567890123456')

      // Then int32_t fields
      expect(payload.readInt32LE(8)).toBe(473977420) // lat
      expect(payload.readInt32LE(12)).toBe(853452000) // lon
      expect(payload.readInt32LE(16)).toBe(100000) // alt
    })

    it('should handle HEARTBEAT correctly', () => {
      const message = {
        message_name: 'HEARTBEAT',
        system_id: 1,
        component_id: 1,
        sequence: 0,
        payload: {
          type: 2,
          autopilot: 3,
          base_mode: 81,
          custom_mode: 10000,
          system_status: 4,
          mavlink_version: 3,
        },
      }

      const frame = commonSerializer.serialize(message)
      const payload = Buffer.from(frame.slice(6, -2))

      // HEARTBEAT should have custom_mode (uint32_t) first
      expect(payload.readUInt32LE(0)).toBe(10000)

      // Then uint8_t fields
      expect(payload[4]).toBe(2) // type
      expect(payload[5]).toBe(3) // autopilot
      expect(payload[6]).toBe(81) // base_mode
      expect(payload[7]).toBe(4) // system_status
      expect(payload[8]).toBe(3) // mavlink_version
    })
  })
})
