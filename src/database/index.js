const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Anime = require('../models/Anime');
const User = require('../models/User');
const Episodio = require('../models/Episodio');

const connection = new Sequelize(dbConfig);

const models = [Anime, User, Episodio];

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));

module.exports = connection;
