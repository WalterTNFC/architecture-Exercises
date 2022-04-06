const mysql = require('mysql2/promise');

// Pool de conexões -> reaproveitar conexões
const connection = mysql.createPool({
  user: 'root',
  password: '1234',
  host: 'local',
  database: 'model_example'
});

// objeto connection vai permitir criar querys sql
module.exports = connection;
