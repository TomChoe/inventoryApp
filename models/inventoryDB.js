// getting data from DB

const db = require('../config/connection');

module.exports = {
	findAll() {
		return db.any('SELECT * FROM products ORDER BY id')
	},

	saveProduct(product) {
		return db.one(`INSERT INTO products (product_name, product_quantity)
					   VALUES ($/product_name/, $/product_quantity/
					   RETURNING *`, product);
	},

	updateProduct(product) {
		return db.one(`UPDATE products SET
				  	   product_name = $/product_name/,
				   	   product_quantity = $/product_quantity/
				   	   WHERE id = $/id/
				   	   RETURNING *`, product)
	},

	deleteProduct(id) {
		return db.none(`DELETE FROM products WHERE id = $1`, id)
	}
}