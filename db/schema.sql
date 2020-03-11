DROP DATABASE IF EXISTS bookworm;

CREATE DATABASE bookworm;

USE bookworm;

CREATE TABLE books (
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(100),
    cover VARCHAR(350),
    link VARCHAR(350),
    format VARCHAR(100),
    authors VARCHAR(100),
    isRead BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);