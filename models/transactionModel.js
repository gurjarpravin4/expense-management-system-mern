const mongoose = require('mongoose');

// Create a new schema
const transactionSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: [true, 'Please enter a user ID.'] // If the user ID is not provided, this message will be displayed
    },
    amount: {
        type: Number,
        reauired: [true, 'Please enter an amount.'] // If the amount is not provided, this message will be displayed
    },
    type: {
        type: String,
        required: [true, 'Please enter a type.'] // If the type is not provided, this message will be displayed
    },
    category: {
        type: String,
        required: [true, 'Please enter a category.'] // If the category is not provided, this message will be displayed
    },
    reference: {
        type: String
    },
    description: {
        type: String,
        required: [true, 'Please enter a description.'] // If the description is not provided, this message will be displayed
    },
    date: {
        type: Date,
        required: [true, 'Please enter a date.'] // If the date is not provided, this message will be displayed
    }
}, { timestamps: true })

const transactionModel = mongoose.model('transactions', transactionSchema);
module.exports = transactionModel;