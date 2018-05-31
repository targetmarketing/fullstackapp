const express = require('express');
const app = express();
const path = require('path');
const createError = require('http-errors')
const indexRouter = require('./routes/index') 
const bodyParser = require('body-parser')

app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',indexRouter)

// catch error
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;