DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS test;

CREATE TABLE plants (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    image TEXT,
    botanicalName TEXT,
    price INT,
    low_light BOOLEAN
);
