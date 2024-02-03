const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

async function connect() {
    try {
        await mongoose.connect(pricess.env.MONGODB_URI);
        console.log("Database connection established");
    } catch (error) {
        console.log("Database connection error : ", error);
    }
}

module.exports = connect;//Commonjs default export