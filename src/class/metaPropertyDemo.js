/**
 * new.target helps you detect whether a function was called using the new operator
 * In a normal function call, the new.target returns undefined. 
 * If the function was called with the new operator,
 * new.target returns a reference to the function.  
 *  
 * new.target is very useful
 * 1. to inspect at runtime whether a function is being executed as a function or as a constructor. 
 * 2. to determine a specific derived class that was called by using the new operator from within a base class
 */

// If you dont want Person() to be called as a function, throws exception when new.target is undefined
function Person(name) {
    if (!new.target) {
        throw "must use new operator with Person";
    }
    this.name = name;
}
// let p = Person('Keira'); // Error, "must use new operator with Person";
let p = new Person('Keira'); // OK

//----------------------------------------------------------------------------------------------------------------
/**
 * In a class constructor, new.target refers to the constructor that was invoked directly by the new operator. 
 * It is true if the constructor is in the base class and was delegated from a derived constructor
 */
class Citizen {
    constructor(name) {
        this.name = name;
        console.log(new.target.name);
    }
}
 
class Employee extends Citizen {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
}
 
let john = new Citizen('John Doe'); // Citizen
let lily = new Employee('Lily Bush', 'Programmer'); // Employee