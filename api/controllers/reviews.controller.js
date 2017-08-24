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

module.exports.show = (req, res) => {
	const hotelId = req.params.hotelId;
	const reviewId = req.params.reviewId;

	Hotel
	.findById(hotelId)
	.select('reviews')
	.exec((err, hotel) => {
		const response = {
			status: 200,
			message: results
		}

		if(err) {
			response.status = 400;
			response.message = err;
		}

		const review = hotel.reviews.id(reviewId);
		console.log(`Found review with id: ${reviewId}`);
		res
			.status(response.status)
			.json(response.message);
	});	
}
