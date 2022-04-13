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

// criação de novo método para achar o author pelo ID
async function findById(id) {
  const query = 'SELECT first_name, middle_name, last_name FROM model_example.authors WHERE id=?'
  const [ authorData ] = await connection.execute(query, [id]);

  if (authorData.length === 0) {
    return null;
  }

  // desestruturação dos parêmetros para retornar o author de interesse
  const { firstName, middleName, lastName } = authorData.map(serialize)[0];

  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName
  });
};

// metodo para verificar a validade
function isValid(firstName, middleName, lastName) {
  if(!firstName || typeof firstName !== 'string') {
    return false;
  }

  if(!middleName || typeof middleName !== 'string') {
    return false;
  }

  return true;
}

async function create(firstName, middleName, lastName) {
  connection.execute(
    'INSERT INTO model_example.authors (firstName, middleName, lastName) VALUES (?, ?, ?)'
    [firstName, middleName, lastName]
  );
}
module.exports = {
  getAll,
  findById,
  isValid,
  create
}
