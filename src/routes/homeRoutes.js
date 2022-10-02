const { Router } = require('express');
const animeController = require('../controllers/AnimeController');
const loginRequired = require('../middlewares/loginRequired');

const router = new Router();

router.post('/', loginRequired, animeController.criaAnime);
router.get('/', animeController.principaisAnimes);
router.get('/animes/:id', animeController.principaisAnimes);

module.exports = router;
