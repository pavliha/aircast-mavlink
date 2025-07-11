# MAVLink TypeScript Generator

A Node.js tool that generates TypeScript type definitions from MAVLink XML dialect files.

## Features

- Generate TypeScript interfaces from MAVLink XML dialects
- Support for all MAVLink data types and enums
- Type-safe enum definitions with string literals
- Batch processing of multiple dialects
- CLI interface for easy integration

## Installation

```bash
npm install -g mavlink-ts-generator
```

Or run locally:

```bash
git clone <repository>
cd mavlink-ts-generator
npm install
npm run build
```

## Usage

### CLI Usage

```bash
# Generate types for a single dialect
mavlink-ts-gen --input https://raw.githubusercontent.com/mavlink/mavlink/master/message_definitions/v1.0/common.xml --output ./types

# Generate types for all dialects
mavlink-ts-gen --all --output ./types

# Generate from local file
mavlink-ts-gen --input ./dialect.xml --output ./types
```

### Programmatic Usage

```typescript
import { generateTypesFromXML } from 'mavlink-ts-generator';

const typescriptCode = await generateTypesFromXML(xmlContent, {
  dialectName: 'common',
  outputFormat: 'separate' // or 'single'
});
```

## Generated Types

The tool generates TypeScript files with the following structure:

```typescript
export interface MAVLinkMessage<Content = unknown> {
  timestamp: number;
  system_id: number;
  component_id: number;
  type: string;
  content: Content;
}

export interface MessageHeartbeat {
  Type: MAV_TYPE;
  Autopilot: MAV_AUTOPILOT;
  BaseMode: MAV_MODE_FLAG;
  SystemStatus: MAV_STATE;
  // ... more fields
}

export type MAV_STATE =
  | 'MAV_STATE_UNINIT'
  | 'MAV_STATE_BOOT'
  | string;
```

## Development

```bash
npm run dev        # Run in development mode
npm run build      # Build for production
npm run test       # Run tests
npm run lint       # Run linter
```

## License

MIT