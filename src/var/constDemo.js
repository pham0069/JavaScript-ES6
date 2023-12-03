/**
 * const creates read-only reference to value
 * By convention, constant identifiers in JS are in uppercase
 * const keyword works like let keyword, except that its value cannot be reassigned
 */

//const RATE; //SyntaxError
// Declared constant must be immediately initialized to a value
 const RATE = 0.1;
//RATE = 0.2; // TypeError

/**
 * const prevents variable from being reassigned
 * but does not ensure that the member reference is immutable
 */
const PERSON = {age: 20};
console.log("Before", PERSON.age);
PERSON.age = 30; // OK
console.log("After", PERSON.age);
//PERSON = {age: 30}; // TypeError

/**
 * Use freeze to make member reference immutable
 */
const PERSON_2 = Object.freeze({age : 20});
//PERSON_2.age = 30; // TypeError

/**
 * Freeze is shallow, i.e only freezes the properties of the object,
 * not the objects reference by its properties
 */
const COMPANY = Object.freeze({
    name: 'ABC corp',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        zipcode: 95134
    }
});
COMPANY.address.country = 'USA'; // OK
COMPANY.address.zipcode = 95132; // OK

/**
 * Can declare const for iterated variable with (for ... of) loop
 * This works since each iteration creates a new binding for const keyword
 */
var scores = [75, 80, 95];
for (const score of scores) {
    console.log(score);
}

/**
 * This does not work for imperative loop
 */
/*
for (const i = 0; i < scores.length; i++) { // TypeError
    console.log(scores[i]);
}
*/