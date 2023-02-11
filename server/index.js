const express = require("express");
import cors from "cors";
require("./services/Database");
const app = express();
const Port = process.env.PORT || 8000;

app.use(express.json());
app.use();
app.set("view engine", "ejs");
app.use(express.urlencoded(extended: true))

//Routes
app.use("/api/User", require("./routes/User"));

app.use("/api/User", require("./routes/User"));

app.get("/", (req, res) => {
    res.send("Helloo");
})


app.listen(Port, () => {
    console.log(`Connection successfull on port ${Port}`);
})