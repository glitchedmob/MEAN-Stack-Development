const express = require('express');
const path = require('path');
const app = express();

app.set('port', 3000);


app.get('/', (req, res) => {
	res.status(200)
		.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/json', (req, res) => {
	res.status(200)
		.json({jsonData: true});
});

app.get('/html', (req, res) => {
	res.status(200)
		.sendFile(path.join(__dirname, 'public/index.html'));
});

const server = app.listen(app.get('port'), () => {
	const port = server.address().port;
	console.log(`Magic happens on port ${port}`);
});