// Main entry point for programmatic usage

// Generator exports
export { MAVLinkGenerator, generateTypesFromXML } from './generator/generator';
export { BatchProcessor } from './generator/batch-processor';
export { XMLParser } from './generator/xml-parser';
export { TypeConverter } from './generator/type-converter';
export { TemplateEngine } from './generator/template-engine';

// Parser exports
export * from './parser';

// Core types
export * from './types';

// Pre-generated MAVLink dialect types are available in the published package
// Import them after installation: import { CommonTypes } from 'aircast-mavlink/types/common'