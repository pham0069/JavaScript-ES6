'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Spread operator, represented by three dots allows spreading out elements of array or string
 */
// Use spread operator to spread out the elements of array
function compare(a, b) {
  return a - b;
}
console.log(compare.apply(null, [1, 2])); // -1
console.log(compare.apply(undefined, [1, 2])); // -1
// ------------------------------------------------------------------------------------------------
// Use spread operator to push elements to array
var rivers = ['Nile', 'Ganges', 'Yangte'];
var moreRivers = ['Danube', 'Amazon'];
// Verbose
Array.prototype.push.apply(rivers, moreRivers);
console.log(rivers);
var additionalRivers = ['Mekong'];
rivers.push.apply(rivers, additionalRivers);
console.log(rivers);
// ------------------------------------------------------------------------------------------------
// Use spread operator to construct array literal
var initialChars = ['A', 'B'];
var chars = [].concat(initialChars, ['C', 'D']);
console.log(chars); // ["A", "B", "C", "D"]
// ------------------------------------------------------------------------------------------------
// Use spread operator to copy array instance (shallow, not deep)
var scores = [80, 70, 90];
var copiedScores = [].concat(scores);
console.log(copiedScores); // [80, 70, 90]
// ------------------------------------------------------------------------------------------------
// Use spread operator to spread out each individual characters of string into individual character
var spreadChars = ['A'].concat(_toConsumableArray('BC'), ['D']);
console.log(spreadChars); // ["A", "B", "C", "D"]