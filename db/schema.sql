--Create Database--
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create Table --
CREATE TABLE `burgers_db`.`burgers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(45) NOT NULL,
  `devoured` TINYINT NOT NULL,
  PRIMARY KEY (`id`));
