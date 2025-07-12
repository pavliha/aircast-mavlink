# MAVLink Parser Examples

This directory contains examples demonstrating how to use the MAVLink parser in different scenarios.

## Examples Overview

### 1. Basic Parser (`basic-parser.js`)
A simple Node.js example showing fundamental parser usage:
- Parsing single messages
- Handling streaming data
- Processing multiple messages
- Error handling with invalid data

**Run:**
```bash
npm run build
node examples/basic-parser.js
```

### 2. Web Worker Integration (`web-worker-example.js`)
Demonstrates how to use the MAVLink parser in a web worker for non-blocking parsing:
- Web worker setup for MAVLink parsing
- Message passing between main thread and worker
- Integration with WebRTC data channels
- Integration with WebSockets

**Usage:**
This example shows the code structure - you would create separate files for the worker and main thread in a real application.

### 3. WebRTC Integration Demo (`webrtc-integration.html`)
A complete HTML demo showing MAVLink parsing in a web browser:
- Interactive WebRTC connection simulation
- Real-time message display with syntax highlighting
- Statistics dashboard
- Demo controls for testing different scenarios

**Run:**
```bash
# Serve the HTML file with any web server
python3 -m http.server 8000
# Then open http://localhost:8000/examples/webrtc-integration.html
```

### 4. Node.js Streaming (`nodejs-stream.js`)
Advanced Node.js example for production use:
- TCP client for MAVLink connections
- UDP server for ground station communication
- File replay functionality
- Streaming data processing with statistics

**Run:**
```bash
npm run build

# Run tests
node examples/nodejs-stream.js test

# Connect to TCP MAVLink source
node examples/nodejs-stream.js tcp localhost 5760

# Start UDP server
node examples/nodejs-stream.js udp 14550

# Replay MAVLink file
node examples/nodejs-stream.js file recording.mavlink
```

## Common Use Cases

### Real-time Drone Telemetry
Use the parser with WebRTC data channels for low-latency drone telemetry in web applications:

```javascript
const parser = new MAVLinkParser({ validateCRC: true });

dataChannel.onmessage = (event) => {
  const messages = parser.parseBytes(new Uint8Array(event.data));
  messages.forEach(msg => {
    switch (msg.message_name) {
      case 'HEARTBEAT':
        updateConnectionStatus(msg);
        break;
      case 'GPS_RAW_INT':
        updateMapPosition(msg);
        break;
      case 'ATTITUDE':
        updateAttitudeIndicator(msg);
        break;
    }
  });
};
```

### Ground Control Station (GCS)
Process MAVLink data from multiple sources:

```javascript
const mavlink = new MAVLinkStreamParser();

// Handle all message types
mavlink.on('message', (msg) => {
  console.log(`${msg.message_name} from ${msg.system_id}:${msg.component_id}`);
});

// Handle specific messages
mavlink.on('heartbeat', updateVehicleStatus);
mavlink.on('mission_current', updateMissionProgress);
mavlink.on('statustext', displayStatusMessage);
```

### Data Logging and Analysis
Parse recorded MAVLink data for analysis:

```javascript
const fs = require('fs');
const { MAVLinkParser } = require('./dist/parser');

const parser = new MAVLinkParser();
const logData = fs.readFileSync('flight_log.mavlink');
const messages = parser.parseBytes(logData);

// Analyze flight data
const gpsMessages = messages.filter(m => m.message_name === 'GPS_RAW_INT');
const altitudes = gpsMessages.map(m => m.payload.alt / 1000); // Convert to meters
console.log(`Max altitude: ${Math.max(...altitudes)}m`);
```

## Message Types

The parser handles all standard MAVLink messages. Common ones include:

| Message | ID | Description |
|---------|----| ------------|
| HEARTBEAT | 0 | System status and connection keep-alive |
| SYS_STATUS | 1 | System status including battery, sensors |
| GPS_RAW_INT | 24 | Raw GPS data with position and status |
| ATTITUDE | 30 | Vehicle attitude (roll, pitch, yaw) |
| GLOBAL_POSITION_INT | 33 | Global position with altitude |
| RC_CHANNELS_RAW | 35 | Raw RC channel values |
| VFR_HUD | 74 | HUD display data (speed, altitude, etc.) |
| COMMAND_LONG | 76 | Command with parameters |
| MISSION_ITEM | 39 | Mission waypoint |
| PARAM_VALUE | 22 | Parameter value |

## Protocol Support

The parser supports both MAVLink v1 and v2 protocols:

- **MAVLink v1**: 6-byte header, simpler format
- **MAVLink v2**: 10-byte header, extended message IDs, packet signing support

## Performance Considerations

- Use web workers for parsing in browser applications to avoid blocking the main thread
- Enable CRC validation in production for data integrity
- Monitor buffer usage in streaming applications
- Reset parser state when connections are re-established

## Error Handling

The parser provides robust error handling:

```javascript
try {
  const messages = parser.parseBytes(data);
} catch (error) {
  console.error('Parse error:', error.message);
  // Reset parser if needed
  parser.reset();
}
```

## Testing

All examples include test scenarios for:
- Valid message parsing
- Incomplete data handling
- Multiple message processing
- Invalid data recovery
- Error conditions

Run the test suite:
```bash
npm test
```