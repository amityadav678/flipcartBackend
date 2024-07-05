const CartDb = require('../model/cart');

const addCart = async (req, res) => {
    try {
        const newProduct = await CartDb.create(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({
                error: 'Product with this ID already exists',
            });
        } else {
            res.status(500).json({
                error: 'Internal Server Error',
                details: error.message,
            });
        }
    }
};

module.exports = addCart;
