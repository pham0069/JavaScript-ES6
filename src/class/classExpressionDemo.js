/**
 * Similar to function, classes also have expression forms
 * Class expression does not require an identifier after class keyword
 * Class expression can be used for variable declaration and passed into function as argument
 * 
 * Similar to function expressions, class expressions are not hoisted
 */
//let duck = new Animal('Duck'); // Error, not hoisted
let Animal = class {
    constructor(type) {
        this.type = type;
    }
    identify() {
        console.log(this.type);
    }
}
 
let duck = new Animal('Duck');
 
console.log(duck instanceof Animal); // true
console.log(duck instanceof Object); // true
 
console.log(typeof Animal); // function
console.log(typeof Animal.prototype); // function