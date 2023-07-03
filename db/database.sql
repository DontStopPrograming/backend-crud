CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employees (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

INSERT INTO employees VALUES
 (1, 'Primer empleado', 2000),
 (2, 'Segundo empleado', 3000),
 (3, 'Tercer empleado', 4000),
 (4, 'Cuarto empleado', 5000);
