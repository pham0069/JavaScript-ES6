'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * The general arrow function is formatted as
 * (p1, p2, ..., pn) => expression;
 * It is recommended that you use the arrow function for the callback function 
 * because the syntax of the arrow function is cleaner 
 * and also it is safer to use the this value.
 */
var add1 = function add1(x, y) {
  return x + y;
};
// traditionalAdd can be shortened with arrow
var add = function add(x, y) {
  return x + y;
};
console.log(add(10, 20)); //30
console.log(typeof add === 'undefined' ? 'undefined' : _typeof(add)); // function
console.log(add instanceof Function); // true

/**
 * Function used as comparation for sort
 */
var numbers = [10, 4, 2, 9, 5, 1];
numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers);
// ------------------------------------------------------------------------------------------------

/**
 * Function used to transform an array to another array
 */
var names = ['John', 'Mac', 'Peter'];
var lengths = names.map(function (name) {
  return name.length;
});
console.log(lengths);
console.log(typeof lengths === 'undefined' ? 'undefined' : _typeof(lengths));
// ------------------------------------------------------------------------------------------------

/**
 * Cannot return object literal directly from arrow function
 * Need to wrap object literal in parenthesis
 */

var setColor1 = function setColor1(color) {
  return { value: color };
};

var backgroundColor = setColor1('Red');
console.log(backgroundColor.value); // "Red"

//var setColor = color => {value: color }; // Error
var setColor = function setColor(color) {
  return { value: color };
};
// ------------------------------------------------------------------------------------------------
// this of anonymous function shadows this of speedUp function
function Car1() {
  this.speed = 0;

  this.speedUp = function (speed) {
    this.speed = speed;
    setTimeout(function () {
      console.log(this.speed); // undefined
    }, 1000);
  };
}

// assign this to a variable that doesn't shadow inside anonymous function
var car = new Car1();
car.speedUp(50);

function Car2() {
  this.speed = 0;

  this.speedUp = function (speed) {
    this.speed = speed;
    var self = this;
    setTimeout(function () {
      console.log(self.speed);
    }, 1000);
  };
}

car = new Car2();
car.speedUp(50); // 50;

// Arrow function captures this of the enclosing context instead of creating its own this context
function Car() {
  this.speed = 0;

  this.speedUp = function (speed) {
    var _this = this;

    this.speed = speed;
    setTimeout(function () {
      return console.log(_this.speed);
    }, // No need to assign this to a var
    1000);
  };
}

car = new Car();
car.speedUp(50); // 50;
// ------------------------------------------------------------------------------------------------
/**
 * arguments is a reference to the name in the enclosing scope 
 * it is not available for arrow function 
 */
function foo() {
  var _arguments = arguments;

  return function (x) {
    return x + _arguments[0];
  };
}

var bar = foo(10, 20);
var result = bar(5);
console.log(result); // 15