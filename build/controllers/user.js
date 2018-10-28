'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userSignIn = exports.userCreate = exports.userById = exports.userAll = undefined;

// USER Controller
// -----------------------------------------------------------------------------
var userAll = exports.userAll = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _user.getUserAll)();

          case 3:
            user = _context.sent;

            res.status(200).send(user);
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);

            res.status(400).json({ error: 'Bad request' });

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));

  return function userAll(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var userById = exports.userById = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return (0, _user.getUserById)(id);

          case 4:
            user = _context2.sent;

            res.status(200).send(user);
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2['catch'](0);

            res.status(400).json({ error: 'Bad request' });

          case 11:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 8]]);
  }));

  return function userById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var userCreate = exports.userCreate = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var email, password, userCheck, hash, user;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            email = req.body.email;
            password = req.body.password;
            _context3.next = 5;
            return (0, _user.getUserByEmail)(email);

          case 5:
            userCheck = _context3.sent;

            if (!(!password || !email || userCheck.length === 1)) {
              _context3.next = 10;
              break;
            }

            return _context3.abrupt('return', res.status(400).json({ error: 'Email existed or password not provided' }));

          case 10:
            _context3.next = 12;
            return (0, _bcrypt.createHash)(password);

          case 12:
            hash = _context3.sent;
            _context3.next = 15;
            return (0, _user.createNewUser)(email, hash);

          case 15:
            user = _context3.sent;

            res.status(200).json({ good: 'User created' });

          case 17:
            _context3.next = 22;
            break;

          case 19:
            _context3.prev = 19;
            _context3.t0 = _context3['catch'](0);

            res.status(400).json({ error: 'Bad request' });

          case 22:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 19]]);
  }));

  return function userCreate(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var userSignIn = exports.userSignIn = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var email, password, user, userId, hashPasswd, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, value, userSignature, JsonWebToken;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            email = req.body.email;
            password = req.body.password;
            _context4.next = 5;
            return (0, _user.getUserByEmail)(email);

          case 5:
            user = _context4.sent;
            userId = [];
            hashPasswd = [];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context4.prev = 11;


            for (_iterator = Object.values(user)[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              value = _step.value;

              hashPasswd.push(value.password);
              userId.push(value._id);
            }

            _context4.next = 19;
            break;

          case 15:
            _context4.prev = 15;
            _context4.t0 = _context4['catch'](11);
            _didIteratorError = true;
            _iteratorError = _context4.t0;

          case 19:
            _context4.prev = 19;
            _context4.prev = 20;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 22:
            _context4.prev = 22;

            if (!_didIteratorError) {
              _context4.next = 25;
              break;
            }

            throw _iteratorError;

          case 25:
            return _context4.finish(22);

          case 26:
            return _context4.finish(19);

          case 27:
            if (!(user.length === 0 || !(0, _bcrypt.isValidPassword)(password, hashPasswd.toString()))) {
              _context4.next = 31;
              break;
            }

            return _context4.abrupt('return', res.status(401).json({ error: 'Unauthorized Access' }));

          case 31:
            userSignature = {
              'email': email,
              '_id': userId.toString()
            };
            _context4.next = 34;
            return (0, _auth.issueJsonWebToken)(userSignature);

          case 34:
            JsonWebToken = _context4.sent;


            res.status(200).json({
              email: email,
              token: JsonWebToken
            });

          case 36:
            _context4.next = 41;
            break;

          case 38:
            _context4.prev = 38;
            _context4.t1 = _context4['catch'](0);

            res.status(400).json({ error: 'Bad request' });

          case 41:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 38], [11, 15, 19, 27], [20,, 22, 26]]);
  }));

  return function userSignIn(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var _user = require('../models/v0/user');

var _bcrypt = require('../services/bcrypt');

var _auth = require('../services/auth');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=user.js.map