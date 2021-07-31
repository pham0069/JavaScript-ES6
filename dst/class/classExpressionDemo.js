'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Similar to function, classes also have expression forms
 * Class expression does not require an identifier after class keyword
 * Class expression can be used for variable declaration and passed into function as argument
 * 
 * Similar to function expressions, class expressions are not hoisted
 */
//let duck = new Animal('Duck'); // Error, not hoisted
var Animal = function () {
  function Animal(type) {
    _classCallCheck(this, Animal);

    this.type = type;
  }

  _createClass(Animal, [{
    key: 'identify',
    value: function identify() {
      console.log(this.type);
    }
  }]);

  return Animal;
}();

var duck = new Animal('Duck');

console.log(duck instanceof Animal); // true
console.log(duck instanceof Object); // true

console.log(typeof Animal === 'undefined' ? 'undefined' : _typeof(Animal)); // function
console.log(_typeof(Animal.prototype)); // function