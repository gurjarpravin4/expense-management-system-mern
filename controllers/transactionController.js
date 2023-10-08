const transactionModel = require('../models/transactionModel');
const moment = require('moment') // Import the moment package

const getAllTransactions = async (req, res) => {
    try {
        const { filter, selectedDate, userid, type } = req.body; // Get the filter from the request body
        const transactions = await transactionModel.find({
            ...(filter !== 'custom' ? {
                date: {
                    $gt: moment().subtract(Number(filter), 'd').toDate()
                },
            } : {
                date: {
                    $gte: selectedDate[0],
                    $lte: selectedDate[1]
                },
            }),
            userid: userid,
            ...(type !== 'all' && { type })
        }); // Find all transactions
        res.json(transactions); // Return all transactions as JSON
    } catch (error) {
        console.log(error)
        res.status(500).json(error); // If there is an error, return the error message
    }
}

const addTransaction = async (req, res) => {
    try {
        const transaction = new transactionModel(req.body); // Create a new transaction
        await transaction.save(); // Save the transaction
        res.status(201).send('Transaction added successfully.'); // Return a success message
    } catch (error) {
        console.log(error)
        res.status(500).json(error); // If there is an error, return the error message

    }
}

const editTransaction = async (req, res) => {
    try {
        await transactionModel.findOneAndUpdate({ _id: req.body.transactionID }, req.body.payload); // Find the transaction by id and update it
        res.status(200).send('Expense updated successfully.'); // Return a success message
    } catch (error) {
        console.log(error)
        res.status(500).json(error); // If there is an error, return the error message
    }
} // Edit a transaction

const deleteTransaction = async (req, res) => {
    try {
        await transactionModel.findOneAndDelete({ _id: req.body.transactionID }); // Find the transaction by id and delete it
        res.status(200).send('Expense deleted successfully.'); // Return a success message
    } catch (error) {
        console.log(error)
        res.status(500).json(error); // If there is an error, return the error message
    }
} // Delete a transaction

module.exports = { getAllTransactions, addTransaction, editTransaction, deleteTransaction }