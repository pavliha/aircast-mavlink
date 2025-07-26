import { TypeConverter } from '../../src/generator/type-converter'
import { MAVLinkDialectDefinition, FieldDefinition } from '../../src/types'

describe('TypeConverter - Coverage without any', () => {
  let converter: TypeConverter

  beforeEach(() => {
    converter = new TypeConverter()
  })

  describe('TypeConverter public interface', () => {
    test('should handle convert method', () => {
      const definition: MAVLinkDialectDefinition = {
        version: '3',
        dialect: 0,
        includes: [],
        enums: [],
        messages: [
          {
            id: 1,
            name: 'TEST_MESSAGE',
            description: 'Test message',
            fields: [
              { name: 'small', type: 'uint8_t', description: 'Small field' },
              { name: 'large', type: 'uint32_t', description: 'Large field' },
            ],
          },
        ],
      }

      const result = converter.convert(definition, 'test')

      expect(result).toBeDefined()
      expect(result.dialectName).toBe('test')
      expect(result.messages).toHaveLength(1)
      expect(result.messages[0].name).toBe('TestMessage')
    })

    test('should handle messages with extension fields', () => {
      const definition: MAVLinkDialectDefinition = {
        version: '3',
        dialect: 0,
        includes: [],
        enums: [],
        messages: [
          {
            id: 1,
            name: 'EXT_MESSAGE',
            description: 'Message with extensions',
            fields: [
              { name: 'core_field', type: 'uint8_t', description: 'Core field' },
              {
                name: 'ext_field',
                type: 'uint16_t',
                description: 'Extension field',
                extension: true,
              },
            ],
          },
        ],
      }

      const result = converter.convert(definition, 'test')

      expect(result.messages).toHaveLength(1)
      const message = result.messages[0]

      // Core fields should come before extension fields
      const coreFieldIndex = message.fields.findIndex((f) => f.name === 'core_field')
      const extFieldIndex = message.fields.findIndex((f) => f.name === 'ext_field')

      expect(coreFieldIndex).toBeGreaterThanOrEqual(0)
      expect(extFieldIndex).toBeGreaterThanOrEqual(0)
      expect(coreFieldIndex).toBeLessThan(extFieldIndex)
    })

    test('should handle array fields', () => {
      const definition: MAVLinkDialectDefinition = {
        version: '3',
        dialect: 0,
        includes: [],
        enums: [],
        messages: [
          {
            id: 1,
            name: 'ARRAY_MESSAGE',
            description: 'Message with arrays',
            fields: [
              { name: 'single', type: 'uint8_t', description: 'Single byte' },
              { name: 'array', type: 'uint8_t[10]', description: 'Array field' },
            ],
          },
        ],
      }

      const result = converter.convert(definition, 'test')

      expect(result.messages).toHaveLength(1)
      const message = result.messages[0]

      const arrayField = message.fields.find((f) => f.name === 'array')
      expect(arrayField).toBeDefined()
      expect(arrayField?.type).toBe('number[]')
    })

    test('should handle enum fields', () => {
      const definition: MAVLinkDialectDefinition = {
        version: '3',
        dialect: 0,
        includes: [],
        enums: [
          {
            name: 'TEST_ENUM',
            description: 'Test enum',
            bitmask: false,
            entries: [{ name: 'VALUE_1', value: '1', description: 'Value 1' }],
          },
        ],
        messages: [
          {
            id: 1,
            name: 'ENUM_MESSAGE',
            description: 'Message with enum',
            fields: [
              { name: 'enum_field', type: 'uint8_t', enum: 'TEST_ENUM', description: 'Enum field' },
            ],
          },
        ],
      }

      const result = converter.convert(definition, 'test')

      expect(result.messages).toHaveLength(1)
      const enumField = result.messages[0].fields[0]
      expect(enumField.type).toBe('TEST_ENUM')
    })

    test('should handle empty definition', () => {
      const definition: MAVLinkDialectDefinition = {
        version: '3',
        dialect: 0,
        includes: [],
        enums: [],
        messages: [],
      }

      const result = converter.convert(definition, 'empty')

      expect(result.dialectName).toBe('empty')
      expect(result.enums).toEqual([])
      expect(result.messages).toEqual([])
    })

    test('should handle special field types', () => {
      const definition: MAVLinkDialectDefinition = {
        version: '3',
        dialect: 0,
        includes: [],
        enums: [],
        messages: [
          {
            id: 1,
            name: 'TYPE_MESSAGE',
            description: 'Message with various types',
            fields: [
              { name: 'float_field', type: 'float', description: 'Float field' },
              { name: 'double_field', type: 'double', description: 'Double field' },
              { name: 'char_field', type: 'char', description: 'Char field' },
              { name: 'char_array', type: 'char[20]', description: 'String field' },
            ],
          },
        ],
      }

      const result = converter.convert(definition, 'test')

      const message = result.messages[0]
      const floatField = message.fields.find((f) => f.name === 'float_field')
      const charArrayField = message.fields.find((f) => f.name === 'char_array')

      expect(floatField).toBeDefined()
      expect(floatField?.type).toBe('number')
      expect(charArrayField).toBeDefined()
      expect(charArrayField?.type).toBe('string')
    })

    test('should convert enum values correctly', () => {
      const definition: MAVLinkDialectDefinition = {
        version: '3',
        dialect: 0,
        includes: [],
        enums: [
          {
            name: 'BITMASK_ENUM',
            description: 'Bitmask enum',
            bitmask: true,
            entries: [
              { name: 'FLAG_1', value: '0x01', description: 'Flag 1' },
              { name: 'FLAG_2', value: '0x02', description: 'Flag 2' },
              { name: 'FLAG_3', value: '4', description: 'Flag 3' },
            ],
          },
        ],
        messages: [],
      }

      const result = converter.convert(definition, 'test')

      expect(result.enums).toHaveLength(1)
      const enumDef = result.enums[0]

      expect(enumDef.bitmask).toBe(true)
      expect(enumDef.values).toHaveLength(3)
      expect(enumDef.values[0].value).toBe(1) // 0x01
      expect(enumDef.values[1].value).toBe(2) // 0x02
      expect(enumDef.values[2].value).toBe(4) // 4
    })
  })

  describe('Field ordering behavior', () => {
    test('should sort fields by size for most messages', () => {
      const definition: MAVLinkDialectDefinition = {
        version: '3',
        dialect: 0,
        includes: [],
        enums: [],
        messages: [
          {
            id: 1,
            name: 'UNSORTED_MESSAGE',
            description: 'Message with unsorted fields',
            fields: [
              { name: 'small', type: 'uint8_t', description: 'Small' },
              { name: 'large', type: 'uint32_t', description: 'Large' },
              { name: 'medium', type: 'uint16_t', description: 'Medium' },
            ],
          },
        ],
      }

      const result = converter.convert(definition, 'test')

      const fields = result.messages[0].fields
      // Should be sorted by size: uint32_t, uint16_t, uint8_t
      expect(fields[0].name).toBe('large')
      expect(fields[1].name).toBe('medium')
      expect(fields[2].name).toBe('small')
    })

    test('should keep extension fields at the end', () => {
      const definition: MAVLinkDialectDefinition = {
        version: '3',
        dialect: 0,
        includes: [],
        enums: [],
        messages: [
          {
            id: 1,
            name: 'MIXED_MESSAGE',
            description: 'Message with mixed fields',
            fields: [
              { name: 'small_core', type: 'uint8_t', description: 'Small core' },
              { name: 'large_ext', type: 'uint64_t', description: 'Large ext', extension: true },
              { name: 'large_core', type: 'uint32_t', description: 'Large core' },
              { name: 'small_ext', type: 'uint8_t', description: 'Small ext', extension: true },
            ],
          },
        ],
      }

      const result = converter.convert(definition, 'test')

      const fields = result.messages[0].fields
      const fieldNames = fields.map((f) => f.name)

      // Core fields should come first (sorted by size), then extensions
      expect(fieldNames).toEqual(['large_core', 'small_core', 'large_ext', 'small_ext'])
    })
  })
})
