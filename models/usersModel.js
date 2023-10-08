const mongoose = require('mongoose');

// Schema design

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name.'] // If the name field is empty, the error message will be displayed
    },
    email: {
        type: String,
        required: [true, 'Please enter your email address.'], // If the email field is empty, the error message will be displayed
        unique: [true, 'This email address is already registered.'] // If the email address is already registered, the error message will be displayed
    },
    password: {
        type: String,
        required: [true, 'Please enter your password.'] // If the password field is empty, the error message will be displayed
    }
}, { timestamps: true });

const usersModel = mongoose.model('users', usersSchema);
module.exports = usersModel;
