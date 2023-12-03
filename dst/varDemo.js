"use strict";

// Global var
var num = 10;
function test() {
    // Local var 
    var num = 100;
    console.log("value of num in test() " + num);
}
console.log("value of num outside test() " + num);
test();