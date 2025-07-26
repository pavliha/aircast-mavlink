/**
 * Shared test message fixtures
 * Provides reusable message objects for testing with sensible defaults
 */

export interface MessageOverrides {
  message_name?: string
  system_id?: number
  component_id?: number
  sequence?: number
  payload?: Record<string, unknown>
  [key: string]: unknown
}

export const testMessages = {
  /**
   * HEARTBEAT message with standard test values
   */
  heartbeat: (overrides: MessageOverrides = {}) => ({
    message_name: 'HEARTBEAT',
    system_id: 1,
    component_id: 1,
    sequence: 0,
    payload: {
      type: 6,
      autopilot: 8,
      base_mode: 81,
      custom_mode: 12345,
      system_status: 4,
      mavlink_version: 3,
      ...(overrides.payload || {}),
    },
    ...overrides,
  }),

  /**
   * SYS_STATUS message with typical system health values
   */
  sysStatus: (overrides: MessageOverrides = {}) => ({
    message_name: 'SYS_STATUS',
    system_id: 1,
    component_id: 1,
    sequence: 5,
    payload: {
      onboard_control_sensors_present: 0x3fffffff,
      onboard_control_sensors_enabled: 0x1fffffff,
      onboard_control_sensors_health: 0x0fffffff,
      load: 500,
      voltage_battery: 11800,
      current_battery: 1500,
      battery_remaining: 85,
      drop_rate_comm: 12,
      errors_comm: 5,
      errors_count1: 0,
      errors_count2: 0,
      errors_count3: 0,
      errors_count4: 0,
      ...(overrides.payload || {}),
    },
    ...overrides,
  }),

  /**
   * GPS_RAW_INT message with realistic GPS coordinates
   */
  gpsRawInt: (overrides: MessageOverrides = {}) => ({
    message_name: 'GPS_RAW_INT',
    system_id: 1,
    component_id: 1,
    sequence: 10,
    payload: {
      time_usec: BigInt('1234567890123456'),
      fix_type: 3,
      lat: 473977420, // 47.3977420° (Seattle area)
      lon: 85345200, // 8.5345200° (Swiss area)
      alt: 54321,
      eph: 150,
      epv: 200,
      vel: 1250,
      cog: 18500,
      satellites_visible: 12,
      ...(overrides.payload || {}),
    },
    ...overrides,
  }),

  /**
   * STATUSTEXT message for status reporting
   */
  statusText: (text = 'System initialized successfully', overrides: MessageOverrides = {}) => ({
    message_name: 'STATUSTEXT',
    system_id: 1,
    component_id: 1,
    sequence: 15,
    payload: {
      severity: 6,
      text,
      ...(overrides.payload || {}),
    },
    ...overrides,
  }),

  /**
   * GLOBAL_POSITION_INT message with position and velocity
   */
  globalPositionInt: (overrides: MessageOverrides = {}) => ({
    message_name: 'GLOBAL_POSITION_INT',
    system_id: 1,
    component_id: 1,
    sequence: 0,
    payload: {
      time_boot_ms: 0,
      lat: -900000000,
      lon: -1800000000,
      alt: -1000,
      relative_alt: 500,
      vx: -32768,
      vy: -32768,
      vz: -32768,
      hdg: 36000,
      ...(overrides.payload || {}),
    },
    ...overrides,
  }),

  /**
   * ATTITUDE message with orientation data
   */
  attitude: (overrides: MessageOverrides = {}) => ({
    message_name: 'ATTITUDE',
    system_id: 1,
    component_id: 1,
    sequence: 0,
    payload: {
      time_boot_ms: 123456,
      roll: 0.1,
      pitch: -0.05,
      yaw: 1.57,
      rollspeed: 0.01,
      pitchspeed: -0.02,
      yawspeed: 0.03,
      ...(overrides.payload || {}),
    },
    ...overrides,
  }),

  /**
   * RC_CHANNELS message with remote control data
   */
  rcChannels: (overrides: MessageOverrides = {}) => ({
    message_name: 'RC_CHANNELS',
    system_id: 1,
    component_id: 1,
    sequence: 0,
    payload: {
      time_boot_ms: 123456,
      chancount: 8,
      chan1_raw: 1500,
      chan2_raw: 1500,
      chan3_raw: 1000,
      chan4_raw: 1500,
      chan5_raw: 1000,
      chan6_raw: 1000,
      chan7_raw: 1000,
      chan8_raw: 1000,
      chan9_raw: 0,
      chan10_raw: 0,
      chan11_raw: 0,
      chan12_raw: 0,
      chan13_raw: 0,
      chan14_raw: 0,
      chan15_raw: 0,
      chan16_raw: 0,
      chan17_raw: 0,
      chan18_raw: 0,
      rssi: 255,
      ...(overrides.payload || {}),
    },
    ...overrides,
  }),

  /**
   * MEMINFO message for ArduPilot Mega dialect
   */
  meminfo: (overrides: MessageOverrides = {}) => ({
    message_name: 'MEMINFO',
    system_id: 1,
    component_id: 1,
    sequence: 0,
    payload: {
      brkval: 0, // Default values as per serializer behavior
      freemem: 0,
      freemem32: 0,
      ...(overrides.payload || {}),
    },
    ...overrides,
  }),

  /**
   * SENSOR_OFFSETS message for ArduPilot Mega dialect
   */
  sensorOffsets: (overrides: MessageOverrides = {}) => ({
    message_name: 'SENSOR_OFFSETS',
    system_id: 1,
    component_id: 1,
    sequence: 0,
    payload: {
      mag_ofs_x: 0, // Default values as per serializer behavior
      mag_ofs_y: 0,
      mag_ofs_z: 0,
      mag_declination: 0,
      raw_press: 0,
      raw_temp: 0,
      gyro_cal_x: 0,
      gyro_cal_y: 0,
      gyro_cal_z: 0,
      accel_cal_x: 0,
      accel_cal_y: 0,
      accel_cal_z: 0,
      ...(overrides.payload || {}),
    },
    ...overrides,
  }),
}

/**
 * Edge case test data for boundary testing
 */
export const edgeCaseMessages = {
  /**
   * HEARTBEAT with maximum values
   */
  heartbeatMaxValues: () =>
    testMessages.heartbeat({
      system_id: 255,
      component_id: 255,
      sequence: 255,
      payload: {
        type: 255,
        autopilot: 255,
        base_mode: 255,
        custom_mode: 4294967295,
        system_status: 255,
        mavlink_version: 3,
      },
    }),

  /**
   * HEARTBEAT with zero values
   */
  heartbeatZeroValues: () =>
    testMessages.heartbeat({
      system_id: 0,
      component_id: 0,
      sequence: 0,
      payload: {
        type: 0,
        autopilot: 0,
        base_mode: 0,
        custom_mode: 0,
        system_status: 0,
        mavlink_version: 3,
      },
    }),

  /**
   * GPS with extreme coordinate values
   */
  gpsExtremeValues: () =>
    testMessages.gpsRawInt({
      payload: {
        time_usec: BigInt('18446744073709551615'),
        fix_type: 255,
        lat: 2147483647,
        lon: -2147483648,
        alt: 54321,
        eph: 65535,
        epv: 200,
        vel: 1250,
        cog: 18500,
        satellites_visible: 255,
      },
    }),

  /**
   * STATUSTEXT with maximum length text
   */
  statusTextMaxLength: () => testMessages.statusText('A'.repeat(50)),
}

/**
 * Multi-message test sequences
 */
export const messageSequences = {
  /**
   * Basic system startup sequence
   */
  systemStartup: () => [
    testMessages.heartbeat({ sequence: 0 }),
    testMessages.sysStatus({ sequence: 1 }),
    testMessages.statusText('System ready', { sequence: 2 }),
  ],

  /**
   * Navigation data sequence
   */
  navigationData: () => [
    testMessages.gpsRawInt({ sequence: 10 }),
    testMessages.attitude({ sequence: 11 }),
    testMessages.globalPositionInt({ sequence: 12 }),
  ],
}
