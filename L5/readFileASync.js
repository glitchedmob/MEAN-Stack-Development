var fs = require("fs");

function onFileLoad(err, file) {
	console.log("Got the file")
}

console.log("Going to get a file");

//This fetches a file asynchronously
fs.readFile("readFileSync.js", onFileLoad);

console.log("App continues...");


