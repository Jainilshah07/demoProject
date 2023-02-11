const express = require("express");
require("./services/Database");
const app = express();
const Port = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Helloo");
})


app.listen(Port, () => {
    console.log(`Connection successfull on port ${Port}`);
})