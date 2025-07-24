/**
 * Testing to understand the discrepancy with gomavlib
 * Let's try to reverse engineer what data would produce 0x8234
 */

// Official MAVLink C implementation
class MAVLinkCRC {
  public static calculate(data: Uint8Array, crcExtra: number): number {
    let crc = 0xffff; // X25_INIT_CRC

    for (let i = 0; i < data.length; i++) {
      crc = this.crcAccumulate(data[i], crc);
    }

    crc = this.crcAccumulate(crcExtra, crc);
    return crc;
  }

  private static crcAccumulate(data: number, crcAccum: number): number {
    let tmp = data ^ (crcAccum & 0xff);
    tmp ^= (tmp << 4);
    return ((crcAccum >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4)) & 0xffff;
  }
}

// Let's try byte swapping the CRC result to see if it's an endianness issue
function swapBytes16(value: number): number {
  return ((value & 0xFF) << 8) | ((value >> 8) & 0xFF);
}

const testData = new Uint8Array([0x06, 0x00, 0xff, 0xbe, 0x42, 0x01, 0x00, 0x01, 0x01, 0x00, 0x01]);
const expectedCrc = 0x8234;
const crcExtra = 148;

console.log('=== GOMAVLIB CRC ANALYSIS ===\n');
console.log('Test data:', Array.from(testData).map(b => `0x${b.toString(16).padStart(2, '0')}`).join(', '));
console.log('Expected CRC: 0x' + expectedCrc.toString(16).toUpperCase());
console.log();

// Our current result
const ourResult = MAVLinkCRC.calculate(testData, crcExtra);
console.log('Our CRC result: 0x' + ourResult.toString(16).toUpperCase());

// Check if byte swapping gives us the expected result
const swapped = swapBytes16(ourResult);
console.log('Byte-swapped result: 0x' + swapped.toString(16).toUpperCase());
console.log('Swapped matches expected:', swapped === expectedCrc);
console.log();

// Let's also check if the expected result byte-swapped matches our result
const expectedSwapped = swapBytes16(expectedCrc);
console.log('Expected byte-swapped: 0x' + expectedSwapped.toString(16).toUpperCase());
console.log('Expected swapped matches our result:', expectedSwapped === ourResult);
console.log();

// Test with different byte orderings of the data
console.log('=== TESTING DIFFERENT BYTE ORDERINGS ===');

// Test 1: Reverse the entire data array
const reversedData = new Uint8Array([...testData].reverse());
console.log('Reversed data:', Array.from(reversedData).map(b => `0x${b.toString(16).padStart(2, '0')}`).join(', '));
const reversedResult = MAVLinkCRC.calculate(reversedData, crcExtra);
console.log('Reversed result: 0x' + reversedResult.toString(16).toUpperCase());
console.log('Reversed matches expected:', reversedResult === expectedCrc);
console.log();

// Test 2: Let's manually verify our CRC algorithm with a simple test
console.log('=== ALGORITHM VERIFICATION ===');
const simpleTest = new Uint8Array([0x42]); // Just message ID
const simpleResult = MAVLinkCRC.calculate(simpleTest, 148);
console.log('Simple test (just 0x42): 0x' + simpleResult.toString(16).toUpperCase());

// Step by step for the simple test
let stepCrc = 0xffff;
console.log('Initial CRC: 0x' + stepCrc.toString(16).toUpperCase());

// Accumulate 0x42
let tmp = 0x42 ^ (stepCrc & 0xff);
tmp ^= (tmp << 4);
stepCrc = ((stepCrc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4)) & 0xffff;
console.log('After 0x42: 0x' + stepCrc.toString(16).toUpperCase());

// Accumulate CRC_EXTRA (148)
tmp = 148 ^ (stepCrc & 0xff);
tmp ^= (tmp << 4);
stepCrc = ((stepCrc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4)) & 0xffff;
console.log('After CRC_EXTRA: 0x' + stepCrc.toString(16).toUpperCase());
console.log();

// Let's create an X.25 CRC-16 implementation to double-check
class X25CRC {
  private static readonly POLY = 0x1021;
  
  public static calculate(data: Uint8Array): number {
    let crc = 0xFFFF;
    
    for (let i = 0; i < data.length; i++) {
      crc ^= (data[i] << 8);
      
      for (let j = 0; j < 8; j++) {
        if ((crc & 0x8000) !== 0) {
          crc = (crc << 1) ^ this.POLY;
        } else {
          crc = crc << 1;
        }
        crc &= 0xFFFF;
      }
    }
    
    return crc;
  }
}

console.log('=== X.25 CRC-16 COMPARISON ===');
// Create data with CRC_EXTRA appended
const dataWithExtra = new Uint8Array([...testData, crcExtra]);
console.log('Data with CRC_EXTRA:', Array.from(dataWithExtra).map(b => `0x${b.toString(16).padStart(2, '0')}`).join(', '));

const x25Result = X25CRC.calculate(dataWithExtra);
console.log('X.25 CRC-16 result: 0x' + x25Result.toString(16).toUpperCase());
console.log('X.25 matches expected:', x25Result === expectedCrc);
console.log('X.25 byte-swapped: 0x' + swapBytes16(x25Result).toString(16).toUpperCase());
console.log();

// Let's test if gomavlib might be using a different polynomial or algorithm
console.log('=== POTENTIAL DIFFERENT ALGORITHMS ===');

// IBM CRC-16 (polynomial 0x8005)
class IBMCRC {
  public static calculate(data: Uint8Array): number {
    let crc = 0x0000;
    
    for (let i = 0; i < data.length; i++) {
      crc ^= data[i];
      
      for (let j = 0; j < 8; j++) {
        if ((crc & 0x0001) !== 0) {
          crc = (crc >> 1) ^ 0xA001; // Reversed polynomial
        } else {
          crc = crc >> 1;
        }
      }
    }
    
    return crc;
  }
}

const ibmResult = IBMCRC.calculate(dataWithExtra);
console.log('IBM CRC-16 result: 0x' + ibmResult.toString(16).toUpperCase());
console.log('IBM matches expected:', ibmResult === expectedCrc);