/**
 * In ES5, to create an array from an array-like object, 
 * you would iterate over the elements and push each element to an intermediate array
 */
function arrayFromArgs() {
    var results = [];
    for (var i = 0; i < arguments.length; i++) {
        results.push(arguments[i]);
    }
    return results;
}
var fruits = arrayFromArgs('Apple', 'Orange', 'Banana');
console.log(fruits);

/**
 * Alternative concise implementation
 * 
 */

function arrayFromArgs2() {
    return Array.prototype.slice.call(arguments);
}
fruits = arrayFromArgs2('Apple', 'Orange', 'Banana');
console.log(fruits);
// --------------------------------------------------------------------------------------------------------
/**
 * ES6 introduced you to the Array.from() method that creates a new instance of Array 
 * from an array-like or iterable object
 * Array.from() method accepts a callback function that allows you to 
 * execute the mapping function on every element of the array which is being created
 */

function plusOne() {
    return Array.from(arguments, x => x + 1);
}
console.log(plusOne(1, 2, 3)); // [2, 3, 4]

/**
 * If the mapping function belongs to an object, 
 * you can optionally pass the third argument to the Array.from() method. 
 * The object will represent the this value inside the mapping function
 */
let doubler = {
    factor: 2,
    double(x) {
        // Based on the way Array.from is called, this refers to doubler
        // hence factor has value 2 as defined in doubler
        return x * this.factor;
    }
}
let scores = [5, 6, 7];
let newScores = Array.from(scores, doubler.double, doubler);
console.log(newScores); // [ 10, 12, 14 ]

/*
let factor = {
    value: 2
};
let doubler = {
    double(x) {
        return x * this.value;
    }
}
let scores = [5, 6, 7];
let newScores = Array.from(scores, doubler.double, factor);
console.log(newScores); // [ 10, 12, 14 ]
*/
// --------------------------------------------------------------------------------------------------------
/**
 * Array.from() also works on iterable object, u can convert any object 
 * that has System.iterator property into an array
 */
let even = {
    *[Symbol.iterator]() {
        for (var i = 0; i < 10; i += 2) {
            yield i;
        }
    }
};
var evenNumbers = Array.from(even);
console.log(evenNumbers); // [0, 2, 4, 6, 8]