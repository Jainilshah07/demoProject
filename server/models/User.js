const mongoose = requite("mongoose")

const userSchema = new mongoose.Schema({

    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    MobileNo: {
        type: Number,
        min: [10, "Enter a valid mobile number"],
        max: [10, "Enter a valid mobile number"]
    },
    AadharNum: {
        type: Number,
        min: [10, "Enter a valid Aadhar number"],
        max: [10, "Enter a valid Aadhar number"]
    },
    EmailId: {
        type: String,
        required: true
    }
})