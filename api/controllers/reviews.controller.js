const mongoose = require('mongoose');
const Hotel = mongoose.model('Hotel');

module.exports.index = (req, res) => {
	const hotelId = req.params.hotelId;
	
	Hotel
		.findById(hotelId)
		.select('reviews')
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

			res
				.status(response.status)
				.json(response.message);
		});	
}

module.exports.show = (req, res) => {
	const hotelId = req.params.hotelId;
	const reviewId = req.params.reviewId;

	Hotel
	.findById(hotelId)
	.select('reviews')
	.exec((err, hotel) => {
		const response = {
			status: 200,
			message: hotel
		}

		if(err) {
			response.status = 400;
			response.message = err;
		}

		response.message = hotel.reviews.id(reviewId);
		console.log(`Found review with id: ${reviewId}`);
		res
			.status(response.status)
			.json(response.message);
	});	
}

function addReview(req, res, hotel) {
	hotel.reviews.push({
		name: req.body.name,
		rating: parseInt(req.body.rating, 10),
		review: req.body.review
	});

	hotel
		.save((err, updatedHotel) => {
			if(err) {
				res
					.status(500)
					.json(err);
			} else {
				res
					.status(201)
					.json(updatedHotel.reviews[updatedHotel.reviews.length - 1]);
			}
		});
}

module.exports.create = (req, res) => {
	const hotelId = req.params.hotelId;
	
	Hotel
		.findById(hotelId)
		.select('reviews')
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

			if(hotel) {
				addReview(req, res, hotel)
			} else {
				res
				.status(response.status)
				.json(response.message);
			}
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
				
			}

		});	
}