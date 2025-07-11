// Auto-generated TypeScript message interfaces for common dialect

// The heartbeat message shows that a system or component is present and responding. The type and autopilot fields (along with the message component id), allow the receiving system to treat further messages from this system appropriately (e.g. by laying out the user interface based on the autopilot). This microservice is documented at https://mavlink.io/en/services/heartbeat.html
export interface MessageHeartbeat {
  // Vehicle or component type. For a flight controller component the vehicle type (quadrotor, helicopter, etc.). For other components the component type (e.g. camera, gimbal, etc.). This should be used in preference to component id for identifying the component type.
  Type: MAV_TYPE;
  // Autopilot type / class. Use MAV_AUTOPILOT_INVALID for components that are not flight controllers.
  Autopilot: MAV_AUTOPILOT;
  // System mode bitmap.
  BaseMode: MAV_MODE_FLAG;
  // A bitfield for use for autopilot-specific flags
  CustomMode: number;
  // System status flag.
  SystemStatus: MAV_STATE;
  // MAVLink version, not writable by user, gets added by protocol because of magic data type: uint8_t_mavlink_version
  MavlinkVersion: number;
}

// Version and capability of protocol version. This message can be requested with MAV_CMD_REQUEST_MESSAGE and is used as part of the handshaking to establish which MAVLink version should be used on the network. Every node should respond to a request for PROTOCOL_VERSION to enable the handshaking. Library implementers should consider adding this into the default decoding state machine to allow the protocol core to respond directly.
export interface MessageProtocolVersion {
  // Currently active MAVLink version number * 100: v1.0 is 100, v2.0 is 200, etc.
  Version: number;
  // Minimum MAVLink version supported
  MinVersion: number;
  // Maximum MAVLink version supported (set to the same value as version by default)
  MaxVersion: number;
  // The first 8 bytes (not characters printed in hex!) of the git hash.
  SpecVersionHash: number[];
  // The first 8 bytes (not characters printed in hex!) of the git hash.
  LibraryVersionHash: number[];
}

// The general system state. If the system is following the MAVLink standard, the system state is mainly defined by three orthogonal states/modes: The system mode, which is either LOCKED (motors shut down and locked), MANUAL (system under RC control), GUIDED (system with autonomous position control, position setpoint controlled manually) or AUTO (system guided by path/waypoint planner). The NAV_MODE defined the current flight state: LIFTOFF (often an open-loop maneuver), LANDING, WAYPOINTS or VECTOR. This represents the internal navigation state machine. The system status shows whether the system is currently active or not and if an emergency occurred. During the CRITICAL and EMERGENCY states the MAV is still considered to be active, but should start emergency procedures autonomously. After a failure occurred it should first move from active to critical to allow manual intervention and then move to emergency after a certain timeout.
export interface MessageSysStatus {
  // Bitmap showing which onboard controllers and sensors are present. Value of 0: not present. Value of 1: present.
  OnboardControlSensorsPresent: MAV_SYS_STATUS_SENSOR;
  // Bitmap showing which onboard controllers and sensors are enabled:  Value of 0: not enabled. Value of 1: enabled.
  OnboardControlSensorsEnabled: MAV_SYS_STATUS_SENSOR;
  // Bitmap showing which onboard controllers and sensors have an error (or are operational). Value of 0: error. Value of 1: healthy.
  OnboardControlSensorsHealth: MAV_SYS_STATUS_SENSOR;
  // Maximum usage in percent of the mainloop time. Values: [0-1000] - should always be below 1000
  Load: number;
  // Battery voltage, UINT16_MAX: Voltage not sent by autopilot
  VoltageBattery: number;
  // Battery current, -1: Current not sent by autopilot
  CurrentBattery: number;
  // Battery energy remaining, -1: Battery remaining energy not sent by autopilot
  BatteryRemaining: number;
  // Communication drop rate, (UART, I2C, SPI, CAN), dropped packets on all links (packets that were corrupted on reception on the MAV)
  DropRateComm: number;
  // Communication errors (UART, I2C, SPI, CAN), dropped packets on all links (packets that were corrupted on reception on the MAV)
  ErrorsComm: number;
  // Autopilot-specific errors
  ErrorsCount1: number;
  // Autopilot-specific errors
  ErrorsCount2: number;
  // Autopilot-specific errors
  ErrorsCount3: number;
  // Autopilot-specific errors
  ErrorsCount4: number;
  // Bitmap showing which onboard controllers and sensors are present. Value of 0: not present. Value of 1: present.
  OnboardControlSensorsPresentExtended: MAV_SYS_STATUS_SENSOR_EXTENDED;
  // Bitmap showing which onboard controllers and sensors are enabled:  Value of 0: not enabled. Value of 1: enabled.
  OnboardControlSensorsEnabledExtended: MAV_SYS_STATUS_SENSOR_EXTENDED;
  // Bitmap showing which onboard controllers and sensors have an error (or are operational). Value of 0: error. Value of 1: healthy.
  OnboardControlSensorsHealthExtended: MAV_SYS_STATUS_SENSOR_EXTENDED;
}

// The system time is the time of the master clock.
// This can be emitted by flight controllers, onboard computers, or other components in the MAVLink network.
// Components that are using a less reliable time source, such as a battery-backed real time clock, can choose to match their system clock to that of a SYSTEM_TYPE that indicates a more recent time.
// This allows more broadly accurate date stamping of logs, and so on.
// If precise time synchronization is needed then use TIMESYNC instead.
export interface MessageSystemTime {
  // Timestamp (UNIX epoch time).
  TimeUnixUsec: number;
  // Timestamp (time since system boot).
  TimeBootMs: number;
}

// A ping message either requesting or responding to a ping. This allows to measure the system latencies, including serial port, radio modem and UDP connections. The ping microservice is documented at https://mavlink.io/en/services/ping.html
export interface MessagePing {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // PING sequence
  Seq: number;
  // 0: request ping from all receiving systems. If greater than 0: message is a ping response and number is the system id of the requesting system
  TargetSystem: number;
  // 0: request ping from all receiving components. If greater than 0: message is a ping response and number is the component id of the requesting component.
  TargetComponent: number;
}

// Request to control this MAV
export interface MessageChangeOperatorControl {
  // System the GCS requests control for
  TargetSystem: number;
  // 0: request control of this MAV, 1: Release control of this MAV
  ControlRequest: number;
  // 0: key as plaintext, 1-255: future, different hashing/encryption variants. The GCS should in general use the safest mode possible initially and then gradually move down the encryption level if it gets a NACK message indicating an encryption mismatch.
  Version: number;
  // Password / Key, depending on version plaintext or encrypted. 25 or less characters, NULL terminated. The characters may involve A-Z, a-z, 0-9, and &quot;!?,.-&quot;
  Passkey: string;
}

// Accept / deny control of this MAV
export interface MessageChangeOperatorControlAck {
  // ID of the GCS this message
  GcsSystemId: number;
  // 0: request control of this MAV, 1: Release control of this MAV
  ControlRequest: number;
  // 0: ACK, 1: NACK: Wrong passkey, 2: NACK: Unsupported passkey encryption method, 3: NACK: Already under control
  Ack: number;
}

// Emit an encrypted signature / key identifying this system. PLEASE NOTE: This protocol has been kept simple, so transmitting the key requires an encrypted channel for true safety.
export interface MessageAuthKey {
  // key
  Key: string;
}

// Status generated in each node in the communication chain and injected into MAVLink stream.
export interface MessageLinkNodeStatus {
  // Timestamp (time since system boot).
  Timestamp: number;
  // Remaining free transmit buffer space
  TxBuf: number;
  // Remaining free receive buffer space
  RxBuf: number;
  // Transmit rate
  TxRate: number;
  // Receive rate
  RxRate: number;
  // Number of bytes that could not be parsed correctly.
  RxParseErr: number;
  // Transmit buffer overflows. This number wraps around as it reaches UINT16_MAX
  TxOverflows: number;
  // Receive buffer overflows. This number wraps around as it reaches UINT16_MAX
  RxOverflows: number;
  // Messages sent
  MessagesSent: number;
  // Messages received (estimated from counting seq)
  MessagesReceived: number;
  // Messages lost (estimated from counting seq)
  MessagesLost: number;
}

// Set the system mode, as defined by enum MAV_MODE. There is no target component id as the mode is by definition for the overall aircraft, not only for one component.
export interface MessageSetMode {
  // The system setting the mode
  TargetSystem: number;
  // The new base mode.
  BaseMode: MAV_MODE;
  // The new autopilot-specific mode. This field can be ignored by an autopilot.
  CustomMode: number;
}

// Request to read the onboard parameter with the param_id string id. Onboard parameters are stored as key[const char*] -&gt; value[float]. This allows to send a parameter to any other component (such as the GCS) without the need of previous knowledge of possible parameter names. Thus the same GCS can store different parameters for different autopilots. See also https://mavlink.io/en/services/parameter.html for a full documentation of QGroundControl and IMU code.
export interface MessageParamRequestRead {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // Onboard parameter id, terminated by NULL if the length is less than 16 human-readable chars and WITHOUT null termination (NULL) byte if the length is exactly 16 chars - applications have to provide 16+1 bytes storage if the ID is stored as string
  ParamId: string;
  // Parameter index. Send -1 to use the param ID field as identifier (else the param id will be ignored)
  ParamIndex: number;
}

// Request all parameters of this component. After this request, all parameters are emitted. The parameter microservice is documented at https://mavlink.io/en/services/parameter.html
export interface MessageParamRequestList {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
}

// Emit the value of a onboard parameter. The inclusion of param_count and param_index in the message allows the recipient to keep track of received parameters and allows him to re-request missing parameters after a loss or timeout. The parameter microservice is documented at https://mavlink.io/en/services/parameter.html
export interface MessageParamValue {
  // Onboard parameter id, terminated by NULL if the length is less than 16 human-readable chars and WITHOUT null termination (NULL) byte if the length is exactly 16 chars - applications have to provide 16+1 bytes storage if the ID is stored as string
  ParamId: string;
  // Onboard parameter value
  ParamValue: number;
  // Onboard parameter type.
  ParamType: MAV_PARAM_TYPE;
  // Total number of onboard parameters
  ParamCount: number;
  // Index of this onboard parameter
  ParamIndex: number;
}

// Set a parameter value (write new value to permanent storage).
// The receiving component should acknowledge the new parameter value by broadcasting a PARAM_VALUE message (broadcasting ensures that multiple GCS all have an up-to-date list of all parameters). If the sending GCS did not receive a PARAM_VALUE within its timeout time, it should re-send the PARAM_SET message. The parameter microservice is documented at https://mavlink.io/en/services/parameter.html.
export interface MessageParamSet {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // Onboard parameter id, terminated by NULL if the length is less than 16 human-readable chars and WITHOUT null termination (NULL) byte if the length is exactly 16 chars - applications have to provide 16+1 bytes storage if the ID is stored as string
  ParamId: string;
  // Onboard parameter value
  ParamValue: number;
  // Onboard parameter type.
  ParamType: MAV_PARAM_TYPE;
}

// The global position, as returned by the Global Positioning System (GPS). This is
// NOT the global position estimate of the system, but rather a RAW sensor value. See message GLOBAL_POSITION_INT for the global position estimate.
export interface MessageGpsRawInt {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // GPS fix type.
  FixType: GPS_FIX_TYPE;
  // Latitude (WGS84, EGM96 ellipsoid)
  Lat: number;
  // Longitude (WGS84, EGM96 ellipsoid)
  Lon: number;
  // Altitude (MSL). Positive for up. Note that virtually all GPS modules provide the MSL altitude in addition to the WGS84 altitude.
  Alt: number;
  // GPS HDOP horizontal dilution of position (unitless * 100). If unknown, set to: UINT16_MAX
  Eph: number;
  // GPS VDOP vertical dilution of position (unitless * 100). If unknown, set to: UINT16_MAX
  Epv: number;
  // GPS ground speed. If unknown, set to: UINT16_MAX
  Vel: number;
  // Course over ground (NOT heading, but direction of movement) in degrees * 100, 0.0..359.99 degrees. If unknown, set to: UINT16_MAX
  Cog: number;
  // Number of satellites visible. If unknown, set to UINT8_MAX
  SatellitesVisible: number;
  // Altitude (above WGS84, EGM96 ellipsoid). Positive for up.
  AltEllipsoid: number;
  // Position uncertainty.
  HAcc: number;
  // Altitude uncertainty.
  VAcc: number;
  // Speed uncertainty.
  VelAcc: number;
  // Heading / track uncertainty
  HdgAcc: number;
  // Yaw in earth frame from north. Use 0 if this GPS does not provide yaw. Use UINT16_MAX if this GPS is configured to provide yaw and is currently unable to provide it. Use 36000 for north.
  Yaw: number;
}

// The positioning status, as reported by GPS. This message is intended to display status information about each satellite visible to the receiver. See message GLOBAL_POSITION_INT for the global position estimate. This message can contain information for up to 20 satellites.
export interface MessageGpsStatus {
  // Number of satellites visible
  SatellitesVisible: number;
  // Global satellite ID
  SatellitePrn: number[];
  // 0: Satellite not used, 1: used for localization
  SatelliteUsed: number[];
  // Elevation (0: right on top of receiver, 90: on the horizon) of satellite
  SatelliteElevation: number[];
  // Direction of satellite, 0: 0 deg, 255: 360 deg.
  SatelliteAzimuth: number[];
  // Signal to noise ratio of satellite
  SatelliteSnr: number[];
}

// The RAW IMU readings for the usual 9DOF sensor setup. This message should contain the scaled values to the described units
export interface MessageScaledImu {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // X acceleration
  Xacc: number;
  // Y acceleration
  Yacc: number;
  // Z acceleration
  Zacc: number;
  // Angular speed around X axis
  Xgyro: number;
  // Angular speed around Y axis
  Ygyro: number;
  // Angular speed around Z axis
  Zgyro: number;
  // X Magnetic field
  Xmag: number;
  // Y Magnetic field
  Ymag: number;
  // Z Magnetic field
  Zmag: number;
  // Temperature, 0: IMU does not provide temperature values. If the IMU is at 0C it must send 1 (0.01C).
  Temperature: number;
}

// The RAW IMU readings for a 9DOF sensor, which is identified by the id (default IMU1). This message should always contain the true raw values without any scaling to allow data capture and system debugging.
export interface MessageRawImu {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // X acceleration (raw)
  Xacc: number;
  // Y acceleration (raw)
  Yacc: number;
  // Z acceleration (raw)
  Zacc: number;
  // Angular speed around X axis (raw)
  Xgyro: number;
  // Angular speed around Y axis (raw)
  Ygyro: number;
  // Angular speed around Z axis (raw)
  Zgyro: number;
  // X Magnetic field (raw)
  Xmag: number;
  // Y Magnetic field (raw)
  Ymag: number;
  // Z Magnetic field (raw)
  Zmag: number;
  // Id. Ids are numbered from 0 and map to IMUs numbered from 1 (e.g. IMU1 will have a message with id&#x3D;0)
  Id: number;
  // Temperature, 0: IMU does not provide temperature values. If the IMU is at 0C it must send 1 (0.01C).
  Temperature: number;
}

// The RAW pressure readings for the typical setup of one absolute pressure and one differential pressure sensor. The sensor values should be the raw, UNSCALED ADC values.
export interface MessageRawPressure {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // Absolute pressure (raw)
  PressAbs: number;
  // Differential pressure 1 (raw, 0 if nonexistent)
  PressDiff1: number;
  // Differential pressure 2 (raw, 0 if nonexistent)
  PressDiff2: number;
  // Raw Temperature measurement (raw)
  Temperature: number;
}

// The pressure readings for the typical setup of one absolute and differential pressure sensor. The units are as specified in each field.
export interface MessageScaledPressure {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // Absolute pressure
  PressAbs: number;
  // Differential pressure 1
  PressDiff: number;
  // Absolute pressure temperature
  Temperature: number;
  // Differential pressure temperature (0, if not available). Report values of 0 (or 1) as 1 cdegC.
  TemperaturePressDiff: number;
}

// The attitude in the aeronautical frame (right-handed, Z-down, Y-right, X-front, ZYX, intrinsic).
export interface MessageAttitude {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // Roll angle (-pi..+pi)
  Roll: number;
  // Pitch angle (-pi..+pi)
  Pitch: number;
  // Yaw angle (-pi..+pi)
  Yaw: number;
  // Roll angular speed
  Rollspeed: number;
  // Pitch angular speed
  Pitchspeed: number;
  // Yaw angular speed
  Yawspeed: number;
}

// The attitude in the aeronautical frame (right-handed, Z-down, X-front, Y-right), expressed as quaternion. Quaternion order is w, x, y, z and a zero rotation would be expressed as (1 0 0 0).
export interface MessageAttitudeQuaternion {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // Quaternion component 1, w (1 in null-rotation)
  Q1: number;
  // Quaternion component 2, x (0 in null-rotation)
  Q2: number;
  // Quaternion component 3, y (0 in null-rotation)
  Q3: number;
  // Quaternion component 4, z (0 in null-rotation)
  Q4: number;
  // Roll angular speed
  Rollspeed: number;
  // Pitch angular speed
  Pitchspeed: number;
  // Yaw angular speed
  Yawspeed: number;
  // Rotation offset by which the attitude quaternion and angular speed vector should be rotated for user display (quaternion with [w, x, y, z] order, zero-rotation is [1, 0, 0, 0], send [0, 0, 0, 0] if field not supported). This field is intended for systems in which the reference attitude may change during flight. For example, tailsitters VTOLs rotate their reference attitude by 90 degrees between hover mode and fixed wing mode, thus repr_offset_q is equal to [1, 0, 0, 0] in hover mode and equal to [0.7071, 0, 0.7071, 0] in fixed wing mode.
  ReprOffsetQ: number[];
}

// The filtered local position (e.g. fused computer vision and accelerometers). Coordinate frame is right-handed, Z-axis down (aeronautical frame, NED / north-east-down convention)
export interface MessageLocalPositionNed {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // X Position
  X: number;
  // Y Position
  Y: number;
  // Z Position
  Z: number;
  // X Speed
  Vx: number;
  // Y Speed
  Vy: number;
  // Z Speed
  Vz: number;
}

// The filtered global position (e.g. fused GPS and accelerometers). The position is in GPS-frame (right-handed, Z-up). It
// is designed as scaled integer message since the resolution of float is not sufficient.
export interface MessageGlobalPositionInt {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // Latitude, expressed
  Lat: number;
  // Longitude, expressed
  Lon: number;
  // Altitude (MSL). Note that virtually all GPS modules provide both WGS84 and MSL.
  Alt: number;
  // Altitude above home
  RelativeAlt: number;
  // Ground X Speed (Latitude, positive north)
  Vx: number;
  // Ground Y Speed (Longitude, positive east)
  Vy: number;
  // Ground Z Speed (Altitude, positive down)
  Vz: number;
  // Vehicle heading (yaw angle), 0.0..359.99 degrees. If unknown, set to: UINT16_MAX
  Hdg: number;
}

// The scaled values of the RC channels received: (-100%) -10000, (0%) 0, (100%) 10000. Channels that are inactive should be set to INT16_MAX.
export interface MessageRcChannelsScaled {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // Servo output port (set of 8 outputs &#x3D; 1 port). Flight stacks running on Pixhawk should use: 0 &#x3D; MAIN, 1 &#x3D; AUX.
  Port: number;
  // RC channel 1 value scaled.
  Chan1Scaled: number;
  // RC channel 2 value scaled.
  Chan2Scaled: number;
  // RC channel 3 value scaled.
  Chan3Scaled: number;
  // RC channel 4 value scaled.
  Chan4Scaled: number;
  // RC channel 5 value scaled.
  Chan5Scaled: number;
  // RC channel 6 value scaled.
  Chan6Scaled: number;
  // RC channel 7 value scaled.
  Chan7Scaled: number;
  // RC channel 8 value scaled.
  Chan8Scaled: number;
  // Receive signal strength indicator in device-dependent units/scale. Values: [0-254], UINT8_MAX: invalid/unknown.
  Rssi: number;
}

// The RAW values of the RC channels received. The standard PPM modulation is as follows: 1000 microseconds: 0%, 2000 microseconds: 100%. A value of UINT16_MAX implies the channel is unused. Individual receivers/transmitters might violate this specification.
export interface MessageRcChannelsRaw {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // Servo output port (set of 8 outputs &#x3D; 1 port). Flight stacks running on Pixhawk should use: 0 &#x3D; MAIN, 1 &#x3D; AUX.
  Port: number;
  // RC channel 1 value.
  Chan1Raw: number;
  // RC channel 2 value.
  Chan2Raw: number;
  // RC channel 3 value.
  Chan3Raw: number;
  // RC channel 4 value.
  Chan4Raw: number;
  // RC channel 5 value.
  Chan5Raw: number;
  // RC channel 6 value.
  Chan6Raw: number;
  // RC channel 7 value.
  Chan7Raw: number;
  // RC channel 8 value.
  Chan8Raw: number;
  // Receive signal strength indicator in device-dependent units/scale. Values: [0-254], UINT8_MAX: invalid/unknown.
  Rssi: number;
}

// Superseded by ACTUATOR_OUTPUT_STATUS. The RAW values of the servo outputs (for RC input from the remote, use the RC_CHANNELS messages). The standard PPM modulation is as follows: 1000 microseconds: 0%, 2000 microseconds: 100%.
export interface MessageServoOutputRaw {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // Servo output port (set of 8 outputs &#x3D; 1 port). Flight stacks running on Pixhawk should use: 0 &#x3D; MAIN, 1 &#x3D; AUX.
  Port: number;
  // Servo output 1 value
  Servo1Raw: number;
  // Servo output 2 value
  Servo2Raw: number;
  // Servo output 3 value
  Servo3Raw: number;
  // Servo output 4 value
  Servo4Raw: number;
  // Servo output 5 value
  Servo5Raw: number;
  // Servo output 6 value
  Servo6Raw: number;
  // Servo output 7 value
  Servo7Raw: number;
  // Servo output 8 value
  Servo8Raw: number;
  // Servo output 9 value
  Servo9Raw: number;
  // Servo output 10 value
  Servo10Raw: number;
  // Servo output 11 value
  Servo11Raw: number;
  // Servo output 12 value
  Servo12Raw: number;
  // Servo output 13 value
  Servo13Raw: number;
  // Servo output 14 value
  Servo14Raw: number;
  // Servo output 15 value
  Servo15Raw: number;
  // Servo output 16 value
  Servo16Raw: number;
}

// Request a partial list of mission items from the system/component. https://mavlink.io/en/services/mission.html. If start and end index are the same, just send one waypoint.
export interface MessageMissionRequestPartialList {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // Start index
  StartIndex: number;
  // End index, -1 by default (-1: send list to end). Else a valid index of the list
  EndIndex: number;
  // Mission type.
  MissionType: MAV_MISSION_TYPE;
}

// This message is sent to the MAV to write a partial list. If start index &#x3D;&#x3D; end index, only one item will be transmitted / updated. If the start index is NOT 0 and above the current list size, this request should be REJECTED!
export interface MessageMissionWritePartialList {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // Start index. Must be smaller / equal to the largest index of the current onboard list.
  StartIndex: number;
  // End index, equal or greater than start index.
  EndIndex: number;
  // Mission type.
  MissionType: MAV_MISSION_TYPE;
}

// Message encoding a mission item. This message is emitted to announce
// the presence of a mission item and to set a mission item on the system. The mission item can be either in x, y, z meters (type: LOCAL) or x:lat, y:lon, z:altitude. Local frame is Z-down, right handed (NED), global frame is Z-up, right handed (ENU). NaN may be used to indicate an optional/default value (e.g. to use the system&#x27;s current latitude or yaw rather than a specific value). See also https://mavlink.io/en/services/mission.html.
export interface MessageMissionItem {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // Sequence
  Seq: number;
  // The coordinate system of the waypoint.
  Frame: MAV_FRAME;
  // The scheduled action for the waypoint.
  Command: MAV_CMD;
  // false:0, true:1
  Current: number;
  // Autocontinue to next waypoint. 0: false, 1: true. Set false to pause mission after the item completes.
  Autocontinue: number;
  // PARAM1, see MAV_CMD enum
  Param1: number;
  // PARAM2, see MAV_CMD enum
  Param2: number;
  // PARAM3, see MAV_CMD enum
  Param3: number;
  // PARAM4, see MAV_CMD enum
  Param4: number;
  // PARAM5 / local: X coordinate, global: latitude
  X: number;
  // PARAM6 / local: Y coordinate, global: longitude
  Y: number;
  // PARAM7 / local: Z coordinate, global: altitude (relative or absolute, depending on frame).
  Z: number;
  // Mission type.
  MissionType: MAV_MISSION_TYPE;
}

// Request the information of the mission item with the sequence number seq. The response of the system to this message should be a MISSION_ITEM message. https://mavlink.io/en/services/mission.html
export interface MessageMissionRequest {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // Sequence
  Seq: number;
  // Mission type.
  MissionType: MAV_MISSION_TYPE;
}

// Set the mission item with sequence number seq as the current item and emit MISSION_CURRENT (whether or not the mission number changed).
// If a mission is currently being executed, the system will continue to this new mission item on the shortest path, skipping any intermediate mission items.
// Note that mission jump repeat counters are not reset (see MAV_CMD_DO_JUMP param2).
// This message may trigger a mission state-machine change on some systems: for example from MISSION_STATE_NOT_STARTED or MISSION_STATE_PAUSED to MISSION_STATE_ACTIVE.
// If the system is in mission mode, on those systems this command might therefore start, restart or resume the mission.
// If the system is not in mission mode this message must not trigger a switch to mission mode.
export interface MessageMissionSetCurrent {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // Sequence
  Seq: number;
}

// Message that announces the sequence number of the current target mission item (that the system will fly towards/execute when the mission is running).
// This message should be streamed all the time (nominally at 1Hz).
// This message should be emitted following a call to MAV_CMD_DO_SET_MISSION_CURRENT or MISSION_SET_CURRENT.
export interface MessageMissionCurrent {
  // Sequence
  Seq: number;
  // Total number of mission items on vehicle (on last item, sequence &#x3D;&#x3D; total). If the autopilot stores its home location as part of the mission this will be excluded from the total. 0: Not supported, UINT16_MAX if no mission is present on the vehicle.
  Total: number;
  // Mission state machine state. MISSION_STATE_UNKNOWN if state reporting not supported.
  MissionState: MISSION_STATE;
  // Vehicle is in a mode that can execute mission items or suspended. 0: Unknown, 1: In mission mode, 2: Suspended (not in mission mode).
  MissionMode: number;
  // Id of current on-vehicle mission plan, or 0 if IDs are not supported or there is no mission loaded. GCS can use this to track changes to the mission plan type. The same value is returned on mission upload (in the MISSION_ACK).
  MissionId: number;
  // Id of current on-vehicle fence plan, or 0 if IDs are not supported or there is no fence loaded. GCS can use this to track changes to the fence plan type. The same value is returned on fence upload (in the MISSION_ACK).
  FenceId: number;
  // Id of current on-vehicle rally point plan, or 0 if IDs are not supported or there are no rally points loaded. GCS can use this to track changes to the rally point plan type. The same value is returned on rally point upload (in the MISSION_ACK).
  RallyPointsId: number;
}

// Request the overall list of mission items from the system/component.
export interface MessageMissionRequestList {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // Mission type.
  MissionType: MAV_MISSION_TYPE;
}

// This message is emitted as response to MISSION_REQUEST_LIST by the MAV and to initiate a write transaction. The GCS can then request the individual mission item based on the knowledge of the total number of waypoints.
export interface MessageMissionCount {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // Number of mission items in the sequence
  Count: number;
  // Mission type.
  MissionType: MAV_MISSION_TYPE;
  // Id of current on-vehicle mission, fence, or rally point plan (on download from vehicle).
  // This field is used when downloading a plan from a vehicle to a GCS.
  // 0 on upload to the vehicle from GCS.
  // 0 if plan ids are not supported.
  // The current on-vehicle plan ids are streamed in &#x60;MISSION_CURRENT&#x60;, allowing a GCS to determine if any part of the plan has changed and needs to be re-uploaded.
  // The ids are recalculated by the vehicle when any part of the on-vehicle plan changes (when a new plan is uploaded, the vehicle returns the new id to the GCS in MISSION_ACK).
  OpaqueId: number;
}

// Delete all mission items at once.
export interface MessageMissionClearAll {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // Mission type.
  MissionType: MAV_MISSION_TYPE;
}

// A certain mission item has been reached. The system will either hold this position (or circle on the orbit) or (if the autocontinue on the WP was set) continue to the next waypoint.
export interface MessageMissionItemReached {
  // Sequence
  Seq: number;
}

// Acknowledgment message during waypoint handling. The type field states if this message is a positive ack (type&#x3D;0) or if an error happened (type&#x3D;non-zero).
export interface MessageMissionAck {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // Mission result.
  Type: MAV_MISSION_RESULT;
  // Mission type.
  MissionType: MAV_MISSION_TYPE;
  // Id of new on-vehicle mission, fence, or rally point plan (on upload to vehicle).
  // The id is calculated and returned by a vehicle when a new plan is uploaded by a GCS.
  // The only requirement on the id is that it must change when there is any change to the on-vehicle plan type (there is no requirement that the id be globally unique).
  // 0 on download from the vehicle to the GCS (on download the ID is set in MISSION_COUNT).
  // 0 if plan ids are not supported.
  // The current on-vehicle plan ids are streamed in &#x60;MISSION_CURRENT&#x60;, allowing a GCS to determine if any part of the plan has changed and needs to be re-uploaded.
  OpaqueId: number;
}

// Sets the GPS coordinates of the vehicle local origin (0,0,0) position. Vehicle should emit GPS_GLOBAL_ORIGIN irrespective of whether the origin is changed. This enables transform between the local coordinate frame and the global (GPS) coordinate frame, which may be necessary when (for example) indoor and outdoor settings are connected and the MAV should move from in- to outdoor.
export interface MessageSetGpsGlobalOrigin {
  // System ID
  TargetSystem: number;
  // Latitude (WGS84)
  Latitude: number;
  // Longitude (WGS84)
  Longitude: number;
  // Altitude (MSL). Positive for up.
  Altitude: number;
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
}

// Publishes the GPS coordinates of the vehicle local origin (0,0,0) position. Emitted whenever a new GPS-Local position mapping is requested or set - e.g. following SET_GPS_GLOBAL_ORIGIN message.
export interface MessageGpsGlobalOrigin {
  // Latitude (WGS84)
  Latitude: number;
  // Longitude (WGS84)
  Longitude: number;
  // Altitude (MSL). Positive for up.
  Altitude: number;
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
}

// Bind a RC channel to a parameter. The parameter should change according to the RC channel value.
export interface MessageParamMapRc {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // Onboard parameter id, terminated by NULL if the length is less than 16 human-readable chars and WITHOUT null termination (NULL) byte if the length is exactly 16 chars - applications have to provide 16+1 bytes storage if the ID is stored as string
  ParamId: string;
  // Parameter index. Send -1 to use the param ID field as identifier (else the param id will be ignored), send -2 to disable any existing map for this rc_channel_index.
  ParamIndex: number;
  // Index of parameter RC channel. Not equal to the RC channel id. Typically corresponds to a potentiometer-knob on the RC.
  ParameterRcChannelIndex: number;
  // Initial parameter value
  ParamValue0: number;
  // Scale, maps the RC range [-1, 1] to a parameter value
  Scale: number;
  // Minimum param value. The protocol does not define if this overwrites an onboard minimum value. (Depends on implementation)
  ParamValueMin: number;
  // Maximum param value. The protocol does not define if this overwrites an onboard maximum value. (Depends on implementation)
  ParamValueMax: number;
}

// Request the information of the mission item with the sequence number seq. The response of the system to this message should be a MISSION_ITEM_INT message. https://mavlink.io/en/services/mission.html
export interface MessageMissionRequestInt {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // Sequence
  Seq: number;
  // Mission type.
  MissionType: MAV_MISSION_TYPE;
}

// Set a safety zone (volume), which is defined by two corners of a cube. This message can be used to tell the MAV which setpoints/waypoints to accept and which to reject. Safety areas are often enforced by national or competition regulations.
export interface MessageSafetySetAllowedArea {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // Coordinate frame. Can be either global, GPS, right-handed with Z axis up or local, right handed, Z axis down.
  Frame: MAV_FRAME;
  // x position 1 / Latitude 1
  P1x: number;
  // y position 1 / Longitude 1
  P1y: number;
  // z position 1 / Altitude 1
  P1z: number;
  // x position 2 / Latitude 2
  P2x: number;
  // y position 2 / Longitude 2
  P2y: number;
  // z position 2 / Altitude 2
  P2z: number;
}

// Read out the safety zone the MAV currently assumes.
export interface MessageSafetyAllowedArea {
  // Coordinate frame. Can be either global, GPS, right-handed with Z axis up or local, right handed, Z axis down.
  Frame: MAV_FRAME;
  // x position 1 / Latitude 1
  P1x: number;
  // y position 1 / Longitude 1
  P1y: number;
  // z position 1 / Altitude 1
  P1z: number;
  // x position 2 / Latitude 2
  P2x: number;
  // y position 2 / Longitude 2
  P2y: number;
  // z position 2 / Altitude 2
  P2z: number;
}

// The attitude in the aeronautical frame (right-handed, Z-down, X-front, Y-right), expressed as quaternion. Quaternion order is w, x, y, z and a zero rotation would be expressed as (1 0 0 0).
export interface MessageAttitudeQuaternionCov {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // Quaternion components, w, x, y, z (1 0 0 0 is the null-rotation)
  Q: number[];
  // Roll angular speed
  Rollspeed: number;
  // Pitch angular speed
  Pitchspeed: number;
  // Yaw angular speed
  Yawspeed: number;
  // Row-major representation of a 3x3 attitude covariance matrix (states: roll, pitch, yaw; first three entries are the first ROW, next three entries are the second row, etc.). If unknown, assign NaN value to first element in the array.
  Covariance: number[];
}

// The state of the navigation and position controller.
export interface MessageNavControllerOutput {
  // Current desired roll
  NavRoll: number;
  // Current desired pitch
  NavPitch: number;
  // Current desired heading
  NavBearing: number;
  // Bearing to current waypoint/target
  TargetBearing: number;
  // Distance to active waypoint
  WpDist: number;
  // Current altitude error
  AltError: number;
  // Current airspeed error
  AspdError: number;
  // Current crosstrack error on x-y plane
  XtrackError: number;
}

// The filtered global position (e.g. fused GPS and accelerometers). The position is in GPS-frame (right-handed, Z-up). It  is designed as scaled integer message since the resolution of float is not sufficient. NOTE: This message is intended for onboard networks / companion computers and higher-bandwidth links and optimized for accuracy and completeness. Please use the GLOBAL_POSITION_INT message for a minimal subset.
export interface MessageGlobalPositionIntCov {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // Class id of the estimator this estimate originated from.
  EstimatorType: MAV_ESTIMATOR_TYPE;
  // Latitude
  Lat: number;
  // Longitude
  Lon: number;
  // Altitude in meters above MSL
  Alt: number;
  // Altitude above ground
  RelativeAlt: number;
  // Ground X Speed (Latitude)
  Vx: number;
  // Ground Y Speed (Longitude)
  Vy: number;
  // Ground Z Speed (Altitude)
  Vz: number;
  // Row-major representation of a 6x6 position and velocity 6x6 cross-covariance matrix (states: lat, lon, alt, vx, vy, vz; first six entries are the first ROW, next six entries are the second row, etc.). If unknown, assign NaN value to first element in the array.
  Covariance: number[];
}

// The filtered local position (e.g. fused computer vision and accelerometers). Coordinate frame is right-handed, Z-axis down (aeronautical frame, NED / north-east-down convention)
export interface MessageLocalPositionNedCov {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // Class id of the estimator this estimate originated from.
  EstimatorType: MAV_ESTIMATOR_TYPE;
  // X Position
  X: number;
  // Y Position
  Y: number;
  // Z Position
  Z: number;
  // X Speed
  Vx: number;
  // Y Speed
  Vy: number;
  // Z Speed
  Vz: number;
  // X Acceleration
  Ax: number;
  // Y Acceleration
  Ay: number;
  // Z Acceleration
  Az: number;
  // Row-major representation of position, velocity and acceleration 9x9 cross-covariance matrix upper right triangle (states: x, y, z, vx, vy, vz, ax, ay, az; first nine entries are the first ROW, next eight entries are the second row, etc.). If unknown, assign NaN value to first element in the array.
  Covariance: number[];
}

// The PPM values of the RC channels received. The standard PPM modulation is as follows: 1000 microseconds: 0%, 2000 microseconds: 100%.  A value of UINT16_MAX implies the channel is unused. Individual receivers/transmitters might violate this specification.
export interface MessageRcChannels {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // Total number of RC channels being received. This can be larger than 18, indicating that more channels are available but not given in this message. This value should be 0 when no RC channels are available.
  Chancount: number;
  // RC channel 1 value.
  Chan1Raw: number;
  // RC channel 2 value.
  Chan2Raw: number;
  // RC channel 3 value.
  Chan3Raw: number;
  // RC channel 4 value.
  Chan4Raw: number;
  // RC channel 5 value.
  Chan5Raw: number;
  // RC channel 6 value.
  Chan6Raw: number;
  // RC channel 7 value.
  Chan7Raw: number;
  // RC channel 8 value.
  Chan8Raw: number;
  // RC channel 9 value.
  Chan9Raw: number;
  // RC channel 10 value.
  Chan10Raw: number;
  // RC channel 11 value.
  Chan11Raw: number;
  // RC channel 12 value.
  Chan12Raw: number;
  // RC channel 13 value.
  Chan13Raw: number;
  // RC channel 14 value.
  Chan14Raw: number;
  // RC channel 15 value.
  Chan15Raw: number;
  // RC channel 16 value.
  Chan16Raw: number;
  // RC channel 17 value.
  Chan17Raw: number;
  // RC channel 18 value.
  Chan18Raw: number;
  // Receive signal strength indicator in device-dependent units/scale. Values: [0-254], UINT8_MAX: invalid/unknown.
  Rssi: number;
}

// Request a data stream.
export interface MessageRequestDataStream {
  // The target requested to send the message stream.
  TargetSystem: number;
  // The target requested to send the message stream.
  TargetComponent: number;
  // The ID of the requested data stream
  ReqStreamId: number;
  // The requested message rate
  ReqMessageRate: number;
  // 1 to start sending, 0 to stop sending.
  StartStop: number;
}

// Data stream status information.
export interface MessageDataStream {
  // The ID of the requested data stream
  StreamId: number;
  // The message rate
  MessageRate: number;
  // 1 stream is enabled, 0 stream is stopped.
  OnOff: number;
}

// This message provides an API for manually controlling the vehicle using standard joystick axes nomenclature, along with a joystick-like input device. Unused axes can be disabled and buttons states are transmitted as individual on/off bits of a bitmask
export interface MessageManualControl {
  // The system to be controlled.
  Target: number;
  // X-axis, normalized to the range [-1000,1000]. A value of INT16_MAX indicates that this axis is invalid. Generally corresponds to forward(1000)-backward(-1000) movement on a joystick and the pitch of a vehicle.
  X: number;
  // Y-axis, normalized to the range [-1000,1000]. A value of INT16_MAX indicates that this axis is invalid. Generally corresponds to left(-1000)-right(1000) movement on a joystick and the roll of a vehicle.
  Y: number;
  // Z-axis, normalized to the range [-1000,1000]. A value of INT16_MAX indicates that this axis is invalid. Generally corresponds to a separate slider movement with maximum being 1000 and minimum being -1000 on a joystick and the thrust of a vehicle. Positive values are positive thrust, negative values are negative thrust.
  Z: number;
  // R-axis, normalized to the range [-1000,1000]. A value of INT16_MAX indicates that this axis is invalid. Generally corresponds to a twisting of the joystick, with counter-clockwise being 1000 and clockwise being -1000, and the yaw of a vehicle.
  R: number;
  // A bitfield corresponding to the joystick buttons&#x27; 0-15 current state, 1 for pressed, 0 for released. The lowest bit corresponds to Button 1.
  Buttons: number;
  // A bitfield corresponding to the joystick buttons&#x27; 16-31 current state, 1 for pressed, 0 for released. The lowest bit corresponds to Button 16.
  Buttons2: number;
  // Set bits to 1 to indicate which of the following extension fields contain valid data: bit 0: pitch, bit 1: roll, bit 2: aux1, bit 3: aux2, bit 4: aux3, bit 5: aux4, bit 6: aux5, bit 7: aux6
  EnabledExtensions: number;
  // Pitch-only-axis, normalized to the range [-1000,1000]. Generally corresponds to pitch on vehicles with additional degrees of freedom. Valid if bit 0 of enabled_extensions field is set. Set to 0 if invalid.
  S: number;
  // Roll-only-axis, normalized to the range [-1000,1000]. Generally corresponds to roll on vehicles with additional degrees of freedom. Valid if bit 1 of enabled_extensions field is set. Set to 0 if invalid.
  T: number;
  // Aux continuous input field 1. Normalized in the range [-1000,1000]. Purpose defined by recipient. Valid data if bit 2 of enabled_extensions field is set. 0 if bit 2 is unset.
  Aux1: number;
  // Aux continuous input field 2. Normalized in the range [-1000,1000]. Purpose defined by recipient. Valid data if bit 3 of enabled_extensions field is set. 0 if bit 3 is unset.
  Aux2: number;
  // Aux continuous input field 3. Normalized in the range [-1000,1000]. Purpose defined by recipient. Valid data if bit 4 of enabled_extensions field is set. 0 if bit 4 is unset.
  Aux3: number;
  // Aux continuous input field 4. Normalized in the range [-1000,1000]. Purpose defined by recipient. Valid data if bit 5 of enabled_extensions field is set. 0 if bit 5 is unset.
  Aux4: number;
  // Aux continuous input field 5. Normalized in the range [-1000,1000]. Purpose defined by recipient. Valid data if bit 6 of enabled_extensions field is set. 0 if bit 6 is unset.
  Aux5: number;
  // Aux continuous input field 6. Normalized in the range [-1000,1000]. Purpose defined by recipient. Valid data if bit 7 of enabled_extensions field is set. 0 if bit 7 is unset.
  Aux6: number;
}

// The RAW values of the RC channels sent to the MAV to override info received from the RC radio. The standard PPM modulation is as follows: 1000 microseconds: 0%, 2000 microseconds: 100%. Individual receivers/transmitters might violate this specification.  Note carefully the semantic differences between the first 8 channels and the subsequent channels
export interface MessageRcChannelsOverride {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // RC channel 1 value. A value of UINT16_MAX means to ignore this field. A value of 0 means to release this channel back to the RC radio.
  Chan1Raw: number;
  // RC channel 2 value. A value of UINT16_MAX means to ignore this field. A value of 0 means to release this channel back to the RC radio.
  Chan2Raw: number;
  // RC channel 3 value. A value of UINT16_MAX means to ignore this field. A value of 0 means to release this channel back to the RC radio.
  Chan3Raw: number;
  // RC channel 4 value. A value of UINT16_MAX means to ignore this field. A value of 0 means to release this channel back to the RC radio.
  Chan4Raw: number;
  // RC channel 5 value. A value of UINT16_MAX means to ignore this field. A value of 0 means to release this channel back to the RC radio.
  Chan5Raw: number;
  // RC channel 6 value. A value of UINT16_MAX means to ignore this field. A value of 0 means to release this channel back to the RC radio.
  Chan6Raw: number;
  // RC channel 7 value. A value of UINT16_MAX means to ignore this field. A value of 0 means to release this channel back to the RC radio.
  Chan7Raw: number;
  // RC channel 8 value. A value of UINT16_MAX means to ignore this field. A value of 0 means to release this channel back to the RC radio.
  Chan8Raw: number;
  // RC channel 9 value. A value of 0 or UINT16_MAX means to ignore this field. A value of UINT16_MAX-1 means to release this channel back to the RC radio.
  Chan9Raw: number;
  // RC channel 10 value. A value of 0 or UINT16_MAX means to ignore this field. A value of UINT16_MAX-1 means to release this channel back to the RC radio.
  Chan10Raw: number;
  // RC channel 11 value. A value of 0 or UINT16_MAX means to ignore this field. A value of UINT16_MAX-1 means to release this channel back to the RC radio.
  Chan11Raw: number;
  // RC channel 12 value. A value of 0 or UINT16_MAX means to ignore this field. A value of UINT16_MAX-1 means to release this channel back to the RC radio.
  Chan12Raw: number;
  // RC channel 13 value. A value of 0 or UINT16_MAX means to ignore this field. A value of UINT16_MAX-1 means to release this channel back to the RC radio.
  Chan13Raw: number;
  // RC channel 14 value. A value of 0 or UINT16_MAX means to ignore this field. A value of UINT16_MAX-1 means to release this channel back to the RC radio.
  Chan14Raw: number;
  // RC channel 15 value. A value of 0 or UINT16_MAX means to ignore this field. A value of UINT16_MAX-1 means to release this channel back to the RC radio.
  Chan15Raw: number;
  // RC channel 16 value. A value of 0 or UINT16_MAX means to ignore this field. A value of UINT16_MAX-1 means to release this channel back to the RC radio.
  Chan16Raw: number;
  // RC channel 17 value. A value of 0 or UINT16_MAX means to ignore this field. A value of UINT16_MAX-1 means to release this channel back to the RC radio.
  Chan17Raw: number;
  // RC channel 18 value. A value of 0 or UINT16_MAX means to ignore this field. A value of UINT16_MAX-1 means to release this channel back to the RC radio.
  Chan18Raw: number;
}

// Message encoding a mission item. This message is emitted to announce
// the presence of a mission item and to set a mission item on the system. The mission item can be either in x, y, z meters (type: LOCAL) or x:lat, y:lon, z:altitude. Local frame is Z-down, right handed (NED), global frame is Z-up, right handed (ENU). NaN or INT32_MAX may be used in float/integer params (respectively) to indicate optional/default values (e.g. to use the component&#x27;s current latitude, yaw rather than a specific value). See also https://mavlink.io/en/services/mission.html.
export interface MessageMissionItemInt {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // Waypoint ID (sequence number). Starts at zero. Increases monotonically for each waypoint, no gaps in the sequence (0,1,2,3,4).
  Seq: number;
  // The coordinate system of the waypoint.
  Frame: MAV_FRAME;
  // The scheduled action for the waypoint.
  Command: MAV_CMD;
  // false:0, true:1
  Current: number;
  // Autocontinue to next waypoint. 0: false, 1: true. Set false to pause mission after the item completes.
  Autocontinue: number;
  // PARAM1, see MAV_CMD enum
  Param1: number;
  // PARAM2, see MAV_CMD enum
  Param2: number;
  // PARAM3, see MAV_CMD enum
  Param3: number;
  // PARAM4, see MAV_CMD enum
  Param4: number;
  // PARAM5 / local: x position in meters * 1e4, global: latitude in degrees * 10^7
  X: number;
  // PARAM6 / y position: local: x position in meters * 1e4, global: longitude in degrees *10^7
  Y: number;
  // PARAM7 / z position: global: altitude in meters (relative or absolute, depending on frame.
  Z: number;
  // Mission type.
  MissionType: MAV_MISSION_TYPE;
}

// Metrics typically displayed on a HUD for fixed wing aircraft.
export interface MessageVfrHud {
  // Vehicle speed in form appropriate for vehicle type. For standard aircraft this is typically calibrated airspeed (CAS) or indicated airspeed (IAS) - either of which can be used by a pilot to estimate stall speed.
  Airspeed: number;
  // Current ground speed.
  Groundspeed: number;
  // Current heading in compass units (0-360, 0&#x3D;north).
  Heading: number;
  // Current throttle setting (0 to 100).
  Throttle: number;
  // Current altitude (MSL).
  Alt: number;
  // Current climb rate.
  Climb: number;
}

// Send a command with up to seven parameters to the MAV, where params 5 and 6 are integers and the other values are floats. This is preferred over COMMAND_LONG as it allows the MAV_FRAME to be specified for interpreting positional information, such as altitude. COMMAND_INT is also preferred when sending latitude and longitude data in params 5 and 6, as it allows for greater precision. Param 5 and 6 encode positional data as scaled integers, where the scaling depends on the actual command value. NaN or INT32_MAX may be used in float/integer params (respectively) to indicate optional/default values (e.g. to use the component&#x27;s current latitude, yaw rather than a specific value). The command microservice is documented at https://mavlink.io/en/services/command.html
export interface MessageCommandInt {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // The coordinate system of the COMMAND.
  Frame: MAV_FRAME;
  // The scheduled action for the mission item.
  Command: MAV_CMD;
  // Not used.
  Current: number;
  // Not used (set 0).
  Autocontinue: number;
  // PARAM1, see MAV_CMD enum
  Param1: number;
  // PARAM2, see MAV_CMD enum
  Param2: number;
  // PARAM3, see MAV_CMD enum
  Param3: number;
  // PARAM4, see MAV_CMD enum
  Param4: number;
  // PARAM5 / local: x position in meters * 1e4, global: latitude in degrees * 10^7
  X: number;
  // PARAM6 / local: y position in meters * 1e4, global: longitude in degrees * 10^7
  Y: number;
  // PARAM7 / z position: global: altitude in meters (relative or absolute, depending on frame).
  Z: number;
}

// Send a command with up to seven parameters to the MAV. COMMAND_INT is generally preferred when sending MAV_CMD commands that include positional information; it offers higher precision and allows the MAV_FRAME to be specified (which may otherwise be ambiguous, particularly for altitude). The command microservice is documented at https://mavlink.io/en/services/command.html
export interface MessageCommandLong {
  // System which should execute the command
  TargetSystem: number;
  // Component which should execute the command, 0 for all components
  TargetComponent: number;
  // Command ID (of command to send).
  Command: MAV_CMD;
  // 0: First transmission of this command. 1-255: Confirmation transmissions (e.g. for kill command)
  Confirmation: number;
  // Parameter 1 (for the specific command).
  Param1: number;
  // Parameter 2 (for the specific command).
  Param2: number;
  // Parameter 3 (for the specific command).
  Param3: number;
  // Parameter 4 (for the specific command).
  Param4: number;
  // Parameter 5 (for the specific command).
  Param5: number;
  // Parameter 6 (for the specific command).
  Param6: number;
  // Parameter 7 (for the specific command).
  Param7: number;
}

// Report status of a command. Includes feedback whether the command was executed. The command microservice is documented at https://mavlink.io/en/services/command.html
export interface MessageCommandAck {
  // Command ID (of acknowledged command).
  Command: MAV_CMD;
  // Result of command.
  Result: MAV_RESULT;
  // The progress percentage when result is MAV_RESULT_IN_PROGRESS. Values: [0-100], or UINT8_MAX if the progress is unknown.
  Progress: number;
  // Additional result information. Can be set with a command-specific enum containing command-specific error reasons for why the command might be denied. If used, the associated enum must be documented in the corresponding MAV_CMD (this enum should have a 0 value to indicate &quot;unused&quot; or &quot;unknown&quot;).
  ResultParam2: number;
  // System ID of the target recipient. This is the ID of the system that sent the command for which this COMMAND_ACK is an acknowledgement.
  TargetSystem: number;
  // Component ID of the target recipient. This is the ID of the system that sent the command for which this COMMAND_ACK is an acknowledgement.
  TargetComponent: number;
}

// Cancel a long running command. The target system should respond with a COMMAND_ACK to the original command with result&#x3D;MAV_RESULT_CANCELLED if the long running process was cancelled. If it has already completed, the cancel action can be ignored. The cancel action can be retried until some sort of acknowledgement to the original command has been received. The command microservice is documented at https://mavlink.io/en/services/command.html
export interface MessageCommandCancel {
  // System executing long running command. Should not be broadcast (0).
  TargetSystem: number;
  // Component executing long running command.
  TargetComponent: number;
  // Command ID (of command to cancel).
  Command: MAV_CMD;
}

// Setpoint in roll, pitch, yaw and thrust from the operator
export interface MessageManualSetpoint {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // Desired roll rate
  Roll: number;
  // Desired pitch rate
  Pitch: number;
  // Desired yaw rate
  Yaw: number;
  // Collective thrust, normalized to 0 .. 1
  Thrust: number;
  // Flight mode switch position, 0.. 255
  ModeSwitch: number;
  // Override mode switch position, 0.. 255
  ManualOverrideSwitch: number;
}

// Sets a desired vehicle attitude. Used by an external controller to command the vehicle (manual controller or other system).
export interface MessageSetAttitudeTarget {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // Bitmap to indicate which dimensions should be ignored by the vehicle.
  TypeMask: ATTITUDE_TARGET_TYPEMASK;
  // Attitude quaternion (w, x, y, z order, zero-rotation is 1, 0, 0, 0) from MAV_FRAME_LOCAL_NED to MAV_FRAME_BODY_FRD
  Q: number[];
  // Body roll rate
  BodyRollRate: number;
  // Body pitch rate
  BodyPitchRate: number;
  // Body yaw rate
  BodyYawRate: number;
  // Collective thrust, normalized to 0 .. 1 (-1 .. 1 for vehicles capable of reverse trust)
  Thrust: number;
  // 3D thrust setpoint in the body NED frame, normalized to -1 .. 1
  ThrustBody: number[];
}

// Reports the current commanded attitude of the vehicle as specified by the autopilot. This should match the commands sent in a SET_ATTITUDE_TARGET message if the vehicle is being controlled this way.
export interface MessageAttitudeTarget {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // Bitmap to indicate which dimensions should be ignored by the vehicle.
  TypeMask: ATTITUDE_TARGET_TYPEMASK;
  // Attitude quaternion (w, x, y, z order, zero-rotation is 1, 0, 0, 0)
  Q: number[];
  // Body roll rate
  BodyRollRate: number;
  // Body pitch rate
  BodyPitchRate: number;
  // Body yaw rate
  BodyYawRate: number;
  // Collective thrust, normalized to 0 .. 1 (-1 .. 1 for vehicles capable of reverse trust)
  Thrust: number;
}

// Sets a desired vehicle position in a local north-east-down coordinate frame. Used by an external controller to command the vehicle (manual controller or other system).
export interface MessageSetPositionTargetLocalNed {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // Valid options are: MAV_FRAME_LOCAL_NED &#x3D; 1, MAV_FRAME_LOCAL_OFFSET_NED &#x3D; 7, MAV_FRAME_BODY_NED &#x3D; 8, MAV_FRAME_BODY_OFFSET_NED &#x3D; 9
  CoordinateFrame: MAV_FRAME;
  // Bitmap to indicate which dimensions should be ignored by the vehicle.
  TypeMask: POSITION_TARGET_TYPEMASK;
  // X Position in NED frame
  X: number;
  // Y Position in NED frame
  Y: number;
  // Z Position in NED frame (note, altitude is negative in NED)
  Z: number;
  // X velocity in NED frame
  Vx: number;
  // Y velocity in NED frame
  Vy: number;
  // Z velocity in NED frame
  Vz: number;
  // X acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N
  Afx: number;
  // Y acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N
  Afy: number;
  // Z acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N
  Afz: number;
  // yaw setpoint
  Yaw: number;
  // yaw rate setpoint
  YawRate: number;
}

// Reports the current commanded vehicle position, velocity, and acceleration as specified by the autopilot. This should match the commands sent in SET_POSITION_TARGET_LOCAL_NED if the vehicle is being controlled this way.
export interface MessagePositionTargetLocalNed {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // Valid options are: MAV_FRAME_LOCAL_NED &#x3D; 1, MAV_FRAME_LOCAL_OFFSET_NED &#x3D; 7, MAV_FRAME_BODY_NED &#x3D; 8, MAV_FRAME_BODY_OFFSET_NED &#x3D; 9
  CoordinateFrame: MAV_FRAME;
  // Bitmap to indicate which dimensions should be ignored by the vehicle.
  TypeMask: POSITION_TARGET_TYPEMASK;
  // X Position in NED frame
  X: number;
  // Y Position in NED frame
  Y: number;
  // Z Position in NED frame (note, altitude is negative in NED)
  Z: number;
  // X velocity in NED frame
  Vx: number;
  // Y velocity in NED frame
  Vy: number;
  // Z velocity in NED frame
  Vz: number;
  // X acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N
  Afx: number;
  // Y acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N
  Afy: number;
  // Z acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N
  Afz: number;
  // yaw setpoint
  Yaw: number;
  // yaw rate setpoint
  YawRate: number;
}

// Sets a desired vehicle position, velocity, and/or acceleration in a global coordinate system (WGS84). Used by an external controller to command the vehicle (manual controller or other system).
export interface MessageSetPositionTargetGlobalInt {
  // Timestamp (time since system boot). The rationale for the timestamp in the setpoint is to allow the system to compensate for the transport delay of the setpoint. This allows the system to compensate processing latency.
  TimeBootMs: number;
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // Valid options are: MAV_FRAME_GLOBAL &#x3D; 0, MAV_FRAME_GLOBAL_RELATIVE_ALT &#x3D; 3, MAV_FRAME_GLOBAL_TERRAIN_ALT &#x3D; 10 (MAV_FRAME_GLOBAL_INT, MAV_FRAME_GLOBAL_RELATIVE_ALT_INT, MAV_FRAME_GLOBAL_TERRAIN_ALT_INT are allowed synonyms, but have been deprecated)
  CoordinateFrame: MAV_FRAME;
  // Bitmap to indicate which dimensions should be ignored by the vehicle.
  TypeMask: POSITION_TARGET_TYPEMASK;
  // Latitude in WGS84 frame
  LatInt: number;
  // Longitude in WGS84 frame
  LonInt: number;
  // Altitude (MSL, Relative to home, or AGL - depending on frame)
  Alt: number;
  // X velocity in NED frame
  Vx: number;
  // Y velocity in NED frame
  Vy: number;
  // Z velocity in NED frame
  Vz: number;
  // X acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N
  Afx: number;
  // Y acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N
  Afy: number;
  // Z acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N
  Afz: number;
  // yaw setpoint
  Yaw: number;
  // yaw rate setpoint
  YawRate: number;
}

// Reports the current commanded vehicle position, velocity, and acceleration as specified by the autopilot. This should match the commands sent in SET_POSITION_TARGET_GLOBAL_INT if the vehicle is being controlled this way.
export interface MessagePositionTargetGlobalInt {
  // Timestamp (time since system boot). The rationale for the timestamp in the setpoint is to allow the system to compensate for the transport delay of the setpoint. This allows the system to compensate processing latency.
  TimeBootMs: number;
  // Valid options are: MAV_FRAME_GLOBAL &#x3D; 0, MAV_FRAME_GLOBAL_RELATIVE_ALT &#x3D; 3, MAV_FRAME_GLOBAL_TERRAIN_ALT &#x3D; 10 (MAV_FRAME_GLOBAL_INT, MAV_FRAME_GLOBAL_RELATIVE_ALT_INT, MAV_FRAME_GLOBAL_TERRAIN_ALT_INT are allowed synonyms, but have been deprecated)
  CoordinateFrame: MAV_FRAME;
  // Bitmap to indicate which dimensions should be ignored by the vehicle.
  TypeMask: POSITION_TARGET_TYPEMASK;
  // Latitude in WGS84 frame
  LatInt: number;
  // Longitude in WGS84 frame
  LonInt: number;
  // Altitude (MSL, AGL or relative to home altitude, depending on frame)
  Alt: number;
  // X velocity in NED frame
  Vx: number;
  // Y velocity in NED frame
  Vy: number;
  // Z velocity in NED frame
  Vz: number;
  // X acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N
  Afx: number;
  // Y acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N
  Afy: number;
  // Z acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N
  Afz: number;
  // yaw setpoint
  Yaw: number;
  // yaw rate setpoint
  YawRate: number;
}

// The offset in X, Y, Z and yaw between the LOCAL_POSITION_NED messages of MAV X and the global coordinate frame in NED coordinates. Coordinate frame is right-handed, Z-axis down (aeronautical frame, NED / north-east-down convention)
export interface MessageLocalPositionNedSystemGlobalOffset {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // X Position
  X: number;
  // Y Position
  Y: number;
  // Z Position
  Z: number;
  // Roll
  Roll: number;
  // Pitch
  Pitch: number;
  // Yaw
  Yaw: number;
}

// Sent from simulation to autopilot. This packet is useful for high throughput applications such as hardware in the loop simulations.
export interface MessageHilState {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // Roll angle
  Roll: number;
  // Pitch angle
  Pitch: number;
  // Yaw angle
  Yaw: number;
  // Body frame roll / phi angular speed
  Rollspeed: number;
  // Body frame pitch / theta angular speed
  Pitchspeed: number;
  // Body frame yaw / psi angular speed
  Yawspeed: number;
  // Latitude
  Lat: number;
  // Longitude
  Lon: number;
  // Altitude
  Alt: number;
  // Ground X Speed (Latitude)
  Vx: number;
  // Ground Y Speed (Longitude)
  Vy: number;
  // Ground Z Speed (Altitude)
  Vz: number;
  // X acceleration
  Xacc: number;
  // Y acceleration
  Yacc: number;
  // Z acceleration
  Zacc: number;
}

// Sent from autopilot to simulation. Hardware in the loop control outputs. Alternative to HIL_ACTUATOR_CONTROLS.
export interface MessageHilControls {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // Control output -1 .. 1
  RollAilerons: number;
  // Control output -1 .. 1
  PitchElevator: number;
  // Control output -1 .. 1
  YawRudder: number;
  // Throttle 0 .. 1
  Throttle: number;
  // Aux 1, -1 .. 1
  Aux1: number;
  // Aux 2, -1 .. 1
  Aux2: number;
  // Aux 3, -1 .. 1
  Aux3: number;
  // Aux 4, -1 .. 1
  Aux4: number;
  // System mode.
  Mode: MAV_MODE;
  // Navigation mode (MAV_NAV_MODE)
  NavMode: number;
}

// Sent from simulation to autopilot. The RAW values of the RC channels received. The standard PPM modulation is as follows: 1000 microseconds: 0%, 2000 microseconds: 100%. Individual receivers/transmitters might violate this specification.
export interface MessageHilRcInputsRaw {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // RC channel 1 value
  Chan1Raw: number;
  // RC channel 2 value
  Chan2Raw: number;
  // RC channel 3 value
  Chan3Raw: number;
  // RC channel 4 value
  Chan4Raw: number;
  // RC channel 5 value
  Chan5Raw: number;
  // RC channel 6 value
  Chan6Raw: number;
  // RC channel 7 value
  Chan7Raw: number;
  // RC channel 8 value
  Chan8Raw: number;
  // RC channel 9 value
  Chan9Raw: number;
  // RC channel 10 value
  Chan10Raw: number;
  // RC channel 11 value
  Chan11Raw: number;
  // RC channel 12 value
  Chan12Raw: number;
  // Receive signal strength indicator in device-dependent units/scale. Values: [0-254], UINT8_MAX: invalid/unknown.
  Rssi: number;
}

// Sent from autopilot to simulation. Hardware in the loop control outputs. Alternative to HIL_CONTROLS.
export interface MessageHilActuatorControls {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // Control outputs -1 .. 1. Channel assignment depends on the simulated hardware.
  Controls: number[];
  // System mode. Includes arming state.
  Mode: MAV_MODE_FLAG;
  // Flags bitmask.
  Flags: HIL_ACTUATOR_CONTROLS_FLAGS;
}

// Optical flow from a flow sensor (e.g. optical mouse sensor)
export interface MessageOpticalFlow {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // Sensor ID
  SensorId: number;
  // Flow in x-sensor direction
  FlowX: number;
  // Flow in y-sensor direction
  FlowY: number;
  // Flow in x-sensor direction, angular-speed compensated
  FlowCompMX: number;
  // Flow in y-sensor direction, angular-speed compensated
  FlowCompMY: number;
  // Optical flow quality / confidence. 0: bad, 255: maximum quality
  Quality: number;
  // Ground distance. Positive value: distance known. Negative value: Unknown distance
  GroundDistance: number;
  // Flow rate about X axis
  FlowRateX: number;
  // Flow rate about Y axis
  FlowRateY: number;
}

// Global position/attitude estimate from a vision source.
export interface MessageGlobalVisionPositionEstimate {
  // Timestamp (UNIX time or since system boot)
  Usec: number;
  // Global X position
  X: number;
  // Global Y position
  Y: number;
  // Global Z position
  Z: number;
  // Roll angle
  Roll: number;
  // Pitch angle
  Pitch: number;
  // Yaw angle
  Yaw: number;
  // Row-major representation of pose 6x6 cross-covariance matrix upper right triangle (states: x_global, y_global, z_global, roll, pitch, yaw; first six entries are the first ROW, next five entries are the second ROW, etc.). If unknown, assign NaN value to first element in the array.
  Covariance: number[];
  // Estimate reset counter. This should be incremented when the estimate resets in any of the dimensions (position, velocity, attitude, angular speed). This is designed to be used when e.g an external SLAM system detects a loop-closure and the estimate jumps.
  ResetCounter: number;
}

// Local position/attitude estimate from a vision source.
export interface MessageVisionPositionEstimate {
  // Timestamp (UNIX time or time since system boot)
  Usec: number;
  // Local X position
  X: number;
  // Local Y position
  Y: number;
  // Local Z position
  Z: number;
  // Roll angle
  Roll: number;
  // Pitch angle
  Pitch: number;
  // Yaw angle
  Yaw: number;
  // Row-major representation of pose 6x6 cross-covariance matrix upper right triangle (states: x, y, z, roll, pitch, yaw; first six entries are the first ROW, next five entries are the second ROW, etc.). If unknown, assign NaN value to first element in the array.
  Covariance: number[];
  // Estimate reset counter. This should be incremented when the estimate resets in any of the dimensions (position, velocity, attitude, angular speed). This is designed to be used when e.g an external SLAM system detects a loop-closure and the estimate jumps.
  ResetCounter: number;
}

// Speed estimate from a vision source.
export interface MessageVisionSpeedEstimate {
  // Timestamp (UNIX time or time since system boot)
  Usec: number;
  // Global X speed
  X: number;
  // Global Y speed
  Y: number;
  // Global Z speed
  Z: number;
  // Row-major representation of 3x3 linear velocity covariance matrix (states: vx, vy, vz; 1st three entries - 1st row, etc.). If unknown, assign NaN value to first element in the array.
  Covariance: number[];
  // Estimate reset counter. This should be incremented when the estimate resets in any of the dimensions (position, velocity, attitude, angular speed). This is designed to be used when e.g an external SLAM system detects a loop-closure and the estimate jumps.
  ResetCounter: number;
}

// Global position estimate from a Vicon motion system source.
export interface MessageViconPositionEstimate {
  // Timestamp (UNIX time or time since system boot)
  Usec: number;
  // Global X position
  X: number;
  // Global Y position
  Y: number;
  // Global Z position
  Z: number;
  // Roll angle
  Roll: number;
  // Pitch angle
  Pitch: number;
  // Yaw angle
  Yaw: number;
  // Row-major representation of 6x6 pose cross-covariance matrix upper right triangle (states: x, y, z, roll, pitch, yaw; first six entries are the first ROW, next five entries are the second ROW, etc.). If unknown, assign NaN value to first element in the array.
  Covariance: number[];
}

// The IMU readings in SI units in NED body frame
export interface MessageHighresImu {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // X acceleration
  Xacc: number;
  // Y acceleration
  Yacc: number;
  // Z acceleration
  Zacc: number;
  // Angular speed around X axis
  Xgyro: number;
  // Angular speed around Y axis
  Ygyro: number;
  // Angular speed around Z axis
  Zgyro: number;
  // X Magnetic field
  Xmag: number;
  // Y Magnetic field
  Ymag: number;
  // Z Magnetic field
  Zmag: number;
  // Absolute pressure
  AbsPressure: number;
  // Differential pressure
  DiffPressure: number;
  // Altitude calculated from pressure
  PressureAlt: number;
  // Temperature
  Temperature: number;
  // Bitmap for fields that have updated since last message
  FieldsUpdated: HIGHRES_IMU_UPDATED_FLAGS;
  // Id. Ids are numbered from 0 and map to IMUs numbered from 1 (e.g. IMU1 will have a message with id&#x3D;0)
  Id: number;
}

// Optical flow from an angular rate flow sensor (e.g. PX4FLOW or mouse sensor)
export interface MessageOpticalFlowRad {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // Sensor ID
  SensorId: number;
  // Integration time. Divide integrated_x and integrated_y by the integration time to obtain average flow. The integration time also indicates the.
  IntegrationTimeUs: number;
  // Flow around X axis (Sensor RH rotation about the X axis induces a positive flow. Sensor linear motion along the positive Y axis induces a negative flow.)
  IntegratedX: number;
  // Flow around Y axis (Sensor RH rotation about the Y axis induces a positive flow. Sensor linear motion along the positive X axis induces a positive flow.)
  IntegratedY: number;
  // RH rotation around X axis
  IntegratedXgyro: number;
  // RH rotation around Y axis
  IntegratedYgyro: number;
  // RH rotation around Z axis
  IntegratedZgyro: number;
  // Temperature
  Temperature: number;
  // Optical flow quality / confidence. 0: no valid flow, 255: maximum quality
  Quality: number;
  // Time since the distance was sampled.
  TimeDeltaDistanceUs: number;
  // Distance to the center of the flow field. Positive value (including zero): distance known. Negative value: Unknown distance.
  Distance: number;
}

// The IMU readings in SI units in NED body frame
export interface MessageHilSensor {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // X acceleration
  Xacc: number;
  // Y acceleration
  Yacc: number;
  // Z acceleration
  Zacc: number;
  // Angular speed around X axis in body frame
  Xgyro: number;
  // Angular speed around Y axis in body frame
  Ygyro: number;
  // Angular speed around Z axis in body frame
  Zgyro: number;
  // X Magnetic field
  Xmag: number;
  // Y Magnetic field
  Ymag: number;
  // Z Magnetic field
  Zmag: number;
  // Absolute pressure
  AbsPressure: number;
  // Differential pressure (airspeed)
  DiffPressure: number;
  // Altitude calculated from pressure
  PressureAlt: number;
  // Temperature
  Temperature: number;
  // Bitmap for fields that have updated since last message
  FieldsUpdated: HIL_SENSOR_UPDATED_FLAGS;
  // Sensor ID (zero indexed). Used for multiple sensor inputs
  Id: number;
}

// Status of simulation environment, if used
export interface MessageSimState {
  // True attitude quaternion component 1, w (1 in null-rotation)
  Q1: number;
  // True attitude quaternion component 2, x (0 in null-rotation)
  Q2: number;
  // True attitude quaternion component 3, y (0 in null-rotation)
  Q3: number;
  // True attitude quaternion component 4, z (0 in null-rotation)
  Q4: number;
  // Attitude roll expressed as Euler angles, not recommended except for human-readable outputs
  Roll: number;
  // Attitude pitch expressed as Euler angles, not recommended except for human-readable outputs
  Pitch: number;
  // Attitude yaw expressed as Euler angles, not recommended except for human-readable outputs
  Yaw: number;
  // X acceleration
  Xacc: number;
  // Y acceleration
  Yacc: number;
  // Z acceleration
  Zacc: number;
  // Angular speed around X axis
  Xgyro: number;
  // Angular speed around Y axis
  Ygyro: number;
  // Angular speed around Z axis
  Zgyro: number;
  // Latitude (lower precision). Both this and the lat_int field should be set.
  Lat: number;
  // Longitude (lower precision). Both this and the lon_int field should be set.
  Lon: number;
  // Altitude
  Alt: number;
  // Horizontal position standard deviation
  StdDevHorz: number;
  // Vertical position standard deviation
  StdDevVert: number;
  // True velocity in north direction in earth-fixed NED frame
  Vn: number;
  // True velocity in east direction in earth-fixed NED frame
  Ve: number;
  // True velocity in down direction in earth-fixed NED frame
  Vd: number;
  // Latitude (higher precision). If 0, recipients should use the lat field value (otherwise this field is preferred).
  LatInt: number;
  // Longitude (higher precision). If 0, recipients should use the lon field value (otherwise this field is preferred).
  LonInt: number;
}

// Status generated by radio and injected into MAVLink stream.
export interface MessageRadioStatus {
  // Local (message sender) received signal strength indication in device-dependent units/scale. Values: [0-254], UINT8_MAX: invalid/unknown.
  Rssi: number;
  // Remote (message receiver) signal strength indication in device-dependent units/scale. Values: [0-254], UINT8_MAX: invalid/unknown.
  Remrssi: number;
  // Remaining free transmitter buffer space.
  Txbuf: number;
  // Local background noise level. These are device dependent RSSI values (scale as approx 2x dB on SiK radios). Values: [0-254], UINT8_MAX: invalid/unknown.
  Noise: number;
  // Remote background noise level. These are device dependent RSSI values (scale as approx 2x dB on SiK radios). Values: [0-254], UINT8_MAX: invalid/unknown.
  Remnoise: number;
  // Count of radio packet receive errors (since boot).
  Rxerrors: number;
  // Count of error corrected radio packets (since boot).
  Fixed: number;
}

// File transfer protocol message: https://mavlink.io/en/services/ftp.html.
export interface MessageFileTransferProtocol {
  // Network ID (0 for broadcast)
  TargetNetwork: number;
  // System ID (0 for broadcast)
  TargetSystem: number;
  // Component ID (0 for broadcast)
  TargetComponent: number;
  // Variable length payload. The length is defined by the remaining message length when subtracting the header and other fields. The content/format of this block is defined in https://mavlink.io/en/services/ftp.html.
  Payload: number[];
}

// Time synchronization message.
// The message is used for both timesync requests and responses.
// The request is sent with &#x60;ts1&#x3D;syncing component timestamp&#x60; and &#x60;tc1&#x3D;0&#x60;, and may be broadcast or targeted to a specific system/component.
// The response is sent with &#x60;ts1&#x3D;syncing component timestamp&#x60; (mirror back unchanged), and &#x60;tc1&#x3D;responding component timestamp&#x60;, with the &#x60;target_system&#x60; and &#x60;target_component&#x60; set to ids of the original request.
// Systems can determine if they are receiving a request or response based on the value of &#x60;tc&#x60;.
// If the response has &#x60;target_system&#x3D;&#x3D;target_component&#x3D;&#x3D;0&#x60; the remote system has not been updated to use the component IDs and cannot reliably timesync; the requester may report an error.
// Timestamps are UNIX Epoch time or time since system boot in nanoseconds (the timestamp format can be inferred by checking for the magnitude of the number; generally it doesn&#x27;t matter as only the offset is used).
// The message sequence is repeated numerous times with results being filtered/averaged to estimate the offset.
// See also: https://mavlink.io/en/services/timesync.html.
export interface MessageTimesync {
  // Time sync timestamp 1. Syncing: 0. Responding: Timestamp of responding component.
  Tc1: number;
  // Time sync timestamp 2. Timestamp of syncing component (mirrored in response).
  Ts1: number;
  // Target system id. Request: 0 (broadcast) or id of specific system. Response must contain system id of the requesting component.
  TargetSystem: number;
  // Target component id. Request: 0 (broadcast) or id of specific component. Response must contain component id of the requesting component.
  TargetComponent: number;
}

// Camera-IMU triggering and synchronisation message.
export interface MessageCameraTrigger {
  // Timestamp for image frame (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // Image frame sequence
  Seq: number;
}

// The global position, as returned by the Global Positioning System (GPS). This is
// NOT the global position estimate of the system, but rather a RAW sensor value. See message GLOBAL_POSITION_INT for the global position estimate.
export interface MessageHilGps {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // 0-1: no fix, 2: 2D fix, 3: 3D fix. Some applications will not use the value of this field unless it is at least two, so always correctly fill in the fix.
  FixType: number;
  // Latitude (WGS84)
  Lat: number;
  // Longitude (WGS84)
  Lon: number;
  // Altitude (MSL). Positive for up.
  Alt: number;
  // GPS HDOP horizontal dilution of position (unitless * 100). If unknown, set to: UINT16_MAX
  Eph: number;
  // GPS VDOP vertical dilution of position (unitless * 100). If unknown, set to: UINT16_MAX
  Epv: number;
  // GPS ground speed. If unknown, set to: UINT16_MAX
  Vel: number;
  // GPS velocity in north direction in earth-fixed NED frame
  Vn: number;
  // GPS velocity in east direction in earth-fixed NED frame
  Ve: number;
  // GPS velocity in down direction in earth-fixed NED frame
  Vd: number;
  // Course over ground (NOT heading, but direction of movement), 0.0..359.99 degrees. If unknown, set to: UINT16_MAX
  Cog: number;
  // Number of satellites visible. If unknown, set to UINT8_MAX
  SatellitesVisible: number;
  // GPS ID (zero indexed). Used for multiple GPS inputs
  Id: number;
  // Yaw of vehicle relative to Earth&#x27;s North, zero means not available, use 36000 for north
  Yaw: number;
}

// Simulated optical flow from a flow sensor (e.g. PX4FLOW or optical mouse sensor)
export interface MessageHilOpticalFlow {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // Sensor ID
  SensorId: number;
  // Integration time. Divide integrated_x and integrated_y by the integration time to obtain average flow. The integration time also indicates the.
  IntegrationTimeUs: number;
  // Flow in radians around X axis (Sensor RH rotation about the X axis induces a positive flow. Sensor linear motion along the positive Y axis induces a negative flow.)
  IntegratedX: number;
  // Flow in radians around Y axis (Sensor RH rotation about the Y axis induces a positive flow. Sensor linear motion along the positive X axis induces a positive flow.)
  IntegratedY: number;
  // RH rotation around X axis
  IntegratedXgyro: number;
  // RH rotation around Y axis
  IntegratedYgyro: number;
  // RH rotation around Z axis
  IntegratedZgyro: number;
  // Temperature
  Temperature: number;
  // Optical flow quality / confidence. 0: no valid flow, 255: maximum quality
  Quality: number;
  // Time since the distance was sampled.
  TimeDeltaDistanceUs: number;
  // Distance to the center of the flow field. Positive value (including zero): distance known. Negative value: Unknown distance.
  Distance: number;
}

// Sent from simulation to autopilot, avoids in contrast to HIL_STATE singularities. This packet is useful for high throughput applications such as hardware in the loop simulations.
export interface MessageHilStateQuaternion {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // Vehicle attitude expressed as normalized quaternion in w, x, y, z order (with 1 0 0 0 being the null-rotation)
  AttitudeQuaternion: number[];
  // Body frame roll / phi angular speed
  Rollspeed: number;
  // Body frame pitch / theta angular speed
  Pitchspeed: number;
  // Body frame yaw / psi angular speed
  Yawspeed: number;
  // Latitude
  Lat: number;
  // Longitude
  Lon: number;
  // Altitude
  Alt: number;
  // Ground X Speed (Latitude)
  Vx: number;
  // Ground Y Speed (Longitude)
  Vy: number;
  // Ground Z Speed (Altitude)
  Vz: number;
  // Indicated airspeed
  IndAirspeed: number;
  // True airspeed
  TrueAirspeed: number;
  // X acceleration
  Xacc: number;
  // Y acceleration
  Yacc: number;
  // Z acceleration
  Zacc: number;
}

// The RAW IMU readings for secondary 9DOF sensor setup. This message should contain the scaled values to the described units
export interface MessageScaledImu2 {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // X acceleration
  Xacc: number;
  // Y acceleration
  Yacc: number;
  // Z acceleration
  Zacc: number;
  // Angular speed around X axis
  Xgyro: number;
  // Angular speed around Y axis
  Ygyro: number;
  // Angular speed around Z axis
  Zgyro: number;
  // X Magnetic field
  Xmag: number;
  // Y Magnetic field
  Ymag: number;
  // Z Magnetic field
  Zmag: number;
  // Temperature, 0: IMU does not provide temperature values. If the IMU is at 0C it must send 1 (0.01C).
  Temperature: number;
}

// Request a list of available logs. On some systems calling this may stop on-board logging until LOG_REQUEST_END is called. If there are no log files available this request shall be answered with one LOG_ENTRY message with id &#x3D; 0 and num_logs &#x3D; 0.
export interface MessageLogRequestList {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // First log id (0 for first available)
  Start: number;
  // Last log id (0xffff for last available)
  End: number;
}

// Reply to LOG_REQUEST_LIST
export interface MessageLogEntry {
  // Log id
  Id: number;
  // Total number of logs
  NumLogs: number;
  // High log number
  LastLogNum: number;
  // UTC timestamp of log since 1970, or 0 if not available
  TimeUtc: number;
  // Size of the log (may be approximate)
  Size: number;
}

// Request a chunk of a log
export interface MessageLogRequestData {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // Log id (from LOG_ENTRY reply)
  Id: number;
  // Offset into the log
  Ofs: number;
  // Number of bytes
  Count: number;
}

// Reply to LOG_REQUEST_DATA
export interface MessageLogData {
  // Log id (from LOG_ENTRY reply)
  Id: number;
  // Offset into the log
  Ofs: number;
  // Number of bytes (zero for end of log)
  Count: number;
  // log data
  Data: number[];
}

// Erase all logs
export interface MessageLogErase {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
}

// Stop log transfer and resume normal logging
export interface MessageLogRequestEnd {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
}

// Data for injecting into the onboard GPS (used for DGPS)
export interface MessageGpsInjectData {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // Data length
  Len: number;
  // Raw data (110 is enough for 12 satellites of RTCMv2)
  Data: number[];
}

// Second GPS data.
export interface MessageGps2Raw {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // GPS fix type.
  FixType: GPS_FIX_TYPE;
  // Latitude (WGS84)
  Lat: number;
  // Longitude (WGS84)
  Lon: number;
  // Altitude (MSL). Positive for up.
  Alt: number;
  // GPS HDOP horizontal dilution of position (unitless * 100). If unknown, set to: UINT16_MAX
  Eph: number;
  // GPS VDOP vertical dilution of position (unitless * 100). If unknown, set to: UINT16_MAX
  Epv: number;
  // GPS ground speed. If unknown, set to: UINT16_MAX
  Vel: number;
  // Course over ground (NOT heading, but direction of movement): 0.0..359.99 degrees. If unknown, set to: UINT16_MAX
  Cog: number;
  // Number of satellites visible. If unknown, set to UINT8_MAX
  SatellitesVisible: number;
  // Number of DGPS satellites
  DgpsNumch: number;
  // Age of DGPS info
  DgpsAge: number;
  // Yaw in earth frame from north. Use 0 if this GPS does not provide yaw. Use UINT16_MAX if this GPS is configured to provide yaw and is currently unable to provide it. Use 36000 for north.
  Yaw: number;
  // Altitude (above WGS84, EGM96 ellipsoid). Positive for up.
  AltEllipsoid: number;
  // Position uncertainty.
  HAcc: number;
  // Altitude uncertainty.
  VAcc: number;
  // Speed uncertainty.
  VelAcc: number;
  // Heading / track uncertainty
  HdgAcc: number;
}

// Power supply status
export interface MessagePowerStatus {
  // 5V rail voltage.
  Vcc: number;
  // Servo rail voltage.
  Vservo: number;
  // Bitmap of power supply status flags.
  Flags: MAV_POWER_STATUS;
}

// Control a serial port. This can be used for raw access to an onboard serial peripheral such as a GPS or telemetry radio. It is designed to make it possible to update the devices firmware via MAVLink messages or change the devices settings. A message with zero bytes can be used to change just the baudrate.
export interface MessageSerialControl {
  // Serial control device type.
  Device: SERIAL_CONTROL_DEV;
  // Bitmap of serial control flags.
  Flags: SERIAL_CONTROL_FLAG;
  // Timeout for reply data
  Timeout: number;
  // Baudrate of transfer. Zero means no change.
  Baudrate: number;
  // how many bytes in this transfer
  Count: number;
  // serial data
  Data: number[];
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
}

// RTK GPS data. Gives information on the relative baseline calculation the GPS is reporting
export interface MessageGpsRtk {
  // Time since boot of last baseline message received.
  TimeLastBaselineMs: number;
  // Identification of connected RTK receiver.
  RtkReceiverId: number;
  // GPS Week Number of last baseline
  Wn: number;
  // GPS Time of Week of last baseline
  Tow: number;
  // GPS-specific health report for RTK data.
  RtkHealth: number;
  // Rate of baseline messages being received by GPS
  RtkRate: number;
  // Current number of sats used for RTK calculation.
  Nsats: number;
  // Coordinate system of baseline
  BaselineCoordsType: RTK_BASELINE_COORDINATE_SYSTEM;
  // Current baseline in ECEF x or NED north component.
  BaselineAMm: number;
  // Current baseline in ECEF y or NED east component.
  BaselineBMm: number;
  // Current baseline in ECEF z or NED down component.
  BaselineCMm: number;
  // Current estimate of baseline accuracy.
  Accuracy: number;
  // Current number of integer ambiguity hypotheses.
  IarNumHypotheses: number;
}

// RTK GPS data. Gives information on the relative baseline calculation the GPS is reporting
export interface MessageGps2Rtk {
  // Time since boot of last baseline message received.
  TimeLastBaselineMs: number;
  // Identification of connected RTK receiver.
  RtkReceiverId: number;
  // GPS Week Number of last baseline
  Wn: number;
  // GPS Time of Week of last baseline
  Tow: number;
  // GPS-specific health report for RTK data.
  RtkHealth: number;
  // Rate of baseline messages being received by GPS
  RtkRate: number;
  // Current number of sats used for RTK calculation.
  Nsats: number;
  // Coordinate system of baseline
  BaselineCoordsType: RTK_BASELINE_COORDINATE_SYSTEM;
  // Current baseline in ECEF x or NED north component.
  BaselineAMm: number;
  // Current baseline in ECEF y or NED east component.
  BaselineBMm: number;
  // Current baseline in ECEF z or NED down component.
  BaselineCMm: number;
  // Current estimate of baseline accuracy.
  Accuracy: number;
  // Current number of integer ambiguity hypotheses.
  IarNumHypotheses: number;
}

// The RAW IMU readings for 3rd 9DOF sensor setup. This message should contain the scaled values to the described units
export interface MessageScaledImu3 {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // X acceleration
  Xacc: number;
  // Y acceleration
  Yacc: number;
  // Z acceleration
  Zacc: number;
  // Angular speed around X axis
  Xgyro: number;
  // Angular speed around Y axis
  Ygyro: number;
  // Angular speed around Z axis
  Zgyro: number;
  // X Magnetic field
  Xmag: number;
  // Y Magnetic field
  Ymag: number;
  // Z Magnetic field
  Zmag: number;
  // Temperature, 0: IMU does not provide temperature values. If the IMU is at 0C it must send 1 (0.01C).
  Temperature: number;
}

// Handshake message to initiate, control and stop image streaming when using the Image Transmission Protocol: https://mavlink.io/en/services/image_transmission.html.
export interface MessageDataTransmissionHandshake {
  // Type of requested/acknowledged data.
  Type: MAVLINK_DATA_STREAM_TYPE;
  // total data size (set on ACK only).
  Size: number;
  // Width of a matrix or image.
  Width: number;
  // Height of a matrix or image.
  Height: number;
  // Number of packets being sent (set on ACK only).
  Packets: number;
  // Payload size per packet (normally 253 byte, see DATA field size in message ENCAPSULATED_DATA) (set on ACK only).
  Payload: number;
  // JPEG quality. Values: [1-100].
  JpgQuality: number;
}

// Data packet for images sent using the Image Transmission Protocol: https://mavlink.io/en/services/image_transmission.html.
export interface MessageEncapsulatedData {
  // sequence number (starting with 0 on every transmission)
  Seqnr: number;
  // image data bytes
  Data: number[];
}

// Distance sensor information for an onboard rangefinder.
export interface MessageDistanceSensor {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // Minimum distance the sensor can measure
  MinDistance: number;
  // Maximum distance the sensor can measure
  MaxDistance: number;
  // Current distance reading
  CurrentDistance: number;
  // Type of distance sensor.
  Type: MAV_DISTANCE_SENSOR;
  // Onboard ID of the sensor
  Id: number;
  // Direction the sensor faces. downward-facing: ROTATION_PITCH_270, upward-facing: ROTATION_PITCH_90, backward-facing: ROTATION_PITCH_180, forward-facing: ROTATION_NONE, left-facing: ROTATION_YAW_90, right-facing: ROTATION_YAW_270
  Orientation: MAV_SENSOR_ORIENTATION;
  // Measurement variance. Max standard deviation is 6cm. UINT8_MAX if unknown.
  Covariance: number;
  // Horizontal Field of View (angle) where the distance measurement is valid and the field of view is known. Otherwise this is set to 0.
  HorizontalFov: number;
  // Vertical Field of View (angle) where the distance measurement is valid and the field of view is known. Otherwise this is set to 0.
  VerticalFov: number;
  // Quaternion of the sensor orientation in vehicle body frame (w, x, y, z order, zero-rotation is 1, 0, 0, 0). Zero-rotation is along the vehicle body x-axis. This field is required if the orientation is set to MAV_SENSOR_ROTATION_CUSTOM. Set it to 0 if invalid.&quot;
  Quaternion: number[];
  // Signal quality of the sensor. Specific to each sensor type, representing the relation of the signal strength with the target reflectivity, distance, size or aspect, but normalised as a percentage. 0 &#x3D; unknown/unset signal quality, 1 &#x3D; invalid signal, 100 &#x3D; perfect signal.
  SignalQuality: number;
}

// Request for terrain data and terrain status. See terrain protocol docs: https://mavlink.io/en/services/terrain.html
export interface MessageTerrainRequest {
  // Latitude of SW corner of first grid
  Lat: number;
  // Longitude of SW corner of first grid
  Lon: number;
  // Grid spacing
  GridSpacing: number;
  // Bitmask of requested 4x4 grids (row major 8x7 array of grids, 56 bits)
  Mask: number;
}

// Terrain data sent from GCS. The lat/lon and grid_spacing must be the same as a lat/lon from a TERRAIN_REQUEST. See terrain protocol docs: https://mavlink.io/en/services/terrain.html
export interface MessageTerrainData {
  // Latitude of SW corner of first grid
  Lat: number;
  // Longitude of SW corner of first grid
  Lon: number;
  // Grid spacing
  GridSpacing: number;
  // bit within the terrain request mask
  Gridbit: number;
  // Terrain data MSL
  Data: number[];
}

// Request that the vehicle report terrain height at the given location (expected response is a TERRAIN_REPORT). Used by GCS to check if vehicle has all terrain data needed for a mission.
export interface MessageTerrainCheck {
  // Latitude
  Lat: number;
  // Longitude
  Lon: number;
}

// Streamed from drone to report progress of terrain map download (initiated by TERRAIN_REQUEST), or sent as a response to a TERRAIN_CHECK request. See terrain protocol docs: https://mavlink.io/en/services/terrain.html
export interface MessageTerrainReport {
  // Latitude
  Lat: number;
  // Longitude
  Lon: number;
  // grid spacing (zero if terrain at this location unavailable)
  Spacing: number;
  // Terrain height MSL
  TerrainHeight: number;
  // Current vehicle height above lat/lon terrain height
  CurrentHeight: number;
  // Number of 4x4 terrain blocks waiting to be received or read from disk
  Pending: number;
  // Number of 4x4 terrain blocks in memory
  Loaded: number;
}

// Barometer readings for 2nd barometer
export interface MessageScaledPressure2 {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // Absolute pressure
  PressAbs: number;
  // Differential pressure
  PressDiff: number;
  // Absolute pressure temperature
  Temperature: number;
  // Differential pressure temperature (0, if not available). Report values of 0 (or 1) as 1 cdegC.
  TemperaturePressDiff: number;
}

// Motion capture attitude and position
export interface MessageAttPosMocap {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // Attitude quaternion (w, x, y, z order, zero-rotation is 1, 0, 0, 0)
  Q: number[];
  // X position (NED)
  X: number;
  // Y position (NED)
  Y: number;
  // Z position (NED)
  Z: number;
  // Row-major representation of a pose 6x6 cross-covariance matrix upper right triangle (states: x, y, z, roll, pitch, yaw; first six entries are the first ROW, next five entries are the second ROW, etc.). If unknown, assign NaN value to first element in the array.
  Covariance: number[];
}

// Set the vehicle attitude and body angular rates.
export interface MessageSetActuatorControlTarget {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // Actuator group. The &quot;_mlx&quot; indicates this is a multi-instance message and a MAVLink parser should use this field to difference between instances.
  GroupMlx: number;
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // Actuator controls. Normed to -1..+1 where 0 is neutral position. Throttle for single rotation direction motors is 0..1, negative range for reverse direction. Standard mapping for attitude controls (group 0): (index 0-7): roll, pitch, yaw, throttle, flaps, spoilers, airbrakes, landing gear. Load a pass-through mixer to repurpose them as generic outputs.
  Controls: number[];
}

// Set the vehicle attitude and body angular rates.
export interface MessageActuatorControlTarget {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // Actuator group. The &quot;_mlx&quot; indicates this is a multi-instance message and a MAVLink parser should use this field to difference between instances.
  GroupMlx: number;
  // Actuator controls. Normed to -1..+1 where 0 is neutral position. Throttle for single rotation direction motors is 0..1, negative range for reverse direction. Standard mapping for attitude controls (group 0): (index 0-7): roll, pitch, yaw, throttle, flaps, spoilers, airbrakes, landing gear. Load a pass-through mixer to repurpose them as generic outputs.
  Controls: number[];
}

// The current system altitude.
export interface MessageAltitude {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // This altitude measure is initialized on system boot and monotonic (it is never reset, but represents the local altitude change). The only guarantee on this field is that it will never be reset and is consistent within a flight. The recommended value for this field is the uncorrected barometric altitude at boot time. This altitude will also drift and vary between flights.
  AltitudeMonotonic: number;
  // This altitude measure is strictly above mean sea level and might be non-monotonic (it might reset on events like GPS lock or when a new QNH value is set). It should be the altitude to which global altitude waypoints are compared to. Note that it is *not* the GPS altitude, however, most GPS modules already output MSL by default and not the WGS84 altitude.
  AltitudeAmsl: number;
  // This is the local altitude in the local coordinate frame. It is not the altitude above home, but in reference to the coordinate origin (0, 0, 0). It is up-positive.
  AltitudeLocal: number;
  // This is the altitude above the home position. It resets on each change of the current home position.
  AltitudeRelative: number;
  // This is the altitude above terrain. It might be fed by a terrain database or an altimeter. Values smaller than -1000 should be interpreted as unknown.
  AltitudeTerrain: number;
  // This is not the altitude, but the clear space below the system according to the fused clearance estimate. It generally should max out at the maximum range of e.g. the laser altimeter. It is generally a moving target. A negative value indicates no measurement available.
  BottomClearance: number;
}

// The autopilot is requesting a resource (file, binary, other type of data)
export interface MessageResourceRequest {
  // Request ID. This ID should be reused when sending back URI contents
  RequestId: number;
  // The type of requested URI. 0 &#x3D; a file via URL. 1 &#x3D; a UAVCAN binary
  UriType: number;
  // The requested unique resource identifier (URI). It is not necessarily a straight domain name (depends on the URI type enum)
  Uri: number[];
  // The way the autopilot wants to receive the URI. 0 &#x3D; MAVLink FTP. 1 &#x3D; binary stream.
  TransferType: number;
  // The storage path the autopilot wants the URI to be stored in. Will only be valid if the transfer_type has a storage associated (e.g. MAVLink FTP).
  Storage: number[];
}

// Barometer readings for 3rd barometer
export interface MessageScaledPressure3 {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // Absolute pressure
  PressAbs: number;
  // Differential pressure
  PressDiff: number;
  // Absolute pressure temperature
  Temperature: number;
  // Differential pressure temperature (0, if not available). Report values of 0 (or 1) as 1 cdegC.
  TemperaturePressDiff: number;
}

// Current motion information from a designated system
export interface MessageFollowTarget {
  // Timestamp (time since system boot).
  Timestamp: number;
  // bit positions for tracker reporting capabilities (POS &#x3D; 0, VEL &#x3D; 1, ACCEL &#x3D; 2, ATT + RATES &#x3D; 3)
  EstCapabilities: number;
  // Latitude (WGS84)
  Lat: number;
  // Longitude (WGS84)
  Lon: number;
  // Altitude (MSL)
  Alt: number;
  // target velocity (0,0,0) for unknown
  Vel: number[];
  // linear target acceleration (0,0,0) for unknown
  Acc: number[];
  // (0 0 0 0 for unknown)
  AttitudeQ: number[];
  // (0 0 0 for unknown)
  Rates: number[];
  // eph epv
  PositionCov: number[];
  // button states or switches of a tracker device
  CustomState: number;
}

// The smoothed, monotonic system state used to feed the control loops of the system.
export interface MessageControlSystemState {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // X acceleration in body frame
  XAcc: number;
  // Y acceleration in body frame
  YAcc: number;
  // Z acceleration in body frame
  ZAcc: number;
  // X velocity in body frame
  XVel: number;
  // Y velocity in body frame
  YVel: number;
  // Z velocity in body frame
  ZVel: number;
  // X position in local frame
  XPos: number;
  // Y position in local frame
  YPos: number;
  // Z position in local frame
  ZPos: number;
  // Airspeed, set to -1 if unknown
  Airspeed: number;
  // Variance of body velocity estimate
  VelVariance: number[];
  // Variance in local position
  PosVariance: number[];
  // The attitude, represented as Quaternion
  Q: number[];
  // Angular rate in roll axis
  RollRate: number;
  // Angular rate in pitch axis
  PitchRate: number;
  // Angular rate in yaw axis
  YawRate: number;
}

// Battery information. Updates GCS with flight controller battery status. Smart batteries also use this message, but may additionally send BATTERY_INFO.
export interface MessageBatteryStatus {
  // Battery ID
  Id: number;
  // Function of the battery
  BatteryFunction: MAV_BATTERY_FUNCTION;
  // Type (chemistry) of the battery
  Type: MAV_BATTERY_TYPE;
  // Temperature of the battery. INT16_MAX for unknown temperature.
  Temperature: number;
  // Battery voltage of cells 1 to 10 (see voltages_ext for cells 11-14). Cells in this field above the valid cell count for this battery should have the UINT16_MAX value. If individual cell voltages are unknown or not measured for this battery, then the overall battery voltage should be filled in cell 0, with all others set to UINT16_MAX. If the voltage of the battery is greater than (UINT16_MAX - 1), then cell 0 should be set to (UINT16_MAX - 1), and cell 1 to the remaining voltage. This can be extended to multiple cells if the total voltage is greater than 2 * (UINT16_MAX - 1).
  Voltages: number[];
  // Battery current, -1: autopilot does not measure the current
  CurrentBattery: number;
  // Consumed charge, -1: autopilot does not provide consumption estimate
  CurrentConsumed: number;
  // Consumed energy, -1: autopilot does not provide energy consumption estimate
  EnergyConsumed: number;
  // Remaining battery energy. Values: [0-100], -1: autopilot does not estimate the remaining battery.
  BatteryRemaining: number;
  // Remaining battery time, 0: autopilot does not provide remaining battery time estimate
  TimeRemaining: number;
  // State for extent of discharge, provided by autopilot for warning or external reactions
  ChargeState: MAV_BATTERY_CHARGE_STATE;
  // Battery voltages for cells 11 to 14. Cells above the valid cell count for this battery should have a value of 0, where zero indicates not supported (note, this is different than for the voltages field and allows empty byte truncation). If the measured value is 0 then 1 should be sent instead.
  VoltagesExt: number[];
  // Battery mode. Default (0) is that battery mode reporting is not supported or battery is in normal-use mode.
  Mode: MAV_BATTERY_MODE;
  // Fault/health indications. These should be set when charge_state is MAV_BATTERY_CHARGE_STATE_FAILED or MAV_BATTERY_CHARGE_STATE_UNHEALTHY (if not, fault reporting is not supported).
  FaultBitmask: MAV_BATTERY_FAULT;
}

// Version and capability of autopilot software. This should be emitted in response to a request with MAV_CMD_REQUEST_MESSAGE.
export interface MessageAutopilotVersion {
  // Bitmap of capabilities
  Capabilities: MAV_PROTOCOL_CAPABILITY;
  // Firmware version number.
  // The field must be encoded as 4 bytes, where each byte (shown from MSB to LSB) is part of a semantic version: (major) (minor) (patch) (FIRMWARE_VERSION_TYPE).
  FlightSwVersion: number;
  // Middleware version number
  MiddlewareSwVersion: number;
  // Operating system version number
  OsSwVersion: number;
  // HW / board version (last 8 bits should be silicon ID, if any). The first 16 bits of this field specify https://github.com/PX4/PX4-Bootloader/blob/master/board_types.txt
  BoardVersion: number;
  // Custom version field, commonly the first 8 bytes of the git hash. This is not an unique identifier, but should allow to identify the commit using the main version number even for very large code bases.
  FlightCustomVersion: number[];
  // Custom version field, commonly the first 8 bytes of the git hash. This is not an unique identifier, but should allow to identify the commit using the main version number even for very large code bases.
  MiddlewareCustomVersion: number[];
  // Custom version field, commonly the first 8 bytes of the git hash. This is not an unique identifier, but should allow to identify the commit using the main version number even for very large code bases.
  OsCustomVersion: number[];
  // ID of the board vendor
  VendorId: number;
  // ID of the product
  ProductId: number;
  // UID if provided by hardware (see uid2)
  Uid: number;
  // UID if provided by hardware (supersedes the uid field. If this is non-zero, use this field, otherwise use uid)
  Uid2: number[];
}

// The location of a landing target. See: https://mavlink.io/en/services/landing_target.html
export interface MessageLandingTarget {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // The ID of the target if multiple targets are present
  TargetNum: number;
  // Coordinate frame used for following fields.
  Frame: MAV_FRAME;
  // X-axis angular offset of the target from the center of the image
  AngleX: number;
  // Y-axis angular offset of the target from the center of the image
  AngleY: number;
  // Distance to the target from the vehicle
  Distance: number;
  // Size of target along x-axis
  SizeX: number;
  // Size of target along y-axis
  SizeY: number;
  // X Position of the landing target in MAV_FRAME
  X: number;
  // Y Position of the landing target in MAV_FRAME
  Y: number;
  // Z Position of the landing target in MAV_FRAME
  Z: number;
  // Quaternion of landing target orientation (w, x, y, z order, zero-rotation is 1, 0, 0, 0)
  Q: number[];
  // Type of landing target
  Type: LANDING_TARGET_TYPE;
  // Position fields (x, y, z, q, type) contain valid target position information (BOOL_FALSE: invalid values). Values not equal to 0 or 1 are invalid.
  PositionValid: BOOL;
}

// Status of geo-fencing. Sent in extended status stream when fencing enabled.
export interface MessageFenceStatus {
  // Breach status (0 if currently inside fence, 1 if outside).
  BreachStatus: number;
  // Number of fence breaches.
  BreachCount: number;
  // Last breach type.
  BreachType: FENCE_BREACH;
  // Time (since boot) of last breach.
  BreachTime: number;
  // Active action to prevent fence breach
  BreachMitigation: FENCE_MITIGATE;
}

// Reports results of completed compass calibration. Sent until MAG_CAL_ACK received.
export interface MessageMagCalReport {
  // Compass being calibrated.
  CompassId: number;
  // Bitmask of compasses being calibrated.
  CalMask: number;
  // Calibration Status.
  CalStatus: MAG_CAL_STATUS;
  // 0&#x3D;requires a MAV_CMD_DO_ACCEPT_MAG_CAL, 1&#x3D;saved to parameters.
  Autosaved: number;
  // RMS milligauss residuals.
  Fitness: number;
  // X offset.
  OfsX: number;
  // Y offset.
  OfsY: number;
  // Z offset.
  OfsZ: number;
  // X diagonal (matrix 11).
  DiagX: number;
  // Y diagonal (matrix 22).
  DiagY: number;
  // Z diagonal (matrix 33).
  DiagZ: number;
  // X off-diagonal (matrix 12 and 21).
  OffdiagX: number;
  // Y off-diagonal (matrix 13 and 31).
  OffdiagY: number;
  // Z off-diagonal (matrix 32 and 23).
  OffdiagZ: number;
  // Confidence in orientation (higher is better).
  OrientationConfidence: number;
  // orientation before calibration.
  OldOrientation: MAV_SENSOR_ORIENTATION;
  // orientation after calibration.
  NewOrientation: MAV_SENSOR_ORIENTATION;
  // field radius correction factor
  ScaleFactor: number;
}

// EFI status output
export interface MessageEfiStatus {
  // EFI health status
  Health: number;
  // ECU index
  EcuIndex: number;
  // RPM
  Rpm: number;
  // Fuel consumed
  FuelConsumed: number;
  // Fuel flow rate
  FuelFlow: number;
  // Engine load
  EngineLoad: number;
  // Throttle position
  ThrottlePosition: number;
  // Spark dwell time
  SparkDwellTime: number;
  // Barometric pressure
  BarometricPressure: number;
  // Intake manifold pressure(
  IntakeManifoldPressure: number;
  // Intake manifold temperature
  IntakeManifoldTemperature: number;
  // Cylinder head temperature
  CylinderHeadTemperature: number;
  // Ignition timing (Crank angle degrees)
  IgnitionTiming: number;
  // Injection time
  InjectionTime: number;
  // Exhaust gas temperature
  ExhaustGasTemperature: number;
  // Output throttle
  ThrottleOut: number;
  // Pressure/temperature compensation
  PtCompensation: number;
  // Supply voltage to EFI sparking system.  Zero in this value means &quot;unknown&quot;, so if the supply voltage really is zero volts use 0.0001 instead.
  IgnitionVoltage: number;
  // Fuel pressure. Zero in this value means &quot;unknown&quot;, so if the fuel pressure really is zero kPa use 0.0001 instead.
  FuelPressure: number;
}

// Estimator status message including flags, innovation test ratios and estimated accuracies. The flags message is an integer bitmask containing information on which EKF outputs are valid. See the ESTIMATOR_STATUS_FLAGS enum definition for further information. The innovation test ratios show the magnitude of the sensor innovation divided by the innovation check threshold. Under normal operation the innovation test ratios should be below 0.5 with occasional values up to 1.0. Values greater than 1.0 should be rare under normal operation and indicate that a measurement has been rejected by the filter. The user should be notified if an innovation test ratio greater than 1.0 is recorded. Notifications for values in the range between 0.5 and 1.0 should be optional and controllable by the user.
export interface MessageEstimatorStatus {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // Bitmap indicating which EKF outputs are valid.
  Flags: ESTIMATOR_STATUS_FLAGS;
  // Velocity innovation test ratio
  VelRatio: number;
  // Horizontal position innovation test ratio
  PosHorizRatio: number;
  // Vertical position innovation test ratio
  PosVertRatio: number;
  // Magnetometer innovation test ratio
  MagRatio: number;
  // Height above terrain innovation test ratio
  HaglRatio: number;
  // True airspeed innovation test ratio
  TasRatio: number;
  // Horizontal position 1-STD accuracy relative to the EKF local origin
  PosHorizAccuracy: number;
  // Vertical position 1-STD accuracy relative to the EKF local origin
  PosVertAccuracy: number;
}

// Wind estimate from vehicle. Note that despite the name, this message does not actually contain any covariances but instead variability and accuracy fields in terms of standard deviation (1-STD).
export interface MessageWindCov {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // Wind in North (NED) direction (NAN if unknown)
  WindX: number;
  // Wind in East (NED) direction (NAN if unknown)
  WindY: number;
  // Wind in down (NED) direction (NAN if unknown)
  WindZ: number;
  // Variability of wind in XY, 1-STD estimated from a 1 Hz lowpassed wind estimate (NAN if unknown)
  VarHoriz: number;
  // Variability of wind in Z, 1-STD estimated from a 1 Hz lowpassed wind estimate (NAN if unknown)
  VarVert: number;
  // Altitude (MSL) that this measurement was taken at (NAN if unknown)
  WindAlt: number;
  // Horizontal speed 1-STD accuracy (0 if unknown)
  HorizAccuracy: number;
  // Vertical speed 1-STD accuracy (0 if unknown)
  VertAccuracy: number;
}

// GPS sensor input message.  This is a raw sensor value sent by the GPS. This is NOT the global position estimate of the system.
export interface MessageGpsInput {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // ID of the GPS for multiple GPS inputs
  GpsId: number;
  // Bitmap indicating which GPS input flags fields to ignore.  All other fields must be provided.
  IgnoreFlags: GPS_INPUT_IGNORE_FLAGS;
  // GPS time (from start of GPS week)
  TimeWeekMs: number;
  // GPS week number
  TimeWeek: number;
  // 0-1: no fix, 2: 2D fix, 3: 3D fix. 4: 3D with DGPS. 5: 3D with RTK
  FixType: number;
  // Latitude (WGS84)
  Lat: number;
  // Longitude (WGS84)
  Lon: number;
  // Altitude (MSL). Positive for up.
  Alt: number;
  // GPS HDOP horizontal dilution of position (unitless). If unknown, set to: UINT16_MAX
  Hdop: number;
  // GPS VDOP vertical dilution of position (unitless). If unknown, set to: UINT16_MAX
  Vdop: number;
  // GPS velocity in north direction in earth-fixed NED frame
  Vn: number;
  // GPS velocity in east direction in earth-fixed NED frame
  Ve: number;
  // GPS velocity in down direction in earth-fixed NED frame
  Vd: number;
  // GPS speed accuracy
  SpeedAccuracy: number;
  // GPS horizontal accuracy
  HorizAccuracy: number;
  // GPS vertical accuracy
  VertAccuracy: number;
  // Number of satellites visible.
  SatellitesVisible: number;
  // Yaw of vehicle relative to Earth&#x27;s North, zero means not available, use 36000 for north
  Yaw: number;
}

// RTCM message for injecting into the onboard GPS (used for DGPS)
export interface MessageGpsRtcmData {
  // LSB: 1 means message is fragmented, next 2 bits are the fragment ID, the remaining 5 bits are used for the sequence ID. Messages are only to be flushed to the GPS when the entire message has been reconstructed on the autopilot. The fragment ID specifies which order the fragments should be assembled into a buffer, while the sequence ID is used to detect a mismatch between different buffers. The buffer is considered fully reconstructed when either all 4 fragments are present, or all the fragments before the first fragment with a non full payload is received. This management is used to ensure that normal GPS operation doesn&#x27;t corrupt RTCM data, and to recover from a unreliable transport delivery order.
  Flags: number;
  // data length
  Len: number;
  // RTCM message (may be fragmented)
  Data: number[];
}

// Message appropriate for high latency connections like Iridium
export interface MessageHighLatency {
  // Bitmap of enabled system modes.
  BaseMode: MAV_MODE_FLAG;
  // A bitfield for use for autopilot-specific flags.
  CustomMode: number;
  // The landed state. Is set to MAV_LANDED_STATE_UNDEFINED if landed state is unknown.
  LandedState: MAV_LANDED_STATE;
  // roll
  Roll: number;
  // pitch
  Pitch: number;
  // heading
  Heading: number;
  // throttle (percentage)
  Throttle: number;
  // heading setpoint
  HeadingSp: number;
  // Latitude
  Latitude: number;
  // Longitude
  Longitude: number;
  // Altitude above mean sea level
  AltitudeAmsl: number;
  // Altitude setpoint relative to the home position
  AltitudeSp: number;
  // airspeed
  Airspeed: number;
  // airspeed setpoint
  AirspeedSp: number;
  // groundspeed
  Groundspeed: number;
  // climb rate
  ClimbRate: number;
  // Number of satellites visible. If unknown, set to UINT8_MAX
  GpsNsat: number;
  // GPS Fix type.
  GpsFixType: GPS_FIX_TYPE;
  // Remaining battery (percentage)
  BatteryRemaining: number;
  // Autopilot temperature (degrees C)
  Temperature: number;
  // Air temperature (degrees C) from airspeed sensor
  TemperatureAir: number;
  // failsafe (each bit represents a failsafe where 0&#x3D;ok, 1&#x3D;failsafe active (bit0:RC, bit1:batt, bit2:GPS, bit3:GCS, bit4:fence)
  Failsafe: number;
  // current waypoint number
  WpNum: number;
  // distance to target
  WpDistance: number;
}

// Message appropriate for high latency connections like Iridium (version 2)
export interface MessageHighLatency2 {
  // Timestamp (milliseconds since boot or Unix epoch)
  Timestamp: number;
  // Type of the MAV (quadrotor, helicopter, etc.)
  Type: MAV_TYPE;
  // Autopilot type / class. Use MAV_AUTOPILOT_INVALID for components that are not flight controllers.
  Autopilot: MAV_AUTOPILOT;
  // A bitfield for use for autopilot-specific flags (2 byte version).
  CustomMode: number;
  // Latitude
  Latitude: number;
  // Longitude
  Longitude: number;
  // Altitude above mean sea level
  Altitude: number;
  // Altitude setpoint
  TargetAltitude: number;
  // Heading
  Heading: number;
  // Heading setpoint
  TargetHeading: number;
  // Distance to target waypoint or position
  TargetDistance: number;
  // Throttle
  Throttle: number;
  // Airspeed
  Airspeed: number;
  // Airspeed setpoint
  AirspeedSp: number;
  // Groundspeed
  Groundspeed: number;
  // Windspeed
  Windspeed: number;
  // Wind heading
  WindHeading: number;
  // Maximum error horizontal position since last message
  Eph: number;
  // Maximum error vertical position since last message
  Epv: number;
  // Air temperature
  TemperatureAir: number;
  // Maximum climb rate magnitude since last message
  ClimbRate: number;
  // Battery level (-1 if field not provided).
  Battery: number;
  // Current waypoint number
  WpNum: number;
  // Bitmap of failure flags.
  FailureFlags: HL_FAILURE_FLAG;
  // Field for custom payload.
  Custom0: number;
  // Field for custom payload.
  Custom1: number;
  // Field for custom payload.
  Custom2: number;
}

// Vibration levels and accelerometer clipping
export interface MessageVibration {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // Vibration levels on X-axis
  VibrationX: number;
  // Vibration levels on Y-axis
  VibrationY: number;
  // Vibration levels on Z-axis
  VibrationZ: number;
  // first accelerometer clipping count
  Clipping0: number;
  // second accelerometer clipping count
  Clipping1: number;
  // third accelerometer clipping count
  Clipping2: number;
}

// Contains the home position.
// The home position is the default position that the system will return to and land on.
// The position must be set automatically by the system during the takeoff, and may also be explicitly set using MAV_CMD_DO_SET_HOME.
// The global and local positions encode the position in the respective coordinate frames, while the q parameter encodes the orientation of the surface.
// Under normal conditions it describes the heading and terrain slope, which can be used by the aircraft to adjust the approach.
// The approach 3D vector describes the point to which the system should fly in normal flight mode and then perform a landing sequence along the vector.
// Note: this message can be requested by sending the MAV_CMD_REQUEST_MESSAGE with param1&#x3D;242 (or the deprecated MAV_CMD_GET_HOME_POSITION command).
export interface MessageHomePosition {
  // Latitude (WGS84)
  Latitude: number;
  // Longitude (WGS84)
  Longitude: number;
  // Altitude (MSL). Positive for up.
  Altitude: number;
  // Local X position of this position in the local coordinate frame (NED)
  X: number;
  // Local Y position of this position in the local coordinate frame (NED)
  Y: number;
  // Local Z position of this position in the local coordinate frame (NED: positive &quot;down&quot;)
  Z: number;
  // Quaternion indicating world-to-surface-normal and heading transformation of the takeoff position.
  // Used to indicate the heading and slope of the ground.
  // All fields should be set to NaN if an accurate quaternion for both heading and surface slope cannot be supplied.
  Q: number[];
  // Local X position of the end of the approach vector. Multicopters should set this position based on their takeoff path. Grass-landing fixed wing aircraft should set it the same way as multicopters. Runway-landing fixed wing aircraft should set it to the opposite direction of the takeoff, assuming the takeoff happened from the threshold / touchdown zone.
  ApproachX: number;
  // Local Y position of the end of the approach vector. Multicopters should set this position based on their takeoff path. Grass-landing fixed wing aircraft should set it the same way as multicopters. Runway-landing fixed wing aircraft should set it to the opposite direction of the takeoff, assuming the takeoff happened from the threshold / touchdown zone.
  ApproachY: number;
  // Local Z position of the end of the approach vector. Multicopters should set this position based on their takeoff path. Grass-landing fixed wing aircraft should set it the same way as multicopters. Runway-landing fixed wing aircraft should set it to the opposite direction of the takeoff, assuming the takeoff happened from the threshold / touchdown zone.
  ApproachZ: number;
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
}

// Sets the home position.
// The home position is the default position that the system will return to and land on.
// The position is set automatically by the system during the takeoff (and may also be set using this message).
// The global and local positions encode the position in the respective coordinate frames, while the q parameter encodes the orientation of the surface.
// Under normal conditions it describes the heading and terrain slope, which can be used by the aircraft to adjust the approach.
// The approach 3D vector describes the point to which the system should fly in normal flight mode and then perform a landing sequence along the vector.
// Note: the current home position may be emitted in a HOME_POSITION message on request (using MAV_CMD_REQUEST_MESSAGE with param1&#x3D;242).
export interface MessageSetHomePosition {
  // System ID.
  TargetSystem: number;
  // Latitude (WGS84)
  Latitude: number;
  // Longitude (WGS84)
  Longitude: number;
  // Altitude (MSL). Positive for up.
  Altitude: number;
  // Local X position of this position in the local coordinate frame (NED)
  X: number;
  // Local Y position of this position in the local coordinate frame (NED)
  Y: number;
  // Local Z position of this position in the local coordinate frame (NED: positive &quot;down&quot;)
  Z: number;
  // World to surface normal and heading transformation of the takeoff position. Used to indicate the heading and slope of the ground
  Q: number[];
  // Local X position of the end of the approach vector. Multicopters should set this position based on their takeoff path. Grass-landing fixed wing aircraft should set it the same way as multicopters. Runway-landing fixed wing aircraft should set it to the opposite direction of the takeoff, assuming the takeoff happened from the threshold / touchdown zone.
  ApproachX: number;
  // Local Y position of the end of the approach vector. Multicopters should set this position based on their takeoff path. Grass-landing fixed wing aircraft should set it the same way as multicopters. Runway-landing fixed wing aircraft should set it to the opposite direction of the takeoff, assuming the takeoff happened from the threshold / touchdown zone.
  ApproachY: number;
  // Local Z position of the end of the approach vector. Multicopters should set this position based on their takeoff path. Grass-landing fixed wing aircraft should set it the same way as multicopters. Runway-landing fixed wing aircraft should set it to the opposite direction of the takeoff, assuming the takeoff happened from the threshold / touchdown zone.
  ApproachZ: number;
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
}

// The interval between messages for a particular MAVLink message ID.
// This message is sent in response to the MAV_CMD_REQUEST_MESSAGE command with param1&#x3D;244 (this message) and param2&#x3D;message_id (the id of the message for which the interval is required).
// It may also be sent in response to MAV_CMD_GET_MESSAGE_INTERVAL.
// This interface replaces DATA_STREAM.
export interface MessageMessageInterval {
  // The ID of the requested MAVLink message. v1.0 is limited to 254 messages.
  MessageId: number;
  // The interval between two messages. A value of -1 indicates this stream is disabled, 0 indicates it is not available, &gt; 0 indicates the interval at which it is sent.
  IntervalUs: number;
}

// Provides state for additional features
export interface MessageExtendedSysState {
  // The VTOL state if applicable. Is set to MAV_VTOL_STATE_UNDEFINED if UAV is not in VTOL configuration.
  VtolState: MAV_VTOL_STATE;
  // The landed state. Is set to MAV_LANDED_STATE_UNDEFINED if landed state is unknown.
  LandedState: MAV_LANDED_STATE;
}

// The location and information of an ADSB vehicle
export interface MessageAdsbVehicle {
  // ICAO address
  IcaoAddress: number;
  // Latitude
  Lat: number;
  // Longitude
  Lon: number;
  // ADSB altitude type.
  AltitudeType: ADSB_ALTITUDE_TYPE;
  // Altitude(ASL)
  Altitude: number;
  // Course over ground
  Heading: number;
  // The horizontal velocity
  HorVelocity: number;
  // The vertical velocity. Positive is up
  VerVelocity: number;
  // The callsign, 8+null
  Callsign: string;
  // ADSB emitter type.
  EmitterType: ADSB_EMITTER_TYPE;
  // Time since last communication in seconds
  Tslc: number;
  // Bitmap to indicate various statuses including valid data fields
  Flags: ADSB_FLAGS;
  // Squawk code. Note that the code is in decimal: e.g. 7700 (general emergency) is encoded as binary 0b0001_1110_0001_0100, not(!) as 0b0000_111_111_000_000
  Squawk: number;
}

// Information about a potential collision
export interface MessageCollision {
  // Collision data source
  Src: MAV_COLLISION_SRC;
  // Unique identifier, domain based on src field
  Id: number;
  // Action that is being taken to avoid this collision
  Action: MAV_COLLISION_ACTION;
  // How concerned the aircraft is about this collision
  ThreatLevel: MAV_COLLISION_THREAT_LEVEL;
  // Estimated time until collision occurs
  TimeToMinimumDelta: number;
  // Closest vertical distance between vehicle and object
  AltitudeMinimumDelta: number;
  // Closest horizontal distance between vehicle and object
  HorizontalMinimumDelta: number;
}

// Message implementing parts of the V2 payload specs in V1 frames for transitional support.
export interface MessageV2Extension {
  // Network ID (0 for broadcast)
  TargetNetwork: number;
  // System ID (0 for broadcast)
  TargetSystem: number;
  // Component ID (0 for broadcast)
  TargetComponent: number;
  // A code that identifies the software component that understands this message (analogous to USB device classes or mime type strings). If this code is less than 32768, it is considered a &#x27;registered&#x27; protocol extension and the corresponding entry should be added to https://github.com/mavlink/mavlink/definition_files/extension_message_ids.xml. Software creators can register blocks of message IDs as needed (useful for GCS specific metadata, etc...). Message_types greater than 32767 are considered local experiments and should not be checked in to any widely distributed codebase.
  MessageType: number;
  // Variable length payload. The length must be encoded in the payload as part of the message_type protocol, e.g. by including the length as payload data, or by terminating the payload data with a non-zero marker. This is required in order to reconstruct zero-terminated payloads that are (or otherwise would be) trimmed by MAVLink 2 empty-byte truncation. The entire content of the payload block is opaque unless you understand the encoding message_type. The particular encoding used can be extension specific and might not always be documented as part of the MAVLink specification.
  Payload: number[];
}

// Send raw controller memory. The use of this message is discouraged for normal packets, but a quite efficient way for testing new messages and getting experimental debug output.
export interface MessageMemoryVect {
  // Starting address of the debug variables
  Address: number;
  // Version code of the type variable. 0&#x3D;unknown, type ignored and assumed int16_t. 1&#x3D;as below
  Ver: number;
  // Type code of the memory variables. for ver &#x3D; 1: 0&#x3D;16 x int16_t, 1&#x3D;16 x uint16_t, 2&#x3D;16 x Q15, 3&#x3D;16 x 1Q14
  Type: number;
  // Memory contents at specified address
  Value: number[];
}

// To debug something using a named 3D vector.
export interface MessageDebugVect {
  // Name
  Name: string;
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // x
  X: number;
  // y
  Y: number;
  // z
  Z: number;
}

// Send a key-value pair as float. The use of this message is discouraged for normal packets, but a quite efficient way for testing new messages and getting experimental debug output.
export interface MessageNamedValueFloat {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // Name of the debug variable
  Name: string;
  // Floating point value
  Value: number;
}

// Send a key-value pair as integer. The use of this message is discouraged for normal packets, but a quite efficient way for testing new messages and getting experimental debug output.
export interface MessageNamedValueInt {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // Name of the debug variable
  Name: string;
  // Signed integer value
  Value: number;
}

// Status text message. These messages are printed in yellow in the COMM console of QGroundControl. WARNING: They consume quite some bandwidth, so use only for important status and error messages. If implemented wisely, these messages are buffered on the MCU and sent only at a limited rate (e.g. 10 Hz).
export interface MessageStatustext {
  // Severity of status. Relies on the definitions within RFC-5424.
  Severity: MAV_SEVERITY;
  // Status text message, without null termination character
  Text: string;
  // Unique (opaque) identifier for this statustext message.  May be used to reassemble a logical long-statustext message from a sequence of chunks.  A value of zero indicates this is the only chunk in the sequence and the message can be emitted immediately.
  Id: number;
  // This chunk&#x27;s sequence number; indexing is from zero.  Any null character in the text field is taken to mean this was the last chunk.
  ChunkSeq: number;
}

// Send a debug value. The index is used to discriminate between values. These values show up in the plot of QGroundControl as DEBUG N.
export interface MessageDebug {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // index of debug variable
  Ind: number;
  // DEBUG value
  Value: number;
}

// Setup a MAVLink2 signing key. If called with secret_key of all zero and zero initial_timestamp will disable signing
export interface MessageSetupSigning {
  // system id of the target
  TargetSystem: number;
  // component ID of the target
  TargetComponent: number;
  // signing key
  SecretKey: number[];
  // initial timestamp
  InitialTimestamp: number;
}

// Report button state change.
export interface MessageButtonChange {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // Time of last change of button state.
  LastChangeMs: number;
  // Bitmap for state of buttons.
  State: number;
}

// Control vehicle tone generation (buzzer).
export interface MessagePlayTune {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // tune in board specific format
  Tune: string;
  // tune extension (appended to tune)
  Tune2: string;
}

// Information about a camera. Can be requested with a MAV_CMD_REQUEST_MESSAGE command.
export interface MessageCameraInformation {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // Name of the camera vendor
  VendorName: number[];
  // Name of the camera model
  ModelName: number[];
  // Version of the camera firmware, encoded as: &#x60;(Dev &amp; 0xff) &lt;&lt; 24 \| (Patch &amp; 0xff) &lt;&lt; 16 \| (Minor &amp; 0xff) &lt;&lt; 8 \| (Major &amp; 0xff)&#x60;. Use 0 if not known.
  FirmwareVersion: number;
  // Focal length. Use NaN if not known.
  FocalLength: number;
  // Image sensor size horizontal. Use NaN if not known.
  SensorSizeH: number;
  // Image sensor size vertical. Use NaN if not known.
  SensorSizeV: number;
  // Horizontal image resolution. Use 0 if not known.
  ResolutionH: number;
  // Vertical image resolution. Use 0 if not known.
  ResolutionV: number;
  // Reserved for a lens ID.  Use 0 if not known.
  LensId: number;
  // Bitmap of camera capability flags.
  Flags: CAMERA_CAP_FLAGS;
  // Camera definition version (iteration).  Use 0 if not known.
  CamDefinitionVersion: number;
  // Camera definition URI (if any, otherwise only basic functions will be available). HTTP- (http://) and MAVLink FTP- (mavlinkftp://) formatted URIs are allowed (and both must be supported by any GCS that implements the Camera Protocol). The definition file may be xz compressed, which will be indicated by the file extension .xml.xz (a GCS that implements the protocol must support decompressing the file). The string needs to be zero terminated.  Use a zero-length string if not known.
  CamDefinitionUri: string;
  // Gimbal id of a gimbal associated with this camera. This is the component id of the gimbal device, or 1-6 for non mavlink gimbals. Use 0 if no gimbal is associated with the camera.
  GimbalDeviceId: number;
  // Camera id of a non-MAVLink camera attached to an autopilot (1-6).  0 if the component is a MAVLink camera (with its own component id).
  CameraDeviceId: number;
}

// Settings of a camera. Can be requested with a MAV_CMD_REQUEST_MESSAGE command.
export interface MessageCameraSettings {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // Camera mode
  ModeId: CAMERA_MODE;
  // Current zoom level as a percentage of the full range (0.0 to 100.0, NaN if not known)
  Zoomlevel: number;
  // Current focus level as a percentage of the full range (0.0 to 100.0, NaN if not known)
  Focuslevel: number;
  // Camera id of a non-MAVLink camera attached to an autopilot (1-6).  0 if the component is a MAVLink camera (with its own component id).
  CameraDeviceId: number;
}

// Information about a storage medium. This message is sent in response to a request with MAV_CMD_REQUEST_MESSAGE and whenever the status of the storage changes (STORAGE_STATUS). Use MAV_CMD_REQUEST_MESSAGE.param2 to indicate the index/id of requested storage: 0 for all, 1 for first, 2 for second, etc.
export interface MessageStorageInformation {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // Storage ID (1 for first, 2 for second, etc.)
  StorageId: number;
  // Number of storage devices
  StorageCount: number;
  // Status of storage
  Status: STORAGE_STATUS;
  // Total capacity. If storage is not ready (STORAGE_STATUS_READY) value will be ignored.
  TotalCapacity: number;
  // Used capacity. If storage is not ready (STORAGE_STATUS_READY) value will be ignored.
  UsedCapacity: number;
  // Available storage capacity. If storage is not ready (STORAGE_STATUS_READY) value will be ignored.
  AvailableCapacity: number;
  // Read speed.
  ReadSpeed: number;
  // Write speed.
  WriteSpeed: number;
  // Type of storage
  Type: STORAGE_TYPE;
  // Textual storage name to be used in UI (microSD 1, Internal Memory, etc.) This is a NULL terminated string. If it is exactly 32 characters long, add a terminating NULL. If this string is empty, the generic type is shown to the user.
  Name: string;
  // Flags indicating whether this instance is preferred storage for photos, videos, etc.
  // Note: Implementations should initially set the flags on the system-default storage id used for saving media (if possible/supported).
  // This setting can then be overridden using MAV_CMD_SET_STORAGE_USAGE.
  // If the media usage flags are not set, a GCS may assume storage ID 1 is the default storage for all media types.
  StorageUsage: STORAGE_USAGE_FLAG;
}

// Information about the status of a capture. Can be requested with a MAV_CMD_REQUEST_MESSAGE command.
export interface MessageCameraCaptureStatus {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // Current status of image capturing (0: idle, 1: capture in progress, 2: interval set but idle, 3: interval set and capture in progress)
  ImageStatus: number;
  // Current status of video capturing (0: idle, 1: capture in progress)
  VideoStatus: number;
  // Image capture interval
  ImageInterval: number;
  // Elapsed time since recording started (0: Not supported/available). A GCS should compute recording time and use non-zero values of this field to correct any discrepancy.
  RecordingTimeMs: number;
  // Available storage capacity.
  AvailableCapacity: number;
  // Total number of images captured (&#x27;forever&#x27;, or until reset using MAV_CMD_STORAGE_FORMAT).
  ImageCount: number;
  // Camera id of a non-MAVLink camera attached to an autopilot (1-6).  0 if the component is a MAVLink camera (with its own component id).
  CameraDeviceId: number;
}

// Information about a captured image. This is emitted every time a message is captured.
// MAV_CMD_REQUEST_MESSAGE can be used to (re)request this message for a specific sequence number or range of sequence numbers:
// MAV_CMD_REQUEST_MESSAGE.param2 indicates the sequence number the first image to send, or set to -1 to send the message for all sequence numbers.
// MAV_CMD_REQUEST_MESSAGE.param3 is used to specify a range of messages to send:
// set to 0 (default) to send just the the message for the sequence number in param 2,
// set to -1 to send the message for the sequence number in param 2 and all the following sequence numbers,
// set to the sequence number of the final message in the range.
export interface MessageCameraImageCaptured {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // Timestamp (time since UNIX epoch) in UTC. 0 for unknown.
  TimeUtc: number;
  // Camera id of a non-MAVLink camera attached to an autopilot (1-6).  0 if the component is a MAVLink camera (with its own component id). Field name is usually camera_device_id.
  CameraId: number;
  // Latitude where image was taken
  Lat: number;
  // Longitude where capture was taken
  Lon: number;
  // Altitude (MSL) where image was taken
  Alt: number;
  // Altitude above ground
  RelativeAlt: number;
  // Quaternion of camera orientation (w, x, y, z order, zero-rotation is 1, 0, 0, 0)
  Q: number[];
  // Zero based index of this image (i.e. a new image will have index CAMERA_CAPTURE_STATUS.image count -1)
  ImageIndex: number;
  // Image was captured successfully (BOOL_TRUE). Values not equal to 0 or 1 are invalid.
  CaptureResult: BOOL;
  // URL of image taken. Either local storage or http://foo.jpg if camera provides an HTTP interface.
  FileUrl: string;
}

// Flight information.
// This includes time since boot for arm, takeoff, and land, and a flight number.
// Takeoff and landing values reset to zero on arm.
// This can be requested using MAV_CMD_REQUEST_MESSAGE.
// Note, some fields are misnamed - timestamps are from boot (not UTC) and the flight_uuid is a sequence number.
export interface MessageFlightInformation {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // Timestamp at arming (since system boot). Set to 0 on boot. Set value on arming. Note, field is misnamed UTC.
  ArmingTimeUtc: number;
  // Timestamp at takeoff (since system boot). Set to 0 at boot and on arming. Note, field is misnamed UTC.
  TakeoffTimeUtc: number;
  // Flight number. Note, field is misnamed UUID.
  FlightUuid: number;
  // Timestamp at landing (in ms since system boot). Set to 0 at boot and on arming.
  LandingTime: number;
}

// Orientation of a mount
export interface MessageMountOrientation {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // Roll in global frame (set to NaN for invalid).
  Roll: number;
  // Pitch in global frame (set to NaN for invalid).
  Pitch: number;
  // Yaw relative to vehicle (set to NaN for invalid).
  Yaw: number;
  // Yaw in absolute frame relative to Earth&#x27;s North, north is 0 (set to NaN for invalid).
  YawAbsolute: number;
}

// A message containing logged data (see also MAV_CMD_LOGGING_START)
export interface MessageLoggingData {
  // system ID of the target
  TargetSystem: number;
  // component ID of the target
  TargetComponent: number;
  // sequence number (can wrap)
  Sequence: number;
  // data length
  Length: number;
  // offset into data where first message starts. This can be used for recovery, when a previous message got lost (set to UINT8_MAX if no start exists).
  FirstMessageOffset: number;
  // logged data
  Data: number[];
}

// A message containing logged data which requires a LOGGING_ACK to be sent back
export interface MessageLoggingDataAcked {
  // system ID of the target
  TargetSystem: number;
  // component ID of the target
  TargetComponent: number;
  // sequence number (can wrap)
  Sequence: number;
  // data length
  Length: number;
  // offset into data where first message starts. This can be used for recovery, when a previous message got lost (set to UINT8_MAX if no start exists).
  FirstMessageOffset: number;
  // logged data
  Data: number[];
}

// An ack for a LOGGING_DATA_ACKED message
export interface MessageLoggingAck {
  // system ID of the target
  TargetSystem: number;
  // component ID of the target
  TargetComponent: number;
  // sequence number (must match the one in LOGGING_DATA_ACKED)
  Sequence: number;
}

// Information about video stream. It may be requested using MAV_CMD_REQUEST_MESSAGE, where param2 indicates the video stream id: 0 for all streams, 1 for first, 2 for second, etc.
export interface MessageVideoStreamInformation {
  // Video Stream ID (1 for first, 2 for second, etc.)
  StreamId: number;
  // Number of streams available.
  Count: number;
  // Type of stream.
  Type: VIDEO_STREAM_TYPE;
  // Bitmap of stream status flags.
  Flags: VIDEO_STREAM_STATUS_FLAGS;
  // Frame rate.
  Framerate: number;
  // Horizontal resolution.
  ResolutionH: number;
  // Vertical resolution.
  ResolutionV: number;
  // Bit rate.
  Bitrate: number;
  // Video image rotation clockwise.
  Rotation: number;
  // Horizontal Field of view.
  Hfov: number;
  // Stream name.
  Name: string;
  // Video stream URI (TCP or RTSP URI ground station should connect to) or port number (UDP port ground station should listen to).
  Uri: string;
  // Encoding of stream.
  Encoding: VIDEO_STREAM_ENCODING;
  // Camera id of a non-MAVLink camera attached to an autopilot (1-6).  0 if the component is a MAVLink camera (with its own component id).
  CameraDeviceId: number;
}

// Information about the status of a video stream. It may be requested using MAV_CMD_REQUEST_MESSAGE.
export interface MessageVideoStreamStatus {
  // Video Stream ID (1 for first, 2 for second, etc.)
  StreamId: number;
  // Bitmap of stream status flags
  Flags: VIDEO_STREAM_STATUS_FLAGS;
  // Frame rate
  Framerate: number;
  // Horizontal resolution
  ResolutionH: number;
  // Vertical resolution
  ResolutionV: number;
  // Bit rate
  Bitrate: number;
  // Video image rotation clockwise
  Rotation: number;
  // Horizontal Field of view
  Hfov: number;
  // Camera id of a non-MAVLink camera attached to an autopilot (1-6).  0 if the component is a MAVLink camera (with its own component id).
  CameraDeviceId: number;
}

// Information about the field of view of a camera. Can be requested with a MAV_CMD_REQUEST_MESSAGE command.
export interface MessageCameraFovStatus {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // Latitude of camera (INT32_MAX if unknown).
  LatCamera: number;
  // Longitude of camera (INT32_MAX if unknown).
  LonCamera: number;
  // Altitude (MSL) of camera (INT32_MAX if unknown).
  AltCamera: number;
  // Latitude of center of image (INT32_MAX if unknown, INT32_MIN if at infinity, not intersecting with horizon).
  LatImage: number;
  // Longitude of center of image (INT32_MAX if unknown, INT32_MIN if at infinity, not intersecting with horizon).
  LonImage: number;
  // Altitude (MSL) of center of image (INT32_MAX if unknown, INT32_MIN if at infinity, not intersecting with horizon).
  AltImage: number;
  // Quaternion of camera orientation (w, x, y, z order, zero-rotation is 1, 0, 0, 0)
  Q: number[];
  // Horizontal field of view (NaN if unknown).
  Hfov: number;
  // Vertical field of view (NaN if unknown).
  Vfov: number;
  // Camera id of a non-MAVLink camera attached to an autopilot (1-6).  0 if the component is a MAVLink camera (with its own component id).
  CameraDeviceId: number;
}

// Camera tracking status, sent while in active tracking. Use MAV_CMD_SET_MESSAGE_INTERVAL to define message interval.
export interface MessageCameraTrackingImageStatus {
  // Current tracking status
  TrackingStatus: CAMERA_TRACKING_STATUS_FLAGS;
  // Current tracking mode
  TrackingMode: CAMERA_TRACKING_MODE;
  // Defines location of target data
  TargetData: CAMERA_TRACKING_TARGET_DATA;
  // Current tracked point x value if CAMERA_TRACKING_MODE_POINT (normalized 0..1, 0 is left, 1 is right), NAN if unknown
  PointX: number;
  // Current tracked point y value if CAMERA_TRACKING_MODE_POINT (normalized 0..1, 0 is top, 1 is bottom), NAN if unknown
  PointY: number;
  // Current tracked radius if CAMERA_TRACKING_MODE_POINT (normalized 0..1, 0 is image left, 1 is image right), NAN if unknown
  Radius: number;
  // Current tracked rectangle top x value if CAMERA_TRACKING_MODE_RECTANGLE (normalized 0..1, 0 is left, 1 is right), NAN if unknown
  RecTopX: number;
  // Current tracked rectangle top y value if CAMERA_TRACKING_MODE_RECTANGLE (normalized 0..1, 0 is top, 1 is bottom), NAN if unknown
  RecTopY: number;
  // Current tracked rectangle bottom x value if CAMERA_TRACKING_MODE_RECTANGLE (normalized 0..1, 0 is left, 1 is right), NAN if unknown
  RecBottomX: number;
  // Current tracked rectangle bottom y value if CAMERA_TRACKING_MODE_RECTANGLE (normalized 0..1, 0 is top, 1 is bottom), NAN if unknown
  RecBottomY: number;
  // Camera id of a non-MAVLink camera attached to an autopilot (1-6).  0 if the component is a MAVLink camera (with its own component id).
  CameraDeviceId: number;
}

// Camera tracking status, sent while in active tracking. Use MAV_CMD_SET_MESSAGE_INTERVAL to define message interval.
export interface MessageCameraTrackingGeoStatus {
  // Current tracking status
  TrackingStatus: CAMERA_TRACKING_STATUS_FLAGS;
  // Latitude of tracked object
  Lat: number;
  // Longitude of tracked object
  Lon: number;
  // Altitude of tracked object(AMSL, WGS84)
  Alt: number;
  // Horizontal accuracy. NAN if unknown
  HAcc: number;
  // Vertical accuracy. NAN if unknown
  VAcc: number;
  // North velocity of tracked object. NAN if unknown
  VelN: number;
  // East velocity of tracked object. NAN if unknown
  VelE: number;
  // Down velocity of tracked object. NAN if unknown
  VelD: number;
  // Velocity accuracy. NAN if unknown
  VelAcc: number;
  // Distance between camera and tracked object. NAN if unknown
  Dist: number;
  // Heading in radians, in NED. NAN if unknown
  Hdg: number;
  // Accuracy of heading, in NED. NAN if unknown
  HdgAcc: number;
  // Camera id of a non-MAVLink camera attached to an autopilot (1-6).  0 if the component is a MAVLink camera (with its own component id).
  CameraDeviceId: number;
}

// Camera absolute thermal range. This can be streamed when the associated VIDEO_STREAM_STATUS &#x60;flag&#x60; field bit VIDEO_STREAM_STATUS_FLAGS_THERMAL_RANGE_ENABLED is set, but a GCS may choose to only request it for the current active stream. Use MAV_CMD_SET_MESSAGE_INTERVAL to define message interval (param3 indicates the stream id of the current camera, or 0 for all streams, param4 indicates the target camera_device_id for autopilot-attached cameras or 0 for MAVLink cameras).
export interface MessageCameraThermalRange {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // Video Stream ID (1 for first, 2 for second, etc.)
  StreamId: number;
  // Camera id of a non-MAVLink camera attached to an autopilot (1-6).  0 if the component is a MAVLink camera (with its own component id).
  CameraDeviceId: number;
  // Temperature max.
  Max: number;
  // Temperature max point x value (normalized 0..1, 0 is left, 1 is right), NAN if unknown.
  MaxPointX: number;
  // Temperature max point y value (normalized 0..1, 0 is top, 1 is bottom), NAN if unknown.
  MaxPointY: number;
  // Temperature min.
  Min: number;
  // Temperature min point x value (normalized 0..1, 0 is left, 1 is right), NAN if unknown.
  MinPointX: number;
  // Temperature min point y value (normalized 0..1, 0 is top, 1 is bottom), NAN if unknown.
  MinPointY: number;
}

// Information about a high level gimbal manager. This message should be requested by a ground station using MAV_CMD_REQUEST_MESSAGE.
export interface MessageGimbalManagerInformation {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // Bitmap of gimbal capability flags.
  CapFlags: GIMBAL_MANAGER_CAP_FLAGS;
  // Gimbal device ID that this gimbal manager is responsible for. Component ID of gimbal device (or 1-6 for non-MAVLink gimbal).
  GimbalDeviceId: number;
  // Minimum hardware roll angle (positive: rolling to the right, negative: rolling to the left)
  RollMin: number;
  // Maximum hardware roll angle (positive: rolling to the right, negative: rolling to the left)
  RollMax: number;
  // Minimum pitch angle (positive: up, negative: down)
  PitchMin: number;
  // Maximum pitch angle (positive: up, negative: down)
  PitchMax: number;
  // Minimum yaw angle (positive: to the right, negative: to the left)
  YawMin: number;
  // Maximum yaw angle (positive: to the right, negative: to the left)
  YawMax: number;
}

// Current status about a high level gimbal manager. This message should be broadcast at a low regular rate (e.g. 5Hz).
export interface MessageGimbalManagerStatus {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // High level gimbal manager flags currently applied.
  Flags: GIMBAL_MANAGER_FLAGS;
  // Gimbal device ID that this gimbal manager is responsible for. Component ID of gimbal device (or 1-6 for non-MAVLink gimbal).
  GimbalDeviceId: number;
  // System ID of MAVLink component with primary control, 0 for none.
  PrimaryControlSysid: number;
  // Component ID of MAVLink component with primary control, 0 for none.
  PrimaryControlCompid: number;
  // System ID of MAVLink component with secondary control, 0 for none.
  SecondaryControlSysid: number;
  // Component ID of MAVLink component with secondary control, 0 for none.
  SecondaryControlCompid: number;
}

// High level message to control a gimbal&#x27;s attitude. This message is to be sent to the gimbal manager (e.g. from a ground station). Angles and rates can be set to NaN according to use case.
export interface MessageGimbalManagerSetAttitude {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // High level gimbal manager flags to use.
  Flags: GIMBAL_MANAGER_FLAGS;
  // Component ID of gimbal device to address (or 1-6 for non-MAVLink gimbal), 0 for all gimbal device components. Send command multiple times for more than one gimbal (but not all gimbals).
  GimbalDeviceId: number;
  // Quaternion components, w, x, y, z (1 0 0 0 is the null-rotation, the frame is depends on whether the flag GIMBAL_MANAGER_FLAGS_YAW_LOCK is set)
  Q: number[];
  // X component of angular velocity, positive is rolling to the right, NaN to be ignored.
  AngularVelocityX: number;
  // Y component of angular velocity, positive is pitching up, NaN to be ignored.
  AngularVelocityY: number;
  // Z component of angular velocity, positive is yawing to the right, NaN to be ignored.
  AngularVelocityZ: number;
}

// Information about a low level gimbal. This message should be requested by the gimbal manager or a ground station using MAV_CMD_REQUEST_MESSAGE. The maximum angles and rates are the limits by hardware. However, the limits by software used are likely different/smaller and dependent on mode/settings/etc..
export interface MessageGimbalDeviceInformation {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // Name of the gimbal vendor.
  VendorName: string;
  // Name of the gimbal model.
  ModelName: string;
  // Custom name of the gimbal given to it by the user.
  CustomName: string;
  // Version of the gimbal firmware, encoded as: &#x60;(Dev &amp; 0xff) &lt;&lt; 24 \| (Patch &amp; 0xff) &lt;&lt; 16 \| (Minor &amp; 0xff) &lt;&lt; 8 \| (Major &amp; 0xff)&#x60;.
  FirmwareVersion: number;
  // Version of the gimbal hardware, encoded as: &#x60;(Dev &amp; 0xff) &lt;&lt; 24 \| (Patch &amp; 0xff) &lt;&lt; 16 \| (Minor &amp; 0xff) &lt;&lt; 8 \| (Major &amp; 0xff)&#x60;.
  HardwareVersion: number;
  // UID of gimbal hardware (0 if unknown).
  Uid: number;
  // Bitmap of gimbal capability flags.
  CapFlags: GIMBAL_DEVICE_CAP_FLAGS;
  // Bitmap for use for gimbal-specific capability flags.
  CustomCapFlags: number;
  // Minimum hardware roll angle (positive: rolling to the right, negative: rolling to the left). NAN if unknown.
  RollMin: number;
  // Maximum hardware roll angle (positive: rolling to the right, negative: rolling to the left). NAN if unknown.
  RollMax: number;
  // Minimum hardware pitch angle (positive: up, negative: down). NAN if unknown.
  PitchMin: number;
  // Maximum hardware pitch angle (positive: up, negative: down). NAN if unknown.
  PitchMax: number;
  // Minimum hardware yaw angle (positive: to the right, negative: to the left). NAN if unknown.
  YawMin: number;
  // Maximum hardware yaw angle (positive: to the right, negative: to the left). NAN if unknown.
  YawMax: number;
  // This field is to be used if the gimbal manager and the gimbal device are the same component and hence have the same component ID. This field is then set to a number between 1-6. If the component ID is separate, this field is not required and must be set to 0.
  GimbalDeviceId: number;
}

// Low level message to control a gimbal device&#x27;s attitude.
// This message is to be sent from the gimbal manager to the gimbal device component.
// The quaternion and angular velocities can be set to NaN according to use case.
// For the angles encoded in the quaternion and the angular velocities holds:
// If the flag GIMBAL_DEVICE_FLAGS_YAW_IN_VEHICLE_FRAME is set, then they are relative to the vehicle heading (vehicle frame).
// If the flag GIMBAL_DEVICE_FLAGS_YAW_IN_EARTH_FRAME is set, then they are relative to absolute North (earth frame).
// If neither of these flags are set, then (for backwards compatibility) it holds:
// If the flag GIMBAL_DEVICE_FLAGS_YAW_LOCK is set, then they are relative to absolute North (earth frame),
// else they are relative to the vehicle heading (vehicle frame).
// Setting both GIMBAL_DEVICE_FLAGS_YAW_IN_VEHICLE_FRAME and GIMBAL_DEVICE_FLAGS_YAW_IN_EARTH_FRAME is not allowed.
// These rules are to ensure backwards compatibility.
// New implementations should always set either GIMBAL_DEVICE_FLAGS_YAW_IN_VEHICLE_FRAME or GIMBAL_DEVICE_FLAGS_YAW_IN_EARTH_FRAME.
export interface MessageGimbalDeviceSetAttitude {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // Low level gimbal flags.
  Flags: GIMBAL_DEVICE_FLAGS;
  // Quaternion components, w, x, y, z (1 0 0 0 is the null-rotation). The frame is described in the message description. Set fields to NaN to be ignored.
  Q: number[];
  // X component of angular velocity (positive: rolling to the right). The frame is described in the message description. NaN to be ignored.
  AngularVelocityX: number;
  // Y component of angular velocity (positive: pitching up). The frame is described in the message description. NaN to be ignored.
  AngularVelocityY: number;
  // Z component of angular velocity (positive: yawing to the right). The frame is described in the message description. NaN to be ignored.
  AngularVelocityZ: number;
}

// Message reporting the status of a gimbal device.
// This message should be broadcast by a gimbal device component at a low regular rate (e.g. 5 Hz).
// For the angles encoded in the quaternion and the angular velocities holds:
// If the flag GIMBAL_DEVICE_FLAGS_YAW_IN_VEHICLE_FRAME is set, then they are relative to the vehicle heading (vehicle frame).
// If the flag GIMBAL_DEVICE_FLAGS_YAW_IN_EARTH_FRAME is set, then they are relative to absolute North (earth frame).
// If neither of these flags are set, then (for backwards compatibility) it holds:
// If the flag GIMBAL_DEVICE_FLAGS_YAW_LOCK is set, then they are relative to absolute North (earth frame),
// else they are relative to the vehicle heading (vehicle frame).
// Other conditions of the flags are not allowed.
// The quaternion and angular velocities in the other frame can be calculated from delta_yaw and delta_yaw_velocity as
// q_earth &#x3D; q_delta_yaw * q_vehicle and w_earth &#x3D; w_delta_yaw_velocity + w_vehicle (if not NaN).
// If neither the GIMBAL_DEVICE_FLAGS_YAW_IN_VEHICLE_FRAME nor the GIMBAL_DEVICE_FLAGS_YAW_IN_EARTH_FRAME flag is set,
// then (for backwards compatibility) the data in the delta_yaw and delta_yaw_velocity fields are to be ignored.
// New implementations should always set either GIMBAL_DEVICE_FLAGS_YAW_IN_VEHICLE_FRAME or GIMBAL_DEVICE_FLAGS_YAW_IN_EARTH_FRAME,
// and always should set delta_yaw and delta_yaw_velocity either to the proper value or NaN.
export interface MessageGimbalDeviceAttitudeStatus {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // Current gimbal flags set.
  Flags: GIMBAL_DEVICE_FLAGS;
  // Quaternion components, w, x, y, z (1 0 0 0 is the null-rotation). The frame is described in the message description.
  Q: number[];
  // X component of angular velocity (positive: rolling to the right). The frame is described in the message description. NaN if unknown.
  AngularVelocityX: number;
  // Y component of angular velocity (positive: pitching up). The frame is described in the message description. NaN if unknown.
  AngularVelocityY: number;
  // Z component of angular velocity (positive: yawing to the right). The frame is described in the message description. NaN if unknown.
  AngularVelocityZ: number;
  // Failure flags (0 for no failure)
  FailureFlags: GIMBAL_DEVICE_ERROR_FLAGS;
  // Yaw angle relating the quaternions in earth and body frames (see message description). NaN if unknown.
  DeltaYaw: number;
  // Yaw angular velocity relating the angular velocities in earth and body frames (see message description). NaN if unknown.
  DeltaYawVelocity: number;
  // This field is to be used if the gimbal manager and the gimbal device are the same component and hence have the same component ID. This field is then set a number between 1-6. If the component ID is separate, this field is not required and must be set to 0.
  GimbalDeviceId: number;
}

// Low level message containing autopilot state relevant for a gimbal device. This message is to be sent from the autopilot to the gimbal device component. The data of this message are for the gimbal device&#x27;s estimator corrections, in particular horizon compensation, as well as indicates autopilot control intentions, e.g. feed forward angular control in the z-axis.
export interface MessageAutopilotStateForGimbalDevice {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // Timestamp (time since system boot).
  TimeBootUs: number;
  // Quaternion components of autopilot attitude: w, x, y, z (1 0 0 0 is the null-rotation, Hamilton convention).
  Q: number[];
  // Estimated delay of the attitude data. 0 if unknown.
  QEstimatedDelayUs: number;
  // X Speed in NED (North, East, Down). NAN if unknown.
  Vx: number;
  // Y Speed in NED (North, East, Down). NAN if unknown.
  Vy: number;
  // Z Speed in NED (North, East, Down). NAN if unknown.
  Vz: number;
  // Estimated delay of the speed data. 0 if unknown.
  VEstimatedDelayUs: number;
  // Feed forward Z component of angular velocity (positive: yawing to the right). NaN to be ignored. This is to indicate if the autopilot is actively yawing.
  FeedForwardAngularVelocityZ: number;
  // Bitmap indicating which estimator outputs are valid.
  EstimatorStatus: ESTIMATOR_STATUS_FLAGS;
  // The landed state. Is set to MAV_LANDED_STATE_UNDEFINED if landed state is unknown.
  LandedState: MAV_LANDED_STATE;
  // Z component of angular velocity in NED (North, East, Down). NaN if unknown.
  AngularVelocityZ: number;
}

// Set gimbal manager pitch and yaw angles (high rate message). This message is to be sent to the gimbal manager (e.g. from a ground station) and will be ignored by gimbal devices. Angles and rates can be set to NaN according to use case. Use MAV_CMD_DO_GIMBAL_MANAGER_PITCHYAW for low-rate adjustments that require confirmation.
export interface MessageGimbalManagerSetPitchyaw {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // High level gimbal manager flags to use.
  Flags: GIMBAL_MANAGER_FLAGS;
  // Component ID of gimbal device to address (or 1-6 for non-MAVLink gimbal), 0 for all gimbal device components. Send command multiple times for more than one gimbal (but not all gimbals).
  GimbalDeviceId: number;
  // Pitch angle (positive: up, negative: down, NaN to be ignored).
  Pitch: number;
  // Yaw angle (positive: to the right, negative: to the left, NaN to be ignored).
  Yaw: number;
  // Pitch angular rate (positive: up, negative: down, NaN to be ignored).
  PitchRate: number;
  // Yaw angular rate (positive: to the right, negative: to the left, NaN to be ignored).
  YawRate: number;
}

// High level message to control a gimbal manually. The angles or angular rates are unitless; the actual rates will depend on internal gimbal manager settings/configuration (e.g. set by parameters). This message is to be sent to the gimbal manager (e.g. from a ground station). Angles and rates can be set to NaN according to use case.
export interface MessageGimbalManagerSetManualControl {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // High level gimbal manager flags.
  Flags: GIMBAL_MANAGER_FLAGS;
  // Component ID of gimbal device to address (or 1-6 for non-MAVLink gimbal), 0 for all gimbal device components. Send command multiple times for more than one gimbal (but not all gimbals).
  GimbalDeviceId: number;
  // Pitch angle unitless (-1..1, positive: up, negative: down, NaN to be ignored).
  Pitch: number;
  // Yaw angle unitless (-1..1, positive: to the right, negative: to the left, NaN to be ignored).
  Yaw: number;
  // Pitch angular rate unitless (-1..1, positive: up, negative: down, NaN to be ignored).
  PitchRate: number;
  // Yaw angular rate unitless (-1..1, positive: to the right, negative: to the left, NaN to be ignored).
  YawRate: number;
}

// ESC information for lower rate streaming. Recommended streaming rate 1Hz. See ESC_STATUS for higher-rate ESC data.
export interface MessageEscInfo {
  // Index of the first ESC in this message. minValue &#x3D; 0, maxValue &#x3D; 60, increment &#x3D; 4.
  Index: number;
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude the number.
  TimeUsec: number;
  // Counter of data packets received.
  Counter: number;
  // Total number of ESCs in all messages of this type. Message fields with an index higher than this should be ignored because they contain invalid data.
  Count: number;
  // Connection type protocol for all ESC.
  ConnectionType: ESC_CONNECTION_TYPE;
  // Information regarding online/offline status of each ESC.
  Info: number;
  // Bitmap of ESC failure flags.
  FailureFlags: ESC_FAILURE_FLAGS[];
  // Number of reported errors by each ESC since boot.
  ErrorCount: number[];
  // Temperature of each ESC. INT16_MAX: if data not supplied by ESC.
  Temperature: number[];
}

// ESC information for higher rate streaming. Recommended streaming rate is ~10 Hz. Information that changes more slowly is sent in ESC_INFO. It should typically only be streamed on high-bandwidth links (i.e. to a companion computer).
export interface MessageEscStatus {
  // Index of the first ESC in this message. minValue &#x3D; 0, maxValue &#x3D; 60, increment &#x3D; 4.
  Index: number;
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude the number.
  TimeUsec: number;
  // Reported motor RPM from each ESC (negative for reverse rotation).
  Rpm: number[];
  // Voltage measured from each ESC.
  Voltage: number[];
  // Current measured from each ESC.
  Current: number[];
}

// Configure WiFi AP SSID, password, and mode. This message is re-emitted as an acknowledgement by the AP. The message may also be explicitly requested using MAV_CMD_REQUEST_MESSAGE
export interface MessageWifiConfigAp {
  // Name of Wi-Fi network (SSID). Blank to leave it unchanged when setting. Current SSID when sent back as a response.
  Ssid: string;
  // Password. Blank for an open AP. MD5 hash when message is sent back as a response.
  Password: string;
  // WiFi Mode.
  Mode: WIFI_CONFIG_AP_MODE;
  // Message acceptance response (sent back to GS).
  Response: WIFI_CONFIG_AP_RESPONSE;
}

// The location and information of an AIS vessel
export interface MessageAisVessel {
  // Mobile Marine Service Identifier, 9 decimal digits
  Mmsi: number;
  // Latitude
  Lat: number;
  // Longitude
  Lon: number;
  // Course over ground
  Cog: number;
  // True heading
  Heading: number;
  // Speed over ground
  Velocity: number;
  // Turn rate
  TurnRate: number;
  // Navigational status
  NavigationalStatus: AIS_NAV_STATUS;
  // Type of vessels
  Type: AIS_TYPE;
  // Distance from lat/lon location to bow
  DimensionBow: number;
  // Distance from lat/lon location to stern
  DimensionStern: number;
  // Distance from lat/lon location to port side
  DimensionPort: number;
  // Distance from lat/lon location to starboard side
  DimensionStarboard: number;
  // The vessel callsign
  Callsign: string;
  // The vessel name
  Name: string;
  // Time since last communication in seconds
  Tslc: number;
  // Bitmask to indicate various statuses including valid data fields
  Flags: AIS_FLAGS;
}

// General status information of an UAVCAN node. Please refer to the definition of the UAVCAN message &quot;uavcan.protocol.NodeStatus&quot; for the background information. The UAVCAN specification is available at http://uavcan.org.
export interface MessageUavcanNodeStatus {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // Time since the start-up of the node.
  UptimeSec: number;
  // Generalized node health status.
  Health: UAVCAN_NODE_HEALTH;
  // Generalized operating mode.
  Mode: UAVCAN_NODE_MODE;
  // Not used currently.
  SubMode: number;
  // Vendor-specific status information.
  VendorSpecificStatusCode: number;
}

// General information describing a particular UAVCAN node. Please refer to the definition of the UAVCAN service &quot;uavcan.protocol.GetNodeInfo&quot; for the background information. This message should be emitted by the system whenever a new node appears online, or an existing node reboots. Additionally, it can be emitted upon request from the other end of the MAVLink channel (see MAV_CMD_UAVCAN_GET_NODE_INFO). It is also not prohibited to emit this message unconditionally at a low frequency. The UAVCAN specification is available at http://uavcan.org.
export interface MessageUavcanNodeInfo {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // Time since the start-up of the node.
  UptimeSec: number;
  // Node name string. For example, &quot;sapog.px4.io&quot;.
  Name: string;
  // Hardware major version number.
  HwVersionMajor: number;
  // Hardware minor version number.
  HwVersionMinor: number;
  // Hardware unique 128-bit ID.
  HwUniqueId: number[];
  // Software major version number.
  SwVersionMajor: number;
  // Software minor version number.
  SwVersionMinor: number;
  // Version control system (VCS) revision identifier (e.g. git short commit hash). 0 if unknown.
  SwVcsCommit: number;
}

// Request to read the value of a parameter with either the param_id string id or param_index. PARAM_EXT_VALUE should be emitted in response.
export interface MessageParamExtRequestRead {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // Parameter id, terminated by NULL if the length is less than 16 human-readable chars and WITHOUT null termination (NULL) byte if the length is exactly 16 chars - applications have to provide 16+1 bytes storage if the ID is stored as string
  ParamId: string;
  // Parameter index. Set to -1 to use the Parameter ID field as identifier (else param_id will be ignored)
  ParamIndex: number;
}

// Request all parameters of this component. All parameters should be emitted in response as PARAM_EXT_VALUE.
export interface MessageParamExtRequestList {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
}

// Emit the value of a parameter. The inclusion of param_count and param_index in the message allows the recipient to keep track of received parameters and allows them to re-request missing parameters after a loss or timeout.
export interface MessageParamExtValue {
  // Parameter id, terminated by NULL if the length is less than 16 human-readable chars and WITHOUT null termination (NULL) byte if the length is exactly 16 chars - applications have to provide 16+1 bytes storage if the ID is stored as string
  ParamId: string;
  // Parameter value
  ParamValue: string;
  // Parameter type.
  ParamType: MAV_PARAM_EXT_TYPE;
  // Total number of parameters
  ParamCount: number;
  // Index of this parameter
  ParamIndex: number;
}

// Set a parameter value. In order to deal with message loss (and retransmission of PARAM_EXT_SET), when setting a parameter value and the new value is the same as the current value, you will immediately get a PARAM_ACK_ACCEPTED response. If the current state is PARAM_ACK_IN_PROGRESS, you will accordingly receive a PARAM_ACK_IN_PROGRESS in response.
export interface MessageParamExtSet {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // Parameter id, terminated by NULL if the length is less than 16 human-readable chars and WITHOUT null termination (NULL) byte if the length is exactly 16 chars - applications have to provide 16+1 bytes storage if the ID is stored as string
  ParamId: string;
  // Parameter value
  ParamValue: string;
  // Parameter type.
  ParamType: MAV_PARAM_EXT_TYPE;
}

// Response from a PARAM_EXT_SET message.
export interface MessageParamExtAck {
  // Parameter id, terminated by NULL if the length is less than 16 human-readable chars and WITHOUT null termination (NULL) byte if the length is exactly 16 chars - applications have to provide 16+1 bytes storage if the ID is stored as string
  ParamId: string;
  // Parameter value (new value if PARAM_ACK_ACCEPTED, current value otherwise)
  ParamValue: string;
  // Parameter type.
  ParamType: MAV_PARAM_EXT_TYPE;
  // Result code.
  ParamResult: PARAM_ACK;
}

// Obstacle distances in front of the sensor, starting from the left in increment degrees to the right
export interface MessageObstacleDistance {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // Class id of the distance sensor type.
  SensorType: MAV_DISTANCE_SENSOR;
  // Distance of obstacles around the vehicle with index 0 corresponding to north + angle_offset, unless otherwise specified in the frame. A value of 0 is valid and means that the obstacle is practically touching the sensor. A value of max_distance +1 means no obstacle is present. A value of UINT16_MAX for unknown/not used. In a array element, one unit corresponds to 1cm.
  Distances: number[];
  // Angular width in degrees of each array element. Increment direction is clockwise. This field is ignored if increment_f is non-zero.
  Increment: number;
  // Minimum distance the sensor can measure.
  MinDistance: number;
  // Maximum distance the sensor can measure.
  MaxDistance: number;
  // Angular width in degrees of each array element as a float. If non-zero then this value is used instead of the uint8_t increment field. Positive is clockwise direction, negative is counter-clockwise.
  IncrementF: number;
  // Relative angle offset of the 0-index element in the distances array. Value of 0 corresponds to forward. Positive is clockwise direction, negative is counter-clockwise.
  AngleOffset: number;
  // Coordinate frame of reference for the yaw rotation and offset of the sensor data. Defaults to MAV_FRAME_GLOBAL, which is north aligned. For body-mounted sensors use MAV_FRAME_BODY_FRD, which is vehicle front aligned.
  Frame: MAV_FRAME;
}

// Odometry message to communicate odometry information with an external interface. Fits ROS REP 147 standard for aerial vehicles (http://www.ros.org/reps/rep-0147.html).
export interface MessageOdometry {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // Coordinate frame of reference for the pose data.
  FrameId: MAV_FRAME;
  // Coordinate frame of reference for the velocity in free space (twist) data.
  ChildFrameId: MAV_FRAME;
  // X Position
  X: number;
  // Y Position
  Y: number;
  // Z Position
  Z: number;
  // Quaternion components, w, x, y, z (1 0 0 0 is the null-rotation)
  Q: number[];
  // X linear speed
  Vx: number;
  // Y linear speed
  Vy: number;
  // Z linear speed
  Vz: number;
  // Roll angular speed
  Rollspeed: number;
  // Pitch angular speed
  Pitchspeed: number;
  // Yaw angular speed
  Yawspeed: number;
  // Row-major representation of a 6x6 pose cross-covariance matrix upper right triangle (states: x, y, z, roll, pitch, yaw; first six entries are the first ROW, next five entries are the second ROW, etc.). If unknown, assign NaN value to first element in the array.
  PoseCovariance: number[];
  // Row-major representation of a 6x6 velocity cross-covariance matrix upper right triangle (states: vx, vy, vz, rollspeed, pitchspeed, yawspeed; first six entries are the first ROW, next five entries are the second ROW, etc.). If unknown, assign NaN value to first element in the array.
  VelocityCovariance: number[];
  // Estimate reset counter. This should be incremented when the estimate resets in any of the dimensions (position, velocity, attitude, angular speed). This is designed to be used when e.g an external SLAM system detects a loop-closure and the estimate jumps.
  ResetCounter: number;
  // Type of estimator that is providing the odometry.
  EstimatorType: MAV_ESTIMATOR_TYPE;
  // Optional odometry quality metric as a percentage. -1 &#x3D; odometry has failed, 0 &#x3D; unknown/unset quality, 1 &#x3D; worst quality, 100 &#x3D; best quality
  Quality: number;
}

// Describe a trajectory using an array of up-to 5 waypoints in the local frame (MAV_FRAME_LOCAL_NED).
export interface MessageTrajectoryRepresentationWaypoints {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // Number of valid points (up-to 5 waypoints are possible)
  ValidPoints: number;
  // X-coordinate of waypoint, set to NaN if not being used
  PosX: number[];
  // Y-coordinate of waypoint, set to NaN if not being used
  PosY: number[];
  // Z-coordinate of waypoint, set to NaN if not being used
  PosZ: number[];
  // X-velocity of waypoint, set to NaN if not being used
  VelX: number[];
  // Y-velocity of waypoint, set to NaN if not being used
  VelY: number[];
  // Z-velocity of waypoint, set to NaN if not being used
  VelZ: number[];
  // X-acceleration of waypoint, set to NaN if not being used
  AccX: number[];
  // Y-acceleration of waypoint, set to NaN if not being used
  AccY: number[];
  // Z-acceleration of waypoint, set to NaN if not being used
  AccZ: number[];
  // Yaw angle, set to NaN if not being used
  PosYaw: number[];
  // Yaw rate, set to NaN if not being used
  VelYaw: number[];
  // MAV_CMD command id of waypoint, set to UINT16_MAX if not being used.
  Command: MAV_CMD[];
}

// Describe a trajectory using an array of up-to 5 bezier control points in the local frame (MAV_FRAME_LOCAL_NED).
export interface MessageTrajectoryRepresentationBezier {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // Number of valid control points (up-to 5 points are possible)
  ValidPoints: number;
  // X-coordinate of bezier control points. Set to NaN if not being used
  PosX: number[];
  // Y-coordinate of bezier control points. Set to NaN if not being used
  PosY: number[];
  // Z-coordinate of bezier control points. Set to NaN if not being used
  PosZ: number[];
  // Bezier time horizon. Set to NaN if velocity/acceleration should not be incorporated
  Delta: number[];
  // Yaw. Set to NaN for unchanged
  PosYaw: number[];
}

// Report current used cellular network status
export interface MessageCellularStatus {
  // Cellular modem status
  Status: CELLULAR_STATUS_FLAG;
  // Failure reason when status in in CELLULAR_STATUS_FLAG_FAILED
  FailureReason: CELLULAR_NETWORK_FAILED_REASON;
  // Cellular network radio type: gsm, cdma, lte...
  Type: CELLULAR_NETWORK_RADIO_TYPE;
  // Signal quality in percent. If unknown, set to UINT8_MAX
  Quality: number;
  // Mobile country code. If unknown, set to UINT16_MAX
  Mcc: number;
  // Mobile network code. If unknown, set to UINT16_MAX
  Mnc: number;
  // Location area code. If unknown, set to 0
  Lac: number;
}

// Status of the Iridium SBD link.
export interface MessageIsbdLinkStatus {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  Timestamp: number;
  // Timestamp of the last successful sbd session. The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  LastHeartbeat: number;
  // Number of failed SBD sessions.
  FailedSessions: number;
  // Number of successful SBD sessions.
  SuccessfulSessions: number;
  // Signal quality equal to the number of bars displayed on the ISU signal strength indicator. Range is 0 to 5, where 0 indicates no signal and 5 indicates maximum signal strength.
  SignalQuality: number;
  // 1: Ring call pending, 0: No call pending.
  RingPending: number;
  // 1: Transmission session pending, 0: No transmission session pending.
  TxSessionPending: number;
  // 1: Receiving session pending, 0: No receiving session pending.
  RxSessionPending: number;
}

// Configure cellular modems.
// This message is re-emitted as an acknowledgement by the modem.
// The message may also be explicitly requested using MAV_CMD_REQUEST_MESSAGE.
export interface MessageCellularConfig {
  // Enable/disable LTE. 0: setting unchanged, 1: disabled, 2: enabled. Current setting when sent back as a response.
  EnableLte: number;
  // Enable/disable PIN on the SIM card. 0: setting unchanged, 1: disabled, 2: enabled. Current setting when sent back as a response.
  EnablePin: number;
  // PIN sent to the SIM card. Blank when PIN is disabled. Empty when message is sent back as a response.
  Pin: string;
  // New PIN when changing the PIN. Blank to leave it unchanged. Empty when message is sent back as a response.
  NewPin: string;
  // Name of the cellular APN. Blank to leave it unchanged. Current APN when sent back as a response.
  Apn: string;
  // Required PUK code in case the user failed to authenticate 3 times with the PIN. Empty when message is sent back as a response.
  Puk: string;
  // Enable/disable roaming. 0: setting unchanged, 1: disabled, 2: enabled. Current setting when sent back as a response.
  Roaming: number;
  // Message acceptance response (sent back to GS).
  Response: CELLULAR_CONFIG_RESPONSE;
}

// RPM sensor data message.
export interface MessageRawRpm {
  // Index of this RPM sensor (0-indexed)
  Index: number;
  // Indicated rate
  Frequency: number;
}

// The global position resulting from GPS and sensor fusion.
export interface MessageUtmGlobalPosition {
  // Time of applicability of position (microseconds since UNIX epoch).
  Time: number;
  // Unique UAS ID.
  UasId: number[];
  // Latitude (WGS84)
  Lat: number;
  // Longitude (WGS84)
  Lon: number;
  // Altitude (WGS84)
  Alt: number;
  // Altitude above ground
  RelativeAlt: number;
  // Ground X speed (latitude, positive north)
  Vx: number;
  // Ground Y speed (longitude, positive east)
  Vy: number;
  // Ground Z speed (altitude, positive down)
  Vz: number;
  // Horizontal position uncertainty (standard deviation)
  HAcc: number;
  // Altitude uncertainty (standard deviation)
  VAcc: number;
  // Speed uncertainty (standard deviation)
  VelAcc: number;
  // Next waypoint, latitude (WGS84)
  NextLat: number;
  // Next waypoint, longitude (WGS84)
  NextLon: number;
  // Next waypoint, altitude (WGS84)
  NextAlt: number;
  // Time until next update. Set to 0 if unknown or in data driven mode.
  UpdateRate: number;
  // Flight state
  FlightState: UTM_FLIGHT_STATE;
  // Bitwise OR combination of the data available flags.
  Flags: UTM_DATA_AVAIL_FLAGS;
}

// Large debug/prototyping array. The message uses the maximum available payload for data. The array_id and name fields are used to discriminate between messages in code and in user interfaces (respectively). Do not use in production code.
export interface MessageDebugFloatArray {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // Name, for human-friendly display in a Ground Control Station
  Name: string;
  // Unique ID used to discriminate between arrays
  ArrayId: number;
  // data
  Data: number[];
}

// Vehicle status report that is sent out while orbit execution is in progress (see MAV_CMD_DO_ORBIT).
export interface MessageOrbitExecutionStatus {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // Radius of the orbit circle. Positive values orbit clockwise, negative values orbit counter-clockwise.
  Radius: number;
  // The coordinate system of the fields: x, y, z.
  Frame: MAV_FRAME;
  // X coordinate of center point. Coordinate system depends on frame field: local &#x3D; x position in meters * 1e4, global &#x3D; latitude in degrees * 1e7.
  X: number;
  // Y coordinate of center point.  Coordinate system depends on frame field: local &#x3D; x position in meters * 1e4, global &#x3D; latitude in degrees * 1e7.
  Y: number;
  // Altitude of center point. Coordinate system depends on frame field.
  Z: number;
}

// Smart Battery information (static/infrequent update). Use for updates from: smart battery to flight stack, flight stack to GCS. Use BATTERY_STATUS for the frequent battery updates.
export interface MessageSmartBatteryInfo {
  // Battery ID
  Id: number;
  // Function of the battery
  BatteryFunction: MAV_BATTERY_FUNCTION;
  // Type (chemistry) of the battery
  Type: MAV_BATTERY_TYPE;
  // Capacity when full according to manufacturer, -1: field not provided.
  CapacityFullSpecification: number;
  // Capacity when full (accounting for battery degradation), -1: field not provided.
  CapacityFull: number;
  // Charge/discharge cycle count. UINT16_MAX: field not provided.
  CycleCount: number;
  // Serial number in ASCII characters, 0 terminated. All 0: field not provided.
  SerialNumber: string;
  // Static device name in ASCII characters, 0 terminated. All 0: field not provided. Encode as manufacturer name then product name separated using an underscore.
  DeviceName: string;
  // Battery weight. 0: field not provided.
  Weight: number;
  // Minimum per-cell voltage when discharging. If not supplied set to UINT16_MAX value.
  DischargeMinimumVoltage: number;
  // Minimum per-cell voltage when charging. If not supplied set to UINT16_MAX value.
  ChargingMinimumVoltage: number;
  // Minimum per-cell voltage when resting. If not supplied set to UINT16_MAX value.
  RestingMinimumVoltage: number;
  // Maximum per-cell voltage when charged. 0: field not provided.
  ChargingMaximumVoltage: number;
  // Number of battery cells in series. 0: field not provided.
  CellsInSeries: number;
  // Maximum pack discharge current. 0: field not provided.
  DischargeMaximumCurrent: number;
  // Maximum pack discharge burst current. 0: field not provided.
  DischargeMaximumBurstCurrent: number;
  // Manufacture date (DD/MM/YYYY) in ASCII characters, 0 terminated. All 0: field not provided.
  ManufactureDate: string;
}

// Fuel status.
// This message provides &quot;generic&quot; fuel level information for  in a GCS and for triggering failsafes in an autopilot.
// The fuel type and associated units for fields in this message are defined in the enum MAV_FUEL_TYPE.
// The reported &#x60;consumed_fuel&#x60; and &#x60;remaining_fuel&#x60; must only be supplied if measured: they must not be inferred from the &#x60;maximum_fuel&#x60; and the other value.
// A recipient can assume that if these fields are supplied they are accurate.
// If not provided, the recipient can infer &#x60;remaining_fuel&#x60; from &#x60;maximum_fuel&#x60; and &#x60;consumed_fuel&#x60; on the assumption that the fuel was initially at its maximum (this is what battery monitors assume).
// Note however that this is an assumption, and the UI should prompt the user appropriately (i.e. notify user that they should fill the tank before boot).
// This kind of information may also be sent in fuel-specific messages such as BATTERY_STATUS_V2.
// If both messages are sent for the same fuel system, the ids and corresponding information must match.
// This should be streamed (nominally at 0.1 Hz).
export interface MessageFuelStatus {
  // Fuel ID. Must match ID of other messages for same fuel system, such as BATTERY_STATUS_V2.
  Id: number;
  // Capacity when full. Must be provided.
  MaximumFuel: number;
  // Consumed fuel (measured). This value should not be inferred: if not measured set to NaN. NaN: field not provided.
  ConsumedFuel: number;
  // Remaining fuel until empty (measured). The value should not be inferred: if not measured set to NaN. NaN: field not provided.
  RemainingFuel: number;
  // Percentage of remaining fuel, relative to full. Values: [0-100], UINT8_MAX: field not provided.
  PercentRemaining: number;
  // Positive value when emptying/using, and negative if filling/replacing. NaN: field not provided.
  FlowRate: number;
  // Fuel temperature. NaN: field not provided.
  Temperature: number;
  // Fuel type. Defines units for fuel capacity and consumption fields above.
  FuelType: MAV_FUEL_TYPE;
}

// Battery information that is static, or requires infrequent update.
// This message should requested using MAV_CMD_REQUEST_MESSAGE and/or streamed at very low rate.
// BATTERY_STATUS_V2 is used for higher-rate battery status information.
export interface MessageBatteryInfo {
  // Battery ID
  Id: number;
  // Function of the battery.
  BatteryFunction: MAV_BATTERY_FUNCTION;
  // Type (chemistry) of the battery.
  Type: MAV_BATTERY_TYPE;
  // State of Health (SOH) estimate. Typically 100% at the time of manufacture and will decrease over time and use. -1: field not provided.
  StateOfHealth: number;
  // Number of battery cells in series. 0: field not provided.
  CellsInSeries: number;
  // Lifetime count of the number of charge/discharge cycles (https://en.wikipedia.org/wiki/Charge_cycle). UINT16_MAX: field not provided.
  CycleCount: number;
  // Battery weight. 0: field not provided.
  Weight: number;
  // Minimum per-cell voltage when discharging. 0: field not provided.
  DischargeMinimumVoltage: number;
  // Minimum per-cell voltage when charging. 0: field not provided.
  ChargingMinimumVoltage: number;
  // Minimum per-cell voltage when resting. 0: field not provided.
  RestingMinimumVoltage: number;
  // Maximum per-cell voltage when charged. 0: field not provided.
  ChargingMaximumVoltage: number;
  // Maximum pack continuous charge current. 0: field not provided.
  ChargingMaximumCurrent: number;
  // Battery nominal voltage. Used for conversion between Wh and Ah. 0: field not provided.
  NominalVoltage: number;
  // Maximum pack discharge current. 0: field not provided.
  DischargeMaximumCurrent: number;
  // Maximum pack discharge burst current. 0: field not provided.
  DischargeMaximumBurstCurrent: number;
  // Fully charged design capacity. 0: field not provided.
  DesignCapacity: number;
  // Predicted battery capacity when fully charged (accounting for battery degradation). NAN: field not provided.
  FullChargeCapacity: number;
  // Manufacture date (DDMMYYYY) in ASCII characters, 0 terminated. All 0: field not provided.
  ManufactureDate: string;
  // Serial number in ASCII characters, 0 terminated. All 0: field not provided.
  SerialNumber: string;
  // Battery device name. Formatted as manufacturer name then product name, separated with an underscore (in ASCII characters), 0 terminated. All 0: field not provided.
  Name: string;
}

// Telemetry of power generation system. Alternator or mechanical generator.
export interface MessageGeneratorStatus {
  // Status flags.
  Status: MAV_GENERATOR_STATUS_FLAG;
  // Speed of electrical generator or alternator. UINT16_MAX: field not provided.
  GeneratorSpeed: number;
  // Current into/out of battery. Positive for out. Negative for in. NaN: field not provided.
  BatteryCurrent: number;
  // Current going to the UAV. If battery current not available this is the DC current from the generator. Positive for out. Negative for in. NaN: field not provided
  LoadCurrent: number;
  // The power being generated. NaN: field not provided
  PowerGenerated: number;
  // Voltage of the bus seen at the generator, or battery bus if battery bus is controlled by generator and at a different voltage to main bus.
  BusVoltage: number;
  // The temperature of the rectifier or power converter. INT16_MAX: field not provided.
  RectifierTemperature: number;
  // The target battery current. Positive for out. Negative for in. NaN: field not provided
  BatCurrentSetpoint: number;
  // The temperature of the mechanical motor, fuel cell core or generator. INT16_MAX: field not provided.
  GeneratorTemperature: number;
  // Seconds this generator has run since it was rebooted. UINT32_MAX: field not provided.
  Runtime: number;
  // Seconds until this generator requires maintenance.  A negative value indicates maintenance is past-due. INT32_MAX: field not provided.
  TimeUntilMaintenance: number;
}

// The raw values of the actuator outputs (e.g. on Pixhawk, from MAIN, AUX ports). This message supersedes SERVO_OUTPUT_RAW.
export interface MessageActuatorOutputStatus {
  // Timestamp (since system boot).
  TimeUsec: number;
  // Active outputs
  Active: number;
  // Servo / motor output array values. Zero values indicate unused channels.
  Actuator: number[];
}

// Time/duration estimates for various events and actions given the current vehicle state and position.
export interface MessageTimeEstimateToTarget {
  // Estimated time to complete the vehicle&#x27;s configured &quot;safe return&quot; action from its current position (e.g. RTL, Smart RTL, etc.). -1 indicates that the vehicle is landed, or that no time estimate available.
  SafeReturn: number;
  // Estimated time for vehicle to complete the LAND action from its current position. -1 indicates that the vehicle is landed, or that no time estimate available.
  Land: number;
  // Estimated time for reaching/completing the currently active mission item. -1 means no time estimate available.
  MissionNextItem: number;
  // Estimated time for completing the current mission. -1 means no mission active and/or no estimate available.
  MissionEnd: number;
  // Estimated time for completing the current commanded action (i.e. Go To, Takeoff, Land, etc.). -1 means no action active and/or no estimate available.
  CommandedAction: number;
}

// Message for transporting &quot;arbitrary&quot; variable-length data from one component to another (broadcast is not forbidden, but discouraged). The encoding of the data is usually extension specific, i.e. determined by the source, and is usually not documented as part of the MAVLink specification.
export interface MessageTunnel {
  // System ID (can be 0 for broadcast, but this is discouraged)
  TargetSystem: number;
  // Component ID (can be 0 for broadcast, but this is discouraged)
  TargetComponent: number;
  // A code that identifies the content of the payload (0 for unknown, which is the default). If this code is less than 32768, it is a &#x27;registered&#x27; payload type and the corresponding code should be added to the MAV_TUNNEL_PAYLOAD_TYPE enum. Software creators can register blocks of types as needed. Codes greater than 32767 are considered local experiments and should not be checked in to any widely distributed codebase.
  PayloadType: MAV_TUNNEL_PAYLOAD_TYPE;
  // Length of the data transported in payload
  PayloadLength: number;
  // Variable length payload. The payload length is defined by payload_length. The entire content of this block is opaque unless you understand the encoding specified by payload_type.
  Payload: number[];
}

// A forwarded CAN frame as requested by MAV_CMD_CAN_FORWARD.
export interface MessageCanFrame {
  // System ID.
  TargetSystem: number;
  // Component ID.
  TargetComponent: number;
  // Bus number
  Bus: number;
  // Frame length
  Len: number;
  // Frame ID
  Id: number;
  // Frame data
  Data: number[];
}

// Hardware status sent by an onboard computer.
export interface MessageOnboardComputerStatus {
  // Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
  TimeUsec: number;
  // Time since system boot.
  Uptime: number;
  // Type of the onboard computer: 0: Mission computer primary, 1: Mission computer backup 1, 2: Mission computer backup 2, 3: Compute node, 4-5: Compute spares, 6-9: Payload computers.
  Type: number;
  // CPU usage on the component in percent (100 - idle). A value of UINT8_MAX implies the field is unused.
  CpuCores: number[];
  // Combined CPU usage as the last 10 slices of 100 MS (a histogram). This allows to identify spikes in load that max out the system, but only for a short amount of time. A value of UINT8_MAX implies the field is unused.
  CpuCombined: number[];
  // GPU usage on the component in percent (100 - idle). A value of UINT8_MAX implies the field is unused.
  GpuCores: number[];
  // Combined GPU usage as the last 10 slices of 100 MS (a histogram). This allows to identify spikes in load that max out the system, but only for a short amount of time. A value of UINT8_MAX implies the field is unused.
  GpuCombined: number[];
  // Temperature of the board. A value of INT8_MAX implies the field is unused.
  TemperatureBoard: number;
  // Temperature of the CPU core. A value of INT8_MAX implies the field is unused.
  TemperatureCore: number[];
  // Fan speeds. A value of INT16_MAX implies the field is unused.
  FanSpeed: number[];
  // Amount of used RAM on the component system. A value of UINT32_MAX implies the field is unused.
  RamUsage: number;
  // Total amount of RAM on the component system. A value of UINT32_MAX implies the field is unused.
  RamTotal: number;
  // Storage type: 0: HDD, 1: SSD, 2: EMMC, 3: SD card (non-removable), 4: SD card (removable). A value of UINT32_MAX implies the field is unused.
  StorageType: number[];
  // Amount of used storage space on the component system. A value of UINT32_MAX implies the field is unused.
  StorageUsage: number[];
  // Total amount of storage space on the component system. A value of UINT32_MAX implies the field is unused.
  StorageTotal: number[];
  // Link type: 0-9: UART, 10-19: Wired network, 20-29: Wifi, 30-39: Point-to-point proprietary, 40-49: Mesh proprietary
  LinkType: number[];
  // Network traffic from the component system. A value of UINT32_MAX implies the field is unused.
  LinkTxRate: number[];
  // Network traffic to the component system. A value of UINT32_MAX implies the field is unused.
  LinkRxRate: number[];
  // Network capacity from the component system. A value of UINT32_MAX implies the field is unused.
  LinkTxMax: number[];
  // Network capacity to the component system. A value of UINT32_MAX implies the field is unused.
  LinkRxMax: number[];
}

// Component information message, which may be requested using MAV_CMD_REQUEST_MESSAGE.
export interface MessageComponentInformation {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // CRC32 of the general metadata file (general_metadata_uri).
  GeneralMetadataFileCrc: number;
  // MAVLink FTP URI for the general metadata file (COMP_METADATA_TYPE_GENERAL), which may be compressed with xz. The file contains general component metadata, and may contain URI links for additional metadata (see COMP_METADATA_TYPE). The information is static from boot, and may be generated at compile time. The string needs to be zero terminated.
  GeneralMetadataUri: string;
  // CRC32 of peripherals metadata file (peripherals_metadata_uri).
  PeripheralsMetadataFileCrc: number;
  // (Optional) MAVLink FTP URI for the peripherals metadata file (COMP_METADATA_TYPE_PERIPHERALS), which may be compressed with xz. This contains data about &quot;attached components&quot; such as UAVCAN nodes. The peripherals are in a separate file because the information must be generated dynamically at runtime. The string needs to be zero terminated.
  PeripheralsMetadataUri: string;
}

// Basic component information data. Should be requested using MAV_CMD_REQUEST_MESSAGE on startup, or when required.
export interface MessageComponentInformationBasic {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // Component capability flags
  Capabilities: MAV_PROTOCOL_CAPABILITY;
  // Date of manufacture as a UNIX Epoch time (since 1.1.1970) in seconds.
  TimeManufactureS: number;
  // Name of the component vendor. Needs to be zero terminated. The field is optional and can be empty/all zeros.
  VendorName: string;
  // Name of the component model. Needs to be zero terminated. The field is optional and can be empty/all zeros.
  ModelName: string;
  // Software version. The recommended format is SEMVER: &#x27;major.minor.patch&#x27;  (any format may be used). The field must be zero terminated if it has a value. The field is optional and can be empty/all zeros.
  SoftwareVersion: string;
  // Hardware version. The recommended format is SEMVER: &#x27;major.minor.patch&#x27;  (any format may be used). The field must be zero terminated if it has a value. The field is optional and can be empty/all zeros.
  HardwareVersion: string;
  // Hardware serial number. The field must be zero terminated if it has a value. The field is optional and can be empty/all zeros.
  SerialNumber: string;
}

// Component metadata message, which may be requested using MAV_CMD_REQUEST_MESSAGE.
// This contains the MAVLink FTP URI and CRC for the component&#x27;s general metadata file.
// The file must be hosted on the component, and may be xz compressed.
// The file CRC can be used for file caching.
// The general metadata file can be read to get the locations of other metadata files (COMP_METADATA_TYPE) and translations, which may be hosted either on the vehicle or the internet.
// For more information see: https://mavlink.io/en/services/component_information.html.
// Note: Camera components should use CAMERA_INFORMATION instead, and autopilots may use both this message and AUTOPILOT_VERSION.
export interface MessageComponentMetadata {
  // Timestamp (time since system boot).
  TimeBootMs: number;
  // CRC32 of the general metadata file.
  FileCrc: number;
  // MAVLink FTP URI for the general metadata file (COMP_METADATA_TYPE_GENERAL), which may be compressed with xz. The file contains general component metadata, and may contain URI links for additional metadata (see COMP_METADATA_TYPE). The information is static from boot, and may be generated at compile time. The string needs to be zero terminated.
  Uri: string;
}

// Play vehicle tone/tune (buzzer). Supersedes message PLAY_TUNE.
export interface MessagePlayTuneV2 {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // Tune format
  Format: TUNE_FORMAT;
  // Tune definition as a NULL-terminated string.
  Tune: string;
}

// Tune formats supported by vehicle. This should be emitted as response to MAV_CMD_REQUEST_MESSAGE.
export interface MessageSupportedTunes {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // Bitfield of supported tune formats.
  Format: TUNE_FORMAT;
}

// Event message. Each new event from a particular component gets a new sequence number. The same message might be sent multiple times if (re-)requested. Most events are broadcast, some can be specific to a target component (as receivers keep track of the sequence for missed events, all events need to be broadcast. Thus we use destination_component instead of target_component).
export interface MessageEvent {
  // Component ID
  DestinationComponent: number;
  // System ID
  DestinationSystem: number;
  // Event ID (as defined in the component metadata)
  Id: number;
  // Timestamp (time since system boot when the event happened).
  EventTimeBootMs: number;
  // Sequence number.
  Sequence: number;
  // Log levels: 4 bits MSB: internal (for logging purposes), 4 bits LSB: external. Levels: Emergency &#x3D; 0, Alert &#x3D; 1, Critical &#x3D; 2, Error &#x3D; 3, Warning &#x3D; 4, Notice &#x3D; 5, Info &#x3D; 6, Debug &#x3D; 7, Protocol &#x3D; 8, Disabled &#x3D; 9
  LogLevels: number;
  // Arguments (depend on event ID).
  Arguments: number[];
}

// Regular broadcast for the current latest event sequence number for a component. This is used to check for dropped events.
export interface MessageCurrentEventSequence {
  // Sequence number.
  Sequence: number;
  // Flag bitset.
  Flags: MAV_EVENT_CURRENT_SEQUENCE_FLAGS;
}

// Request one or more events to be (re-)sent. If first_sequence&#x3D;&#x3D;last_sequence, only a single event is requested. Note that first_sequence can be larger than last_sequence (because the sequence number can wrap). Each sequence will trigger an EVENT or EVENT_ERROR response.
export interface MessageRequestEvent {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // First sequence number of the requested event.
  FirstSequence: number;
  // Last sequence number of the requested event.
  LastSequence: number;
}

// Response to a REQUEST_EVENT in case of an error (e.g. the event is not available anymore).
export interface MessageResponseEventError {
  // System ID
  TargetSystem: number;
  // Component ID
  TargetComponent: number;
  // Sequence number.
  Sequence: number;
  // Oldest Sequence number that is still available after the sequence set in REQUEST_EVENT.
  SequenceOldestAvailable: number;
  // Error reason.
  Reason: MAV_EVENT_ERROR_REASON;
}

// Information about a flight mode.
// The message can be enumerated to get information for all modes, or requested for a particular mode, using MAV_CMD_REQUEST_MESSAGE.
// Specify 0 in param2 to request that the message is emitted for all available modes or the specific index for just one mode.
// The modes must be available/settable for the current vehicle/frame type.
// Each mode should only be emitted once (even if it is both standard and custom).
// Note that the current mode should be emitted in CURRENT_MODE, and that if the mode list can change then AVAILABLE_MODES_MONITOR must be emitted on first change and subsequently streamed.
// See https://mavlink.io/en/services/standard_modes.html
export interface MessageAvailableModes {
  // The total number of available modes for the current vehicle type.
  NumberModes: number;
  // The current mode index within number_modes, indexed from 1. The index is not guaranteed to be persistent, and may change between reboots or if the set of modes change.
  ModeIndex: number;
  // Standard mode.
  StandardMode: MAV_STANDARD_MODE;
  // A bitfield for use for autopilot-specific flags
  CustomMode: number;
  // Mode properties.
  Properties: MAV_MODE_PROPERTY;
  // Name of custom mode, with null termination character. Should be omitted for standard modes.
  ModeName: string;
}

// Get the current mode.
// This should be emitted on any mode change, and broadcast at low rate (nominally 0.5 Hz).
// It may be requested using MAV_CMD_REQUEST_MESSAGE.
// See https://mavlink.io/en/services/standard_modes.html
export interface MessageCurrentMode {
  // Standard mode.
  StandardMode: MAV_STANDARD_MODE;
  // A bitfield for use for autopilot-specific flags
  CustomMode: number;
  // The custom_mode of the mode that was last commanded by the user (for example, with MAV_CMD_DO_SET_STANDARD_MODE, MAV_CMD_DO_SET_MODE or via RC). This should usually be the same as custom_mode. It will be different if the vehicle is unable to enter the intended mode, or has left that mode due to a failsafe condition. 0 indicates the intended custom mode is unknown/not supplied
  IntendedCustomMode: number;
}

// A change to the sequence number indicates that the set of AVAILABLE_MODES has changed.
// A receiver must re-request all available modes whenever the sequence number changes.
// This is only emitted after the first change and should then be broadcast at low rate (nominally 0.3 Hz) and on change.
// See https://mavlink.io/en/services/standard_modes.html
export interface MessageAvailableModesMonitor {
  // Sequence number. The value iterates sequentially whenever AVAILABLE_MODES changes (e.g. support for a new mode is added/removed dynamically).
  Seq: number;
}

// Illuminator status
export interface MessageIlluminatorStatus {
  // Time since the start-up of the illuminator in ms
  UptimeMs: number;
  // 0: Illuminators OFF, 1: Illuminators ON
  Enable: number;
  // Supported illuminator modes
  ModeBitmask: ILLUMINATOR_MODE;
  // Errors
  ErrorStatus: ILLUMINATOR_ERROR_FLAGS;
  // Illuminator mode
  Mode: ILLUMINATOR_MODE;
  // Illuminator brightness
  Brightness: number;
  // Illuminator strobing period in seconds
  StrobePeriod: number;
  // Illuminator strobing duty cycle
  StrobeDutyCycle: number;
  // Temperature in Celsius
  TempC: number;
  // Minimum strobing period in seconds
  MinStrobePeriod: number;
  // Maximum strobing period in seconds
  MaxStrobePeriod: number;
}

// A forwarded CANFD frame as requested by MAV_CMD_CAN_FORWARD. These are separated from CAN_FRAME as they need different handling (eg. TAO handling)
export interface MessageCanfdFrame {
  // System ID.
  TargetSystem: number;
  // Component ID.
  TargetComponent: number;
  // bus number
  Bus: number;
  // Frame length
  Len: number;
  // Frame ID
  Id: number;
  // Frame data
  Data: number[];
}

// Modify the filter of what CAN messages to forward over the mavlink. This can be used to make CAN forwarding work well on low bandwidth links. The filtering is applied on bits 8 to 24 of the CAN id (2nd and 3rd bytes) which corresponds to the DroneCAN message ID for DroneCAN. Filters with more than 16 IDs can be constructed by sending multiple CAN_FILTER_MODIFY messages.
export interface MessageCanFilterModify {
  // System ID.
  TargetSystem: number;
  // Component ID.
  TargetComponent: number;
  // bus number
  Bus: number;
  // what operation to perform on the filter list. See CAN_FILTER_OP enum.
  Operation: CAN_FILTER_OP;
  // number of IDs in filter list
  NumIds: number;
  // filter IDs, length num_ids
  Ids: number[];
}

// Cumulative distance traveled for each reported wheel.
export interface MessageWheelDistance {
  // Timestamp (synced to UNIX time or since system boot).
  TimeUsec: number;
  // Number of wheels reported.
  Count: number;
  // Distance reported by individual wheel encoders. Forward rotations increase values, reverse rotations decrease them. Not all wheels will necessarily have wheel encoders; the mapping of encoders to wheel positions must be agreed/understood by the endpoints.
  Distance: number[];
}

// Winch status.
export interface MessageWinchStatus {
  // Timestamp (synced to UNIX time or since system boot).
  TimeUsec: number;
  // Length of line released. NaN if unknown
  LineLength: number;
  // Speed line is being released or retracted. Positive values if being released, negative values if being retracted, NaN if unknown
  Speed: number;
  // Tension on the line. NaN if unknown
  Tension: number;
  // Voltage of the battery supplying the winch. NaN if unknown
  Voltage: number;
  // Current draw from the winch. NaN if unknown
  Current: number;
  // Temperature of the motor. INT16_MAX if unknown
  Temperature: number;
  // Status flags
  Status: MAV_WINCH_STATUS_FLAG;
}

// Data for filling the OpenDroneID Basic ID message. This and the below messages are primarily meant for feeding data to/from an OpenDroneID implementation. E.g. https://github.com/opendroneid/opendroneid-core-c. These messages are compatible with the ASTM F3411 Remote ID standard and the ASD-STAN prEN 4709-002 Direct Remote ID standard. Additional information and usage of these messages is documented at https://mavlink.io/en/services/opendroneid.html.
export interface MessageOpenDroneIdBasicId {
  // System ID (0 for broadcast).
  TargetSystem: number;
  // Component ID (0 for broadcast).
  TargetComponent: number;
  // Only used for drone ID data received from other UAs. See detailed description at https://mavlink.io/en/services/opendroneid.html.
  IdOrMac: number[];
  // Indicates the format for the uas_id field of this message.
  IdType: MAV_ODID_ID_TYPE;
  // Indicates the type of UA (Unmanned Aircraft).
  UaType: MAV_ODID_UA_TYPE;
  // UAS (Unmanned Aircraft System) ID following the format specified by id_type. Shall be filled with nulls in the unused portion of the field.
  UasId: number[];
}

// Data for filling the OpenDroneID Location message. The float data types are 32-bit IEEE 754. The Location message provides the location, altitude, direction and speed of the aircraft.
export interface MessageOpenDroneIdLocation {
  // System ID (0 for broadcast).
  TargetSystem: number;
  // Component ID (0 for broadcast).
  TargetComponent: number;
  // Only used for drone ID data received from other UAs. See detailed description at https://mavlink.io/en/services/opendroneid.html.
  IdOrMac: number[];
  // Indicates whether the unmanned aircraft is on the ground or in the air.
  Status: MAV_ODID_STATUS;
  // Direction over ground (not heading, but direction of movement) measured clockwise from true North: 0 - 35999 centi-degrees. If unknown: 36100 centi-degrees.
  Direction: number;
  // Ground speed. Positive only. If unknown: 25500 cm/s. If speed is larger than 25425 cm/s, use 25425 cm/s.
  SpeedHorizontal: number;
  // The vertical speed. Up is positive. If unknown: 6300 cm/s. If speed is larger than 6200 cm/s, use 6200 cm/s. If lower than -6200 cm/s, use -6200 cm/s.
  SpeedVertical: number;
  // Current latitude of the unmanned aircraft. If unknown: 0 (both Lat/Lon).
  Latitude: number;
  // Current longitude of the unmanned aircraft. If unknown: 0 (both Lat/Lon).
  Longitude: number;
  // The altitude calculated from the barometric pressure. Reference is against 29.92inHg or 1013.2mb. If unknown: -1000 m.
  AltitudeBarometric: number;
  // The geodetic altitude as defined by WGS84. If unknown: -1000 m.
  AltitudeGeodetic: number;
  // Indicates the reference point for the height field.
  HeightReference: MAV_ODID_HEIGHT_REF;
  // The current height of the unmanned aircraft above the take-off location or the ground as indicated by height_reference. If unknown: -1000 m.
  Height: number;
  // The accuracy of the horizontal position.
  HorizontalAccuracy: MAV_ODID_HOR_ACC;
  // The accuracy of the vertical position.
  VerticalAccuracy: MAV_ODID_VER_ACC;
  // The accuracy of the barometric altitude.
  BarometerAccuracy: MAV_ODID_VER_ACC;
  // The accuracy of the horizontal and vertical speed.
  SpeedAccuracy: MAV_ODID_SPEED_ACC;
  // Seconds after the full hour with reference to UTC time. Typically the GPS outputs a time-of-week value in milliseconds. First convert that to UTC and then convert for this field using ((float) (time_week_ms % (60*60*1000))) / 1000. If unknown: 0xFFFF.
  Timestamp: number;
  // The accuracy of the timestamps.
  TimestampAccuracy: MAV_ODID_TIME_ACC;
}

// Data for filling the OpenDroneID Authentication message. The Authentication Message defines a field that can provide a means of authenticity for the identity of the UAS (Unmanned Aircraft System). The Authentication message can have two different formats. For data page 0, the fields PageCount, Length and TimeStamp are present and AuthData is only 17 bytes. For data page 1 through 15, PageCount, Length and TimeStamp are not present and the size of AuthData is 23 bytes.
export interface MessageOpenDroneIdAuthentication {
  // System ID (0 for broadcast).
  TargetSystem: number;
  // Component ID (0 for broadcast).
  TargetComponent: number;
  // Only used for drone ID data received from other UAs. See detailed description at https://mavlink.io/en/services/opendroneid.html.
  IdOrMac: number[];
  // Indicates the type of authentication.
  AuthenticationType: MAV_ODID_AUTH_TYPE;
  // Allowed range is 0 - 15.
  DataPage: number;
  // This field is only present for page 0. Allowed range is 0 - 15. See the description of struct ODID_Auth_data at https://github.com/opendroneid/opendroneid-core-c/blob/master/libopendroneid/opendroneid.h.
  LastPageIndex: number;
  // This field is only present for page 0. Total bytes of authentication_data from all data pages. See the description of struct ODID_Auth_data at https://github.com/opendroneid/opendroneid-core-c/blob/master/libopendroneid/opendroneid.h.
  Length: number;
  // This field is only present for page 0. 32 bit Unix Timestamp in seconds since 00:00:00 01/01/2019.
  Timestamp: number;
  // Opaque authentication data. For page 0, the size is only 17 bytes. For other pages, the size is 23 bytes. Shall be filled with nulls in the unused portion of the field.
  AuthenticationData: number[];
}

// Data for filling the OpenDroneID Self ID message. The Self ID Message is an opportunity for the operator to (optionally) declare their identity and purpose of the flight. This message can provide additional information that could reduce the threat profile of a UA (Unmanned Aircraft) flying in a particular area or manner. This message can also be used to provide optional additional clarification in an emergency/remote ID system failure situation.
export interface MessageOpenDroneIdSelfId {
  // System ID (0 for broadcast).
  TargetSystem: number;
  // Component ID (0 for broadcast).
  TargetComponent: number;
  // Only used for drone ID data received from other UAs. See detailed description at https://mavlink.io/en/services/opendroneid.html.
  IdOrMac: number[];
  // Indicates the type of the description field.
  DescriptionType: MAV_ODID_DESC_TYPE;
  // Text description or numeric value expressed as ASCII characters. Shall be filled with nulls in the unused portion of the field.
  Description: string;
}

// Data for filling the OpenDroneID System message. The System Message contains general system information including the operator location/altitude and possible aircraft group and/or category/class information.
export interface MessageOpenDroneIdSystem {
  // System ID (0 for broadcast).
  TargetSystem: number;
  // Component ID (0 for broadcast).
  TargetComponent: number;
  // Only used for drone ID data received from other UAs. See detailed description at https://mavlink.io/en/services/opendroneid.html.
  IdOrMac: number[];
  // Specifies the operator location type.
  OperatorLocationType: MAV_ODID_OPERATOR_LOCATION_TYPE;
  // Specifies the classification type of the UA.
  ClassificationType: MAV_ODID_CLASSIFICATION_TYPE;
  // Latitude of the operator. If unknown: 0 (both Lat/Lon).
  OperatorLatitude: number;
  // Longitude of the operator. If unknown: 0 (both Lat/Lon).
  OperatorLongitude: number;
  // Number of aircraft in the area, group or formation (default 1). Used only for swarms/multiple UA.
  AreaCount: number;
  // Radius of the cylindrical area of the group or formation (default 0). Used only for swarms/multiple UA.
  AreaRadius: number;
  // Area Operations Ceiling relative to WGS84. If unknown: -1000 m. Used only for swarms/multiple UA.
  AreaCeiling: number;
  // Area Operations Floor relative to WGS84. If unknown: -1000 m. Used only for swarms/multiple UA.
  AreaFloor: number;
  // When classification_type is MAV_ODID_CLASSIFICATION_TYPE_EU, specifies the category of the UA.
  CategoryEu: MAV_ODID_CATEGORY_EU;
  // When classification_type is MAV_ODID_CLASSIFICATION_TYPE_EU, specifies the class of the UA.
  ClassEu: MAV_ODID_CLASS_EU;
  // Geodetic altitude of the operator relative to WGS84. If unknown: -1000 m.
  OperatorAltitudeGeo: number;
  // 32 bit Unix Timestamp in seconds since 00:00:00 01/01/2019.
  Timestamp: number;
}

// Data for filling the OpenDroneID Operator ID message, which contains the CAA (Civil Aviation Authority) issued operator ID.
export interface MessageOpenDroneIdOperatorId {
  // System ID (0 for broadcast).
  TargetSystem: number;
  // Component ID (0 for broadcast).
  TargetComponent: number;
  // Only used for drone ID data received from other UAs. See detailed description at https://mavlink.io/en/services/opendroneid.html.
  IdOrMac: number[];
  // Indicates the type of the operator_id field.
  OperatorIdType: MAV_ODID_OPERATOR_ID_TYPE;
  // Text description or numeric value expressed as ASCII characters. Shall be filled with nulls in the unused portion of the field.
  OperatorId: string;
}

// An OpenDroneID message pack is a container for multiple encoded OpenDroneID messages (i.e. not in the format given for the above message descriptions but after encoding into the compressed OpenDroneID byte format). Used e.g. when transmitting on Bluetooth 5.0 Long Range/Extended Advertising or on WiFi Neighbor Aware Networking or on WiFi Beacon.
export interface MessageOpenDroneIdMessagePack {
  // System ID (0 for broadcast).
  TargetSystem: number;
  // Component ID (0 for broadcast).
  TargetComponent: number;
  // Only used for drone ID data received from other UAs. See detailed description at https://mavlink.io/en/services/opendroneid.html.
  IdOrMac: number[];
  // This field must currently always be equal to 25 (bytes), since all encoded OpenDroneID messages are specified to have this length.
  SingleMessageSize: number;
  // Number of encoded messages in the pack (not the number of bytes). Allowed range is 1 - 9.
  MsgPackSize: number;
  // Concatenation of encoded OpenDroneID messages. Shall be filled with nulls in the unused portion of the field.
  Messages: number[];
}

// Transmitter (remote ID system) is enabled and ready to start sending location and other required information. This is streamed by transmitter. A flight controller uses it as a condition to arm.
export interface MessageOpenDroneIdArmStatus {
  // Status level indicating if arming is allowed.
  Status: MAV_ODID_ARM_STATUS;
  // Text error message, should be empty if status is good to arm. Fill with nulls in unused portion.
  Error: string;
}

// Update the data in the OPEN_DRONE_ID_SYSTEM message with new location information. This can be sent to update the location information for the operator when no other information in the SYSTEM message has changed. This message allows for efficient operation on radio links which have limited uplink bandwidth while meeting requirements for update frequency of the operator location.
export interface MessageOpenDroneIdSystemUpdate {
  // System ID (0 for broadcast).
  TargetSystem: number;
  // Component ID (0 for broadcast).
  TargetComponent: number;
  // Latitude of the operator. If unknown: 0 (both Lat/Lon).
  OperatorLatitude: number;
  // Longitude of the operator. If unknown: 0 (both Lat/Lon).
  OperatorLongitude: number;
  // Geodetic altitude of the operator relative to WGS84. If unknown: -1000 m.
  OperatorAltitudeGeo: number;
  // 32 bit Unix Timestamp in seconds since 00:00:00 01/01/2019.
  Timestamp: number;
}

// Temperature and humidity from hygrometer.
export interface MessageHygrometerSensor {
  // Hygrometer ID
  Id: number;
  // Temperature
  Temperature: number;
  // Humidity
  Humidity: number;
}

