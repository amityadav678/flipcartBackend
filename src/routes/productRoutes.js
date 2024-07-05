const express = require('express');

const getProduct = require('../controllers/productController');
const getProductWithId = require('../controllers/productController');

const router = express.Router();

router.post('/products', getProduct);

module.exports = router;
