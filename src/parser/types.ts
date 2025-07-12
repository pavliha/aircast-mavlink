// Parser types for MAVLink protocol parsing

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
  signature?: Uint8Array;
}

export interface MAVLinkFrame {
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

export interface ParserOptions {
  validateCRC?: boolean;
  allowProtocolV1?: boolean;
  allowProtocolV2?: boolean;
  maxBufferSize?: number;
}

export class ParserError extends Error {
  public frame?: any;
  
  constructor(message: string, frame?: any) {
    super(message);
    this.name = 'ParserError';
    this.frame = frame;
  }
}

export interface ParserResult {
  messages: ParsedMAVLinkMessage[];
  errors: ParserError[];
  bytesProcessed: number;
  remainingBytes: Uint8Array;
}

export interface FieldDescriptor {
  name: string;
  type: string;
  enum?: string;
  arrayLength?: number;
}

export interface MessageDescriptor {
  id: number;
  name: string;
  fields: FieldDescriptor[];
  crc_extra: number;
}

export interface DialectRegistry {
  [dialectName: string]: {
    [messageId: number]: MessageDescriptor;
  };
}