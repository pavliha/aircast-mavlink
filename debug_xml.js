const xml2js = require('xml2js');
let xmlData = '';
process.stdin.on('data', chunk => xmlData += chunk);
process.stdin.on('end', () => {
  xml2js.parseString(xmlData, { explicitArray: true }, (err, result) => {
    if (err) throw err;
    const messages = result.mavlink.messages[0].message;
    const gpsMessage = messages.find(m => m.$.name === 'GPS_RAW_INT');
    if (gpsMessage) {
      console.log('GPS_RAW_INT with explicitArray=true:');
      console.log('Has extensions:', gpsMessage.extensions ? 'YES' : 'NO');
      console.log('Extensions value:', gpsMessage.extensions);
      
      // Check the raw elements
      console.log('\nMessage elements:');
      Object.keys(gpsMessage).forEach(key => {
        if (key !== '$') {
          console.log(`${key}:`, Array.isArray(gpsMessage[key]) ? `Array[${gpsMessage[key].length}]` : typeof gpsMessage[key]);
        }
      });
      
      console.log('\nFields:');
      gpsMessage.field.forEach((field, i) => {
        console.log(`${i}: ${field.$.name} (${field.$.type})`);
      });
    }
  });
});