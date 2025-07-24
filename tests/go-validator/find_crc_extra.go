package main

import (
	"fmt"
)

func main() {
	// The exact message data from gomavlib frame (excluding magic byte and checksum)
	messageData := []byte{0x06, 0x00, 0xff, 0xbe, 0x42, 0x01, 0x00, 0x01, 0x01, 0x00, 0x01}
	expectedChecksum := uint16(0x8234)

	fmt.Printf("Testing all CRC_EXTRA values to find the one that produces 0x%04x...\n", expectedChecksum)

	found := false
	for crcExtra := 0; crcExtra <= 255; crcExtra++ {
		calculatedCRC := calculateMCRF4XX(messageData, byte(crcExtra))
		if calculatedCRC == expectedChecksum {
			fmt.Printf("✅ Found matching CRC_EXTRA: %d (0x%02x) -> checksum 0x%04x\n",
				crcExtra, crcExtra, calculatedCRC)
			found = true
		}
	}

	if !found {
		fmt.Println("❌ No CRC_EXTRA value produces the expected checksum")
		fmt.Println("This suggests our MCRF4XX implementation might be incorrect")

		// Let's also test the official MAVLink X.25 CRC algorithm
		fmt.Println("\nTesting with X.25 CRC algorithm...")
		for crcExtra := 0; crcExtra <= 255; crcExtra++ {
			calculatedCRC := calculateX25CRC(messageData, byte(crcExtra))
			if calculatedCRC == expectedChecksum {
				fmt.Printf("✅ Found with X.25 CRC - CRC_EXTRA: %d (0x%02x) -> checksum 0x%04x\n",
					crcExtra, crcExtra, calculatedCRC)
				found = true
			}
		}
	}
}

// Our current MCRF4XX implementation
func calculateMCRF4XX(data []byte, crcExtra byte) uint16 {
	crc := uint16(0xffff)

	for _, b := range data {
		tmp := uint16(b) ^ (crc & 0xff)
		tmp ^= (tmp << 4)
		crc = ((crc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4)) & 0xffff
	}

	tmp := uint16(crcExtra) ^ (crc & 0xff)
	tmp ^= (tmp << 4)
	crc = ((crc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4)) & 0xffff

	return crc
}

// Standard X.25 CRC implementation from MAVLink specification
func calculateX25CRC(data []byte, crcExtra byte) uint16 {
	crc := uint16(0xffff)

	for _, b := range data {
		crc ^= uint16(b) << 8
		for i := 0; i < 8; i++ {
			if (crc & 0x8000) != 0 {
				crc = (crc << 1) ^ 0x1021
			} else {
				crc = crc << 1
			}
		}
	}

	// Add CRC_EXTRA
	crc ^= uint16(crcExtra) << 8
	for i := 0; i < 8; i++ {
		if (crc & 0x8000) != 0 {
			crc = (crc << 1) ^ 0x1021
		} else {
			crc = crc << 1
		}
	}

	return crc & 0xffff
}
