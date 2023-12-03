let set = new Set();

// Create set from an array
let chars = new Set(['a', 'a', 'b', 'c', 'c']);
console.log(chars); // Set {"a", "b", "c"}
let type = typeof chars;
console.log(type); // object

// Get set size
console.log(chars.size);

// Add element to set
chars.add('d');
console.log(chars); // Set {"a", "b", "c", "d"}

// Chainable add
chars.add('e')
        .add('f');
console.log(chars); // Set {"a", "b", "c", "d", "e", "f"}

// Check if element exists in set
console.log(chars.has('a')); // true
console.log(chars.has('z')); // false

// Delete a specific element
let deleted = chars.delete('f');
console.log(deleted); // true
console.log(chars); // Set {"a", "b", "c", "d", "e"}

// Clear elements
chars.clear();

// Looping with for... of
let roles = new Set();
roles.add('admin')
    .add('editor')
    .add('subscriber');
for (let role of roles) {
    console.log(role);
}

// Looping with forEach
roles.forEach(role => console.log(role.toUpperCase()));

// Can use keys(), values() and entries() methods like Map. However, key and value are identical
for (let [key,value] of roles.entries()) {
    console.log(key === value);
}