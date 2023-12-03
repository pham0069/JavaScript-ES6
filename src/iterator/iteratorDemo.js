/**
 * Iterator is an object that implements a specific interface for iteration
 * 1. next() method returns result object
 * 2. result object has 2 properties
 * a. value: next value
 * b. done: boolean indicating if there is no more value to return
 * 
 * Iterator should keep track of location within collection of values
 * Each time u call next() method, it should return the next value in the collection
 * If u call next() method after the last value has been returned, 
 * next() should return undefined value
 */
function iterator(collection) {
    var i = 0;
    return {
        next: function() {
            var done = i >= collection.length;
            var value = !done ? collection[i++] : undefined;
            return {
                done: done,
                value: value
            }
        }
    }
}

let ranks = ['A', 'B', 'C'];
var rankIterator = iterator(ranks);
console.log(rankIterator.next()); // {  done: false,  value: "A" }
console.log(rankIterator.next()); // {  done: false,  value: "B" }
console.log(rankIterator.next()); // {  done: false,  value: "C" }
 
console.log(rankIterator.next()); // {  done: true,  value: undefined }