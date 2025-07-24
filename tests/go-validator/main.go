package main

import (
	"fmt"
	"log"

	"github.com/bluenviron/gomavlib/v3"
	"github.com/bluenviron/gomavlib/v3/pkg/dialects/common"
	"github.com/bluenviron/gomavlib/v3/pkg/frame"
)

func main() {
	fmt.Println("=== GoMAVLib CRC Test ===")

	// Test data from the issue (without the magic byte)
	testData := []byte{0x06, 0x00, 0xff, 0xbe, 0x42, 0x01, 0x00, 0x01, 0x01, 0x00, 0x01}
	fmt.Printf("Test data: %x\n", testData)

	// Create a frame reader to parse frames
	reader, err := frame.NewReader(frame.ReaderConf{
		Dialect: common.Dialect,
	})
	if err != nil {
		log.Fatal(err)
	}

	// Try parsing with magic byte for v1
	v1Data := append([]byte{frame.V1MagicByte}, testData...)
	fmt.Printf("V1 data with magic: %x\n", v1Data)

	fr, err := reader.Read(v1Data)
	if err != nil {
		fmt.Printf("Failed to parse as MAVLink frame: %v\n", err)
	} else {
		fmt.Printf("Parsed frame:\n")
		fmt.Printf("  System ID: %d\n", fr.GetSystemID())
		fmt.Printf("  Component ID: %d\n", fr.GetComponentID())
		fmt.Printf("  Message ID: %d\n", fr.GetMessage().GetID())
		fmt.Printf("  Checksum: 0x%04x\n", fr.GetChecksum())
	}

	fmt.Println()

	// Test creating a REQUEST_DATA_STREAM message from scratch
	fmt.Println("=== Creating REQUEST_DATA_STREAM from scratch ===")

	msg := &common.MessageRequestDataStream{
		ReqMessageRate:  1,
		TargetSystem:    1,
		TargetComponent: 1,
		ReqStreamId:     0,
		StartStop:       1,
	}

	// Create v1 frame
	frV1 := &frame.V1Frame{
		SequenceNumber: 0,
		SystemID:       255,
		ComponentID:    190,
		Message:        msg,
	}

	// Calculate checksum manually
	crcExtra := common.Dialect.GetMessage(66).CRCExtra()
	checksum := frV1.GenerateChecksum(crcExtra)
	frV1.Checksum = checksum

	fmt.Printf("Created REQUEST_DATA_STREAM v1 checksum: 0x%04x\n", frV1.GetChecksum())
	fmt.Printf("CRC Extra for message 66: %d\n", crcExtra)

	// Create writer to serialize
	writer, err := frame.NewWriter(frame.WriterConf{
		OutVersion: frame.V1,
	})
	if err != nil {
		log.Fatal(err)
	}

	buf, err := writer.WriteFrame(frV1)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("Full v1 frame: %x\n", buf)
	fmt.Printf("Frame data (without START): %x\n", buf[1:])

	// Create v2 frame
	frV2 := &frame.V2Frame{
		IncompatibilityFlag: 0,
		CompatibilityFlag:   0,
		SequenceNumber:      0,
		SystemID:            255,
		ComponentID:         190,
		Message:             msg,
	}

	checksum2 := frV2.GenerateChecksum(crcExtra)
	frV2.Checksum = checksum2

	writer2, err := frame.NewWriter(frame.WriterConf{
		OutVersion: frame.V2,
	})
	if err != nil {
		log.Fatal(err)
	}

	buf2, err := writer2.WriteFrame(frV2)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("Full v2 frame: %x\n", buf2)
	fmt.Printf("Frame data (without START): %x\n", buf2[1:])
	fmt.Printf("v2 checksum: 0x%04x\n", frV2.GetChecksum())

	// Test manual CRC calculation
	fmt.Println("\n=== Manual CRC Test ===")

	// CRC data should be everything except START byte and checksum itself
	crcData := buf[1 : len(buf)-2] // Exclude START and 2-byte checksum
	fmt.Printf("CRC input data: %x\n", crcData)

	// Manual checksum using the frame's method
	manualChecksum := frV1.GenerateChecksum(crcExtra)
	fmt.Printf("Manual checksum calculation: 0x%04x\n", manualChecksum)

	fmt.Println("GoMAVLib test completed successfully")
}
