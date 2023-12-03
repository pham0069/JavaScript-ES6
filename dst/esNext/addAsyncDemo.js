"use strict";

function randBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
async function randAsync(min, max) {
    console.log(new Date().toLocaleTimeString() + ": Getting a random number between " + min + " and " + max);
    return new Promise(function (resolve) {
        setTimeout(function () {
            var num = randBetween(min, max);
            console.log(num);
            resolve(num);
        }, 1000);
    });
}

// Execute randAsync(10, 20), once finished run randAsync(100, 200), then return their sum
async function addAsync() {
    var a = await randAsync(10, 20);
    var b = await randAsync(100, 200);
    return a + b;
}

addAsync().then(function (sum) {
    console.log(new Date().toLocaleTimeString() + ": Display Result:", sum);
});

// Execute randAsync sequentially, when both finished, then return their sum
async function addAsyncParallel() {
    var a = randAsync(10, 20);
    var b = randAsync(100, 200);
    return (await a) + (await b);
}

addAsyncParallel().then(function (sum) {
    console.log(new Date().toLocaleTimeString() + ": Display Result:", sum);
});