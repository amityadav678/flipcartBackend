const ProductDb = require('../model/product');

const getProductWithId = async (req, res) => {
    try {
        const productId = req.params.id;
        const newProduct = await ProductDb.findById(productId);

        if (!newProduct) {
            return res.status(404).send('Product not found');
        }
        res.send(newProduct);
    } catch (error) {
        console.error('error:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = getProductWithId;
