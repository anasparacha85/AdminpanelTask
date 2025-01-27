const mongoose = require('mongoose');
require('dotenv').config();  // Ensure the .env file is loaded

const connectdb = async () => {
    try {
        const URI = process.env.MONGODB_URI; // Get MongoDB URI from environment variables
        if (!URI) {
            throw new Error("MongoDB URI is not defined");
        }
        
        await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1);  // Exit the process with failure code
    }
};

module.exports = connectdb;
