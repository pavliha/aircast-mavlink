# MAVLink Message Decoders

This document describes the integrated MAVLink message decoder system that automatically generates payload decoders from MAVLink XML definitions.

## Overview

The decoder system provides:
- **Automatic payload decoding** from raw MAVLink bytes to structured JSON objects
- **Code generation** from official MAVLink XML definitions
- **Support for all MAVLink data types** (uint8_t, int16_t, float, arrays, etc.)
- **Multiple dialect support** (common, ardupilotmega, minimal, etc.)
- **Integrated generation** alongside TypeScript type definitions

## Architecture

### 1. Code Generation
The decoder definitions are automatically generated during the type generation process:

```bash
npm run gen:common    # Generates types AND decoders for common dialect
npm run gen:all       # Generates all dialects with decoders
```

Generated files:
- `dist/decoders/{dialect}.ts` - Message decoder definitions (build output)
- `types/{dialect}/messages.ts` - TypeScript message interfaces  
- `types/{dialect}/types.ts` - Base types and enums

### 2. Message Decoder Class
The `MAVLinkMessageDecoder` class provides the runtime decoding functionality:

```typescript
import { MAVLinkMessageDecoder } from './src/parser/message-decoder';

// Load with generated definitions (recommended)
const decoder = await MAVLinkMessageDecoder.createWithGeneratedDefinitions();

// Or use built-in hardcoded definitions (fallback)
const decoder = new MAVLinkMessageDecoder();
```

### 3. Usage Example

```typescript
// Decode a MAVLink frame
const frame = {
  magic: 0xFD,
  length: 9,
  sequence: 1,
  system_id: 1,
  component_id: 1,
  message_id: 0, // HEARTBEAT
  payload: new Uint8Array([6, 3, 196, 144, 0, 0, 4, 0, 0]),
  checksum: 0x1234
};

const decoded = decoder.decode(frame);

console.log(decoded.message_name); // "HEARTBEAT"
console.log(decoded.payload);       // { type: 6, autopilot: 3, base_mode: 196, ... }
```

## Supported Data Types

The decoder handles all MAVLink data types:

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

The decoder automatically loads definitions from multiple dialects:

- **common** - Core MAVLink messages (HEARTBEAT, SYS_STATUS, etc.)
- **ardupilotmega** - ArduPilot-specific messages
- **minimal** - Minimal message set

The decoder prioritizes messages by ID, loading the first definition found for each message ID across all dialects.

## Error Handling

- **Unknown messages** are decoded as `UNKNOWN_{id}` with raw payload bytes
- **Insufficient payload data** results in partial decoding (fields set to default values)
- **Invalid data types** fall back to raw byte values
- **Missing generated definitions** automatically fall back to hardcoded definitions

## Performance

- **Fast lookup** using `Map<number, MessageDefinition>` for O(1) message lookup
- **Efficient binary parsing** using `DataView` for proper endianness handling
- **Minimal memory allocation** by reusing decoder instances
- **319 message definitions** loaded from generated XML (as of current MAVLink spec)

## Integration with Build Process

Decoder generation is fully integrated with the existing type generation:

1. **XML Download** - Fetches latest MAVLink XML from GitHub
2. **XML Parsing** - Extracts message and field definitions
3. **Code Generation** - Produces TypeScript decoder definitions
4. **Runtime Loading** - Decoder class imports generated definitions

No separate build steps required - decoders are generated alongside types!

## Files Generated

For each dialect (e.g., `common`):
```
types/common/
├── messages.ts     # TypeScript message interfaces
├── types.ts        # Base types and enums
├── enums.ts        # Enum definitions (if enabled)
└── index.ts        # Barrel exports

dist/decoders/
├── common.ts       # 🆕 Message decoder definitions
├── ardupilotmega.ts
└── minimal.ts
```

## Backward Compatibility

The decoder maintains full backward compatibility:
- Existing parser interface unchanged
- Built-in hardcoded definitions available as fallback
- Gradual migration path from hardcoded to generated definitions