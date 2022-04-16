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

app.post('authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(404).json({  message: 'Dados inválidos' });
  }

  await Author.createAuthor(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Pessoa autora criada com sucesso!' });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
