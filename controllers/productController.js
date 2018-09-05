// product controller that interacts with model

const productDB = require('../models/inventoryDB');

module.exports = {
	index(req, res) {
		productDB.findAll()
		  .then((products) => {
		  	res.json(products)
		  })
		  .catch((err) => console.log('error getting products'));
	},

	getProduct(req, res) {
		productDB.findProduct(req.params.id)
		  .then(product => {
		  	res.json(product)
		  })
		  .catch(err => console.log('error getting one'))
	},

	create(req, res) {
		productDB.saveProduct(req.body)
		  .then(product => {
		  	res.json(product)
		  })
		  .catch(err => console.log('error creating'))
	},

	update(req, res) {
		productDB.updateProduct(req.body)
		  .then(product => {
		  	res.json(product)
		  })
		  .catch(err => console.log('error updating product', err));
	},

	delete(req, res) {
		productDB.deleteProduct(req.params.id)
		  .then(() => console.log('deleted product'))
		  .catch(err => console.log('error deleting'))
	}
}