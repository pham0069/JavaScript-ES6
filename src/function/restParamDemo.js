/**
 * Function with rest paramaters is formatted as
function fn(a,b,...args) {
   //...
}
 * The last parameter  ( args) is prefixed with the three dot ( ...) is called the rest parameter ( ...args)
 */

function sum(...args) {
    let total = 0;
    for (const a of args) {
        total += a;
    }
    return total;
}
// ------------------------------------------------------------------------------------------------
// rest parameter must be the last parameter of function
console.log(sum(1, 2, 3)); // 6
function filterBy(type, ...args) {
    return args.filter(e => typeof e === type);
}

console.log(filterBy("number", 1, 2, 3));

// ------------------------------------------------------------------------------------------------
// rest parameter can be used in arrow function
const concat = (...args) => {
    return args.reduce((prev, curr) => prev + ' ' + curr);
};
let message = concat('JavaScript', 'Rest', 'Parameters'); // =>
console.log(message); // JavaScript Rest Parameters
// ------------------------------------------------------------------------------------------------
// rest parameter can be used in a dynamic function
var showNumbers = new Function('...numbers', 'console.log(numbers)');
showNumbers(1, 2, 3); // [1,2,3]