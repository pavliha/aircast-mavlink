export type SupportedDialects = 
  | 'common'
  | 'ardupilotmega'
  | 'minimal'
  | 'standard'
  | 'test'
  | 'paparazzi'
  | 'python_array_test';

// Common interface for all dialect parsers
export interface DialectParser {
  decode(frame: any): any;
  getDialectName(): string;
  getSupportedMessageIds(): number[];
  supportsMessage(messageId: number): boolean;
  getMessageDefinition(id: number): any;
}

export class DialectParserFactory {
  private static parsers: Map<SupportedDialects, DialectParser> = new Map();

  static async createParser(dialectName: SupportedDialects): Promise<DialectParser> {
    if (this.parsers.has(dialectName)) {
      return this.parsers.get(dialectName)!;
    }

    let parser: DialectParser;

    try {
      switch (dialectName) {
        case 'common': {
          const { CommonParser } = await import('../generated/dialects/common/decoder');
          parser = new CommonParser();
          break;
        }
        case 'ardupilotmega': {
          const { ArdupilotmegaParser } = await import('../generated/dialects/ardupilotmega/decoder');
          parser = new ArdupilotmegaParser();
          break;
        }
        case 'minimal': {
          const { MinimalParser } = await import('../generated/dialects/minimal/decoder');
          parser = new MinimalParser();
          break;
        }
        case 'standard': {
          const { StandardParser } = await import('../generated/dialects/standard/decoder');
          parser = new StandardParser();
          break;
        }
        case 'test': {
          const { TestParser } = await import('../generated/dialects/test/decoder');
          parser = new TestParser();
          break;
        }
        case 'paparazzi': {
          const { PaparazziParser } = await import('../generated/dialects/paparazzi/decoder');
          parser = new PaparazziParser();
          break;
        }
        case 'python_array_test': {
          const { Pythonarray_testParser } = await import('../generated/dialects/python_array_test/decoder');
          parser = new Pythonarray_testParser();
          break;
        }
        default:
          throw new Error(`Unsupported dialect: ${dialectName}`);
      }
    } catch (error) {
      throw new Error(`Failed to load parser for dialect ${dialectName}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    this.parsers.set(dialectName, parser);
    return parser;
  }

  static async createMultipleDialectParser(dialectNames: SupportedDialects[]): Promise<MultiDialectParser> {
    const parsers: DialectParser[] = [];
    
    for (const dialectName of dialectNames) {
      const parser = await this.createParser(dialectName);
      parsers.push(parser);
    }

    return new MultiDialectParser(parsers);
  }

  static getSupportedDialects(): SupportedDialects[] {
    return [
      'common',
      'ardupilotmega', 
      'minimal',
      'standard',
      'test',
      'paparazzi',
      'python_array_test'
    ];
  }

  static clearCache(): void {
    this.parsers.clear();
  }
}

export class MultiDialectParser {
  private dialectParsers: DialectParser[];
  private messageIdToDialectMap: Map<number, DialectParser> = new Map();

  constructor(dialectParsers: DialectParser[]) {
    this.dialectParsers = dialectParsers;
    this.buildMessageIdMap();
  }

  private buildMessageIdMap(): void {
    for (const parser of this.dialectParsers) {
      const messageIds = parser.getSupportedMessageIds();
      for (const messageId of messageIds) {
        if (!this.messageIdToDialectMap.has(messageId)) {
          this.messageIdToDialectMap.set(messageId, parser);
        }
      }
    }
  }

  decode(frame: any): any {
    const parser = this.messageIdToDialectMap.get(frame.message_id);
    
    if (!parser) {
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
        protocol_version: frame.protocol_version || (frame.magic === 0xFD ? 2 : 1),
        checksum: frame.checksum,
        crc_ok: frame.crc_ok !== false,
        signature: frame.signature,
        dialect: 'unknown'
      };
    }

    return parser.decode(frame);
  }

  getDialects(): string[] {
    return this.dialectParsers.map(p => p.getDialectName());
  }

  getSupportedMessageIds(): number[] {
    return Array.from(this.messageIdToDialectMap.keys()).sort((a, b) => a - b);
  }

  supportsMessage(messageId: number): boolean {
    return this.messageIdToDialectMap.has(messageId);
  }

  getParserForMessage(messageId: number): DialectParser | undefined {
    return this.messageIdToDialectMap.get(messageId);
  }
}