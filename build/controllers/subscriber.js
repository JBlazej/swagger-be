'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.subsCreate = exports.subsAll = undefined;

// USER Controller
// -----------------------------------------------------------------------------
var subsAll = exports.subsAll = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var subs;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return (0, _subscriber.getSubsAll)();

                    case 3:
                        subs = _context.sent;

                        res.status(200).send(subs);
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

    return function subsAll(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var subsCreate = exports.subsCreate = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var subs;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return (0, _subscriber.createNewSubs)(req.body.email);

                    case 3:
                        subs = _context2.sent;

                        console.log(subs);
                        res.status(200).json({ good: 'Tattoo created' });
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

    return function subsCreate(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var _subscriber = require('../models/v0/subscriber');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=subscriber.js.map