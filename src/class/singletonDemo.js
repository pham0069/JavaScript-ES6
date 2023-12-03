/**
 * To create singleton object:
 * 1. Use anonymous class expression 
 * 2. Call class constructor immediately after expression
 */
let app = new class {
    constructor(name) {
        this.name = name;
    }
    start() {
        console.log(`Starting the ${this.name}...`);
    }
 
}('Awesome App');
 
app.start(); // Starting the Awesome App...