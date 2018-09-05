// routing of data

const productRouter = require('express').Router();

const productController = require('../controllers/productController');

const view = require('../controllers/viewController');

productRouter.get('/', productController.index);

productRouter.post('/', productController.create);

productRouter.get('/:id', productController.getProduct);

productRouter.put('/:id', productController.update);

productRouter.delete('/:id', productController.delete);

module.exports = productRouter;