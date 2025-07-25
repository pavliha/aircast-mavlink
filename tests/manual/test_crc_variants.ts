#!/usr/bin/env tsx

// Test different CRC implementations to find the one that matches gomavlib
(() => {
const data = new Uint8Array([0x06, 0x00, 0xff, 0xbe, 0x42, 0x01, 0x00, 0x01, 0x00, 0x01, 0x01]);
const crcExtra = 148;
const expected = 0xc453;

console.log('🔍 Testing different CRC implementations');
console.log('Data:', Array.from(data).map((b: number) => '0x' + b.toString(16).padStart(2, '0')).join(' '));
console.log('CRC_EXTRA:', crcExtra);
console.log('Expected:', '0x' + expected.toString(16));
console.log();

// Our current implementation
function crc1_current(data: Uint8Array, crcExtra: number): number {
  let crc = 0xffff;
  
  for (let i = 0; i < data.length; i++) {
    let tmp = data[i] ^ (crc & 0xff);
    tmp ^= (tmp << 4);
    crc = ((crc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4)) & 0xffff;
  }
  
  let tmp = crcExtra ^ (crc & 0xff);
  tmp ^= (tmp << 4);
  crc = ((crc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4)) & 0xffff;
  
  return crc;
}

// Reference implementation from MAVLink C library (more explicit operations)
function crc2_reference(data: Uint8Array, crcExtra: number): number {
  let crc = 0xffff;
  
  for (let i = 0; i < data.length; i++) {
    let tmp = data[i] ^ (crc & 0xff);
    tmp = (tmp ^ (tmp << 4)) & 0xff;
    crc = ((crc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4)) & 0xffff;
  }
  
  let tmp = crcExtra ^ (crc & 0xff);
  tmp = (tmp ^ (tmp << 4)) & 0xff;
  crc = ((crc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4)) & 0xffff;
  
  return crc;
}

// Alternative implementation (ensuring all intermediate values are properly masked)
function crc3_masked(data: Uint8Array, crcExtra: number): number {
  let crc = 0xffff;
  
  for (let i = 0; i < data.length; i++) {
    let tmp = (data[i] ^ (crc & 0xff)) & 0xff;
    tmp = (tmp ^ (tmp << 4)) & 0xff;
    crc = (((crc >> 8) & 0xff) ^ ((tmp << 8) & 0xff00) ^ ((tmp << 3) & 0xff8) ^ ((tmp >> 4) & 0xf)) & 0xffff;
  }
  
  let tmp = (crcExtra ^ (crc & 0xff)) & 0xff;
  tmp = (tmp ^ (tmp << 4)) & 0xff;
  crc = (((crc >> 8) & 0xff) ^ ((tmp << 8) & 0xff00) ^ ((tmp << 3) & 0xff8) ^ ((tmp >> 4) & 0xf)) & 0xffff;
  
  return crc;
}

// Test with swapped byte order in the final result
function crc4_swapped(data: Uint8Array, crcExtra: number): number {
  let crc = crc1_current(data, crcExtra);
  // Swap bytes
  return ((crc & 0xff) << 8) | ((crc >> 8) & 0xff);
}

// Test without CRC_EXTRA 
function crc5_no_extra(data: Uint8Array, crcExtra: number): number {
  let crc = 0xffff;
  
  for (let i = 0; i < data.length; i++) {
    let tmp = data[i] ^ (crc & 0xff);
    tmp ^= (tmp << 4);
    crc = ((crc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4)) & 0xffff;
  }
  
  return crc;
}

// Test different CRC_EXTRA application
function crc6_extra_first(data: Uint8Array, crcExtra: number): number {
  let crc = 0xffff;
  
  // Apply CRC_EXTRA first
  let tmp = crcExtra ^ (crc & 0xff);
  tmp ^= (tmp << 4);
  crc = ((crc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4)) & 0xffff;
  
  for (let i = 0; i < data.length; i++) {
    tmp = data[i] ^ (crc & 0xff);
    tmp ^= (tmp << 4);
    crc = ((crc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4)) & 0xffff;
  }
  
  return crc;
}

const implementations = [
  { name: 'Current', func: crc1_current },
  { name: 'Reference', func: crc2_reference },
  { name: 'Masked', func: crc3_masked },
  { name: 'Swapped', func: crc4_swapped },
  { name: 'No Extra', func: crc5_no_extra },
  { name: 'Extra First', func: crc6_extra_first },
];

console.log('=== TESTING IMPLEMENTATIONS ===');
implementations.forEach(impl => {
  const result = impl.func(data, crcExtra);
  const match = result === expected ? '✅' : '❌';
  console.log(`${impl.name.padEnd(12)}: 0x${result.toString(16).padStart(4, '0')} ${match}`);
});

console.log('\n=== ANALYSIS ===');
console.log(`Expected: 0x${expected.toString(16)} (${expected})`);
console.log(`Current:  0x${crc1_current(data, crcExtra).toString(16)} (${crc1_current(data, crcExtra)})`);
console.log(`Difference: ${Math.abs(expected - crc1_current(data, crcExtra))}`);
})();