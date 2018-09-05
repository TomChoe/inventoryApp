// routing of data

const productRouter = require('express').Router();

const productController = require('../controllers/productController');

productRouter.get('/', productController.index);


module.exports = productRouter;