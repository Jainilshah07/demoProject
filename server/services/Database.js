const mongoose = require("mongoose");

const URI = "mongodb://localhost:27017/demoJS";

const connectToMongo = () => {
    // Connecting to the database
    mongoose
        .connect(URI)
        .then(() => {
            console.log("Successfully connected to database");
        })
        .catch((error) => {
            console.log("database connection failed. exiting now...");
            console.error(error);
            process.exit(1);
        });
};

module.exports = connectToMongo;