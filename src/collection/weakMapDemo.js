/**
 * WeakMap is identical to Map, except for following features:
 * 1. Keys of a WeakMap must be objects
 * 2. Keys of a WeakMap are weak, meaning that they may be garbage-collected
 * if all references to the key are lost and there are no more references to the value
 */

 /**
  * Some use cases that would otherwise cause a memory leak and are enabled by WeakMaps include:
  * 1. Keeping private data about a specific object and only giving access to it to people with a reference to the Map. 
  * A more ad-hoc approach is coming with the private-symbols proposal but that's a long time from now.
  * 2. Keeping data about library objects without changing them or incurring overhead.
  * 3. Keeping data about a small set of objects where many objects of the type exist to not incur problems with hidden classes
  * JS engines use for objects of the same type.
  * 4. Keeping data about host objects like DOM nodes in the browser.
  * 5. Adding a capability to an object from the outside (like the event emitter).
  */

 var listenableMap = new WeakMap();

 export function getListenable (object) {
     if (!listenableMap.has(object)) {
         listenableMap.set(object, {});
     }
 
     return listenableMap.get(object);
 };
 
 
 export function getListeners (object, identifier) {
     var listenable = getListenable(object);
     listenable[identifier] = listenable[identifier] || [];
 
     return listenable[identifier];
 };
 
 
 export function on (object, identifier, listener) {
     var listeners = getListeners(object, identifier);
 
     listeners.push(listener);
 
     globalEmit('listener added', object, identifier, listener);
 };
 
 
 export function removeListener (object, identifier, listener) {
     var listeners = getListeners(object, identifier);
 
     var index = listeners.indexOf(listener);
     if(index !== -1) {
         listeners.splice(index, 1);
     }
 
     globalEmit('listener removed', object, identifier, listener);
 };
 
 
 export function emit (object, identifier, ...args) {
     var listeners = getListeners(object, identifier);
 
     for (var listener of listeners) {
         listener.apply(object, args);
     }
 };
 
 
 export var globalEvents = {};
 
 
 export function globalOn (identifier, listener) {
     on(globalEvents, identifier, listener);
 };
 
 
 export function globalEmit (identifier, ...args) {
     emit(globalEvents, identifier, ...args);
 };
 
 
 export function globalRemoveListener (identifier, listener) {
     removeListener(globalEvents, identifier, listener);
 };