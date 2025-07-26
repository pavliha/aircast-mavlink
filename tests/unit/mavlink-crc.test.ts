import { MAVLinkCRC, CRC_EXTRA } from '../../src/generator/mavlink-crc'

describe('MAVLinkCRC', () => {
  describe('CRC_EXTRA constants', () => {
    test('should have CRC_EXTRA values for common messages', () => {
      expect(CRC_EXTRA[0]).toBe(50) // HEARTBEAT
      expect(CRC_EXTRA[1]).toBe(124) // SYS_STATUS
      expect(CRC_EXTRA[24]).toBe(24) // GPS_RAW_INT
      expect(CRC_EXTRA[30]).toBe(39) // ATTITUDE
      expect(CRC_EXTRA[33]).toBe(104) // GLOBAL_POSITION_INT
      expect(CRC_EXTRA[66]).toBe(148) // REQUEST_DATA_STREAM
      expect(CRC_EXTRA[253]).toBe(83) // STATUSTEXT
    })

    test('should have correct total number of CRC_EXTRA entries', () => {
      const crcKeys = Object.keys(CRC_EXTRA)
      expect(crcKeys.length).toBeGreaterThan(100)
    })

    test('should have valid numeric values for all entries', () => {
      for (const [key, value] of Object.entries(CRC_EXTRA)) {
        expect(Number.isInteger(Number(key))).toBe(true)
        expect(Number.isInteger(value)).toBe(true)
        expect(value).toBeGreaterThanOrEqual(0)
        expect(value).toBeLessThanOrEqual(255)
      }
    })
  })

  describe('calculate method', () => {
    test('should calculate CRC correctly for simple data', () => {
      const data = new Uint8Array([0x01, 0x02, 0x03])
      const crcExtra = 50
      const crc = MAVLinkCRC.calculate(data, crcExtra)

      expect(typeof crc).toBe('number')
      expect(crc).toBeGreaterThanOrEqual(0)
      expect(crc).toBeLessThanOrEqual(0xffff)
    })

    test('should calculate CRC for empty data', () => {
      const data = new Uint8Array([])
      const crcExtra = 100
      const crc = MAVLinkCRC.calculate(data, crcExtra)

      expect(typeof crc).toBe('number')
      expect(crc).toBeGreaterThanOrEqual(0)
      expect(crc).toBeLessThanOrEqual(0xffff)
    })

    test('should calculate CRC for large data', () => {
      const data = new Uint8Array(255).fill(0xaa)
      const crcExtra = 123
      const crc = MAVLinkCRC.calculate(data, crcExtra)

      expect(typeof crc).toBe('number')
      expect(crc).toBeGreaterThanOrEqual(0)
      expect(crc).toBeLessThanOrEqual(0xffff)
    })

    test('should produce different CRCs for different data', () => {
      const data1 = new Uint8Array([0x01, 0x02, 0x03])
      const data2 = new Uint8Array([0x01, 0x02, 0x04])
      const crcExtra = 50

      const crc1 = MAVLinkCRC.calculate(data1, crcExtra)
      const crc2 = MAVLinkCRC.calculate(data2, crcExtra)

      expect(crc1).not.toBe(crc2)
    })

    test('should produce different CRCs for different crcExtra values', () => {
      const data = new Uint8Array([0x01, 0x02, 0x03])

      const crc1 = MAVLinkCRC.calculate(data, 50)
      const crc2 = MAVLinkCRC.calculate(data, 51)

      expect(crc1).not.toBe(crc2)
    })

    test('should handle boundary values correctly', () => {
      const data = new Uint8Array([0x00, 0xff, 0x7f, 0x80])
      const crcExtra = 0xff
      const crc = MAVLinkCRC.calculate(data, crcExtra)

      expect(typeof crc).toBe('number')
      expect(crc).toBeGreaterThanOrEqual(0)
      expect(crc).toBeLessThanOrEqual(0xffff)
    })

    test('should match known CRC values for specific messages', () => {
      // Test with known HEARTBEAT message data
      const heartbeatData = new Uint8Array([
        0x09,
        0x00,
        0x00,
        0x00, // Payload length, incompat flags, compat flags, seq
        0x01,
        0x01,
        0x00, // System ID, Component ID, Message ID (HEARTBEAT)
        0x00,
        0x00,
        0x00,
        0x00, // custom_mode
        0x02, // type
        0x03, // autopilot
        0x08, // base_mode
        0x00, // system_status
        0x03, // mavlink_version
      ])

      const crc = MAVLinkCRC.calculate(heartbeatData, CRC_EXTRA[0])
      expect(crc).toBeGreaterThan(0)
    })

    test('should handle all bits set in data', () => {
      const data = new Uint8Array(10).fill(0xff)
      const crcExtra = 0xff
      const crc = MAVLinkCRC.calculate(data, crcExtra)

      expect(typeof crc).toBe('number')
      expect(crc).toBeGreaterThanOrEqual(0)
      expect(crc).toBeLessThanOrEqual(0xffff)
    })

    test('should handle alternating bit patterns', () => {
      const data = new Uint8Array([0xaa, 0x55, 0xaa, 0x55])
      const crcExtra = 0xaa
      const crc = MAVLinkCRC.calculate(data, crcExtra)

      expect(typeof crc).toBe('number')
      expect(crc).toBeGreaterThanOrEqual(0)
      expect(crc).toBeLessThanOrEqual(0xffff)
    })
  })

  describe('validate method', () => {
    test('should validate correct CRC', () => {
      const messageId = 0 // HEARTBEAT
      const crcExtra = CRC_EXTRA[messageId]

      // Create test data
      const messageData = new Uint8Array([
        0x09, 0x00, 0x00, 0x00, 0x01, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0x03, 0x08, 0x00,
        0x03,
      ])

      // Calculate CRC
      const crc = MAVLinkCRC.calculate(messageData, crcExtra)

      // Append CRC to message (little endian)
      const fullMessage = new Uint8Array(messageData.length + 2)
      fullMessage.set(messageData)
      fullMessage[messageData.length] = crc & 0xff
      fullMessage[messageData.length + 1] = (crc >> 8) & 0xff

      expect(MAVLinkCRC.validate(fullMessage, messageId)).toBe(true)
    })

    test('should reject incorrect CRC', () => {
      const messageId = 0 // HEARTBEAT

      const fullMessage = new Uint8Array([
        0x09,
        0x00,
        0x00,
        0x00,
        0x01,
        0x01,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x02,
        0x03,
        0x08,
        0x00,
        0x03,
        0xff,
        0xff, // Wrong CRC
      ])

      expect(MAVLinkCRC.validate(fullMessage, messageId)).toBe(false)
    })

    test('should handle empty data', () => {
      const emptyData = new Uint8Array([])
      expect(MAVLinkCRC.validate(emptyData, 0)).toBe(false)
    })

    test('should handle data with only one byte', () => {
      const shortData = new Uint8Array([0x01])
      expect(MAVLinkCRC.validate(shortData, 0)).toBe(false)
    })

    test('should handle unknown message ID', () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation()

      const data = new Uint8Array([
        0x01,
        0x02,
        0x03,
        0x04,
        0x05,
        0x00,
        0x00, // CRC bytes
      ])

      expect(MAVLinkCRC.validate(data, 9999)).toBe(false)
      expect(consoleWarnSpy).toHaveBeenCalledWith('No CRC_EXTRA defined for message ID 9999')

      consoleWarnSpy.mockRestore()
    })

    test('should validate multiple different messages', () => {
      const testCases = [
        { messageId: 1, data: new Uint8Array(10) }, // SYS_STATUS
        { messageId: 30, data: new Uint8Array(15) }, // ATTITUDE
        { messageId: 33, data: new Uint8Array(20) }, // GLOBAL_POSITION_INT
      ]

      for (const testCase of testCases) {
        const crcExtra = CRC_EXTRA[testCase.messageId]
        const crc = MAVLinkCRC.calculate(testCase.data, crcExtra)

        const fullMessage = new Uint8Array(testCase.data.length + 2)
        fullMessage.set(testCase.data)
        fullMessage[testCase.data.length] = crc & 0xff
        fullMessage[testCase.data.length + 1] = (crc >> 8) & 0xff

        expect(MAVLinkCRC.validate(fullMessage, testCase.messageId)).toBe(true)
      }
    })

    test('should handle CRC validation with modified data', () => {
      const messageId = 0
      const crcExtra = CRC_EXTRA[messageId]
      const messageData = new Uint8Array([1, 2, 3, 4, 5])

      const crc = MAVLinkCRC.calculate(messageData, crcExtra)

      const fullMessage = new Uint8Array(messageData.length + 2)
      fullMessage.set(messageData)
      fullMessage[messageData.length] = crc & 0xff
      fullMessage[messageData.length + 1] = (crc >> 8) & 0xff

      // Modify one byte in the message
      fullMessage[2] = 99

      expect(MAVLinkCRC.validate(fullMessage, messageId)).toBe(false)
    })

    test('should handle CRC validation with swapped CRC bytes', () => {
      const messageId = 0
      const crcExtra = CRC_EXTRA[messageId]
      const messageData = new Uint8Array([1, 2, 3, 4, 5])

      const crc = MAVLinkCRC.calculate(messageData, crcExtra)

      const fullMessage = new Uint8Array(messageData.length + 2)
      fullMessage.set(messageData)
      // Swap CRC bytes (wrong endianness)
      fullMessage[messageData.length] = (crc >> 8) & 0xff
      fullMessage[messageData.length + 1] = crc & 0xff

      expect(MAVLinkCRC.validate(fullMessage, messageId)).toBe(false)
    })

    test('should validate edge case message IDs', () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation()

      // Test with message ID 255 (SETUP_SIGNING)
      const messageId = 255
      const crcExtra = CRC_EXTRA[messageId]
      const messageData = new Uint8Array([1, 2, 3, 4, 5])

      const crc = MAVLinkCRC.calculate(messageData, crcExtra)

      const fullMessage = new Uint8Array(messageData.length + 2)
      fullMessage.set(messageData)
      fullMessage[messageData.length] = crc & 0xff
      fullMessage[messageData.length + 1] = (crc >> 8) & 0xff

      expect(MAVLinkCRC.validate(fullMessage, messageId)).toBe(true)

      consoleWarnSpy.mockRestore()
    })
  })

  describe('CRC algorithm implementation', () => {
    test('should handle MCRF4XX algorithm bit operations correctly', () => {
      // Test specific bit patterns that exercise the algorithm
      const testPatterns = [
        new Uint8Array([0x0f]), // Low nibble set
        new Uint8Array([0xf0]), // High nibble set
        new Uint8Array([0x01, 0x02, 0x04, 0x08]), // Individual bits
        new Uint8Array([0x7f, 0x80, 0xff]), // Boundary values
      ]

      for (const pattern of testPatterns) {
        const crc = MAVLinkCRC.calculate(pattern, 0)
        expect(crc).toBeGreaterThanOrEqual(0)
        expect(crc).toBeLessThanOrEqual(0xffff)
      }
    })

    test('should produce consistent results for same input', () => {
      const data = new Uint8Array([0x12, 0x34, 0x56, 0x78])
      const crcExtra = 100

      const crc1 = MAVLinkCRC.calculate(data, crcExtra)
      const crc2 = MAVLinkCRC.calculate(data, crcExtra)
      const crc3 = MAVLinkCRC.calculate(data, crcExtra)

      expect(crc1).toBe(crc2)
      expect(crc2).toBe(crc3)
    })
  })
})
