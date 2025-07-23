/**
 * TypeScript declarations for custom Jest matchers
 */

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Validates that an object is a valid MAVLink message structure
       */
      toBeValidMAVLinkMessage(): R;
      
      /**
       * Validates that a message has a valid payload with expected fields
       */
      toHaveValidPayload(expectedFields?: Record<string, any>): R;
      
      /**
       * Validates that two messages are compatible (same core structure)
       */
      toBeCompatibleWith(otherMessage: any): R;
      
      /**
       * Validates that a parsed message has a valid checksum
       */
      toHaveValidChecksum(): R;
      
      /**
       * Validates that a number is within a specified range
       */
      toBeWithinRange(min: number, max: number): R;
    }
  }
}

export {};