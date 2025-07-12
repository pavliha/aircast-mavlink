// CRC calculation for MAVLink messages
export class CRCCalculator {
  private static readonly CRC_INIT = 0xFFFF;

  public static calculate(data: Uint8Array, extra: number = 0): number {
    let crc = CRCCalculator.CRC_INIT;
    
    for (let i = 0; i < data.length; i++) {
      crc = CRCCalculator.crcAccumulate(data[i], crc);
    }
    
    if (extra !== 0) {
      crc = CRCCalculator.crcAccumulate(extra, crc);
    }
    
    return crc;
  }

  private static crcAccumulate(byte: number, crc: number): number {
    const tmp = byte ^ (crc & 0xFF);
    const tmp2 = (tmp ^ (tmp << 4)) & 0xFF;
    return ((crc >> 8) ^ (tmp2 << 8) ^ (tmp2 << 3) ^ (tmp2 >> 4)) & 0xFFFF;
  }

  // CRC extra values for message validation (subset of common messages)
  public static getCRCExtra(messageId: number): number {
    const crcExtras: Record<number, number> = {
      0: 50,   // HEARTBEAT
      1: 124,  // SYS_STATUS
      2: 137,  // SYSTEM_TIME
      4: 237,  // PING
      5: 217,  // CHANGE_OPERATOR_CONTROL
      6: 104,  // CHANGE_OPERATOR_CONTROL_ACK
      7: 119,  // AUTH_KEY
      11: 89,  // SET_MODE
      20: 214, // PARAM_REQUEST_READ
      21: 159, // PARAM_REQUEST_LIST
      22: 220, // PARAM_VALUE
      23: 168, // PARAM_SET
      24: 24,  // GPS_RAW_INT
      25: 23,  // GPS_STATUS
      26: 170, // SCALED_IMU
      27: 144, // RAW_IMU
      28: 67,  // RAW_PRESSURE
      29: 115, // SCALED_PRESSURE
      30: 39,  // ATTITUDE
      31: 246, // ATTITUDE_QUATERNION
      32: 185, // LOCAL_POSITION_NED
      33: 104, // GLOBAL_POSITION_INT
      34: 237, // RC_CHANNELS_SCALED
      35: 244, // RC_CHANNELS_RAW
      36: 222, // SERVO_OUTPUT_RAW
      37: 212, // MISSION_REQUEST_PARTIAL_LIST
      38: 9,   // MISSION_WRITE_PARTIAL_LIST
      39: 254, // MISSION_ITEM
      40: 230, // MISSION_REQUEST
      41: 28,  // MISSION_SET_CURRENT
      42: 28,  // MISSION_CURRENT
      43: 132, // MISSION_REQUEST_LIST
      44: 221, // MISSION_COUNT
      45: 232, // MISSION_CLEAR_ALL
      46: 11,  // MISSION_ITEM_REACHED
      47: 153, // MISSION_ACK
      48: 41,  // SET_GPS_GLOBAL_ORIGIN
      49: 39,  // GPS_GLOBAL_ORIGIN
      50: 78,  // PARAM_MAP_RC
      51: 196, // MISSION_REQUEST_INT
      54: 15,  // SAFETY_SET_ALLOWED_AREA
      55: 3,   // SAFETY_ALLOWED_AREA
      61: 167, // ATTITUDE_QUATERNION_COV
      62: 183, // NAV_CONTROLLER_OUTPUT
      63: 51,  // GLOBAL_POSITION_INT_COV
      64: 59,  // LOCAL_POSITION_NED_COV
      65: 118, // RC_CHANNELS
      66: 148, // REQUEST_DATA_STREAM
      67: 21,  // DATA_STREAM
      69: 243, // MANUAL_CONTROL
      70: 124, // RC_CHANNELS_OVERRIDE
      73: 38,  // MISSION_ITEM_INT
      74: 20,  // VFR_HUD
      75: 158, // COMMAND_INT
      76: 152, // COMMAND_LONG
      77: 143, // COMMAND_ACK
      81: 106, // MANUAL_SETPOINT
      82: 49,  // SET_ATTITUDE_TARGET
      83: 22,  // ATTITUDE_TARGET
      84: 143, // SET_POSITION_TARGET_LOCAL_NED
      85: 140, // POSITION_TARGET_LOCAL_NED
      86: 5,   // SET_POSITION_TARGET_GLOBAL_INT
      87: 150, // POSITION_TARGET_GLOBAL_INT
      89: 231, // LOCAL_POSITION_NED_SYSTEM_GLOBAL_OFFSET
      90: 183, // HIL_STATE
      91: 63,  // HIL_CONTROLS
      92: 54,  // HIL_RC_INPUTS_RAW
      100: 175, // OPTICAL_FLOW
      101: 102, // GLOBAL_VISION_POSITION_ESTIMATE
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
      115: 4,   // HIL_STATE_QUATERNION
      116: 76,  // SCALED_IMU2
      117: 116, // LOG_REQUEST_LIST
      118: 255, // LOG_ENTRY
      119: 116, // LOG_REQUEST_DATA
      120: 134, // LOG_DATA
      121: 237, // LOG_ERASE
      122: 203, // LOG_REQUEST_END
      123: 250, // GPS_INJECT_DATA
      124: 87,  // GPS2_RAW
      125: 203, // POWER_STATUS
      126: 79,  // SERIAL_CONTROL
      127: 226, // GPS_RTK
      128: 226, // GPS2_RTK
      129: 46,  // SCALED_IMU3
      130: 29,  // DATA_TRANSMISSION_HANDSHAKE
      131: 223, // ENCAPSULATED_DATA
      132: 85,  // DISTANCE_SENSOR
      133: 6,   // TERRAIN_REQUEST
      134: 229, // TERRAIN_DATA
      135: 203, // TERRAIN_CHECK
      136: 1,   // TERRAIN_REPORT
      137: 195, // SCALED_PRESSURE2
      138: 109, // ATT_POS_MOCAP
      139: 168, // SET_ACTUATOR_CONTROL_TARGET
      140: 181, // ACTUATOR_CONTROL_TARGET
      141: 47,  // ALTITUDE
      142: 72,  // RESOURCE_REQUEST
      143: 196, // SCALED_PRESSURE3
      144: 127, // FOLLOW_TARGET
      146: 103, // CONTROL_SYSTEM_STATE
      147: 154, // BATTERY_STATUS
      148: 178, // AUTOPILOT_VERSION
      149: 200, // LANDING_TARGET
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
      256: 71,  // SETUP_SIGNING
      257: 131, // BUTTON_CHANGE
      258: 187, // PLAY_TUNE
      259: 92,  // CAMERA_INFORMATION
      260: 146, // CAMERA_SETTINGS
      261: 179, // STORAGE_INFORMATION
      262: 12,  // CAMERA_CAPTURE_STATUS
      263: 133, // CAMERA_IMAGE_CAPTURED
      264: 49,  // FLIGHT_INFORMATION
      265: 26,  // MOUNT_ORIENTATION
      266: 193, // LOGGING_DATA
      267: 35,  // LOGGING_DATA_ACKED
      268: 84,  // LOGGING_ACK
      269: 109, // VIDEO_STREAM_INFORMATION
      270: 59,  // VIDEO_STREAM_STATUS
      299: 19   // WIFI_CONFIG_AP
    };
    
    return crcExtras[messageId] || 0;
  }
}