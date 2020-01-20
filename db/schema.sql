DROP DATABASE IF EXISTS bookworm;

CREATE DATABASE bookworm;

USE bookworm;

CREATE TABLE books (
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(100),
    link VARCHAR(200),
    isRead BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);