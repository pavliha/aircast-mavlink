# MAVLink Dialect Parsers

This document describes the dialect-specific MAVLink parser system that automatically generates parsers from MAVLink XML definitions.

## Overview

The dialect parser system provides:
- **Separate parsers for each dialect** with dedicated message decoding
- **Self-contained decoder files** with no external dependencies  
- **Code generation** from official MAVLink XML definitions
- **Support for all MAVLink data types** (uint8_t, int16_t, float, arrays, etc.)
- **Multiple dialect support** (common, ardupilotmega, minimal, etc.)
- **Factory pattern** for creating single or multi-dialect parsers

## Architecture

### 1. Code Generation
The dialect parsers are automatically generated during the type generation process:

```bash
npm run gen:common    # Generates types AND parsers for common dialect
npm run gen:all       # Generates all dialects with parsers
```

Generated files:
- `src/generated/dialects/{dialect}/decoder.ts` - Self-contained dialect parser
- `src/generated/dialects/{dialect}/messages.ts` - TypeScript message interfaces  
- `src/generated/dialects/{dialect}/types.ts` - Base types and enums

### 2. Dialect Parser Factory
The `DialectParserFactory` class provides creation and management of dialect parsers:

```typescript
import { DialectParserFactory } from './src/parser/dialect-factory';

// Create single dialect parser
const commonParser = await DialectParserFactory.createParser('common');

// Create multi-dialect parser
const multiParser = await DialectParserFactory.createMultipleDialectParser(['common', 'ardupilotmega']);
```

### 3. Usage Example

```typescript
// Single dialect parser
const parser = await DialectParserFactory.createParser('common');

const frame = {
  magic: 0xFD,
  length: 9,
  sequence: 1,
  system_id: 1,
  component_id: 1,
  message_id: 0, // HEARTBEAT
  payload: new Uint8Array([6, 3, 196, 144, 0, 0, 4, 0, 0]),
  checksum: 0x1234,
  protocol_version: 2
};

const decoded = parser.decode(frame);

console.log(decoded.message_name); // "HEARTBEAT"
console.log(decoded.payload);       // { type: 6, autopilot: 3, base_mode: 196, ... }
console.log(parser.getDialectName()); // "common"
```

## Supported Data Types

The parsers handle all MAVLink data types:

| MAVLink Type | TypeScript Type | Description |
|--------------|-----------------|-------------|
| `uint8_t`    | `number`        | 8-bit unsigned integer |
| `int8_t`     | `number`        | 8-bit signed integer |
| `uint16_t`   | `number`        | 16-bit unsigned integer |
| `int16_t`    | `number`        | 16-bit signed integer |
| `uint32_t`   | `number`        | 32-bit unsigned integer |
| `int32_t`    | `number`        | 32-bit signed integer |
| `uint64_t`   | `bigint`        | 64-bit unsigned integer |
| `int64_t`    | `bigint`        | 64-bit signed integer |
| `float`      | `number`        | 32-bit floating point |
| `double`     | `number`        | 64-bit floating point |
| `char`       | `string`        | Single character |
| `char[N]`    | `string`        | String with max length N |
| `type[N]`    | `type[]`        | Array of N elements |

## Multi-Dialect Support

### Individual Dialect Parsers
Each dialect has its own dedicated parser with complete message definitions:

```typescript
const commonParser = await DialectParserFactory.createParser('common');
console.log(commonParser.getSupportedMessageIds()); // [0, 1, 2, ...]

const ardupilotParser = await DialectParserFactory.createParser('ardupilotmega'); 
console.log(ardupilotParser.getSupportedMessageIds()); // [0, 1, 150, 151, ...]
```

### Multi-Dialect Parser
Combine multiple dialects for comprehensive message support:

```typescript
const multiParser = await DialectParserFactory.createMultipleDialectParser(['common', 'ardupilotmega']);

console.log(multiParser.getDialects()); // ['common', 'ardupilotmega']
console.log(multiParser.getSupportedMessageIds().length); // 319+ messages

// Automatically routes messages to correct dialect parser
const decoded = multiParser.decode(frame);
```

## Self-Contained Parsers

Each generated `decoder.ts` file is completely self-contained:
- **No imports** - All necessary code is included inline
- **Complete type definitions** - DialectParser base class included
- **Message definitions** - All message structures embedded
- **Full parsing logic** - Binary decoding and payload parsing

Example generated structure:
```typescript
// src/generated/dialects/common/decoder.ts

// All interfaces and types defined inline
interface ParsedMAVLinkMessage { ... }
interface MAVLinkFrame { ... }

// Base class included inline  
abstract class DialectParser { ... }

// Message definitions embedded
const COMMON_MESSAGE_DEFINITIONS = [ ... ];

// Dialect-specific parser
export class CommonParser extends DialectParser {
  // Complete implementation
}
```

## Error Handling

- **Unknown messages** are decoded as `UNKNOWN_{id}` with raw payload bytes
- **Insufficient payload data** results in partial decoding (fields set to default values)  
- **Invalid data types** fall back to raw byte values
- **Missing parsers** throw clear error messages with supported dialect list

## Performance

- **Fast lookup** using `Map<number, MessageDefinition>` for O(1) message lookup
- **Efficient binary parsing** using `DataView` for proper endianness handling
- **Lazy loading** - Parsers loaded only when requested
- **Parser caching** - Factory caches created parsers for reuse
- **No runtime dependencies** - Self-contained parsers have zero import overhead

## Integration with Build Process

Parser generation is fully integrated with the existing type generation:

1. **XML Download** - Fetches latest MAVLink XML from GitHub
2. **XML Parsing** - Extracts message and field definitions  
3. **Code Generation** - Produces self-contained TypeScript parser files
4. **Factory Loading** - Parsers dynamically imported when requested

No separate build steps required - parsers are generated alongside types!

## Files Generated

For each dialect (e.g., `common`):
```
src/generated/dialects/common/
├── messages.ts     # TypeScript message interfaces
├── types.ts        # Base types and enums
├── enums.ts        # Enum definitions (if enabled)
├── decoder.ts      # 🆕 Self-contained dialect parser
└── index.ts        # Barrel exports
```

## Supported Dialects

- **common** - Core MAVLink messages (HEARTBEAT, SYS_STATUS, etc.) - 229 messages
- **ardupilotmega** - ArduPilot-specific extensions - 319 total messages  
- **minimal** - Minimal message set for basic functionality
- **standard** - Standard MAVLink protocol messages
- **test** - Test and development messages
- **paparazzi** - Paparazzi UAV system messages
- **python_array_test** - Python array testing messages