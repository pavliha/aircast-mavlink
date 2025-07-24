package main

import (
	"fmt"

	"github.com/bluenviron/gomavlib/v3/pkg/dialects/common"
	"github.com/bluenviron/gomavlib/v3/pkg/frame"
)

func main() {
	// Let's test gomavlib's actual CRC calculation

	// We'll test gomavlib's CRC generation directly

	// Create a V1 frame and test its checksum validation
	v1Frame := &frame.V1Frame{
		SequenceNumber: 0,
		SystemID:       255,
		ComponentID:    190,
		Message: &common.MessageRequestDataStream{
			TargetSystem:    1,
			TargetComponent: 0,
			ReqStreamId:     1,
			ReqMessageRate:  1,
			StartStop:       1,
		},
		Checksum: 0x8234,
	}

	// Get the CRC extra value that gomavlib uses
	messageID := v1Frame.Message.GetID()
	fmt.Printf("Message ID: %d\n", messageID)

	// Test gomavlib's checksum generation
	crcExtra := byte(148) // Standard CRC_EXTRA for message ID 66
	calculatedChecksum := v1Frame.GenerateChecksum(crcExtra)

	fmt.Printf("Frame checksum: 0x%04x\n", v1Frame.Checksum)
	fmt.Printf("Calculated with CRC_EXTRA 148: 0x%04x\n", calculatedChecksum)
	fmt.Printf("Match: %v\n", calculatedChecksum == v1Frame.Checksum)

	// Try different CRC_EXTRA values
	fmt.Println("\nTesting different CRC_EXTRA values:")
	for i := 0; i <= 255; i++ {
		test := v1Frame.GenerateChecksum(byte(i))
		if test == v1Frame.Checksum {
			fmt.Printf("Found matching CRC_EXTRA: %d (0x%02x) -> checksum 0x%04x\n", i, i, test)
		}
	}
}
