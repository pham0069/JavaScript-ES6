'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _task;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * ES6 added the Symbol as a new primitive type
 * ES6 provides you with the global symbol registry 
 * that allows you to share symbols globally. 
 * If you want to create a symbol that will be shared, 
 * you use the Symbol.for() method instead of calling the Symbol() function
 */

var s = Symbol('foo');
// let s = new Symbol('foo'); // Error, cannot use new for primitive
console.log(typeof s === 'undefined' ? 'undefined' : _typeof(s));

/**
 * Symbol.for() method first searches for the symbol with the  ssn key in the global symbol registry. 
 * If so, it returns the existing symbol. 
 * Otherwise, the Symbol.for() method creates a new symbol, registers it to the global symbol registry 
 * with the specified key, and returns the symbol.
 */
var ssn = Symbol.for('ssn');
var citizenID = Symbol.for('ssn');
console.log(ssn === citizenID); // true
// --------------------------------------------------------------------------------------
/**
 * Use symbol as unique values
 */
var statuses = {
    OPEN: Symbol('Open'),
    IN_PROGRESS: Symbol('In progress'),
    COMPLETED: Symbol('Completed'),
    HOLD: Symbol('On hold'),
    CANCELED: Symbol('Canceled')
};
// --------------------------------------------------------------------------------------
// Use symbol as the computed property name of an object
var status = Symbol('status');
var task = (_task = {}, _defineProperty(_task, status, statuses.OPEN), _defineProperty(_task, 'description', 'Learn ES6 Symbol'), _task);
console.log(task);
// Get all the enumerable properties of an object
console.log(Object.keys(task)); // ["description"]

// Get all properties of an object whether the properties are enumerable or not
console.log(Object.getOwnPropertyNames(task)); // ["description"]

// Get all property symbols of an object
console.log(Object.getOwnPropertySymbols(task)); //[Symbol(status)]
// --------------------------------------------------------------------------------------
/**
 * ES6 provide predefined symbols which are known as well-known symbols 
 * that represent common behaviors in JavaScript. 
 * Each well-known symbol is a static property of the Symbol object.
 */

/**
 * Symbol.hasInstance is a symbol that changes the behavior of the instanceof operator
 * a instanceof b; --> call b[Symbol.hasInstance](a)
 */

var Stack = function () {
    function Stack() {
        _classCallCheck(this, Stack);
    }

    _createClass(Stack, null, [{
        key: Symbol.hasInstance,
        value: function value(obj) {
            return Array.isArray(obj);
        }
    }]);

    return Stack;
}();

console.log([] instanceof Stack); // true
// --------------------------------------------------------------------------------------
/**
 * Symbol.iterator specifies a function that returns an iterator for an object. 
 * The objects that have Symbol.iterator property are called iterable objects
 */

var numbers = [1, 2, 3];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = numbers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var num = _step.value;

        console.log(num);
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

var iterator = numbers[Symbol.iterator]();

console.log(iterator.next()); // Object {value: 1, done: false}
console.log(iterator.next()); // Object {value: 2, done: false}
console.log(iterator.next()); // Object {value: 3, done: false}
console.log(iterator.next()); // Object {value: undefined, done: true}

/**
 * By default, a collection is not iterable. 
 * However, you can make it iterable by using the Symbol.iterator 
 */

var List = function () {
    function List() {
        _classCallCheck(this, List);

        this.elements = [];
    }

    _createClass(List, [{
        key: 'add',
        value: function add(element) {
            this.elements.push(element);
            return this;
        }
    }, {
        key: Symbol.iterator,
        value: /*#__PURE__*/regeneratorRuntime.mark(function value() {
            var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, element;

            return regeneratorRuntime.wrap(function value$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _iteratorNormalCompletion2 = true;
                            _didIteratorError2 = false;
                            _iteratorError2 = undefined;
                            _context.prev = 3;
                            _iterator2 = this.elements[Symbol.iterator]();

                        case 5:
                            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                                _context.next = 12;
                                break;
                            }

                            element = _step2.value;
                            _context.next = 9;
                            return element;

                        case 9:
                            _iteratorNormalCompletion2 = true;
                            _context.next = 5;
                            break;

                        case 12:
                            _context.next = 18;
                            break;

                        case 14:
                            _context.prev = 14;
                            _context.t0 = _context['catch'](3);
                            _didIteratorError2 = true;
                            _iteratorError2 = _context.t0;

                        case 18:
                            _context.prev = 18;
                            _context.prev = 19;

                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }

                        case 21:
                            _context.prev = 21;

                            if (!_didIteratorError2) {
                                _context.next = 24;
                                break;
                            }

                            throw _iteratorError2;

                        case 24:
                            return _context.finish(21);

                        case 25:
                            return _context.finish(18);

                        case 26:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, value, this, [[3, 14, 18, 26], [19,, 21, 25]]);
        })
    }]);

    return List;
}();

var chars = new List();
chars.add('A').add('B').add('C');

// because of the Symbol.iterator
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = chars[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var c = _step3.value;

        console.log(c);
    }
    // --------------------------------------------------------------------------------------
    /**
     * Symbol.isConcatSpreadable property is a Boolean value that determines whether an object, 
     * which has a length property and numeric keys, 
     * is added individually to the result of the concat() function.
     */
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

var odd = [1, 3],
    even = [2, 4];
var all = odd.concat(even);
console.log(all); // [1, 3, 2, 4]
var extras = all.concat(5);
console.log(extras); // [1, 3, 2, 4, 5]

/*
// If you set the value of the Symbol.isConcatSpreadable to false 
// and pass the list object to the concat() method, 
// it will be concatenated to the array as a whole object.
let list = {
    0: 'JavaScript',
    1: 'Symbol',
    length: 2
};
let message = ['Learning'].concat(list);
console.log(message); // ["Learning", Object]
*/

var list = _defineProperty({
    0: 'JavaScript',
    1: 'Symbol',
    length: 2
}, Symbol.isConcatSpreadable, true);
var message = ['Learning'].concat(list);
console.log(message); // ["Learning", "JavaScript", "Symbol"]
// --------------------------------------------------------------------------------------
/**
 * Symbol.toPrimitive method determines what should happens when an object is converted into a primitive. 
 * JS engine defines the Symbol.toPrimitive method on the prototype of each standard type
 * 
 * Symbol.toPrimitive method takes a hint argument which has one of three values: “number”, “string”, and “default”. 
 * The hint argument specifies the type of the return value. 
 * The hint parameter is filled by the JavaScript engine based on the context in which  the object is used.
 * 
 */

function Money(amount, currency) {
    this.amount = amount;
    this.currency = currency;
}
Money.prototype[Symbol.toPrimitive] = function (hint) {
    var result;
    switch (hint) {
        case 'string':
            result = this.amount + this.currency;
            break;
        case 'number':
            result = this.amount;
            break;
        case 'default':
            result = this.amount + this.currency;
            break;
    }
    return result;
};

var price = new Money(799, 'USD');

console.log('Price is ' + price); // Price is 799USD
console.log(+price + 1); // 800
console.log(String(price)); // 799USD