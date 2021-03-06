CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(20),
  PRIMARY KEY(id)
);

CREATE TABLE rooms (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(20),
  PRIMARY KEY(id)
);

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  text varchar(240),
  room int,
  userid int,
  PRIMARY KEY(id), 
  FOREIGN KEY(room) REFERENCES rooms(id), 
  FOREIGN KEY(userid) REFERENCES users(id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql;
 *  to create the database and the tables.*/

