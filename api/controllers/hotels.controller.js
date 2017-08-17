const hotelData = require('../data/hotel-data.json');

module.exports.index = (req, res) => {
	console.log("GET the hotels");

	const offset = req.query && req.query.offset ? parseInt(req.query.offset) : 0;
	const count = req.query && req.query.count ? parseInt(req.query.count) : 5;

	console.log("offset:count", offset, count);

	const hotels = hotelData.slice(offset, offset + count);

	res.status(200)
		.json(hotels);
}

module.exports.show = (req, res) => {
	const hotelId = req.params.hotelId;
	const hotel = hotelData[hotelId];

	console.log(`GET hotelId: ${hotelId}`);

	res.status(200)
		.json(hotel);
}

module.exports.create = (req, res) => {
	console.log("Post new hotel");
	console.log(req.body);
	
	res
		.status(200)
		.json(req.body);
}

