// Use spread operator to spread out the elements of array
function compare(a, b) {
    return a - b;
}
console.log(compare.apply(null, [1, 2])); // -1
// Use spread
console.log(compare(...[1, 2])); // -1



// Use spread operator to push elements to array
var rivers = ['Nile', 'Ganges', 'Yangte'];
var moreRivers = ['Danube', 'Amazon'];
/**
 * Note that this does not work
 rivers.push(moreRivers) -> [ 'Nile', 'Ganges', 'Yangte', [ 'Danube', 'Amazon' ] ]
 */
// Verbose
Array.prototype.push.apply(rivers, moreRivers);
console.log(rivers);
// Use spread
var additionalRivers = ['Mekong'];
rivers.push(...additionalRivers);
console.log(rivers);

// Use spread operator to construct array literal
let initialChars = ['A', 'B'];
let chars = [...initialChars, 'C', 'D'];
console.log(chars); // ["A", "B", "C", "D"]

// Use spread operator to copy array instance (shallow, not deep)
let scores = [80, 70, 90];
let copiedScores = [...scores];
console.log(copiedScores); // [80, 70, 90]