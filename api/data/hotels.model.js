const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	rating: {
		type: Number,
		min: 0,
		max: 5,
		required: true
	},
	review: {
		type: String,
		required: true
	},
	createdOn: {
		type: Date,
		default: Date.now
	}
});

const roomSchema = new mongoose.Schema({
	type: String,
	number: Number,
	description: String,
	photos: [String],
	price: Number
});

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
	reviews:	[reviewSchema],
	rooms: [roomSchema],
	location: {
		address: String,
		coordinates: {
			type: [Number]
		}
		// Always store coordinates longitude [E/W], latitude [N/S] order
	}
});



// Third argument specifies mongodb collection name.
// This is optional, mongoose will defaultly use the 
// model name (first argument) lower cased and plurarlized
mongoose.model('Hotel', hotelSchema);