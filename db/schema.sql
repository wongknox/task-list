DROP DATABASE IF EXISTS tasklist;
CREATE DATABASE tasklist;

\connect tasklist

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS tasks;

CREATE TABLE users (
    id serial PRIMARY KEY,
    username text UNIQUE NOT NULL,
    password text NOT NULL
);

CREATE TABLE tasks (
    id serial PRIMARY KEY,
    title text NOT NULL,
    done boolean NOT NULL,
    user_id integer NOT NULL REFERENCES users(id) ON DELETE CASCADE
);