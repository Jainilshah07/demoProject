const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    FirstName: {
        type: String,
        //required: true
    },
    LastName: {
        type: String,
        //required: true
    },
    MobileNo: {
        type: Number,
        // min: 10,
        // max: 11
    },
    AadharNum: {
        type: Number,
        // min: [0, "Enter a valid Aadhar number"],
        // max: [15, "Enter a valid Aadhar number"]
    },
    EmailId: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    CPassword: {
        type: String,
        //required: true
    },
})


const userData = new mongoose.model("userdata", userSchema);
module.exports = userData;