'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * To create a getter and setter, you use get and set keywords 
 * followed by a space and an identifier.
 * Under the hood, getters/setters are defined on the class prototype.
 */
var Person = function () {
    function Person(firstName, lastName) {
        _classCallCheck(this, Person);

        this.firstName = firstName;
        this.lastName = lastName;
    }

    _createClass(Person, [{
        key: 'fullName',
        get: function get() {
            return this.firstName + ' ' + this.lastName;
        },
        set: function set(str) {
            var names = str.split(' ');
            if (names.length === 2) {
                this.firstName = names[0];
                this.lastName = names[1];
            } else {
                throw 'Invalid name format';
            }
        }
    }]);

    return Person;
}();

var mary = new Person('Mary', 'Doe');
console.log(mary.fullName); // Mary Doe

// set new name
mary.fullName = 'Mary William';
console.log(mary.fullName); // Mary William