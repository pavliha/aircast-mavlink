import { XMLParser } from '../src/generator/xml-parser';
import { promises as fs } from 'fs';
import * as path from 'path';

// Mock node-fetch for URL parsing tests
jest.mock('node-fetch', () => {
  return jest.fn();
});

describe('XMLParser Enhanced Coverage Tests', () => {
  let parser: XMLParser;
  const testOutputDir = path.join(__dirname, '../test-xml-output');

  beforeEach(() => {
    parser = new XMLParser();
  });

  afterEach(async () => {
    // Clean up test files
    if (require('fs').existsSync(testOutputDir)) {
      await fs.rm(testOutputDir, { recursive: true, force: true });
    }
    parser.reset();
    jest.clearAllMocks();
  });

  describe('parseFromFile edge cases', () => {
    test('should handle file that does not exist', async () => {
      await expect(parser.parseFromFile('/nonexistent/path/file.xml')).rejects.toThrow();
    });

    test('should handle invalid XML content', async () => {
      const invalidXmlPath = path.join(__dirname, 'invalid-test.xml');
      const invalidXml = `<?xml version="1.0"?>
<mavlink>
  <unclosed-tag>
  <another-unclosed-tag>
</mavlink>`;
      
      await fs.writeFile(invalidXmlPath, invalidXml);
      
      try {
        await expect(parser.parseFromFile(invalidXmlPath)).rejects.toThrow();
      } finally {
        if (require('fs').existsSync(invalidXmlPath)) {
          await fs.unlink(invalidXmlPath);
        }
      }
    });

    test('should handle XML without mavlink root element', async () => {
      const noMavlinkPath = path.join(__dirname, 'no-mavlink-test.xml');
      const noMavlinkXml = `<?xml version="1.0"?>
<root>
  <other>content</other>
</root>`;
      
      await fs.writeFile(noMavlinkPath, noMavlinkXml);
      
      try {
        const result = await parser.parseFromFile(noMavlinkPath);
        // Should handle gracefully even without mavlink root
        expect(result).toBeDefined();
      } finally {
        if (require('fs').existsSync(noMavlinkPath)) {
          await fs.unlink(noMavlinkPath);
        }
      }
    });
  });

  describe('parseFromURL edge cases', () => {
    test('should handle URL fetch failure', async () => {
      const mockFetch = require('node-fetch');
      mockFetch.mockRejectedValueOnce(new Error('Network error'));

      await expect(parser.parseFromURL('https://example.com/nonexistent.xml')).rejects.toThrow('Network error');
    });

    test('should handle non-OK HTTP response', async () => {
      const mockFetch = require('node-fetch');
      mockFetch.mockResolvedValueOnce({
        ok: false,
        statusText: 'Not Found'
      });

      await expect(parser.parseFromURL('https://example.com/notfound.xml')).rejects.toThrow('Failed to fetch');
    });

    test('should handle invalid XML from URL', async () => {
      const mockFetch = require('node-fetch');
      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: jest.fn().mockResolvedValue('invalid xml content <unclosed>')
      });

      await expect(parser.parseFromURL('https://example.com/invalid.xml')).rejects.toThrow();
    });

    test('should successfully parse valid XML from URL', async () => {
      const validXml = `<?xml version="1.0"?>
<mavlink>
  <version>3</version>
  <messages>
    <message name="TEST_MESSAGE" id="1">
      <description>Test message</description>
      <field name="test_field" type="uint8_t">Test field</field>
    </message>
  </messages>
</mavlink>`;

      const mockFetch = require('node-fetch');
      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: jest.fn().mockResolvedValue(validXml)
      });

      const result = await parser.parseFromURL('https://example.com/valid.xml');
      expect(result).toBeDefined();
      expect(result.messages).toHaveLength(1);
    });
  });

  describe('processDefinition with includes', () => {
    test('should handle single include string', async () => {
      const mockFetch = require('node-fetch');
      
      // Mock the main XML with include
      const mainXml = `<?xml version="1.0"?>
<mavlink>
  <version>3</version>
  <include>common.xml</include>
  <messages>
    <message name="MAIN_MESSAGE" id="1">
      <field name="main_field" type="uint8_t">Main field</field>
    </message>
  </messages>
</mavlink>`;

      // Mock the included XML
      const includedXml = `<?xml version="1.0"?>
<mavlink>
  <version>3</version>
  <messages>
    <message name="INCLUDED_MESSAGE" id="2">
      <field name="included_field" type="uint16_t">Included field</field>
    </message>
  </messages>
</mavlink>`;

      mockFetch
        .mockResolvedValueOnce({
          ok: true,
          text: jest.fn().mockResolvedValue(mainXml)
        })
        .mockResolvedValueOnce({
          ok: true,
          text: jest.fn().mockResolvedValue(includedXml)
        });

      const result = await parser.parseFromURL('https://example.com/main.xml');
      
      expect(result.messages).toHaveLength(2);
      expect(result.messages!.some(m => m.name === 'MAIN_MESSAGE')).toBe(true);
      expect(result.messages!.some(m => m.name === 'INCLUDED_MESSAGE')).toBe(true);
    });

    test('should handle array of includes', async () => {
      const mockFetch = require('node-fetch');
      
      const mainXml = `<?xml version="1.0"?>
<mavlink>
  <version>3</version>
  <include>first.xml</include>
  <include>second.xml</include>
  <messages>
    <message name="MAIN_MESSAGE" id="1">
      <field name="main_field" type="uint8_t">Main field</field>
    </message>
  </messages>
</mavlink>`;

      const firstInclude = `<?xml version="1.0"?>
<mavlink>
  <enums>
    <enum name="FIRST_ENUM">
      <entry name="VALUE_1" value="1">First value</entry>
    </enum>
  </enums>
</mavlink>`;

      const secondInclude = `<?xml version="1.0"?>
<mavlink>
  <enums>
    <enum name="SECOND_ENUM">
      <entry name="VALUE_2" value="2">Second value</entry>
    </enum>
  </enums>
</mavlink>`;

      mockFetch
        .mockResolvedValueOnce({
          ok: true,
          text: jest.fn().mockResolvedValue(mainXml)
        })
        .mockResolvedValueOnce({
          ok: true,
          text: jest.fn().mockResolvedValue(firstInclude)
        })
        .mockResolvedValueOnce({
          ok: true,
          text: jest.fn().mockResolvedValue(secondInclude)
        });

      const result = await parser.parseFromURL('https://example.com/main.xml');
      
      expect(result.enums).toHaveLength(2);
      expect(result.enums!.some(e => e.name === 'FIRST_ENUM')).toBe(true);
      expect(result.enums!.some(e => e.name === 'SECOND_ENUM')).toBe(true);
    });

    test('should handle failed include with warning', async () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
      const mockFetch = require('node-fetch');
      
      const mainXml = `<?xml version="1.0"?>
<mavlink>
  <version>3</version>
  <include>failing-include.xml</include>
  <messages>
    <message name="MAIN_MESSAGE" id="1">
      <field name="main_field" type="uint8_t">Main field</field>
    </message>
  </messages>
</mavlink>`;

      mockFetch
        .mockResolvedValueOnce({
          ok: true,
          text: jest.fn().mockResolvedValue(mainXml)
        })
        .mockRejectedValueOnce(new Error('Include fetch failed'));

      const result = await parser.parseFromURL('https://example.com/main.xml');
      
      expect(result.messages).toHaveLength(1);
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('Warning: Failed to process include'),
        expect.any(Error)
      );
      
      consoleSpy.mockRestore();
    });

    test('should not reprocess same URL twice', async () => {
      const mockFetch = require('node-fetch');
      
      const mainXml = `<?xml version="1.0"?>
<mavlink>
  <version>3</version>
  <include>common.xml</include>
  <include>common.xml</include>
  <messages>
    <message name="MAIN_MESSAGE" id="1">
      <field name="main_field" type="uint8_t">Main field</field>
    </message>
  </messages>
</mavlink>`;

      const commonXml = `<?xml version="1.0"?>
<mavlink>
  <messages>
    <message name="COMMON_MESSAGE" id="2">
      <field name="common_field" type="uint16_t">Common field</field>
    </message>
  </messages>
</mavlink>`;

      mockFetch
        .mockResolvedValueOnce({
          ok: true,
          text: jest.fn().mockResolvedValue(mainXml)
        })
        .mockResolvedValueOnce({
          ok: true,
          text: jest.fn().mockResolvedValue(commonXml)
        });

      const result = await parser.parseFromURL('https://example.com/main.xml');
      
      expect(result.messages).toHaveLength(2);
      expect(mockFetch).toHaveBeenCalledTimes(2); // Should not fetch common.xml twice
    });
  });

  describe('processDefinition with enums', () => {
    test('should handle single enum', async () => {
      const xmlContent = `<?xml version="1.0"?>
<mavlink>
  <enums>
    <enum name="SINGLE_ENUM" bitmask="true">
      <description>Single enum description</description>
      <entry name="VALUE_1" value="1">
        <description>First value</description>
      </entry>
    </enum>
  </enums>
</mavlink>`;

      const mockFetch = require('node-fetch');
      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: jest.fn().mockResolvedValue(xmlContent)
      });

      const result = await parser.parseFromURL('https://example.com/single-enum.xml');
      
      expect(result.enums).toHaveLength(1);
      expect(result.enums![0].name).toBe('SINGLE_ENUM');
      expect(result.enums![0].bitmask).toBe(true);
      expect(result.enums![0].description).toBe('Single enum description');
      expect(result.enums![0].entries).toHaveLength(1);
    });

    test('should handle enum without entries', async () => {
      const xmlContent = `<?xml version="1.0"?>
<mavlink>
  <enums>
    <enum name="EMPTY_ENUM">
      <description>Empty enum</description>
    </enum>
  </enums>
</mavlink>`;

      const mockFetch = require('node-fetch');
      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: jest.fn().mockResolvedValue(xmlContent)
      });

      const result = await parser.parseFromURL('https://example.com/empty-enum.xml');
      
      expect(result.enums).toHaveLength(1);
      expect(result.enums![0].entries).toHaveLength(0);
    });

    test('should handle enum with single entry object (not array)', async () => {
      const xmlContent = `<?xml version="1.0"?>
<mavlink>
  <enums>
    <enum name="SINGLE_ENTRY_ENUM">
      <entry name="ONLY_VALUE" value="42">Only entry</entry>
    </enum>
  </enums>
</mavlink>`;

      const mockFetch = require('node-fetch');
      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: jest.fn().mockResolvedValue(xmlContent)
      });

      const result = await parser.parseFromURL('https://example.com/single-entry.xml');
      
      expect(result.enums).toHaveLength(1);
      expect(result.enums![0].entries).toHaveLength(1);
      expect(result.enums![0].entries[0].name).toBe('ONLY_VALUE');
      expect(result.enums![0].entries[0].value).toBe('42');
    });

    test('should handle enum entry with text content as description', async () => {
      const xmlContent = `<?xml version="1.0"?>
<mavlink>
  <enums>
    <enum name="TEXT_DESC_ENUM">
      <entry name="TEXT_VALUE" value="1">Text description content</entry>
    </enum>
  </enums>
</mavlink>`;

      const mockFetch = require('node-fetch');
      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: jest.fn().mockResolvedValue(xmlContent)
      });

      const result = await parser.parseFromURL('https://example.com/text-desc.xml');
      
      expect(result.enums).toHaveLength(1);
      expect(result.enums![0].entries[0].description).toBe('Text description content');
    });
  });

  describe('processDefinition with messages', () => {
    test('should handle single message', async () => {
      const xmlContent = `<?xml version="1.0"?>
<mavlink>
  <messages>
    <message name="SINGLE_MESSAGE" id="42">
      <description>Single message description</description>
      <field name="test_field" type="uint8_t" enum="TEST_ENUM">
        <description>Test field description</description>
      </field>
    </message>
  </messages>
</mavlink>`;

      const mockFetch = require('node-fetch');
      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: jest.fn().mockResolvedValue(xmlContent)
      });

      const result = await parser.parseFromURL('https://example.com/single-message.xml');
      
      expect(result.messages).toHaveLength(1);
      expect(result.messages![0].name).toBe('SINGLE_MESSAGE');
      expect(result.messages![0].id).toBe(42);
      expect(result.messages![0].description).toBe('Single message description');
      expect(result.messages![0].fields).toHaveLength(1);
      expect(result.messages![0].fields[0].enum).toBe('TEST_ENUM');
    });

    test('should handle message without fields', async () => {
      const xmlContent = `<?xml version="1.0"?>
<mavlink>
  <messages>
    <message name="EMPTY_MESSAGE" id="1">
      <description>Message without fields</description>
    </message>
  </messages>
</mavlink>`;

      const mockFetch = require('node-fetch');
      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: jest.fn().mockResolvedValue(xmlContent)
      });

      const result = await parser.parseFromURL('https://example.com/empty-message.xml');
      
      expect(result.messages).toHaveLength(1);
      expect(result.messages![0].fields).toHaveLength(0);
    });

    test('should handle message with single field object (not array)', async () => {
      const xmlContent = `<?xml version="1.0"?>
<mavlink>
  <messages>
    <message name="SINGLE_FIELD_MESSAGE" id="1">
      <field name="only_field" type="float">Only field description</field>
    </message>
  </messages>
</mavlink>`;

      const mockFetch = require('node-fetch');
      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: jest.fn().mockResolvedValue(xmlContent)
      });

      const result = await parser.parseFromURL('https://example.com/single-field.xml');
      
      expect(result.messages).toHaveLength(1);
      expect(result.messages![0].fields).toHaveLength(1);
      expect(result.messages![0].fields[0].name).toBe('only_field');
      expect(result.messages![0].fields[0].type).toBe('float');
    });

    test('should handle field with text content as description', async () => {
      const xmlContent = `<?xml version="1.0"?>
<mavlink>
  <messages>
    <message name="TEXT_FIELD_MESSAGE" id="1">
      <field name="text_field" type="uint16_t">Field description as text content</field>
    </message>
  </messages>
</mavlink>`;

      const mockFetch = require('node-fetch');
      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: jest.fn().mockResolvedValue(xmlContent)
      });

      const result = await parser.parseFromURL('https://example.com/text-field.xml');
      
      expect(result.messages).toHaveLength(1);
      expect(result.messages![0].fields[0].description).toBe('Field description as text content');
    });
  });

  describe('resolveIncludeUrl', () => {
    test('should resolve relative include from file source', () => {
      const result = (parser as any).resolveIncludeUrl('common.xml', '/path/to/main.xml');
      expect(result).toBe('/path/to/common.xml');
    });

    test('should resolve relative include from URL source', () => {
      const result = (parser as any).resolveIncludeUrl(
        'common.xml',
        'https://example.com/dialects/main.xml'
      );
      expect(result).toBe('https://example.com/dialects/common.xml');
    });

    test('should handle absolute URL include', () => {
      const result = (parser as any).resolveIncludeUrl(
        'https://other.com/other.xml',
        'https://example.com/main.xml'
      );
      expect(result).toBe('https://other.com/other.xml');
    });

    test('should handle include with path separators', () => {
      const result = (parser as any).resolveIncludeUrl(
        'subdirectory/include.xml',
        'https://example.com/main/main.xml'
      );
      expect(result).toBe('https://example.com/main/subdirectory/include.xml');
    });
  });

  describe('reset functionality', () => {
    test('should clear processed URLs on reset', async () => {
      const mockFetch = require('node-fetch');
      
      const xmlContent = `<?xml version="1.0"?>
<mavlink>
  <include>common.xml</include>
  <messages>
    <message name="TEST" id="1">
      <field name="field" type="uint8_t">Test field</field>
    </message>
  </messages>
</mavlink>`;

      const commonXml = `<?xml version="1.0"?>
<mavlink>
  <messages>
    <message name="COMMON" id="2">
      <field name="common_field" type="uint8_t">Common field</field>
    </message>
  </messages>
</mavlink>`;

      mockFetch
        .mockResolvedValueOnce({
          ok: true,
          text: jest.fn().mockResolvedValue(xmlContent)
        })
        .mockResolvedValueOnce({
          ok: true,
          text: jest.fn().mockResolvedValue(commonXml)
        })
        .mockResolvedValueOnce({
          ok: true,
          text: jest.fn().mockResolvedValue(xmlContent)
        })
        .mockResolvedValueOnce({
          ok: true,
          text: jest.fn().mockResolvedValue(commonXml)
        });

      // First parse
      await parser.parseFromURL('https://example.com/main.xml');
      
      // Reset and parse again - should fetch includes again
      parser.reset();
      const result = await parser.parseFromURL('https://example.com/main.xml');
      
      expect(result.messages).toHaveLength(2);
      expect(mockFetch).toHaveBeenCalledTimes(4); // Should fetch includes again after reset
    });
  });

  describe('edge cases and error handling', () => {
    test('should handle XML with malformed structure', async () => {
      const xmlContent = `<?xml version="1.0"?>
<mavlink>
  <enums>
    <enum>
      <!-- Missing name attribute -->
      <entry name="VALUE" value="1">Test value</entry>
    </enum>
  </enums>
</mavlink>`;

      const mockFetch = require('node-fetch');
      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: jest.fn().mockResolvedValue(xmlContent)
      });

      const result = await parser.parseFromURL('https://example.com/malformed.xml');
      
      // Should handle gracefully
      expect(result).toBeDefined();
    });

    test('should handle XML parsing error in processDefinition', async () => {
      const xmlPath = path.join(__dirname, 'process-error-test.xml');
      const xmlContent = `<?xml version="1.0"?>
<mavlink>
  <version>3</version>
</mavlink>`;
      
      await fs.writeFile(xmlPath, xmlContent);
      
      try {
        // Simulate an error in processDefinition by mocking
        const originalProcess = (parser as any).processDefinition;
        (parser as any).processDefinition = jest.fn().mockRejectedValue(new Error('Processing error'));
        
        await expect(parser.parseFromFile(xmlPath)).rejects.toThrow('Processing error');
        
        // Restore original method
        (parser as any).processDefinition = originalProcess;
      } finally {
        if (require('fs').existsSync(xmlPath)) {
          await fs.unlink(xmlPath);
        }
      }
    });

    test('should handle missing dialect version', async () => {
      const xmlContent = `<?xml version="1.0"?>
<mavlink>
  <!-- No version specified -->
  <messages>
    <message name="TEST_MESSAGE" id="1">
      <field name="test_field" type="uint8_t">Test field</field>
    </message>
  </messages>
</mavlink>`;

      const mockFetch = require('node-fetch');
      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: jest.fn().mockResolvedValue(xmlContent)
      });

      const result = await parser.parseFromURL('https://example.com/no-version.xml');
      
      expect(result.version).toBeUndefined();
      expect(result.messages).toHaveLength(1);
    });

    test('should handle missing dialect number', async () => {
      const xmlContent = `<?xml version="1.0"?>
<mavlink>
  <version>3</version>
  <!-- No dialect number -->
  <messages>
    <message name="TEST_MESSAGE" id="1">
      <field name="test_field" type="uint8_t">Test field</field>
    </message>
  </messages>
</mavlink>`;

      const mockFetch = require('node-fetch');
      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: jest.fn().mockResolvedValue(xmlContent)
      });

      const result = await parser.parseFromURL('https://example.com/no-dialect.xml');
      
      expect(result.dialect).toBeUndefined();
      expect(result.messages).toHaveLength(1);
    });

    test('should handle extension fields marked with "extensions" string', async () => {
      const xmlContent = `<?xml version="1.0"?>
<mavlink>
  <messages>
    <message name="EXTENSION_TEST" id="1">
      <field name="normal_field" type="uint8_t">Normal field</field>
      <field name="extensions" type="string">extensions</field>
      <field name="extension_field" type="uint16_t">Extension field</field>
    </message>
  </messages>
</mavlink>`;

      const mockFetch = require('node-fetch');
      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: jest.fn().mockResolvedValue(xmlContent)
      });

      const result = await parser.parseFromURL('https://example.com/extensions.xml');
      
      expect(result.messages).toHaveLength(1);
      expect(result.messages![0].fields).toHaveLength(2); // Should skip "extensions" string
      expect(result.messages![0].fields[0].name).toBe('normal_field');
      expect(result.messages![0].fields[0].extension).toBeFalsy();
      expect(result.messages![0].fields[1].name).toBe('extension_field');
      expect(result.messages![0].fields[1].extension).toBe(true);
    });

    test('should handle invalid field objects gracefully', async () => {
      const xmlContent = `<?xml version="1.0"?>
<mavlink>
  <messages>
    <message name="INVALID_FIELDS" id="1">
      <field name="valid_field" type="uint8_t">Valid field</field>
      <field type="uint8_t">Field without name</field>
      <field name="field_without_type">Field without type</field>
    </message>
  </messages>
</mavlink>`;

      const mockFetch = require('node-fetch');
      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: jest.fn().mockResolvedValue(xmlContent)
      });

      const result = await parser.parseFromURL('https://example.com/invalid-fields.xml');
      
      expect(result.messages).toHaveLength(1);
      expect(result.messages![0].fields).toHaveLength(1); // Only valid field should be included
      expect(result.messages![0].fields[0].name).toBe('valid_field');
    });
  });
});