'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Prior ES6, JavaScript had no classes. 
 * To mimic a class, we often use a constructor function
 * 
 * 
 * 
// Constructor function  with property name called type
function Animal(type) {
    this.type = type;
}
// Assign identify method to Animal prototype so that it can be shared by all instances of the Animal type 
Animal.prototype.identify = function() {
    console.log(this.type);
}
// Create new instance of Animal type using new operator 
var cat = new Animal('Cat');
cat.identify(); // Cat
 * 
 * 
 * 
 */

/**
 * ES6 introduced a new syntax for creating a class
 * No need function keyword before constructor and method definition
 * Note that if no constructor defined, JS will automatically add a default empty constructor to class
 * Note that class declaration is just syntactic sugar of the constructor function
 */
require('babel-register');

var Animal = function () {
    // constructor
    function Animal(type) {
        _classCallCheck(this, Animal);

        this.type = type;
    }
    // method


    _createClass(Animal, [{
        key: 'identify',
        value: function identify() {
            console.log(this.type);
        }
    }]);

    return Animal;
}();

var cat = new Animal('Cat');
cat.identify(); // Cat
console.log(cat instanceof Animal); // true
console.log(cat instanceof Object); // true
console.log(typeof Animal === 'undefined' ? 'undefined' : _typeof(Animal)); // function, not object
console.log(_typeof(Animal.prototype));