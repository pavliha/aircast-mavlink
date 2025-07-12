// MAVLink frame parser for protocol v1 and v2
import { MAVLinkFrame, ParserError } from './types';

export class MAVLinkFrameParser {
  private static readonly MAVLINK_V1_MAGIC = 0xFE;
  private static readonly MAVLINK_V2_MAGIC = 0xFD;
  private static readonly MAVLINK_V1_HEADER_SIZE = 6;
  private static readonly MAVLINK_V2_HEADER_SIZE = 10;
  private static readonly MAVLINK_CHECKSUM_SIZE = 2;
  private static readonly MAVLINK_V2_SIGNATURE_SIZE = 13;

  public parseFrame(data: Uint8Array): MAVLinkFrame & { protocol_version: 1 | 2 } {
    if (data.length < 8) {
      throw new ParserError('Insufficient data for MAVLink frame');
    }

    const magic = data[0];
    const isV2 = magic === MAVLinkFrameParser.MAVLINK_V2_MAGIC;
    const isV1 = magic === MAVLinkFrameParser.MAVLINK_V1_MAGIC;
    
    if (!isV1 && !isV2) {
      throw new ParserError(`Invalid magic byte: 0x${magic.toString(16)}`);
    }

    const headerSize = isV2 ? MAVLinkFrameParser.MAVLINK_V2_HEADER_SIZE : MAVLinkFrameParser.MAVLINK_V1_HEADER_SIZE;
    
    if (data.length < headerSize) {
      throw new ParserError('Insufficient data for header');
    }

    const payloadLength = data[1];
    let totalSize = headerSize + payloadLength + MAVLinkFrameParser.MAVLINK_CHECKSUM_SIZE;
    
    if (isV2) {
      const compatibleFlags = data[3];
      if (compatibleFlags & 0x01) {
        totalSize += MAVLinkFrameParser.MAVLINK_V2_SIGNATURE_SIZE;
      }
    }

    if (data.length < totalSize) {
      throw new ParserError('Insufficient data for complete frame');
    }

    return isV2 ? this.parseV2Frame(data, payloadLength) : this.parseV1Frame(data, payloadLength);
  }

  private parseV1Frame(data: Uint8Array, payloadLength: number): MAVLinkFrame & { protocol_version: 1 } {
    const payloadStart = MAVLinkFrameParser.MAVLINK_V1_HEADER_SIZE;
    const checksumStart = payloadStart + payloadLength;
    
    return {
      protocol_version: 1,
      magic: data[0],
      length: payloadLength,
      sequence: data[2],
      system_id: data[3],
      component_id: data[4],
      message_id: data[5],
      payload: data.slice(payloadStart, checksumStart),
      checksum: (data[checksumStart + 1] << 8) | data[checksumStart]
    };
  }

  private parseV2Frame(data: Uint8Array, payloadLength: number): MAVLinkFrame & { protocol_version: 2 } {
    const payloadStart = MAVLinkFrameParser.MAVLINK_V2_HEADER_SIZE;
    const checksumStart = payloadStart + payloadLength;
    
    const messageId = data[7] | (data[8] << 8) | (data[9] << 16);
    const compatibleFlags = data[3];
    const hasSignature = (compatibleFlags & 0x01) !== 0;
    
    const frame: MAVLinkFrame & { protocol_version: 2 } = {
      protocol_version: 2,
      magic: data[0],
      length: payloadLength,
      incompatible_flags: data[2],
      compatible_flags: compatibleFlags,
      sequence: data[4],
      system_id: data[5],
      component_id: data[6],
      message_id: messageId,
      payload: data.slice(payloadStart, checksumStart),
      checksum: (data[checksumStart + 1] << 8) | data[checksumStart]
    };

    if (hasSignature) {
      const signatureStart = checksumStart + MAVLinkFrameParser.MAVLINK_CHECKSUM_SIZE;
      frame.signature = data.slice(signatureStart, signatureStart + MAVLinkFrameParser.MAVLINK_V2_SIGNATURE_SIZE);
    }

    return frame;
  }
}