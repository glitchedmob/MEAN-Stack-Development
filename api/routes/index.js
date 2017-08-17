const express = require('express');
const router = express.Router();

const ctrlHotels = require('../controllers/hotels.controller.js');

router
	.route('/hotels')
	.get(ctrlHotels.getAllHotels);

router
	.route('/hotels/:hotelId')
	.get(ctrlHotels.getHotel);

module.exports = router;