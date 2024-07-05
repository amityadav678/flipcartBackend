const express = require('express');

// const getProduct = require('../controllers/productController');
// const getProductWithId = require('../controllers/productController');

const getProductWithId = require('../controllers/getProductwithId');

const router = express.Router();

router.post('/product/:id', getProductWithId);

module.exports = router;
