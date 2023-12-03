/**
 * ES6 provides a new feature called destructing assignment 
 * that allows you to take an object or an array 
 * and destructure it into individual variables. 
 * The destructuring assignment does not just help you save some typing 
 * but also change the way you structure your code.
 */

// x, y and z will take the value of the first, second, and third element of the scores array
var scores = [70, 80, 90, 100];
let [x, y, z] = scores;
console.log(x); // 70
console.log(y); // 80
console.log(z); // 90

// Use rest operator to take all remaining elements of an array into a new array
let [a, b,...args] = scores;
console.log(a); // 70
console.log(b); // 80
console.log(args); // [90, 100]

// Assignment from array destructure
let c, d;
[c, d] = [10, 20];
console.log(c); // 10
console.log(d); // 20

// If the value taken from the array is undefined, you can assign the variable a default value.
let e, f;
[e = 1, f = 2] = [10];
console.log(e); // 10
console.log(f); // 2 -> take default value

// Swap values of variables without using a temporary variable
let g = 10, h = 20;
[g, h] = [h, g];
console.log(g); // 20
console.log(h); // 10

// Parse the returned array from a function, in intuitive way
function returnArray() {
    return [10, 20, 30];
}
let [i, j, k] = returnArray();
console.log(i); // 10
console.log(j); // 20
console.log(k); // 30

// Ignore the second element of array
[m, , n] = returnArray();
console.log(m); // 10
console.log(n); // 30

// Work with anything iterables on the right side
let [ei, bee, cee] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);