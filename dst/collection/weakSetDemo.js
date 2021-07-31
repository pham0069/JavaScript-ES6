'use strict';

var computer = { type: 'laptop' };
var server = { type: 'server' };
var equipment = new WeakSet([computer, server]);

if (equipment.has(server)) {
  console.log('We have a server');
}