/**
 * Prior ES6, JavaScript had no classes. 
 * To mimic a class, we often use a constructor function
 * 
 * 
 * 
// Constructor function  with property name called type
function Animal(type) {
    this.type = type;
}
// Assign identify method to Animal prototype so that it can be shared by all instances of the Animal type 
Animal.prototype.identify = function() {
    console.log(this.type);
}
// Create new instance of Animal type using new operator 
var cat = new Animal('Cat');
cat.identify(); // Cat
 * 
 * 
 * 
 */


/**
 * ES6 introduced a new syntax for creating a class
 * No need function keyword before constructor and method definition
 * Note that if no constructor defined, JS will automatically add a default empty constructor to class
 * Note that class declaration is just syntactic sugar of the constructor function
 */
require('babel-register'); 
class Animal {
    // constructor
    constructor(type) {
        this.type = type;
    }
    // method
    identify() {
        console.log(this.type);
    }
}
 
let cat = new Animal('Cat');
cat.identify(); // Cat
console.log(cat instanceof Animal); // true
console.log(cat instanceof Object); // true
console.log(typeof Animal); // function, not object
console.log(typeof Animal.prototype);
