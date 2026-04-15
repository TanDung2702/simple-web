const fs = require('fs');

const file = 'coverage/lcov.info';
let content = fs.readFileSync(file, 'utf8');

// replace \ thành /
content = content.replace(/\\/g, '/');

fs.writeFileSync(file, content);

console.log('Fixed coverage path!');