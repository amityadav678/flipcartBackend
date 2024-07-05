const SigninDb = require('../model/signUp');

const userRegister = async (req, res) => {
    const newProduct = await SigninDb.create(req.body);
    if (newProduct) {
        res.status(200).json({ message: 'Signing Sucessfull' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};
module.exports = userRegister;
