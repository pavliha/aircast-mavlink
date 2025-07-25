#!/usr/bin/env python3
"""
Analyze QGroundControl PCAP file to extract REQUEST_DATA_STREAM messages
and understand the exact byte structure that produces checksum 0x003c
"""

import struct
import sys

try:
    from scapy.all import rdpcap, Raw
    from scapy.layers.inet import UDP
except ImportError:
    print("Error: scapy is required. Install with: pip install scapy")
    sys.exit(1)

def crc16_accumulate(data, crc=0xFFFF):
    """Calculate CRC16 for MAVLink messages"""
    for byte in data:
        tmp = byte ^ (crc & 0xFF)
        tmp = (tmp ^ (tmp << 4)) & 0xFF
        crc = ((crc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4)) & 0xFFFF
    return crc

def analyze_mavlink_packet(data):
    """Analyze a potential MAVLink packet"""
    if len(data) < 8:  # Minimum MAVLink v1 packet size
        return None
    
    # Check for MAVLink v1 magic byte
    if data[0] != 0xFE:
        return None
    
    length = data[1]
    seq = data[2]
    sys_id = data[3]
    comp_id = data[4]
    msg_id = data[5]
    
    # Calculate expected packet size
    expected_size = 6 + length + 2  # header + payload + checksum
    if len(data) < expected_size:
        return None
    
    payload = data[6:6+length]
    checksum = struct.unpack('<H', data[6+length:6+length+2])[0]
    
    return {
        'magic': data[0],
        'length': length,
        'seq': seq,
        'sys_id': sys_id,
        'comp_id': comp_id,
        'msg_id': msg_id,
        'payload': payload,
        'checksum': checksum,
        'raw_data': data[:expected_size]
    }

def calculate_mavlink_checksum(length, seq, sys_id, comp_id, msg_id, payload, crc_extra=0):
    """Calculate MAVLink checksum"""
    # Create the data to checksum (everything except magic byte and checksum)
    data = struct.pack('BBBBB', length, seq, sys_id, comp_id, msg_id) + payload
    
    crc = crc16_accumulate(data)
    if crc_extra:
        crc = crc16_accumulate([crc_extra], crc)
    
    return crc

def analyze_pcap(pcap_file):
    """Analyze PCAP file for REQUEST_DATA_STREAM messages"""
    print(f"Analyzing PCAP file: {pcap_file}")
    print("=" * 60)
    
    try:
        packets = rdpcap(pcap_file)
    except Exception as e:
        print(f"Error reading PCAP file: {e}")
        return
    
    print(f"Total packets in PCAP: {len(packets)}")
    
    all_mavlink_msgs = []
    request_data_stream_msgs = []
    
    for i, packet in enumerate(packets):
        # Look for UDP packets
        if packet.haslayer(UDP):
            udp_layer = packet[UDP]
            
            # Check all UDP traffic, not just common MAVLink ports
            if packet.haslayer(Raw):
                raw_data = bytes(packet[Raw])
                
                # Try to find MAVLink packets in the UDP payload
                for offset in range(len(raw_data)):
                    if offset + 8 > len(raw_data):
                        break
                        
                    mavlink_data = analyze_mavlink_packet(raw_data[offset:])
                    if mavlink_data:
                        msg_info = {
                            'packet_num': i,
                            'mavlink': mavlink_data,
                            'udp_src': udp_layer.sport,
                            'udp_dst': udp_layer.dport
                        }
                        all_mavlink_msgs.append(msg_info)
                        
                        if mavlink_data['msg_id'] == 66:  # REQUEST_DATA_STREAM
                            request_data_stream_msgs.append(msg_info)
    
    print(f"Found {len(all_mavlink_msgs)} total MAVLink messages")
    print(f"Found {len(request_data_stream_msgs)} REQUEST_DATA_STREAM messages")
    
    # Show summary of all message types found
    if all_mavlink_msgs:
        msg_types = {}
        for msg in all_mavlink_msgs:
            msg_id = msg['mavlink']['msg_id']
            msg_types[msg_id] = msg_types.get(msg_id, 0) + 1
        
        print(f"\nMessage types found:")
        for msg_id, count in sorted(msg_types.items()):
            print(f"  Message ID {msg_id}: {count} messages")
    
    print()
    
    # CRC_EXTRA for REQUEST_DATA_STREAM (message ID 66)
    REQUEST_DATA_STREAM_CRC_EXTRA = 148
    
    for i, msg in enumerate(request_data_stream_msgs):
        mavlink = msg['mavlink']
        print(f"MESSAGE {i+1}:")
        print(f"  Packet #: {msg['packet_num']}")
        print(f"  UDP: {msg['udp_src']} -> {msg['udp_dst']}")
        print(f"  Raw bytes: {' '.join(f'{b:02x}' for b in mavlink['raw_data'])}")
        print(f"  Magic: 0x{mavlink['magic']:02x}")
        print(f"  Length: {mavlink['length']}")
        print(f"  Sequence: {mavlink['seq']}")
        print(f"  System ID: {mavlink['sys_id']}")
        print(f"  Component ID: {mavlink['comp_id']}")
        print(f"  Message ID: {mavlink['msg_id']} (REQUEST_DATA_STREAM)")
        print(f"  Payload: {' '.join(f'{b:02x}' for b in mavlink['payload'])}")
        print(f"  Checksum: 0x{mavlink['checksum']:04x}")
        
        # Parse REQUEST_DATA_STREAM payload
        if len(mavlink['payload']) >= 6:
            target_system = mavlink['payload'][0]
            target_component = mavlink['payload'][1]
            req_stream_id = mavlink['payload'][2]
            req_message_rate = struct.unpack('<H', mavlink['payload'][3:5])[0]
            start_stop = mavlink['payload'][5]
            
            print(f"  Parsed payload:")
            print(f"    target_system: {target_system}")
            print(f"    target_component: {target_component}")
            print(f"    req_stream_id: {req_stream_id}")
            print(f"    req_message_rate: {req_message_rate}")
            print(f"    start_stop: {start_stop}")
        
        # Calculate expected checksum
        expected_checksum = calculate_mavlink_checksum(
            mavlink['length'], mavlink['seq'], mavlink['sys_id'], 
            mavlink['comp_id'], mavlink['msg_id'], mavlink['payload'],
            REQUEST_DATA_STREAM_CRC_EXTRA
        )
        print(f"  Expected checksum: 0x{expected_checksum:04x}")
        
        # Check if this matches the expected 0x003c
        if mavlink['checksum'] == 0x003c:
            print(f"  *** THIS MESSAGE HAS CHECKSUM 0x003c! ***")
        
        print()

if __name__ == "__main__":
    pcap_files = [
        "/Users/pavliha/Code/aircast/aircast-web/qgroundcontrol-bootup.pcapng",
        "/Users/pavliha/Code/aircast/aircast-web/aircast-web.pcapng",
        "/Users/pavliha/Code/aircast/mavlink.pcapng"
    ]
    
    for pcap_file in pcap_files:
        print(f"\n{'='*80}")
        print(f"ANALYZING: {pcap_file}")
        print(f"{'='*80}")
        analyze_pcap(pcap_file)
        print()