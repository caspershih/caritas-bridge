const express = require('express');
const router = express.Router();
const db2 = require("../../db/db");
const db = require("../../models");


// GET api/mylist

router.get('/', authenticationMiddleware(), (req, res) => {
    const category = 'Animals';
    db2.query('SELECT * FROM nonprofits WHERE category = ?', [category], (error, results, fields) => {
        if (error) {
            console.log(error);
        }
        res.json(results);

    })

});

// POST api/mylist

router.post('/add', authenticationMiddleware(), (req, res, next) => {
    var today = Date.now;
    // var id = req.user.user_id
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
    db2.query('INSERT INTO nonprofits SET ?', [list], (error, results, fields) => {
        if (error) {
            console.log(error);
        } else {
            // res.redirect('/products/add');
            console.log('List updated');
            res.json(results); 
        }
    });
    console.log(req.isAuthenticated());
    // res.sendFile(path.join(__dirname, "../public/addproduct.html"));
});


// DELETE api/mylist/:id

router.delete('/:id', authenticationMiddleware(), (req, res, next) => {
    var id = id.this
    db2.query('SELECT * FROM selections WHERE id = ?', [req.params.id], (error, results, fields) => {
        if (error) {
            console.log(error);
        } else {
            console.log('List updated');
            results.remove();
            res.json({successs: true});
        }
    });

    // res.sendFile(path.join(__dirname, "../public/addproduct.html"));
});

function authenticationMiddleware() {
    return (req, res, next) => {
            if (req.isAuthenticated()) return next();
            res.redirect('/user/login');
    }
}



module.exports = router;