require('dotenv').config();
const mongoose = require('mongoose');

const data = process.env.MONGODB_URI;

// var data = `mongodb+srv://amit-web:9793151506@amit-web.5132jjg.mongodb.net/?retryWrites=true&w=majority&appName=amit-web`;

const ConnetDb = async () => {
    try {
        await mongoose.connect(data);
        console.log('Database Connect Sucessfully');
    } catch (error) {
        console.log('error:', error);
    }
};

module.exports = ConnetDb;
