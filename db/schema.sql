### Schema
CREATE DATABASE burger_db;
USE burger_db;
CREATE TABLE burgers (
    id INTEGER NOT NULL Auto_Increment,
    burger_name VARCHAR(200) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);
