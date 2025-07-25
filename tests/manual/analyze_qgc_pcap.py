#!/usr/bin/env python3

import sys
import struct

def analyze_qgc_pcap():
    """Analyze QGroundControl PCAP to find REQUEST_DATA_STREAM messages"""
    
    # Try both PCAP files
    pcap_files = [
        '/Users/pavliha/Code/aircast/aircast-web/qgroundcontrol-bootup.pcapng',
        '/Users/pavliha/Code/aircast/mavlink.pcapng'
    ]
    
    for pcap_file in pcap_files:
        print(f"\n🔍 Analyzing {pcap_file}")
        try:
            analyze_pcap_file(pcap_file)
        except Exception as e:
            print(f"❌ Error reading {pcap_file}: {e}")

def analyze_pcap_file(filename):
    """Analyze a single PCAP file for MAVLink messages"""
    
    try:
        # Try to use scapy if available
        from scapy.all import rdpcap, Raw
        packets = rdpcap(filename)
        
        request_data_stream_count = 0
        
        for i, packet in enumerate(packets):
            if Raw in packet:
                data = bytes(packet[Raw])
                
                # Look for MAVLink magic bytes
                for j in range(len(data) - 8):
                    if data[j] == 0xFE:  # MAVLink v1 magic
                        if j + 8 <= len(data):
                            try:
                                payload_len = data[j + 1]
                                if j + 8 + payload_len <= len(data):
                                    seq = data[j + 2]
                                    sys_id = data[j + 3]
                                    comp_id = data[j + 4]
                                    msg_id = data[j + 5]
                                    
                                    if msg_id == 66:  # REQUEST_DATA_STREAM
                                        request_data_stream_count += 1
                                        payload = data[j + 6:j + 6 + payload_len]
                                        
                                        print(f"\n📤 REQUEST_DATA_STREAM #{request_data_stream_count} found:")
                                        print(f"   Packet: {i}")
                                        print(f"   System ID: {sys_id}")
                                        print(f"   Component ID: {comp_id}")
                                        print(f"   Sequence: {seq}")
                                        print(f"   Payload length: {payload_len}")
                                        
                                        if payload_len == 6:  # Expected payload length
                                            target_system = payload[0]
                                            target_component = payload[1]
                                            req_stream_id = payload[2]
                                            req_message_rate = struct.unpack('>H', payload[3:5])[0]  # Big-endian uint16
                                            start_stop = payload[5]
                                            
                                            print(f"   📋 Parameters:")
                                            print(f"      target_system: {target_system}")
                                            print(f"      target_component: {target_component}")
                                            print(f"      req_stream_id: {req_stream_id}")
                                            print(f"      req_message_rate: {req_message_rate}")
                                            print(f"      start_stop: {start_stop}")
                                            
                                            # Show raw payload
                                            payload_hex = ' '.join(f'0x{b:02x}' for b in payload)
                                            print(f"   📦 Raw payload: {payload_hex}")
                                            
                                            # Show full frame
                                            frame = data[j:j + 8 + payload_len]
                                            frame_hex = ' '.join(f'0x{b:02x}' for b in frame)
                                            print(f"   🔗 Full frame: {frame_hex}")
                                            
                            except Exception as e:
                                pass
        
        if request_data_stream_count == 0:
            print("❌ No REQUEST_DATA_STREAM messages found")
        else:
            print(f"\n✅ Found {request_data_stream_count} REQUEST_DATA_STREAM messages")
            
    except ImportError:
        print("❌ Scapy not available, trying manual parsing...")
        analyze_pcap_manual(filename)

def analyze_pcap_manual(filename):
    """Manual PCAP parsing without scapy"""
    try:
        with open(filename, 'rb') as f:
            # Skip PCAP header (24 bytes for standard PCAP)
            header = f.read(24)
            if len(header) < 24:
                print("❌ Invalid PCAP file")
                return
                
            print("📄 Manual PCAP parsing - looking for MAVLink frames...")
            
            packet_count = 0
            request_count = 0
            
            while True:
                # Read packet header (16 bytes)
                pkt_header = f.read(16)
                if len(pkt_header) < 16:
                    break
                    
                # Extract packet length
                incl_len = struct.unpack('<I', pkt_header[8:12])[0]
                
                # Read packet data
                packet_data = f.read(incl_len)
                if len(packet_data) < incl_len:
                    break
                    
                packet_count += 1
                
                # Look for MAVLink frames in packet data
                for i in range(len(packet_data) - 8):
                    if packet_data[i] == 0xFE:  # MAVLink v1
                        if i + 8 <= len(packet_data):
                            payload_len = packet_data[i + 1]
                            if i + 8 + payload_len <= len(packet_data):
                                msg_id = packet_data[i + 5]
                                
                                if msg_id == 66:  # REQUEST_DATA_STREAM
                                    request_count += 1
                                    frame = packet_data[i:i + 8 + payload_len]
                                    
                                    print(f"\n📤 REQUEST_DATA_STREAM #{request_count}:")
                                    print(f"   Packet: {packet_count}")
                                    frame_hex = ' '.join(f'0x{b:02x}' for b in frame)
                                    print(f"   Frame: {frame_hex}")
                                    
                                    if payload_len == 6:
                                        payload = packet_data[i + 6:i + 6 + payload_len]
                                        target_system = payload[0]
                                        target_component = payload[1]
                                        req_stream_id = payload[2]
                                        req_message_rate = struct.unpack('>H', payload[3:5])[0]
                                        start_stop = payload[5]
                                        
                                        print(f"   Parameters: sys={target_system}, comp={target_component}, stream={req_stream_id}, rate={req_message_rate}, start={start_stop}")
            
            print(f"\n📊 Processed {packet_count} packets, found {request_count} REQUEST_DATA_STREAM messages")
            
    except Exception as e:
        print(f"❌ Manual parsing failed: {e}")

if __name__ == "__main__":
    analyze_qgc_pcap()