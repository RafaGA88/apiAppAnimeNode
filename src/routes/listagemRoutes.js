const { Router } = require('express');
const animeController = require('../controllers/AnimeController');

const router = new Router();

router.get('/', animeController.listagemAnimes);

module.exports = router;
