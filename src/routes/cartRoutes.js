const express = require('express');

const addCart = require('../controllers/cartController');
// const getCartItems = require('../controllers/cartController');

const router = express.Router();

router.post('/cart', addCart);

module.exports = router;
