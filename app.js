const express = require('express');
const app = express();

app.set('port', 3000);

const server = app.listen(app.get('port'), () => {
	const port = server.address().port;
	console.log(`Magic happens on port ${port}`);
});

console.log('Me first');