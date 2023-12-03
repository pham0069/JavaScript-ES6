'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * JavaScript class is a first-class citizen. 
 * It means that you can 
 * 1. pass a class into a function, 
 * 2. return it from a function,
 * 3. assign it to a variable.
 */

function factory(aClass) {
  // return a class
  return new aClass();
}
// pass a class as argument
var greeting = factory(function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: 'sayHi',
    value: function sayHi() {
      console.log('Hi');
    }
  }]);

  return _class;
}());

greeting.sayHi(); // 'Hi'