var express = require('express');
var compression = require('compression');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// route config 路由配置
var index = require('./routes/index');
// api config 接口配置
var financeApi = require('./api/finance');

// compress responses 
app.use(compression());
// 设置项目logo
app.use(favicon(__dirname + '/public/favicon.ico'));
// 设置静态资源路径
app.use(express.static(path.join(__dirname, 'fe')));
// 设置模板文件路径
app.set('views', path.join(__dirname, 'fe/template'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));     //打印到控制台
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', index);
app.use('/api/finance', financeApi);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('../404', {});
  // res.render('error');
});

module.exports = app;
