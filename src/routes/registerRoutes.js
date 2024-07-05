const express = require('express');

const userRegister = require('../controllers/registerController');

const router = express.Router();

router.post('/signin', userRegister);

module.exports = router;
