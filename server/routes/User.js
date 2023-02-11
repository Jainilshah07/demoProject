const express = require("express");
const router = express.Router();
const fast2sms = require("fast-two-sms");

require("../services/Database");

const User = require("../models/User");

router.post("/validate-user", async (req, res) => {
  const { MobileNo, AadharNum } = req.body;
  let number = MobileNo;
  // let num = await User.findOne({ MobileNo: req.body.MobileNo });
  // if (num) {
  //     return res.status(400).json({ error: "Sorry already registered" })
  // }
  var options = {
    authorization:
      "cwLvh5WSXKTenoU0VBR723CPIfGyaHNOk8lMbs1QY69DFdizmEo8K7b4jyPxsmtkQWdZEILBNnSMOqU2",
    message: "OTP is 554422",
    numbers: [number],
  };
  fast2sms
    .sendMessage(options)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
});
router.post("/validate-otp", async (req, res) => {
  const { otp } = req.body;

  if (otp == "554422") {
    console.log("hello OTP Verified");
    return res.status(200).json("OTP Verified");
  } else {
    console.log("hello OTP not verified");
    return res.status(400).json({ error: "Sorry wrong otp" });
  }
});

// router.post("/validate-otp"),async (req, res) =>{
//     console.log("Top backend")
//     const { otp } = req.body;
//     console.log("Back otp",otp);
//     if(otp == '554422'){
//         console.log("hello OTP Verified");
//         return res.status(200).json("OTP Verified")
//     }else {
//         console.log("hello OTP not verified");
//         return res.status(400).json({ error: "Sorry wrong otp" })
//     }
// }
router.post("/register", async (req, res) => {
  const {
    FirstName,
    LastName,
    MobileNo,
    AadharNum,
    EmailId,
    Password,
    CPassword,
  } = req.body;

  let num = await User.findOne({ EmailId: req.body.EmailId });
  if (num) {
    return res.status(400).json({ error: "Sorry already registered" });
  }

  try {
    num = User.create({
      FirstName,
      LastName,
      MobileNo,
      AadharNum,
      EmailId,
      Password,
      CPassword,
    });
    res.status(200).send("User Registered");
  } catch (error) {
    res.status(500).send("Error");
  }
});

router.post("/login", async (req, res) => {
  const {
    FirstName,
    LastName,
    MobileNo,
    AadharNum,
    EmailId,
    Password,
    CPassword,
  } = req.body;

  try {
    let num = User.create({
      EmailId,
      Password,
    });
    res.status(200).send("User Logined");
  } catch (error) {
    res.status(500).send("Error");
  }
});

module.exports = router;
