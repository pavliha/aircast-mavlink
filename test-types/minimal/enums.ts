// Auto-generated TypeScript enums for minimal dialect

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

