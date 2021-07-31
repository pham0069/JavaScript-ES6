"use strict";

/**
 * Using var declaration, variable is added to property list of global object
 * Using let declaration, variable is not attached to global object as property
 * In case of web browser, global object is window
 * 
var a = 10;
console.log(window.a); // 10
let b = 20;
console.log(window.b); // undefined
 */

// ------------------------------------------------------------------------------------------------
/**
 * Let keyword declares block-scoped variable
 * The x variable inside if block is a new variable and shadows the variable declared outside
 */
var x = 10;
if (x == 10) {
    // Block-scoped variable
    var _x = 20;
    console.log(_x); // 20;
}
console.log(x); // 10

/**
 * After five iterations, the value of the  i variable is 5. 
 * And the five instances of the callback function passed to the setTimeOut() function refers to the same variable i with the final value 5.
 */
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log("Var without function scope", i);
    }, 1000);
}

/**
 * The issue above can be fixed by creating another scope so that each instance of the callback function refers to a new variable. 
 * And to create a new scope, you need to create a function. Typically, IIFE pattern is used as follows:
 */
for (var i = 0; i < 5; i++) {
    (function (j) {
        setTimeout(function () {
            console.log("Var in function scope", j);
        }, 1000);
    })(i);
}

/**
 * Another alternative is using let keyword, which declares a new variable in each loop iteration
 */

var _loop = function _loop(_i) {
    setTimeout(function () {
        console.log("Let", _i);
    }, 1000);
};

for (var _i = 0; _i < 5; _i++) {
    _loop(_i);
}
// ------------------------------------------------------------------------------------------------

/**
 * Hoisting: when Javascript compiles all of your code, all variable declarations using var are hoisted/lifted 
 * to the top of their functional/local scope (if declared inside a function) 
 * or to the top of their global scope (if declared outside of a function) 
 * regardless of where the actual declaration has been made.
 * 
 * The only thing that gets moved to the top is the variable declarations, 
 * not the actual value given to the variable
 * 
 * JavaScript engine will hoist the variables declared using the let keyword as well
 * However, if you reference a variable in the block before the variable declaration, you will get a ReferenceError.
 */
(function () {
    console.log("bar", bar);
})();
// let bar is moved to top, bar = 'outside scope' stays here
var bar = 'outside scope';

(function () {
    console.log("foo", foo); // ReferenceError: foo is not defined
    var foo = 'function scope';
})();
// ------------------------------------------------------------------------------------------------

/**
 * Variable declared by the let keyword has a so-called temporal dead zone (TDZ). 
 * The TDZ is the time from the start of the block until the variable declaration is processed
 */
{
    // enter new scope, TDZ starts
    var log = function log() {
        console.log(foo); // foo declared later
    };

    // This is the TDZ and accessing foo 
    // would cause a ReferenceError

    var foo = 10; // TDZ ends
    log(); // called outside TDZ
}