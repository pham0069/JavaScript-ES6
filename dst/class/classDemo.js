'use strict';

/**
 * Prior ES6, JavaScript had no classes. 
 * To mimic a class, we often use a constructor function
 */
function Animal(type) {
  this.type = type;
}

Animal.prototype.identify = function () {
  console.log(this.type);
};

var cat = new Animal('Cat');
cat.identify(); // Cat