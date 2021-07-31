'use strict';

/**
 * then() method returns another promise, thus u can chain the promise together
 * 
 * If you return a promise from the then() method, 
 * the next then() will wait on it and only is executed when that promise settles
 */
var p = new Promise(function (resolve, reject) {
  return resolve(10);
});

p.then(function (value) {
  return value + 10;
}).then(console.log); // 20
// --------------------------------------------------------------------------------------

var items = [{ name: 'Phone', qty: 1, price: 500 }, { name: 'Screen Proctector', qty: 2, price: 10 }];

var tax = 0.1;

function readData() {
  return new Promise(function (resolve, reject) {
    console.log('Reading data from the data source...');
    // simulate reading data from a data source.
    setTimeout(function () {
      resolve(items);
    }, 300);
  });
}

function addTax(items) {
  console.log('Calculate tax...');
  return items.map(function (item) {
    var name = item.name,
        qty = item.qty,
        price = item.price * (1 + tax);
    return { name: name, qty: qty, price: price };
  });
}

function calculateTotal(items) {
  // calculate total
  console.log('Calculate total...');

  var total = items.reduce(function (p, c) {
    return p + c.qty * c.price;
  }, 0);
  return total;
}

// chaining
readData().then(addTax).then(calculateTotal).then(console.log); // => 572