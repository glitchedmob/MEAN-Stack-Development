const fs = require('fs');

console.log('preparing to read file');

fs.readFile('readFileSync.js', onFileLoad);

function onFileLoad(err, file) {
	console.log(file);
}

console.log('app continues..');