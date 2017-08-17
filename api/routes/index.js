const express = require('express');
const router = express.Router();

const ctrlHotels = require('../controllers/hotels.controller.js');

router
	.route('/hotels')
	.get(ctrlHotels.hotelsGetAll);

module.exports = router;