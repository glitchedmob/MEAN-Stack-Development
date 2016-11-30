var express = require('express');
var router = express.Router();

router
	.route("/json")
	.get(function(req, res) {
		console.log("GET the JSON");
		res
			.status(200)
			.json( {"JSONData" : true} )
	})
	.post(function(req, res) {
		console.log("POST the JSON router");
		res
			.status(200)
			.json( {"JSONData" : "POST recieved"} )
	});

module.exports = router;