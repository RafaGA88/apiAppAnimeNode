const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Anime = require('../models/Anime');

const connection = new Sequelize(dbConfig);

Anime.init(connection);

module.exports = connection;
