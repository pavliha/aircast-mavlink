import { TypeConverter } from '../src/generator/type-converter';
import { MAVLinkDialectDefinition } from '../src/types';

describe('TypeConverter', () => {
  let converter: TypeConverter;

  beforeEach(() => {
    converter = new TypeConverter();
  });

  describe('convert', () => {
    const mockDialectDefinition: MAVLinkDialectDefinition = {
      version: '3',
      dialect: 0,
      includes: [],
      enums: [
        {
          name: 'MAV_STATE',
          description: 'States of the system',
          bitmask: false,
          entries: [
            { name: 'MAV_STATE_UNINIT', value: '0', description: 'Uninitialized' },
            { name: 'MAV_STATE_BOOT', value: '1', description: 'Booting' }
          ]
        }
      ],
      messages: [
        {
          id: 0,
          name: 'HEARTBEAT',
          description: 'The heartbeat message',
          fields: [
            { name: 'type', type: 'uint8_t', enum: 'MAV_TYPE', description: 'Vehicle type' },
            { name: 'autopilot', type: 'uint8_t', enum: 'MAV_AUTOPILOT', description: 'Autopilot type' },
            { name: 'base_mode', type: 'uint8_t', description: 'Base mode' },
            { name: 'custom_mode', type: 'uint32_t', description: 'Custom mode' },
            { name: 'system_status', type: 'uint8_t', enum: 'MAV_STATE', description: 'System status' }
          ]
        }
      ]
    };

    it('should convert dialect definition to TypeScript', () => {
      const result = converter.convert(mockDialectDefinition, 'test');
      
      expect(result).toBeDefined();
      expect(result.dialectName).toBe('test');
      expect(result.enums).toHaveLength(1);
      expect(result.messages).toHaveLength(1);
      
      const enum_ = result.enums[0];
      expect(enum_.name).toBe('MAV_STATE');
      expect(enum_.values).toHaveLength(2);
      expect(enum_.values[0].name).toBe('MAV_STATE_UNINIT');
      expect(enum_.values[0].value).toBe(0);
      
      const message = result.messages[0];
      expect(message.name).toBe('Heartbeat');
      expect(message.originalName).toBe('HEARTBEAT');
      expect(message.fields).toHaveLength(5);
    });

    it('should handle empty dialect definition', () => {
      const emptyDefinition: MAVLinkDialectDefinition = {
        enums: [],
        messages: []
      };
      
      const result = converter.convert(emptyDefinition, 'empty');
      
      expect(result.dialectName).toBe('empty');
      expect(result.enums).toHaveLength(0);
      expect(result.messages).toHaveLength(0);
    });
  });

  describe('convertFieldType', () => {
    it('should convert basic MAVLink types to TypeScript types', () => {
      const testCases = [
        { input: 'uint8_t', expected: 'number' },
        { input: 'int32_t', expected: 'number' },
        { input: 'float', expected: 'number' },
        { input: 'double', expected: 'number' },
        { input: 'char[16]', expected: 'string' },
        { input: 'uint8_t[4]', expected: 'number[]' }
      ];

      testCases.forEach(({ input, expected }) => {
        const result = (converter as any).convertFieldType(input, undefined, []);
        expect(result).toBe(expected);
      });
    });

    it('should handle enum types', () => {
      const mockEnums = [
        {
          name: 'MAV_STATE',
          description: [],
          values: [],
          bitmask: false
        }
      ];

      const result = (converter as any).convertFieldType('uint8_t', 'MAV_STATE', mockEnums);
      expect(result).toBe('MAV_STATE');
    });

    it('should handle unknown types', () => {
      const result = (converter as any).convertFieldType('unknown_type', undefined, []);
      expect(result).toBe('unknown');
    });
  });

  describe('convertEnum', () => {
    it('should convert enum definition to TypeScript enum', () => {
      const mockEnumDef = {
        name: 'MAV_STATE',
        description: 'States of the system',
        bitmask: false,
        entries: [
          { name: 'MAV_STATE_UNINIT', value: '0', description: 'Uninitialized' },
          { name: 'MAV_STATE_BOOT', value: '1', description: 'Booting' }
        ]
      };

      const result = (converter as any).convertEnum(mockEnumDef);
      
      expect(result).toBeDefined();
      expect(result.name).toBe('MAV_STATE');
      expect(result.values).toHaveLength(2);
      expect(result.values[0].name).toBe('MAV_STATE_UNINIT');
      expect(result.values[0].value).toBe(0);
    });

    it('should handle null enum definition', () => {
      const result = (converter as any).convertEnum(null);
      
      expect(result).toBeNull();
    });
  });
});