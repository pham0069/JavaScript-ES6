"use strict";

/**
 * In ES5, to represent an octal literal, you use the zero prefix (0) 
 * followed by a sequence of octal digits (from 0 to 7)
 * If the octal literal contains a number that is out of range, JavaScript 
 * ignores the leading 0 and treats the octal literal as a decimal
 * 
 * When using strict mode, invalid octal syntax will throw an error
 * This syntax is not supported in ES6
var a = 051;
console.log(a); //41
var b = 058; // invalid octal
console.log(b); // 58
 */

/**
 * ES6 allows you to specify the octal literal by using the prefix 0o 
 * followed by a sequence of octal digits from 0 through 7
 * 
 * If you use an invalid number in the octal literal, JavaScript will throw a SyntaxError
 */
var c = 41;
console.log(c); // 41 
//var d= 0o58;
//console.log(d); // SyntaxError