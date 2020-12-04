DROP DATABASE IF EXISTS flixdeets;
CREATE DATABASE flixdeets;

\c flixdeets;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS movie_likes CASCADE;

CREATE TABLE users  (
    user_id VARCHAR PRIMARY KEY NOT NULL,
    email VARCHAR NOT NULL UNIQUE,
);

CREATE TABLE movie_likes (
    id SERIAL PRIMARY KEY,
    movie_id VARCHAR,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE movie_dislikes (
    id SERIAL PRIMARY KEY,
    movie_id VARCHAR,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE
);
