// Auto-generated TypeScript types for common dialect
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

// Enum used to indicate true or false (also: success or failure, enabled or disabled, active or inactive).
export type BOOL =
  | 'BOOL_FALSE' // False.
  | 'BOOL_TRUE' // True.
  | string;

// These values define the type of firmware release.  These values indicate the first version or release of this type.  For example the first alpha release would be 64, the second would be 65.
export type FIRMWARE_VERSION_TYPE =
  | 'FIRMWARE_VERSION_TYPE_DEV' // development release
  | 'FIRMWARE_VERSION_TYPE_ALPHA' // alpha release
  | 'FIRMWARE_VERSION_TYPE_BETA' // beta release
  | 'FIRMWARE_VERSION_TYPE_RC' // release candidate
  | 'FIRMWARE_VERSION_TYPE_OFFICIAL' // official stable release
  | string;

// Flags to report failure cases over the high latency telemetry.
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
export type MAV_GOTO =
  | 'MAV_GOTO_DO_HOLD' // Hold at the current position.
  | 'MAV_GOTO_DO_CONTINUE' // Continue with the next item in mission execution.
  | 'MAV_GOTO_HOLD_AT_CURRENT_POSITION' // Hold at the current position of the system
  | 'MAV_GOTO_HOLD_AT_SPECIFIED_POSITION' // Hold at the position specified in the parameters of the DO_HOLD action
  | string;

// Predefined OR-combined MAV_MODE_FLAG values. These can simplify using the flags when setting modes. Note that manual input is enabled in all modes as a safety override.
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

export type MAVLINK_DATA_STREAM_TYPE =
  | 'MAVLINK_DATA_STREAM_IMG_JPEG'
  | 'MAVLINK_DATA_STREAM_IMG_BMP'
  | 'MAVLINK_DATA_STREAM_IMG_RAW8U'
  | 'MAVLINK_DATA_STREAM_IMG_RAW32U'
  | 'MAVLINK_DATA_STREAM_IMG_PGM'
  | 'MAVLINK_DATA_STREAM_IMG_PNG'
  | string;

export type FENCE_BREACH =
  | 'FENCE_BREACH_NONE' // No last fence breach
  | 'FENCE_BREACH_MINALT' // Breached minimum altitude
  | 'FENCE_BREACH_MAXALT' // Breached maximum altitude
  | 'FENCE_BREACH_BOUNDARY' // Breached fence boundary
  | string;

// Actions being taken to mitigate/prevent fence breach
export type FENCE_MITIGATE =
  | 'FENCE_MITIGATE_UNKNOWN' // Unknown
  | 'FENCE_MITIGATE_NONE' // No actions being taken
  | 'FENCE_MITIGATE_VEL_LIMIT' // Velocity limiting active to prevent breach
  | string;

// Fence types to enable or disable when using MAV_CMD_DO_FENCE_ENABLE.
// Note that at least one of these flags must be set in MAV_CMD_DO_FENCE_ENABLE.param2.
// If none are set, the flight stack will ignore the field and enable/disable its default set of fences (usually all of them).
export type FENCE_TYPE =
  | 'FENCE_TYPE_ALT_MAX' // Maximum altitude fence
  | 'FENCE_TYPE_CIRCLE' // Circle fence
  | 'FENCE_TYPE_POLYGON' // Polygon fence
  | 'FENCE_TYPE_ALT_MIN' // Minimum altitude fence
  | string;

// Enumeration of possible mount operation modes. This message is used by obsolete/deprecated gimbal messages.
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
export type GRIPPER_ACTIONS =
  | 'GRIPPER_ACTION_RELEASE' // Gripper release cargo.
  | 'GRIPPER_ACTION_GRAB' // Gripper grab onto cargo.
  | string;

// Winch actions.
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
export type UAVCAN_NODE_HEALTH =
  | 'UAVCAN_NODE_HEALTH_OK' // The node is functioning properly.
  | 'UAVCAN_NODE_HEALTH_WARNING' // A critical parameter went out of range or the node has encountered a minor failure.
  | 'UAVCAN_NODE_HEALTH_ERROR' // The node has encountered a major failure.
  | 'UAVCAN_NODE_HEALTH_CRITICAL' // The node has suffered a fatal malfunction.
  | string;

// Generalized UAVCAN node mode
export type UAVCAN_NODE_MODE =
  | 'UAVCAN_NODE_MODE_OPERATIONAL' // The node is performing its primary functions.
  | 'UAVCAN_NODE_MODE_INITIALIZATION' // The node is initializing; this mode is entered immediately after startup.
  | 'UAVCAN_NODE_MODE_MAINTENANCE' // The node is under maintenance.
  | 'UAVCAN_NODE_MODE_SOFTWARE_UPDATE' // The node is in the process of updating its software.
  | 'UAVCAN_NODE_MODE_OFFLINE' // The node is no longer available online.
  | string;

// Indicates the ESC connection type.
export type ESC_CONNECTION_TYPE =
  | 'ESC_CONNECTION_TYPE_PPM' // Traditional PPM ESC.
  | 'ESC_CONNECTION_TYPE_SERIAL' // Serial Bus connected ESC.
  | 'ESC_CONNECTION_TYPE_ONESHOT' // One Shot PPM ESC.
  | 'ESC_CONNECTION_TYPE_I2C' // I2C ESC.
  | 'ESC_CONNECTION_TYPE_CAN' // CAN-Bus ESC.
  | 'ESC_CONNECTION_TYPE_DSHOT' // DShot ESC.
  | string;

// Flags to report ESC failures.
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
export type STORAGE_STATUS =
  | 'STORAGE_STATUS_EMPTY' // Storage is missing (no microSD card loaded for example.)
  | 'STORAGE_STATUS_UNFORMATTED' // Storage present but unformatted.
  | 'STORAGE_STATUS_READY' // Storage present and ready.
  | 'STORAGE_STATUS_NOT_SUPPORTED' // Camera does not supply storage status information. Capacity information in STORAGE_INFORMATION fields will be ignored.
  | string;

// Flags to indicate the type of storage.
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
export type STORAGE_USAGE_FLAG =
  | 'STORAGE_USAGE_FLAG_SET' // Always set to 1 (indicates STORAGE_INFORMATION.storage_usage is supported).
  | 'STORAGE_USAGE_FLAG_PHOTO' // Storage for saving photos.
  | 'STORAGE_USAGE_FLAG_VIDEO' // Storage for saving videos.
  | 'STORAGE_USAGE_FLAG_LOGS' // Storage for saving logs.
  | string;

// Yaw behaviour during orbit flight.
export type ORBIT_YAW_BEHAVIOUR =
  | 'ORBIT_YAW_BEHAVIOUR_HOLD_FRONT_TO_CIRCLE_CENTER' // Vehicle front points to the center (default).
  | 'ORBIT_YAW_BEHAVIOUR_HOLD_INITIAL_HEADING' // Vehicle front holds heading when message received.
  | 'ORBIT_YAW_BEHAVIOUR_UNCONTROLLED' // Yaw uncontrolled.
  | 'ORBIT_YAW_BEHAVIOUR_HOLD_FRONT_TANGENT_TO_CIRCLE' // Vehicle front follows flight path (tangential to circle).
  | 'ORBIT_YAW_BEHAVIOUR_RC_CONTROLLED' // Yaw controlled by RC input.
  | 'ORBIT_YAW_BEHAVIOUR_UNCHANGED' // Vehicle uses current yaw behaviour (unchanged). The vehicle-default yaw behaviour is used if this value is specified when orbit is first commanded.
  | string;

// Possible responses from a WIFI_CONFIG_AP message.
export type WIFI_CONFIG_AP_RESPONSE =
  | 'WIFI_CONFIG_AP_RESPONSE_UNDEFINED' // Undefined response. Likely an indicative of a system that doesn&#x27;t support this request.
  | 'WIFI_CONFIG_AP_RESPONSE_ACCEPTED' // Changes accepted.
  | 'WIFI_CONFIG_AP_RESPONSE_REJECTED' // Changes rejected.
  | 'WIFI_CONFIG_AP_RESPONSE_MODE_ERROR' // Invalid Mode.
  | 'WIFI_CONFIG_AP_RESPONSE_SSID_ERROR' // Invalid SSID.
  | 'WIFI_CONFIG_AP_RESPONSE_PASSWORD_ERROR' // Invalid Password.
  | string;

// Possible responses from a CELLULAR_CONFIG message.
export type CELLULAR_CONFIG_RESPONSE =
  | 'CELLULAR_CONFIG_RESPONSE_ACCEPTED' // Changes accepted.
  | 'CELLULAR_CONFIG_RESPONSE_APN_ERROR' // Invalid APN.
  | 'CELLULAR_CONFIG_RESPONSE_PIN_ERROR' // Invalid PIN.
  | 'CELLULAR_CONFIG_RESPONSE_REJECTED' // Changes rejected.
  | 'CELLULAR_CONFIG_BLOCKED_PUK_REQUIRED' // PUK is required to unblock SIM card.
  | string;

// WiFi Mode.
export type WIFI_CONFIG_AP_MODE =
  | 'WIFI_CONFIG_AP_MODE_UNDEFINED' // WiFi mode is undefined.
  | 'WIFI_CONFIG_AP_MODE_AP' // WiFi configured as an access point.
  | 'WIFI_CONFIG_AP_MODE_STATION' // WiFi configured as a station connected to an existing local WiFi network.
  | 'WIFI_CONFIG_AP_MODE_DISABLED' // WiFi disabled.
  | string;

// Supported component metadata types. These are used in the &quot;general&quot; metadata file returned by COMPONENT_METADATA to provide information about supported metadata types. The types are not used directly in MAVLink messages.
export type COMP_METADATA_TYPE =
  | 'COMP_METADATA_TYPE_GENERAL' // General information about the component. General metadata includes information about other metadata types supported by the component. Files of this type must be supported, and must be downloadable from vehicle using a MAVLink FTP URI.
  | 'COMP_METADATA_TYPE_PARAMETER' // Parameter meta data.
  | 'COMP_METADATA_TYPE_COMMANDS' // Meta data that specifies which commands and command parameters the vehicle supports. (WIP)
  | 'COMP_METADATA_TYPE_PERIPHERALS' // Meta data that specifies external non-MAVLink peripherals.
  | 'COMP_METADATA_TYPE_EVENTS' // Meta data for the events interface.
  | 'COMP_METADATA_TYPE_ACTUATORS' // Meta data for actuator configuration (motors, servos and vehicle geometry) and testing.
  | string;

// Actuator configuration, used to change a setting on an actuator. Component information metadata can be used to know which outputs support which commands.
export type ACTUATOR_CONFIGURATION =
  | 'ACTUATOR_CONFIGURATION_NONE' // Do nothing.
  | 'ACTUATOR_CONFIGURATION_BEEP' // Command the actuator to beep now.
  | 'ACTUATOR_CONFIGURATION_3D_MODE_ON' // Permanently set the actuator (ESC) to 3D mode (reversible thrust).
  | 'ACTUATOR_CONFIGURATION_3D_MODE_OFF' // Permanently set the actuator (ESC) to non 3D mode (non-reversible thrust).
  | 'ACTUATOR_CONFIGURATION_SPIN_DIRECTION1' // Permanently set the actuator (ESC) to spin direction 1 (which can be clockwise or counter-clockwise).
  | 'ACTUATOR_CONFIGURATION_SPIN_DIRECTION2' // Permanently set the actuator (ESC) to spin direction 2 (opposite of direction 1).
  | string;

// Actuator output function. Values greater or equal to 1000 are autopilot-specific.
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
export type AUTOTUNE_AXIS =
  | 'AUTOTUNE_AXIS_ROLL' // Autotune roll axis.
  | 'AUTOTUNE_AXIS_PITCH' // Autotune pitch axis.
  | 'AUTOTUNE_AXIS_YAW' // Autotune yaw axis.
  | string;

// Actions for reading/writing parameters between persistent and volatile storage when using MAV_CMD_PREFLIGHT_STORAGE.
// (Commonly parameters are loaded from persistent storage (flash/EEPROM) into volatile storage (RAM) on startup and written back when they are changed.)
export type PREFLIGHT_STORAGE_PARAMETER_ACTION =
  | 'PARAM_READ_PERSISTENT' // Read all parameters from persistent storage. Replaces values in volatile storage.
  | 'PARAM_WRITE_PERSISTENT' // Write all parameter values to persistent storage (flash/EEPROM)
  | 'PARAM_RESET_CONFIG_DEFAULT' // Reset all user configurable parameters to their default value (including airframe selection, sensor calibration data, safety settings, and so on). Does not reset values that contain operation counters and vehicle computed statistics.
  | 'PARAM_RESET_SENSOR_DEFAULT' // Reset only sensor calibration parameters to factory defaults (or firmware default if not available)
  | 'PARAM_RESET_ALL_DEFAULT' // Reset all parameters, including operation counters, to default values
  | string;

// Actions for reading and writing plan information (mission, rally points, geofence) between persistent and volatile storage when using MAV_CMD_PREFLIGHT_STORAGE.
// (Commonly missions are loaded from persistent storage (flash/EEPROM) into volatile storage (RAM) on startup and written back when they are changed.)
export type PREFLIGHT_STORAGE_MISSION_ACTION =
  | 'MISSION_READ_PERSISTENT' // Read current mission data from persistent storage
  | 'MISSION_WRITE_PERSISTENT' // Write current mission data to persistent storage
  | 'MISSION_RESET_DEFAULT' // Erase all mission data stored on the vehicle (both persistent and volatile storage)
  | string;

// Specifies the conditions under which the MAV_CMD_PREFLIGHT_REBOOT_SHUTDOWN command should be accepted.
export type REBOOT_SHUTDOWN_CONDITIONS =
  | 'REBOOT_SHUTDOWN_CONDITIONS_SAFETY_INTERLOCKED' // Reboot/Shutdown only if allowed by safety checks, such as being landed.
  | 'REBOOT_SHUTDOWN_CONDITIONS_FORCE' // Force reboot/shutdown of the autopilot/component regardless of system state.
  | string;

// Commands to be executed by the MAV. They can be executed on user request, or as part of a mission script. If the action is used in a mission, the parameter mapping to the waypoint/mission message is as follows: Param 1, Param 2, Param 3, Param 4, X: Param 5, Y:Param 6, Z:Param 7. This command list is similar what ARINC 424 is for commercial aircraft: A data format how to interpret waypoint/mission data. NaN and INT32_MAX may be used in float/integer params (respectively) to indicate optional/default values (e.g. to use the component&#x27;s current yaw or latitude rather than a specific value). See https://mavlink.io/en/guide/xml_schema.html#MAV_CMD for information about the structure of the MAV_CMD entries
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
export type MAV_ROI =
  | 'MAV_ROI_NONE' // No region of interest.
  | 'MAV_ROI_WPNEXT' // Point toward next waypoint, with optional pitch/roll/yaw offset.
  | 'MAV_ROI_WPINDEX' // Point toward given waypoint.
  | 'MAV_ROI_LOCATION' // Point toward fixed location.
  | 'MAV_ROI_TARGET' // Point toward of given id.
  | string;

// Specifies the datatype of a MAVLink parameter.
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
export type MAV_POWER_STATUS =
  | 'MAV_POWER_STATUS_BRICK_VALID' // main brick power supply valid
  | 'MAV_POWER_STATUS_SERVO_VALID' // main servo power supply valid for FMU
  | 'MAV_POWER_STATUS_USB_CONNECTED' // USB power is connected
  | 'MAV_POWER_STATUS_PERIPH_OVERCURRENT' // peripheral supply is in over-current state
  | 'MAV_POWER_STATUS_PERIPH_HIPOWER_OVERCURRENT' // hi-power peripheral supply is in over-current state
  | 'MAV_POWER_STATUS_CHANGED' // Power status has changed since boot
  | string;

// SERIAL_CONTROL device types
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
export type SERIAL_CONTROL_FLAG =
  | 'SERIAL_CONTROL_FLAG_REPLY' // Set if this is a reply
  | 'SERIAL_CONTROL_FLAG_RESPOND' // Set if the sender wants the receiver to send a response as another SERIAL_CONTROL message
  | 'SERIAL_CONTROL_FLAG_EXCLUSIVE' // Set if access to the serial port should be removed from whatever driver is currently using it, giving exclusive access to the SERIAL_CONTROL protocol. The port can be handed back by sending a request without this flag set
  | 'SERIAL_CONTROL_FLAG_BLOCKING' // Block on writes to the serial port
  | 'SERIAL_CONTROL_FLAG_MULTI' // Send multiple replies until port is drained
  | string;

// Enumeration of distance sensor types
export type MAV_DISTANCE_SENSOR =
  | 'MAV_DISTANCE_SENSOR_LASER' // Laser rangefinder, e.g. LightWare SF02/F or PulsedLight units
  | 'MAV_DISTANCE_SENSOR_ULTRASOUND' // Ultrasound rangefinder, e.g. MaxBotix units
  | 'MAV_DISTANCE_SENSOR_INFRARED' // Infrared rangefinder, e.g. Sharp units
  | 'MAV_DISTANCE_SENSOR_RADAR' // Radar type, e.g. uLanding units
  | 'MAV_DISTANCE_SENSOR_UNKNOWN' // Broken or unknown type, e.g. analog units
  | string;

// Enumeration of sensor orientation, according to its rotations
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
export type MAV_MISSION_TYPE =
  | 'MAV_MISSION_TYPE_MISSION' // Items are mission commands for main mission.
  | 'MAV_MISSION_TYPE_FENCE' // Specifies GeoFence area(s). Items are MAV_CMD_NAV_FENCE_ GeoFence items.
  | 'MAV_MISSION_TYPE_RALLY' // Specifies the rally points for the vehicle. Rally points are alternative RTL points. Items are MAV_CMD_NAV_RALLY_POINT rally point items.
  | 'MAV_MISSION_TYPE_ALL' // Only used in MISSION_CLEAR_ALL to clear all mission types.
  | string;

// Enumeration of estimator types
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
export type MAV_BATTERY_TYPE =
  | 'MAV_BATTERY_TYPE_UNKNOWN' // Not specified.
  | 'MAV_BATTERY_TYPE_LIPO' // Lithium polymer battery
  | 'MAV_BATTERY_TYPE_LIFE' // Lithium-iron-phosphate battery
  | 'MAV_BATTERY_TYPE_LION' // Lithium-ION battery
  | 'MAV_BATTERY_TYPE_NIMH' // Nickel metal hydride battery
  | string;

// Enumeration of battery functions
export type MAV_BATTERY_FUNCTION =
  | 'MAV_BATTERY_FUNCTION_UNKNOWN' // Battery function is unknown
  | 'MAV_BATTERY_FUNCTION_ALL' // Battery supports all flight systems
  | 'MAV_BATTERY_FUNCTION_PROPULSION' // Battery for the propulsion system
  | 'MAV_BATTERY_FUNCTION_AVIONICS' // Avionics battery
  | 'MAV_BATTERY_FUNCTION_PAYLOAD' // Payload battery
  | string;

// Enumeration for battery charge states.
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
export type MAV_BATTERY_MODE =
  | 'MAV_BATTERY_MODE_UNKNOWN' // Battery mode not supported/unknown battery mode/normal operation.
  | 'MAV_BATTERY_MODE_AUTO_DISCHARGING' // Battery is auto discharging (towards storage level).
  | 'MAV_BATTERY_MODE_HOT_SWAP' // Battery in hot-swap mode (current limited to prevent spikes that might damage sensitive electrical circuits).
  | string;

// Smart battery supply status/fault flags (bitmask) for health indication. The battery must also report either MAV_BATTERY_CHARGE_STATE_FAILED or MAV_BATTERY_CHARGE_STATE_UNHEALTHY if any of these are set.
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
export type MAV_FUEL_TYPE =
  | 'MAV_FUEL_TYPE_UNKNOWN' // Not specified. Fuel levels are normalized (i.e. maximum is 1, and other levels are relative to 1).
  | 'MAV_FUEL_TYPE_LIQUID' // A generic liquid fuel. Fuel levels are in millilitres (ml). Fuel rates are in millilitres/second.
  | 'MAV_FUEL_TYPE_GAS' // A gas tank. Fuel levels are in kilo-Pascal (kPa), and flow rates are in milliliters per second (ml/s).
  | string;

// Flags to report status/failure cases for a power generator (used in GENERATOR_STATUS). Note that FAULTS are conditions that cause the generator to fail. Warnings are conditions that require attention before the next use (they indicate the system is not operating properly).
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
export type MAV_VTOL_STATE =
  | 'MAV_VTOL_STATE_UNDEFINED' // MAV is not configured as VTOL
  | 'MAV_VTOL_STATE_TRANSITION_TO_FW' // VTOL is in transition from multicopter to fixed-wing
  | 'MAV_VTOL_STATE_TRANSITION_TO_MC' // VTOL is in transition from fixed-wing to multicopter
  | 'MAV_VTOL_STATE_MC' // VTOL is in multicopter state
  | 'MAV_VTOL_STATE_FW' // VTOL is in fixed-wing state
  | string;

// Enumeration of landed detector states
export type MAV_LANDED_STATE =
  | 'MAV_LANDED_STATE_UNDEFINED' // MAV landed state is unknown
  | 'MAV_LANDED_STATE_ON_GROUND' // MAV is landed (on ground)
  | 'MAV_LANDED_STATE_IN_AIR' // MAV is in air
  | 'MAV_LANDED_STATE_TAKEOFF' // MAV currently taking off
  | 'MAV_LANDED_STATE_LANDING' // MAV currently landing
  | string;

// Enumeration of the ADSB altimeter types
export type ADSB_ALTITUDE_TYPE =
  | 'ADSB_ALTITUDE_TYPE_PRESSURE_QNH' // Altitude reported from a Baro source using QNH reference
  | 'ADSB_ALTITUDE_TYPE_GEOMETRIC' // Altitude reported from a GNSS source
  | string;

// ADSB classification for the type of vehicle emitting the transponder signal
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
export type MAV_DO_REPOSITION_FLAGS =
  | 'MAV_DO_REPOSITION_FLAGS_CHANGE_MODE' // The aircraft should immediately transition into guided. This should not be set for follow me applications
  | 'MAV_DO_REPOSITION_FLAGS_RELATIVE_YAW' // Yaw relative to the vehicle current heading (if not set, relative to North).
  | string;

// Speed setpoint types used in MAV_CMD_DO_CHANGE_SPEED
export type SPEED_TYPE =
  | 'SPEED_TYPE_AIRSPEED' // Airspeed
  | 'SPEED_TYPE_GROUNDSPEED' // Groundspeed
  | 'SPEED_TYPE_CLIMB_SPEED' // Climb speed
  | 'SPEED_TYPE_DESCENT_SPEED' // Descent speed
  | string;

// Flags in ESTIMATOR_STATUS message
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
export type MOTOR_TEST_ORDER =
  | 'MOTOR_TEST_ORDER_DEFAULT' // Default autopilot motor test method.
  | 'MOTOR_TEST_ORDER_SEQUENCE' // Motor numbers are specified as their index in a predefined vehicle-specific sequence.
  | 'MOTOR_TEST_ORDER_BOARD' // Motor numbers are specified as the output as labeled on the board.
  | string;

// Defines how throttle value is represented in MAV_CMD_DO_MOTOR_TEST.
export type MOTOR_TEST_THROTTLE_TYPE =
  | 'MOTOR_TEST_THROTTLE_PERCENT' // Throttle as a percentage (0 ~ 100)
  | 'MOTOR_TEST_THROTTLE_PWM' // Throttle as an absolute PWM value (normally in range of 1000~2000).
  | 'MOTOR_TEST_THROTTLE_PILOT' // Throttle pass-through from pilot&#x27;s transmitter.
  | 'MOTOR_TEST_COMPASS_CAL' // Per-motor compass calibration test.
  | string;

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
export type MAV_COLLISION_THREAT_LEVEL =
  | 'MAV_COLLISION_THREAT_LEVEL_NONE' // Not a threat
  | 'MAV_COLLISION_THREAT_LEVEL_LOW' // Craft is mildly concerned about this threat
  | 'MAV_COLLISION_THREAT_LEVEL_HIGH' // Craft is panicking, and may take actions to avoid threat
  | string;

// Source of information about this collision.
export type MAV_COLLISION_SRC =
  | 'MAV_COLLISION_SRC_ADSB' // ID field references ADSB_VEHICLE packets
  | 'MAV_COLLISION_SRC_MAVLINK_GPS_GLOBAL_INT' // ID field references MAVLink SRC ID
  | string;

// Type of GPS fix
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
export type RTK_BASELINE_COORDINATE_SYSTEM =
  | 'RTK_BASELINE_COORDINATE_SYSTEM_ECEF' // Earth-centered, Earth-fixed
  | 'RTK_BASELINE_COORDINATE_SYSTEM_NED' // RTK basestation centered, north, east, down
  | string;

// Type of landing target
export type LANDING_TARGET_TYPE =
  | 'LANDING_TARGET_TYPE_LIGHT_BEACON' // Landing target signaled by light beacon (ex: IR-LOCK)
  | 'LANDING_TARGET_TYPE_RADIO_BEACON' // Landing target signaled by radio beacon (ex: ILS, NDB)
  | 'LANDING_TARGET_TYPE_VISION_FIDUCIAL' // Landing target represented by a fiducial marker (ex: ARTag)
  | 'LANDING_TARGET_TYPE_VISION_OTHER' // Landing target represented by a pre-defined visual shape/feature (ex: X-marker, H-marker, square)
  | string;

// Direction of VTOL transition
export type VTOL_TRANSITION_HEADING =
  | 'VTOL_TRANSITION_HEADING_VEHICLE_DEFAULT' // Respect the heading configuration of the vehicle.
  | 'VTOL_TRANSITION_HEADING_NEXT_WAYPOINT' // Use the heading pointing towards the next waypoint.
  | 'VTOL_TRANSITION_HEADING_TAKEOFF' // Use the heading on takeoff (while sitting on the ground).
  | 'VTOL_TRANSITION_HEADING_SPECIFIED' // Use the specified heading in parameter 4.
  | 'VTOL_TRANSITION_HEADING_ANY' // Use the current heading when reaching takeoff altitude (potentially facing the wind when weather-vaning is active).
  | string;

// Camera capability flags (Bitmap)
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
export type VIDEO_STREAM_STATUS_FLAGS =
  | 'VIDEO_STREAM_STATUS_FLAGS_RUNNING' // Stream is active (running)
  | 'VIDEO_STREAM_STATUS_FLAGS_THERMAL' // Stream is thermal imaging
  | 'VIDEO_STREAM_STATUS_FLAGS_THERMAL_RANGE_ENABLED' // Stream can report absolute thermal range (see CAMERA_THERMAL_RANGE).
  | string;

// Video stream types
export type VIDEO_STREAM_TYPE =
  | 'VIDEO_STREAM_TYPE_RTSP' // Stream is RTSP
  | 'VIDEO_STREAM_TYPE_RTPUDP' // Stream is RTP UDP (URI gives the port number)
  | 'VIDEO_STREAM_TYPE_TCP_MPEG' // Stream is MPEG on TCP
  | 'VIDEO_STREAM_TYPE_MPEG_TS' // Stream is MPEG TS (URI gives the port number)
  | string;

// Video stream encodings
export type VIDEO_STREAM_ENCODING =
  | 'VIDEO_STREAM_ENCODING_UNKNOWN' // Stream encoding is unknown
  | 'VIDEO_STREAM_ENCODING_H264' // Stream encoding is H.264
  | 'VIDEO_STREAM_ENCODING_H265' // Stream encoding is H.265
  | string;

// Camera tracking status flags
export type CAMERA_TRACKING_STATUS_FLAGS =
  | 'CAMERA_TRACKING_STATUS_FLAGS_IDLE' // Camera is not tracking
  | 'CAMERA_TRACKING_STATUS_FLAGS_ACTIVE' // Camera is tracking
  | 'CAMERA_TRACKING_STATUS_FLAGS_ERROR' // Camera tracking in error state
  | string;

// Camera tracking modes
export type CAMERA_TRACKING_MODE =
  | 'CAMERA_TRACKING_MODE_NONE' // Not tracking
  | 'CAMERA_TRACKING_MODE_POINT' // Target is a point
  | 'CAMERA_TRACKING_MODE_RECTANGLE' // Target is a rectangle
  | string;

// Camera tracking target data (shows where tracked target is within image)
export type CAMERA_TRACKING_TARGET_DATA =
  | 'CAMERA_TRACKING_TARGET_DATA_EMBEDDED' // Target data embedded in image data (proprietary)
  | 'CAMERA_TRACKING_TARGET_DATA_RENDERED' // Target data rendered in image
  | 'CAMERA_TRACKING_TARGET_DATA_IN_STATUS' // Target data within status message (Point or Rectangle)
  | string;

// Zoom types for MAV_CMD_SET_CAMERA_ZOOM
export type CAMERA_ZOOM_TYPE =
  | 'ZOOM_TYPE_STEP' // Zoom one step increment (-1 for wide, 1 for tele)
  | 'ZOOM_TYPE_CONTINUOUS' // Continuous normalized zoom in/out rate until stopped. Range -1..1, negative: wide, positive: narrow/tele, 0 to stop zooming. Other values should be clipped to the range.
  | 'ZOOM_TYPE_RANGE' // Zoom value as proportion of full camera range (a percentage value between 0.0 and 100.0)
  | 'ZOOM_TYPE_FOCAL_LENGTH' // Zoom value/variable focal length in millimetres. Note that there is no message to get the valid zoom range of the camera, so this can type can only be used for cameras where the zoom range is known (implying that this cannot reliably be used in a GCS for an arbitrary camera)
  | 'ZOOM_TYPE_HORIZONTAL_FOV' // Zoom value as horizontal field of view in degrees.
  | string;

// Focus types for MAV_CMD_SET_CAMERA_FOCUS
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
export type CAMERA_SOURCE =
  | 'CAMERA_SOURCE_DEFAULT' // Default camera source.
  | 'CAMERA_SOURCE_RGB' // RGB camera source.
  | 'CAMERA_SOURCE_IR' // IR camera source.
  | 'CAMERA_SOURCE_NDVI' // NDVI camera source.
  | string;

// Result from PARAM_EXT_SET message.
export type PARAM_ACK =
  | 'PARAM_ACK_ACCEPTED' // Parameter value ACCEPTED and SET
  | 'PARAM_ACK_VALUE_UNSUPPORTED' // Parameter value UNKNOWN/UNSUPPORTED
  | 'PARAM_ACK_FAILED' // Parameter failed to set
  | 'PARAM_ACK_IN_PROGRESS' // Parameter value received but not yet set/accepted. A subsequent PARAM_EXT_ACK with the final result will follow once operation is completed. This is returned immediately for parameters that take longer to set, indicating that the the parameter was received and does not need to be resent.
  | string;

// Camera Modes.
export type CAMERA_MODE =
  | 'CAMERA_MODE_IMAGE' // Camera is in image/photo capture mode.
  | 'CAMERA_MODE_VIDEO' // Camera is in video capture mode.
  | 'CAMERA_MODE_IMAGE_SURVEY' // Camera is in image survey capture mode. It allows for camera controller to do specific settings for surveys.
  | string;

export type MAV_ARM_AUTH_DENIED_REASON =
  | 'MAV_ARM_AUTH_DENIED_REASON_GENERIC' // Not a specific reason
  | 'MAV_ARM_AUTH_DENIED_REASON_NONE' // Authorizer will send the error as string to GCS
  | 'MAV_ARM_AUTH_DENIED_REASON_INVALID_WAYPOINT' // At least one waypoint have a invalid value
  | 'MAV_ARM_AUTH_DENIED_REASON_TIMEOUT' // Timeout in the authorizer process(in case it depends on network)
  | 'MAV_ARM_AUTH_DENIED_REASON_AIRSPACE_IN_USE' // Airspace of the mission in use by another vehicle, second result parameter can have the waypoint id that caused it to be denied.
  | 'MAV_ARM_AUTH_DENIED_REASON_BAD_WEATHER' // Weather is not good to fly
  | string;

// RC type. Used in MAV_CMD_START_RX_PAIR.
export type RC_TYPE =
  | 'RC_TYPE_SPEKTRUM' // Spektrum
  | 'RC_TYPE_CRSF' // CRSF
  | string;

// RC sub-type of types defined in RC_TYPE. Used in MAV_CMD_START_RX_PAIR. Ignored if value does not correspond to the set RC_TYPE.
export type RC_SUB_TYPE =
  | 'RC_SUB_TYPE_SPEKTRUM_DSM2' // Spektrum DSM2
  | 'RC_SUB_TYPE_SPEKTRUM_DSMX' // Spektrum DSMX
  | 'RC_SUB_TYPE_SPEKTRUM_DSMX8' // Spektrum DSMX8
  | string;

// Bitmap to indicate which dimensions should be ignored by the vehicle: a value of 0b0000000000000000 or 0b0000001000000000 indicates that none of the setpoint dimensions should be ignored. If bit 9 is set the floats afx afy afz should be interpreted as force instead of acceleration.
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
export type ATTITUDE_TARGET_TYPEMASK =
  | 'ATTITUDE_TARGET_TYPEMASK_BODY_ROLL_RATE_IGNORE' // Ignore body roll rate
  | 'ATTITUDE_TARGET_TYPEMASK_BODY_PITCH_RATE_IGNORE' // Ignore body pitch rate
  | 'ATTITUDE_TARGET_TYPEMASK_BODY_YAW_RATE_IGNORE' // Ignore body yaw rate
  | 'ATTITUDE_TARGET_TYPEMASK_THRUST_BODY_SET' // Use 3D body thrust setpoint instead of throttle
  | 'ATTITUDE_TARGET_TYPEMASK_THROTTLE_IGNORE' // Ignore throttle
  | 'ATTITUDE_TARGET_TYPEMASK_ATTITUDE_IGNORE' // Ignore attitude
  | string;

// Airborne status of UAS.
export type UTM_FLIGHT_STATE =
  | 'UTM_FLIGHT_STATE_UNKNOWN' // The flight state can&#x27;t be determined.
  | 'UTM_FLIGHT_STATE_GROUND' // UAS on ground.
  | 'UTM_FLIGHT_STATE_AIRBORNE' // UAS airborne.
  | 'UTM_FLIGHT_STATE_EMERGENCY' // UAS is in an emergency flight state.
  | 'UTM_FLIGHT_STATE_NOCTRL' // UAS has no active controls.
  | string;

// Flags for the global position report.
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
export type CELLULAR_NETWORK_FAILED_REASON =
  | 'CELLULAR_NETWORK_FAILED_REASON_NONE' // No error
  | 'CELLULAR_NETWORK_FAILED_REASON_UNKNOWN' // Error state is unknown
  | 'CELLULAR_NETWORK_FAILED_REASON_SIM_MISSING' // SIM is required for the modem but missing
  | 'CELLULAR_NETWORK_FAILED_REASON_SIM_ERROR' // SIM is available, but not usable for connection
  | string;

// Cellular network radio type
export type CELLULAR_NETWORK_RADIO_TYPE =
  | 'CELLULAR_NETWORK_RADIO_TYPE_NONE'
  | 'CELLULAR_NETWORK_RADIO_TYPE_GSM'
  | 'CELLULAR_NETWORK_RADIO_TYPE_CDMA'
  | 'CELLULAR_NETWORK_RADIO_TYPE_WCDMA'
  | 'CELLULAR_NETWORK_RADIO_TYPE_LTE'
  | string;

// Precision land modes (used in MAV_CMD_NAV_LAND).
export type PRECISION_LAND_MODE =
  | 'PRECISION_LAND_MODE_DISABLED' // Normal (non-precision) landing.
  | 'PRECISION_LAND_MODE_OPPORTUNISTIC' // Use precision landing if beacon detected when land command accepted, otherwise land normally.
  | 'PRECISION_LAND_MODE_REQUIRED' // Use precision landing, searching for beacon if not found when land command accepted (land normally if beacon cannot be found).
  | string;

// Parachute actions. Trigger release and enable/disable auto-release.
export type PARACHUTE_ACTION =
  | 'PARACHUTE_DISABLE' // Disable auto-release of parachute (i.e. release triggered by crash detectors).
  | 'PARACHUTE_ENABLE' // Enable auto-release of parachute.
  | 'PARACHUTE_RELEASE' // Release parachute and kill motors.
  | string;

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

export type MAV_ODID_ID_TYPE =
  | 'MAV_ODID_ID_TYPE_NONE' // No type defined.
  | 'MAV_ODID_ID_TYPE_SERIAL_NUMBER' // Manufacturer Serial Number (ANSI/CTA-2063 format).
  | 'MAV_ODID_ID_TYPE_CAA_REGISTRATION_ID' // CAA (Civil Aviation Authority) registered ID. Format: [ICAO Country Code].[CAA Assigned ID].
  | 'MAV_ODID_ID_TYPE_UTM_ASSIGNED_UUID' // UTM (Unmanned Traffic Management) assigned UUID (RFC4122).
  | 'MAV_ODID_ID_TYPE_SPECIFIC_SESSION_ID' // A 20 byte ID for a specific flight/session. The exact ID type is indicated by the first byte of uas_id and these type values are managed by ICAO.
  | string;

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

export type MAV_ODID_STATUS =
  | 'MAV_ODID_STATUS_UNDECLARED' // The status of the (UA) Unmanned Aircraft is undefined.
  | 'MAV_ODID_STATUS_GROUND' // The UA is on the ground.
  | 'MAV_ODID_STATUS_AIRBORNE' // The UA is in the air.
  | 'MAV_ODID_STATUS_EMERGENCY' // The UA is having an emergency.
  | 'MAV_ODID_STATUS_REMOTE_ID_SYSTEM_FAILURE' // The remote ID system is failing or unreliable in some way.
  | string;

export type MAV_ODID_HEIGHT_REF =
  | 'MAV_ODID_HEIGHT_REF_OVER_TAKEOFF' // The height field is relative to the take-off location.
  | 'MAV_ODID_HEIGHT_REF_OVER_GROUND' // The height field is relative to ground.
  | string;

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

export type MAV_ODID_VER_ACC =
  | 'MAV_ODID_VER_ACC_UNKNOWN' // The vertical accuracy is unknown.
  | 'MAV_ODID_VER_ACC_150_METER' // The vertical accuracy is smaller than 150 meter.
  | 'MAV_ODID_VER_ACC_45_METER' // The vertical accuracy is smaller than 45 meter.
  | 'MAV_ODID_VER_ACC_25_METER' // The vertical accuracy is smaller than 25 meter.
  | 'MAV_ODID_VER_ACC_10_METER' // The vertical accuracy is smaller than 10 meter.
  | 'MAV_ODID_VER_ACC_3_METER' // The vertical accuracy is smaller than 3 meter.
  | 'MAV_ODID_VER_ACC_1_METER' // The vertical accuracy is smaller than 1 meter.
  | string;

export type MAV_ODID_SPEED_ACC =
  | 'MAV_ODID_SPEED_ACC_UNKNOWN' // The speed accuracy is unknown.
  | 'MAV_ODID_SPEED_ACC_10_METERS_PER_SECOND' // The speed accuracy is smaller than 10 meters per second.
  | 'MAV_ODID_SPEED_ACC_3_METERS_PER_SECOND' // The speed accuracy is smaller than 3 meters per second.
  | 'MAV_ODID_SPEED_ACC_1_METERS_PER_SECOND' // The speed accuracy is smaller than 1 meters per second.
  | 'MAV_ODID_SPEED_ACC_0_3_METERS_PER_SECOND' // The speed accuracy is smaller than 0.3 meters per second.
  | string;

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

export type MAV_ODID_AUTH_TYPE =
  | 'MAV_ODID_AUTH_TYPE_NONE' // No authentication type is specified.
  | 'MAV_ODID_AUTH_TYPE_UAS_ID_SIGNATURE' // Signature for the UAS (Unmanned Aircraft System) ID.
  | 'MAV_ODID_AUTH_TYPE_OPERATOR_ID_SIGNATURE' // Signature for the Operator ID.
  | 'MAV_ODID_AUTH_TYPE_MESSAGE_SET_SIGNATURE' // Signature for the entire message set.
  | 'MAV_ODID_AUTH_TYPE_NETWORK_REMOTE_ID' // Authentication is provided by Network Remote ID.
  | 'MAV_ODID_AUTH_TYPE_SPECIFIC_AUTHENTICATION' // The exact authentication type is indicated by the first byte of authentication_data and these type values are managed by ICAO.
  | string;

export type MAV_ODID_DESC_TYPE =
  | 'MAV_ODID_DESC_TYPE_TEXT' // Optional free-form text description of the purpose of the flight.
  | 'MAV_ODID_DESC_TYPE_EMERGENCY' // Optional additional clarification when status &#x3D;&#x3D; MAV_ODID_STATUS_EMERGENCY.
  | 'MAV_ODID_DESC_TYPE_EXTENDED_STATUS' // Optional additional clarification when status !&#x3D; MAV_ODID_STATUS_EMERGENCY.
  | string;

export type MAV_ODID_OPERATOR_LOCATION_TYPE =
  | 'MAV_ODID_OPERATOR_LOCATION_TYPE_TAKEOFF' // The location/altitude of the operator is the same as the take-off location.
  | 'MAV_ODID_OPERATOR_LOCATION_TYPE_LIVE_GNSS' // The location/altitude of the operator is dynamic. E.g. based on live GNSS data.
  | 'MAV_ODID_OPERATOR_LOCATION_TYPE_FIXED' // The location/altitude of the operator are fixed values.
  | string;

export type MAV_ODID_CLASSIFICATION_TYPE =
  | 'MAV_ODID_CLASSIFICATION_TYPE_UNDECLARED' // The classification type for the UA is undeclared.
  | 'MAV_ODID_CLASSIFICATION_TYPE_EU' // The classification type for the UA follows EU (European Union) specifications.
  | string;

export type MAV_ODID_CATEGORY_EU =
  | 'MAV_ODID_CATEGORY_EU_UNDECLARED' // The category for the UA, according to the EU specification, is undeclared.
  | 'MAV_ODID_CATEGORY_EU_OPEN' // The category for the UA, according to the EU specification, is the Open category.
  | 'MAV_ODID_CATEGORY_EU_SPECIFIC' // The category for the UA, according to the EU specification, is the Specific category.
  | 'MAV_ODID_CATEGORY_EU_CERTIFIED' // The category for the UA, according to the EU specification, is the Certified category.
  | string;

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

export type MAV_ODID_OPERATOR_ID_TYPE =
  | 'MAV_ODID_OPERATOR_ID_TYPE_CAA' // CAA (Civil Aviation Authority) registered operator ID.
  | string;

export type MAV_ODID_ARM_STATUS =
  | 'MAV_ODID_ARM_STATUS_GOOD_TO_ARM' // Passing arming checks.
  | 'MAV_ODID_ARM_STATUS_PRE_ARM_FAIL_GENERIC' // Generic arming failure, see error string for details.
  | string;

// Tune formats (used for vehicle buzzer/tone generation).
export type TUNE_FORMAT =
  | 'TUNE_FORMAT_QBASIC1_1' // Format is QBasic 1.1 Play: https://www.qbasic.net/en/reference/qb11/Statement/PLAY-006.htm.
  | 'TUNE_FORMAT_MML_MODERN' // Format is Modern Music Markup Language (MML): https://en.wikipedia.org/wiki/Music_Macro_Language#Modern_MML.
  | string;

// Type of AIS vessel, enum duplicated from AIS standard, https://gpsd.gitlab.io/gpsd/AIVDM.html
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

export type NAV_VTOL_LAND_OPTIONS =
  | 'NAV_VTOL_LAND_OPTIONS_DEFAULT' // Default autopilot landing behaviour.
  | 'NAV_VTOL_LAND_OPTIONS_FW_DESCENT' // Descend in fixed wing mode, transitioning to multicopter mode for vertical landing when close to the ground. The fixed wing descent pattern is at the discretion of the vehicle (e.g. transition altitude, loiter direction, radius, and speed, etc.).
  | 'NAV_VTOL_LAND_OPTIONS_HOVER_DESCENT' // Land in multicopter mode on reaching the landing coordinates (the whole landing is by &quot;hover descent&quot;).
  | string;

// Winch status flags used in WINCH_STATUS
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
export type MAV_EVENT_ERROR_REASON =
  | 'MAV_EVENT_ERROR_REASON_UNAVAILABLE' // The requested event is not available (anymore).
  | string;

// Flags for CURRENT_EVENT_SEQUENCE.
export type MAV_EVENT_CURRENT_SEQUENCE_FLAGS =
  | 'MAV_EVENT_CURRENT_SEQUENCE_FLAGS_RESET' // A sequence reset has happened (e.g. vehicle reboot).
  | string;

// Flags in the HIL_SENSOR message indicate which fields have updated since the last message
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

export type CAN_FILTER_OP =
  | 'CAN_FILTER_REPLACE'
  | 'CAN_FILTER_ADD'
  | 'CAN_FILTER_REMOVE'
  | string;

// MAV FTP error codes (https://mavlink.io/en/services/ftp.html)
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
export type MISSION_STATE =
  | 'MISSION_STATE_UNKNOWN' // The mission status reporting is not supported.
  | 'MISSION_STATE_NO_MISSION' // No mission on the vehicle.
  | 'MISSION_STATE_NOT_STARTED' // Mission has not started. This is the case after a mission has uploaded but not yet started executing.
  | 'MISSION_STATE_ACTIVE' // Mission is active, and will execute mission items when in auto mode.
  | 'MISSION_STATE_PAUSED' // Mission is paused when in auto mode.
  | 'MISSION_STATE_COMPLETE' // Mission has executed all mission items.
  | string;

// Possible safety switch states.
export type SAFETY_SWITCH_STATE =
  | 'SAFETY_SWITCH_STATE_SAFE' // Safety switch is engaged and vehicle should be safe to approach.
  | 'SAFETY_SWITCH_STATE_DANGEROUS' // Safety switch is NOT engaged and motors, propellers and other actuators should be considered active.
  | string;

// Modes of illuminator
export type ILLUMINATOR_MODE =
  | 'ILLUMINATOR_MODE_UNKNOWN' // Illuminator mode is not specified/unknown
  | 'ILLUMINATOR_MODE_INTERNAL_CONTROL' // Illuminator behavior is controlled by MAV_CMD_DO_ILLUMINATOR_CONFIGURE settings
  | 'ILLUMINATOR_MODE_EXTERNAL_SYNC' // Illuminator behavior is controlled by external factors: e.g. an external hardware signal
  | string;

// Illuminator module error flags (bitmap, 0 means no error)
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
export type MAV_MODE_PROPERTY =
  | 'MAV_MODE_PROPERTY_ADVANCED' // If set, this mode is an advanced mode. For example a rate-controlled manual mode might be advanced, whereas a position-controlled manual mode is not. A GCS can optionally use this flag to configure the UI for its intended users.
  | 'MAV_MODE_PROPERTY_NOT_USER_SELECTABLE' // If set, this mode should not be added to the list of selectable modes. The mode might still be selected by the FC directly (for example as part of a failsafe).
  | 'MAV_MODE_PROPERTY_AUTO_MODE' // If set, this mode is automatically controlled (it may use but does not require a manual controller). If unset the mode is a assumed to require user input (be a manual mode).
  | string;

// Flags used in HIL_ACTUATOR_CONTROLS message.
export type HIL_ACTUATOR_CONTROLS_FLAGS =
  | 'HIL_ACTUATOR_CONTROLS_FLAGS_LOCKSTEP' // Simulation is using lockstep
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


// Message type map for type-safe message handling
export interface MessageTypeMap {
  HEARTBEAT: MessageHeartbeat;
  PROTOCOL_VERSION: MessageProtocolVersion;
  SYS_STATUS: MessageSysStatus;
  SYSTEM_TIME: MessageSystemTime;
  PING: MessagePing;
  CHANGE_OPERATOR_CONTROL: MessageChangeOperatorControl;
  CHANGE_OPERATOR_CONTROL_ACK: MessageChangeOperatorControlAck;
  AUTH_KEY: MessageAuthKey;
  LINK_NODE_STATUS: MessageLinkNodeStatus;
  SET_MODE: MessageSetMode;
  PARAM_REQUEST_READ: MessageParamRequestRead;
  PARAM_REQUEST_LIST: MessageParamRequestList;
  PARAM_VALUE: MessageParamValue;
  PARAM_SET: MessageParamSet;
  GPS_RAW_INT: MessageGpsRawInt;
  GPS_STATUS: MessageGpsStatus;
  SCALED_IMU: MessageScaledImu;
  RAW_IMU: MessageRawImu;
  RAW_PRESSURE: MessageRawPressure;
  SCALED_PRESSURE: MessageScaledPressure;
  ATTITUDE: MessageAttitude;
  ATTITUDE_QUATERNION: MessageAttitudeQuaternion;
  LOCAL_POSITION_NED: MessageLocalPositionNed;
  GLOBAL_POSITION_INT: MessageGlobalPositionInt;
  RC_CHANNELS_SCALED: MessageRcChannelsScaled;
  RC_CHANNELS_RAW: MessageRcChannelsRaw;
  SERVO_OUTPUT_RAW: MessageServoOutputRaw;
  MISSION_REQUEST_PARTIAL_LIST: MessageMissionRequestPartialList;
  MISSION_WRITE_PARTIAL_LIST: MessageMissionWritePartialList;
  MISSION_ITEM: MessageMissionItem;
  MISSION_REQUEST: MessageMissionRequest;
  MISSION_SET_CURRENT: MessageMissionSetCurrent;
  MISSION_CURRENT: MessageMissionCurrent;
  MISSION_REQUEST_LIST: MessageMissionRequestList;
  MISSION_COUNT: MessageMissionCount;
  MISSION_CLEAR_ALL: MessageMissionClearAll;
  MISSION_ITEM_REACHED: MessageMissionItemReached;
  MISSION_ACK: MessageMissionAck;
  SET_GPS_GLOBAL_ORIGIN: MessageSetGpsGlobalOrigin;
  GPS_GLOBAL_ORIGIN: MessageGpsGlobalOrigin;
  PARAM_MAP_RC: MessageParamMapRc;
  MISSION_REQUEST_INT: MessageMissionRequestInt;
  SAFETY_SET_ALLOWED_AREA: MessageSafetySetAllowedArea;
  SAFETY_ALLOWED_AREA: MessageSafetyAllowedArea;
  ATTITUDE_QUATERNION_COV: MessageAttitudeQuaternionCov;
  NAV_CONTROLLER_OUTPUT: MessageNavControllerOutput;
  GLOBAL_POSITION_INT_COV: MessageGlobalPositionIntCov;
  LOCAL_POSITION_NED_COV: MessageLocalPositionNedCov;
  RC_CHANNELS: MessageRcChannels;
  REQUEST_DATA_STREAM: MessageRequestDataStream;
  DATA_STREAM: MessageDataStream;
  MANUAL_CONTROL: MessageManualControl;
  RC_CHANNELS_OVERRIDE: MessageRcChannelsOverride;
  MISSION_ITEM_INT: MessageMissionItemInt;
  VFR_HUD: MessageVfrHud;
  COMMAND_INT: MessageCommandInt;
  COMMAND_LONG: MessageCommandLong;
  COMMAND_ACK: MessageCommandAck;
  COMMAND_CANCEL: MessageCommandCancel;
  MANUAL_SETPOINT: MessageManualSetpoint;
  SET_ATTITUDE_TARGET: MessageSetAttitudeTarget;
  ATTITUDE_TARGET: MessageAttitudeTarget;
  SET_POSITION_TARGET_LOCAL_NED: MessageSetPositionTargetLocalNed;
  POSITION_TARGET_LOCAL_NED: MessagePositionTargetLocalNed;
  SET_POSITION_TARGET_GLOBAL_INT: MessageSetPositionTargetGlobalInt;
  POSITION_TARGET_GLOBAL_INT: MessagePositionTargetGlobalInt;
  LOCAL_POSITION_NED_SYSTEM_GLOBAL_OFFSET: MessageLocalPositionNedSystemGlobalOffset;
  HIL_STATE: MessageHilState;
  HIL_CONTROLS: MessageHilControls;
  HIL_RC_INPUTS_RAW: MessageHilRcInputsRaw;
  HIL_ACTUATOR_CONTROLS: MessageHilActuatorControls;
  OPTICAL_FLOW: MessageOpticalFlow;
  GLOBAL_VISION_POSITION_ESTIMATE: MessageGlobalVisionPositionEstimate;
  VISION_POSITION_ESTIMATE: MessageVisionPositionEstimate;
  VISION_SPEED_ESTIMATE: MessageVisionSpeedEstimate;
  VICON_POSITION_ESTIMATE: MessageViconPositionEstimate;
  HIGHRES_IMU: MessageHighresImu;
  OPTICAL_FLOW_RAD: MessageOpticalFlowRad;
  HIL_SENSOR: MessageHilSensor;
  SIM_STATE: MessageSimState;
  RADIO_STATUS: MessageRadioStatus;
  FILE_TRANSFER_PROTOCOL: MessageFileTransferProtocol;
  TIMESYNC: MessageTimesync;
  CAMERA_TRIGGER: MessageCameraTrigger;
  HIL_GPS: MessageHilGps;
  HIL_OPTICAL_FLOW: MessageHilOpticalFlow;
  HIL_STATE_QUATERNION: MessageHilStateQuaternion;
  SCALED_IMU2: MessageScaledImu2;
  LOG_REQUEST_LIST: MessageLogRequestList;
  LOG_ENTRY: MessageLogEntry;
  LOG_REQUEST_DATA: MessageLogRequestData;
  LOG_DATA: MessageLogData;
  LOG_ERASE: MessageLogErase;
  LOG_REQUEST_END: MessageLogRequestEnd;
  GPS_INJECT_DATA: MessageGpsInjectData;
  GPS2_RAW: MessageGps2Raw;
  POWER_STATUS: MessagePowerStatus;
  SERIAL_CONTROL: MessageSerialControl;
  GPS_RTK: MessageGpsRtk;
  GPS2_RTK: MessageGps2Rtk;
  SCALED_IMU3: MessageScaledImu3;
  DATA_TRANSMISSION_HANDSHAKE: MessageDataTransmissionHandshake;
  ENCAPSULATED_DATA: MessageEncapsulatedData;
  DISTANCE_SENSOR: MessageDistanceSensor;
  TERRAIN_REQUEST: MessageTerrainRequest;
  TERRAIN_DATA: MessageTerrainData;
  TERRAIN_CHECK: MessageTerrainCheck;
  TERRAIN_REPORT: MessageTerrainReport;
  SCALED_PRESSURE2: MessageScaledPressure2;
  ATT_POS_MOCAP: MessageAttPosMocap;
  SET_ACTUATOR_CONTROL_TARGET: MessageSetActuatorControlTarget;
  ACTUATOR_CONTROL_TARGET: MessageActuatorControlTarget;
  ALTITUDE: MessageAltitude;
  RESOURCE_REQUEST: MessageResourceRequest;
  SCALED_PRESSURE3: MessageScaledPressure3;
  FOLLOW_TARGET: MessageFollowTarget;
  CONTROL_SYSTEM_STATE: MessageControlSystemState;
  BATTERY_STATUS: MessageBatteryStatus;
  AUTOPILOT_VERSION: MessageAutopilotVersion;
  LANDING_TARGET: MessageLandingTarget;
  FENCE_STATUS: MessageFenceStatus;
  MAG_CAL_REPORT: MessageMagCalReport;
  EFI_STATUS: MessageEfiStatus;
  ESTIMATOR_STATUS: MessageEstimatorStatus;
  WIND_COV: MessageWindCov;
  GPS_INPUT: MessageGpsInput;
  GPS_RTCM_DATA: MessageGpsRtcmData;
  HIGH_LATENCY: MessageHighLatency;
  HIGH_LATENCY2: MessageHighLatency2;
  VIBRATION: MessageVibration;
  HOME_POSITION: MessageHomePosition;
  SET_HOME_POSITION: MessageSetHomePosition;
  MESSAGE_INTERVAL: MessageMessageInterval;
  EXTENDED_SYS_STATE: MessageExtendedSysState;
  ADSB_VEHICLE: MessageAdsbVehicle;
  COLLISION: MessageCollision;
  V2_EXTENSION: MessageV2Extension;
  MEMORY_VECT: MessageMemoryVect;
  DEBUG_VECT: MessageDebugVect;
  NAMED_VALUE_FLOAT: MessageNamedValueFloat;
  NAMED_VALUE_INT: MessageNamedValueInt;
  STATUSTEXT: MessageStatustext;
  DEBUG: MessageDebug;
  SETUP_SIGNING: MessageSetupSigning;
  BUTTON_CHANGE: MessageButtonChange;
  PLAY_TUNE: MessagePlayTune;
  CAMERA_INFORMATION: MessageCameraInformation;
  CAMERA_SETTINGS: MessageCameraSettings;
  STORAGE_INFORMATION: MessageStorageInformation;
  CAMERA_CAPTURE_STATUS: MessageCameraCaptureStatus;
  CAMERA_IMAGE_CAPTURED: MessageCameraImageCaptured;
  FLIGHT_INFORMATION: MessageFlightInformation;
  MOUNT_ORIENTATION: MessageMountOrientation;
  LOGGING_DATA: MessageLoggingData;
  LOGGING_DATA_ACKED: MessageLoggingDataAcked;
  LOGGING_ACK: MessageLoggingAck;
  VIDEO_STREAM_INFORMATION: MessageVideoStreamInformation;
  VIDEO_STREAM_STATUS: MessageVideoStreamStatus;
  CAMERA_FOV_STATUS: MessageCameraFovStatus;
  CAMERA_TRACKING_IMAGE_STATUS: MessageCameraTrackingImageStatus;
  CAMERA_TRACKING_GEO_STATUS: MessageCameraTrackingGeoStatus;
  CAMERA_THERMAL_RANGE: MessageCameraThermalRange;
  GIMBAL_MANAGER_INFORMATION: MessageGimbalManagerInformation;
  GIMBAL_MANAGER_STATUS: MessageGimbalManagerStatus;
  GIMBAL_MANAGER_SET_ATTITUDE: MessageGimbalManagerSetAttitude;
  GIMBAL_DEVICE_INFORMATION: MessageGimbalDeviceInformation;
  GIMBAL_DEVICE_SET_ATTITUDE: MessageGimbalDeviceSetAttitude;
  GIMBAL_DEVICE_ATTITUDE_STATUS: MessageGimbalDeviceAttitudeStatus;
  AUTOPILOT_STATE_FOR_GIMBAL_DEVICE: MessageAutopilotStateForGimbalDevice;
  GIMBAL_MANAGER_SET_PITCHYAW: MessageGimbalManagerSetPitchyaw;
  GIMBAL_MANAGER_SET_MANUAL_CONTROL: MessageGimbalManagerSetManualControl;
  ESC_INFO: MessageEscInfo;
  ESC_STATUS: MessageEscStatus;
  WIFI_CONFIG_AP: MessageWifiConfigAp;
  AIS_VESSEL: MessageAisVessel;
  UAVCAN_NODE_STATUS: MessageUavcanNodeStatus;
  UAVCAN_NODE_INFO: MessageUavcanNodeInfo;
  PARAM_EXT_REQUEST_READ: MessageParamExtRequestRead;
  PARAM_EXT_REQUEST_LIST: MessageParamExtRequestList;
  PARAM_EXT_VALUE: MessageParamExtValue;
  PARAM_EXT_SET: MessageParamExtSet;
  PARAM_EXT_ACK: MessageParamExtAck;
  OBSTACLE_DISTANCE: MessageObstacleDistance;
  ODOMETRY: MessageOdometry;
  TRAJECTORY_REPRESENTATION_WAYPOINTS: MessageTrajectoryRepresentationWaypoints;
  TRAJECTORY_REPRESENTATION_BEZIER: MessageTrajectoryRepresentationBezier;
  CELLULAR_STATUS: MessageCellularStatus;
  ISBD_LINK_STATUS: MessageIsbdLinkStatus;
  CELLULAR_CONFIG: MessageCellularConfig;
  RAW_RPM: MessageRawRpm;
  UTM_GLOBAL_POSITION: MessageUtmGlobalPosition;
  DEBUG_FLOAT_ARRAY: MessageDebugFloatArray;
  ORBIT_EXECUTION_STATUS: MessageOrbitExecutionStatus;
  SMART_BATTERY_INFO: MessageSmartBatteryInfo;
  FUEL_STATUS: MessageFuelStatus;
  BATTERY_INFO: MessageBatteryInfo;
  GENERATOR_STATUS: MessageGeneratorStatus;
  ACTUATOR_OUTPUT_STATUS: MessageActuatorOutputStatus;
  TIME_ESTIMATE_TO_TARGET: MessageTimeEstimateToTarget;
  TUNNEL: MessageTunnel;
  CAN_FRAME: MessageCanFrame;
  ONBOARD_COMPUTER_STATUS: MessageOnboardComputerStatus;
  COMPONENT_INFORMATION: MessageComponentInformation;
  COMPONENT_INFORMATION_BASIC: MessageComponentInformationBasic;
  COMPONENT_METADATA: MessageComponentMetadata;
  PLAY_TUNE_V2: MessagePlayTuneV2;
  SUPPORTED_TUNES: MessageSupportedTunes;
  EVENT: MessageEvent;
  CURRENT_EVENT_SEQUENCE: MessageCurrentEventSequence;
  REQUEST_EVENT: MessageRequestEvent;
  RESPONSE_EVENT_ERROR: MessageResponseEventError;
  AVAILABLE_MODES: MessageAvailableModes;
  CURRENT_MODE: MessageCurrentMode;
  AVAILABLE_MODES_MONITOR: MessageAvailableModesMonitor;
  ILLUMINATOR_STATUS: MessageIlluminatorStatus;
  CANFD_FRAME: MessageCanfdFrame;
  CAN_FILTER_MODIFY: MessageCanFilterModify;
  WHEEL_DISTANCE: MessageWheelDistance;
  WINCH_STATUS: MessageWinchStatus;
  OPEN_DRONE_ID_BASIC_ID: MessageOpenDroneIdBasicId;
  OPEN_DRONE_ID_LOCATION: MessageOpenDroneIdLocation;
  OPEN_DRONE_ID_AUTHENTICATION: MessageOpenDroneIdAuthentication;
  OPEN_DRONE_ID_SELF_ID: MessageOpenDroneIdSelfId;
  OPEN_DRONE_ID_SYSTEM: MessageOpenDroneIdSystem;
  OPEN_DRONE_ID_OPERATOR_ID: MessageOpenDroneIdOperatorId;
  OPEN_DRONE_ID_MESSAGE_PACK: MessageOpenDroneIdMessagePack;
  OPEN_DRONE_ID_ARM_STATUS: MessageOpenDroneIdArmStatus;
  OPEN_DRONE_ID_SYSTEM_UPDATE: MessageOpenDroneIdSystemUpdate;
  HYGROMETER_SENSOR: MessageHygrometerSensor;
}

// Union type of all message types
export type AnyMessage = 
  | MAVLinkMessage<MessageHeartbeat>
  | MAVLinkMessage<MessageProtocolVersion>
  | MAVLinkMessage<MessageSysStatus>
  | MAVLinkMessage<MessageSystemTime>
  | MAVLinkMessage<MessagePing>
  | MAVLinkMessage<MessageChangeOperatorControl>
  | MAVLinkMessage<MessageChangeOperatorControlAck>
  | MAVLinkMessage<MessageAuthKey>
  | MAVLinkMessage<MessageLinkNodeStatus>
  | MAVLinkMessage<MessageSetMode>
  | MAVLinkMessage<MessageParamRequestRead>
  | MAVLinkMessage<MessageParamRequestList>
  | MAVLinkMessage<MessageParamValue>
  | MAVLinkMessage<MessageParamSet>
  | MAVLinkMessage<MessageGpsRawInt>
  | MAVLinkMessage<MessageGpsStatus>
  | MAVLinkMessage<MessageScaledImu>
  | MAVLinkMessage<MessageRawImu>
  | MAVLinkMessage<MessageRawPressure>
  | MAVLinkMessage<MessageScaledPressure>
  | MAVLinkMessage<MessageAttitude>
  | MAVLinkMessage<MessageAttitudeQuaternion>
  | MAVLinkMessage<MessageLocalPositionNed>
  | MAVLinkMessage<MessageGlobalPositionInt>
  | MAVLinkMessage<MessageRcChannelsScaled>
  | MAVLinkMessage<MessageRcChannelsRaw>
  | MAVLinkMessage<MessageServoOutputRaw>
  | MAVLinkMessage<MessageMissionRequestPartialList>
  | MAVLinkMessage<MessageMissionWritePartialList>
  | MAVLinkMessage<MessageMissionItem>
  | MAVLinkMessage<MessageMissionRequest>
  | MAVLinkMessage<MessageMissionSetCurrent>
  | MAVLinkMessage<MessageMissionCurrent>
  | MAVLinkMessage<MessageMissionRequestList>
  | MAVLinkMessage<MessageMissionCount>
  | MAVLinkMessage<MessageMissionClearAll>
  | MAVLinkMessage<MessageMissionItemReached>
  | MAVLinkMessage<MessageMissionAck>
  | MAVLinkMessage<MessageSetGpsGlobalOrigin>
  | MAVLinkMessage<MessageGpsGlobalOrigin>
  | MAVLinkMessage<MessageParamMapRc>
  | MAVLinkMessage<MessageMissionRequestInt>
  | MAVLinkMessage<MessageSafetySetAllowedArea>
  | MAVLinkMessage<MessageSafetyAllowedArea>
  | MAVLinkMessage<MessageAttitudeQuaternionCov>
  | MAVLinkMessage<MessageNavControllerOutput>
  | MAVLinkMessage<MessageGlobalPositionIntCov>
  | MAVLinkMessage<MessageLocalPositionNedCov>
  | MAVLinkMessage<MessageRcChannels>
  | MAVLinkMessage<MessageRequestDataStream>
  | MAVLinkMessage<MessageDataStream>
  | MAVLinkMessage<MessageManualControl>
  | MAVLinkMessage<MessageRcChannelsOverride>
  | MAVLinkMessage<MessageMissionItemInt>
  | MAVLinkMessage<MessageVfrHud>
  | MAVLinkMessage<MessageCommandInt>
  | MAVLinkMessage<MessageCommandLong>
  | MAVLinkMessage<MessageCommandAck>
  | MAVLinkMessage<MessageCommandCancel>
  | MAVLinkMessage<MessageManualSetpoint>
  | MAVLinkMessage<MessageSetAttitudeTarget>
  | MAVLinkMessage<MessageAttitudeTarget>
  | MAVLinkMessage<MessageSetPositionTargetLocalNed>
  | MAVLinkMessage<MessagePositionTargetLocalNed>
  | MAVLinkMessage<MessageSetPositionTargetGlobalInt>
  | MAVLinkMessage<MessagePositionTargetGlobalInt>
  | MAVLinkMessage<MessageLocalPositionNedSystemGlobalOffset>
  | MAVLinkMessage<MessageHilState>
  | MAVLinkMessage<MessageHilControls>
  | MAVLinkMessage<MessageHilRcInputsRaw>
  | MAVLinkMessage<MessageHilActuatorControls>
  | MAVLinkMessage<MessageOpticalFlow>
  | MAVLinkMessage<MessageGlobalVisionPositionEstimate>
  | MAVLinkMessage<MessageVisionPositionEstimate>
  | MAVLinkMessage<MessageVisionSpeedEstimate>
  | MAVLinkMessage<MessageViconPositionEstimate>
  | MAVLinkMessage<MessageHighresImu>
  | MAVLinkMessage<MessageOpticalFlowRad>
  | MAVLinkMessage<MessageHilSensor>
  | MAVLinkMessage<MessageSimState>
  | MAVLinkMessage<MessageRadioStatus>
  | MAVLinkMessage<MessageFileTransferProtocol>
  | MAVLinkMessage<MessageTimesync>
  | MAVLinkMessage<MessageCameraTrigger>
  | MAVLinkMessage<MessageHilGps>
  | MAVLinkMessage<MessageHilOpticalFlow>
  | MAVLinkMessage<MessageHilStateQuaternion>
  | MAVLinkMessage<MessageScaledImu2>
  | MAVLinkMessage<MessageLogRequestList>
  | MAVLinkMessage<MessageLogEntry>
  | MAVLinkMessage<MessageLogRequestData>
  | MAVLinkMessage<MessageLogData>
  | MAVLinkMessage<MessageLogErase>
  | MAVLinkMessage<MessageLogRequestEnd>
  | MAVLinkMessage<MessageGpsInjectData>
  | MAVLinkMessage<MessageGps2Raw>
  | MAVLinkMessage<MessagePowerStatus>
  | MAVLinkMessage<MessageSerialControl>
  | MAVLinkMessage<MessageGpsRtk>
  | MAVLinkMessage<MessageGps2Rtk>
  | MAVLinkMessage<MessageScaledImu3>
  | MAVLinkMessage<MessageDataTransmissionHandshake>
  | MAVLinkMessage<MessageEncapsulatedData>
  | MAVLinkMessage<MessageDistanceSensor>
  | MAVLinkMessage<MessageTerrainRequest>
  | MAVLinkMessage<MessageTerrainData>
  | MAVLinkMessage<MessageTerrainCheck>
  | MAVLinkMessage<MessageTerrainReport>
  | MAVLinkMessage<MessageScaledPressure2>
  | MAVLinkMessage<MessageAttPosMocap>
  | MAVLinkMessage<MessageSetActuatorControlTarget>
  | MAVLinkMessage<MessageActuatorControlTarget>
  | MAVLinkMessage<MessageAltitude>
  | MAVLinkMessage<MessageResourceRequest>
  | MAVLinkMessage<MessageScaledPressure3>
  | MAVLinkMessage<MessageFollowTarget>
  | MAVLinkMessage<MessageControlSystemState>
  | MAVLinkMessage<MessageBatteryStatus>
  | MAVLinkMessage<MessageAutopilotVersion>
  | MAVLinkMessage<MessageLandingTarget>
  | MAVLinkMessage<MessageFenceStatus>
  | MAVLinkMessage<MessageMagCalReport>
  | MAVLinkMessage<MessageEfiStatus>
  | MAVLinkMessage<MessageEstimatorStatus>
  | MAVLinkMessage<MessageWindCov>
  | MAVLinkMessage<MessageGpsInput>
  | MAVLinkMessage<MessageGpsRtcmData>
  | MAVLinkMessage<MessageHighLatency>
  | MAVLinkMessage<MessageHighLatency2>
  | MAVLinkMessage<MessageVibration>
  | MAVLinkMessage<MessageHomePosition>
  | MAVLinkMessage<MessageSetHomePosition>
  | MAVLinkMessage<MessageMessageInterval>
  | MAVLinkMessage<MessageExtendedSysState>
  | MAVLinkMessage<MessageAdsbVehicle>
  | MAVLinkMessage<MessageCollision>
  | MAVLinkMessage<MessageV2Extension>
  | MAVLinkMessage<MessageMemoryVect>
  | MAVLinkMessage<MessageDebugVect>
  | MAVLinkMessage<MessageNamedValueFloat>
  | MAVLinkMessage<MessageNamedValueInt>
  | MAVLinkMessage<MessageStatustext>
  | MAVLinkMessage<MessageDebug>
  | MAVLinkMessage<MessageSetupSigning>
  | MAVLinkMessage<MessageButtonChange>
  | MAVLinkMessage<MessagePlayTune>
  | MAVLinkMessage<MessageCameraInformation>
  | MAVLinkMessage<MessageCameraSettings>
  | MAVLinkMessage<MessageStorageInformation>
  | MAVLinkMessage<MessageCameraCaptureStatus>
  | MAVLinkMessage<MessageCameraImageCaptured>
  | MAVLinkMessage<MessageFlightInformation>
  | MAVLinkMessage<MessageMountOrientation>
  | MAVLinkMessage<MessageLoggingData>
  | MAVLinkMessage<MessageLoggingDataAcked>
  | MAVLinkMessage<MessageLoggingAck>
  | MAVLinkMessage<MessageVideoStreamInformation>
  | MAVLinkMessage<MessageVideoStreamStatus>
  | MAVLinkMessage<MessageCameraFovStatus>
  | MAVLinkMessage<MessageCameraTrackingImageStatus>
  | MAVLinkMessage<MessageCameraTrackingGeoStatus>
  | MAVLinkMessage<MessageCameraThermalRange>
  | MAVLinkMessage<MessageGimbalManagerInformation>
  | MAVLinkMessage<MessageGimbalManagerStatus>
  | MAVLinkMessage<MessageGimbalManagerSetAttitude>
  | MAVLinkMessage<MessageGimbalDeviceInformation>
  | MAVLinkMessage<MessageGimbalDeviceSetAttitude>
  | MAVLinkMessage<MessageGimbalDeviceAttitudeStatus>
  | MAVLinkMessage<MessageAutopilotStateForGimbalDevice>
  | MAVLinkMessage<MessageGimbalManagerSetPitchyaw>
  | MAVLinkMessage<MessageGimbalManagerSetManualControl>
  | MAVLinkMessage<MessageEscInfo>
  | MAVLinkMessage<MessageEscStatus>
  | MAVLinkMessage<MessageWifiConfigAp>
  | MAVLinkMessage<MessageAisVessel>
  | MAVLinkMessage<MessageUavcanNodeStatus>
  | MAVLinkMessage<MessageUavcanNodeInfo>
  | MAVLinkMessage<MessageParamExtRequestRead>
  | MAVLinkMessage<MessageParamExtRequestList>
  | MAVLinkMessage<MessageParamExtValue>
  | MAVLinkMessage<MessageParamExtSet>
  | MAVLinkMessage<MessageParamExtAck>
  | MAVLinkMessage<MessageObstacleDistance>
  | MAVLinkMessage<MessageOdometry>
  | MAVLinkMessage<MessageTrajectoryRepresentationWaypoints>
  | MAVLinkMessage<MessageTrajectoryRepresentationBezier>
  | MAVLinkMessage<MessageCellularStatus>
  | MAVLinkMessage<MessageIsbdLinkStatus>
  | MAVLinkMessage<MessageCellularConfig>
  | MAVLinkMessage<MessageRawRpm>
  | MAVLinkMessage<MessageUtmGlobalPosition>
  | MAVLinkMessage<MessageDebugFloatArray>
  | MAVLinkMessage<MessageOrbitExecutionStatus>
  | MAVLinkMessage<MessageSmartBatteryInfo>
  | MAVLinkMessage<MessageFuelStatus>
  | MAVLinkMessage<MessageBatteryInfo>
  | MAVLinkMessage<MessageGeneratorStatus>
  | MAVLinkMessage<MessageActuatorOutputStatus>
  | MAVLinkMessage<MessageTimeEstimateToTarget>
  | MAVLinkMessage<MessageTunnel>
  | MAVLinkMessage<MessageCanFrame>
  | MAVLinkMessage<MessageOnboardComputerStatus>
  | MAVLinkMessage<MessageComponentInformation>
  | MAVLinkMessage<MessageComponentInformationBasic>
  | MAVLinkMessage<MessageComponentMetadata>
  | MAVLinkMessage<MessagePlayTuneV2>
  | MAVLinkMessage<MessageSupportedTunes>
  | MAVLinkMessage<MessageEvent>
  | MAVLinkMessage<MessageCurrentEventSequence>
  | MAVLinkMessage<MessageRequestEvent>
  | MAVLinkMessage<MessageResponseEventError>
  | MAVLinkMessage<MessageAvailableModes>
  | MAVLinkMessage<MessageCurrentMode>
  | MAVLinkMessage<MessageAvailableModesMonitor>
  | MAVLinkMessage<MessageIlluminatorStatus>
  | MAVLinkMessage<MessageCanfdFrame>
  | MAVLinkMessage<MessageCanFilterModify>
  | MAVLinkMessage<MessageWheelDistance>
  | MAVLinkMessage<MessageWinchStatus>
  | MAVLinkMessage<MessageOpenDroneIdBasicId>
  | MAVLinkMessage<MessageOpenDroneIdLocation>
  | MAVLinkMessage<MessageOpenDroneIdAuthentication>
  | MAVLinkMessage<MessageOpenDroneIdSelfId>
  | MAVLinkMessage<MessageOpenDroneIdSystem>
  | MAVLinkMessage<MessageOpenDroneIdOperatorId>
  | MAVLinkMessage<MessageOpenDroneIdMessagePack>
  | MAVLinkMessage<MessageOpenDroneIdArmStatus>
  | MAVLinkMessage<MessageOpenDroneIdSystemUpdate>
  | MAVLinkMessage<MessageHygrometerSensor>
;

// Type guard functions
export function isHeartbeat(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageHeartbeat> {
  return msg.type === 'HEARTBEAT';
}
export function isProtocolVersion(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageProtocolVersion> {
  return msg.type === 'PROTOCOL_VERSION';
}
export function isSysStatus(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageSysStatus> {
  return msg.type === 'SYS_STATUS';
}
export function isSystemTime(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageSystemTime> {
  return msg.type === 'SYSTEM_TIME';
}
export function isPing(msg: MAVLinkMessage): msg is MAVLinkMessage<MessagePing> {
  return msg.type === 'PING';
}
export function isChangeOperatorControl(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageChangeOperatorControl> {
  return msg.type === 'CHANGE_OPERATOR_CONTROL';
}
export function isChangeOperatorControlAck(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageChangeOperatorControlAck> {
  return msg.type === 'CHANGE_OPERATOR_CONTROL_ACK';
}
export function isAuthKey(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageAuthKey> {
  return msg.type === 'AUTH_KEY';
}
export function isLinkNodeStatus(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageLinkNodeStatus> {
  return msg.type === 'LINK_NODE_STATUS';
}
export function isSetMode(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageSetMode> {
  return msg.type === 'SET_MODE';
}
export function isParamRequestRead(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageParamRequestRead> {
  return msg.type === 'PARAM_REQUEST_READ';
}
export function isParamRequestList(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageParamRequestList> {
  return msg.type === 'PARAM_REQUEST_LIST';
}
export function isParamValue(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageParamValue> {
  return msg.type === 'PARAM_VALUE';
}
export function isParamSet(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageParamSet> {
  return msg.type === 'PARAM_SET';
}
export function isGpsRawInt(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageGpsRawInt> {
  return msg.type === 'GPS_RAW_INT';
}
export function isGpsStatus(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageGpsStatus> {
  return msg.type === 'GPS_STATUS';
}
export function isScaledImu(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageScaledImu> {
  return msg.type === 'SCALED_IMU';
}
export function isRawImu(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageRawImu> {
  return msg.type === 'RAW_IMU';
}
export function isRawPressure(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageRawPressure> {
  return msg.type === 'RAW_PRESSURE';
}
export function isScaledPressure(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageScaledPressure> {
  return msg.type === 'SCALED_PRESSURE';
}
export function isAttitude(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageAttitude> {
  return msg.type === 'ATTITUDE';
}
export function isAttitudeQuaternion(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageAttitudeQuaternion> {
  return msg.type === 'ATTITUDE_QUATERNION';
}
export function isLocalPositionNed(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageLocalPositionNed> {
  return msg.type === 'LOCAL_POSITION_NED';
}
export function isGlobalPositionInt(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageGlobalPositionInt> {
  return msg.type === 'GLOBAL_POSITION_INT';
}
export function isRcChannelsScaled(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageRcChannelsScaled> {
  return msg.type === 'RC_CHANNELS_SCALED';
}
export function isRcChannelsRaw(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageRcChannelsRaw> {
  return msg.type === 'RC_CHANNELS_RAW';
}
export function isServoOutputRaw(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageServoOutputRaw> {
  return msg.type === 'SERVO_OUTPUT_RAW';
}
export function isMissionRequestPartialList(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageMissionRequestPartialList> {
  return msg.type === 'MISSION_REQUEST_PARTIAL_LIST';
}
export function isMissionWritePartialList(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageMissionWritePartialList> {
  return msg.type === 'MISSION_WRITE_PARTIAL_LIST';
}
export function isMissionItem(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageMissionItem> {
  return msg.type === 'MISSION_ITEM';
}
export function isMissionRequest(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageMissionRequest> {
  return msg.type === 'MISSION_REQUEST';
}
export function isMissionSetCurrent(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageMissionSetCurrent> {
  return msg.type === 'MISSION_SET_CURRENT';
}
export function isMissionCurrent(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageMissionCurrent> {
  return msg.type === 'MISSION_CURRENT';
}
export function isMissionRequestList(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageMissionRequestList> {
  return msg.type === 'MISSION_REQUEST_LIST';
}
export function isMissionCount(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageMissionCount> {
  return msg.type === 'MISSION_COUNT';
}
export function isMissionClearAll(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageMissionClearAll> {
  return msg.type === 'MISSION_CLEAR_ALL';
}
export function isMissionItemReached(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageMissionItemReached> {
  return msg.type === 'MISSION_ITEM_REACHED';
}
export function isMissionAck(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageMissionAck> {
  return msg.type === 'MISSION_ACK';
}
export function isSetGpsGlobalOrigin(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageSetGpsGlobalOrigin> {
  return msg.type === 'SET_GPS_GLOBAL_ORIGIN';
}
export function isGpsGlobalOrigin(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageGpsGlobalOrigin> {
  return msg.type === 'GPS_GLOBAL_ORIGIN';
}
export function isParamMapRc(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageParamMapRc> {
  return msg.type === 'PARAM_MAP_RC';
}
export function isMissionRequestInt(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageMissionRequestInt> {
  return msg.type === 'MISSION_REQUEST_INT';
}
export function isSafetySetAllowedArea(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageSafetySetAllowedArea> {
  return msg.type === 'SAFETY_SET_ALLOWED_AREA';
}
export function isSafetyAllowedArea(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageSafetyAllowedArea> {
  return msg.type === 'SAFETY_ALLOWED_AREA';
}
export function isAttitudeQuaternionCov(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageAttitudeQuaternionCov> {
  return msg.type === 'ATTITUDE_QUATERNION_COV';
}
export function isNavControllerOutput(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageNavControllerOutput> {
  return msg.type === 'NAV_CONTROLLER_OUTPUT';
}
export function isGlobalPositionIntCov(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageGlobalPositionIntCov> {
  return msg.type === 'GLOBAL_POSITION_INT_COV';
}
export function isLocalPositionNedCov(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageLocalPositionNedCov> {
  return msg.type === 'LOCAL_POSITION_NED_COV';
}
export function isRcChannels(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageRcChannels> {
  return msg.type === 'RC_CHANNELS';
}
export function isRequestDataStream(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageRequestDataStream> {
  return msg.type === 'REQUEST_DATA_STREAM';
}
export function isDataStream(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageDataStream> {
  return msg.type === 'DATA_STREAM';
}
export function isManualControl(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageManualControl> {
  return msg.type === 'MANUAL_CONTROL';
}
export function isRcChannelsOverride(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageRcChannelsOverride> {
  return msg.type === 'RC_CHANNELS_OVERRIDE';
}
export function isMissionItemInt(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageMissionItemInt> {
  return msg.type === 'MISSION_ITEM_INT';
}
export function isVfrHud(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageVfrHud> {
  return msg.type === 'VFR_HUD';
}
export function isCommandInt(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageCommandInt> {
  return msg.type === 'COMMAND_INT';
}
export function isCommandLong(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageCommandLong> {
  return msg.type === 'COMMAND_LONG';
}
export function isCommandAck(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageCommandAck> {
  return msg.type === 'COMMAND_ACK';
}
export function isCommandCancel(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageCommandCancel> {
  return msg.type === 'COMMAND_CANCEL';
}
export function isManualSetpoint(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageManualSetpoint> {
  return msg.type === 'MANUAL_SETPOINT';
}
export function isSetAttitudeTarget(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageSetAttitudeTarget> {
  return msg.type === 'SET_ATTITUDE_TARGET';
}
export function isAttitudeTarget(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageAttitudeTarget> {
  return msg.type === 'ATTITUDE_TARGET';
}
export function isSetPositionTargetLocalNed(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageSetPositionTargetLocalNed> {
  return msg.type === 'SET_POSITION_TARGET_LOCAL_NED';
}
export function isPositionTargetLocalNed(msg: MAVLinkMessage): msg is MAVLinkMessage<MessagePositionTargetLocalNed> {
  return msg.type === 'POSITION_TARGET_LOCAL_NED';
}
export function isSetPositionTargetGlobalInt(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageSetPositionTargetGlobalInt> {
  return msg.type === 'SET_POSITION_TARGET_GLOBAL_INT';
}
export function isPositionTargetGlobalInt(msg: MAVLinkMessage): msg is MAVLinkMessage<MessagePositionTargetGlobalInt> {
  return msg.type === 'POSITION_TARGET_GLOBAL_INT';
}
export function isLocalPositionNedSystemGlobalOffset(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageLocalPositionNedSystemGlobalOffset> {
  return msg.type === 'LOCAL_POSITION_NED_SYSTEM_GLOBAL_OFFSET';
}
export function isHilState(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageHilState> {
  return msg.type === 'HIL_STATE';
}
export function isHilControls(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageHilControls> {
  return msg.type === 'HIL_CONTROLS';
}
export function isHilRcInputsRaw(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageHilRcInputsRaw> {
  return msg.type === 'HIL_RC_INPUTS_RAW';
}
export function isHilActuatorControls(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageHilActuatorControls> {
  return msg.type === 'HIL_ACTUATOR_CONTROLS';
}
export function isOpticalFlow(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageOpticalFlow> {
  return msg.type === 'OPTICAL_FLOW';
}
export function isGlobalVisionPositionEstimate(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageGlobalVisionPositionEstimate> {
  return msg.type === 'GLOBAL_VISION_POSITION_ESTIMATE';
}
export function isVisionPositionEstimate(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageVisionPositionEstimate> {
  return msg.type === 'VISION_POSITION_ESTIMATE';
}
export function isVisionSpeedEstimate(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageVisionSpeedEstimate> {
  return msg.type === 'VISION_SPEED_ESTIMATE';
}
export function isViconPositionEstimate(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageViconPositionEstimate> {
  return msg.type === 'VICON_POSITION_ESTIMATE';
}
export function isHighresImu(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageHighresImu> {
  return msg.type === 'HIGHRES_IMU';
}
export function isOpticalFlowRad(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageOpticalFlowRad> {
  return msg.type === 'OPTICAL_FLOW_RAD';
}
export function isHilSensor(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageHilSensor> {
  return msg.type === 'HIL_SENSOR';
}
export function isSimState(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageSimState> {
  return msg.type === 'SIM_STATE';
}
export function isRadioStatus(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageRadioStatus> {
  return msg.type === 'RADIO_STATUS';
}
export function isFileTransferProtocol(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageFileTransferProtocol> {
  return msg.type === 'FILE_TRANSFER_PROTOCOL';
}
export function isTimesync(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageTimesync> {
  return msg.type === 'TIMESYNC';
}
export function isCameraTrigger(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageCameraTrigger> {
  return msg.type === 'CAMERA_TRIGGER';
}
export function isHilGps(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageHilGps> {
  return msg.type === 'HIL_GPS';
}
export function isHilOpticalFlow(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageHilOpticalFlow> {
  return msg.type === 'HIL_OPTICAL_FLOW';
}
export function isHilStateQuaternion(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageHilStateQuaternion> {
  return msg.type === 'HIL_STATE_QUATERNION';
}
export function isScaledImu2(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageScaledImu2> {
  return msg.type === 'SCALED_IMU2';
}
export function isLogRequestList(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageLogRequestList> {
  return msg.type === 'LOG_REQUEST_LIST';
}
export function isLogEntry(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageLogEntry> {
  return msg.type === 'LOG_ENTRY';
}
export function isLogRequestData(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageLogRequestData> {
  return msg.type === 'LOG_REQUEST_DATA';
}
export function isLogData(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageLogData> {
  return msg.type === 'LOG_DATA';
}
export function isLogErase(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageLogErase> {
  return msg.type === 'LOG_ERASE';
}
export function isLogRequestEnd(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageLogRequestEnd> {
  return msg.type === 'LOG_REQUEST_END';
}
export function isGpsInjectData(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageGpsInjectData> {
  return msg.type === 'GPS_INJECT_DATA';
}
export function isGps2Raw(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageGps2Raw> {
  return msg.type === 'GPS2_RAW';
}
export function isPowerStatus(msg: MAVLinkMessage): msg is MAVLinkMessage<MessagePowerStatus> {
  return msg.type === 'POWER_STATUS';
}
export function isSerialControl(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageSerialControl> {
  return msg.type === 'SERIAL_CONTROL';
}
export function isGpsRtk(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageGpsRtk> {
  return msg.type === 'GPS_RTK';
}
export function isGps2Rtk(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageGps2Rtk> {
  return msg.type === 'GPS2_RTK';
}
export function isScaledImu3(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageScaledImu3> {
  return msg.type === 'SCALED_IMU3';
}
export function isDataTransmissionHandshake(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageDataTransmissionHandshake> {
  return msg.type === 'DATA_TRANSMISSION_HANDSHAKE';
}
export function isEncapsulatedData(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageEncapsulatedData> {
  return msg.type === 'ENCAPSULATED_DATA';
}
export function isDistanceSensor(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageDistanceSensor> {
  return msg.type === 'DISTANCE_SENSOR';
}
export function isTerrainRequest(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageTerrainRequest> {
  return msg.type === 'TERRAIN_REQUEST';
}
export function isTerrainData(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageTerrainData> {
  return msg.type === 'TERRAIN_DATA';
}
export function isTerrainCheck(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageTerrainCheck> {
  return msg.type === 'TERRAIN_CHECK';
}
export function isTerrainReport(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageTerrainReport> {
  return msg.type === 'TERRAIN_REPORT';
}
export function isScaledPressure2(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageScaledPressure2> {
  return msg.type === 'SCALED_PRESSURE2';
}
export function isAttPosMocap(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageAttPosMocap> {
  return msg.type === 'ATT_POS_MOCAP';
}
export function isSetActuatorControlTarget(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageSetActuatorControlTarget> {
  return msg.type === 'SET_ACTUATOR_CONTROL_TARGET';
}
export function isActuatorControlTarget(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageActuatorControlTarget> {
  return msg.type === 'ACTUATOR_CONTROL_TARGET';
}
export function isAltitude(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageAltitude> {
  return msg.type === 'ALTITUDE';
}
export function isResourceRequest(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageResourceRequest> {
  return msg.type === 'RESOURCE_REQUEST';
}
export function isScaledPressure3(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageScaledPressure3> {
  return msg.type === 'SCALED_PRESSURE3';
}
export function isFollowTarget(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageFollowTarget> {
  return msg.type === 'FOLLOW_TARGET';
}
export function isControlSystemState(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageControlSystemState> {
  return msg.type === 'CONTROL_SYSTEM_STATE';
}
export function isBatteryStatus(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageBatteryStatus> {
  return msg.type === 'BATTERY_STATUS';
}
export function isAutopilotVersion(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageAutopilotVersion> {
  return msg.type === 'AUTOPILOT_VERSION';
}
export function isLandingTarget(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageLandingTarget> {
  return msg.type === 'LANDING_TARGET';
}
export function isFenceStatus(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageFenceStatus> {
  return msg.type === 'FENCE_STATUS';
}
export function isMagCalReport(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageMagCalReport> {
  return msg.type === 'MAG_CAL_REPORT';
}
export function isEfiStatus(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageEfiStatus> {
  return msg.type === 'EFI_STATUS';
}
export function isEstimatorStatus(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageEstimatorStatus> {
  return msg.type === 'ESTIMATOR_STATUS';
}
export function isWindCov(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageWindCov> {
  return msg.type === 'WIND_COV';
}
export function isGpsInput(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageGpsInput> {
  return msg.type === 'GPS_INPUT';
}
export function isGpsRtcmData(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageGpsRtcmData> {
  return msg.type === 'GPS_RTCM_DATA';
}
export function isHighLatency(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageHighLatency> {
  return msg.type === 'HIGH_LATENCY';
}
export function isHighLatency2(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageHighLatency2> {
  return msg.type === 'HIGH_LATENCY2';
}
export function isVibration(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageVibration> {
  return msg.type === 'VIBRATION';
}
export function isHomePosition(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageHomePosition> {
  return msg.type === 'HOME_POSITION';
}
export function isSetHomePosition(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageSetHomePosition> {
  return msg.type === 'SET_HOME_POSITION';
}
export function isMessageInterval(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageMessageInterval> {
  return msg.type === 'MESSAGE_INTERVAL';
}
export function isExtendedSysState(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageExtendedSysState> {
  return msg.type === 'EXTENDED_SYS_STATE';
}
export function isAdsbVehicle(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageAdsbVehicle> {
  return msg.type === 'ADSB_VEHICLE';
}
export function isCollision(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageCollision> {
  return msg.type === 'COLLISION';
}
export function isV2Extension(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageV2Extension> {
  return msg.type === 'V2_EXTENSION';
}
export function isMemoryVect(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageMemoryVect> {
  return msg.type === 'MEMORY_VECT';
}
export function isDebugVect(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageDebugVect> {
  return msg.type === 'DEBUG_VECT';
}
export function isNamedValueFloat(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageNamedValueFloat> {
  return msg.type === 'NAMED_VALUE_FLOAT';
}
export function isNamedValueInt(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageNamedValueInt> {
  return msg.type === 'NAMED_VALUE_INT';
}
export function isStatustext(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageStatustext> {
  return msg.type === 'STATUSTEXT';
}
export function isDebug(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageDebug> {
  return msg.type === 'DEBUG';
}
export function isSetupSigning(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageSetupSigning> {
  return msg.type === 'SETUP_SIGNING';
}
export function isButtonChange(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageButtonChange> {
  return msg.type === 'BUTTON_CHANGE';
}
export function isPlayTune(msg: MAVLinkMessage): msg is MAVLinkMessage<MessagePlayTune> {
  return msg.type === 'PLAY_TUNE';
}
export function isCameraInformation(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageCameraInformation> {
  return msg.type === 'CAMERA_INFORMATION';
}
export function isCameraSettings(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageCameraSettings> {
  return msg.type === 'CAMERA_SETTINGS';
}
export function isStorageInformation(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageStorageInformation> {
  return msg.type === 'STORAGE_INFORMATION';
}
export function isCameraCaptureStatus(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageCameraCaptureStatus> {
  return msg.type === 'CAMERA_CAPTURE_STATUS';
}
export function isCameraImageCaptured(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageCameraImageCaptured> {
  return msg.type === 'CAMERA_IMAGE_CAPTURED';
}
export function isFlightInformation(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageFlightInformation> {
  return msg.type === 'FLIGHT_INFORMATION';
}
export function isMountOrientation(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageMountOrientation> {
  return msg.type === 'MOUNT_ORIENTATION';
}
export function isLoggingData(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageLoggingData> {
  return msg.type === 'LOGGING_DATA';
}
export function isLoggingDataAcked(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageLoggingDataAcked> {
  return msg.type === 'LOGGING_DATA_ACKED';
}
export function isLoggingAck(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageLoggingAck> {
  return msg.type === 'LOGGING_ACK';
}
export function isVideoStreamInformation(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageVideoStreamInformation> {
  return msg.type === 'VIDEO_STREAM_INFORMATION';
}
export function isVideoStreamStatus(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageVideoStreamStatus> {
  return msg.type === 'VIDEO_STREAM_STATUS';
}
export function isCameraFovStatus(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageCameraFovStatus> {
  return msg.type === 'CAMERA_FOV_STATUS';
}
export function isCameraTrackingImageStatus(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageCameraTrackingImageStatus> {
  return msg.type === 'CAMERA_TRACKING_IMAGE_STATUS';
}
export function isCameraTrackingGeoStatus(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageCameraTrackingGeoStatus> {
  return msg.type === 'CAMERA_TRACKING_GEO_STATUS';
}
export function isCameraThermalRange(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageCameraThermalRange> {
  return msg.type === 'CAMERA_THERMAL_RANGE';
}
export function isGimbalManagerInformation(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageGimbalManagerInformation> {
  return msg.type === 'GIMBAL_MANAGER_INFORMATION';
}
export function isGimbalManagerStatus(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageGimbalManagerStatus> {
  return msg.type === 'GIMBAL_MANAGER_STATUS';
}
export function isGimbalManagerSetAttitude(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageGimbalManagerSetAttitude> {
  return msg.type === 'GIMBAL_MANAGER_SET_ATTITUDE';
}
export function isGimbalDeviceInformation(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageGimbalDeviceInformation> {
  return msg.type === 'GIMBAL_DEVICE_INFORMATION';
}
export function isGimbalDeviceSetAttitude(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageGimbalDeviceSetAttitude> {
  return msg.type === 'GIMBAL_DEVICE_SET_ATTITUDE';
}
export function isGimbalDeviceAttitudeStatus(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageGimbalDeviceAttitudeStatus> {
  return msg.type === 'GIMBAL_DEVICE_ATTITUDE_STATUS';
}
export function isAutopilotStateForGimbalDevice(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageAutopilotStateForGimbalDevice> {
  return msg.type === 'AUTOPILOT_STATE_FOR_GIMBAL_DEVICE';
}
export function isGimbalManagerSetPitchyaw(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageGimbalManagerSetPitchyaw> {
  return msg.type === 'GIMBAL_MANAGER_SET_PITCHYAW';
}
export function isGimbalManagerSetManualControl(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageGimbalManagerSetManualControl> {
  return msg.type === 'GIMBAL_MANAGER_SET_MANUAL_CONTROL';
}
export function isEscInfo(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageEscInfo> {
  return msg.type === 'ESC_INFO';
}
export function isEscStatus(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageEscStatus> {
  return msg.type === 'ESC_STATUS';
}
export function isWifiConfigAp(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageWifiConfigAp> {
  return msg.type === 'WIFI_CONFIG_AP';
}
export function isAisVessel(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageAisVessel> {
  return msg.type === 'AIS_VESSEL';
}
export function isUavcanNodeStatus(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageUavcanNodeStatus> {
  return msg.type === 'UAVCAN_NODE_STATUS';
}
export function isUavcanNodeInfo(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageUavcanNodeInfo> {
  return msg.type === 'UAVCAN_NODE_INFO';
}
export function isParamExtRequestRead(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageParamExtRequestRead> {
  return msg.type === 'PARAM_EXT_REQUEST_READ';
}
export function isParamExtRequestList(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageParamExtRequestList> {
  return msg.type === 'PARAM_EXT_REQUEST_LIST';
}
export function isParamExtValue(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageParamExtValue> {
  return msg.type === 'PARAM_EXT_VALUE';
}
export function isParamExtSet(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageParamExtSet> {
  return msg.type === 'PARAM_EXT_SET';
}
export function isParamExtAck(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageParamExtAck> {
  return msg.type === 'PARAM_EXT_ACK';
}
export function isObstacleDistance(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageObstacleDistance> {
  return msg.type === 'OBSTACLE_DISTANCE';
}
export function isOdometry(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageOdometry> {
  return msg.type === 'ODOMETRY';
}
export function isTrajectoryRepresentationWaypoints(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageTrajectoryRepresentationWaypoints> {
  return msg.type === 'TRAJECTORY_REPRESENTATION_WAYPOINTS';
}
export function isTrajectoryRepresentationBezier(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageTrajectoryRepresentationBezier> {
  return msg.type === 'TRAJECTORY_REPRESENTATION_BEZIER';
}
export function isCellularStatus(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageCellularStatus> {
  return msg.type === 'CELLULAR_STATUS';
}
export function isIsbdLinkStatus(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageIsbdLinkStatus> {
  return msg.type === 'ISBD_LINK_STATUS';
}
export function isCellularConfig(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageCellularConfig> {
  return msg.type === 'CELLULAR_CONFIG';
}
export function isRawRpm(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageRawRpm> {
  return msg.type === 'RAW_RPM';
}
export function isUtmGlobalPosition(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageUtmGlobalPosition> {
  return msg.type === 'UTM_GLOBAL_POSITION';
}
export function isDebugFloatArray(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageDebugFloatArray> {
  return msg.type === 'DEBUG_FLOAT_ARRAY';
}
export function isOrbitExecutionStatus(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageOrbitExecutionStatus> {
  return msg.type === 'ORBIT_EXECUTION_STATUS';
}
export function isSmartBatteryInfo(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageSmartBatteryInfo> {
  return msg.type === 'SMART_BATTERY_INFO';
}
export function isFuelStatus(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageFuelStatus> {
  return msg.type === 'FUEL_STATUS';
}
export function isBatteryInfo(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageBatteryInfo> {
  return msg.type === 'BATTERY_INFO';
}
export function isGeneratorStatus(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageGeneratorStatus> {
  return msg.type === 'GENERATOR_STATUS';
}
export function isActuatorOutputStatus(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageActuatorOutputStatus> {
  return msg.type === 'ACTUATOR_OUTPUT_STATUS';
}
export function isTimeEstimateToTarget(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageTimeEstimateToTarget> {
  return msg.type === 'TIME_ESTIMATE_TO_TARGET';
}
export function isTunnel(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageTunnel> {
  return msg.type === 'TUNNEL';
}
export function isCanFrame(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageCanFrame> {
  return msg.type === 'CAN_FRAME';
}
export function isOnboardComputerStatus(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageOnboardComputerStatus> {
  return msg.type === 'ONBOARD_COMPUTER_STATUS';
}
export function isComponentInformation(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageComponentInformation> {
  return msg.type === 'COMPONENT_INFORMATION';
}
export function isComponentInformationBasic(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageComponentInformationBasic> {
  return msg.type === 'COMPONENT_INFORMATION_BASIC';
}
export function isComponentMetadata(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageComponentMetadata> {
  return msg.type === 'COMPONENT_METADATA';
}
export function isPlayTuneV2(msg: MAVLinkMessage): msg is MAVLinkMessage<MessagePlayTuneV2> {
  return msg.type === 'PLAY_TUNE_V2';
}
export function isSupportedTunes(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageSupportedTunes> {
  return msg.type === 'SUPPORTED_TUNES';
}
export function isEvent(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageEvent> {
  return msg.type === 'EVENT';
}
export function isCurrentEventSequence(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageCurrentEventSequence> {
  return msg.type === 'CURRENT_EVENT_SEQUENCE';
}
export function isRequestEvent(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageRequestEvent> {
  return msg.type === 'REQUEST_EVENT';
}
export function isResponseEventError(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageResponseEventError> {
  return msg.type === 'RESPONSE_EVENT_ERROR';
}
export function isAvailableModes(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageAvailableModes> {
  return msg.type === 'AVAILABLE_MODES';
}
export function isCurrentMode(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageCurrentMode> {
  return msg.type === 'CURRENT_MODE';
}
export function isAvailableModesMonitor(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageAvailableModesMonitor> {
  return msg.type === 'AVAILABLE_MODES_MONITOR';
}
export function isIlluminatorStatus(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageIlluminatorStatus> {
  return msg.type === 'ILLUMINATOR_STATUS';
}
export function isCanfdFrame(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageCanfdFrame> {
  return msg.type === 'CANFD_FRAME';
}
export function isCanFilterModify(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageCanFilterModify> {
  return msg.type === 'CAN_FILTER_MODIFY';
}
export function isWheelDistance(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageWheelDistance> {
  return msg.type === 'WHEEL_DISTANCE';
}
export function isWinchStatus(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageWinchStatus> {
  return msg.type === 'WINCH_STATUS';
}
export function isOpenDroneIdBasicId(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageOpenDroneIdBasicId> {
  return msg.type === 'OPEN_DRONE_ID_BASIC_ID';
}
export function isOpenDroneIdLocation(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageOpenDroneIdLocation> {
  return msg.type === 'OPEN_DRONE_ID_LOCATION';
}
export function isOpenDroneIdAuthentication(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageOpenDroneIdAuthentication> {
  return msg.type === 'OPEN_DRONE_ID_AUTHENTICATION';
}
export function isOpenDroneIdSelfId(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageOpenDroneIdSelfId> {
  return msg.type === 'OPEN_DRONE_ID_SELF_ID';
}
export function isOpenDroneIdSystem(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageOpenDroneIdSystem> {
  return msg.type === 'OPEN_DRONE_ID_SYSTEM';
}
export function isOpenDroneIdOperatorId(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageOpenDroneIdOperatorId> {
  return msg.type === 'OPEN_DRONE_ID_OPERATOR_ID';
}
export function isOpenDroneIdMessagePack(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageOpenDroneIdMessagePack> {
  return msg.type === 'OPEN_DRONE_ID_MESSAGE_PACK';
}
export function isOpenDroneIdArmStatus(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageOpenDroneIdArmStatus> {
  return msg.type === 'OPEN_DRONE_ID_ARM_STATUS';
}
export function isOpenDroneIdSystemUpdate(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageOpenDroneIdSystemUpdate> {
  return msg.type === 'OPEN_DRONE_ID_SYSTEM_UPDATE';
}
export function isHygrometerSensor(msg: MAVLinkMessage): msg is MAVLinkMessage<MessageHygrometerSensor> {
  return msg.type === 'HYGROMETER_SENSOR';
}
