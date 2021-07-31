'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * An iterable object is an object that has Symbol.iterator property
 * Symbol.iterator is a method that returns an iterator object
 * 
 * All collection objects such as Array, Set, Map are iterable objects
 * i.e. they have Symbol.iterator property by default
 * Hence, u can use for...of loop 
 * Behind the scenes, for...of loop calls System.iterator method to get iterator object
 * Then it calls iterator.next() method and assigns value of result to iterated var
 * When done property is true, the loop exits
 */
var ranks = ['A', 'B', 'C'];
var rankIterator = ranks[Symbol.iterator]();
var result = rankIterator.next();
while (!result.done) {
    console.log(result.value);
    result = rankIterator.next();
}
// ------------------------------------------------------------------------------------------------------------
/**
 * You only need to create iterators for custom types that you want to use with the for…of loop
 */

var Bag = function () {
    function Bag() {
        _classCallCheck(this, Bag);

        this.elements = [];
    }

    _createClass(Bag, [{
        key: 'isEmpty',
        value: function isEmpty() {
            return this.elements.length === 0;
        }
    }, {
        key: 'add',
        value: function add(element) {
            this.elements.push(element);
        }
        // Define iterator object

    }, {
        key: Symbol.iterator,
        value: /*#__PURE__*/regeneratorRuntime.mark(function value() {
            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, element;

            return regeneratorRuntime.wrap(function value$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context.prev = 3;
                            _iterator = this.elements[Symbol.iterator]();

                        case 5:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context.next = 12;
                                break;
                            }

                            element = _step.value;
                            _context.next = 9;
                            return element;

                        case 9:
                            _iteratorNormalCompletion = true;
                            _context.next = 5;
                            break;

                        case 12:
                            _context.next = 18;
                            break;

                        case 14:
                            _context.prev = 14;
                            _context.t0 = _context['catch'](3);
                            _didIteratorError = true;
                            _iteratorError = _context.t0;

                        case 18:
                            _context.prev = 18;
                            _context.prev = 19;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 21:
                            _context.prev = 21;

                            if (!_didIteratorError) {
                                _context.next = 24;
                                break;
                            }

                            throw _iteratorError;

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

    return Bag;
}();

var bag = new Bag();

bag.add('pencil');
bag.add('erasure');
bag.add('ruler');

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = bag[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var e = _step2.value;

        console.log(e);
    }

    // pencil
    // erasure
    // ruler
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