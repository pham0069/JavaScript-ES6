'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Function with rest paramaters is formatted as
function fn(a,b,...args) {
   //...
}
 * The last parameter  ( args) is prefixed with the three dot ( ...) is called the rest parameter ( ...args)
 */

function sum() {
    var total = 0;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var a = _step.value;

            total += a;
        }
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

    return total;
}
// ------------------------------------------------------------------------------------------------
// rest parameter must be the last parameter of function
console.log(sum(1, 2, 3)); // 6
function filterBy(type) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
    }

    return args.filter(function (e) {
        return (typeof e === 'undefined' ? 'undefined' : _typeof(e)) === type;
    });
}

console.log(filterBy("number", 1, 2, 3));

// ------------------------------------------------------------------------------------------------
// rest parameter can be used in arrow function
var concat = function concat() {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
    }

    return args.reduce(function (prev, curr) {
        return prev + ' ' + curr;
    });
};
var message = concat('JavaScript', 'Rest', 'Parameters'); // =>
console.log(message); // JavaScript Rest Parameters
// ------------------------------------------------------------------------------------------------
// rest parameter can be used in a dynamic function
var showNumbers = new Function('...numbers', 'console.log(numbers)');
showNumbers(1, 2, 3); // [1,2,3]