# Aircast MAVLink

A Node.js tool that generates TypeScript type definitions from MAVLink XML dialect files with numeric enum values.

## Features

- Generate TypeScript interfaces from MAVLink XML dialects
- Support for all MAVLink data types and enums
- Type-safe enum definitions with numeric values (not string literals)
- Batch processing of multiple dialects
- CLI interface for easy integration

## Installation

### Global Installation

```bash
npm install -g aircast-mavlink
```

### Local Development

```bash
git clone <repository>
cd aircast-mavlink
npm install
npm run build
```

## Usage

### CLI Usage

#### Generate Single Dialect

```bash
# Using the global CLI
aircast-mavlink generate -i https://raw.githubusercontent.com/mavlink/mavlink/master/message_definitions/v1.0/common.xml -o ./types

# Using local installation
node dist/cli.js generate -i https://raw.githubusercontent.com/mavlink/mavlink/master/message_definitions/v1.0/common.xml -o ./types

# Generate from local file
aircast-mavlink generate -i ./dialect.xml -o ./types

# Specify dialect name and format
aircast-mavlink generate -i common.xml -o ./types -n common -f separate
```

#### Batch Generate Multiple Dialects

```bash
# Generate all available dialects
aircast-mavlink batch -o ./mavlink-types

# Generate specific dialects
aircast-mavlink batch -d "common,minimal,ardupilotmega" -o ./mavlink-types

# Generate with package.json
aircast-mavlink batch -o ./mavlink-types --package
```

#### List Available Dialects

```bash
aircast-mavlink list
```

#### CLI Options

**Generate Command:**
- `-i, --input <path>` - Input XML file path or URL
- `-o, --output <path>` - Output directory (default: "./types")
- `-n, --name <name>` - Dialect name (auto-detected if not provided)
- `-f, --format <format>` - Output format: "single" or "separate" (default: "separate")
- `--no-enums` - Skip enum generation
- `--no-type-guards` - Skip type guard generation

**Batch Command:**
- `-o, --output <path>` - Output directory (default: "./mavlink-types")
- `-d, --dialects <dialects>` - Comma-separated dialect names
- `-f, --format <format>` - Output format: "single" or "separate" (default: "separate")
- `--no-enums` - Skip enum generation
- `--no-type-guards` - Skip type guard generation
- `--package` - Generate package.json and tsconfig.json

### Local Development Examples

```bash
# Build the project
npm run build

# Generate common dialect types
node dist/cli.js generate -i https://raw.githubusercontent.com/mavlink/mavlink/master/message_definitions/v1.0/common.xml -o ./output/common

# Generate minimal dialect types
node dist/cli.js generate -i https://raw.githubusercontent.com/mavlink/mavlink/master/message_definitions/v1.0/minimal.xml -o ./output/minimal

# Generate all dialects
node dist/cli.js batch -o ./output/all-dialects

# List available dialects
node dist/cli.js list

# Generate from local XML file
node dist/cli.js generate -i ./my-dialect.xml -o ./output/custom
```

### Programmatic Usage

```typescript
import { MAVLinkGenerator, generateTypesFromXML } from 'aircast-mavlinkerator';

// Generate from XML string
const files = await generateTypesFromXML(xmlContent, {
  dialectName: 'common',
  outputFormat: 'separate', // or 'single'
  includeEnums: true,
  includeTypeGuards: true
});

// files is an object with filename -> content mappings
console.log(files['types.ts']);
console.log(files['messages.ts']);
console.log(files['index.ts']);

// Generate from URL or file
const generator = new MAVLinkGenerator();

// From URL
await generator.generateFromURL(
  'https://raw.githubusercontent.com/mavlink/mavlink/master/message_definitions/v1.0/common.xml',
  './output',
  {
    dialectName: 'common',
    outputFormat: 'separate',
    includeEnums: true,
    includeTypeGuards: true
  }
);

// From local file
await generator.generateFromFile('./dialect.xml', './output', {
  dialectName: 'custom',
  outputFormat: 'single',
  includeEnums: true,
  includeTypeGuards: false
});
```

## Generated Types

The tool generates TypeScript files with the following structure:

### File Structure

When using `separate` format, the generator creates:
- `types.ts` - Base interfaces and type definitions
- `enums.ts` - Enum object definitions
- `messages.ts` - Message interfaces, type maps, and type guards
- `index.ts` - Main export file

### Example Output

**types.ts**
```typescript
export interface MAVLinkMessage<Content = unknown> {
  timestamp: number;
  system_id: number;
  component_id: number;
  type: string;
  content: Content;
}

export type MAV_STATE =
  | 0 // MAV_STATE_UNINIT - Uninitialized system
  | 1 // MAV_STATE_BOOT - System is booting up
  | 2 // MAV_STATE_STANDBY - System is standby
  | 3 // MAV_STATE_ACTIVE - System is active
  | number;

export type MAV_TYPE =
  | 0 // MAV_TYPE_GENERIC - Generic micro air vehicle
  | 1 // MAV_TYPE_FIXED_WING - Fixed wing aircraft
  | 2 // MAV_TYPE_QUADROTOR - Quadrotor
  | number;
```

**enums.ts**
```typescript
export enum MAV_STATEEnum {
  MAV_STATE_UNINIT = 0,
  MAV_STATE_BOOT = 1,
  MAV_STATE_STANDBY = 2,
  MAV_STATE_ACTIVE = 3,
}
```

**messages.ts**
```typescript
export interface MessageHeartbeat {
  type: MAV_TYPE;
  autopilot: MAV_AUTOPILOT;
  base_mode: MAV_MODE_FLAG;
  system_status: MAV_STATE;
  mavlink_version: number;
}

export interface MessageTypeMap {
  HEARTBEAT: MessageHeartbeat;
  // ... other messages
}

export type AnyMessage = 
  | MAVLinkMessage<MessageHeartbeat>
  | MAVLinkMessage<MessageSysStatus>;

// Type guard functions
export function isHeartbeat(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageHeartbeat> {
  return msg.type === 'HEARTBEAT';
}
```

## Output Formats

### Separate Files (Default)
- `types.ts` - Type definitions and interfaces
- `enums.ts` - Enum object definitions  
- `messages.ts` - Message interfaces and utilities
- `index.ts` - Main export file

### Single File
All definitions combined into a single `index.ts` file.

## Development

```bash
# Setup
npm install
npm run build

# Development workflow
npm run dev        # Run in development mode with tsx
npm run build      # Build TypeScript to JavaScript
npm run test       # Run Jest tests
npm run lint       # Run ESLint
npm run clean      # Clean build artifacts

# Test the CLI locally
node dist/cli.js --help

# Generate test types
node dist/cli.js generate -i https://raw.githubusercontent.com/mavlink/mavlink/master/message_definitions/v1.0/minimal.xml -o ./test-output
```

## Project Structure

```
├── src/
│   ├── cli.ts              # Command line interface
│   ├── generator.ts        # Main generator class
│   ├── template-engine.ts  # Handlebars template engine
│   ├── type-converter.ts   # XML to TypeScript conversion
│   ├── xml-parser.ts       # MAVLink XML parser
│   ├── batch-processor.ts  # Batch processing utilities
│   └── types.ts           # TypeScript type definitions
├── tests/                  # Jest test files
└── dist/                  # Compiled JavaScript output
```

## License

MIT