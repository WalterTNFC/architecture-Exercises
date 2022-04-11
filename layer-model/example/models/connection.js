// importação do modulo mysql
const mysql = require('mysql2/promise');

// Pool de conexões -> reaproveitar conexões do mysql
const connection = mysql.createPool({
  user: 'root',
  password: '1234',
  host: 'localhost',
  database: 'model_example'
});

// objeto connection vai permitir criar querys sql
module.exports = connection;
