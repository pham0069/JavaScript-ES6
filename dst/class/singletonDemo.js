'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * To create singleton object:
 * 1. Use anonymous class expression 
 * 2. Call class constructor immediately after expression
 */
var app = new (function () {
  function _class(name) {
    _classCallCheck(this, _class);

    this.name = name;
  }

  _createClass(_class, [{
    key: 'start',
    value: function start() {
      console.log('Starting the ' + this.name + '...');
    }
  }]);

  return _class;
}())('Awesome App');

app.start(); // Starting the Awesome App...