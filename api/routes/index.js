const express = require('express');
const router = express.Router();

const ctrlHotels = require('../controllers/hotels.controller.js');
const ctrlReviews = require('../controllers/reviews.controller.js');


// Hotel routes
router
	.route('/hotels')
	.get(ctrlHotels.index)
	.post(ctrlHotels.create);

router
	.route('/hotels/:hotelId')
	.get(ctrlHotels.show)
	.put(ctrlHotels.update)
	.delete(ctrlHotels.delete);

// Review routes
router
	.route('/hotels/:hotelId/reviews')
	.get(ctrlReviews.index)
	.post(ctrlReviews.create);

router
	.route('/hotels/:hotelId/reviews/:reviewId')
	.get(ctrlReviews.show)
	.put(ctrlReviews.update)
	.delete(ctrlReviews.delete);

module.exports = router;