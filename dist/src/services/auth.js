'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyJsonWebToken = exports.issueJsonWebToken = undefined;

var issueJsonWebToken = exports.issueJsonWebToken = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(payload) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', _jsonwebtoken2.default.sign(payload, secret, { expiresIn: 10800 }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function issueJsonWebToken(_x) {
    return _ref.apply(this, arguments);
  };
}();

var verifyJsonWebToken = exports.verifyJsonWebToken = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(req.hasOwnProperty('headers') && req.headers.hasOwnProperty('authorization'))) {
              _context2.next = 10;
              break;
            }

            _context2.prev = 1;

            req.user = _jsonwebtoken2.default.verify(req.headers['authorization'], 'secret');
            _context2.next = 8;
            break;

          case 5:
            _context2.prev = 5;
            _context2.t0 = _context2['catch'](1);
            return _context2.abrupt('return', res.status(401).json({
              error: {
                msg: 'Failed to authenticate token!'
              }
            }));

          case 8:
            _context2.next = 11;
            break;

          case 10:
            return _context2.abrupt('return', res.status(401).json({
              error: {
                msg: 'No token!'
              }
            }));

          case 11:
            return _context2.abrupt('return');

          case 12:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[1, 5]]);
  }));

  return function verifyJsonWebToken(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var secret = process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'secret';