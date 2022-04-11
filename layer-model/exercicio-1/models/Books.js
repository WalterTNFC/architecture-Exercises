const connection = require('./connection');

async function getAll() {
  const result = await connection.execute('SELECT title, author_id FROM books');
  return result;
};

module.exports = {
  getAll,
}
