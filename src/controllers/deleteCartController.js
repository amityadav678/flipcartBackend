const CartDb = require('../model/cart');

const deleteCartItem = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await CartDb.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({
                error: 'Product not found',
            });
        }

        res.status(200).json({
            message: 'Product deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            error: 'Internal Server Error',
            details: error.message,
        });
    }
};

module.exports = deleteCartItem;
