/**
 * Prior to ES6, implementing proper inheritance required multiple steps
 * One of the most commonly used strategies is protoypal inheritance
 * 
 * 
function Animal(legs) {
    this.legs = legs;
}
Animal.prototype.walk = function() {
    console.log('Walking on ' + this.legs + ' legs');
}
function Bird(legs) {
    Animal.call(this, legs);
}
// Deep-copy prototype of Animal to Bird
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Animal;
// Add new method to Bird prototype. This will not affect Animal prototype
Bird.prototype.fly = function() {
    console.log('Flying');
} 
var pigeon = new Bird(2);
pigeon.walk(); // Walking on 2 legs
pigeon.fly(); // Flying
 * 
 * 
 * ES6 simplified these steps by using the extends and super keywords
 * Note that class version is just the syntactic sugar for the prototypal inheritance. 
 * In other words, JavaScript uses classes for the syntax 
 * but still realizes on the prototype mechanism
 */

class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('Walking on ' + this.legs + ' legs');
    }
    static helloWorld() {
        console.log('Hello Word');
    }
}
 
class Bird extends Animal {
    // A must to call super() and call it first in constructor
    constructor(legs, color) {
        super(legs); // This is equivalent to Animal.call(this, legs);
        this.color = color;
    }
    fly() {
        console.log('Flying');
    }
    getColor() {
        console.log(this.color);
    }
}
 
 
let bird = new Bird(2, 'white');
bird.walk();
bird.fly();
console.log(pegion.getColor());
// ----------------------------------------------------------------------------------------------------
/**
 * HS allows you to add a new method in the derived class 
 * that has the same name as a method in the base class. 
 * In this case, when you call the method of an object of the derived class, 
 * that method will shadow the method in the base class.
 */

class Dog extends Animal {
    constructor() {
        super(4);
    }
    // shadowing here
    walk() {
        super.walk();
        console.log(`Go walking`);
    }
}
 
let bingo = new Dog();
bingo.walk(); 
// Walking on 4 legs
// Go walking

// Derived classes inherit all static methods of super classes
Animal.helloWorld();
Bird.helloWorld();
