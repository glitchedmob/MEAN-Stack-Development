const child_process = require('child_process');

console.log(1);

const newProcess = child_process.spawn('node', ['_fibonacci.js'], {stdio: 'inherit'});
const newProcess2 = child_process.spawn('node', ['_fibonacci.js'], {stdio: 'inherit'});

console.log(2);

