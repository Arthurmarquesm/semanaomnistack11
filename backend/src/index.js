const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/Listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /*
  *Tipos de parâmetros:
  *
  * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos 
  * Request Body: Corpo da requisição,utilizado para criar ou alterar recursos
  * 
  */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NOSQL: MongoDB, CouchDB, etc
 */

 /*
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */ 

 /*ENTIDADES
*entidades tudo aquilo que representa o banco de dados, que será salvo
*melhora muito em casos que já se há a interface do programa a ser 
*feito
*ong
*caso incidente
*/

/*FUNCIONALIDADES
*login de ong
*logout de ong
*cadastro de ong
*cadastrar novos casos
*deletar casos
*listar casos especificos de uma ong
*listar todos os casos
*entrar em contato com a ong
*/