require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// const connectDb = require('.src/config/db.js');
const connectDb = require('./src/config/db.js');

// const connectDb = require("./src/config/db.js")

const LoginRoute = require('./src/routes/loginRoutes.js');
const addProduct = require('./src/controllers/productController.js');
const getProduct = require('./src/controllers/productController.js');
const getProductWithId = require('./src/controllers/getProductwithId.js');
const cartController = require('./src/controllers/cartController.js');
const getCartController = require('./src/controllers/getCartController.js');
const deleteCartController = require('./src/controllers/deleteCartController.js');
const cartRoutes = require('./src/routes/cartRoutes.js');
const userRegister = require('./src/controllers/registerController.js');

const cors = require('cors');

connectDb().then(async () => {
    await addProduct();
});

app.use(express.json());

app.use(cors());
app.post('/signin', userRegister);
app.delete('/cart/:id', deleteCartController);

app.post('/login', LoginRoute);
app.post('/cart', cartRoutes);
app.get('/find-cart', getCartController);
app.get('/products', getProduct);
app.get('/product/:id', getProductWithId);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
