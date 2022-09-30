const dotenv = require('dotenv');

dotenv.config();
require('./src/database');

const express = require('express');
const homeRoutes = require('./src/routes/homeRoutes');
const listagemRoutes = require('./src/routes/listagemRoutes');
const cadastroRotes = require('./src/routes/cadastroRoutes');
const cadastrarEpRoutes = require('./src/routes/cadastrarEpRoutes');
const tokenRoutes = require('./src/routes/tokenRoutes');

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/listagem', listagemRoutes);
    this.app.use('/cadastro', cadastroRotes);
    this.app.use('/cadastrar_episodio', cadastrarEpRoutes);
    this.app.use('/tokens', tokenRoutes);
  }
}

const { app } = new App();
module.exports = app;
