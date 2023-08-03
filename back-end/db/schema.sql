DROP DATABASE IF EXISTS receipes_dev;
CREATE DATABASE receipes_dev;

\c receipes_dev;
CREATE TABLE recipes(
    id SERIAL PRIMARY KEY,
    name varchar(30) NOT NULL,
    ingredients text NOT NULL,
    prep_time integer,
    cook_time integer,
    serving_size integer,
    date date,
    instructions text,
    category text,
    is_favorite boolean,
    origin text
);