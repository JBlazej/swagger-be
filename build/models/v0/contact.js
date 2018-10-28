'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _ = require('..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// CONTACT SCHEMA
// -----------------------------------------------------------------------------
var ContactSchema = new _mongoose2.default.Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  phone: {
    type: String
  }
});

// METHODS
// -----------------------------------------------------------------------------
//# sourceMappingURL=contact.js.map