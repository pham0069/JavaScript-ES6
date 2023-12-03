'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMessage = setMessage;
var message = exports.message = 'Hi';

function setMessage(msg) {
  exports.message = message = msg;
}