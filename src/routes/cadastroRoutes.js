const { Router } = require('express');
const userController = require('../controllers/UserController');

const router = new Router();

router.post('/', userController.criaUser);

module.exports = router;
