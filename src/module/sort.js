/**
 * A module can have 1 and only 1 default export 
 * When export default is used, 
 * the module can be imported without using curly braces. See importDemo.js
 */
export default function(arr) {
    // sorting here
    console.log("QuickSort done");  
}
export function heapSort(arr) {
    // heapsort
    console.log("HeapSort done");  
}