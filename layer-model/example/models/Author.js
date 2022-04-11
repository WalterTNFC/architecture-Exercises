// para usar comandos sql
const connection = require('./connection');

// fluxo assincrono por trabalhar com banco
// de dados é custoso
// executa uma query do banco de dados e retorna esse valor
async function getAll() {
  // recebe o valor do obj connection
  const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');

  return authors;
};

module.exports = {
  getAll,
}
