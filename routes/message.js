const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const nodemailer = require("nodemailer");
const router = express.Router();

const app = express();

//The GET route
app.get("../src/ComposeMessage", (req, res) => {
    res.render("../src/ComposeMessage");
});

app.use(bodyparser.json());

//The POST route
app.post("../src/ComposeMessage", (req, res) => {
    const output = `
    <ul>
        <li>E-mail: ${req.body.mailto} </li>
        <li>Subject: ${req.body.subject} </li>
        <li>Comments: ${req.body.message} </li>
    </ul>
    `;

    console.log(output);

//Set up Ethereal email
    let transporter = nodemailer.createTransport( {
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
//My ethereal email user
            user: "k2ehxzlx36nubj6o@ethereal.email",
//The ethereal email password
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
        html: output
    };

    //Send mail with defined transport 
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error)
        }
        console.log("Message sent: ", info.message);
        console.log(nodemailer.getTestMessageUrl(info));

        res.render("../src/ComposeMessage")
    });
});

module.exports = router;
