'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _ = require('..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// LOGO SCHEMA
// -----------------------------------------------------------------------------
var LogoSchema = new _mongoose2.default.Schema({
    img: {
        url: {
            type: String
        }
    }
});

// METHODS
// -----------------------------------------------------------------------------