var express = require("express");
var router = express.Router();
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var path = require("path");
var db = require("../models");
var path = require("path");
var bcrypt = require("bcryptjs");
const db2 = require("../db/db");
var exphbs = require('express-handlebars');


// GET company list
router.get('/', authenticationMiddleware(), function (req, res) {
    var id = req.user.user_id;
    db2.query('SELECT * FROM Users WHERE UserId = ?', [id], function (error, results, fields) {
        if (error) {
            console.log(error); // add code to notify user email exists   
        } 
        if (results.length !== 0) {
            console.log(results);
            
        }
        res.render('saved', {nonProfits: results});
    });
});


//POST add charity
router.post('/', authenticationMiddleware(), function (req, res, next) {
    var today = Date.now;
    var id = req.user.user_id

    var list = {
        'charityName': req.body.charityName,
        'address1': req.body.address1,
        'address2': req.body.address2,
        'city': req.body.city,
        'state': req.body.state,
        'zip': req.body.zip,
        'cause': req.body.cause,
        'mission': req.body.mission,
        'webURL': req.body.webURL,
        'ein': req.body.ein,
        'createdAt': today,
        'updatedAt': today,
        'UserId': id
    }
    db2.query('INSERT INTO nonProfits SET ?', list, function (error, results, fields) {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/nonProfits/add');
            console.log('Charity added'); 
        }
    });
    console.log(req.isAuthenticated());
    // res.sendFile(path.join(__dirname, "../public/addproduct.html"));
});


function authenticationMiddleware() {
    return (req, res, next) => {
            if (req.isAuthenticated()) return next();
            res.redirect('/');
    }
}


module.exports = router;