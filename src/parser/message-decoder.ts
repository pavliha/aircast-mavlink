import { ParsedMAVLinkMessage, MAVLinkFrame } from './types';

interface MessageDefinition {
  id: number;
  name: string;
  fields: FieldDefinition[];
}

interface FieldDefinition {
  name: string;
  type: string;
  arrayLength?: number;
  extension?: boolean;
}

export class MAVLinkMessageDecoder {
  private messageDefinitions: Map<number, MessageDefinition> = new Map();
  private definitionsLoaded: boolean = false;

  constructor() {
    // Start loading generated definitions immediately
    this.loadGeneratedDefinitions().catch(error => {
      console.warn('Failed to load generated message definitions:', error);
      console.warn('Messages will show as UNKNOWN until definitions are loaded');
    });
  }

  decode(frame: MAVLinkFrame & { crc_ok?: boolean; protocol_version?: 1 | 2 }): ParsedMAVLinkMessage {
    const messageDef = this.messageDefinitions.get(frame.message_id);
    
    // Determine protocol version from magic byte if not provided
    const protocolVersion = frame.protocol_version || (frame.magic === 0xFD ? 2 : 1);
    
    if (!messageDef) {
      return {
        timestamp: Date.now(),
        system_id: frame.system_id,
        component_id: frame.component_id,
        message_id: frame.message_id,
        message_name: `UNKNOWN_${frame.message_id}`,
        sequence: frame.sequence,
        payload: {
          raw_payload: Array.from(frame.payload)
        },
        protocol_version: protocolVersion,
        checksum: frame.checksum,
        crc_ok: frame.crc_ok !== false,
        signature: frame.signature
      };
    }

    const payload = this.decodePayload(frame.payload, messageDef.fields);
    
    return {
      timestamp: Date.now(),
      system_id: frame.system_id,
      component_id: frame.component_id,
      message_id: frame.message_id,
      message_name: messageDef.name,
      sequence: frame.sequence,
      payload,
      protocol_version: protocolVersion,
      checksum: frame.checksum,
      crc_ok: frame.crc_ok !== false,
      signature: frame.signature
    };
  }

  private decodePayload(payload: Uint8Array, fields: FieldDefinition[]): any {
    const result: any = {};
    const view = new DataView(payload.buffer, payload.byteOffset, payload.byteLength);
    let offset = 0;

    for (const field of fields) {
      if (offset >= payload.length) {
        // Set default value for missing fields
        result[field.name] = this.getDefaultValue(field);
      } else {
        const { value, bytesRead } = this.decodeField(view, offset, field);
        result[field.name] = value;
        offset += bytesRead;
      }
    }

    return result;
  }

  private getDefaultValue(field: FieldDefinition): any {
    const isArray = field.arrayLength !== undefined && field.arrayLength > 1;
    
    if (isArray) {
      return [];
    }

    switch (field.type) {
      case 'uint8_t':
      case 'int8_t':
      case 'uint16_t':
      case 'int16_t':
      case 'uint32_t':
      case 'int32_t':
      case 'float':
      case 'double':
        return 0;
      case 'uint64_t':
      case 'int64_t':
        return 0n;
      case 'char':
        return '\0';
      default:
        if (field.type.startsWith('char[') || field.type.includes('[]')) {
          return '';
        }
        return 0;
    }
  }

  private decodeField(view: DataView, offset: number, field: FieldDefinition): { value: any; bytesRead: number } {
    const isArray = field.arrayLength !== undefined;
    const arrayLength = field.arrayLength || 1;
    
    if (isArray && arrayLength > 1) {
      const values: any[] = [];
      let totalBytes = 0;
      
      for (let i = 0; i < arrayLength; i++) {
        if (offset + totalBytes >= view.byteLength) break;
        const { value, bytesRead } = this.decodeSingleValue(view, offset + totalBytes, field.type);
        values.push(value);
        totalBytes += bytesRead;
      }
      
      return { value: values, bytesRead: totalBytes };
    } else {
      return this.decodeSingleValue(view, offset, field.type);
    }
  }

  private decodeSingleValue(view: DataView, offset: number, type: string): { value: any; bytesRead: number } {
    try {
      switch (type) {
        case 'uint8_t':
          return { value: view.getUint8(offset), bytesRead: 1 };
        case 'int8_t':
          return { value: view.getInt8(offset), bytesRead: 1 };
        case 'uint16_t':
          return { value: view.getUint16(offset, true), bytesRead: 2 };
        case 'int16_t':
          return { value: view.getInt16(offset, true), bytesRead: 2 };
        case 'uint32_t':
          return { value: view.getUint32(offset, true), bytesRead: 4 };
        case 'int32_t':
          return { value: view.getInt32(offset, true), bytesRead: 4 };
        case 'uint64_t':
          return { value: view.getBigUint64(offset, true), bytesRead: 8 };
        case 'int64_t':
          return { value: view.getBigInt64(offset, true), bytesRead: 8 };
        case 'float':
          return { value: view.getFloat32(offset, true), bytesRead: 4 };
        case 'double':
          return { value: view.getFloat64(offset, true), bytesRead: 8 };
        case 'char': {
          const charCode = view.getUint8(offset);
          return { value: charCode === 0 ? '\0' : String.fromCharCode(charCode), bytesRead: 1 };
        }
        default:
          if (type.startsWith('char[') && type.endsWith(']')) {
            const length = parseInt(type.slice(5, -1));
            const chars: string[] = [];
            for (let i = 0; i < length && offset + i < view.byteLength; i++) {
              const charCode = view.getUint8(offset + i);
              if (charCode === 0) break;
              chars.push(String.fromCharCode(charCode));
            }
            return { value: chars.join(''), bytesRead: length };
          } else if (type.includes('[') && type.includes(']')) {
            const baseType = type.substring(0, type.indexOf('['));
            const arrayLength = parseInt(type.substring(type.indexOf('[') + 1, type.indexOf(']')));
            const values: any[] = [];
            let totalBytes = 0;
            
            for (let i = 0; i < arrayLength; i++) {
              if (offset + totalBytes >= view.byteLength) break;
              const { value, bytesRead } = this.decodeSingleValue(view, offset + totalBytes, baseType);
              values.push(value);
              totalBytes += bytesRead;
            }
            
            return { value: values, bytesRead: totalBytes };
          }
          return { value: view.getUint8(offset), bytesRead: 1 };
      }
    } catch (error) {
      return { value: 0, bytesRead: 1 };
    }
  }

  /**
   * Load all available generated message definitions from built-in dialects
   * This enables decoding of 319+ messages instead of just basic ones
   */
  public async loadGeneratedDefinitions(): Promise<void> {
    await this.initializeFromGeneratedDefinitions();
  }

  private async initializeFromGeneratedDefinitions(): Promise<void> {
    try {
      // Load decoder definitions using static imports for better bundling support
      const allDefinitions = new Map<number, MessageDefinition>();
      
      // Get available dialects dynamically
      const availableDialects = this.getAvailableDialects();
      
      // Import decoder modules for all available dialects
      const decoderModules = await Promise.allSettled(
        availableDialects.map(dialectName => this.loadDialectDecoder(dialectName))
      );
      
      for (const result of decoderModules) {
        if (result.status === 'fulfilled' && result.value) {
          const { definitions } = result.value;
          for (const def of definitions) {
            if (!allDefinitions.has(def.id)) {
              allDefinitions.set(def.id, def);
            }
          }
        }
      }
      
      this.messageDefinitions = allDefinitions;
      this.definitionsLoaded = true;
      console.log(`Loaded ${this.messageDefinitions.size} message definitions from ${availableDialects.length} dialects: ${availableDialects.join(', ')}`);
    } catch (error) {
      console.error('Failed to load generated definitions:', error);
      this.definitionsLoaded = false;
    }
  }

  private getAvailableDialects(): string[] {
    // Return all available dialects that are generated
    const dialects = [
      'common', 
      'ardupilotmega', 
      'minimal', 
      'standard',
      'test',
      'paparazzi',
      'python_array_test'
    ];
    
    return dialects;
  }

  private async loadDialectDecoder(dialectName: string): Promise<{ dialectName: string; definitions: MessageDefinition[] } | null> {
    try {
      let definitions: MessageDefinition[];
      
      // Import decoder modules directly from generated source
      // Only include cases for dialects that are actually generated
      switch (dialectName) {
        case 'common': {
          const { COMMON_MESSAGE_DEFINITIONS } = await import('../generated/dialects/common/decoder');
          definitions = COMMON_MESSAGE_DEFINITIONS;
          break;
        }
        case 'ardupilotmega': {
          const { ARDUPILOTMEGA_MESSAGE_DEFINITIONS } = await import('../generated/dialects/ardupilotmega/decoder');
          definitions = ARDUPILOTMEGA_MESSAGE_DEFINITIONS;
          break;
        }
        case 'minimal': {
          const { MINIMAL_MESSAGE_DEFINITIONS } = await import('../generated/dialects/minimal/decoder');
          definitions = MINIMAL_MESSAGE_DEFINITIONS;
          break;
        }
        case 'standard': {
          const { STANDARD_MESSAGE_DEFINITIONS } = await import('../generated/dialects/standard/decoder');
          definitions = STANDARD_MESSAGE_DEFINITIONS;
          break;
        }
        case 'test': {
          const { TEST_MESSAGE_DEFINITIONS } = await import('../generated/dialects/test/decoder');
          definitions = TEST_MESSAGE_DEFINITIONS;
          break;
        }
        case 'paparazzi': {
          const { PAPARAZZI_MESSAGE_DEFINITIONS } = await import('../generated/dialects/paparazzi/decoder');
          definitions = PAPARAZZI_MESSAGE_DEFINITIONS;
          break;
        }
        case 'python_array_test': {
          const { PYTHONARRAY_TEST_MESSAGE_DEFINITIONS } = await import('../generated/dialects/python_array_test/decoder');
          definitions = PYTHONARRAY_TEST_MESSAGE_DEFINITIONS;
          break;
        }
        default:
          console.warn(`Unknown dialect: ${dialectName}`);
          return null;
      }
      
      if (!definitions || !Array.isArray(definitions)) {
        console.warn(`No message definitions found for dialect: ${dialectName}`);
        return null;
      }
      
      return { dialectName, definitions };
    } catch (error) {
      console.warn(`Failed to load ${dialectName} decoder definitions:`, error);
      return null;
    }
  }

  public addCustomMessageDefinition(id: number, name: string, fields: FieldDefinition[]): void {
    this.messageDefinitions.set(id, { id, name, fields });
  }

  public getMessageDefinition(id: number): MessageDefinition | undefined {
    return this.messageDefinitions.get(id);
  }

  public getSupportedMessageIds(): number[] {
    return Array.from(this.messageDefinitions.keys()).sort((a, b) => a - b);
  }

  public isDefinitionsLoaded(): boolean {
    return this.definitionsLoaded;
  }

  /**
   * Wait for definitions to be loaded before proceeding
   * Returns immediately if already loaded
   */
  public async waitForDefinitions(): Promise<void> {
    if (this.definitionsLoaded) {
      return;
    }
    
    // Wait a bit for async loading to complete
    return new Promise((resolve) => {
      const checkLoaded = () => {
        if (this.definitionsLoaded) {
          resolve();
        } else {
          setTimeout(checkLoaded, 10);
        }
      };
      checkLoaded();
    });
  }

  /**
   * Factory method to create decoder with all generated definitions loaded
   * @returns Promise that resolves to decoder with 319+ message definitions
   */
  public static async createWithGeneratedDefinitions(): Promise<MAVLinkMessageDecoder> {
    const decoder = new MAVLinkMessageDecoder();
    await decoder.loadGeneratedDefinitions();
    return decoder;
  }
}