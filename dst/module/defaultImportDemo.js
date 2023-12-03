'use strict';

var _sort = require('./sort');

var _sort2 = _interopRequireDefault(_sort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Import default binding, no need to use double braces
 * When import multiple bindings, default binding must come first
 * Rename default export is possible
 */
(0, _sort2.default)([2, 1, 3]);
(0, _sort.heapSort)([3, 1, 2]);
(0, _sort2.default)([1, 3, 2]);