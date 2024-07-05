const express = require('express');
const getCartItems = require('../controllers/getCartController');

router.get('/find-cart', getCartItems);

module.exports = router;
