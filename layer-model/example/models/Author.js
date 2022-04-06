const connection = require('./connection');

async function getAll() {
  // recebe o valor do obj connection
  const result = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');

  return result;
};

module.exports = {
  getAll,
}
