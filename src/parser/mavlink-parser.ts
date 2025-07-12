// Main MAVLink parser that processes raw bytes and outputs JSON messages
import { MAVLinkFrameParser } from './frame-parser';
import { MAVLinkMessageDecoder } from './message-decoder';
import { CRCCalculator } from './crc';
import { ParsedMAVLinkMessage, ParserError, ParserOptions } from './types';

export class MAVLinkParser {
  private frameParser: MAVLinkFrameParser;
  private messageDecoder: MAVLinkMessageDecoder;
  private buffer: Uint8Array;
  private bufferLength: number = 0;
  private options: ParserOptions;

  constructor(options: ParserOptions = {}) {
    this.frameParser = new MAVLinkFrameParser();
    this.messageDecoder = new MAVLinkMessageDecoder();
    this.buffer = new Uint8Array(1024); // Initial buffer size
    this.options = {
      validateCRC: true,
      allowProtocolV1: true,
      allowProtocolV2: true,
      maxBufferSize: 4096,
      ...options
    };
  }

  /**
   * Parse raw bytes from data channel and return JSON messages
   * @param data Raw bytes from data channel (WebRTC, WebSocket, etc.)
   * @returns Array of parsed MAVLink messages in JSON format
   */
  public parseBytes(data: Uint8Array): ParsedMAVLinkMessage[] {
    const messages: ParsedMAVLinkMessage[] = [];
    
    try {
      // Append new data to buffer
      this.appendToBuffer(data);

      // Parse all complete frames from buffer
      let processedBytes = 0;
      while (processedBytes < this.bufferLength) {
        const parseResult = this.tryParseFrame(processedBytes);
        
        if (parseResult === null) {
          // No complete frame found, wait for more data
          break;
        }
        
        if (parseResult instanceof Error) {
          // Parse error, skip this byte and continue
          processedBytes++;
          continue;
        }

        const { frame, bytesConsumed } = parseResult;
        processedBytes += bytesConsumed;
        
        // Validate CRC if enabled
        if (this.options.validateCRC && !this.validateFrameCRC(frame)) {
          continue;
        }

        // Decode message
        try {
          const message = this.messageDecoder.decode(frame);
          messages.push(message);
        } catch (error) {
          // Message decode error, continue with next frame
          console.warn(`Failed to decode message ${frame.message_id}:`, error);
        }
      }

      // Remove processed bytes from buffer
      if (processedBytes > 0) {
        this.buffer.copyWithin(0, processedBytes, this.bufferLength);
        this.bufferLength -= processedBytes;
      }

    } catch (error) {
      throw new ParserError(`Parser error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    return messages;
  }

  /**
   * Parse a single raw message (for testing or when you have complete frames)
   */
  public parseMessage(data: Uint8Array): ParsedMAVLinkMessage | null {
    try {
      const frame = this.frameParser.parseFrame(data);
      
      if (this.options.validateCRC && !this.validateFrameCRC(frame)) {
        throw new ParserError('CRC validation failed');
      }

      return this.messageDecoder.decode(frame);
    } catch (error) {
      throw new ParserError(`Failed to parse message: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  private appendToBuffer(data: Uint8Array): void {
    // Check if we need to expand the buffer
    if (this.buffer.length - this.bufferLength < data.length) {
      // Check max buffer size
      if (this.bufferLength + data.length > this.options.maxBufferSize!) {
        // Reset buffer to prevent memory issues
        this.buffer = new Uint8Array(this.options.maxBufferSize!);
        this.bufferLength = 0;
      } else {
        // Expand buffer
        const newBuffer = new Uint8Array(this.buffer.length * 2);
        newBuffer.set(this.buffer.subarray(0, this.bufferLength));
        this.buffer = newBuffer;
      }
    }

    // Append new data
    this.buffer.set(data, this.bufferLength);
    this.bufferLength += data.length;
  }

  private tryParseFrame(offset: number): any {
    if (offset >= this.bufferLength) {
      return null;
    }

    // Find next frame start
    let startIndex = -1;
    for (let i = offset; i < this.bufferLength; i++) {
      const byte = this.buffer[i];
      if (byte === 0xFE || byte === 0xFD) { // MAVLink v1 or v2 magic
        startIndex = i;
        break;
      }
    }

    if (startIndex === -1) {
      // No frame start found
      return null;
    }

    try {
      // Try to parse frame from start position
      const frameData = this.buffer.subarray(startIndex, this.bufferLength);
      const frame = this.frameParser.parseFrame(frameData);
      
      // Frame parsed successfully
      const frameLength = this.getFrameLength(frame);
      const bytesConsumed = startIndex - offset + frameLength;
      
      return { frame, bytesConsumed };
    } catch (error) {
      // Not enough data or parse error
      if (error instanceof Error && error.message.includes('Insufficient data')) {
        return null; // Wait for more data
      }
      return error; // Parse error, will skip this byte
    }
  }

  private getFrameLength(frame: any): number {
    // Calculate total frame length including header, payload, checksum, and signature
    const headerSize = frame.protocol_version === 2 ? 10 : 6;
    const payloadSize = frame.payload.length;
    const checksumSize = 2;
    const signatureSize = frame.signature ? 13 : 0;
    
    return headerSize + payloadSize + checksumSize + signatureSize;
  }

  private validateFrameCRC(frame: any): boolean {
    try {
      // Reconstruct the data for CRC calculation
      const headerSize = frame.protocol_version === 2 ? 9 : 5; // Exclude magic byte
      const data = new Uint8Array(headerSize + frame.payload.length);
      
      let offset = 0;
      
      if (frame.protocol_version === 2) {
        data[offset++] = frame.payload.length;
        data[offset++] = frame.incompatible_flags || 0;
        data[offset++] = frame.compatible_flags || 0;
        data[offset++] = frame.sequence;
        data[offset++] = frame.system_id;
        data[offset++] = frame.component_id;
        data[offset++] = frame.message_id & 0xFF;
        data[offset++] = (frame.message_id >> 8) & 0xFF;
        data[offset++] = (frame.message_id >> 16) & 0xFF;
      } else {
        data[offset++] = frame.payload.length;
        data[offset++] = frame.sequence;
        data[offset++] = frame.system_id;
        data[offset++] = frame.component_id;
        data[offset++] = frame.message_id & 0xFF;
      }
      
      // Add payload
      data.set(frame.payload, offset);
      
      // Calculate CRC with extra byte
      const crcExtra = CRCCalculator.getCRCExtra(frame.message_id);
      const calculatedCRC = CRCCalculator.calculate(data, crcExtra);
      
      return calculatedCRC === frame.checksum;
    } catch (error) {
      console.warn('CRC validation error:', error);
      return false;
    }
  }


  /**
   * Reset parser state (useful when connection is reset)
   */
  public reset(): void {
    this.buffer.fill(0);
    this.bufferLength = 0;
  }

  /**
   * Get parser statistics
   */
  public getStats(): { bufferSize: number; bufferUsed: number } {
    return {
      bufferSize: this.buffer.length,
      bufferUsed: this.bufferLength
    };
  }
}