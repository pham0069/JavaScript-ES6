/**
 * Generator is a function that returns an iterator
 * yield keyword returns an iterator object with 2 properties, value and done
 * 1. value is result of yield expression
 * 2. done specifies if generator function has not completed
 * yield pauses the function execution, returns iterator object 
 * and resumes function when next() method is called
 */
function* iterator(collection) {
    for (let i = 0; i < collection.length; i++) {
        yield collection[i];
    }
}

let ranks = ['A', 'B', 'C'];
var rankIterator = iterator(ranks);
let result = rankIterator.next();
 
while(!result.done){
  console.log(result.value);
  result = rankIterator.next();
}

function* numbers(n) {
    for (let i = 0; i < n; i++)
        yield i;
}

let numberIterator = numbers(3);
console.log(numberIterator.next()); // {  done: false,  value: 1 }
console.log(numberIterator.next()); // {  done: false,  value: 2 }
console.log(numberIterator.next()); // {  done: false,  value: 3 }
console.log(numberIterator.next()); // {  done: true,  value: undefined }