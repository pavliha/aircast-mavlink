// Auto-generated TypeScript enums for common dialect

// Micro air vehicle / autopilot classes. This identifies the individual model.
export enum MAV_AUTOPILOTEnum {
  // Generic autopilot, full support for everything
  MAV_AUTOPILOT_GENERIC = 'MAV_AUTOPILOT_GENERIC',
  // Reserved for future use.
  MAV_AUTOPILOT_RESERVED = 'MAV_AUTOPILOT_RESERVED',
  // SLUGS autopilot, http://slugsuav.soe.ucsc.edu
  MAV_AUTOPILOT_SLUGS = 'MAV_AUTOPILOT_SLUGS',
  // ArduPilot - Plane/Copter/Rover/Sub/Tracker, https://ardupilot.org
  MAV_AUTOPILOT_ARDUPILOTMEGA = 'MAV_AUTOPILOT_ARDUPILOTMEGA',
  // OpenPilot, http://openpilot.org
  MAV_AUTOPILOT_OPENPILOT = 'MAV_AUTOPILOT_OPENPILOT',
  // Generic autopilot only supporting simple waypoints
  MAV_AUTOPILOT_GENERIC_WAYPOINTS_ONLY = 'MAV_AUTOPILOT_GENERIC_WAYPOINTS_ONLY',
  // Generic autopilot supporting waypoints and other simple navigation commands
  MAV_AUTOPILOT_GENERIC_WAYPOINTS_AND_SIMPLE_NAVIGATION_ONLY = 'MAV_AUTOPILOT_GENERIC_WAYPOINTS_AND_SIMPLE_NAVIGATION_ONLY',
  // Generic autopilot supporting the full mission command set
  MAV_AUTOPILOT_GENERIC_MISSION_FULL = 'MAV_AUTOPILOT_GENERIC_MISSION_FULL',
  // No valid autopilot, e.g. a GCS or other MAVLink component
  MAV_AUTOPILOT_INVALID = 'MAV_AUTOPILOT_INVALID',
  // PPZ UAV - http://nongnu.org/paparazzi
  MAV_AUTOPILOT_PPZ = 'MAV_AUTOPILOT_PPZ',
  // UAV Dev Board
  MAV_AUTOPILOT_UDB = 'MAV_AUTOPILOT_UDB',
  // FlexiPilot
  MAV_AUTOPILOT_FP = 'MAV_AUTOPILOT_FP',
  // PX4 Autopilot - http://px4.io/
  MAV_AUTOPILOT_PX4 = 'MAV_AUTOPILOT_PX4',
  // SMACCMPilot - http://smaccmpilot.org
  MAV_AUTOPILOT_SMACCMPILOT = 'MAV_AUTOPILOT_SMACCMPILOT',
  // AutoQuad -- http://autoquad.org
  MAV_AUTOPILOT_AUTOQUAD = 'MAV_AUTOPILOT_AUTOQUAD',
  // Armazila -- http://armazila.com
  MAV_AUTOPILOT_ARMAZILA = 'MAV_AUTOPILOT_ARMAZILA',
  // Aerob -- http://aerob.ru
  MAV_AUTOPILOT_AEROB = 'MAV_AUTOPILOT_AEROB',
  // ASLUAV autopilot -- http://www.asl.ethz.ch
  MAV_AUTOPILOT_ASLUAV = 'MAV_AUTOPILOT_ASLUAV',
  // SmartAP Autopilot - http://sky-drones.com
  MAV_AUTOPILOT_SMARTAP = 'MAV_AUTOPILOT_SMARTAP',
  // AirRails - http://uaventure.com
  MAV_AUTOPILOT_AIRRAILS = 'MAV_AUTOPILOT_AIRRAILS',
  // Fusion Reflex - https://fusion.engineering
  MAV_AUTOPILOT_REFLEX = 'MAV_AUTOPILOT_REFLEX',
}

export type MAV_AUTOPILOT =
  | 'MAV_AUTOPILOT_GENERIC' // Generic autopilot, full support for everything
  | 'MAV_AUTOPILOT_RESERVED' // Reserved for future use.
  | 'MAV_AUTOPILOT_SLUGS' // SLUGS autopilot, http://slugsuav.soe.ucsc.edu
  | 'MAV_AUTOPILOT_ARDUPILOTMEGA' // ArduPilot - Plane/Copter/Rover/Sub/Tracker, https://ardupilot.org
  | 'MAV_AUTOPILOT_OPENPILOT' // OpenPilot, http://openpilot.org
  | 'MAV_AUTOPILOT_GENERIC_WAYPOINTS_ONLY' // Generic autopilot only supporting simple waypoints
  | 'MAV_AUTOPILOT_GENERIC_WAYPOINTS_AND_SIMPLE_NAVIGATION_ONLY' // Generic autopilot supporting waypoints and other simple navigation commands
  | 'MAV_AUTOPILOT_GENERIC_MISSION_FULL' // Generic autopilot supporting the full mission command set
  | 'MAV_AUTOPILOT_INVALID' // No valid autopilot, e.g. a GCS or other MAVLink component
  | 'MAV_AUTOPILOT_PPZ' // PPZ UAV - http://nongnu.org/paparazzi
  | 'MAV_AUTOPILOT_UDB' // UAV Dev Board
  | 'MAV_AUTOPILOT_FP' // FlexiPilot
  | 'MAV_AUTOPILOT_PX4' // PX4 Autopilot - http://px4.io/
  | 'MAV_AUTOPILOT_SMACCMPILOT' // SMACCMPilot - http://smaccmpilot.org
  | 'MAV_AUTOPILOT_AUTOQUAD' // AutoQuad -- http://autoquad.org
  | 'MAV_AUTOPILOT_ARMAZILA' // Armazila -- http://armazila.com
  | 'MAV_AUTOPILOT_AEROB' // Aerob -- http://aerob.ru
  | 'MAV_AUTOPILOT_ASLUAV' // ASLUAV autopilot -- http://www.asl.ethz.ch
  | 'MAV_AUTOPILOT_SMARTAP' // SmartAP Autopilot - http://sky-drones.com
  | 'MAV_AUTOPILOT_AIRRAILS' // AirRails - http://uaventure.com
  | 'MAV_AUTOPILOT_REFLEX' // Fusion Reflex - https://fusion.engineering
  | string;

// MAVLINK component type reported in HEARTBEAT message. Flight controllers must report the type of the vehicle on which they are mounted (e.g. MAV_TYPE_OCTOROTOR). All other components must report a value appropriate for their type (e.g. a camera must use MAV_TYPE_CAMERA).
export enum MAV_TYPEEnum {
  // Generic micro air vehicle
  MAV_TYPE_GENERIC = 'MAV_TYPE_GENERIC',
  // Fixed wing aircraft.
  MAV_TYPE_FIXED_WING = 'MAV_TYPE_FIXED_WING',
  // Quadrotor
  MAV_TYPE_QUADROTOR = 'MAV_TYPE_QUADROTOR',
  // Coaxial helicopter
  MAV_TYPE_COAXIAL = 'MAV_TYPE_COAXIAL',
  // Normal helicopter with tail rotor.
  MAV_TYPE_HELICOPTER = 'MAV_TYPE_HELICOPTER',
  // Ground installation
  MAV_TYPE_ANTENNA_TRACKER = 'MAV_TYPE_ANTENNA_TRACKER',
  // Operator control unit / ground control station
  MAV_TYPE_GCS = 'MAV_TYPE_GCS',
  // Airship, controlled
  MAV_TYPE_AIRSHIP = 'MAV_TYPE_AIRSHIP',
  // Free balloon, uncontrolled
  MAV_TYPE_FREE_BALLOON = 'MAV_TYPE_FREE_BALLOON',
  // Rocket
  MAV_TYPE_ROCKET = 'MAV_TYPE_ROCKET',
  // Ground rover
  MAV_TYPE_GROUND_ROVER = 'MAV_TYPE_GROUND_ROVER',
  // Surface vessel, boat, ship
  MAV_TYPE_SURFACE_BOAT = 'MAV_TYPE_SURFACE_BOAT',
  // Submarine
  MAV_TYPE_SUBMARINE = 'MAV_TYPE_SUBMARINE',
  // Hexarotor
  MAV_TYPE_HEXAROTOR = 'MAV_TYPE_HEXAROTOR',
  // Octorotor
  MAV_TYPE_OCTOROTOR = 'MAV_TYPE_OCTOROTOR',
  // Tricopter
  MAV_TYPE_TRICOPTER = 'MAV_TYPE_TRICOPTER',
  // Flapping wing
  MAV_TYPE_FLAPPING_WING = 'MAV_TYPE_FLAPPING_WING',
  // Kite
  MAV_TYPE_KITE = 'MAV_TYPE_KITE',
  // Onboard companion controller
  MAV_TYPE_ONBOARD_CONTROLLER = 'MAV_TYPE_ONBOARD_CONTROLLER',
  // Two-rotor Tailsitter VTOL that additionally uses control surfaces in vertical operation. Note, value previously named MAV_TYPE_VTOL_DUOROTOR.
  MAV_TYPE_VTOL_TAILSITTER_DUOROTOR = 'MAV_TYPE_VTOL_TAILSITTER_DUOROTOR',
  // Quad-rotor Tailsitter VTOL using a V-shaped quad config in vertical operation. Note: value previously named MAV_TYPE_VTOL_QUADROTOR.
  MAV_TYPE_VTOL_TAILSITTER_QUADROTOR = 'MAV_TYPE_VTOL_TAILSITTER_QUADROTOR',
  // Tiltrotor VTOL. Fuselage and wings stay (nominally) horizontal in all flight phases. It able to tilt (some) rotors to provide thrust in cruise flight.
  MAV_TYPE_VTOL_TILTROTOR = 'MAV_TYPE_VTOL_TILTROTOR',
  // VTOL with separate fixed rotors for hover and cruise flight. Fuselage and wings stay (nominally) horizontal in all flight phases.
  MAV_TYPE_VTOL_FIXEDROTOR = 'MAV_TYPE_VTOL_FIXEDROTOR',
  // Tailsitter VTOL. Fuselage and wings orientation changes depending on flight phase: vertical for hover, horizontal for cruise. Use more specific VTOL MAV_TYPE_VTOL_TAILSITTER_DUOROTOR or MAV_TYPE_VTOL_TAILSITTER_QUADROTOR if appropriate.
  MAV_TYPE_VTOL_TAILSITTER = 'MAV_TYPE_VTOL_TAILSITTER',
  // Tiltwing VTOL. Fuselage stays horizontal in all flight phases. The whole wing, along with any attached engine, can tilt between vertical and horizontal mode.
  MAV_TYPE_VTOL_TILTWING = 'MAV_TYPE_VTOL_TILTWING',
  // VTOL reserved 5
  MAV_TYPE_VTOL_RESERVED5 = 'MAV_TYPE_VTOL_RESERVED5',
  // Gimbal
  MAV_TYPE_GIMBAL = 'MAV_TYPE_GIMBAL',
  // ADSB system
  MAV_TYPE_ADSB = 'MAV_TYPE_ADSB',
  // Steerable, nonrigid airfoil
  MAV_TYPE_PARAFOIL = 'MAV_TYPE_PARAFOIL',
  // Dodecarotor
  MAV_TYPE_DODECAROTOR = 'MAV_TYPE_DODECAROTOR',
  // Camera
  MAV_TYPE_CAMERA = 'MAV_TYPE_CAMERA',
  // Charging station
  MAV_TYPE_CHARGING_STATION = 'MAV_TYPE_CHARGING_STATION',
  // FLARM collision avoidance system
  MAV_TYPE_FLARM = 'MAV_TYPE_FLARM',
  // Servo
  MAV_TYPE_SERVO = 'MAV_TYPE_SERVO',
  // Open Drone ID. See https://mavlink.io/en/services/opendroneid.html.
  MAV_TYPE_ODID = 'MAV_TYPE_ODID',
  // Decarotor
  MAV_TYPE_DECAROTOR = 'MAV_TYPE_DECAROTOR',
  // Battery
  MAV_TYPE_BATTERY = 'MAV_TYPE_BATTERY',
  // Parachute
  MAV_TYPE_PARACHUTE = 'MAV_TYPE_PARACHUTE',
  // Log
  MAV_TYPE_LOG = 'MAV_TYPE_LOG',
  // OSD
  MAV_TYPE_OSD = 'MAV_TYPE_OSD',
  // IMU
  MAV_TYPE_IMU = 'MAV_TYPE_IMU',
  // GPS
  MAV_TYPE_GPS = 'MAV_TYPE_GPS',
  // Winch
  MAV_TYPE_WINCH = 'MAV_TYPE_WINCH',
  // Generic multirotor that does not fit into a specific type or whose type is unknown
  MAV_TYPE_GENERIC_MULTIROTOR = 'MAV_TYPE_GENERIC_MULTIROTOR',
  // Illuminator. An illuminator is a light source that is used for lighting up dark areas external to the system: e.g. a torch or searchlight (as opposed to a light source for illuminating the system itself, e.g. an indicator light).
  MAV_TYPE_ILLUMINATOR = 'MAV_TYPE_ILLUMINATOR',
  // Orbiter spacecraft. Includes satellites orbiting terrestrial and extra-terrestrial bodies. Follows NASA Spacecraft Classification.
  MAV_TYPE_SPACECRAFT_ORBITER = 'MAV_TYPE_SPACECRAFT_ORBITER',
  // A generic four-legged ground vehicle (e.g., a robot dog).
  MAV_TYPE_GROUND_QUADRUPED = 'MAV_TYPE_GROUND_QUADRUPED',
  // VTOL hybrid of helicopter and autogyro. It has a main rotor for lift and separate propellers for forward flight. The rotor must be powered for hover but can autorotate in cruise flight. See: https://en.wikipedia.org/wiki/Gyrodyne
  MAV_TYPE_VTOL_GYRODYNE = 'MAV_TYPE_VTOL_GYRODYNE',
  // Gripper
  MAV_TYPE_GRIPPER = 'MAV_TYPE_GRIPPER',
}

export type MAV_TYPE =
  | 'MAV_TYPE_GENERIC' // Generic micro air vehicle
  | 'MAV_TYPE_FIXED_WING' // Fixed wing aircraft.
  | 'MAV_TYPE_QUADROTOR' // Quadrotor
  | 'MAV_TYPE_COAXIAL' // Coaxial helicopter
  | 'MAV_TYPE_HELICOPTER' // Normal helicopter with tail rotor.
  | 'MAV_TYPE_ANTENNA_TRACKER' // Ground installation
  | 'MAV_TYPE_GCS' // Operator control unit / ground control station
  | 'MAV_TYPE_AIRSHIP' // Airship, controlled
  | 'MAV_TYPE_FREE_BALLOON' // Free balloon, uncontrolled
  | 'MAV_TYPE_ROCKET' // Rocket
  | 'MAV_TYPE_GROUND_ROVER' // Ground rover
  | 'MAV_TYPE_SURFACE_BOAT' // Surface vessel, boat, ship
  | 'MAV_TYPE_SUBMARINE' // Submarine
  | 'MAV_TYPE_HEXAROTOR' // Hexarotor
  | 'MAV_TYPE_OCTOROTOR' // Octorotor
  | 'MAV_TYPE_TRICOPTER' // Tricopter
  | 'MAV_TYPE_FLAPPING_WING' // Flapping wing
  | 'MAV_TYPE_KITE' // Kite
  | 'MAV_TYPE_ONBOARD_CONTROLLER' // Onboard companion controller
  | 'MAV_TYPE_VTOL_TAILSITTER_DUOROTOR' // Two-rotor Tailsitter VTOL that additionally uses control surfaces in vertical operation. Note, value previously named MAV_TYPE_VTOL_DUOROTOR.
  | 'MAV_TYPE_VTOL_TAILSITTER_QUADROTOR' // Quad-rotor Tailsitter VTOL using a V-shaped quad config in vertical operation. Note: value previously named MAV_TYPE_VTOL_QUADROTOR.
  | 'MAV_TYPE_VTOL_TILTROTOR' // Tiltrotor VTOL. Fuselage and wings stay (nominally) horizontal in all flight phases. It able to tilt (some) rotors to provide thrust in cruise flight.
  | 'MAV_TYPE_VTOL_FIXEDROTOR' // VTOL with separate fixed rotors for hover and cruise flight. Fuselage and wings stay (nominally) horizontal in all flight phases.
  | 'MAV_TYPE_VTOL_TAILSITTER' // Tailsitter VTOL. Fuselage and wings orientation changes depending on flight phase: vertical for hover, horizontal for cruise. Use more specific VTOL MAV_TYPE_VTOL_TAILSITTER_DUOROTOR or MAV_TYPE_VTOL_TAILSITTER_QUADROTOR if appropriate.
  | 'MAV_TYPE_VTOL_TILTWING' // Tiltwing VTOL. Fuselage stays horizontal in all flight phases. The whole wing, along with any attached engine, can tilt between vertical and horizontal mode.
  | 'MAV_TYPE_VTOL_RESERVED5' // VTOL reserved 5
  | 'MAV_TYPE_GIMBAL' // Gimbal
  | 'MAV_TYPE_ADSB' // ADSB system
  | 'MAV_TYPE_PARAFOIL' // Steerable, nonrigid airfoil
  | 'MAV_TYPE_DODECAROTOR' // Dodecarotor
  | 'MAV_TYPE_CAMERA' // Camera
  | 'MAV_TYPE_CHARGING_STATION' // Charging station
  | 'MAV_TYPE_FLARM' // FLARM collision avoidance system
  | 'MAV_TYPE_SERVO' // Servo
  | 'MAV_TYPE_ODID' // Open Drone ID. See https://mavlink.io/en/services/opendroneid.html.
  | 'MAV_TYPE_DECAROTOR' // Decarotor
  | 'MAV_TYPE_BATTERY' // Battery
  | 'MAV_TYPE_PARACHUTE' // Parachute
  | 'MAV_TYPE_LOG' // Log
  | 'MAV_TYPE_OSD' // OSD
  | 'MAV_TYPE_IMU' // IMU
  | 'MAV_TYPE_GPS' // GPS
  | 'MAV_TYPE_WINCH' // Winch
  | 'MAV_TYPE_GENERIC_MULTIROTOR' // Generic multirotor that does not fit into a specific type or whose type is unknown
  | 'MAV_TYPE_ILLUMINATOR' // Illuminator. An illuminator is a light source that is used for lighting up dark areas external to the system: e.g. a torch or searchlight (as opposed to a light source for illuminating the system itself, e.g. an indicator light).
  | 'MAV_TYPE_SPACECRAFT_ORBITER' // Orbiter spacecraft. Includes satellites orbiting terrestrial and extra-terrestrial bodies. Follows NASA Spacecraft Classification.
  | 'MAV_TYPE_GROUND_QUADRUPED' // A generic four-legged ground vehicle (e.g., a robot dog).
  | 'MAV_TYPE_VTOL_GYRODYNE' // VTOL hybrid of helicopter and autogyro. It has a main rotor for lift and separate propellers for forward flight. The rotor must be powered for hover but can autorotate in cruise flight. See: https://en.wikipedia.org/wiki/Gyrodyne
  | 'MAV_TYPE_GRIPPER' // Gripper
  | string;

// These flags encode the MAV mode, see MAV_MODE enum for useful combinations.
export enum MAV_MODE_FLAGEnum {
  // 0b10000000 MAV safety set to armed. Motors are enabled / running / can start. Ready to fly. Additional note: this flag is to be ignore when sent in the command MAV_CMD_DO_SET_MODE and MAV_CMD_COMPONENT_ARM_DISARM shall be used instead. The flag can still be used to report the armed state.
  MAV_MODE_FLAG_SAFETY_ARMED = 'MAV_MODE_FLAG_SAFETY_ARMED',
  // 0b01000000 remote control input is enabled.
  MAV_MODE_FLAG_MANUAL_INPUT_ENABLED = 'MAV_MODE_FLAG_MANUAL_INPUT_ENABLED',
  // 0b00100000 hardware in the loop simulation. All motors / actuators are blocked, but internal software is full operational.
  MAV_MODE_FLAG_HIL_ENABLED = 'MAV_MODE_FLAG_HIL_ENABLED',
  // 0b00010000 system stabilizes electronically its attitude (and optionally position). It needs however further control inputs to move around.
  MAV_MODE_FLAG_STABILIZE_ENABLED = 'MAV_MODE_FLAG_STABILIZE_ENABLED',
  // 0b00001000 guided mode enabled, system flies waypoints / mission items.
  MAV_MODE_FLAG_GUIDED_ENABLED = 'MAV_MODE_FLAG_GUIDED_ENABLED',
  // 0b00000100 autonomous mode enabled, system finds its own goal positions. Guided flag can be set or not, depends on the actual implementation.
  MAV_MODE_FLAG_AUTO_ENABLED = 'MAV_MODE_FLAG_AUTO_ENABLED',
  // 0b00000010 system has a test mode enabled. This flag is intended for temporary system tests and should not be used for stable implementations.
  MAV_MODE_FLAG_TEST_ENABLED = 'MAV_MODE_FLAG_TEST_ENABLED',
  // 0b00000001 system-specific custom mode is enabled. When using this flag to enable a custom mode all other flags should be ignored.
  MAV_MODE_FLAG_CUSTOM_MODE_ENABLED = 'MAV_MODE_FLAG_CUSTOM_MODE_ENABLED',
}

export type MAV_MODE_FLAG =
  | 'MAV_MODE_FLAG_SAFETY_ARMED' // 0b10000000 MAV safety set to armed. Motors are enabled / running / can start. Ready to fly. Additional note: this flag is to be ignore when sent in the command MAV_CMD_DO_SET_MODE and MAV_CMD_COMPONENT_ARM_DISARM shall be used instead. The flag can still be used to report the armed state.
  | 'MAV_MODE_FLAG_MANUAL_INPUT_ENABLED' // 0b01000000 remote control input is enabled.
  | 'MAV_MODE_FLAG_HIL_ENABLED' // 0b00100000 hardware in the loop simulation. All motors / actuators are blocked, but internal software is full operational.
  | 'MAV_MODE_FLAG_STABILIZE_ENABLED' // 0b00010000 system stabilizes electronically its attitude (and optionally position). It needs however further control inputs to move around.
  | 'MAV_MODE_FLAG_GUIDED_ENABLED' // 0b00001000 guided mode enabled, system flies waypoints / mission items.
  | 'MAV_MODE_FLAG_AUTO_ENABLED' // 0b00000100 autonomous mode enabled, system finds its own goal positions. Guided flag can be set or not, depends on the actual implementation.
  | 'MAV_MODE_FLAG_TEST_ENABLED' // 0b00000010 system has a test mode enabled. This flag is intended for temporary system tests and should not be used for stable implementations.
  | 'MAV_MODE_FLAG_CUSTOM_MODE_ENABLED' // 0b00000001 system-specific custom mode is enabled. When using this flag to enable a custom mode all other flags should be ignored.
  | string;

// These values encode the bit positions of the decode position. These values can be used to read the value of a flag bit by combining the base_mode variable with AND with the flag position value. The result will be either 0 or 1, depending on if the flag is set or not.
export enum MAV_MODE_FLAG_DECODE_POSITIONEnum {
  // First bit:  10000000
  MAV_MODE_FLAG_DECODE_POSITION_SAFETY = 'MAV_MODE_FLAG_DECODE_POSITION_SAFETY',
  // Second bit: 01000000
  MAV_MODE_FLAG_DECODE_POSITION_MANUAL = 'MAV_MODE_FLAG_DECODE_POSITION_MANUAL',
  // Third bit:  00100000
  MAV_MODE_FLAG_DECODE_POSITION_HIL = 'MAV_MODE_FLAG_DECODE_POSITION_HIL',
  // Fourth bit: 00010000
  MAV_MODE_FLAG_DECODE_POSITION_STABILIZE = 'MAV_MODE_FLAG_DECODE_POSITION_STABILIZE',
  // Fifth bit:  00001000
  MAV_MODE_FLAG_DECODE_POSITION_GUIDED = 'MAV_MODE_FLAG_DECODE_POSITION_GUIDED',
  // Sixth bit:   00000100
  MAV_MODE_FLAG_DECODE_POSITION_AUTO = 'MAV_MODE_FLAG_DECODE_POSITION_AUTO',
  // Seventh bit: 00000010
  MAV_MODE_FLAG_DECODE_POSITION_TEST = 'MAV_MODE_FLAG_DECODE_POSITION_TEST',
  // Eighth bit: 00000001
  MAV_MODE_FLAG_DECODE_POSITION_CUSTOM_MODE = 'MAV_MODE_FLAG_DECODE_POSITION_CUSTOM_MODE',
}

export type MAV_MODE_FLAG_DECODE_POSITION =
  | 'MAV_MODE_FLAG_DECODE_POSITION_SAFETY' // First bit:  10000000
  | 'MAV_MODE_FLAG_DECODE_POSITION_MANUAL' // Second bit: 01000000
  | 'MAV_MODE_FLAG_DECODE_POSITION_HIL' // Third bit:  00100000
  | 'MAV_MODE_FLAG_DECODE_POSITION_STABILIZE' // Fourth bit: 00010000
  | 'MAV_MODE_FLAG_DECODE_POSITION_GUIDED' // Fifth bit:  00001000
  | 'MAV_MODE_FLAG_DECODE_POSITION_AUTO' // Sixth bit:   00000100
  | 'MAV_MODE_FLAG_DECODE_POSITION_TEST' // Seventh bit: 00000010
  | 'MAV_MODE_FLAG_DECODE_POSITION_CUSTOM_MODE' // Eighth bit: 00000001
  | string;

export enum MAV_STATEEnum {
  // Uninitialized system, state is unknown.
  MAV_STATE_UNINIT = 'MAV_STATE_UNINIT',
  // System is booting up.
  MAV_STATE_BOOT = 'MAV_STATE_BOOT',
  // System is calibrating and not flight-ready.
  MAV_STATE_CALIBRATING = 'MAV_STATE_CALIBRATING',
  // System is grounded and on standby. It can be launched any time.
  MAV_STATE_STANDBY = 'MAV_STATE_STANDBY',
  // System is active and might be already airborne. Motors are engaged.
  MAV_STATE_ACTIVE = 'MAV_STATE_ACTIVE',
  // System is in a non-normal flight mode (failsafe). It can however still navigate.
  MAV_STATE_CRITICAL = 'MAV_STATE_CRITICAL',
  // System is in a non-normal flight mode (failsafe). It lost control over parts or over the whole airframe. It is in mayday and going down.
  MAV_STATE_EMERGENCY = 'MAV_STATE_EMERGENCY',
  // System just initialized its power-down sequence, will shut down now.
  MAV_STATE_POWEROFF = 'MAV_STATE_POWEROFF',
  // System is terminating itself (failsafe or commanded).
  MAV_STATE_FLIGHT_TERMINATION = 'MAV_STATE_FLIGHT_TERMINATION',
}

export type MAV_STATE =
  | 'MAV_STATE_UNINIT' // Uninitialized system, state is unknown.
  | 'MAV_STATE_BOOT' // System is booting up.
  | 'MAV_STATE_CALIBRATING' // System is calibrating and not flight-ready.
  | 'MAV_STATE_STANDBY' // System is grounded and on standby. It can be launched any time.
  | 'MAV_STATE_ACTIVE' // System is active and might be already airborne. Motors are engaged.
  | 'MAV_STATE_CRITICAL' // System is in a non-normal flight mode (failsafe). It can however still navigate.
  | 'MAV_STATE_EMERGENCY' // System is in a non-normal flight mode (failsafe). It lost control over parts or over the whole airframe. It is in mayday and going down.
  | 'MAV_STATE_POWEROFF' // System just initialized its power-down sequence, will shut down now.
  | 'MAV_STATE_FLIGHT_TERMINATION' // System is terminating itself (failsafe or commanded).
  | string;

// Legacy component ID values for particular types of hardware/software that might make up a MAVLink system (autopilot, cameras, servos, avoidance systems etc.).
// Components are not required or expected to use IDs with names that correspond to their type or function, but may choose to do so.
// Using an ID that matches the type may slightly reduce the chances of component id clashes, as, for historical reasons, it is less likely to be used by some other type of component.
// System integration will still need to ensure that all components have unique IDs.
// Component IDs are used for addressing messages to a particular component within a system.
// A component can use any unique ID between 1 and 255 (MAV_COMP_ID_ALL value is the broadcast address, used to send to all components).
// Historically component ID were also used for identifying the type of component.
// New code must not use component IDs to infer the component type, but instead check the MAV_TYPE in the HEARTBEAT message!
export enum MAV_COMPONENTEnum {
  // Target id (target_component) used to broadcast messages to all components of the receiving system. Components should attempt to process messages with this component ID and forward to components on any other interfaces. Note: This is not a valid *source* component id for a message.
  MAV_COMP_ID_ALL = 'MAV_COMP_ID_ALL',
  // System flight controller component (&quot;autopilot&quot;). Only one autopilot is expected in a particular system.
  MAV_COMP_ID_AUTOPILOT1 = 'MAV_COMP_ID_AUTOPILOT1',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER1 = 'MAV_COMP_ID_USER1',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER2 = 'MAV_COMP_ID_USER2',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER3 = 'MAV_COMP_ID_USER3',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER4 = 'MAV_COMP_ID_USER4',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER5 = 'MAV_COMP_ID_USER5',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER6 = 'MAV_COMP_ID_USER6',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER7 = 'MAV_COMP_ID_USER7',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER8 = 'MAV_COMP_ID_USER8',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER9 = 'MAV_COMP_ID_USER9',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER10 = 'MAV_COMP_ID_USER10',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER11 = 'MAV_COMP_ID_USER11',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER12 = 'MAV_COMP_ID_USER12',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER13 = 'MAV_COMP_ID_USER13',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER14 = 'MAV_COMP_ID_USER14',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER15 = 'MAV_COMP_ID_USER15',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER16 = 'MAV_COMP_ID_USER16',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER17 = 'MAV_COMP_ID_USER17',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER18 = 'MAV_COMP_ID_USER18',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER19 = 'MAV_COMP_ID_USER19',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER20 = 'MAV_COMP_ID_USER20',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER21 = 'MAV_COMP_ID_USER21',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER22 = 'MAV_COMP_ID_USER22',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER23 = 'MAV_COMP_ID_USER23',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER24 = 'MAV_COMP_ID_USER24',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER25 = 'MAV_COMP_ID_USER25',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER26 = 'MAV_COMP_ID_USER26',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER27 = 'MAV_COMP_ID_USER27',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER28 = 'MAV_COMP_ID_USER28',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER29 = 'MAV_COMP_ID_USER29',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER30 = 'MAV_COMP_ID_USER30',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER31 = 'MAV_COMP_ID_USER31',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER32 = 'MAV_COMP_ID_USER32',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER33 = 'MAV_COMP_ID_USER33',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER34 = 'MAV_COMP_ID_USER34',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER35 = 'MAV_COMP_ID_USER35',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER36 = 'MAV_COMP_ID_USER36',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER37 = 'MAV_COMP_ID_USER37',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER38 = 'MAV_COMP_ID_USER38',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER39 = 'MAV_COMP_ID_USER39',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER40 = 'MAV_COMP_ID_USER40',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER41 = 'MAV_COMP_ID_USER41',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER42 = 'MAV_COMP_ID_USER42',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER43 = 'MAV_COMP_ID_USER43',
  // Telemetry radio (e.g. SiK radio, or other component that emits RADIO_STATUS messages).
  MAV_COMP_ID_TELEMETRY_RADIO = 'MAV_COMP_ID_TELEMETRY_RADIO',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER45 = 'MAV_COMP_ID_USER45',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER46 = 'MAV_COMP_ID_USER46',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER47 = 'MAV_COMP_ID_USER47',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER48 = 'MAV_COMP_ID_USER48',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER49 = 'MAV_COMP_ID_USER49',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER50 = 'MAV_COMP_ID_USER50',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER51 = 'MAV_COMP_ID_USER51',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER52 = 'MAV_COMP_ID_USER52',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER53 = 'MAV_COMP_ID_USER53',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER54 = 'MAV_COMP_ID_USER54',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER55 = 'MAV_COMP_ID_USER55',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER56 = 'MAV_COMP_ID_USER56',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER57 = 'MAV_COMP_ID_USER57',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER58 = 'MAV_COMP_ID_USER58',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER59 = 'MAV_COMP_ID_USER59',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER60 = 'MAV_COMP_ID_USER60',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER61 = 'MAV_COMP_ID_USER61',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER62 = 'MAV_COMP_ID_USER62',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER63 = 'MAV_COMP_ID_USER63',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER64 = 'MAV_COMP_ID_USER64',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER65 = 'MAV_COMP_ID_USER65',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER66 = 'MAV_COMP_ID_USER66',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER67 = 'MAV_COMP_ID_USER67',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER68 = 'MAV_COMP_ID_USER68',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER69 = 'MAV_COMP_ID_USER69',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER70 = 'MAV_COMP_ID_USER70',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER71 = 'MAV_COMP_ID_USER71',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER72 = 'MAV_COMP_ID_USER72',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER73 = 'MAV_COMP_ID_USER73',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER74 = 'MAV_COMP_ID_USER74',
  // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  MAV_COMP_ID_USER75 = 'MAV_COMP_ID_USER75',
  // Camera #1.
  MAV_COMP_ID_CAMERA = 'MAV_COMP_ID_CAMERA',
  // Camera #2.
  MAV_COMP_ID_CAMERA2 = 'MAV_COMP_ID_CAMERA2',
  // Camera #3.
  MAV_COMP_ID_CAMERA3 = 'MAV_COMP_ID_CAMERA3',
  // Camera #4.
  MAV_COMP_ID_CAMERA4 = 'MAV_COMP_ID_CAMERA4',
  // Camera #5.
  MAV_COMP_ID_CAMERA5 = 'MAV_COMP_ID_CAMERA5',
  // Camera #6.
  MAV_COMP_ID_CAMERA6 = 'MAV_COMP_ID_CAMERA6',
  // Servo #1.
  MAV_COMP_ID_SERVO1 = 'MAV_COMP_ID_SERVO1',
  // Servo #2.
  MAV_COMP_ID_SERVO2 = 'MAV_COMP_ID_SERVO2',
  // Servo #3.
  MAV_COMP_ID_SERVO3 = 'MAV_COMP_ID_SERVO3',
  // Servo #4.
  MAV_COMP_ID_SERVO4 = 'MAV_COMP_ID_SERVO4',
  // Servo #5.
  MAV_COMP_ID_SERVO5 = 'MAV_COMP_ID_SERVO5',
  // Servo #6.
  MAV_COMP_ID_SERVO6 = 'MAV_COMP_ID_SERVO6',
  // Servo #7.
  MAV_COMP_ID_SERVO7 = 'MAV_COMP_ID_SERVO7',
  // Servo #8.
  MAV_COMP_ID_SERVO8 = 'MAV_COMP_ID_SERVO8',
  // Servo #9.
  MAV_COMP_ID_SERVO9 = 'MAV_COMP_ID_SERVO9',
  // Servo #10.
  MAV_COMP_ID_SERVO10 = 'MAV_COMP_ID_SERVO10',
  // Servo #11.
  MAV_COMP_ID_SERVO11 = 'MAV_COMP_ID_SERVO11',
  // Servo #12.
  MAV_COMP_ID_SERVO12 = 'MAV_COMP_ID_SERVO12',
  // Servo #13.
  MAV_COMP_ID_SERVO13 = 'MAV_COMP_ID_SERVO13',
  // Servo #14.
  MAV_COMP_ID_SERVO14 = 'MAV_COMP_ID_SERVO14',
  // Gimbal #1.
  MAV_COMP_ID_GIMBAL = 'MAV_COMP_ID_GIMBAL',
  // Logging component.
  MAV_COMP_ID_LOG = 'MAV_COMP_ID_LOG',
  // Automatic Dependent Surveillance-Broadcast (ADS-B) component.
  MAV_COMP_ID_ADSB = 'MAV_COMP_ID_ADSB',
  // On Screen Display (OSD) devices for video links.
  MAV_COMP_ID_OSD = 'MAV_COMP_ID_OSD',
  // Generic autopilot peripheral component ID. Meant for devices that do not implement the parameter microservice.
  MAV_COMP_ID_PERIPHERAL = 'MAV_COMP_ID_PERIPHERAL',
  // Gimbal ID for QX1.
  MAV_COMP_ID_QX1_GIMBAL = 'MAV_COMP_ID_QX1_GIMBAL',
  // FLARM collision alert component.
  MAV_COMP_ID_FLARM = 'MAV_COMP_ID_FLARM',
  // Parachute component.
  MAV_COMP_ID_PARACHUTE = 'MAV_COMP_ID_PARACHUTE',
  // Winch component.
  MAV_COMP_ID_WINCH = 'MAV_COMP_ID_WINCH',
  // Gimbal #2.
  MAV_COMP_ID_GIMBAL2 = 'MAV_COMP_ID_GIMBAL2',
  // Gimbal #3.
  MAV_COMP_ID_GIMBAL3 = 'MAV_COMP_ID_GIMBAL3',
  // Gimbal #4
  MAV_COMP_ID_GIMBAL4 = 'MAV_COMP_ID_GIMBAL4',
  // Gimbal #5.
  MAV_COMP_ID_GIMBAL5 = 'MAV_COMP_ID_GIMBAL5',
  // Gimbal #6.
  MAV_COMP_ID_GIMBAL6 = 'MAV_COMP_ID_GIMBAL6',
  // Battery #1.
  MAV_COMP_ID_BATTERY = 'MAV_COMP_ID_BATTERY',
  // Battery #2.
  MAV_COMP_ID_BATTERY2 = 'MAV_COMP_ID_BATTERY2',
  // CAN over MAVLink client.
  MAV_COMP_ID_MAVCAN = 'MAV_COMP_ID_MAVCAN',
  // Component that can generate/supply a mission flight plan (e.g. GCS or developer API).
  MAV_COMP_ID_MISSIONPLANNER = 'MAV_COMP_ID_MISSIONPLANNER',
  // Component that lives on the onboard computer (companion computer) and has some generic functionalities, such as settings system parameters and monitoring the status of some processes that don&#x27;t directly speak mavlink and so on.
  MAV_COMP_ID_ONBOARD_COMPUTER = 'MAV_COMP_ID_ONBOARD_COMPUTER',
  // Component that lives on the onboard computer (companion computer) and has some generic functionalities, such as settings system parameters and monitoring the status of some processes that don&#x27;t directly speak mavlink and so on.
  MAV_COMP_ID_ONBOARD_COMPUTER2 = 'MAV_COMP_ID_ONBOARD_COMPUTER2',
  // Component that lives on the onboard computer (companion computer) and has some generic functionalities, such as settings system parameters and monitoring the status of some processes that don&#x27;t directly speak mavlink and so on.
  MAV_COMP_ID_ONBOARD_COMPUTER3 = 'MAV_COMP_ID_ONBOARD_COMPUTER3',
  // Component that lives on the onboard computer (companion computer) and has some generic functionalities, such as settings system parameters and monitoring the status of some processes that don&#x27;t directly speak mavlink and so on.
  MAV_COMP_ID_ONBOARD_COMPUTER4 = 'MAV_COMP_ID_ONBOARD_COMPUTER4',
  // Component that finds an optimal path between points based on a certain constraint (e.g. minimum snap, shortest path, cost, etc.).
  MAV_COMP_ID_PATHPLANNER = 'MAV_COMP_ID_PATHPLANNER',
  // Component that plans a collision free path between two points.
  MAV_COMP_ID_OBSTACLE_AVOIDANCE = 'MAV_COMP_ID_OBSTACLE_AVOIDANCE',
  // Component that provides position estimates using VIO techniques.
  MAV_COMP_ID_VISUAL_INERTIAL_ODOMETRY = 'MAV_COMP_ID_VISUAL_INERTIAL_ODOMETRY',
  // Component that manages pairing of vehicle and GCS.
  MAV_COMP_ID_PAIRING_MANAGER = 'MAV_COMP_ID_PAIRING_MANAGER',
  // Inertial Measurement Unit (IMU) #1.
  MAV_COMP_ID_IMU = 'MAV_COMP_ID_IMU',
  // Inertial Measurement Unit (IMU) #2.
  MAV_COMP_ID_IMU_2 = 'MAV_COMP_ID_IMU_2',
  // Inertial Measurement Unit (IMU) #3.
  MAV_COMP_ID_IMU_3 = 'MAV_COMP_ID_IMU_3',
  // GPS #1.
  MAV_COMP_ID_GPS = 'MAV_COMP_ID_GPS',
  // GPS #2.
  MAV_COMP_ID_GPS2 = 'MAV_COMP_ID_GPS2',
  // Open Drone ID transmitter/receiver (Bluetooth/WiFi/Internet).
  MAV_COMP_ID_ODID_TXRX_1 = 'MAV_COMP_ID_ODID_TXRX_1',
  // Open Drone ID transmitter/receiver (Bluetooth/WiFi/Internet).
  MAV_COMP_ID_ODID_TXRX_2 = 'MAV_COMP_ID_ODID_TXRX_2',
  // Open Drone ID transmitter/receiver (Bluetooth/WiFi/Internet).
  MAV_COMP_ID_ODID_TXRX_3 = 'MAV_COMP_ID_ODID_TXRX_3',
  // Component to bridge MAVLink to UDP (i.e. from a UART).
  MAV_COMP_ID_UDP_BRIDGE = 'MAV_COMP_ID_UDP_BRIDGE',
  // Component to bridge to UART (i.e. from UDP).
  MAV_COMP_ID_UART_BRIDGE = 'MAV_COMP_ID_UART_BRIDGE',
  // Component handling TUNNEL messages (e.g. vendor specific GUI of a component).
  MAV_COMP_ID_TUNNEL_NODE = 'MAV_COMP_ID_TUNNEL_NODE',
  // Illuminator
  MAV_COMP_ID_ILLUMINATOR = 'MAV_COMP_ID_ILLUMINATOR',
  // Deprecated, don&#x27;t use. Component for handling system messages (e.g. to ARM, takeoff, etc.).
  MAV_COMP_ID_SYSTEM_CONTROL = 'MAV_COMP_ID_SYSTEM_CONTROL',
}

export type MAV_COMPONENT =
  | 'MAV_COMP_ID_ALL' // Target id (target_component) used to broadcast messages to all components of the receiving system. Components should attempt to process messages with this component ID and forward to components on any other interfaces. Note: This is not a valid *source* component id for a message.
  | 'MAV_COMP_ID_AUTOPILOT1' // System flight controller component (&quot;autopilot&quot;). Only one autopilot is expected in a particular system.
  | 'MAV_COMP_ID_USER1' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER2' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER3' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER4' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER5' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER6' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER7' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER8' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER9' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER10' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER11' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER12' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER13' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER14' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER15' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER16' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER17' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER18' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER19' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER20' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER21' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER22' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER23' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER24' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER25' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER26' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER27' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER28' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER29' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER30' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER31' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER32' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER33' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER34' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER35' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER36' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER37' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER38' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER39' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER40' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER41' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER42' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER43' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_TELEMETRY_RADIO' // Telemetry radio (e.g. SiK radio, or other component that emits RADIO_STATUS messages).
  | 'MAV_COMP_ID_USER45' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER46' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER47' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER48' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER49' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER50' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER51' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER52' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER53' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER54' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER55' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER56' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER57' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER58' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER59' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER60' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER61' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER62' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER63' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER64' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER65' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER66' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER67' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER68' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER69' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER70' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER71' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER72' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER73' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER74' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_USER75' // Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be published by components outside of the private network.
  | 'MAV_COMP_ID_CAMERA' // Camera #1.
  | 'MAV_COMP_ID_CAMERA2' // Camera #2.
  | 'MAV_COMP_ID_CAMERA3' // Camera #3.
  | 'MAV_COMP_ID_CAMERA4' // Camera #4.
  | 'MAV_COMP_ID_CAMERA5' // Camera #5.
  | 'MAV_COMP_ID_CAMERA6' // Camera #6.
  | 'MAV_COMP_ID_SERVO1' // Servo #1.
  | 'MAV_COMP_ID_SERVO2' // Servo #2.
  | 'MAV_COMP_ID_SERVO3' // Servo #3.
  | 'MAV_COMP_ID_SERVO4' // Servo #4.
  | 'MAV_COMP_ID_SERVO5' // Servo #5.
  | 'MAV_COMP_ID_SERVO6' // Servo #6.
  | 'MAV_COMP_ID_SERVO7' // Servo #7.
  | 'MAV_COMP_ID_SERVO8' // Servo #8.
  | 'MAV_COMP_ID_SERVO9' // Servo #9.
  | 'MAV_COMP_ID_SERVO10' // Servo #10.
  | 'MAV_COMP_ID_SERVO11' // Servo #11.
  | 'MAV_COMP_ID_SERVO12' // Servo #12.
  | 'MAV_COMP_ID_SERVO13' // Servo #13.
  | 'MAV_COMP_ID_SERVO14' // Servo #14.
  | 'MAV_COMP_ID_GIMBAL' // Gimbal #1.
  | 'MAV_COMP_ID_LOG' // Logging component.
  | 'MAV_COMP_ID_ADSB' // Automatic Dependent Surveillance-Broadcast (ADS-B) component.
  | 'MAV_COMP_ID_OSD' // On Screen Display (OSD) devices for video links.
  | 'MAV_COMP_ID_PERIPHERAL' // Generic autopilot peripheral component ID. Meant for devices that do not implement the parameter microservice.
  | 'MAV_COMP_ID_QX1_GIMBAL' // Gimbal ID for QX1.
  | 'MAV_COMP_ID_FLARM' // FLARM collision alert component.
  | 'MAV_COMP_ID_PARACHUTE' // Parachute component.
  | 'MAV_COMP_ID_WINCH' // Winch component.
  | 'MAV_COMP_ID_GIMBAL2' // Gimbal #2.
  | 'MAV_COMP_ID_GIMBAL3' // Gimbal #3.
  | 'MAV_COMP_ID_GIMBAL4' // Gimbal #4
  | 'MAV_COMP_ID_GIMBAL5' // Gimbal #5.
  | 'MAV_COMP_ID_GIMBAL6' // Gimbal #6.
  | 'MAV_COMP_ID_BATTERY' // Battery #1.
  | 'MAV_COMP_ID_BATTERY2' // Battery #2.
  | 'MAV_COMP_ID_MAVCAN' // CAN over MAVLink client.
  | 'MAV_COMP_ID_MISSIONPLANNER' // Component that can generate/supply a mission flight plan (e.g. GCS or developer API).
  | 'MAV_COMP_ID_ONBOARD_COMPUTER' // Component that lives on the onboard computer (companion computer) and has some generic functionalities, such as settings system parameters and monitoring the status of some processes that don&#x27;t directly speak mavlink and so on.
  | 'MAV_COMP_ID_ONBOARD_COMPUTER2' // Component that lives on the onboard computer (companion computer) and has some generic functionalities, such as settings system parameters and monitoring the status of some processes that don&#x27;t directly speak mavlink and so on.
  | 'MAV_COMP_ID_ONBOARD_COMPUTER3' // Component that lives on the onboard computer (companion computer) and has some generic functionalities, such as settings system parameters and monitoring the status of some processes that don&#x27;t directly speak mavlink and so on.
  | 'MAV_COMP_ID_ONBOARD_COMPUTER4' // Component that lives on the onboard computer (companion computer) and has some generic functionalities, such as settings system parameters and monitoring the status of some processes that don&#x27;t directly speak mavlink and so on.
  | 'MAV_COMP_ID_PATHPLANNER' // Component that finds an optimal path between points based on a certain constraint (e.g. minimum snap, shortest path, cost, etc.).
  | 'MAV_COMP_ID_OBSTACLE_AVOIDANCE' // Component that plans a collision free path between two points.
  | 'MAV_COMP_ID_VISUAL_INERTIAL_ODOMETRY' // Component that provides position estimates using VIO techniques.
  | 'MAV_COMP_ID_PAIRING_MANAGER' // Component that manages pairing of vehicle and GCS.
  | 'MAV_COMP_ID_IMU' // Inertial Measurement Unit (IMU) #1.
  | 'MAV_COMP_ID_IMU_2' // Inertial Measurement Unit (IMU) #2.
  | 'MAV_COMP_ID_IMU_3' // Inertial Measurement Unit (IMU) #3.
  | 'MAV_COMP_ID_GPS' // GPS #1.
  | 'MAV_COMP_ID_GPS2' // GPS #2.
  | 'MAV_COMP_ID_ODID_TXRX_1' // Open Drone ID transmitter/receiver (Bluetooth/WiFi/Internet).
  | 'MAV_COMP_ID_ODID_TXRX_2' // Open Drone ID transmitter/receiver (Bluetooth/WiFi/Internet).
  | 'MAV_COMP_ID_ODID_TXRX_3' // Open Drone ID transmitter/receiver (Bluetooth/WiFi/Internet).
  | 'MAV_COMP_ID_UDP_BRIDGE' // Component to bridge MAVLink to UDP (i.e. from a UART).
  | 'MAV_COMP_ID_UART_BRIDGE' // Component to bridge to UART (i.e. from UDP).
  | 'MAV_COMP_ID_TUNNEL_NODE' // Component handling TUNNEL messages (e.g. vendor specific GUI of a component).
  | 'MAV_COMP_ID_ILLUMINATOR' // Illuminator
  | 'MAV_COMP_ID_SYSTEM_CONTROL' // Deprecated, don&#x27;t use. Component for handling system messages (e.g. to ARM, takeoff, etc.).
  | string;

// Enum used to indicate true or false (also: success or failure, enabled or disabled, active or inactive).
export enum BOOLEnum {
  // False.
  BOOL_FALSE = 'BOOL_FALSE',
  // True.
  BOOL_TRUE = 'BOOL_TRUE',
}

export type BOOL =
  | 'BOOL_FALSE' // False.
  | 'BOOL_TRUE' // True.
  | string;

// These values define the type of firmware release.  These values indicate the first version or release of this type.  For example the first alpha release would be 64, the second would be 65.
export enum FIRMWARE_VERSION_TYPEEnum {
  // development release
  FIRMWARE_VERSION_TYPE_DEV = 'FIRMWARE_VERSION_TYPE_DEV',
  // alpha release
  FIRMWARE_VERSION_TYPE_ALPHA = 'FIRMWARE_VERSION_TYPE_ALPHA',
  // beta release
  FIRMWARE_VERSION_TYPE_BETA = 'FIRMWARE_VERSION_TYPE_BETA',
  // release candidate
  FIRMWARE_VERSION_TYPE_RC = 'FIRMWARE_VERSION_TYPE_RC',
  // official stable release
  FIRMWARE_VERSION_TYPE_OFFICIAL = 'FIRMWARE_VERSION_TYPE_OFFICIAL',
}

export type FIRMWARE_VERSION_TYPE =
  | 'FIRMWARE_VERSION_TYPE_DEV' // development release
  | 'FIRMWARE_VERSION_TYPE_ALPHA' // alpha release
  | 'FIRMWARE_VERSION_TYPE_BETA' // beta release
  | 'FIRMWARE_VERSION_TYPE_RC' // release candidate
  | 'FIRMWARE_VERSION_TYPE_OFFICIAL' // official stable release
  | string;

// Flags to report failure cases over the high latency telemetry.
export enum HL_FAILURE_FLAGEnum {
  // GPS failure.
  HL_FAILURE_FLAG_GPS = 'HL_FAILURE_FLAG_GPS',
  // Differential pressure sensor failure.
  HL_FAILURE_FLAG_DIFFERENTIAL_PRESSURE = 'HL_FAILURE_FLAG_DIFFERENTIAL_PRESSURE',
  // Absolute pressure sensor failure.
  HL_FAILURE_FLAG_ABSOLUTE_PRESSURE = 'HL_FAILURE_FLAG_ABSOLUTE_PRESSURE',
  // Accelerometer sensor failure.
  HL_FAILURE_FLAG_3D_ACCEL = 'HL_FAILURE_FLAG_3D_ACCEL',
  // Gyroscope sensor failure.
  HL_FAILURE_FLAG_3D_GYRO = 'HL_FAILURE_FLAG_3D_GYRO',
  // Magnetometer sensor failure.
  HL_FAILURE_FLAG_3D_MAG = 'HL_FAILURE_FLAG_3D_MAG',
  // Terrain subsystem failure.
  HL_FAILURE_FLAG_TERRAIN = 'HL_FAILURE_FLAG_TERRAIN',
  // Battery failure/critical low battery.
  HL_FAILURE_FLAG_BATTERY = 'HL_FAILURE_FLAG_BATTERY',
  // RC receiver failure/no RC connection.
  HL_FAILURE_FLAG_RC_RECEIVER = 'HL_FAILURE_FLAG_RC_RECEIVER',
  // Offboard link failure.
  HL_FAILURE_FLAG_OFFBOARD_LINK = 'HL_FAILURE_FLAG_OFFBOARD_LINK',
  // Engine failure.
  HL_FAILURE_FLAG_ENGINE = 'HL_FAILURE_FLAG_ENGINE',
  // Geofence violation.
  HL_FAILURE_FLAG_GEOFENCE = 'HL_FAILURE_FLAG_GEOFENCE',
  // Estimator failure, for example measurement rejection or large variances.
  HL_FAILURE_FLAG_ESTIMATOR = 'HL_FAILURE_FLAG_ESTIMATOR',
  // Mission failure.
  HL_FAILURE_FLAG_MISSION = 'HL_FAILURE_FLAG_MISSION',
}

export type HL_FAILURE_FLAG =
  | 'HL_FAILURE_FLAG_GPS' // GPS failure.
  | 'HL_FAILURE_FLAG_DIFFERENTIAL_PRESSURE' // Differential pressure sensor failure.
  | 'HL_FAILURE_FLAG_ABSOLUTE_PRESSURE' // Absolute pressure sensor failure.
  | 'HL_FAILURE_FLAG_3D_ACCEL' // Accelerometer sensor failure.
  | 'HL_FAILURE_FLAG_3D_GYRO' // Gyroscope sensor failure.
  | 'HL_FAILURE_FLAG_3D_MAG' // Magnetometer sensor failure.
  | 'HL_FAILURE_FLAG_TERRAIN' // Terrain subsystem failure.
  | 'HL_FAILURE_FLAG_BATTERY' // Battery failure/critical low battery.
  | 'HL_FAILURE_FLAG_RC_RECEIVER' // RC receiver failure/no RC connection.
  | 'HL_FAILURE_FLAG_OFFBOARD_LINK' // Offboard link failure.
  | 'HL_FAILURE_FLAG_ENGINE' // Engine failure.
  | 'HL_FAILURE_FLAG_GEOFENCE' // Geofence violation.
  | 'HL_FAILURE_FLAG_ESTIMATOR' // Estimator failure, for example measurement rejection or large variances.
  | 'HL_FAILURE_FLAG_MISSION' // Mission failure.
  | string;

// Actions that may be specified in MAV_CMD_OVERRIDE_GOTO to override mission execution.
export enum MAV_GOTOEnum {
  // Hold at the current position.
  MAV_GOTO_DO_HOLD = 'MAV_GOTO_DO_HOLD',
  // Continue with the next item in mission execution.
  MAV_GOTO_DO_CONTINUE = 'MAV_GOTO_DO_CONTINUE',
  // Hold at the current position of the system
  MAV_GOTO_HOLD_AT_CURRENT_POSITION = 'MAV_GOTO_HOLD_AT_CURRENT_POSITION',
  // Hold at the position specified in the parameters of the DO_HOLD action
  MAV_GOTO_HOLD_AT_SPECIFIED_POSITION = 'MAV_GOTO_HOLD_AT_SPECIFIED_POSITION',
}

export type MAV_GOTO =
  | 'MAV_GOTO_DO_HOLD' // Hold at the current position.
  | 'MAV_GOTO_DO_CONTINUE' // Continue with the next item in mission execution.
  | 'MAV_GOTO_HOLD_AT_CURRENT_POSITION' // Hold at the current position of the system
  | 'MAV_GOTO_HOLD_AT_SPECIFIED_POSITION' // Hold at the position specified in the parameters of the DO_HOLD action
  | string;

// Predefined OR-combined MAV_MODE_FLAG values. These can simplify using the flags when setting modes. Note that manual input is enabled in all modes as a safety override.
export enum MAV_MODEEnum {
  // System is not ready to fly, booting, calibrating, etc. No flag is set.
  MAV_MODE_PREFLIGHT = 'MAV_MODE_PREFLIGHT',
  // System is allowed to be active, under assisted RC control (MAV_MODE_FLAG_SAFETY_ARMED, MAV_MODE_FLAG_STABILIZE_ENABLED)
  MAV_MODE_STABILIZE_DISARMED = 'MAV_MODE_STABILIZE_DISARMED',
  // System is allowed to be active, under assisted RC control (MAV_MODE_FLAG_SAFETY_ARMED, MAV_MODE_FLAG_MANUAL_INPUT_ENABLED, MAV_MODE_FLAG_STABILIZE_ENABLED)
  MAV_MODE_STABILIZE_ARMED = 'MAV_MODE_STABILIZE_ARMED',
  // System is allowed to be active, under manual (RC) control, no stabilization (MAV_MODE_FLAG_MANUAL_INPUT_ENABLED)
  MAV_MODE_MANUAL_DISARMED = 'MAV_MODE_MANUAL_DISARMED',
  // System is allowed to be active, under manual (RC) control, no stabilization (MAV_MODE_FLAG_SAFETY_ARMED, MAV_MODE_FLAG_MANUAL_INPUT_ENABLED)
  MAV_MODE_MANUAL_ARMED = 'MAV_MODE_MANUAL_ARMED',
  // System is allowed to be active, under autonomous control, manual setpoint (MAV_MODE_FLAG_SAFETY_ARMED, MAV_MODE_FLAG_STABILIZE_ENABLED, MAV_MODE_FLAG_GUIDED_ENABLED)
  MAV_MODE_GUIDED_DISARMED = 'MAV_MODE_GUIDED_DISARMED',
  // System is allowed to be active, under autonomous control, manual setpoint (MAV_MODE_FLAG_SAFETY_ARMED, MAV_MODE_FLAG_MANUAL_INPUT_ENABLED, MAV_MODE_FLAG_STABILIZE_ENABLED, MAV_MODE_FLAG_GUIDED_ENABLED)
  MAV_MODE_GUIDED_ARMED = 'MAV_MODE_GUIDED_ARMED',
  // System is allowed to be active, under autonomous control and navigation (the trajectory is decided onboard and not pre-programmed by waypoints). (MAV_MODE_FLAG_SAFETY_ARMED, MAV_MODE_FLAG_STABILIZE_ENABLED, MAV_MODE_FLAG_GUIDED_ENABLED, MAV_MODE_FLAG_AUTO_ENABLED).
  MAV_MODE_AUTO_DISARMED = 'MAV_MODE_AUTO_DISARMED',
  // System is allowed to be active, under autonomous control and navigation (the trajectory is decided onboard and not pre-programmed by waypoints). (MAV_MODE_FLAG_SAFETY_ARMED, MAV_MODE_FLAG_MANUAL_INPUT_ENABLED, MAV_MODE_FLAG_STABILIZE_ENABLED, MAV_MODE_FLAG_GUIDED_ENABLED,MAV_MODE_FLAG_AUTO_ENABLED).
  MAV_MODE_AUTO_ARMED = 'MAV_MODE_AUTO_ARMED',
  // UNDEFINED mode. This solely depends on the autopilot - use with caution, intended for developers only. (MAV_MODE_FLAG_MANUAL_INPUT_ENABLED, MAV_MODE_FLAG_TEST_ENABLED).
  MAV_MODE_TEST_DISARMED = 'MAV_MODE_TEST_DISARMED',
  // UNDEFINED mode. This solely depends on the autopilot - use with caution, intended for developers only (MAV_MODE_FLAG_SAFETY_ARMED, MAV_MODE_FLAG_MANUAL_INPUT_ENABLED, MAV_MODE_FLAG_TEST_ENABLED)
  MAV_MODE_TEST_ARMED = 'MAV_MODE_TEST_ARMED',
}

export type MAV_MODE =
  | 'MAV_MODE_PREFLIGHT' // System is not ready to fly, booting, calibrating, etc. No flag is set.
  | 'MAV_MODE_STABILIZE_DISARMED' // System is allowed to be active, under assisted RC control (MAV_MODE_FLAG_SAFETY_ARMED, MAV_MODE_FLAG_STABILIZE_ENABLED)
  | 'MAV_MODE_STABILIZE_ARMED' // System is allowed to be active, under assisted RC control (MAV_MODE_FLAG_SAFETY_ARMED, MAV_MODE_FLAG_MANUAL_INPUT_ENABLED, MAV_MODE_FLAG_STABILIZE_ENABLED)
  | 'MAV_MODE_MANUAL_DISARMED' // System is allowed to be active, under manual (RC) control, no stabilization (MAV_MODE_FLAG_MANUAL_INPUT_ENABLED)
  | 'MAV_MODE_MANUAL_ARMED' // System is allowed to be active, under manual (RC) control, no stabilization (MAV_MODE_FLAG_SAFETY_ARMED, MAV_MODE_FLAG_MANUAL_INPUT_ENABLED)
  | 'MAV_MODE_GUIDED_DISARMED' // System is allowed to be active, under autonomous control, manual setpoint (MAV_MODE_FLAG_SAFETY_ARMED, MAV_MODE_FLAG_STABILIZE_ENABLED, MAV_MODE_FLAG_GUIDED_ENABLED)
  | 'MAV_MODE_GUIDED_ARMED' // System is allowed to be active, under autonomous control, manual setpoint (MAV_MODE_FLAG_SAFETY_ARMED, MAV_MODE_FLAG_MANUAL_INPUT_ENABLED, MAV_MODE_FLAG_STABILIZE_ENABLED, MAV_MODE_FLAG_GUIDED_ENABLED)
  | 'MAV_MODE_AUTO_DISARMED' // System is allowed to be active, under autonomous control and navigation (the trajectory is decided onboard and not pre-programmed by waypoints). (MAV_MODE_FLAG_SAFETY_ARMED, MAV_MODE_FLAG_STABILIZE_ENABLED, MAV_MODE_FLAG_GUIDED_ENABLED, MAV_MODE_FLAG_AUTO_ENABLED).
  | 'MAV_MODE_AUTO_ARMED' // System is allowed to be active, under autonomous control and navigation (the trajectory is decided onboard and not pre-programmed by waypoints). (MAV_MODE_FLAG_SAFETY_ARMED, MAV_MODE_FLAG_MANUAL_INPUT_ENABLED, MAV_MODE_FLAG_STABILIZE_ENABLED, MAV_MODE_FLAG_GUIDED_ENABLED,MAV_MODE_FLAG_AUTO_ENABLED).
  | 'MAV_MODE_TEST_DISARMED' // UNDEFINED mode. This solely depends on the autopilot - use with caution, intended for developers only. (MAV_MODE_FLAG_MANUAL_INPUT_ENABLED, MAV_MODE_FLAG_TEST_ENABLED).
  | 'MAV_MODE_TEST_ARMED' // UNDEFINED mode. This solely depends on the autopilot - use with caution, intended for developers only (MAV_MODE_FLAG_SAFETY_ARMED, MAV_MODE_FLAG_MANUAL_INPUT_ENABLED, MAV_MODE_FLAG_TEST_ENABLED)
  | string;

// These encode the sensors whose status is sent as part of the SYS_STATUS message.
export enum MAV_SYS_STATUS_SENSOREnum {
  // 0x01 3D gyro
  MAV_SYS_STATUS_SENSOR_3D_GYRO = 'MAV_SYS_STATUS_SENSOR_3D_GYRO',
  // 0x02 3D accelerometer
  MAV_SYS_STATUS_SENSOR_3D_ACCEL = 'MAV_SYS_STATUS_SENSOR_3D_ACCEL',
  // 0x04 3D magnetometer
  MAV_SYS_STATUS_SENSOR_3D_MAG = 'MAV_SYS_STATUS_SENSOR_3D_MAG',
  // 0x08 absolute pressure
  MAV_SYS_STATUS_SENSOR_ABSOLUTE_PRESSURE = 'MAV_SYS_STATUS_SENSOR_ABSOLUTE_PRESSURE',
  // 0x10 differential pressure
  MAV_SYS_STATUS_SENSOR_DIFFERENTIAL_PRESSURE = 'MAV_SYS_STATUS_SENSOR_DIFFERENTIAL_PRESSURE',
  // 0x20 GPS
  MAV_SYS_STATUS_SENSOR_GPS = 'MAV_SYS_STATUS_SENSOR_GPS',
  // 0x40 optical flow
  MAV_SYS_STATUS_SENSOR_OPTICAL_FLOW = 'MAV_SYS_STATUS_SENSOR_OPTICAL_FLOW',
  // 0x80 computer vision position
  MAV_SYS_STATUS_SENSOR_VISION_POSITION = 'MAV_SYS_STATUS_SENSOR_VISION_POSITION',
  // 0x100 laser based position
  MAV_SYS_STATUS_SENSOR_LASER_POSITION = 'MAV_SYS_STATUS_SENSOR_LASER_POSITION',
  // 0x200 external ground truth (Vicon or Leica)
  MAV_SYS_STATUS_SENSOR_EXTERNAL_GROUND_TRUTH = 'MAV_SYS_STATUS_SENSOR_EXTERNAL_GROUND_TRUTH',
  // 0x400 3D angular rate control
  MAV_SYS_STATUS_SENSOR_ANGULAR_RATE_CONTROL = 'MAV_SYS_STATUS_SENSOR_ANGULAR_RATE_CONTROL',
  // 0x800 attitude stabilization
  MAV_SYS_STATUS_SENSOR_ATTITUDE_STABILIZATION = 'MAV_SYS_STATUS_SENSOR_ATTITUDE_STABILIZATION',
  // 0x1000 yaw position
  MAV_SYS_STATUS_SENSOR_YAW_POSITION = 'MAV_SYS_STATUS_SENSOR_YAW_POSITION',
  // 0x2000 z/altitude control
  MAV_SYS_STATUS_SENSOR_Z_ALTITUDE_CONTROL = 'MAV_SYS_STATUS_SENSOR_Z_ALTITUDE_CONTROL',
  // 0x4000 x/y position control
  MAV_SYS_STATUS_SENSOR_XY_POSITION_CONTROL = 'MAV_SYS_STATUS_SENSOR_XY_POSITION_CONTROL',
  // 0x8000 motor outputs / control
  MAV_SYS_STATUS_SENSOR_MOTOR_OUTPUTS = 'MAV_SYS_STATUS_SENSOR_MOTOR_OUTPUTS',
  // 0x10000 RC receiver
  MAV_SYS_STATUS_SENSOR_RC_RECEIVER = 'MAV_SYS_STATUS_SENSOR_RC_RECEIVER',
  // 0x20000 2nd 3D gyro
  MAV_SYS_STATUS_SENSOR_3D_GYRO2 = 'MAV_SYS_STATUS_SENSOR_3D_GYRO2',
  // 0x40000 2nd 3D accelerometer
  MAV_SYS_STATUS_SENSOR_3D_ACCEL2 = 'MAV_SYS_STATUS_SENSOR_3D_ACCEL2',
  // 0x80000 2nd 3D magnetometer
  MAV_SYS_STATUS_SENSOR_3D_MAG2 = 'MAV_SYS_STATUS_SENSOR_3D_MAG2',
  // 0x100000 geofence
  MAV_SYS_STATUS_GEOFENCE = 'MAV_SYS_STATUS_GEOFENCE',
  // 0x200000 AHRS subsystem health
  MAV_SYS_STATUS_AHRS = 'MAV_SYS_STATUS_AHRS',
  // 0x400000 Terrain subsystem health
  MAV_SYS_STATUS_TERRAIN = 'MAV_SYS_STATUS_TERRAIN',
  // 0x800000 Motors are reversed
  MAV_SYS_STATUS_REVERSE_MOTOR = 'MAV_SYS_STATUS_REVERSE_MOTOR',
  // 0x1000000 Logging
  MAV_SYS_STATUS_LOGGING = 'MAV_SYS_STATUS_LOGGING',
  // 0x2000000 Battery
  MAV_SYS_STATUS_SENSOR_BATTERY = 'MAV_SYS_STATUS_SENSOR_BATTERY',
  // 0x4000000 Proximity
  MAV_SYS_STATUS_SENSOR_PROXIMITY = 'MAV_SYS_STATUS_SENSOR_PROXIMITY',
  // 0x8000000 Satellite Communication
  MAV_SYS_STATUS_SENSOR_SATCOM = 'MAV_SYS_STATUS_SENSOR_SATCOM',
  // 0x10000000 pre-arm check status. Always healthy when armed
  MAV_SYS_STATUS_PREARM_CHECK = 'MAV_SYS_STATUS_PREARM_CHECK',
  // 0x20000000 Avoidance/collision prevention
  MAV_SYS_STATUS_OBSTACLE_AVOIDANCE = 'MAV_SYS_STATUS_OBSTACLE_AVOIDANCE',
  // 0x40000000 propulsion (actuator, esc, motor or propellor)
  MAV_SYS_STATUS_SENSOR_PROPULSION = 'MAV_SYS_STATUS_SENSOR_PROPULSION',
  // 0x80000000 Extended bit-field are used for further sensor status bits (needs to be set in onboard_control_sensors_present only)
  MAV_SYS_STATUS_EXTENSION_USED = 'MAV_SYS_STATUS_EXTENSION_USED',
}

export type MAV_SYS_STATUS_SENSOR =
  | 'MAV_SYS_STATUS_SENSOR_3D_GYRO' // 0x01 3D gyro
  | 'MAV_SYS_STATUS_SENSOR_3D_ACCEL' // 0x02 3D accelerometer
  | 'MAV_SYS_STATUS_SENSOR_3D_MAG' // 0x04 3D magnetometer
  | 'MAV_SYS_STATUS_SENSOR_ABSOLUTE_PRESSURE' // 0x08 absolute pressure
  | 'MAV_SYS_STATUS_SENSOR_DIFFERENTIAL_PRESSURE' // 0x10 differential pressure
  | 'MAV_SYS_STATUS_SENSOR_GPS' // 0x20 GPS
  | 'MAV_SYS_STATUS_SENSOR_OPTICAL_FLOW' // 0x40 optical flow
  | 'MAV_SYS_STATUS_SENSOR_VISION_POSITION' // 0x80 computer vision position
  | 'MAV_SYS_STATUS_SENSOR_LASER_POSITION' // 0x100 laser based position
  | 'MAV_SYS_STATUS_SENSOR_EXTERNAL_GROUND_TRUTH' // 0x200 external ground truth (Vicon or Leica)
  | 'MAV_SYS_STATUS_SENSOR_ANGULAR_RATE_CONTROL' // 0x400 3D angular rate control
  | 'MAV_SYS_STATUS_SENSOR_ATTITUDE_STABILIZATION' // 0x800 attitude stabilization
  | 'MAV_SYS_STATUS_SENSOR_YAW_POSITION' // 0x1000 yaw position
  | 'MAV_SYS_STATUS_SENSOR_Z_ALTITUDE_CONTROL' // 0x2000 z/altitude control
  | 'MAV_SYS_STATUS_SENSOR_XY_POSITION_CONTROL' // 0x4000 x/y position control
  | 'MAV_SYS_STATUS_SENSOR_MOTOR_OUTPUTS' // 0x8000 motor outputs / control
  | 'MAV_SYS_STATUS_SENSOR_RC_RECEIVER' // 0x10000 RC receiver
  | 'MAV_SYS_STATUS_SENSOR_3D_GYRO2' // 0x20000 2nd 3D gyro
  | 'MAV_SYS_STATUS_SENSOR_3D_ACCEL2' // 0x40000 2nd 3D accelerometer
  | 'MAV_SYS_STATUS_SENSOR_3D_MAG2' // 0x80000 2nd 3D magnetometer
  | 'MAV_SYS_STATUS_GEOFENCE' // 0x100000 geofence
  | 'MAV_SYS_STATUS_AHRS' // 0x200000 AHRS subsystem health
  | 'MAV_SYS_STATUS_TERRAIN' // 0x400000 Terrain subsystem health
  | 'MAV_SYS_STATUS_REVERSE_MOTOR' // 0x800000 Motors are reversed
  | 'MAV_SYS_STATUS_LOGGING' // 0x1000000 Logging
  | 'MAV_SYS_STATUS_SENSOR_BATTERY' // 0x2000000 Battery
  | 'MAV_SYS_STATUS_SENSOR_PROXIMITY' // 0x4000000 Proximity
  | 'MAV_SYS_STATUS_SENSOR_SATCOM' // 0x8000000 Satellite Communication
  | 'MAV_SYS_STATUS_PREARM_CHECK' // 0x10000000 pre-arm check status. Always healthy when armed
  | 'MAV_SYS_STATUS_OBSTACLE_AVOIDANCE' // 0x20000000 Avoidance/collision prevention
  | 'MAV_SYS_STATUS_SENSOR_PROPULSION' // 0x40000000 propulsion (actuator, esc, motor or propellor)
  | 'MAV_SYS_STATUS_EXTENSION_USED' // 0x80000000 Extended bit-field are used for further sensor status bits (needs to be set in onboard_control_sensors_present only)
  | string;

// These encode the sensors whose status is sent as part of the SYS_STATUS message in the extended fields.
export enum MAV_SYS_STATUS_SENSOR_EXTENDEDEnum {
  // 0x01 Recovery system (parachute, balloon, retracts etc)
  MAV_SYS_STATUS_RECOVERY_SYSTEM = 'MAV_SYS_STATUS_RECOVERY_SYSTEM',
}

export type MAV_SYS_STATUS_SENSOR_EXTENDED =
  | 'MAV_SYS_STATUS_RECOVERY_SYSTEM' // 0x01 Recovery system (parachute, balloon, retracts etc)
  | string;

// Coordinate frames used by MAVLink. Not all frames are supported by all commands, messages, or vehicles.
// Global frames use the following naming conventions:
// - &quot;GLOBAL&quot;: Global coordinate frame with WGS84 latitude/longitude and altitude positive over mean sea level (MSL) by default.
// The following modifiers may be used with &quot;GLOBAL&quot;:
// - &quot;RELATIVE_ALT&quot;: Altitude is relative to the vehicle home position rather than MSL.
// - &quot;TERRAIN_ALT&quot;: Altitude is relative to ground level rather than MSL.
// - &quot;INT&quot;: Latitude/longitude (in degrees) are scaled by multiplying by 1E7.
// Local frames use the following naming conventions:
// - &quot;LOCAL&quot;: Origin of local frame is fixed relative to earth. Unless otherwise specified this origin is the origin of the vehicle position-estimator (&quot;EKF&quot;).
// - &quot;BODY&quot;: Origin of local frame travels with the vehicle. NOTE, &quot;BODY&quot; does NOT indicate alignment of frame axis with vehicle attitude.
// - &quot;OFFSET&quot;: Deprecated synonym for &quot;BODY&quot; (origin travels with the vehicle). Not to be used for new frames.
// Some deprecated frames do not follow these conventions (e.g. MAV_FRAME_BODY_NED and MAV_FRAME_BODY_OFFSET_NED).
export enum MAV_FRAMEEnum {
  // Global (WGS84) coordinate frame + altitude relative to mean sea level (MSL).
  MAV_FRAME_GLOBAL = 'MAV_FRAME_GLOBAL',
  // NED local tangent frame (x: North, y: East, z: Down) with origin fixed relative to earth.
  MAV_FRAME_LOCAL_NED = 'MAV_FRAME_LOCAL_NED',
  // NOT a coordinate frame, indicates a mission command.
  MAV_FRAME_MISSION = 'MAV_FRAME_MISSION',
  // Global (WGS84) coordinate frame + altitude relative to the home position.
  MAV_FRAME_GLOBAL_RELATIVE_ALT = 'MAV_FRAME_GLOBAL_RELATIVE_ALT',
  // ENU local tangent frame (x: East, y: North, z: Up) with origin fixed relative to earth.
  MAV_FRAME_LOCAL_ENU = 'MAV_FRAME_LOCAL_ENU',
  // Global (WGS84) coordinate frame (scaled) + altitude relative to mean sea level (MSL).
  MAV_FRAME_GLOBAL_INT = 'MAV_FRAME_GLOBAL_INT',
  // Global (WGS84) coordinate frame (scaled) + altitude relative to the home position.
  MAV_FRAME_GLOBAL_RELATIVE_ALT_INT = 'MAV_FRAME_GLOBAL_RELATIVE_ALT_INT',
  // NED local tangent frame (x: North, y: East, z: Down) with origin that travels with the vehicle.
  MAV_FRAME_LOCAL_OFFSET_NED = 'MAV_FRAME_LOCAL_OFFSET_NED',
  // Same as MAV_FRAME_LOCAL_NED when used to represent position values. Same as MAV_FRAME_BODY_FRD when used with velocity/acceleration values.
  MAV_FRAME_BODY_NED = 'MAV_FRAME_BODY_NED',
  // This is the same as MAV_FRAME_BODY_FRD.
  MAV_FRAME_BODY_OFFSET_NED = 'MAV_FRAME_BODY_OFFSET_NED',
  // Global (WGS84) coordinate frame with AGL altitude (altitude at ground level).
  MAV_FRAME_GLOBAL_TERRAIN_ALT = 'MAV_FRAME_GLOBAL_TERRAIN_ALT',
  // Global (WGS84) coordinate frame (scaled) with AGL altitude (altitude at ground level).
  MAV_FRAME_GLOBAL_TERRAIN_ALT_INT = 'MAV_FRAME_GLOBAL_TERRAIN_ALT_INT',
  // FRD local frame aligned to the vehicle&#x27;s attitude (x: Forward, y: Right, z: Down) with an origin that travels with vehicle.
  MAV_FRAME_BODY_FRD = 'MAV_FRAME_BODY_FRD',
  // MAV_FRAME_BODY_FLU - Body fixed frame of reference, Z-up (x: Forward, y: Left, z: Up).
  MAV_FRAME_RESERVED_13 = 'MAV_FRAME_RESERVED_13',
  // MAV_FRAME_MOCAP_NED - Odometry local coordinate frame of data given by a motion capture system, Z-down (x: North, y: East, z: Down).
  MAV_FRAME_RESERVED_14 = 'MAV_FRAME_RESERVED_14',
  // MAV_FRAME_MOCAP_ENU - Odometry local coordinate frame of data given by a motion capture system, Z-up (x: East, y: North, z: Up).
  MAV_FRAME_RESERVED_15 = 'MAV_FRAME_RESERVED_15',
  // MAV_FRAME_VISION_NED - Odometry local coordinate frame of data given by a vision estimation system, Z-down (x: North, y: East, z: Down).
  MAV_FRAME_RESERVED_16 = 'MAV_FRAME_RESERVED_16',
  // MAV_FRAME_VISION_ENU - Odometry local coordinate frame of data given by a vision estimation system, Z-up (x: East, y: North, z: Up).
  MAV_FRAME_RESERVED_17 = 'MAV_FRAME_RESERVED_17',
  // MAV_FRAME_ESTIM_NED - Odometry local coordinate frame of data given by an estimator running onboard the vehicle, Z-down (x: North, y: East, z: Down).
  MAV_FRAME_RESERVED_18 = 'MAV_FRAME_RESERVED_18',
  // MAV_FRAME_ESTIM_ENU - Odometry local coordinate frame of data given by an estimator running onboard the vehicle, Z-up (x: East, y: North, z: Up).
  MAV_FRAME_RESERVED_19 = 'MAV_FRAME_RESERVED_19',
  // FRD local tangent frame (x: Forward, y: Right, z: Down) with origin fixed relative to earth. The forward axis is aligned to the front of the vehicle in the horizontal plane.
  MAV_FRAME_LOCAL_FRD = 'MAV_FRAME_LOCAL_FRD',
  // FLU local tangent frame (x: Forward, y: Left, z: Up) with origin fixed relative to earth. The forward axis is aligned to the front of the vehicle in the horizontal plane.
  MAV_FRAME_LOCAL_FLU = 'MAV_FRAME_LOCAL_FLU',
}

export type MAV_FRAME =
  | 'MAV_FRAME_GLOBAL' // Global (WGS84) coordinate frame + altitude relative to mean sea level (MSL).
  | 'MAV_FRAME_LOCAL_NED' // NED local tangent frame (x: North, y: East, z: Down) with origin fixed relative to earth.
  | 'MAV_FRAME_MISSION' // NOT a coordinate frame, indicates a mission command.
  | 'MAV_FRAME_GLOBAL_RELATIVE_ALT' // Global (WGS84) coordinate frame + altitude relative to the home position.
  | 'MAV_FRAME_LOCAL_ENU' // ENU local tangent frame (x: East, y: North, z: Up) with origin fixed relative to earth.
  | 'MAV_FRAME_GLOBAL_INT' // Global (WGS84) coordinate frame (scaled) + altitude relative to mean sea level (MSL).
  | 'MAV_FRAME_GLOBAL_RELATIVE_ALT_INT' // Global (WGS84) coordinate frame (scaled) + altitude relative to the home position.
  | 'MAV_FRAME_LOCAL_OFFSET_NED' // NED local tangent frame (x: North, y: East, z: Down) with origin that travels with the vehicle.
  | 'MAV_FRAME_BODY_NED' // Same as MAV_FRAME_LOCAL_NED when used to represent position values. Same as MAV_FRAME_BODY_FRD when used with velocity/acceleration values.
  | 'MAV_FRAME_BODY_OFFSET_NED' // This is the same as MAV_FRAME_BODY_FRD.
  | 'MAV_FRAME_GLOBAL_TERRAIN_ALT' // Global (WGS84) coordinate frame with AGL altitude (altitude at ground level).
  | 'MAV_FRAME_GLOBAL_TERRAIN_ALT_INT' // Global (WGS84) coordinate frame (scaled) with AGL altitude (altitude at ground level).
  | 'MAV_FRAME_BODY_FRD' // FRD local frame aligned to the vehicle&#x27;s attitude (x: Forward, y: Right, z: Down) with an origin that travels with vehicle.
  | 'MAV_FRAME_RESERVED_13' // MAV_FRAME_BODY_FLU - Body fixed frame of reference, Z-up (x: Forward, y: Left, z: Up).
  | 'MAV_FRAME_RESERVED_14' // MAV_FRAME_MOCAP_NED - Odometry local coordinate frame of data given by a motion capture system, Z-down (x: North, y: East, z: Down).
  | 'MAV_FRAME_RESERVED_15' // MAV_FRAME_MOCAP_ENU - Odometry local coordinate frame of data given by a motion capture system, Z-up (x: East, y: North, z: Up).
  | 'MAV_FRAME_RESERVED_16' // MAV_FRAME_VISION_NED - Odometry local coordinate frame of data given by a vision estimation system, Z-down (x: North, y: East, z: Down).
  | 'MAV_FRAME_RESERVED_17' // MAV_FRAME_VISION_ENU - Odometry local coordinate frame of data given by a vision estimation system, Z-up (x: East, y: North, z: Up).
  | 'MAV_FRAME_RESERVED_18' // MAV_FRAME_ESTIM_NED - Odometry local coordinate frame of data given by an estimator running onboard the vehicle, Z-down (x: North, y: East, z: Down).
  | 'MAV_FRAME_RESERVED_19' // MAV_FRAME_ESTIM_ENU - Odometry local coordinate frame of data given by an estimator running onboard the vehicle, Z-up (x: East, y: North, z: Up).
  | 'MAV_FRAME_LOCAL_FRD' // FRD local tangent frame (x: Forward, y: Right, z: Down) with origin fixed relative to earth. The forward axis is aligned to the front of the vehicle in the horizontal plane.
  | 'MAV_FRAME_LOCAL_FLU' // FLU local tangent frame (x: Forward, y: Left, z: Up) with origin fixed relative to earth. The forward axis is aligned to the front of the vehicle in the horizontal plane.
  | string;

export enum MAVLINK_DATA_STREAM_TYPEEnum {
  MAVLINK_DATA_STREAM_IMG_JPEG = 'MAVLINK_DATA_STREAM_IMG_JPEG',
  MAVLINK_DATA_STREAM_IMG_BMP = 'MAVLINK_DATA_STREAM_IMG_BMP',
  MAVLINK_DATA_STREAM_IMG_RAW8U = 'MAVLINK_DATA_STREAM_IMG_RAW8U',
  MAVLINK_DATA_STREAM_IMG_RAW32U = 'MAVLINK_DATA_STREAM_IMG_RAW32U',
  MAVLINK_DATA_STREAM_IMG_PGM = 'MAVLINK_DATA_STREAM_IMG_PGM',
  MAVLINK_DATA_STREAM_IMG_PNG = 'MAVLINK_DATA_STREAM_IMG_PNG',
}

export type MAVLINK_DATA_STREAM_TYPE =
  | 'MAVLINK_DATA_STREAM_IMG_JPEG'
  | 'MAVLINK_DATA_STREAM_IMG_BMP'
  | 'MAVLINK_DATA_STREAM_IMG_RAW8U'
  | 'MAVLINK_DATA_STREAM_IMG_RAW32U'
  | 'MAVLINK_DATA_STREAM_IMG_PGM'
  | 'MAVLINK_DATA_STREAM_IMG_PNG'
  | string;

export enum FENCE_BREACHEnum {
  // No last fence breach
  FENCE_BREACH_NONE = 'FENCE_BREACH_NONE',
  // Breached minimum altitude
  FENCE_BREACH_MINALT = 'FENCE_BREACH_MINALT',
  // Breached maximum altitude
  FENCE_BREACH_MAXALT = 'FENCE_BREACH_MAXALT',
  // Breached fence boundary
  FENCE_BREACH_BOUNDARY = 'FENCE_BREACH_BOUNDARY',
}

export type FENCE_BREACH =
  | 'FENCE_BREACH_NONE' // No last fence breach
  | 'FENCE_BREACH_MINALT' // Breached minimum altitude
  | 'FENCE_BREACH_MAXALT' // Breached maximum altitude
  | 'FENCE_BREACH_BOUNDARY' // Breached fence boundary
  | string;

// Actions being taken to mitigate/prevent fence breach
export enum FENCE_MITIGATEEnum {
  // Unknown
  FENCE_MITIGATE_UNKNOWN = 'FENCE_MITIGATE_UNKNOWN',
  // No actions being taken
  FENCE_MITIGATE_NONE = 'FENCE_MITIGATE_NONE',
  // Velocity limiting active to prevent breach
  FENCE_MITIGATE_VEL_LIMIT = 'FENCE_MITIGATE_VEL_LIMIT',
}

export type FENCE_MITIGATE =
  | 'FENCE_MITIGATE_UNKNOWN' // Unknown
  | 'FENCE_MITIGATE_NONE' // No actions being taken
  | 'FENCE_MITIGATE_VEL_LIMIT' // Velocity limiting active to prevent breach
  | string;

// Fence types to enable or disable when using MAV_CMD_DO_FENCE_ENABLE.
// Note that at least one of these flags must be set in MAV_CMD_DO_FENCE_ENABLE.param2.
// If none are set, the flight stack will ignore the field and enable/disable its default set of fences (usually all of them).
export enum FENCE_TYPEEnum {
  // Maximum altitude fence
  FENCE_TYPE_ALT_MAX = 'FENCE_TYPE_ALT_MAX',
  // Circle fence
  FENCE_TYPE_CIRCLE = 'FENCE_TYPE_CIRCLE',
  // Polygon fence
  FENCE_TYPE_POLYGON = 'FENCE_TYPE_POLYGON',
  // Minimum altitude fence
  FENCE_TYPE_ALT_MIN = 'FENCE_TYPE_ALT_MIN',
}

export type FENCE_TYPE =
  | 'FENCE_TYPE_ALT_MAX' // Maximum altitude fence
  | 'FENCE_TYPE_CIRCLE' // Circle fence
  | 'FENCE_TYPE_POLYGON' // Polygon fence
  | 'FENCE_TYPE_ALT_MIN' // Minimum altitude fence
  | string;

// Enumeration of possible mount operation modes. This message is used by obsolete/deprecated gimbal messages.
export enum MAV_MOUNT_MODEEnum {
  // Load and keep safe position (Roll,Pitch,Yaw) from permanent memory and stop stabilization
  MAV_MOUNT_MODE_RETRACT = 'MAV_MOUNT_MODE_RETRACT',
  // Load and keep neutral position (Roll,Pitch,Yaw) from permanent memory.
  MAV_MOUNT_MODE_NEUTRAL = 'MAV_MOUNT_MODE_NEUTRAL',
  // Load neutral position and start MAVLink Roll,Pitch,Yaw control with stabilization
  MAV_MOUNT_MODE_MAVLINK_TARGETING = 'MAV_MOUNT_MODE_MAVLINK_TARGETING',
  // Load neutral position and start RC Roll,Pitch,Yaw control with stabilization
  MAV_MOUNT_MODE_RC_TARGETING = 'MAV_MOUNT_MODE_RC_TARGETING',
  // Load neutral position and start to point to Lat,Lon,Alt
  MAV_MOUNT_MODE_GPS_POINT = 'MAV_MOUNT_MODE_GPS_POINT',
  // Gimbal tracks system with specified system ID
  MAV_MOUNT_MODE_SYSID_TARGET = 'MAV_MOUNT_MODE_SYSID_TARGET',
  // Gimbal tracks home position
  MAV_MOUNT_MODE_HOME_LOCATION = 'MAV_MOUNT_MODE_HOME_LOCATION',
}

export type MAV_MOUNT_MODE =
  | 'MAV_MOUNT_MODE_RETRACT' // Load and keep safe position (Roll,Pitch,Yaw) from permanent memory and stop stabilization
  | 'MAV_MOUNT_MODE_NEUTRAL' // Load and keep neutral position (Roll,Pitch,Yaw) from permanent memory.
  | 'MAV_MOUNT_MODE_MAVLINK_TARGETING' // Load neutral position and start MAVLink Roll,Pitch,Yaw control with stabilization
  | 'MAV_MOUNT_MODE_RC_TARGETING' // Load neutral position and start RC Roll,Pitch,Yaw control with stabilization
  | 'MAV_MOUNT_MODE_GPS_POINT' // Load neutral position and start to point to Lat,Lon,Alt
  | 'MAV_MOUNT_MODE_SYSID_TARGET' // Gimbal tracks system with specified system ID
  | 'MAV_MOUNT_MODE_HOME_LOCATION' // Gimbal tracks home position
  | string;

// Gimbal device (low level) capability flags (bitmap).
export enum GIMBAL_DEVICE_CAP_FLAGSEnum {
  // Gimbal device supports a retracted position.
  GIMBAL_DEVICE_CAP_FLAGS_HAS_RETRACT = 'GIMBAL_DEVICE_CAP_FLAGS_HAS_RETRACT',
  // Gimbal device supports a horizontal, forward looking position, stabilized.
  GIMBAL_DEVICE_CAP_FLAGS_HAS_NEUTRAL = 'GIMBAL_DEVICE_CAP_FLAGS_HAS_NEUTRAL',
  // Gimbal device supports rotating around roll axis.
  GIMBAL_DEVICE_CAP_FLAGS_HAS_ROLL_AXIS = 'GIMBAL_DEVICE_CAP_FLAGS_HAS_ROLL_AXIS',
  // Gimbal device supports to follow a roll angle relative to the vehicle.
  GIMBAL_DEVICE_CAP_FLAGS_HAS_ROLL_FOLLOW = 'GIMBAL_DEVICE_CAP_FLAGS_HAS_ROLL_FOLLOW',
  // Gimbal device supports locking to a roll angle (generally that&#x27;s the default with roll stabilized).
  GIMBAL_DEVICE_CAP_FLAGS_HAS_ROLL_LOCK = 'GIMBAL_DEVICE_CAP_FLAGS_HAS_ROLL_LOCK',
  // Gimbal device supports rotating around pitch axis.
  GIMBAL_DEVICE_CAP_FLAGS_HAS_PITCH_AXIS = 'GIMBAL_DEVICE_CAP_FLAGS_HAS_PITCH_AXIS',
  // Gimbal device supports to follow a pitch angle relative to the vehicle.
  GIMBAL_DEVICE_CAP_FLAGS_HAS_PITCH_FOLLOW = 'GIMBAL_DEVICE_CAP_FLAGS_HAS_PITCH_FOLLOW',
  // Gimbal device supports locking to a pitch angle (generally that&#x27;s the default with pitch stabilized).
  GIMBAL_DEVICE_CAP_FLAGS_HAS_PITCH_LOCK = 'GIMBAL_DEVICE_CAP_FLAGS_HAS_PITCH_LOCK',
  // Gimbal device supports rotating around yaw axis.
  GIMBAL_DEVICE_CAP_FLAGS_HAS_YAW_AXIS = 'GIMBAL_DEVICE_CAP_FLAGS_HAS_YAW_AXIS',
  // Gimbal device supports to follow a yaw angle relative to the vehicle (generally that&#x27;s the default).
  GIMBAL_DEVICE_CAP_FLAGS_HAS_YAW_FOLLOW = 'GIMBAL_DEVICE_CAP_FLAGS_HAS_YAW_FOLLOW',
  // Gimbal device supports locking to an absolute heading, i.e., yaw angle relative to North (earth frame, often this is an option available).
  GIMBAL_DEVICE_CAP_FLAGS_HAS_YAW_LOCK = 'GIMBAL_DEVICE_CAP_FLAGS_HAS_YAW_LOCK',
  // Gimbal device supports yawing/panning infinitely (e.g. using slip disk).
  GIMBAL_DEVICE_CAP_FLAGS_SUPPORTS_INFINITE_YAW = 'GIMBAL_DEVICE_CAP_FLAGS_SUPPORTS_INFINITE_YAW',
  // Gimbal device supports yaw angles and angular velocities relative to North (earth frame). This usually requires support by an autopilot via AUTOPILOT_STATE_FOR_GIMBAL_DEVICE. Support can go on and off during runtime, which is reported by the flag GIMBAL_DEVICE_FLAGS_CAN_ACCEPT_YAW_IN_EARTH_FRAME.
  GIMBAL_DEVICE_CAP_FLAGS_SUPPORTS_YAW_IN_EARTH_FRAME = 'GIMBAL_DEVICE_CAP_FLAGS_SUPPORTS_YAW_IN_EARTH_FRAME',
  // Gimbal device supports radio control inputs as an alternative input for controlling the gimbal orientation.
  GIMBAL_DEVICE_CAP_FLAGS_HAS_RC_INPUTS = 'GIMBAL_DEVICE_CAP_FLAGS_HAS_RC_INPUTS',
}

export type GIMBAL_DEVICE_CAP_FLAGS =
  | 'GIMBAL_DEVICE_CAP_FLAGS_HAS_RETRACT' // Gimbal device supports a retracted position.
  | 'GIMBAL_DEVICE_CAP_FLAGS_HAS_NEUTRAL' // Gimbal device supports a horizontal, forward looking position, stabilized.
  | 'GIMBAL_DEVICE_CAP_FLAGS_HAS_ROLL_AXIS' // Gimbal device supports rotating around roll axis.
  | 'GIMBAL_DEVICE_CAP_FLAGS_HAS_ROLL_FOLLOW' // Gimbal device supports to follow a roll angle relative to the vehicle.
  | 'GIMBAL_DEVICE_CAP_FLAGS_HAS_ROLL_LOCK' // Gimbal device supports locking to a roll angle (generally that&#x27;s the default with roll stabilized).
  | 'GIMBAL_DEVICE_CAP_FLAGS_HAS_PITCH_AXIS' // Gimbal device supports rotating around pitch axis.
  | 'GIMBAL_DEVICE_CAP_FLAGS_HAS_PITCH_FOLLOW' // Gimbal device supports to follow a pitch angle relative to the vehicle.
  | 'GIMBAL_DEVICE_CAP_FLAGS_HAS_PITCH_LOCK' // Gimbal device supports locking to a pitch angle (generally that&#x27;s the default with pitch stabilized).
  | 'GIMBAL_DEVICE_CAP_FLAGS_HAS_YAW_AXIS' // Gimbal device supports rotating around yaw axis.
  | 'GIMBAL_DEVICE_CAP_FLAGS_HAS_YAW_FOLLOW' // Gimbal device supports to follow a yaw angle relative to the vehicle (generally that&#x27;s the default).
  | 'GIMBAL_DEVICE_CAP_FLAGS_HAS_YAW_LOCK' // Gimbal device supports locking to an absolute heading, i.e., yaw angle relative to North (earth frame, often this is an option available).
  | 'GIMBAL_DEVICE_CAP_FLAGS_SUPPORTS_INFINITE_YAW' // Gimbal device supports yawing/panning infinitely (e.g. using slip disk).
  | 'GIMBAL_DEVICE_CAP_FLAGS_SUPPORTS_YAW_IN_EARTH_FRAME' // Gimbal device supports yaw angles and angular velocities relative to North (earth frame). This usually requires support by an autopilot via AUTOPILOT_STATE_FOR_GIMBAL_DEVICE. Support can go on and off during runtime, which is reported by the flag GIMBAL_DEVICE_FLAGS_CAN_ACCEPT_YAW_IN_EARTH_FRAME.
  | 'GIMBAL_DEVICE_CAP_FLAGS_HAS_RC_INPUTS' // Gimbal device supports radio control inputs as an alternative input for controlling the gimbal orientation.
  | string;

// Gimbal manager high level capability flags (bitmap). The first 16 bits are identical to the GIMBAL_DEVICE_CAP_FLAGS. However, the gimbal manager does not need to copy the flags from the gimbal but can also enhance the capabilities and thus add flags.
export enum GIMBAL_MANAGER_CAP_FLAGSEnum {
  // Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_RETRACT.
  GIMBAL_MANAGER_CAP_FLAGS_HAS_RETRACT = 'GIMBAL_MANAGER_CAP_FLAGS_HAS_RETRACT',
  // Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_NEUTRAL.
  GIMBAL_MANAGER_CAP_FLAGS_HAS_NEUTRAL = 'GIMBAL_MANAGER_CAP_FLAGS_HAS_NEUTRAL',
  // Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_ROLL_AXIS.
  GIMBAL_MANAGER_CAP_FLAGS_HAS_ROLL_AXIS = 'GIMBAL_MANAGER_CAP_FLAGS_HAS_ROLL_AXIS',
  // Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_ROLL_FOLLOW.
  GIMBAL_MANAGER_CAP_FLAGS_HAS_ROLL_FOLLOW = 'GIMBAL_MANAGER_CAP_FLAGS_HAS_ROLL_FOLLOW',
  // Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_ROLL_LOCK.
  GIMBAL_MANAGER_CAP_FLAGS_HAS_ROLL_LOCK = 'GIMBAL_MANAGER_CAP_FLAGS_HAS_ROLL_LOCK',
  // Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_PITCH_AXIS.
  GIMBAL_MANAGER_CAP_FLAGS_HAS_PITCH_AXIS = 'GIMBAL_MANAGER_CAP_FLAGS_HAS_PITCH_AXIS',
  // Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_PITCH_FOLLOW.
  GIMBAL_MANAGER_CAP_FLAGS_HAS_PITCH_FOLLOW = 'GIMBAL_MANAGER_CAP_FLAGS_HAS_PITCH_FOLLOW',
  // Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_PITCH_LOCK.
  GIMBAL_MANAGER_CAP_FLAGS_HAS_PITCH_LOCK = 'GIMBAL_MANAGER_CAP_FLAGS_HAS_PITCH_LOCK',
  // Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_YAW_AXIS.
  GIMBAL_MANAGER_CAP_FLAGS_HAS_YAW_AXIS = 'GIMBAL_MANAGER_CAP_FLAGS_HAS_YAW_AXIS',
  // Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_YAW_FOLLOW.
  GIMBAL_MANAGER_CAP_FLAGS_HAS_YAW_FOLLOW = 'GIMBAL_MANAGER_CAP_FLAGS_HAS_YAW_FOLLOW',
  // Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_YAW_LOCK.
  GIMBAL_MANAGER_CAP_FLAGS_HAS_YAW_LOCK = 'GIMBAL_MANAGER_CAP_FLAGS_HAS_YAW_LOCK',
  // Based on GIMBAL_DEVICE_CAP_FLAGS_SUPPORTS_INFINITE_YAW.
  GIMBAL_MANAGER_CAP_FLAGS_SUPPORTS_INFINITE_YAW = 'GIMBAL_MANAGER_CAP_FLAGS_SUPPORTS_INFINITE_YAW',
  // Based on GIMBAL_DEVICE_CAP_FLAGS_SUPPORTS_YAW_IN_EARTH_FRAME.
  GIMBAL_MANAGER_CAP_FLAGS_SUPPORTS_YAW_IN_EARTH_FRAME = 'GIMBAL_MANAGER_CAP_FLAGS_SUPPORTS_YAW_IN_EARTH_FRAME',
  // Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_RC_INPUTS.
  GIMBAL_MANAGER_CAP_FLAGS_HAS_RC_INPUTS = 'GIMBAL_MANAGER_CAP_FLAGS_HAS_RC_INPUTS',
  // Gimbal manager supports to point to a local position.
  GIMBAL_MANAGER_CAP_FLAGS_CAN_POINT_LOCATION_LOCAL = 'GIMBAL_MANAGER_CAP_FLAGS_CAN_POINT_LOCATION_LOCAL',
  // Gimbal manager supports to point to a global latitude, longitude, altitude position.
  GIMBAL_MANAGER_CAP_FLAGS_CAN_POINT_LOCATION_GLOBAL = 'GIMBAL_MANAGER_CAP_FLAGS_CAN_POINT_LOCATION_GLOBAL',
}

export type GIMBAL_MANAGER_CAP_FLAGS =
  | 'GIMBAL_MANAGER_CAP_FLAGS_HAS_RETRACT' // Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_RETRACT.
  | 'GIMBAL_MANAGER_CAP_FLAGS_HAS_NEUTRAL' // Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_NEUTRAL.
  | 'GIMBAL_MANAGER_CAP_FLAGS_HAS_ROLL_AXIS' // Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_ROLL_AXIS.
  | 'GIMBAL_MANAGER_CAP_FLAGS_HAS_ROLL_FOLLOW' // Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_ROLL_FOLLOW.
  | 'GIMBAL_MANAGER_CAP_FLAGS_HAS_ROLL_LOCK' // Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_ROLL_LOCK.
  | 'GIMBAL_MANAGER_CAP_FLAGS_HAS_PITCH_AXIS' // Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_PITCH_AXIS.
  | 'GIMBAL_MANAGER_CAP_FLAGS_HAS_PITCH_FOLLOW' // Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_PITCH_FOLLOW.
  | 'GIMBAL_MANAGER_CAP_FLAGS_HAS_PITCH_LOCK' // Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_PITCH_LOCK.
  | 'GIMBAL_MANAGER_CAP_FLAGS_HAS_YAW_AXIS' // Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_YAW_AXIS.
  | 'GIMBAL_MANAGER_CAP_FLAGS_HAS_YAW_FOLLOW' // Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_YAW_FOLLOW.
  | 'GIMBAL_MANAGER_CAP_FLAGS_HAS_YAW_LOCK' // Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_YAW_LOCK.
  | 'GIMBAL_MANAGER_CAP_FLAGS_SUPPORTS_INFINITE_YAW' // Based on GIMBAL_DEVICE_CAP_FLAGS_SUPPORTS_INFINITE_YAW.
  | 'GIMBAL_MANAGER_CAP_FLAGS_SUPPORTS_YAW_IN_EARTH_FRAME' // Based on GIMBAL_DEVICE_CAP_FLAGS_SUPPORTS_YAW_IN_EARTH_FRAME.
  | 'GIMBAL_MANAGER_CAP_FLAGS_HAS_RC_INPUTS' // Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_RC_INPUTS.
  | 'GIMBAL_MANAGER_CAP_FLAGS_CAN_POINT_LOCATION_LOCAL' // Gimbal manager supports to point to a local position.
  | 'GIMBAL_MANAGER_CAP_FLAGS_CAN_POINT_LOCATION_GLOBAL' // Gimbal manager supports to point to a global latitude, longitude, altitude position.
  | string;

// Flags for gimbal device (lower level) operation.
export enum GIMBAL_DEVICE_FLAGSEnum {
  // Set to retracted safe position (no stabilization), takes precedence over all other flags.
  GIMBAL_DEVICE_FLAGS_RETRACT = 'GIMBAL_DEVICE_FLAGS_RETRACT',
  // Set to neutral/default position, taking precedence over all other flags except RETRACT. Neutral is commonly forward-facing and horizontal (roll&#x3D;pitch&#x3D;yaw&#x3D;0) but may be any orientation.
  GIMBAL_DEVICE_FLAGS_NEUTRAL = 'GIMBAL_DEVICE_FLAGS_NEUTRAL',
  // Lock roll angle to absolute angle relative to horizon (not relative to vehicle). This is generally the default with a stabilizing gimbal.
  GIMBAL_DEVICE_FLAGS_ROLL_LOCK = 'GIMBAL_DEVICE_FLAGS_ROLL_LOCK',
  // Lock pitch angle to absolute angle relative to horizon (not relative to vehicle). This is generally the default with a stabilizing gimbal.
  GIMBAL_DEVICE_FLAGS_PITCH_LOCK = 'GIMBAL_DEVICE_FLAGS_PITCH_LOCK',
  // Lock yaw angle to absolute angle relative to North (not relative to vehicle). If this flag is set, the yaw angle and z component of angular velocity are relative to North (earth frame, x-axis pointing North), else they are relative to the vehicle heading (vehicle frame, earth frame rotated so that the x-axis is pointing forward).
  GIMBAL_DEVICE_FLAGS_YAW_LOCK = 'GIMBAL_DEVICE_FLAGS_YAW_LOCK',
  // Yaw angle and z component of angular velocity are relative to the vehicle heading (vehicle frame, earth frame rotated such that the x-axis is pointing forward).
  GIMBAL_DEVICE_FLAGS_YAW_IN_VEHICLE_FRAME = 'GIMBAL_DEVICE_FLAGS_YAW_IN_VEHICLE_FRAME',
  // Yaw angle and z component of angular velocity are relative to North (earth frame, x-axis is pointing North).
  GIMBAL_DEVICE_FLAGS_YAW_IN_EARTH_FRAME = 'GIMBAL_DEVICE_FLAGS_YAW_IN_EARTH_FRAME',
  // Gimbal device can accept yaw angle inputs relative to North (earth frame). This flag is only for reporting (attempts to set this flag are ignored).
  GIMBAL_DEVICE_FLAGS_ACCEPTS_YAW_IN_EARTH_FRAME = 'GIMBAL_DEVICE_FLAGS_ACCEPTS_YAW_IN_EARTH_FRAME',
  // The gimbal orientation is set exclusively by the RC signals feed to the gimbal&#x27;s radio control inputs. MAVLink messages for setting the gimbal orientation (GIMBAL_DEVICE_SET_ATTITUDE) are ignored.
  GIMBAL_DEVICE_FLAGS_RC_EXCLUSIVE = 'GIMBAL_DEVICE_FLAGS_RC_EXCLUSIVE',
  // The gimbal orientation is determined by combining/mixing the RC signals feed to the gimbal&#x27;s radio control inputs and the MAVLink messages for setting the gimbal orientation (GIMBAL_DEVICE_SET_ATTITUDE). How these two controls are combined or mixed is not defined by the protocol but is up to the implementation.
  GIMBAL_DEVICE_FLAGS_RC_MIXED = 'GIMBAL_DEVICE_FLAGS_RC_MIXED',
}

export type GIMBAL_DEVICE_FLAGS =
  | 'GIMBAL_DEVICE_FLAGS_RETRACT' // Set to retracted safe position (no stabilization), takes precedence over all other flags.
  | 'GIMBAL_DEVICE_FLAGS_NEUTRAL' // Set to neutral/default position, taking precedence over all other flags except RETRACT. Neutral is commonly forward-facing and horizontal (roll&#x3D;pitch&#x3D;yaw&#x3D;0) but may be any orientation.
  | 'GIMBAL_DEVICE_FLAGS_ROLL_LOCK' // Lock roll angle to absolute angle relative to horizon (not relative to vehicle). This is generally the default with a stabilizing gimbal.
  | 'GIMBAL_DEVICE_FLAGS_PITCH_LOCK' // Lock pitch angle to absolute angle relative to horizon (not relative to vehicle). This is generally the default with a stabilizing gimbal.
  | 'GIMBAL_DEVICE_FLAGS_YAW_LOCK' // Lock yaw angle to absolute angle relative to North (not relative to vehicle). If this flag is set, the yaw angle and z component of angular velocity are relative to North (earth frame, x-axis pointing North), else they are relative to the vehicle heading (vehicle frame, earth frame rotated so that the x-axis is pointing forward).
  | 'GIMBAL_DEVICE_FLAGS_YAW_IN_VEHICLE_FRAME' // Yaw angle and z component of angular velocity are relative to the vehicle heading (vehicle frame, earth frame rotated such that the x-axis is pointing forward).
  | 'GIMBAL_DEVICE_FLAGS_YAW_IN_EARTH_FRAME' // Yaw angle and z component of angular velocity are relative to North (earth frame, x-axis is pointing North).
  | 'GIMBAL_DEVICE_FLAGS_ACCEPTS_YAW_IN_EARTH_FRAME' // Gimbal device can accept yaw angle inputs relative to North (earth frame). This flag is only for reporting (attempts to set this flag are ignored).
  | 'GIMBAL_DEVICE_FLAGS_RC_EXCLUSIVE' // The gimbal orientation is set exclusively by the RC signals feed to the gimbal&#x27;s radio control inputs. MAVLink messages for setting the gimbal orientation (GIMBAL_DEVICE_SET_ATTITUDE) are ignored.
  | 'GIMBAL_DEVICE_FLAGS_RC_MIXED' // The gimbal orientation is determined by combining/mixing the RC signals feed to the gimbal&#x27;s radio control inputs and the MAVLink messages for setting the gimbal orientation (GIMBAL_DEVICE_SET_ATTITUDE). How these two controls are combined or mixed is not defined by the protocol but is up to the implementation.
  | string;

// Flags for high level gimbal manager operation The first 16 bits are identical to the GIMBAL_DEVICE_FLAGS.
export enum GIMBAL_MANAGER_FLAGSEnum {
  // Based on GIMBAL_DEVICE_FLAGS_RETRACT.
  GIMBAL_MANAGER_FLAGS_RETRACT = 'GIMBAL_MANAGER_FLAGS_RETRACT',
  // Based on GIMBAL_DEVICE_FLAGS_NEUTRAL.
  GIMBAL_MANAGER_FLAGS_NEUTRAL = 'GIMBAL_MANAGER_FLAGS_NEUTRAL',
  // Based on GIMBAL_DEVICE_FLAGS_ROLL_LOCK.
  GIMBAL_MANAGER_FLAGS_ROLL_LOCK = 'GIMBAL_MANAGER_FLAGS_ROLL_LOCK',
  // Based on GIMBAL_DEVICE_FLAGS_PITCH_LOCK.
  GIMBAL_MANAGER_FLAGS_PITCH_LOCK = 'GIMBAL_MANAGER_FLAGS_PITCH_LOCK',
  // Based on GIMBAL_DEVICE_FLAGS_YAW_LOCK.
  GIMBAL_MANAGER_FLAGS_YAW_LOCK = 'GIMBAL_MANAGER_FLAGS_YAW_LOCK',
  // Based on GIMBAL_DEVICE_FLAGS_YAW_IN_VEHICLE_FRAME.
  GIMBAL_MANAGER_FLAGS_YAW_IN_VEHICLE_FRAME = 'GIMBAL_MANAGER_FLAGS_YAW_IN_VEHICLE_FRAME',
  // Based on GIMBAL_DEVICE_FLAGS_YAW_IN_EARTH_FRAME.
  GIMBAL_MANAGER_FLAGS_YAW_IN_EARTH_FRAME = 'GIMBAL_MANAGER_FLAGS_YAW_IN_EARTH_FRAME',
  // Based on GIMBAL_DEVICE_FLAGS_ACCEPTS_YAW_IN_EARTH_FRAME.
  GIMBAL_MANAGER_FLAGS_ACCEPTS_YAW_IN_EARTH_FRAME = 'GIMBAL_MANAGER_FLAGS_ACCEPTS_YAW_IN_EARTH_FRAME',
  // Based on GIMBAL_DEVICE_FLAGS_RC_EXCLUSIVE.
  GIMBAL_MANAGER_FLAGS_RC_EXCLUSIVE = 'GIMBAL_MANAGER_FLAGS_RC_EXCLUSIVE',
  // Based on GIMBAL_DEVICE_FLAGS_RC_MIXED.
  GIMBAL_MANAGER_FLAGS_RC_MIXED = 'GIMBAL_MANAGER_FLAGS_RC_MIXED',
}

export type GIMBAL_MANAGER_FLAGS =
  | 'GIMBAL_MANAGER_FLAGS_RETRACT' // Based on GIMBAL_DEVICE_FLAGS_RETRACT.
  | 'GIMBAL_MANAGER_FLAGS_NEUTRAL' // Based on GIMBAL_DEVICE_FLAGS_NEUTRAL.
  | 'GIMBAL_MANAGER_FLAGS_ROLL_LOCK' // Based on GIMBAL_DEVICE_FLAGS_ROLL_LOCK.
  | 'GIMBAL_MANAGER_FLAGS_PITCH_LOCK' // Based on GIMBAL_DEVICE_FLAGS_PITCH_LOCK.
  | 'GIMBAL_MANAGER_FLAGS_YAW_LOCK' // Based on GIMBAL_DEVICE_FLAGS_YAW_LOCK.
  | 'GIMBAL_MANAGER_FLAGS_YAW_IN_VEHICLE_FRAME' // Based on GIMBAL_DEVICE_FLAGS_YAW_IN_VEHICLE_FRAME.
  | 'GIMBAL_MANAGER_FLAGS_YAW_IN_EARTH_FRAME' // Based on GIMBAL_DEVICE_FLAGS_YAW_IN_EARTH_FRAME.
  | 'GIMBAL_MANAGER_FLAGS_ACCEPTS_YAW_IN_EARTH_FRAME' // Based on GIMBAL_DEVICE_FLAGS_ACCEPTS_YAW_IN_EARTH_FRAME.
  | 'GIMBAL_MANAGER_FLAGS_RC_EXCLUSIVE' // Based on GIMBAL_DEVICE_FLAGS_RC_EXCLUSIVE.
  | 'GIMBAL_MANAGER_FLAGS_RC_MIXED' // Based on GIMBAL_DEVICE_FLAGS_RC_MIXED.
  | string;

// Gimbal device (low level) error flags (bitmap, 0 means no error)
export enum GIMBAL_DEVICE_ERROR_FLAGSEnum {
  // Gimbal device is limited by hardware roll limit.
  GIMBAL_DEVICE_ERROR_FLAGS_AT_ROLL_LIMIT = 'GIMBAL_DEVICE_ERROR_FLAGS_AT_ROLL_LIMIT',
  // Gimbal device is limited by hardware pitch limit.
  GIMBAL_DEVICE_ERROR_FLAGS_AT_PITCH_LIMIT = 'GIMBAL_DEVICE_ERROR_FLAGS_AT_PITCH_LIMIT',
  // Gimbal device is limited by hardware yaw limit.
  GIMBAL_DEVICE_ERROR_FLAGS_AT_YAW_LIMIT = 'GIMBAL_DEVICE_ERROR_FLAGS_AT_YAW_LIMIT',
  // There is an error with the gimbal encoders.
  GIMBAL_DEVICE_ERROR_FLAGS_ENCODER_ERROR = 'GIMBAL_DEVICE_ERROR_FLAGS_ENCODER_ERROR',
  // There is an error with the gimbal power source.
  GIMBAL_DEVICE_ERROR_FLAGS_POWER_ERROR = 'GIMBAL_DEVICE_ERROR_FLAGS_POWER_ERROR',
  // There is an error with the gimbal motors.
  GIMBAL_DEVICE_ERROR_FLAGS_MOTOR_ERROR = 'GIMBAL_DEVICE_ERROR_FLAGS_MOTOR_ERROR',
  // There is an error with the gimbal&#x27;s software.
  GIMBAL_DEVICE_ERROR_FLAGS_SOFTWARE_ERROR = 'GIMBAL_DEVICE_ERROR_FLAGS_SOFTWARE_ERROR',
  // There is an error with the gimbal&#x27;s communication.
  GIMBAL_DEVICE_ERROR_FLAGS_COMMS_ERROR = 'GIMBAL_DEVICE_ERROR_FLAGS_COMMS_ERROR',
  // Gimbal device is currently calibrating.
  GIMBAL_DEVICE_ERROR_FLAGS_CALIBRATION_RUNNING = 'GIMBAL_DEVICE_ERROR_FLAGS_CALIBRATION_RUNNING',
  // Gimbal device is not assigned to a gimbal manager.
  GIMBAL_DEVICE_ERROR_FLAGS_NO_MANAGER = 'GIMBAL_DEVICE_ERROR_FLAGS_NO_MANAGER',
}

export type GIMBAL_DEVICE_ERROR_FLAGS =
  | 'GIMBAL_DEVICE_ERROR_FLAGS_AT_ROLL_LIMIT' // Gimbal device is limited by hardware roll limit.
  | 'GIMBAL_DEVICE_ERROR_FLAGS_AT_PITCH_LIMIT' // Gimbal device is limited by hardware pitch limit.
  | 'GIMBAL_DEVICE_ERROR_FLAGS_AT_YAW_LIMIT' // Gimbal device is limited by hardware yaw limit.
  | 'GIMBAL_DEVICE_ERROR_FLAGS_ENCODER_ERROR' // There is an error with the gimbal encoders.
  | 'GIMBAL_DEVICE_ERROR_FLAGS_POWER_ERROR' // There is an error with the gimbal power source.
  | 'GIMBAL_DEVICE_ERROR_FLAGS_MOTOR_ERROR' // There is an error with the gimbal motors.
  | 'GIMBAL_DEVICE_ERROR_FLAGS_SOFTWARE_ERROR' // There is an error with the gimbal&#x27;s software.
  | 'GIMBAL_DEVICE_ERROR_FLAGS_COMMS_ERROR' // There is an error with the gimbal&#x27;s communication.
  | 'GIMBAL_DEVICE_ERROR_FLAGS_CALIBRATION_RUNNING' // Gimbal device is currently calibrating.
  | 'GIMBAL_DEVICE_ERROR_FLAGS_NO_MANAGER' // Gimbal device is not assigned to a gimbal manager.
  | string;

// Gripper actions.
export enum GRIPPER_ACTIONSEnum {
  // Gripper release cargo.
  GRIPPER_ACTION_RELEASE = 'GRIPPER_ACTION_RELEASE',
  // Gripper grab onto cargo.
  GRIPPER_ACTION_GRAB = 'GRIPPER_ACTION_GRAB',
}

export type GRIPPER_ACTIONS =
  | 'GRIPPER_ACTION_RELEASE' // Gripper release cargo.
  | 'GRIPPER_ACTION_GRAB' // Gripper grab onto cargo.
  | string;

// Winch actions.
export enum WINCH_ACTIONSEnum {
  // Allow motor to freewheel.
  WINCH_RELAXED = 'WINCH_RELAXED',
  // Wind or unwind specified length of line, optionally using specified rate.
  WINCH_RELATIVE_LENGTH_CONTROL = 'WINCH_RELATIVE_LENGTH_CONTROL',
  // Wind or unwind line at specified rate.
  WINCH_RATE_CONTROL = 'WINCH_RATE_CONTROL',
  // Perform the locking sequence to relieve motor while in the fully retracted position. Only action and instance command parameters are used, others are ignored.
  WINCH_LOCK = 'WINCH_LOCK',
  // Sequence of drop, slow down, touch down, reel up, lock. Only action and instance command parameters are used, others are ignored.
  WINCH_DELIVER = 'WINCH_DELIVER',
  // Engage motor and hold current position. Only action and instance command parameters are used, others are ignored.
  WINCH_HOLD = 'WINCH_HOLD',
  // Return the reel to the fully retracted position. Only action and instance command parameters are used, others are ignored.
  WINCH_RETRACT = 'WINCH_RETRACT',
  // Load the reel with line. The winch will calculate the total loaded length and stop when the tension exceeds a threshold. Only action and instance command parameters are used, others are ignored.
  WINCH_LOAD_LINE = 'WINCH_LOAD_LINE',
  // Spool out the entire length of the line. Only action and instance command parameters are used, others are ignored.
  WINCH_ABANDON_LINE = 'WINCH_ABANDON_LINE',
  // Spools out just enough to present the hook to the user to load the payload. Only action and instance command parameters are used, others are ignored
  WINCH_LOAD_PAYLOAD = 'WINCH_LOAD_PAYLOAD',
}

export type WINCH_ACTIONS =
  | 'WINCH_RELAXED' // Allow motor to freewheel.
  | 'WINCH_RELATIVE_LENGTH_CONTROL' // Wind or unwind specified length of line, optionally using specified rate.
  | 'WINCH_RATE_CONTROL' // Wind or unwind line at specified rate.
  | 'WINCH_LOCK' // Perform the locking sequence to relieve motor while in the fully retracted position. Only action and instance command parameters are used, others are ignored.
  | 'WINCH_DELIVER' // Sequence of drop, slow down, touch down, reel up, lock. Only action and instance command parameters are used, others are ignored.
  | 'WINCH_HOLD' // Engage motor and hold current position. Only action and instance command parameters are used, others are ignored.
  | 'WINCH_RETRACT' // Return the reel to the fully retracted position. Only action and instance command parameters are used, others are ignored.
  | 'WINCH_LOAD_LINE' // Load the reel with line. The winch will calculate the total loaded length and stop when the tension exceeds a threshold. Only action and instance command parameters are used, others are ignored.
  | 'WINCH_ABANDON_LINE' // Spool out the entire length of the line. Only action and instance command parameters are used, others are ignored.
  | 'WINCH_LOAD_PAYLOAD' // Spools out just enough to present the hook to the user to load the payload. Only action and instance command parameters are used, others are ignored
  | string;

// Generalized UAVCAN node health
export enum UAVCAN_NODE_HEALTHEnum {
  // The node is functioning properly.
  UAVCAN_NODE_HEALTH_OK = 'UAVCAN_NODE_HEALTH_OK',
  // A critical parameter went out of range or the node has encountered a minor failure.
  UAVCAN_NODE_HEALTH_WARNING = 'UAVCAN_NODE_HEALTH_WARNING',
  // The node has encountered a major failure.
  UAVCAN_NODE_HEALTH_ERROR = 'UAVCAN_NODE_HEALTH_ERROR',
  // The node has suffered a fatal malfunction.
  UAVCAN_NODE_HEALTH_CRITICAL = 'UAVCAN_NODE_HEALTH_CRITICAL',
}

export type UAVCAN_NODE_HEALTH =
  | 'UAVCAN_NODE_HEALTH_OK' // The node is functioning properly.
  | 'UAVCAN_NODE_HEALTH_WARNING' // A critical parameter went out of range or the node has encountered a minor failure.
  | 'UAVCAN_NODE_HEALTH_ERROR' // The node has encountered a major failure.
  | 'UAVCAN_NODE_HEALTH_CRITICAL' // The node has suffered a fatal malfunction.
  | string;

// Generalized UAVCAN node mode
export enum UAVCAN_NODE_MODEEnum {
  // The node is performing its primary functions.
  UAVCAN_NODE_MODE_OPERATIONAL = 'UAVCAN_NODE_MODE_OPERATIONAL',
  // The node is initializing; this mode is entered immediately after startup.
  UAVCAN_NODE_MODE_INITIALIZATION = 'UAVCAN_NODE_MODE_INITIALIZATION',
  // The node is under maintenance.
  UAVCAN_NODE_MODE_MAINTENANCE = 'UAVCAN_NODE_MODE_MAINTENANCE',
  // The node is in the process of updating its software.
  UAVCAN_NODE_MODE_SOFTWARE_UPDATE = 'UAVCAN_NODE_MODE_SOFTWARE_UPDATE',
  // The node is no longer available online.
  UAVCAN_NODE_MODE_OFFLINE = 'UAVCAN_NODE_MODE_OFFLINE',
}

export type UAVCAN_NODE_MODE =
  | 'UAVCAN_NODE_MODE_OPERATIONAL' // The node is performing its primary functions.
  | 'UAVCAN_NODE_MODE_INITIALIZATION' // The node is initializing; this mode is entered immediately after startup.
  | 'UAVCAN_NODE_MODE_MAINTENANCE' // The node is under maintenance.
  | 'UAVCAN_NODE_MODE_SOFTWARE_UPDATE' // The node is in the process of updating its software.
  | 'UAVCAN_NODE_MODE_OFFLINE' // The node is no longer available online.
  | string;

// Indicates the ESC connection type.
export enum ESC_CONNECTION_TYPEEnum {
  // Traditional PPM ESC.
  ESC_CONNECTION_TYPE_PPM = 'ESC_CONNECTION_TYPE_PPM',
  // Serial Bus connected ESC.
  ESC_CONNECTION_TYPE_SERIAL = 'ESC_CONNECTION_TYPE_SERIAL',
  // One Shot PPM ESC.
  ESC_CONNECTION_TYPE_ONESHOT = 'ESC_CONNECTION_TYPE_ONESHOT',
  // I2C ESC.
  ESC_CONNECTION_TYPE_I2C = 'ESC_CONNECTION_TYPE_I2C',
  // CAN-Bus ESC.
  ESC_CONNECTION_TYPE_CAN = 'ESC_CONNECTION_TYPE_CAN',
  // DShot ESC.
  ESC_CONNECTION_TYPE_DSHOT = 'ESC_CONNECTION_TYPE_DSHOT',
}

export type ESC_CONNECTION_TYPE =
  | 'ESC_CONNECTION_TYPE_PPM' // Traditional PPM ESC.
  | 'ESC_CONNECTION_TYPE_SERIAL' // Serial Bus connected ESC.
  | 'ESC_CONNECTION_TYPE_ONESHOT' // One Shot PPM ESC.
  | 'ESC_CONNECTION_TYPE_I2C' // I2C ESC.
  | 'ESC_CONNECTION_TYPE_CAN' // CAN-Bus ESC.
  | 'ESC_CONNECTION_TYPE_DSHOT' // DShot ESC.
  | string;

// Flags to report ESC failures.
export enum ESC_FAILURE_FLAGSEnum {
  // Over current failure.
  ESC_FAILURE_OVER_CURRENT = 'ESC_FAILURE_OVER_CURRENT',
  // Over voltage failure.
  ESC_FAILURE_OVER_VOLTAGE = 'ESC_FAILURE_OVER_VOLTAGE',
  // Over temperature failure.
  ESC_FAILURE_OVER_TEMPERATURE = 'ESC_FAILURE_OVER_TEMPERATURE',
  // Over RPM failure.
  ESC_FAILURE_OVER_RPM = 'ESC_FAILURE_OVER_RPM',
  // Inconsistent command failure i.e. out of bounds.
  ESC_FAILURE_INCONSISTENT_CMD = 'ESC_FAILURE_INCONSISTENT_CMD',
  // Motor stuck failure.
  ESC_FAILURE_MOTOR_STUCK = 'ESC_FAILURE_MOTOR_STUCK',
  // Generic ESC failure.
  ESC_FAILURE_GENERIC = 'ESC_FAILURE_GENERIC',
}

export type ESC_FAILURE_FLAGS =
  | 'ESC_FAILURE_OVER_CURRENT' // Over current failure.
  | 'ESC_FAILURE_OVER_VOLTAGE' // Over voltage failure.
  | 'ESC_FAILURE_OVER_TEMPERATURE' // Over temperature failure.
  | 'ESC_FAILURE_OVER_RPM' // Over RPM failure.
  | 'ESC_FAILURE_INCONSISTENT_CMD' // Inconsistent command failure i.e. out of bounds.
  | 'ESC_FAILURE_MOTOR_STUCK' // Motor stuck failure.
  | 'ESC_FAILURE_GENERIC' // Generic ESC failure.
  | string;

// Flags to indicate the status of camera storage.
export enum STORAGE_STATUSEnum {
  // Storage is missing (no microSD card loaded for example.)
  STORAGE_STATUS_EMPTY = 'STORAGE_STATUS_EMPTY',
  // Storage present but unformatted.
  STORAGE_STATUS_UNFORMATTED = 'STORAGE_STATUS_UNFORMATTED',
  // Storage present and ready.
  STORAGE_STATUS_READY = 'STORAGE_STATUS_READY',
  // Camera does not supply storage status information. Capacity information in STORAGE_INFORMATION fields will be ignored.
  STORAGE_STATUS_NOT_SUPPORTED = 'STORAGE_STATUS_NOT_SUPPORTED',
}

export type STORAGE_STATUS =
  | 'STORAGE_STATUS_EMPTY' // Storage is missing (no microSD card loaded for example.)
  | 'STORAGE_STATUS_UNFORMATTED' // Storage present but unformatted.
  | 'STORAGE_STATUS_READY' // Storage present and ready.
  | 'STORAGE_STATUS_NOT_SUPPORTED' // Camera does not supply storage status information. Capacity information in STORAGE_INFORMATION fields will be ignored.
  | string;

// Flags to indicate the type of storage.
export enum STORAGE_TYPEEnum {
  // Storage type is not known.
  STORAGE_TYPE_UNKNOWN = 'STORAGE_TYPE_UNKNOWN',
  // Storage type is USB device.
  STORAGE_TYPE_USB_STICK = 'STORAGE_TYPE_USB_STICK',
  // Storage type is SD card.
  STORAGE_TYPE_SD = 'STORAGE_TYPE_SD',
  // Storage type is microSD card.
  STORAGE_TYPE_MICROSD = 'STORAGE_TYPE_MICROSD',
  // Storage type is CFast.
  STORAGE_TYPE_CF = 'STORAGE_TYPE_CF',
  // Storage type is CFexpress.
  STORAGE_TYPE_CFE = 'STORAGE_TYPE_CFE',
  // Storage type is XQD.
  STORAGE_TYPE_XQD = 'STORAGE_TYPE_XQD',
  // Storage type is HD mass storage type.
  STORAGE_TYPE_HD = 'STORAGE_TYPE_HD',
  // Storage type is other, not listed type.
  STORAGE_TYPE_OTHER = 'STORAGE_TYPE_OTHER',
}

export type STORAGE_TYPE =
  | 'STORAGE_TYPE_UNKNOWN' // Storage type is not known.
  | 'STORAGE_TYPE_USB_STICK' // Storage type is USB device.
  | 'STORAGE_TYPE_SD' // Storage type is SD card.
  | 'STORAGE_TYPE_MICROSD' // Storage type is microSD card.
  | 'STORAGE_TYPE_CF' // Storage type is CFast.
  | 'STORAGE_TYPE_CFE' // Storage type is CFexpress.
  | 'STORAGE_TYPE_XQD' // Storage type is XQD.
  | 'STORAGE_TYPE_HD' // Storage type is HD mass storage type.
  | 'STORAGE_TYPE_OTHER' // Storage type is other, not listed type.
  | string;

// Flags to indicate usage for a particular storage (see STORAGE_INFORMATION.storage_usage and MAV_CMD_SET_STORAGE_USAGE).
export enum STORAGE_USAGE_FLAGEnum {
  // Always set to 1 (indicates STORAGE_INFORMATION.storage_usage is supported).
  STORAGE_USAGE_FLAG_SET = 'STORAGE_USAGE_FLAG_SET',
  // Storage for saving photos.
  STORAGE_USAGE_FLAG_PHOTO = 'STORAGE_USAGE_FLAG_PHOTO',
  // Storage for saving videos.
  STORAGE_USAGE_FLAG_VIDEO = 'STORAGE_USAGE_FLAG_VIDEO',
  // Storage for saving logs.
  STORAGE_USAGE_FLAG_LOGS = 'STORAGE_USAGE_FLAG_LOGS',
}

export type STORAGE_USAGE_FLAG =
  | 'STORAGE_USAGE_FLAG_SET' // Always set to 1 (indicates STORAGE_INFORMATION.storage_usage is supported).
  | 'STORAGE_USAGE_FLAG_PHOTO' // Storage for saving photos.
  | 'STORAGE_USAGE_FLAG_VIDEO' // Storage for saving videos.
  | 'STORAGE_USAGE_FLAG_LOGS' // Storage for saving logs.
  | string;

// Yaw behaviour during orbit flight.
export enum ORBIT_YAW_BEHAVIOUREnum {
  // Vehicle front points to the center (default).
  ORBIT_YAW_BEHAVIOUR_HOLD_FRONT_TO_CIRCLE_CENTER = 'ORBIT_YAW_BEHAVIOUR_HOLD_FRONT_TO_CIRCLE_CENTER',
  // Vehicle front holds heading when message received.
  ORBIT_YAW_BEHAVIOUR_HOLD_INITIAL_HEADING = 'ORBIT_YAW_BEHAVIOUR_HOLD_INITIAL_HEADING',
  // Yaw uncontrolled.
  ORBIT_YAW_BEHAVIOUR_UNCONTROLLED = 'ORBIT_YAW_BEHAVIOUR_UNCONTROLLED',
  // Vehicle front follows flight path (tangential to circle).
  ORBIT_YAW_BEHAVIOUR_HOLD_FRONT_TANGENT_TO_CIRCLE = 'ORBIT_YAW_BEHAVIOUR_HOLD_FRONT_TANGENT_TO_CIRCLE',
  // Yaw controlled by RC input.
  ORBIT_YAW_BEHAVIOUR_RC_CONTROLLED = 'ORBIT_YAW_BEHAVIOUR_RC_CONTROLLED',
  // Vehicle uses current yaw behaviour (unchanged). The vehicle-default yaw behaviour is used if this value is specified when orbit is first commanded.
  ORBIT_YAW_BEHAVIOUR_UNCHANGED = 'ORBIT_YAW_BEHAVIOUR_UNCHANGED',
}

export type ORBIT_YAW_BEHAVIOUR =
  | 'ORBIT_YAW_BEHAVIOUR_HOLD_FRONT_TO_CIRCLE_CENTER' // Vehicle front points to the center (default).
  | 'ORBIT_YAW_BEHAVIOUR_HOLD_INITIAL_HEADING' // Vehicle front holds heading when message received.
  | 'ORBIT_YAW_BEHAVIOUR_UNCONTROLLED' // Yaw uncontrolled.
  | 'ORBIT_YAW_BEHAVIOUR_HOLD_FRONT_TANGENT_TO_CIRCLE' // Vehicle front follows flight path (tangential to circle).
  | 'ORBIT_YAW_BEHAVIOUR_RC_CONTROLLED' // Yaw controlled by RC input.
  | 'ORBIT_YAW_BEHAVIOUR_UNCHANGED' // Vehicle uses current yaw behaviour (unchanged). The vehicle-default yaw behaviour is used if this value is specified when orbit is first commanded.
  | string;

// Possible responses from a WIFI_CONFIG_AP message.
export enum WIFI_CONFIG_AP_RESPONSEEnum {
  // Undefined response. Likely an indicative of a system that doesn&#x27;t support this request.
  WIFI_CONFIG_AP_RESPONSE_UNDEFINED = 'WIFI_CONFIG_AP_RESPONSE_UNDEFINED',
  // Changes accepted.
  WIFI_CONFIG_AP_RESPONSE_ACCEPTED = 'WIFI_CONFIG_AP_RESPONSE_ACCEPTED',
  // Changes rejected.
  WIFI_CONFIG_AP_RESPONSE_REJECTED = 'WIFI_CONFIG_AP_RESPONSE_REJECTED',
  // Invalid Mode.
  WIFI_CONFIG_AP_RESPONSE_MODE_ERROR = 'WIFI_CONFIG_AP_RESPONSE_MODE_ERROR',
  // Invalid SSID.
  WIFI_CONFIG_AP_RESPONSE_SSID_ERROR = 'WIFI_CONFIG_AP_RESPONSE_SSID_ERROR',
  // Invalid Password.
  WIFI_CONFIG_AP_RESPONSE_PASSWORD_ERROR = 'WIFI_CONFIG_AP_RESPONSE_PASSWORD_ERROR',
}

export type WIFI_CONFIG_AP_RESPONSE =
  | 'WIFI_CONFIG_AP_RESPONSE_UNDEFINED' // Undefined response. Likely an indicative of a system that doesn&#x27;t support this request.
  | 'WIFI_CONFIG_AP_RESPONSE_ACCEPTED' // Changes accepted.
  | 'WIFI_CONFIG_AP_RESPONSE_REJECTED' // Changes rejected.
  | 'WIFI_CONFIG_AP_RESPONSE_MODE_ERROR' // Invalid Mode.
  | 'WIFI_CONFIG_AP_RESPONSE_SSID_ERROR' // Invalid SSID.
  | 'WIFI_CONFIG_AP_RESPONSE_PASSWORD_ERROR' // Invalid Password.
  | string;

// Possible responses from a CELLULAR_CONFIG message.
export enum CELLULAR_CONFIG_RESPONSEEnum {
  // Changes accepted.
  CELLULAR_CONFIG_RESPONSE_ACCEPTED = 'CELLULAR_CONFIG_RESPONSE_ACCEPTED',
  // Invalid APN.
  CELLULAR_CONFIG_RESPONSE_APN_ERROR = 'CELLULAR_CONFIG_RESPONSE_APN_ERROR',
  // Invalid PIN.
  CELLULAR_CONFIG_RESPONSE_PIN_ERROR = 'CELLULAR_CONFIG_RESPONSE_PIN_ERROR',
  // Changes rejected.
  CELLULAR_CONFIG_RESPONSE_REJECTED = 'CELLULAR_CONFIG_RESPONSE_REJECTED',
  // PUK is required to unblock SIM card.
  CELLULAR_CONFIG_BLOCKED_PUK_REQUIRED = 'CELLULAR_CONFIG_BLOCKED_PUK_REQUIRED',
}

export type CELLULAR_CONFIG_RESPONSE =
  | 'CELLULAR_CONFIG_RESPONSE_ACCEPTED' // Changes accepted.
  | 'CELLULAR_CONFIG_RESPONSE_APN_ERROR' // Invalid APN.
  | 'CELLULAR_CONFIG_RESPONSE_PIN_ERROR' // Invalid PIN.
  | 'CELLULAR_CONFIG_RESPONSE_REJECTED' // Changes rejected.
  | 'CELLULAR_CONFIG_BLOCKED_PUK_REQUIRED' // PUK is required to unblock SIM card.
  | string;

// WiFi Mode.
export enum WIFI_CONFIG_AP_MODEEnum {
  // WiFi mode is undefined.
  WIFI_CONFIG_AP_MODE_UNDEFINED = 'WIFI_CONFIG_AP_MODE_UNDEFINED',
  // WiFi configured as an access point.
  WIFI_CONFIG_AP_MODE_AP = 'WIFI_CONFIG_AP_MODE_AP',
  // WiFi configured as a station connected to an existing local WiFi network.
  WIFI_CONFIG_AP_MODE_STATION = 'WIFI_CONFIG_AP_MODE_STATION',
  // WiFi disabled.
  WIFI_CONFIG_AP_MODE_DISABLED = 'WIFI_CONFIG_AP_MODE_DISABLED',
}

export type WIFI_CONFIG_AP_MODE =
  | 'WIFI_CONFIG_AP_MODE_UNDEFINED' // WiFi mode is undefined.
  | 'WIFI_CONFIG_AP_MODE_AP' // WiFi configured as an access point.
  | 'WIFI_CONFIG_AP_MODE_STATION' // WiFi configured as a station connected to an existing local WiFi network.
  | 'WIFI_CONFIG_AP_MODE_DISABLED' // WiFi disabled.
  | string;

// Supported component metadata types. These are used in the &quot;general&quot; metadata file returned by COMPONENT_METADATA to provide information about supported metadata types. The types are not used directly in MAVLink messages.
export enum COMP_METADATA_TYPEEnum {
  // General information about the component. General metadata includes information about other metadata types supported by the component. Files of this type must be supported, and must be downloadable from vehicle using a MAVLink FTP URI.
  COMP_METADATA_TYPE_GENERAL = 'COMP_METADATA_TYPE_GENERAL',
  // Parameter meta data.
  COMP_METADATA_TYPE_PARAMETER = 'COMP_METADATA_TYPE_PARAMETER',
  // Meta data that specifies which commands and command parameters the vehicle supports. (WIP)
  COMP_METADATA_TYPE_COMMANDS = 'COMP_METADATA_TYPE_COMMANDS',
  // Meta data that specifies external non-MAVLink peripherals.
  COMP_METADATA_TYPE_PERIPHERALS = 'COMP_METADATA_TYPE_PERIPHERALS',
  // Meta data for the events interface.
  COMP_METADATA_TYPE_EVENTS = 'COMP_METADATA_TYPE_EVENTS',
  // Meta data for actuator configuration (motors, servos and vehicle geometry) and testing.
  COMP_METADATA_TYPE_ACTUATORS = 'COMP_METADATA_TYPE_ACTUATORS',
}

export type COMP_METADATA_TYPE =
  | 'COMP_METADATA_TYPE_GENERAL' // General information about the component. General metadata includes information about other metadata types supported by the component. Files of this type must be supported, and must be downloadable from vehicle using a MAVLink FTP URI.
  | 'COMP_METADATA_TYPE_PARAMETER' // Parameter meta data.
  | 'COMP_METADATA_TYPE_COMMANDS' // Meta data that specifies which commands and command parameters the vehicle supports. (WIP)
  | 'COMP_METADATA_TYPE_PERIPHERALS' // Meta data that specifies external non-MAVLink peripherals.
  | 'COMP_METADATA_TYPE_EVENTS' // Meta data for the events interface.
  | 'COMP_METADATA_TYPE_ACTUATORS' // Meta data for actuator configuration (motors, servos and vehicle geometry) and testing.
  | string;

// Actuator configuration, used to change a setting on an actuator. Component information metadata can be used to know which outputs support which commands.
export enum ACTUATOR_CONFIGURATIONEnum {
  // Do nothing.
  ACTUATOR_CONFIGURATION_NONE = 'ACTUATOR_CONFIGURATION_NONE',
  // Command the actuator to beep now.
  ACTUATOR_CONFIGURATION_BEEP = 'ACTUATOR_CONFIGURATION_BEEP',
  // Permanently set the actuator (ESC) to 3D mode (reversible thrust).
  ACTUATOR_CONFIGURATION_3D_MODE_ON = 'ACTUATOR_CONFIGURATION_3D_MODE_ON',
  // Permanently set the actuator (ESC) to non 3D mode (non-reversible thrust).
  ACTUATOR_CONFIGURATION_3D_MODE_OFF = 'ACTUATOR_CONFIGURATION_3D_MODE_OFF',
  // Permanently set the actuator (ESC) to spin direction 1 (which can be clockwise or counter-clockwise).
  ACTUATOR_CONFIGURATION_SPIN_DIRECTION1 = 'ACTUATOR_CONFIGURATION_SPIN_DIRECTION1',
  // Permanently set the actuator (ESC) to spin direction 2 (opposite of direction 1).
  ACTUATOR_CONFIGURATION_SPIN_DIRECTION2 = 'ACTUATOR_CONFIGURATION_SPIN_DIRECTION2',
}

export type ACTUATOR_CONFIGURATION =
  | 'ACTUATOR_CONFIGURATION_NONE' // Do nothing.
  | 'ACTUATOR_CONFIGURATION_BEEP' // Command the actuator to beep now.
  | 'ACTUATOR_CONFIGURATION_3D_MODE_ON' // Permanently set the actuator (ESC) to 3D mode (reversible thrust).
  | 'ACTUATOR_CONFIGURATION_3D_MODE_OFF' // Permanently set the actuator (ESC) to non 3D mode (non-reversible thrust).
  | 'ACTUATOR_CONFIGURATION_SPIN_DIRECTION1' // Permanently set the actuator (ESC) to spin direction 1 (which can be clockwise or counter-clockwise).
  | 'ACTUATOR_CONFIGURATION_SPIN_DIRECTION2' // Permanently set the actuator (ESC) to spin direction 2 (opposite of direction 1).
  | string;

// Actuator output function. Values greater or equal to 1000 are autopilot-specific.
export enum ACTUATOR_OUTPUT_FUNCTIONEnum {
  // No function (disabled).
  ACTUATOR_OUTPUT_FUNCTION_NONE = 'ACTUATOR_OUTPUT_FUNCTION_NONE',
  // Motor 1
  ACTUATOR_OUTPUT_FUNCTION_MOTOR1 = 'ACTUATOR_OUTPUT_FUNCTION_MOTOR1',
  // Motor 2
  ACTUATOR_OUTPUT_FUNCTION_MOTOR2 = 'ACTUATOR_OUTPUT_FUNCTION_MOTOR2',
  // Motor 3
  ACTUATOR_OUTPUT_FUNCTION_MOTOR3 = 'ACTUATOR_OUTPUT_FUNCTION_MOTOR3',
  // Motor 4
  ACTUATOR_OUTPUT_FUNCTION_MOTOR4 = 'ACTUATOR_OUTPUT_FUNCTION_MOTOR4',
  // Motor 5
  ACTUATOR_OUTPUT_FUNCTION_MOTOR5 = 'ACTUATOR_OUTPUT_FUNCTION_MOTOR5',
  // Motor 6
  ACTUATOR_OUTPUT_FUNCTION_MOTOR6 = 'ACTUATOR_OUTPUT_FUNCTION_MOTOR6',
  // Motor 7
  ACTUATOR_OUTPUT_FUNCTION_MOTOR7 = 'ACTUATOR_OUTPUT_FUNCTION_MOTOR7',
  // Motor 8
  ACTUATOR_OUTPUT_FUNCTION_MOTOR8 = 'ACTUATOR_OUTPUT_FUNCTION_MOTOR8',
  // Motor 9
  ACTUATOR_OUTPUT_FUNCTION_MOTOR9 = 'ACTUATOR_OUTPUT_FUNCTION_MOTOR9',
  // Motor 10
  ACTUATOR_OUTPUT_FUNCTION_MOTOR10 = 'ACTUATOR_OUTPUT_FUNCTION_MOTOR10',
  // Motor 11
  ACTUATOR_OUTPUT_FUNCTION_MOTOR11 = 'ACTUATOR_OUTPUT_FUNCTION_MOTOR11',
  // Motor 12
  ACTUATOR_OUTPUT_FUNCTION_MOTOR12 = 'ACTUATOR_OUTPUT_FUNCTION_MOTOR12',
  // Motor 13
  ACTUATOR_OUTPUT_FUNCTION_MOTOR13 = 'ACTUATOR_OUTPUT_FUNCTION_MOTOR13',
  // Motor 14
  ACTUATOR_OUTPUT_FUNCTION_MOTOR14 = 'ACTUATOR_OUTPUT_FUNCTION_MOTOR14',
  // Motor 15
  ACTUATOR_OUTPUT_FUNCTION_MOTOR15 = 'ACTUATOR_OUTPUT_FUNCTION_MOTOR15',
  // Motor 16
  ACTUATOR_OUTPUT_FUNCTION_MOTOR16 = 'ACTUATOR_OUTPUT_FUNCTION_MOTOR16',
  // Servo 1
  ACTUATOR_OUTPUT_FUNCTION_SERVO1 = 'ACTUATOR_OUTPUT_FUNCTION_SERVO1',
  // Servo 2
  ACTUATOR_OUTPUT_FUNCTION_SERVO2 = 'ACTUATOR_OUTPUT_FUNCTION_SERVO2',
  // Servo 3
  ACTUATOR_OUTPUT_FUNCTION_SERVO3 = 'ACTUATOR_OUTPUT_FUNCTION_SERVO3',
  // Servo 4
  ACTUATOR_OUTPUT_FUNCTION_SERVO4 = 'ACTUATOR_OUTPUT_FUNCTION_SERVO4',
  // Servo 5
  ACTUATOR_OUTPUT_FUNCTION_SERVO5 = 'ACTUATOR_OUTPUT_FUNCTION_SERVO5',
  // Servo 6
  ACTUATOR_OUTPUT_FUNCTION_SERVO6 = 'ACTUATOR_OUTPUT_FUNCTION_SERVO6',
  // Servo 7
  ACTUATOR_OUTPUT_FUNCTION_SERVO7 = 'ACTUATOR_OUTPUT_FUNCTION_SERVO7',
  // Servo 8
  ACTUATOR_OUTPUT_FUNCTION_SERVO8 = 'ACTUATOR_OUTPUT_FUNCTION_SERVO8',
  // Servo 9
  ACTUATOR_OUTPUT_FUNCTION_SERVO9 = 'ACTUATOR_OUTPUT_FUNCTION_SERVO9',
  // Servo 10
  ACTUATOR_OUTPUT_FUNCTION_SERVO10 = 'ACTUATOR_OUTPUT_FUNCTION_SERVO10',
  // Servo 11
  ACTUATOR_OUTPUT_FUNCTION_SERVO11 = 'ACTUATOR_OUTPUT_FUNCTION_SERVO11',
  // Servo 12
  ACTUATOR_OUTPUT_FUNCTION_SERVO12 = 'ACTUATOR_OUTPUT_FUNCTION_SERVO12',
  // Servo 13
  ACTUATOR_OUTPUT_FUNCTION_SERVO13 = 'ACTUATOR_OUTPUT_FUNCTION_SERVO13',
  // Servo 14
  ACTUATOR_OUTPUT_FUNCTION_SERVO14 = 'ACTUATOR_OUTPUT_FUNCTION_SERVO14',
  // Servo 15
  ACTUATOR_OUTPUT_FUNCTION_SERVO15 = 'ACTUATOR_OUTPUT_FUNCTION_SERVO15',
  // Servo 16
  ACTUATOR_OUTPUT_FUNCTION_SERVO16 = 'ACTUATOR_OUTPUT_FUNCTION_SERVO16',
}

export type ACTUATOR_OUTPUT_FUNCTION =
  | 'ACTUATOR_OUTPUT_FUNCTION_NONE' // No function (disabled).
  | 'ACTUATOR_OUTPUT_FUNCTION_MOTOR1' // Motor 1
  | 'ACTUATOR_OUTPUT_FUNCTION_MOTOR2' // Motor 2
  | 'ACTUATOR_OUTPUT_FUNCTION_MOTOR3' // Motor 3
  | 'ACTUATOR_OUTPUT_FUNCTION_MOTOR4' // Motor 4
  | 'ACTUATOR_OUTPUT_FUNCTION_MOTOR5' // Motor 5
  | 'ACTUATOR_OUTPUT_FUNCTION_MOTOR6' // Motor 6
  | 'ACTUATOR_OUTPUT_FUNCTION_MOTOR7' // Motor 7
  | 'ACTUATOR_OUTPUT_FUNCTION_MOTOR8' // Motor 8
  | 'ACTUATOR_OUTPUT_FUNCTION_MOTOR9' // Motor 9
  | 'ACTUATOR_OUTPUT_FUNCTION_MOTOR10' // Motor 10
  | 'ACTUATOR_OUTPUT_FUNCTION_MOTOR11' // Motor 11
  | 'ACTUATOR_OUTPUT_FUNCTION_MOTOR12' // Motor 12
  | 'ACTUATOR_OUTPUT_FUNCTION_MOTOR13' // Motor 13
  | 'ACTUATOR_OUTPUT_FUNCTION_MOTOR14' // Motor 14
  | 'ACTUATOR_OUTPUT_FUNCTION_MOTOR15' // Motor 15
  | 'ACTUATOR_OUTPUT_FUNCTION_MOTOR16' // Motor 16
  | 'ACTUATOR_OUTPUT_FUNCTION_SERVO1' // Servo 1
  | 'ACTUATOR_OUTPUT_FUNCTION_SERVO2' // Servo 2
  | 'ACTUATOR_OUTPUT_FUNCTION_SERVO3' // Servo 3
  | 'ACTUATOR_OUTPUT_FUNCTION_SERVO4' // Servo 4
  | 'ACTUATOR_OUTPUT_FUNCTION_SERVO5' // Servo 5
  | 'ACTUATOR_OUTPUT_FUNCTION_SERVO6' // Servo 6
  | 'ACTUATOR_OUTPUT_FUNCTION_SERVO7' // Servo 7
  | 'ACTUATOR_OUTPUT_FUNCTION_SERVO8' // Servo 8
  | 'ACTUATOR_OUTPUT_FUNCTION_SERVO9' // Servo 9
  | 'ACTUATOR_OUTPUT_FUNCTION_SERVO10' // Servo 10
  | 'ACTUATOR_OUTPUT_FUNCTION_SERVO11' // Servo 11
  | 'ACTUATOR_OUTPUT_FUNCTION_SERVO12' // Servo 12
  | 'ACTUATOR_OUTPUT_FUNCTION_SERVO13' // Servo 13
  | 'ACTUATOR_OUTPUT_FUNCTION_SERVO14' // Servo 14
  | 'ACTUATOR_OUTPUT_FUNCTION_SERVO15' // Servo 15
  | 'ACTUATOR_OUTPUT_FUNCTION_SERVO16' // Servo 16
  | string;

// Axes that will be autotuned by MAV_CMD_DO_AUTOTUNE_ENABLE.
// Note that at least one flag must be set in MAV_CMD_DO_AUTOTUNE_ENABLE.param2: if none are set, the flight stack will tune its default set of axes.
export enum AUTOTUNE_AXISEnum {
  // Autotune roll axis.
  AUTOTUNE_AXIS_ROLL = 'AUTOTUNE_AXIS_ROLL',
  // Autotune pitch axis.
  AUTOTUNE_AXIS_PITCH = 'AUTOTUNE_AXIS_PITCH',
  // Autotune yaw axis.
  AUTOTUNE_AXIS_YAW = 'AUTOTUNE_AXIS_YAW',
}

export type AUTOTUNE_AXIS =
  | 'AUTOTUNE_AXIS_ROLL' // Autotune roll axis.
  | 'AUTOTUNE_AXIS_PITCH' // Autotune pitch axis.
  | 'AUTOTUNE_AXIS_YAW' // Autotune yaw axis.
  | string;

// Actions for reading/writing parameters between persistent and volatile storage when using MAV_CMD_PREFLIGHT_STORAGE.
// (Commonly parameters are loaded from persistent storage (flash/EEPROM) into volatile storage (RAM) on startup and written back when they are changed.)
export enum PREFLIGHT_STORAGE_PARAMETER_ACTIONEnum {
  // Read all parameters from persistent storage. Replaces values in volatile storage.
  PARAM_READ_PERSISTENT = 'PARAM_READ_PERSISTENT',
  // Write all parameter values to persistent storage (flash/EEPROM)
  PARAM_WRITE_PERSISTENT = 'PARAM_WRITE_PERSISTENT',
  // Reset all user configurable parameters to their default value (including airframe selection, sensor calibration data, safety settings, and so on). Does not reset values that contain operation counters and vehicle computed statistics.
  PARAM_RESET_CONFIG_DEFAULT = 'PARAM_RESET_CONFIG_DEFAULT',
  // Reset only sensor calibration parameters to factory defaults (or firmware default if not available)
  PARAM_RESET_SENSOR_DEFAULT = 'PARAM_RESET_SENSOR_DEFAULT',
  // Reset all parameters, including operation counters, to default values
  PARAM_RESET_ALL_DEFAULT = 'PARAM_RESET_ALL_DEFAULT',
}

export type PREFLIGHT_STORAGE_PARAMETER_ACTION =
  | 'PARAM_READ_PERSISTENT' // Read all parameters from persistent storage. Replaces values in volatile storage.
  | 'PARAM_WRITE_PERSISTENT' // Write all parameter values to persistent storage (flash/EEPROM)
  | 'PARAM_RESET_CONFIG_DEFAULT' // Reset all user configurable parameters to their default value (including airframe selection, sensor calibration data, safety settings, and so on). Does not reset values that contain operation counters and vehicle computed statistics.
  | 'PARAM_RESET_SENSOR_DEFAULT' // Reset only sensor calibration parameters to factory defaults (or firmware default if not available)
  | 'PARAM_RESET_ALL_DEFAULT' // Reset all parameters, including operation counters, to default values
  | string;

// Actions for reading and writing plan information (mission, rally points, geofence) between persistent and volatile storage when using MAV_CMD_PREFLIGHT_STORAGE.
// (Commonly missions are loaded from persistent storage (flash/EEPROM) into volatile storage (RAM) on startup and written back when they are changed.)
export enum PREFLIGHT_STORAGE_MISSION_ACTIONEnum {
  // Read current mission data from persistent storage
  MISSION_READ_PERSISTENT = 'MISSION_READ_PERSISTENT',
  // Write current mission data to persistent storage
  MISSION_WRITE_PERSISTENT = 'MISSION_WRITE_PERSISTENT',
  // Erase all mission data stored on the vehicle (both persistent and volatile storage)
  MISSION_RESET_DEFAULT = 'MISSION_RESET_DEFAULT',
}

export type PREFLIGHT_STORAGE_MISSION_ACTION =
  | 'MISSION_READ_PERSISTENT' // Read current mission data from persistent storage
  | 'MISSION_WRITE_PERSISTENT' // Write current mission data to persistent storage
  | 'MISSION_RESET_DEFAULT' // Erase all mission data stored on the vehicle (both persistent and volatile storage)
  | string;

// Specifies the conditions under which the MAV_CMD_PREFLIGHT_REBOOT_SHUTDOWN command should be accepted.
export enum REBOOT_SHUTDOWN_CONDITIONSEnum {
  // Reboot/Shutdown only if allowed by safety checks, such as being landed.
  REBOOT_SHUTDOWN_CONDITIONS_SAFETY_INTERLOCKED = 'REBOOT_SHUTDOWN_CONDITIONS_SAFETY_INTERLOCKED',
  // Force reboot/shutdown of the autopilot/component regardless of system state.
  REBOOT_SHUTDOWN_CONDITIONS_FORCE = 'REBOOT_SHUTDOWN_CONDITIONS_FORCE',
}

export type REBOOT_SHUTDOWN_CONDITIONS =
  | 'REBOOT_SHUTDOWN_CONDITIONS_SAFETY_INTERLOCKED' // Reboot/Shutdown only if allowed by safety checks, such as being landed.
  | 'REBOOT_SHUTDOWN_CONDITIONS_FORCE' // Force reboot/shutdown of the autopilot/component regardless of system state.
  | string;

// Commands to be executed by the MAV. They can be executed on user request, or as part of a mission script. If the action is used in a mission, the parameter mapping to the waypoint/mission message is as follows: Param 1, Param 2, Param 3, Param 4, X: Param 5, Y:Param 6, Z:Param 7. This command list is similar what ARINC 424 is for commercial aircraft: A data format how to interpret waypoint/mission data. NaN and INT32_MAX may be used in float/integer params (respectively) to indicate optional/default values (e.g. to use the component&#x27;s current yaw or latitude rather than a specific value). See https://mavlink.io/en/guide/xml_schema.html#MAV_CMD for information about the structure of the MAV_CMD entries
export enum MAV_CMDEnum {
  // Navigate to waypoint. This is intended for use in missions (for guided commands outside of missions use MAV_CMD_DO_REPOSITION).
  MAV_CMD_NAV_WAYPOINT = 'MAV_CMD_NAV_WAYPOINT',
  // Loiter around this waypoint an unlimited amount of time
  MAV_CMD_NAV_LOITER_UNLIM = 'MAV_CMD_NAV_LOITER_UNLIM',
  // Loiter around this waypoint for X turns
  MAV_CMD_NAV_LOITER_TURNS = 'MAV_CMD_NAV_LOITER_TURNS',
  // Loiter at the specified latitude, longitude and altitude for a certain amount of time. Multicopter vehicles stop at the point (within a vehicle-specific acceptance radius). Forward-only moving vehicles (e.g. fixed-wing) circle the point with the specified radius/direction. If the Heading Required parameter (2) is non-zero forward moving aircraft will only leave the loiter circle once heading towards the next waypoint.
  MAV_CMD_NAV_LOITER_TIME = 'MAV_CMD_NAV_LOITER_TIME',
  // Return to launch location
  MAV_CMD_NAV_RETURN_TO_LAUNCH = 'MAV_CMD_NAV_RETURN_TO_LAUNCH',
  // Land at location.
  MAV_CMD_NAV_LAND = 'MAV_CMD_NAV_LAND',
  // Takeoff from ground / hand. Vehicles that support multiple takeoff modes (e.g. VTOL quadplane) should take off using the currently configured mode.
  MAV_CMD_NAV_TAKEOFF = 'MAV_CMD_NAV_TAKEOFF',
  // Land at local position (local frame only)
  MAV_CMD_NAV_LAND_LOCAL = 'MAV_CMD_NAV_LAND_LOCAL',
  // Takeoff from local position (local frame only)
  MAV_CMD_NAV_TAKEOFF_LOCAL = 'MAV_CMD_NAV_TAKEOFF_LOCAL',
  // Vehicle following, i.e. this waypoint represents the position of a moving vehicle
  MAV_CMD_NAV_FOLLOW = 'MAV_CMD_NAV_FOLLOW',
  // Continue on the current course and climb/descend to specified altitude.  When the altitude is reached continue to the next command (i.e., don&#x27;t proceed to the next command until the desired altitude is reached.
  MAV_CMD_NAV_CONTINUE_AND_CHANGE_ALT = 'MAV_CMD_NAV_CONTINUE_AND_CHANGE_ALT',
  // Begin loiter at the specified Latitude and Longitude.  If Lat&#x3D;Lon&#x3D;0, then loiter at the current position.  Don&#x27;t consider the navigation command complete (don&#x27;t leave loiter) until the altitude has been reached. Additionally, if the Heading Required parameter is non-zero the aircraft will not leave the loiter until heading toward the next waypoint.
  MAV_CMD_NAV_LOITER_TO_ALT = 'MAV_CMD_NAV_LOITER_TO_ALT',
  // Begin following a target
  MAV_CMD_DO_FOLLOW = 'MAV_CMD_DO_FOLLOW',
  // Reposition the MAV after a follow target command has been sent
  MAV_CMD_DO_FOLLOW_REPOSITION = 'MAV_CMD_DO_FOLLOW_REPOSITION',
  // Start orbiting on the circumference of a circle defined by the parameters. Setting values to NaN/INT32_MAX (as appropriate) results in using defaults.
  MAV_CMD_DO_ORBIT = 'MAV_CMD_DO_ORBIT',
  // Sets the region of interest (ROI) for a sensor set or the vehicle itself. This can then be used by the vehicle&#x27;s control system to control the vehicle attitude and the attitude of various sensors such as cameras.
  MAV_CMD_NAV_ROI = 'MAV_CMD_NAV_ROI',
  // Control autonomous path planning on the MAV.
  MAV_CMD_NAV_PATHPLANNING = 'MAV_CMD_NAV_PATHPLANNING',
  // Navigate to waypoint using a spline path.
  MAV_CMD_NAV_SPLINE_WAYPOINT = 'MAV_CMD_NAV_SPLINE_WAYPOINT',
  // Takeoff from ground using VTOL mode, and transition to forward flight with specified heading. The command should be ignored by vehicles that dont support both VTOL and fixed-wing flight (multicopters, boats,etc.).
  MAV_CMD_NAV_VTOL_TAKEOFF = 'MAV_CMD_NAV_VTOL_TAKEOFF',
  // Land using VTOL mode
  MAV_CMD_NAV_VTOL_LAND = 'MAV_CMD_NAV_VTOL_LAND',
  // Hand control over to an external controller
  MAV_CMD_NAV_GUIDED_ENABLE = 'MAV_CMD_NAV_GUIDED_ENABLE',
  // Delay the next navigation command a number of seconds or until a specified time
  MAV_CMD_NAV_DELAY = 'MAV_CMD_NAV_DELAY',
  // Descend and place payload. Vehicle moves to specified location, descends until it detects a hanging payload has reached the ground, and then releases the payload. If ground is not detected before the reaching the maximum descent value (param1), the command will complete without releasing the payload.
  MAV_CMD_NAV_PAYLOAD_PLACE = 'MAV_CMD_NAV_PAYLOAD_PLACE',
  // NOP - This command is only used to mark the upper limit of the NAV/ACTION commands in the enumeration
  MAV_CMD_NAV_LAST = 'MAV_CMD_NAV_LAST',
  // Delay mission state machine.
  MAV_CMD_CONDITION_DELAY = 'MAV_CMD_CONDITION_DELAY',
  // Ascend/descend to target altitude at specified rate. Delay mission state machine until desired altitude reached.
  MAV_CMD_CONDITION_CHANGE_ALT = 'MAV_CMD_CONDITION_CHANGE_ALT',
  // Delay mission state machine until within desired distance of next NAV point.
  MAV_CMD_CONDITION_DISTANCE = 'MAV_CMD_CONDITION_DISTANCE',
  // Reach a certain target angle.
  MAV_CMD_CONDITION_YAW = 'MAV_CMD_CONDITION_YAW',
  // NOP - This command is only used to mark the upper limit of the CONDITION commands in the enumeration
  MAV_CMD_CONDITION_LAST = 'MAV_CMD_CONDITION_LAST',
  // Set system mode.
  MAV_CMD_DO_SET_MODE = 'MAV_CMD_DO_SET_MODE',
  // Jump to the desired command in the mission list.  Repeat this action only the specified number of times
  MAV_CMD_DO_JUMP = 'MAV_CMD_DO_JUMP',
  // Change speed and/or throttle set points. The value persists until it is overridden or there is a mode change
  MAV_CMD_DO_CHANGE_SPEED = 'MAV_CMD_DO_CHANGE_SPEED',
  // Sets the home position to either to the current position or a specified position.
  // The home position is the default position that the system will return to and land on.
  // The position is set automatically by the system during the takeoff (and may also be set using this command).
  // Note: the current home position may be emitted in a HOME_POSITION message on request (using MAV_CMD_REQUEST_MESSAGE with param1&#x3D;242).
  MAV_CMD_DO_SET_HOME = 'MAV_CMD_DO_SET_HOME',
  // Set a system parameter.  Caution!  Use of this command requires knowledge of the numeric enumeration value of the parameter.
  MAV_CMD_DO_SET_PARAMETER = 'MAV_CMD_DO_SET_PARAMETER',
  // Set a relay to a condition.
  MAV_CMD_DO_SET_RELAY = 'MAV_CMD_DO_SET_RELAY',
  // Cycle a relay on and off for a desired number of cycles with a desired period.
  MAV_CMD_DO_REPEAT_RELAY = 'MAV_CMD_DO_REPEAT_RELAY',
  // Set a servo to a desired PWM value.
  MAV_CMD_DO_SET_SERVO = 'MAV_CMD_DO_SET_SERVO',
  // Cycle a between its nominal setting and a desired PWM for a desired number of cycles with a desired period.
  MAV_CMD_DO_REPEAT_SERVO = 'MAV_CMD_DO_REPEAT_SERVO',
  // Terminate flight immediately.
  // Flight termination immediately and irreversibly terminates the current flight, returning the vehicle to ground.
  // The vehicle will ignore RC or other input until it has been power-cycled.
  // Termination may trigger safety measures, including: disabling motors and deployment of parachute on multicopters, and setting flight surfaces to initiate a landing pattern on fixed-wing).
  // On multicopters without a parachute it may trigger a crash landing.
  // Support for this command can be tested using the protocol bit: MAV_PROTOCOL_CAPABILITY_FLIGHT_TERMINATION.
  // Support for this command can also be tested by sending the command with param1&#x3D;0 (&lt; 0.5); the ACK should be either MAV_RESULT_FAILED or MAV_RESULT_UNSUPPORTED.
  MAV_CMD_DO_FLIGHTTERMINATION = 'MAV_CMD_DO_FLIGHTTERMINATION',
  // Change altitude set point.
  MAV_CMD_DO_CHANGE_ALTITUDE = 'MAV_CMD_DO_CHANGE_ALTITUDE',
  // Sets actuators (e.g. servos) to a desired value. The actuator numbers are mapped to specific outputs (e.g. on any MAIN or AUX PWM or UAVCAN) using a flight-stack specific mechanism (i.e. a parameter).
  MAV_CMD_DO_SET_ACTUATOR = 'MAV_CMD_DO_SET_ACTUATOR',
  // Mission item to specify the start of a failsafe/landing return-path segment (the end of the segment is the next MAV_CMD_DO_LAND_START item).
  // A vehicle that is using missions for landing (e.g. in a return mode) will join the mission on the closest path of the return-path segment (instead of MAV_CMD_DO_LAND_START or the nearest waypoint).
  // The main use case is to minimize the failsafe flight path in corridor missions, where the inbound/outbound paths are constrained (by geofences) to the same particular path.
  // The MAV_CMD_NAV_RETURN_PATH_START would be placed at the start of the return path.
  // If a failsafe occurs on the outbound path the vehicle will move to the nearest point on the return path (which is parallel for this kind of mission), effectively turning round and following the shortest path to landing.
  // If a failsafe occurs on the inbound path the vehicle is already on the return segment and will continue to landing.
  // The Latitude/Longitude/Altitude are optional, and may be set to 0 if not needed.
  // If specified, the item defines the waypoint at which the return segment starts.
  // If sent using as a command, the vehicle will perform a mission landing (using the land segment if defined) or reject the command if mission landings are not supported, or no mission landing is defined. When used as a command any position information in the command is ignored.
  MAV_CMD_DO_RETURN_PATH_START = 'MAV_CMD_DO_RETURN_PATH_START',
  // Mission item to mark the start of a mission landing pattern, or a command to land with a mission landing pattern.
  // When used in a mission, this is a marker for the start of a sequence of mission items that represent a landing pattern.
  // It should be followed by a navigation item that defines the first waypoint of the landing sequence.
  // The start marker positional params are used only for selecting what landing pattern to use if several are defined in the mission (the selected pattern will be the one with the marker position that is closest to the vehicle when a landing is commanded).
  // If the marker item position has zero-values for latitude, longitude, and altitude, then landing pattern selection is instead based on the position of the first waypoint in the landing sequence.
  // When sent as a command it triggers a landing using a mission landing pattern.
  // The location parameters are not used in this case, and should be set to 0.
  MAV_CMD_DO_LAND_START = 'MAV_CMD_DO_LAND_START',
  // Mission command to perform a landing from a rally point.
  MAV_CMD_DO_RALLY_LAND = 'MAV_CMD_DO_RALLY_LAND',
  // Mission command to safely abort an autonomous landing.
  MAV_CMD_DO_GO_AROUND = 'MAV_CMD_DO_GO_AROUND',
  // Reposition the vehicle to a specific WGS84 global position. This command is intended for guided commands (for missions use MAV_CMD_NAV_WAYPOINT instead).
  MAV_CMD_DO_REPOSITION = 'MAV_CMD_DO_REPOSITION',
  // If in a GPS controlled position mode, hold the current position or continue.
  MAV_CMD_DO_PAUSE_CONTINUE = 'MAV_CMD_DO_PAUSE_CONTINUE',
  // Set moving direction to forward or reverse.
  MAV_CMD_DO_SET_REVERSE = 'MAV_CMD_DO_SET_REVERSE',
  // Sets the region of interest (ROI) to a location. This can then be used by the vehicle&#x27;s control system to control the vehicle attitude and the attitude of various sensors such as cameras. This command can be sent to a gimbal manager but not to a gimbal device. A gimbal is not to react to this message.
  MAV_CMD_DO_SET_ROI_LOCATION = 'MAV_CMD_DO_SET_ROI_LOCATION',
  // Sets the region of interest (ROI) to be toward next waypoint, with optional pitch/roll/yaw offset. This can then be used by the vehicle&#x27;s control system to control the vehicle attitude and the attitude of various sensors such as cameras. This command can be sent to a gimbal manager but not to a gimbal device. A gimbal device is not to react to this message.
  MAV_CMD_DO_SET_ROI_WPNEXT_OFFSET = 'MAV_CMD_DO_SET_ROI_WPNEXT_OFFSET',
  // Cancels any previous ROI command returning the vehicle/sensors to default flight characteristics. This can then be used by the vehicle&#x27;s control system to control the vehicle attitude and the attitude of various sensors such as cameras. This command can be sent to a gimbal manager but not to a gimbal device. A gimbal device is not to react to this message. After this command the gimbal manager should go back to manual input if available, and otherwise assume a neutral position.
  MAV_CMD_DO_SET_ROI_NONE = 'MAV_CMD_DO_SET_ROI_NONE',
  // Mount tracks system with specified system ID. Determination of target vehicle position may be done with GLOBAL_POSITION_INT or any other means. This command can be sent to a gimbal manager but not to a gimbal device. A gimbal device is not to react to this message.
  MAV_CMD_DO_SET_ROI_SYSID = 'MAV_CMD_DO_SET_ROI_SYSID',
  // Control onboard camera system.
  MAV_CMD_DO_CONTROL_VIDEO = 'MAV_CMD_DO_CONTROL_VIDEO',
  // Sets the region of interest (ROI) for a sensor set or the vehicle itself. This can then be used by the vehicle&#x27;s control system to control the vehicle attitude and the attitude of various sensors such as cameras.
  MAV_CMD_DO_SET_ROI = 'MAV_CMD_DO_SET_ROI',
  // Configure digital camera. This is a fallback message for systems that have not yet implemented PARAM_EXT_XXX messages and camera definition files (see https://mavlink.io/en/services/camera_def.html ).
  MAV_CMD_DO_DIGICAM_CONFIGURE = 'MAV_CMD_DO_DIGICAM_CONFIGURE',
  // Control digital camera. This is a fallback message for systems that have not yet implemented PARAM_EXT_XXX messages and camera definition files (see https://mavlink.io/en/services/camera_def.html ).
  MAV_CMD_DO_DIGICAM_CONTROL = 'MAV_CMD_DO_DIGICAM_CONTROL',
  // Mission command to configure a camera or antenna mount
  MAV_CMD_DO_MOUNT_CONFIGURE = 'MAV_CMD_DO_MOUNT_CONFIGURE',
  // Mission command to control a camera or antenna mount
  MAV_CMD_DO_MOUNT_CONTROL = 'MAV_CMD_DO_MOUNT_CONTROL',
  // Mission command to set camera trigger distance for this flight. The camera is triggered each time this distance is exceeded. This command can also be used to set the shutter integration time for the camera.
  MAV_CMD_DO_SET_CAM_TRIGG_DIST = 'MAV_CMD_DO_SET_CAM_TRIGG_DIST',
  // Enable the geofence.
  // This can be used in a mission or via the command protocol.
  // The persistence/lifetime of the setting is undefined.
  // Depending on flight stack implementation it may persist until superseded, or it may revert to a system default at the end of a mission.
  // Flight stacks typically reset the setting to system defaults on reboot.
  MAV_CMD_DO_FENCE_ENABLE = 'MAV_CMD_DO_FENCE_ENABLE',
  // Mission item/command to release a parachute or enable/disable auto release.
  MAV_CMD_DO_PARACHUTE = 'MAV_CMD_DO_PARACHUTE',
  // Command to perform motor test.
  MAV_CMD_DO_MOTOR_TEST = 'MAV_CMD_DO_MOTOR_TEST',
  // Change to/from inverted flight.
  MAV_CMD_DO_INVERTED_FLIGHT = 'MAV_CMD_DO_INVERTED_FLIGHT',
  // Mission command to operate a gripper.
  MAV_CMD_DO_GRIPPER = 'MAV_CMD_DO_GRIPPER',
  // Enable/disable autotune.
  MAV_CMD_DO_AUTOTUNE_ENABLE = 'MAV_CMD_DO_AUTOTUNE_ENABLE',
  // Sets a desired vehicle turn angle and speed change.
  MAV_CMD_NAV_SET_YAW_SPEED = 'MAV_CMD_NAV_SET_YAW_SPEED',
  // Mission command to set camera trigger interval for this flight. If triggering is enabled, the camera is triggered each time this interval expires. This command can also be used to set the shutter integration time for the camera.
  MAV_CMD_DO_SET_CAM_TRIGG_INTERVAL = 'MAV_CMD_DO_SET_CAM_TRIGG_INTERVAL',
  // Mission command to control a camera or antenna mount, using a quaternion as reference.
  MAV_CMD_DO_MOUNT_CONTROL_QUAT = 'MAV_CMD_DO_MOUNT_CONTROL_QUAT',
  // set id of master controller
  MAV_CMD_DO_GUIDED_MASTER = 'MAV_CMD_DO_GUIDED_MASTER',
  // Set limits for external control
  MAV_CMD_DO_GUIDED_LIMITS = 'MAV_CMD_DO_GUIDED_LIMITS',
  // Control vehicle engine. This is interpreted by the vehicles engine controller to change the target engine state. It is intended for vehicles with internal combustion engines
  MAV_CMD_DO_ENGINE_CONTROL = 'MAV_CMD_DO_ENGINE_CONTROL',
  // Set the mission item with sequence number seq as the current item and emit MISSION_CURRENT (whether or not the mission number changed).
  // If a mission is currently being executed, the system will continue to this new mission item on the shortest path, skipping any intermediate mission items.
  // Note that mission jump repeat counters are not reset unless param2 is set (see MAV_CMD_DO_JUMP param2).
  // This command may trigger a mission state-machine change on some systems: for example from MISSION_STATE_NOT_STARTED or MISSION_STATE_PAUSED to MISSION_STATE_ACTIVE.
  // If the system is in mission mode, on those systems this command might therefore start, restart or resume the mission.
  // If the system is not in mission mode this command must not trigger a switch to mission mode.
  // The mission may be &quot;reset&quot; using param2.
  // Resetting sets jump counters to initial values (to reset counters without changing the current mission item set the param1 to &#x60;-1&#x60;).
  // Resetting also explicitly changes a mission state of MISSION_STATE_COMPLETE to MISSION_STATE_PAUSED or MISSION_STATE_ACTIVE, potentially allowing it to resume when it is (next) in a mission mode.
  // The command will ACK with MAV_RESULT_FAILED if the sequence number is out of range (including if there is no mission item).
  MAV_CMD_DO_SET_MISSION_CURRENT = 'MAV_CMD_DO_SET_MISSION_CURRENT',
  // NOP - This command is only used to mark the upper limit of the DO commands in the enumeration
  MAV_CMD_DO_LAST = 'MAV_CMD_DO_LAST',
  // Trigger calibration. This command will be only accepted if in pre-flight mode. Except for Temperature Calibration, only one sensor should be set in a single message and all others should be zero.
  MAV_CMD_PREFLIGHT_CALIBRATION = 'MAV_CMD_PREFLIGHT_CALIBRATION',
  // Set sensor offsets. This command will be only accepted if in pre-flight mode.
  MAV_CMD_PREFLIGHT_SET_SENSOR_OFFSETS = 'MAV_CMD_PREFLIGHT_SET_SENSOR_OFFSETS',
  // Trigger UAVCAN configuration (actuator ID assignment and direction mapping). Note that this maps to the legacy UAVCAN v0 function UAVCAN_ENUMERATE, which is intended to be executed just once during initial vehicle configuration (it is not a normal pre-flight command and has been poorly named).
  MAV_CMD_PREFLIGHT_UAVCAN = 'MAV_CMD_PREFLIGHT_UAVCAN',
  // Request storage of different parameter values and logs. This command will be only accepted if in pre-flight mode.
  MAV_CMD_PREFLIGHT_STORAGE = 'MAV_CMD_PREFLIGHT_STORAGE',
  // Request the reboot or shutdown of system components.
  MAV_CMD_PREFLIGHT_REBOOT_SHUTDOWN = 'MAV_CMD_PREFLIGHT_REBOOT_SHUTDOWN',
  // Override current mission with command to pause mission, pause mission and move to position, continue/resume mission. When param 1 indicates that the mission is paused (MAV_GOTO_DO_HOLD), param 2 defines whether it holds in place or moves to another position.
  MAV_CMD_OVERRIDE_GOTO = 'MAV_CMD_OVERRIDE_GOTO',
  // Mission command to set a Camera Auto Mount Pivoting Oblique Survey (Replaces CAM_TRIGG_DIST for this purpose). The camera is triggered each time this distance is exceeded, then the mount moves to the next position. Params 4~6 set-up the angle limits and number of positions for oblique survey, where mount-enabled vehicles automatically roll the camera between shots to emulate an oblique camera setup (providing an increased HFOV). This command can also be used to set the shutter integration time for the camera.
  MAV_CMD_OBLIQUE_SURVEY = 'MAV_CMD_OBLIQUE_SURVEY',
  // Enable the specified standard MAVLink mode.
  // If the specified mode is not supported, the vehicle should ACK with MAV_RESULT_FAILED.
  // See https://mavlink.io/en/services/standard_modes.html
  MAV_CMD_DO_SET_STANDARD_MODE = 'MAV_CMD_DO_SET_STANDARD_MODE',
  // start running a mission
  MAV_CMD_MISSION_START = 'MAV_CMD_MISSION_START',
  // Actuator testing command. This is similar to MAV_CMD_DO_MOTOR_TEST but operates on the level of output functions, i.e. it is possible to test Motor1 independent from which output it is configured on. Autopilots must NACK this command with MAV_RESULT_TEMPORARILY_REJECTED while armed.
  MAV_CMD_ACTUATOR_TEST = 'MAV_CMD_ACTUATOR_TEST',
  // Actuator configuration command.
  MAV_CMD_CONFIGURE_ACTUATOR = 'MAV_CMD_CONFIGURE_ACTUATOR',
  // Arms / Disarms a component
  MAV_CMD_COMPONENT_ARM_DISARM = 'MAV_CMD_COMPONENT_ARM_DISARM',
  // Instructs a target system to run pre-arm checks.
  // This allows preflight checks to be run on demand, which may be useful on systems that normally run them at low rate, or which do not trigger checks when the armable state might have changed.
  // This command should return MAV_RESULT_ACCEPTED if it will run the checks.
  // The results of the checks are usually then reported in SYS_STATUS messages (this is system-specific).
  // The command should return MAV_RESULT_TEMPORARILY_REJECTED if the system is already armed.
  MAV_CMD_RUN_PREARM_CHECKS = 'MAV_CMD_RUN_PREARM_CHECKS',
  // Turns illuminators ON/OFF. An illuminator is a light source that is used for lighting up dark areas external to the system: e.g. a torch or searchlight (as opposed to a light source for illuminating the system itself, e.g. an indicator light).
  MAV_CMD_ILLUMINATOR_ON_OFF = 'MAV_CMD_ILLUMINATOR_ON_OFF',
  // Configures illuminator settings. An illuminator is a light source that is used for lighting up dark areas external to the system: e.g. a torch or searchlight (as opposed to a light source for illuminating the system itself, e.g. an indicator light).
  MAV_CMD_DO_ILLUMINATOR_CONFIGURE = 'MAV_CMD_DO_ILLUMINATOR_CONFIGURE',
  // Request the home position from the vehicle.
  // The vehicle will ACK the command and then emit the HOME_POSITION message.
  MAV_CMD_GET_HOME_POSITION = 'MAV_CMD_GET_HOME_POSITION',
  // Inject artificial failure for testing purposes. Note that autopilots should implement an additional protection before accepting this command such as a specific param setting.
  MAV_CMD_INJECT_FAILURE = 'MAV_CMD_INJECT_FAILURE',
  // Starts receiver pairing.
  MAV_CMD_START_RX_PAIR = 'MAV_CMD_START_RX_PAIR',
  // Request the interval between messages for a particular MAVLink message ID.
  // The receiver should ACK the command and then emit its response in a MESSAGE_INTERVAL message.
  MAV_CMD_GET_MESSAGE_INTERVAL = 'MAV_CMD_GET_MESSAGE_INTERVAL',
  // Set the interval between messages for a particular MAVLink message ID. This interface replaces REQUEST_DATA_STREAM.
  MAV_CMD_SET_MESSAGE_INTERVAL = 'MAV_CMD_SET_MESSAGE_INTERVAL',
  // Request the target system(s) emit a single instance of a specified message (i.e. a &quot;one-shot&quot; version of MAV_CMD_SET_MESSAGE_INTERVAL).
  MAV_CMD_REQUEST_MESSAGE = 'MAV_CMD_REQUEST_MESSAGE',
  // Request MAVLink protocol version compatibility. All receivers should ACK the command and then emit their capabilities in an PROTOCOL_VERSION message
  MAV_CMD_REQUEST_PROTOCOL_VERSION = 'MAV_CMD_REQUEST_PROTOCOL_VERSION',
  // Request autopilot capabilities. The receiver should ACK the command and then emit its capabilities in an AUTOPILOT_VERSION message
  MAV_CMD_REQUEST_AUTOPILOT_CAPABILITIES = 'MAV_CMD_REQUEST_AUTOPILOT_CAPABILITIES',
  // Request camera information (CAMERA_INFORMATION).
  MAV_CMD_REQUEST_CAMERA_INFORMATION = 'MAV_CMD_REQUEST_CAMERA_INFORMATION',
  // Request camera settings (CAMERA_SETTINGS).
  MAV_CMD_REQUEST_CAMERA_SETTINGS = 'MAV_CMD_REQUEST_CAMERA_SETTINGS',
  // Request storage information (STORAGE_INFORMATION). Use the command&#x27;s target_component to target a specific component&#x27;s storage.
  MAV_CMD_REQUEST_STORAGE_INFORMATION = 'MAV_CMD_REQUEST_STORAGE_INFORMATION',
  // Format a storage medium. Once format is complete, a STORAGE_INFORMATION message is sent. Use the command&#x27;s target_component to target a specific component&#x27;s storage.
  MAV_CMD_STORAGE_FORMAT = 'MAV_CMD_STORAGE_FORMAT',
  // Request camera capture status (CAMERA_CAPTURE_STATUS)
  MAV_CMD_REQUEST_CAMERA_CAPTURE_STATUS = 'MAV_CMD_REQUEST_CAMERA_CAPTURE_STATUS',
  // Request flight information (FLIGHT_INFORMATION)
  MAV_CMD_REQUEST_FLIGHT_INFORMATION = 'MAV_CMD_REQUEST_FLIGHT_INFORMATION',
  // Reset all camera settings to Factory Default
  MAV_CMD_RESET_CAMERA_SETTINGS = 'MAV_CMD_RESET_CAMERA_SETTINGS',
  // Set camera running mode. Use NaN for reserved values. GCS will send a MAV_CMD_REQUEST_VIDEO_STREAM_STATUS command after a mode change if the camera supports video streaming.
  MAV_CMD_SET_CAMERA_MODE = 'MAV_CMD_SET_CAMERA_MODE',
  // Set camera zoom. Camera must respond with a CAMERA_SETTINGS message (on success).
  MAV_CMD_SET_CAMERA_ZOOM = 'MAV_CMD_SET_CAMERA_ZOOM',
  // Set camera focus. Camera must respond with a CAMERA_SETTINGS message (on success).
  MAV_CMD_SET_CAMERA_FOCUS = 'MAV_CMD_SET_CAMERA_FOCUS',
  // Set that a particular storage is the preferred location for saving photos, videos, and/or other media (e.g. to set that an SD card is used for storing videos).
  // There can only be one preferred save location for each particular media type: setting a media usage flag will clear/reset that same flag if set on any other storage.
  // If no flag is set the system should use its default storage.
  // A target system can choose to always use default storage, in which case it should ACK the command with MAV_RESULT_UNSUPPORTED.
  // A target system can choose to not allow a particular storage to be set as preferred storage, in which case it should ACK the command with MAV_RESULT_DENIED.
  MAV_CMD_SET_STORAGE_USAGE = 'MAV_CMD_SET_STORAGE_USAGE',
  // Set camera source. Changes the camera&#x27;s active sources on cameras with multiple image sensors.
  MAV_CMD_SET_CAMERA_SOURCE = 'MAV_CMD_SET_CAMERA_SOURCE',
  // Tagged jump target. Can be jumped to with MAV_CMD_DO_JUMP_TAG.
  MAV_CMD_JUMP_TAG = 'MAV_CMD_JUMP_TAG',
  // Jump to the matching tag in the mission list. Repeat this action for the specified number of times. A mission should contain a single matching tag for each jump. If this is not the case then a jump to a missing tag should complete the mission, and a jump where there are multiple matching tags should always select the one with the lowest mission sequence number.
  MAV_CMD_DO_JUMP_TAG = 'MAV_CMD_DO_JUMP_TAG',
  // Set gimbal manager pitch/yaw setpoints (low rate command). It is possible to set combinations of the values below. E.g. an angle as well as a desired angular rate can be used to get to this angle at a certain angular rate, or an angular rate only will result in continuous turning. NaN is to be used to signal unset. Note: only the gimbal manager will react to this command - it will be ignored by a gimbal device. Use GIMBAL_MANAGER_SET_PITCHYAW if you need to stream pitch/yaw setpoints at higher rate.
  MAV_CMD_DO_GIMBAL_MANAGER_PITCHYAW = 'MAV_CMD_DO_GIMBAL_MANAGER_PITCHYAW',
  // Gimbal configuration to set which sysid/compid is in primary and secondary control.
  MAV_CMD_DO_GIMBAL_MANAGER_CONFIGURE = 'MAV_CMD_DO_GIMBAL_MANAGER_CONFIGURE',
  // Start image capture sequence. CAMERA_IMAGE_CAPTURED must be emitted after each capture.
  // Param1 (id) may be used to specify the target camera: 0: all cameras, 1 to 6: autopilot-connected cameras, 7-255: MAVLink camera component ID.
  // It is needed in order to target specific cameras connected to the autopilot, or specific sensors in a multi-sensor camera (neither of which have a distinct MAVLink component ID).
  // It is also needed to specify the target camera in missions.
  // When used in a mission, an autopilot should execute the MAV_CMD for a specified local camera (param1 &#x3D; 1-6), or resend it as a command if it is intended for a MAVLink camera (param1 &#x3D; 7 - 255), setting the command&#x27;s target_component as the param1 value (and setting param1 in the command to zero).
  // If the param1 is 0 the autopilot should do both.
  // When sent in a command the target MAVLink address is set using target_component.
  // If addressed specifically to an autopilot: param1 should be used in the same way as it is for missions (though command should NACK with MAV_RESULT_DENIED if a specified local camera does not exist).
  // If addressed to a MAVLink camera, param 1 can be used to address all cameras (0), or to separately address 1 to 7 individual sensors. Other values should be NACKed with MAV_RESULT_DENIED.
  // If the command is broadcast (target_component is 0) then param 1 should be set to 0 (any other value should be NACKED with MAV_RESULT_DENIED). An autopilot would trigger any local cameras and forward the command to all channels.
  MAV_CMD_IMAGE_START_CAPTURE = 'MAV_CMD_IMAGE_START_CAPTURE',
  // Stop image capture sequence.
  // Param1 (id) may be used to specify the target camera: 0: all cameras, 1 to 6: autopilot-connected cameras, 7-255: MAVLink camera component ID.
  // It is needed in order to target specific cameras connected to the autopilot, or specific sensors in a multi-sensor camera (neither of which have a distinct MAVLink component ID).
  // It is also needed to specify the target camera in missions.
  // When used in a mission, an autopilot should execute the MAV_CMD for a specified local camera (param1 &#x3D; 1-6), or resend it as a command if it is intended for a MAVLink camera (param1 &#x3D; 7 - 255), setting the command&#x27;s target_component as the param1 value (and setting param1 in the command to zero).
  // If the param1 is 0 the autopilot should do both.
  // When sent in a command the target MAVLink address is set using target_component.
  // If addressed specifically to an autopilot: param1 should be used in the same way as it is for missions (though command should NACK with MAV_RESULT_DENIED if a specified local camera does not exist).
  // If addressed to a MAVLink camera, param1 can be used to address all cameras (0), or to separately address 1 to 7 individual sensors. Other values should be NACKed with MAV_RESULT_DENIED.
  // If the command is broadcast (target_component is 0) then param 1 should be set to 0 (any other value should be NACKED with MAV_RESULT_DENIED). An autopilot would trigger any local cameras and forward the command to all channels.
  MAV_CMD_IMAGE_STOP_CAPTURE = 'MAV_CMD_IMAGE_STOP_CAPTURE',
  // Re-request a CAMERA_IMAGE_CAPTURED message.
  MAV_CMD_REQUEST_CAMERA_IMAGE_CAPTURE = 'MAV_CMD_REQUEST_CAMERA_IMAGE_CAPTURE',
  // Enable or disable on-board camera triggering system.
  MAV_CMD_DO_TRIGGER_CONTROL = 'MAV_CMD_DO_TRIGGER_CONTROL',
  // If the camera supports point visual tracking (CAMERA_CAP_FLAGS_HAS_TRACKING_POINT is set), this command allows to initiate the tracking.
  MAV_CMD_CAMERA_TRACK_POINT = 'MAV_CMD_CAMERA_TRACK_POINT',
  // If the camera supports rectangle visual tracking (CAMERA_CAP_FLAGS_HAS_TRACKING_RECTANGLE is set), this command allows to initiate the tracking.
  MAV_CMD_CAMERA_TRACK_RECTANGLE = 'MAV_CMD_CAMERA_TRACK_RECTANGLE',
  // Stops ongoing tracking.
  MAV_CMD_CAMERA_STOP_TRACKING = 'MAV_CMD_CAMERA_STOP_TRACKING',
  // Starts video capture (recording).
  MAV_CMD_VIDEO_START_CAPTURE = 'MAV_CMD_VIDEO_START_CAPTURE',
  // Stop the current video capture (recording).
  MAV_CMD_VIDEO_STOP_CAPTURE = 'MAV_CMD_VIDEO_STOP_CAPTURE',
  // Start video streaming
  MAV_CMD_VIDEO_START_STREAMING = 'MAV_CMD_VIDEO_START_STREAMING',
  // Stop the given video stream
  MAV_CMD_VIDEO_STOP_STREAMING = 'MAV_CMD_VIDEO_STOP_STREAMING',
  // Request video stream information (VIDEO_STREAM_INFORMATION)
  MAV_CMD_REQUEST_VIDEO_STREAM_INFORMATION = 'MAV_CMD_REQUEST_VIDEO_STREAM_INFORMATION',
  // Request video stream status (VIDEO_STREAM_STATUS)
  MAV_CMD_REQUEST_VIDEO_STREAM_STATUS = 'MAV_CMD_REQUEST_VIDEO_STREAM_STATUS',
  // Request to start streaming logging data over MAVLink (see also LOGGING_DATA message)
  MAV_CMD_LOGGING_START = 'MAV_CMD_LOGGING_START',
  // Request to stop streaming log data over MAVLink
  MAV_CMD_LOGGING_STOP = 'MAV_CMD_LOGGING_STOP',
  MAV_CMD_AIRFRAME_CONFIGURATION = 'MAV_CMD_AIRFRAME_CONFIGURATION',
  // Request to start/stop transmitting over the high latency telemetry
  MAV_CMD_CONTROL_HIGH_LATENCY = 'MAV_CMD_CONTROL_HIGH_LATENCY',
  // Create a panorama at the current position
  MAV_CMD_PANORAMA_CREATE = 'MAV_CMD_PANORAMA_CREATE',
  // Request VTOL transition
  MAV_CMD_DO_VTOL_TRANSITION = 'MAV_CMD_DO_VTOL_TRANSITION',
  // Request authorization to arm the vehicle to a external entity, the arm authorizer is responsible to request all data that is needs from the vehicle before authorize or deny the request.
  // If approved the COMMAND_ACK message progress field should be set with period of time that this authorization is valid in seconds.
  // If the authorization is denied COMMAND_ACK.result_param2 should be set with one of the reasons in ARM_AUTH_DENIED_REASON.
  MAV_CMD_ARM_AUTHORIZATION_REQUEST = 'MAV_CMD_ARM_AUTHORIZATION_REQUEST',
  // This command sets the submode to standard guided when vehicle is in guided mode. The vehicle holds position and altitude and the user can input the desired velocities along all three axes.
  MAV_CMD_SET_GUIDED_SUBMODE_STANDARD = 'MAV_CMD_SET_GUIDED_SUBMODE_STANDARD',
  // This command sets submode circle when vehicle is in guided mode. Vehicle flies along a circle facing the center of the circle. The user can input the velocity along the circle and change the radius. If no input is given the vehicle will hold position.
  MAV_CMD_SET_GUIDED_SUBMODE_CIRCLE = 'MAV_CMD_SET_GUIDED_SUBMODE_CIRCLE',
  // Delay mission state machine until gate has been reached.
  MAV_CMD_CONDITION_GATE = 'MAV_CMD_CONDITION_GATE',
  // Fence return point (there can only be one such point in a geofence definition). If rally points are supported they should be used instead.
  MAV_CMD_NAV_FENCE_RETURN_POINT = 'MAV_CMD_NAV_FENCE_RETURN_POINT',
  // Fence vertex for an inclusion polygon (the polygon must not be self-intersecting). The vehicle must stay within this area. Minimum of 3 vertices required.
  // The vertices for a polygon must be sent sequentially, each with param1 set to the total number of vertices in the polygon.
  MAV_CMD_NAV_FENCE_POLYGON_VERTEX_INCLUSION = 'MAV_CMD_NAV_FENCE_POLYGON_VERTEX_INCLUSION',
  // Fence vertex for an exclusion polygon (the polygon must not be self-intersecting). The vehicle must stay outside this area. Minimum of 3 vertices required.
  // The vertices for a polygon must be sent sequentially, each with param1 set to the total number of vertices in the polygon.
  MAV_CMD_NAV_FENCE_POLYGON_VERTEX_EXCLUSION = 'MAV_CMD_NAV_FENCE_POLYGON_VERTEX_EXCLUSION',
  // Circular fence area. The vehicle must stay inside this area.
  MAV_CMD_NAV_FENCE_CIRCLE_INCLUSION = 'MAV_CMD_NAV_FENCE_CIRCLE_INCLUSION',
  // Circular fence area. The vehicle must stay outside this area.
  MAV_CMD_NAV_FENCE_CIRCLE_EXCLUSION = 'MAV_CMD_NAV_FENCE_CIRCLE_EXCLUSION',
  // Rally point. You can have multiple rally points defined.
  MAV_CMD_NAV_RALLY_POINT = 'MAV_CMD_NAV_RALLY_POINT',
  // Commands the vehicle to respond with a sequence of messages UAVCAN_NODE_INFO, one message per every UAVCAN node that is online. Note that some of the response messages can be lost, which the receiver can detect easily by checking whether every received UAVCAN_NODE_STATUS has a matching message UAVCAN_NODE_INFO received earlier; if not, this command should be sent again in order to request re-transmission of the node information messages.
  MAV_CMD_UAVCAN_GET_NODE_INFO = 'MAV_CMD_UAVCAN_GET_NODE_INFO',
  // Change state of safety switch.
  MAV_CMD_DO_SET_SAFETY_SWITCH_STATE = 'MAV_CMD_DO_SET_SAFETY_SWITCH_STATE',
  // Trigger the start of an ADSB-out IDENT. This should only be used when requested to do so by an Air Traffic Controller in controlled airspace. This starts the IDENT which is then typically held for 18 seconds by the hardware per the Mode A, C, and S transponder spec.
  MAV_CMD_DO_ADSB_OUT_IDENT = 'MAV_CMD_DO_ADSB_OUT_IDENT',
  // Deploy payload on a Lat / Lon / Alt position. This includes the navigation to reach the required release position and velocity.
  MAV_CMD_PAYLOAD_PREPARE_DEPLOY = 'MAV_CMD_PAYLOAD_PREPARE_DEPLOY',
  // Control the payload deployment.
  MAV_CMD_PAYLOAD_CONTROL_DEPLOY = 'MAV_CMD_PAYLOAD_CONTROL_DEPLOY',
  // Magnetometer calibration based on provided known yaw. This allows for fast calibration using WMM field tables in the vehicle, given only the known yaw of the vehicle. If Latitude and longitude are both zero then use the current vehicle location.
  MAV_CMD_FIXED_MAG_CAL_YAW = 'MAV_CMD_FIXED_MAG_CAL_YAW',
  // Command to operate winch.
  MAV_CMD_DO_WINCH = 'MAV_CMD_DO_WINCH',
  // Provide an external position estimate for use when dead-reckoning. This is meant to be used for occasional position resets that may be provided by a external system such as a remote pilot using landmarks over a video link.
  MAV_CMD_EXTERNAL_POSITION_ESTIMATE = 'MAV_CMD_EXTERNAL_POSITION_ESTIMATE',
  // User defined waypoint item. Ground Station will show the Vehicle as flying through this item.
  MAV_CMD_WAYPOINT_USER_1 = 'MAV_CMD_WAYPOINT_USER_1',
  // User defined waypoint item. Ground Station will show the Vehicle as flying through this item.
  MAV_CMD_WAYPOINT_USER_2 = 'MAV_CMD_WAYPOINT_USER_2',
  // User defined waypoint item. Ground Station will show the Vehicle as flying through this item.
  MAV_CMD_WAYPOINT_USER_3 = 'MAV_CMD_WAYPOINT_USER_3',
  // User defined waypoint item. Ground Station will show the Vehicle as flying through this item.
  MAV_CMD_WAYPOINT_USER_4 = 'MAV_CMD_WAYPOINT_USER_4',
  // User defined waypoint item. Ground Station will show the Vehicle as flying through this item.
  MAV_CMD_WAYPOINT_USER_5 = 'MAV_CMD_WAYPOINT_USER_5',
  // User defined spatial item. Ground Station will not show the Vehicle as flying through this item. Example: ROI item.
  MAV_CMD_SPATIAL_USER_1 = 'MAV_CMD_SPATIAL_USER_1',
  // User defined spatial item. Ground Station will not show the Vehicle as flying through this item. Example: ROI item.
  MAV_CMD_SPATIAL_USER_2 = 'MAV_CMD_SPATIAL_USER_2',
  // User defined spatial item. Ground Station will not show the Vehicle as flying through this item. Example: ROI item.
  MAV_CMD_SPATIAL_USER_3 = 'MAV_CMD_SPATIAL_USER_3',
  // User defined spatial item. Ground Station will not show the Vehicle as flying through this item. Example: ROI item.
  MAV_CMD_SPATIAL_USER_4 = 'MAV_CMD_SPATIAL_USER_4',
  // User defined spatial item. Ground Station will not show the Vehicle as flying through this item. Example: ROI item.
  MAV_CMD_SPATIAL_USER_5 = 'MAV_CMD_SPATIAL_USER_5',
  // User defined command. Ground Station will not show the Vehicle as flying through this item. Example: MAV_CMD_DO_SET_PARAMETER item.
  MAV_CMD_USER_1 = 'MAV_CMD_USER_1',
  // User defined command. Ground Station will not show the Vehicle as flying through this item. Example: MAV_CMD_DO_SET_PARAMETER item.
  MAV_CMD_USER_2 = 'MAV_CMD_USER_2',
  // User defined command. Ground Station will not show the Vehicle as flying through this item. Example: MAV_CMD_DO_SET_PARAMETER item.
  MAV_CMD_USER_3 = 'MAV_CMD_USER_3',
  // User defined command. Ground Station will not show the Vehicle as flying through this item. Example: MAV_CMD_DO_SET_PARAMETER item.
  MAV_CMD_USER_4 = 'MAV_CMD_USER_4',
  // User defined command. Ground Station will not show the Vehicle as flying through this item. Example: MAV_CMD_DO_SET_PARAMETER item.
  MAV_CMD_USER_5 = 'MAV_CMD_USER_5',
  // Request forwarding of CAN packets from the given CAN bus to this component. CAN Frames are sent using CAN_FRAME and CANFD_FRAME messages
  MAV_CMD_CAN_FORWARD = 'MAV_CMD_CAN_FORWARD',
}

export type MAV_CMD =
  | 'MAV_CMD_NAV_WAYPOINT' // Navigate to waypoint. This is intended for use in missions (for guided commands outside of missions use MAV_CMD_DO_REPOSITION).
  | 'MAV_CMD_NAV_LOITER_UNLIM' // Loiter around this waypoint an unlimited amount of time
  | 'MAV_CMD_NAV_LOITER_TURNS' // Loiter around this waypoint for X turns
  | 'MAV_CMD_NAV_LOITER_TIME' // Loiter at the specified latitude, longitude and altitude for a certain amount of time. Multicopter vehicles stop at the point (within a vehicle-specific acceptance radius). Forward-only moving vehicles (e.g. fixed-wing) circle the point with the specified radius/direction. If the Heading Required parameter (2) is non-zero forward moving aircraft will only leave the loiter circle once heading towards the next waypoint.
  | 'MAV_CMD_NAV_RETURN_TO_LAUNCH' // Return to launch location
  | 'MAV_CMD_NAV_LAND' // Land at location.
  | 'MAV_CMD_NAV_TAKEOFF' // Takeoff from ground / hand. Vehicles that support multiple takeoff modes (e.g. VTOL quadplane) should take off using the currently configured mode.
  | 'MAV_CMD_NAV_LAND_LOCAL' // Land at local position (local frame only)
  | 'MAV_CMD_NAV_TAKEOFF_LOCAL' // Takeoff from local position (local frame only)
  | 'MAV_CMD_NAV_FOLLOW' // Vehicle following, i.e. this waypoint represents the position of a moving vehicle
  | 'MAV_CMD_NAV_CONTINUE_AND_CHANGE_ALT' // Continue on the current course and climb/descend to specified altitude.  When the altitude is reached continue to the next command (i.e., don&#x27;t proceed to the next command until the desired altitude is reached.
  | 'MAV_CMD_NAV_LOITER_TO_ALT' // Begin loiter at the specified Latitude and Longitude.  If Lat&#x3D;Lon&#x3D;0, then loiter at the current position.  Don&#x27;t consider the navigation command complete (don&#x27;t leave loiter) until the altitude has been reached. Additionally, if the Heading Required parameter is non-zero the aircraft will not leave the loiter until heading toward the next waypoint.
  | 'MAV_CMD_DO_FOLLOW' // Begin following a target
  | 'MAV_CMD_DO_FOLLOW_REPOSITION' // Reposition the MAV after a follow target command has been sent
  | 'MAV_CMD_DO_ORBIT' // Start orbiting on the circumference of a circle defined by the parameters. Setting values to NaN/INT32_MAX (as appropriate) results in using defaults.
  | 'MAV_CMD_NAV_ROI' // Sets the region of interest (ROI) for a sensor set or the vehicle itself. This can then be used by the vehicle&#x27;s control system to control the vehicle attitude and the attitude of various sensors such as cameras.
  | 'MAV_CMD_NAV_PATHPLANNING' // Control autonomous path planning on the MAV.
  | 'MAV_CMD_NAV_SPLINE_WAYPOINT' // Navigate to waypoint using a spline path.
  | 'MAV_CMD_NAV_VTOL_TAKEOFF' // Takeoff from ground using VTOL mode, and transition to forward flight with specified heading. The command should be ignored by vehicles that dont support both VTOL and fixed-wing flight (multicopters, boats,etc.).
  | 'MAV_CMD_NAV_VTOL_LAND' // Land using VTOL mode
  | 'MAV_CMD_NAV_GUIDED_ENABLE' // Hand control over to an external controller
  | 'MAV_CMD_NAV_DELAY' // Delay the next navigation command a number of seconds or until a specified time
  | 'MAV_CMD_NAV_PAYLOAD_PLACE' // Descend and place payload. Vehicle moves to specified location, descends until it detects a hanging payload has reached the ground, and then releases the payload. If ground is not detected before the reaching the maximum descent value (param1), the command will complete without releasing the payload.
  | 'MAV_CMD_NAV_LAST' // NOP - This command is only used to mark the upper limit of the NAV/ACTION commands in the enumeration
  | 'MAV_CMD_CONDITION_DELAY' // Delay mission state machine.
  | 'MAV_CMD_CONDITION_CHANGE_ALT' // Ascend/descend to target altitude at specified rate. Delay mission state machine until desired altitude reached.
  | 'MAV_CMD_CONDITION_DISTANCE' // Delay mission state machine until within desired distance of next NAV point.
  | 'MAV_CMD_CONDITION_YAW' // Reach a certain target angle.
  | 'MAV_CMD_CONDITION_LAST' // NOP - This command is only used to mark the upper limit of the CONDITION commands in the enumeration
  | 'MAV_CMD_DO_SET_MODE' // Set system mode.
  | 'MAV_CMD_DO_JUMP' // Jump to the desired command in the mission list.  Repeat this action only the specified number of times
  | 'MAV_CMD_DO_CHANGE_SPEED' // Change speed and/or throttle set points. The value persists until it is overridden or there is a mode change
  | 'MAV_CMD_DO_SET_HOME' // Sets the home position to either to the current position or a specified position. The home position is the default position that the system will return to and land on. The position is set automatically by the system during the takeoff (and may also be set using this command). Note: the current home position may be emitted in a HOME_POSITION message on request (using MAV_CMD_REQUEST_MESSAGE with param1&#x3D;242).
  | 'MAV_CMD_DO_SET_PARAMETER' // Set a system parameter.  Caution!  Use of this command requires knowledge of the numeric enumeration value of the parameter.
  | 'MAV_CMD_DO_SET_RELAY' // Set a relay to a condition.
  | 'MAV_CMD_DO_REPEAT_RELAY' // Cycle a relay on and off for a desired number of cycles with a desired period.
  | 'MAV_CMD_DO_SET_SERVO' // Set a servo to a desired PWM value.
  | 'MAV_CMD_DO_REPEAT_SERVO' // Cycle a between its nominal setting and a desired PWM for a desired number of cycles with a desired period.
  | 'MAV_CMD_DO_FLIGHTTERMINATION' // Terminate flight immediately. Flight termination immediately and irreversibly terminates the current flight, returning the vehicle to ground. The vehicle will ignore RC or other input until it has been power-cycled. Termination may trigger safety measures, including: disabling motors and deployment of parachute on multicopters, and setting flight surfaces to initiate a landing pattern on fixed-wing). On multicopters without a parachute it may trigger a crash landing. Support for this command can be tested using the protocol bit: MAV_PROTOCOL_CAPABILITY_FLIGHT_TERMINATION. Support for this command can also be tested by sending the command with param1&#x3D;0 (&lt; 0.5); the ACK should be either MAV_RESULT_FAILED or MAV_RESULT_UNSUPPORTED.
  | 'MAV_CMD_DO_CHANGE_ALTITUDE' // Change altitude set point.
  | 'MAV_CMD_DO_SET_ACTUATOR' // Sets actuators (e.g. servos) to a desired value. The actuator numbers are mapped to specific outputs (e.g. on any MAIN or AUX PWM or UAVCAN) using a flight-stack specific mechanism (i.e. a parameter).
  | 'MAV_CMD_DO_RETURN_PATH_START' // Mission item to specify the start of a failsafe/landing return-path segment (the end of the segment is the next MAV_CMD_DO_LAND_START item). A vehicle that is using missions for landing (e.g. in a return mode) will join the mission on the closest path of the return-path segment (instead of MAV_CMD_DO_LAND_START or the nearest waypoint). The main use case is to minimize the failsafe flight path in corridor missions, where the inbound/outbound paths are constrained (by geofences) to the same particular path. The MAV_CMD_NAV_RETURN_PATH_START would be placed at the start of the return path. If a failsafe occurs on the outbound path the vehicle will move to the nearest point on the return path (which is parallel for this kind of mission), effectively turning round and following the shortest path to landing. If a failsafe occurs on the inbound path the vehicle is already on the return segment and will continue to landing. The Latitude/Longitude/Altitude are optional, and may be set to 0 if not needed. If specified, the item defines the waypoint at which the return segment starts. If sent using as a command, the vehicle will perform a mission landing (using the land segment if defined) or reject the command if mission landings are not supported, or no mission landing is defined. When used as a command any position information in the command is ignored.
  | 'MAV_CMD_DO_LAND_START' // Mission item to mark the start of a mission landing pattern, or a command to land with a mission landing pattern. When used in a mission, this is a marker for the start of a sequence of mission items that represent a landing pattern. It should be followed by a navigation item that defines the first waypoint of the landing sequence. The start marker positional params are used only for selecting what landing pattern to use if several are defined in the mission (the selected pattern will be the one with the marker position that is closest to the vehicle when a landing is commanded). If the marker item position has zero-values for latitude, longitude, and altitude, then landing pattern selection is instead based on the position of the first waypoint in the landing sequence. When sent as a command it triggers a landing using a mission landing pattern. The location parameters are not used in this case, and should be set to 0.
  | 'MAV_CMD_DO_RALLY_LAND' // Mission command to perform a landing from a rally point.
  | 'MAV_CMD_DO_GO_AROUND' // Mission command to safely abort an autonomous landing.
  | 'MAV_CMD_DO_REPOSITION' // Reposition the vehicle to a specific WGS84 global position. This command is intended for guided commands (for missions use MAV_CMD_NAV_WAYPOINT instead).
  | 'MAV_CMD_DO_PAUSE_CONTINUE' // If in a GPS controlled position mode, hold the current position or continue.
  | 'MAV_CMD_DO_SET_REVERSE' // Set moving direction to forward or reverse.
  | 'MAV_CMD_DO_SET_ROI_LOCATION' // Sets the region of interest (ROI) to a location. This can then be used by the vehicle&#x27;s control system to control the vehicle attitude and the attitude of various sensors such as cameras. This command can be sent to a gimbal manager but not to a gimbal device. A gimbal is not to react to this message.
  | 'MAV_CMD_DO_SET_ROI_WPNEXT_OFFSET' // Sets the region of interest (ROI) to be toward next waypoint, with optional pitch/roll/yaw offset. This can then be used by the vehicle&#x27;s control system to control the vehicle attitude and the attitude of various sensors such as cameras. This command can be sent to a gimbal manager but not to a gimbal device. A gimbal device is not to react to this message.
  | 'MAV_CMD_DO_SET_ROI_NONE' // Cancels any previous ROI command returning the vehicle/sensors to default flight characteristics. This can then be used by the vehicle&#x27;s control system to control the vehicle attitude and the attitude of various sensors such as cameras. This command can be sent to a gimbal manager but not to a gimbal device. A gimbal device is not to react to this message. After this command the gimbal manager should go back to manual input if available, and otherwise assume a neutral position.
  | 'MAV_CMD_DO_SET_ROI_SYSID' // Mount tracks system with specified system ID. Determination of target vehicle position may be done with GLOBAL_POSITION_INT or any other means. This command can be sent to a gimbal manager but not to a gimbal device. A gimbal device is not to react to this message.
  | 'MAV_CMD_DO_CONTROL_VIDEO' // Control onboard camera system.
  | 'MAV_CMD_DO_SET_ROI' // Sets the region of interest (ROI) for a sensor set or the vehicle itself. This can then be used by the vehicle&#x27;s control system to control the vehicle attitude and the attitude of various sensors such as cameras.
  | 'MAV_CMD_DO_DIGICAM_CONFIGURE' // Configure digital camera. This is a fallback message for systems that have not yet implemented PARAM_EXT_XXX messages and camera definition files (see https://mavlink.io/en/services/camera_def.html ).
  | 'MAV_CMD_DO_DIGICAM_CONTROL' // Control digital camera. This is a fallback message for systems that have not yet implemented PARAM_EXT_XXX messages and camera definition files (see https://mavlink.io/en/services/camera_def.html ).
  | 'MAV_CMD_DO_MOUNT_CONFIGURE' // Mission command to configure a camera or antenna mount
  | 'MAV_CMD_DO_MOUNT_CONTROL' // Mission command to control a camera or antenna mount
  | 'MAV_CMD_DO_SET_CAM_TRIGG_DIST' // Mission command to set camera trigger distance for this flight. The camera is triggered each time this distance is exceeded. This command can also be used to set the shutter integration time for the camera.
  | 'MAV_CMD_DO_FENCE_ENABLE' // Enable the geofence. This can be used in a mission or via the command protocol. The persistence/lifetime of the setting is undefined. Depending on flight stack implementation it may persist until superseded, or it may revert to a system default at the end of a mission. Flight stacks typically reset the setting to system defaults on reboot.
  | 'MAV_CMD_DO_PARACHUTE' // Mission item/command to release a parachute or enable/disable auto release.
  | 'MAV_CMD_DO_MOTOR_TEST' // Command to perform motor test.
  | 'MAV_CMD_DO_INVERTED_FLIGHT' // Change to/from inverted flight.
  | 'MAV_CMD_DO_GRIPPER' // Mission command to operate a gripper.
  | 'MAV_CMD_DO_AUTOTUNE_ENABLE' // Enable/disable autotune.
  | 'MAV_CMD_NAV_SET_YAW_SPEED' // Sets a desired vehicle turn angle and speed change.
  | 'MAV_CMD_DO_SET_CAM_TRIGG_INTERVAL' // Mission command to set camera trigger interval for this flight. If triggering is enabled, the camera is triggered each time this interval expires. This command can also be used to set the shutter integration time for the camera.
  | 'MAV_CMD_DO_MOUNT_CONTROL_QUAT' // Mission command to control a camera or antenna mount, using a quaternion as reference.
  | 'MAV_CMD_DO_GUIDED_MASTER' // set id of master controller
  | 'MAV_CMD_DO_GUIDED_LIMITS' // Set limits for external control
  | 'MAV_CMD_DO_ENGINE_CONTROL' // Control vehicle engine. This is interpreted by the vehicles engine controller to change the target engine state. It is intended for vehicles with internal combustion engines
  | 'MAV_CMD_DO_SET_MISSION_CURRENT' // Set the mission item with sequence number seq as the current item and emit MISSION_CURRENT (whether or not the mission number changed). If a mission is currently being executed, the system will continue to this new mission item on the shortest path, skipping any intermediate mission items. Note that mission jump repeat counters are not reset unless param2 is set (see MAV_CMD_DO_JUMP param2). This command may trigger a mission state-machine change on some systems: for example from MISSION_STATE_NOT_STARTED or MISSION_STATE_PAUSED to MISSION_STATE_ACTIVE. If the system is in mission mode, on those systems this command might therefore start, restart or resume the mission. If the system is not in mission mode this command must not trigger a switch to mission mode. The mission may be &quot;reset&quot; using param2. Resetting sets jump counters to initial values (to reset counters without changing the current mission item set the param1 to &#x60;-1&#x60;). Resetting also explicitly changes a mission state of MISSION_STATE_COMPLETE to MISSION_STATE_PAUSED or MISSION_STATE_ACTIVE, potentially allowing it to resume when it is (next) in a mission mode. The command will ACK with MAV_RESULT_FAILED if the sequence number is out of range (including if there is no mission item).
  | 'MAV_CMD_DO_LAST' // NOP - This command is only used to mark the upper limit of the DO commands in the enumeration
  | 'MAV_CMD_PREFLIGHT_CALIBRATION' // Trigger calibration. This command will be only accepted if in pre-flight mode. Except for Temperature Calibration, only one sensor should be set in a single message and all others should be zero.
  | 'MAV_CMD_PREFLIGHT_SET_SENSOR_OFFSETS' // Set sensor offsets. This command will be only accepted if in pre-flight mode.
  | 'MAV_CMD_PREFLIGHT_UAVCAN' // Trigger UAVCAN configuration (actuator ID assignment and direction mapping). Note that this maps to the legacy UAVCAN v0 function UAVCAN_ENUMERATE, which is intended to be executed just once during initial vehicle configuration (it is not a normal pre-flight command and has been poorly named).
  | 'MAV_CMD_PREFLIGHT_STORAGE' // Request storage of different parameter values and logs. This command will be only accepted if in pre-flight mode.
  | 'MAV_CMD_PREFLIGHT_REBOOT_SHUTDOWN' // Request the reboot or shutdown of system components.
  | 'MAV_CMD_OVERRIDE_GOTO' // Override current mission with command to pause mission, pause mission and move to position, continue/resume mission. When param 1 indicates that the mission is paused (MAV_GOTO_DO_HOLD), param 2 defines whether it holds in place or moves to another position.
  | 'MAV_CMD_OBLIQUE_SURVEY' // Mission command to set a Camera Auto Mount Pivoting Oblique Survey (Replaces CAM_TRIGG_DIST for this purpose). The camera is triggered each time this distance is exceeded, then the mount moves to the next position. Params 4~6 set-up the angle limits and number of positions for oblique survey, where mount-enabled vehicles automatically roll the camera between shots to emulate an oblique camera setup (providing an increased HFOV). This command can also be used to set the shutter integration time for the camera.
  | 'MAV_CMD_DO_SET_STANDARD_MODE' // Enable the specified standard MAVLink mode. If the specified mode is not supported, the vehicle should ACK with MAV_RESULT_FAILED. See https://mavlink.io/en/services/standard_modes.html
  | 'MAV_CMD_MISSION_START' // start running a mission
  | 'MAV_CMD_ACTUATOR_TEST' // Actuator testing command. This is similar to MAV_CMD_DO_MOTOR_TEST but operates on the level of output functions, i.e. it is possible to test Motor1 independent from which output it is configured on. Autopilots must NACK this command with MAV_RESULT_TEMPORARILY_REJECTED while armed.
  | 'MAV_CMD_CONFIGURE_ACTUATOR' // Actuator configuration command.
  | 'MAV_CMD_COMPONENT_ARM_DISARM' // Arms / Disarms a component
  | 'MAV_CMD_RUN_PREARM_CHECKS' // Instructs a target system to run pre-arm checks. This allows preflight checks to be run on demand, which may be useful on systems that normally run them at low rate, or which do not trigger checks when the armable state might have changed. This command should return MAV_RESULT_ACCEPTED if it will run the checks. The results of the checks are usually then reported in SYS_STATUS messages (this is system-specific). The command should return MAV_RESULT_TEMPORARILY_REJECTED if the system is already armed.
  | 'MAV_CMD_ILLUMINATOR_ON_OFF' // Turns illuminators ON/OFF. An illuminator is a light source that is used for lighting up dark areas external to the system: e.g. a torch or searchlight (as opposed to a light source for illuminating the system itself, e.g. an indicator light).
  | 'MAV_CMD_DO_ILLUMINATOR_CONFIGURE' // Configures illuminator settings. An illuminator is a light source that is used for lighting up dark areas external to the system: e.g. a torch or searchlight (as opposed to a light source for illuminating the system itself, e.g. an indicator light).
  | 'MAV_CMD_GET_HOME_POSITION' // Request the home position from the vehicle. The vehicle will ACK the command and then emit the HOME_POSITION message.
  | 'MAV_CMD_INJECT_FAILURE' // Inject artificial failure for testing purposes. Note that autopilots should implement an additional protection before accepting this command such as a specific param setting.
  | 'MAV_CMD_START_RX_PAIR' // Starts receiver pairing.
  | 'MAV_CMD_GET_MESSAGE_INTERVAL' // Request the interval between messages for a particular MAVLink message ID. The receiver should ACK the command and then emit its response in a MESSAGE_INTERVAL message.
  | 'MAV_CMD_SET_MESSAGE_INTERVAL' // Set the interval between messages for a particular MAVLink message ID. This interface replaces REQUEST_DATA_STREAM.
  | 'MAV_CMD_REQUEST_MESSAGE' // Request the target system(s) emit a single instance of a specified message (i.e. a &quot;one-shot&quot; version of MAV_CMD_SET_MESSAGE_INTERVAL).
  | 'MAV_CMD_REQUEST_PROTOCOL_VERSION' // Request MAVLink protocol version compatibility. All receivers should ACK the command and then emit their capabilities in an PROTOCOL_VERSION message
  | 'MAV_CMD_REQUEST_AUTOPILOT_CAPABILITIES' // Request autopilot capabilities. The receiver should ACK the command and then emit its capabilities in an AUTOPILOT_VERSION message
  | 'MAV_CMD_REQUEST_CAMERA_INFORMATION' // Request camera information (CAMERA_INFORMATION).
  | 'MAV_CMD_REQUEST_CAMERA_SETTINGS' // Request camera settings (CAMERA_SETTINGS).
  | 'MAV_CMD_REQUEST_STORAGE_INFORMATION' // Request storage information (STORAGE_INFORMATION). Use the command&#x27;s target_component to target a specific component&#x27;s storage.
  | 'MAV_CMD_STORAGE_FORMAT' // Format a storage medium. Once format is complete, a STORAGE_INFORMATION message is sent. Use the command&#x27;s target_component to target a specific component&#x27;s storage.
  | 'MAV_CMD_REQUEST_CAMERA_CAPTURE_STATUS' // Request camera capture status (CAMERA_CAPTURE_STATUS)
  | 'MAV_CMD_REQUEST_FLIGHT_INFORMATION' // Request flight information (FLIGHT_INFORMATION)
  | 'MAV_CMD_RESET_CAMERA_SETTINGS' // Reset all camera settings to Factory Default
  | 'MAV_CMD_SET_CAMERA_MODE' // Set camera running mode. Use NaN for reserved values. GCS will send a MAV_CMD_REQUEST_VIDEO_STREAM_STATUS command after a mode change if the camera supports video streaming.
  | 'MAV_CMD_SET_CAMERA_ZOOM' // Set camera zoom. Camera must respond with a CAMERA_SETTINGS message (on success).
  | 'MAV_CMD_SET_CAMERA_FOCUS' // Set camera focus. Camera must respond with a CAMERA_SETTINGS message (on success).
  | 'MAV_CMD_SET_STORAGE_USAGE' // Set that a particular storage is the preferred location for saving photos, videos, and/or other media (e.g. to set that an SD card is used for storing videos). There can only be one preferred save location for each particular media type: setting a media usage flag will clear/reset that same flag if set on any other storage. If no flag is set the system should use its default storage. A target system can choose to always use default storage, in which case it should ACK the command with MAV_RESULT_UNSUPPORTED. A target system can choose to not allow a particular storage to be set as preferred storage, in which case it should ACK the command with MAV_RESULT_DENIED.
  | 'MAV_CMD_SET_CAMERA_SOURCE' // Set camera source. Changes the camera&#x27;s active sources on cameras with multiple image sensors.
  | 'MAV_CMD_JUMP_TAG' // Tagged jump target. Can be jumped to with MAV_CMD_DO_JUMP_TAG.
  | 'MAV_CMD_DO_JUMP_TAG' // Jump to the matching tag in the mission list. Repeat this action for the specified number of times. A mission should contain a single matching tag for each jump. If this is not the case then a jump to a missing tag should complete the mission, and a jump where there are multiple matching tags should always select the one with the lowest mission sequence number.
  | 'MAV_CMD_DO_GIMBAL_MANAGER_PITCHYAW' // Set gimbal manager pitch/yaw setpoints (low rate command). It is possible to set combinations of the values below. E.g. an angle as well as a desired angular rate can be used to get to this angle at a certain angular rate, or an angular rate only will result in continuous turning. NaN is to be used to signal unset. Note: only the gimbal manager will react to this command - it will be ignored by a gimbal device. Use GIMBAL_MANAGER_SET_PITCHYAW if you need to stream pitch/yaw setpoints at higher rate.
  | 'MAV_CMD_DO_GIMBAL_MANAGER_CONFIGURE' // Gimbal configuration to set which sysid/compid is in primary and secondary control.
  | 'MAV_CMD_IMAGE_START_CAPTURE' // Start image capture sequence. CAMERA_IMAGE_CAPTURED must be emitted after each capture. Param1 (id) may be used to specify the target camera: 0: all cameras, 1 to 6: autopilot-connected cameras, 7-255: MAVLink camera component ID. It is needed in order to target specific cameras connected to the autopilot, or specific sensors in a multi-sensor camera (neither of which have a distinct MAVLink component ID). It is also needed to specify the target camera in missions. When used in a mission, an autopilot should execute the MAV_CMD for a specified local camera (param1 &#x3D; 1-6), or resend it as a command if it is intended for a MAVLink camera (param1 &#x3D; 7 - 255), setting the command&#x27;s target_component as the param1 value (and setting param1 in the command to zero). If the param1 is 0 the autopilot should do both. When sent in a command the target MAVLink address is set using target_component. If addressed specifically to an autopilot: param1 should be used in the same way as it is for missions (though command should NACK with MAV_RESULT_DENIED if a specified local camera does not exist). If addressed to a MAVLink camera, param 1 can be used to address all cameras (0), or to separately address 1 to 7 individual sensors. Other values should be NACKed with MAV_RESULT_DENIED. If the command is broadcast (target_component is 0) then param 1 should be set to 0 (any other value should be NACKED with MAV_RESULT_DENIED). An autopilot would trigger any local cameras and forward the command to all channels.
  | 'MAV_CMD_IMAGE_STOP_CAPTURE' // Stop image capture sequence. Param1 (id) may be used to specify the target camera: 0: all cameras, 1 to 6: autopilot-connected cameras, 7-255: MAVLink camera component ID. It is needed in order to target specific cameras connected to the autopilot, or specific sensors in a multi-sensor camera (neither of which have a distinct MAVLink component ID). It is also needed to specify the target camera in missions. When used in a mission, an autopilot should execute the MAV_CMD for a specified local camera (param1 &#x3D; 1-6), or resend it as a command if it is intended for a MAVLink camera (param1 &#x3D; 7 - 255), setting the command&#x27;s target_component as the param1 value (and setting param1 in the command to zero). If the param1 is 0 the autopilot should do both. When sent in a command the target MAVLink address is set using target_component. If addressed specifically to an autopilot: param1 should be used in the same way as it is for missions (though command should NACK with MAV_RESULT_DENIED if a specified local camera does not exist). If addressed to a MAVLink camera, param1 can be used to address all cameras (0), or to separately address 1 to 7 individual sensors. Other values should be NACKed with MAV_RESULT_DENIED. If the command is broadcast (target_component is 0) then param 1 should be set to 0 (any other value should be NACKED with MAV_RESULT_DENIED). An autopilot would trigger any local cameras and forward the command to all channels.
  | 'MAV_CMD_REQUEST_CAMERA_IMAGE_CAPTURE' // Re-request a CAMERA_IMAGE_CAPTURED message.
  | 'MAV_CMD_DO_TRIGGER_CONTROL' // Enable or disable on-board camera triggering system.
  | 'MAV_CMD_CAMERA_TRACK_POINT' // If the camera supports point visual tracking (CAMERA_CAP_FLAGS_HAS_TRACKING_POINT is set), this command allows to initiate the tracking.
  | 'MAV_CMD_CAMERA_TRACK_RECTANGLE' // If the camera supports rectangle visual tracking (CAMERA_CAP_FLAGS_HAS_TRACKING_RECTANGLE is set), this command allows to initiate the tracking.
  | 'MAV_CMD_CAMERA_STOP_TRACKING' // Stops ongoing tracking.
  | 'MAV_CMD_VIDEO_START_CAPTURE' // Starts video capture (recording).
  | 'MAV_CMD_VIDEO_STOP_CAPTURE' // Stop the current video capture (recording).
  | 'MAV_CMD_VIDEO_START_STREAMING' // Start video streaming
  | 'MAV_CMD_VIDEO_STOP_STREAMING' // Stop the given video stream
  | 'MAV_CMD_REQUEST_VIDEO_STREAM_INFORMATION' // Request video stream information (VIDEO_STREAM_INFORMATION)
  | 'MAV_CMD_REQUEST_VIDEO_STREAM_STATUS' // Request video stream status (VIDEO_STREAM_STATUS)
  | 'MAV_CMD_LOGGING_START' // Request to start streaming logging data over MAVLink (see also LOGGING_DATA message)
  | 'MAV_CMD_LOGGING_STOP' // Request to stop streaming log data over MAVLink
  | 'MAV_CMD_AIRFRAME_CONFIGURATION'
  | 'MAV_CMD_CONTROL_HIGH_LATENCY' // Request to start/stop transmitting over the high latency telemetry
  | 'MAV_CMD_PANORAMA_CREATE' // Create a panorama at the current position
  | 'MAV_CMD_DO_VTOL_TRANSITION' // Request VTOL transition
  | 'MAV_CMD_ARM_AUTHORIZATION_REQUEST' // Request authorization to arm the vehicle to a external entity, the arm authorizer is responsible to request all data that is needs from the vehicle before authorize or deny the request. If approved the COMMAND_ACK message progress field should be set with period of time that this authorization is valid in seconds. If the authorization is denied COMMAND_ACK.result_param2 should be set with one of the reasons in ARM_AUTH_DENIED_REASON.
  | 'MAV_CMD_SET_GUIDED_SUBMODE_STANDARD' // This command sets the submode to standard guided when vehicle is in guided mode. The vehicle holds position and altitude and the user can input the desired velocities along all three axes.
  | 'MAV_CMD_SET_GUIDED_SUBMODE_CIRCLE' // This command sets submode circle when vehicle is in guided mode. Vehicle flies along a circle facing the center of the circle. The user can input the velocity along the circle and change the radius. If no input is given the vehicle will hold position.
  | 'MAV_CMD_CONDITION_GATE' // Delay mission state machine until gate has been reached.
  | 'MAV_CMD_NAV_FENCE_RETURN_POINT' // Fence return point (there can only be one such point in a geofence definition). If rally points are supported they should be used instead.
  | 'MAV_CMD_NAV_FENCE_POLYGON_VERTEX_INCLUSION' // Fence vertex for an inclusion polygon (the polygon must not be self-intersecting). The vehicle must stay within this area. Minimum of 3 vertices required. The vertices for a polygon must be sent sequentially, each with param1 set to the total number of vertices in the polygon.
  | 'MAV_CMD_NAV_FENCE_POLYGON_VERTEX_EXCLUSION' // Fence vertex for an exclusion polygon (the polygon must not be self-intersecting). The vehicle must stay outside this area. Minimum of 3 vertices required. The vertices for a polygon must be sent sequentially, each with param1 set to the total number of vertices in the polygon.
  | 'MAV_CMD_NAV_FENCE_CIRCLE_INCLUSION' // Circular fence area. The vehicle must stay inside this area.
  | 'MAV_CMD_NAV_FENCE_CIRCLE_EXCLUSION' // Circular fence area. The vehicle must stay outside this area.
  | 'MAV_CMD_NAV_RALLY_POINT' // Rally point. You can have multiple rally points defined.
  | 'MAV_CMD_UAVCAN_GET_NODE_INFO' // Commands the vehicle to respond with a sequence of messages UAVCAN_NODE_INFO, one message per every UAVCAN node that is online. Note that some of the response messages can be lost, which the receiver can detect easily by checking whether every received UAVCAN_NODE_STATUS has a matching message UAVCAN_NODE_INFO received earlier; if not, this command should be sent again in order to request re-transmission of the node information messages.
  | 'MAV_CMD_DO_SET_SAFETY_SWITCH_STATE' // Change state of safety switch.
  | 'MAV_CMD_DO_ADSB_OUT_IDENT' // Trigger the start of an ADSB-out IDENT. This should only be used when requested to do so by an Air Traffic Controller in controlled airspace. This starts the IDENT which is then typically held for 18 seconds by the hardware per the Mode A, C, and S transponder spec.
  | 'MAV_CMD_PAYLOAD_PREPARE_DEPLOY' // Deploy payload on a Lat / Lon / Alt position. This includes the navigation to reach the required release position and velocity.
  | 'MAV_CMD_PAYLOAD_CONTROL_DEPLOY' // Control the payload deployment.
  | 'MAV_CMD_FIXED_MAG_CAL_YAW' // Magnetometer calibration based on provided known yaw. This allows for fast calibration using WMM field tables in the vehicle, given only the known yaw of the vehicle. If Latitude and longitude are both zero then use the current vehicle location.
  | 'MAV_CMD_DO_WINCH' // Command to operate winch.
  | 'MAV_CMD_EXTERNAL_POSITION_ESTIMATE' // Provide an external position estimate for use when dead-reckoning. This is meant to be used for occasional position resets that may be provided by a external system such as a remote pilot using landmarks over a video link.
  | 'MAV_CMD_WAYPOINT_USER_1' // User defined waypoint item. Ground Station will show the Vehicle as flying through this item.
  | 'MAV_CMD_WAYPOINT_USER_2' // User defined waypoint item. Ground Station will show the Vehicle as flying through this item.
  | 'MAV_CMD_WAYPOINT_USER_3' // User defined waypoint item. Ground Station will show the Vehicle as flying through this item.
  | 'MAV_CMD_WAYPOINT_USER_4' // User defined waypoint item. Ground Station will show the Vehicle as flying through this item.
  | 'MAV_CMD_WAYPOINT_USER_5' // User defined waypoint item. Ground Station will show the Vehicle as flying through this item.
  | 'MAV_CMD_SPATIAL_USER_1' // User defined spatial item. Ground Station will not show the Vehicle as flying through this item. Example: ROI item.
  | 'MAV_CMD_SPATIAL_USER_2' // User defined spatial item. Ground Station will not show the Vehicle as flying through this item. Example: ROI item.
  | 'MAV_CMD_SPATIAL_USER_3' // User defined spatial item. Ground Station will not show the Vehicle as flying through this item. Example: ROI item.
  | 'MAV_CMD_SPATIAL_USER_4' // User defined spatial item. Ground Station will not show the Vehicle as flying through this item. Example: ROI item.
  | 'MAV_CMD_SPATIAL_USER_5' // User defined spatial item. Ground Station will not show the Vehicle as flying through this item. Example: ROI item.
  | 'MAV_CMD_USER_1' // User defined command. Ground Station will not show the Vehicle as flying through this item. Example: MAV_CMD_DO_SET_PARAMETER item.
  | 'MAV_CMD_USER_2' // User defined command. Ground Station will not show the Vehicle as flying through this item. Example: MAV_CMD_DO_SET_PARAMETER item.
  | 'MAV_CMD_USER_3' // User defined command. Ground Station will not show the Vehicle as flying through this item. Example: MAV_CMD_DO_SET_PARAMETER item.
  | 'MAV_CMD_USER_4' // User defined command. Ground Station will not show the Vehicle as flying through this item. Example: MAV_CMD_DO_SET_PARAMETER item.
  | 'MAV_CMD_USER_5' // User defined command. Ground Station will not show the Vehicle as flying through this item. Example: MAV_CMD_DO_SET_PARAMETER item.
  | 'MAV_CMD_CAN_FORWARD' // Request forwarding of CAN packets from the given CAN bus to this component. CAN Frames are sent using CAN_FRAME and CANFD_FRAME messages
  | string;

// A data stream is not a fixed set of messages, but rather a
// recommendation to the autopilot software. Individual autopilots may or may not obey
// the recommended messages.
export enum MAV_DATA_STREAMEnum {
  // Enable all data streams
  MAV_DATA_STREAM_ALL = 'MAV_DATA_STREAM_ALL',
  // Enable IMU_RAW, GPS_RAW, GPS_STATUS packets.
  MAV_DATA_STREAM_RAW_SENSORS = 'MAV_DATA_STREAM_RAW_SENSORS',
  // Enable GPS_STATUS, CONTROL_STATUS, AUX_STATUS
  MAV_DATA_STREAM_EXTENDED_STATUS = 'MAV_DATA_STREAM_EXTENDED_STATUS',
  // Enable RC_CHANNELS_SCALED, RC_CHANNELS_RAW, SERVO_OUTPUT_RAW
  MAV_DATA_STREAM_RC_CHANNELS = 'MAV_DATA_STREAM_RC_CHANNELS',
  // Enable ATTITUDE_CONTROLLER_OUTPUT, POSITION_CONTROLLER_OUTPUT, NAV_CONTROLLER_OUTPUT.
  MAV_DATA_STREAM_RAW_CONTROLLER = 'MAV_DATA_STREAM_RAW_CONTROLLER',
  // Enable LOCAL_POSITION, GLOBAL_POSITION_INT messages.
  MAV_DATA_STREAM_POSITION = 'MAV_DATA_STREAM_POSITION',
  // Dependent on the autopilot
  MAV_DATA_STREAM_EXTRA1 = 'MAV_DATA_STREAM_EXTRA1',
  // Dependent on the autopilot
  MAV_DATA_STREAM_EXTRA2 = 'MAV_DATA_STREAM_EXTRA2',
  // Dependent on the autopilot
  MAV_DATA_STREAM_EXTRA3 = 'MAV_DATA_STREAM_EXTRA3',
}

export type MAV_DATA_STREAM =
  | 'MAV_DATA_STREAM_ALL' // Enable all data streams
  | 'MAV_DATA_STREAM_RAW_SENSORS' // Enable IMU_RAW, GPS_RAW, GPS_STATUS packets.
  | 'MAV_DATA_STREAM_EXTENDED_STATUS' // Enable GPS_STATUS, CONTROL_STATUS, AUX_STATUS
  | 'MAV_DATA_STREAM_RC_CHANNELS' // Enable RC_CHANNELS_SCALED, RC_CHANNELS_RAW, SERVO_OUTPUT_RAW
  | 'MAV_DATA_STREAM_RAW_CONTROLLER' // Enable ATTITUDE_CONTROLLER_OUTPUT, POSITION_CONTROLLER_OUTPUT, NAV_CONTROLLER_OUTPUT.
  | 'MAV_DATA_STREAM_POSITION' // Enable LOCAL_POSITION, GLOBAL_POSITION_INT messages.
  | 'MAV_DATA_STREAM_EXTRA1' // Dependent on the autopilot
  | 'MAV_DATA_STREAM_EXTRA2' // Dependent on the autopilot
  | 'MAV_DATA_STREAM_EXTRA3' // Dependent on the autopilot
  | string;

// The ROI (region of interest) for the vehicle. This can be
// be used by the vehicle for camera/vehicle attitude alignment (see
// MAV_CMD_NAV_ROI).
export enum MAV_ROIEnum {
  // No region of interest.
  MAV_ROI_NONE = 'MAV_ROI_NONE',
  // Point toward next waypoint, with optional pitch/roll/yaw offset.
  MAV_ROI_WPNEXT = 'MAV_ROI_WPNEXT',
  // Point toward given waypoint.
  MAV_ROI_WPINDEX = 'MAV_ROI_WPINDEX',
  // Point toward fixed location.
  MAV_ROI_LOCATION = 'MAV_ROI_LOCATION',
  // Point toward of given id.
  MAV_ROI_TARGET = 'MAV_ROI_TARGET',
}

export type MAV_ROI =
  | 'MAV_ROI_NONE' // No region of interest.
  | 'MAV_ROI_WPNEXT' // Point toward next waypoint, with optional pitch/roll/yaw offset.
  | 'MAV_ROI_WPINDEX' // Point toward given waypoint.
  | 'MAV_ROI_LOCATION' // Point toward fixed location.
  | 'MAV_ROI_TARGET' // Point toward of given id.
  | string;

// Specifies the datatype of a MAVLink parameter.
export enum MAV_PARAM_TYPEEnum {
  // 8-bit unsigned integer
  MAV_PARAM_TYPE_UINT8 = 'MAV_PARAM_TYPE_UINT8',
  // 8-bit signed integer
  MAV_PARAM_TYPE_INT8 = 'MAV_PARAM_TYPE_INT8',
  // 16-bit unsigned integer
  MAV_PARAM_TYPE_UINT16 = 'MAV_PARAM_TYPE_UINT16',
  // 16-bit signed integer
  MAV_PARAM_TYPE_INT16 = 'MAV_PARAM_TYPE_INT16',
  // 32-bit unsigned integer
  MAV_PARAM_TYPE_UINT32 = 'MAV_PARAM_TYPE_UINT32',
  // 32-bit signed integer
  MAV_PARAM_TYPE_INT32 = 'MAV_PARAM_TYPE_INT32',
  // 64-bit unsigned integer
  MAV_PARAM_TYPE_UINT64 = 'MAV_PARAM_TYPE_UINT64',
  // 64-bit signed integer
  MAV_PARAM_TYPE_INT64 = 'MAV_PARAM_TYPE_INT64',
  // 32-bit floating-point
  MAV_PARAM_TYPE_REAL32 = 'MAV_PARAM_TYPE_REAL32',
  // 64-bit floating-point
  MAV_PARAM_TYPE_REAL64 = 'MAV_PARAM_TYPE_REAL64',
}

export type MAV_PARAM_TYPE =
  | 'MAV_PARAM_TYPE_UINT8' // 8-bit unsigned integer
  | 'MAV_PARAM_TYPE_INT8' // 8-bit signed integer
  | 'MAV_PARAM_TYPE_UINT16' // 16-bit unsigned integer
  | 'MAV_PARAM_TYPE_INT16' // 16-bit signed integer
  | 'MAV_PARAM_TYPE_UINT32' // 32-bit unsigned integer
  | 'MAV_PARAM_TYPE_INT32' // 32-bit signed integer
  | 'MAV_PARAM_TYPE_UINT64' // 64-bit unsigned integer
  | 'MAV_PARAM_TYPE_INT64' // 64-bit signed integer
  | 'MAV_PARAM_TYPE_REAL32' // 32-bit floating-point
  | 'MAV_PARAM_TYPE_REAL64' // 64-bit floating-point
  | string;

// Specifies the datatype of a MAVLink extended parameter.
export enum MAV_PARAM_EXT_TYPEEnum {
  // 8-bit unsigned integer
  MAV_PARAM_EXT_TYPE_UINT8 = 'MAV_PARAM_EXT_TYPE_UINT8',
  // 8-bit signed integer
  MAV_PARAM_EXT_TYPE_INT8 = 'MAV_PARAM_EXT_TYPE_INT8',
  // 16-bit unsigned integer
  MAV_PARAM_EXT_TYPE_UINT16 = 'MAV_PARAM_EXT_TYPE_UINT16',
  // 16-bit signed integer
  MAV_PARAM_EXT_TYPE_INT16 = 'MAV_PARAM_EXT_TYPE_INT16',
  // 32-bit unsigned integer
  MAV_PARAM_EXT_TYPE_UINT32 = 'MAV_PARAM_EXT_TYPE_UINT32',
  // 32-bit signed integer
  MAV_PARAM_EXT_TYPE_INT32 = 'MAV_PARAM_EXT_TYPE_INT32',
  // 64-bit unsigned integer
  MAV_PARAM_EXT_TYPE_UINT64 = 'MAV_PARAM_EXT_TYPE_UINT64',
  // 64-bit signed integer
  MAV_PARAM_EXT_TYPE_INT64 = 'MAV_PARAM_EXT_TYPE_INT64',
  // 32-bit floating-point
  MAV_PARAM_EXT_TYPE_REAL32 = 'MAV_PARAM_EXT_TYPE_REAL32',
  // 64-bit floating-point
  MAV_PARAM_EXT_TYPE_REAL64 = 'MAV_PARAM_EXT_TYPE_REAL64',
  // Custom Type
  MAV_PARAM_EXT_TYPE_CUSTOM = 'MAV_PARAM_EXT_TYPE_CUSTOM',
}

export type MAV_PARAM_EXT_TYPE =
  | 'MAV_PARAM_EXT_TYPE_UINT8' // 8-bit unsigned integer
  | 'MAV_PARAM_EXT_TYPE_INT8' // 8-bit signed integer
  | 'MAV_PARAM_EXT_TYPE_UINT16' // 16-bit unsigned integer
  | 'MAV_PARAM_EXT_TYPE_INT16' // 16-bit signed integer
  | 'MAV_PARAM_EXT_TYPE_UINT32' // 32-bit unsigned integer
  | 'MAV_PARAM_EXT_TYPE_INT32' // 32-bit signed integer
  | 'MAV_PARAM_EXT_TYPE_UINT64' // 64-bit unsigned integer
  | 'MAV_PARAM_EXT_TYPE_INT64' // 64-bit signed integer
  | 'MAV_PARAM_EXT_TYPE_REAL32' // 32-bit floating-point
  | 'MAV_PARAM_EXT_TYPE_REAL64' // 64-bit floating-point
  | 'MAV_PARAM_EXT_TYPE_CUSTOM' // Custom Type
  | string;

// Result from a MAVLink command (MAV_CMD)
export enum MAV_RESULTEnum {
  // Command is valid (is supported and has valid parameters), and was executed.
  MAV_RESULT_ACCEPTED = 'MAV_RESULT_ACCEPTED',
  // Command is valid, but cannot be executed at this time. This is used to indicate a problem that should be fixed just by waiting (e.g. a state machine is busy, can&#x27;t arm because have not got GPS lock, etc.). Retrying later should work.
  MAV_RESULT_TEMPORARILY_REJECTED = 'MAV_RESULT_TEMPORARILY_REJECTED',
  // Command is invalid (is supported but has invalid parameters). Retrying same command and parameters will not work.
  MAV_RESULT_DENIED = 'MAV_RESULT_DENIED',
  // Command is not supported (unknown).
  MAV_RESULT_UNSUPPORTED = 'MAV_RESULT_UNSUPPORTED',
  // Command is valid, but execution has failed. This is used to indicate any non-temporary or unexpected problem, i.e. any problem that must be fixed before the command can succeed/be retried. For example, attempting to write a file when out of memory, attempting to arm when sensors are not calibrated, etc.
  MAV_RESULT_FAILED = 'MAV_RESULT_FAILED',
  // Command is valid and is being executed. This will be followed by further progress updates, i.e. the component may send further COMMAND_ACK messages with result MAV_RESULT_IN_PROGRESS (at a rate decided by the implementation), and must terminate by sending a COMMAND_ACK message with final result of the operation. The COMMAND_ACK.progress field can be used to indicate the progress of the operation.
  MAV_RESULT_IN_PROGRESS = 'MAV_RESULT_IN_PROGRESS',
  // Command has been cancelled (as a result of receiving a COMMAND_CANCEL message).
  MAV_RESULT_CANCELLED = 'MAV_RESULT_CANCELLED',
  // Command is only accepted when sent as a COMMAND_LONG.
  MAV_RESULT_COMMAND_LONG_ONLY = 'MAV_RESULT_COMMAND_LONG_ONLY',
  // Command is only accepted when sent as a COMMAND_INT.
  MAV_RESULT_COMMAND_INT_ONLY = 'MAV_RESULT_COMMAND_INT_ONLY',
  // Command is invalid because a frame is required and the specified frame is not supported.
  MAV_RESULT_COMMAND_UNSUPPORTED_MAV_FRAME = 'MAV_RESULT_COMMAND_UNSUPPORTED_MAV_FRAME',
}

export type MAV_RESULT =
  | 'MAV_RESULT_ACCEPTED' // Command is valid (is supported and has valid parameters), and was executed.
  | 'MAV_RESULT_TEMPORARILY_REJECTED' // Command is valid, but cannot be executed at this time. This is used to indicate a problem that should be fixed just by waiting (e.g. a state machine is busy, can&#x27;t arm because have not got GPS lock, etc.). Retrying later should work.
  | 'MAV_RESULT_DENIED' // Command is invalid (is supported but has invalid parameters). Retrying same command and parameters will not work.
  | 'MAV_RESULT_UNSUPPORTED' // Command is not supported (unknown).
  | 'MAV_RESULT_FAILED' // Command is valid, but execution has failed. This is used to indicate any non-temporary or unexpected problem, i.e. any problem that must be fixed before the command can succeed/be retried. For example, attempting to write a file when out of memory, attempting to arm when sensors are not calibrated, etc.
  | 'MAV_RESULT_IN_PROGRESS' // Command is valid and is being executed. This will be followed by further progress updates, i.e. the component may send further COMMAND_ACK messages with result MAV_RESULT_IN_PROGRESS (at a rate decided by the implementation), and must terminate by sending a COMMAND_ACK message with final result of the operation. The COMMAND_ACK.progress field can be used to indicate the progress of the operation.
  | 'MAV_RESULT_CANCELLED' // Command has been cancelled (as a result of receiving a COMMAND_CANCEL message).
  | 'MAV_RESULT_COMMAND_LONG_ONLY' // Command is only accepted when sent as a COMMAND_LONG.
  | 'MAV_RESULT_COMMAND_INT_ONLY' // Command is only accepted when sent as a COMMAND_INT.
  | 'MAV_RESULT_COMMAND_UNSUPPORTED_MAV_FRAME' // Command is invalid because a frame is required and the specified frame is not supported.
  | string;

// Result of mission operation (in a MISSION_ACK message).
export enum MAV_MISSION_RESULTEnum {
  // mission accepted OK
  MAV_MISSION_ACCEPTED = 'MAV_MISSION_ACCEPTED',
  // Generic error / not accepting mission commands at all right now.
  MAV_MISSION_ERROR = 'MAV_MISSION_ERROR',
  // Coordinate frame is not supported.
  MAV_MISSION_UNSUPPORTED_FRAME = 'MAV_MISSION_UNSUPPORTED_FRAME',
  // Command is not supported.
  MAV_MISSION_UNSUPPORTED = 'MAV_MISSION_UNSUPPORTED',
  // Mission items exceed storage space.
  MAV_MISSION_NO_SPACE = 'MAV_MISSION_NO_SPACE',
  // One of the parameters has an invalid value.
  MAV_MISSION_INVALID = 'MAV_MISSION_INVALID',
  // param1 has an invalid value.
  MAV_MISSION_INVALID_PARAM1 = 'MAV_MISSION_INVALID_PARAM1',
  // param2 has an invalid value.
  MAV_MISSION_INVALID_PARAM2 = 'MAV_MISSION_INVALID_PARAM2',
  // param3 has an invalid value.
  MAV_MISSION_INVALID_PARAM3 = 'MAV_MISSION_INVALID_PARAM3',
  // param4 has an invalid value.
  MAV_MISSION_INVALID_PARAM4 = 'MAV_MISSION_INVALID_PARAM4',
  // x / param5 has an invalid value.
  MAV_MISSION_INVALID_PARAM5_X = 'MAV_MISSION_INVALID_PARAM5_X',
  // y / param6 has an invalid value.
  MAV_MISSION_INVALID_PARAM6_Y = 'MAV_MISSION_INVALID_PARAM6_Y',
  // z / param7 has an invalid value.
  MAV_MISSION_INVALID_PARAM7 = 'MAV_MISSION_INVALID_PARAM7',
  // Mission item received out of sequence
  MAV_MISSION_INVALID_SEQUENCE = 'MAV_MISSION_INVALID_SEQUENCE',
  // Not accepting any mission commands from this communication partner.
  MAV_MISSION_DENIED = 'MAV_MISSION_DENIED',
  // Current mission operation cancelled (e.g. mission upload, mission download).
  MAV_MISSION_OPERATION_CANCELLED = 'MAV_MISSION_OPERATION_CANCELLED',
}

export type MAV_MISSION_RESULT =
  | 'MAV_MISSION_ACCEPTED' // mission accepted OK
  | 'MAV_MISSION_ERROR' // Generic error / not accepting mission commands at all right now.
  | 'MAV_MISSION_UNSUPPORTED_FRAME' // Coordinate frame is not supported.
  | 'MAV_MISSION_UNSUPPORTED' // Command is not supported.
  | 'MAV_MISSION_NO_SPACE' // Mission items exceed storage space.
  | 'MAV_MISSION_INVALID' // One of the parameters has an invalid value.
  | 'MAV_MISSION_INVALID_PARAM1' // param1 has an invalid value.
  | 'MAV_MISSION_INVALID_PARAM2' // param2 has an invalid value.
  | 'MAV_MISSION_INVALID_PARAM3' // param3 has an invalid value.
  | 'MAV_MISSION_INVALID_PARAM4' // param4 has an invalid value.
  | 'MAV_MISSION_INVALID_PARAM5_X' // x / param5 has an invalid value.
  | 'MAV_MISSION_INVALID_PARAM6_Y' // y / param6 has an invalid value.
  | 'MAV_MISSION_INVALID_PARAM7' // z / param7 has an invalid value.
  | 'MAV_MISSION_INVALID_SEQUENCE' // Mission item received out of sequence
  | 'MAV_MISSION_DENIED' // Not accepting any mission commands from this communication partner.
  | 'MAV_MISSION_OPERATION_CANCELLED' // Current mission operation cancelled (e.g. mission upload, mission download).
  | string;

// Indicates the severity level, generally used for status messages to indicate their relative urgency. Based on RFC-5424 using expanded definitions at: http://www.kiwisyslog.com/kb/info:-syslog-message-levels/.
export enum MAV_SEVERITYEnum {
  // System is unusable. This is a &quot;panic&quot; condition.
  MAV_SEVERITY_EMERGENCY = 'MAV_SEVERITY_EMERGENCY',
  // Action should be taken immediately. Indicates error in non-critical systems.
  MAV_SEVERITY_ALERT = 'MAV_SEVERITY_ALERT',
  // Action must be taken immediately. Indicates failure in a primary system.
  MAV_SEVERITY_CRITICAL = 'MAV_SEVERITY_CRITICAL',
  // Indicates an error in secondary/redundant systems.
  MAV_SEVERITY_ERROR = 'MAV_SEVERITY_ERROR',
  // Indicates about a possible future error if this is not resolved within a given timeframe. Example would be a low battery warning.
  MAV_SEVERITY_WARNING = 'MAV_SEVERITY_WARNING',
  // An unusual event has occurred, though not an error condition. This should be investigated for the root cause.
  MAV_SEVERITY_NOTICE = 'MAV_SEVERITY_NOTICE',
  // Normal operational messages. Useful for logging. No action is required for these messages.
  MAV_SEVERITY_INFO = 'MAV_SEVERITY_INFO',
  // Useful non-operational messages that can assist in debugging. These should not occur during normal operation.
  MAV_SEVERITY_DEBUG = 'MAV_SEVERITY_DEBUG',
}

export type MAV_SEVERITY =
  | 'MAV_SEVERITY_EMERGENCY' // System is unusable. This is a &quot;panic&quot; condition.
  | 'MAV_SEVERITY_ALERT' // Action should be taken immediately. Indicates error in non-critical systems.
  | 'MAV_SEVERITY_CRITICAL' // Action must be taken immediately. Indicates failure in a primary system.
  | 'MAV_SEVERITY_ERROR' // Indicates an error in secondary/redundant systems.
  | 'MAV_SEVERITY_WARNING' // Indicates about a possible future error if this is not resolved within a given timeframe. Example would be a low battery warning.
  | 'MAV_SEVERITY_NOTICE' // An unusual event has occurred, though not an error condition. This should be investigated for the root cause.
  | 'MAV_SEVERITY_INFO' // Normal operational messages. Useful for logging. No action is required for these messages.
  | 'MAV_SEVERITY_DEBUG' // Useful non-operational messages that can assist in debugging. These should not occur during normal operation.
  | string;

// Power supply status flags (bitmask)
export enum MAV_POWER_STATUSEnum {
  // main brick power supply valid
  MAV_POWER_STATUS_BRICK_VALID = 'MAV_POWER_STATUS_BRICK_VALID',
  // main servo power supply valid for FMU
  MAV_POWER_STATUS_SERVO_VALID = 'MAV_POWER_STATUS_SERVO_VALID',
  // USB power is connected
  MAV_POWER_STATUS_USB_CONNECTED = 'MAV_POWER_STATUS_USB_CONNECTED',
  // peripheral supply is in over-current state
  MAV_POWER_STATUS_PERIPH_OVERCURRENT = 'MAV_POWER_STATUS_PERIPH_OVERCURRENT',
  // hi-power peripheral supply is in over-current state
  MAV_POWER_STATUS_PERIPH_HIPOWER_OVERCURRENT = 'MAV_POWER_STATUS_PERIPH_HIPOWER_OVERCURRENT',
  // Power status has changed since boot
  MAV_POWER_STATUS_CHANGED = 'MAV_POWER_STATUS_CHANGED',
}

export type MAV_POWER_STATUS =
  | 'MAV_POWER_STATUS_BRICK_VALID' // main brick power supply valid
  | 'MAV_POWER_STATUS_SERVO_VALID' // main servo power supply valid for FMU
  | 'MAV_POWER_STATUS_USB_CONNECTED' // USB power is connected
  | 'MAV_POWER_STATUS_PERIPH_OVERCURRENT' // peripheral supply is in over-current state
  | 'MAV_POWER_STATUS_PERIPH_HIPOWER_OVERCURRENT' // hi-power peripheral supply is in over-current state
  | 'MAV_POWER_STATUS_CHANGED' // Power status has changed since boot
  | string;

// SERIAL_CONTROL device types
export enum SERIAL_CONTROL_DEVEnum {
  // First telemetry port
  SERIAL_CONTROL_DEV_TELEM1 = 'SERIAL_CONTROL_DEV_TELEM1',
  // Second telemetry port
  SERIAL_CONTROL_DEV_TELEM2 = 'SERIAL_CONTROL_DEV_TELEM2',
  // First GPS port
  SERIAL_CONTROL_DEV_GPS1 = 'SERIAL_CONTROL_DEV_GPS1',
  // Second GPS port
  SERIAL_CONTROL_DEV_GPS2 = 'SERIAL_CONTROL_DEV_GPS2',
  // system shell
  SERIAL_CONTROL_DEV_SHELL = 'SERIAL_CONTROL_DEV_SHELL',
  // SERIAL0
  SERIAL_CONTROL_SERIAL0 = 'SERIAL_CONTROL_SERIAL0',
  // SERIAL1
  SERIAL_CONTROL_SERIAL1 = 'SERIAL_CONTROL_SERIAL1',
  // SERIAL2
  SERIAL_CONTROL_SERIAL2 = 'SERIAL_CONTROL_SERIAL2',
  // SERIAL3
  SERIAL_CONTROL_SERIAL3 = 'SERIAL_CONTROL_SERIAL3',
  // SERIAL4
  SERIAL_CONTROL_SERIAL4 = 'SERIAL_CONTROL_SERIAL4',
  // SERIAL5
  SERIAL_CONTROL_SERIAL5 = 'SERIAL_CONTROL_SERIAL5',
  // SERIAL6
  SERIAL_CONTROL_SERIAL6 = 'SERIAL_CONTROL_SERIAL6',
  // SERIAL7
  SERIAL_CONTROL_SERIAL7 = 'SERIAL_CONTROL_SERIAL7',
  // SERIAL8
  SERIAL_CONTROL_SERIAL8 = 'SERIAL_CONTROL_SERIAL8',
  // SERIAL9
  SERIAL_CONTROL_SERIAL9 = 'SERIAL_CONTROL_SERIAL9',
}

export type SERIAL_CONTROL_DEV =
  | 'SERIAL_CONTROL_DEV_TELEM1' // First telemetry port
  | 'SERIAL_CONTROL_DEV_TELEM2' // Second telemetry port
  | 'SERIAL_CONTROL_DEV_GPS1' // First GPS port
  | 'SERIAL_CONTROL_DEV_GPS2' // Second GPS port
  | 'SERIAL_CONTROL_DEV_SHELL' // system shell
  | 'SERIAL_CONTROL_SERIAL0' // SERIAL0
  | 'SERIAL_CONTROL_SERIAL1' // SERIAL1
  | 'SERIAL_CONTROL_SERIAL2' // SERIAL2
  | 'SERIAL_CONTROL_SERIAL3' // SERIAL3
  | 'SERIAL_CONTROL_SERIAL4' // SERIAL4
  | 'SERIAL_CONTROL_SERIAL5' // SERIAL5
  | 'SERIAL_CONTROL_SERIAL6' // SERIAL6
  | 'SERIAL_CONTROL_SERIAL7' // SERIAL7
  | 'SERIAL_CONTROL_SERIAL8' // SERIAL8
  | 'SERIAL_CONTROL_SERIAL9' // SERIAL9
  | string;

// SERIAL_CONTROL flags (bitmask)
export enum SERIAL_CONTROL_FLAGEnum {
  // Set if this is a reply
  SERIAL_CONTROL_FLAG_REPLY = 'SERIAL_CONTROL_FLAG_REPLY',
  // Set if the sender wants the receiver to send a response as another SERIAL_CONTROL message
  SERIAL_CONTROL_FLAG_RESPOND = 'SERIAL_CONTROL_FLAG_RESPOND',
  // Set if access to the serial port should be removed from whatever driver is currently using it, giving exclusive access to the SERIAL_CONTROL protocol. The port can be handed back by sending a request without this flag set
  SERIAL_CONTROL_FLAG_EXCLUSIVE = 'SERIAL_CONTROL_FLAG_EXCLUSIVE',
  // Block on writes to the serial port
  SERIAL_CONTROL_FLAG_BLOCKING = 'SERIAL_CONTROL_FLAG_BLOCKING',
  // Send multiple replies until port is drained
  SERIAL_CONTROL_FLAG_MULTI = 'SERIAL_CONTROL_FLAG_MULTI',
}

export type SERIAL_CONTROL_FLAG =
  | 'SERIAL_CONTROL_FLAG_REPLY' // Set if this is a reply
  | 'SERIAL_CONTROL_FLAG_RESPOND' // Set if the sender wants the receiver to send a response as another SERIAL_CONTROL message
  | 'SERIAL_CONTROL_FLAG_EXCLUSIVE' // Set if access to the serial port should be removed from whatever driver is currently using it, giving exclusive access to the SERIAL_CONTROL protocol. The port can be handed back by sending a request without this flag set
  | 'SERIAL_CONTROL_FLAG_BLOCKING' // Block on writes to the serial port
  | 'SERIAL_CONTROL_FLAG_MULTI' // Send multiple replies until port is drained
  | string;

// Enumeration of distance sensor types
export enum MAV_DISTANCE_SENSOREnum {
  // Laser rangefinder, e.g. LightWare SF02/F or PulsedLight units
  MAV_DISTANCE_SENSOR_LASER = 'MAV_DISTANCE_SENSOR_LASER',
  // Ultrasound rangefinder, e.g. MaxBotix units
  MAV_DISTANCE_SENSOR_ULTRASOUND = 'MAV_DISTANCE_SENSOR_ULTRASOUND',
  // Infrared rangefinder, e.g. Sharp units
  MAV_DISTANCE_SENSOR_INFRARED = 'MAV_DISTANCE_SENSOR_INFRARED',
  // Radar type, e.g. uLanding units
  MAV_DISTANCE_SENSOR_RADAR = 'MAV_DISTANCE_SENSOR_RADAR',
  // Broken or unknown type, e.g. analog units
  MAV_DISTANCE_SENSOR_UNKNOWN = 'MAV_DISTANCE_SENSOR_UNKNOWN',
}

export type MAV_DISTANCE_SENSOR =
  | 'MAV_DISTANCE_SENSOR_LASER' // Laser rangefinder, e.g. LightWare SF02/F or PulsedLight units
  | 'MAV_DISTANCE_SENSOR_ULTRASOUND' // Ultrasound rangefinder, e.g. MaxBotix units
  | 'MAV_DISTANCE_SENSOR_INFRARED' // Infrared rangefinder, e.g. Sharp units
  | 'MAV_DISTANCE_SENSOR_RADAR' // Radar type, e.g. uLanding units
  | 'MAV_DISTANCE_SENSOR_UNKNOWN' // Broken or unknown type, e.g. analog units
  | string;

// Enumeration of sensor orientation, according to its rotations
export enum MAV_SENSOR_ORIENTATIONEnum {
  // Roll: 0, Pitch: 0, Yaw: 0
  MAV_SENSOR_ROTATION_NONE = 'MAV_SENSOR_ROTATION_NONE',
  // Roll: 0, Pitch: 0, Yaw: 45
  MAV_SENSOR_ROTATION_YAW_45 = 'MAV_SENSOR_ROTATION_YAW_45',
  // Roll: 0, Pitch: 0, Yaw: 90
  MAV_SENSOR_ROTATION_YAW_90 = 'MAV_SENSOR_ROTATION_YAW_90',
  // Roll: 0, Pitch: 0, Yaw: 135
  MAV_SENSOR_ROTATION_YAW_135 = 'MAV_SENSOR_ROTATION_YAW_135',
  // Roll: 0, Pitch: 0, Yaw: 180
  MAV_SENSOR_ROTATION_YAW_180 = 'MAV_SENSOR_ROTATION_YAW_180',
  // Roll: 0, Pitch: 0, Yaw: 225
  MAV_SENSOR_ROTATION_YAW_225 = 'MAV_SENSOR_ROTATION_YAW_225',
  // Roll: 0, Pitch: 0, Yaw: 270
  MAV_SENSOR_ROTATION_YAW_270 = 'MAV_SENSOR_ROTATION_YAW_270',
  // Roll: 0, Pitch: 0, Yaw: 315
  MAV_SENSOR_ROTATION_YAW_315 = 'MAV_SENSOR_ROTATION_YAW_315',
  // Roll: 180, Pitch: 0, Yaw: 0
  MAV_SENSOR_ROTATION_ROLL_180 = 'MAV_SENSOR_ROTATION_ROLL_180',
  // Roll: 180, Pitch: 0, Yaw: 45
  MAV_SENSOR_ROTATION_ROLL_180_YAW_45 = 'MAV_SENSOR_ROTATION_ROLL_180_YAW_45',
  // Roll: 180, Pitch: 0, Yaw: 90
  MAV_SENSOR_ROTATION_ROLL_180_YAW_90 = 'MAV_SENSOR_ROTATION_ROLL_180_YAW_90',
  // Roll: 180, Pitch: 0, Yaw: 135
  MAV_SENSOR_ROTATION_ROLL_180_YAW_135 = 'MAV_SENSOR_ROTATION_ROLL_180_YAW_135',
  // Roll: 0, Pitch: 180, Yaw: 0
  MAV_SENSOR_ROTATION_PITCH_180 = 'MAV_SENSOR_ROTATION_PITCH_180',
  // Roll: 180, Pitch: 0, Yaw: 225
  MAV_SENSOR_ROTATION_ROLL_180_YAW_225 = 'MAV_SENSOR_ROTATION_ROLL_180_YAW_225',
  // Roll: 180, Pitch: 0, Yaw: 270
  MAV_SENSOR_ROTATION_ROLL_180_YAW_270 = 'MAV_SENSOR_ROTATION_ROLL_180_YAW_270',
  // Roll: 180, Pitch: 0, Yaw: 315
  MAV_SENSOR_ROTATION_ROLL_180_YAW_315 = 'MAV_SENSOR_ROTATION_ROLL_180_YAW_315',
  // Roll: 90, Pitch: 0, Yaw: 0
  MAV_SENSOR_ROTATION_ROLL_90 = 'MAV_SENSOR_ROTATION_ROLL_90',
  // Roll: 90, Pitch: 0, Yaw: 45
  MAV_SENSOR_ROTATION_ROLL_90_YAW_45 = 'MAV_SENSOR_ROTATION_ROLL_90_YAW_45',
  // Roll: 90, Pitch: 0, Yaw: 90
  MAV_SENSOR_ROTATION_ROLL_90_YAW_90 = 'MAV_SENSOR_ROTATION_ROLL_90_YAW_90',
  // Roll: 90, Pitch: 0, Yaw: 135
  MAV_SENSOR_ROTATION_ROLL_90_YAW_135 = 'MAV_SENSOR_ROTATION_ROLL_90_YAW_135',
  // Roll: 270, Pitch: 0, Yaw: 0
  MAV_SENSOR_ROTATION_ROLL_270 = 'MAV_SENSOR_ROTATION_ROLL_270',
  // Roll: 270, Pitch: 0, Yaw: 45
  MAV_SENSOR_ROTATION_ROLL_270_YAW_45 = 'MAV_SENSOR_ROTATION_ROLL_270_YAW_45',
  // Roll: 270, Pitch: 0, Yaw: 90
  MAV_SENSOR_ROTATION_ROLL_270_YAW_90 = 'MAV_SENSOR_ROTATION_ROLL_270_YAW_90',
  // Roll: 270, Pitch: 0, Yaw: 135
  MAV_SENSOR_ROTATION_ROLL_270_YAW_135 = 'MAV_SENSOR_ROTATION_ROLL_270_YAW_135',
  // Roll: 0, Pitch: 90, Yaw: 0
  MAV_SENSOR_ROTATION_PITCH_90 = 'MAV_SENSOR_ROTATION_PITCH_90',
  // Roll: 0, Pitch: 270, Yaw: 0
  MAV_SENSOR_ROTATION_PITCH_270 = 'MAV_SENSOR_ROTATION_PITCH_270',
  // Roll: 0, Pitch: 180, Yaw: 90
  MAV_SENSOR_ROTATION_PITCH_180_YAW_90 = 'MAV_SENSOR_ROTATION_PITCH_180_YAW_90',
  // Roll: 0, Pitch: 180, Yaw: 270
  MAV_SENSOR_ROTATION_PITCH_180_YAW_270 = 'MAV_SENSOR_ROTATION_PITCH_180_YAW_270',
  // Roll: 90, Pitch: 90, Yaw: 0
  MAV_SENSOR_ROTATION_ROLL_90_PITCH_90 = 'MAV_SENSOR_ROTATION_ROLL_90_PITCH_90',
  // Roll: 180, Pitch: 90, Yaw: 0
  MAV_SENSOR_ROTATION_ROLL_180_PITCH_90 = 'MAV_SENSOR_ROTATION_ROLL_180_PITCH_90',
  // Roll: 270, Pitch: 90, Yaw: 0
  MAV_SENSOR_ROTATION_ROLL_270_PITCH_90 = 'MAV_SENSOR_ROTATION_ROLL_270_PITCH_90',
  // Roll: 90, Pitch: 180, Yaw: 0
  MAV_SENSOR_ROTATION_ROLL_90_PITCH_180 = 'MAV_SENSOR_ROTATION_ROLL_90_PITCH_180',
  // Roll: 270, Pitch: 180, Yaw: 0
  MAV_SENSOR_ROTATION_ROLL_270_PITCH_180 = 'MAV_SENSOR_ROTATION_ROLL_270_PITCH_180',
  // Roll: 90, Pitch: 270, Yaw: 0
  MAV_SENSOR_ROTATION_ROLL_90_PITCH_270 = 'MAV_SENSOR_ROTATION_ROLL_90_PITCH_270',
  // Roll: 180, Pitch: 270, Yaw: 0
  MAV_SENSOR_ROTATION_ROLL_180_PITCH_270 = 'MAV_SENSOR_ROTATION_ROLL_180_PITCH_270',
  // Roll: 270, Pitch: 270, Yaw: 0
  MAV_SENSOR_ROTATION_ROLL_270_PITCH_270 = 'MAV_SENSOR_ROTATION_ROLL_270_PITCH_270',
  // Roll: 90, Pitch: 180, Yaw: 90
  MAV_SENSOR_ROTATION_ROLL_90_PITCH_180_YAW_90 = 'MAV_SENSOR_ROTATION_ROLL_90_PITCH_180_YAW_90',
  // Roll: 90, Pitch: 0, Yaw: 270
  MAV_SENSOR_ROTATION_ROLL_90_YAW_270 = 'MAV_SENSOR_ROTATION_ROLL_90_YAW_270',
  // Roll: 90, Pitch: 68, Yaw: 293
  MAV_SENSOR_ROTATION_ROLL_90_PITCH_68_YAW_293 = 'MAV_SENSOR_ROTATION_ROLL_90_PITCH_68_YAW_293',
  // Pitch: 315
  MAV_SENSOR_ROTATION_PITCH_315 = 'MAV_SENSOR_ROTATION_PITCH_315',
  // Roll: 90, Pitch: 315
  MAV_SENSOR_ROTATION_ROLL_90_PITCH_315 = 'MAV_SENSOR_ROTATION_ROLL_90_PITCH_315',
  // Custom orientation
  MAV_SENSOR_ROTATION_CUSTOM = 'MAV_SENSOR_ROTATION_CUSTOM',
}

export type MAV_SENSOR_ORIENTATION =
  | 'MAV_SENSOR_ROTATION_NONE' // Roll: 0, Pitch: 0, Yaw: 0
  | 'MAV_SENSOR_ROTATION_YAW_45' // Roll: 0, Pitch: 0, Yaw: 45
  | 'MAV_SENSOR_ROTATION_YAW_90' // Roll: 0, Pitch: 0, Yaw: 90
  | 'MAV_SENSOR_ROTATION_YAW_135' // Roll: 0, Pitch: 0, Yaw: 135
  | 'MAV_SENSOR_ROTATION_YAW_180' // Roll: 0, Pitch: 0, Yaw: 180
  | 'MAV_SENSOR_ROTATION_YAW_225' // Roll: 0, Pitch: 0, Yaw: 225
  | 'MAV_SENSOR_ROTATION_YAW_270' // Roll: 0, Pitch: 0, Yaw: 270
  | 'MAV_SENSOR_ROTATION_YAW_315' // Roll: 0, Pitch: 0, Yaw: 315
  | 'MAV_SENSOR_ROTATION_ROLL_180' // Roll: 180, Pitch: 0, Yaw: 0
  | 'MAV_SENSOR_ROTATION_ROLL_180_YAW_45' // Roll: 180, Pitch: 0, Yaw: 45
  | 'MAV_SENSOR_ROTATION_ROLL_180_YAW_90' // Roll: 180, Pitch: 0, Yaw: 90
  | 'MAV_SENSOR_ROTATION_ROLL_180_YAW_135' // Roll: 180, Pitch: 0, Yaw: 135
  | 'MAV_SENSOR_ROTATION_PITCH_180' // Roll: 0, Pitch: 180, Yaw: 0
  | 'MAV_SENSOR_ROTATION_ROLL_180_YAW_225' // Roll: 180, Pitch: 0, Yaw: 225
  | 'MAV_SENSOR_ROTATION_ROLL_180_YAW_270' // Roll: 180, Pitch: 0, Yaw: 270
  | 'MAV_SENSOR_ROTATION_ROLL_180_YAW_315' // Roll: 180, Pitch: 0, Yaw: 315
  | 'MAV_SENSOR_ROTATION_ROLL_90' // Roll: 90, Pitch: 0, Yaw: 0
  | 'MAV_SENSOR_ROTATION_ROLL_90_YAW_45' // Roll: 90, Pitch: 0, Yaw: 45
  | 'MAV_SENSOR_ROTATION_ROLL_90_YAW_90' // Roll: 90, Pitch: 0, Yaw: 90
  | 'MAV_SENSOR_ROTATION_ROLL_90_YAW_135' // Roll: 90, Pitch: 0, Yaw: 135
  | 'MAV_SENSOR_ROTATION_ROLL_270' // Roll: 270, Pitch: 0, Yaw: 0
  | 'MAV_SENSOR_ROTATION_ROLL_270_YAW_45' // Roll: 270, Pitch: 0, Yaw: 45
  | 'MAV_SENSOR_ROTATION_ROLL_270_YAW_90' // Roll: 270, Pitch: 0, Yaw: 90
  | 'MAV_SENSOR_ROTATION_ROLL_270_YAW_135' // Roll: 270, Pitch: 0, Yaw: 135
  | 'MAV_SENSOR_ROTATION_PITCH_90' // Roll: 0, Pitch: 90, Yaw: 0
  | 'MAV_SENSOR_ROTATION_PITCH_270' // Roll: 0, Pitch: 270, Yaw: 0
  | 'MAV_SENSOR_ROTATION_PITCH_180_YAW_90' // Roll: 0, Pitch: 180, Yaw: 90
  | 'MAV_SENSOR_ROTATION_PITCH_180_YAW_270' // Roll: 0, Pitch: 180, Yaw: 270
  | 'MAV_SENSOR_ROTATION_ROLL_90_PITCH_90' // Roll: 90, Pitch: 90, Yaw: 0
  | 'MAV_SENSOR_ROTATION_ROLL_180_PITCH_90' // Roll: 180, Pitch: 90, Yaw: 0
  | 'MAV_SENSOR_ROTATION_ROLL_270_PITCH_90' // Roll: 270, Pitch: 90, Yaw: 0
  | 'MAV_SENSOR_ROTATION_ROLL_90_PITCH_180' // Roll: 90, Pitch: 180, Yaw: 0
  | 'MAV_SENSOR_ROTATION_ROLL_270_PITCH_180' // Roll: 270, Pitch: 180, Yaw: 0
  | 'MAV_SENSOR_ROTATION_ROLL_90_PITCH_270' // Roll: 90, Pitch: 270, Yaw: 0
  | 'MAV_SENSOR_ROTATION_ROLL_180_PITCH_270' // Roll: 180, Pitch: 270, Yaw: 0
  | 'MAV_SENSOR_ROTATION_ROLL_270_PITCH_270' // Roll: 270, Pitch: 270, Yaw: 0
  | 'MAV_SENSOR_ROTATION_ROLL_90_PITCH_180_YAW_90' // Roll: 90, Pitch: 180, Yaw: 90
  | 'MAV_SENSOR_ROTATION_ROLL_90_YAW_270' // Roll: 90, Pitch: 0, Yaw: 270
  | 'MAV_SENSOR_ROTATION_ROLL_90_PITCH_68_YAW_293' // Roll: 90, Pitch: 68, Yaw: 293
  | 'MAV_SENSOR_ROTATION_PITCH_315' // Pitch: 315
  | 'MAV_SENSOR_ROTATION_ROLL_90_PITCH_315' // Roll: 90, Pitch: 315
  | 'MAV_SENSOR_ROTATION_CUSTOM' // Custom orientation
  | string;

// Bitmask of (optional) autopilot capabilities (64 bit). If a bit is set, the autopilot supports this capability.
export enum MAV_PROTOCOL_CAPABILITYEnum {
  // Autopilot supports the MISSION_ITEM float message type.
  // Note that MISSION_ITEM is deprecated, and autopilots should use MISSION_INT instead.
  MAV_PROTOCOL_CAPABILITY_MISSION_FLOAT = 'MAV_PROTOCOL_CAPABILITY_MISSION_FLOAT',
  // Autopilot supports the new param float message type.
  MAV_PROTOCOL_CAPABILITY_PARAM_FLOAT = 'MAV_PROTOCOL_CAPABILITY_PARAM_FLOAT',
  // Autopilot supports MISSION_ITEM_INT scaled integer message type.
  // Note that this flag must always be set if missions are supported, because missions must always use MISSION_ITEM_INT (rather than MISSION_ITEM, which is deprecated).
  MAV_PROTOCOL_CAPABILITY_MISSION_INT = 'MAV_PROTOCOL_CAPABILITY_MISSION_INT',
  // Autopilot supports COMMAND_INT scaled integer message type.
  MAV_PROTOCOL_CAPABILITY_COMMAND_INT = 'MAV_PROTOCOL_CAPABILITY_COMMAND_INT',
  // Parameter protocol uses byte-wise encoding of parameter values into param_value (float) fields: https://mavlink.io/en/services/parameter.html#parameter-encoding.
  // Note that either this flag or MAV_PROTOCOL_CAPABILITY_PARAM_ENCODE_C_CAST should be set if the parameter protocol is supported.
  MAV_PROTOCOL_CAPABILITY_PARAM_ENCODE_BYTEWISE = 'MAV_PROTOCOL_CAPABILITY_PARAM_ENCODE_BYTEWISE',
  // Autopilot supports the File Transfer Protocol v1: https://mavlink.io/en/services/ftp.html.
  MAV_PROTOCOL_CAPABILITY_FTP = 'MAV_PROTOCOL_CAPABILITY_FTP',
  // Autopilot supports commanding attitude offboard.
  MAV_PROTOCOL_CAPABILITY_SET_ATTITUDE_TARGET = 'MAV_PROTOCOL_CAPABILITY_SET_ATTITUDE_TARGET',
  // Autopilot supports commanding position and velocity targets in local NED frame.
  MAV_PROTOCOL_CAPABILITY_SET_POSITION_TARGET_LOCAL_NED = 'MAV_PROTOCOL_CAPABILITY_SET_POSITION_TARGET_LOCAL_NED',
  // Autopilot supports commanding position and velocity targets in global scaled integers.
  MAV_PROTOCOL_CAPABILITY_SET_POSITION_TARGET_GLOBAL_INT = 'MAV_PROTOCOL_CAPABILITY_SET_POSITION_TARGET_GLOBAL_INT',
  // Autopilot supports terrain protocol / data handling.
  MAV_PROTOCOL_CAPABILITY_TERRAIN = 'MAV_PROTOCOL_CAPABILITY_TERRAIN',
  // Reserved for future use.
  MAV_PROTOCOL_CAPABILITY_RESERVED3 = 'MAV_PROTOCOL_CAPABILITY_RESERVED3',
  // Autopilot supports the MAV_CMD_DO_FLIGHTTERMINATION command (flight termination).
  MAV_PROTOCOL_CAPABILITY_FLIGHT_TERMINATION = 'MAV_PROTOCOL_CAPABILITY_FLIGHT_TERMINATION',
  // Autopilot supports onboard compass calibration.
  MAV_PROTOCOL_CAPABILITY_COMPASS_CALIBRATION = 'MAV_PROTOCOL_CAPABILITY_COMPASS_CALIBRATION',
  // Autopilot supports MAVLink version 2.
  MAV_PROTOCOL_CAPABILITY_MAVLINK2 = 'MAV_PROTOCOL_CAPABILITY_MAVLINK2',
  // Autopilot supports mission fence protocol.
  MAV_PROTOCOL_CAPABILITY_MISSION_FENCE = 'MAV_PROTOCOL_CAPABILITY_MISSION_FENCE',
  // Autopilot supports mission rally point protocol.
  MAV_PROTOCOL_CAPABILITY_MISSION_RALLY = 'MAV_PROTOCOL_CAPABILITY_MISSION_RALLY',
  // Reserved for future use.
  MAV_PROTOCOL_CAPABILITY_RESERVED2 = 'MAV_PROTOCOL_CAPABILITY_RESERVED2',
  // Parameter protocol uses C-cast of parameter values to set the param_value (float) fields: https://mavlink.io/en/services/parameter.html#parameter-encoding.
  // Note that either this flag or MAV_PROTOCOL_CAPABILITY_PARAM_ENCODE_BYTEWISE should be set if the parameter protocol is supported.
  MAV_PROTOCOL_CAPABILITY_PARAM_ENCODE_C_CAST = 'MAV_PROTOCOL_CAPABILITY_PARAM_ENCODE_C_CAST',
  // This component implements/is a gimbal manager. This means the GIMBAL_MANAGER_INFORMATION, and other messages can be requested.
  MAV_PROTOCOL_CAPABILITY_COMPONENT_IMPLEMENTS_GIMBAL_MANAGER = 'MAV_PROTOCOL_CAPABILITY_COMPONENT_IMPLEMENTS_GIMBAL_MANAGER',
  // Component supports locking control to a particular GCS independent of its system (via MAV_CMD_REQUEST_OPERATOR_CONTROL).
  MAV_PROTOCOL_CAPABILITY_COMPONENT_ACCEPTS_GCS_CONTROL = 'MAV_PROTOCOL_CAPABILITY_COMPONENT_ACCEPTS_GCS_CONTROL',
  // Autopilot has a connected gripper. MAVLink Grippers would set MAV_TYPE_GRIPPER instead.
  MAV_PROTOCOL_CAPABILITY_GRIPPER = 'MAV_PROTOCOL_CAPABILITY_GRIPPER',
}

export type MAV_PROTOCOL_CAPABILITY =
  | 'MAV_PROTOCOL_CAPABILITY_MISSION_FLOAT' // Autopilot supports the MISSION_ITEM float message type. Note that MISSION_ITEM is deprecated, and autopilots should use MISSION_INT instead.
  | 'MAV_PROTOCOL_CAPABILITY_PARAM_FLOAT' // Autopilot supports the new param float message type.
  | 'MAV_PROTOCOL_CAPABILITY_MISSION_INT' // Autopilot supports MISSION_ITEM_INT scaled integer message type. Note that this flag must always be set if missions are supported, because missions must always use MISSION_ITEM_INT (rather than MISSION_ITEM, which is deprecated).
  | 'MAV_PROTOCOL_CAPABILITY_COMMAND_INT' // Autopilot supports COMMAND_INT scaled integer message type.
  | 'MAV_PROTOCOL_CAPABILITY_PARAM_ENCODE_BYTEWISE' // Parameter protocol uses byte-wise encoding of parameter values into param_value (float) fields: https://mavlink.io/en/services/parameter.html#parameter-encoding. Note that either this flag or MAV_PROTOCOL_CAPABILITY_PARAM_ENCODE_C_CAST should be set if the parameter protocol is supported.
  | 'MAV_PROTOCOL_CAPABILITY_FTP' // Autopilot supports the File Transfer Protocol v1: https://mavlink.io/en/services/ftp.html.
  | 'MAV_PROTOCOL_CAPABILITY_SET_ATTITUDE_TARGET' // Autopilot supports commanding attitude offboard.
  | 'MAV_PROTOCOL_CAPABILITY_SET_POSITION_TARGET_LOCAL_NED' // Autopilot supports commanding position and velocity targets in local NED frame.
  | 'MAV_PROTOCOL_CAPABILITY_SET_POSITION_TARGET_GLOBAL_INT' // Autopilot supports commanding position and velocity targets in global scaled integers.
  | 'MAV_PROTOCOL_CAPABILITY_TERRAIN' // Autopilot supports terrain protocol / data handling.
  | 'MAV_PROTOCOL_CAPABILITY_RESERVED3' // Reserved for future use.
  | 'MAV_PROTOCOL_CAPABILITY_FLIGHT_TERMINATION' // Autopilot supports the MAV_CMD_DO_FLIGHTTERMINATION command (flight termination).
  | 'MAV_PROTOCOL_CAPABILITY_COMPASS_CALIBRATION' // Autopilot supports onboard compass calibration.
  | 'MAV_PROTOCOL_CAPABILITY_MAVLINK2' // Autopilot supports MAVLink version 2.
  | 'MAV_PROTOCOL_CAPABILITY_MISSION_FENCE' // Autopilot supports mission fence protocol.
  | 'MAV_PROTOCOL_CAPABILITY_MISSION_RALLY' // Autopilot supports mission rally point protocol.
  | 'MAV_PROTOCOL_CAPABILITY_RESERVED2' // Reserved for future use.
  | 'MAV_PROTOCOL_CAPABILITY_PARAM_ENCODE_C_CAST' // Parameter protocol uses C-cast of parameter values to set the param_value (float) fields: https://mavlink.io/en/services/parameter.html#parameter-encoding. Note that either this flag or MAV_PROTOCOL_CAPABILITY_PARAM_ENCODE_BYTEWISE should be set if the parameter protocol is supported.
  | 'MAV_PROTOCOL_CAPABILITY_COMPONENT_IMPLEMENTS_GIMBAL_MANAGER' // This component implements/is a gimbal manager. This means the GIMBAL_MANAGER_INFORMATION, and other messages can be requested.
  | 'MAV_PROTOCOL_CAPABILITY_COMPONENT_ACCEPTS_GCS_CONTROL' // Component supports locking control to a particular GCS independent of its system (via MAV_CMD_REQUEST_OPERATOR_CONTROL).
  | 'MAV_PROTOCOL_CAPABILITY_GRIPPER' // Autopilot has a connected gripper. MAVLink Grippers would set MAV_TYPE_GRIPPER instead.
  | string;

// Type of mission items being requested/sent in mission protocol.
export enum MAV_MISSION_TYPEEnum {
  // Items are mission commands for main mission.
  MAV_MISSION_TYPE_MISSION = 'MAV_MISSION_TYPE_MISSION',
  // Specifies GeoFence area(s). Items are MAV_CMD_NAV_FENCE_ GeoFence items.
  MAV_MISSION_TYPE_FENCE = 'MAV_MISSION_TYPE_FENCE',
  // Specifies the rally points for the vehicle. Rally points are alternative RTL points. Items are MAV_CMD_NAV_RALLY_POINT rally point items.
  MAV_MISSION_TYPE_RALLY = 'MAV_MISSION_TYPE_RALLY',
  // Only used in MISSION_CLEAR_ALL to clear all mission types.
  MAV_MISSION_TYPE_ALL = 'MAV_MISSION_TYPE_ALL',
}

export type MAV_MISSION_TYPE =
  | 'MAV_MISSION_TYPE_MISSION' // Items are mission commands for main mission.
  | 'MAV_MISSION_TYPE_FENCE' // Specifies GeoFence area(s). Items are MAV_CMD_NAV_FENCE_ GeoFence items.
  | 'MAV_MISSION_TYPE_RALLY' // Specifies the rally points for the vehicle. Rally points are alternative RTL points. Items are MAV_CMD_NAV_RALLY_POINT rally point items.
  | 'MAV_MISSION_TYPE_ALL' // Only used in MISSION_CLEAR_ALL to clear all mission types.
  | string;

// Enumeration of estimator types
export enum MAV_ESTIMATOR_TYPEEnum {
  // Unknown type of the estimator.
  MAV_ESTIMATOR_TYPE_UNKNOWN = 'MAV_ESTIMATOR_TYPE_UNKNOWN',
  // This is a naive estimator without any real covariance feedback.
  MAV_ESTIMATOR_TYPE_NAIVE = 'MAV_ESTIMATOR_TYPE_NAIVE',
  // Computer vision based estimate. Might be up to scale.
  MAV_ESTIMATOR_TYPE_VISION = 'MAV_ESTIMATOR_TYPE_VISION',
  // Visual-inertial estimate.
  MAV_ESTIMATOR_TYPE_VIO = 'MAV_ESTIMATOR_TYPE_VIO',
  // Plain GPS estimate.
  MAV_ESTIMATOR_TYPE_GPS = 'MAV_ESTIMATOR_TYPE_GPS',
  // Estimator integrating GPS and inertial sensing.
  MAV_ESTIMATOR_TYPE_GPS_INS = 'MAV_ESTIMATOR_TYPE_GPS_INS',
  // Estimate from external motion capturing system.
  MAV_ESTIMATOR_TYPE_MOCAP = 'MAV_ESTIMATOR_TYPE_MOCAP',
  // Estimator based on lidar sensor input.
  MAV_ESTIMATOR_TYPE_LIDAR = 'MAV_ESTIMATOR_TYPE_LIDAR',
  // Estimator on autopilot.
  MAV_ESTIMATOR_TYPE_AUTOPILOT = 'MAV_ESTIMATOR_TYPE_AUTOPILOT',
}

export type MAV_ESTIMATOR_TYPE =
  | 'MAV_ESTIMATOR_TYPE_UNKNOWN' // Unknown type of the estimator.
  | 'MAV_ESTIMATOR_TYPE_NAIVE' // This is a naive estimator without any real covariance feedback.
  | 'MAV_ESTIMATOR_TYPE_VISION' // Computer vision based estimate. Might be up to scale.
  | 'MAV_ESTIMATOR_TYPE_VIO' // Visual-inertial estimate.
  | 'MAV_ESTIMATOR_TYPE_GPS' // Plain GPS estimate.
  | 'MAV_ESTIMATOR_TYPE_GPS_INS' // Estimator integrating GPS and inertial sensing.
  | 'MAV_ESTIMATOR_TYPE_MOCAP' // Estimate from external motion capturing system.
  | 'MAV_ESTIMATOR_TYPE_LIDAR' // Estimator based on lidar sensor input.
  | 'MAV_ESTIMATOR_TYPE_AUTOPILOT' // Estimator on autopilot.
  | string;

// Enumeration of battery types
export enum MAV_BATTERY_TYPEEnum {
  // Not specified.
  MAV_BATTERY_TYPE_UNKNOWN = 'MAV_BATTERY_TYPE_UNKNOWN',
  // Lithium polymer battery
  MAV_BATTERY_TYPE_LIPO = 'MAV_BATTERY_TYPE_LIPO',
  // Lithium-iron-phosphate battery
  MAV_BATTERY_TYPE_LIFE = 'MAV_BATTERY_TYPE_LIFE',
  // Lithium-ION battery
  MAV_BATTERY_TYPE_LION = 'MAV_BATTERY_TYPE_LION',
  // Nickel metal hydride battery
  MAV_BATTERY_TYPE_NIMH = 'MAV_BATTERY_TYPE_NIMH',
}

export type MAV_BATTERY_TYPE =
  | 'MAV_BATTERY_TYPE_UNKNOWN' // Not specified.
  | 'MAV_BATTERY_TYPE_LIPO' // Lithium polymer battery
  | 'MAV_BATTERY_TYPE_LIFE' // Lithium-iron-phosphate battery
  | 'MAV_BATTERY_TYPE_LION' // Lithium-ION battery
  | 'MAV_BATTERY_TYPE_NIMH' // Nickel metal hydride battery
  | string;

// Enumeration of battery functions
export enum MAV_BATTERY_FUNCTIONEnum {
  // Battery function is unknown
  MAV_BATTERY_FUNCTION_UNKNOWN = 'MAV_BATTERY_FUNCTION_UNKNOWN',
  // Battery supports all flight systems
  MAV_BATTERY_FUNCTION_ALL = 'MAV_BATTERY_FUNCTION_ALL',
  // Battery for the propulsion system
  MAV_BATTERY_FUNCTION_PROPULSION = 'MAV_BATTERY_FUNCTION_PROPULSION',
  // Avionics battery
  MAV_BATTERY_FUNCTION_AVIONICS = 'MAV_BATTERY_FUNCTION_AVIONICS',
  // Payload battery
  MAV_BATTERY_FUNCTION_PAYLOAD = 'MAV_BATTERY_FUNCTION_PAYLOAD',
}

export type MAV_BATTERY_FUNCTION =
  | 'MAV_BATTERY_FUNCTION_UNKNOWN' // Battery function is unknown
  | 'MAV_BATTERY_FUNCTION_ALL' // Battery supports all flight systems
  | 'MAV_BATTERY_FUNCTION_PROPULSION' // Battery for the propulsion system
  | 'MAV_BATTERY_FUNCTION_AVIONICS' // Avionics battery
  | 'MAV_BATTERY_FUNCTION_PAYLOAD' // Payload battery
  | string;

// Enumeration for battery charge states.
export enum MAV_BATTERY_CHARGE_STATEEnum {
  // Low battery state is not provided
  MAV_BATTERY_CHARGE_STATE_UNDEFINED = 'MAV_BATTERY_CHARGE_STATE_UNDEFINED',
  // Battery is not in low state. Normal operation.
  MAV_BATTERY_CHARGE_STATE_OK = 'MAV_BATTERY_CHARGE_STATE_OK',
  // Battery state is low, warn and monitor close.
  MAV_BATTERY_CHARGE_STATE_LOW = 'MAV_BATTERY_CHARGE_STATE_LOW',
  // Battery state is critical, return or abort immediately.
  MAV_BATTERY_CHARGE_STATE_CRITICAL = 'MAV_BATTERY_CHARGE_STATE_CRITICAL',
  // Battery state is too low for ordinary abort sequence. Perform fastest possible emergency stop to prevent damage.
  MAV_BATTERY_CHARGE_STATE_EMERGENCY = 'MAV_BATTERY_CHARGE_STATE_EMERGENCY',
  // Battery failed, damage unavoidable. Possible causes (faults) are listed in MAV_BATTERY_FAULT.
  MAV_BATTERY_CHARGE_STATE_FAILED = 'MAV_BATTERY_CHARGE_STATE_FAILED',
  // Battery is diagnosed to be defective or an error occurred, usage is discouraged / prohibited. Possible causes (faults) are listed in MAV_BATTERY_FAULT.
  MAV_BATTERY_CHARGE_STATE_UNHEALTHY = 'MAV_BATTERY_CHARGE_STATE_UNHEALTHY',
  // Battery is charging.
  MAV_BATTERY_CHARGE_STATE_CHARGING = 'MAV_BATTERY_CHARGE_STATE_CHARGING',
}

export type MAV_BATTERY_CHARGE_STATE =
  | 'MAV_BATTERY_CHARGE_STATE_UNDEFINED' // Low battery state is not provided
  | 'MAV_BATTERY_CHARGE_STATE_OK' // Battery is not in low state. Normal operation.
  | 'MAV_BATTERY_CHARGE_STATE_LOW' // Battery state is low, warn and monitor close.
  | 'MAV_BATTERY_CHARGE_STATE_CRITICAL' // Battery state is critical, return or abort immediately.
  | 'MAV_BATTERY_CHARGE_STATE_EMERGENCY' // Battery state is too low for ordinary abort sequence. Perform fastest possible emergency stop to prevent damage.
  | 'MAV_BATTERY_CHARGE_STATE_FAILED' // Battery failed, damage unavoidable. Possible causes (faults) are listed in MAV_BATTERY_FAULT.
  | 'MAV_BATTERY_CHARGE_STATE_UNHEALTHY' // Battery is diagnosed to be defective or an error occurred, usage is discouraged / prohibited. Possible causes (faults) are listed in MAV_BATTERY_FAULT.
  | 'MAV_BATTERY_CHARGE_STATE_CHARGING' // Battery is charging.
  | string;

// Battery mode. Note, the normal operation mode (i.e. when flying) should be reported as MAV_BATTERY_MODE_UNKNOWN to allow message trimming in normal flight.
export enum MAV_BATTERY_MODEEnum {
  // Battery mode not supported/unknown battery mode/normal operation.
  MAV_BATTERY_MODE_UNKNOWN = 'MAV_BATTERY_MODE_UNKNOWN',
  // Battery is auto discharging (towards storage level).
  MAV_BATTERY_MODE_AUTO_DISCHARGING = 'MAV_BATTERY_MODE_AUTO_DISCHARGING',
  // Battery in hot-swap mode (current limited to prevent spikes that might damage sensitive electrical circuits).
  MAV_BATTERY_MODE_HOT_SWAP = 'MAV_BATTERY_MODE_HOT_SWAP',
}

export type MAV_BATTERY_MODE =
  | 'MAV_BATTERY_MODE_UNKNOWN' // Battery mode not supported/unknown battery mode/normal operation.
  | 'MAV_BATTERY_MODE_AUTO_DISCHARGING' // Battery is auto discharging (towards storage level).
  | 'MAV_BATTERY_MODE_HOT_SWAP' // Battery in hot-swap mode (current limited to prevent spikes that might damage sensitive electrical circuits).
  | string;

// Smart battery supply status/fault flags (bitmask) for health indication. The battery must also report either MAV_BATTERY_CHARGE_STATE_FAILED or MAV_BATTERY_CHARGE_STATE_UNHEALTHY if any of these are set.
export enum MAV_BATTERY_FAULTEnum {
  // Battery has deep discharged.
  MAV_BATTERY_FAULT_DEEP_DISCHARGE = 'MAV_BATTERY_FAULT_DEEP_DISCHARGE',
  // Voltage spikes.
  MAV_BATTERY_FAULT_SPIKES = 'MAV_BATTERY_FAULT_SPIKES',
  // One or more cells have failed. Battery should also report MAV_BATTERY_CHARGE_STATE_FAILE (and should not be used).
  MAV_BATTERY_FAULT_CELL_FAIL = 'MAV_BATTERY_FAULT_CELL_FAIL',
  // Over-current fault.
  MAV_BATTERY_FAULT_OVER_CURRENT = 'MAV_BATTERY_FAULT_OVER_CURRENT',
  // Over-temperature fault.
  MAV_BATTERY_FAULT_OVER_TEMPERATURE = 'MAV_BATTERY_FAULT_OVER_TEMPERATURE',
  // Under-temperature fault.
  MAV_BATTERY_FAULT_UNDER_TEMPERATURE = 'MAV_BATTERY_FAULT_UNDER_TEMPERATURE',
  // Vehicle voltage is not compatible with this battery (batteries on same power rail should have similar voltage).
  MAV_BATTERY_FAULT_INCOMPATIBLE_VOLTAGE = 'MAV_BATTERY_FAULT_INCOMPATIBLE_VOLTAGE',
  // Battery firmware is not compatible with current autopilot firmware.
  MAV_BATTERY_FAULT_INCOMPATIBLE_FIRMWARE = 'MAV_BATTERY_FAULT_INCOMPATIBLE_FIRMWARE',
  // Battery is not compatible due to cell configuration (e.g. 5s1p when vehicle requires 6s).
  BATTERY_FAULT_INCOMPATIBLE_CELLS_CONFIGURATION = 'BATTERY_FAULT_INCOMPATIBLE_CELLS_CONFIGURATION',
}

export type MAV_BATTERY_FAULT =
  | 'MAV_BATTERY_FAULT_DEEP_DISCHARGE' // Battery has deep discharged.
  | 'MAV_BATTERY_FAULT_SPIKES' // Voltage spikes.
  | 'MAV_BATTERY_FAULT_CELL_FAIL' // One or more cells have failed. Battery should also report MAV_BATTERY_CHARGE_STATE_FAILE (and should not be used).
  | 'MAV_BATTERY_FAULT_OVER_CURRENT' // Over-current fault.
  | 'MAV_BATTERY_FAULT_OVER_TEMPERATURE' // Over-temperature fault.
  | 'MAV_BATTERY_FAULT_UNDER_TEMPERATURE' // Under-temperature fault.
  | 'MAV_BATTERY_FAULT_INCOMPATIBLE_VOLTAGE' // Vehicle voltage is not compatible with this battery (batteries on same power rail should have similar voltage).
  | 'MAV_BATTERY_FAULT_INCOMPATIBLE_FIRMWARE' // Battery firmware is not compatible with current autopilot firmware.
  | 'BATTERY_FAULT_INCOMPATIBLE_CELLS_CONFIGURATION' // Battery is not compatible due to cell configuration (e.g. 5s1p when vehicle requires 6s).
  | string;

// Fuel types for use in FUEL_TYPE. Fuel types specify the units for the maximum, available and consumed fuel, and for the flow rates.
export enum MAV_FUEL_TYPEEnum {
  // Not specified. Fuel levels are normalized (i.e. maximum is 1, and other levels are relative to 1).
  MAV_FUEL_TYPE_UNKNOWN = 'MAV_FUEL_TYPE_UNKNOWN',
  // A generic liquid fuel. Fuel levels are in millilitres (ml). Fuel rates are in millilitres/second.
  MAV_FUEL_TYPE_LIQUID = 'MAV_FUEL_TYPE_LIQUID',
  // A gas tank. Fuel levels are in kilo-Pascal (kPa), and flow rates are in milliliters per second (ml/s).
  MAV_FUEL_TYPE_GAS = 'MAV_FUEL_TYPE_GAS',
}

export type MAV_FUEL_TYPE =
  | 'MAV_FUEL_TYPE_UNKNOWN' // Not specified. Fuel levels are normalized (i.e. maximum is 1, and other levels are relative to 1).
  | 'MAV_FUEL_TYPE_LIQUID' // A generic liquid fuel. Fuel levels are in millilitres (ml). Fuel rates are in millilitres/second.
  | 'MAV_FUEL_TYPE_GAS' // A gas tank. Fuel levels are in kilo-Pascal (kPa), and flow rates are in milliliters per second (ml/s).
  | string;

// Flags to report status/failure cases for a power generator (used in GENERATOR_STATUS). Note that FAULTS are conditions that cause the generator to fail. Warnings are conditions that require attention before the next use (they indicate the system is not operating properly).
export enum MAV_GENERATOR_STATUS_FLAGEnum {
  // Generator is off.
  MAV_GENERATOR_STATUS_FLAG_OFF = 'MAV_GENERATOR_STATUS_FLAG_OFF',
  // Generator is ready to start generating power.
  MAV_GENERATOR_STATUS_FLAG_READY = 'MAV_GENERATOR_STATUS_FLAG_READY',
  // Generator is generating power.
  MAV_GENERATOR_STATUS_FLAG_GENERATING = 'MAV_GENERATOR_STATUS_FLAG_GENERATING',
  // Generator is charging the batteries (generating enough power to charge and provide the load).
  MAV_GENERATOR_STATUS_FLAG_CHARGING = 'MAV_GENERATOR_STATUS_FLAG_CHARGING',
  // Generator is operating at a reduced maximum power.
  MAV_GENERATOR_STATUS_FLAG_REDUCED_POWER = 'MAV_GENERATOR_STATUS_FLAG_REDUCED_POWER',
  // Generator is providing the maximum output.
  MAV_GENERATOR_STATUS_FLAG_MAXPOWER = 'MAV_GENERATOR_STATUS_FLAG_MAXPOWER',
  // Generator is near the maximum operating temperature, cooling is insufficient.
  MAV_GENERATOR_STATUS_FLAG_OVERTEMP_WARNING = 'MAV_GENERATOR_STATUS_FLAG_OVERTEMP_WARNING',
  // Generator hit the maximum operating temperature and shutdown.
  MAV_GENERATOR_STATUS_FLAG_OVERTEMP_FAULT = 'MAV_GENERATOR_STATUS_FLAG_OVERTEMP_FAULT',
  // Power electronics are near the maximum operating temperature, cooling is insufficient.
  MAV_GENERATOR_STATUS_FLAG_ELECTRONICS_OVERTEMP_WARNING = 'MAV_GENERATOR_STATUS_FLAG_ELECTRONICS_OVERTEMP_WARNING',
  // Power electronics hit the maximum operating temperature and shutdown.
  MAV_GENERATOR_STATUS_FLAG_ELECTRONICS_OVERTEMP_FAULT = 'MAV_GENERATOR_STATUS_FLAG_ELECTRONICS_OVERTEMP_FAULT',
  // Power electronics experienced a fault and shutdown.
  MAV_GENERATOR_STATUS_FLAG_ELECTRONICS_FAULT = 'MAV_GENERATOR_STATUS_FLAG_ELECTRONICS_FAULT',
  // The power source supplying the generator failed e.g. mechanical generator stopped, tether is no longer providing power, solar cell is in shade, hydrogen reaction no longer happening.
  MAV_GENERATOR_STATUS_FLAG_POWERSOURCE_FAULT = 'MAV_GENERATOR_STATUS_FLAG_POWERSOURCE_FAULT',
  // Generator controller having communication problems.
  MAV_GENERATOR_STATUS_FLAG_COMMUNICATION_WARNING = 'MAV_GENERATOR_STATUS_FLAG_COMMUNICATION_WARNING',
  // Power electronic or generator cooling system error.
  MAV_GENERATOR_STATUS_FLAG_COOLING_WARNING = 'MAV_GENERATOR_STATUS_FLAG_COOLING_WARNING',
  // Generator controller power rail experienced a fault.
  MAV_GENERATOR_STATUS_FLAG_POWER_RAIL_FAULT = 'MAV_GENERATOR_STATUS_FLAG_POWER_RAIL_FAULT',
  // Generator controller exceeded the overcurrent threshold and shutdown to prevent damage.
  MAV_GENERATOR_STATUS_FLAG_OVERCURRENT_FAULT = 'MAV_GENERATOR_STATUS_FLAG_OVERCURRENT_FAULT',
  // Generator controller detected a high current going into the batteries and shutdown to prevent battery damage.
  MAV_GENERATOR_STATUS_FLAG_BATTERY_OVERCHARGE_CURRENT_FAULT = 'MAV_GENERATOR_STATUS_FLAG_BATTERY_OVERCHARGE_CURRENT_FAULT',
  // Generator controller exceeded it&#x27;s overvoltage threshold and shutdown to prevent it exceeding the voltage rating.
  MAV_GENERATOR_STATUS_FLAG_OVERVOLTAGE_FAULT = 'MAV_GENERATOR_STATUS_FLAG_OVERVOLTAGE_FAULT',
  // Batteries are under voltage (generator will not start).
  MAV_GENERATOR_STATUS_FLAG_BATTERY_UNDERVOLT_FAULT = 'MAV_GENERATOR_STATUS_FLAG_BATTERY_UNDERVOLT_FAULT',
  // Generator start is inhibited by e.g. a safety switch.
  MAV_GENERATOR_STATUS_FLAG_START_INHIBITED = 'MAV_GENERATOR_STATUS_FLAG_START_INHIBITED',
  // Generator requires maintenance.
  MAV_GENERATOR_STATUS_FLAG_MAINTENANCE_REQUIRED = 'MAV_GENERATOR_STATUS_FLAG_MAINTENANCE_REQUIRED',
  // Generator is not ready to generate yet.
  MAV_GENERATOR_STATUS_FLAG_WARMING_UP = 'MAV_GENERATOR_STATUS_FLAG_WARMING_UP',
  // Generator is idle.
  MAV_GENERATOR_STATUS_FLAG_IDLE = 'MAV_GENERATOR_STATUS_FLAG_IDLE',
}

export type MAV_GENERATOR_STATUS_FLAG =
  | 'MAV_GENERATOR_STATUS_FLAG_OFF' // Generator is off.
  | 'MAV_GENERATOR_STATUS_FLAG_READY' // Generator is ready to start generating power.
  | 'MAV_GENERATOR_STATUS_FLAG_GENERATING' // Generator is generating power.
  | 'MAV_GENERATOR_STATUS_FLAG_CHARGING' // Generator is charging the batteries (generating enough power to charge and provide the load).
  | 'MAV_GENERATOR_STATUS_FLAG_REDUCED_POWER' // Generator is operating at a reduced maximum power.
  | 'MAV_GENERATOR_STATUS_FLAG_MAXPOWER' // Generator is providing the maximum output.
  | 'MAV_GENERATOR_STATUS_FLAG_OVERTEMP_WARNING' // Generator is near the maximum operating temperature, cooling is insufficient.
  | 'MAV_GENERATOR_STATUS_FLAG_OVERTEMP_FAULT' // Generator hit the maximum operating temperature and shutdown.
  | 'MAV_GENERATOR_STATUS_FLAG_ELECTRONICS_OVERTEMP_WARNING' // Power electronics are near the maximum operating temperature, cooling is insufficient.
  | 'MAV_GENERATOR_STATUS_FLAG_ELECTRONICS_OVERTEMP_FAULT' // Power electronics hit the maximum operating temperature and shutdown.
  | 'MAV_GENERATOR_STATUS_FLAG_ELECTRONICS_FAULT' // Power electronics experienced a fault and shutdown.
  | 'MAV_GENERATOR_STATUS_FLAG_POWERSOURCE_FAULT' // The power source supplying the generator failed e.g. mechanical generator stopped, tether is no longer providing power, solar cell is in shade, hydrogen reaction no longer happening.
  | 'MAV_GENERATOR_STATUS_FLAG_COMMUNICATION_WARNING' // Generator controller having communication problems.
  | 'MAV_GENERATOR_STATUS_FLAG_COOLING_WARNING' // Power electronic or generator cooling system error.
  | 'MAV_GENERATOR_STATUS_FLAG_POWER_RAIL_FAULT' // Generator controller power rail experienced a fault.
  | 'MAV_GENERATOR_STATUS_FLAG_OVERCURRENT_FAULT' // Generator controller exceeded the overcurrent threshold and shutdown to prevent damage.
  | 'MAV_GENERATOR_STATUS_FLAG_BATTERY_OVERCHARGE_CURRENT_FAULT' // Generator controller detected a high current going into the batteries and shutdown to prevent battery damage.
  | 'MAV_GENERATOR_STATUS_FLAG_OVERVOLTAGE_FAULT' // Generator controller exceeded it&#x27;s overvoltage threshold and shutdown to prevent it exceeding the voltage rating.
  | 'MAV_GENERATOR_STATUS_FLAG_BATTERY_UNDERVOLT_FAULT' // Batteries are under voltage (generator will not start).
  | 'MAV_GENERATOR_STATUS_FLAG_START_INHIBITED' // Generator start is inhibited by e.g. a safety switch.
  | 'MAV_GENERATOR_STATUS_FLAG_MAINTENANCE_REQUIRED' // Generator requires maintenance.
  | 'MAV_GENERATOR_STATUS_FLAG_WARMING_UP' // Generator is not ready to generate yet.
  | 'MAV_GENERATOR_STATUS_FLAG_IDLE' // Generator is idle.
  | string;

// Enumeration of VTOL states
export enum MAV_VTOL_STATEEnum {
  // MAV is not configured as VTOL
  MAV_VTOL_STATE_UNDEFINED = 'MAV_VTOL_STATE_UNDEFINED',
  // VTOL is in transition from multicopter to fixed-wing
  MAV_VTOL_STATE_TRANSITION_TO_FW = 'MAV_VTOL_STATE_TRANSITION_TO_FW',
  // VTOL is in transition from fixed-wing to multicopter
  MAV_VTOL_STATE_TRANSITION_TO_MC = 'MAV_VTOL_STATE_TRANSITION_TO_MC',
  // VTOL is in multicopter state
  MAV_VTOL_STATE_MC = 'MAV_VTOL_STATE_MC',
  // VTOL is in fixed-wing state
  MAV_VTOL_STATE_FW = 'MAV_VTOL_STATE_FW',
}

export type MAV_VTOL_STATE =
  | 'MAV_VTOL_STATE_UNDEFINED' // MAV is not configured as VTOL
  | 'MAV_VTOL_STATE_TRANSITION_TO_FW' // VTOL is in transition from multicopter to fixed-wing
  | 'MAV_VTOL_STATE_TRANSITION_TO_MC' // VTOL is in transition from fixed-wing to multicopter
  | 'MAV_VTOL_STATE_MC' // VTOL is in multicopter state
  | 'MAV_VTOL_STATE_FW' // VTOL is in fixed-wing state
  | string;

// Enumeration of landed detector states
export enum MAV_LANDED_STATEEnum {
  // MAV landed state is unknown
  MAV_LANDED_STATE_UNDEFINED = 'MAV_LANDED_STATE_UNDEFINED',
  // MAV is landed (on ground)
  MAV_LANDED_STATE_ON_GROUND = 'MAV_LANDED_STATE_ON_GROUND',
  // MAV is in air
  MAV_LANDED_STATE_IN_AIR = 'MAV_LANDED_STATE_IN_AIR',
  // MAV currently taking off
  MAV_LANDED_STATE_TAKEOFF = 'MAV_LANDED_STATE_TAKEOFF',
  // MAV currently landing
  MAV_LANDED_STATE_LANDING = 'MAV_LANDED_STATE_LANDING',
}

export type MAV_LANDED_STATE =
  | 'MAV_LANDED_STATE_UNDEFINED' // MAV landed state is unknown
  | 'MAV_LANDED_STATE_ON_GROUND' // MAV is landed (on ground)
  | 'MAV_LANDED_STATE_IN_AIR' // MAV is in air
  | 'MAV_LANDED_STATE_TAKEOFF' // MAV currently taking off
  | 'MAV_LANDED_STATE_LANDING' // MAV currently landing
  | string;

// Enumeration of the ADSB altimeter types
export enum ADSB_ALTITUDE_TYPEEnum {
  // Altitude reported from a Baro source using QNH reference
  ADSB_ALTITUDE_TYPE_PRESSURE_QNH = 'ADSB_ALTITUDE_TYPE_PRESSURE_QNH',
  // Altitude reported from a GNSS source
  ADSB_ALTITUDE_TYPE_GEOMETRIC = 'ADSB_ALTITUDE_TYPE_GEOMETRIC',
}

export type ADSB_ALTITUDE_TYPE =
  | 'ADSB_ALTITUDE_TYPE_PRESSURE_QNH' // Altitude reported from a Baro source using QNH reference
  | 'ADSB_ALTITUDE_TYPE_GEOMETRIC' // Altitude reported from a GNSS source
  | string;

// ADSB classification for the type of vehicle emitting the transponder signal
export enum ADSB_EMITTER_TYPEEnum {
  ADSB_EMITTER_TYPE_NO_INFO = 'ADSB_EMITTER_TYPE_NO_INFO',
  ADSB_EMITTER_TYPE_LIGHT = 'ADSB_EMITTER_TYPE_LIGHT',
  ADSB_EMITTER_TYPE_SMALL = 'ADSB_EMITTER_TYPE_SMALL',
  ADSB_EMITTER_TYPE_LARGE = 'ADSB_EMITTER_TYPE_LARGE',
  ADSB_EMITTER_TYPE_HIGH_VORTEX_LARGE = 'ADSB_EMITTER_TYPE_HIGH_VORTEX_LARGE',
  ADSB_EMITTER_TYPE_HEAVY = 'ADSB_EMITTER_TYPE_HEAVY',
  ADSB_EMITTER_TYPE_HIGHLY_MANUV = 'ADSB_EMITTER_TYPE_HIGHLY_MANUV',
  ADSB_EMITTER_TYPE_ROTOCRAFT = 'ADSB_EMITTER_TYPE_ROTOCRAFT',
  ADSB_EMITTER_TYPE_UNASSIGNED = 'ADSB_EMITTER_TYPE_UNASSIGNED',
  ADSB_EMITTER_TYPE_GLIDER = 'ADSB_EMITTER_TYPE_GLIDER',
  ADSB_EMITTER_TYPE_LIGHTER_AIR = 'ADSB_EMITTER_TYPE_LIGHTER_AIR',
  ADSB_EMITTER_TYPE_PARACHUTE = 'ADSB_EMITTER_TYPE_PARACHUTE',
  ADSB_EMITTER_TYPE_ULTRA_LIGHT = 'ADSB_EMITTER_TYPE_ULTRA_LIGHT',
  ADSB_EMITTER_TYPE_UNASSIGNED2 = 'ADSB_EMITTER_TYPE_UNASSIGNED2',
  ADSB_EMITTER_TYPE_UAV = 'ADSB_EMITTER_TYPE_UAV',
  ADSB_EMITTER_TYPE_SPACE = 'ADSB_EMITTER_TYPE_SPACE',
  ADSB_EMITTER_TYPE_UNASSGINED3 = 'ADSB_EMITTER_TYPE_UNASSGINED3',
  ADSB_EMITTER_TYPE_EMERGENCY_SURFACE = 'ADSB_EMITTER_TYPE_EMERGENCY_SURFACE',
  ADSB_EMITTER_TYPE_SERVICE_SURFACE = 'ADSB_EMITTER_TYPE_SERVICE_SURFACE',
  ADSB_EMITTER_TYPE_POINT_OBSTACLE = 'ADSB_EMITTER_TYPE_POINT_OBSTACLE',
}

export type ADSB_EMITTER_TYPE =
  | 'ADSB_EMITTER_TYPE_NO_INFO'
  | 'ADSB_EMITTER_TYPE_LIGHT'
  | 'ADSB_EMITTER_TYPE_SMALL'
  | 'ADSB_EMITTER_TYPE_LARGE'
  | 'ADSB_EMITTER_TYPE_HIGH_VORTEX_LARGE'
  | 'ADSB_EMITTER_TYPE_HEAVY'
  | 'ADSB_EMITTER_TYPE_HIGHLY_MANUV'
  | 'ADSB_EMITTER_TYPE_ROTOCRAFT'
  | 'ADSB_EMITTER_TYPE_UNASSIGNED'
  | 'ADSB_EMITTER_TYPE_GLIDER'
  | 'ADSB_EMITTER_TYPE_LIGHTER_AIR'
  | 'ADSB_EMITTER_TYPE_PARACHUTE'
  | 'ADSB_EMITTER_TYPE_ULTRA_LIGHT'
  | 'ADSB_EMITTER_TYPE_UNASSIGNED2'
  | 'ADSB_EMITTER_TYPE_UAV'
  | 'ADSB_EMITTER_TYPE_SPACE'
  | 'ADSB_EMITTER_TYPE_UNASSGINED3'
  | 'ADSB_EMITTER_TYPE_EMERGENCY_SURFACE'
  | 'ADSB_EMITTER_TYPE_SERVICE_SURFACE'
  | 'ADSB_EMITTER_TYPE_POINT_OBSTACLE'
  | string;

// These flags indicate status such as data validity of each data source. Set &#x3D; data valid
export enum ADSB_FLAGSEnum {
  ADSB_FLAGS_VALID_COORDS = 'ADSB_FLAGS_VALID_COORDS',
  ADSB_FLAGS_VALID_ALTITUDE = 'ADSB_FLAGS_VALID_ALTITUDE',
  ADSB_FLAGS_VALID_HEADING = 'ADSB_FLAGS_VALID_HEADING',
  ADSB_FLAGS_VALID_VELOCITY = 'ADSB_FLAGS_VALID_VELOCITY',
  ADSB_FLAGS_VALID_CALLSIGN = 'ADSB_FLAGS_VALID_CALLSIGN',
  ADSB_FLAGS_VALID_SQUAWK = 'ADSB_FLAGS_VALID_SQUAWK',
  ADSB_FLAGS_SIMULATED = 'ADSB_FLAGS_SIMULATED',
  ADSB_FLAGS_VERTICAL_VELOCITY_VALID = 'ADSB_FLAGS_VERTICAL_VELOCITY_VALID',
  ADSB_FLAGS_BARO_VALID = 'ADSB_FLAGS_BARO_VALID',
  ADSB_FLAGS_SOURCE_UAT = 'ADSB_FLAGS_SOURCE_UAT',
}

export type ADSB_FLAGS =
  | 'ADSB_FLAGS_VALID_COORDS'
  | 'ADSB_FLAGS_VALID_ALTITUDE'
  | 'ADSB_FLAGS_VALID_HEADING'
  | 'ADSB_FLAGS_VALID_VELOCITY'
  | 'ADSB_FLAGS_VALID_CALLSIGN'
  | 'ADSB_FLAGS_VALID_SQUAWK'
  | 'ADSB_FLAGS_SIMULATED'
  | 'ADSB_FLAGS_VERTICAL_VELOCITY_VALID'
  | 'ADSB_FLAGS_BARO_VALID'
  | 'ADSB_FLAGS_SOURCE_UAT'
  | string;

// Bitmap of options for the MAV_CMD_DO_REPOSITION
export enum MAV_DO_REPOSITION_FLAGSEnum {
  // The aircraft should immediately transition into guided. This should not be set for follow me applications
  MAV_DO_REPOSITION_FLAGS_CHANGE_MODE = 'MAV_DO_REPOSITION_FLAGS_CHANGE_MODE',
  // Yaw relative to the vehicle current heading (if not set, relative to North).
  MAV_DO_REPOSITION_FLAGS_RELATIVE_YAW = 'MAV_DO_REPOSITION_FLAGS_RELATIVE_YAW',
}

export type MAV_DO_REPOSITION_FLAGS =
  | 'MAV_DO_REPOSITION_FLAGS_CHANGE_MODE' // The aircraft should immediately transition into guided. This should not be set for follow me applications
  | 'MAV_DO_REPOSITION_FLAGS_RELATIVE_YAW' // Yaw relative to the vehicle current heading (if not set, relative to North).
  | string;

// Speed setpoint types used in MAV_CMD_DO_CHANGE_SPEED
export enum SPEED_TYPEEnum {
  // Airspeed
  SPEED_TYPE_AIRSPEED = 'SPEED_TYPE_AIRSPEED',
  // Groundspeed
  SPEED_TYPE_GROUNDSPEED = 'SPEED_TYPE_GROUNDSPEED',
  // Climb speed
  SPEED_TYPE_CLIMB_SPEED = 'SPEED_TYPE_CLIMB_SPEED',
  // Descent speed
  SPEED_TYPE_DESCENT_SPEED = 'SPEED_TYPE_DESCENT_SPEED',
}

export type SPEED_TYPE =
  | 'SPEED_TYPE_AIRSPEED' // Airspeed
  | 'SPEED_TYPE_GROUNDSPEED' // Groundspeed
  | 'SPEED_TYPE_CLIMB_SPEED' // Climb speed
  | 'SPEED_TYPE_DESCENT_SPEED' // Descent speed
  | string;

// Flags in ESTIMATOR_STATUS message
export enum ESTIMATOR_STATUS_FLAGSEnum {
  // True if the attitude estimate is good
  ESTIMATOR_ATTITUDE = 'ESTIMATOR_ATTITUDE',
  // True if the horizontal velocity estimate is good
  ESTIMATOR_VELOCITY_HORIZ = 'ESTIMATOR_VELOCITY_HORIZ',
  // True if the  vertical velocity estimate is good
  ESTIMATOR_VELOCITY_VERT = 'ESTIMATOR_VELOCITY_VERT',
  // True if the horizontal position (relative) estimate is good
  ESTIMATOR_POS_HORIZ_REL = 'ESTIMATOR_POS_HORIZ_REL',
  // True if the horizontal position (absolute) estimate is good
  ESTIMATOR_POS_HORIZ_ABS = 'ESTIMATOR_POS_HORIZ_ABS',
  // True if the vertical position (absolute) estimate is good
  ESTIMATOR_POS_VERT_ABS = 'ESTIMATOR_POS_VERT_ABS',
  // True if the vertical position (above ground) estimate is good
  ESTIMATOR_POS_VERT_AGL = 'ESTIMATOR_POS_VERT_AGL',
  // True if the EKF is in a constant position mode and is not using external measurements (eg GPS or optical flow)
  ESTIMATOR_CONST_POS_MODE = 'ESTIMATOR_CONST_POS_MODE',
  // True if the EKF has sufficient data to enter a mode that will provide a (relative) position estimate
  ESTIMATOR_PRED_POS_HORIZ_REL = 'ESTIMATOR_PRED_POS_HORIZ_REL',
  // True if the EKF has sufficient data to enter a mode that will provide a (absolute) position estimate
  ESTIMATOR_PRED_POS_HORIZ_ABS = 'ESTIMATOR_PRED_POS_HORIZ_ABS',
  // True if the EKF has detected a GPS glitch
  ESTIMATOR_GPS_GLITCH = 'ESTIMATOR_GPS_GLITCH',
  // True if the EKF has detected bad accelerometer data
  ESTIMATOR_ACCEL_ERROR = 'ESTIMATOR_ACCEL_ERROR',
}

export type ESTIMATOR_STATUS_FLAGS =
  | 'ESTIMATOR_ATTITUDE' // True if the attitude estimate is good
  | 'ESTIMATOR_VELOCITY_HORIZ' // True if the horizontal velocity estimate is good
  | 'ESTIMATOR_VELOCITY_VERT' // True if the  vertical velocity estimate is good
  | 'ESTIMATOR_POS_HORIZ_REL' // True if the horizontal position (relative) estimate is good
  | 'ESTIMATOR_POS_HORIZ_ABS' // True if the horizontal position (absolute) estimate is good
  | 'ESTIMATOR_POS_VERT_ABS' // True if the vertical position (absolute) estimate is good
  | 'ESTIMATOR_POS_VERT_AGL' // True if the vertical position (above ground) estimate is good
  | 'ESTIMATOR_CONST_POS_MODE' // True if the EKF is in a constant position mode and is not using external measurements (eg GPS or optical flow)
  | 'ESTIMATOR_PRED_POS_HORIZ_REL' // True if the EKF has sufficient data to enter a mode that will provide a (relative) position estimate
  | 'ESTIMATOR_PRED_POS_HORIZ_ABS' // True if the EKF has sufficient data to enter a mode that will provide a (absolute) position estimate
  | 'ESTIMATOR_GPS_GLITCH' // True if the EKF has detected a GPS glitch
  | 'ESTIMATOR_ACCEL_ERROR' // True if the EKF has detected bad accelerometer data
  | string;

// Sequence that motors are tested when using MAV_CMD_DO_MOTOR_TEST.
export enum MOTOR_TEST_ORDEREnum {
  // Default autopilot motor test method.
  MOTOR_TEST_ORDER_DEFAULT = 'MOTOR_TEST_ORDER_DEFAULT',
  // Motor numbers are specified as their index in a predefined vehicle-specific sequence.
  MOTOR_TEST_ORDER_SEQUENCE = 'MOTOR_TEST_ORDER_SEQUENCE',
  // Motor numbers are specified as the output as labeled on the board.
  MOTOR_TEST_ORDER_BOARD = 'MOTOR_TEST_ORDER_BOARD',
}

export type MOTOR_TEST_ORDER =
  | 'MOTOR_TEST_ORDER_DEFAULT' // Default autopilot motor test method.
  | 'MOTOR_TEST_ORDER_SEQUENCE' // Motor numbers are specified as their index in a predefined vehicle-specific sequence.
  | 'MOTOR_TEST_ORDER_BOARD' // Motor numbers are specified as the output as labeled on the board.
  | string;

// Defines how throttle value is represented in MAV_CMD_DO_MOTOR_TEST.
export enum MOTOR_TEST_THROTTLE_TYPEEnum {
  // Throttle as a percentage (0 ~ 100)
  MOTOR_TEST_THROTTLE_PERCENT = 'MOTOR_TEST_THROTTLE_PERCENT',
  // Throttle as an absolute PWM value (normally in range of 1000~2000).
  MOTOR_TEST_THROTTLE_PWM = 'MOTOR_TEST_THROTTLE_PWM',
  // Throttle pass-through from pilot&#x27;s transmitter.
  MOTOR_TEST_THROTTLE_PILOT = 'MOTOR_TEST_THROTTLE_PILOT',
  // Per-motor compass calibration test.
  MOTOR_TEST_COMPASS_CAL = 'MOTOR_TEST_COMPASS_CAL',
}

export type MOTOR_TEST_THROTTLE_TYPE =
  | 'MOTOR_TEST_THROTTLE_PERCENT' // Throttle as a percentage (0 ~ 100)
  | 'MOTOR_TEST_THROTTLE_PWM' // Throttle as an absolute PWM value (normally in range of 1000~2000).
  | 'MOTOR_TEST_THROTTLE_PILOT' // Throttle pass-through from pilot&#x27;s transmitter.
  | 'MOTOR_TEST_COMPASS_CAL' // Per-motor compass calibration test.
  | string;

export enum GPS_INPUT_IGNORE_FLAGSEnum {
  // ignore altitude field
  GPS_INPUT_IGNORE_FLAG_ALT = 'GPS_INPUT_IGNORE_FLAG_ALT',
  // ignore hdop field
  GPS_INPUT_IGNORE_FLAG_HDOP = 'GPS_INPUT_IGNORE_FLAG_HDOP',
  // ignore vdop field
  GPS_INPUT_IGNORE_FLAG_VDOP = 'GPS_INPUT_IGNORE_FLAG_VDOP',
  // ignore horizontal velocity field (vn and ve)
  GPS_INPUT_IGNORE_FLAG_VEL_HORIZ = 'GPS_INPUT_IGNORE_FLAG_VEL_HORIZ',
  // ignore vertical velocity field (vd)
  GPS_INPUT_IGNORE_FLAG_VEL_VERT = 'GPS_INPUT_IGNORE_FLAG_VEL_VERT',
  // ignore speed accuracy field
  GPS_INPUT_IGNORE_FLAG_SPEED_ACCURACY = 'GPS_INPUT_IGNORE_FLAG_SPEED_ACCURACY',
  // ignore horizontal accuracy field
  GPS_INPUT_IGNORE_FLAG_HORIZONTAL_ACCURACY = 'GPS_INPUT_IGNORE_FLAG_HORIZONTAL_ACCURACY',
  // ignore vertical accuracy field
  GPS_INPUT_IGNORE_FLAG_VERTICAL_ACCURACY = 'GPS_INPUT_IGNORE_FLAG_VERTICAL_ACCURACY',
}

export type GPS_INPUT_IGNORE_FLAGS =
  | 'GPS_INPUT_IGNORE_FLAG_ALT' // ignore altitude field
  | 'GPS_INPUT_IGNORE_FLAG_HDOP' // ignore hdop field
  | 'GPS_INPUT_IGNORE_FLAG_VDOP' // ignore vdop field
  | 'GPS_INPUT_IGNORE_FLAG_VEL_HORIZ' // ignore horizontal velocity field (vn and ve)
  | 'GPS_INPUT_IGNORE_FLAG_VEL_VERT' // ignore vertical velocity field (vd)
  | 'GPS_INPUT_IGNORE_FLAG_SPEED_ACCURACY' // ignore speed accuracy field
  | 'GPS_INPUT_IGNORE_FLAG_HORIZONTAL_ACCURACY' // ignore horizontal accuracy field
  | 'GPS_INPUT_IGNORE_FLAG_VERTICAL_ACCURACY' // ignore vertical accuracy field
  | string;

// Possible actions an aircraft can take to avoid a collision.
export enum MAV_COLLISION_ACTIONEnum {
  // Ignore any potential collisions
  MAV_COLLISION_ACTION_NONE = 'MAV_COLLISION_ACTION_NONE',
  // Report potential collision
  MAV_COLLISION_ACTION_REPORT = 'MAV_COLLISION_ACTION_REPORT',
  // Ascend or Descend to avoid threat
  MAV_COLLISION_ACTION_ASCEND_OR_DESCEND = 'MAV_COLLISION_ACTION_ASCEND_OR_DESCEND',
  // Move horizontally to avoid threat
  MAV_COLLISION_ACTION_MOVE_HORIZONTALLY = 'MAV_COLLISION_ACTION_MOVE_HORIZONTALLY',
  // Aircraft to move perpendicular to the collision&#x27;s velocity vector
  MAV_COLLISION_ACTION_MOVE_PERPENDICULAR = 'MAV_COLLISION_ACTION_MOVE_PERPENDICULAR',
  // Aircraft to fly directly back to its launch point
  MAV_COLLISION_ACTION_RTL = 'MAV_COLLISION_ACTION_RTL',
  // Aircraft to stop in place
  MAV_COLLISION_ACTION_HOVER = 'MAV_COLLISION_ACTION_HOVER',
}

export type MAV_COLLISION_ACTION =
  | 'MAV_COLLISION_ACTION_NONE' // Ignore any potential collisions
  | 'MAV_COLLISION_ACTION_REPORT' // Report potential collision
  | 'MAV_COLLISION_ACTION_ASCEND_OR_DESCEND' // Ascend or Descend to avoid threat
  | 'MAV_COLLISION_ACTION_MOVE_HORIZONTALLY' // Move horizontally to avoid threat
  | 'MAV_COLLISION_ACTION_MOVE_PERPENDICULAR' // Aircraft to move perpendicular to the collision&#x27;s velocity vector
  | 'MAV_COLLISION_ACTION_RTL' // Aircraft to fly directly back to its launch point
  | 'MAV_COLLISION_ACTION_HOVER' // Aircraft to stop in place
  | string;

// Aircraft-rated danger from this threat.
export enum MAV_COLLISION_THREAT_LEVELEnum {
  // Not a threat
  MAV_COLLISION_THREAT_LEVEL_NONE = 'MAV_COLLISION_THREAT_LEVEL_NONE',
  // Craft is mildly concerned about this threat
  MAV_COLLISION_THREAT_LEVEL_LOW = 'MAV_COLLISION_THREAT_LEVEL_LOW',
  // Craft is panicking, and may take actions to avoid threat
  MAV_COLLISION_THREAT_LEVEL_HIGH = 'MAV_COLLISION_THREAT_LEVEL_HIGH',
}

export type MAV_COLLISION_THREAT_LEVEL =
  | 'MAV_COLLISION_THREAT_LEVEL_NONE' // Not a threat
  | 'MAV_COLLISION_THREAT_LEVEL_LOW' // Craft is mildly concerned about this threat
  | 'MAV_COLLISION_THREAT_LEVEL_HIGH' // Craft is panicking, and may take actions to avoid threat
  | string;

// Source of information about this collision.
export enum MAV_COLLISION_SRCEnum {
  // ID field references ADSB_VEHICLE packets
  MAV_COLLISION_SRC_ADSB = 'MAV_COLLISION_SRC_ADSB',
  // ID field references MAVLink SRC ID
  MAV_COLLISION_SRC_MAVLINK_GPS_GLOBAL_INT = 'MAV_COLLISION_SRC_MAVLINK_GPS_GLOBAL_INT',
}

export type MAV_COLLISION_SRC =
  | 'MAV_COLLISION_SRC_ADSB' // ID field references ADSB_VEHICLE packets
  | 'MAV_COLLISION_SRC_MAVLINK_GPS_GLOBAL_INT' // ID field references MAVLink SRC ID
  | string;

// Type of GPS fix
export enum GPS_FIX_TYPEEnum {
  // No GPS connected
  GPS_FIX_TYPE_NO_GPS = 'GPS_FIX_TYPE_NO_GPS',
  // No position information, GPS is connected
  GPS_FIX_TYPE_NO_FIX = 'GPS_FIX_TYPE_NO_FIX',
  // 2D position
  GPS_FIX_TYPE_2D_FIX = 'GPS_FIX_TYPE_2D_FIX',
  // 3D position
  GPS_FIX_TYPE_3D_FIX = 'GPS_FIX_TYPE_3D_FIX',
  // DGPS/SBAS aided 3D position
  GPS_FIX_TYPE_DGPS = 'GPS_FIX_TYPE_DGPS',
  // RTK float, 3D position
  GPS_FIX_TYPE_RTK_FLOAT = 'GPS_FIX_TYPE_RTK_FLOAT',
  // RTK Fixed, 3D position
  GPS_FIX_TYPE_RTK_FIXED = 'GPS_FIX_TYPE_RTK_FIXED',
  // Static fixed, typically used for base stations
  GPS_FIX_TYPE_STATIC = 'GPS_FIX_TYPE_STATIC',
  // PPP, 3D position.
  GPS_FIX_TYPE_PPP = 'GPS_FIX_TYPE_PPP',
}

export type GPS_FIX_TYPE =
  | 'GPS_FIX_TYPE_NO_GPS' // No GPS connected
  | 'GPS_FIX_TYPE_NO_FIX' // No position information, GPS is connected
  | 'GPS_FIX_TYPE_2D_FIX' // 2D position
  | 'GPS_FIX_TYPE_3D_FIX' // 3D position
  | 'GPS_FIX_TYPE_DGPS' // DGPS/SBAS aided 3D position
  | 'GPS_FIX_TYPE_RTK_FLOAT' // RTK float, 3D position
  | 'GPS_FIX_TYPE_RTK_FIXED' // RTK Fixed, 3D position
  | 'GPS_FIX_TYPE_STATIC' // Static fixed, typically used for base stations
  | 'GPS_FIX_TYPE_PPP' // PPP, 3D position.
  | string;

// RTK GPS baseline coordinate system, used for RTK corrections
export enum RTK_BASELINE_COORDINATE_SYSTEMEnum {
  // Earth-centered, Earth-fixed
  RTK_BASELINE_COORDINATE_SYSTEM_ECEF = 'RTK_BASELINE_COORDINATE_SYSTEM_ECEF',
  // RTK basestation centered, north, east, down
  RTK_BASELINE_COORDINATE_SYSTEM_NED = 'RTK_BASELINE_COORDINATE_SYSTEM_NED',
}

export type RTK_BASELINE_COORDINATE_SYSTEM =
  | 'RTK_BASELINE_COORDINATE_SYSTEM_ECEF' // Earth-centered, Earth-fixed
  | 'RTK_BASELINE_COORDINATE_SYSTEM_NED' // RTK basestation centered, north, east, down
  | string;

// Type of landing target
export enum LANDING_TARGET_TYPEEnum {
  // Landing target signaled by light beacon (ex: IR-LOCK)
  LANDING_TARGET_TYPE_LIGHT_BEACON = 'LANDING_TARGET_TYPE_LIGHT_BEACON',
  // Landing target signaled by radio beacon (ex: ILS, NDB)
  LANDING_TARGET_TYPE_RADIO_BEACON = 'LANDING_TARGET_TYPE_RADIO_BEACON',
  // Landing target represented by a fiducial marker (ex: ARTag)
  LANDING_TARGET_TYPE_VISION_FIDUCIAL = 'LANDING_TARGET_TYPE_VISION_FIDUCIAL',
  // Landing target represented by a pre-defined visual shape/feature (ex: X-marker, H-marker, square)
  LANDING_TARGET_TYPE_VISION_OTHER = 'LANDING_TARGET_TYPE_VISION_OTHER',
}

export type LANDING_TARGET_TYPE =
  | 'LANDING_TARGET_TYPE_LIGHT_BEACON' // Landing target signaled by light beacon (ex: IR-LOCK)
  | 'LANDING_TARGET_TYPE_RADIO_BEACON' // Landing target signaled by radio beacon (ex: ILS, NDB)
  | 'LANDING_TARGET_TYPE_VISION_FIDUCIAL' // Landing target represented by a fiducial marker (ex: ARTag)
  | 'LANDING_TARGET_TYPE_VISION_OTHER' // Landing target represented by a pre-defined visual shape/feature (ex: X-marker, H-marker, square)
  | string;

// Direction of VTOL transition
export enum VTOL_TRANSITION_HEADINGEnum {
  // Respect the heading configuration of the vehicle.
  VTOL_TRANSITION_HEADING_VEHICLE_DEFAULT = 'VTOL_TRANSITION_HEADING_VEHICLE_DEFAULT',
  // Use the heading pointing towards the next waypoint.
  VTOL_TRANSITION_HEADING_NEXT_WAYPOINT = 'VTOL_TRANSITION_HEADING_NEXT_WAYPOINT',
  // Use the heading on takeoff (while sitting on the ground).
  VTOL_TRANSITION_HEADING_TAKEOFF = 'VTOL_TRANSITION_HEADING_TAKEOFF',
  // Use the specified heading in parameter 4.
  VTOL_TRANSITION_HEADING_SPECIFIED = 'VTOL_TRANSITION_HEADING_SPECIFIED',
  // Use the current heading when reaching takeoff altitude (potentially facing the wind when weather-vaning is active).
  VTOL_TRANSITION_HEADING_ANY = 'VTOL_TRANSITION_HEADING_ANY',
}

export type VTOL_TRANSITION_HEADING =
  | 'VTOL_TRANSITION_HEADING_VEHICLE_DEFAULT' // Respect the heading configuration of the vehicle.
  | 'VTOL_TRANSITION_HEADING_NEXT_WAYPOINT' // Use the heading pointing towards the next waypoint.
  | 'VTOL_TRANSITION_HEADING_TAKEOFF' // Use the heading on takeoff (while sitting on the ground).
  | 'VTOL_TRANSITION_HEADING_SPECIFIED' // Use the specified heading in parameter 4.
  | 'VTOL_TRANSITION_HEADING_ANY' // Use the current heading when reaching takeoff altitude (potentially facing the wind when weather-vaning is active).
  | string;

// Camera capability flags (Bitmap)
export enum CAMERA_CAP_FLAGSEnum {
  // Camera is able to record video
  CAMERA_CAP_FLAGS_CAPTURE_VIDEO = 'CAMERA_CAP_FLAGS_CAPTURE_VIDEO',
  // Camera is able to capture images
  CAMERA_CAP_FLAGS_CAPTURE_IMAGE = 'CAMERA_CAP_FLAGS_CAPTURE_IMAGE',
  // Camera has separate Video and Image/Photo modes (MAV_CMD_SET_CAMERA_MODE)
  CAMERA_CAP_FLAGS_HAS_MODES = 'CAMERA_CAP_FLAGS_HAS_MODES',
  // Camera can capture images while in video mode
  CAMERA_CAP_FLAGS_CAN_CAPTURE_IMAGE_IN_VIDEO_MODE = 'CAMERA_CAP_FLAGS_CAN_CAPTURE_IMAGE_IN_VIDEO_MODE',
  // Camera can capture videos while in Photo/Image mode
  CAMERA_CAP_FLAGS_CAN_CAPTURE_VIDEO_IN_IMAGE_MODE = 'CAMERA_CAP_FLAGS_CAN_CAPTURE_VIDEO_IN_IMAGE_MODE',
  // Camera has image survey mode (MAV_CMD_SET_CAMERA_MODE)
  CAMERA_CAP_FLAGS_HAS_IMAGE_SURVEY_MODE = 'CAMERA_CAP_FLAGS_HAS_IMAGE_SURVEY_MODE',
  // Camera has basic zoom control (MAV_CMD_SET_CAMERA_ZOOM)
  CAMERA_CAP_FLAGS_HAS_BASIC_ZOOM = 'CAMERA_CAP_FLAGS_HAS_BASIC_ZOOM',
  // Camera has basic focus control (MAV_CMD_SET_CAMERA_FOCUS)
  CAMERA_CAP_FLAGS_HAS_BASIC_FOCUS = 'CAMERA_CAP_FLAGS_HAS_BASIC_FOCUS',
  // Camera has video streaming capabilities (request VIDEO_STREAM_INFORMATION with MAV_CMD_REQUEST_MESSAGE for video streaming info)
  CAMERA_CAP_FLAGS_HAS_VIDEO_STREAM = 'CAMERA_CAP_FLAGS_HAS_VIDEO_STREAM',
  // Camera supports tracking of a point on the camera view.
  CAMERA_CAP_FLAGS_HAS_TRACKING_POINT = 'CAMERA_CAP_FLAGS_HAS_TRACKING_POINT',
  // Camera supports tracking of a selection rectangle on the camera view.
  CAMERA_CAP_FLAGS_HAS_TRACKING_RECTANGLE = 'CAMERA_CAP_FLAGS_HAS_TRACKING_RECTANGLE',
  // Camera supports tracking geo status (CAMERA_TRACKING_GEO_STATUS).
  CAMERA_CAP_FLAGS_HAS_TRACKING_GEO_STATUS = 'CAMERA_CAP_FLAGS_HAS_TRACKING_GEO_STATUS',
  // Camera supports absolute thermal range (request CAMERA_THERMAL_RANGE with MAV_CMD_REQUEST_MESSAGE).
  CAMERA_CAP_FLAGS_HAS_THERMAL_RANGE = 'CAMERA_CAP_FLAGS_HAS_THERMAL_RANGE',
}

export type CAMERA_CAP_FLAGS =
  | 'CAMERA_CAP_FLAGS_CAPTURE_VIDEO' // Camera is able to record video
  | 'CAMERA_CAP_FLAGS_CAPTURE_IMAGE' // Camera is able to capture images
  | 'CAMERA_CAP_FLAGS_HAS_MODES' // Camera has separate Video and Image/Photo modes (MAV_CMD_SET_CAMERA_MODE)
  | 'CAMERA_CAP_FLAGS_CAN_CAPTURE_IMAGE_IN_VIDEO_MODE' // Camera can capture images while in video mode
  | 'CAMERA_CAP_FLAGS_CAN_CAPTURE_VIDEO_IN_IMAGE_MODE' // Camera can capture videos while in Photo/Image mode
  | 'CAMERA_CAP_FLAGS_HAS_IMAGE_SURVEY_MODE' // Camera has image survey mode (MAV_CMD_SET_CAMERA_MODE)
  | 'CAMERA_CAP_FLAGS_HAS_BASIC_ZOOM' // Camera has basic zoom control (MAV_CMD_SET_CAMERA_ZOOM)
  | 'CAMERA_CAP_FLAGS_HAS_BASIC_FOCUS' // Camera has basic focus control (MAV_CMD_SET_CAMERA_FOCUS)
  | 'CAMERA_CAP_FLAGS_HAS_VIDEO_STREAM' // Camera has video streaming capabilities (request VIDEO_STREAM_INFORMATION with MAV_CMD_REQUEST_MESSAGE for video streaming info)
  | 'CAMERA_CAP_FLAGS_HAS_TRACKING_POINT' // Camera supports tracking of a point on the camera view.
  | 'CAMERA_CAP_FLAGS_HAS_TRACKING_RECTANGLE' // Camera supports tracking of a selection rectangle on the camera view.
  | 'CAMERA_CAP_FLAGS_HAS_TRACKING_GEO_STATUS' // Camera supports tracking geo status (CAMERA_TRACKING_GEO_STATUS).
  | 'CAMERA_CAP_FLAGS_HAS_THERMAL_RANGE' // Camera supports absolute thermal range (request CAMERA_THERMAL_RANGE with MAV_CMD_REQUEST_MESSAGE).
  | string;

// Stream status flags (Bitmap)
export enum VIDEO_STREAM_STATUS_FLAGSEnum {
  // Stream is active (running)
  VIDEO_STREAM_STATUS_FLAGS_RUNNING = 'VIDEO_STREAM_STATUS_FLAGS_RUNNING',
  // Stream is thermal imaging
  VIDEO_STREAM_STATUS_FLAGS_THERMAL = 'VIDEO_STREAM_STATUS_FLAGS_THERMAL',
  // Stream can report absolute thermal range (see CAMERA_THERMAL_RANGE).
  VIDEO_STREAM_STATUS_FLAGS_THERMAL_RANGE_ENABLED = 'VIDEO_STREAM_STATUS_FLAGS_THERMAL_RANGE_ENABLED',
}

export type VIDEO_STREAM_STATUS_FLAGS =
  | 'VIDEO_STREAM_STATUS_FLAGS_RUNNING' // Stream is active (running)
  | 'VIDEO_STREAM_STATUS_FLAGS_THERMAL' // Stream is thermal imaging
  | 'VIDEO_STREAM_STATUS_FLAGS_THERMAL_RANGE_ENABLED' // Stream can report absolute thermal range (see CAMERA_THERMAL_RANGE).
  | string;

// Video stream types
export enum VIDEO_STREAM_TYPEEnum {
  // Stream is RTSP
  VIDEO_STREAM_TYPE_RTSP = 'VIDEO_STREAM_TYPE_RTSP',
  // Stream is RTP UDP (URI gives the port number)
  VIDEO_STREAM_TYPE_RTPUDP = 'VIDEO_STREAM_TYPE_RTPUDP',
  // Stream is MPEG on TCP
  VIDEO_STREAM_TYPE_TCP_MPEG = 'VIDEO_STREAM_TYPE_TCP_MPEG',
  // Stream is MPEG TS (URI gives the port number)
  VIDEO_STREAM_TYPE_MPEG_TS = 'VIDEO_STREAM_TYPE_MPEG_TS',
}

export type VIDEO_STREAM_TYPE =
  | 'VIDEO_STREAM_TYPE_RTSP' // Stream is RTSP
  | 'VIDEO_STREAM_TYPE_RTPUDP' // Stream is RTP UDP (URI gives the port number)
  | 'VIDEO_STREAM_TYPE_TCP_MPEG' // Stream is MPEG on TCP
  | 'VIDEO_STREAM_TYPE_MPEG_TS' // Stream is MPEG TS (URI gives the port number)
  | string;

// Video stream encodings
export enum VIDEO_STREAM_ENCODINGEnum {
  // Stream encoding is unknown
  VIDEO_STREAM_ENCODING_UNKNOWN = 'VIDEO_STREAM_ENCODING_UNKNOWN',
  // Stream encoding is H.264
  VIDEO_STREAM_ENCODING_H264 = 'VIDEO_STREAM_ENCODING_H264',
  // Stream encoding is H.265
  VIDEO_STREAM_ENCODING_H265 = 'VIDEO_STREAM_ENCODING_H265',
}

export type VIDEO_STREAM_ENCODING =
  | 'VIDEO_STREAM_ENCODING_UNKNOWN' // Stream encoding is unknown
  | 'VIDEO_STREAM_ENCODING_H264' // Stream encoding is H.264
  | 'VIDEO_STREAM_ENCODING_H265' // Stream encoding is H.265
  | string;

// Camera tracking status flags
export enum CAMERA_TRACKING_STATUS_FLAGSEnum {
  // Camera is not tracking
  CAMERA_TRACKING_STATUS_FLAGS_IDLE = 'CAMERA_TRACKING_STATUS_FLAGS_IDLE',
  // Camera is tracking
  CAMERA_TRACKING_STATUS_FLAGS_ACTIVE = 'CAMERA_TRACKING_STATUS_FLAGS_ACTIVE',
  // Camera tracking in error state
  CAMERA_TRACKING_STATUS_FLAGS_ERROR = 'CAMERA_TRACKING_STATUS_FLAGS_ERROR',
}

export type CAMERA_TRACKING_STATUS_FLAGS =
  | 'CAMERA_TRACKING_STATUS_FLAGS_IDLE' // Camera is not tracking
  | 'CAMERA_TRACKING_STATUS_FLAGS_ACTIVE' // Camera is tracking
  | 'CAMERA_TRACKING_STATUS_FLAGS_ERROR' // Camera tracking in error state
  | string;

// Camera tracking modes
export enum CAMERA_TRACKING_MODEEnum {
  // Not tracking
  CAMERA_TRACKING_MODE_NONE = 'CAMERA_TRACKING_MODE_NONE',
  // Target is a point
  CAMERA_TRACKING_MODE_POINT = 'CAMERA_TRACKING_MODE_POINT',
  // Target is a rectangle
  CAMERA_TRACKING_MODE_RECTANGLE = 'CAMERA_TRACKING_MODE_RECTANGLE',
}

export type CAMERA_TRACKING_MODE =
  | 'CAMERA_TRACKING_MODE_NONE' // Not tracking
  | 'CAMERA_TRACKING_MODE_POINT' // Target is a point
  | 'CAMERA_TRACKING_MODE_RECTANGLE' // Target is a rectangle
  | string;

// Camera tracking target data (shows where tracked target is within image)
export enum CAMERA_TRACKING_TARGET_DATAEnum {
  // Target data embedded in image data (proprietary)
  CAMERA_TRACKING_TARGET_DATA_EMBEDDED = 'CAMERA_TRACKING_TARGET_DATA_EMBEDDED',
  // Target data rendered in image
  CAMERA_TRACKING_TARGET_DATA_RENDERED = 'CAMERA_TRACKING_TARGET_DATA_RENDERED',
  // Target data within status message (Point or Rectangle)
  CAMERA_TRACKING_TARGET_DATA_IN_STATUS = 'CAMERA_TRACKING_TARGET_DATA_IN_STATUS',
}

export type CAMERA_TRACKING_TARGET_DATA =
  | 'CAMERA_TRACKING_TARGET_DATA_EMBEDDED' // Target data embedded in image data (proprietary)
  | 'CAMERA_TRACKING_TARGET_DATA_RENDERED' // Target data rendered in image
  | 'CAMERA_TRACKING_TARGET_DATA_IN_STATUS' // Target data within status message (Point or Rectangle)
  | string;

// Zoom types for MAV_CMD_SET_CAMERA_ZOOM
export enum CAMERA_ZOOM_TYPEEnum {
  // Zoom one step increment (-1 for wide, 1 for tele)
  ZOOM_TYPE_STEP = 'ZOOM_TYPE_STEP',
  // Continuous normalized zoom in/out rate until stopped. Range -1..1, negative: wide, positive: narrow/tele, 0 to stop zooming. Other values should be clipped to the range.
  ZOOM_TYPE_CONTINUOUS = 'ZOOM_TYPE_CONTINUOUS',
  // Zoom value as proportion of full camera range (a percentage value between 0.0 and 100.0)
  ZOOM_TYPE_RANGE = 'ZOOM_TYPE_RANGE',
  // Zoom value/variable focal length in millimetres. Note that there is no message to get the valid zoom range of the camera, so this can type can only be used for cameras where the zoom range is known (implying that this cannot reliably be used in a GCS for an arbitrary camera)
  ZOOM_TYPE_FOCAL_LENGTH = 'ZOOM_TYPE_FOCAL_LENGTH',
  // Zoom value as horizontal field of view in degrees.
  ZOOM_TYPE_HORIZONTAL_FOV = 'ZOOM_TYPE_HORIZONTAL_FOV',
}

export type CAMERA_ZOOM_TYPE =
  | 'ZOOM_TYPE_STEP' // Zoom one step increment (-1 for wide, 1 for tele)
  | 'ZOOM_TYPE_CONTINUOUS' // Continuous normalized zoom in/out rate until stopped. Range -1..1, negative: wide, positive: narrow/tele, 0 to stop zooming. Other values should be clipped to the range.
  | 'ZOOM_TYPE_RANGE' // Zoom value as proportion of full camera range (a percentage value between 0.0 and 100.0)
  | 'ZOOM_TYPE_FOCAL_LENGTH' // Zoom value/variable focal length in millimetres. Note that there is no message to get the valid zoom range of the camera, so this can type can only be used for cameras where the zoom range is known (implying that this cannot reliably be used in a GCS for an arbitrary camera)
  | 'ZOOM_TYPE_HORIZONTAL_FOV' // Zoom value as horizontal field of view in degrees.
  | string;

// Focus types for MAV_CMD_SET_CAMERA_FOCUS
export enum SET_FOCUS_TYPEEnum {
  // Focus one step increment (-1 for focusing in, 1 for focusing out towards infinity).
  FOCUS_TYPE_STEP = 'FOCUS_TYPE_STEP',
  // Continuous normalized focus in/out rate until stopped. Range -1..1, negative: in, positive: out towards infinity, 0 to stop focusing. Other values should be clipped to the range.
  FOCUS_TYPE_CONTINUOUS = 'FOCUS_TYPE_CONTINUOUS',
  // Focus value as proportion of full camera focus range (a value between 0.0 and 100.0)
  FOCUS_TYPE_RANGE = 'FOCUS_TYPE_RANGE',
  // Focus value in metres. Note that there is no message to get the valid focus range of the camera, so this can type can only be used for cameras where the range is known (implying that this cannot reliably be used in a GCS for an arbitrary camera).
  FOCUS_TYPE_METERS = 'FOCUS_TYPE_METERS',
  // Focus automatically.
  FOCUS_TYPE_AUTO = 'FOCUS_TYPE_AUTO',
  // Single auto focus. Mainly used for still pictures. Usually abbreviated as AF-S.
  FOCUS_TYPE_AUTO_SINGLE = 'FOCUS_TYPE_AUTO_SINGLE',
  // Continuous auto focus. Mainly used for dynamic scenes. Abbreviated as AF-C.
  FOCUS_TYPE_AUTO_CONTINUOUS = 'FOCUS_TYPE_AUTO_CONTINUOUS',
}

export type SET_FOCUS_TYPE =
  | 'FOCUS_TYPE_STEP' // Focus one step increment (-1 for focusing in, 1 for focusing out towards infinity).
  | 'FOCUS_TYPE_CONTINUOUS' // Continuous normalized focus in/out rate until stopped. Range -1..1, negative: in, positive: out towards infinity, 0 to stop focusing. Other values should be clipped to the range.
  | 'FOCUS_TYPE_RANGE' // Focus value as proportion of full camera focus range (a value between 0.0 and 100.0)
  | 'FOCUS_TYPE_METERS' // Focus value in metres. Note that there is no message to get the valid focus range of the camera, so this can type can only be used for cameras where the range is known (implying that this cannot reliably be used in a GCS for an arbitrary camera).
  | 'FOCUS_TYPE_AUTO' // Focus automatically.
  | 'FOCUS_TYPE_AUTO_SINGLE' // Single auto focus. Mainly used for still pictures. Usually abbreviated as AF-S.
  | 'FOCUS_TYPE_AUTO_CONTINUOUS' // Continuous auto focus. Mainly used for dynamic scenes. Abbreviated as AF-C.
  | string;

// Camera sources for MAV_CMD_SET_CAMERA_SOURCE
export enum CAMERA_SOURCEEnum {
  // Default camera source.
  CAMERA_SOURCE_DEFAULT = 'CAMERA_SOURCE_DEFAULT',
  // RGB camera source.
  CAMERA_SOURCE_RGB = 'CAMERA_SOURCE_RGB',
  // IR camera source.
  CAMERA_SOURCE_IR = 'CAMERA_SOURCE_IR',
  // NDVI camera source.
  CAMERA_SOURCE_NDVI = 'CAMERA_SOURCE_NDVI',
}

export type CAMERA_SOURCE =
  | 'CAMERA_SOURCE_DEFAULT' // Default camera source.
  | 'CAMERA_SOURCE_RGB' // RGB camera source.
  | 'CAMERA_SOURCE_IR' // IR camera source.
  | 'CAMERA_SOURCE_NDVI' // NDVI camera source.
  | string;

// Result from PARAM_EXT_SET message.
export enum PARAM_ACKEnum {
  // Parameter value ACCEPTED and SET
  PARAM_ACK_ACCEPTED = 'PARAM_ACK_ACCEPTED',
  // Parameter value UNKNOWN/UNSUPPORTED
  PARAM_ACK_VALUE_UNSUPPORTED = 'PARAM_ACK_VALUE_UNSUPPORTED',
  // Parameter failed to set
  PARAM_ACK_FAILED = 'PARAM_ACK_FAILED',
  // Parameter value received but not yet set/accepted. A subsequent PARAM_EXT_ACK with the final result will follow once operation is completed. This is returned immediately for parameters that take longer to set, indicating that the the parameter was received and does not need to be resent.
  PARAM_ACK_IN_PROGRESS = 'PARAM_ACK_IN_PROGRESS',
}

export type PARAM_ACK =
  | 'PARAM_ACK_ACCEPTED' // Parameter value ACCEPTED and SET
  | 'PARAM_ACK_VALUE_UNSUPPORTED' // Parameter value UNKNOWN/UNSUPPORTED
  | 'PARAM_ACK_FAILED' // Parameter failed to set
  | 'PARAM_ACK_IN_PROGRESS' // Parameter value received but not yet set/accepted. A subsequent PARAM_EXT_ACK with the final result will follow once operation is completed. This is returned immediately for parameters that take longer to set, indicating that the the parameter was received and does not need to be resent.
  | string;

// Camera Modes.
export enum CAMERA_MODEEnum {
  // Camera is in image/photo capture mode.
  CAMERA_MODE_IMAGE = 'CAMERA_MODE_IMAGE',
  // Camera is in video capture mode.
  CAMERA_MODE_VIDEO = 'CAMERA_MODE_VIDEO',
  // Camera is in image survey capture mode. It allows for camera controller to do specific settings for surveys.
  CAMERA_MODE_IMAGE_SURVEY = 'CAMERA_MODE_IMAGE_SURVEY',
}

export type CAMERA_MODE =
  | 'CAMERA_MODE_IMAGE' // Camera is in image/photo capture mode.
  | 'CAMERA_MODE_VIDEO' // Camera is in video capture mode.
  | 'CAMERA_MODE_IMAGE_SURVEY' // Camera is in image survey capture mode. It allows for camera controller to do specific settings for surveys.
  | string;

export enum MAV_ARM_AUTH_DENIED_REASONEnum {
  // Not a specific reason
  MAV_ARM_AUTH_DENIED_REASON_GENERIC = 'MAV_ARM_AUTH_DENIED_REASON_GENERIC',
  // Authorizer will send the error as string to GCS
  MAV_ARM_AUTH_DENIED_REASON_NONE = 'MAV_ARM_AUTH_DENIED_REASON_NONE',
  // At least one waypoint have a invalid value
  MAV_ARM_AUTH_DENIED_REASON_INVALID_WAYPOINT = 'MAV_ARM_AUTH_DENIED_REASON_INVALID_WAYPOINT',
  // Timeout in the authorizer process(in case it depends on network)
  MAV_ARM_AUTH_DENIED_REASON_TIMEOUT = 'MAV_ARM_AUTH_DENIED_REASON_TIMEOUT',
  // Airspace of the mission in use by another vehicle, second result parameter can have the waypoint id that caused it to be denied.
  MAV_ARM_AUTH_DENIED_REASON_AIRSPACE_IN_USE = 'MAV_ARM_AUTH_DENIED_REASON_AIRSPACE_IN_USE',
  // Weather is not good to fly
  MAV_ARM_AUTH_DENIED_REASON_BAD_WEATHER = 'MAV_ARM_AUTH_DENIED_REASON_BAD_WEATHER',
}

export type MAV_ARM_AUTH_DENIED_REASON =
  | 'MAV_ARM_AUTH_DENIED_REASON_GENERIC' // Not a specific reason
  | 'MAV_ARM_AUTH_DENIED_REASON_NONE' // Authorizer will send the error as string to GCS
  | 'MAV_ARM_AUTH_DENIED_REASON_INVALID_WAYPOINT' // At least one waypoint have a invalid value
  | 'MAV_ARM_AUTH_DENIED_REASON_TIMEOUT' // Timeout in the authorizer process(in case it depends on network)
  | 'MAV_ARM_AUTH_DENIED_REASON_AIRSPACE_IN_USE' // Airspace of the mission in use by another vehicle, second result parameter can have the waypoint id that caused it to be denied.
  | 'MAV_ARM_AUTH_DENIED_REASON_BAD_WEATHER' // Weather is not good to fly
  | string;

// RC type. Used in MAV_CMD_START_RX_PAIR.
export enum RC_TYPEEnum {
  // Spektrum
  RC_TYPE_SPEKTRUM = 'RC_TYPE_SPEKTRUM',
  // CRSF
  RC_TYPE_CRSF = 'RC_TYPE_CRSF',
}

export type RC_TYPE =
  | 'RC_TYPE_SPEKTRUM' // Spektrum
  | 'RC_TYPE_CRSF' // CRSF
  | string;

// RC sub-type of types defined in RC_TYPE. Used in MAV_CMD_START_RX_PAIR. Ignored if value does not correspond to the set RC_TYPE.
export enum RC_SUB_TYPEEnum {
  // Spektrum DSM2
  RC_SUB_TYPE_SPEKTRUM_DSM2 = 'RC_SUB_TYPE_SPEKTRUM_DSM2',
  // Spektrum DSMX
  RC_SUB_TYPE_SPEKTRUM_DSMX = 'RC_SUB_TYPE_SPEKTRUM_DSMX',
  // Spektrum DSMX8
  RC_SUB_TYPE_SPEKTRUM_DSMX8 = 'RC_SUB_TYPE_SPEKTRUM_DSMX8',
}

export type RC_SUB_TYPE =
  | 'RC_SUB_TYPE_SPEKTRUM_DSM2' // Spektrum DSM2
  | 'RC_SUB_TYPE_SPEKTRUM_DSMX' // Spektrum DSMX
  | 'RC_SUB_TYPE_SPEKTRUM_DSMX8' // Spektrum DSMX8
  | string;

// Bitmap to indicate which dimensions should be ignored by the vehicle: a value of 0b0000000000000000 or 0b0000001000000000 indicates that none of the setpoint dimensions should be ignored. If bit 9 is set the floats afx afy afz should be interpreted as force instead of acceleration.
export enum POSITION_TARGET_TYPEMASKEnum {
  // Ignore position x
  POSITION_TARGET_TYPEMASK_X_IGNORE = 'POSITION_TARGET_TYPEMASK_X_IGNORE',
  // Ignore position y
  POSITION_TARGET_TYPEMASK_Y_IGNORE = 'POSITION_TARGET_TYPEMASK_Y_IGNORE',
  // Ignore position z
  POSITION_TARGET_TYPEMASK_Z_IGNORE = 'POSITION_TARGET_TYPEMASK_Z_IGNORE',
  // Ignore velocity x
  POSITION_TARGET_TYPEMASK_VX_IGNORE = 'POSITION_TARGET_TYPEMASK_VX_IGNORE',
  // Ignore velocity y
  POSITION_TARGET_TYPEMASK_VY_IGNORE = 'POSITION_TARGET_TYPEMASK_VY_IGNORE',
  // Ignore velocity z
  POSITION_TARGET_TYPEMASK_VZ_IGNORE = 'POSITION_TARGET_TYPEMASK_VZ_IGNORE',
  // Ignore acceleration x
  POSITION_TARGET_TYPEMASK_AX_IGNORE = 'POSITION_TARGET_TYPEMASK_AX_IGNORE',
  // Ignore acceleration y
  POSITION_TARGET_TYPEMASK_AY_IGNORE = 'POSITION_TARGET_TYPEMASK_AY_IGNORE',
  // Ignore acceleration z
  POSITION_TARGET_TYPEMASK_AZ_IGNORE = 'POSITION_TARGET_TYPEMASK_AZ_IGNORE',
  // Use force instead of acceleration
  POSITION_TARGET_TYPEMASK_FORCE_SET = 'POSITION_TARGET_TYPEMASK_FORCE_SET',
  // Ignore yaw
  POSITION_TARGET_TYPEMASK_YAW_IGNORE = 'POSITION_TARGET_TYPEMASK_YAW_IGNORE',
  // Ignore yaw rate
  POSITION_TARGET_TYPEMASK_YAW_RATE_IGNORE = 'POSITION_TARGET_TYPEMASK_YAW_RATE_IGNORE',
}

export type POSITION_TARGET_TYPEMASK =
  | 'POSITION_TARGET_TYPEMASK_X_IGNORE' // Ignore position x
  | 'POSITION_TARGET_TYPEMASK_Y_IGNORE' // Ignore position y
  | 'POSITION_TARGET_TYPEMASK_Z_IGNORE' // Ignore position z
  | 'POSITION_TARGET_TYPEMASK_VX_IGNORE' // Ignore velocity x
  | 'POSITION_TARGET_TYPEMASK_VY_IGNORE' // Ignore velocity y
  | 'POSITION_TARGET_TYPEMASK_VZ_IGNORE' // Ignore velocity z
  | 'POSITION_TARGET_TYPEMASK_AX_IGNORE' // Ignore acceleration x
  | 'POSITION_TARGET_TYPEMASK_AY_IGNORE' // Ignore acceleration y
  | 'POSITION_TARGET_TYPEMASK_AZ_IGNORE' // Ignore acceleration z
  | 'POSITION_TARGET_TYPEMASK_FORCE_SET' // Use force instead of acceleration
  | 'POSITION_TARGET_TYPEMASK_YAW_IGNORE' // Ignore yaw
  | 'POSITION_TARGET_TYPEMASK_YAW_RATE_IGNORE' // Ignore yaw rate
  | string;

// Bitmap to indicate which dimensions should be ignored by the vehicle: a value of 0b00000000 indicates that none of the setpoint dimensions should be ignored.
export enum ATTITUDE_TARGET_TYPEMASKEnum {
  // Ignore body roll rate
  ATTITUDE_TARGET_TYPEMASK_BODY_ROLL_RATE_IGNORE = 'ATTITUDE_TARGET_TYPEMASK_BODY_ROLL_RATE_IGNORE',
  // Ignore body pitch rate
  ATTITUDE_TARGET_TYPEMASK_BODY_PITCH_RATE_IGNORE = 'ATTITUDE_TARGET_TYPEMASK_BODY_PITCH_RATE_IGNORE',
  // Ignore body yaw rate
  ATTITUDE_TARGET_TYPEMASK_BODY_YAW_RATE_IGNORE = 'ATTITUDE_TARGET_TYPEMASK_BODY_YAW_RATE_IGNORE',
  // Use 3D body thrust setpoint instead of throttle
  ATTITUDE_TARGET_TYPEMASK_THRUST_BODY_SET = 'ATTITUDE_TARGET_TYPEMASK_THRUST_BODY_SET',
  // Ignore throttle
  ATTITUDE_TARGET_TYPEMASK_THROTTLE_IGNORE = 'ATTITUDE_TARGET_TYPEMASK_THROTTLE_IGNORE',
  // Ignore attitude
  ATTITUDE_TARGET_TYPEMASK_ATTITUDE_IGNORE = 'ATTITUDE_TARGET_TYPEMASK_ATTITUDE_IGNORE',
}

export type ATTITUDE_TARGET_TYPEMASK =
  | 'ATTITUDE_TARGET_TYPEMASK_BODY_ROLL_RATE_IGNORE' // Ignore body roll rate
  | 'ATTITUDE_TARGET_TYPEMASK_BODY_PITCH_RATE_IGNORE' // Ignore body pitch rate
  | 'ATTITUDE_TARGET_TYPEMASK_BODY_YAW_RATE_IGNORE' // Ignore body yaw rate
  | 'ATTITUDE_TARGET_TYPEMASK_THRUST_BODY_SET' // Use 3D body thrust setpoint instead of throttle
  | 'ATTITUDE_TARGET_TYPEMASK_THROTTLE_IGNORE' // Ignore throttle
  | 'ATTITUDE_TARGET_TYPEMASK_ATTITUDE_IGNORE' // Ignore attitude
  | string;

// Airborne status of UAS.
export enum UTM_FLIGHT_STATEEnum {
  // The flight state can&#x27;t be determined.
  UTM_FLIGHT_STATE_UNKNOWN = 'UTM_FLIGHT_STATE_UNKNOWN',
  // UAS on ground.
  UTM_FLIGHT_STATE_GROUND = 'UTM_FLIGHT_STATE_GROUND',
  // UAS airborne.
  UTM_FLIGHT_STATE_AIRBORNE = 'UTM_FLIGHT_STATE_AIRBORNE',
  // UAS is in an emergency flight state.
  UTM_FLIGHT_STATE_EMERGENCY = 'UTM_FLIGHT_STATE_EMERGENCY',
  // UAS has no active controls.
  UTM_FLIGHT_STATE_NOCTRL = 'UTM_FLIGHT_STATE_NOCTRL',
}

export type UTM_FLIGHT_STATE =
  | 'UTM_FLIGHT_STATE_UNKNOWN' // The flight state can&#x27;t be determined.
  | 'UTM_FLIGHT_STATE_GROUND' // UAS on ground.
  | 'UTM_FLIGHT_STATE_AIRBORNE' // UAS airborne.
  | 'UTM_FLIGHT_STATE_EMERGENCY' // UAS is in an emergency flight state.
  | 'UTM_FLIGHT_STATE_NOCTRL' // UAS has no active controls.
  | string;

// Flags for the global position report.
export enum UTM_DATA_AVAIL_FLAGSEnum {
  // The field time contains valid data.
  UTM_DATA_AVAIL_FLAGS_TIME_VALID = 'UTM_DATA_AVAIL_FLAGS_TIME_VALID',
  // The field uas_id contains valid data.
  UTM_DATA_AVAIL_FLAGS_UAS_ID_AVAILABLE = 'UTM_DATA_AVAIL_FLAGS_UAS_ID_AVAILABLE',
  // The fields lat, lon and h_acc contain valid data.
  UTM_DATA_AVAIL_FLAGS_POSITION_AVAILABLE = 'UTM_DATA_AVAIL_FLAGS_POSITION_AVAILABLE',
  // The fields alt and v_acc contain valid data.
  UTM_DATA_AVAIL_FLAGS_ALTITUDE_AVAILABLE = 'UTM_DATA_AVAIL_FLAGS_ALTITUDE_AVAILABLE',
  // The field relative_alt contains valid data.
  UTM_DATA_AVAIL_FLAGS_RELATIVE_ALTITUDE_AVAILABLE = 'UTM_DATA_AVAIL_FLAGS_RELATIVE_ALTITUDE_AVAILABLE',
  // The fields vx and vy contain valid data.
  UTM_DATA_AVAIL_FLAGS_HORIZONTAL_VELO_AVAILABLE = 'UTM_DATA_AVAIL_FLAGS_HORIZONTAL_VELO_AVAILABLE',
  // The field vz contains valid data.
  UTM_DATA_AVAIL_FLAGS_VERTICAL_VELO_AVAILABLE = 'UTM_DATA_AVAIL_FLAGS_VERTICAL_VELO_AVAILABLE',
  // The fields next_lat, next_lon and next_alt contain valid data.
  UTM_DATA_AVAIL_FLAGS_NEXT_WAYPOINT_AVAILABLE = 'UTM_DATA_AVAIL_FLAGS_NEXT_WAYPOINT_AVAILABLE',
}

export type UTM_DATA_AVAIL_FLAGS =
  | 'UTM_DATA_AVAIL_FLAGS_TIME_VALID' // The field time contains valid data.
  | 'UTM_DATA_AVAIL_FLAGS_UAS_ID_AVAILABLE' // The field uas_id contains valid data.
  | 'UTM_DATA_AVAIL_FLAGS_POSITION_AVAILABLE' // The fields lat, lon and h_acc contain valid data.
  | 'UTM_DATA_AVAIL_FLAGS_ALTITUDE_AVAILABLE' // The fields alt and v_acc contain valid data.
  | 'UTM_DATA_AVAIL_FLAGS_RELATIVE_ALTITUDE_AVAILABLE' // The field relative_alt contains valid data.
  | 'UTM_DATA_AVAIL_FLAGS_HORIZONTAL_VELO_AVAILABLE' // The fields vx and vy contain valid data.
  | 'UTM_DATA_AVAIL_FLAGS_VERTICAL_VELO_AVAILABLE' // The field vz contains valid data.
  | 'UTM_DATA_AVAIL_FLAGS_NEXT_WAYPOINT_AVAILABLE' // The fields next_lat, next_lon and next_alt contain valid data.
  | string;

// These flags encode the cellular network status
export enum CELLULAR_STATUS_FLAGEnum {
  // State unknown or not reportable.
  CELLULAR_STATUS_FLAG_UNKNOWN = 'CELLULAR_STATUS_FLAG_UNKNOWN',
  // Modem is unusable
  CELLULAR_STATUS_FLAG_FAILED = 'CELLULAR_STATUS_FLAG_FAILED',
  // Modem is being initialized
  CELLULAR_STATUS_FLAG_INITIALIZING = 'CELLULAR_STATUS_FLAG_INITIALIZING',
  // Modem is locked
  CELLULAR_STATUS_FLAG_LOCKED = 'CELLULAR_STATUS_FLAG_LOCKED',
  // Modem is not enabled and is powered down
  CELLULAR_STATUS_FLAG_DISABLED = 'CELLULAR_STATUS_FLAG_DISABLED',
  // Modem is currently transitioning to the CELLULAR_STATUS_FLAG_DISABLED state
  CELLULAR_STATUS_FLAG_DISABLING = 'CELLULAR_STATUS_FLAG_DISABLING',
  // Modem is currently transitioning to the CELLULAR_STATUS_FLAG_ENABLED state
  CELLULAR_STATUS_FLAG_ENABLING = 'CELLULAR_STATUS_FLAG_ENABLING',
  // Modem is enabled and powered on but not registered with a network provider and not available for data connections
  CELLULAR_STATUS_FLAG_ENABLED = 'CELLULAR_STATUS_FLAG_ENABLED',
  // Modem is searching for a network provider to register
  CELLULAR_STATUS_FLAG_SEARCHING = 'CELLULAR_STATUS_FLAG_SEARCHING',
  // Modem is registered with a network provider, and data connections and messaging may be available for use
  CELLULAR_STATUS_FLAG_REGISTERED = 'CELLULAR_STATUS_FLAG_REGISTERED',
  // Modem is disconnecting and deactivating the last active packet data bearer. This state will not be entered if more than one packet data bearer is active and one of the active bearers is deactivated
  CELLULAR_STATUS_FLAG_DISCONNECTING = 'CELLULAR_STATUS_FLAG_DISCONNECTING',
  // Modem is activating and connecting the first packet data bearer. Subsequent bearer activations when another bearer is already active do not cause this state to be entered
  CELLULAR_STATUS_FLAG_CONNECTING = 'CELLULAR_STATUS_FLAG_CONNECTING',
  // One or more packet data bearers is active and connected
  CELLULAR_STATUS_FLAG_CONNECTED = 'CELLULAR_STATUS_FLAG_CONNECTED',
}

export type CELLULAR_STATUS_FLAG =
  | 'CELLULAR_STATUS_FLAG_UNKNOWN' // State unknown or not reportable.
  | 'CELLULAR_STATUS_FLAG_FAILED' // Modem is unusable
  | 'CELLULAR_STATUS_FLAG_INITIALIZING' // Modem is being initialized
  | 'CELLULAR_STATUS_FLAG_LOCKED' // Modem is locked
  | 'CELLULAR_STATUS_FLAG_DISABLED' // Modem is not enabled and is powered down
  | 'CELLULAR_STATUS_FLAG_DISABLING' // Modem is currently transitioning to the CELLULAR_STATUS_FLAG_DISABLED state
  | 'CELLULAR_STATUS_FLAG_ENABLING' // Modem is currently transitioning to the CELLULAR_STATUS_FLAG_ENABLED state
  | 'CELLULAR_STATUS_FLAG_ENABLED' // Modem is enabled and powered on but not registered with a network provider and not available for data connections
  | 'CELLULAR_STATUS_FLAG_SEARCHING' // Modem is searching for a network provider to register
  | 'CELLULAR_STATUS_FLAG_REGISTERED' // Modem is registered with a network provider, and data connections and messaging may be available for use
  | 'CELLULAR_STATUS_FLAG_DISCONNECTING' // Modem is disconnecting and deactivating the last active packet data bearer. This state will not be entered if more than one packet data bearer is active and one of the active bearers is deactivated
  | 'CELLULAR_STATUS_FLAG_CONNECTING' // Modem is activating and connecting the first packet data bearer. Subsequent bearer activations when another bearer is already active do not cause this state to be entered
  | 'CELLULAR_STATUS_FLAG_CONNECTED' // One or more packet data bearers is active and connected
  | string;

// These flags are used to diagnose the failure state of CELLULAR_STATUS
export enum CELLULAR_NETWORK_FAILED_REASONEnum {
  // No error
  CELLULAR_NETWORK_FAILED_REASON_NONE = 'CELLULAR_NETWORK_FAILED_REASON_NONE',
  // Error state is unknown
  CELLULAR_NETWORK_FAILED_REASON_UNKNOWN = 'CELLULAR_NETWORK_FAILED_REASON_UNKNOWN',
  // SIM is required for the modem but missing
  CELLULAR_NETWORK_FAILED_REASON_SIM_MISSING = 'CELLULAR_NETWORK_FAILED_REASON_SIM_MISSING',
  // SIM is available, but not usable for connection
  CELLULAR_NETWORK_FAILED_REASON_SIM_ERROR = 'CELLULAR_NETWORK_FAILED_REASON_SIM_ERROR',
}

export type CELLULAR_NETWORK_FAILED_REASON =
  | 'CELLULAR_NETWORK_FAILED_REASON_NONE' // No error
  | 'CELLULAR_NETWORK_FAILED_REASON_UNKNOWN' // Error state is unknown
  | 'CELLULAR_NETWORK_FAILED_REASON_SIM_MISSING' // SIM is required for the modem but missing
  | 'CELLULAR_NETWORK_FAILED_REASON_SIM_ERROR' // SIM is available, but not usable for connection
  | string;

// Cellular network radio type
export enum CELLULAR_NETWORK_RADIO_TYPEEnum {
  CELLULAR_NETWORK_RADIO_TYPE_NONE = 'CELLULAR_NETWORK_RADIO_TYPE_NONE',
  CELLULAR_NETWORK_RADIO_TYPE_GSM = 'CELLULAR_NETWORK_RADIO_TYPE_GSM',
  CELLULAR_NETWORK_RADIO_TYPE_CDMA = 'CELLULAR_NETWORK_RADIO_TYPE_CDMA',
  CELLULAR_NETWORK_RADIO_TYPE_WCDMA = 'CELLULAR_NETWORK_RADIO_TYPE_WCDMA',
  CELLULAR_NETWORK_RADIO_TYPE_LTE = 'CELLULAR_NETWORK_RADIO_TYPE_LTE',
}

export type CELLULAR_NETWORK_RADIO_TYPE =
  | 'CELLULAR_NETWORK_RADIO_TYPE_NONE'
  | 'CELLULAR_NETWORK_RADIO_TYPE_GSM'
  | 'CELLULAR_NETWORK_RADIO_TYPE_CDMA'
  | 'CELLULAR_NETWORK_RADIO_TYPE_WCDMA'
  | 'CELLULAR_NETWORK_RADIO_TYPE_LTE'
  | string;

// Precision land modes (used in MAV_CMD_NAV_LAND).
export enum PRECISION_LAND_MODEEnum {
  // Normal (non-precision) landing.
  PRECISION_LAND_MODE_DISABLED = 'PRECISION_LAND_MODE_DISABLED',
  // Use precision landing if beacon detected when land command accepted, otherwise land normally.
  PRECISION_LAND_MODE_OPPORTUNISTIC = 'PRECISION_LAND_MODE_OPPORTUNISTIC',
  // Use precision landing, searching for beacon if not found when land command accepted (land normally if beacon cannot be found).
  PRECISION_LAND_MODE_REQUIRED = 'PRECISION_LAND_MODE_REQUIRED',
}

export type PRECISION_LAND_MODE =
  | 'PRECISION_LAND_MODE_DISABLED' // Normal (non-precision) landing.
  | 'PRECISION_LAND_MODE_OPPORTUNISTIC' // Use precision landing if beacon detected when land command accepted, otherwise land normally.
  | 'PRECISION_LAND_MODE_REQUIRED' // Use precision landing, searching for beacon if not found when land command accepted (land normally if beacon cannot be found).
  | string;

// Parachute actions. Trigger release and enable/disable auto-release.
export enum PARACHUTE_ACTIONEnum {
  // Disable auto-release of parachute (i.e. release triggered by crash detectors).
  PARACHUTE_DISABLE = 'PARACHUTE_DISABLE',
  // Enable auto-release of parachute.
  PARACHUTE_ENABLE = 'PARACHUTE_ENABLE',
  // Release parachute and kill motors.
  PARACHUTE_RELEASE = 'PARACHUTE_RELEASE',
}

export type PARACHUTE_ACTION =
  | 'PARACHUTE_DISABLE' // Disable auto-release of parachute (i.e. release triggered by crash detectors).
  | 'PARACHUTE_ENABLE' // Enable auto-release of parachute.
  | 'PARACHUTE_RELEASE' // Release parachute and kill motors.
  | string;

export enum MAV_TUNNEL_PAYLOAD_TYPEEnum {
  // Encoding of payload unknown.
  MAV_TUNNEL_PAYLOAD_TYPE_UNKNOWN = 'MAV_TUNNEL_PAYLOAD_TYPE_UNKNOWN',
  // Registered for STorM32 gimbal controller.
  MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED0 = 'MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED0',
  // Registered for STorM32 gimbal controller.
  MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED1 = 'MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED1',
  // Registered for STorM32 gimbal controller.
  MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED2 = 'MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED2',
  // Registered for STorM32 gimbal controller.
  MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED3 = 'MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED3',
  // Registered for STorM32 gimbal controller.
  MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED4 = 'MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED4',
  // Registered for STorM32 gimbal controller.
  MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED5 = 'MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED5',
  // Registered for STorM32 gimbal controller.
  MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED6 = 'MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED6',
  // Registered for STorM32 gimbal controller.
  MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED7 = 'MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED7',
  // Registered for STorM32 gimbal controller.
  MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED8 = 'MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED8',
  // Registered for STorM32 gimbal controller.
  MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED9 = 'MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED9',
  // Registered for ModalAI remote OSD protocol.
  MAV_TUNNEL_PAYLOAD_TYPE_MODALAI_REMOTE_OSD = 'MAV_TUNNEL_PAYLOAD_TYPE_MODALAI_REMOTE_OSD',
  // Registered for ModalAI ESC UART passthru protocol.
  MAV_TUNNEL_PAYLOAD_TYPE_MODALAI_ESC_UART_PASSTHRU = 'MAV_TUNNEL_PAYLOAD_TYPE_MODALAI_ESC_UART_PASSTHRU',
  // Registered for ModalAI vendor use.
  MAV_TUNNEL_PAYLOAD_TYPE_MODALAI_IO_UART_PASSTHRU = 'MAV_TUNNEL_PAYLOAD_TYPE_MODALAI_IO_UART_PASSTHRU',
}

export type MAV_TUNNEL_PAYLOAD_TYPE =
  | 'MAV_TUNNEL_PAYLOAD_TYPE_UNKNOWN' // Encoding of payload unknown.
  | 'MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED0' // Registered for STorM32 gimbal controller.
  | 'MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED1' // Registered for STorM32 gimbal controller.
  | 'MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED2' // Registered for STorM32 gimbal controller.
  | 'MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED3' // Registered for STorM32 gimbal controller.
  | 'MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED4' // Registered for STorM32 gimbal controller.
  | 'MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED5' // Registered for STorM32 gimbal controller.
  | 'MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED6' // Registered for STorM32 gimbal controller.
  | 'MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED7' // Registered for STorM32 gimbal controller.
  | 'MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED8' // Registered for STorM32 gimbal controller.
  | 'MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED9' // Registered for STorM32 gimbal controller.
  | 'MAV_TUNNEL_PAYLOAD_TYPE_MODALAI_REMOTE_OSD' // Registered for ModalAI remote OSD protocol.
  | 'MAV_TUNNEL_PAYLOAD_TYPE_MODALAI_ESC_UART_PASSTHRU' // Registered for ModalAI ESC UART passthru protocol.
  | 'MAV_TUNNEL_PAYLOAD_TYPE_MODALAI_IO_UART_PASSTHRU' // Registered for ModalAI vendor use.
  | string;

export enum MAV_ODID_ID_TYPEEnum {
  // No type defined.
  MAV_ODID_ID_TYPE_NONE = 'MAV_ODID_ID_TYPE_NONE',
  // Manufacturer Serial Number (ANSI/CTA-2063 format).
  MAV_ODID_ID_TYPE_SERIAL_NUMBER = 'MAV_ODID_ID_TYPE_SERIAL_NUMBER',
  // CAA (Civil Aviation Authority) registered ID. Format: [ICAO Country Code].[CAA Assigned ID].
  MAV_ODID_ID_TYPE_CAA_REGISTRATION_ID = 'MAV_ODID_ID_TYPE_CAA_REGISTRATION_ID',
  // UTM (Unmanned Traffic Management) assigned UUID (RFC4122).
  MAV_ODID_ID_TYPE_UTM_ASSIGNED_UUID = 'MAV_ODID_ID_TYPE_UTM_ASSIGNED_UUID',
  // A 20 byte ID for a specific flight/session. The exact ID type is indicated by the first byte of uas_id and these type values are managed by ICAO.
  MAV_ODID_ID_TYPE_SPECIFIC_SESSION_ID = 'MAV_ODID_ID_TYPE_SPECIFIC_SESSION_ID',
}

export type MAV_ODID_ID_TYPE =
  | 'MAV_ODID_ID_TYPE_NONE' // No type defined.
  | 'MAV_ODID_ID_TYPE_SERIAL_NUMBER' // Manufacturer Serial Number (ANSI/CTA-2063 format).
  | 'MAV_ODID_ID_TYPE_CAA_REGISTRATION_ID' // CAA (Civil Aviation Authority) registered ID. Format: [ICAO Country Code].[CAA Assigned ID].
  | 'MAV_ODID_ID_TYPE_UTM_ASSIGNED_UUID' // UTM (Unmanned Traffic Management) assigned UUID (RFC4122).
  | 'MAV_ODID_ID_TYPE_SPECIFIC_SESSION_ID' // A 20 byte ID for a specific flight/session. The exact ID type is indicated by the first byte of uas_id and these type values are managed by ICAO.
  | string;

export enum MAV_ODID_UA_TYPEEnum {
  // No UA (Unmanned Aircraft) type defined.
  MAV_ODID_UA_TYPE_NONE = 'MAV_ODID_UA_TYPE_NONE',
  // Aeroplane/Airplane. Fixed wing.
  MAV_ODID_UA_TYPE_AEROPLANE = 'MAV_ODID_UA_TYPE_AEROPLANE',
  // Helicopter or multirotor.
  MAV_ODID_UA_TYPE_HELICOPTER_OR_MULTIROTOR = 'MAV_ODID_UA_TYPE_HELICOPTER_OR_MULTIROTOR',
  // Gyroplane.
  MAV_ODID_UA_TYPE_GYROPLANE = 'MAV_ODID_UA_TYPE_GYROPLANE',
  // VTOL (Vertical Take-Off and Landing). Fixed wing aircraft that can take off vertically.
  MAV_ODID_UA_TYPE_HYBRID_LIFT = 'MAV_ODID_UA_TYPE_HYBRID_LIFT',
  // Ornithopter.
  MAV_ODID_UA_TYPE_ORNITHOPTER = 'MAV_ODID_UA_TYPE_ORNITHOPTER',
  // Glider.
  MAV_ODID_UA_TYPE_GLIDER = 'MAV_ODID_UA_TYPE_GLIDER',
  // Kite.
  MAV_ODID_UA_TYPE_KITE = 'MAV_ODID_UA_TYPE_KITE',
  // Free Balloon.
  MAV_ODID_UA_TYPE_FREE_BALLOON = 'MAV_ODID_UA_TYPE_FREE_BALLOON',
  // Captive Balloon.
  MAV_ODID_UA_TYPE_CAPTIVE_BALLOON = 'MAV_ODID_UA_TYPE_CAPTIVE_BALLOON',
  // Airship. E.g. a blimp.
  MAV_ODID_UA_TYPE_AIRSHIP = 'MAV_ODID_UA_TYPE_AIRSHIP',
  // Free Fall/Parachute (unpowered).
  MAV_ODID_UA_TYPE_FREE_FALL_PARACHUTE = 'MAV_ODID_UA_TYPE_FREE_FALL_PARACHUTE',
  // Rocket.
  MAV_ODID_UA_TYPE_ROCKET = 'MAV_ODID_UA_TYPE_ROCKET',
  // Tethered powered aircraft.
  MAV_ODID_UA_TYPE_TETHERED_POWERED_AIRCRAFT = 'MAV_ODID_UA_TYPE_TETHERED_POWERED_AIRCRAFT',
  // Ground Obstacle.
  MAV_ODID_UA_TYPE_GROUND_OBSTACLE = 'MAV_ODID_UA_TYPE_GROUND_OBSTACLE',
  // Other type of aircraft not listed earlier.
  MAV_ODID_UA_TYPE_OTHER = 'MAV_ODID_UA_TYPE_OTHER',
}

export type MAV_ODID_UA_TYPE =
  | 'MAV_ODID_UA_TYPE_NONE' // No UA (Unmanned Aircraft) type defined.
  | 'MAV_ODID_UA_TYPE_AEROPLANE' // Aeroplane/Airplane. Fixed wing.
  | 'MAV_ODID_UA_TYPE_HELICOPTER_OR_MULTIROTOR' // Helicopter or multirotor.
  | 'MAV_ODID_UA_TYPE_GYROPLANE' // Gyroplane.
  | 'MAV_ODID_UA_TYPE_HYBRID_LIFT' // VTOL (Vertical Take-Off and Landing). Fixed wing aircraft that can take off vertically.
  | 'MAV_ODID_UA_TYPE_ORNITHOPTER' // Ornithopter.
  | 'MAV_ODID_UA_TYPE_GLIDER' // Glider.
  | 'MAV_ODID_UA_TYPE_KITE' // Kite.
  | 'MAV_ODID_UA_TYPE_FREE_BALLOON' // Free Balloon.
  | 'MAV_ODID_UA_TYPE_CAPTIVE_BALLOON' // Captive Balloon.
  | 'MAV_ODID_UA_TYPE_AIRSHIP' // Airship. E.g. a blimp.
  | 'MAV_ODID_UA_TYPE_FREE_FALL_PARACHUTE' // Free Fall/Parachute (unpowered).
  | 'MAV_ODID_UA_TYPE_ROCKET' // Rocket.
  | 'MAV_ODID_UA_TYPE_TETHERED_POWERED_AIRCRAFT' // Tethered powered aircraft.
  | 'MAV_ODID_UA_TYPE_GROUND_OBSTACLE' // Ground Obstacle.
  | 'MAV_ODID_UA_TYPE_OTHER' // Other type of aircraft not listed earlier.
  | string;

export enum MAV_ODID_STATUSEnum {
  // The status of the (UA) Unmanned Aircraft is undefined.
  MAV_ODID_STATUS_UNDECLARED = 'MAV_ODID_STATUS_UNDECLARED',
  // The UA is on the ground.
  MAV_ODID_STATUS_GROUND = 'MAV_ODID_STATUS_GROUND',
  // The UA is in the air.
  MAV_ODID_STATUS_AIRBORNE = 'MAV_ODID_STATUS_AIRBORNE',
  // The UA is having an emergency.
  MAV_ODID_STATUS_EMERGENCY = 'MAV_ODID_STATUS_EMERGENCY',
  // The remote ID system is failing or unreliable in some way.
  MAV_ODID_STATUS_REMOTE_ID_SYSTEM_FAILURE = 'MAV_ODID_STATUS_REMOTE_ID_SYSTEM_FAILURE',
}

export type MAV_ODID_STATUS =
  | 'MAV_ODID_STATUS_UNDECLARED' // The status of the (UA) Unmanned Aircraft is undefined.
  | 'MAV_ODID_STATUS_GROUND' // The UA is on the ground.
  | 'MAV_ODID_STATUS_AIRBORNE' // The UA is in the air.
  | 'MAV_ODID_STATUS_EMERGENCY' // The UA is having an emergency.
  | 'MAV_ODID_STATUS_REMOTE_ID_SYSTEM_FAILURE' // The remote ID system is failing or unreliable in some way.
  | string;

export enum MAV_ODID_HEIGHT_REFEnum {
  // The height field is relative to the take-off location.
  MAV_ODID_HEIGHT_REF_OVER_TAKEOFF = 'MAV_ODID_HEIGHT_REF_OVER_TAKEOFF',
  // The height field is relative to ground.
  MAV_ODID_HEIGHT_REF_OVER_GROUND = 'MAV_ODID_HEIGHT_REF_OVER_GROUND',
}

export type MAV_ODID_HEIGHT_REF =
  | 'MAV_ODID_HEIGHT_REF_OVER_TAKEOFF' // The height field is relative to the take-off location.
  | 'MAV_ODID_HEIGHT_REF_OVER_GROUND' // The height field is relative to ground.
  | string;

export enum MAV_ODID_HOR_ACCEnum {
  // The horizontal accuracy is unknown.
  MAV_ODID_HOR_ACC_UNKNOWN = 'MAV_ODID_HOR_ACC_UNKNOWN',
  // The horizontal accuracy is smaller than 10 Nautical Miles. 18.52 km.
  MAV_ODID_HOR_ACC_10NM = 'MAV_ODID_HOR_ACC_10NM',
  // The horizontal accuracy is smaller than 4 Nautical Miles. 7.408 km.
  MAV_ODID_HOR_ACC_4NM = 'MAV_ODID_HOR_ACC_4NM',
  // The horizontal accuracy is smaller than 2 Nautical Miles. 3.704 km.
  MAV_ODID_HOR_ACC_2NM = 'MAV_ODID_HOR_ACC_2NM',
  // The horizontal accuracy is smaller than 1 Nautical Miles. 1.852 km.
  MAV_ODID_HOR_ACC_1NM = 'MAV_ODID_HOR_ACC_1NM',
  // The horizontal accuracy is smaller than 0.5 Nautical Miles. 926 m.
  MAV_ODID_HOR_ACC_0_5NM = 'MAV_ODID_HOR_ACC_0_5NM',
  // The horizontal accuracy is smaller than 0.3 Nautical Miles. 555.6 m.
  MAV_ODID_HOR_ACC_0_3NM = 'MAV_ODID_HOR_ACC_0_3NM',
  // The horizontal accuracy is smaller than 0.1 Nautical Miles. 185.2 m.
  MAV_ODID_HOR_ACC_0_1NM = 'MAV_ODID_HOR_ACC_0_1NM',
  // The horizontal accuracy is smaller than 0.05 Nautical Miles. 92.6 m.
  MAV_ODID_HOR_ACC_0_05NM = 'MAV_ODID_HOR_ACC_0_05NM',
  // The horizontal accuracy is smaller than 30 meter.
  MAV_ODID_HOR_ACC_30_METER = 'MAV_ODID_HOR_ACC_30_METER',
  // The horizontal accuracy is smaller than 10 meter.
  MAV_ODID_HOR_ACC_10_METER = 'MAV_ODID_HOR_ACC_10_METER',
  // The horizontal accuracy is smaller than 3 meter.
  MAV_ODID_HOR_ACC_3_METER = 'MAV_ODID_HOR_ACC_3_METER',
  // The horizontal accuracy is smaller than 1 meter.
  MAV_ODID_HOR_ACC_1_METER = 'MAV_ODID_HOR_ACC_1_METER',
}

export type MAV_ODID_HOR_ACC =
  | 'MAV_ODID_HOR_ACC_UNKNOWN' // The horizontal accuracy is unknown.
  | 'MAV_ODID_HOR_ACC_10NM' // The horizontal accuracy is smaller than 10 Nautical Miles. 18.52 km.
  | 'MAV_ODID_HOR_ACC_4NM' // The horizontal accuracy is smaller than 4 Nautical Miles. 7.408 km.
  | 'MAV_ODID_HOR_ACC_2NM' // The horizontal accuracy is smaller than 2 Nautical Miles. 3.704 km.
  | 'MAV_ODID_HOR_ACC_1NM' // The horizontal accuracy is smaller than 1 Nautical Miles. 1.852 km.
  | 'MAV_ODID_HOR_ACC_0_5NM' // The horizontal accuracy is smaller than 0.5 Nautical Miles. 926 m.
  | 'MAV_ODID_HOR_ACC_0_3NM' // The horizontal accuracy is smaller than 0.3 Nautical Miles. 555.6 m.
  | 'MAV_ODID_HOR_ACC_0_1NM' // The horizontal accuracy is smaller than 0.1 Nautical Miles. 185.2 m.
  | 'MAV_ODID_HOR_ACC_0_05NM' // The horizontal accuracy is smaller than 0.05 Nautical Miles. 92.6 m.
  | 'MAV_ODID_HOR_ACC_30_METER' // The horizontal accuracy is smaller than 30 meter.
  | 'MAV_ODID_HOR_ACC_10_METER' // The horizontal accuracy is smaller than 10 meter.
  | 'MAV_ODID_HOR_ACC_3_METER' // The horizontal accuracy is smaller than 3 meter.
  | 'MAV_ODID_HOR_ACC_1_METER' // The horizontal accuracy is smaller than 1 meter.
  | string;

export enum MAV_ODID_VER_ACCEnum {
  // The vertical accuracy is unknown.
  MAV_ODID_VER_ACC_UNKNOWN = 'MAV_ODID_VER_ACC_UNKNOWN',
  // The vertical accuracy is smaller than 150 meter.
  MAV_ODID_VER_ACC_150_METER = 'MAV_ODID_VER_ACC_150_METER',
  // The vertical accuracy is smaller than 45 meter.
  MAV_ODID_VER_ACC_45_METER = 'MAV_ODID_VER_ACC_45_METER',
  // The vertical accuracy is smaller than 25 meter.
  MAV_ODID_VER_ACC_25_METER = 'MAV_ODID_VER_ACC_25_METER',
  // The vertical accuracy is smaller than 10 meter.
  MAV_ODID_VER_ACC_10_METER = 'MAV_ODID_VER_ACC_10_METER',
  // The vertical accuracy is smaller than 3 meter.
  MAV_ODID_VER_ACC_3_METER = 'MAV_ODID_VER_ACC_3_METER',
  // The vertical accuracy is smaller than 1 meter.
  MAV_ODID_VER_ACC_1_METER = 'MAV_ODID_VER_ACC_1_METER',
}

export type MAV_ODID_VER_ACC =
  | 'MAV_ODID_VER_ACC_UNKNOWN' // The vertical accuracy is unknown.
  | 'MAV_ODID_VER_ACC_150_METER' // The vertical accuracy is smaller than 150 meter.
  | 'MAV_ODID_VER_ACC_45_METER' // The vertical accuracy is smaller than 45 meter.
  | 'MAV_ODID_VER_ACC_25_METER' // The vertical accuracy is smaller than 25 meter.
  | 'MAV_ODID_VER_ACC_10_METER' // The vertical accuracy is smaller than 10 meter.
  | 'MAV_ODID_VER_ACC_3_METER' // The vertical accuracy is smaller than 3 meter.
  | 'MAV_ODID_VER_ACC_1_METER' // The vertical accuracy is smaller than 1 meter.
  | string;

export enum MAV_ODID_SPEED_ACCEnum {
  // The speed accuracy is unknown.
  MAV_ODID_SPEED_ACC_UNKNOWN = 'MAV_ODID_SPEED_ACC_UNKNOWN',
  // The speed accuracy is smaller than 10 meters per second.
  MAV_ODID_SPEED_ACC_10_METERS_PER_SECOND = 'MAV_ODID_SPEED_ACC_10_METERS_PER_SECOND',
  // The speed accuracy is smaller than 3 meters per second.
  MAV_ODID_SPEED_ACC_3_METERS_PER_SECOND = 'MAV_ODID_SPEED_ACC_3_METERS_PER_SECOND',
  // The speed accuracy is smaller than 1 meters per second.
  MAV_ODID_SPEED_ACC_1_METERS_PER_SECOND = 'MAV_ODID_SPEED_ACC_1_METERS_PER_SECOND',
  // The speed accuracy is smaller than 0.3 meters per second.
  MAV_ODID_SPEED_ACC_0_3_METERS_PER_SECOND = 'MAV_ODID_SPEED_ACC_0_3_METERS_PER_SECOND',
}

export type MAV_ODID_SPEED_ACC =
  | 'MAV_ODID_SPEED_ACC_UNKNOWN' // The speed accuracy is unknown.
  | 'MAV_ODID_SPEED_ACC_10_METERS_PER_SECOND' // The speed accuracy is smaller than 10 meters per second.
  | 'MAV_ODID_SPEED_ACC_3_METERS_PER_SECOND' // The speed accuracy is smaller than 3 meters per second.
  | 'MAV_ODID_SPEED_ACC_1_METERS_PER_SECOND' // The speed accuracy is smaller than 1 meters per second.
  | 'MAV_ODID_SPEED_ACC_0_3_METERS_PER_SECOND' // The speed accuracy is smaller than 0.3 meters per second.
  | string;

export enum MAV_ODID_TIME_ACCEnum {
  // The timestamp accuracy is unknown.
  MAV_ODID_TIME_ACC_UNKNOWN = 'MAV_ODID_TIME_ACC_UNKNOWN',
  // The timestamp accuracy is smaller than or equal to 0.1 second.
  MAV_ODID_TIME_ACC_0_1_SECOND = 'MAV_ODID_TIME_ACC_0_1_SECOND',
  // The timestamp accuracy is smaller than or equal to 0.2 second.
  MAV_ODID_TIME_ACC_0_2_SECOND = 'MAV_ODID_TIME_ACC_0_2_SECOND',
  // The timestamp accuracy is smaller than or equal to 0.3 second.
  MAV_ODID_TIME_ACC_0_3_SECOND = 'MAV_ODID_TIME_ACC_0_3_SECOND',
  // The timestamp accuracy is smaller than or equal to 0.4 second.
  MAV_ODID_TIME_ACC_0_4_SECOND = 'MAV_ODID_TIME_ACC_0_4_SECOND',
  // The timestamp accuracy is smaller than or equal to 0.5 second.
  MAV_ODID_TIME_ACC_0_5_SECOND = 'MAV_ODID_TIME_ACC_0_5_SECOND',
  // The timestamp accuracy is smaller than or equal to 0.6 second.
  MAV_ODID_TIME_ACC_0_6_SECOND = 'MAV_ODID_TIME_ACC_0_6_SECOND',
  // The timestamp accuracy is smaller than or equal to 0.7 second.
  MAV_ODID_TIME_ACC_0_7_SECOND = 'MAV_ODID_TIME_ACC_0_7_SECOND',
  // The timestamp accuracy is smaller than or equal to 0.8 second.
  MAV_ODID_TIME_ACC_0_8_SECOND = 'MAV_ODID_TIME_ACC_0_8_SECOND',
  // The timestamp accuracy is smaller than or equal to 0.9 second.
  MAV_ODID_TIME_ACC_0_9_SECOND = 'MAV_ODID_TIME_ACC_0_9_SECOND',
  // The timestamp accuracy is smaller than or equal to 1.0 second.
  MAV_ODID_TIME_ACC_1_0_SECOND = 'MAV_ODID_TIME_ACC_1_0_SECOND',
  // The timestamp accuracy is smaller than or equal to 1.1 second.
  MAV_ODID_TIME_ACC_1_1_SECOND = 'MAV_ODID_TIME_ACC_1_1_SECOND',
  // The timestamp accuracy is smaller than or equal to 1.2 second.
  MAV_ODID_TIME_ACC_1_2_SECOND = 'MAV_ODID_TIME_ACC_1_2_SECOND',
  // The timestamp accuracy is smaller than or equal to 1.3 second.
  MAV_ODID_TIME_ACC_1_3_SECOND = 'MAV_ODID_TIME_ACC_1_3_SECOND',
  // The timestamp accuracy is smaller than or equal to 1.4 second.
  MAV_ODID_TIME_ACC_1_4_SECOND = 'MAV_ODID_TIME_ACC_1_4_SECOND',
  // The timestamp accuracy is smaller than or equal to 1.5 second.
  MAV_ODID_TIME_ACC_1_5_SECOND = 'MAV_ODID_TIME_ACC_1_5_SECOND',
}

export type MAV_ODID_TIME_ACC =
  | 'MAV_ODID_TIME_ACC_UNKNOWN' // The timestamp accuracy is unknown.
  | 'MAV_ODID_TIME_ACC_0_1_SECOND' // The timestamp accuracy is smaller than or equal to 0.1 second.
  | 'MAV_ODID_TIME_ACC_0_2_SECOND' // The timestamp accuracy is smaller than or equal to 0.2 second.
  | 'MAV_ODID_TIME_ACC_0_3_SECOND' // The timestamp accuracy is smaller than or equal to 0.3 second.
  | 'MAV_ODID_TIME_ACC_0_4_SECOND' // The timestamp accuracy is smaller than or equal to 0.4 second.
  | 'MAV_ODID_TIME_ACC_0_5_SECOND' // The timestamp accuracy is smaller than or equal to 0.5 second.
  | 'MAV_ODID_TIME_ACC_0_6_SECOND' // The timestamp accuracy is smaller than or equal to 0.6 second.
  | 'MAV_ODID_TIME_ACC_0_7_SECOND' // The timestamp accuracy is smaller than or equal to 0.7 second.
  | 'MAV_ODID_TIME_ACC_0_8_SECOND' // The timestamp accuracy is smaller than or equal to 0.8 second.
  | 'MAV_ODID_TIME_ACC_0_9_SECOND' // The timestamp accuracy is smaller than or equal to 0.9 second.
  | 'MAV_ODID_TIME_ACC_1_0_SECOND' // The timestamp accuracy is smaller than or equal to 1.0 second.
  | 'MAV_ODID_TIME_ACC_1_1_SECOND' // The timestamp accuracy is smaller than or equal to 1.1 second.
  | 'MAV_ODID_TIME_ACC_1_2_SECOND' // The timestamp accuracy is smaller than or equal to 1.2 second.
  | 'MAV_ODID_TIME_ACC_1_3_SECOND' // The timestamp accuracy is smaller than or equal to 1.3 second.
  | 'MAV_ODID_TIME_ACC_1_4_SECOND' // The timestamp accuracy is smaller than or equal to 1.4 second.
  | 'MAV_ODID_TIME_ACC_1_5_SECOND' // The timestamp accuracy is smaller than or equal to 1.5 second.
  | string;

export enum MAV_ODID_AUTH_TYPEEnum {
  // No authentication type is specified.
  MAV_ODID_AUTH_TYPE_NONE = 'MAV_ODID_AUTH_TYPE_NONE',
  // Signature for the UAS (Unmanned Aircraft System) ID.
  MAV_ODID_AUTH_TYPE_UAS_ID_SIGNATURE = 'MAV_ODID_AUTH_TYPE_UAS_ID_SIGNATURE',
  // Signature for the Operator ID.
  MAV_ODID_AUTH_TYPE_OPERATOR_ID_SIGNATURE = 'MAV_ODID_AUTH_TYPE_OPERATOR_ID_SIGNATURE',
  // Signature for the entire message set.
  MAV_ODID_AUTH_TYPE_MESSAGE_SET_SIGNATURE = 'MAV_ODID_AUTH_TYPE_MESSAGE_SET_SIGNATURE',
  // Authentication is provided by Network Remote ID.
  MAV_ODID_AUTH_TYPE_NETWORK_REMOTE_ID = 'MAV_ODID_AUTH_TYPE_NETWORK_REMOTE_ID',
  // The exact authentication type is indicated by the first byte of authentication_data and these type values are managed by ICAO.
  MAV_ODID_AUTH_TYPE_SPECIFIC_AUTHENTICATION = 'MAV_ODID_AUTH_TYPE_SPECIFIC_AUTHENTICATION',
}

export type MAV_ODID_AUTH_TYPE =
  | 'MAV_ODID_AUTH_TYPE_NONE' // No authentication type is specified.
  | 'MAV_ODID_AUTH_TYPE_UAS_ID_SIGNATURE' // Signature for the UAS (Unmanned Aircraft System) ID.
  | 'MAV_ODID_AUTH_TYPE_OPERATOR_ID_SIGNATURE' // Signature for the Operator ID.
  | 'MAV_ODID_AUTH_TYPE_MESSAGE_SET_SIGNATURE' // Signature for the entire message set.
  | 'MAV_ODID_AUTH_TYPE_NETWORK_REMOTE_ID' // Authentication is provided by Network Remote ID.
  | 'MAV_ODID_AUTH_TYPE_SPECIFIC_AUTHENTICATION' // The exact authentication type is indicated by the first byte of authentication_data and these type values are managed by ICAO.
  | string;

export enum MAV_ODID_DESC_TYPEEnum {
  // Optional free-form text description of the purpose of the flight.
  MAV_ODID_DESC_TYPE_TEXT = 'MAV_ODID_DESC_TYPE_TEXT',
  // Optional additional clarification when status &#x3D;&#x3D; MAV_ODID_STATUS_EMERGENCY.
  MAV_ODID_DESC_TYPE_EMERGENCY = 'MAV_ODID_DESC_TYPE_EMERGENCY',
  // Optional additional clarification when status !&#x3D; MAV_ODID_STATUS_EMERGENCY.
  MAV_ODID_DESC_TYPE_EXTENDED_STATUS = 'MAV_ODID_DESC_TYPE_EXTENDED_STATUS',
}

export type MAV_ODID_DESC_TYPE =
  | 'MAV_ODID_DESC_TYPE_TEXT' // Optional free-form text description of the purpose of the flight.
  | 'MAV_ODID_DESC_TYPE_EMERGENCY' // Optional additional clarification when status &#x3D;&#x3D; MAV_ODID_STATUS_EMERGENCY.
  | 'MAV_ODID_DESC_TYPE_EXTENDED_STATUS' // Optional additional clarification when status !&#x3D; MAV_ODID_STATUS_EMERGENCY.
  | string;

export enum MAV_ODID_OPERATOR_LOCATION_TYPEEnum {
  // The location/altitude of the operator is the same as the take-off location.
  MAV_ODID_OPERATOR_LOCATION_TYPE_TAKEOFF = 'MAV_ODID_OPERATOR_LOCATION_TYPE_TAKEOFF',
  // The location/altitude of the operator is dynamic. E.g. based on live GNSS data.
  MAV_ODID_OPERATOR_LOCATION_TYPE_LIVE_GNSS = 'MAV_ODID_OPERATOR_LOCATION_TYPE_LIVE_GNSS',
  // The location/altitude of the operator are fixed values.
  MAV_ODID_OPERATOR_LOCATION_TYPE_FIXED = 'MAV_ODID_OPERATOR_LOCATION_TYPE_FIXED',
}

export type MAV_ODID_OPERATOR_LOCATION_TYPE =
  | 'MAV_ODID_OPERATOR_LOCATION_TYPE_TAKEOFF' // The location/altitude of the operator is the same as the take-off location.
  | 'MAV_ODID_OPERATOR_LOCATION_TYPE_LIVE_GNSS' // The location/altitude of the operator is dynamic. E.g. based on live GNSS data.
  | 'MAV_ODID_OPERATOR_LOCATION_TYPE_FIXED' // The location/altitude of the operator are fixed values.
  | string;

export enum MAV_ODID_CLASSIFICATION_TYPEEnum {
  // The classification type for the UA is undeclared.
  MAV_ODID_CLASSIFICATION_TYPE_UNDECLARED = 'MAV_ODID_CLASSIFICATION_TYPE_UNDECLARED',
  // The classification type for the UA follows EU (European Union) specifications.
  MAV_ODID_CLASSIFICATION_TYPE_EU = 'MAV_ODID_CLASSIFICATION_TYPE_EU',
}

export type MAV_ODID_CLASSIFICATION_TYPE =
  | 'MAV_ODID_CLASSIFICATION_TYPE_UNDECLARED' // The classification type for the UA is undeclared.
  | 'MAV_ODID_CLASSIFICATION_TYPE_EU' // The classification type for the UA follows EU (European Union) specifications.
  | string;

export enum MAV_ODID_CATEGORY_EUEnum {
  // The category for the UA, according to the EU specification, is undeclared.
  MAV_ODID_CATEGORY_EU_UNDECLARED = 'MAV_ODID_CATEGORY_EU_UNDECLARED',
  // The category for the UA, according to the EU specification, is the Open category.
  MAV_ODID_CATEGORY_EU_OPEN = 'MAV_ODID_CATEGORY_EU_OPEN',
  // The category for the UA, according to the EU specification, is the Specific category.
  MAV_ODID_CATEGORY_EU_SPECIFIC = 'MAV_ODID_CATEGORY_EU_SPECIFIC',
  // The category for the UA, according to the EU specification, is the Certified category.
  MAV_ODID_CATEGORY_EU_CERTIFIED = 'MAV_ODID_CATEGORY_EU_CERTIFIED',
}

export type MAV_ODID_CATEGORY_EU =
  | 'MAV_ODID_CATEGORY_EU_UNDECLARED' // The category for the UA, according to the EU specification, is undeclared.
  | 'MAV_ODID_CATEGORY_EU_OPEN' // The category for the UA, according to the EU specification, is the Open category.
  | 'MAV_ODID_CATEGORY_EU_SPECIFIC' // The category for the UA, according to the EU specification, is the Specific category.
  | 'MAV_ODID_CATEGORY_EU_CERTIFIED' // The category for the UA, according to the EU specification, is the Certified category.
  | string;

export enum MAV_ODID_CLASS_EUEnum {
  // The class for the UA, according to the EU specification, is undeclared.
  MAV_ODID_CLASS_EU_UNDECLARED = 'MAV_ODID_CLASS_EU_UNDECLARED',
  // The class for the UA, according to the EU specification, is Class 0.
  MAV_ODID_CLASS_EU_CLASS_0 = 'MAV_ODID_CLASS_EU_CLASS_0',
  // The class for the UA, according to the EU specification, is Class 1.
  MAV_ODID_CLASS_EU_CLASS_1 = 'MAV_ODID_CLASS_EU_CLASS_1',
  // The class for the UA, according to the EU specification, is Class 2.
  MAV_ODID_CLASS_EU_CLASS_2 = 'MAV_ODID_CLASS_EU_CLASS_2',
  // The class for the UA, according to the EU specification, is Class 3.
  MAV_ODID_CLASS_EU_CLASS_3 = 'MAV_ODID_CLASS_EU_CLASS_3',
  // The class for the UA, according to the EU specification, is Class 4.
  MAV_ODID_CLASS_EU_CLASS_4 = 'MAV_ODID_CLASS_EU_CLASS_4',
  // The class for the UA, according to the EU specification, is Class 5.
  MAV_ODID_CLASS_EU_CLASS_5 = 'MAV_ODID_CLASS_EU_CLASS_5',
  // The class for the UA, according to the EU specification, is Class 6.
  MAV_ODID_CLASS_EU_CLASS_6 = 'MAV_ODID_CLASS_EU_CLASS_6',
}

export type MAV_ODID_CLASS_EU =
  | 'MAV_ODID_CLASS_EU_UNDECLARED' // The class for the UA, according to the EU specification, is undeclared.
  | 'MAV_ODID_CLASS_EU_CLASS_0' // The class for the UA, according to the EU specification, is Class 0.
  | 'MAV_ODID_CLASS_EU_CLASS_1' // The class for the UA, according to the EU specification, is Class 1.
  | 'MAV_ODID_CLASS_EU_CLASS_2' // The class for the UA, according to the EU specification, is Class 2.
  | 'MAV_ODID_CLASS_EU_CLASS_3' // The class for the UA, according to the EU specification, is Class 3.
  | 'MAV_ODID_CLASS_EU_CLASS_4' // The class for the UA, according to the EU specification, is Class 4.
  | 'MAV_ODID_CLASS_EU_CLASS_5' // The class for the UA, according to the EU specification, is Class 5.
  | 'MAV_ODID_CLASS_EU_CLASS_6' // The class for the UA, according to the EU specification, is Class 6.
  | string;

export enum MAV_ODID_OPERATOR_ID_TYPEEnum {
  // CAA (Civil Aviation Authority) registered operator ID.
  MAV_ODID_OPERATOR_ID_TYPE_CAA = 'MAV_ODID_OPERATOR_ID_TYPE_CAA',
}

export type MAV_ODID_OPERATOR_ID_TYPE =
  | 'MAV_ODID_OPERATOR_ID_TYPE_CAA' // CAA (Civil Aviation Authority) registered operator ID.
  | string;

export enum MAV_ODID_ARM_STATUSEnum {
  // Passing arming checks.
  MAV_ODID_ARM_STATUS_GOOD_TO_ARM = 'MAV_ODID_ARM_STATUS_GOOD_TO_ARM',
  // Generic arming failure, see error string for details.
  MAV_ODID_ARM_STATUS_PRE_ARM_FAIL_GENERIC = 'MAV_ODID_ARM_STATUS_PRE_ARM_FAIL_GENERIC',
}

export type MAV_ODID_ARM_STATUS =
  | 'MAV_ODID_ARM_STATUS_GOOD_TO_ARM' // Passing arming checks.
  | 'MAV_ODID_ARM_STATUS_PRE_ARM_FAIL_GENERIC' // Generic arming failure, see error string for details.
  | string;

// Tune formats (used for vehicle buzzer/tone generation).
export enum TUNE_FORMATEnum {
  // Format is QBasic 1.1 Play: https://www.qbasic.net/en/reference/qb11/Statement/PLAY-006.htm.
  TUNE_FORMAT_QBASIC1_1 = 'TUNE_FORMAT_QBASIC1_1',
  // Format is Modern Music Markup Language (MML): https://en.wikipedia.org/wiki/Music_Macro_Language#Modern_MML.
  TUNE_FORMAT_MML_MODERN = 'TUNE_FORMAT_MML_MODERN',
}

export type TUNE_FORMAT =
  | 'TUNE_FORMAT_QBASIC1_1' // Format is QBasic 1.1 Play: https://www.qbasic.net/en/reference/qb11/Statement/PLAY-006.htm.
  | 'TUNE_FORMAT_MML_MODERN' // Format is Modern Music Markup Language (MML): https://en.wikipedia.org/wiki/Music_Macro_Language#Modern_MML.
  | string;

// Type of AIS vessel, enum duplicated from AIS standard, https://gpsd.gitlab.io/gpsd/AIVDM.html
export enum AIS_TYPEEnum {
  // Not available (default).
  AIS_TYPE_UNKNOWN = 'AIS_TYPE_UNKNOWN',
  AIS_TYPE_RESERVED_1 = 'AIS_TYPE_RESERVED_1',
  AIS_TYPE_RESERVED_2 = 'AIS_TYPE_RESERVED_2',
  AIS_TYPE_RESERVED_3 = 'AIS_TYPE_RESERVED_3',
  AIS_TYPE_RESERVED_4 = 'AIS_TYPE_RESERVED_4',
  AIS_TYPE_RESERVED_5 = 'AIS_TYPE_RESERVED_5',
  AIS_TYPE_RESERVED_6 = 'AIS_TYPE_RESERVED_6',
  AIS_TYPE_RESERVED_7 = 'AIS_TYPE_RESERVED_7',
  AIS_TYPE_RESERVED_8 = 'AIS_TYPE_RESERVED_8',
  AIS_TYPE_RESERVED_9 = 'AIS_TYPE_RESERVED_9',
  AIS_TYPE_RESERVED_10 = 'AIS_TYPE_RESERVED_10',
  AIS_TYPE_RESERVED_11 = 'AIS_TYPE_RESERVED_11',
  AIS_TYPE_RESERVED_12 = 'AIS_TYPE_RESERVED_12',
  AIS_TYPE_RESERVED_13 = 'AIS_TYPE_RESERVED_13',
  AIS_TYPE_RESERVED_14 = 'AIS_TYPE_RESERVED_14',
  AIS_TYPE_RESERVED_15 = 'AIS_TYPE_RESERVED_15',
  AIS_TYPE_RESERVED_16 = 'AIS_TYPE_RESERVED_16',
  AIS_TYPE_RESERVED_17 = 'AIS_TYPE_RESERVED_17',
  AIS_TYPE_RESERVED_18 = 'AIS_TYPE_RESERVED_18',
  AIS_TYPE_RESERVED_19 = 'AIS_TYPE_RESERVED_19',
  // Wing In Ground effect.
  AIS_TYPE_WIG = 'AIS_TYPE_WIG',
  AIS_TYPE_WIG_HAZARDOUS_A = 'AIS_TYPE_WIG_HAZARDOUS_A',
  AIS_TYPE_WIG_HAZARDOUS_B = 'AIS_TYPE_WIG_HAZARDOUS_B',
  AIS_TYPE_WIG_HAZARDOUS_C = 'AIS_TYPE_WIG_HAZARDOUS_C',
  AIS_TYPE_WIG_HAZARDOUS_D = 'AIS_TYPE_WIG_HAZARDOUS_D',
  AIS_TYPE_WIG_RESERVED_1 = 'AIS_TYPE_WIG_RESERVED_1',
  AIS_TYPE_WIG_RESERVED_2 = 'AIS_TYPE_WIG_RESERVED_2',
  AIS_TYPE_WIG_RESERVED_3 = 'AIS_TYPE_WIG_RESERVED_3',
  AIS_TYPE_WIG_RESERVED_4 = 'AIS_TYPE_WIG_RESERVED_4',
  AIS_TYPE_WIG_RESERVED_5 = 'AIS_TYPE_WIG_RESERVED_5',
  AIS_TYPE_FISHING = 'AIS_TYPE_FISHING',
  AIS_TYPE_TOWING = 'AIS_TYPE_TOWING',
  // Towing: length exceeds 200m or breadth exceeds 25m.
  AIS_TYPE_TOWING_LARGE = 'AIS_TYPE_TOWING_LARGE',
  // Dredging or other underwater ops.
  AIS_TYPE_DREDGING = 'AIS_TYPE_DREDGING',
  AIS_TYPE_DIVING = 'AIS_TYPE_DIVING',
  AIS_TYPE_MILITARY = 'AIS_TYPE_MILITARY',
  AIS_TYPE_SAILING = 'AIS_TYPE_SAILING',
  AIS_TYPE_PLEASURE = 'AIS_TYPE_PLEASURE',
  AIS_TYPE_RESERVED_20 = 'AIS_TYPE_RESERVED_20',
  AIS_TYPE_RESERVED_21 = 'AIS_TYPE_RESERVED_21',
  // High Speed Craft.
  AIS_TYPE_HSC = 'AIS_TYPE_HSC',
  AIS_TYPE_HSC_HAZARDOUS_A = 'AIS_TYPE_HSC_HAZARDOUS_A',
  AIS_TYPE_HSC_HAZARDOUS_B = 'AIS_TYPE_HSC_HAZARDOUS_B',
  AIS_TYPE_HSC_HAZARDOUS_C = 'AIS_TYPE_HSC_HAZARDOUS_C',
  AIS_TYPE_HSC_HAZARDOUS_D = 'AIS_TYPE_HSC_HAZARDOUS_D',
  AIS_TYPE_HSC_RESERVED_1 = 'AIS_TYPE_HSC_RESERVED_1',
  AIS_TYPE_HSC_RESERVED_2 = 'AIS_TYPE_HSC_RESERVED_2',
  AIS_TYPE_HSC_RESERVED_3 = 'AIS_TYPE_HSC_RESERVED_3',
  AIS_TYPE_HSC_RESERVED_4 = 'AIS_TYPE_HSC_RESERVED_4',
  AIS_TYPE_HSC_UNKNOWN = 'AIS_TYPE_HSC_UNKNOWN',
  AIS_TYPE_PILOT = 'AIS_TYPE_PILOT',
  // Search And Rescue vessel.
  AIS_TYPE_SAR = 'AIS_TYPE_SAR',
  AIS_TYPE_TUG = 'AIS_TYPE_TUG',
  AIS_TYPE_PORT_TENDER = 'AIS_TYPE_PORT_TENDER',
  // Anti-pollution equipment.
  AIS_TYPE_ANTI_POLLUTION = 'AIS_TYPE_ANTI_POLLUTION',
  AIS_TYPE_LAW_ENFORCEMENT = 'AIS_TYPE_LAW_ENFORCEMENT',
  AIS_TYPE_SPARE_LOCAL_1 = 'AIS_TYPE_SPARE_LOCAL_1',
  AIS_TYPE_SPARE_LOCAL_2 = 'AIS_TYPE_SPARE_LOCAL_2',
  AIS_TYPE_MEDICAL_TRANSPORT = 'AIS_TYPE_MEDICAL_TRANSPORT',
  // Noncombatant ship according to RR Resolution No. 18.
  AIS_TYPE_NONECOMBATANT = 'AIS_TYPE_NONECOMBATANT',
  AIS_TYPE_PASSENGER = 'AIS_TYPE_PASSENGER',
  AIS_TYPE_PASSENGER_HAZARDOUS_A = 'AIS_TYPE_PASSENGER_HAZARDOUS_A',
  AIS_TYPE_PASSENGER_HAZARDOUS_B = 'AIS_TYPE_PASSENGER_HAZARDOUS_B',
  AIS_TYPE_PASSENGER_HAZARDOUS_C = 'AIS_TYPE_PASSENGER_HAZARDOUS_C',
  AIS_TYPE_PASSENGER_HAZARDOUS_D = 'AIS_TYPE_PASSENGER_HAZARDOUS_D',
  AIS_TYPE_PASSENGER_RESERVED_1 = 'AIS_TYPE_PASSENGER_RESERVED_1',
  AIS_TYPE_PASSENGER_RESERVED_2 = 'AIS_TYPE_PASSENGER_RESERVED_2',
  AIS_TYPE_PASSENGER_RESERVED_3 = 'AIS_TYPE_PASSENGER_RESERVED_3',
  AIS_TYPE_PASSENGER_RESERVED_4 = 'AIS_TYPE_PASSENGER_RESERVED_4',
  AIS_TYPE_PASSENGER_UNKNOWN = 'AIS_TYPE_PASSENGER_UNKNOWN',
  AIS_TYPE_CARGO = 'AIS_TYPE_CARGO',
  AIS_TYPE_CARGO_HAZARDOUS_A = 'AIS_TYPE_CARGO_HAZARDOUS_A',
  AIS_TYPE_CARGO_HAZARDOUS_B = 'AIS_TYPE_CARGO_HAZARDOUS_B',
  AIS_TYPE_CARGO_HAZARDOUS_C = 'AIS_TYPE_CARGO_HAZARDOUS_C',
  AIS_TYPE_CARGO_HAZARDOUS_D = 'AIS_TYPE_CARGO_HAZARDOUS_D',
  AIS_TYPE_CARGO_RESERVED_1 = 'AIS_TYPE_CARGO_RESERVED_1',
  AIS_TYPE_CARGO_RESERVED_2 = 'AIS_TYPE_CARGO_RESERVED_2',
  AIS_TYPE_CARGO_RESERVED_3 = 'AIS_TYPE_CARGO_RESERVED_3',
  AIS_TYPE_CARGO_RESERVED_4 = 'AIS_TYPE_CARGO_RESERVED_4',
  AIS_TYPE_CARGO_UNKNOWN = 'AIS_TYPE_CARGO_UNKNOWN',
  AIS_TYPE_TANKER = 'AIS_TYPE_TANKER',
  AIS_TYPE_TANKER_HAZARDOUS_A = 'AIS_TYPE_TANKER_HAZARDOUS_A',
  AIS_TYPE_TANKER_HAZARDOUS_B = 'AIS_TYPE_TANKER_HAZARDOUS_B',
  AIS_TYPE_TANKER_HAZARDOUS_C = 'AIS_TYPE_TANKER_HAZARDOUS_C',
  AIS_TYPE_TANKER_HAZARDOUS_D = 'AIS_TYPE_TANKER_HAZARDOUS_D',
  AIS_TYPE_TANKER_RESERVED_1 = 'AIS_TYPE_TANKER_RESERVED_1',
  AIS_TYPE_TANKER_RESERVED_2 = 'AIS_TYPE_TANKER_RESERVED_2',
  AIS_TYPE_TANKER_RESERVED_3 = 'AIS_TYPE_TANKER_RESERVED_3',
  AIS_TYPE_TANKER_RESERVED_4 = 'AIS_TYPE_TANKER_RESERVED_4',
  AIS_TYPE_TANKER_UNKNOWN = 'AIS_TYPE_TANKER_UNKNOWN',
  AIS_TYPE_OTHER = 'AIS_TYPE_OTHER',
  AIS_TYPE_OTHER_HAZARDOUS_A = 'AIS_TYPE_OTHER_HAZARDOUS_A',
  AIS_TYPE_OTHER_HAZARDOUS_B = 'AIS_TYPE_OTHER_HAZARDOUS_B',
  AIS_TYPE_OTHER_HAZARDOUS_C = 'AIS_TYPE_OTHER_HAZARDOUS_C',
  AIS_TYPE_OTHER_HAZARDOUS_D = 'AIS_TYPE_OTHER_HAZARDOUS_D',
  AIS_TYPE_OTHER_RESERVED_1 = 'AIS_TYPE_OTHER_RESERVED_1',
  AIS_TYPE_OTHER_RESERVED_2 = 'AIS_TYPE_OTHER_RESERVED_2',
  AIS_TYPE_OTHER_RESERVED_3 = 'AIS_TYPE_OTHER_RESERVED_3',
  AIS_TYPE_OTHER_RESERVED_4 = 'AIS_TYPE_OTHER_RESERVED_4',
  AIS_TYPE_OTHER_UNKNOWN = 'AIS_TYPE_OTHER_UNKNOWN',
}

export type AIS_TYPE =
  | 'AIS_TYPE_UNKNOWN' // Not available (default).
  | 'AIS_TYPE_RESERVED_1'
  | 'AIS_TYPE_RESERVED_2'
  | 'AIS_TYPE_RESERVED_3'
  | 'AIS_TYPE_RESERVED_4'
  | 'AIS_TYPE_RESERVED_5'
  | 'AIS_TYPE_RESERVED_6'
  | 'AIS_TYPE_RESERVED_7'
  | 'AIS_TYPE_RESERVED_8'
  | 'AIS_TYPE_RESERVED_9'
  | 'AIS_TYPE_RESERVED_10'
  | 'AIS_TYPE_RESERVED_11'
  | 'AIS_TYPE_RESERVED_12'
  | 'AIS_TYPE_RESERVED_13'
  | 'AIS_TYPE_RESERVED_14'
  | 'AIS_TYPE_RESERVED_15'
  | 'AIS_TYPE_RESERVED_16'
  | 'AIS_TYPE_RESERVED_17'
  | 'AIS_TYPE_RESERVED_18'
  | 'AIS_TYPE_RESERVED_19'
  | 'AIS_TYPE_WIG' // Wing In Ground effect.
  | 'AIS_TYPE_WIG_HAZARDOUS_A'
  | 'AIS_TYPE_WIG_HAZARDOUS_B'
  | 'AIS_TYPE_WIG_HAZARDOUS_C'
  | 'AIS_TYPE_WIG_HAZARDOUS_D'
  | 'AIS_TYPE_WIG_RESERVED_1'
  | 'AIS_TYPE_WIG_RESERVED_2'
  | 'AIS_TYPE_WIG_RESERVED_3'
  | 'AIS_TYPE_WIG_RESERVED_4'
  | 'AIS_TYPE_WIG_RESERVED_5'
  | 'AIS_TYPE_FISHING'
  | 'AIS_TYPE_TOWING'
  | 'AIS_TYPE_TOWING_LARGE' // Towing: length exceeds 200m or breadth exceeds 25m.
  | 'AIS_TYPE_DREDGING' // Dredging or other underwater ops.
  | 'AIS_TYPE_DIVING'
  | 'AIS_TYPE_MILITARY'
  | 'AIS_TYPE_SAILING'
  | 'AIS_TYPE_PLEASURE'
  | 'AIS_TYPE_RESERVED_20'
  | 'AIS_TYPE_RESERVED_21'
  | 'AIS_TYPE_HSC' // High Speed Craft.
  | 'AIS_TYPE_HSC_HAZARDOUS_A'
  | 'AIS_TYPE_HSC_HAZARDOUS_B'
  | 'AIS_TYPE_HSC_HAZARDOUS_C'
  | 'AIS_TYPE_HSC_HAZARDOUS_D'
  | 'AIS_TYPE_HSC_RESERVED_1'
  | 'AIS_TYPE_HSC_RESERVED_2'
  | 'AIS_TYPE_HSC_RESERVED_3'
  | 'AIS_TYPE_HSC_RESERVED_4'
  | 'AIS_TYPE_HSC_UNKNOWN'
  | 'AIS_TYPE_PILOT'
  | 'AIS_TYPE_SAR' // Search And Rescue vessel.
  | 'AIS_TYPE_TUG'
  | 'AIS_TYPE_PORT_TENDER'
  | 'AIS_TYPE_ANTI_POLLUTION' // Anti-pollution equipment.
  | 'AIS_TYPE_LAW_ENFORCEMENT'
  | 'AIS_TYPE_SPARE_LOCAL_1'
  | 'AIS_TYPE_SPARE_LOCAL_2'
  | 'AIS_TYPE_MEDICAL_TRANSPORT'
  | 'AIS_TYPE_NONECOMBATANT' // Noncombatant ship according to RR Resolution No. 18.
  | 'AIS_TYPE_PASSENGER'
  | 'AIS_TYPE_PASSENGER_HAZARDOUS_A'
  | 'AIS_TYPE_PASSENGER_HAZARDOUS_B'
  | 'AIS_TYPE_PASSENGER_HAZARDOUS_C'
  | 'AIS_TYPE_PASSENGER_HAZARDOUS_D'
  | 'AIS_TYPE_PASSENGER_RESERVED_1'
  | 'AIS_TYPE_PASSENGER_RESERVED_2'
  | 'AIS_TYPE_PASSENGER_RESERVED_3'
  | 'AIS_TYPE_PASSENGER_RESERVED_4'
  | 'AIS_TYPE_PASSENGER_UNKNOWN'
  | 'AIS_TYPE_CARGO'
  | 'AIS_TYPE_CARGO_HAZARDOUS_A'
  | 'AIS_TYPE_CARGO_HAZARDOUS_B'
  | 'AIS_TYPE_CARGO_HAZARDOUS_C'
  | 'AIS_TYPE_CARGO_HAZARDOUS_D'
  | 'AIS_TYPE_CARGO_RESERVED_1'
  | 'AIS_TYPE_CARGO_RESERVED_2'
  | 'AIS_TYPE_CARGO_RESERVED_3'
  | 'AIS_TYPE_CARGO_RESERVED_4'
  | 'AIS_TYPE_CARGO_UNKNOWN'
  | 'AIS_TYPE_TANKER'
  | 'AIS_TYPE_TANKER_HAZARDOUS_A'
  | 'AIS_TYPE_TANKER_HAZARDOUS_B'
  | 'AIS_TYPE_TANKER_HAZARDOUS_C'
  | 'AIS_TYPE_TANKER_HAZARDOUS_D'
  | 'AIS_TYPE_TANKER_RESERVED_1'
  | 'AIS_TYPE_TANKER_RESERVED_2'
  | 'AIS_TYPE_TANKER_RESERVED_3'
  | 'AIS_TYPE_TANKER_RESERVED_4'
  | 'AIS_TYPE_TANKER_UNKNOWN'
  | 'AIS_TYPE_OTHER'
  | 'AIS_TYPE_OTHER_HAZARDOUS_A'
  | 'AIS_TYPE_OTHER_HAZARDOUS_B'
  | 'AIS_TYPE_OTHER_HAZARDOUS_C'
  | 'AIS_TYPE_OTHER_HAZARDOUS_D'
  | 'AIS_TYPE_OTHER_RESERVED_1'
  | 'AIS_TYPE_OTHER_RESERVED_2'
  | 'AIS_TYPE_OTHER_RESERVED_3'
  | 'AIS_TYPE_OTHER_RESERVED_4'
  | 'AIS_TYPE_OTHER_UNKNOWN'
  | string;

// Navigational status of AIS vessel, enum duplicated from AIS standard, https://gpsd.gitlab.io/gpsd/AIVDM.html
export enum AIS_NAV_STATUSEnum {
  // Under way using engine.
  UNDER_WAY = 'UNDER_WAY',
  AIS_NAV_ANCHORED = 'AIS_NAV_ANCHORED',
  AIS_NAV_UN_COMMANDED = 'AIS_NAV_UN_COMMANDED',
  AIS_NAV_RESTRICTED_MANOEUVERABILITY = 'AIS_NAV_RESTRICTED_MANOEUVERABILITY',
  AIS_NAV_DRAUGHT_CONSTRAINED = 'AIS_NAV_DRAUGHT_CONSTRAINED',
  AIS_NAV_MOORED = 'AIS_NAV_MOORED',
  AIS_NAV_AGROUND = 'AIS_NAV_AGROUND',
  AIS_NAV_FISHING = 'AIS_NAV_FISHING',
  AIS_NAV_SAILING = 'AIS_NAV_SAILING',
  AIS_NAV_RESERVED_HSC = 'AIS_NAV_RESERVED_HSC',
  AIS_NAV_RESERVED_WIG = 'AIS_NAV_RESERVED_WIG',
  AIS_NAV_RESERVED_1 = 'AIS_NAV_RESERVED_1',
  AIS_NAV_RESERVED_2 = 'AIS_NAV_RESERVED_2',
  AIS_NAV_RESERVED_3 = 'AIS_NAV_RESERVED_3',
  // Search And Rescue Transponder.
  AIS_NAV_AIS_SART = 'AIS_NAV_AIS_SART',
  // Not available (default).
  AIS_NAV_UNKNOWN = 'AIS_NAV_UNKNOWN',
}

export type AIS_NAV_STATUS =
  | 'UNDER_WAY' // Under way using engine.
  | 'AIS_NAV_ANCHORED'
  | 'AIS_NAV_UN_COMMANDED'
  | 'AIS_NAV_RESTRICTED_MANOEUVERABILITY'
  | 'AIS_NAV_DRAUGHT_CONSTRAINED'
  | 'AIS_NAV_MOORED'
  | 'AIS_NAV_AGROUND'
  | 'AIS_NAV_FISHING'
  | 'AIS_NAV_SAILING'
  | 'AIS_NAV_RESERVED_HSC'
  | 'AIS_NAV_RESERVED_WIG'
  | 'AIS_NAV_RESERVED_1'
  | 'AIS_NAV_RESERVED_2'
  | 'AIS_NAV_RESERVED_3'
  | 'AIS_NAV_AIS_SART' // Search And Rescue Transponder.
  | 'AIS_NAV_UNKNOWN' // Not available (default).
  | string;

// These flags are used in the AIS_VESSEL.fields bitmask to indicate validity of data in the other message fields. When set, the data is valid.
export enum AIS_FLAGSEnum {
  // 1 &#x3D; Position accuracy less than 10m, 0 &#x3D; position accuracy greater than 10m.
  AIS_FLAGS_POSITION_ACCURACY = 'AIS_FLAGS_POSITION_ACCURACY',
  AIS_FLAGS_VALID_COG = 'AIS_FLAGS_VALID_COG',
  AIS_FLAGS_VALID_VELOCITY = 'AIS_FLAGS_VALID_VELOCITY',
  // 1 &#x3D; Velocity over 52.5765m/s (102.2 knots)
  AIS_FLAGS_HIGH_VELOCITY = 'AIS_FLAGS_HIGH_VELOCITY',
  AIS_FLAGS_VALID_TURN_RATE = 'AIS_FLAGS_VALID_TURN_RATE',
  // Only the sign of the returned turn rate value is valid, either greater than 5deg/30s or less than -5deg/30s
  AIS_FLAGS_TURN_RATE_SIGN_ONLY = 'AIS_FLAGS_TURN_RATE_SIGN_ONLY',
  AIS_FLAGS_VALID_DIMENSIONS = 'AIS_FLAGS_VALID_DIMENSIONS',
  // Distance to bow is larger than 511m
  AIS_FLAGS_LARGE_BOW_DIMENSION = 'AIS_FLAGS_LARGE_BOW_DIMENSION',
  // Distance to stern is larger than 511m
  AIS_FLAGS_LARGE_STERN_DIMENSION = 'AIS_FLAGS_LARGE_STERN_DIMENSION',
  // Distance to port side is larger than 63m
  AIS_FLAGS_LARGE_PORT_DIMENSION = 'AIS_FLAGS_LARGE_PORT_DIMENSION',
  // Distance to starboard side is larger than 63m
  AIS_FLAGS_LARGE_STARBOARD_DIMENSION = 'AIS_FLAGS_LARGE_STARBOARD_DIMENSION',
  AIS_FLAGS_VALID_CALLSIGN = 'AIS_FLAGS_VALID_CALLSIGN',
  AIS_FLAGS_VALID_NAME = 'AIS_FLAGS_VALID_NAME',
}

export type AIS_FLAGS =
  | 'AIS_FLAGS_POSITION_ACCURACY' // 1 &#x3D; Position accuracy less than 10m, 0 &#x3D; position accuracy greater than 10m.
  | 'AIS_FLAGS_VALID_COG'
  | 'AIS_FLAGS_VALID_VELOCITY'
  | 'AIS_FLAGS_HIGH_VELOCITY' // 1 &#x3D; Velocity over 52.5765m/s (102.2 knots)
  | 'AIS_FLAGS_VALID_TURN_RATE'
  | 'AIS_FLAGS_TURN_RATE_SIGN_ONLY' // Only the sign of the returned turn rate value is valid, either greater than 5deg/30s or less than -5deg/30s
  | 'AIS_FLAGS_VALID_DIMENSIONS'
  | 'AIS_FLAGS_LARGE_BOW_DIMENSION' // Distance to bow is larger than 511m
  | 'AIS_FLAGS_LARGE_STERN_DIMENSION' // Distance to stern is larger than 511m
  | 'AIS_FLAGS_LARGE_PORT_DIMENSION' // Distance to port side is larger than 63m
  | 'AIS_FLAGS_LARGE_STARBOARD_DIMENSION' // Distance to starboard side is larger than 63m
  | 'AIS_FLAGS_VALID_CALLSIGN'
  | 'AIS_FLAGS_VALID_NAME'
  | string;

// List of possible units where failures can be injected.
export enum FAILURE_UNITEnum {
  FAILURE_UNIT_SENSOR_GYRO = 'FAILURE_UNIT_SENSOR_GYRO',
  FAILURE_UNIT_SENSOR_ACCEL = 'FAILURE_UNIT_SENSOR_ACCEL',
  FAILURE_UNIT_SENSOR_MAG = 'FAILURE_UNIT_SENSOR_MAG',
  FAILURE_UNIT_SENSOR_BARO = 'FAILURE_UNIT_SENSOR_BARO',
  FAILURE_UNIT_SENSOR_GPS = 'FAILURE_UNIT_SENSOR_GPS',
  FAILURE_UNIT_SENSOR_OPTICAL_FLOW = 'FAILURE_UNIT_SENSOR_OPTICAL_FLOW',
  FAILURE_UNIT_SENSOR_VIO = 'FAILURE_UNIT_SENSOR_VIO',
  FAILURE_UNIT_SENSOR_DISTANCE_SENSOR = 'FAILURE_UNIT_SENSOR_DISTANCE_SENSOR',
  FAILURE_UNIT_SENSOR_AIRSPEED = 'FAILURE_UNIT_SENSOR_AIRSPEED',
  FAILURE_UNIT_SYSTEM_BATTERY = 'FAILURE_UNIT_SYSTEM_BATTERY',
  FAILURE_UNIT_SYSTEM_MOTOR = 'FAILURE_UNIT_SYSTEM_MOTOR',
  FAILURE_UNIT_SYSTEM_SERVO = 'FAILURE_UNIT_SYSTEM_SERVO',
  FAILURE_UNIT_SYSTEM_AVOIDANCE = 'FAILURE_UNIT_SYSTEM_AVOIDANCE',
  FAILURE_UNIT_SYSTEM_RC_SIGNAL = 'FAILURE_UNIT_SYSTEM_RC_SIGNAL',
  FAILURE_UNIT_SYSTEM_MAVLINK_SIGNAL = 'FAILURE_UNIT_SYSTEM_MAVLINK_SIGNAL',
}

export type FAILURE_UNIT =
  | 'FAILURE_UNIT_SENSOR_GYRO'
  | 'FAILURE_UNIT_SENSOR_ACCEL'
  | 'FAILURE_UNIT_SENSOR_MAG'
  | 'FAILURE_UNIT_SENSOR_BARO'
  | 'FAILURE_UNIT_SENSOR_GPS'
  | 'FAILURE_UNIT_SENSOR_OPTICAL_FLOW'
  | 'FAILURE_UNIT_SENSOR_VIO'
  | 'FAILURE_UNIT_SENSOR_DISTANCE_SENSOR'
  | 'FAILURE_UNIT_SENSOR_AIRSPEED'
  | 'FAILURE_UNIT_SYSTEM_BATTERY'
  | 'FAILURE_UNIT_SYSTEM_MOTOR'
  | 'FAILURE_UNIT_SYSTEM_SERVO'
  | 'FAILURE_UNIT_SYSTEM_AVOIDANCE'
  | 'FAILURE_UNIT_SYSTEM_RC_SIGNAL'
  | 'FAILURE_UNIT_SYSTEM_MAVLINK_SIGNAL'
  | string;

// List of possible failure type to inject.
export enum FAILURE_TYPEEnum {
  // No failure injected, used to reset a previous failure.
  FAILURE_TYPE_OK = 'FAILURE_TYPE_OK',
  // Sets unit off, so completely non-responsive.
  FAILURE_TYPE_OFF = 'FAILURE_TYPE_OFF',
  // Unit is stuck e.g. keeps reporting the same value.
  FAILURE_TYPE_STUCK = 'FAILURE_TYPE_STUCK',
  // Unit is reporting complete garbage.
  FAILURE_TYPE_GARBAGE = 'FAILURE_TYPE_GARBAGE',
  // Unit is consistently wrong.
  FAILURE_TYPE_WRONG = 'FAILURE_TYPE_WRONG',
  // Unit is slow, so e.g. reporting at slower than expected rate.
  FAILURE_TYPE_SLOW = 'FAILURE_TYPE_SLOW',
  // Data of unit is delayed in time.
  FAILURE_TYPE_DELAYED = 'FAILURE_TYPE_DELAYED',
  // Unit is sometimes working, sometimes not.
  FAILURE_TYPE_INTERMITTENT = 'FAILURE_TYPE_INTERMITTENT',
}

export type FAILURE_TYPE =
  | 'FAILURE_TYPE_OK' // No failure injected, used to reset a previous failure.
  | 'FAILURE_TYPE_OFF' // Sets unit off, so completely non-responsive.
  | 'FAILURE_TYPE_STUCK' // Unit is stuck e.g. keeps reporting the same value.
  | 'FAILURE_TYPE_GARBAGE' // Unit is reporting complete garbage.
  | 'FAILURE_TYPE_WRONG' // Unit is consistently wrong.
  | 'FAILURE_TYPE_SLOW' // Unit is slow, so e.g. reporting at slower than expected rate.
  | 'FAILURE_TYPE_DELAYED' // Data of unit is delayed in time.
  | 'FAILURE_TYPE_INTERMITTENT' // Unit is sometimes working, sometimes not.
  | string;

export enum NAV_VTOL_LAND_OPTIONSEnum {
  // Default autopilot landing behaviour.
  NAV_VTOL_LAND_OPTIONS_DEFAULT = 'NAV_VTOL_LAND_OPTIONS_DEFAULT',
  // Descend in fixed wing mode, transitioning to multicopter mode for vertical landing when close to the ground.
  // The fixed wing descent pattern is at the discretion of the vehicle (e.g. transition altitude, loiter direction, radius, and speed, etc.).
  NAV_VTOL_LAND_OPTIONS_FW_DESCENT = 'NAV_VTOL_LAND_OPTIONS_FW_DESCENT',
  // Land in multicopter mode on reaching the landing coordinates (the whole landing is by &quot;hover descent&quot;).
  NAV_VTOL_LAND_OPTIONS_HOVER_DESCENT = 'NAV_VTOL_LAND_OPTIONS_HOVER_DESCENT',
}

export type NAV_VTOL_LAND_OPTIONS =
  | 'NAV_VTOL_LAND_OPTIONS_DEFAULT' // Default autopilot landing behaviour.
  | 'NAV_VTOL_LAND_OPTIONS_FW_DESCENT' // Descend in fixed wing mode, transitioning to multicopter mode for vertical landing when close to the ground. The fixed wing descent pattern is at the discretion of the vehicle (e.g. transition altitude, loiter direction, radius, and speed, etc.).
  | 'NAV_VTOL_LAND_OPTIONS_HOVER_DESCENT' // Land in multicopter mode on reaching the landing coordinates (the whole landing is by &quot;hover descent&quot;).
  | string;

// Winch status flags used in WINCH_STATUS
export enum MAV_WINCH_STATUS_FLAGEnum {
  // Winch is healthy
  MAV_WINCH_STATUS_HEALTHY = 'MAV_WINCH_STATUS_HEALTHY',
  // Winch line is fully retracted
  MAV_WINCH_STATUS_FULLY_RETRACTED = 'MAV_WINCH_STATUS_FULLY_RETRACTED',
  // Winch motor is moving
  MAV_WINCH_STATUS_MOVING = 'MAV_WINCH_STATUS_MOVING',
  // Winch clutch is engaged allowing motor to move freely.
  MAV_WINCH_STATUS_CLUTCH_ENGAGED = 'MAV_WINCH_STATUS_CLUTCH_ENGAGED',
  // Winch is locked by locking mechanism.
  MAV_WINCH_STATUS_LOCKED = 'MAV_WINCH_STATUS_LOCKED',
  // Winch is gravity dropping payload.
  MAV_WINCH_STATUS_DROPPING = 'MAV_WINCH_STATUS_DROPPING',
  // Winch is arresting payload descent.
  MAV_WINCH_STATUS_ARRESTING = 'MAV_WINCH_STATUS_ARRESTING',
  // Winch is using torque measurements to sense the ground.
  MAV_WINCH_STATUS_GROUND_SENSE = 'MAV_WINCH_STATUS_GROUND_SENSE',
  // Winch is returning to the fully retracted position.
  MAV_WINCH_STATUS_RETRACTING = 'MAV_WINCH_STATUS_RETRACTING',
  // Winch is redelivering the payload. This is a failover state if the line tension goes above a threshold during RETRACTING.
  MAV_WINCH_STATUS_REDELIVER = 'MAV_WINCH_STATUS_REDELIVER',
  // Winch is abandoning the line and possibly payload. Winch unspools the entire calculated line length. This is a failover state from REDELIVER if the number of attempts exceeds a threshold.
  MAV_WINCH_STATUS_ABANDON_LINE = 'MAV_WINCH_STATUS_ABANDON_LINE',
  // Winch is engaging the locking mechanism.
  MAV_WINCH_STATUS_LOCKING = 'MAV_WINCH_STATUS_LOCKING',
  // Winch is spooling on line.
  MAV_WINCH_STATUS_LOAD_LINE = 'MAV_WINCH_STATUS_LOAD_LINE',
  // Winch is loading a payload.
  MAV_WINCH_STATUS_LOAD_PAYLOAD = 'MAV_WINCH_STATUS_LOAD_PAYLOAD',
}

export type MAV_WINCH_STATUS_FLAG =
  | 'MAV_WINCH_STATUS_HEALTHY' // Winch is healthy
  | 'MAV_WINCH_STATUS_FULLY_RETRACTED' // Winch line is fully retracted
  | 'MAV_WINCH_STATUS_MOVING' // Winch motor is moving
  | 'MAV_WINCH_STATUS_CLUTCH_ENGAGED' // Winch clutch is engaged allowing motor to move freely.
  | 'MAV_WINCH_STATUS_LOCKED' // Winch is locked by locking mechanism.
  | 'MAV_WINCH_STATUS_DROPPING' // Winch is gravity dropping payload.
  | 'MAV_WINCH_STATUS_ARRESTING' // Winch is arresting payload descent.
  | 'MAV_WINCH_STATUS_GROUND_SENSE' // Winch is using torque measurements to sense the ground.
  | 'MAV_WINCH_STATUS_RETRACTING' // Winch is returning to the fully retracted position.
  | 'MAV_WINCH_STATUS_REDELIVER' // Winch is redelivering the payload. This is a failover state if the line tension goes above a threshold during RETRACTING.
  | 'MAV_WINCH_STATUS_ABANDON_LINE' // Winch is abandoning the line and possibly payload. Winch unspools the entire calculated line length. This is a failover state from REDELIVER if the number of attempts exceeds a threshold.
  | 'MAV_WINCH_STATUS_LOCKING' // Winch is engaging the locking mechanism.
  | 'MAV_WINCH_STATUS_LOAD_LINE' // Winch is spooling on line.
  | 'MAV_WINCH_STATUS_LOAD_PAYLOAD' // Winch is loading a payload.
  | string;

export enum MAG_CAL_STATUSEnum {
  MAG_CAL_NOT_STARTED = 'MAG_CAL_NOT_STARTED',
  MAG_CAL_WAITING_TO_START = 'MAG_CAL_WAITING_TO_START',
  MAG_CAL_RUNNING_STEP_ONE = 'MAG_CAL_RUNNING_STEP_ONE',
  MAG_CAL_RUNNING_STEP_TWO = 'MAG_CAL_RUNNING_STEP_TWO',
  MAG_CAL_SUCCESS = 'MAG_CAL_SUCCESS',
  MAG_CAL_FAILED = 'MAG_CAL_FAILED',
  MAG_CAL_BAD_ORIENTATION = 'MAG_CAL_BAD_ORIENTATION',
  MAG_CAL_BAD_RADIUS = 'MAG_CAL_BAD_RADIUS',
}

export type MAG_CAL_STATUS =
  | 'MAG_CAL_NOT_STARTED'
  | 'MAG_CAL_WAITING_TO_START'
  | 'MAG_CAL_RUNNING_STEP_ONE'
  | 'MAG_CAL_RUNNING_STEP_TWO'
  | 'MAG_CAL_SUCCESS'
  | 'MAG_CAL_FAILED'
  | 'MAG_CAL_BAD_ORIENTATION'
  | 'MAG_CAL_BAD_RADIUS'
  | string;

// Reason for an event error response.
export enum MAV_EVENT_ERROR_REASONEnum {
  // The requested event is not available (anymore).
  MAV_EVENT_ERROR_REASON_UNAVAILABLE = 'MAV_EVENT_ERROR_REASON_UNAVAILABLE',
}

export type MAV_EVENT_ERROR_REASON =
  | 'MAV_EVENT_ERROR_REASON_UNAVAILABLE' // The requested event is not available (anymore).
  | string;

// Flags for CURRENT_EVENT_SEQUENCE.
export enum MAV_EVENT_CURRENT_SEQUENCE_FLAGSEnum {
  // A sequence reset has happened (e.g. vehicle reboot).
  MAV_EVENT_CURRENT_SEQUENCE_FLAGS_RESET = 'MAV_EVENT_CURRENT_SEQUENCE_FLAGS_RESET',
}

export type MAV_EVENT_CURRENT_SEQUENCE_FLAGS =
  | 'MAV_EVENT_CURRENT_SEQUENCE_FLAGS_RESET' // A sequence reset has happened (e.g. vehicle reboot).
  | string;

// Flags in the HIL_SENSOR message indicate which fields have updated since the last message
export enum HIL_SENSOR_UPDATED_FLAGSEnum {
  // The value in the xacc field has been updated
  HIL_SENSOR_UPDATED_XACC = 'HIL_SENSOR_UPDATED_XACC',
  // The value in the yacc field has been updated
  HIL_SENSOR_UPDATED_YACC = 'HIL_SENSOR_UPDATED_YACC',
  // The value in the zacc field has been updated
  HIL_SENSOR_UPDATED_ZACC = 'HIL_SENSOR_UPDATED_ZACC',
  // The value in the xgyro field has been updated
  HIL_SENSOR_UPDATED_XGYRO = 'HIL_SENSOR_UPDATED_XGYRO',
  // The value in the ygyro field has been updated
  HIL_SENSOR_UPDATED_YGYRO = 'HIL_SENSOR_UPDATED_YGYRO',
  // The value in the zgyro field has been updated
  HIL_SENSOR_UPDATED_ZGYRO = 'HIL_SENSOR_UPDATED_ZGYRO',
  // The value in the xmag field has been updated
  HIL_SENSOR_UPDATED_XMAG = 'HIL_SENSOR_UPDATED_XMAG',
  // The value in the ymag field has been updated
  HIL_SENSOR_UPDATED_YMAG = 'HIL_SENSOR_UPDATED_YMAG',
  // The value in the zmag field has been updated
  HIL_SENSOR_UPDATED_ZMAG = 'HIL_SENSOR_UPDATED_ZMAG',
  // The value in the abs_pressure field has been updated
  HIL_SENSOR_UPDATED_ABS_PRESSURE = 'HIL_SENSOR_UPDATED_ABS_PRESSURE',
  // The value in the diff_pressure field has been updated
  HIL_SENSOR_UPDATED_DIFF_PRESSURE = 'HIL_SENSOR_UPDATED_DIFF_PRESSURE',
  // The value in the pressure_alt field has been updated
  HIL_SENSOR_UPDATED_PRESSURE_ALT = 'HIL_SENSOR_UPDATED_PRESSURE_ALT',
  // The value in the temperature field has been updated
  HIL_SENSOR_UPDATED_TEMPERATURE = 'HIL_SENSOR_UPDATED_TEMPERATURE',
  // Full reset of attitude/position/velocities/etc was performed in sim (Bit 31).
  HIL_SENSOR_UPDATED_RESET = 'HIL_SENSOR_UPDATED_RESET',
}

export type HIL_SENSOR_UPDATED_FLAGS =
  | 'HIL_SENSOR_UPDATED_XACC' // The value in the xacc field has been updated
  | 'HIL_SENSOR_UPDATED_YACC' // The value in the yacc field has been updated
  | 'HIL_SENSOR_UPDATED_ZACC' // The value in the zacc field has been updated
  | 'HIL_SENSOR_UPDATED_XGYRO' // The value in the xgyro field has been updated
  | 'HIL_SENSOR_UPDATED_YGYRO' // The value in the ygyro field has been updated
  | 'HIL_SENSOR_UPDATED_ZGYRO' // The value in the zgyro field has been updated
  | 'HIL_SENSOR_UPDATED_XMAG' // The value in the xmag field has been updated
  | 'HIL_SENSOR_UPDATED_YMAG' // The value in the ymag field has been updated
  | 'HIL_SENSOR_UPDATED_ZMAG' // The value in the zmag field has been updated
  | 'HIL_SENSOR_UPDATED_ABS_PRESSURE' // The value in the abs_pressure field has been updated
  | 'HIL_SENSOR_UPDATED_DIFF_PRESSURE' // The value in the diff_pressure field has been updated
  | 'HIL_SENSOR_UPDATED_PRESSURE_ALT' // The value in the pressure_alt field has been updated
  | 'HIL_SENSOR_UPDATED_TEMPERATURE' // The value in the temperature field has been updated
  | 'HIL_SENSOR_UPDATED_RESET' // Full reset of attitude/position/velocities/etc was performed in sim (Bit 31).
  | string;

// Flags in the HIGHRES_IMU message indicate which fields have updated since the last message
export enum HIGHRES_IMU_UPDATED_FLAGSEnum {
  // The value in the xacc field has been updated
  HIGHRES_IMU_UPDATED_XACC = 'HIGHRES_IMU_UPDATED_XACC',
  // The value in the yacc field has been updated
  HIGHRES_IMU_UPDATED_YACC = 'HIGHRES_IMU_UPDATED_YACC',
  // The value in the zacc field has been updated since
  HIGHRES_IMU_UPDATED_ZACC = 'HIGHRES_IMU_UPDATED_ZACC',
  // The value in the xgyro field has been updated
  HIGHRES_IMU_UPDATED_XGYRO = 'HIGHRES_IMU_UPDATED_XGYRO',
  // The value in the ygyro field has been updated
  HIGHRES_IMU_UPDATED_YGYRO = 'HIGHRES_IMU_UPDATED_YGYRO',
  // The value in the zgyro field has been updated
  HIGHRES_IMU_UPDATED_ZGYRO = 'HIGHRES_IMU_UPDATED_ZGYRO',
  // The value in the xmag field has been updated
  HIGHRES_IMU_UPDATED_XMAG = 'HIGHRES_IMU_UPDATED_XMAG',
  // The value in the ymag field has been updated
  HIGHRES_IMU_UPDATED_YMAG = 'HIGHRES_IMU_UPDATED_YMAG',
  // The value in the zmag field has been updated
  HIGHRES_IMU_UPDATED_ZMAG = 'HIGHRES_IMU_UPDATED_ZMAG',
  // The value in the abs_pressure field has been updated
  HIGHRES_IMU_UPDATED_ABS_PRESSURE = 'HIGHRES_IMU_UPDATED_ABS_PRESSURE',
  // The value in the diff_pressure field has been updated
  HIGHRES_IMU_UPDATED_DIFF_PRESSURE = 'HIGHRES_IMU_UPDATED_DIFF_PRESSURE',
  // The value in the pressure_alt field has been updated
  HIGHRES_IMU_UPDATED_PRESSURE_ALT = 'HIGHRES_IMU_UPDATED_PRESSURE_ALT',
  // The value in the temperature field has been updated
  HIGHRES_IMU_UPDATED_TEMPERATURE = 'HIGHRES_IMU_UPDATED_TEMPERATURE',
}

export type HIGHRES_IMU_UPDATED_FLAGS =
  | 'HIGHRES_IMU_UPDATED_XACC' // The value in the xacc field has been updated
  | 'HIGHRES_IMU_UPDATED_YACC' // The value in the yacc field has been updated
  | 'HIGHRES_IMU_UPDATED_ZACC' // The value in the zacc field has been updated since
  | 'HIGHRES_IMU_UPDATED_XGYRO' // The value in the xgyro field has been updated
  | 'HIGHRES_IMU_UPDATED_YGYRO' // The value in the ygyro field has been updated
  | 'HIGHRES_IMU_UPDATED_ZGYRO' // The value in the zgyro field has been updated
  | 'HIGHRES_IMU_UPDATED_XMAG' // The value in the xmag field has been updated
  | 'HIGHRES_IMU_UPDATED_YMAG' // The value in the ymag field has been updated
  | 'HIGHRES_IMU_UPDATED_ZMAG' // The value in the zmag field has been updated
  | 'HIGHRES_IMU_UPDATED_ABS_PRESSURE' // The value in the abs_pressure field has been updated
  | 'HIGHRES_IMU_UPDATED_DIFF_PRESSURE' // The value in the diff_pressure field has been updated
  | 'HIGHRES_IMU_UPDATED_PRESSURE_ALT' // The value in the pressure_alt field has been updated
  | 'HIGHRES_IMU_UPDATED_TEMPERATURE' // The value in the temperature field has been updated
  | string;

export enum CAN_FILTER_OPEnum {
  CAN_FILTER_REPLACE = 'CAN_FILTER_REPLACE',
  CAN_FILTER_ADD = 'CAN_FILTER_ADD',
  CAN_FILTER_REMOVE = 'CAN_FILTER_REMOVE',
}

export type CAN_FILTER_OP =
  | 'CAN_FILTER_REPLACE'
  | 'CAN_FILTER_ADD'
  | 'CAN_FILTER_REMOVE'
  | string;

// MAV FTP error codes (https://mavlink.io/en/services/ftp.html)
export enum MAV_FTP_ERREnum {
  // None: No error
  MAV_FTP_ERR_NONE = 'MAV_FTP_ERR_NONE',
  // Fail: Unknown failure
  MAV_FTP_ERR_FAIL = 'MAV_FTP_ERR_FAIL',
  // FailErrno: Command failed, Err number sent back in PayloadHeader.data[1].
  // This is a file-system error number understood by the server operating system.
  MAV_FTP_ERR_FAILERRNO = 'MAV_FTP_ERR_FAILERRNO',
  // InvalidDataSize: Payload size is invalid
  MAV_FTP_ERR_INVALIDDATASIZE = 'MAV_FTP_ERR_INVALIDDATASIZE',
  // InvalidSession: Session is not currently open
  MAV_FTP_ERR_INVALIDSESSION = 'MAV_FTP_ERR_INVALIDSESSION',
  // NoSessionsAvailable: All available sessions are already in use
  MAV_FTP_ERR_NOSESSIONSAVAILABLE = 'MAV_FTP_ERR_NOSESSIONSAVAILABLE',
  // EOF: Offset past end of file for ListDirectory and ReadFile commands
  MAV_FTP_ERR_EOF = 'MAV_FTP_ERR_EOF',
  // UnknownCommand: Unknown command / opcode
  MAV_FTP_ERR_UNKNOWNCOMMAND = 'MAV_FTP_ERR_UNKNOWNCOMMAND',
  // FileExists: File/directory already exists
  MAV_FTP_ERR_FILEEXISTS = 'MAV_FTP_ERR_FILEEXISTS',
  // FileProtected: File/directory is write protected
  MAV_FTP_ERR_FILEPROTECTED = 'MAV_FTP_ERR_FILEPROTECTED',
  // FileNotFound: File/directory not found
  MAV_FTP_ERR_FILENOTFOUND = 'MAV_FTP_ERR_FILENOTFOUND',
}

export type MAV_FTP_ERR =
  | 'MAV_FTP_ERR_NONE' // None: No error
  | 'MAV_FTP_ERR_FAIL' // Fail: Unknown failure
  | 'MAV_FTP_ERR_FAILERRNO' // FailErrno: Command failed, Err number sent back in PayloadHeader.data[1]. This is a file-system error number understood by the server operating system.
  | 'MAV_FTP_ERR_INVALIDDATASIZE' // InvalidDataSize: Payload size is invalid
  | 'MAV_FTP_ERR_INVALIDSESSION' // InvalidSession: Session is not currently open
  | 'MAV_FTP_ERR_NOSESSIONSAVAILABLE' // NoSessionsAvailable: All available sessions are already in use
  | 'MAV_FTP_ERR_EOF' // EOF: Offset past end of file for ListDirectory and ReadFile commands
  | 'MAV_FTP_ERR_UNKNOWNCOMMAND' // UnknownCommand: Unknown command / opcode
  | 'MAV_FTP_ERR_FILEEXISTS' // FileExists: File/directory already exists
  | 'MAV_FTP_ERR_FILEPROTECTED' // FileProtected: File/directory is write protected
  | 'MAV_FTP_ERR_FILENOTFOUND' // FileNotFound: File/directory not found
  | string;

// MAV FTP opcodes: https://mavlink.io/en/services/ftp.html
export enum MAV_FTP_OPCODEEnum {
  // None. Ignored, always ACKed
  MAV_FTP_OPCODE_NONE = 'MAV_FTP_OPCODE_NONE',
  // TerminateSession: Terminates open Read session
  MAV_FTP_OPCODE_TERMINATESESSION = 'MAV_FTP_OPCODE_TERMINATESESSION',
  // ResetSessions: Terminates all open read sessions
  MAV_FTP_OPCODE_RESETSESSION = 'MAV_FTP_OPCODE_RESETSESSION',
  // ListDirectory. List files and directories in path from offset
  MAV_FTP_OPCODE_LISTDIRECTORY = 'MAV_FTP_OPCODE_LISTDIRECTORY',
  // OpenFileRO: Opens file at path for reading, returns session
  MAV_FTP_OPCODE_OPENFILERO = 'MAV_FTP_OPCODE_OPENFILERO',
  // ReadFile: Reads size bytes from offset in session
  MAV_FTP_OPCODE_READFILE = 'MAV_FTP_OPCODE_READFILE',
  // CreateFile: Creates file at path for writing, returns session
  MAV_FTP_OPCODE_CREATEFILE = 'MAV_FTP_OPCODE_CREATEFILE',
  // WriteFile: Writes size bytes to offset in session
  MAV_FTP_OPCODE_WRITEFILE = 'MAV_FTP_OPCODE_WRITEFILE',
  // RemoveFile: Remove file at path
  MAV_FTP_OPCODE_REMOVEFILE = 'MAV_FTP_OPCODE_REMOVEFILE',
  // CreateDirectory: Creates directory at path
  MAV_FTP_OPCODE_CREATEDIRECTORY = 'MAV_FTP_OPCODE_CREATEDIRECTORY',
  // RemoveDirectory: Removes directory at path. The directory must be empty.
  MAV_FTP_OPCODE_REMOVEDIRECTORY = 'MAV_FTP_OPCODE_REMOVEDIRECTORY',
  // OpenFileWO: Opens file at path for writing, returns session
  MAV_FTP_OPCODE_OPENFILEWO = 'MAV_FTP_OPCODE_OPENFILEWO',
  // TruncateFile: Truncate file at path to offset length
  MAV_FTP_OPCODE_TRUNCATEFILE = 'MAV_FTP_OPCODE_TRUNCATEFILE',
  // Rename: Rename path1 to path2
  MAV_FTP_OPCODE_RENAME = 'MAV_FTP_OPCODE_RENAME',
  // CalcFileCRC32: Calculate CRC32 for file at path
  MAV_FTP_OPCODE_CALCFILECRC = 'MAV_FTP_OPCODE_CALCFILECRC',
  // BurstReadFile: Burst download session file
  MAV_FTP_OPCODE_BURSTREADFILE = 'MAV_FTP_OPCODE_BURSTREADFILE',
  // ACK: ACK response
  MAV_FTP_OPCODE_ACK = 'MAV_FTP_OPCODE_ACK',
  // NAK: NAK response
  MAV_FTP_OPCODE_NAK = 'MAV_FTP_OPCODE_NAK',
}

export type MAV_FTP_OPCODE =
  | 'MAV_FTP_OPCODE_NONE' // None. Ignored, always ACKed
  | 'MAV_FTP_OPCODE_TERMINATESESSION' // TerminateSession: Terminates open Read session
  | 'MAV_FTP_OPCODE_RESETSESSION' // ResetSessions: Terminates all open read sessions
  | 'MAV_FTP_OPCODE_LISTDIRECTORY' // ListDirectory. List files and directories in path from offset
  | 'MAV_FTP_OPCODE_OPENFILERO' // OpenFileRO: Opens file at path for reading, returns session
  | 'MAV_FTP_OPCODE_READFILE' // ReadFile: Reads size bytes from offset in session
  | 'MAV_FTP_OPCODE_CREATEFILE' // CreateFile: Creates file at path for writing, returns session
  | 'MAV_FTP_OPCODE_WRITEFILE' // WriteFile: Writes size bytes to offset in session
  | 'MAV_FTP_OPCODE_REMOVEFILE' // RemoveFile: Remove file at path
  | 'MAV_FTP_OPCODE_CREATEDIRECTORY' // CreateDirectory: Creates directory at path
  | 'MAV_FTP_OPCODE_REMOVEDIRECTORY' // RemoveDirectory: Removes directory at path. The directory must be empty.
  | 'MAV_FTP_OPCODE_OPENFILEWO' // OpenFileWO: Opens file at path for writing, returns session
  | 'MAV_FTP_OPCODE_TRUNCATEFILE' // TruncateFile: Truncate file at path to offset length
  | 'MAV_FTP_OPCODE_RENAME' // Rename: Rename path1 to path2
  | 'MAV_FTP_OPCODE_CALCFILECRC' // CalcFileCRC32: Calculate CRC32 for file at path
  | 'MAV_FTP_OPCODE_BURSTREADFILE' // BurstReadFile: Burst download session file
  | 'MAV_FTP_OPCODE_ACK' // ACK: ACK response
  | 'MAV_FTP_OPCODE_NAK' // NAK: NAK response
  | string;

// States of the mission state machine.
// Note that these states are independent of whether the mission is in a mode that can execute mission items or not (is suspended).
// They may not all be relevant on all vehicles.
export enum MISSION_STATEEnum {
  // The mission status reporting is not supported.
  MISSION_STATE_UNKNOWN = 'MISSION_STATE_UNKNOWN',
  // No mission on the vehicle.
  MISSION_STATE_NO_MISSION = 'MISSION_STATE_NO_MISSION',
  // Mission has not started. This is the case after a mission has uploaded but not yet started executing.
  MISSION_STATE_NOT_STARTED = 'MISSION_STATE_NOT_STARTED',
  // Mission is active, and will execute mission items when in auto mode.
  MISSION_STATE_ACTIVE = 'MISSION_STATE_ACTIVE',
  // Mission is paused when in auto mode.
  MISSION_STATE_PAUSED = 'MISSION_STATE_PAUSED',
  // Mission has executed all mission items.
  MISSION_STATE_COMPLETE = 'MISSION_STATE_COMPLETE',
}

export type MISSION_STATE =
  | 'MISSION_STATE_UNKNOWN' // The mission status reporting is not supported.
  | 'MISSION_STATE_NO_MISSION' // No mission on the vehicle.
  | 'MISSION_STATE_NOT_STARTED' // Mission has not started. This is the case after a mission has uploaded but not yet started executing.
  | 'MISSION_STATE_ACTIVE' // Mission is active, and will execute mission items when in auto mode.
  | 'MISSION_STATE_PAUSED' // Mission is paused when in auto mode.
  | 'MISSION_STATE_COMPLETE' // Mission has executed all mission items.
  | string;

// Possible safety switch states.
export enum SAFETY_SWITCH_STATEEnum {
  // Safety switch is engaged and vehicle should be safe to approach.
  SAFETY_SWITCH_STATE_SAFE = 'SAFETY_SWITCH_STATE_SAFE',
  // Safety switch is NOT engaged and motors, propellers and other actuators should be considered active.
  SAFETY_SWITCH_STATE_DANGEROUS = 'SAFETY_SWITCH_STATE_DANGEROUS',
}

export type SAFETY_SWITCH_STATE =
  | 'SAFETY_SWITCH_STATE_SAFE' // Safety switch is engaged and vehicle should be safe to approach.
  | 'SAFETY_SWITCH_STATE_DANGEROUS' // Safety switch is NOT engaged and motors, propellers and other actuators should be considered active.
  | string;

// Modes of illuminator
export enum ILLUMINATOR_MODEEnum {
  // Illuminator mode is not specified/unknown
  ILLUMINATOR_MODE_UNKNOWN = 'ILLUMINATOR_MODE_UNKNOWN',
  // Illuminator behavior is controlled by MAV_CMD_DO_ILLUMINATOR_CONFIGURE settings
  ILLUMINATOR_MODE_INTERNAL_CONTROL = 'ILLUMINATOR_MODE_INTERNAL_CONTROL',
  // Illuminator behavior is controlled by external factors: e.g. an external hardware signal
  ILLUMINATOR_MODE_EXTERNAL_SYNC = 'ILLUMINATOR_MODE_EXTERNAL_SYNC',
}

export type ILLUMINATOR_MODE =
  | 'ILLUMINATOR_MODE_UNKNOWN' // Illuminator mode is not specified/unknown
  | 'ILLUMINATOR_MODE_INTERNAL_CONTROL' // Illuminator behavior is controlled by MAV_CMD_DO_ILLUMINATOR_CONFIGURE settings
  | 'ILLUMINATOR_MODE_EXTERNAL_SYNC' // Illuminator behavior is controlled by external factors: e.g. an external hardware signal
  | string;

// Illuminator module error flags (bitmap, 0 means no error)
export enum ILLUMINATOR_ERROR_FLAGSEnum {
  // Illuminator thermal throttling error.
  ILLUMINATOR_ERROR_FLAGS_THERMAL_THROTTLING = 'ILLUMINATOR_ERROR_FLAGS_THERMAL_THROTTLING',
  // Illuminator over temperature shutdown error.
  ILLUMINATOR_ERROR_FLAGS_OVER_TEMPERATURE_SHUTDOWN = 'ILLUMINATOR_ERROR_FLAGS_OVER_TEMPERATURE_SHUTDOWN',
  // Illuminator thermistor failure.
  ILLUMINATOR_ERROR_FLAGS_THERMISTOR_FAILURE = 'ILLUMINATOR_ERROR_FLAGS_THERMISTOR_FAILURE',
}

export type ILLUMINATOR_ERROR_FLAGS =
  | 'ILLUMINATOR_ERROR_FLAGS_THERMAL_THROTTLING' // Illuminator thermal throttling error.
  | 'ILLUMINATOR_ERROR_FLAGS_OVER_TEMPERATURE_SHUTDOWN' // Illuminator over temperature shutdown error.
  | 'ILLUMINATOR_ERROR_FLAGS_THERMISTOR_FAILURE' // Illuminator thermistor failure.
  | string;

// Standard modes with a well understood meaning across flight stacks and vehicle types.
// For example, most flight stack have the concept of a &quot;return&quot; or &quot;RTL&quot; mode that takes a vehicle to safety, even though the precise mechanics of this mode may differ.
// The modes supported by a flight stack can be queried using AVAILABLE_MODES and set using MAV_CMD_DO_SET_STANDARD_MODE.
// The current mode is streamed in CURRENT_MODE.
// See https://mavlink.io/en/services/standard_modes.html
export enum MAV_STANDARD_MODEEnum {
  // Non standard mode.
  // This may be used when reporting the mode if the current flight mode is not a standard mode.
  MAV_STANDARD_MODE_NON_STANDARD = 'MAV_STANDARD_MODE_NON_STANDARD',
  // Position mode (manual).
  // Position-controlled and stabilized manual mode.
  // When sticks are released vehicles return to their level-flight orientation and hold both position and altitude against wind and external forces.
  // This mode can only be set by vehicles that can hold a fixed position.
  // Multicopter (MC) vehicles actively brake and hold both position and altitude against wind and external forces.
  // Hybrid MC/FW (&quot;VTOL&quot;) vehicles first transition to multicopter mode (if needed) but otherwise behave in the same way as MC vehicles.
  // Fixed-wing (FW) vehicles must not support this mode.
  // Other vehicle types must not support this mode (this may be revisited through the PR process).
  MAV_STANDARD_MODE_POSITION_HOLD = 'MAV_STANDARD_MODE_POSITION_HOLD',
  // Orbit (manual).
  // Position-controlled and stabilized manual mode.
  // The vehicle circles around a fixed setpoint in the horizontal plane at a particular radius, altitude, and direction.
  // Flight stacks may further allow manual control over the setpoint position, radius, direction, speed, and/or altitude of the circle, but this is not mandated.
  // Flight stacks may support the [MAV_CMD_DO_ORBIT](https://mavlink.io/en/messages/common.html#MAV_CMD_DO_ORBIT) for changing the orbit parameters.
  // MC and FW vehicles may support this mode.
  // Hybrid MC/FW (&quot;VTOL&quot;) vehicles may support this mode in MC/FW or both modes; if the mode is not supported by the current configuration the vehicle should transition to the supported configuration.
  // Other vehicle types must not support this mode (this may be revisited through the PR process).
  MAV_STANDARD_MODE_ORBIT = 'MAV_STANDARD_MODE_ORBIT',
  // Cruise mode (manual).
  // Position-controlled and stabilized manual mode.
  // When sticks are released vehicles return to their level-flight orientation and hold their original track against wind and external forces.
  // Fixed-wing (FW) vehicles level orientation and maintain current track and altitude against wind and external forces.
  // Hybrid MC/FW (&quot;VTOL&quot;) vehicles first transition to FW mode (if needed) but otherwise behave in the same way as MC vehicles.
  // Multicopter (MC) vehicles must not support this mode.
  // Other vehicle types must not support this mode (this may be revisited through the PR process).
  MAV_STANDARD_MODE_CRUISE = 'MAV_STANDARD_MODE_CRUISE',
  // Altitude hold (manual).
  // Altitude-controlled and stabilized manual mode.
  // When sticks are released vehicles return to their level-flight orientation and hold their altitude.
  // MC vehicles continue with existing momentum and may move with wind (or other external forces).
  // FW vehicles continue with current heading, but may be moved off-track by wind.
  // Hybrid MC/FW (&quot;VTOL&quot;) vehicles behave according to their current configuration/mode (FW or MC).
  // Other vehicle types must not support this mode (this may be revisited through the PR process).
  MAV_STANDARD_MODE_ALTITUDE_HOLD = 'MAV_STANDARD_MODE_ALTITUDE_HOLD',
  // Safe recovery mode (auto).
  // Automatic mode that takes vehicle to a predefined safe location via a safe flight path, and may also automatically land the vehicle.
  // This mode is more commonly referred to as RTL and/or or Smart RTL.
  // The precise return location, flight path, and landing behaviour depend on vehicle configuration and type.
  // For example, the vehicle might return to the home/launch location, a rally point, or the start of a mission landing, it might follow a direct path, mission path, or breadcrumb path, and land using a mission landing pattern or some other kind of descent.
  MAV_STANDARD_MODE_SAFE_RECOVERY = 'MAV_STANDARD_MODE_SAFE_RECOVERY',
  // Mission mode (automatic).
  // Automatic mode that executes MAVLink missions.
  // Missions are executed from the current waypoint as soon as the mode is enabled.
  MAV_STANDARD_MODE_MISSION = 'MAV_STANDARD_MODE_MISSION',
  // Land mode (auto).
  // Automatic mode that lands the vehicle at the current location.
  // The precise landing behaviour depends on vehicle configuration and type.
  MAV_STANDARD_MODE_LAND = 'MAV_STANDARD_MODE_LAND',
  // Takeoff mode (auto).
  // Automatic takeoff mode.
  // The precise takeoff behaviour depends on vehicle configuration and type.
  MAV_STANDARD_MODE_TAKEOFF = 'MAV_STANDARD_MODE_TAKEOFF',
}

export type MAV_STANDARD_MODE =
  | 'MAV_STANDARD_MODE_NON_STANDARD' // Non standard mode. This may be used when reporting the mode if the current flight mode is not a standard mode.
  | 'MAV_STANDARD_MODE_POSITION_HOLD' // Position mode (manual). Position-controlled and stabilized manual mode. When sticks are released vehicles return to their level-flight orientation and hold both position and altitude against wind and external forces. This mode can only be set by vehicles that can hold a fixed position. Multicopter (MC) vehicles actively brake and hold both position and altitude against wind and external forces. Hybrid MC/FW (&quot;VTOL&quot;) vehicles first transition to multicopter mode (if needed) but otherwise behave in the same way as MC vehicles. Fixed-wing (FW) vehicles must not support this mode. Other vehicle types must not support this mode (this may be revisited through the PR process).
  | 'MAV_STANDARD_MODE_ORBIT' // Orbit (manual). Position-controlled and stabilized manual mode. The vehicle circles around a fixed setpoint in the horizontal plane at a particular radius, altitude, and direction. Flight stacks may further allow manual control over the setpoint position, radius, direction, speed, and/or altitude of the circle, but this is not mandated. Flight stacks may support the [MAV_CMD_DO_ORBIT](https://mavlink.io/en/messages/common.html#MAV_CMD_DO_ORBIT) for changing the orbit parameters. MC and FW vehicles may support this mode. Hybrid MC/FW (&quot;VTOL&quot;) vehicles may support this mode in MC/FW or both modes; if the mode is not supported by the current configuration the vehicle should transition to the supported configuration. Other vehicle types must not support this mode (this may be revisited through the PR process).
  | 'MAV_STANDARD_MODE_CRUISE' // Cruise mode (manual). Position-controlled and stabilized manual mode. When sticks are released vehicles return to their level-flight orientation and hold their original track against wind and external forces. Fixed-wing (FW) vehicles level orientation and maintain current track and altitude against wind and external forces. Hybrid MC/FW (&quot;VTOL&quot;) vehicles first transition to FW mode (if needed) but otherwise behave in the same way as MC vehicles. Multicopter (MC) vehicles must not support this mode. Other vehicle types must not support this mode (this may be revisited through the PR process).
  | 'MAV_STANDARD_MODE_ALTITUDE_HOLD' // Altitude hold (manual). Altitude-controlled and stabilized manual mode. When sticks are released vehicles return to their level-flight orientation and hold their altitude. MC vehicles continue with existing momentum and may move with wind (or other external forces). FW vehicles continue with current heading, but may be moved off-track by wind. Hybrid MC/FW (&quot;VTOL&quot;) vehicles behave according to their current configuration/mode (FW or MC). Other vehicle types must not support this mode (this may be revisited through the PR process).
  | 'MAV_STANDARD_MODE_SAFE_RECOVERY' // Safe recovery mode (auto). Automatic mode that takes vehicle to a predefined safe location via a safe flight path, and may also automatically land the vehicle. This mode is more commonly referred to as RTL and/or or Smart RTL. The precise return location, flight path, and landing behaviour depend on vehicle configuration and type. For example, the vehicle might return to the home/launch location, a rally point, or the start of a mission landing, it might follow a direct path, mission path, or breadcrumb path, and land using a mission landing pattern or some other kind of descent.
  | 'MAV_STANDARD_MODE_MISSION' // Mission mode (automatic). Automatic mode that executes MAVLink missions. Missions are executed from the current waypoint as soon as the mode is enabled.
  | 'MAV_STANDARD_MODE_LAND' // Land mode (auto). Automatic mode that lands the vehicle at the current location. The precise landing behaviour depends on vehicle configuration and type.
  | 'MAV_STANDARD_MODE_TAKEOFF' // Takeoff mode (auto). Automatic takeoff mode. The precise takeoff behaviour depends on vehicle configuration and type.
  | string;

// Mode properties.
export enum MAV_MODE_PROPERTYEnum {
  // If set, this mode is an advanced mode.
  // For example a rate-controlled manual mode might be advanced, whereas a position-controlled manual mode is not.
  // A GCS can optionally use this flag to configure the UI for its intended users.
  MAV_MODE_PROPERTY_ADVANCED = 'MAV_MODE_PROPERTY_ADVANCED',
  // If set, this mode should not be added to the list of selectable modes.
  // The mode might still be selected by the FC directly (for example as part of a failsafe).
  MAV_MODE_PROPERTY_NOT_USER_SELECTABLE = 'MAV_MODE_PROPERTY_NOT_USER_SELECTABLE',
  // If set, this mode is automatically controlled (it may use but does not require a manual controller).
  // If unset the mode is a assumed to require user input (be a manual mode).
  MAV_MODE_PROPERTY_AUTO_MODE = 'MAV_MODE_PROPERTY_AUTO_MODE',
}

export type MAV_MODE_PROPERTY =
  | 'MAV_MODE_PROPERTY_ADVANCED' // If set, this mode is an advanced mode. For example a rate-controlled manual mode might be advanced, whereas a position-controlled manual mode is not. A GCS can optionally use this flag to configure the UI for its intended users.
  | 'MAV_MODE_PROPERTY_NOT_USER_SELECTABLE' // If set, this mode should not be added to the list of selectable modes. The mode might still be selected by the FC directly (for example as part of a failsafe).
  | 'MAV_MODE_PROPERTY_AUTO_MODE' // If set, this mode is automatically controlled (it may use but does not require a manual controller). If unset the mode is a assumed to require user input (be a manual mode).
  | string;

// Flags used in HIL_ACTUATOR_CONTROLS message.
export enum HIL_ACTUATOR_CONTROLS_FLAGSEnum {
  // Simulation is using lockstep
  HIL_ACTUATOR_CONTROLS_FLAGS_LOCKSTEP = 'HIL_ACTUATOR_CONTROLS_FLAGS_LOCKSTEP',
}

export type HIL_ACTUATOR_CONTROLS_FLAGS =
  | 'HIL_ACTUATOR_CONTROLS_FLAGS_LOCKSTEP' // Simulation is using lockstep
  | string;

