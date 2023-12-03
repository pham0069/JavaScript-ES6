/**
 * Introduced from ES2017
 * padStart() method pads a string with another string 
 * to a certain length from the start of the string 
 * and returns a resulting string that reaches the certain length
 * 
 * padEnd() works similarly to padStart() except the padding is at the end of string
 */

// padStart()
let str = '1234'.padStart(8,'0');
console.log(str); // "00001234"

// Space is padded if pad string is not specified
let str = 'abc'.padStart(5);
console.log(str); // "  abc" 


// padEnd()
let str = 'abc'.padEnd(5);
console.log(str); // "abc  "

str = 'abc'.padEnd(5,'*');
console.log(str); // "abc**"

// pad string is truncated to achiece the desired length
str = 'abc'.padEnd(5,'def');
console.log(str); // "abcde"