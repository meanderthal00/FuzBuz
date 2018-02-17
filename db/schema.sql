-- creation of our database 
DROP DATABASE IF EXISTS fuzbuz;
CREATE DATABASE fuzbuz;
USE fuzbuz;

-- this will hold our user information

CREATE TABLE fuzers(
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(55) NOT NULL,
    about_me VARCHAR(510),
    PRIMARY KEY (id)
    );
-- im going to test pushing now...if i mess up please don't hate me ryan
-- ttestsetsetset
