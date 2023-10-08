const express = require('express');
const usersModel = require('../models/usersModel');

// Callback function for login user route
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;   // Destructure the email and password recieved from the request
        const user = await usersModel.findOne({ email, password });  // Find the user with the email and password recieved from the request
        if (!user) {
            res.status(404).send('User not found.');  // Set the status code as 404 (Not Found)
        }
        res.status(200).json({
            success: true,
            user
        }); // Set status code as 200 if user is found and send the user info as JSON

    } catch (error) {
        res.status(400).json({  // Set the status code as 400 (Bad Request)
            success: false,
            error
        });
    }
};

// Callback function for register user route
const registerController = async (req, res) => {
    try {
        const newUser = new usersModel(req.body);   // Create a new user with the data recieved from the request
        await newUser.save();  // Save the new user to the database
        res.status(201).json({  // Set the status code as 201 (Created)
            success: true,
            newUser
        });
    } catch (error) {
        res.status(400).json({  // Set the status code as 400 (Bad Request)
            success: false,
            error
        });
    }
}

module.exports = { loginController, registerController };