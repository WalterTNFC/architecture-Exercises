const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;

const Authors = require('./hello-msc/models/Author');
app.use(bodyParser.json());
// async function callback(_param, res) {
//   const authors = await authors.getAll();
//   return res.status(200).json(authors);
// }

// function listenPort() {
//   console.log('Example app listening on port!')
// }
app.get('/authors', async (_req, res) => {
  const authors = await Authors.getAll();
  res.status(200).json(authors);
});

// ':' -> parametro de rotas
app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Authors.findById(id);
  
  if (!author) return res.status(404).json({message: 'Not found'});

  // se existir, retorna status 200 e o nome do autor
  res.status(200).json(author)
});

// post -> para mudança de dados
app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Authors.isValid(first_name, middle_name, last_name)) {
      return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Authors.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso! '});
});

app.listen(port, () => console.log(`Example port!`));