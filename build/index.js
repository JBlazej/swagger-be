"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _server = require("./server");

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Start Express server.
 */
var index = _server2.default.listen(_server2.default.get("port"), function () {
  console.log("  App is running at http://localhost:%d in %s mode", _server2.default.get("port"), _server2.default.get("env"));
  console.log("  Press CMD-C to stop\n");
});

exports.default = index;
//# sourceMappingURL=index.js.map