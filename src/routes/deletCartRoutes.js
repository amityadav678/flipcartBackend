const express = require('express');

const deleteCartItem = require('../controllers/deleteCartController');

router.delete('/cart/:id', deleteCartItem);
