var express = require('express');
var app = express();
var path = require('path');

var routes = require('./routes');

app.set("port", 3000);

app.use('/', function(req, res, next) {
	console.log(req.method, req.url);
	next();
});

//Route the public folder as the root
app.use(express.static(path.join(__dirname, "public")));

//This pulls in the routes defined in the routes folder
app.use("/api", routes)

var server = app.listen(app.get("port"), function() {
	var port = server.address().port;
	console.log("Magic happens on port " + port);
});
