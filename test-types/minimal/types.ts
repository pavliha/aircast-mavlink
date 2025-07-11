// Auto-generated TypeScript types for minimal dialect
// Generated from MAVLink XML definitions

export interface MAVLinkMessage<Content = unknown> {
  timestamp: number;
  system_id: number;
  component_id: number;
  type: string;
  content: Content;
}

// Micro air vehicle / autopilot classes. This identifies the individual model.
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


// Message type map for type-safe message handling
export interface MessageTypeMap {
  HEARTBEAT: MessageHeartbeat;
  PROTOCOL_VERSION: MessageProtocolVersion;
}

// Union type of all message types
export type AnyMessage = 
  | MAVLinkMessage<MessageHeartbeat>
  | MAVLinkMessage<MessageProtocolVersion>
;

// Type guard functions
export function isHeartbeat(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageHeartbeat> {
  return msg.type === 'HEARTBEAT';
}
export function isProtocolVersion(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageProtocolVersion> {
  return msg.type === 'PROTOCOL_VERSION';
}
