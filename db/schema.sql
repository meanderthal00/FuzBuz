-- creation of our database 
CREATE DATABASE fuzbuz;
USE fuzbuz;

-- this will hold our user information
CREATE TABLE fuzers
    id INT AUTO_INCREMNT NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    about_me VARCHAR(510),
    password VARCHAR(55) NOT NULL,
    primary key (id)
    ();

