// Node.js streaming example for MAVLink parsing
// Shows how to parse MAVLink data from streams (TCP, UDP, Serial, etc.)

const { MAVLinkParser } = require('../dist/parser');
const net = require('net');
const dgram = require('dgram');
const { EventEmitter } = require('events');

class MAVLinkStreamParser extends EventEmitter {
  constructor(options = {}) {
    super();
    this.parser = new MAVLinkParser({
      validateCRC: true,
      allowProtocolV1: true,
      allowProtocolV2: true,
      maxBufferSize: 8192,
      ...options
    });
    
    this.stats = {
      messagesReceived: 0,
      bytesProcessed: 0,
      parseErrors: 0,
      startTime: Date.now()
    };
  }

  processData(data) {
    try {
      const messages = this.parser.parseBytes(data);
      this.stats.bytesProcessed += data.length;
      
      messages.forEach(msg => {
        this.stats.messagesReceived++;
        this.emit('message', msg);
        this.emit(msg.message_name.toLowerCase(), msg);
      });
      
      if (messages.length > 0) {
        this.emit('messages', messages);
      }
    } catch (error) {
      this.stats.parseErrors++;
      this.emit('error', error);
    }
  }

  getStats() {
    const uptime = Date.now() - this.stats.startTime;
    return {
      ...this.stats,
      uptime,
      messageRate: (this.stats.messagesReceived / (uptime / 1000)).toFixed(2),
      ...this.parser.getStats()
    };
  }

  reset() {
    this.parser.reset();
    this.stats = {
      messagesReceived: 0,
      bytesProcessed: 0,
      parseErrors: 0,
      startTime: Date.now()
    };
  }
}

// TCP Client Example
function createTCPClient(host = 'localhost', port = 5760) {
  console.log('=== TCP MAVLink Client Example ===');
  
  const mavlink = new MAVLinkStreamParser();
  const client = new net.Socket();

  // Set up MAVLink message handlers
  mavlink.on('heartbeat', (msg) => {
    console.log(`💓 Heartbeat from system ${msg.system_id}: type=${msg.payload.type}, autopilot=${msg.payload.autopilot}`);
  });

  mavlink.on('gps_raw_int', (msg) => {
    const lat = msg.payload.lat / 1e7;
    const lon = msg.payload.lon / 1e7;
    console.log(`🛰️  GPS: ${lat.toFixed(6)}, ${lon.toFixed(6)} (fix: ${msg.payload.fix_type})`);
  });

  mavlink.on('attitude', (msg) => {
    const roll = (msg.payload.roll * 180 / Math.PI).toFixed(1);
    const pitch = (msg.payload.pitch * 180 / Math.PI).toFixed(1);
    const yaw = (msg.payload.yaw * 180 / Math.PI).toFixed(1);
    console.log(`✈️  Attitude: roll=${roll}°, pitch=${pitch}°, yaw=${yaw}°`);
  });

  mavlink.on('error', (error) => {
    console.error('❌ Parse error:', error.message);
  });

  // TCP connection handlers
  client.connect(port, host, () => {
    console.log(`✅ Connected to ${host}:${port}`);
  });

  client.on('data', (data) => {
    mavlink.processData(data);
  });

  client.on('close', () => {
    console.log('📡 Connection closed');
    console.log('📊 Final stats:', mavlink.getStats());
  });

  client.on('error', (error) => {
    console.error('🔥 Connection error:', error.message);
  });

  // Periodic stats logging
  const statsInterval = setInterval(() => {
    const stats = mavlink.getStats();
    console.log(`📊 Stats: ${stats.messagesReceived} msgs, ${stats.messageRate} msg/s, ${stats.bytesProcessed} bytes`);
  }, 10000);

  // Cleanup function
  return () => {
    clearInterval(statsInterval);
    client.destroy();
  };
}

// UDP Server Example
function createUDPServer(port = 14550) {
  console.log('=== UDP MAVLink Server Example ===');
  
  const mavlink = new MAVLinkStreamParser();
  const server = dgram.createSocket('udp4');

  // Set up MAVLink message handlers
  mavlink.on('message', (msg) => {
    console.log(`📦 ${msg.message_name} from ${msg.system_id}:${msg.component_id} (seq: ${msg.sequence})`);
  });

  mavlink.on('error', (error) => {
    console.error('❌ Parse error:', error.message);
  });

  // UDP server handlers
  server.on('message', (data, rinfo) => {
    console.log(`📡 Received ${data.length} bytes from ${rinfo.address}:${rinfo.port}`);
    mavlink.processData(data);
  });

  server.on('listening', () => {
    const address = server.address();
    console.log(`✅ UDP server listening on ${address.address}:${address.port}`);
  });

  server.on('error', (error) => {
    console.error('🔥 Server error:', error.message);
    server.close();
  });

  server.bind(port);

  // Periodic stats logging
  const statsInterval = setInterval(() => {
    const stats = mavlink.getStats();
    console.log(`📊 Stats: ${stats.messagesReceived} msgs, ${stats.messageRate} msg/s, ${stats.bytesProcessed} bytes`);
  }, 10000);

  // Cleanup function
  return () => {
    clearInterval(statsInterval);
    server.close();
  };
}

// File replay example
function replayMAVLinkFile(filename) {
  console.log('=== MAVLink File Replay Example ===');
  
  const fs = require('fs');
  const mavlink = new MAVLinkStreamParser();

  // Message statistics
  const messageStats = {};

  mavlink.on('message', (msg) => {
    if (!messageStats[msg.message_name]) {
      messageStats[msg.message_name] = 0;
    }
    messageStats[msg.message_name]++;
  });

  mavlink.on('error', (error) => {
    console.error('❌ Parse error:', error.message);
  });

  try {
    const data = fs.readFileSync(filename);
    console.log(`📁 Reading ${data.length} bytes from ${filename}`);
    
    mavlink.processData(data);
    
    const stats = mavlink.getStats();
    console.log(`✅ Processed ${stats.messagesReceived} messages`);
    console.log('📈 Message breakdown:');
    
    Object.entries(messageStats)
      .sort(([,a], [,b]) => b - a)
      .forEach(([name, count]) => {
        console.log(`   ${name}: ${count}`);
      });
      
  } catch (error) {
    console.error('❌ File error:', error.message);
  }
}

// Demo data generator for testing
function generateTestData() {
  // Sample MAVLink messages for testing
  const heartbeat = new Uint8Array([
    0xFE, 0x09, 0x00, 0x01, 0x01, 0x00, // Header
    0x04, 0x03, 0x51, 0x04, 0x03, 0x00, 0x00, 0x00, 0x00, // Payload
    0xB6, 0x3C // Checksum
  ]);

  const gpsRaw = new Uint8Array([
    0xFE, 0x1E, 0x00, 0x01, 0x01, 0x18, // Header
    0x10, 0x27, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // time_usec
    0x03, // fix_type
    0xE4, 0x0C, 0x02, 0x14, // lat
    0x88, 0x13, 0x00, 0x0C, // lon
    0x10, 0x27, 0x00, 0x00, // alt
    0xFF, 0xFF, // eph
    0xFF, 0xFF, // epv
    0xFF, 0xFF, // vel
    0xFF, 0xFF, // cog
    0x08, // satellites_visible
    0xD4, 0x9A // Checksum
  ]);

  return { heartbeat, gpsRaw };
}

// Simple test runner
function runTests() {
  console.log('=== Running MAVLink Parser Tests ===\n');

  const mavlink = new MAVLinkStreamParser();
  const { heartbeat, gpsRaw } = generateTestData();

  // Test 1: Single message
  console.log('Test 1: Single HEARTBEAT message');
  mavlink.processData(heartbeat);

  // Test 2: Multiple messages
  console.log('\nTest 2: Multiple messages in buffer');
  const multipleMessages = new Uint8Array([...heartbeat, ...gpsRaw]);
  mavlink.processData(multipleMessages);

  // Test 3: Partial message
  console.log('\nTest 3: Partial message handling');
  mavlink.processData(heartbeat.slice(0, 10));
  mavlink.processData(heartbeat.slice(10));

  // Test 4: Invalid data
  console.log('\nTest 4: Invalid data handling');
  const invalidData = new Uint8Array([0x12, 0x34, 0x56, ...heartbeat]);
  mavlink.processData(invalidData);

  console.log('\n📊 Final test stats:', mavlink.getStats());
}

// Main execution
if (require.main === module) {
  const command = process.argv[2];
  
  switch (command) {
    case 'tcp':
      const host = process.argv[3] || 'localhost';
      const port = parseInt(process.argv[4]) || 5760;
      const cleanup = createTCPClient(host, port);
      
      // Graceful shutdown
      process.on('SIGINT', () => {
        console.log('\n🛑 Shutting down...');
        cleanup();
        process.exit(0);
      });
      break;
      
    case 'udp':
      const udpPort = parseInt(process.argv[3]) || 14550;
      const udpCleanup = createUDPServer(udpPort);
      
      process.on('SIGINT', () => {
        console.log('\n🛑 Shutting down...');
        udpCleanup();
        process.exit(0);
      });
      break;
      
    case 'file':
      const filename = process.argv[3];
      if (!filename) {
        console.error('Usage: node nodejs-stream.js file <filename>');
        process.exit(1);
      }
      replayMAVLinkFile(filename);
      break;
      
    case 'test':
    default:
      runTests();
      break;
  }
}

module.exports = {
  MAVLinkStreamParser,
  createTCPClient,
  createUDPServer,
  replayMAVLinkFile,
  generateTestData
};