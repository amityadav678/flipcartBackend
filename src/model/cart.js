const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    id: { type: String, required: false, unique: true },
    url: { type: String, required: false },
    detailUrl: { type: String, required: false },
    title: {
        shortTitle: { type: String, required: false },
        longTitle: { type: String, required: false },
    },
    price: {
        mrp: { type: Number, required: false },
        cost: { type: Number, required: false },
        discount: { type: String, required: false },
    },
    quantity: { type: Number, required: false },
    description: { type: String, required: false },
    discount: { type: String, required: false },
    tagline: { type: String, required: false },
    __v: { type: Number, select: false },
});

const CartDb = mongoose.model('cart', CartSchema);
module.exports = CartDb;
