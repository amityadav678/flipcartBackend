const CartDb = require('../model/cart');

const getCartItems = async (req, res) => {
    try {
        const newProducts = await CartDb.find();
        res.send(newProducts);
    } catch (error) {
        console.error('error:', error);
    }
};

module.exports = getCartItems;
