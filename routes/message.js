<<<<<<< HEAD
const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

//The GET route
app.get("/Message", (req, res) => {
    res.send("/Message");
});

app.use(bodyparser.json());

app.use("/Message", express.static(path.join(__dirname, "/Messgae")));

//The POST route
app.post("/Message", (req, res) => {
    const output = `
    <ul>
        <li>Name: ${req.body.name} </li>
        <li>E-mail: ${req.body.email} </li>
        <li>Comments: ${req.body.comments} </li>
    </ul>
    `;

    console.log(output);

    let transporter = nodemailer.createTransport( {
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
    //My ethereal email account
            user: "k2ehxzlx36nubj6o@ethereal.email",
    //The ethereal email password
            pass: "nSgA8PekxPC5Z9jPyb"
        },
        tls: {
            rejectUnauthorized: false
=======
function messageSubmit() {
    preventDefault();
    const mailto = document.getElementById("mailto").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    //axios to post
    axios( {
        method: "POST",
        url: "http://localhost:3000/Message",
        data: {
            mailto: mailto,
            subject: subject,
            message: message
>>>>>>> ab7bc7fb52ae3fb948bebb7269f24a8db567053a
        }
    });

    //Setup email data with unicode
    let mailOptions = {
        from: "Nodemailer <smtp.ethereal.email>",
        to: "casshih@gmail.com",
        subject: "Message from Charitas Bridge",
        text: "Hello",
        html: output
    };

    //Send mail with defined transport 
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            throw error;
        }
        console.log("Message sent: ", info.message);
        console.log(nodemailer.getTestMessageUrl(info));

        res.render("/Message")
    });
});

module.exports = router;
