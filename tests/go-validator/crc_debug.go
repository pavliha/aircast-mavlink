package main

import (
	"bytes"
	"fmt"

	"github.com/bluenviron/gomavlib/v3/pkg/dialect"
	"github.com/bluenviron/gomavlib/v3/pkg/dialects/common"
	"github.com/bluenviron/gomavlib/v3/pkg/frame"
)

func main() {
	// Create the exact message with the exact parameters
	message := &common.MessageRequestDataStream{
		TargetSystem:    1,
		TargetComponent: 0,
		ReqStreamId:     1,
		ReqMessageRate:  1,
		StartStop:       1,
	}

	// Generate the frame using gomavlib
	dialectRW, err := dialect.NewReadWriter(common.Dialect)
	if err != nil {
		panic(err)
	}

	var buf bytes.Buffer
	frameWriter, err := frame.NewWriter(frame.WriterConf{
		Writer:         &buf,
		DialectRW:      dialectRW,
		OutVersion:     frame.V1,
		OutSystemID:    255,
		OutComponentID: 190,
	})
	if err != nil {
		panic(err)
	}

	err = frameWriter.WriteMessage(message)
	if err != nil {
		panic(err)
	}

	frameBytes := buf.Bytes()

	// Print the frame details
	fmt.Printf("Generated frame: %v\n", frameBytes)
	fmt.Printf("Frame hex: ")
	for _, b := range frameBytes {
		fmt.Printf("0x%02x ", b)
	}
	fmt.Println()

	// Extract checksum
	if len(frameBytes) >= 2 {
		checksumLow := frameBytes[len(frameBytes)-2]
		checksumHigh := frameBytes[len(frameBytes)-1]
		checksum := uint16(checksumLow) | uint16(checksumHigh)<<8
		fmt.Printf("Checksum: 0x%04x\n", checksum)
	}

	// Now let's examine what data is used for CRC calculation
	fmt.Println("\nMessage data used for CRC calculation:")
	messageData := frameBytes[1 : len(frameBytes)-2] // Exclude magic byte and checksum
	fmt.Printf("Data: ")
	for _, b := range messageData {
		fmt.Printf("0x%02x ", b)
	}
	fmt.Printf("\nData length: %d bytes\n", len(messageData))

	// Get the CRC_EXTRA value that gomavlib uses
	msgDef := dialectRW.GetMessage(66) // REQUEST_DATA_STREAM
	if msgDef != nil {
		fmt.Printf("Gomavlib CRC_EXTRA for msg 66: %d (0x%02x)\n", msgDef.CRCExtra(), msgDef.CRCExtra())
	}

	// Test our MCRF4XX implementation on this data
	ourCRC := calculateMCRF4XX(messageData, 148)
	fmt.Printf("Our MCRF4XX result (148): 0x%04x\n", ourCRC)

	// Test with gomavlib's CRC_EXTRA value
	if msgDef != nil {
		ourCRCWithGomavlib := calculateMCRF4XX(messageData, byte(msgDef.CRCExtra()))
		fmt.Printf("Our MCRF4XX result (gomavlib CRC_EXTRA): 0x%04x\n", ourCRCWithGomavlib)
	}

	// Compare with actual checksum from gomavlib
	actualChecksum := uint16(frameBytes[len(frameBytes)-2]) | uint16(frameBytes[len(frameBytes)-1])<<8
	fmt.Printf("Gomavlib checksum: 0x%04x\n", actualChecksum)
	fmt.Printf("Match: %v\n", ourCRC == actualChecksum)
}

// Our MCRF4XX implementation
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
