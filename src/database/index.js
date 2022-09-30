const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Anime = require('../models/Anime');
const User = require('../models/User');

const connection = new Sequelize(dbConfig);

User.init(connection);
Anime.init(connection);

module.exports = connection;
