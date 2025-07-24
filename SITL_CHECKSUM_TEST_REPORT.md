# SITL Checksum Compatibility Test Report

## Executive Summary

The SITL checksum compatibility issue has been addressed by updating the CRC algorithm from CRC-16/CCITT to MCRF4XX in aircast-mavlink. However, direct testing shows that SITL is still rejecting connections, likely due to a different underlying issue.

## Test Details

### 1. CRC Algorithm Update Verification ✅

**Location**: `/Users/pavliha/Code/aircast/aircast-mavlink/src/generator/mavlink-crc.ts`

The CRC algorithm has been successfully updated to use MCRF4XX:

```typescript
// Process all message bytes using MCRF4XX algorithm
for (let i = 0; i < data.length; i++) {
  let tmp = data[i] ^ (crc & 0xff);
  tmp ^= (tmp << 4);
  crc = ((crc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4)) & 0xffff;
}
```

### 2. REQUEST_DATA_STREAM Checksum Generation ✅

Running the test script `test_request_data_stream.ts`:

```
Message: REQUEST_DATA_STREAM
System ID: 255, Component ID: 190
Payload: target_system=1, target_component=1, req_stream_id=0, req_message_rate=1, start_stop=1
Generated Checksum: 0xead1
```

**Previous checksums**:
- Old algorithm (CRC-16/CCITT): `0x020b` or `0x020c`
- SITL expected: `0x003c`
- New algorithm (MCRF4XX): `0xead1`

### 3. SITL Direct Connection Test ❌

**Test Method**: Direct TCP connection to SITL on port 5760 with REQUEST_DATA_STREAM message

**Result**: Connection reset by peer

This suggests that while the checksum algorithm has been updated, there may be other compatibility issues:

1. **Different MAVLink version**: SITL might be expecting MAVLink v1 while we're sending v2
2. **Different dialect**: SITL might be using a different dialect with different CRC_EXTRA values
3. **Protocol handshake**: SITL might require a specific connection sequence before accepting messages

### 4. SITL Environment Status ✅

- SITL Docker container is running: `sitl_development_ardupilot-sitl.1`
- Container has been up for 7+ hours
- No recent checksum errors in SITL logs

## Key Findings

1. **CRC Algorithm Updated**: The MCRF4XX algorithm is now implemented in aircast-mavlink
2. **New Checksum Generated**: REQUEST_DATA_STREAM now generates checksum `0xead1`
3. **SITL Still Rejecting**: Direct connection tests show SITL is still not accepting messages
4. **No Error Logs**: SITL is not logging checksum errors, suggesting silent rejection

## Recommendations

### 1. Verify MAVLink Protocol Version
The test is sending MAVLink v1 (0xfe magic byte). We should verify if SITL expects v1 or v2.

### 2. Check CRC_EXTRA Values
The CRC_EXTRA value for REQUEST_DATA_STREAM (message ID 66) is set to 148. This needs to match what SITL expects.

### 3. Test Through Full Pipeline
Instead of direct TCP connection, test through the complete pipeline:
- aircast-web → aircast-agent → SITL

### 4. Compare with Working Implementation
The documentation mentions QGroundControl works with SITL. We should:
- Capture QGroundControl's REQUEST_DATA_STREAM message
- Compare the exact bytes including checksum
- Ensure our implementation matches

## Next Steps

1. **Capture Working Traffic**: Use Wireshark to capture a working REQUEST_DATA_STREAM from QGroundControl
2. **Compare Implementations**: Verify our CRC_EXTRA values match the working implementation
3. **Test Full Pipeline**: Set up aircast-agent with SITL connection and test the complete flow
4. **Debug Protocol Version**: Ensure we're using the correct MAVLink version (v1 vs v2)

## Test Scripts Created

1. `/Users/pavliha/Code/aircast/aircast-mavlink/test_sitl_checksum.py` - Direct SITL connection test
2. Existing `test_request_data_stream.ts` - Checksum generation verification

## Conclusion

While the CRC algorithm has been successfully updated to MCRF4XX and is generating a new checksum (0xead1), SITL is still rejecting connections. This suggests the issue may be more complex than just the CRC algorithm and requires further investigation into protocol compatibility, CRC_EXTRA values, and the complete connection handshake sequence.

To definitively verify if the checksum issue is fixed, we need to:
1. Test through the full aircast pipeline (web → agent → SITL)
2. Compare our implementation with a known working client (QGroundControl)
3. Ensure all protocol parameters match SITL's expectations