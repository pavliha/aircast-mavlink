// Let's analyze the GPS_RAW_INT message structure
const coreFields = [
  'time_usec',      // uint64_t = 8 bytes  
  'fix_type',       // uint8_t = 1 byte
  'lat',            // int32_t = 4 bytes
  'lon',            // int32_t = 4 bytes
  'alt',            // int32_t = 4 bytes
  'eph',            // uint16_t = 2 bytes
  'epv',            // uint16_t = 2 bytes
  'vel',            // uint16_t = 2 bytes
  'cog',            // uint16_t = 2 bytes
  'satellites_visible' // uint8_t = 1 byte
];

const extensionFields = [
  'alt_ellipsoid',  // int32_t = 4 bytes
  'h_acc',          // uint32_t = 4 bytes
  'v_acc',          // uint32_t = 4 bytes
  'vel_acc',        // uint32_t = 4 bytes
  'hdg_acc',        // uint32_t = 4 bytes
  'yaw'             // uint16_t = 2 bytes
];

let coreSize = 0;
coreFields.forEach(field => {
  if (field === 'time_usec') coreSize += 8;
  else if (field === 'fix_type' || field === 'satellites_visible') coreSize += 1;
  else if (field === 'lat' || field === 'lon' || field === 'alt') coreSize += 4;
  else if (field === 'eph' || field === 'epv' || field === 'vel' || field === 'cog') coreSize += 2;
});

let extensionSize = 0;
extensionFields.forEach(field => {
  if (field === 'yaw') extensionSize += 2;
  else extensionSize += 4; // all others are 4 bytes
});

console.log('GPS_RAW_INT Message Analysis:');
console.log('Core fields:', coreFields.length, 'fields');
console.log('Core payload size:', coreSize, 'bytes'); 
console.log('Extension fields:', extensionFields.length, 'fields');
console.log('Extension payload size:', extensionSize, 'bytes');
console.log('Total size:', coreSize + extensionSize, 'bytes');
console.log();
console.log('Expected by Go validator: 30 bytes');
console.log('Our current output: 52 bytes (from test output)');
console.log('Difference:', 52 - 30, 'bytes');
