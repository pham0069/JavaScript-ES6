'use strict';

/**
 * In ES5, to find a value in an array, you use the indexOf() or lastIndexOf() methods. 
 * These methods, however, are quite limited because they only allow you to search 
 * for one value at a time.
 * 
 * ES6 enhanced the capability of finding in an array by introducing two new methods find() and findIndex(). 
 * Both methods accept two arguments: 
 * 1. a callback function: return true if given value matches specified criteria
 * Searching stops as soon as callback returns true
 * 2. an optional value to use for this inside the callback function
 */

var numbers = [1, 2, 3, 4, 5];

// Find the first even number in the numbers array
console.log(numbers.find(function (x) {
  return x % 2 == 0;
})); // 2
// Return the index of the first even number in the numbers array
console.log(numbers.findIndex(function (x) {
  return x % 2 == 0;
})); // 1

// ---------------------------------------------------------------------------------
// More complicated examples
var customers = [{
  name: 'ABC Inc',
  credit: 100
}, {
  name: 'ACME Corp',
  credit: 200
}, {
  name: 'IoT AG',
  credit: 300
}];
// Find the first customer whose credit is larger than hundred
console.log(customers.find(function (c) {
  return c.credit > 100;
}));
// { name: 'ACME Corp', credit: 200 }
// Find the first customer index whose credit is larger than hundred
console.log(customers.findIndex(function (c) {
  return c.credit > 100;
}));
// 1