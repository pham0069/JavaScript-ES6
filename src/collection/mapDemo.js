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

let john = {name: 'John Doe'},
lily = {name: 'Lily Bush'},
peter = {name: 'Peter Drucker'};
// Create a map
let userRoles = new Map();
console.log(typeof(userRoles)); // object
console.log(userRoles instanceof Map); // true
// Put key and value to map
userRoles.set(john, 'admin');
// Chaining set
userRoles.set(lily, 'editor')
         .set(peter, 'subscriber');
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
 console.log (userRoles.get(john)); // admin

 // For key not in map, value returned is undefined
 let foo = {name: 'Foo'};
 userRoles.get(foo); // undefined

 // Check if map has key
 console.log(userRoles.has(foo)); // false
 console.log(userRoles.has(lily)); // true

 // Get map size
 console.log(userRoles.size);

 // Get all keys of map
 for (let user of userRoles.keys()) {
    console.log(user.name);
}
// John Doe
// Lily Bush
// Peter Drucker

// Get all values of map
for (let role of userRoles.values()) {
    console.log(role);
}
// admin
// editor
// subscriber

// Get iterator object that contains an array of [key, value] of each element in Map
for (let elem of userRoles.entries()) {
    console.log(`${elem[0].name}: ${elem[1]}`);
}
// John Doe: admin
// Lily Bush: editor
// Peter Drucker: subscriber

// Alternatively, use object destructure
for (let [user, role] of userRoles.entries()) {
    console.log(`${user.name}: ${role}`);
}

// or forEach
userRoles.forEach((role, user) =>
    console.log(`${user.name}: ${role}`)
);

// Get map values into an array using spread operator
var roles = [...userRoles.values()];
console.log(roles); // ["admin", "editor", "subscriber"]

// Delete an entry in the map
userRoles.delete(john);
console.log(userRoles.size);

// Clear all entries in the map
userRoles.clear();
console.log(userRoles.size);