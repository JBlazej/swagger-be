'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

require('babel-polyfill');

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _expressFileupload = require('express-fileupload');

var _expressFileupload2 = _interopRequireDefault(_expressFileupload);

var _cors3 = require('./conf/cors');

var _models = require('./models');

var _herokuSslRedirect = require('heroku-ssl-redirect');

var _herokuSslRedirect2 = _interopRequireDefault(_herokuSslRedirect);

var _wake = require('./services/wake');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// EXPRESS JS
var app = (0, _express2.default)();
// DB
(0, _models.connectDB)();
(0, _wake.wakeUpServer)();
// CORS
app.use((0, _cors2.default)(_cors3.corsOptions));
// SSL
app.use((0, _herokuSslRedirect2.default)());
// PUBLIC
app.use('/public', _express2.default.static(__dirname + '../public/'));
// BODY
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
// COOKIE
app.use((0, _cookieParser2.default)());
// FAV
app.use((0, _serveFavicon2.default)(_path2.default.join(__dirname, '../public', 'favicon.ico')));
// FILES
app.use((0, _expressFileupload2.default)());
// ROUTER
app.use(_router2.default);
// PORT
app.set('port', process.env.PORT || 3000);

// HANDLINGS ERRORS
var shuttingDown = false;

app.use(function (req, res, next) {
  if (!shuttingDown) return next();

  res.setHeader('Connection', 'close');
  var err = new Error('Server is in the process of restarting');
  err.status = 503;
  next(err);
});

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send({ 'error': err.message });
  if (app.get('env') === 'development') {
    _logger2.default.error(err);
  }
});

exports.default = app;
//# sourceMappingURL=server.js.map