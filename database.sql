DROP DATABASE IF EXISTS node_institute;
CREATE DATABASE IF NOT EXISTS node_institute;
USE  node_institute;

#=============================
CREATE TABLE IF NOT EXISTS student(
    student_id VARCHAR(20) PRIMARY KEY ,
    name VARCHAR(45) NOT NULL,
    address VARCHAR(100) NOT NULL,
    contact VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS programe(
    programe_id VARCHAR(20) PRIMARY KEY ,
    name VARCHAR(45) NOT NULL,
    cost DOUBLE
);

CREATE TABLE IF NOT EXISTS registration(
    reg_id VARCHAR(20) PRIMARY KEY,
    reg_date DATE,
    student_id VARCHAR(20),
    programe_id VARCHAR(20),
    
    CONSTRAINT FOREIGN KEY (student_id) REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT FOREIGN KEY (programe_id) REFERENCES programe(programe_id) ON DELETE CASCADE ON UPDATE CASCADE
);

SHOW TABLES;

DESC student;
DESC programe;
DESC registration;

INSERT INTO student VALUES
('S001','Kamal Perera','Colombo','077-8812945'),
('S002','Anura Herat','Kalutara','071-5645500'),
('S003','Wasantha Kumara','Panadura','076-6751128');

SELECT * FROM student;

INSERT INTO programe VALUES
('P001','Java', 5000),
('P002','MERN Stack', 15000),
('P003','GIT | GITHUB ', 10000),
('P004','Spring Boot', 20000);

SELECT * FROM programe;

INSERT INTO registration VALUES
('REG-001','2023-01-18','S001','P001'),
('REG-002','2023-02-18','S001','P002'),
('REG-003','2023-02-12','S003','P002'),
('REG-004','2023-05-10','S002','P004');

SELECT * FROM registration;