'use strict';

/**
 * In ES5, JavaScript didn’t provide any literal form of binary numbers. 
 * To parse a binary string you used the parseInt()
 */
var e = parseInt('111', 2);
console.log(e); // 7
/**
 * ES6 added support for binary literal by using the 0o prefix 
 * followed by a sequence of binary numbers (0 and 1)
 */
var f = 7;
console.log(f); // 7