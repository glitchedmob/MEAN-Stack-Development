const hotelData = require('../data/hotel-data.json');
const dbconn = require('../data/dbconnection.js');
const ObjectID = require('mongodb').ObjectId;

module.exports.index = (req, res) => {
	const db = dbconn.get();
	const collection = db.collection('hotels');

	const offset = req.query && req.query.offset ? parseInt(req.query.offset) : 0;
	const count = req.query && req.query.count ? parseInt(req.query.count) : 5;

	collection
		.find()
		.skip(offset)
		.limit(count)
		.toArray((err, docs) => {
			res
			.status(400)
			.json(docs);
		});

}

module.exports.show = (req, res) => {
	const db = dbconn.get();
	const collection = db.collection('hotels');

	const hotelId = req.params.hotelId;
	console.log(`GET hotelId: ${hotelId}`);

	collection
		.findOne({
			_id: ObjectID(hotelId)
		}, (err, doc) => {
			res.status(200)
			.json(doc);
		});

}

module.exports.create = (req, res) => {
	const db = dbconn.get();
	console.log("Post new hotel");
	console.log(req.body);
	
	res
		.status(200)
		.json(req.body);
}

