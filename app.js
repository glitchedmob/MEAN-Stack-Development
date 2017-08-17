const express = require('express');
const path = require('path');
const app = express();

app.set('port', 3000);

app.use((req, res, next) => {
	console.log(req.method, req.url);
	next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/json', (req, res) => {
	res.status(200)
		.json({jsonData: true});
});

const server = app.listen(app.get('port'), () => {
	const port = server.address().port;
	console.log(`Magic happens on port ${port}`);
});