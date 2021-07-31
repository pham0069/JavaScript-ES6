/**
 * Define default value of argument
 */
function foo(bar = 10) {
    console.log(bar);
}
 
foo(); // 10
foo(undefined); // 10
foo(20); //20

// ------------------------------------------------------------------------------------------------
// Function with multiple parameters
function createDiv(height = '100px', width = '100px', border = 'solid 1px red') {
    let div = document.createElement('div');
    div.style.height = height;
    div.style.width = width;
    div.style.border = border;
    document.getElementsByTagName('body')[0].appendChild(div);
    return div;
}
createDiv();
createDiv(undefined,undefined,'solid 5px blue');
// ------------------------------------------------------------------------------------------------
/**
 * today() function has not yet evaluated until we called the date() function.
 */
function date(d = today()) {
    console.log(d);
}
 
function today() {
    return (new Date()).toLocaleDateString("en-US");
}
 
date();
// ------------------------------------------------------------------------------------------------
// Make arguments mandatory using requiredArg()
function requiredArg() {
   throw new Error('The argument is required');
}
function add(x = requiredArg(), y = requiredArg()){
   return x + y;
}
 
//add(10); // error
add(10, 20); // OK

// ------------------------------------------------------------------------------------------------
// You can assign a parameter a default value that references to other default parameters
function bar(x = 1, y = a, z = x + y) {
    return x + y + z;
}
 
console.log(bar()); // 4