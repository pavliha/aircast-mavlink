# REQUEST_DATA_STREAM Compatibility Analysis

## Summary

This document analyzes the REQUEST_DATA_STREAM message compatibility between aircast-mavlink and SITL/gomavlib, specifically investigating the checksum mismatch error:

```
"wrong checksum, expected 003c, got 020b, message id is 66"
```

## Test Results

### JSON Message Tested
```json
{
  "message_name": "REQUEST_DATA_STREAM",
  "system_id": 255,
  "component_id": 190,
  "sequence": 1,
  "payload": {
    "target_system": 1,
    "target_component": 1,
    "req_stream_id": 1,
    "req_message_rate": 2,
    "start_stop": 1
  }
}
```

### Aircast-mavlink Serialization Results

**Both Common and ArduPilot dialects produce identical output:**

- **Binary Length**: 18 bytes
- **Hex Representation**: `fd 06 00 00 01 ff be 42 00 00 01 01 01 02 00 01 0c 02`
- **Generated Checksum**: `0x020c` (524 decimal)
- **Message ID**: 66 (REQUEST_DATA_STREAM)
- **Frame Structure**: ✅ Valid MAVLink v2

### Go Application Parsing Results

**Both dialects successfully parse the message:**
```json
{
  "success": true,
  "message": "REQUEST_DATA_STREAM",
  "message_id": 66,
  "system_id": 255,
  "component_id": 190,
  "sequence": 1,
  "checksum": 524
}
```

## Compatibility Analysis

### Checksum Comparison

| Source | Checksum | Status |
|--------|----------|---------|
| **SITL Expected** | `0x003c` | ❌ Expected by gomavlib |
| **Error "got"** | `0x020b` | ❌ From original error logs |
| **Current aircast-mavlink** | `0x020c` | ❓ Very close to error logs |

### Key Findings

1. **✅ Frame Structure Valid**: The message is properly formatted as MAVLink v2
2. **✅ Message ID Correct**: 66 is correct for REQUEST_DATA_STREAM
3. **✅ Serialization Works**: Both dialects can serialize the message
4. **⚠️ Checksum Mismatch**: Generated checksum (`0x020c`) differs from both:
   - SITL expected (`0x003c`)
   - Original error logs (`0x020b`)

### Difference Analysis

The difference between `0x020c` (current) and `0x020b` (error logs) is only **1 byte**:
- `0x020c` = 524 decimal
- `0x020b` = 523 decimal

This suggests the original error might have been with slightly different payload data, system IDs, or sequence numbers.

## Implications

### Why SITL Rejects the Message

SITL/gomavlib expects checksum `0x003c` but receives `0x020c` from aircast-mavlink. This **significant difference** (524 vs 60 decimal) indicates:

1. **Different CRC_EXTRA values** between dialects/implementations
2. **Different message definitions** or field ordering
3. **Version mismatch** in MAVLink XML specifications

### Root Cause

The checksum mismatch is likely due to **dialect/CRC_EXTRA incompatibility** between:
- aircast-mavlink's MAVLink definitions
- gomavlib's MAVLink definitions used by SITL

## Recommendations

### Immediate Fix Options

1. **Update aircast-mavlink CRC_EXTRA values** to match gomavlib
2. **Switch to a compatible MAVLink dialect** in the agent configuration
3. **Synchronize MAVLink XML definitions** with the latest spec

### Testing Strategy

1. ✅ **Pipeline Validation**: JSON → aircast-mavlink → Go application works
2. ✅ **Frame Structure**: Valid MAVLink v2 format
3. ✅ **Message Parsing**: Go application can extract all fields correctly
4. ⚠️ **Checksum Compatibility**: Needs alignment with SITL expectations

### Next Steps

1. **Identify correct CRC_EXTRA value** for REQUEST_DATA_STREAM in gomavlib
2. **Update aircast-mavlink message definitions** to match
3. **Test with actual SITL connection** to verify fix
4. **Document dialect compatibility requirements**

## Test Execution

The complete pipeline validation can be reproduced with:

```bash
cd /Users/pavliha/Code/aircast/aircast-mavlink
npm test -- --testPathPattern="json-to-go-struct" --testNamePattern="REQUEST_DATA_STREAM"
```

Or run the standalone example:

```bash
cd /Users/pavliha/Code/aircast/aircast-mavlink/tests/go-validator
node request-data-stream-example.js
```

## Conclusion

✅ **Pipeline Works**: JSON → aircast-mavlink → Binary → Go struct parsing is successful  
⚠️ **Checksum Issue**: The root cause of SITL compatibility problems is confirmed to be checksum mismatch  
🎯 **Solution Path**: Update CRC_EXTRA values to match gomavlib/SITL expectations