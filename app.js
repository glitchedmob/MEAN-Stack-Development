const express = require('express');
const path = require('path');
const routes = require('./api/routes');
const app = express();

app.set('port', 3000);

app.use((req, res, next) => {
	console.log(req.method, req.url);
	next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);

const server = app.listen(app.get('port'), () => {
	const port = server.address().port;
	console.log(`server running at http://localhost:${port}/`);
});