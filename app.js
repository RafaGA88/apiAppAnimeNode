const dotenv = require('dotenv');

dotenv.config();
require('./src/database');
const express = require('express');
const homeRoutes = require('./src/routes/homeRoutes');
const listagemRoutes = require('./src/routes/listagemRoutes');
const loginRotes = require('./src/routes/loginRoutes');

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
    this.app.use('/login', loginRotes);
  }
}

const { app } = new App();
module.exports = app;
