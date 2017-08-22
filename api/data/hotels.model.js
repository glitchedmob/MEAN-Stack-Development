const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	stars: {
		type: Number,
		min: 0,
		max: 5,
		default: 0
	},
	description: String,
	photos: [String],
	currency: String,
	services: [String],
});

// Third argument specifies mongodb collection name.
// This is optional, mongoose will defaultly use the 
// model name (first argument) lower cased and plurarlized
mongoose.model('Hotel', hotelSchema);