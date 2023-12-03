/**
 * An ES6 module is a JavaScript file that executes in strict mode only. 
 * It means that any variables or functions declared in the module won’t be added automatically to the global scope.
 * 
 * export keyword requires the function or class to have a name to be exported. 
 * You can’t export an anonymous function or class using this syntax.
 */

export var message = 'Hi';
 
function getMessage() {
  return message;
}
 
export function setMessage(msg) {
  message = msg;
}
 
export class Logger {
}
// Possible to export after function declaration
export {getMessage};
// Rename export binding
export {getMessage as sayHi}; 
