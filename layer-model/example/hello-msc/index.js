const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./models/Author');

const app = express();

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  // acessar a função dentro do model
  const authors = await Author.getAll();
  // definição do status 200
  res.status(200).json(authors)
});

app.get('/authors', async (req, res) => {
  // acessar a função para encontrar um author a partir do id
  const { id } = req.params;

  const author = await Author.findById();

  if(!author) {
    return res.status(404).json({message: 'Not found'});
  }

  res.status(200).json(author);
});