\c inventory;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
	id SERIAL PRIMARY KEY,
	product_name VARCHAR(255),
	product_quantity INTEGER,
	date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX ON products (product_Name);