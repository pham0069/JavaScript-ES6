'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMessage = getMessage;
exports.setMessage = setMessage;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var message = exports.message = '';

function getMessage() {
  return message;
}

function setMessage(msg) {
  exports.message = message = msg;
}

var Logger = exports.Logger = function Logger() {
  _classCallCheck(this, Logger);
};