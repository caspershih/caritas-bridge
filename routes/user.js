var express = require("express");
var router = express.Router();
var bcrypt = require("bcryptjs");
const saltRounds = 10;
var path = require("path");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var expressValidator = require('express-validator');
var db = require("../models");
const db2 = require("../db/db");

//Redirect to login page
// router.get('/', function (req, res) {
//     res.redirect('/login');
// });
// Serve login page
router.get('/login', function (req, res) {
    // res.render('login');
    // res.sendFile(path.join(__dirname, "../public/login.html"));
    res.json();
});

router.get('/profile', authenticationMiddleware(), function (req, res, next) {
    var id = req.user.user_id
    console.log(id);
    
    db2.query('SELECT * FROM users WHERE id = ?',[id], (error, results, fields) => {
        if (error) {
            console.log(error);
        }
        res.send(JSON.stringify(results));

    });

});



// POST login
router.post('/login', passport.authenticate('local', 
{
    successRedirect: '/Account',
    failureRedirect: '/'
}));

// GET logout
router.get('/logout', function (req, res) {
    req.logout();
    req.session.destroy();
    res.redirect('/');
    res.json();
});

//GET register page
// router.get('/register', function (req, res) {
//     // res.render('createprofile');
//     // res.sendFile(path.join(__dirname, "../public/createprofile.html"));
//     res.json();
// });


// POST to register page
router.post('/register', function (req, res, next) {
    var today = Date();
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        var user = {
            'firstName': req.body.fname,
            'lastName': req.body.lname,
            'address': req.body.address,
            'city': req.body.city,
            'state': req.body.state,
            'zip': req.body.zip,
            'phone': req.body.phone,
            'email': req.body.email,
            'password': hash,
            'createdAt': today,
            'updatedAt': today
        }
        db2.query('INSERT INTO users SET ?', user, function (error, results, fields) {
            if (error) {
                console.log(error); // add code to notify user email exists
                // res.redirect('/user/Profile'); //not sure what should happen here
            } 
            else {
                db2.query('SELECT LAST_INSERT_ID() as user_id', function(error, results, fields) {
                    if (error) throw error; 
                    const user_id = results[0]; 
                    console.log(results[0])
                    req.login(user_id, function(err) {
                        // res.redirect('/homepage')
                        res.json(results);
                        
                    });
                })   
            }
        });
    });
});

passport.serializeUser(function(user_id, done) {
    done(null, user_id);
});

passport.deserializeUser(function(user_id, done) {
    done(null, user_id);
});

function authenticationMiddleware() {
    return (req, res, next) => {
            if (req.isAuthenticated()) return next();
            res.redirect('/user/login');
    }
}

module.exports = router;

