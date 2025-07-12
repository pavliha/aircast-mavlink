// Web Worker example for MAVLink parsing
// Demonstrates how to use the parser in a web worker context

// This would be the web worker file (mavlink-worker.js)
const workerCode = `
// Import the MAVLink parser (in a real scenario, you'd bundle this)
importScripts('../dist/parser/index.js');

let parser;

// Initialize parser when worker starts
self.onmessage = function(e) {
  const { type, data, options } = e.data;
  
  switch (type) {
    case 'init':
      // Initialize parser with options
      parser = new MAVLinkParser(options || {
        validateCRC: true,
        allowProtocolV1: true,
        allowProtocolV2: true,
        maxBufferSize: 4096
      });
      
      self.postMessage({
        type: 'ready',
        message: 'MAVLink parser initialized'
      });
      break;
      
    case 'parse':
      if (!parser) {
        self.postMessage({
          type: 'error',
          error: 'Parser not initialized'
        });
        return;
      }
      
      try {
        // Parse raw bytes
        const messages = parser.parseBytes(new Uint8Array(data));
        
        // Send parsed messages back to main thread
        self.postMessage({
          type: 'messages',
          messages: messages,
          stats: parser.getStats()
        });
      } catch (error) {
        self.postMessage({
          type: 'error',
          error: error.message
        });
      }
      break;
      
    case 'reset':
      if (parser) {
        parser.reset();
        self.postMessage({
          type: 'reset_complete'
        });
      }
      break;
      
    default:
      self.postMessage({
        type: 'error',
        error: 'Unknown message type: ' + type
      });
  }
};
`;

// Main thread code - how to use the web worker
const mainThreadExample = `
// Create and initialize the web worker
const worker = new Worker('mavlink-worker.js');

// Set up message handling
worker.onmessage = function(e) {
  const { type, messages, error, stats } = e.data;
  
  switch (type) {
    case 'ready':
      console.log('🚀 MAVLink worker ready');
      break;
      
    case 'messages':
      // Process received MAVLink messages
      console.log(\`📦 Received \${messages.length} messages\`);
      
      messages.forEach(msg => {
        console.log(\`  \${msg.message_name} from system \${msg.system_id}:\`, msg.payload);
        
        // Handle specific message types
        switch (msg.message_name) {
          case 'HEARTBEAT':
            updateHeartbeat(msg);
            break;
          case 'GPS_RAW_INT':
            updateGPS(msg);
            break;
          case 'ATTITUDE':
            updateAttitude(msg);
            break;
          default:
            console.log('Unknown message type:', msg.message_name);
        }
      });
      
      // Log parser statistics
      console.log(\`📊 Buffer usage: \${stats.bufferUsed}/\${stats.bufferSize} bytes\`);
      break;
      
    case 'error':
      console.error('❌ Worker error:', error);
      break;
      
    case 'reset_complete':
      console.log('🔄 Parser reset complete');
      break;
  }
};

// Initialize the worker
worker.postMessage({
  type: 'init',
  options: {
    validateCRC: true,
    allowProtocolV1: true,
    allowProtocolV2: true,
    maxBufferSize: 8192
  }
});

// Example: WebRTC data channel integration
function setupWebRTCDataChannel(dataChannel) {
  dataChannel.binaryType = 'arraybuffer';
  
  dataChannel.onmessage = function(event) {
    // Forward raw bytes to worker for parsing
    worker.postMessage({
      type: 'parse',
      data: Array.from(new Uint8Array(event.data))
    });
  };
  
  dataChannel.onerror = function(error) {
    console.error('Data channel error:', error);
    // Reset parser on connection error
    worker.postMessage({ type: 'reset' });
  };
}

// Example: WebSocket integration
function setupWebSocket(url) {
  const ws = new WebSocket(url);
  ws.binaryType = 'arraybuffer';
  
  ws.onmessage = function(event) {
    // Forward raw bytes to worker for parsing
    worker.postMessage({
      type: 'parse',
      data: Array.from(new Uint8Array(event.data))
    });
  };
  
  ws.onclose = function() {
    console.log('WebSocket closed, resetting parser');
    worker.postMessage({ type: 'reset' });
  };
}

// Message handlers
function updateHeartbeat(msg) {
  console.log(\`💓 Heartbeat: type=\${msg.payload.type}, autopilot=\${msg.payload.autopilot}\`);
  // Update UI with vehicle status
}

function updateGPS(msg) {
  const lat = msg.payload.lat / 1e7; // Convert to degrees
  const lon = msg.payload.lon / 1e7;
  console.log(\`🛰️  GPS: \${lat}, \${lon} (fix: \${msg.payload.fix_type})\`);
  // Update map position
}

function updateAttitude(msg) {
  const roll = msg.payload.roll * 180 / Math.PI; // Convert to degrees
  const pitch = msg.payload.pitch * 180 / Math.PI;
  const yaw = msg.payload.yaw * 180 / Math.PI;
  console.log(\`✈️  Attitude: roll=\${roll.toFixed(1)}°, pitch=\${pitch.toFixed(1)}°, yaw=\${yaw.toFixed(1)}°\`);
  // Update attitude indicator
}

// Example usage
// setupWebRTCDataChannel(dataChannel);
// setupWebSocket('ws://localhost:8080/mavlink');
`;

console.log('=== Web Worker MAVLink Parser Example ===');
console.log('');
console.log('This example shows how to use the MAVLink parser in a web worker');
console.log('for non-blocking message processing in web applications.');
console.log('');
console.log('Worker code:');
console.log(workerCode);
console.log('');
console.log('Main thread code:');
console.log(mainThreadExample);