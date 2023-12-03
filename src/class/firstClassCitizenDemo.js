/**
 * JavaScript class is a first-class citizen. 
 * It means that you can 
 * 1. pass a class into a function, 
 * 2. return it from a function,
 * 3. assign it to a variable.
 */

function factory(aClass) {
    // return a class
    return new aClass();
}
 // pass a class as argument
let greeting = factory(class {
    sayHi() {
        console.log('Hi');
    }
});
 
greeting.sayHi(); // 'Hi'