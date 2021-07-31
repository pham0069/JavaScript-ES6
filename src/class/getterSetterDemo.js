/**
 * To create a getter and setter, you use get and set keywords 
 * followed by a space and an identifier.
 * Under the hood, getters/setters are defined on the class prototype.
 */
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
 
    set fullName(str) {
        let names = str.split(' ');
        if (names.length === 2) {
            this.firstName = names[0];
            this.lastName = names[1];
        } else {
            throw 'Invalid name format';
        }
 
    }
}

let mary = new Person('Mary', 'Doe');
console.log(mary.fullName); // Mary Doe
 
// set new name
mary.fullName = 'Mary William';
console.log(mary.fullName); // Mary William