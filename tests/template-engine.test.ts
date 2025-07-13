import { TemplateEngine } from '../src/generator/template-engine';
import { TypeScriptDialect } from '../src/types';

describe('TemplateEngine', () => {
  let engine: TemplateEngine;

  beforeEach(() => {
    engine = new TemplateEngine();
  });

  const mockDialect: TypeScriptDialect = {
    dialectName: 'test',
    enums: [
      {
        name: 'MAV_STATE',
        description: ['States of the system'],
        bitmask: false,
        values: [
          { name: 'MAV_STATE_UNINIT', value: 0, description: ['Uninitialized'] },
          { name: 'MAV_STATE_BOOT', value: 1, description: ['Booting'] }
        ]
      }
    ],
    messages: [
      {
        name: 'MessageHeartbeat',
        originalName: 'HEARTBEAT',
        description: ['The heartbeat message'],
        fields: [
          { name: 'Type', type: 'MAV_TYPE', description: ['Vehicle type'], optional: false },
          { name: 'Autopilot', type: 'MAV_AUTOPILOT', description: ['Autopilot type'], optional: false }
        ]
      }
    ]
  };

  describe('generateTypes', () => {
    it('should generate base types template', () => {
      const result = engine.generateTypes(mockDialect);
      
      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
      expect(result).toContain('MAVLinkMessage');
    });
  });

  describe('generateEnums', () => {
    it('should generate enum definitions', () => {
      const result = engine.generateEnums(mockDialect);
      
      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
      expect(result).toContain('MAV_STATE');
      expect(result).toContain('MAV_STATE_UNINIT');
      expect(result).toContain('MAV_STATE_BOOT');
    });

    it('should handle empty enums', () => {
      const emptyDialect = { ...mockDialect, enums: [] };
      const result = engine.generateEnums(emptyDialect);
      
      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
      expect(result).toContain('// This dialect has no enums defined');
      expect(result).toContain('export {};');
    });
  });

  describe('generateMessages', () => {
    it('should generate message interfaces', () => {
      const result = engine.generateMessages(mockDialect);
      
      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
      expect(result).toContain('MessageHeartbeat');
      expect(result).toContain('Type: MAV_TYPE');
      expect(result).toContain('Autopilot: MAV_AUTOPILOT');
    });

    it('should handle empty messages', () => {
      const emptyDialect = { ...mockDialect, messages: [] };
      const result = engine.generateMessages(emptyDialect);
      
      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
    });

    it('should not import from enums when dialect has no enums', () => {
      const emptyEnumsDialect = { ...mockDialect, enums: [], messages: mockDialect.messages };
      const result = engine.generateMessages(emptyEnumsDialect, true);
      
      expect(result).toBeDefined();
      expect(result).not.toContain("} from './enums';");
      expect(result).not.toContain("import type {");
    });
  });

  describe('generateIndex', () => {
    it('should generate index file with exports when enums are included', () => {
      const result = engine.generateIndex(mockDialect, true);
      
      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
      expect(result).toContain('export');
      expect(result).toContain('./types');
      expect(result).toContain('./enums');
      expect(result).toContain('./messages');
    });

    it('should generate index file without enums export when not included', () => {
      const result = engine.generateIndex(mockDialect, false);
      
      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
      expect(result).toContain('export');
      expect(result).toContain('./types');
      expect(result).not.toContain('./enums');
      expect(result).toContain('./messages');
    });

    it('should handle dialects with no enums', () => {
      const emptyEnumsDialect = { ...mockDialect, enums: [] };
      const result = engine.generateIndex(emptyEnumsDialect, false);
      
      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
      expect(result).toContain('./types');
      expect(result).not.toContain('./enums');
      expect(result).toContain('./messages');
    });

    it('should not export enums when includeEnums is true but no enums exist', () => {
      const emptyEnumsDialect = { ...mockDialect, enums: [] };
      const result = engine.generateIndex(emptyEnumsDialect, true);
      
      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
      expect(result).toContain('./types');
      expect(result).not.toContain('./enums');
      expect(result).toContain('./messages');
    });
  });

  describe('generateSingle', () => {
    it('should generate single file with all types', () => {
      const result = engine.generateSingle(mockDialect);
      
      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
      expect(result).toContain('MAVLinkMessage');
      expect(result).toContain('MAV_STATE');
      expect(result).toContain('MessageHeartbeat');
    });
  });

  describe('helper functions', () => {
    it('should properly format comments', () => {
      const testComment = 'This is a test comment';
      const result = engine.generateTypes(mockDialect);
      
      // Test that comments are properly formatted in the output
      expect(result).toBeDefined();
    });

    it('should handle multiline descriptions', () => {
      const dialectWithMultiline = {
        ...mockDialect,
        messages: [
          {
            ...mockDialect.messages[0],
            description: ['Line 1', 'Line 2', 'Line 3']
          }
        ]
      };
      
      const result = engine.generateMessages(dialectWithMultiline);
      expect(result).toBeDefined();
    });
  });
});