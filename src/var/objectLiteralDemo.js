/** 
 * Object literal in ES6 offers more succint syntax, including
 * Object property initializer shorthand
 * Computed property name
 * Concise method syntax
 */


/**
 * Prior ES6, object literals are collection of name-value pairs
 * This could make the code verbose as properties name and value are mentioned twice 
 */
function createMachine(name, status) {
    return {
        name: name,
        status: status
    };
}
/**
 * ES6 offers shorter syntax if Object's properties are same as passed parameters 
 * Internally, when a property of an object literal only has a name, 
 * the JavaScript engine searches for that a variable with the same name in the surrounding scope. 
 * If it finds one, it assigns the property the value of the variable. 
 * In this example, JavaScript engine assigns the name and status property values of the name and status arguments.
 */
//
function createMachine2(name, status) {
    return {
        name,
        status
    };
}
// ------------------------------------------------------------------------------------------------
/**
 * Prior ES6, square brackets allows using string literals and variables as the property names 
 */
let name = 'machine name';
let machine1 = {
    [name]: 'server',
    'machine hours': 10000
};
 
console.log(machine1[name]); // server
console.log(machine1['machine hours']); // 1000

/**
 * In ES6, computed property name is a part of the object literal syntax, and it uses the square bracket notation.  
 * When a property name is placed inside the square brackets, JavaScript engine evaluates it as a string, 
 * meaning that you can use an expression for a property
 */

var prefix = 'machine';
var machine = {
    [prefix + ' name']: 'server',
    [prefix + ' hours']: 10000
};
 
console.log(machine['machine name']); // server
console.log(machine['machine hours']); // 10000
// ------------------------------------------------------------------------------------------------
/**
 * Prior ES6, when defining a method for an object literal, you must specify 
 * the name and full function definition
 */ 
var server1 = {
    name: 'server',
    restart: function () {
        console.log('The ' + this.name + ' is restarting...');
    }
};
server1.restart();
/**
 * ES6 makes the syntax for making a method of the object literal more succinct 
 * by removing the colon (:) and the function keyword.
 */
var server = {
    name: 'server',
    restart() {
        console.log(`The ${this.name} is restarting...`);
    }
};
server.restart();
