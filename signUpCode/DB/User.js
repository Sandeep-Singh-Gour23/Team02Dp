const mongoose = require('mongoose');

const user = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        trim: true

    },
    lastName:{
        type: String,
        required: true,
        trim: true
    },
    emailId:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    }
});

module.exports = User = mongoose.model('MYdatabase', user);