/**
 * Spread operator, represented by three dots 
 * allows spreading out elements of array or string
 */
// Use spread operator to spread out each individual characters of string into individual character
let spreadChars = ['A', ...'BC', 'D'];
console.log(spreadChars); // ["A", "B", "C", "D"]