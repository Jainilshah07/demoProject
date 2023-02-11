const fast2sms = require("fast-two-sms");
var express = require("express");

const app = express()

var options = {
    authorization: 'cwLvh5WSXKTenoU0VBR723CPIfGyaHNOk8lMbs1QY69DFdizmEo8K7b4jyPxsmtkQWdZEILBNnSMOqU2', message: "",
    numbers: ['9326165833']
};

fast2sms.sendMessage(options)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
