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

	update(req, res) {
		productDB.updateProduct()
		  .then(product => {
		  	res.json(product)
		  })
		  .catch(err => console.log('error updating product'));
	}
}