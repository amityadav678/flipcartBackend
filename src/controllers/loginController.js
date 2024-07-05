const SigninDb = require('../model/signUp');

const userLogin = async (req, res) => {
    try {
        const { password, phoneNumber } = req.body;

        const user = await SigninDb.findOne({ password, phoneNumber });
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.log('error:', error);
    }
};

module.exports = userLogin;
