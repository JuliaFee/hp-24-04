const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 9340;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'hp_db',
  password: 'ds564',
  port: 5432,
});

app.use(express.json());