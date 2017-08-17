const hotelData = require('../data/hotel-data.json');

module.exports.getAllHotels = (req, res) => {
	console.log("GET the hotels");
	res.status(200)
		.json(hotelData);
}

module.exports.getHotel = (req, res) => {
	const hotelId = req.params.hotelId;
	const hotel = hotelData[hotelId];
	console.log(`GET hotelId: ${hotelId}`);
	res.status(200)
		.json(hotel);
}