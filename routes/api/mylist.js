const express = require('express');
const router = express.Router();
const db2 = require("../../db/db");
const db = require("../../models");


// GET api/mylist

router.get('/', authenticationMiddleware(), function (req, res, next) {
    var id = req.user.user_id
    console.log(id);
    
    db2.query('SELECT * FROM Selections WHERE UserId = ?',[id], (error, results, fields) => {
        if (error) {
            console.log(error);
        }
        res.send(JSON.stringify(results));

    });

});

// POST api/mylist

// POST api/mylist

router.post('/saved', authenticationMiddleware(), (req, res, next) => {
    var today = Date.now;
    var id = req.user.user_id
    var nonProfit = {
        'ein': req.body.ein,
        'charityName': req.body.charityName,
        'mission': req.body.mission,
        'url': req.body.url,
        'cause': req.body.cause,
        'UserId': id,
        'updatedAt': today,
        'createdAt': today
    }
    console.log('from react:', req.body.ein);
    db2.query('INSERT INTO selections SET ?', [nonProfit], (error, results, fields) => {
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

router.post('/', authenticationMiddleware(), (req, res, next) => {
    var nonProfit = {
        'id': req.body.id
    }
    // var userId = req.user.user_id
    db2.query('DELETE * FROM selections WHERE id = ?', [nonProfit], (error, results, fields) => {
        if (error) {
            console.log(error);
        } else {
            console.log('List updated');
            res.json(results);
            // results.remove();
            // res.json({successs: true});
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