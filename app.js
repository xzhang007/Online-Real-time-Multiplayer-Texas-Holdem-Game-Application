var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var passport = require('passport'); 
// var LocalStrategy = require('passport-local').Strategy; 
// var flash = require('connect-flash'); 
var session = require('express-session'); 
// require('./auth/passport.js')(passport); 

var index = require('./routes/index');
var users = require('./routes/users');

var rooms = require('./routes/rooms');
var userprofile = require('./routes/userprofile');
var register = require('./routes/register');
var rounds = require('./routes/rounds');
var auth = require('./routes/auth');
var login = require('./routes/login');
var lobby = require('./routes/lobby');
var game = require('./routes/game');
var messages = require('./routes/messages');


var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: "Secret Key!", cookie: {secure: false}})); //todo check
app.use(session({resave:true, saveUninitialized:true, secret: 'SECRET',cookie: { maxAge: 60000 }})); //todo check

app.use('/', lobby);
app.use('/login', login);
app.use('/api/auth', auth);

/*app.use(function (req, res, next) {
  if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      next();
    }
});*/

app.use('/lobby', lobby);
app.use('/game', game);
app.use('/api/users', users);
app.use('/api/rooms', rooms);
app.use('/api/userprofile', userprofile);
app.use('/api/register', register);
app.use('/api/rounds', rounds);
app.use('/api/messages', messages);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
