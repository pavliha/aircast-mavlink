import { XMLParser } from '../src/xml-parser';
import { MAVLinkDialectDefinition } from '../src/types';

describe('XMLParser', () => {
  let parser: XMLParser;

  beforeEach(() => {
    parser = new XMLParser();
  });

  describe('parseXML', () => {
    const mockXMLContent = `<?xml version="1.0"?>
<mavlink>
  <version>3</version>
  <dialect>0</dialect>
  <enums>
    <enum name="MAV_STATE">
      <description>States of the system</description>
      <entry value="0" name="MAV_STATE_UNINIT">
        <description>Uninitialized system</description>
      </entry>
      <entry value="1" name="MAV_STATE_BOOT">
        <description>System is booting</description>
      </entry>
    </enum>
  </enums>
  <messages>
    <message id="0" name="HEARTBEAT">
      <description>The heartbeat message</description>
      <field type="uint8_t" name="type" enum="MAV_TYPE">Vehicle type</field>
      <field type="uint8_t" name="autopilot" enum="MAV_AUTOPILOT">Autopilot type</field>
    </message>
  </messages>
</mavlink>`;

    it('should parse XML content successfully', async () => {
      // Mock fs.readFile to return the XML content
      const fs = require('fs');
      const mockReadFile = jest.fn().mockResolvedValue(mockXMLContent);
      jest.spyOn(fs.promises, 'readFile').mockImplementation(mockReadFile);
      
      const definition = await parser.parseFromFile('test.xml');
      
      expect(definition).toBeDefined();
      expect(typeof definition).toBe('object');
      
      // Cleanup
      mockReadFile.mockRestore();
    });

    it('should handle invalid XML gracefully', async () => {
      const invalidXML = '<invalid><xml></invalid>';
      
      // Mock fs.readFile to return invalid XML
      jest.doMock('fs', () => ({
        promises: {
          readFile: jest.fn().mockResolvedValue(invalidXML)
        }
      }));

      await expect(parser.parseFromFile('invalid.xml')).rejects.toThrow();
    });
  });

  describe('processEnum', () => {
    it('should process enum definitions correctly', () => {
      const mockEnumData = {
        $: { name: 'MAV_STATE', bitmask: 'false' },
        description: 'States of the system',
        entry: [
          { $: { name: 'MAV_STATE_UNINIT', value: '0' }, description: 'Uninitialized' },
          { $: { name: 'MAV_STATE_BOOT', value: '1' }, description: 'Booting' }
        ]
      };

      // Access private method through type assertion
      const result = (parser as any).processEnum(mockEnumData);
      
      expect(result).toBeDefined();
      expect(result.name).toBe('MAV_STATE');
      expect(result.entries).toHaveLength(2);
      expect(result.entries[0].name).toBe('MAV_STATE_UNINIT');
      expect(result.entries[0].value).toBe('0');
    });

    it('should return null for invalid enum data', () => {
      const invalidEnumData = { description: 'Invalid enum' };
      
      const result = (parser as any).processEnum(invalidEnumData);
      
      expect(result).toBeNull();
    });
  });

  describe('processMessage', () => {
    it('should process message definitions correctly', () => {
      const mockMessageData = {
        $: { id: '0', name: 'HEARTBEAT' },
        description: 'The heartbeat message',
        field: [
          { $: { name: 'type', type: 'uint8_t', enum: 'MAV_TYPE' }, _: 'Vehicle type' },
          { $: { name: 'autopilot', type: 'uint8_t', enum: 'MAV_AUTOPILOT' }, _: 'Autopilot type' }
        ]
      };

      const result = (parser as any).processMessage(mockMessageData);
      
      expect(result).toBeDefined();
      expect(result.name).toBe('HEARTBEAT');
      expect(result.id).toBe(0);
      expect(result.fields).toHaveLength(2);
      expect(result.fields[0].name).toBe('type');
      expect(result.fields[0].type).toBe('uint8_t');
      expect(result.fields[0].enum).toBe('MAV_TYPE');
    });

    it('should return null for invalid message data', () => {
      const invalidMessageData = { description: 'Invalid message' };
      
      const result = (parser as any).processMessage(invalidMessageData);
      
      expect(result).toBeNull();
    });
  });

  afterEach(() => {
    parser.reset();
  });
});