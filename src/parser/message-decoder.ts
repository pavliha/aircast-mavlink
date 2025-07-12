// Message decoder for MAVLink messages
import { MAVLinkFrame, ParsedMAVLinkMessage, ParserError } from './types';

export class MAVLinkMessageDecoder {
  private messageMap: Map<number, any> = new Map();
  
  constructor() {
    // Message map initialization - would be enhanced with actual message definitions
  }

  public decode(frame: MAVLinkFrame & { protocol_version: 1 | 2 }): ParsedMAVLinkMessage {
    const timestamp = Date.now();
    
    try {
      // Decode payload based on message ID
      const payload = this.decodePayload(frame.message_id, frame.payload);
      const messageName = this.getMessageName(frame.message_id);

      return {
        timestamp,
        system_id: frame.system_id,
        component_id: frame.component_id,
        message_id: frame.message_id,
        message_name: messageName,
        sequence: frame.sequence,
        payload,
        protocol_version: frame.protocol_version,
        checksum: frame.checksum,
        signature: frame.signature
      };
    } catch (error) {
      throw new ParserError(`Failed to decode message: ${error instanceof Error ? error.message : 'Unknown error'}`, frame);
    }
  }

  private decodePayload(messageId: number, payload: Uint8Array): Record<string, any> {
    // Basic payload decoder - this would be enhanced with proper type definitions
    const decoded: Record<string, any> = {};
    
    switch (messageId) {
      case 0: // HEARTBEAT
        decoded.type = payload[0];
        decoded.autopilot = payload[1];
        decoded.base_mode = payload[2];
        decoded.custom_mode = new DataView(payload.buffer, payload.byteOffset).getUint32(3, true);
        decoded.system_status = payload[7];
        decoded.mavlink_version = payload[8];
        break;
        
      case 1: // SYS_STATUS
        decoded.onboard_control_sensors_present = new DataView(payload.buffer, payload.byteOffset).getUint32(0, true);
        decoded.onboard_control_sensors_enabled = new DataView(payload.buffer, payload.byteOffset).getUint32(4, true);
        decoded.onboard_control_sensors_health = new DataView(payload.buffer, payload.byteOffset).getUint32(8, true);
        decoded.load = new DataView(payload.buffer, payload.byteOffset).getUint16(12, true);
        decoded.voltage_battery = new DataView(payload.buffer, payload.byteOffset).getUint16(14, true);
        decoded.current_battery = new DataView(payload.buffer, payload.byteOffset).getInt16(16, true);
        decoded.battery_remaining = payload[18];
        break;
        
      case 4: // PING
        decoded.time_usec = new DataView(payload.buffer, payload.byteOffset).getBigUint64(0, true);
        decoded.seq = new DataView(payload.buffer, payload.byteOffset).getUint32(8, true);
        decoded.target_system = payload[12];
        decoded.target_component = payload[13];
        break;
        
      case 30: // ATTITUDE
        decoded.time_boot_ms = new DataView(payload.buffer, payload.byteOffset).getUint32(0, true);
        decoded.roll = new DataView(payload.buffer, payload.byteOffset).getFloat32(4, true);
        decoded.pitch = new DataView(payload.buffer, payload.byteOffset).getFloat32(8, true);
        decoded.yaw = new DataView(payload.buffer, payload.byteOffset).getFloat32(12, true);
        decoded.rollspeed = new DataView(payload.buffer, payload.byteOffset).getFloat32(16, true);
        decoded.pitchspeed = new DataView(payload.buffer, payload.byteOffset).getFloat32(20, true);
        decoded.yawspeed = new DataView(payload.buffer, payload.byteOffset).getFloat32(24, true);
        break;
        
      case 33: // GLOBAL_POSITION_INT
        decoded.time_boot_ms = new DataView(payload.buffer, payload.byteOffset).getUint32(0, true);
        decoded.lat = new DataView(payload.buffer, payload.byteOffset).getInt32(4, true);
        decoded.lon = new DataView(payload.buffer, payload.byteOffset).getInt32(8, true);
        decoded.alt = new DataView(payload.buffer, payload.byteOffset).getInt32(12, true);
        decoded.relative_alt = new DataView(payload.buffer, payload.byteOffset).getInt32(16, true);
        decoded.vx = new DataView(payload.buffer, payload.byteOffset).getInt16(20, true);
        decoded.vy = new DataView(payload.buffer, payload.byteOffset).getInt16(22, true);
        decoded.vz = new DataView(payload.buffer, payload.byteOffset).getInt16(24, true);
        decoded.hdg = new DataView(payload.buffer, payload.byteOffset).getUint16(26, true);
        break;
        
      default:
        // For unknown messages, return raw bytes as hex
        decoded.raw_data = Array.from(payload).map(b => b.toString(16).padStart(2, '0')).join('');
        break;
    }
    
    return decoded;
  }

  private getMessageName(messageId: number): string {
    const messageNames: Record<number, string> = {
      0: 'HEARTBEAT',
      1: 'SYS_STATUS',
      2: 'SYSTEM_TIME',
      4: 'PING',
      5: 'CHANGE_OPERATOR_CONTROL',
      6: 'CHANGE_OPERATOR_CONTROL_ACK',
      7: 'AUTH_KEY',
      11: 'SET_MODE',
      20: 'PARAM_REQUEST_READ',
      21: 'PARAM_REQUEST_LIST',
      22: 'PARAM_VALUE',
      23: 'PARAM_SET',
      24: 'GPS_RAW_INT',
      25: 'GPS_STATUS',
      26: 'SCALED_IMU',
      27: 'RAW_IMU',
      28: 'RAW_PRESSURE',
      29: 'SCALED_PRESSURE',
      30: 'ATTITUDE',
      31: 'ATTITUDE_QUATERNION',
      32: 'LOCAL_POSITION_NED',
      33: 'GLOBAL_POSITION_INT',
      34: 'RC_CHANNELS_SCALED',
      35: 'RC_CHANNELS_RAW',
      36: 'SERVO_OUTPUT_RAW',
      37: 'MISSION_REQUEST_PARTIAL_LIST',
      38: 'MISSION_WRITE_PARTIAL_LIST',
      39: 'MISSION_ITEM',
      40: 'MISSION_REQUEST',
      41: 'MISSION_SET_CURRENT',
      42: 'MISSION_CURRENT',
      43: 'MISSION_REQUEST_LIST',
      44: 'MISSION_COUNT',
      45: 'MISSION_CLEAR_ALL',
      46: 'MISSION_ITEM_REACHED',
      47: 'MISSION_ACK',
      48: 'SET_GPS_GLOBAL_ORIGIN',
      49: 'GPS_GLOBAL_ORIGIN',
      50: 'PARAM_MAP_RC',
      51: 'MISSION_REQUEST_INT',
      54: 'SAFETY_SET_ALLOWED_AREA',
      55: 'SAFETY_ALLOWED_AREA',
      61: 'ATTITUDE_QUATERNION_COV',
      62: 'NAV_CONTROLLER_OUTPUT',
      63: 'GLOBAL_POSITION_INT_COV',
      64: 'LOCAL_POSITION_NED_COV',
      65: 'RC_CHANNELS',
      66: 'REQUEST_DATA_STREAM',
      67: 'DATA_STREAM',
      69: 'MANUAL_CONTROL',
      70: 'RC_CHANNELS_OVERRIDE',
      73: 'MISSION_ITEM_INT',
      74: 'VFR_HUD',
      75: 'COMMAND_INT',
      76: 'COMMAND_LONG',
      77: 'COMMAND_ACK',
      81: 'MANUAL_SETPOINT',
      82: 'SET_ATTITUDE_TARGET',
      83: 'ATTITUDE_TARGET',
      84: 'SET_POSITION_TARGET_LOCAL_NED',
      85: 'POSITION_TARGET_LOCAL_NED',
      86: 'SET_POSITION_TARGET_GLOBAL_INT',
      87: 'POSITION_TARGET_GLOBAL_INT',
      89: 'LOCAL_POSITION_NED_SYSTEM_GLOBAL_OFFSET',
      90: 'HIL_STATE',
      91: 'HIL_CONTROLS',
      92: 'HIL_RC_INPUTS_RAW',
      100: 'OPTICAL_FLOW',
      101: 'GLOBAL_VISION_POSITION_ESTIMATE',
      102: 'VISION_POSITION_ESTIMATE',
      103: 'VISION_SPEED_ESTIMATE',
      104: 'VICON_POSITION_ESTIMATE',
      105: 'HIGHRES_IMU',
      106: 'OPTICAL_FLOW_RAD',
      107: 'HIL_SENSOR',
      108: 'SIM_STATE',
      109: 'RADIO_STATUS',
      110: 'FILE_TRANSFER_PROTOCOL',
      111: 'TIMESYNC',
      112: 'CAMERA_TRIGGER',
      113: 'HIL_GPS',
      114: 'HIL_OPTICAL_FLOW',
      115: 'HIL_STATE_QUATERNION',
      116: 'SCALED_IMU2',
      117: 'LOG_REQUEST_LIST',
      118: 'LOG_ENTRY',
      119: 'LOG_REQUEST_DATA',
      120: 'LOG_DATA',
      121: 'LOG_ERASE',
      122: 'LOG_REQUEST_END',
      123: 'GPS_INJECT_DATA',
      124: 'GPS2_RAW',
      125: 'POWER_STATUS',
      126: 'SERIAL_CONTROL',
      127: 'GPS_RTK',
      128: 'GPS2_RTK',
      129: 'SCALED_IMU3',
      130: 'DATA_TRANSMISSION_HANDSHAKE',
      131: 'ENCAPSULATED_DATA',
      132: 'DISTANCE_SENSOR',
      133: 'TERRAIN_REQUEST',
      134: 'TERRAIN_DATA',
      135: 'TERRAIN_CHECK',
      136: 'TERRAIN_REPORT',
      137: 'SCALED_PRESSURE2',
      138: 'ATT_POS_MOCAP',
      139: 'SET_ACTUATOR_CONTROL_TARGET',
      140: 'ACTUATOR_CONTROL_TARGET',
      141: 'ALTITUDE',
      142: 'RESOURCE_REQUEST',
      143: 'SCALED_PRESSURE3',
      144: 'FOLLOW_TARGET',
      146: 'CONTROL_SYSTEM_STATE',
      147: 'BATTERY_STATUS',
      148: 'AUTOPILOT_VERSION',
      149: 'LANDING_TARGET',
      230: 'ESTIMATOR_STATUS',
      231: 'WIND_COV',
      232: 'GPS_INPUT',
      233: 'GPS_RTCM_DATA',
      234: 'HIGH_LATENCY',
      235: 'HIGH_LATENCY2',
      241: 'VIBRATION',
      242: 'HOME_POSITION',
      243: 'SET_HOME_POSITION',
      244: 'MESSAGE_INTERVAL',
      245: 'EXTENDED_SYS_STATE',
      246: 'ADSB_VEHICLE',
      247: 'COLLISION',
      248: 'V2_EXTENSION',
      249: 'MEMORY_VECT',
      250: 'DEBUG_VECT',
      251: 'NAMED_VALUE_FLOAT',
      252: 'NAMED_VALUE_INT',
      253: 'STATUSTEXT',
      254: 'DEBUG',
      256: 'SETUP_SIGNING',
      257: 'BUTTON_CHANGE',
      258: 'PLAY_TUNE',
      259: 'CAMERA_INFORMATION',
      260: 'CAMERA_SETTINGS',
      261: 'STORAGE_INFORMATION',
      262: 'CAMERA_CAPTURE_STATUS',
      263: 'CAMERA_IMAGE_CAPTURED',
      264: 'FLIGHT_INFORMATION',
      265: 'MOUNT_ORIENTATION',
      266: 'LOGGING_DATA',
      267: 'LOGGING_DATA_ACKED',
      268: 'LOGGING_ACK',
      269: 'VIDEO_STREAM_INFORMATION',
      270: 'VIDEO_STREAM_STATUS',
      299: 'WIFI_CONFIG_AP'
    };
    
    return messageNames[messageId] || `UNKNOWN_${messageId}`;
  }
}