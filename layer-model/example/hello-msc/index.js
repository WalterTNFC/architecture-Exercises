const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./models/Author');

const app = express();

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  // pegar a função dentro do model
  const authors = await Author.getAll();
  // definição do status 200
  res.status(200).json(authors)
})