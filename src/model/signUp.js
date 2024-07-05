const mongoose = require('mongoose');

const SigninSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
});

const SigninDb = mongoose.model('Signin', SigninSchema);

module.exports = SigninDb;
