
const mysql = require('mysql2/promise');
const fs = require('fs');
require('dotenv').config(); // Load environment variables from .env file

const uri = process.env.DATABASE_URI;
const fields = new URL(uri);

const connection = mysql.createPool({
  host: fields.hostname,
  port: fields.port,
  user: fields.username,
  password: fields.password,
  database: 'thebharat',
  ssl: {
    ca: fs.readFileSync('src/config/ca.pem')
  }
});

module.exports = connection;
