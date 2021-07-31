/**
 * await operator waits for a Promise to settle, either resolve or reject
 */
async function sayHi() {
    return 'Hi';
}
async function sayBye() {
    let result = await sayHi();
    console.log(result, "doneeee");
    return 'Bye';
}

sayBye().then(result => console.log(result));
sayHi().then(result => console.log(result));
// Ensure that Hi is done first then Bye
//Hi
//Hi doneeee
//Bye

