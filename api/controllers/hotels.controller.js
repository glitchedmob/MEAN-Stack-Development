const mongoose = require('mongoose');
const Hotel = mongoose.model('Hotel');
const helpers = require('./helpers');


function runGeoQuery(req, res) {
	const lng = parseFloat(req.query.lng);
	const lat = parseFloat(req.query.lat);

	if(isNaN(lng) | isNaN(lat)) {
		res
			.status(400)
			.json({ "message": "Latitude and Longitude must both be numbers"});
		return;
	}

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

			const response = {
				status: 200,
				message: results
			}

			if(err) {
				response.status = 400;
				response.message = err;
			}

			res
				.status(response.status)
				.json(response.message);
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
	

	Hotel
		.create({
			name: req.body.name,
			description: req.body.description,
			stars: parseInt(req.body.stars, 10),
			services: helpers.splitArray(req.body.services, ';'),
			photos: helpers.splitArray(req.body.photos, ';'),
			currency: req.body.currency,
			location: {
				address: req.body.address,
				coordinates: [
					parseFloat(req.body.lng),
					parseFloat(req.body.lat)
				]
			}
		}, (err, hotel) => {
			res
				.status(!err ? 201: 400)
				.json(!err ? hotel: err);
		});
}

module.exports.update = (req, res) => {
	const hotelId = req.params.hotelId;
	
	Hotel
		.findById(hotelId)
		.select('-reviews -rooms')
		.exec((err, hotel) => {
			const response = {
				status: 200,
				message: hotel
			}

			if(err) {
				response.status = 400;
				response.message = err;
			} else if (!hotel) {
				response.status = 404;
				response.message = { "message": `Hotel with id ${hotelId} not found`}
			}

			if (response.status !== 200) {
				res
					.status(response.status)
					.json(response.message);
			} else {
				hotel.name = req.body.name;
				hotel.description = req.body.description;
				hotel.stars = parseInt(req.body.stars, 10);
				hotel.services = helpers.splitArray(req.body.services, ';');
				hotel.photos = helpers.splitArray(req.body.photos, ';');
				hotel.currency = req.body.currency;
				hotel.location = {
					address: req.body.address,
					coordinates: [
						parseFloat(req.body.lng),
						parseFloat(req.body.lat)
					]
				}


				hotel.save((err, updatedHotel) => {
					if(err) {
						res
							.status(500)
							.json(err);
					} else {
						res
							.status(204)
							.json();
					}
				});
			}
		});
}

module.exports.delete = (req, res) => {
	const hotelId = req.params.hotelId;
	
	Hotel
		.findByIdAndRemove(hotelId)
		.exec((err, hotel) => {
			if(err) {
				res
					.status(404)
					.json(err);
			} else {
				res
					.status(204)
					.json();
			}
		});
}