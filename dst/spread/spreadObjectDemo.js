'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Spread operator, represented by three dots 
 * allows spreading out elements of array or string
 */
// Use spread operator to spread out each individual characters of string into individual character
var spreadChars = ['A'].concat(_toConsumableArray('BC'), ['D']);
console.log(spreadChars); // ["A", "B", "C", "D"]