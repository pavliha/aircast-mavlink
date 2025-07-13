import Handlebars from 'handlebars';
import { TypeScriptDialect } from '../types';

export class TemplateEngine {
  private templates: Map<string, HandlebarsTemplateDelegate> = new Map();

  constructor() {
    this.initializeTemplates();
    this.registerHelpers();
  }

  private initializeTemplates(): void {
    // Main types template
    this.templates.set('types', Handlebars.compile(`// Auto-generated TypeScript types for {{ dialectName }} dialect
// Generated from MAVLink XML definitions

export interface ParsedMAVLinkMessage {
  timestamp: number;
  system_id: number;
  component_id: number;
  message_id: number;
  message_name: string;
  sequence: number;
  payload: Record<string, any>;
  protocol_version: 1 | 2;
  checksum: number;
  crc_ok: boolean;
  signature?: Uint8Array;
  dialect?: string;
}


{{#unless includeEnums}}
{{#each enums}}
{{#each description}}
// {{ this }}
{{/each}}
export type {{ name }} =
{{#each values}}
  | {{ value }}{{#if description}} // {{ name }} - {{ join description " " }}{{/if}}
{{/each}}
  | number;

{{/each}}
{{/unless}}
`));

    // Enums template
    this.templates.set('enums', Handlebars.compile(`// Auto-generated TypeScript enums for {{ dialectName }} dialect

{{#each enums}}
{{#each description}}
// {{ this }}
{{/each}}
export enum {{ name }}Enum {
{{#each values}}
{{#each description}}
  // {{ this }}
{{/each}}
  {{ name }} = {{ value }},
{{/each}}
}

// Type alias for compatibility
export type {{ name }} = {{ name }}Enum;

{{/each}}
{{#unless enums.length}}
// This dialect has no enums defined
export {};
{{/unless}}
`));

    // Messages template
    this.templates.set('messages', Handlebars.compile(`// Auto-generated TypeScript message interfaces for {{ dialectName }} dialect

import { ParsedMAVLinkMessage } from './types';
{{#if includeEnums}}
{{#if enums.length}}
import type {
{{#each enums}}
  {{ name }},
{{/each}}
} from './enums';
{{/if}}
{{else}}
{{#if enums.length}}
import type {
{{#each enums}}
  {{ name }},
{{/each}}
} from './types';
{{/if}}
{{/if}}

{{#each messages}}
{{#each description}}
// {{ this }}
{{/each}}
export interface Message{{ name }} {
{{#each fields}}
{{#each description}}
  // {{ this }}
{{/each}}
  {{ name }}{{#if optional}}?{{/if}}: {{ type }};
{{/each}}
}

{{/each}}

// Message type map for type-safe message handling
export interface MessageTypeMap {
{{#each messages}}
  {{ originalName }}: Message{{ name }};
{{/each}}
}

// Union type of all message types
export type AnyMessage = ParsedMAVLinkMessage;

// Type guard functions
{{#each messages}}
export function is{{ name }}(msg: ParsedMAVLinkMessage): msg is ParsedMAVLinkMessage & { payload: Message{{ name }} } {
  return msg.message_name === '{{ originalName }}';
}
{{/each}}
`));

    // Index template
    this.templates.set('index', Handlebars.compile(`// Auto-generated TypeScript index file
// Exports all dialect types

export * from './types';
{{#if includeEnums}}
{{#if enums.length}}
export * from './enums';
{{/if}}
{{/if}}
export * from './messages';
export * from './decoder';
`));

    // Single file template
    this.templates.set('single', Handlebars.compile(`{{{ generateTypes this }}}

{{{ generateMessages this }}}
`));

    // Combined decoder and parser template
    this.templates.set('decoder', Handlebars.compile(`// Auto-generated decoder and parser for {{{ dialectName }}} dialect
// Generated from MAVLink XML definitions

// Parser types for MAVLink protocol parsing
interface ParsedMAVLinkMessage {
  timestamp: number;
  system_id: number;
  component_id: number;
  message_id: number;
  message_name: string;
  sequence: number;
  payload: Record<string, any>;
  protocol_version: 1 | 2;
  checksum: number;
  crc_ok: boolean;
  signature?: Uint8Array;
  dialect?: string;
}

interface MAVLinkFrame {
  magic: number;
  length: number;
  incompatible_flags?: number; // v2 only
  compatible_flags?: number;   // v2 only
  sequence: number;
  system_id: number;
  component_id: number;
  message_id: number;
  payload: Uint8Array;
  checksum: number;
  signature?: Uint8Array; // v2 only, 13 bytes
}

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

// Base dialect parser class
abstract class DialectParser {
  protected messageDefinitions: Map<number, MessageDefinition> = new Map();
  protected dialectName: string;
  private buffer: Uint8Array = new Uint8Array(0);

  constructor(dialectName: string) {
    this.dialectName = dialectName;
  }

  abstract loadDefinitions(): Promise<void>;

  parseBytes(data: Uint8Array): ParsedMAVLinkMessage[] {
    const results: ParsedMAVLinkMessage[] = [];

    if (!data || data.length === 0) {
      return results;
    }

    // Append new data to buffer
    const newBuffer = new Uint8Array(this.buffer.length + data.length);
    newBuffer.set(this.buffer);
    newBuffer.set(data, this.buffer.length);
    this.buffer = newBuffer;

    let offset = 0;
    
    // Parse MAVLink frames from buffer
    while (offset < this.buffer.length) {
      const frameResult = this.tryParseFrame(this.buffer.slice(offset));
      
      if (frameResult.frame) {
        const message = this.decode(frameResult.frame);
        results.push(message);
        offset += frameResult.bytesConsumed;
      } else if (frameResult.bytesConsumed > 0) {
        // Skip invalid bytes
        offset += frameResult.bytesConsumed;
      } else {
        // Not enough data for a complete frame
        break;
      }
    }

    // Keep remaining data in buffer
    this.buffer = this.buffer.slice(offset);
    return results;
  }

  private tryParseFrame(data: Uint8Array): { frame?: MAVLinkFrame & { crc_ok?: boolean; protocol_version?: 1 | 2 }; bytesConsumed: number } {
    if (data.length < 8) {
      return { bytesConsumed: 0 };
    }

    let offset = 0;
    
    // Find magic byte
    while (offset < data.length && data[offset] !== 0xFE && data[offset] !== 0xFD) {
      offset++;
    }

    if (offset === data.length) {
      return { bytesConsumed: data.length };
    }

    const magic = data[offset];
    const isV2 = magic === 0xFD;

    if (data.length - offset < (isV2 ? 12 : 8)) {
      return { bytesConsumed: offset };
    }

    let frameOffset = offset;
    const frame: any = { magic };

    frameOffset++;
    frame.length = data[frameOffset++];

    if (isV2) {
      frame.incompatible_flags = data[frameOffset++];
      frame.compatible_flags = data[frameOffset++];
    }

    frame.sequence = data[frameOffset++];
    frame.system_id = data[frameOffset++];
    frame.component_id = data[frameOffset++];
    frame.message_id = data[frameOffset++];

    if (isV2 && data.length - frameOffset >= 2) {
      frame.message_id |= (data[frameOffset++] << 8);
      frame.message_id |= (data[frameOffset++] << 16);
    }

    const totalLength = frameOffset - offset + frame.length + 2; // +2 for checksum
    if (data.length - offset < totalLength) {
      return { bytesConsumed: offset };
    }

    frame.payload = data.slice(frameOffset, frameOffset + frame.length);
    frameOffset += frame.length;

    frame.checksum = data[frameOffset] | (data[frameOffset + 1] << 8);
    frameOffset += 2;

    // Handle signature for v2
    if (isV2 && frame.incompatible_flags && (frame.incompatible_flags & 0x01)) {
      if (data.length - frameOffset >= 13) {
        frame.signature = data.slice(frameOffset, frameOffset + 13);
        frameOffset += 13;
      }
    }

    frame.crc_ok = true; // Simplified - not doing CRC validation
    frame.protocol_version = isV2 ? 2 : 1;

    return { frame, bytesConsumed: frameOffset - offset };
  }

  resetBuffer(): void {
    this.buffer = new Uint8Array(0);
  }

  decode(frame: MAVLinkFrame & { crc_ok?: boolean; protocol_version?: 1 | 2 }): ParsedMAVLinkMessage {
    const messageDef = this.messageDefinitions.get(frame.message_id);
    
    const protocolVersion = frame.protocol_version || (frame.magic === 0xFD ? 2 : 1);
    
    if (!messageDef) {
      return {
        timestamp: Date.now(),
        system_id: frame.system_id,
        component_id: frame.component_id,
        message_id: frame.message_id,
        message_name: \`UNKNOWN_\${frame.message_id}\`,
        sequence: frame.sequence,
        payload: {
          raw_payload: Array.from(frame.payload)
        },
        protocol_version: protocolVersion,
        checksum: frame.checksum,
        crc_ok: frame.crc_ok !== false,
        signature: frame.signature,
        dialect: this.dialectName
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
      signature: frame.signature,
      dialect: this.dialectName
    };
  }

  private decodePayload(payload: Uint8Array, fields: FieldDefinition[]): any {
    const result: any = {};
    const view = new DataView(payload.buffer, payload.byteOffset, payload.byteLength);
    let offset = 0;

    for (const field of fields) {
      if (offset >= payload.length) {
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
        return '\\0';
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
      
      // Strip array notation from type to avoid double processing
      let baseType = field.type;
      if (baseType.includes('[') && baseType.includes(']')) {
        baseType = baseType.substring(0, baseType.indexOf('['));
      }
      
      for (let i = 0; i < arrayLength; i++) {
        if (offset + totalBytes >= view.byteLength) break;
        const { value, bytesRead } = this.decodeSingleValue(view, offset + totalBytes, baseType);
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
          return { value: charCode === 0 ? '\\0' : String.fromCharCode(charCode), bytesRead: 1 };
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

  getMessageDefinition(id: number): MessageDefinition | undefined {
    return this.messageDefinitions.get(id);
  }

  getSupportedMessageIds(): number[] {
    return Array.from(this.messageDefinitions.keys()).sort((a, b) => a - b);
  }

  getDialectName(): string {
    return this.dialectName;
  }

  supportsMessage(messageId: number): boolean {
    return this.messageDefinitions.has(messageId);
  }
}

{{#if messages}}
const MESSAGE_DEFINITIONS: MessageDefinition[] = [
{{#each messages}}
  {
    id: {{ id }},
    name: '{{{ originalName }}}',
    fields: [
{{#each fields}}
      {
        name: '{{{ name }}}',
        type: '{{{ originalType }}}',
{{#if arrayLength}}
        arrayLength: {{ arrayLength }},
{{/if}}
{{#if extension}}
        extension: {{ extension }},
{{/if}}
      },
{{/each}}
    ]
  },
{{/each}}
];
{{else}}
const MESSAGE_DEFINITIONS: MessageDefinition[] = [];
{{/if}}

export class {{capitalize dialectName}}Parser extends DialectParser {
  constructor() {
    super('{{{ dialectName }}}');
    this.loadDefinitionsSync();
  }

  async loadDefinitions(): Promise<void> {
    this.messageDefinitions.clear();
    for (const def of MESSAGE_DEFINITIONS) {
      this.messageDefinitions.set(def.id, def);
    }
  }

  private loadDefinitionsSync(): void {
    this.messageDefinitions.clear();
    for (const def of MESSAGE_DEFINITIONS) {
      this.messageDefinitions.set(def.id, def);
    }
  }
}
`));

  }

  private registerHelpers(): void {
    Handlebars.registerHelper('join', (array: string[], separator: string) => {
      return array.join(separator);
    });

    Handlebars.registerHelper('eq', (a: unknown, b: unknown) => {
      return a === b;
    });

    Handlebars.registerHelper('ne', (a: unknown, b: unknown) => {
      return a !== b;
    });

    Handlebars.registerHelper('toUpperCase', (str: string) => {
      return str.toUpperCase();
    });

    Handlebars.registerHelper('capitalize', (str: string) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });

    Handlebars.registerHelper('generateTypes', (dialect: TypeScriptDialect) => {
      return this.generateTypes(dialect, false);
    });

    Handlebars.registerHelper('generateMessages', (dialect: TypeScriptDialect) => {
      return this.generateMessages(dialect, false);
    });
  }

  generateTypes(dialect: TypeScriptDialect, includeEnums: boolean = true): string {
    const template = this.templates.get('types');
    if (!template) {
      throw new Error('Types template not found');
    }
    return template({ ...dialect, includeEnums });
  }

  generateEnums(dialect: TypeScriptDialect): string {
    const template = this.templates.get('enums');
    if (!template) {
      throw new Error('Enums template not found');
    }
    return template(dialect);
  }

  generateMessages(dialect: TypeScriptDialect, includeEnums: boolean = false): string {
    const template = this.templates.get('messages');
    if (!template) {
      throw new Error('Messages template not found');
    }
    return template({ ...dialect, includeEnums });
  }

  generateIndex(dialect: TypeScriptDialect, includeEnums: boolean = false): string {
    const template = this.templates.get('index');
    if (!template) {
      throw new Error('Index template not found');
    }
    return template({ ...dialect, includeEnums });
  }

  generateSingle(dialect: TypeScriptDialect): string {
    const template = this.templates.get('single');
    if (!template) {
      throw new Error('Single template not found');
    }
    const context = {
      ...dialect,
      generateTypes: () => this.generateTypes(dialect, false),
      generateMessages: () => this.generateMessages(dialect, false)
    };
    return template(context);
  }

  generateDecoder(dialect: TypeScriptDialect): string {
    const template = this.templates.get('decoder');
    if (!template) {
      throw new Error('Decoder template not found');
    }
    return template(dialect);
  }


}
