const express = require('express');

// const userSignin = require('../controllers/signinController');

const userLogin = require('../controllers/loginController');

const router = express.Router();

router.post('/login', userLogin);

module.exports = router;
