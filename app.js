var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var { MongoClient } = require("mongodb");
var session = require('express-session');
var MongoStore =require("connect-mongo")(session);
var database = require("./lib/database");

app.use(session({
    secret: 'asadlfkj!@#!@#dfgasdg',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
        clinet:new MongoClient(database.uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true 
        })
    })
}));

var passport = require('./lib/passport')(app);



var boardRouter = require("./routes/board");
var authRouter = require("./routes/auth");
var myPetRouter = require("./routes/myPet");


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', authRouter);
app.use('/board', boardRouter);
app.use('/my_pet', myPetRouter);

module.exports = app;
