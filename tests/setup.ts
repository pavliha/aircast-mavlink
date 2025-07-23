// Jest setup file
// Jest globals are already available in the test environment

// Add BigInt serialization support for Jest
(BigInt.prototype as any).toJSON = function() {
  return this.toString();
};

// Extend expect matchers for BigInt
expect.extend({
  toBeBigInt(received: any, expected: any) {
    const pass = typeof received === 'bigint' && received.toString() === expected.toString();
    return {
      message: () => `expected ${received} to equal BigInt(${expected})`,
      pass,
    };
  },
});