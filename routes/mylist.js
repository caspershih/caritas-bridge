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
    db2.query('SELECT * FROM products WHERE UserId = ?', [id], function (error, results, fields) {
        if (error) {
            console.log(error); // add code to notify user email exists   
        } 
        if (results.length !== 0) {
            console.log(results);
            
        }
        res.render('liked', {products: results});
    });
});


//POST add company
router.post('/', authenticationMiddleware(), function (req, res, next) {
    var today = Date.now;
    var id = req.user.user_id

    var list = {
        'company_name': req.body.company_name,
        'company_category': req.body.company_category,
        'createdAt': today,
        'updatedAt': today,
        'UserId': id
    }
    db2.query('INSERT INTO products SET ?', list, function (error, results, fields) {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/products/add');
            console.log('Item added'); 
        }
    });
    console.log(req.isAuthenticated());
    // res.sendFile(path.join(__dirname, "../public/addproduct.html"));
});


function authenticationMiddleware() {
    return (req, res, next) => {
            if (req.isAuthenticated()) return next();
            res.redirect('/login');
    }
}


module.exports = router;