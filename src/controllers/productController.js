const ProductDb = require('../model/product');
const products = require('../constantData/data');

const addProduct = async (req, res) => {
    try {
        const newProducts = await ProductDb.insertMany(products);
        res.status(201).json('newProducts');
    } catch (error) {
        console.error('error:', error);
    }
};

module.exports = addProduct;

const getProduct = async (req, res) => {
    try {
        const newProducts = await ProductDb.find();
        res.send(newProducts);
    } catch (error) {
        console.error('error:', error);
    }
};

module.exports = getProduct;
