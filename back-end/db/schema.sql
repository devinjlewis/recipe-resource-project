DROP DATABASE IF EXISTS recipes_dev;
CREATE DATABASE recipes_dev;

\c recipes_dev;

CREATE TABLE categories(
    id SERIAL PRIMARY KEY,
    category_name text not null
);

CREATE TABLE recipes(
    id SERIAL PRIMARY KEY,
    name varchar(30) NOT NULL,
    ingredients text NOT NULL,
    prep_time integer,
    cook_time integer,
    serving_size integer,
    date date,
    instructions text,
    category_id INTEGER REFERENCES categories (id)
 ON DELETE CASCADE,
    is_favorite boolean,
    origin text
);