/**
 * Class vs Custom type
 * 1. Class declarations are not hoisted like function declaration
 * 2. All code inside a class is strict mode automatically and this behavior cannot be changed
 * 3. Class methods are non-enumerable. In JS, each property of an object has enumerable flag,
 * which defines its availability for some operations to be performed on that property.
 * A class sets this flag to false for all the methods defined on its prototype
 * 4. Calling class constructor without new operator will result in error
 */

 /**
  * Try this function declaration, it should work as function Animal() will be hoisted 
  * 
  * 
  * 
let duck = new Animal('duck'); // OK
let cat = Animal ('cat'); // OK
function Animal(type) {    
    this.type = type;
}
Animal.prototype.identify = function() {
    console.log(this.type);
}
duck.identify();
  *
  *
  *
  */


//
// let duck = new Animal('duck'); // TypeError: Animal is not a constructor, as class declaration is not hoisted
//
class Animal {
    constructor(type) {
        this.type = type;
    }
    identify() {
        console.log(this.type);
    }
}
// ------------------------------------------------------------------------------------------------------------
//
// let duck = Animal('duck'); // TypeError: Cannot call a class as a function
//