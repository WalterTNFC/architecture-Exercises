// para usar comandos sql
const connection = require('./connection');

function getNewAuthor({id, firstName, middleName, lastName}) {
  const fullName = [firstName, middleName, lastName].filter((value) => value).join(" ");
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName
  }
}

function serialize(authorData) {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_mame,
    lastName: authorData.last_name,
  };
}
// fluxo assincrono por trabalhar com banco
// de dados é custoso
// executa uma query do banco de dados e retorna esse valor
async function getAll() {
  // recebe o valor do obj connection
  const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');

  return authors.map(serialize).map(getNewAuthor);
};

module.exports = {
  getAll,
}
