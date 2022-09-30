const { Router } = require('express');
const comentarioController = require('../controllers/ComentarioController');
const loginRequired = require('../middlewares/loginRequired');

const router = new Router();

router.post('/', loginRequired, comentarioController.comenta);

module.exports = router;
