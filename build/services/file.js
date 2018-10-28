'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.uploadFile = exports.getFileOptions = undefined;

var getFileOptions = exports.getFileOptions = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var options;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        options = {
                            root: serverImagesPath,
                            dotfiles: 'deny',
                            headers: {
                                'x-timestamp': Date.now(),
                                'x-sent': true
                            }
                        };
                        return _context.abrupt('return', options);

                    case 2:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function getFileOptions() {
        return _ref.apply(this, arguments);
    };
}();

var uploadFile = exports.uploadFile = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(setFile) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        if (!_fs2.default.existsSync(serverImagesPath + '/' + setFile.files.name)) {
                            _context2.next = 4;
                            break;
                        }

                        return _context2.abrupt('return', false);

                    case 4:
                        setFile.files.mv(serverImagesPath + '/' + setFile.files.name);
                        return _context2.abrupt('return', true);

                    case 6:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function uploadFile(_x) {
        return _ref2.apply(this, arguments);
    };
}();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var serverImagesPath = _path2.default.join(__dirname, '../../public', 'images');
//# sourceMappingURL=file.js.map