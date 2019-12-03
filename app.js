var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var { MongoClient } = require("mongodb");
var session = require('express-session');
var database = require("./lib/database");
var MongoStore =require("connect-mongo")(session);

var app = express();
app.use(session({
    secret: 'asadlfkj!@#!@#dfgasdg',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
        url:database.uri+`/${database.dbName}`
    })
}));

var passport = require('./lib/passport')(app);



var boardRouter = require("./routes/board");
var authRouter = require("./routes/auth")(passport);
var myPetRouter = require("./routes/myPet");



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', authRouter);
app.use('/board', boardRouter);
app.use('/my_pet', myPetRouter);

module.exports = app;
