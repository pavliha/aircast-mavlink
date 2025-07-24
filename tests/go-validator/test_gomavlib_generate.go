package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"log"

	"github.com/bluenviron/gomavlib/v3/pkg/dialect"
	"github.com/bluenviron/gomavlib/v3/pkg/dialects/common"
	"github.com/bluenviron/gomavlib/v3/pkg/frame"
)

type ComparisonResult struct {
	MessageName      string `json:"message_name"`
	MessageID        uint32 `json:"message_id"`
	AircastChecksum  string `json:"aircast_checksum"`
	GomavlibChecksum string `json:"gomavlib_checksum"`
	AircastBytes     []int  `json:"aircast_bytes"`
	GomavlibBytes    []int  `json:"gomavlib_bytes"`
	Match            bool   `json:"match"`
}

func main() {
	// Create gomavlib version of REQUEST_DATA_STREAM
	message := &common.MessageRequestDataStream{
		TargetSystem:    1,
		TargetComponent: 1,
		ReqStreamId:     0,
		ReqMessageRate:  1,
		StartStop:       1,
	}

	// Create a dialect read/writer
	dialectRW, err := dialect.NewReadWriter(common.Dialect)
	if err != nil {
		log.Fatalf("Failed to create dialect reader: %v", err)
	}

	// Create a frame writer
	var buf bytes.Buffer
	frameWriter, err := frame.NewWriter(frame.WriterConf{
		Writer:         &buf,
		DialectRW:      dialectRW,
		OutVersion:     frame.V1, // Use MAVLink v1 like aircast-mavlink
		OutSystemID:    255,
		OutComponentID: 190,
	})
	if err != nil {
		log.Fatalf("Failed to create frame writer: %v", err)
	}

	// Write the frame
	err = frameWriter.WriteMessage(message)
	if err != nil {
		log.Fatalf("Failed to write message: %v", err)
	}

	gomavlibBytes := buf.Bytes()

	// Extract checksum from gomavlib generated frame
	var gomavlibChecksum uint16
	if len(gomavlibBytes) >= 2 {
		gomavlibChecksum = uint16(gomavlibBytes[len(gomavlibBytes)-2]) |
			uint16(gomavlibBytes[len(gomavlibBytes)-1])<<8
	}

	// The expected aircast bytes (from the test output above)
	aircastBytes := []byte{0xfe, 0x06, 0x01, 0xff, 0xbe, 0x42, 0x01, 0x01, 0x00, 0x01, 0x00, 0x01, 0xda, 0x79}
	aircastChecksum := uint16(0x79da)

	result := ComparisonResult{
		MessageName:      "REQUEST_DATA_STREAM",
		MessageID:        66,
		AircastChecksum:  fmt.Sprintf("0x%04x", aircastChecksum),
		GomavlibChecksum: fmt.Sprintf("0x%04x", gomavlibChecksum),
		AircastBytes:     make([]int, len(aircastBytes)),
		GomavlibBytes:    make([]int, len(gomavlibBytes)),
		Match:            aircastChecksum == gomavlibChecksum,
	}

	// Convert bytes to int arrays for JSON
	for i, b := range aircastBytes {
		result.AircastBytes[i] = int(b)
	}
	for i, b := range gomavlibBytes {
		result.GomavlibBytes[i] = int(b)
	}

	// Output comparison result
	output, err := json.MarshalIndent(result, "", "  ")
	if err != nil {
		log.Fatalf("Failed to marshal result: %v", err)
	}

	fmt.Println(string(output))

	// Also print detailed comparison
	fmt.Printf("\nDetailed comparison:\n")
	fmt.Printf("Aircast bytes:  %v\n", aircastBytes)
	fmt.Printf("Gomavlib bytes: %v\n", gomavlibBytes)
	fmt.Printf("Aircast checksum:  0x%04x\n", aircastChecksum)
	fmt.Printf("Gomavlib checksum: 0x%04x\n", gomavlibChecksum)
	fmt.Printf("Match: %v\n", aircastChecksum == gomavlibChecksum)
}
