import { TemplateEngine } from '../src/generator/template-engine';
import { TypeScriptDialect } from '../src/types';

describe('TemplateEngine Missing Lines Coverage', () => {
  let engine: TemplateEngine;

  beforeEach(() => {
    engine = new TemplateEngine();
  });

  describe('Handlebars helpers direct testing', () => {
    test('should test eq helper directly', () => {
      // Access the registered helpers through Handlebars
      const Handlebars = require('handlebars');
      const eqHelper = Handlebars.helpers.eq;
      
      expect(eqHelper).toBeDefined();
      expect(eqHelper('test', 'test')).toBe(true);
      expect(eqHelper('test', 'different')).toBe(false);
      expect(eqHelper(123, 123)).toBe(true);
      expect(eqHelper(123, 456)).toBe(false);
      expect(eqHelper(null, null)).toBe(true);
      expect(eqHelper(undefined, undefined)).toBe(true);
      expect(eqHelper(null, undefined)).toBe(false);
    });

    test('should test ne helper directly', () => {
      const Handlebars = require('handlebars');
      const neHelper = Handlebars.helpers.ne;
      
      expect(neHelper).toBeDefined();
      expect(neHelper('test', 'different')).toBe(true);
      expect(neHelper('test', 'test')).toBe(false);
      expect(neHelper(123, 456)).toBe(true);
      expect(neHelper(123, 123)).toBe(false);
      expect(neHelper(null, undefined)).toBe(true);
      expect(neHelper(null, null)).toBe(false);
    });

    test('should test toUpperCase helper directly', () => {
      const Handlebars = require('handlebars');
      const toUpperCaseHelper = Handlebars.helpers.toUpperCase;
      
      expect(toUpperCaseHelper).toBeDefined();
      expect(toUpperCaseHelper('hello')).toBe('HELLO');
      expect(toUpperCaseHelper('Mixed Case')).toBe('MIXED CASE');
      expect(toUpperCaseHelper('')).toBe('');
      expect(toUpperCaseHelper('ALREADY_UPPER')).toBe('ALREADY_UPPER');
    });

    test('should test generateTypes helper from single template context', () => {
      const dialect: TypeScriptDialect = {
        dialectName: 'test_generate_types',
        enums: [
          {
            name: 'TEST_ENUM',
            description: ['Test enum for generateTypes helper'],
            values: [
              {
                name: 'VALUE_1',
                value: 1,
                description: ['Test value']
              }
            ],
            bitmask: false
          }
        ],
        messages: [
          {
            id: 1,
            name: 'TEST_MESSAGE',
            originalName: 'TEST_MESSAGE',
            description: ['Test message'],
            fields: [
              {
                name: 'test_field',
                type: 'number',
                description: ['Test field'],
                optional: false
              }
            ]
          }
        ]
      };

      const result = engine.generateSingle(dialect);
      
      // This should trigger the generateTypes helper on line 944
      expect(result).toContain('ParsedMAVLinkMessage');
      expect(result).toContain('test_generate_types');
      expect(result).toBeDefined();
    });

    test('should test generateMessages helper from single template context', () => {
      const dialect: TypeScriptDialect = {
        dialectName: 'test_generate_messages',
        enums: [],
        messages: [
          {
            id: 1,
            name: 'GENERATE_MESSAGES_TEST',
            originalName: 'GENERATE_MESSAGES_TEST',
            description: ['Test message for generateMessages helper'],
            fields: [
              {
                name: 'helper_test_field',
                type: 'string',
                description: ['Helper test field'],
                optional: false
              }
            ]
          }
        ]
      };

      const result = engine.generateSingle(dialect);
      
      // This should trigger the generateMessages helper on line 945
      expect(result).toContain('MessageGENERATE_MESSAGES_TEST');
      expect(result).toContain('helper_test_field');
      expect(result).toBeDefined();
    });
  });

  describe('Template helpers integration testing', () => {
    test('should use eq helper in template processing', () => {
      const dialect: TypeScriptDialect = {
        dialectName: 'eq_helper_test',
        enums: [],
        messages: [
          {
            id: 1,
            name: 'EQ_TEST_MESSAGE',
            originalName: 'EQ_TEST_MESSAGE',
            description: ['Message for testing eq helper'],
            fields: [
              {
                name: 'eq_test_field',
                type: 'number',
                description: ['Field for eq test'],
                optional: false
              }
            ]
          }
        ]
      };

      // Generate with includeEnums true and false to test different template paths
      const resultWithEnums = engine.generateMessages(dialect, true);
      const resultWithoutEnums = engine.generateMessages(dialect, false);
      
      expect(resultWithEnums).toContain('EQ_TEST_MESSAGE');
      expect(resultWithoutEnums).toContain('EQ_TEST_MESSAGE');
    });

    test('should use ne helper in template processing', () => {
      const dialect: TypeScriptDialect = {
        dialectName: 'ne_helper_test',
        enums: [],
        messages: [
          {
            id: 1,
            name: 'NE_TEST_MESSAGE',
            originalName: 'DIFFERENT_ORIGINAL_NAME',
            description: ['Message for testing ne helper'],
            fields: [
              {
                name: 'ne_test_field',
                type: 'string',
                description: ['Field for ne test'],
                optional: true
              }
            ]
          }
        ]
      };

      const result = engine.generateMessages(dialect, false);
      
      // The ne helper should be used when name !== originalName
      expect(result).toContain('NE_TEST_MESSAGE');
      expect(result).toContain('DIFFERENT_ORIGINAL_NAME');
    });

    test('should use toUpperCase helper in enum templates', () => {
      const dialect: TypeScriptDialect = {
        dialectName: 'toupper_test',
        enums: [
          {
            name: 'lowercase_test_enum',
            description: ['Test enum with lowercase name'],
            values: [
              {
                name: 'test_value_name',
                value: 1,
                description: ['Test value with lowercase']
              }
            ],
            bitmask: false
          }
        ],
        messages: []
      };

      const result = engine.generateEnums(dialect);
      
      // The toUpperCase helper might be used in the template
      expect(result).toContain('lowercase_test_enum');
      expect(result).toContain('test_value_name');
    });
  });

  describe('Complex template scenarios with helpers', () => {
    test('should handle complex enum with all helpers', () => {
      const dialect: TypeScriptDialect = {
        dialectName: 'complex_helper_test',
        enums: [
          {
            name: 'COMPLEX_ENUM',
            description: ['Complex enum', 'with multiple lines', 'for testing helpers'],
            values: [
              {
                name: 'FIRST_VALUE',
                value: 1,
                description: ['First value', 'with description']
              },
              {
                name: 'SECOND_VALUE',
                value: 2,
                description: ['Second value']
              }
            ],
            bitmask: true
          }
        ],
        messages: [
          {
            id: 1,
            name: 'COMPLEX_MESSAGE',
            originalName: 'COMPLEX_MESSAGE',
            description: ['Complex message', 'for testing'],
            fields: [
              {
                name: 'enum_field',
                type: 'COMPLEX_ENUM',
                description: ['Field using the enum'],
                optional: false
              },
              {
                name: 'optional_field',
                type: 'string',
                description: ['Optional field'],
                optional: true
              }
            ]
          }
        ]
      };

      // Test all generation methods to ensure helpers are covered
      const typesResult = engine.generateTypes(dialect, true);
      const enumsResult = engine.generateEnums(dialect);
      const messagesResult = engine.generateMessages(dialect, true);
      const indexResult = engine.generateIndex(dialect, true);
      const singleResult = engine.generateSingle(dialect);

      expect(typesResult).toContain('ParsedMAVLinkMessage');
      expect(enumsResult).toContain('COMPLEX_ENUM');
      expect(messagesResult).toContain('COMPLEX_MESSAGE');
      expect(indexResult).toContain('export * from');
      expect(singleResult).toContain('COMPLEX_ENUM');
    });

    test('should handle edge cases in helper usage', () => {
      const dialect: TypeScriptDialect = {
        dialectName: 'edge_case_helpers',
        enums: [
          {
            name: 'EDGE_ENUM',
            description: [],
            values: [],
            bitmask: false
          }
        ],
        messages: [
          {
            id: 1,
            name: 'EDGE_MESSAGE',
            originalName: 'EDGE_MESSAGE',
            description: [],
            fields: []
          }
        ]
      };

      // Test with empty arrays and descriptions
      const result = engine.generateMessages(dialect, true);
      expect(result).toContain('EDGE_MESSAGE');
    });
  });

  describe('Template context object coverage', () => {
    test('should create proper context object in generateSingle', () => {
      const dialect: TypeScriptDialect = {
        dialectName: 'context_test',
        enums: [
          {
            name: 'CONTEXT_ENUM',
            description: ['Context test enum'],
            values: [
              {
                name: 'CONTEXT_VALUE',
                value: 42,
                description: ['Context value']
              }
            ],
            bitmask: false
          }
        ],
        messages: [
          {
            id: 1,
            name: 'CONTEXT_MESSAGE',
            originalName: 'CONTEXT_MESSAGE',
            description: ['Context test message'],
            fields: [
              {
                name: 'context_field',
                type: 'CONTEXT_ENUM',
                description: ['Context field'],
                optional: false
              }
            ]
          }
        ]
      };

      const result = engine.generateSingle(dialect);
      
      // This tests the context object creation on lines 942-946
      expect(result).toContain('context_test');
      expect(result).toContain('ParsedMAVLinkMessage');
      expect(result).toContain('CONTEXT_MESSAGE');
      expect(result).toBeDefined();
    });
  });
});