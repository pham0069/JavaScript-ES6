'use strict';

/**
 * await operator waits for a Promise to settle, either resolve or reject
 */
async function sayHi() {
    return 'Hi';
}
async function sayBye() {
    var result = await sayHi();
    console.log(result, "doneeee");
    return 'Bye';
}

sayBye().then(function (result) {
    return console.log(result);
});
sayHi().then(function (result) {
    return console.log(result);
});
// Ensure that Hi is done first then Bye
//Hi
//Hi doneeee
//Bye