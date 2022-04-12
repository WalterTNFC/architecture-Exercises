const express = require("express");
// criação do novo app
const app = express()
const port = 3000

const Book = require('./models/Books');

app.get('/books', async(req, res) => {
  const { author_id } = req.query;

  const books = (author_id)
  ? await Book.getByAuthorId(author_id)
  : await Book.getAll();

  res.status(200).json(books);
});

app.listen(port, () => console.log(`Example port test!`));
