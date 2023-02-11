const mongoose = require("mongoose");
const uri = "mongodb+srv://Unscript:Unscript23@cluster0.ionptdl.mongodb.net/Project?retryWrites=true&w=majority"

mongoose.set("strictQuery", false);

mongoose.connect(uri).then(() => {
    console.log("Connection successfull with Databse");
}).catch((e) => {
    console.log(e);
})