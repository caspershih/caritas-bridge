const nodemailer = require("nodemailer");

app.get("/Message", (req, res) => {
    res.render("contact");
});

//The POST route
app.post("/Message", (req, res) => {
    const output = `
    <ul>
        <li>Name: ${req.body.name} </li>
        <li>E-mail: ${req.body.email} </li>
        <li>Comments: ${req.body.comments} </li>
    </ul>
    `;

    let transporter = nodemailer.createTransport( {
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: "k2ehxzlx36nubj6o@ethereal.email",
            pass: "nSgA8PekxPC5Z9jPyb"
        },
        tls: {
            rejectUnauthorized: false
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

        res.render("contact")
    });
});

//App listening to port 3000
app.listen(3000, () => console.log("Server is listening to port 3000"));
