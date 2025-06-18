CREATE DATABASE viatab;

\c viatab;

CREATE TABLE department (
    id   SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE story (
    id            SERIAL PRIMARY KEY,
    title         VARCHAR(200) NOT NULL,
    content       TEXT,
    department_id INTEGER NOT NULL REFERENCES department(id) ON DELETE CASCADE
);

-- Seed departments
INSERT INTO department (name) VALUES
  ('Engineering'), ('Humanities'), ('Business');
ON CONFLICT DO NOTHING;