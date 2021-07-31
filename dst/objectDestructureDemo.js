'use strict';

/**
 * When you destructure an object, the variable names must match the property names in the object. 
 * If the variable name does not match, it receives a value of undefined.
 */
var meal = {
    size: 'large',
    price: 9.0
};
var size = meal.size,
    price = meal.price;
// Use parenthesis 
//({size, price}) = meal;

console.log(size); // large
console.log(price); // 9.0
// ------------------------------------------------------------------------------------------------
var employee = {
    id: 1001,
    profile: {
        firstName: 'John',
        lastName: 'Doe'
    }
};
// Destructure nested object
var _employee$profile = employee.profile,
    firstName = _employee$profile.firstName,
    lastName = _employee$profile.lastName;


console.log(firstName); // John
console.log(lastName); // Doe