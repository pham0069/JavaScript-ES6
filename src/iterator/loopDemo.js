/**
 * Iteration over collection such as array, string, map, set
 */
// Iterate over array
let scores = [80, 90, 70];
for (let score of scores) {
    score = score + 5;
    console.log(score);
}

// Iterate over string
let str = 'abc';
for (let c of str) {
    console.log(c);
}

// Iterate over map
var colors = new Map();
colors.set('red', '#ff0000');
colors.set('green', '#00ff00');
colors.set('blue', '#0000ff');
 
for (let color of colors) {
    console.log(color);
}

// Iterate over set
let nums = new Set([1, 2, 3]);
 
for (let num of nums) {
    console.log(num); //
}

// ------------------------------------------------------------------------------------------------
/**
 * for...of VS for...in
 * The for...in loop iterates over all enumerable properties of an object. 
 * It does not iterate over a collection such as Array, Map or Set.
 * Meanwhile, the for...of loop iterates a collection, rather than an object. 
 * In fact, the for...of iterates over elements of any collection that has the [Symbol.iterator] property.
 */

let numbers = [6, 7, 8];
numbers.foo = "foo";
 
for (let i in numbers) {
    console.log(i);
}
// 0
// 1
// 2
// foo

for (let i of numbers) {
    console.log(i);
}
// 6
// 7
// 8
