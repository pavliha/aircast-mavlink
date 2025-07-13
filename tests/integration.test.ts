import { promises as fs } from 'fs';
import { join } from 'path';
import { MAVLinkGenerator } from '../src/generator/generator';
import { DialectParserFactory } from '../src/parser/dialect-factory';
import { MAVLinkParser } from '../src/parser/mavlink-parser';

describe('MAVLink Integration Tests', () => {
  const testOutputDir = join(process.cwd(), 'test-output');
  const testDistDir = join(process.cwd(), 'test-dist');
  
  beforeAll(async () => {
    // Create test directories
    await fs.mkdir(testOutputDir, { recursive: true });
    await fs.mkdir(testDistDir, { recursive: true });
    
    // Mock process.cwd() to use test directory for dist generation
    const originalCwd = process.cwd;
    process.cwd = () => testDistDir;
    
    // Restore after setup
    process.cwd = originalCwd;
  });

  afterAll(async () => {
    // Clean up test directories
    try {
      await fs.rm(testOutputDir, { recursive: true, force: true });
      await fs.rm(testDistDir, { recursive: true, force: true });
    } catch (error) {
      // Ignore cleanup errors
    }
  });

  describe('End-to-End Code Generation and Decoding', () => {
    let generator: MAVLinkGenerator;

    beforeEach(() => {
      generator = new MAVLinkGenerator();
    });

    it('should generate types and decoders from XML and decode messages successfully', async () => {
      // Mock XML content with a simple test message
      const mockXMLContent = `<?xml version="1.0"?>
<mavlink>
  <version>3</version>
  <dialect>0</dialect>
  <messages>
    <message id="0" name="HEARTBEAT">
      <description>The heartbeat message shows that a system or component is present and responding.</description>
      <field type="uint8_t" name="type" enum="MAV_TYPE">Vehicle or component type.</field>
      <field type="uint8_t" name="autopilot" enum="MAV_AUTOPILOT">Autopilot type / class.</field>
      <field type="uint8_t" name="base_mode" enum="MAV_MODE_FLAG">System mode bitmap.</field>
      <field type="uint32_t" name="custom_mode">A bitfield for use for autopilot-specific flags</field>
      <field type="uint8_t" name="system_status" enum="MAV_STATE">System status flag.</field>
      <field type="uint8_t_mavlink_version" name="mavlink_version">MAVLink version</field>
    </message>
    <message id="1" name="SYS_STATUS">
      <description>The general system state.</description>
      <field type="uint32_t" name="onboard_control_sensors_present" enum="MAV_SYS_STATUS_SENSOR">Bitmap showing which onboard controllers and sensors are present.</field>
      <field type="uint32_t" name="onboard_control_sensors_enabled" enum="MAV_SYS_STATUS_SENSOR">Bitmap showing which onboard controllers and sensors are enabled.</field>
      <field type="uint16_t" name="load">Maximum usage in percent of the mainloop time.</field>
      <field type="uint16_t" name="voltage_battery" units="mV">Battery voltage, UINT16_MAX: Voltage not available/unknown</field>
      <field type="int8_t" name="battery_remaining" units="%">Battery energy remaining, -1: Battery remaining energy not available/unknown</field>
    </message>
    <message id="33" name="GLOBAL_POSITION_INT">
      <description>The filtered global position (e.g. fused GPS and accelerometers).</description>
      <field type="uint32_t" name="time_boot_ms" units="ms">Timestamp (time since system boot).</field>
      <field type="int32_t" name="lat" units="degE7">Latitude, expressed</field>
      <field type="int32_t" name="lon" units="degE7">Longitude, expressed</field>
      <field type="int32_t" name="alt" units="mm">Altitude (MSL).</field>
      <field type="int32_t" name="relative_alt" units="mm">Altitude above ground</field>
      <field type="int16_t" name="vx" units="cm/s">Ground X Speed (Latitude, positive north)</field>
      <field type="int16_t" name="vy" units="cm/s">Ground Y Speed (Longitude, positive east)</field>
      <field type="int16_t" name="vz" units="cm/s">Ground Z Speed (Altitude, positive down)</field>
      <field type="uint16_t" name="hdg" units="cdeg">Vehicle heading (yaw angle), 0.0..359.99 degrees.</field>
    </message>
  </messages>
</mavlink>`;

      // Mock process.cwd() for this test
      const originalCwd = process.cwd;
      process.cwd = () => testDistDir;

      try {
        // Write mock XML file
        const xmlPath = join(testOutputDir, 'test.xml');
        await fs.writeFile(xmlPath, mockXMLContent);

        // Generate types and decoders
        await generator.generateFromFile(xmlPath, testOutputDir, {
          dialectName: 'test',
          outputFormat: 'separate',
          includeEnums: true,
          includeTypeGuards: true
        });

        // Verify TypeScript files were generated
        const generatedFiles = [
          join(testOutputDir, 'types.ts'),
          join(testOutputDir, 'messages.ts'),
          join(testOutputDir, 'enums.ts'),
          join(testOutputDir, 'index.ts')
        ];

        for (const file of generatedFiles) {
          expect(await fs.access(file).then(() => true).catch(() => false)).toBe(true);
        }

        // Verify decoder file was generated in the dialect directory
        const decoderFile = join(testOutputDir, 'decoder.ts');
        expect(await fs.access(decoderFile).then(() => true).catch(() => false)).toBe(true);

        // Read and verify decoder content
        const decoderContent = await fs.readFile(decoderFile, 'utf-8');
        expect(decoderContent).toContain('TestParser');
        expect(decoderContent).toContain('HEARTBEAT');
        expect(decoderContent).toContain('SYS_STATUS'); 
        expect(decoderContent).toContain('GLOBAL_POSITION_INT');

        // Test decoder functionality by dynamically importing the generated decoder
        const decoderModule = await import(decoderFile);
        const TestParser = decoderModule.TestParser;
        const parser = new TestParser();
        
        expect(parser.getDialectName()).toBe('test');
        expect(parser.getSupportedMessageIds()).toContain(0);
        expect(parser.getSupportedMessageIds()).toContain(1);
        expect(parser.getSupportedMessageIds()).toContain(33);
        expect(parser.getSupportedMessageIds()).toHaveLength(3);

      } finally {
        process.cwd = originalCwd;
      }
    }, 15000); // Increase timeout for file operations

    it('should handle array fields correctly in decoder generation', async () => {
      const xmlWithArrays = `<?xml version="1.0"?>
<mavlink>
  <version>3</version>
  <messages>
    <message id="25" name="GPS_STATUS">
      <description>The positioning status, as reported by GPS.</description>
      <field type="uint8_t" name="satellites_visible">Number of satellites visible</field>
      <field type="uint8_t[20]" name="satellite_prn">Global satellite ID</field>
      <field type="uint8_t[20]" name="satellite_used">0: Satellite not used, 1: used for localization</field>
      <field type="uint8_t[20]" name="satellite_elevation" units="deg">Elevation (0: right on top of receiver, 90: on the horizon) of satellite</field>
      <field type="uint8_t[20]" name="satellite_azimuth" units="deg">Direction of satellite, 0: 0 deg, 255: 360 deg.</field>
      <field type="uint8_t[20]" name="satellite_snr" units="dB">Signal to noise ratio of satellite</field>
    </message>
  </messages>
</mavlink>`;

      const originalCwd = process.cwd;
      process.cwd = () => testDistDir;

      try {
        const xmlPath = join(testOutputDir, 'test-arrays.xml');
        await fs.writeFile(xmlPath, xmlWithArrays);

        await generator.generateFromFile(xmlPath, join(testOutputDir, 'arrays'), {
          dialectName: 'arrays',
          outputFormat: 'separate',
          includeEnums: false,
          includeTypeGuards: false
        });

        const decoderFile = join(testOutputDir, 'arrays', 'decoder.ts');
        const decoderContent = await fs.readFile(decoderFile, 'utf-8');
        
        // Verify array fields are handled correctly
        expect(decoderContent).toContain('arrayLength: 20');
        expect(decoderContent).toContain("name: 'satellite_prn'");
        expect(decoderContent).toContain("type: 'uint8_t'");

        const decoderModule = await import(decoderFile);
        const ArraysParser = decoderModule.ArraysParser;
        const parser = new ArraysParser();
        
        expect(parser.getDialectName()).toBe('arrays');
        expect(parser.getSupportedMessageIds()).toContain(25);
        expect(parser.getSupportedMessageIds()).toHaveLength(1);

      } finally {
        process.cwd = originalCwd;
      }
    }, 10000);
  });

  describe('Dialect Parser Integration', () => {
    let parser: any;

    beforeEach(async () => {
      parser = await DialectParserFactory.createParser('common');
    });

    it('should decode HEARTBEAT message correctly', () => {
      const heartbeatFrame = {
        magic: 0xFD,
        length: 9,
        sequence: 1,
        system_id: 1,
        component_id: 1,
        message_id: 0,
        payload: new Uint8Array([
          6,    // type: MAV_TYPE_GCS
          3,    // autopilot: MAV_AUTOPILOT_ARDUPILOTMEGA  
          196,  // base_mode
          0x90, 0x44, 0x00, 0x04, // custom_mode (little endian = 0x04004490)
          4,    // system_status: MAV_STATE_ACTIVE
          3     // mavlink_version
        ]),
        checksum: 0x1234,
        protocol_version: 2 as const
      };

      const decoded = parser.decode(heartbeatFrame);

      expect(decoded.message_name).toBe('HEARTBEAT');
      expect(decoded.message_id).toBe(0);
      expect(decoded.system_id).toBe(1);
      expect(decoded.component_id).toBe(1);
      expect(decoded.protocol_version).toBe(2);

      // Verify payload decoding
      expect(decoded.payload.type).toBe(6);
      expect(decoded.payload.autopilot).toBe(3);
      expect(decoded.payload.base_mode).toBe(196);
      expect(decoded.payload.custom_mode).toBe(67126416); // little endian from [0x90, 0x44, 0x00, 0x04] = 0x04004490
      expect(decoded.payload.system_status).toBe(4);
      expect(decoded.payload.mavlink_version).toBe(3);
    });

    it('should decode SYS_STATUS message with different data types', () => {
      const sysStatusPayload = new Uint8Array(31);
      const view = new DataView(sysStatusPayload.buffer);
      
      // Fill with test data
      view.setUint32(0, 0x12345678, true);   // onboard_control_sensors_present
      view.setUint32(4, 0x87654321, true);   // onboard_control_sensors_enabled  
      view.setUint32(8, 0xABCDEF00, true);   // onboard_control_sensors_health
      view.setUint16(12, 850, true);         // load (85.0%)
      view.setUint16(14, 12600, true);       // voltage_battery (12.6V)
      view.setInt16(16, -500, true);         // current_battery (-5.0A)
      view.setInt8(18, 75);                  // battery_remaining (75%)
      view.setUint16(19, 0, true);           // drop_rate_comm
      view.setUint16(21, 0, true);           // errors_comm
      view.setUint16(23, 0, true);           // errors_count1
      view.setUint16(25, 0, true);           // errors_count2
      view.setUint16(27, 0, true);           // errors_count3
      view.setUint16(29, 0, true);           // errors_count4

      const sysStatusFrame = {
        magic: 0xFD,
        length: 31,
        sequence: 2,
        system_id: 1,
        component_id: 1,
        message_id: 1,
        payload: sysStatusPayload,
        checksum: 0x5678,
        protocol_version: 2 as const
      };

      const decoded = parser.decode(sysStatusFrame);

      expect(decoded.message_name).toBe('SYS_STATUS');
      expect(decoded.payload.onboard_control_sensors_present).toBe(0x12345678);
      expect(decoded.payload.onboard_control_sensors_enabled).toBe(0x87654321);
      expect(decoded.payload.onboard_control_sensors_health).toBe(0xABCDEF00);
      expect(decoded.payload.load).toBe(850);
      expect(decoded.payload.voltage_battery).toBe(12600);
      expect(decoded.payload.current_battery).toBe(-500);
      expect(decoded.payload.battery_remaining).toBe(75);
    });

    it('should handle unknown messages gracefully', () => {
      const unknownFrame = {
        magic: 0xFD,
        length: 8,
        sequence: 3,
        system_id: 1,
        component_id: 1,
        message_id: 99999,
        payload: new Uint8Array([0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08]),
        checksum: 0x9ABC,
        protocol_version: 2 as const
      };

      const decoded = parser.decode(unknownFrame);

      expect(decoded.message_name).toBe('UNKNOWN_99999');
      expect(decoded.message_id).toBe(99999);
      expect(decoded.payload.raw_payload).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('should handle partial payload data gracefully', () => {
      // HEARTBEAT expects 9 bytes but provide only 4
      const partialFrame = {
        magic: 0xFD,
        length: 4,
        sequence: 4,
        system_id: 1,
        component_id: 1,
        message_id: 0,
        payload: new Uint8Array([6, 3, 196, 144]), // Only 4 bytes instead of 9
        checksum: 0xDEF0,
        protocol_version: 2 as const
      };

      const decoded = parser.decode(partialFrame);

      expect(decoded.message_name).toBe('HEARTBEAT');
      expect(decoded.payload.type).toBe(6);
      expect(decoded.payload.autopilot).toBe(3);
      expect(decoded.payload.base_mode).toBe(196);
      expect(decoded.payload.custom_mode).toBe(0); // insufficient bytes for uint32 field
      // Remaining fields should be 0 due to insufficient data
      expect(decoded.payload.system_status).toBe(0);
      expect(decoded.payload.mavlink_version).toBe(0);
    });
  });

  describe('Full Parser Integration', () => {
    let parser: MAVLinkParser;

    beforeEach(() => {
      parser = new MAVLinkParser({
        validateCRC: false // Disable CRC for simpler testing
      });
    });

    it('should parse complete MAVLink v2 frame and decode message', async () => {
      // Create a complete MAVLink v2 HEARTBEAT frame
      const frame = new Uint8Array([
        0xFD,               // Magic (MAVLink v2)
        0x09,               // Payload length
        0x00,               // Incompat flags
        0x00,               // Compat flags
        0x01,               // Sequence
        0x01,               // System ID
        0x01,               // Component ID
        0x00, 0x00, 0x00,   // Message ID (0 = HEARTBEAT, little endian)
        // Payload (9 bytes)
        0x06,               // type
        0x03,               // autopilot
        0xC4,               // base_mode
        0x90, 0x44, 0x00, 0x04, // custom_mode
        0x04,               // system_status
        0x03,               // mavlink_version
        // Checksum (2 bytes)
        0x12, 0x34
      ]);

      const messages = await parser.parseBytes(frame);

      expect(messages).toHaveLength(1);
      
      const decoded = messages[0];
      expect(decoded.message_name).toBe('HEARTBEAT');
      expect(decoded.system_id).toBe(1);
      expect(decoded.component_id).toBe(1);
      expect(decoded.protocol_version).toBe(2);
      expect(decoded.payload.type).toBe(6);
      expect(decoded.payload.autopilot).toBe(3);
    });

    it('should handle multiple messages in single buffer', async () => {
      // Create two HEARTBEAT frames
      const frame1 = new Uint8Array([
        0xFD, 0x09, 0x00, 0x00, 0x01, 0x01, 0x01, 0x00, 0x00, 0x00,
        0x06, 0x03, 0xC4, 0x90, 0x44, 0x00, 0x04, 0x04, 0x03,
        0x12, 0x34
      ]);

      const frame2 = new Uint8Array([
        0xFD, 0x09, 0x00, 0x00, 0x02, 0x01, 0x01, 0x00, 0x00, 0x00,
        0x06, 0x03, 0xC4, 0x90, 0x44, 0x00, 0x04, 0x04, 0x03,
        0x56, 0x78
      ]);

      // Combine frames
      const combined = new Uint8Array(frame1.length + frame2.length);
      combined.set(frame1, 0);
      combined.set(frame2, frame1.length);

      const messages = await parser.parseBytes(combined);

      expect(messages).toHaveLength(2);
      expect(messages[0].sequence).toBe(1);
      expect(messages[1].sequence).toBe(2);
      expect(messages[0].message_name).toBe('HEARTBEAT');
      expect(messages[1].message_name).toBe('HEARTBEAT');
    });

    it('should handle incomplete frames gracefully', async () => {
      // Incomplete frame (missing payload and checksum)
      const incompleteFrame = new Uint8Array([
        0xFD, 0x09, 0x00, 0x00, 0x01, 0x01, 0x01, 0x00, 0x00, 0x00,
        0x06, 0x03 // Only 2 bytes of 9-byte payload
      ]);

      const messages = await parser.parseBytes(incompleteFrame);
      expect(messages).toHaveLength(0); // Should wait for more data

      // Complete the frame
      const remainingData = new Uint8Array([
        0xC4, 0x90, 0x44, 0x00, 0x04, 0x04, 0x03, // Rest of payload
        0x12, 0x34 // Checksum
      ]);

      const messagesAfterComplete = await parser.parseBytes(remainingData);
      expect(messagesAfterComplete).toHaveLength(1);
      expect(messagesAfterComplete[0].message_name).toBe('HEARTBEAT');
    });
  });

  describe('Dialect Parser Performance and Statistics', () => {
    let parser: any;

    beforeEach(async () => {
      parser = await DialectParserFactory.createMultipleDialectParser(['common', 'ardupilotmega']);
    });

    it('should provide accurate statistics about supported messages', () => {
      const supportedIds = parser.getSupportedMessageIds();
      
      expect(supportedIds.length).toBeGreaterThan(300); // Generated parser has 319+ messages
      expect(supportedIds).toContain(0);  // HEARTBEAT
      expect(supportedIds).toContain(1);  // SYS_STATUS
      expect(supportedIds).toContain(33); // GLOBAL_POSITION_INT
      
      // Should be sorted
      for (let i = 1; i < supportedIds.length; i++) {
        expect(supportedIds[i]).toBeGreaterThan(supportedIds[i - 1]);
      }
    });

    it('should decode messages efficiently', () => {
      const heartbeatFrame = {
        magic: 0xFD, length: 9, sequence: 1, system_id: 1, component_id: 1,
        message_id: 0, payload: new Uint8Array([6, 3, 196, 144, 0, 0, 4, 0, 0]),
        checksum: 0, protocol_version: 2 as const
      };

      // Performance test - decode same message many times
      const iterations = 1000;
      const startTime = Date.now();

      for (let i = 0; i < iterations; i++) {
        const decoded = parser.decode(heartbeatFrame);
        expect(decoded.message_name).toBe('HEARTBEAT');
      }

      const duration = Date.now() - startTime;
      const messagesPerSecond = iterations / (duration / 1000);

      // Should be able to decode at least 1,000 messages per second
      expect(messagesPerSecond).toBeGreaterThan(1000);
    });

    it('should get message definition by ID', () => {
      const heartbeatDef = parser.getParserForMessage(0)?.getMessageDefinition(0);
      expect(heartbeatDef).toBeDefined();
      expect(heartbeatDef!.name).toBe('HEARTBEAT');
      expect(heartbeatDef!.fields).toHaveLength(6); // HEARTBEAT has 6 fields in generated definitions

      const unknownParser = parser.getParserForMessage(99999);
      expect(unknownParser).toBeUndefined();
    });
  });

  describe('Error Handling and Edge Cases', () => {
    let parser: any;

    beforeEach(async () => {
      parser = await DialectParserFactory.createParser('common');
    });

    it('should handle malformed frames gracefully', () => {
      const malformedFrame = {
        magic: 0xFD,
        length: 9,
        sequence: 1,
        system_id: 1,
        component_id: 1,
        message_id: 0,
        payload: new Uint8Array([]), // Empty payload
        checksum: 0,
        protocol_version: 2 as const
      };

      const decoded = parser.decode(malformedFrame);
      expect(decoded.message_name).toBe('HEARTBEAT');
      // All fields should default to 0 due to empty payload
      expect(decoded.payload.type).toBe(0);
      expect(decoded.payload.autopilot).toBe(0);
    });

    it('should handle very large message IDs', () => {
      const largeIdFrame = {
        magic: 0xFD, length: 4, sequence: 1, system_id: 1, component_id: 1,
        message_id: 0xFFFFFF, // Maximum 24-bit value
        payload: new Uint8Array([1, 2, 3, 4]),
        checksum: 0, protocol_version: 2 as const
      };

      const decoded = parser.decode(largeIdFrame);
      expect(decoded.message_name).toBe('UNKNOWN_16777215');
      expect(decoded.message_id).toBe(0xFFFFFF);
    });

    it('should handle protocol version differences', () => {
      const v1Frame = {
        magic: 0xFE, length: 9, sequence: 1, system_id: 1, component_id: 1,
        message_id: 0, payload: new Uint8Array([6, 3, 196, 144, 0, 0, 4, 0, 0]),
        checksum: 0, protocol_version: 1 as const
      };

      const decoded = parser.decode(v1Frame);
      expect(decoded.message_name).toBe('HEARTBEAT');
      expect(decoded.protocol_version).toBe(1);
    });
  });
});