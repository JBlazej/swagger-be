'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeDBconnection = exports.connectDB = undefined;

var connectDB = exports.connectDB = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var url;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = getMongoUrl();
            _context.prev = 1;
            _context.next = 4;
            return _mongoose2.default.connect(url, { useNewUrlParser: true });

          case 4:
            db = _context.sent;

            console.log('  DB connection OK');
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](1);

            console.log(_context.t0);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 8]]);
  }));

  return function connectDB() {
    return _ref.apply(this, arguments);
  };
}();

var closeDBconnection = exports.closeDBconnection = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (db) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt('return');

          case 2:
            _context2.next = 4;
            return db.close(true);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function closeDBconnection() {
    return _ref2.apply(this, arguments);
  };
}();

exports.getDB = getDB;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var db = void 0;

function getMongoUrl() {
  var url = 'ds143593.mlab.com:43593/heroku_w4lj9scn';
  var user = 'swagger';
  var pass = 'abc1234567';

  return 'mongodb://' + user + ':' + pass + '@' + url;
}

function getDB() {
  if (!db) throw new Error(500, 'Database connection error');
  return db;
}
//# sourceMappingURL=index.js.map