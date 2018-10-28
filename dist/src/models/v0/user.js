'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNewUser = exports.getUserByEmail = exports.getUserById = exports.getUserAll = undefined;

// METHODS
// -----------------------------------------------------------------------------
var getUserAll = exports.getUserAll = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _.getDB)().model('User', UserSchema).find({});

          case 2:
            user = _context.sent;
            return _context.abrupt('return', user);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getUserAll() {
    return _ref.apply(this, arguments);
  };
}();

var getUserById = exports.getUserById = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
    var user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _.getDB)().model('User', UserSchema).find({ _id: id });

          case 2:
            user = _context2.sent;
            return _context2.abrupt('return', user);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getUserById(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var getUserByEmail = exports.getUserByEmail = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(email) {
    var user;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _.getDB)().model('User', UserSchema).find({ email: email });

          case 2:
            user = _context3.sent;
            return _context3.abrupt('return', user);

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getUserByEmail(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var createNewUser = exports.createNewUser = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(email, password) {
    var User, user;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _.getDB)().model('User', UserSchema);

          case 2:
            User = _context4.sent;
            user = new User({ email: email, password: password });

            user.save();

            return _context4.abrupt('return', user);

          case 6:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function createNewUser(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _ = require('..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// USERS SCHEMA
// -----------------------------------------------------------------------------
var UserSchema = new _mongoose2.default.Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});