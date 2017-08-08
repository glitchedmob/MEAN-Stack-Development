const filename = 'index.js';

function hello(name) {
	console.log(`Hello ${name}`);
}

function intro() {
	console.log(`I'm a node file called ${filename}`);
}

module.exports = {hello, intro}