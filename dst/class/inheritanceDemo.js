'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Prior to ES6, implementing proper inheritance required multiple steps
 * One of the most commonly used strategies is protoypal inheritance
 * 
 * 
function Animal(legs) {
    this.legs = legs;
}
Animal.prototype.walk = function() {
    console.log('Walking on ' + this.legs + ' legs');
}
function Bird(legs) {
    Animal.call(this, legs);
}
// Deep-copy prototype of Animal to Bird
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Animal;
// Add new method to Bird prototype. This will not affect Animal prototype
Bird.prototype.fly = function() {
    console.log('Flying');
} 
var pigeon = new Bird(2);
pigeon.walk(); // Walking on 2 legs
pigeon.fly(); // Flying
 * 
 * 
 * ES6 simplified these steps by using the extends and super keywords
 * Note that class version is just the syntactic sugar for the prototypal inheritance. 
 * In other words, JavaScript uses classes for the syntax 
 * but still realizes on the prototype mechanism
 */

var Animal = function () {
    function Animal(legs) {
        _classCallCheck(this, Animal);

        this.legs = legs;
    }

    _createClass(Animal, [{
        key: 'walk',
        value: function walk() {
            console.log('Walking on ' + this.legs + ' legs');
        }
    }], [{
        key: 'helloWorld',
        value: function helloWorld() {
            console.log('Hello Word');
        }
    }]);

    return Animal;
}();

var Bird = function (_Animal) {
    _inherits(Bird, _Animal);

    // A must to call super() and call it first in constructor
    function Bird(legs, color) {
        _classCallCheck(this, Bird);

        // This is equivalent to Animal.call(this, legs);
        var _this = _possibleConstructorReturn(this, (Bird.__proto__ || Object.getPrototypeOf(Bird)).call(this, legs));

        _this.color = color;
        return _this;
    }

    _createClass(Bird, [{
        key: 'fly',
        value: function fly() {
            console.log('Flying');
        }
    }, {
        key: 'getColor',
        value: function getColor() {
            console.log(this.color);
        }
    }]);

    return Bird;
}(Animal);

var bird = new Bird(2, 'white');
bird.walk();
bird.fly();
console.log(pegion.getColor());
// ----------------------------------------------------------------------------------------------------
/**
 * HS allows you to add a new method in the derived class 
 * that has the same name as a method in the base class. 
 * In this case, when you call the method of an object of the derived class, 
 * that method will shadow the method in the base class.
 */

var Dog = function (_Animal2) {
    _inherits(Dog, _Animal2);

    function Dog() {
        _classCallCheck(this, Dog);

        return _possibleConstructorReturn(this, (Dog.__proto__ || Object.getPrototypeOf(Dog)).call(this, 4));
    }
    // shadowing here


    _createClass(Dog, [{
        key: 'walk',
        value: function walk() {
            _get(Dog.prototype.__proto__ || Object.getPrototypeOf(Dog.prototype), 'walk', this).call(this);
            console.log('Go walking');
        }
    }]);

    return Dog;
}(Animal);

var bingo = new Dog();
bingo.walk();
// Walking on 4 legs
// Go walking

// Derived classes inherit all static methods of super classes
Animal.helloWorld();
Bird.helloWorld();