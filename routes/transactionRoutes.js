const express = require('express'); // Import "express" package
const { addTransaction, getAllTransactions, editTransaction, deleteTransaction } = require('../controllers/transactionController');

// Router Object
const router = express.Router(); // Create a new instance of the Router object

// Routes
// POST route for adding a new transaction
router.post('/add', addTransaction); // Add a new transaction

// POST route for editing a new transaction
router.post('/edit', editTransaction); // Add a new transaction

// POST route for deleting a new transaction
router.post('/delete', deleteTransaction); // Add a new transaction

// GET route for getting all transactions
router.post('/all', getAllTransactions); // Get all transactions

module.exports = router; // Export the router object
