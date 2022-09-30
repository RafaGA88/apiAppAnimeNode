const { Router } = require('express');

const episodioController = require('../controllers/EpisodioController');

const router = new Router();

router.post('/', episodioController.criaEpisodio);

module.exports = router;
