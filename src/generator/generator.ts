import { promises as fs } from 'fs';
import { join } from 'path';
import { parseString } from 'xml2js';
import { XMLParser } from './xml-parser';
import { TypeConverter } from './type-converter';
import { TemplateEngine } from './template-engine';
import { GenerationOptions, MAVLinkDialect, MAVLinkDialectDefinition } from '../types';

export class MAVLinkGenerator {
  private xmlParser: XMLParser;
  private typeConverter: TypeConverter;
  private templateEngine: TemplateEngine;

  constructor() {
    this.xmlParser = new XMLParser();
    this.typeConverter = new TypeConverter();
    this.templateEngine = new TemplateEngine();
  }

  async generateFromURL(url: string, outputPath: string, options: GenerationOptions): Promise<void> {
    const definition = await this.xmlParser.parseFromURL(url);
    await this.generate(definition, outputPath, options);
  }

  async generateFromFile(filePath: string, outputPath: string, options: GenerationOptions): Promise<void> {
    const definition = await this.xmlParser.parseFromFile(filePath);
    await this.generate(definition, outputPath, options);
  }

  private async generate(definition: MAVLinkDialectDefinition, outputPath: string, options: GenerationOptions): Promise<void> {
    // Convert to TypeScript types
    const tsDialect = this.typeConverter.convert(definition, options.dialectName);

    // Ensure output directory exists
    await fs.mkdir(outputPath, { recursive: true });

    if (options.outputFormat === 'single') {
      // Generate single file
      const content = this.templateEngine.generateSingle(tsDialect);
      await fs.writeFile(join(outputPath, 'index.ts'), content);
    } else {
      // Generate separate files as .d.ts files
      const typesContent = this.templateEngine.generateTypes(tsDialect);
      await fs.writeFile(join(outputPath, 'types.d.ts'), typesContent);

      if (options.includeEnums) {
        const enumsContent = this.templateEngine.generateEnums(tsDialect);
        await fs.writeFile(join(outputPath, 'enums.d.ts'), enumsContent);
      }

      const messagesContent = this.templateEngine.generateMessages(tsDialect);
      await fs.writeFile(join(outputPath, 'messages.d.ts'), messagesContent);

      const indexContent = this.templateEngine.generateIndex(tsDialect, options.includeEnums);
      await fs.writeFile(join(outputPath, 'index.d.ts'), indexContent);
    }

    // Generate decoder definitions in the same dialect directory
    const decoderContent = this.generateDecoderDefinitions(definition, options.dialectName);
    const decoderPath = join(outputPath, 'decoder.js');
    await fs.writeFile(decoderPath, decoderContent);

    console.log(`Generated TypeScript types for ${options.dialectName} in ${outputPath}`);
  }

  private generateDecoderDefinitions(definition: MAVLinkDialectDefinition, dialectName: string): string {
    let code = `// Auto-generated decoder definitions for ${dialectName} dialect\n`;
    code += `// Generated from MAVLink XML definitions\n\n`;
    
    const dialectNameUpper = dialectName.toUpperCase();
    const exportName = `${dialectNameUpper}_MESSAGE_DEFINITIONS`;
    
    code += `const ${exportName} = [\n`;
    
    for (const message of definition.messages || []) {
      code += `  {\n`;
      code += `    id: ${message.id},\n`;
      code += `    name: '${message.name}',\n`;
      code += `    fields: [\n`;
      
      for (const field of message.fields || []) {
        let fieldType = field.type;
        let arrayLength: number | undefined;
        
        // Handle array types like uint8_t[4]
        const arrayMatch = fieldType.match(/^([^[]+)\[(\d+)\]$/);
        if (arrayMatch) {
          fieldType = arrayMatch[1];
          arrayLength = parseInt(arrayMatch[2]);
        }
        
        code += `      {\n`;
        code += `        name: '${field.name}',\n`;
        code += `        type: '${fieldType}',\n`;
        if (arrayLength) {
          code += `        arrayLength: ${arrayLength},\n`;
        }
        if (field.extension) {
          code += `        extension: ${field.extension},\n`;
        }
        code += `      },\n`;
      }
      
      code += `    ]\n`;
      code += `  },\n`;
    }
    
    code += `];\n\n`;
    code += `module.exports = {\n`;
    code += `  ${exportName}\n`;
    code += `};\n`;
    
    return code;
  }

  reset(): void {
    this.xmlParser.reset();
  }
}

// Standalone function for programmatic usage
export async function generateTypesFromXML(
  xmlContent: string,
  options: GenerationOptions
): Promise<{ [filename: string]: string }> {
  const converter = new TypeConverter();
  const templateEngine = new TemplateEngine();

  // Parse XML directly from string
  const definition = await new Promise<MAVLinkDialect>((resolve, reject) => {
    parseString(xmlContent, { explicitArray: false }, (err: Error | null, result: { mavlink: MAVLinkDialect }) => {
      if (err) reject(err);
      else resolve(result.mavlink);
    });
  });

  // Convert parsed XML to definition format for compatibility
  const definitionForConverter: MAVLinkDialectDefinition = {
    version: definition.version,
    dialect: definition.dialect ? parseInt(definition.dialect) : undefined,
    includes: [],
    enums: [],
    messages: []
  };

  // Convert to TypeScript
  const tsDialect = converter.convert(definitionForConverter, options.dialectName);

  const files: { [filename: string]: string } = {};

  if (options.outputFormat === 'single') {
    files['index.ts'] = templateEngine.generateSingle(tsDialect);
  } else {
    files['types.ts'] = templateEngine.generateTypes(tsDialect);
    if (options.includeEnums) {
      files['enums.ts'] = templateEngine.generateEnums(tsDialect);
    }
    files['messages.ts'] = templateEngine.generateMessages(tsDialect);
    files['index.ts'] = templateEngine.generateIndex(tsDialect, options.includeEnums);
  }

  return files;
}
