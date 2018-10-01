require("dotenv").config();
var path = require("path");
var cookieParser = require("cookie-parser");
var expressValidator = require("express-validator");
var session = require("express-session");
var MySQLStore = require("express-mysql-session")(session);
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var express = require("express");
var bodyParser = require("body-parser");
var bcrypt = require('bcryptjs');
const db2 = require("./db/db.js");


// Init App
const app = express();
var PORT = process.env.PORT || 5000;


// Static directory
app.use("/public", express.static(__dirname + "/public"));

// Requiring our models for syncing
var db = require("./models");
var connection = require('./db/db');

// Define Routes
// var index = require('./routes/index');
const user = require('./routes/user');
const list = require('./routes/mylist');
const mylist = require('./routes/api/mylist');

// // Middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());

// app.engine("handlebars", exphbs({ defaultLayout: "main"}));
// app.set("views", path.join(__dirname, 'views'));
// app.set('view engine', 'handlebars');

var options = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

var sessionStore = new MySQLStore(options);

app.use(session({
  secret: 'myRandomSecret',
  saveUninitialized: false,
  resave: false,
  store: sessionStore,
  // cookie: {secure: true}
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());



// Connect Flash
// app.use(flash());


// Routes
// app.use('/', index);
app.use('/user', user);
app.use('/mylist', list);
app.use('/api/mylist', mylist);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

passport.use(new LocalStrategy({
  usernameField: 'email'
},
  function (username, password, done) {
    // console.log(username);
    // console.log(password);
    db2.query('SELECT id, password FROM users WHERE email = ?', [username], function(err, results) {
      if (err) {done(err)};

      if (results.length === 0) {
        done(null, false);
      } else {
        // console.log(results[0])
        var hash = results[0].password.toString();
        bcrypt.compare(password, hash, function(err, response) {
          if (response === true) {
            return done(null, {user_id: results[0].id});
          } else {
            return done(null, false);
          }
        });
      }
      }) 
  }));

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
