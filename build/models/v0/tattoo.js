'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNewTatttoo = exports.deleteTattooById = exports.modifyTattooByName = exports.getTattooByAlbumAndName = exports.getTattooByAlbum = exports.getTattooAll = undefined;

// METHODS
// -----------------------------------------------------------------------------
var getTattooAll = exports.getTattooAll = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var tattoo;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _.getDB)().model('Tattoo', TattooSchema).find({});

          case 2:
            tattoo = _context.sent;
            return _context.abrupt('return', tattoo);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getTattooAll() {
    return _ref.apply(this, arguments);
  };
}();

var getTattooByAlbum = exports.getTattooByAlbum = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(album) {
    var tattoo;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _.getDB)().model('Tattoo', TattooSchema).find({ "album": album });

          case 2:
            tattoo = _context2.sent;
            return _context2.abrupt('return', tattoo);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getTattooByAlbum(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var getTattooByAlbumAndName = exports.getTattooByAlbumAndName = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(name, album) {
    var tattoo;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _.getDB)().model('Tattoo', TattooSchema).find({ "name": name, "album": album });

          case 2:
            tattoo = _context3.sent;
            return _context3.abrupt('return', tattoo);

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getTattooByAlbumAndName(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

var modifyTattooByName = exports.modifyTattooByName = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(name, payload) {
    var tattoo;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _.getDB)().model('Tattoo', TattooSchema).findOneAndUpdate({ name: name }, payload, { new: true });

          case 2:
            tattoo = _context4.sent;
            return _context4.abrupt('return', tattoo);

          case 4:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function modifyTattooByName(_x4, _x5) {
    return _ref4.apply(this, arguments);
  };
}();

var deleteTattooById = exports.deleteTattooById = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {
    var tattoo;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _.getDB)().model('Tattoo', TattooSchema).findOneAndRemove({ _id: id });

          case 2:
            tattoo = _context5.sent;
            return _context5.abrupt('return', tattoo);

          case 4:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function deleteTattooById(_x6) {
    return _ref5.apply(this, arguments);
  };
}();

var createNewTatttoo = exports.createNewTatttoo = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(payload) {
    var Tattoo, tattoo;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return (0, _.getDB)().model('Tattoo', TattooSchema);

          case 2:
            Tattoo = _context6.sent;
            tattoo = new Tattoo(payload);


            tattoo.save();

            return _context6.abrupt('return', tattoo);

          case 6:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function createNewTatttoo(_x7) {
    return _ref6.apply(this, arguments);
  };
}();

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _ = require('..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var tattooAlbums = ['tattoo', 'navrhy', 'flash'];
var tattooSizes = ['10x10', '15x15', '20x20'];

// TATTTO SCHEMA
// -----------------------------------------------------------------------------
var TattooSchema = new _mongoose2.default.Schema({
  name: {
    type: String,
    default: 'tattooImg'
  },
  size: {
    type: String,
    enum: tattooSizes
  },
  album: {
    type: String,
    enum: tattooAlbums
  },
  image: {
    url: {
      type: String
    }
  },
  created: {
    type: Date,
    default: Date.now
  }
});
//# sourceMappingURL=tattoo.js.map