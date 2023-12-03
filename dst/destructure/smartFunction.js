"use strict";

// https://javascript.info/primitives-methods

/* For a function with long list of parameters, it's hard to 
 * - ignore an optional param or just take default value for a param
 * - remember the order of all the params in the function
 * 
 * To make life easier, we can put the entries for params (name: value) in an object
 * then pass this object to the function
 * Destructure helps to put assigned value to correct argument
 */
// we pass object to function
var options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

// ...and it immediately expands it to variables
function showMenu(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === undefined ? "Untitled" : _ref$title,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 200 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 100 : _ref$height,
      _ref$items = _ref.items,
      items = _ref$items === undefined ? [] : _ref$items;

  // title, items – taken from options,
  // width, height – defaults used
  alert(title + " " + width + " " + height); // My Menu 200 100
  alert(items); // Item1, Item2
}

showMenu(options);
showMenu({}); // pass in empty object -> use all default values