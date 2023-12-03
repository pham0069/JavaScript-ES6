'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Prior ES6, when you need to map keys to values, you often use an object, 
 * because objects allow you to map key to values of any type.
 * However, using objects as maps has some side effects:
 * 1. An Object always has default keys in the map because it has a prototype
 * 2. Keys of an object must be strings or symbols, you cannot use Objects as keys
 * 3. An Object does not have a property that represents the size of the map.
 * 
 * ES6 provides Map that addresses these deficiencies
 * By definition, a Map object is a key-value map where a value of any type can be used as either a key or a value

 */

var john = { name: 'John Doe' },
    lily = { name: 'Lily Bush' },
    peter = { name: 'Peter Drucker' };
// Create a map
var userRoles = new Map();
console.log(typeof userRoles === 'undefined' ? 'undefined' : _typeof(userRoles)); // object
console.log(userRoles instanceof Map); // true
// Put key and value to map
userRoles.set(john, 'admin');
// Chaining set
userRoles.set(lily, 'editor').set(peter, 'subscriber');
/**
 * Alternatively, you can initialize map with values from constructor
 * 
 * 
let userRoles = new Map([
    [john, 'admin'],
    [lily, 'editor'],
    [peter, 'subscriber']
]);
 *
 * 
 */

// Get value from key
console.log(userRoles.get(john)); // admin

// For key not in map, value returned is undefined
var foo = { name: 'Foo' };
userRoles.get(foo); // undefined

// Check if map has key
console.log(userRoles.has(foo)); // false
console.log(userRoles.has(lily)); // true

// Get map size
console.log(userRoles.size);

// Get all keys of map
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = userRoles.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var user = _step.value;

        console.log(user.name);
    }
    // John Doe
    // Lily Bush
    // Peter Drucker

    // Get all values of map
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = userRoles.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var role = _step2.value;

        console.log(role);
    }
    // admin
    // editor
    // subscriber

    // Get iterator object that contains an array of [key, value] of each element in Map
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = userRoles.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var elem = _step3.value;

        console.log(elem[0].name + ': ' + elem[1]);
    }
    // John Doe: admin
    // Lily Bush: editor
    // Peter Drucker: subscriber

    // Alternatively, use object destructure
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
    for (var _iterator4 = userRoles.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var _step4$value = _slicedToArray(_step4.value, 2),
            _user = _step4$value[0],
            _role = _step4$value[1];

        console.log(_user.name + ': ' + _role);
    }

    // or forEach
} catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
        }
    } finally {
        if (_didIteratorError4) {
            throw _iteratorError4;
        }
    }
}

userRoles.forEach(function (role, user) {
    return console.log(user.name + ': ' + role);
});

// Get map values into an array using spread operator
var roles = [].concat(_toConsumableArray(userRoles.values()));
console.log(roles); // ["admin", "editor", "subscriber"]

// Delete an entry in the map
userRoles.delete(john);
console.log(userRoles.size);

// Clear all entries in the map
userRoles.clear();
console.log(userRoles.size);