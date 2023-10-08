// Import "express" package
const express = require('express');
// Import "cors" package
const cors = require('cors');
// Import "morgan" package
const morgan = require('morgan');
// Import "dotenv" package
const dotenv = require('dotenv');
// Import "colors" package
const colors = require('colors');
// Import the connectDB function from the config/connectDB.js file
const connectDB = require('./config/connectDB');
// Import path
const path = require('path');

// Configure dot env file
dotenv.config();

// Database Connection
connectDB();

// Create a new instance of Express
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Routes
// User Routes (Login and Register)
app.use('/api/v1/users', require('./routes/userRoutes'));

// Transaction Routes (Add and Get All)
app.use('/api/v1/transactions', require('./routes/transactionRoutes'));

// static files
app.use(express.static(path.join(__dirname, './client/build')))

app.get('*', (req, res) => {  // * means all routes
    res.sendFile(path.join('__dirname', './client/build/index.html')) // relative path
})

// Configure a port for the server to listen on
const PORT = 6969 || process.env.PORT;

// Listen on the specified port
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`.bgCyan.white);
});
