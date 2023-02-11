const express = require("express");
const router = express.Router();

require("../services/Database");

const User = require("../models/User");

router.post("/register", async (req, res) => {
    const { FirstName, LastName, MobileNo, AadharNum, EmailId, Password, CPassword } = req.body;

    let num = await User.findOne({ EmailId: req.body.EmailId });
    if (num) {
        return res.status(400).json({ error: "Sorry already registered" })
    }

    try {
        num = User.create({
            FirstName, LastName, MobileNo, AadharNum, EmailId, Password, CPassword
        });
        res.status(200).send("User Registered")
    } catch (error) {
        res.status(500).send("Error")

    }
});

router.post("/login", async (req, res) => {
    const { FirstName, LastName, MobileNo, AadharNum, EmailId, Password, CPassword } = req.body;


    try {
        let num = User.create({
            EmailId, Password
        });
        res.status(200).send("User Logined")
    } catch (error) {
        res.status(500).send("Error")

    }

})

module.exports = router;