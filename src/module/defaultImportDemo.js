/**
 * Import default binding, no need to use double braces
 * When import multiple bindings, default binding must come first
 * Rename default export is possible
 */
import sort, {heapSort} from './sort';
import {default as quicksort} from './sort';

sort([2,1,3]);
heapSort([3,1,2]);
quicksort([1,3,2]);