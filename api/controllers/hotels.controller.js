const mongoose = require('mongoose');
const Hotel = mongoose.model('Hotel');


function runGeoQuery(req, res) {
	const lng = parseFloat(req.query.lng);
	const lat = parseFloat(req.query.lat);

	const point = {
		type: "Point",
		coordinates: [lng, lat]
	}

	const geoOptions = {
		spherical: true,
		maxDistance: 2000,
		num: 5
	}

	Hotel
		.geoNear(point, geoOptions, (err, results, stats) => {
			console.log(`Geo results ${results}`);
			console.log(`Geo stats ${stats}`);

			res
				.status(200)
				.json(results);
		});
}

module.exports.index = (req, res) => {

	const offset = req.query && req.query.offset ? parseInt(req.query.offset) : 0;
	const count = req.query && req.query.count ? parseInt(req.query.count) : 5;
	const maxCount = 10;

	if(req.query && req.query.lat && req.query.lng) {
		runGeoQuery(req, res);
		return;
	}

	if(isNaN(offset) || isNaN(count)) {
		res
			.status(400)
			.json({
				"message": "Both count and offset must be numbers"
			});
		return;
	}

	if(count > maxCount) {
		res
			.status(400)
			.json({
				"message": `Count limit of ${maxCount} exceeded`
			});
		return;
	}

	Hotel
		.find()
		.skip(offset)
		.limit(count)
		.exec((err, hotels) => {
			if(err) {
				res
					.status(500)
					.json(err);
			} else {
				console.log(`Found ${hotels.length} hotels`);
				res
					.status(200)
					.json(hotels);
			}
		});
}

module.exports.show = (req, res) => {

	const hotelId = req.params.hotelId;

	Hotel
		.findById(hotelId)
		.exec((err, hotel) => {
			const response = {
				status: 200,
				message: hotel
			}

			if(err) {
				response.status = 500;
				response.message = err;
			} else if(!hotel) {
				response.status = 404;
				response.message = { "message": "Hotel ID not found" };
			}

			res
				.status(response.status)
				.json(response.message);
		});
}

module.exports.create = (req, res) => {
	const db = dbconn.get();
	const collection = db.collection('hotels');
	let newHotel;

	console.log("POST new hotel");

	if(req.body && req.body.name && req.body.stars) {
		newHotel = req.body;
		newHotel.stars = parseInt(req.body.stars);

		collection.insertOne(newHotel, (err, response) => {
			console.log(response.ops);
			res
				.status(201)
				.json(response.ops);

		});

	} else {
		console.log("Data missing from body");

		res
			.status(400)
			.json({message: "Required data missing from body"});

	}	
}

