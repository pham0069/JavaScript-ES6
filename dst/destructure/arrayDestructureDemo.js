"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * ES6 provides a new feature called destructing assignment 
 * that allows you to take an object or an array 
 * and destructure it into individual variables. 
 * The destructuring assignment does not just help you save some typing 
 * but also change the way you structure your code.
 */

// x, y and z will take the value of the first, second, and third element of the scores array
var scores = [70, 80, 90, 100];
var x = scores[0],
    y = scores[1],
    z = scores[2];

console.log(x); // 70
console.log(y); // 80
console.log(z); // 90

// Use rest operator to take all remaining elements of an array into a new array
var a = scores[0],
    b = scores[1],
    args = scores.slice(2);

console.log(a); // 70
console.log(b); // 80
console.log(args); // [90, 100]

// Assignment from array destructure
var c = void 0,
    d = void 0;
c = 10;
d = 20;

console.log(c); // 10
console.log(d); // 20

// If the value taken from the array is undefined, you can assign the variable a default value.
var e = void 0,
    f = void 0;
var _ref = [10];
var _ref$ = _ref[0];
e = _ref$ === undefined ? 1 : _ref$;
var _ref$2 = _ref[1];
f = _ref$2 === undefined ? 2 : _ref$2;

console.log(e); // 10
console.log(f); // 2 -> take default value

// Swap values of variables without using a temporary variable
var g = 10,
    h = 20;
var _ref2 = [h, g];
g = _ref2[0];
h = _ref2[1];

console.log(g); // 20
console.log(h); // 10

// Parse the returned array from a function, in intuitive way
function returnArray() {
  return [10, 20, 30];
}

var _returnArray = returnArray(),
    _returnArray2 = _slicedToArray(_returnArray, 3),
    i = _returnArray2[0],
    j = _returnArray2[1],
    k = _returnArray2[2];

console.log(i); // 10
console.log(j); // 20
console.log(k); // 30

// Ignore the second element of array

var _returnArray3 = returnArray();

var _returnArray4 = _slicedToArray(_returnArray3, 3);

m = _returnArray4[0];
n = _returnArray4[2];

console.log(m); // 10
console.log(n); // 30

// Work with anything iterables on the right side

var _abc = "abc",
    _abc2 = _slicedToArray(_abc, 3),
    ei = _abc2[0],
    bee = _abc2[1],
    cee = _abc2[2]; // ["a", "b", "c"]


var _ref3 = new Set([1, 2, 3]),
    _ref4 = _slicedToArray(_ref3, 3),
    one = _ref4[0],
    two = _ref4[1],
    three = _ref4[2];