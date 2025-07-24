#!/usr/bin/env python3

import sys
import struct

def analyze_qgc_pcap():
    """Analyze QGroundControl PCAP more accurately"""
    
    pcap_files = [
        '/Users/pavliha/Code/aircast/aircast-web/qgroundcontrol-bootup.pcapng'
    ]
    
    for pcap_file in pcap_files:
        print(f"\n🔍 Analyzing {pcap_file} for REQUEST_DATA_STREAM")
        try:
            analyze_pcap_accurate(pcap_file)
        except Exception as e:
            print(f"❌ Error: {e}")

def analyze_pcap_accurate(filename):
    """More accurate PCAP analysis"""
    
    try:
        from scapy.all import rdpcap, Raw
        packets = rdpcap(filename)
        
        request_count = 0
        
        for i, packet in enumerate(packets):
            if Raw in packet:
                data = bytes(packet[Raw])
                
                # Look for MAVLink v1 frames more carefully
                j = 0
                while j < len(data) - 8:
                    if data[j] == 0xFE:  # MAVLink v1 magic
                        try:
                            payload_len = data[j + 1]
                            
                            # Valid MAVLink frame checks
                            if payload_len > 255 or payload_len == 0:
                                j += 1
                                continue
                                
                            if j + 8 + payload_len > len(data):
                                j += 1
                                continue
                            
                            seq = data[j + 2]
                            sys_id = data[j + 3]
                            comp_id = data[j + 4]
                            msg_id = data[j + 5]
                            
                            if msg_id == 66 and payload_len == 6:  # REQUEST_DATA_STREAM with correct payload length
                                request_count += 1
                                payload = data[j + 6:j + 6 + payload_len]
                                
                                # Extract parameters
                                target_system = payload[0]
                                target_component = payload[1]
                                req_stream_id = payload[2]
                                req_message_rate = struct.unpack('>H', payload[3:5])[0]  # Big-endian
                                start_stop = payload[5]
                                
                                print(f"\n✅ REQUEST_DATA_STREAM #{request_count} (Valid):")
                                print(f"   📦 Packet: {i}")
                                print(f"   🆔 System ID: {sys_id}, Component ID: {comp_id}")
                                print(f"   📋 Parameters:")
                                print(f"      target_system: {target_system}")
                                print(f"      target_component: {target_component}")
                                print(f"      req_stream_id: {req_stream_id}")
                                print(f"      req_message_rate: {req_message_rate} Hz")
                                print(f"      start_stop: {start_stop} ({'START' if start_stop else 'STOP'})")
                                
                                # Full frame analysis
                                full_frame = data[j:j + 8 + payload_len]
                                frame_hex = ' '.join(f'0x{b:02x}' for b in full_frame)
                                print(f"   🔗 Frame: {frame_hex}")
                                
                                # Calculate and verify checksum
                                checksum_data = full_frame[1:-2]  # Exclude magic and checksum
                                expected_checksum = struct.unpack('<H', full_frame[-2:])[0]
                                print(f"   🔐 Checksum: 0x{expected_checksum:04x}")
                                
                                j += 8 + payload_len  # Skip past this frame
                                
                            else:
                                j += 1
                                
                        except (struct.error, IndexError):
                            j += 1
                    else:
                        j += 1
        
        if request_count == 0:
            print("❌ No valid REQUEST_DATA_STREAM messages found")
            
            # Let's also look for any message ID 66 regardless of payload length
            print("\n🔍 Searching for any message ID 66...")
            any_66_count = 0
            
            for i, packet in enumerate(packets):
                if Raw in packet:
                    data = bytes(packet[Raw])
                    
                    for j in range(len(data) - 8):
                        if data[j] == 0xFE:
                            try:
                                payload_len = data[j + 1]
                                if j + 8 + payload_len <= len(data):
                                    msg_id = data[j + 5]
                                    if msg_id == 66:
                                        any_66_count += 1
                                        print(f"   Found msg ID 66 with payload length {payload_len} in packet {i}")
                                        if payload_len <= 20:  # Show small payloads
                                            frame = data[j:j + min(8 + payload_len, len(data) - j)]
                                            frame_hex = ' '.join(f'0x{b:02x}' for b in frame)
                                            print(f"   Frame: {frame_hex}")
                            except:
                                pass
            
            print(f"Found {any_66_count} total message ID 66 frames")
        else:
            print(f"\n🎉 Found {request_count} valid REQUEST_DATA_STREAM messages!")
            
    except ImportError:
        print("❌ Scapy not available")

if __name__ == "__main__":
    analyze_qgc_pcap()