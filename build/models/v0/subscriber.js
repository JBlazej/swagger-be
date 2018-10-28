'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNewSubs = exports.getSubsAll = undefined;

// METHODS
// -----------------------------------------------------------------------------
var getSubsAll = exports.getSubsAll = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var subs;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _.getDB)().model('Subscriber', SubscriberSchema).find({});

          case 2:
            subs = _context.sent;
            return _context.abrupt('return', subs);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getSubsAll() {
    return _ref.apply(this, arguments);
  };
}();

var createNewSubs = exports.createNewSubs = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(email) {
    var Subs, subs;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _.getDB)().model('Subscriber', SubscriberSchema);

          case 2:
            Subs = _context2.sent;
            subs = new Subs({ email: email });

            subs.save();

            return _context2.abrupt('return', subs);

          case 6:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function createNewSubs(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _ = require('..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// SUBSCRIBERS SCHEMA
// -----------------------------------------------------------------------------
var SubscriberSchema = new _mongoose2.default.Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  isSub: {
    type: Boolean,
    default: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});
//# sourceMappingURL=subscriber.js.map