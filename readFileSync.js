const fs = require('fs');
console.log('preparing to read file');
const file = fs.readFileSync('readFileSync.js');
console.log('file has been read');

console.log('app continues..');