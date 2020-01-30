DROP DATABASE IF EXISTS spotify_db;

CREATE DATABASE spotify_db;
 
USE spotify_db;

CREATE TABLE songs (
    id int AUTO_INCREMENT NOT NULL,
    choice TEXT NOT NULL,
    listened BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);