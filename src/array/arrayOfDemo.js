/**
 * In ES5, when you pass an integer to the Array constructor, 
 * JS creates an array whose length equals to the argument
 */
let numbers = new Array(2);
console.log(numbers.length); // 2
console.log(numbers[0]); // undefined

/**
 * When you pass to the Array constructor a value that is not a numeric, 
 * JavaScript creates an array that contains the value
 */
numbers = new Array("2");
console.log(numbers.length); // 1
console.log(numbers[0]); // "2"

/**
 * This behavior is sometimes confusing and error-prone 
 * because you may not know the type of data that you pass to the Array constructor.
 * ES6 introduces the Array.of() method to solve this problem
 * Array.of() always creates an array that contains the value u pass to it,
 * regardless of the types or the number of arguments
 */
numbers = Array.of(3);
console.log(numbers.length); // 1
console.log(numbers[0]); // 3

let chars = Array.of('A', 'B', 'C');
console.log(chars.length); // 3
console.log(chars); // ['A','B','C']

/**
 * Hack if Array.of() is not supported
 */
if (!Array.of) {
    Array.of = function() {
        return Array.prototype.slice.call(arguments);
    };
}