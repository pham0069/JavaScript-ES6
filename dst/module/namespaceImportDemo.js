'use strict';

var _message = require('./message');

var m = _interopRequireWildcard(_message);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(m.message); // Hi
/**
 * Namespace import
 */
// Namespace import
console.log(m.sayHi()); // Hi