
-- CREATE USER 'maya'@'127.0.0.1' IDENTIFIED BY '123';
-- GRANT ALL PRIVILEGES ON *.* TO 'maya'@'127.0.0.1' WITH GRANT OPTION;

CREATE DATABASE IF NOT EXISTS maya_sample_db_a;
CREATE DATABASE IF NOT EXISTS maya_sample_db_b;

GRANT ALL ON `maya_sample_db_a`.* TO 'maya'@'%';
GRANT ALL ON `maya_sample_db_b`.* TO 'maya'@'%';

-- USE patientsdb;

-- DROP TABLE IF EXISTS patients;

-- CREATE TABLE patients (
--   id         BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
--   first_name VARCHAR(255) DEFAULT NULL,
--   last_name  VARCHAR(255) DEFAULT NULL,
--   email      VARCHAR(255) DEFAULT NULL,
--   phone      VARCHAR(255) DEFAULT NULL,
--   address    VARCHAR(255) DEFAULT NULL,
--   diagnosis  VARCHAR(255) DEFAULT NULL,
--   image_url  VARCHAR(255) DEFAULT NULL,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   PRIMARY KEY (id),
--   CONSTRAINT UQ_Patients_Email UNIQUE (email)
-- );