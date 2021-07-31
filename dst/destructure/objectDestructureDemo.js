'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * When you destructure an object, the variable names must match the property names in the object. 
 * If the variable name does not match, it receives a value of undefined.
 */
var meal = {
    size: 'large',
    price: 9.0
};
var size = meal.size,
    price = meal.price;
// Use parenthesis 
//({size, price}) = meal;

console.log(size); // large
console.log(price); // 9.0
// ------------------------------------------------------------------------------------------------
var employee = {
    id: 1001,
    profile: {
        firstName: 'John',
        lastName: 'Doe'
    }
};
// Destructure nested object
var _employee$profile = employee.profile,
    firstName = _employee$profile.firstName,
    lastName = _employee$profile.lastName;


console.log(firstName); // John
console.log(lastName); // Doe


// Assign object parameter to a variable with different name
var options = {
    title: "Menu",
    width: 100,
    height: 200
};

// { sourceProperty: targetVariable }
var w = options.width,
    h = options.height,
    title = options.title;

// width -> w
// height -> h
// title -> title

alert(title); // Menu
alert(w); // 100
alert(h); // 200

/*
// Extract single interested param
let options = {
    title: "Menu",
    width: 100,
    height: 200
};


// only extract title as a variable
let { title } = options;

alert(title); // Menu
*/

// Looping with entries
var user = {
    name: "John",
    age: 30
};

// loop over keys-and-values
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = Object.entries(user)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2),
            key = _step$value[0],
            value = _step$value[1];

        alert(key + ':' + value); // name:John, then age:30
    }

    // separate declaration and assignment is possible
    //let title, width, height;
    // but this wont work - ERROR ! since JS treats the first {...} as code block
    //{title, width, height} = {title: "Menu", width: 200, height: 100};
    // solution is to wrap them inside (...) -> this is fine
    //({title, width, height} = {title: "Menu", width: 200, height: 100});
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