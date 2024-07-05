require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const connectDb = require('./config/db.js');

const LoginRoute = require('./routes/loginRoutes.js');
const addProduct = require('./controllers/productController.js');
const getProduct = require('./controllers/productController.js');
const getProductWithId = require('./controllers/getProductwithId.js');
const cartController = require('./controllers/cartController.js');
const getCartController = require('./controllers/getCartController.js');
const deleteCartController = require('./controllers/deleteCartController.js');
const cartRoutes = require('./routes/cartRoutes.js');
const userRegister = require('./controllers/registerController.js');

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
