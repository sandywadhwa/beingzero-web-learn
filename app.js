require('dotenv').config();  // Make it first line
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dbconnect = require('./backend/lib/connectLib');
var session = require('express-session');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var config = require('./backend/config/config');
var MongoStore = require('connect-mongo');
require('./backend/lib/dbUsersBootstrap').createUsers();

var app = express();

app.set('view engine', 'ejs');
app.set('views', './public/views');
dbconnect.connect();
app.use(session({
    resave:false, 
    saveUninitialized:false, 
    secret:config.session_secret, 
    store: MongoStore.create({ mongoUrl: config.mongo_connection_string })
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
    console.log(req.session);
    next();
})

app.get('/index', function(req, res){
    res.render('index', {pageTitle:'being zero page', pageContent: 'Hello from EJS', languages:['C', 'C++', 'JAVA', 'PY']});
})
app.use('/', indexRouter);
app.use('/api', usersRouter);

module.exports = app;
