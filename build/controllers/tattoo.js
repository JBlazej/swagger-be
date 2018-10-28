'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tattooDeleteById = exports.tattooModifyByName = exports.tattooUploadNewImage = exports.tattooFindImage = exports.tattooCreate = exports.tattooByAlbumAndName = exports.tattooByAlbum = exports.tattooAll = undefined;

// TATTOO Controller
// -----------------------------------------------------------------------------
var tattooAll = exports.tattooAll = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var tattoo;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return (0, _tattoo.getTattooAll)();

                    case 3:
                        tattoo = _context.sent;

                        res.status(200).send(tattoo);
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

    return function tattooAll(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var tattooByAlbum = exports.tattooByAlbum = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var tattoo;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return (0, _tattoo.getTattooByAlbum)(req.params.album);

                    case 3:
                        tattoo = _context2.sent;

                        if (!(tattoo.length === 0)) {
                            _context2.next = 8;
                            break;
                        }

                        return _context2.abrupt('return', res.status(400).json({ error: 'No images in Album' }));

                    case 8:
                        res.status(200).send(tattoo);

                    case 9:
                        _context2.next = 14;
                        break;

                    case 11:
                        _context2.prev = 11;
                        _context2.t0 = _context2['catch'](0);

                        res.status(400).json({ error: 'Bad request' });

                    case 14:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[0, 11]]);
    }));

    return function tattooByAlbum(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var tattooByAlbumAndName = exports.tattooByAlbumAndName = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var tattoo;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        _context3.next = 3;
                        return (0, _tattoo.getTattooByAlbumAndName)(req.params.name, req.params.album);

                    case 3:
                        tattoo = _context3.sent;

                        if (!(tattoo.length === 0)) {
                            _context3.next = 8;
                            break;
                        }

                        return _context3.abrupt('return', res.status(400).json({ error: 'No image in Album' }));

                    case 8:
                        res.status(200).send(tattoo);

                    case 9:
                        _context3.next = 14;
                        break;

                    case 11:
                        _context3.prev = 11;
                        _context3.t0 = _context3['catch'](0);

                        res.status(400).json({ error: 'Bad request' });

                    case 14:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[0, 11]]);
    }));

    return function tattooByAlbumAndName(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

var tattooCreate = exports.tattooCreate = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var tattoo;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.prev = 0;
                        _context4.next = 3;
                        return (0, _tattoo.createNewTatttoo)(req.body);

                    case 3:
                        tattoo = _context4.sent;

                        res.status(200).json({ good: 'Tattoo created' });
                        _context4.next = 10;
                        break;

                    case 7:
                        _context4.prev = 7;
                        _context4.t0 = _context4['catch'](0);

                        res.status(400).json({ error: 'Bad request' });

                    case 10:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this, [[0, 7]]);
    }));

    return function tattooCreate(_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}();

var tattooFindImage = exports.tattooFindImage = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        var options, fileName;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.prev = 0;
                        _context5.next = 3;
                        return (0, _file.getFileOptions)();

                    case 3:
                        options = _context5.sent;
                        fileName = req.params.name;


                        res.sendFile(fileName, options, function (err) {
                            if (err) return res.status(404).json({
                                error: {
                                    msg: 'File not found'
                                }
                            });

                            res.status(200);
                        });
                        _context5.next = 11;
                        break;

                    case 8:
                        _context5.prev = 8;
                        _context5.t0 = _context5['catch'](0);

                        res.status(400).json({ error: 'Bad request' });

                    case 11:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this, [[0, 8]]);
    }));

    return function tattooFindImage(_x9, _x10) {
        return _ref5.apply(this, arguments);
    };
}();

var tattooUploadNewImage = exports.tattooUploadNewImage = function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
        var final;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        _context6.prev = 0;

                        if (req.files) {
                            _context6.next = 3;
                            break;
                        }

                        return _context6.abrupt('return', res.status(400).json({
                            error: {
                                msg: 'No file send or name of image already existed'
                            }
                        }));

                    case 3:
                        _context6.next = 5;
                        return (0, _file.uploadFile)(req.files);

                    case 5:
                        final = _context6.sent;

                        if (!(final === false)) {
                            _context6.next = 10;
                            break;
                        }

                        return _context6.abrupt('return', res.status(400).json({
                            error: {
                                msg: 'Name of image already existed'
                            }
                        }));

                    case 10:
                        res.status(200).json({ good: 'Tattoo image uploaded' });

                    case 11:
                        _context6.next = 16;
                        break;

                    case 13:
                        _context6.prev = 13;
                        _context6.t0 = _context6['catch'](0);

                        res.status(400).json({ error: 'Bad request' });

                    case 16:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _callee6, this, [[0, 13]]);
    }));

    return function tattooUploadNewImage(_x11, _x12) {
        return _ref6.apply(this, arguments);
    };
}();

var tattooModifyByName = exports.tattooModifyByName = function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
        var payload, name, tattoo;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        _context7.prev = 0;
                        payload = req.body;
                        name = req.params.name;
                        _context7.next = 5;
                        return (0, _tattoo.modifyTattooByName)(name, payload);

                    case 5:
                        tattoo = _context7.sent;

                        if (!(tattoo === null)) {
                            _context7.next = 10;
                            break;
                        }

                        return _context7.abrupt('return', res.status(400).json({ error: 'Nothing changed' }));

                    case 10:
                        res.status(200).send(tattoo);

                    case 11:
                        _context7.next = 16;
                        break;

                    case 13:
                        _context7.prev = 13;
                        _context7.t0 = _context7['catch'](0);

                        res.status(400).json({ error: 'Bad request' });

                    case 16:
                    case 'end':
                        return _context7.stop();
                }
            }
        }, _callee7, this, [[0, 13]]);
    }));

    return function tattooModifyByName(_x13, _x14) {
        return _ref7.apply(this, arguments);
    };
}();

var tattooDeleteById = exports.tattooDeleteById = function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
        var id, tattoo;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        _context8.prev = 0;
                        id = req.params.id;
                        _context8.next = 4;
                        return (0, _tattoo.deleteTattooById)(id);

                    case 4:
                        tattoo = _context8.sent;

                        console.log(id);
                        console.log(tattoo);
                        res.status(200).send(tattoo);

                        _context8.next = 13;
                        break;

                    case 10:
                        _context8.prev = 10;
                        _context8.t0 = _context8['catch'](0);

                        res.status(400).json({ error: 'Bad request' });

                    case 13:
                    case 'end':
                        return _context8.stop();
                }
            }
        }, _callee8, this, [[0, 10]]);
    }));

    return function tattooDeleteById(_x15, _x16) {
        return _ref8.apply(this, arguments);
    };
}();

var _tattoo = require('../models/v0/tattoo');

var _file = require('../services/file');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=tattoo.js.map