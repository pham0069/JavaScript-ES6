'use strict';

/**
* Check if an element is in array using indexOf()
* indexOf() method returns the index of the first occurrence of the element in the array. 
* If the array doesn’t have the element, the indexOf() returns -1
* 
* Shortcoming:
* 1. indexOf() fails to say what it means
* 2. it doesnt work with NaN since [NaN].indexOf(NaN) = -1
*/
var numbers = [1, 2, 3];
if (numbers.indexOf(2) !== -1) {}
// process here


// Check if an element is in array using includes(), since ES2016
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].include(1, 1); // false
[NaN].includes(NaN); // true
[-0].includes(+0); // true

// includes() object example

2;
3;
4;
5;
6;
7;
8;
var bmw = { name: 'BMW' },
    toyota = { name: 'Toyota' },
    ford = { name: 'Ford' };
var cars = [ford, toyota];
console.log(cars.includes(ford)); // true
console.log(cars.includes(bmw)); // false