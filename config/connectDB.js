const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Server running on ${mongoose.connection.host}`.bgCyan.white); // bgCyan and white are colors methods to change the background color and text color
    } catch (error) {
        console.log(`${error}`.bgRed); // .bgRed is a colors method to change the background color of the text
    }
}

module.exports = connectDB;