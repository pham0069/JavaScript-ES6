'use strict';

var _marked = /*#__PURE__*/regeneratorRuntime.mark(iterator),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(numbers);

/**
 * Generator is a function that returns an iterator
 * yield keyword returns an iterator object with 2 properties, value and done
 * 1. value is result of yield expression
 * 2. done specifies if generator function has not completed
 * yield pauses the function execution, returns iterator object 
 * and resumes function when next() method is called
 */
function iterator(collection) {
    var i;
    return regeneratorRuntime.wrap(function iterator$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    i = 0;

                case 1:
                    if (!(i < collection.length)) {
                        _context.next = 7;
                        break;
                    }

                    _context.next = 4;
                    return collection[i];

                case 4:
                    i++;
                    _context.next = 1;
                    break;

                case 7:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}

var ranks = ['A', 'B', 'C'];
var rankIterator = iterator(ranks);
var result = rankIterator.next();

while (!result.done) {
    console.log(result.value);
    result = rankIterator.next();
}

function numbers(n) {
    var i;
    return regeneratorRuntime.wrap(function numbers$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    i = 0;

                case 1:
                    if (!(i < n)) {
                        _context2.next = 7;
                        break;
                    }

                    _context2.next = 4;
                    return i;

                case 4:
                    i++;
                    _context2.next = 1;
                    break;

                case 7:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked2, this);
}

var numberIterator = numbers(3);
console.log(numberIterator.next()); // {  done: false,  value: 1 }
console.log(numberIterator.next()); // {  done: false,  value: 2 }
console.log(numberIterator.next()); // {  done: false,  value: 3 }
console.log(numberIterator.next()); // {  done: true,  value: undefined }