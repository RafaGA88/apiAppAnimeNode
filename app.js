const dotenv = require('dotenv');
const { resolve } = require('path');

dotenv.config();
require('./src/database');
const cors = require('cors');
const helmet = require('helmet');

const express = require('express');
const homeRoutes = require('./src/routes/homeRoutes');
const listagemRoutes = require('./src/routes/listagemRoutes');
const cadastroRotes = require('./src/routes/cadastroRoutes');
const cadastrarEpRoutes = require('./src/routes/cadastrarEpRoutes');
const tokenRoutes = require('./src/routes/tokenRoutes');
const comentarioRoutes = require('./src/routes/comentarioRoutes');
const episodioRoutes = require('./src/routes/episodioRoutes');

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
    this.app.use(cors());
    this.app.use(helmet());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/listagem', listagemRoutes);
    this.app.use('/cadastro', cadastroRotes);
    this.app.use('/cadastrar_episodio', cadastrarEpRoutes);
    this.app.use('/tokens', tokenRoutes);
    this.app.use('/comentario', comentarioRoutes);
    this.app.use('/episodio', episodioRoutes);
  }
}

const { app } = new App();
module.exports = app;
