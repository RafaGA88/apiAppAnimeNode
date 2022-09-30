const { Router } = require('express');

const episodioController = require('../controllers/EpisodioController');
const loginRequired = require('../middlewares/loginRequired');

const router = new Router();

router.post('/', loginRequired, episodioController.criaEpisodio);

module.exports = router;
