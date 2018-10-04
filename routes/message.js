const express = require("express");
const bodyparser = require("body-parser");
const nodemailer = require("nodemailer");
const router = express.Router();

//This app is runnign on express server
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

//The POST route
app.post("/MessageCenter", (req, res) => {
    const sendMessage = `
    <ul>
        <li> Name: ${req.body.mailto} </li>
        <li> Subject: ${req.body.subject} </li>
        <li> Message: ${req.body.message} </li>
    </ul>
    `;

//Set up Ethereal email
    let transporter = nodemailer.createTransport( {
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
//My ethereal email user and password
            user: "k2ehxzlx36nubj6o@ethereal.email",
            pass: "nSgA8PekxPC5Z9jPyb"
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    //Setup email data with unicode
    let mailOptions = {
        from: "Caritas-Bridge <smtp.ethereal.email>",
        to: "casshih@gmail.com",
        text: req.body.message,
        html: sendMessage
    };

    //Send mail with defined transport 
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error)
        }
        console.log("Message sent: ", info.message);
        console.log(nodemailer.getTestMessageUrl(info));
    });
});

module.exports = router;
