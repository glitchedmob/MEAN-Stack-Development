var express = require('express');
var app = express();

app.set("port", 3000);

app.get("/", function(req, res) {
	console.log("GET the homepage");
	res.send("Express yourself!<a href=\"http://www.google.com\">Google</a>")
});

var server = app.listen(app.get("port"), function() {
	var port = server.address().port;
	console.log("Magic happens on port " + port);
});
