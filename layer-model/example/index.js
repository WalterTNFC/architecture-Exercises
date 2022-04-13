const express = require("express");
const app = express()
const port = 3000

const Authors = require('./models/Author');

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

app.listen(port, () => console.log(`Example port!`));