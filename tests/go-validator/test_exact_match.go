package main

import (
	"fmt"
)

func main() {
	// Test the exact MCRF4XX CRC calculation on the same data

	// The message data that should be used for checksum (from gomavlib frame):
	// fe 06 00 ff be 42 01 00 01 01 00 01 34 82
	// CRC should be calculated on: 06 00 ff be 42 01 00 01 01 00 01
	messageData := []byte{0x06, 0x00, 0xff, 0xbe, 0x42, 0x01, 0x00, 0x01, 0x01, 0x00, 0x01}

	// Get the CRC_EXTRA for REQUEST_DATA_STREAM (message ID 66)
	crcExtra := byte(148) // This should be the CRC_EXTRA for message ID 66

	// Calculate CRC using our MCRF4XX implementation
	calculatedCRC := calculateMCRF4XX(messageData, crcExtra)
	expectedCRC := uint16(0x8234)

	fmt.Printf("Message data: %v\n", messageData)
	fmt.Printf("CRC_EXTRA: %d\n", crcExtra)
	fmt.Printf("Calculated CRC: 0x%04x\n", calculatedCRC)
	fmt.Printf("Expected CRC (gomavlib): 0x%04x\n", expectedCRC)
	fmt.Printf("Match: %v\n", calculatedCRC == expectedCRC)

	if calculatedCRC != expectedCRC {
		fmt.Println("\nLet's try different CRC_EXTRA values...")
		for i := 0; i <= 255; i++ {
			testCRC := calculateMCRF4XX(messageData, byte(i))
			if testCRC == expectedCRC {
				fmt.Printf("Found matching CRC_EXTRA: %d (0x%02x)\n", i, i)
				break
			}
		}
	}
}

// MCRF4XX CRC calculation (same as our TypeScript implementation)
func calculateMCRF4XX(data []byte, crcExtra byte) uint16 {
	crc := uint16(0xffff)

	// Process all message bytes using MCRF4XX algorithm
	for _, b := range data {
		tmp := uint16(b) ^ (crc & 0xff)
		tmp ^= (tmp << 4)
		crc = ((crc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4)) & 0xffff
	}

	// Add CRC_EXTRA byte using the same algorithm
	tmp := uint16(crcExtra) ^ (crc & 0xff)
	tmp ^= (tmp << 4)
	crc = ((crc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4)) & 0xffff

	return crc
}
