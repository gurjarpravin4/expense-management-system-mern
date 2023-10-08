const express = require('express');
const { loginController, registerController } = require('../controllers/userController');

// Router Object
const router = express.Router();

// Routes
// POST route for LOGIN
router.post('/login', loginController);

// POST route for REGISTER
router.post('/register', registerController);

module.exports = router;