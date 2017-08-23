const express = require('express');
const router = express.Router();

const ctrlHotels = require('../controllers/hotels.controller.js');
const ctrlReviews = require('../controllers/reviews.controller.js');


// Hotel routes
router
	.route('/hotels')
	.get(ctrlHotels.index);

router
	.route('/hotels/:hotelId')
	.get(ctrlHotels.show);

router
	.route('/hotels')
	.post(ctrlHotels.create);

// Review routes

router
	.route('/hotels/:hotelId/reviews')
	.get(ctrlReviews.index);

router
	.route('/hotels/:hotelId/reviews/:reviewId')
	.get(ctrlReviews.show);

module.exports = router;