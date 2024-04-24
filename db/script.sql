CREATE DATABASE hp_db;

\c hp_db;

CREATE TABLE bruxos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    idade VARCHAR(100) NOT NULL,
    genero VARCHAR(100) NOT NULL,
    habilidade VARCHAR(100) NOT NULL,
    casa VARCHAR(100) NOT NULL,
    status_sangue VARCHAR(100) NOT NULL,
    patrono VARCHAR(100) NOT NULL
);

CREATE TABLE varinhas (
    id SERIAL PRIMARY KEY,
    material VARCHAR(100) NOT NULL,
    comprimento INT NOT NULL,
    nucleos VARCHAR(100) NOT NULL,
    data_fab VARCHAR(100) NOT NULL
);

CREATE TABLE casas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cor VARCHAR(50) NOT NULL,
    animal VARCHAR(100) NOT NULL
);

