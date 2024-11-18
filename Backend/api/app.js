var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require("./routes/testAPI");
var addEntryRouter = require("./routes/add-entry");
var getEntryRouter = require("./routes/get-entry");
var getEntryStudentRouter = require("./routes/get-entry-student");
var getEntryFacultyRouter = require("./routes/get-entry-faculty");
var getEntrySupportRouter = require("./routes/get-entry-support");
var getEntryVisitorsRouter = require("./routes/get-entry-visitors");
var deleteEntryRouter = require("./routes/delete-entry");
var mysql = require('mysql2');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);
app.use("/add-entry", addEntryRouter);
app.use("/delete-entry", deleteEntryRouter);
app.use("/get-entry", getEntryRouter);
app.use("/get-entry-student", getEntryStudentRouter);
app.use("/get-entry-faculty", getEntryFacultyRouter);
app.use("/get-entry-visitors", getEntryVisitorsRouter);
app.use("/get-entry-support", getEntrySupportRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
