const { Router } = require('express');

const router = new Router();
const episodioController = require('../controllers/EpisodioController');

router.get('/:id', episodioController.getEpisodio);

module.exports = router;
