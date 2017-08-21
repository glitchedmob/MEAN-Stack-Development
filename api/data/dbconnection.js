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
			console.log(err);
			return;
		}

		connection = db;
		console.log('DB connection saved successfuly', db); 
	});
}

function get() {
	return connection
}

module.exports = {
	open,
	get
}