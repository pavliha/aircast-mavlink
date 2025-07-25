#!/usr/bin/env python3
"""
Generate REQUEST_DATA_STREAM messages to find the exact combination that produces checksum 0x003c
"""

import struct

def crc16_accumulate(data, crc=0xFFFF):
    """Calculate CRC16 for MAVLink messages"""
    for byte in data:
        tmp = byte ^ (crc & 0xFF)
        tmp = (tmp ^ (tmp << 4)) & 0xFF
        crc = ((crc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4)) & 0xFFFF
    return crc

def calculate_mavlink_checksum(length, seq, sys_id, comp_id, msg_id, payload, crc_extra=0):
    """Calculate MAVLink checksum"""
    # Create the data to checksum (everything except magic byte and checksum)
    data = struct.pack('BBBBB', length, seq, sys_id, comp_id, msg_id) + payload
    
    crc = crc16_accumulate(data)
    if crc_extra:
        crc = crc16_accumulate([crc_extra], crc)
    
    return crc

def create_request_data_stream(target_system, target_component, req_stream_id, req_message_rate, start_stop, 
                             seq=0, sys_id=255, comp_id=0):
    """Create a REQUEST_DATA_STREAM message"""
    # REQUEST_DATA_STREAM payload structure:
    # uint8_t target_system
    # uint8_t target_component
    # uint8_t req_stream_id
    # uint16_t req_message_rate
    # uint8_t start_stop
    
    payload = struct.pack('<BBBHB', target_system, target_component, req_stream_id, req_message_rate, start_stop)
    length = len(payload)
    msg_id = 66  # REQUEST_DATA_STREAM
    crc_extra = 148  # CRC_EXTRA for REQUEST_DATA_STREAM
    
    # Calculate checksum
    checksum = calculate_mavlink_checksum(length, seq, sys_id, comp_id, msg_id, payload, crc_extra)
    
    # Create full packet
    packet = struct.pack('<BBBBBB', 0xFE, length, seq, sys_id, comp_id, msg_id) + payload + struct.pack('<H', checksum)
    
    return packet, checksum

def test_combinations():
    """Test various combinations to find the one that produces checksum 0x003c"""
    print("Testing combinations to find checksum 0x003c...")
    print("=" * 60)
    
    target_checksum = 0x003c
    found_combinations = []
    
    # Test common parameter combinations
    test_cases = [
        # (target_system, target_component, req_stream_id, req_message_rate, start_stop, seq, sys_id, comp_id)
        (1, 1, 0, 1, 1, 0, 255, 0),    # Basic case
        (1, 1, 0, 10, 1, 0, 255, 0),   # Rate 10Hz
        (1, 1, 1, 1, 1, 0, 255, 0),    # Stream ID 1
        (1, 1, 2, 1, 1, 0, 255, 0),    # Stream ID 2
        (1, 1, 6, 1, 1, 0, 255, 0),    # Stream ID 6 (ALL)
        (1, 1, 0, 0, 0, 0, 255, 0),    # Stop stream
        (1, 1, 1, 0, 0, 0, 255, 0),    # Stop stream ID 1
        (1, 1, 2, 0, 0, 0, 255, 0),    # Stop stream ID 2
        (1, 1, 6, 0, 0, 0, 255, 0),    # Stop stream ID 6
    ]
    
    # Also test different system IDs and sequences
    for seq in range(0, 256, 50):
        for sys_id in [1, 255]:
            for comp_id in [0, 1]:
                test_cases.extend([
                    (1, 1, 0, 1, 1, seq, sys_id, comp_id),
                    (1, 1, 1, 1, 1, seq, sys_id, comp_id),
                    (1, 1, 6, 1, 1, seq, sys_id, comp_id),
                ])
    
    for i, (target_system, target_component, req_stream_id, req_message_rate, start_stop, seq, sys_id, comp_id) in enumerate(test_cases):
        packet, checksum = create_request_data_stream(
            target_system, target_component, req_stream_id, req_message_rate, start_stop, seq, sys_id, comp_id
        )
        
        if checksum == target_checksum:
            found_combinations.append({
                'target_system': target_system,
                'target_component': target_component,
                'req_stream_id': req_stream_id,
                'req_message_rate': req_message_rate,
                'start_stop': start_stop,
                'seq': seq,
                'sys_id': sys_id,
                'comp_id': comp_id,
                'packet': packet,
                'checksum': checksum
            })
            
            print(f"*** FOUND MATCH #{len(found_combinations)} ***")
            print(f"  target_system: {target_system}")
            print(f"  target_component: {target_component}")
            print(f"  req_stream_id: {req_stream_id}")
            print(f"  req_message_rate: {req_message_rate}")
            print(f"  start_stop: {start_stop}")
            print(f"  sequence: {seq}")
            print(f"  sys_id: {sys_id}")
            print(f"  comp_id: {comp_id}")
            print(f"  checksum: 0x{checksum:04x}")
            print(f"  packet bytes: {' '.join(f'{b:02x}' for b in packet)}")
            print()
    
    # If we haven't found it yet, do a more exhaustive search
    if not found_combinations:
        print("No matches found in common cases, doing exhaustive search...")
        print("Testing all possible single-byte parameters...")
        
        count = 0
        for target_system in range(256):
            for target_component in range(256):
                for req_stream_id in range(256):
                    for start_stop in range(2):  # 0 or 1
                        for req_message_rate in [0, 1, 2, 5, 10, 50]:  # Common rates
                            for seq in [0, 1]:
                                for sys_id in [1, 255]:
                                    for comp_id in [0, 1]:
                                        packet, checksum = create_request_data_stream(
                                            target_system, target_component, req_stream_id, 
                                            req_message_rate, start_stop, seq, sys_id, comp_id
                                        )
                                        
                                        count += 1
                                        if count % 100000 == 0:
                                            print(f"  Tested {count} combinations...")
                                        
                                        if checksum == target_checksum:
                                            found_combinations.append({
                                                'target_system': target_system,
                                                'target_component': target_component,
                                                'req_stream_id': req_stream_id,
                                                'req_message_rate': req_message_rate,
                                                'start_stop': start_stop,
                                                'seq': seq,
                                                'sys_id': sys_id,
                                                'comp_id': comp_id,
                                                'packet': packet,
                                                'checksum': checksum
                                            })
                                            
                                            print(f"*** FOUND MATCH #{len(found_combinations)} ***")
                                            print(f"  target_system: {target_system}")
                                            print(f"  target_component: {target_component}")
                                            print(f"  req_stream_id: {req_stream_id}")
                                            print(f"  req_message_rate: {req_message_rate}")
                                            print(f"  start_stop: {start_stop}")
                                            print(f"  sequence: {seq}")
                                            print(f"  sys_id: {sys_id}")
                                            print(f"  comp_id: {comp_id}")
                                            print(f"  checksum: 0x{checksum:04x}")
                                            print(f"  packet bytes: {' '.join(f'{b:02x}' for b in packet)}")
                                            print()
                                            
                                            # Stop after finding first few matches
                                            if len(found_combinations) >= 5:
                                                break
                                    if len(found_combinations) >= 5:
                                        break
                                if len(found_combinations) >= 5:
                                    break
                            if len(found_combinations) >= 5:
                                break
                        if len(found_combinations) >= 5:
                            break
                    if len(found_combinations) >= 5:
                        break
                if len(found_combinations) >= 5:
                    break
            if len(found_combinations) >= 5:
                break
    
    print(f"\nSUMMARY: Found {len(found_combinations)} combinations that produce checksum 0x003c")
    
    # Also show a few example messages with different checksums for comparison
    print(f"\nFor comparison, here are some example messages with different checksums:")
    examples = [
        (1, 1, 0, 1, 1, 0, 255, 0),
        (1, 1, 1, 10, 1, 0, 255, 0),
        (1, 1, 6, 2, 1, 0, 255, 0),
    ]
    
    for target_system, target_component, req_stream_id, req_message_rate, start_stop, seq, sys_id, comp_id in examples:
        packet, checksum = create_request_data_stream(
            target_system, target_component, req_stream_id, req_message_rate, start_stop, seq, sys_id, comp_id
        )
        print(f"  Parameters: ts={target_system}, tc={target_component}, sid={req_stream_id}, rate={req_message_rate}, start={start_stop}, seq={seq}, sysid={sys_id}, compid={comp_id}")
        print(f"  Checksum: 0x{checksum:04x}")
        print(f"  Packet: {' '.join(f'{b:02x}' for b in packet)}")
        print()

if __name__ == "__main__":
    test_combinations()