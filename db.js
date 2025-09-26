// connection to mongoDb file and can be reused in any part of your program.
const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB(){
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected Successfully to MongoDB");
}

module.exports = { connectDB ,mongoose};