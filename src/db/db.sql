CREATE DATABASE ecommerce;

CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(510),
    price DECIMAL(10, 2),
    category VARCHAR(255),
    image VARCHAR(255)
);