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
  payload: Record<string, unknown>;
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
  payload: Record<string, unknown>;
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
  crc_ok?: boolean;
  protocol_version?: 1 | 2;
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

type FieldValue = string | number | bigint | boolean | Array<string | number | bigint | boolean>;
type PayloadObject = Record<string, FieldValue>;
type DecodedValue = { value: FieldValue; bytesRead: number };

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

  private tryParseFrame(data: Uint8Array): { frame?: MAVLinkFrame; bytesConsumed: number } {
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
    const frame: Partial<MAVLinkFrame> = { magic };

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

    return { frame: frame as MAVLinkFrame, bytesConsumed: frameOffset - offset };
  }

  resetBuffer(): void {
    this.buffer = new Uint8Array(0);
  }

  decode(frame: MAVLinkFrame): ParsedMAVLinkMessage {
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
        crc_ok: frame.crc_ok ?? true,
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
      crc_ok: frame.crc_ok ?? true,
      signature: frame.signature,
      dialect: this.dialectName
    };
  }

  private decodePayload(payload: Uint8Array, fields: FieldDefinition[]): PayloadObject {
    const result: PayloadObject = {};
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

  private getDefaultValue(field: FieldDefinition): FieldValue {
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

  private decodeField(view: DataView, offset: number, field: FieldDefinition): DecodedValue {
    const isArray = field.arrayLength !== undefined;
    const arrayLength = field.arrayLength || 1;
    
    if (isArray && arrayLength > 1) {
      const values: (string | number | bigint | boolean)[] = [];
      let totalBytes = 0;
      
      // Strip array notation from type to avoid double processing
      let baseType = field.type;
      if (baseType.includes('[') && baseType.includes(']')) {
        baseType = baseType.substring(0, baseType.indexOf('['));
      }
      
      for (let i = 0; i < arrayLength; i++) {
        if (offset + totalBytes >= view.byteLength) break;
        const { value, bytesRead } = this.decodeSingleValue(view, offset + totalBytes, baseType);
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'bigint' || typeof value === 'boolean') {
          values.push(value);
        }
        totalBytes += bytesRead;
      }
      
      return { value: values, bytesRead: totalBytes };
    } else {
      return this.decodeSingleValue(view, offset, field.type);
    }
  }

  private decodeSingleValue(view: DataView, offset: number, type: string): DecodedValue {
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
            const values: (string | number | bigint | boolean)[] = [];
            let totalBytes = 0;
            
            for (let i = 0; i < arrayLength; i++) {
              if (offset + totalBytes >= view.byteLength) break;
              const { value, bytesRead } = this.decodeSingleValue(view, offset + totalBytes, baseType);
              if (typeof value === 'string' || typeof value === 'number' || typeof value === 'bigint' || typeof value === 'boolean') {
                values.push(value);
              }
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

  // Serialization methods for outgoing commands
  serializeMessage(message: Record<string, unknown> & { message_name: string }): Uint8Array {
    const messageDef = Array.from(this.messageDefinitions.values())
      .find(def => def.name === message.message_name);
    
    if (!messageDef) {
      throw new Error(\`Unknown message type: \${message.message_name}\`);
    }

    const payload = this.serializePayload(message, messageDef.fields);
    return this.createMAVLinkFrame(message, messageDef.id, payload);
  }

  private serializePayload(message: Record<string, unknown>, fields: FieldDefinition[]): Uint8Array {
    // Calculate total payload size
    let totalSize = 0;
    for (const field of fields) {
      totalSize += this.getFieldSize(field.type);
    }

    const buffer = new ArrayBuffer(totalSize);
    const view = new DataView(buffer);
    let offset = 0;

    for (const field of fields) {
      const value = message[field.name];
      const bytesWritten = this.serializeField(view, offset, field, value);
      offset += bytesWritten;
    }

    return new Uint8Array(buffer);
  }

  private serializeField(view: DataView, offset: number, field: FieldDefinition, value: unknown): number {
    const isArray = field.arrayLength !== undefined;
    const arrayLength = field.arrayLength || 1;
    
    if (isArray && arrayLength > 1) {
      let totalBytes = 0;
      let baseType = field.type;
      if (baseType.includes('[') && baseType.includes(']')) {
        baseType = baseType.substring(0, baseType.indexOf('['));
      }
      
      const arrayValue = Array.isArray(value) ? value : [value];
      for (let i = 0; i < arrayLength; i++) {
        const itemValue = i < arrayValue.length ? arrayValue[i] : this.getDefaultValueForType(baseType);
        const bytesWritten = this.serializeSingleValue(view, offset + totalBytes, baseType, itemValue);
        totalBytes += bytesWritten;
      }
      return totalBytes;
    } else {
      return this.serializeSingleValue(view, offset, field.type, value);
    }
  }

  private serializeSingleValue(view: DataView, offset: number, type: string, value: unknown): number {
    const actualValue = value ?? this.getDefaultValueForType(type);
    
    switch (type) {
      case 'uint8_t':
        view.setUint8(offset, Number(actualValue));
        return 1;
      case 'int8_t':
        view.setInt8(offset, Number(actualValue));
        return 1;
      case 'uint16_t':
        view.setUint16(offset, Number(actualValue), true);
        return 2;
      case 'int16_t':
        view.setInt16(offset, Number(actualValue), true);
        return 2;
      case 'uint32_t':
        view.setUint32(offset, Number(actualValue), true);
        return 4;
      case 'int32_t':
        view.setInt32(offset, Number(actualValue), true);
        return 4;
      case 'uint64_t':
        view.setBigUint64(offset, typeof actualValue === 'bigint' ? actualValue : BigInt(Number(actualValue) || 0), true);
        return 8;
      case 'int64_t':
        view.setBigInt64(offset, typeof actualValue === 'bigint' ? actualValue : BigInt(Number(actualValue) || 0), true);
        return 8;
      case 'float':
        view.setFloat32(offset, Number(actualValue), true);
        return 4;
      case 'double':
        view.setFloat64(offset, Number(actualValue), true);
        return 8;
      case 'char':
        view.setUint8(offset, typeof actualValue === 'string' ? actualValue.charCodeAt(0) : Number(actualValue));
        return 1;
      default:
        if (type.startsWith('char[') && type.endsWith(']')) {
          const length = parseInt(type.slice(5, -1));
          const str = String(actualValue);
          for (let i = 0; i < length; i++) {
            const charCode = i < str.length ? str.charCodeAt(i) : 0;
            view.setUint8(offset + i, charCode);
          }
          return length;
        }
        view.setUint8(offset, Number(actualValue));
        return 1;
    }
  }

  private getFieldSize(type: string): number {
    if (type.includes('[') && type.includes(']')) {
      const baseType = type.substring(0, type.indexOf('['));
      const arrayLength = parseInt(type.substring(type.indexOf('[') + 1, type.indexOf(']')));
      return this.getSingleFieldSize(baseType) * arrayLength;
    }
    return this.getSingleFieldSize(type);
  }

  private getSingleFieldSize(type: string): number {
    switch (type) {
      case 'uint8_t':
      case 'int8_t':
      case 'char':
        return 1;
      case 'uint16_t':
      case 'int16_t':
        return 2;
      case 'uint32_t':
      case 'int32_t':
      case 'float':
        return 4;
      case 'uint64_t':
      case 'int64_t':
      case 'double':
        return 8;
      default:
        return 1;
    }
  }

  private getDefaultValueForType(type: string): number | bigint {
    switch (type) {
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
        return 0;
      default:
        return 0;
    }
  }

  private createMAVLinkFrame(message: Record<string, unknown>, messageId: number, payload: Uint8Array): Uint8Array {
    const magic = 0xFD; // Use MAVLink v2
    const systemId = typeof message.system_id === 'number' ? message.system_id : 1;
    const componentId = typeof message.component_id === 'number' ? message.component_id : 1;
    const sequence = typeof message.sequence === 'number' ? message.sequence : 0;
    
    // MAVLink v2 header: magic(1) + len(1) + incompat_flags(1) + compat_flags(1) + seq(1) + sysid(1) + compid(1) + msgid(3) + payload + checksum(2)
    const headerSize = 10;
    const frameSize = headerSize + payload.length + 2;
    const buffer = new ArrayBuffer(frameSize);
    const view = new DataView(buffer);
    
    let offset = 0;
    
    // Header
    view.setUint8(offset++, magic);
    view.setUint8(offset++, payload.length);
    view.setUint8(offset++, 0); // incompat_flags
    view.setUint8(offset++, 0); // compat_flags
    view.setUint8(offset++, sequence);
    view.setUint8(offset++, systemId);
    view.setUint8(offset++, componentId);
    
    // 24-bit message ID (little endian)
    view.setUint8(offset++, messageId & 0xFF);
    view.setUint8(offset++, (messageId >> 8) & 0xFF);
    view.setUint8(offset++, (messageId >> 16) & 0xFF);
    
    // Payload
    const payloadView = new Uint8Array(buffer, offset, payload.length);
    payloadView.set(payload);
    offset += payload.length;
    
    // Calculate checksum (simplified - using sum of all bytes)
    let checksum = 0;
    for (let i = 1; i < offset; i++) {
      checksum += view.getUint8(i);
    }
    checksum &= 0xFFFF;
    
    // Checksum (little endian)
    view.setUint8(offset++, checksum & 0xFF);
    view.setUint8(offset++, (checksum >> 8) & 0xFF);
    
    return new Uint8Array(buffer);
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

// Dialect-specific serializer
export class {{capitalize dialectName}}Serializer {
  private parser: {{capitalize dialectName}}Parser;

  constructor() {
    this.parser = new {{capitalize dialectName}}Parser();
  }

  // Serialize a message to MAVLink bytes
  serialize(message: Record<string, unknown> & { message_name: string }): Uint8Array {
    return this.parser.serializeMessage(message);
  }

  // Get supported message names for this dialect
  getSupportedMessages(): string[] {
    return Array.from(this.parser['messageDefinitions'].values()).map(def => def.name);
  }

  // Check if a message is supported by this dialect
  supportsMessage(messageName: string): boolean {
    return Array.from(this.parser['messageDefinitions'].values()).some(def => def.name === messageName);
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
