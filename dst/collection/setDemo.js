'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var set = new Set();

// Create set from an array
var chars = new Set(['a', 'a', 'b', 'c', 'c']);
console.log(chars); // Set {"a", "b", "c"}
var type = typeof chars === 'undefined' ? 'undefined' : _typeof(chars);
console.log(type); // object

// Get set size
console.log(chars.size);

// Add element to set
chars.add('d');
console.log(chars); // Set {"a", "b", "c", "d"}

// Chainable add
chars.add('e').add('f');
console.log(chars); // Set {"a", "b", "c", "d", "e", "f"}

// Check if element exists in set
console.log(chars.has('a')); // true
console.log(chars.has('z')); // false

// Delete a specific element
var deleted = chars.delete('f');
console.log(deleted); // true
console.log(chars); // Set {"a", "b", "c", "d", "e"}

// Clear elements
chars.clear();

// Looping with for... of
var roles = new Set();
roles.add('admin').add('editor').add('subscriber');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = roles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var role = _step.value;

        console.log(role);
    }

    // Looping with forEach
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

roles.forEach(function (role) {
    return console.log(role.toUpperCase());
});

// Can use keys(), values() and entries() methods like Map. However, key and value are identical
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = roles.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _step2$value = _slicedToArray(_step2.value, 2),
            key = _step2$value[0],
            value = _step2$value[1];

        console.log(key === value);
    }
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