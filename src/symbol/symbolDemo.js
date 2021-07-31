/**
 * ES6 added the Symbol as a new primitive type
 * ES6 provides you with the global symbol registry 
 * that allows you to share symbols globally. 
 * If you want to create a symbol that will be shared, 
 * you use the Symbol.for() method instead of calling the Symbol() function
 */

 let s = Symbol('foo');
 // let s = new Symbol('foo'); // Error, cannot use new for primitive
 console.log(typeof s);

 /**
  * Symbol.for() method first searches for the symbol with the  ssn key in the global symbol registry. 
  * If so, it returns the existing symbol. 
  * Otherwise, the Symbol.for() method creates a new symbol, registers it to the global symbol registry 
  * with the specified key, and returns the symbol.
  */
let ssn = Symbol.for('ssn');
let citizenID = Symbol.for('ssn');
console.log(ssn === citizenID); // true
// --------------------------------------------------------------------------------------
/**
 * Use symbol as unique values
 */
let statuses = {
    OPEN: Symbol('Open'),
    IN_PROGRESS: Symbol('In progress'),
    COMPLETED: Symbol('Completed'),
    HOLD: Symbol('On hold'),
    CANCELED: Symbol('Canceled')
};
// --------------------------------------------------------------------------------------
// Use symbol as the computed property name of an object
let status = Symbol('status');
let task = {
    [status]: statuses.OPEN,
    description: 'Learn ES6 Symbol'
};
console.log(task);
// Get all the enumerable properties of an object
console.log(Object.keys(task)); // ["description"]

// Get all properties of an object whether the properties are enumerable or not
console.log(Object.getOwnPropertyNames(task)); // ["description"]

// Get all property symbols of an object
console.log(Object.getOwnPropertySymbols(task)); //[Symbol(status)]
// --------------------------------------------------------------------------------------
/**
 * ES6 provide predefined symbols which are known as well-known symbols 
 * that represent common behaviors in JavaScript. 
 * Each well-known symbol is a static property of the Symbol object.
 */

 /**
  * Symbol.hasInstance is a symbol that changes the behavior of the instanceof operator
  * a instanceof b; --> call b[Symbol.hasInstance](a)
  */
class Stack {
    static [Symbol.hasInstance](obj) {
        return Array.isArray(obj);
    }
}
console.log([] instanceof Stack); // true
// --------------------------------------------------------------------------------------
/**
 * Symbol.iterator specifies a function that returns an iterator for an object. 
 * The objects that have Symbol.iterator property are called iterable objects
 */

var numbers = [1, 2, 3];
for (let num of numbers) {
    console.log(num);
}
var iterator = numbers[Symbol.iterator]();

console.log(iterator.next()); // Object {value: 1, done: false}
console.log(iterator.next()); // Object {value: 2, done: false}
console.log(iterator.next()); // Object {value: 3, done: false}
console.log(iterator.next()); // Object {value: undefined, done: true}

/**
 * By default, a collection is not iterable. 
 * However, you can make it iterable by using the Symbol.iterator 
 */
class List {
    constructor() {
        this.elements = [];
    }
 
    add(element) {
        this.elements.push(element);
        return this;
    }
 
    *[Symbol.iterator]() {
        for (let element of this.elements) {
            yield  element;
        }
    }
}
let chars = new List();
chars.add('A')
    .add('B')
    .add('C');
 
// because of the Symbol.iterator
for (let c of chars) {
    console.log(c);
}
// --------------------------------------------------------------------------------------
/**
 * Symbol.isConcatSpreadable property is a Boolean value that determines whether an object, 
 * which has a length property and numeric keys, 
 * is added individually to the result of the concat() function.
 */

let odd = [1, 3],
even = [2, 4];
let all = odd.concat(even);
console.log(all); // [1, 3, 2, 4]
let extras = all.concat(5);
console.log(extras); // [1, 3, 2, 4, 5]

/*
// If you set the value of the Symbol.isConcatSpreadable to false 
// and pass the list object to the concat() method, 
// it will be concatenated to the array as a whole object.
let list = {
    0: 'JavaScript',
    1: 'Symbol',
    length: 2
};
let message = ['Learning'].concat(list);
console.log(message); // ["Learning", Object]
*/

let list = {
    0: 'JavaScript',
    1: 'Symbol',
    length: 2,
    [Symbol.isConcatSpreadable]: true
};
let message = ['Learning'].concat(list);
console.log(message); // ["Learning", "JavaScript", "Symbol"]
// --------------------------------------------------------------------------------------
/**
 * Symbol.toPrimitive method determines what should happens when an object is converted into a primitive. 
 * JS engine defines the Symbol.toPrimitive method on the prototype of each standard type
 * 
 * Symbol.toPrimitive method takes a hint argument which has one of three values: “number”, “string”, and “default”. 
 * The hint argument specifies the type of the return value. 
 * The hint parameter is filled by the JavaScript engine based on the context in which  the object is used.
 * 
 */

function Money(amount, currency) {
    this.amount = amount;
    this.currency = currency;
}
Money.prototype[Symbol.toPrimitive] = function(hint) {
    var result;
    switch (hint) {
        case 'string':
            result = this.amount + this.currency;
            break;
        case 'number':
            result = this.amount;
            break;
        case 'default':
            result = this.amount + this.currency;
            break;
    }
    return result;
}
 
var price = new Money(799, 'USD');
 
console.log('Price is ' + price); // Price is 799USD
console.log(+price + 1); // 800
console.log(String(price)); // 799USD