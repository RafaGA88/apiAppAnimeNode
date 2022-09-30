const { Router } = require('express');
const animeController = require('../controllers/AnimeController');

const router = new Router();

router.post('/', animeController.criaAnime);
router.get('/', animeController.principaisAnimes);

module.exports = router;
