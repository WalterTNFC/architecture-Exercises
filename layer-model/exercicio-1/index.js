const express = require("express");
// criação do novo app
const app = express()
const port = 3000

const Books = require('./models/Books');

app.get('/books', async(_req, res) => {
  const books = await Books.getAll();
  res.status(200).json(books);
});

app.listen(port, () => console.log(`Example port test!`));
