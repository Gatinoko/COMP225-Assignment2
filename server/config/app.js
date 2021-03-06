/*
    File name: app.js
    Student: Gabriel Dias Tinoco
    StudentID: 301160373
    Date: 21-Oct-21
*/

/* Installed 3rd party packages. */
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let mongoose = require('mongoose');

/* Authentication modules. */
let session = require('express-session');
let passport = require('passport');
let passportLocal = require('passport-local');
let localStrategy = passportLocal.Strategy;
let flash = require('connect-flash');

/* Database setup. */
let DB = require('./db');
mongoose.connect(DB.URI);
let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error'));
mongoDB.once('open', ()=>{
  console.log('Connected to MongoDB...')
});

/* Server routes. */
let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');

let app = express();

/* View engine setup. */
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs'); // express  -e

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

/* Setup express session. */
app.use(session({
  secret: "ass",
  saveUnitialized: false,
  resave: false
}));

/* Setup flash. */
app.use(flash());

/* Setup passport. */
app.use(passport.initialize());
app.use(passport.session());

/* Setup passport user configuration. */
let userModel = require('../models/user');
let user = userModel.userModel;

// User authentication strategy implementation.
passport.use(user.createStrategy());

// Serialization and deserialization of the user info.
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

/* Catch 404 and forward to error handler. */
app.use(function(req, res, next) {
  next(createError(404));
});

/* Error handler. */
app.use(function(err, req, res, next) {

  // Set locals, only providing error in development.
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page.
  res.status(err.status || 500);
  res.render('error', { title: 'Error'});
});

module.exports = app;
