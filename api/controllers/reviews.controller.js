const mongoose = require('mongoose');
const Hotel = mongoose.model('Hotel');

module.exports.index = (req, res) => {
	const hotelId = req.params.hotelId;
	
	Hotel
		.findById(hotelId)
		.select('reviews')
		.exec((err, hotel) => {
			console.log(`Found hotel with id: ${hotelId}`);
			res
				.status(200)
				.json(hotel.reviews);
		});	
}

module.exports.show = (req, res) => {
	const hotelId = req.params.hotelId;
	const reviewId = req.params.reviewId;

	Hotel
	.findById(hotelId)
	.select('reviews')
	.exec((err, hotel) => {
		const review = hotel.reviews.id(reviewId);
		console.log(`Found review with id: ${reviewId}`);
		res
			.status(200)
			.json(review);
	});	
}
