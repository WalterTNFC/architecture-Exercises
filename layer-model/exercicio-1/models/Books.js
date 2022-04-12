const connection = require('./connection');

async function getAll() {
  const [books] = await connection.execute('SELECT title, author_id FROM books');
  return books;
};

async function getBookById(authorId) {
  const query = 'SELECT id, title, author_id FROM books WHERE author_id=?;'
  const [booksById] = await connection.execute(query,[authorId])
  return booksById;
}

module.exports = {
  getAll,
  getBookById,
}
