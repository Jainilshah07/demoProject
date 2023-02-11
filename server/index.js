const express = require("express");
const cors = require("cors");
require("./services/Database");
const app = express();
const Port = process.env.PORT || 8000;


app.use(express.json());
app.use(cors());
<<<<<<< HEAD
=======

>>>>>>> cbb4c4d2e8ae6c88e59ba6e73d44da8de7e3e7e9


//Routes
app.use("/api/User", require("./routes/User"));





app.listen(Port, () => {
    console.log(`Connection successfull on port ${Port}`);
})