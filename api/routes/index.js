const express = require('express');
const router = express.Router();

const ctrlHotels = require('../controllers/hotels.controller.js');

router
	.route('/hotels')
	.get(ctrlHotels.index);

router
	.route('/hotels/:hotelId')
	.get(ctrlHotels.show);

router
	.route('/hotels')
	.post(ctrlHotels.create)

module.exports = router;