#!/usr/bin/env tsx

import { spawn } from 'child_process';

// Test the corrected message with gomavlib validation 
const correctedBytes = [0xfe, 0x06, 0x00, 0xff, 0xbe, 0x42, 0x01, 0x00, 0x01, 0x01, 0x00, 0x01, 0xd8, 0xe3];

async function validateWithGomavlib(): Promise<any> {
  return new Promise((resolve, reject) => {
    const validator = spawn('./validator', [], {
      cwd: '/Users/pavliha/Code/aircast/aircast-mavlink/tests/go-validator',
      stdio: ['pipe', 'pipe', 'pipe']
    });

    const request = {
      data: correctedBytes,
      dialect: 'common',
      message: 'REQUEST_DATA_STREAM'
    };

    let stdout = '';
    let stderr = '';

    validator.stdout.on('data', (data) => {
      stdout += data.toString();
    });

    validator.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    validator.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`Validator exited with code ${code}: ${stderr}`));
        return;
      }

      try {
        const result = JSON.parse(stdout);
        resolve(result);
      } catch (error) {
        reject(new Error(`Failed to parse JSON output: ${error}`));
      }
    });

    validator.stdin.write(JSON.stringify(request));
    validator.stdin.end();
  });
}

async function runTest() {
  console.log('🧪 Testing corrected REQUEST_DATA_STREAM with gomavlib validation...\n');
  console.log('Frame bytes:', correctedBytes.map(b => '0x' + b.toString(16).padStart(2, '0')).join(' '));
  console.log('Checksum: 0xe3d8');

  try {
    const result = await validateWithGomavlib();
    
    if (result.success) {
      console.log('\n🎉 ✅ VALIDATION SUCCESSFUL!');
      console.log('🚀 *** REQUEST_DATA_STREAM is now compatible with gomavlib! ***');
      console.log(`📋 Message ID: ${result.message_id}`);
      console.log(`🆔 System ID: ${result.system_id}, Component ID: ${result.component_id}`);
      console.log(`🔢 Sequence: ${result.sequence}`);
      console.log(`🔐 Checksum valid: ${result.checksum_valid}`);
      console.log('\n✅ The SITL compatibility issue is FIXED!');
    } else {
      console.log('\n❌ VALIDATION FAILED');
      console.log(`❗ Error: ${result.error}`);
      
      // Check if it's a checksum error
      if (result.error && result.error.includes('wrong checksum')) {
        console.log('\n📝 Analysis: The frame structure is correct but gomavlib expects a different checksum.');
        console.log('This suggests there might be a tiny difference in CRC calculation or CRC_EXTRA value.');
        
        // Extract expected checksum from error message if possible
        const match = result.error.match(/expected ([0-9a-fA-F]+)/);
        if (match) {
          console.log(`🎯 Gomavlib expects checksum: 0x${match[1]}`);
        }
      }
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

runTest();