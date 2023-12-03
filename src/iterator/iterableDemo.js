/**
 * An iterable object is an object that has Symbol.iterator property
 * Symbol.iterator is a method that returns an iterator object
 * 
 * All collection objects such as Array, Set, Map are iterable objects
 * i.e. they have Symbol.iterator property by default
 * Hence, u can use for...of loop 
 * Behind the scenes, for...of loop calls System.iterator method to get iterator object
 * Then it calls iterator.next() method and assigns value of result to iterated var
 * When done property is true, the loop exits
 */
let ranks = ['A', 'B', 'C'];
let rankIterator = ranks[Symbol.iterator]();
let result = rankIterator.next();
while (!result.done) {
    console.log(result.value);
    result = rankIterator.next();
}
// ------------------------------------------------------------------------------------------------------------
/**
 * You only need to create iterators for custom types that you want to use with the for…of loop
 */
class Bag {
    constructor() {
        this.elements = [];
    }
    isEmpty() {
        return this.elements.length === 0;
    }
    add(element) {
        this.elements.push(element);
    }
    // Define iterator object
    * [Symbol.iterator]() {
        for (let element of this.elements) {
            yield element;
        }
    }
}
 
let bag = new Bag();
 
bag.add('pencil');
bag.add('erasure');
bag.add('ruler');
 
for (let e of bag) {
    console.log(e);
}
 
// pencil
// erasure
// ruler