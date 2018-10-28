'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _requireDir = require('require-dir');

var _requireDir2 = _interopRequireDefault(_requireDir);

var _auth = require('./services/auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
var controllers = (0, _requireDir2.default)('./controllers');

// Source https://strongloop.com/strongblog/async-error-handling-expressjs-es7-promises-generators/#usinges7asyncawait
var wrap = function wrap(fn) {
  return function () {
    return fn.apply(undefined, arguments).catch(arguments.length <= 2 ? undefined : arguments[2]);
  };
};

// HOME
router.get('/', function (req, res) {
  res.sendFile(__dirname + '/page/index.html');
});

// USER
router.post('/api/user/sign-up', _auth.verifyJsonWebToken, wrap(controllers.user.userCreate));
router.post('/api/user/sign-in', wrap(controllers.user.userSignIn));

// TATTOO
router.get('/api/tattoo/all', wrap(controllers.tattoo.tattooAll));
router.get('/api/tattoo/:album', wrap(controllers.tattoo.tattooByAlbum));
router.get('/api/tattoo/:album/:name', wrap(controllers.tattoo.tattooByAlbumAndName));
router.get('/api/tattoo/image/src/:name', wrap(controllers.tattoo.tattooFindImage));

router.post('/api/tattoo/save-record', wrap(controllers.tattoo.tattooCreate));
router.post('/api/tattoo/upload-image', wrap(controllers.tattoo.tattooUploadNewImage));

router.put('/api/tattoo/modify/:name', wrap(controllers.tattoo.tattooModifyByName));

router.delete('/api/tattoo/delete/:id', wrap(controllers.tattoo.tattooDeleteById));

exports.default = router;
//# sourceMappingURL=router.js.map