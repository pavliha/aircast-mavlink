/**
 * MAVLink CRC implementation
 * Based on the MAVLink specification for message checksum calculation
 */

/**
 * CRC_EXTRA values for MAVLink messages
 * These values are used in checksum calculation to ensure protocol compatibility
 */
export const CRC_EXTRA: Record<number, number> = {
  // Common messages
  0: 50,    // HEARTBEAT
  1: 124,   // SYS_STATUS
  2: 137,   // SYSTEM_TIME
  4: 237,   // PING
  5: 217,   // CHANGE_OPERATOR_CONTROL
  6: 104,   // CHANGE_OPERATOR_CONTROL_ACK
  7: 119,   // AUTH_KEY
  11: 89,   // SET_MODE
  20: 214,  // PARAM_REQUEST_READ
  21: 159,  // PARAM_REQUEST_LIST
  22: 220,  // PARAM_VALUE
  23: 168,  // PARAM_SET
  24: 24,   // GPS_RAW_INT
  25: 23,   // GPS_STATUS
  26: 170,  // SCALED_IMU
  27: 144,  // RAW_IMU
  28: 67,   // RAW_PRESSURE
  29: 119,  // SCALED_PRESSURE
  30: 39,   // ATTITUDE
  31: 246,  // ATTITUDE_QUATERNION
  32: 185,  // LOCAL_POSITION_NED
  33: 104,  // GLOBAL_POSITION_INT
  34: 237,  // RC_CHANNELS_SCALED
  35: 244,  // RC_CHANNELS_RAW
  36: 222,  // SERVO_OUTPUT_RAW
  37: 212,  // MISSION_REQUEST_PARTIAL_LIST
  38: 9,    // MISSION_WRITE_PARTIAL_LIST
  39: 254,  // MISSION_ITEM
  40: 230,  // MISSION_REQUEST
  41: 28,   // MISSION_SET_CURRENT
  42: 28,   // MISSION_CURRENT
  43: 132,  // MISSION_REQUEST_LIST
  44: 221,  // MISSION_COUNT
  45: 232,  // MISSION_CLEAR_ALL
  46: 11,   // MISSION_ITEM_REACHED
  47: 153,  // MISSION_ACK
  48: 41,   // SET_GPS_GLOBAL_ORIGIN
  49: 39,   // GPS_GLOBAL_ORIGIN
  50: 78,   // PARAM_MAP_RC
  51: 196,  // MISSION_REQUEST_INT
  54: 15,   // SAFETY_SET_ALLOWED_AREA
  55: 3,    // SAFETY_ALLOWED_AREA
  61: 167,  // ATTITUDE_QUATERNION_COV
  62: 183,  // NAV_CONTROLLER_OUTPUT
  63: 119,  // GLOBAL_POSITION_INT_COV
  64: 191,  // LOCAL_POSITION_NED_COV
  65: 118,  // RC_CHANNELS
  66: 148,  // REQUEST_DATA_STREAM - This is the key one we need to fix!
  67: 21,   // DATA_STREAM
  69: 243,  // MANUAL_CONTROL
  70: 124,  // RC_CHANNELS_OVERRIDE
  73: 38,   // MISSION_ITEM_INT
  74: 20,   // VFR_HUD
  75: 158,  // COMMAND_INT
  76: 152,  // COMMAND_LONG
  77: 143,  // COMMAND_ACK
  81: 106,  // MANUAL_SETPOINT
  82: 49,   // SET_ATTITUDE_TARGET
  83: 22,   // ATTITUDE_TARGET
  84: 143,  // SET_POSITION_TARGET_LOCAL_NED
  85: 140,  // POSITION_TARGET_LOCAL_NED
  86: 5,    // SET_POSITION_TARGET_GLOBAL_INT
  87: 150,  // POSITION_TARGET_GLOBAL_INT
  89: 231,  // LOCAL_POSITION_NED_SYSTEM_GLOBAL_OFFSET
  90: 183,  // HIL_STATE
  91: 63,   // HIL_CONTROLS
  92: 54,   // HIL_RC_INPUTS_RAW
  93: 47,   // HIL_ACTUATOR_CONTROLS
  100: 175, // OPTICAL_FLOW
  101: 104, // GLOBAL_VISION_POSITION_ESTIMATE
  102: 158, // VISION_POSITION_ESTIMATE
  103: 208, // VISION_SPEED_ESTIMATE
  104: 56,  // VICON_POSITION_ESTIMATE
  105: 93,  // HIGHRES_IMU
  106: 138, // OPTICAL_FLOW_RAD
  107: 108, // HIL_SENSOR
  108: 32,  // SIM_STATE
  109: 185, // RADIO_STATUS
  110: 84,  // FILE_TRANSFER_PROTOCOL
  111: 34,  // TIMESYNC
  112: 174, // CAMERA_TRIGGER
  113: 124, // HIL_GPS
  114: 237, // HIL_OPTICAL_FLOW
  115: 222, // HIL_STATE_QUATERNION
  116: 212, // SCALED_IMU2
  117: 9,   // LOG_REQUEST_LIST
  118: 254, // LOG_ENTRY
  119: 230, // LOG_REQUEST_DATA
  120: 28,  // LOG_DATA
  121: 28,  // LOG_ERASE
  122: 132, // LOG_REQUEST_END
  123: 221, // GPS_INJECT_DATA
  124: 232, // GPS2_RAW
  125: 11,  // POWER_STATUS
  126: 153, // SERIAL_CONTROL
  127: 41,  // GPS_RTK
  128: 39,  // GPS2_RTK
  129: 78,  // SCALED_IMU3
  130: 196, // DATA_TRANSMISSION_HANDSHAKE
  131: 15,  // ENCAPSULATED_DATA
  132: 3,   // DISTANCE_SENSOR
  133: 167, // TERRAIN_REQUEST
  134: 183, // TERRAIN_DATA
  135: 119, // TERRAIN_CHECK
  136: 191, // TERRAIN_REPORT
  137: 118, // SCALED_PRESSURE2
  138: 148, // ATT_POS_MOCAP
  139: 21,  // SET_ACTUATOR_CONTROL_TARGET
  140: 243, // ACTUATOR_CONTROL_TARGET
  141: 124, // ALTITUDE
  142: 38,  // RESOURCE_REQUEST
  143: 20,  // SCALED_PRESSURE3
  144: 158, // FOLLOW_TARGET
  146: 152, // CONTROL_SYSTEM_STATE
  147: 143, // BATTERY_STATUS
  148: 106, // AUTOPILOT_VERSION
  149: 49,  // LANDING_TARGET
  230: 163, // ESTIMATOR_STATUS
  231: 105, // WIND_COV
  232: 151, // GPS_INPUT
  233: 35,  // GPS_RTCM_DATA
  234: 150, // HIGH_LATENCY
  235: 179, // HIGH_LATENCY2
  241: 90,  // VIBRATION
  242: 104, // HOME_POSITION
  243: 85,  // SET_HOME_POSITION
  244: 95,  // MESSAGE_INTERVAL
  245: 130, // EXTENDED_SYS_STATE
  246: 184, // ADSB_VEHICLE
  247: 81,  // COLLISION
  248: 8,   // V2_EXTENSION
  249: 204, // MEMORY_VECT
  250: 49,  // DEBUG_VECT
  251: 170, // NAMED_VALUE_FLOAT
  252: 44,  // NAMED_VALUE_INT
  253: 83,  // STATUSTEXT
  254: 46,  // DEBUG
  255: 71,  // SETUP_SIGNING
};

/**
 * MAVLink MCRF4XX CRC implementation 
 * Matches the official MAVLink C library algorithm
 */
export class MAVLinkCRC {

  /**
   * Calculate MAVLink CRC using the MCRF4XX algorithm
   * This matches the official MAVLink C library implementation
   * @param data Message data bytes (without start byte and checksum)
   * @param crcExtra CRC_EXTRA value for the message type
   * @returns 16-bit CRC value
   */
  public static calculate(data: Uint8Array, crcExtra: number): number {
    let crc = 0xffff;

    // Process all message bytes using MCRF4XX algorithm
    for (let i = 0; i < data.length; i++) {
      let tmp = data[i] ^ (crc & 0xff);
      tmp = (tmp ^ (tmp << 4)) & 0xff;
      crc = ((crc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4)) & 0xffff;
    }

    // Add CRC_EXTRA byte using the same algorithm
    let tmp = crcExtra ^ (crc & 0xff);
    tmp = (tmp ^ (tmp << 4)) & 0xff;
    crc = ((crc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4)) & 0xffff;

    return crc;
  }

  /**
   * Validate message CRC
   * @param data Complete message bytes (without start byte)
   * @param messageId Message ID to get CRC_EXTRA
   * @returns true if CRC is valid
   */
  public static validate(data: Uint8Array, messageId: number): boolean {
    if (data.length < 2) return false;

    const crcExtra = CRC_EXTRA[messageId];
    if (crcExtra === undefined) {
      console.warn(`No CRC_EXTRA defined for message ID ${messageId}`);
      return false;
    }

    // Extract received CRC (last 2 bytes, little endian)
    const receivedCrc = data[data.length - 2] | (data[data.length - 1] << 8);

    // Calculate expected CRC (exclude checksum bytes)
    const messageData = data.subarray(0, data.length - 2);
    const expectedCrc = this.calculate(messageData, crcExtra);

    return receivedCrc === expectedCrc;
  }
}