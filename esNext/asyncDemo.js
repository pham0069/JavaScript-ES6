/**
 * ES2017 introduces async / await 
 * which is basically syntax sugar over promises
 * used to write asyn code in clearer syntax
 */

// Declare asynchronous function with async keyword
async function sayHi() {
    return 'Hi';
}
let promise = sayHi();
promise.then((result) => {
    console.log(result);
});

// Alternative way
async function sayHi() {
    return Promise.resolve('Hi');
}
promise = sayHi();
promise.then((result) => {
    console.log(result);
});