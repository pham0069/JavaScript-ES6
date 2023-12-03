'use strict';

/**
 * Promise is a placeholder that represents result of async operation
 * ES6 supported the promises by providing Promise object
 * 
 * A promise has three states: pending, fulfilled and rejected. 
 * 1. Each promise starts in the pending state which indicates that the asynchronous operation hasn’t completed. 
 * A pending promise is considered unsettled.
 * 2. When async operation completes, the promise is settled and has 1 of 2 possible states
 * a. fulfilled: op completed successfully
 * b. rejected: error occured in async operation
 * 
 */

/**
 * Use Promise constructor to create Promise object
 * The constructor accepts a function, which is called the executor
 * The executor accepts 2 functions, named resolve() and reject()
 * 1. resolve(): called when executor completed successfully
 * 2. reject(): called when executor failed
 */
var promise = getStockQuote('AAPL');
function getStockQuote(stock) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', 'http://www.javascripttutorial.net/stock.php?q=' + stock);

        req.onload = function () {
            req.status == 200 ? resolve(req.response) : reject(req.response);
        };
        req.onerror = function () {
            reject(Error('Error requesting data'));
        };
        req.send();
    });
}

/**
 * Promise object has then() method that takes 2 arguments, which are functions
 * First argument is called when promise is fulfilled
 * Second argument is called when promise is rejected
 */

promise.then(function (price) {
    return console.log(price);
}, function (error) {
    return console.log(error.message);
});
/**
 * It's possible to listen to fulfillment or reject only
promise.then(
    price => console.log(price)
);
// Pass null as first argument to listen to reject
promise.then(
  null,
  error => console.log(error.message)
);
// Alternative is using catch
promise.catch(
    error => console.log(error.message)
);
 */