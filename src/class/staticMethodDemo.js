/**
 * Prior ES6, to create a static method, you add the method directly onto the constructor. 
 * 
 * 
function Animal(type) {
    this.type = type;
}
 Animal.make = function(type) {
    return new Animal(type);
} 
var dog = Animal.make('Dog');
dog.identify(); // Dog
 * 
 *
 * ES6 simplified this by providing static notation before method name 
 * Note that static class cannot be accessed from instance
 */
class Animal {
    constructor(type) {
        this.type = type;
    }
    identify() {
        console.log(this.type);
    }
    static create(type) {
        return new Animal(type);
    }
}
 
var mouse = Animal.create('Mouse');
mouse.identify(); // Mouse
// mouse.create('Monkey'); // Uncaught TypeError: mouse.create is not a function