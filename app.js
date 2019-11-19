var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var connnectionRouter = require('./routes/connection');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*app.post("/connection/signUp",function (req,res){
    console.log(req.body);
});*/


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/connection',connnectionRouter);

module.exports = app;
