'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMessage = setMessage;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * An ES6 module is a JavaScript file that executes in strict mode only. 
 * It means that any variables or functions declared in the module won’t be added automatically to the global scope.
 * 
 * export keyword requires the function or class to have a name to be exported. 
 * You can’t export an anonymous function or class using this syntax.
 */

var message = exports.message = 'Hi';

function getMessage() {
  return message;
}

function setMessage(msg) {
  exports.message = message = msg;
}

var Logger = exports.Logger = function Logger() {
  _classCallCheck(this, Logger);
};
// Possible to export after function declaration


exports.getMessage = getMessage;
// Rename export binding

exports.sayHi = getMessage;