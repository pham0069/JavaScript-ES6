'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Prior ES6, to create a static method, you add the method directly onto the constructor. 
 * 
 * 
function Animal(type) {
    this.type = type;
}
 Animal.make = function(type) {
    return new Animal(type);
} 
var dog = Animal.make('Dog');
dog.identify(); // Dog
 * 
 *
 * ES6 simplified this by providing static notation before method name 
 * Note that static class cannot be accessed from instance
 */
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
    }], [{
        key: 'create',
        value: function create(type) {
            return new Animal(type);
        }
    }]);

    return Animal;
}();

var mouse = Animal.create('Mouse');
mouse.identify(); // Mouse
// mouse.create('Monkey'); // Uncaught TypeError: mouse.create is not a function