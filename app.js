// bringing in express & logger
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// router
const productRouter = require('./routes/productRoutes');

// setting up development port & environment
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

const app = express();

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

// ROUTES
app.use('/inventory', productRouter);

app.get('/', (req, res) => {
	res.json({message: "server started"})
});

app.use('*', (req, res) => {            // route error handling
	res.status(400).json({
		error: 'Error, not found'
	});
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT} in ${NODE_ENV}`)
});