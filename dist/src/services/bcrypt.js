'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isValidPassword = exports.createHash = undefined;

var createHash = exports.createHash = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(password) {
        var salt, hash;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        salt = _bcryptNode2.default.genSaltSync();
                        hash = _bcryptNode2.default.hashSync(password, salt);
                        return _context.abrupt('return', hash);

                    case 3:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function createHash(_x) {
        return _ref.apply(this, arguments);
    };
}();

var isValidPassword = exports.isValidPassword = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(pw, hash) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        return _context2.abrupt('return', _bcryptNode2.default.compareSync(pw, hash));

                    case 1:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function isValidPassword(_x2, _x3) {
        return _ref2.apply(this, arguments);
    };
}();

var _bcryptNode = require('bcrypt-node');

var _bcryptNode2 = _interopRequireDefault(_bcryptNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }