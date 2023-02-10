const express = require("express");
const connectToMongo = require("./services/Database");
// const cors = require("cors");
// const bodyParser = require("body-parser")
port = 8000

const app = express();

connectToMongo();

// app.use(bodyParser.json({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

app.use(express.json());

app.listen(8000, () => {
    console.log("Listening on port 8000");
})