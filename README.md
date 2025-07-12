# Aircast MAVLink

A comprehensive Node.js tool for working with MAVLink protocols, providing both TypeScript type generation from XML dialect files and real-time MAVLink message parsing.

## Features

### Type Generation
- Generate TypeScript interfaces from MAVLink XML dialects
- Support for all MAVLink data types and enums
- Type-safe enum definitions with numeric values (not string literals)
- Batch processing of multiple dialects
- CLI interface for easy integration

### MAVLink Parser
- Real-time MAVLink v1 and v2 message parsing
- CRC validation for data integrity
- Streaming data support with buffer management
- Browser and Node.js compatibility
- Web Worker and WebRTC integration examples
- TCP/UDP connection handling

## Installation

### From GitHub Packages

First, configure npm to use GitHub Packages for the `@pavliha` scope:

```bash
# Create/update .npmrc in your project
echo "@pavliha:registry=https://npm.pkg.github.com" >> .npmrc
echo "//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN" >> .npmrc
```

Then install the package:

```bash
# Global installation
npm install -g @pavliha/aircast-mavlink

# Local installation
npm install @pavliha/aircast-mavlink
```

**Note**: Replace `YOUR_GITHUB_TOKEN` with a GitHub Personal Access Token that has `read:packages` scope.

### Global Installation (Alternative)

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

#### Type Generation

```typescript
import { MAVLinkGenerator, generateTypesFromXML } from 'aircast-mavlink';

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

#### MAVLink Parsing

```typescript
import { 
  MAVLinkParser, 
  MAVLinkFrameParser, 
  MAVLinkMessageDecoder,
  CRCCalculator
} from 'aircast-mavlink';

// Import pre-generated dialect types separately
import * as CommonTypes from 'aircast-mavlink/types/common';
import * as MinimalTypes from 'aircast-mavlink/types/minimal';
import * as ArduPilotMegaTypes from 'aircast-mavlink/types/ardupilotmega';
import * as StandardTypes from 'aircast-mavlink/types/standard';

// Basic message parsing
const parser = new MAVLinkParser({ validateCRC: true });

// Parse incoming data (Buffer or Uint8Array)
const messages = parser.parseBytes(incomingData);
messages.forEach(message => {
  console.log(`Message: ${message.message_name}`);
  console.log(`From: ${message.system_id}:${message.component_id}`);
  console.log(`Payload:`, message.payload);
});

// Advanced frame-by-frame parsing
const frameParser = new MAVLinkFrameParser();
const decoder = new MAVLinkMessageDecoder();

frameParser.on('frame', (frame) => {
  const message = decoder.decode(frame);
  if (message) {
    console.log('Decoded message:', message);
  }
});

// Process streaming data
frameParser.process(dataBuffer);

// WebSocket integration example
websocket.onmessage = (event) => {
  const data = new Uint8Array(event.data);
  const messages = parser.parseBytes(data);
  
  messages.forEach(msg => {
    switch (msg.message_name) {
      case 'HEARTBEAT':
        updateConnectionStatus(msg.payload);
        break;
      case 'GPS_RAW_INT':
        updatePosition(msg.payload);
        break;
      case 'ATTITUDE':
        updateAttitude(msg.payload);
        break;
    }
  });
};

// Using pre-generated types with parser
function processMessage(msg: MAVLinkMessage) {
  switch (msg.message_name) {
    case 'HEARTBEAT':
      // Type-safe access with CommonTypes
      const heartbeat = msg.payload as CommonTypes.MessageHeartbeat;
      console.log(`System type: ${heartbeat.type}`);
      break;
    case 'GPS_RAW_INT':
      const gps = msg.payload as CommonTypes.MessageGpsRawInt;
      console.log(`Lat: ${gps.lat / 1e7}, Lon: ${gps.lon / 1e7}`);
      break;
  }
}
```

## Pre-generated Types

The package includes pre-generated TypeScript types for common MAVLink dialects:

### Available Dialects
- **CommonTypes** - Standard MAVLink common dialect (most widely used)
- **MinimalTypes** - Minimal MAVLink dialect for basic functionality  
- **ArduPilotMegaTypes** - ArduPilot-specific extensions
- **StandardTypes** - Full standard MAVLink dialect

### Usage Examples

```typescript
import * as CommonTypes from 'aircast-mavlink/types/common';
import * as ArduPilotMegaTypes from 'aircast-mavlink/types/ardupilotmega';

// Type-safe message handling
function handleHeartbeat(msg: CommonTypes.MessageHeartbeat) {
  if (msg.autopilot === CommonTypes.MAV_AUTOPILOTEnum.MAV_AUTOPILOT_ARDUPILOTMEGA) {
    console.log('ArduPilot detected');
  }
}

// Type guards
function isHeartbeat(msg: any): msg is CommonTypes.MessageHeartbeat {
  return CommonTypes.isHeartbeat(msg);
}

// Enum usage
const systemType: CommonTypes.MAV_TYPE = CommonTypes.MAV_TYPEEnum.MAV_TYPE_QUADROTOR;
const flightMode: ArduPilotMegaTypes.COPTER_MODE = ArduPilotMegaTypes.COPTER_MODEEnum.COPTER_MODE_STABILIZE;
```

### Type Structure

Each dialect export includes:
- **Message interfaces** - Typed message payload structures
- **Enum types** - Union types with numeric values  
- **Enum objects** - Runtime enum values
- **Type guards** - Runtime type checking functions
- **Type maps** - Message name to type mappings

```typescript
// Example from CommonTypes
interface MessageHeartbeat {
  type: MAV_TYPE;
  autopilot: MAV_AUTOPILOT;
  base_mode: MAV_MODE_FLAG;
  system_status: MAV_STATE;
  mavlink_version: number;
}

type MAV_TYPE = 0 | 1 | 2 | 3 | number; // Union type

enum MAV_TYPEEnum {  // Runtime enum
  MAV_TYPE_GENERIC = 0,
  MAV_TYPE_FIXED_WING = 1,
  MAV_TYPE_QUADROTOR = 2,
  MAV_TYPE_COAXIAL = 3,
}

function isHeartbeat(msg: any): msg is MessageHeartbeat; // Type guard
```

## Parser API Reference

### MAVLinkParser

Main parser class for processing MAVLink data streams.

```typescript
interface ParserOptions {
  validateCRC?: boolean;     // Enable CRC validation (default: true)
  bufferSize?: number;       // Internal buffer size (default: 4096)
  resetOnError?: boolean;    // Reset parser state on errors (default: true)
}

class MAVLinkParser {
  constructor(options?: ParserOptions);
  
  // Parse bytes and return complete messages
  parseBytes(data: Buffer | Uint8Array): MAVLinkMessage[];
  
  // Reset parser state
  reset(): void;
  
  // Get parser statistics
  getStats(): ParserStats;
}
```

### MAVLinkFrameParser

Low-level frame parser with event-based API.

```typescript
class MAVLinkFrameParser extends EventEmitter {
  constructor(options?: ParserOptions);
  
  // Process incoming data
  process(data: Buffer | Uint8Array): void;
  
  // Events:
  // 'frame' - Complete frame received
  // 'error' - Parse error occurred
}
```

### MAVLinkMessageDecoder

Decodes frames into structured messages.

```typescript
class MAVLinkMessageDecoder {
  // Decode a frame into a message
  decode(frame: MAVLinkFrame): MAVLinkMessage | null;
}
```

### Message Structure

```typescript
interface MAVLinkMessage {
  sequence: number;
  system_id: number;
  component_id: number;
  message_id: number;
  message_name: string;
  payload: Record<string, any>;
  timestamp: number;
  crc_ok: boolean;
}
```

## Examples

The `examples/` directory contains comprehensive usage examples:

### Browser Examples
- **WebRTC Integration** (`webrtc-integration.html`) - Complete web demo with real-time parsing
- **Web Worker** (`web-worker-example.js`) - Non-blocking parsing in web workers
- **Basic Web Usage** (`test-web.html`) - Simple browser integration

### Node.js Examples  
- **Basic Parser** (`basic-parser.js`) - Fundamental parsing concepts
- **Streaming Data** (`nodejs-stream.js`) - TCP/UDP connections and file replay
- **Production Usage** - Advanced patterns for real applications

### Running Examples

```bash
# Build the project first
npm run build

# Run basic Node.js example
node examples/basic-parser.js

# Run streaming example with different modes
node examples/nodejs-stream.js test              # Run tests
node examples/nodejs-stream.js tcp localhost 5760  # Connect to TCP source
node examples/nodejs-stream.js udp 14550           # Start UDP server
node examples/nodejs-stream.js file data.mavlink   # Replay file

# Serve web examples
python3 -m http.server 8000
# Then open http://localhost:8000/examples/
```

### Common Integration Patterns

#### Real-time Telemetry Processing
```typescript
const parser = new MAVLinkParser({ validateCRC: true });

// WebRTC data channel
dataChannel.onmessage = (event) => {
  const messages = parser.parseBytes(new Uint8Array(event.data));
  messages.forEach(processMessage);
};

// WebSocket connection
websocket.onmessage = (event) => {
  const messages = parser.parseBytes(new Uint8Array(event.data));
  messages.forEach(processMessage);
};

// TCP/UDP streams (Node.js)
socket.on('data', (data) => {
  const messages = parser.parseBytes(data);
  messages.forEach(processMessage);
});
```

#### Message Filtering and Routing
```typescript
function processMessage(msg: MAVLinkMessage) {
  switch (msg.message_name) {
    case 'HEARTBEAT':
      updateSystemStatus(msg.system_id, msg.payload);
      break;
    case 'GPS_RAW_INT':
      updatePosition(msg.payload.lat / 1e7, msg.payload.lon / 1e7);
      break;
    case 'ATTITUDE':
      updateAttitude(msg.payload.roll, msg.payload.pitch, msg.payload.yaw);
      break;
    case 'VFR_HUD':
      updateHUD(msg.payload);
      break;
    case 'STATUSTEXT':
      displayStatusMessage(msg.payload.text, msg.payload.severity);
      break;
  }
}
```

#### Error Handling and Recovery
```typescript
try {
  const messages = parser.parseBytes(incomingData);
  messages.forEach(processMessage);
} catch (error) {
  console.error('Parse error:', error.message);
  
  // Reset parser state if needed
  if (error.code === 'INVALID_CHECKSUM') {
    parser.reset();
  }
  
  // Implement reconnection logic
  scheduleReconnect();
}
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
│   ├── cli.ts                     # Command line interface
│   ├── index.ts                   # Main export file
│   ├── types.ts                   # Shared type definitions
│   ├── generator/                 # Type generation components
│   │   ├── generator.ts           # Main generator class
│   │   ├── template-engine.ts     # Handlebars template engine
│   │   ├── type-converter.ts      # XML to TypeScript conversion
│   │   ├── xml-parser.ts          # MAVLink XML parser
│   │   └── batch-processor.ts     # Batch processing utilities
│   └── parser/                    # MAVLink parsing components
│       ├── index.ts               # Parser exports
│       ├── mavlink-parser.ts      # Main parser class
│       ├── frame-parser.ts        # Frame-level parsing
│       ├── message-decoder.ts     # Message decoding
│       ├── crc.ts                 # CRC calculation utilities
│       └── types.ts               # Parser type definitions
├── examples/                      # Usage examples and demos
│   ├── README.md                  # Examples documentation
│   ├── basic-parser.js            # Basic Node.js usage
│   ├── nodejs-stream.js           # Advanced streaming patterns
│   ├── web-worker-example.js      # Web Worker integration
│   ├── webrtc-integration.html    # Complete web demo
│   └── test-web.html              # Simple browser test
├── tests/                         # Jest test files
└── dist/                          # Compiled JavaScript output
```

## License

MIT