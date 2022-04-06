const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: '1234',
  database: 'model_database'
});

module.exports = connection;
