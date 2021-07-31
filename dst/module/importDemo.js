"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setInfo = exports.message = undefined;

var _message = require("./message");

Object.defineProperty(exports, "setInfo", {
  enumerable: true,
  get: function get() {
    return _message.setMessage;
  }
});

// var message = 'Another message'; // error: Duplicate declaration "message"
console.log(_message.message); // Hi
// message = 'Hey'; // error: "message" is read-only
/**
 * The binding behaves like it was defined using const. 
 * It means you can’t have another identifier with the same name 
 * or change the value of the binding.
 * After the first import statement, the cal.js module is executed and loaded into the memory, and it is reused whenever it is referenced by the subsequent import statement.
 * 
 */
/**
 *  Alternative is combining all imports, i.e. 
    import {message, getMessage, setMessage } from "./exportMessageDemo";
 * Note that even if there are multiple statement of imports, imported module executed only once
 * After fhr first import statement, exportMessageDemo is executed and loaded into memory,
 * and it is reused whenever it is referenced by subsequent import statement    
 * Import cannot be duplicate
 */
console.log((0, _message.getMessage)()); // Hi
(0, _message.setMessage)('Hola');
console.log((0, _message.getMessage)()); // Hola
//--------------------------------------------------------------------------------------------
/**
 * import and export statement cannot be inside statements and function
 * The following is invalid
if(requiredMessage){
    export message;
 }

function importMessage(){
   import {message} from './exportMessageDemo.js';
}

 */
//--------------------------------------------------------------------------------------------
// Re-export binding of message that u have importe
exports.message = _message.message;
// Re-export and rename