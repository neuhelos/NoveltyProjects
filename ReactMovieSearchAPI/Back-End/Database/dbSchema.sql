DROP DATABASE IF EXISTS flixdeets;
CREATE DATABASE flixdeets;

\c flixdeets;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS film_likes CASCADE;
DROP TABLE IF EXISTS film_dislikes CASCADE;

CREATE TABLE users  (
    user_id VARCHAR PRIMARY KEY NOT NULL,
    email VARCHAR NOT NULL UNIQUE
);

CREATE TABLE film_likes (
    id SERIAL PRIMARY KEY,
    film_id VARCHAR,
    user_id VARCHAR REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE film_dislikes (
    id SERIAL PRIMARY KEY,
    film_id VARCHAR,
    user_id VARCHAR REFERENCES users(user_id) ON DELETE CASCADE
);

INSERT INTO users
(user_id, email)
VALUES
(1, 'nilberremon@gmail.com')