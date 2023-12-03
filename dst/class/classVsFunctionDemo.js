"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class vs Custom type
 * 1. Class declarations are not hoisted like function declaration
 * 2. All code inside a class is strict mode automatically and this behavior cannot be changed
 * 3. Class methods are non-enumerable. In JS, each property of an object has enumerable flag,
 * which defines its availability for some operations to be performed on that property.
 * A class sets this flag to false for all the methods defined on its prototype
 * 4. Calling class constructor without new operator will result in error
 */

/**
 * Try this function declaration, it should work as function Animal() will be hoisted 
 * 
 * 
 * 
let duck = new Animal('duck'); // OK
let cat = Animal ('cat'); // OK
function Animal(type) {    
   this.type = type;
}
Animal.prototype.identify = function() {
   console.log(this.type);
}
duck.identify();
 *
 *
 *
 */

//
// let duck = new Animal('duck'); // TypeError: Animal is not a constructor, as class declaration is not hoisted
//
var Animal = function () {
    function Animal(type) {
        _classCallCheck(this, Animal);

        this.type = type;
    }

    _createClass(Animal, [{
        key: "identify",
        value: function identify() {
            console.log(this.type);
        }
    }]);

    return Animal;
}();
// ------------------------------------------------------------------------------------------------------------
//
// let duck = Animal('duck'); // TypeError: Cannot call a class as a function
//