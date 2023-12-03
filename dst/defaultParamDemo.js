'use strict';

/**
 * Define default value of argument
 */
function foo() {
  var bar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

  console.log(bar);
}

foo(); // 10
foo(undefined); // 10
foo(20); //20

// ------------------------------------------------------------------------------------------------
// Function with multiple parameters
function createDiv() {
  var height = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '100px';
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '100px';
  var border = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'solid 1px red';

  var div = document.createElement('div');
  div.style.height = height;
  div.style.width = width;
  div.style.border = border;
  document.getElementsByTagName('body')[0].appendChild(div);
  return div;
}
createDiv();
createDiv(undefined, undefined, 'solid 5px blue');
// ------------------------------------------------------------------------------------------------
/**
 * today() function has not yet evaluated until we called the date() function.
 */
function date() {
  var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : today();

  console.log(d);
}

function today() {
  return new Date().toLocaleDateString("en-US");
}

date();
// ------------------------------------------------------------------------------------------------
// Make arguments mandatory using requiredArg()
function requiredArg() {
  throw new Error('The argument is required');
}
function add() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : requiredArg();
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : requiredArg();

  return x + y;
}

//add(10); // error
add(10, 20); // OK

// ------------------------------------------------------------------------------------------------
// You can assign a parameter a default value that references to other default parameters
function bar() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : a;
  var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : x + y;

  return x + y + z;
}

console.log(bar()); // 4