// Auto-generated TypeScript message interfaces for minimal dialect

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

