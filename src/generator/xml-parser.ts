import { parseString } from 'xml2js';
import fetch from 'node-fetch';
import { promises as fs } from 'fs';
import { MAVLinkDialectDefinition, EnumDefinition, MessageDefinition, FieldDefinition, MAVLinkDialect, XMLEnum, XMLMessage } from '../types';

export class XMLParser {
  private processedUrls = new Set<string>();

  async parseFromURL(url: string): Promise<MAVLinkDialectDefinition> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }
    const xmlContent = await response.text();
    return this.parseXML(xmlContent, url);
  }

  async parseFromFile(filePath: string): Promise<MAVLinkDialectDefinition> {
    const xmlContent = await fs.readFile(filePath, 'utf-8');
    return this.parseXML(xmlContent, filePath);
  }

  private async parseXML(xmlContent: string, source: string): Promise<MAVLinkDialectDefinition> {
    return new Promise((resolve, reject) => {
      parseString(xmlContent, { explicitArray: false }, async (err, result) => {
        if (err) {
          reject(new Error(`Failed to parse XML from ${source}: ${err.message}`));
          return;
        }

        try {
          const definition = await this.processDefinition(result.mavlink, source);
          resolve(definition);
        } catch (error) {
          reject(error);
        }
      });
    });
  }

  private async processDefinition(
    mavlinkData: MAVLinkDialect,
    source: string
  ): Promise<MAVLinkDialectDefinition> {
    const definition: MAVLinkDialectDefinition = {
      version: mavlinkData.version,
      dialect: mavlinkData.dialect ? parseInt(mavlinkData.dialect) : undefined,
      includes: [],
      enums: [],
      messages: []
    };

    // Process includes
    if (mavlinkData.include) {
      const includes = Array.isArray(mavlinkData.include) ? mavlinkData.include : [mavlinkData.include];
      for (const include of includes) {
        const includeUrl = this.resolveIncludeUrl(include, source);
        if (!this.processedUrls.has(includeUrl)) {
          this.processedUrls.add(includeUrl);
          try {
            const includedDefinition = await this.parseFromURL(includeUrl);
            // Merge included definitions
            if (includedDefinition.enums) {
              definition.enums!.push(...includedDefinition.enums);
            }
            if (includedDefinition.messages) {
              definition.messages!.push(...includedDefinition.messages);
            }
          } catch (error) {
            console.warn(`Warning: Failed to process include ${includeUrl}:`, error);
          }
        }
      }
    }

    // Process enums
    if (mavlinkData.enums && mavlinkData.enums.enum) {
      const enums = Array.isArray(mavlinkData.enums.enum) ? mavlinkData.enums.enum : [mavlinkData.enums.enum];
      for (const enumData of enums) {
        const enumDef = this.processEnum(enumData);
        if (enumDef) {
          definition.enums!.push(enumDef);
        }
      }
    }

    // Process messages
    if (mavlinkData.messages && mavlinkData.messages.message) {
      const messages = Array.isArray(mavlinkData.messages.message) ? mavlinkData.messages.message : [mavlinkData.messages.message];
      for (const messageData of messages) {
        const messageDef = this.processMessage(messageData);
        if (messageDef) {
          definition.messages!.push(messageDef);
        }
      }
    }

    return definition;
  }

  private resolveIncludeUrl(include: string, source: string): string {
    if (include.startsWith('http')) {
      return include;
    }

    // If source is a URL, resolve relative to it
    if (source.startsWith('http')) {
      const url = new URL(source);
      url.pathname = url.pathname.replace(/[^/]*$/, include);
      return url.toString();
    }

    // Otherwise, assume it's a file path
    return include;
  }

  private processEnum(enumData: XMLEnum): EnumDefinition | null {
    if (!enumData.$ || !enumData.$.name) {
      return null;
    }

    const enumDef: EnumDefinition = {
      name: enumData.$.name,
      description: enumData.description || '',
      bitmask: enumData.$.bitmask === 'true',
      entries: []
    };

    if (enumData.entry) {
      const entries = Array.isArray(enumData.entry) ? enumData.entry : [enumData.entry];
      for (const entry of entries) {
        if (entry.$ && entry.$.name && entry.$.value !== undefined) {
          enumDef.entries.push({
            name: entry.$.name,
            value: entry.$.value,
            description: entry.description || entry._ || ''
          });
        }
      }
    }

    return enumDef;
  }

  private processMessage(messageData: XMLMessage): MessageDefinition | null {
    if (!messageData.$ || !messageData.$.name || !messageData.$.id) {
      return null;
    }

    const messageDef: MessageDefinition = {
      id: parseInt(messageData.$.id),
      name: messageData.$.name,
      description: messageData.description || '',
      fields: []
    };

    if (messageData.field) {
      const fields = Array.isArray(messageData.field) ? messageData.field : [messageData.field];
      let inExtensions = false;

      for (const field of fields) {
        if (typeof field === 'string' && field === 'extensions') {
          inExtensions = true;
          continue;
        }

        if (typeof field === 'object' && field.$ && field.$.name && field.$.type) {
          const fieldDef: FieldDefinition = {
            name: field.$.name,
            type: field.$.type,
            enum: field.$.enum,
            description: field.description || field._ || '',
            extension: inExtensions
          };
          messageDef.fields.push(fieldDef);
        }
      }
    }

    return messageDef;
  }

  reset(): void {
    this.processedUrls.clear();
  }
}
