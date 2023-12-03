'use strict';

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * new.target helps you detect whether a function was called using the new operator
 * In a normal function call, the new.target returns undefined. 
 * If the function was called with the new operator,
 * new.target returns a reference to the function.  
 *  
 * new.target is very useful
 * 1. to inspect at runtime whether a function is being executed as a function or as a constructor. 
 * 2. to determine a specific derived class that was called by using the new operator from within a base class
 */

// If you dont want Person() to be called as a function, throws exception when new.target is undefined
function Person(name) {
    if (!new.target) {
        throw "must use new operator with Person";
    }
    this.name = name;
}
// let p = Person('Keira'); // Error, "must use new operator with Person";
var p = new Person('Keira'); // OK

//----------------------------------------------------------------------------------------------------------------
/**
 * In a class constructor, new.target refers to the constructor that was invoked directly by the new operator. 
 * It is true if the constructor is in the base class and was delegated from a derived constructor
 */

var Citizen = function Citizen(name) {
    _classCallCheck(this, Citizen);

    this.name = name;
    console.log(new.target.name);
};

var Employee = function (_Citizen) {
    _inherits(Employee, _Citizen);

    function Employee(name, title) {
        _classCallCheck(this, Employee);

        var _this = _possibleConstructorReturn(this, (Employee.__proto__ || Object.getPrototypeOf(Employee)).call(this, name));

        _this.title = title;
        return _this;
    }

    return Employee;
}(Citizen);

var john = new Citizen('John Doe'); // Citizen
var lily = new Employee('Lily Bush', 'Programmer'); // Employee