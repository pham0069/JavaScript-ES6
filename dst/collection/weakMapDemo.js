'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getListenable = getListenable;
exports.getListeners = getListeners;
exports.on = on;
exports.removeListener = removeListener;
exports.emit = emit;
exports.globalOn = globalOn;
exports.globalEmit = globalEmit;
exports.globalRemoveListener = globalRemoveListener;
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

function getListenable(object) {
    if (!listenableMap.has(object)) {
        listenableMap.set(object, {});
    }

    return listenableMap.get(object);
};

function getListeners(object, identifier) {
    var listenable = getListenable(object);
    listenable[identifier] = listenable[identifier] || [];

    return listenable[identifier];
};

function on(object, identifier, listener) {
    var listeners = getListeners(object, identifier);

    listeners.push(listener);

    globalEmit('listener added', object, identifier, listener);
};

function removeListener(object, identifier, listener) {
    var listeners = getListeners(object, identifier);

    var index = listeners.indexOf(listener);
    if (index !== -1) {
        listeners.splice(index, 1);
    }

    globalEmit('listener removed', object, identifier, listener);
};

function emit(object, identifier) {
    var listeners = getListeners(object, identifier);

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = listeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var listener = _step.value;

            listener.apply(object, args);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};

var globalEvents = exports.globalEvents = {};

function globalOn(identifier, listener) {
    on(globalEvents, identifier, listener);
};

function globalEmit(identifier) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
    }

    emit.apply(undefined, [globalEvents, identifier].concat(args));
};

function globalRemoveListener(identifier, listener) {
    removeListener(globalEvents, identifier, listener);
};