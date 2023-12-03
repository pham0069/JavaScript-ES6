/**
 * When you destructure an object, the variable names must match the property names in the object. 
 * If the variable name does not match, it receives a value of undefined.
 */
let meal = {
    size: 'large',
    price: 9.0
}
let {size, price} = meal;
// Use parenthesis 
//({size, price}) = meal;
console.log(size); // large
console.log(price); // 9.0
// ------------------------------------------------------------------------------------------------
let employee = {
    id: 1001,
    profile: {
        firstName: 'John',
        lastName: 'Doe'
    }
};
// Destructure nested object
let {profile: {firstName, lastName}} = employee;
 
console.log(firstName); // John
console.log(lastName);  // Doe


// Assign object parameter to a variable with different name
let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  // { sourceProperty: targetVariable }
  let {width: w, height: h, title} = options;
  
  // width -> w
  // height -> h
  // title -> title
  
  alert(title);  // Menu
  alert(w);      // 100
  alert(h);      // 200

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
let user = {
    name: "John",
    age: 30
  };
  
  // loop over keys-and-values
  for (let [key, value] of Object.entries(user)) {
    alert(`${key}:${value}`); // name:John, then age:30
}


// separate declaration and assignment is possible
//let title, width, height;
// but this wont work - ERROR ! since JS treats the first {...} as code block
//{title, width, height} = {title: "Menu", width: 200, height: 100};
// solution is to wrap them inside (...) -> this is fine
//({title, width, height} = {title: "Menu", width: 200, height: 100});


