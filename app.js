const express = require('express');
const logger = require('morgan');

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

const app = express();

app.use(logger('dev'));

app.get('/', (req, res) => {
	res.json({message: "server started"})
});

app.use('*', (req, res) => {
	res.status(400).json({
		error: 'Error, not found'
	});
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT} in ${NODE_ENV}`)
});