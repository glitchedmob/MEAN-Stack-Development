const MongoClient = require('mongodb').MongoClient;

const config = {
	host: 'localhost',
	port: '27017',
	db: 'meanhotel'
}

const dburl = `mongodb://${config.host}:${config.port}/${config.db}`;
let connection = null;

function open() {
	MongoClient.connect(dburl, (err, db) => {
		if(err) {
			console.log(`Unable to connect to ${dburl}`);
			return;
		}

		connection = 
	});
}

function get() {
	return connection
}

module.exports = {
	open,
	get
}