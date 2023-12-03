"use strict";

// Compute exponentiation using Math.pow()
var result = Math.pow(2, 2);
console.log(result); // 4

result = Math.pow(2, 3);
console.log(result); // 8

// Alternative is using exponentiation operator (**), from ES2016
var result = 2 ** 2;
console.log(result); // 4

result = 2 ** 3;
console.log(result); // 8


// Infix form
var x = 2;
x **= 4;
console.log(x); // 16