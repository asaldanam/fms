(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("fms-overlay", [], factory);
	else if(typeof exports === 'object')
		exports["fms-overlay"] = factory();
	else
		root["fms-overlay"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue/dist/vue.js":
/*!**************************************!*\
  !*** ./node_modules/vue/dist/vue.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';

  /*  */

  var emptyObject = Object.freeze({});

  // These helpers produce better VM code in JS engines due to their
  // explicitness and function inlining.
  function isUndef (v) {
    return v === undefined || v === null
  }

  function isDef (v) {
    return v !== undefined && v !== null
  }

  function isTrue (v) {
    return v === true
  }

  function isFalse (v) {
    return v === false
  }

  /**
   * Check if value is primitive.
   */
  function isPrimitive (value) {
    return (
      typeof value === 'string' ||
      typeof value === 'number' ||
      // $flow-disable-line
      typeof value === 'symbol' ||
      typeof value === 'boolean'
    )
  }

  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */
  function isObject (obj) {
    return obj !== null && typeof obj === 'object'
  }

  /**
   * Get the raw type string of a value, e.g., [object Object].
   */
  var _toString = Object.prototype.toString;

  function toRawType (value) {
    return _toString.call(value).slice(8, -1)
  }

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */
  function isPlainObject (obj) {
    return _toString.call(obj) === '[object Object]'
  }

  function isRegExp (v) {
    return _toString.call(v) === '[object RegExp]'
  }

  /**
   * Check if val is a valid array index.
   */
  function isValidArrayIndex (val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val)
  }

  function isPromise (val) {
    return (
      isDef(val) &&
      typeof val.then === 'function' &&
      typeof val.catch === 'function'
    )
  }

  /**
   * Convert a value to a string that is actually rendered.
   */
  function toString (val) {
    return val == null
      ? ''
      : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
        ? JSON.stringify(val, null, 2)
        : String(val)
  }

  /**
   * Convert an input value to a number for persistence.
   * If the conversion fails, return original string.
   */
  function toNumber (val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n
  }

  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */
  function makeMap (
    str,
    expectsLowerCase
  ) {
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase
      ? function (val) { return map[val.toLowerCase()]; }
      : function (val) { return map[val]; }
  }

  /**
   * Check if a tag is a built-in tag.
   */
  var isBuiltInTag = makeMap('slot,component', true);

  /**
   * Check if an attribute is a reserved attribute.
   */
  var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

  /**
   * Remove an item from an array.
   */
  function remove (arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);
      if (index > -1) {
        return arr.splice(index, 1)
      }
    }
  }

  /**
   * Check whether an object has the property.
   */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn (obj, key) {
    return hasOwnProperty.call(obj, key)
  }

  /**
   * Create a cached version of a pure function.
   */
  function cached (fn) {
    var cache = Object.create(null);
    return (function cachedFn (str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str))
    })
  }

  /**
   * Camelize a hyphen-delimited string.
   */
  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
  });

  /**
   * Capitalize a string.
   */
  var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  });

  /**
   * Hyphenate a camelCase string.
   */
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase()
  });

  /**
   * Simple bind polyfill for environments that do not support it,
   * e.g., PhantomJS 1.x. Technically, we don't need this anymore
   * since native bind is now performant enough in most browsers.
   * But removing it would mean breaking code that was able to run in
   * PhantomJS 1.x, so this must be kept for backward compatibility.
   */

  /* istanbul ignore next */
  function polyfillBind (fn, ctx) {
    function boundFn (a) {
      var l = arguments.length;
      return l
        ? l > 1
          ? fn.apply(ctx, arguments)
          : fn.call(ctx, a)
        : fn.call(ctx)
    }

    boundFn._length = fn.length;
    return boundFn
  }

  function nativeBind (fn, ctx) {
    return fn.bind(ctx)
  }

  var bind = Function.prototype.bind
    ? nativeBind
    : polyfillBind;

  /**
   * Convert an Array-like object to a real Array.
   */
  function toArray (list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret
  }

  /**
   * Mix properties into target object.
   */
  function extend (to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }
    return to
  }

  /**
   * Merge an Array of Objects into a single Object.
   */
  function toObject (arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }
    return res
  }

  /* eslint-disable no-unused-vars */

  /**
   * Perform no operation.
   * Stubbing args to make Flow happy without leaving useless transpiled code
   * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
   */
  function noop (a, b, c) {}

  /**
   * Always return false.
   */
  var no = function (a, b, c) { return false; };

  /* eslint-enable no-unused-vars */

  /**
   * Return the same value.
   */
  var identity = function (_) { return _; };

  /**
   * Generate a string containing static keys from compiler modules.
   */
  function genStaticKeys (modules) {
    return modules.reduce(function (keys, m) {
      return keys.concat(m.staticKeys || [])
    }, []).join(',')
  }

  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */
  function looseEqual (a, b) {
    if (a === b) { return true }
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);
        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every(function (e, i) {
            return looseEqual(e, b[i])
          })
        } else if (a instanceof Date && b instanceof Date) {
          return a.getTime() === b.getTime()
        } else if (!isArrayA && !isArrayB) {
          var keysA = Object.keys(a);
          var keysB = Object.keys(b);
          return keysA.length === keysB.length && keysA.every(function (key) {
            return looseEqual(a[key], b[key])
          })
        } else {
          /* istanbul ignore next */
          return false
        }
      } catch (e) {
        /* istanbul ignore next */
        return false
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b)
    } else {
      return false
    }
  }

  /**
   * Return the first index at which a loosely equal value can be
   * found in the array (if value is a plain object, the array must
   * contain an object of the same shape), or -1 if it is not present.
   */
  function looseIndexOf (arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) { return i }
    }
    return -1
  }

  /**
   * Ensure a function is called only once.
   */
  function once (fn) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    }
  }

  var SSR_ATTR = 'data-server-rendered';

  var ASSET_TYPES = [
    'component',
    'directive',
    'filter'
  ];

  var LIFECYCLE_HOOKS = [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated',
    'errorCaptured',
    'serverPrefetch'
  ];

  /*  */



  var config = ({
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: Object.create(null),

    /**
     * Whether to suppress warnings.
     */
    silent: false,

    /**
     * Show production mode tip message on boot?
     */
    productionTip: "development" !== 'production',

    /**
     * Whether to enable devtools
     */
    devtools: "development" !== 'production',

    /**
     * Whether to record perf
     */
    performance: false,

    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,

    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],

    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: Object.create(null),

    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,

    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,

    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,

    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,

    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,

    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,

    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: true,

    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
  });

  /*  */

  /**
   * unicode letters used for parsing html tags, component names and property paths.
   * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
   * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
   */
  var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

  /**
   * Check if a string starts with $ or _
   */
  function isReserved (str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F
  }

  /**
   * Define a property.
   */
  function def (obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }

  /**
   * Parse simple path.
   */
  var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
  function parsePath (path) {
    if (bailRE.test(path)) {
      return
    }
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) { return }
        obj = obj[segments[i]];
      }
      return obj
    }
  }

  /*  */

  // can we use __proto__?
  var hasProto = '__proto__' in {};

  // Browser environment sniffing
  var inBrowser = typeof window !== 'undefined';
  var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
  var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
  var isPhantomJS = UA && /phantomjs/.test(UA);
  var isFF = UA && UA.match(/firefox\/(\d+)/);

  // Firefox has a "watch" function on Object.prototype...
  var nativeWatch = ({}).watch;

  var supportsPassive = false;
  if (inBrowser) {
    try {
      var opts = {};
      Object.defineProperty(opts, 'passive', ({
        get: function get () {
          /* istanbul ignore next */
          supportsPassive = true;
        }
      })); // https://github.com/facebook/flow/issues/285
      window.addEventListener('test-passive', null, opts);
    } catch (e) {}
  }

  // this needs to be lazy-evaled because vue may be required before
  // vue-server-renderer can set VUE_ENV
  var _isServer;
  var isServerRendering = function () {
    if (_isServer === undefined) {
      /* istanbul ignore if */
      if (!inBrowser && !inWeex && typeof global !== 'undefined') {
        // detect presence of vue-server-renderer and avoid
        // Webpack shimming the process
        _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
      } else {
        _isServer = false;
      }
    }
    return _isServer
  };

  // detect devtools
  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  /* istanbul ignore next */
  function isNative (Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
  }

  var hasSymbol =
    typeof Symbol !== 'undefined' && isNative(Symbol) &&
    typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

  var _Set;
  /* istanbul ignore if */ // $flow-disable-line
  if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = /*@__PURE__*/(function () {
      function Set () {
        this.set = Object.create(null);
      }
      Set.prototype.has = function has (key) {
        return this.set[key] === true
      };
      Set.prototype.add = function add (key) {
        this.set[key] = true;
      };
      Set.prototype.clear = function clear () {
        this.set = Object.create(null);
      };

      return Set;
    }());
  }

  /*  */

  var warn = noop;
  var tip = noop;
  var generateComponentTrace = (noop); // work around flow check
  var formatComponentName = (noop);

  {
    var hasConsole = typeof console !== 'undefined';
    var classifyRE = /(?:^|[-_])(\w)/g;
    var classify = function (str) { return str
      .replace(classifyRE, function (c) { return c.toUpperCase(); })
      .replace(/[-_]/g, ''); };

    warn = function (msg, vm) {
      var trace = vm ? generateComponentTrace(vm) : '';

      if (config.warnHandler) {
        config.warnHandler.call(null, msg, vm, trace);
      } else if (hasConsole && (!config.silent)) {
        console.error(("[Vue warn]: " + msg + trace));
      }
    };

    tip = function (msg, vm) {
      if (hasConsole && (!config.silent)) {
        console.warn("[Vue tip]: " + msg + (
          vm ? generateComponentTrace(vm) : ''
        ));
      }
    };

    formatComponentName = function (vm, includeFile) {
      if (vm.$root === vm) {
        return '<Root>'
      }
      var options = typeof vm === 'function' && vm.cid != null
        ? vm.options
        : vm._isVue
          ? vm.$options || vm.constructor.options
          : vm;
      var name = options.name || options._componentTag;
      var file = options.__file;
      if (!name && file) {
        var match = file.match(/([^/\\]+)\.vue$/);
        name = match && match[1];
      }

      return (
        (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
        (file && includeFile !== false ? (" at " + file) : '')
      )
    };

    var repeat = function (str, n) {
      var res = '';
      while (n) {
        if (n % 2 === 1) { res += str; }
        if (n > 1) { str += str; }
        n >>= 1;
      }
      return res
    };

    generateComponentTrace = function (vm) {
      if (vm._isVue && vm.$parent) {
        var tree = [];
        var currentRecursiveSequence = 0;
        while (vm) {
          if (tree.length > 0) {
            var last = tree[tree.length - 1];
            if (last.constructor === vm.constructor) {
              currentRecursiveSequence++;
              vm = vm.$parent;
              continue
            } else if (currentRecursiveSequence > 0) {
              tree[tree.length - 1] = [last, currentRecursiveSequence];
              currentRecursiveSequence = 0;
            }
          }
          tree.push(vm);
          vm = vm.$parent;
        }
        return '\n\nfound in\n\n' + tree
          .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
              ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
              : formatComponentName(vm))); })
          .join('\n')
      } else {
        return ("\n\n(found in " + (formatComponentName(vm)) + ")")
      }
    };
  }

  /*  */

  var uid = 0;

  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   */
  var Dep = function Dep () {
    this.id = uid++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub (sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub (sub) {
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend () {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify () {
    // stabilize the subscriber list first
    var subs = this.subs.slice();
    if (!config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      subs.sort(function (a, b) { return a.id - b.id; });
    }
    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  };

  // The current target watcher being evaluated.
  // This is globally unique because only one watcher
  // can be evaluated at a time.
  Dep.target = null;
  var targetStack = [];

  function pushTarget (target) {
    targetStack.push(target);
    Dep.target = target;
  }

  function popTarget () {
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
  }

  /*  */

  var VNode = function VNode (
    tag,
    data,
    children,
    text,
    elm,
    context,
    componentOptions,
    asyncFactory
  ) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  };

  var prototypeAccessors = { child: { configurable: true } };

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  prototypeAccessors.child.get = function () {
    return this.componentInstance
  };

  Object.defineProperties( VNode.prototype, prototypeAccessors );

  var createEmptyVNode = function (text) {
    if ( text === void 0 ) text = '';

    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node
  };

  function createTextVNode (val) {
    return new VNode(undefined, undefined, undefined, String(val))
  }

  // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.
  function cloneVNode (vnode) {
    var cloned = new VNode(
      vnode.tag,
      vnode.data,
      // #7975
      // clone children array to avoid mutating original in case of cloning
      // a child.
      vnode.children && vnode.children.slice(),
      vnode.text,
      vnode.elm,
      vnode.context,
      vnode.componentOptions,
      vnode.asyncFactory
    );
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.asyncMeta = vnode.asyncMeta;
    cloned.isCloned = true;
    return cloned
  }

  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */

  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);

  var methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
  ];

  /**
   * Intercept mutating methods and emit events
   */
  methodsToPatch.forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;
      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break
        case 'splice':
          inserted = args.slice(2);
          break
      }
      if (inserted) { ob.observeArray(inserted); }
      // notify change
      ob.dep.notify();
      return result
    });
  });

  /*  */

  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

  /**
   * In some cases we may want to disable observation inside a component's
   * update computation.
   */
  var shouldObserve = true;

  function toggleObserving (value) {
    shouldObserve = value;
  }

  /**
   * Observer class that is attached to each observed
   * object. Once attached, the observer converts the target
   * object's property keys into getter/setters that
   * collect dependencies and dispatch updates.
   */
  var Observer = function Observer (value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);
    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods);
      } else {
        copyAugment(value, arrayMethods, arrayKeys);
      }
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };

  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  Observer.prototype.walk = function walk (obj) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      defineReactive$$1(obj, keys[i]);
    }
  };

  /**
   * Observe a list of Array items.
   */
  Observer.prototype.observeArray = function observeArray (items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  };

  // helpers

  /**
   * Augment a target Object or Array by intercepting
   * the prototype chain using __proto__
   */
  function protoAugment (target, src) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
  }

  /**
   * Augment a target Object or Array by defining
   * hidden properties.
   */
  /* istanbul ignore next */
  function copyAugment (target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }

  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */
  function observe (value, asRootData) {
    if (!isObject(value) || value instanceof VNode) {
      return
    }
    var ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (
      shouldObserve &&
      !isServerRendering() &&
      (Array.isArray(value) || isPlainObject(value)) &&
      Object.isExtensible(value) &&
      !value._isVue
    ) {
      ob = new Observer(value);
    }
    if (asRootData && ob) {
      ob.vmCount++;
    }
    return ob
  }

  /**
   * Define a reactive property on an Object.
   */
  function defineReactive$$1 (
    obj,
    key,
    val,
    customSetter,
    shallow
  ) {
    var dep = new Dep();

    var property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
      return
    }

    // cater for pre-defined getter/setters
    var getter = property && property.get;
    var setter = property && property.set;
    if ((!getter || setter) && arguments.length === 2) {
      val = obj[key];
    }

    var childOb = !shallow && observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter () {
        var value = getter ? getter.call(obj) : val;
        if (Dep.target) {
          dep.depend();
          if (childOb) {
            childOb.dep.depend();
            if (Array.isArray(value)) {
              dependArray(value);
            }
          }
        }
        return value
      },
      set: function reactiveSetter (newVal) {
        var value = getter ? getter.call(obj) : val;
        /* eslint-disable no-self-compare */
        if (newVal === value || (newVal !== newVal && value !== value)) {
          return
        }
        /* eslint-enable no-self-compare */
        if (customSetter) {
          customSetter();
        }
        // #7981: for accessor properties without setter
        if (getter && !setter) { return }
        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }
        childOb = !shallow && observe(newVal);
        dep.notify();
      }
    });
  }

  /**
   * Set a property on an object. Adds the new property and
   * triggers change notification if the property doesn't
   * already exist.
   */
  function set (target, key, val) {
    if (isUndef(target) || isPrimitive(target)
    ) {
      warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val
    }
    if (key in target && !(key in Object.prototype)) {
      target[key] = val;
      return val
    }
    var ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      warn(
        'Avoid adding reactive properties to a Vue instance or its root $data ' +
        'at runtime - declare it upfront in the data option.'
      );
      return val
    }
    if (!ob) {
      target[key] = val;
      return val
    }
    defineReactive$$1(ob.value, key, val);
    ob.dep.notify();
    return val
  }

  /**
   * Delete a property and trigger change if necessary.
   */
  function del (target, key) {
    if (isUndef(target) || isPrimitive(target)
    ) {
      warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.splice(key, 1);
      return
    }
    var ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      warn(
        'Avoid deleting properties on a Vue instance or its root $data ' +
        '- just set it to null.'
      );
      return
    }
    if (!hasOwn(target, key)) {
      return
    }
    delete target[key];
    if (!ob) {
      return
    }
    ob.dep.notify();
  }

  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */
  function dependArray (value) {
    for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();
      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }

  /*  */

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */
  var strats = config.optionMergeStrategies;

  /**
   * Options with restrictions
   */
  {
    strats.el = strats.propsData = function (parent, child, vm, key) {
      if (!vm) {
        warn(
          "option \"" + key + "\" can only be used during instance " +
          'creation with the `new` keyword.'
        );
      }
      return defaultStrat(parent, child)
    };
  }

  /**
   * Helper that recursively merges two data objects together.
   */
  function mergeData (to, from) {
    if (!from) { return to }
    var key, toVal, fromVal;

    var keys = hasSymbol
      ? Reflect.ownKeys(from)
      : Object.keys(from);

    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      // in case the object is already observed...
      if (key === '__ob__') { continue }
      toVal = to[key];
      fromVal = from[key];
      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (
        toVal !== fromVal &&
        isPlainObject(toVal) &&
        isPlainObject(fromVal)
      ) {
        mergeData(toVal, fromVal);
      }
    }
    return to
  }

  /**
   * Data
   */
  function mergeDataOrFn (
    parentVal,
    childVal,
    vm
  ) {
    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal
      }
      if (!parentVal) {
        return childVal
      }
      // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.
      return function mergedDataFn () {
        return mergeData(
          typeof childVal === 'function' ? childVal.call(this, this) : childVal,
          typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
        )
      }
    } else {
      return function mergedInstanceDataFn () {
        // instance merge
        var instanceData = typeof childVal === 'function'
          ? childVal.call(vm, vm)
          : childVal;
        var defaultData = typeof parentVal === 'function'
          ? parentVal.call(vm, vm)
          : parentVal;
        if (instanceData) {
          return mergeData(instanceData, defaultData)
        } else {
          return defaultData
        }
      }
    }
  }

  strats.data = function (
    parentVal,
    childVal,
    vm
  ) {
    if (!vm) {
      if (childVal && typeof childVal !== 'function') {
        warn(
          'The "data" option should be a function ' +
          'that returns a per-instance value in component ' +
          'definitions.',
          vm
        );

        return parentVal
      }
      return mergeDataOrFn(parentVal, childVal)
    }

    return mergeDataOrFn(parentVal, childVal, vm)
  };

  /**
   * Hooks and props are merged as arrays.
   */
  function mergeHook (
    parentVal,
    childVal
  ) {
    var res = childVal
      ? parentVal
        ? parentVal.concat(childVal)
        : Array.isArray(childVal)
          ? childVal
          : [childVal]
      : parentVal;
    return res
      ? dedupeHooks(res)
      : res
  }

  function dedupeHooks (hooks) {
    var res = [];
    for (var i = 0; i < hooks.length; i++) {
      if (res.indexOf(hooks[i]) === -1) {
        res.push(hooks[i]);
      }
    }
    return res
  }

  LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeHook;
  });

  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */
  function mergeAssets (
    parentVal,
    childVal,
    vm,
    key
  ) {
    var res = Object.create(parentVal || null);
    if (childVal) {
      assertObjectType(key, childVal, vm);
      return extend(res, childVal)
    } else {
      return res
    }
  }

  ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
  });

  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */
  strats.watch = function (
    parentVal,
    childVal,
    vm,
    key
  ) {
    // work around Firefox's Object.prototype.watch...
    if (parentVal === nativeWatch) { parentVal = undefined; }
    if (childVal === nativeWatch) { childVal = undefined; }
    /* istanbul ignore if */
    if (!childVal) { return Object.create(parentVal || null) }
    {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) { return childVal }
    var ret = {};
    extend(ret, parentVal);
    for (var key$1 in childVal) {
      var parent = ret[key$1];
      var child = childVal[key$1];
      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }
      ret[key$1] = parent
        ? parent.concat(child)
        : Array.isArray(child) ? child : [child];
    }
    return ret
  };

  /**
   * Other object hashes.
   */
  strats.props =
  strats.methods =
  strats.inject =
  strats.computed = function (
    parentVal,
    childVal,
    vm,
    key
  ) {
    if (childVal && "development" !== 'production') {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) { return childVal }
    var ret = Object.create(null);
    extend(ret, parentVal);
    if (childVal) { extend(ret, childVal); }
    return ret
  };
  strats.provide = mergeDataOrFn;

  /**
   * Default strategy.
   */
  var defaultStrat = function (parentVal, childVal) {
    return childVal === undefined
      ? parentVal
      : childVal
  };

  /**
   * Validate component names
   */
  function checkComponents (options) {
    for (var key in options.components) {
      validateComponentName(key);
    }
  }

  function validateComponentName (name) {
    if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
      warn(
        'Invalid component name: "' + name + '". Component names ' +
        'should conform to valid custom element name in html5 specification.'
      );
    }
    if (isBuiltInTag(name) || config.isReservedTag(name)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + name
      );
    }
  }

  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */
  function normalizeProps (options, vm) {
    var props = options.props;
    if (!props) { return }
    var res = {};
    var i, val, name;
    if (Array.isArray(props)) {
      i = props.length;
      while (i--) {
        val = props[i];
        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = { type: null };
        } else {
          warn('props must be strings when using array syntax.');
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val)
          ? val
          : { type: val };
      }
    } else {
      warn(
        "Invalid value for option \"props\": expected an Array or an Object, " +
        "but got " + (toRawType(props)) + ".",
        vm
      );
    }
    options.props = res;
  }

  /**
   * Normalize all injections into Object-based format
   */
  function normalizeInject (options, vm) {
    var inject = options.inject;
    if (!inject) { return }
    var normalized = options.inject = {};
    if (Array.isArray(inject)) {
      for (var i = 0; i < inject.length; i++) {
        normalized[inject[i]] = { from: inject[i] };
      }
    } else if (isPlainObject(inject)) {
      for (var key in inject) {
        var val = inject[key];
        normalized[key] = isPlainObject(val)
          ? extend({ from: key }, val)
          : { from: val };
      }
    } else {
      warn(
        "Invalid value for option \"inject\": expected an Array or an Object, " +
        "but got " + (toRawType(inject)) + ".",
        vm
      );
    }
  }

  /**
   * Normalize raw function directives into object format.
   */
  function normalizeDirectives (options) {
    var dirs = options.directives;
    if (dirs) {
      for (var key in dirs) {
        var def$$1 = dirs[key];
        if (typeof def$$1 === 'function') {
          dirs[key] = { bind: def$$1, update: def$$1 };
        }
      }
    }
  }

  function assertObjectType (name, value, vm) {
    if (!isPlainObject(value)) {
      warn(
        "Invalid value for option \"" + name + "\": expected an Object, " +
        "but got " + (toRawType(value)) + ".",
        vm
      );
    }
  }

  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */
  function mergeOptions (
    parent,
    child,
    vm
  ) {
    {
      checkComponents(child);
    }

    if (typeof child === 'function') {
      child = child.options;
    }

    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives(child);

    // Apply extends and mixins on the child options,
    // but only if it is a raw options object that isn't
    // the result of another mergeOptions call.
    // Only merged options has the _base property.
    if (!child._base) {
      if (child.extends) {
        parent = mergeOptions(parent, child.extends, vm);
      }
      if (child.mixins) {
        for (var i = 0, l = child.mixins.length; i < l; i++) {
          parent = mergeOptions(parent, child.mixins[i], vm);
        }
      }
    }

    var options = {};
    var key;
    for (key in parent) {
      mergeField(key);
    }
    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }
    function mergeField (key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }
    return options
  }

  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */
  function resolveAsset (
    options,
    type,
    id,
    warnMissing
  ) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
      return
    }
    var assets = options[type];
    // check local registration variations first
    if (hasOwn(assets, id)) { return assets[id] }
    var camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
    var PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
    // fallback to prototype chain
    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    if (warnMissing && !res) {
      warn(
        'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
        options
      );
    }
    return res
  }

  /*  */



  function validateProp (
    key,
    propOptions,
    propsData,
    vm
  ) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key];
    // boolean casting
    var booleanIndex = getTypeIndex(Boolean, prop.type);
    if (booleanIndex > -1) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (value === '' || value === hyphenate(key)) {
        // only cast empty string / same name to boolean if
        // boolean has higher priority
        var stringIndex = getTypeIndex(String, prop.type);
        if (stringIndex < 0 || booleanIndex < stringIndex) {
          value = true;
        }
      }
    }
    // check default value
    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key);
      // since the default value is a fresh copy,
      // make sure to observe it.
      var prevShouldObserve = shouldObserve;
      toggleObserving(true);
      observe(value);
      toggleObserving(prevShouldObserve);
    }
    {
      assertProp(prop, key, value, vm, absent);
    }
    return value
  }

  /**
   * Get the default value of a prop.
   */
  function getPropDefaultValue (vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
      return undefined
    }
    var def = prop.default;
    // warn against non-factory defaults for Object & Array
    if (isObject(def)) {
      warn(
        'Invalid default value for prop "' + key + '": ' +
        'Props with type Object/Array must use a factory function ' +
        'to return the default value.',
        vm
      );
    }
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm && vm.$options.propsData &&
      vm.$options.propsData[key] === undefined &&
      vm._props[key] !== undefined
    ) {
      return vm._props[key]
    }
    // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context
    return typeof def === 'function' && getType(prop.type) !== 'Function'
      ? def.call(vm)
      : def
  }

  /**
   * Assert whether a prop is valid.
   */
  function assertProp (
    prop,
    name,
    value,
    vm,
    absent
  ) {
    if (prop.required && absent) {
      warn(
        'Missing required prop: "' + name + '"',
        vm
      );
      return
    }
    if (value == null && !prop.required) {
      return
    }
    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];
    if (type) {
      if (!Array.isArray(type)) {
        type = [type];
      }
      for (var i = 0; i < type.length && !valid; i++) {
        var assertedType = assertType(value, type[i]);
        expectedTypes.push(assertedType.expectedType || '');
        valid = assertedType.valid;
      }
    }

    if (!valid) {
      warn(
        getInvalidTypeMessage(name, value, expectedTypes),
        vm
      );
      return
    }
    var validator = prop.validator;
    if (validator) {
      if (!validator(value)) {
        warn(
          'Invalid prop: custom validator check failed for prop "' + name + '".',
          vm
        );
      }
    }
  }

  var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

  function assertType (value, type) {
    var valid;
    var expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
      var t = typeof value;
      valid = t === expectedType.toLowerCase();
      // for primitive wrapper objects
      if (!valid && t === 'object') {
        valid = value instanceof type;
      }
    } else if (expectedType === 'Object') {
      valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
      valid = Array.isArray(value);
    } else {
      valid = value instanceof type;
    }
    return {
      valid: valid,
      expectedType: expectedType
    }
  }

  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */
  function getType (fn) {
    var match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : ''
  }

  function isSameType (a, b) {
    return getType(a) === getType(b)
  }

  function getTypeIndex (type, expectedTypes) {
    if (!Array.isArray(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1
    }
    for (var i = 0, len = expectedTypes.length; i < len; i++) {
      if (isSameType(expectedTypes[i], type)) {
        return i
      }
    }
    return -1
  }

  function getInvalidTypeMessage (name, value, expectedTypes) {
    var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', '));
    var expectedType = expectedTypes[0];
    var receivedType = toRawType(value);
    var expectedValue = styleValue(value, expectedType);
    var receivedValue = styleValue(value, receivedType);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 &&
        isExplicable(expectedType) &&
        !isBoolean(expectedType, receivedType)) {
      message += " with value " + expectedValue;
    }
    message += ", got " + receivedType + " ";
    // check if we need to specify received value
    if (isExplicable(receivedType)) {
      message += "with value " + receivedValue + ".";
    }
    return message
  }

  function styleValue (value, type) {
    if (type === 'String') {
      return ("\"" + value + "\"")
    } else if (type === 'Number') {
      return ("" + (Number(value)))
    } else {
      return ("" + value)
    }
  }

  function isExplicable (value) {
    var explicitTypes = ['string', 'number', 'boolean'];
    return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
  }

  function isBoolean () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
  }

  /*  */

  function handleError (err, vm, info) {
    // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
    // See: https://github.com/vuejs/vuex/issues/1505
    pushTarget();
    try {
      if (vm) {
        var cur = vm;
        while ((cur = cur.$parent)) {
          var hooks = cur.$options.errorCaptured;
          if (hooks) {
            for (var i = 0; i < hooks.length; i++) {
              try {
                var capture = hooks[i].call(cur, err, vm, info) === false;
                if (capture) { return }
              } catch (e) {
                globalHandleError(e, cur, 'errorCaptured hook');
              }
            }
          }
        }
      }
      globalHandleError(err, vm, info);
    } finally {
      popTarget();
    }
  }

  function invokeWithErrorHandling (
    handler,
    context,
    args,
    vm,
    info
  ) {
    var res;
    try {
      res = args ? handler.apply(context, args) : handler.call(context);
      if (res && !res._isVue && isPromise(res) && !res._handled) {
        res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
        // issue #9511
        // avoid catch triggering multiple times when nested calls
        res._handled = true;
      }
    } catch (e) {
      handleError(e, vm, info);
    }
    return res
  }

  function globalHandleError (err, vm, info) {
    if (config.errorHandler) {
      try {
        return config.errorHandler.call(null, err, vm, info)
      } catch (e) {
        // if the user intentionally throws the original error in the handler,
        // do not log it twice
        if (e !== err) {
          logError(e, null, 'config.errorHandler');
        }
      }
    }
    logError(err, vm, info);
  }

  function logError (err, vm, info) {
    {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if ((inBrowser || inWeex) && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }

  /*  */

  var isUsingMicroTask = false;

  var callbacks = [];
  var pending = false;

  function flushCallbacks () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // Here we have async deferring wrappers using microtasks.
  // In 2.5 we used (macro) tasks (in combination with microtasks).
  // However, it has subtle problems when state is changed right before repaint
  // (e.g. #6813, out-in transitions).
  // Also, using (macro) tasks in event handler would cause some weird behaviors
  // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
  // So we now use microtasks everywhere, again.
  // A major drawback of this tradeoff is that there are some scenarios
  // where microtasks have too high a priority and fire in between supposedly
  // sequential events (e.g. #4521, #6690, which have workarounds)
  // or even between bubbling of the same event (#6566).
  var timerFunc;

  // The nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore next, $flow-disable-line */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    timerFunc = function () {
      p.then(flushCallbacks);
      // In problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
    isUsingMicroTask = true;
  } else if (!isIE && typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // Use MutationObserver where native Promise is not available,
    // e.g. PhantomJS, iOS7, Android 4.4
    // (#6466 MutationObserver is unreliable in IE11)
    var counter = 1;
    var observer = new MutationObserver(flushCallbacks);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
    isUsingMicroTask = true;
  } else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    // Fallback to setImmediate.
    // Technically it leverages the (macro) task queue,
    // but it is still a better choice than setTimeout.
    timerFunc = function () {
      setImmediate(flushCallbacks);
    };
  } else {
    // Fallback to setTimeout.
    timerFunc = function () {
      setTimeout(flushCallbacks, 0);
    };
  }

  function nextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      })
    }
  }

  /*  */

  var mark;
  var measure;

  {
    var perf = inBrowser && window.performance;
    /* istanbul ignore if */
    if (
      perf &&
      perf.mark &&
      perf.measure &&
      perf.clearMarks &&
      perf.clearMeasures
    ) {
      mark = function (tag) { return perf.mark(tag); };
      measure = function (name, startTag, endTag) {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
        // perf.clearMeasures(name)
      };
    }
  }

  /* not type checking this file because flow doesn't play well with Proxy */

  var initProxy;

  {
    var allowedGlobals = makeMap(
      'Infinity,undefined,NaN,isFinite,isNaN,' +
      'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
      'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
      'require' // for Webpack/Browserify
    );

    var warnNonPresent = function (target, key) {
      warn(
        "Property or method \"" + key + "\" is not defined on the instance but " +
        'referenced during render. Make sure that this property is reactive, ' +
        'either in the data option, or for class-based components, by ' +
        'initializing the property. ' +
        'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
        target
      );
    };

    var warnReservedPrefix = function (target, key) {
      warn(
        "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
        'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
        'prevent conflicts with Vue internals. ' +
        'See: https://vuejs.org/v2/api/#data',
        target
      );
    };

    var hasProxy =
      typeof Proxy !== 'undefined' && isNative(Proxy);

    if (hasProxy) {
      var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
      config.keyCodes = new Proxy(config.keyCodes, {
        set: function set (target, key, value) {
          if (isBuiltInModifier(key)) {
            warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
            return false
          } else {
            target[key] = value;
            return true
          }
        }
      });
    }

    var hasHandler = {
      has: function has (target, key) {
        var has = key in target;
        var isAllowed = allowedGlobals(key) ||
          (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
        if (!has && !isAllowed) {
          if (key in target.$data) { warnReservedPrefix(target, key); }
          else { warnNonPresent(target, key); }
        }
        return has || !isAllowed
      }
    };

    var getHandler = {
      get: function get (target, key) {
        if (typeof key === 'string' && !(key in target)) {
          if (key in target.$data) { warnReservedPrefix(target, key); }
          else { warnNonPresent(target, key); }
        }
        return target[key]
      }
    };

    initProxy = function initProxy (vm) {
      if (hasProxy) {
        // determine which proxy handler to use
        var options = vm.$options;
        var handlers = options.render && options.render._withStripped
          ? getHandler
          : hasHandler;
        vm._renderProxy = new Proxy(vm, handlers);
      } else {
        vm._renderProxy = vm;
      }
    };
  }

  /*  */

  var seenObjects = new _Set();

  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */
  function traverse (val) {
    _traverse(val, seenObjects);
    seenObjects.clear();
  }

  function _traverse (val, seen) {
    var i, keys;
    var isA = Array.isArray(val);
    if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
      return
    }
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return
      }
      seen.add(depId);
    }
    if (isA) {
      i = val.length;
      while (i--) { _traverse(val[i], seen); }
    } else {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) { _traverse(val[keys[i]], seen); }
    }
  }

  /*  */

  var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
    name = once$$1 ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
      name: name,
      once: once$$1,
      capture: capture,
      passive: passive
    }
  });

  function createFnInvoker (fns, vm) {
    function invoker () {
      var arguments$1 = arguments;

      var fns = invoker.fns;
      if (Array.isArray(fns)) {
        var cloned = fns.slice();
        for (var i = 0; i < cloned.length; i++) {
          invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
        }
      } else {
        // return handler return value for single handlers
        return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
      }
    }
    invoker.fns = fns;
    return invoker
  }

  function updateListeners (
    on,
    oldOn,
    add,
    remove$$1,
    createOnceHandler,
    vm
  ) {
    var name, def$$1, cur, old, event;
    for (name in on) {
      def$$1 = cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);
      if (isUndef(cur)) {
        warn(
          "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
          vm
        );
      } else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur, vm);
        }
        if (isTrue(event.once)) {
          cur = on[name] = createOnceHandler(event.name, cur, event.capture);
        }
        add(event.name, cur, event.capture, event.passive, event.params);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }
    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }
  }

  /*  */

  function mergeVNodeHook (def, hookKey, hook) {
    if (def instanceof VNode) {
      def = def.data.hook || (def.data.hook = {});
    }
    var invoker;
    var oldHook = def[hookKey];

    function wrappedHook () {
      hook.apply(this, arguments);
      // important: remove merged hook to ensure it's called only once
      // and prevent memory leak
      remove(invoker.fns, wrappedHook);
    }

    if (isUndef(oldHook)) {
      // no existing hook
      invoker = createFnInvoker([wrappedHook]);
    } else {
      /* istanbul ignore if */
      if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
        // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
        // existing plain hook
        invoker = createFnInvoker([oldHook, wrappedHook]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;
  }

  /*  */

  function extractPropsFromVNodeData (
    data,
    Ctor,
    tag
  ) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;
    if (isUndef(propOptions)) {
      return
    }
    var res = {};
    var attrs = data.attrs;
    var props = data.props;
    if (isDef(attrs) || isDef(props)) {
      for (var key in propOptions) {
        var altKey = hyphenate(key);
        {
          var keyInLowerCase = key.toLowerCase();
          if (
            key !== keyInLowerCase &&
            attrs && hasOwn(attrs, keyInLowerCase)
          ) {
            tip(
              "Prop \"" + keyInLowerCase + "\" is passed to component " +
              (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
              " \"" + key + "\". " +
              "Note that HTML attributes are case-insensitive and camelCased " +
              "props need to use their kebab-case equivalents when using in-DOM " +
              "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
            );
          }
        }
        checkProp(res, props, key, altKey, true) ||
        checkProp(res, attrs, key, altKey, false);
      }
    }
    return res
  }

  function checkProp (
    res,
    hash,
    key,
    altKey,
    preserve
  ) {
    if (isDef(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];
        if (!preserve) {
          delete hash[key];
        }
        return true
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];
        if (!preserve) {
          delete hash[altKey];
        }
        return true
      }
    }
    return false
  }

  /*  */

  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:

  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // normalization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.
  function simpleNormalizeChildren (children) {
    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return Array.prototype.concat.apply([], children)
      }
    }
    return children
  }

  // 2. When the children contains constructs that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.
  function normalizeChildren (children) {
    return isPrimitive(children)
      ? [createTextVNode(children)]
      : Array.isArray(children)
        ? normalizeArrayChildren(children)
        : undefined
  }

  function isTextNode (node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment)
  }

  function normalizeArrayChildren (children, nestedIndex) {
    var res = [];
    var i, c, lastIndex, last;
    for (i = 0; i < children.length; i++) {
      c = children[i];
      if (isUndef(c) || typeof c === 'boolean') { continue }
      lastIndex = res.length - 1;
      last = res[lastIndex];
      //  nested
      if (Array.isArray(c)) {
        if (c.length > 0) {
          c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
          // merge adjacent text nodes
          if (isTextNode(c[0]) && isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + (c[0]).text);
            c.shift();
          }
          res.push.apply(res, c);
        }
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
          // merge adjacent text nodes
          // this is necessary for SSR hydration because text nodes are
          // essentially merged when rendered to HTML strings
          res[lastIndex] = createTextVNode(last.text + c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
          // merge adjacent text nodes
          res[lastIndex] = createTextVNode(last.text + c.text);
        } else {
          // default key for nested array children (likely generated by v-for)
          if (isTrue(children._isVList) &&
            isDef(c.tag) &&
            isUndef(c.key) &&
            isDef(nestedIndex)) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }
          res.push(c);
        }
      }
    }
    return res
  }

  /*  */

  function initProvide (vm) {
    var provide = vm.$options.provide;
    if (provide) {
      vm._provided = typeof provide === 'function'
        ? provide.call(vm)
        : provide;
    }
  }

  function initInjections (vm) {
    var result = resolveInject(vm.$options.inject, vm);
    if (result) {
      toggleObserving(false);
      Object.keys(result).forEach(function (key) {
        /* istanbul ignore else */
        {
          defineReactive$$1(vm, key, result[key], function () {
            warn(
              "Avoid mutating an injected value directly since the changes will be " +
              "overwritten whenever the provided component re-renders. " +
              "injection being mutated: \"" + key + "\"",
              vm
            );
          });
        }
      });
      toggleObserving(true);
    }
  }

  function resolveInject (inject, vm) {
    if (inject) {
      // inject is :any because flow is not smart enough to figure out cached
      var result = Object.create(null);
      var keys = hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        // #6574 in case the inject object is observed...
        if (key === '__ob__') { continue }
        var provideKey = inject[key].from;
        var source = vm;
        while (source) {
          if (source._provided && hasOwn(source._provided, provideKey)) {
            result[key] = source._provided[provideKey];
            break
          }
          source = source.$parent;
        }
        if (!source) {
          if ('default' in inject[key]) {
            var provideDefault = inject[key].default;
            result[key] = typeof provideDefault === 'function'
              ? provideDefault.call(vm)
              : provideDefault;
          } else {
            warn(("Injection \"" + key + "\" not found"), vm);
          }
        }
      }
      return result
    }
  }

  /*  */



  /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */
  function resolveSlots (
    children,
    context
  ) {
    if (!children || !children.length) {
      return {}
    }
    var slots = {};
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var data = child.data;
      // remove slot attribute if the node is resolved as a Vue slot node
      if (data && data.attrs && data.attrs.slot) {
        delete data.attrs.slot;
      }
      // named slots should only be respected if the vnode was rendered in the
      // same context.
      if ((child.context === context || child.fnContext === context) &&
        data && data.slot != null
      ) {
        var name = data.slot;
        var slot = (slots[name] || (slots[name] = []));
        if (child.tag === 'template') {
          slot.push.apply(slot, child.children || []);
        } else {
          slot.push(child);
        }
      } else {
        (slots.default || (slots.default = [])).push(child);
      }
    }
    // ignore slots that contains only whitespace
    for (var name$1 in slots) {
      if (slots[name$1].every(isWhitespace)) {
        delete slots[name$1];
      }
    }
    return slots
  }

  function isWhitespace (node) {
    return (node.isComment && !node.asyncFactory) || node.text === ' '
  }

  /*  */

  function normalizeScopedSlots (
    slots,
    normalSlots,
    prevSlots
  ) {
    var res;
    var hasNormalSlots = Object.keys(normalSlots).length > 0;
    var isStable = slots ? !!slots.$stable : !hasNormalSlots;
    var key = slots && slots.$key;
    if (!slots) {
      res = {};
    } else if (slots._normalized) {
      // fast path 1: child component re-render only, parent did not change
      return slots._normalized
    } else if (
      isStable &&
      prevSlots &&
      prevSlots !== emptyObject &&
      key === prevSlots.$key &&
      !hasNormalSlots &&
      !prevSlots.$hasNormal
    ) {
      // fast path 2: stable scoped slots w/ no normal slots to proxy,
      // only need to normalize once
      return prevSlots
    } else {
      res = {};
      for (var key$1 in slots) {
        if (slots[key$1] && key$1[0] !== '$') {
          res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
        }
      }
    }
    // expose normal slots on scopedSlots
    for (var key$2 in normalSlots) {
      if (!(key$2 in res)) {
        res[key$2] = proxyNormalSlot(normalSlots, key$2);
      }
    }
    // avoriaz seems to mock a non-extensible $scopedSlots object
    // and when that is passed down this would cause an error
    if (slots && Object.isExtensible(slots)) {
      (slots)._normalized = res;
    }
    def(res, '$stable', isStable);
    def(res, '$key', key);
    def(res, '$hasNormal', hasNormalSlots);
    return res
  }

  function normalizeScopedSlot(normalSlots, key, fn) {
    var normalized = function () {
      var res = arguments.length ? fn.apply(null, arguments) : fn({});
      res = res && typeof res === 'object' && !Array.isArray(res)
        ? [res] // single vnode
        : normalizeChildren(res);
      return res && (
        res.length === 0 ||
        (res.length === 1 && res[0].isComment) // #9658
      ) ? undefined
        : res
    };
    // this is a slot using the new v-slot syntax without scope. although it is
    // compiled as a scoped slot, render fn users would expect it to be present
    // on this.$slots because the usage is semantically a normal slot.
    if (fn.proxy) {
      Object.defineProperty(normalSlots, key, {
        get: normalized,
        enumerable: true,
        configurable: true
      });
    }
    return normalized
  }

  function proxyNormalSlot(slots, key) {
    return function () { return slots[key]; }
  }

  /*  */

  /**
   * Runtime helper for rendering v-for lists.
   */
  function renderList (
    val,
    render
  ) {
    var ret, i, l, keys, key;
    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      if (hasSymbol && val[Symbol.iterator]) {
        ret = [];
        var iterator = val[Symbol.iterator]();
        var result = iterator.next();
        while (!result.done) {
          ret.push(render(result.value, ret.length));
          result = iterator.next();
        }
      } else {
        keys = Object.keys(val);
        ret = new Array(keys.length);
        for (i = 0, l = keys.length; i < l; i++) {
          key = keys[i];
          ret[i] = render(val[key], key, i);
        }
      }
    }
    if (!isDef(ret)) {
      ret = [];
    }
    (ret)._isVList = true;
    return ret
  }

  /*  */

  /**
   * Runtime helper for rendering <slot>
   */
  function renderSlot (
    name,
    fallback,
    props,
    bindObject
  ) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;
    if (scopedSlotFn) { // scoped slot
      props = props || {};
      if (bindObject) {
        if (!isObject(bindObject)) {
          warn(
            'slot v-bind without argument expects an Object',
            this
          );
        }
        props = extend(extend({}, bindObject), props);
      }
      nodes = scopedSlotFn(props) || fallback;
    } else {
      nodes = this.$slots[name] || fallback;
    }

    var target = props && props.slot;
    if (target) {
      return this.$createElement('template', { slot: target }, nodes)
    } else {
      return nodes
    }
  }

  /*  */

  /**
   * Runtime helper for resolving filters
   */
  function resolveFilter (id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity
  }

  /*  */

  function isKeyNotMatch (expect, actual) {
    if (Array.isArray(expect)) {
      return expect.indexOf(actual) === -1
    } else {
      return expect !== actual
    }
  }

  /**
   * Runtime helper for checking keyCodes from config.
   * exposed as Vue.prototype._k
   * passing in eventKeyName as last argument separately for backwards compat
   */
  function checkKeyCodes (
    eventKeyCode,
    key,
    builtInKeyCode,
    eventKeyName,
    builtInKeyName
  ) {
    var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
    if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
      return isKeyNotMatch(builtInKeyName, eventKeyName)
    } else if (mappedKeyCode) {
      return isKeyNotMatch(mappedKeyCode, eventKeyCode)
    } else if (eventKeyName) {
      return hyphenate(eventKeyName) !== key
    }
  }

  /*  */

  /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */
  function bindObjectProps (
    data,
    tag,
    value,
    asProp,
    isSync
  ) {
    if (value) {
      if (!isObject(value)) {
        warn(
          'v-bind without argument expects an Object or Array value',
          this
        );
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        var hash;
        var loop = function ( key ) {
          if (
            key === 'class' ||
            key === 'style' ||
            isReservedAttribute(key)
          ) {
            hash = data;
          } else {
            var type = data.attrs && data.attrs.type;
            hash = asProp || config.mustUseProp(tag, type, key)
              ? data.domProps || (data.domProps = {})
              : data.attrs || (data.attrs = {});
          }
          var camelizedKey = camelize(key);
          var hyphenatedKey = hyphenate(key);
          if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
            hash[key] = value[key];

            if (isSync) {
              var on = data.on || (data.on = {});
              on[("update:" + key)] = function ($event) {
                value[key] = $event;
              };
            }
          }
        };

        for (var key in value) loop( key );
      }
    }
    return data
  }

  /*  */

  /**
   * Runtime helper for rendering static trees.
   */
  function renderStatic (
    index,
    isInFor
  ) {
    var cached = this._staticTrees || (this._staticTrees = []);
    var tree = cached[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree.
    if (tree && !isInFor) {
      return tree
    }
    // otherwise, render a fresh tree.
    tree = cached[index] = this.$options.staticRenderFns[index].call(
      this._renderProxy,
      null,
      this // for render fns generated for functional component templates
    );
    markStatic(tree, ("__static__" + index), false);
    return tree
  }

  /**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */
  function markOnce (
    tree,
    index,
    key
  ) {
    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
    return tree
  }

  function markStatic (
    tree,
    key,
    isOnce
  ) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], (key + "_" + i), isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode (node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

  /*  */

  function bindObjectListeners (data, value) {
    if (value) {
      if (!isPlainObject(value)) {
        warn(
          'v-on without argument expects an Object value',
          this
        );
      } else {
        var on = data.on = data.on ? extend({}, data.on) : {};
        for (var key in value) {
          var existing = on[key];
          var ours = value[key];
          on[key] = existing ? [].concat(existing, ours) : ours;
        }
      }
    }
    return data
  }

  /*  */

  function resolveScopedSlots (
    fns, // see flow/vnode
    res,
    // the following are added in 2.6
    hasDynamicKeys,
    contentHashKey
  ) {
    res = res || { $stable: !hasDynamicKeys };
    for (var i = 0; i < fns.length; i++) {
      var slot = fns[i];
      if (Array.isArray(slot)) {
        resolveScopedSlots(slot, res, hasDynamicKeys);
      } else if (slot) {
        // marker for reverse proxying v-slot without scope on this.$slots
        if (slot.proxy) {
          slot.fn.proxy = true;
        }
        res[slot.key] = slot.fn;
      }
    }
    if (contentHashKey) {
      (res).$key = contentHashKey;
    }
    return res
  }

  /*  */

  function bindDynamicKeys (baseObj, values) {
    for (var i = 0; i < values.length; i += 2) {
      var key = values[i];
      if (typeof key === 'string' && key) {
        baseObj[values[i]] = values[i + 1];
      } else if (key !== '' && key !== null) {
        // null is a special value for explicitly removing a binding
        warn(
          ("Invalid value for dynamic directive argument (expected string or null): " + key),
          this
        );
      }
    }
    return baseObj
  }

  // helper to dynamically append modifier runtime markers to event names.
  // ensure only append when value is already string, otherwise it will be cast
  // to string and cause the type check to miss.
  function prependModifier (value, symbol) {
    return typeof value === 'string' ? symbol + value : value
  }

  /*  */

  function installRenderHelpers (target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
    target._d = bindDynamicKeys;
    target._p = prependModifier;
  }

  /*  */

  function FunctionalRenderContext (
    data,
    props,
    children,
    parent,
    Ctor
  ) {
    var this$1 = this;

    var options = Ctor.options;
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    var contextVm;
    if (hasOwn(parent, '_uid')) {
      contextVm = Object.create(parent);
      // $flow-disable-line
      contextVm._original = parent;
    } else {
      // the context vm passed in is a functional context as well.
      // in this case we want to make sure we are able to get a hold to the
      // real context instance.
      contextVm = parent;
      // $flow-disable-line
      parent = parent._original;
    }
    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;

    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);
    this.slots = function () {
      if (!this$1.$slots) {
        normalizeScopedSlots(
          data.scopedSlots,
          this$1.$slots = resolveSlots(children, parent)
        );
      }
      return this$1.$slots
    };

    Object.defineProperty(this, 'scopedSlots', ({
      enumerable: true,
      get: function get () {
        return normalizeScopedSlots(data.scopedSlots, this.slots())
      }
    }));

    // support for compiled functional template
    if (isCompiled) {
      // exposing $options for renderStatic()
      this.$options = options;
      // pre-resolve slots for renderSlot()
      this.$slots = this.slots();
      this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
    }

    if (options._scopeId) {
      this._c = function (a, b, c, d) {
        var vnode = createElement(contextVm, a, b, c, d, needNormalization);
        if (vnode && !Array.isArray(vnode)) {
          vnode.fnScopeId = options._scopeId;
          vnode.fnContext = parent;
        }
        return vnode
      };
    } else {
      this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
    }
  }

  installRenderHelpers(FunctionalRenderContext.prototype);

  function createFunctionalComponent (
    Ctor,
    propsData,
    data,
    contextVm,
    children
  ) {
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;
    if (isDef(propOptions)) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || emptyObject);
      }
    } else {
      if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
      if (isDef(data.props)) { mergeProps(props, data.props); }
    }

    var renderContext = new FunctionalRenderContext(
      data,
      props,
      children,
      contextVm,
      Ctor
    );

    var vnode = options.render.call(null, renderContext._c, renderContext);

    if (vnode instanceof VNode) {
      return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
    } else if (Array.isArray(vnode)) {
      var vnodes = normalizeChildren(vnode) || [];
      var res = new Array(vnodes.length);
      for (var i = 0; i < vnodes.length; i++) {
        res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
      }
      return res
    }
  }

  function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
    // #7817 clone node before setting fnContext, otherwise if the node is reused
    // (e.g. it was from a cached normal slot) the fnContext causes named slots
    // that should not be matched to match.
    var clone = cloneVNode(vnode);
    clone.fnContext = contextVm;
    clone.fnOptions = options;
    {
      (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
    }
    if (data.slot) {
      (clone.data || (clone.data = {})).slot = data.slot;
    }
    return clone
  }

  function mergeProps (to, from) {
    for (var key in from) {
      to[camelize(key)] = from[key];
    }
  }

  /*  */

  /*  */

  /*  */

  /*  */

  // inline hooks to be invoked on component VNodes during patch
  var componentVNodeHooks = {
    init: function init (vnode, hydrating) {
      if (
        vnode.componentInstance &&
        !vnode.componentInstance._isDestroyed &&
        vnode.data.keepAlive
      ) {
        // kept-alive components, treat as a patch
        var mountedNode = vnode; // work around flow
        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      } else {
        var child = vnode.componentInstance = createComponentInstanceForVnode(
          vnode,
          activeInstance
        );
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      }
    },

    prepatch: function prepatch (oldVnode, vnode) {
      var options = vnode.componentOptions;
      var child = vnode.componentInstance = oldVnode.componentInstance;
      updateChildComponent(
        child,
        options.propsData, // updated props
        options.listeners, // updated listeners
        vnode, // new parent vnode
        options.children // new children
      );
    },

    insert: function insert (vnode) {
      var context = vnode.context;
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, 'mounted');
      }
      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          // vue-router#1212
          // During updates, a kept-alive component's child components may
          // change, so directly walking the tree here may call activated hooks
          // on incorrect children. Instead we push them into a queue which will
          // be processed after the whole patch process ended.
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true /* direct */);
        }
      }
    },

    destroy: function destroy (vnode) {
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true /* direct */);
        }
      }
    }
  };

  var hooksToMerge = Object.keys(componentVNodeHooks);

  function createComponent (
    Ctor,
    data,
    context,
    children,
    tag
  ) {
    if (isUndef(Ctor)) {
      return
    }

    var baseCtor = context.$options._base;

    // plain options object: turn it into a constructor
    if (isObject(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    }

    // if at this stage it's not a constructor or an async component factory,
    // reject.
    if (typeof Ctor !== 'function') {
      {
        warn(("Invalid Component definition: " + (String(Ctor))), context);
      }
      return
    }

    // async component
    var asyncFactory;
    if (isUndef(Ctor.cid)) {
      asyncFactory = Ctor;
      Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
      if (Ctor === undefined) {
        // return a placeholder node for async component, which is rendered
        // as a comment node but preserves all the raw information for the node.
        // the information will be used for async server-rendering and hydration.
        return createAsyncPlaceholder(
          asyncFactory,
          data,
          context,
          children,
          tag
        )
      }
    }

    data = data || {};

    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);

    // transform component v-model data into props & events
    if (isDef(data.model)) {
      transformModel(Ctor.options, data);
    }

    // extract props
    var propsData = extractPropsFromVNodeData(data, Ctor, tag);

    // functional component
    if (isTrue(Ctor.options.functional)) {
      return createFunctionalComponent(Ctor, propsData, data, context, children)
    }

    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    var listeners = data.on;
    // replace with listeners with .native modifier
    // so it gets processed during parent component patch.
    data.on = data.nativeOn;

    if (isTrue(Ctor.options.abstract)) {
      // abstract components do not keep anything
      // other than props & listeners & slot

      // work around flow
      var slot = data.slot;
      data = {};
      if (slot) {
        data.slot = slot;
      }
    }

    // install component management hooks onto the placeholder node
    installComponentHooks(data);

    // return a placeholder vnode
    var name = Ctor.options.name || tag;
    var vnode = new VNode(
      ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
      data, undefined, undefined, undefined, context,
      { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
      asyncFactory
    );

    return vnode
  }

  function createComponentInstanceForVnode (
    vnode, // we know it's MountedComponentVNode but flow doesn't
    parent // activeInstance in lifecycle state
  ) {
    var options = {
      _isComponent: true,
      _parentVnode: vnode,
      parent: parent
    };
    // check inline-template render functions
    var inlineTemplate = vnode.data.inlineTemplate;
    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnode.componentOptions.Ctor(options)
  }

  function installComponentHooks (data) {
    var hooks = data.hook || (data.hook = {});
    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      var existing = hooks[key];
      var toMerge = componentVNodeHooks[key];
      if (existing !== toMerge && !(existing && existing._merged)) {
        hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
      }
    }
  }

  function mergeHook$1 (f1, f2) {
    var merged = function (a, b) {
      // flow complains about extra args which is why we use any
      f1(a, b);
      f2(a, b);
    };
    merged._merged = true;
    return merged
  }

  // transform component v-model info (value and callback) into
  // prop and event handler respectively.
  function transformModel (options, data) {
    var prop = (options.model && options.model.prop) || 'value';
    var event = (options.model && options.model.event) || 'input'
    ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    var existing = on[event];
    var callback = data.model.callback;
    if (isDef(existing)) {
      if (
        Array.isArray(existing)
          ? existing.indexOf(callback) === -1
          : existing !== callback
      ) {
        on[event] = [callback].concat(existing);
      }
    } else {
      on[event] = callback;
    }
  }

  /*  */

  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2;

  // wrapper function for providing a more flexible interface
  // without getting yelled at by flow
  function createElement (
    context,
    tag,
    data,
    children,
    normalizationType,
    alwaysNormalize
  ) {
    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }
    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }
    return _createElement(context, tag, data, children, normalizationType)
  }

  function _createElement (
    context,
    tag,
    data,
    children,
    normalizationType
  ) {
    if (isDef(data) && isDef((data).__ob__)) {
      warn(
        "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
        'Always create fresh vnode data objects in each render!',
        context
      );
      return createEmptyVNode()
    }
    // object syntax in v-bind
    if (isDef(data) && isDef(data.is)) {
      tag = data.is;
    }
    if (!tag) {
      // in case of component :is set to falsy value
      return createEmptyVNode()
    }
    // warn against non-primitive key
    if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)
    ) {
      {
        warn(
          'Avoid using non-primitive value as key, ' +
          'use string/number value instead.',
          context
        );
      }
    }
    // support single function children as default scoped slot
    if (Array.isArray(children) &&
      typeof children[0] === 'function'
    ) {
      data = data || {};
      data.scopedSlots = { default: children[0] };
      children.length = 0;
    }
    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }
    var vnode, ns;
    if (typeof tag === 'string') {
      var Ctor;
      ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
      if (config.isReservedTag(tag)) {
        // platform built-in elements
        if (isDef(data) && isDef(data.nativeOn)) {
          warn(
            ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
            context
          );
        }
        vnode = new VNode(
          config.parsePlatformTagName(tag), data, children,
          undefined, undefined, context
        );
      } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
        // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(
          tag, data, children,
          undefined, undefined, context
        );
      }
    } else {
      // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }
    if (Array.isArray(vnode)) {
      return vnode
    } else if (isDef(vnode)) {
      if (isDef(ns)) { applyNS(vnode, ns); }
      if (isDef(data)) { registerDeepBindings(data); }
      return vnode
    } else {
      return createEmptyVNode()
    }
  }

  function applyNS (vnode, ns, force) {
    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
      // use default namespace inside foreignObject
      ns = undefined;
      force = true;
    }
    if (isDef(vnode.children)) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];
        if (isDef(child.tag) && (
          isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
          applyNS(child, ns, force);
        }
      }
    }
  }

  // ref #5318
  // necessary to ensure parent re-render when deep bindings like :style and
  // :class are used on slot nodes
  function registerDeepBindings (data) {
    if (isObject(data.style)) {
      traverse(data.style);
    }
    if (isObject(data.class)) {
      traverse(data.class);
    }
  }

  /*  */

  function initRender (vm) {
    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null; // v-once cached trees
    var options = vm.$options;
    var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    var parentData = parentVnode && parentVnode.data;

    /* istanbul ignore else */
    {
      defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
        !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
      }, true);
      defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
        !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
      }, true);
    }
  }

  var currentRenderingInstance = null;

  function renderMixin (Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);

    Vue.prototype.$nextTick = function (fn) {
      return nextTick(fn, this)
    };

    Vue.prototype._render = function () {
      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var _parentVnode = ref._parentVnode;

      if (_parentVnode) {
        vm.$scopedSlots = normalizeScopedSlots(
          _parentVnode.data.scopedSlots,
          vm.$slots,
          vm.$scopedSlots
        );
      }

      // set parent vnode. this allows render functions to have access
      // to the data on the placeholder node.
      vm.$vnode = _parentVnode;
      // render self
      var vnode;
      try {
        // There's no need to maintain a stack because all render fns are called
        // separately from one another. Nested component's render fns are called
        // when parent component is patched.
        currentRenderingInstance = vm;
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, "render");
        // return error render result,
        // or previous vnode to prevent render error causing blank component
        /* istanbul ignore else */
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } finally {
        currentRenderingInstance = null;
      }
      // if the returned array contains only a single node, allow it
      if (Array.isArray(vnode) && vnode.length === 1) {
        vnode = vnode[0];
      }
      // return empty vnode in case the render function errored out
      if (!(vnode instanceof VNode)) {
        if (Array.isArray(vnode)) {
          warn(
            'Multiple root nodes returned from render function. Render function ' +
            'should return a single root node.',
            vm
          );
        }
        vnode = createEmptyVNode();
      }
      // set parent
      vnode.parent = _parentVnode;
      return vnode
    };
  }

  /*  */

  function ensureCtor (comp, base) {
    if (
      comp.__esModule ||
      (hasSymbol && comp[Symbol.toStringTag] === 'Module')
    ) {
      comp = comp.default;
    }
    return isObject(comp)
      ? base.extend(comp)
      : comp
  }

  function createAsyncPlaceholder (
    factory,
    data,
    context,
    children,
    tag
  ) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = { data: data, context: context, children: children, tag: tag };
    return node
  }

  function resolveAsyncComponent (
    factory,
    baseCtor
  ) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
      return factory.errorComp
    }

    if (isDef(factory.resolved)) {
      return factory.resolved
    }

    var owner = currentRenderingInstance;
    if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
      // already pending
      factory.owners.push(owner);
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
      return factory.loadingComp
    }

    if (owner && !isDef(factory.owners)) {
      var owners = factory.owners = [owner];
      var sync = true;
      var timerLoading = null;
      var timerTimeout = null

      ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

      var forceRender = function (renderCompleted) {
        for (var i = 0, l = owners.length; i < l; i++) {
          (owners[i]).$forceUpdate();
        }

        if (renderCompleted) {
          owners.length = 0;
          if (timerLoading !== null) {
            clearTimeout(timerLoading);
            timerLoading = null;
          }
          if (timerTimeout !== null) {
            clearTimeout(timerTimeout);
            timerTimeout = null;
          }
        }
      };

      var resolve = once(function (res) {
        // cache resolved
        factory.resolved = ensureCtor(res, baseCtor);
        // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)
        if (!sync) {
          forceRender(true);
        } else {
          owners.length = 0;
        }
      });

      var reject = once(function (reason) {
        warn(
          "Failed to resolve async component: " + (String(factory)) +
          (reason ? ("\nReason: " + reason) : '')
        );
        if (isDef(factory.errorComp)) {
          factory.error = true;
          forceRender(true);
        }
      });

      var res = factory(resolve, reject);

      if (isObject(res)) {
        if (isPromise(res)) {
          // () => Promise
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (isPromise(res.component)) {
          res.component.then(resolve, reject);

          if (isDef(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isDef(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);
            if (res.delay === 0) {
              factory.loading = true;
            } else {
              timerLoading = setTimeout(function () {
                timerLoading = null;
                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                  factory.loading = true;
                  forceRender(false);
                }
              }, res.delay || 200);
            }
          }

          if (isDef(res.timeout)) {
            timerTimeout = setTimeout(function () {
              timerTimeout = null;
              if (isUndef(factory.resolved)) {
                reject(
                  "timeout (" + (res.timeout) + "ms)"
                );
              }
            }, res.timeout);
          }
        }
      }

      sync = false;
      // return in case resolved synchronously
      return factory.loading
        ? factory.loadingComp
        : factory.resolved
    }
  }

  /*  */

  function isAsyncPlaceholder (node) {
    return node.isComment && node.asyncFactory
  }

  /*  */

  function getFirstComponentChild (children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
          return c
        }
      }
    }
  }

  /*  */

  /*  */

  function initEvents (vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false;
    // init parent attached events
    var listeners = vm.$options._parentListeners;
    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  var target;

  function add (event, fn) {
    target.$on(event, fn);
  }

  function remove$1 (event, fn) {
    target.$off(event, fn);
  }

  function createOnceHandler (event, fn) {
    var _target = target;
    return function onceHandler () {
      var res = fn.apply(null, arguments);
      if (res !== null) {
        _target.$off(event, onceHandler);
      }
    }
  }

  function updateComponentListeners (
    vm,
    listeners,
    oldListeners
  ) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
    target = undefined;
  }

  function eventsMixin (Vue) {
    var hookRE = /^hook:/;
    Vue.prototype.$on = function (event, fn) {
      var vm = this;
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          vm.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn);
        // optimize hook:event cost by using a boolean flag marked at registration
        // instead of a hash lookup
        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }
      return vm
    };

    Vue.prototype.$once = function (event, fn) {
      var vm = this;
      function on () {
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }
      on.fn = fn;
      vm.$on(event, on);
      return vm
    };

    Vue.prototype.$off = function (event, fn) {
      var vm = this;
      // all
      if (!arguments.length) {
        vm._events = Object.create(null);
        return vm
      }
      // array of events
      if (Array.isArray(event)) {
        for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
          vm.$off(event[i$1], fn);
        }
        return vm
      }
      // specific event
      var cbs = vm._events[event];
      if (!cbs) {
        return vm
      }
      if (!fn) {
        vm._events[event] = null;
        return vm
      }
      // specific handler
      var cb;
      var i = cbs.length;
      while (i--) {
        cb = cbs[i];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break
        }
      }
      return vm
    };

    Vue.prototype.$emit = function (event) {
      var vm = this;
      {
        var lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
          tip(
            "Event \"" + lowerCaseEvent + "\" is emitted in component " +
            (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
            "Note that HTML attributes are case-insensitive and you cannot use " +
            "v-on to listen to camelCase events when using in-DOM templates. " +
            "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
          );
        }
      }
      var cbs = vm._events[event];
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        var info = "event handler for \"" + event + "\"";
        for (var i = 0, l = cbs.length; i < l; i++) {
          invokeWithErrorHandling(cbs[i], vm, args, vm, info);
        }
      }
      return vm
    };
  }

  /*  */

  var activeInstance = null;
  var isUpdatingChildComponent = false;

  function setActiveInstance(vm) {
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    return function () {
      activeInstance = prevActiveInstance;
    }
  }

  function initLifecycle (vm) {
    var options = vm.$options;

    // locate first non-abstract parent
    var parent = options.parent;
    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }
      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;

    vm.$children = [];
    vm.$refs = {};

    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin (Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
      var vm = this;
      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var restoreActiveInstance = setActiveInstance(vm);
      vm._vnode = vnode;
      // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.
      if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
      } else {
        // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }
      restoreActiveInstance();
      // update __vue__ reference
      if (prevEl) {
        prevEl.__vue__ = null;
      }
      if (vm.$el) {
        vm.$el.__vue__ = vm;
      }
      // if parent is an HOC, update its $el as well
      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      }
      // updated hook is called by the scheduler to ensure that children are
      // updated in a parent's updated hook.
    };

    Vue.prototype.$forceUpdate = function () {
      var vm = this;
      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function () {
      var vm = this;
      if (vm._isBeingDestroyed) {
        return
      }
      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true;
      // remove self from parent
      var parent = vm.$parent;
      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
      }
      // teardown watchers
      if (vm._watcher) {
        vm._watcher.teardown();
      }
      var i = vm._watchers.length;
      while (i--) {
        vm._watchers[i].teardown();
      }
      // remove reference from data ob
      // frozen object may not have observer.
      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      }
      // call the last hook...
      vm._isDestroyed = true;
      // invoke destroy hooks on current rendered tree
      vm.__patch__(vm._vnode, null);
      // fire destroyed hook
      callHook(vm, 'destroyed');
      // turn off all instance listeners.
      vm.$off();
      // remove __vue__ reference
      if (vm.$el) {
        vm.$el.__vue__ = null;
      }
      // release circular reference (#6759)
      if (vm.$vnode) {
        vm.$vnode.parent = null;
      }
    };
  }

  function mountComponent (
    vm,
    el,
    hydrating
  ) {
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;
      {
        /* istanbul ignore if */
        if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
          vm.$options.el || el) {
          warn(
            'You are using the runtime-only build of Vue where the template ' +
            'compiler is not available. Either pre-compile the templates into ' +
            'render functions, or use the compiler-included build.',
            vm
          );
        } else {
          warn(
            'Failed to mount component: template or render function not defined.',
            vm
          );
        }
      }
    }
    callHook(vm, 'beforeMount');

    var updateComponent;
    /* istanbul ignore if */
    if (config.performance && mark) {
      updateComponent = function () {
        var name = vm._name;
        var id = vm._uid;
        var startTag = "vue-perf-start:" + id;
        var endTag = "vue-perf-end:" + id;

        mark(startTag);
        var vnode = vm._render();
        mark(endTag);
        measure(("vue " + name + " render"), startTag, endTag);

        mark(startTag);
        vm._update(vnode, hydrating);
        mark(endTag);
        measure(("vue " + name + " patch"), startTag, endTag);
      };
    } else {
      updateComponent = function () {
        vm._update(vm._render(), hydrating);
      };
    }

    // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined
    new Watcher(vm, updateComponent, noop, {
      before: function before () {
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'beforeUpdate');
        }
      }
    }, true /* isRenderWatcher */);
    hydrating = false;

    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm
  }

  function updateChildComponent (
    vm,
    propsData,
    listeners,
    parentVnode,
    renderChildren
  ) {
    {
      isUpdatingChildComponent = true;
    }

    // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren.

    // check if there are dynamic scopedSlots (hand-written or compiled but with
    // dynamic slot names). Static scoped slots compiled from template has the
    // "$stable" marker.
    var newScopedSlots = parentVnode.data.scopedSlots;
    var oldScopedSlots = vm.$scopedSlots;
    var hasDynamicScopedSlot = !!(
      (newScopedSlots && !newScopedSlots.$stable) ||
      (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
      (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
    );

    // Any static slot children from the parent may have changed during parent's
    // update. Dynamic scoped slots may also have changed. In such cases, a forced
    // update is necessary to ensure correctness.
    var needsForceUpdate = !!(
      renderChildren ||               // has new static slots
      vm.$options._renderChildren ||  // has old static slots
      hasDynamicScopedSlot
    );

    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render

    if (vm._vnode) { // update child tree's parent
      vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;

    // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render
    vm.$attrs = parentVnode.data.attrs || emptyObject;
    vm.$listeners = listeners || emptyObject;

    // update props
    if (propsData && vm.$options.props) {
      toggleObserving(false);
      var props = vm._props;
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        var propOptions = vm.$options.props; // wtf flow?
        props[key] = validateProp(key, propOptions, propsData, vm);
      }
      toggleObserving(true);
      // keep a copy of raw propsData
      vm.$options.propsData = propsData;
    }

    // update listeners
    listeners = listeners || emptyObject;
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);

    // resolve slots + force update if has children
    if (needsForceUpdate) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }

    {
      isUpdatingChildComponent = false;
    }
  }

  function isInInactiveTree (vm) {
    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) { return true }
    }
    return false
  }

  function activateChildComponent (vm, direct) {
    if (direct) {
      vm._directInactive = false;
      if (isInInactiveTree(vm)) {
        return
      }
    } else if (vm._directInactive) {
      return
    }
    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;
      for (var i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'activated');
    }
  }

  function deactivateChildComponent (vm, direct) {
    if (direct) {
      vm._directInactive = true;
      if (isInInactiveTree(vm)) {
        return
      }
    }
    if (!vm._inactive) {
      vm._inactive = true;
      for (var i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'deactivated');
    }
  }

  function callHook (vm, hook) {
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        invokeWithErrorHandling(handlers[i], vm, null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
    popTarget();
  }

  /*  */

  var MAX_UPDATE_COUNT = 100;

  var queue = [];
  var activatedChildren = [];
  var has = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index = 0;

  /**
   * Reset the scheduler's state.
   */
  function resetSchedulerState () {
    index = queue.length = activatedChildren.length = 0;
    has = {};
    {
      circular = {};
    }
    waiting = flushing = false;
  }

  // Async edge case #6566 requires saving the timestamp when event listeners are
  // attached. However, calling performance.now() has a perf overhead especially
  // if the page has thousands of event listeners. Instead, we take a timestamp
  // every time the scheduler flushes and use that for all event listeners
  // attached during that flush.
  var currentFlushTimestamp = 0;

  // Async edge case fix requires storing an event listener's attach timestamp.
  var getNow = Date.now;

  // Determine what event timestamp the browser is using. Annoyingly, the
  // timestamp can either be hi-res (relative to page load) or low-res
  // (relative to UNIX epoch), so in order to compare time we have to use the
  // same timestamp type when saving the flush timestamp.
  // All IE versions use low-res event timestamps, and have problematic clock
  // implementations (#9632)
  if (inBrowser && !isIE) {
    var performance = window.performance;
    if (
      performance &&
      typeof performance.now === 'function' &&
      getNow() > document.createEvent('Event').timeStamp
    ) {
      // if the event timestamp, although evaluated AFTER the Date.now(), is
      // smaller than it, it means the event is using a hi-res timestamp,
      // and we need to use the hi-res version for event listener timestamps as
      // well.
      getNow = function () { return performance.now(); };
    }
  }

  /**
   * Flush both queues and run the watchers.
   */
  function flushSchedulerQueue () {
    currentFlushTimestamp = getNow();
    flushing = true;
    var watcher, id;

    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(function (a, b) { return a.id - b.id; });

    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];
      if (watcher.before) {
        watcher.before();
      }
      id = watcher.id;
      has[id] = null;
      watcher.run();
      // in dev build, check and stop circular updates.
      if (has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;
        if (circular[id] > MAX_UPDATE_COUNT) {
          warn(
            'You may have an infinite update loop ' + (
              watcher.user
                ? ("in watcher with expression \"" + (watcher.expression) + "\"")
                : "in a component render function."
            ),
            watcher.vm
          );
          break
        }
      }
    }

    // keep copies of post queues before resetting state
    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();

    resetSchedulerState();

    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);

    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
  }

  function callUpdatedHooks (queue) {
    var i = queue.length;
    while (i--) {
      var watcher = queue[i];
      var vm = watcher.vm;
      if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'updated');
      }
    }
  }

  /**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */
  function queueActivatedComponent (vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
  }

  function callActivatedHooks (queue) {
    for (var i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true /* true */);
    }
  }

  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */
  function queueWatcher (watcher) {
    var id = watcher.id;
    if (has[id] == null) {
      has[id] = true;
      if (!flushing) {
        queue.push(watcher);
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;
        while (i > index && queue[i].id > watcher.id) {
          i--;
        }
        queue.splice(i + 1, 0, watcher);
      }
      // queue the flush
      if (!waiting) {
        waiting = true;

        if (!config.async) {
          flushSchedulerQueue();
          return
        }
        nextTick(flushSchedulerQueue);
      }
    }
  }

  /*  */



  var uid$2 = 0;

  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */
  var Watcher = function Watcher (
    vm,
    expOrFn,
    cb,
    options,
    isRenderWatcher
  ) {
    this.vm = vm;
    if (isRenderWatcher) {
      vm._watcher = this;
    }
    vm._watchers.push(this);
    // options
    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
      this.before = options.before;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid$2; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression = expOrFn.toString();
    // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
      if (!this.getter) {
        this.getter = noop;
        warn(
          "Failed watching path: \"" + expOrFn + "\" " +
          'Watcher only accepts simple dot-delimited paths. ' +
          'For full control, use a function instead.',
          vm
        );
      }
    }
    this.value = this.lazy
      ? undefined
      : this.get();
  };

  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  Watcher.prototype.get = function get () {
    pushTarget(this);
    var value;
    var vm = this.vm;
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
      } else {
        throw e
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }
      popTarget();
      this.cleanupDeps();
    }
    return value
  };

  /**
   * Add a dependency to this directive.
   */
  Watcher.prototype.addDep = function addDep (dep) {
    var id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };

  /**
   * Clean up for dependency collection.
   */
  Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var i = this.deps.length;
    while (i--) {
      var dep = this.deps[i];
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }
    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  Watcher.prototype.update = function update () {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };

  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */
  Watcher.prototype.run = function run () {
    if (this.active) {
      var value = this.get();
      if (
        value !== this.value ||
        // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        isObject(value) ||
        this.deep
      ) {
        // set new value
        var oldValue = this.value;
        this.value = value;
        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  Watcher.prototype.evaluate = function evaluate () {
    this.value = this.get();
    this.dirty = false;
  };

  /**
   * Depend on all deps collected by this watcher.
   */
  Watcher.prototype.depend = function depend () {
    var i = this.deps.length;
    while (i--) {
      this.deps[i].depend();
    }
  };

  /**
   * Remove self from all dependencies' subscriber list.
   */
  Watcher.prototype.teardown = function teardown () {
    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }
      var i = this.deps.length;
      while (i--) {
        this.deps[i].removeSub(this);
      }
      this.active = false;
    }
  };

  /*  */

  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function proxy (target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter () {
      return this[sourceKey][key]
    };
    sharedPropertyDefinition.set = function proxySetter (val) {
      this[sourceKey][key] = val;
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function initState (vm) {
    vm._watchers = [];
    var opts = vm.$options;
    if (opts.props) { initProps(vm, opts.props); }
    if (opts.methods) { initMethods(vm, opts.methods); }
    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true /* asRootData */);
    }
    if (opts.computed) { initComputed(vm, opts.computed); }
    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);
    }
  }

  function initProps (vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = vm._props = {};
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    var keys = vm.$options._propKeys = [];
    var isRoot = !vm.$parent;
    // root instance props should be converted
    if (!isRoot) {
      toggleObserving(false);
    }
    var loop = function ( key ) {
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      /* istanbul ignore else */
      {
        var hyphenatedKey = hyphenate(key);
        if (isReservedAttribute(hyphenatedKey) ||
            config.isReservedAttr(hyphenatedKey)) {
          warn(
            ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
            vm
          );
        }
        defineReactive$$1(props, key, value, function () {
          if (!isRoot && !isUpdatingChildComponent) {
            warn(
              "Avoid mutating a prop directly since the value will be " +
              "overwritten whenever the parent component re-renders. " +
              "Instead, use a data or computed property based on the prop's " +
              "value. Prop being mutated: \"" + key + "\"",
              vm
            );
          }
        });
      }
      // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.
      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) loop( key );
    toggleObserving(true);
  }

  function initData (vm) {
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function'
      ? getData(data, vm)
      : data || {};
    if (!isPlainObject(data)) {
      data = {};
      warn(
        'data functions should return an object:\n' +
        'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
        vm
      );
    }
    // proxy data on instance
    var keys = Object.keys(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;
    while (i--) {
      var key = keys[i];
      {
        if (methods && hasOwn(methods, key)) {
          warn(
            ("Method \"" + key + "\" has already been defined as a data property."),
            vm
          );
        }
      }
      if (props && hasOwn(props, key)) {
        warn(
          "The data property \"" + key + "\" is already declared as a prop. " +
          "Use prop default value instead.",
          vm
        );
      } else if (!isReserved(key)) {
        proxy(vm, "_data", key);
      }
    }
    // observe data
    observe(data, true /* asRootData */);
  }

  function getData (data, vm) {
    // #7573 disable dep collection when invoking data getters
    pushTarget();
    try {
      return data.call(vm, vm)
    } catch (e) {
      handleError(e, vm, "data()");
      return {}
    } finally {
      popTarget();
    }
  }

  var computedWatcherOptions = { lazy: true };

  function initComputed (vm, computed) {
    // $flow-disable-line
    var watchers = vm._computedWatchers = Object.create(null);
    // computed properties are just getters during SSR
    var isSSR = isServerRendering();

    for (var key in computed) {
      var userDef = computed[key];
      var getter = typeof userDef === 'function' ? userDef : userDef.get;
      if (getter == null) {
        warn(
          ("Getter is missing for computed property \"" + key + "\"."),
          vm
        );
      }

      if (!isSSR) {
        // create internal watcher for the computed property.
        watchers[key] = new Watcher(
          vm,
          getter || noop,
          noop,
          computedWatcherOptions
        );
      }

      // component-defined computed properties are already defined on the
      // component prototype. We only need to define computed properties defined
      // at instantiation here.
      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      } else {
        if (key in vm.$data) {
          warn(("The computed property \"" + key + "\" is already defined in data."), vm);
        } else if (vm.$options.props && key in vm.$options.props) {
          warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
        }
      }
    }
  }

  function defineComputed (
    target,
    key,
    userDef
  ) {
    var shouldCache = !isServerRendering();
    if (typeof userDef === 'function') {
      sharedPropertyDefinition.get = shouldCache
        ? createComputedGetter(key)
        : createGetterInvoker(userDef);
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get
        ? shouldCache && userDef.cache !== false
          ? createComputedGetter(key)
          : createGetterInvoker(userDef.get)
        : noop;
      sharedPropertyDefinition.set = userDef.set || noop;
    }
    if (sharedPropertyDefinition.set === noop) {
      sharedPropertyDefinition.set = function () {
        warn(
          ("Computed property \"" + key + "\" was assigned to but it has no setter."),
          this
        );
      };
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function createComputedGetter (key) {
    return function computedGetter () {
      var watcher = this._computedWatchers && this._computedWatchers[key];
      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value
      }
    }
  }

  function createGetterInvoker(fn) {
    return function computedGetter () {
      return fn.call(this, this)
    }
  }

  function initMethods (vm, methods) {
    var props = vm.$options.props;
    for (var key in methods) {
      {
        if (typeof methods[key] !== 'function') {
          warn(
            "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
            "Did you reference the function correctly?",
            vm
          );
        }
        if (props && hasOwn(props, key)) {
          warn(
            ("Method \"" + key + "\" has already been defined as a prop."),
            vm
          );
        }
        if ((key in vm) && isReserved(key)) {
          warn(
            "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
            "Avoid defining component methods that start with _ or $."
          );
        }
      }
      vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
    }
  }

  function initWatch (vm, watch) {
    for (var key in watch) {
      var handler = watch[key];
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher (
    vm,
    expOrFn,
    handler,
    options
  ) {
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }
    if (typeof handler === 'string') {
      handler = vm[handler];
    }
    return vm.$watch(expOrFn, handler, options)
  }

  function stateMixin (Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};
    dataDef.get = function () { return this._data };
    var propsDef = {};
    propsDef.get = function () { return this._props };
    {
      dataDef.set = function () {
        warn(
          'Avoid replacing instance root $data. ' +
          'Use nested data properties instead.',
          this
        );
      };
      propsDef.set = function () {
        warn("$props is readonly.", this);
      };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);

    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function (
      expOrFn,
      cb,
      options
    ) {
      var vm = this;
      if (isPlainObject(cb)) {
        return createWatcher(vm, expOrFn, cb, options)
      }
      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);
      if (options.immediate) {
        try {
          cb.call(vm, watcher.value);
        } catch (error) {
          handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
        }
      }
      return function unwatchFn () {
        watcher.teardown();
      }
    };
  }

  /*  */

  var uid$3 = 0;

  function initMixin (Vue) {
    Vue.prototype._init = function (options) {
      var vm = this;
      // a uid
      vm._uid = uid$3++;

      var startTag, endTag;
      /* istanbul ignore if */
      if (config.performance && mark) {
        startTag = "vue-perf-start:" + (vm._uid);
        endTag = "vue-perf-end:" + (vm._uid);
        mark(startTag);
      }

      // a flag to avoid this being observed
      vm._isVue = true;
      // merge options
      if (options && options._isComponent) {
        // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(
          resolveConstructorOptions(vm.constructor),
          options || {},
          vm
        );
      }
      /* istanbul ignore else */
      {
        initProxy(vm);
      }
      // expose real self
      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initInjections(vm); // resolve injections before data/props
      initState(vm);
      initProvide(vm); // resolve provide after data/props
      callHook(vm, 'created');

      /* istanbul ignore if */
      if (config.performance && mark) {
        vm._name = formatComponentName(vm, false);
        mark(endTag);
        measure(("vue " + (vm._name) + " init"), startTag, endTag);
      }

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent (vm, options) {
    var opts = vm.$options = Object.create(vm.constructor.options);
    // doing this because it's faster than dynamic enumeration.
    var parentVnode = options._parentVnode;
    opts.parent = options.parent;
    opts._parentVnode = parentVnode;

    var vnodeComponentOptions = parentVnode.componentOptions;
    opts.propsData = vnodeComponentOptions.propsData;
    opts._parentListeners = vnodeComponentOptions.listeners;
    opts._renderChildren = vnodeComponentOptions.children;
    opts._componentTag = vnodeComponentOptions.tag;

    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions (Ctor) {
    var options = Ctor.options;
    if (Ctor.super) {
      var superOptions = resolveConstructorOptions(Ctor.super);
      var cachedSuperOptions = Ctor.superOptions;
      if (superOptions !== cachedSuperOptions) {
        // super option changed,
        // need to resolve new options.
        Ctor.superOptions = superOptions;
        // check if there are any late-modified/attached options (#4976)
        var modifiedOptions = resolveModifiedOptions(Ctor);
        // update base extend options
        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }
        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }
    return options
  }

  function resolveModifiedOptions (Ctor) {
    var modified;
    var latest = Ctor.options;
    var sealed = Ctor.sealedOptions;
    for (var key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) { modified = {}; }
        modified[key] = latest[key];
      }
    }
    return modified
  }

  function Vue (options) {
    if (!(this instanceof Vue)
    ) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
  }

  initMixin(Vue);
  stateMixin(Vue);
  eventsMixin(Vue);
  lifecycleMixin(Vue);
  renderMixin(Vue);

  /*  */

  function initUse (Vue) {
    Vue.use = function (plugin) {
      var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
      if (installedPlugins.indexOf(plugin) > -1) {
        return this
      }

      // additional parameters
      var args = toArray(arguments, 1);
      args.unshift(this);
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args);
      }
      installedPlugins.push(plugin);
      return this
    };
  }

  /*  */

  function initMixin$1 (Vue) {
    Vue.mixin = function (mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this
    };
  }

  /*  */

  function initExtend (Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;

    /**
     * Class inheritance
     */
    Vue.extend = function (extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId]
      }

      var name = extendOptions.name || Super.options.name;
      if (name) {
        validateComponentName(name);
      }

      var Sub = function VueComponent (options) {
        this._init(options);
      };
      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(
        Super.options,
        extendOptions
      );
      Sub['super'] = Super;

      // For props and computed properties, we define the proxy getters on
      // the Vue instances at extension time, on the extended prototype. This
      // avoids Object.defineProperty calls for each instance created.
      if (Sub.options.props) {
        initProps$1(Sub);
      }
      if (Sub.options.computed) {
        initComputed$1(Sub);
      }

      // allow further extension/mixin/plugin usage
      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use;

      // create asset registers, so extended classes
      // can have their private assets too.
      ASSET_TYPES.forEach(function (type) {
        Sub[type] = Super[type];
      });
      // enable recursive self-lookup
      if (name) {
        Sub.options.components[name] = Sub;
      }

      // keep a reference to the super options at extension time.
      // later at instantiation we can check if Super's options have
      // been updated.
      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options);

      // cache constructor
      cachedCtors[SuperId] = Sub;
      return Sub
    };
  }

  function initProps$1 (Comp) {
    var props = Comp.options.props;
    for (var key in props) {
      proxy(Comp.prototype, "_props", key);
    }
  }

  function initComputed$1 (Comp) {
    var computed = Comp.options.computed;
    for (var key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
  }

  /*  */

  function initAssetRegisters (Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
      Vue[type] = function (
        id,
        definition
      ) {
        if (!definition) {
          return this.options[type + 's'][id]
        } else {
          /* istanbul ignore if */
          if (type === 'component') {
            validateComponentName(id);
          }
          if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }
          if (type === 'directive' && typeof definition === 'function') {
            definition = { bind: definition, update: definition };
          }
          this.options[type + 's'][id] = definition;
          return definition
        }
      };
    });
  }

  /*  */



  function getComponentName (opts) {
    return opts && (opts.Ctor.options.name || opts.tag)
  }

  function matches (pattern, name) {
    if (Array.isArray(pattern)) {
      return pattern.indexOf(name) > -1
    } else if (typeof pattern === 'string') {
      return pattern.split(',').indexOf(name) > -1
    } else if (isRegExp(pattern)) {
      return pattern.test(name)
    }
    /* istanbul ignore next */
    return false
  }

  function pruneCache (keepAliveInstance, filter) {
    var cache = keepAliveInstance.cache;
    var keys = keepAliveInstance.keys;
    var _vnode = keepAliveInstance._vnode;
    for (var key in cache) {
      var cachedNode = cache[key];
      if (cachedNode) {
        var name = getComponentName(cachedNode.componentOptions);
        if (name && !filter(name)) {
          pruneCacheEntry(cache, key, keys, _vnode);
        }
      }
    }
  }

  function pruneCacheEntry (
    cache,
    key,
    keys,
    current
  ) {
    var cached$$1 = cache[key];
    if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
      cached$$1.componentInstance.$destroy();
    }
    cache[key] = null;
    remove(keys, key);
  }

  var patternTypes = [String, RegExp, Array];

  var KeepAlive = {
    name: 'keep-alive',
    abstract: true,

    props: {
      include: patternTypes,
      exclude: patternTypes,
      max: [String, Number]
    },

    created: function created () {
      this.cache = Object.create(null);
      this.keys = [];
    },

    destroyed: function destroyed () {
      for (var key in this.cache) {
        pruneCacheEntry(this.cache, key, this.keys);
      }
    },

    mounted: function mounted () {
      var this$1 = this;

      this.$watch('include', function (val) {
        pruneCache(this$1, function (name) { return matches(val, name); });
      });
      this.$watch('exclude', function (val) {
        pruneCache(this$1, function (name) { return !matches(val, name); });
      });
    },

    render: function render () {
      var slot = this.$slots.default;
      var vnode = getFirstComponentChild(slot);
      var componentOptions = vnode && vnode.componentOptions;
      if (componentOptions) {
        // check pattern
        var name = getComponentName(componentOptions);
        var ref = this;
        var include = ref.include;
        var exclude = ref.exclude;
        if (
          // not included
          (include && (!name || !matches(include, name))) ||
          // excluded
          (exclude && name && matches(exclude, name))
        ) {
          return vnode
        }

        var ref$1 = this;
        var cache = ref$1.cache;
        var keys = ref$1.keys;
        var key = vnode.key == null
          // same constructor may get registered as different local components
          // so cid alone is not enough (#3269)
          ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
          : vnode.key;
        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance;
          // make current key freshest
          remove(keys, key);
          keys.push(key);
        } else {
          cache[key] = vnode;
          keys.push(key);
          // prune oldest entry
          if (this.max && keys.length > parseInt(this.max)) {
            pruneCacheEntry(cache, keys[0], keys, this._vnode);
          }
        }

        vnode.data.keepAlive = true;
      }
      return vnode || (slot && slot[0])
    }
  };

  var builtInComponents = {
    KeepAlive: KeepAlive
  };

  /*  */

  function initGlobalAPI (Vue) {
    // config
    var configDef = {};
    configDef.get = function () { return config; };
    {
      configDef.set = function () {
        warn(
          'Do not replace the Vue.config object, set individual fields instead.'
        );
      };
    }
    Object.defineProperty(Vue, 'config', configDef);

    // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.
    Vue.util = {
      warn: warn,
      extend: extend,
      mergeOptions: mergeOptions,
      defineReactive: defineReactive$$1
    };

    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;

    // 2.6 explicit observable API
    Vue.observable = function (obj) {
      observe(obj);
      return obj
    };

    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function (type) {
      Vue.options[type + 's'] = Object.create(null);
    });

    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;

    extend(Vue.options.components, builtInComponents);

    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue);

  Object.defineProperty(Vue.prototype, '$isServer', {
    get: isServerRendering
  });

  Object.defineProperty(Vue.prototype, '$ssrContext', {
    get: function get () {
      /* istanbul ignore next */
      return this.$vnode && this.$vnode.ssrContext
    }
  });

  // expose FunctionalRenderContext for ssr runtime helper installation
  Object.defineProperty(Vue, 'FunctionalRenderContext', {
    value: FunctionalRenderContext
  });

  Vue.version = '2.6.11';

  /*  */

  // these are reserved for web because they are directly compiled away
  // during template compilation
  var isReservedAttr = makeMap('style,class');

  // attributes that should be using props for binding
  var acceptValue = makeMap('input,textarea,option,select,progress');
  var mustUseProp = function (tag, type, attr) {
    return (
      (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
      (attr === 'selected' && tag === 'option') ||
      (attr === 'checked' && tag === 'input') ||
      (attr === 'muted' && tag === 'video')
    )
  };

  var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

  var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

  var convertEnumeratedValue = function (key, value) {
    return isFalsyAttrValue(value) || value === 'false'
      ? 'false'
      // allow arbitrary string value for contenteditable
      : key === 'contenteditable' && isValidContentEditableValue(value)
        ? value
        : 'true'
  };

  var isBooleanAttr = makeMap(
    'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
    'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
    'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
    'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
    'required,reversed,scoped,seamless,selected,sortable,translate,' +
    'truespeed,typemustmatch,visible'
  );

  var xlinkNS = 'http://www.w3.org/1999/xlink';

  var isXlink = function (name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
  };

  var getXlinkProp = function (name) {
    return isXlink(name) ? name.slice(6, name.length) : ''
  };

  var isFalsyAttrValue = function (val) {
    return val == null || val === false
  };

  /*  */

  function genClassForVnode (vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;
    while (isDef(childNode.componentInstance)) {
      childNode = childNode.componentInstance._vnode;
      if (childNode && childNode.data) {
        data = mergeClassData(childNode.data, data);
      }
    }
    while (isDef(parentNode = parentNode.parent)) {
      if (parentNode && parentNode.data) {
        data = mergeClassData(data, parentNode.data);
      }
    }
    return renderClass(data.staticClass, data.class)
  }

  function mergeClassData (child, parent) {
    return {
      staticClass: concat(child.staticClass, parent.staticClass),
      class: isDef(child.class)
        ? [child.class, parent.class]
        : parent.class
    }
  }

  function renderClass (
    staticClass,
    dynamicClass
  ) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
      return concat(staticClass, stringifyClass(dynamicClass))
    }
    /* istanbul ignore next */
    return ''
  }

  function concat (a, b) {
    return a ? b ? (a + ' ' + b) : a : (b || '')
  }

  function stringifyClass (value) {
    if (Array.isArray(value)) {
      return stringifyArray(value)
    }
    if (isObject(value)) {
      return stringifyObject(value)
    }
    if (typeof value === 'string') {
      return value
    }
    /* istanbul ignore next */
    return ''
  }

  function stringifyArray (value) {
    var res = '';
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
        if (res) { res += ' '; }
        res += stringified;
      }
    }
    return res
  }

  function stringifyObject (value) {
    var res = '';
    for (var key in value) {
      if (value[key]) {
        if (res) { res += ' '; }
        res += key;
      }
    }
    return res
  }

  /*  */

  var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
  };

  var isHTMLTag = makeMap(
    'html,body,base,head,link,meta,style,title,' +
    'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
    'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
    'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
    's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
    'embed,object,param,source,canvas,script,noscript,del,ins,' +
    'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
    'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
    'output,progress,select,textarea,' +
    'details,dialog,menu,menuitem,summary,' +
    'content,element,shadow,template,blockquote,iframe,tfoot'
  );

  // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.
  var isSVG = makeMap(
    'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
    'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
    'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
    true
  );

  var isPreTag = function (tag) { return tag === 'pre'; };

  var isReservedTag = function (tag) {
    return isHTMLTag(tag) || isSVG(tag)
  };

  function getTagNamespace (tag) {
    if (isSVG(tag)) {
      return 'svg'
    }
    // basic support for MathML
    // note it doesn't support other MathML elements being component roots
    if (tag === 'math') {
      return 'math'
    }
  }

  var unknownElementCache = Object.create(null);
  function isUnknownElement (tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
      return true
    }
    if (isReservedTag(tag)) {
      return false
    }
    tag = tag.toLowerCase();
    /* istanbul ignore if */
    if (unknownElementCache[tag] != null) {
      return unknownElementCache[tag]
    }
    var el = document.createElement(tag);
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return (unknownElementCache[tag] = (
        el.constructor === window.HTMLUnknownElement ||
        el.constructor === window.HTMLElement
      ))
    } else {
      return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
    }
  }

  var isTextInputType = makeMap('text,number,password,search,email,tel,url');

  /*  */

  /**
   * Query an element selector if it's not an element already.
   */
  function query (el) {
    if (typeof el === 'string') {
      var selected = document.querySelector(el);
      if (!selected) {
        warn(
          'Cannot find element: ' + el
        );
        return document.createElement('div')
      }
      return selected
    } else {
      return el
    }
  }

  /*  */

  function createElement$1 (tagName, vnode) {
    var elm = document.createElement(tagName);
    if (tagName !== 'select') {
      return elm
    }
    // false or null will remove the attribute but undefined will not
    if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
      elm.setAttribute('multiple', 'multiple');
    }
    return elm
  }

  function createElementNS (namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName)
  }

  function createTextNode (text) {
    return document.createTextNode(text)
  }

  function createComment (text) {
    return document.createComment(text)
  }

  function insertBefore (parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild (node, child) {
    node.removeChild(child);
  }

  function appendChild (node, child) {
    node.appendChild(child);
  }

  function parentNode (node) {
    return node.parentNode
  }

  function nextSibling (node) {
    return node.nextSibling
  }

  function tagName (node) {
    return node.tagName
  }

  function setTextContent (node, text) {
    node.textContent = text;
  }

  function setStyleScope (node, scopeId) {
    node.setAttribute(scopeId, '');
  }

  var nodeOps = /*#__PURE__*/Object.freeze({
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setStyleScope: setStyleScope
  });

  /*  */

  var ref = {
    create: function create (_, vnode) {
      registerRef(vnode);
    },
    update: function update (oldVnode, vnode) {
      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy (vnode) {
      registerRef(vnode, true);
    }
  };

  function registerRef (vnode, isRemoval) {
    var key = vnode.data.ref;
    if (!isDef(key)) { return }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;
    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (!Array.isArray(refs[key])) {
          refs[key] = [ref];
        } else if (refs[key].indexOf(ref) < 0) {
          // $flow-disable-line
          refs[key].push(ref);
        }
      } else {
        refs[key] = ref;
      }
    }
  }

  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */

  var emptyNode = new VNode('', {}, []);

  var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

  function sameVnode (a, b) {
    return (
      a.key === b.key && (
        (
          a.tag === b.tag &&
          a.isComment === b.isComment &&
          isDef(a.data) === isDef(b.data) &&
          sameInputType(a, b)
        ) || (
          isTrue(a.isAsyncPlaceholder) &&
          a.asyncFactory === b.asyncFactory &&
          isUndef(b.asyncFactory.error)
        )
      )
    )
  }

  function sameInputType (a, b) {
    if (a.tag !== 'input') { return true }
    var i;
    var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
  }

  function createKeyToOldIdx (children, beginIdx, endIdx) {
    var i, key;
    var map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;
      if (isDef(key)) { map[key] = i; }
    }
    return map
  }

  function createPatchFunction (backend) {
    var i, j;
    var cbs = {};

    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];
      for (j = 0; j < modules.length; ++j) {
        if (isDef(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt (elm) {
      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
    }

    function createRmCb (childElm, listeners) {
      function remove$$1 () {
        if (--remove$$1.listeners === 0) {
          removeNode(childElm);
        }
      }
      remove$$1.listeners = listeners;
      return remove$$1
    }

    function removeNode (el) {
      var parent = nodeOps.parentNode(el);
      // element may have already been removed due to v-html / v-text
      if (isDef(parent)) {
        nodeOps.removeChild(parent, el);
      }
    }

    function isUnknownElement$$1 (vnode, inVPre) {
      return (
        !inVPre &&
        !vnode.ns &&
        !(
          config.ignoredElements.length &&
          config.ignoredElements.some(function (ignore) {
            return isRegExp(ignore)
              ? ignore.test(vnode.tag)
              : ignore === vnode.tag
          })
        ) &&
        config.isUnknownElement(vnode.tag)
      )
    }

    var creatingElmInVPre = 0;

    function createElm (
      vnode,
      insertedVnodeQueue,
      parentElm,
      refElm,
      nested,
      ownerArray,
      index
    ) {
      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // This vnode was used in a previous render!
        // now it's used as a new node, overwriting its elm would cause
        // potential patch errors down the road when it's used as an insertion
        // reference node. Instead, we clone the node on-demand before creating
        // associated DOM element for it.
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      vnode.isRootInsert = !nested; // for transition enter check
      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;
      if (isDef(tag)) {
        {
          if (data && data.pre) {
            creatingElmInVPre++;
          }
          if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
            warn(
              'Unknown custom element: <' + tag + '> - did you ' +
              'register the component correctly? For recursive components, ' +
              'make sure to provide the "name" option.',
              vnode.context
            );
          }
        }

        vnode.elm = vnode.ns
          ? nodeOps.createElementNS(vnode.ns, tag)
          : nodeOps.createElement(tag, vnode);
        setScope(vnode);

        /* istanbul ignore if */
        {
          createChildren(vnode, children, insertedVnodeQueue);
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
          insert(parentElm, vnode.elm, refElm);
        }

        if (data && data.pre) {
          creatingElmInVPre--;
        }
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
      var i = vnode.data;
      if (isDef(i)) {
        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
        if (isDef(i = i.hook) && isDef(i = i.init)) {
          i(vnode, false /* hydrating */);
        }
        // after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.
        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          insert(parentElm, vnode.elm, refElm);
          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }
          return true
        }
      }
    }

    function initComponent (vnode, insertedVnodeQueue) {
      if (isDef(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
        vnode.data.pendingInsert = null;
      }
      vnode.elm = vnode.componentInstance.$el;
      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        // empty component root.
        // skip all element-related modules except for ref (#3455)
        registerRef(vnode);
        // make sure to invoke the insert hook
        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
      var i;
      // hack for #4339: a reactivated component with inner transition
      // does not trigger because the inner node's created hooks are not called
      // again. It's not ideal to involve module-specific logic in here but
      // there doesn't seem to be a better way to do it.
      var innerNode = vnode;
      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;
        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }
          insertedVnodeQueue.push(innerNode);
          break
        }
      }
      // unlike a newly created component,
      // a reactivated keep-alive component doesn't insert itself
      insert(parentElm, vnode.elm, refElm);
    }

    function insert (parent, elm, ref$$1) {
      if (isDef(parent)) {
        if (isDef(ref$$1)) {
          if (nodeOps.parentNode(ref$$1) === parent) {
            nodeOps.insertBefore(parent, elm, ref$$1);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren (vnode, children, insertedVnodeQueue) {
      if (Array.isArray(children)) {
        {
          checkDuplicateKeys(children);
        }
        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
      }
    }

    function isPatchable (vnode) {
      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }
      return isDef(vnode.tag)
    }

    function invokeCreateHooks (vnode, insertedVnodeQueue) {
      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (isDef(i.create)) { i.create(emptyNode, vnode); }
        if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
      }
    }

    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope (vnode) {
      var i;
      if (isDef(i = vnode.fnScopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      } else {
        var ancestor = vnode;
        while (ancestor) {
          if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
            nodeOps.setStyleScope(vnode.elm, i);
          }
          ancestor = ancestor.parent;
        }
      }
      // for slot content they should also get the scopeId from the host instance.
      if (isDef(i = activeInstance) &&
        i !== vnode.context &&
        i !== vnode.fnContext &&
        isDef(i = i.$options._scopeId)
      ) {
        nodeOps.setStyleScope(vnode.elm, i);
      }
    }

    function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
      }
    }

    function invokeDestroyHook (vnode) {
      var i, j;
      var data = vnode.data;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
        for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
      }
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes (vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];
        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else { // Text node
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook (vnode, rm) {
      if (isDef(rm) || isDef(vnode.data)) {
        var i;
        var listeners = cbs.remove.length + 1;
        if (isDef(rm)) {
          // we have a recursively passed down rm callback
          // increase the listeners count
          rm.listeners += listeners;
        } else {
          // directly removing
          rm = createRmCb(vnode.elm, listeners);
        }
        // recursively invoke hooks on child component root node
        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }
        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }
        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

      // removeOnly is a special flag used only by <transition-group>
      // to ensure removed elements stay in correct relative positions
      // during leaving transitions
      var canMove = !removeOnly;

      {
        checkDuplicateKeys(newCh);
      }

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
          idxInOld = isDef(newStartVnode.key)
            ? oldKeyToIdx[newStartVnode.key]
            : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
          if (isUndef(idxInOld)) { // New element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          } else {
            vnodeToMove = oldCh[idxInOld];
            if (sameVnode(vnodeToMove, newStartVnode)) {
              patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
              oldCh[idxInOld] = undefined;
              canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
            } else {
              // same key but different element. treat as new element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
            }
          }
          newStartVnode = newCh[++newStartIdx];
        }
      }
      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function checkDuplicateKeys (children) {
      var seenKeys = {};
      for (var i = 0; i < children.length; i++) {
        var vnode = children[i];
        var key = vnode.key;
        if (isDef(key)) {
          if (seenKeys[key]) {
            warn(
              ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
              vnode.context
            );
          } else {
            seenKeys[key] = true;
          }
        }
      }
    }

    function findIdxInOld (node, oldCh, start, end) {
      for (var i = start; i < end; i++) {
        var c = oldCh[i];
        if (isDef(c) && sameVnode(node, c)) { return i }
      }
    }

    function patchVnode (
      oldVnode,
      vnode,
      insertedVnodeQueue,
      ownerArray,
      index,
      removeOnly
    ) {
      if (oldVnode === vnode) {
        return
      }

      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // clone reused vnode
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      var elm = vnode.elm = oldVnode.elm;

      if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
          hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
          vnode.isAsyncPlaceholder = true;
        }
        return
      }

      // reuse element for static trees.
      // note we only do this if the vnode is cloned -
      // if the new node is not cloned it means the render functions have been
      // reset by the hot-reload-api and we need to do a proper re-render.
      if (isTrue(vnode.isStatic) &&
        isTrue(oldVnode.isStatic) &&
        vnode.key === oldVnode.key &&
        (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
      ) {
        vnode.componentInstance = oldVnode.componentInstance;
        return
      }

      var i;
      var data = vnode.data;
      if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
      }

      var oldCh = oldVnode.children;
      var ch = vnode.children;
      if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
        if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
      }
      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
        } else if (isDef(ch)) {
          {
            checkDuplicateKeys(ch);
          }
          if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
      }
    }

    function invokeInsertHook (vnode, queue, initial) {
      // delay insert hooks for component root nodes, invoke them after the
      // element is really inserted
      if (isTrue(initial) && isDef(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    }

    var hydrationBailed = false;
    // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).
    var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

    // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
      var i;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;
      inVPre = inVPre || (data && data.pre);
      vnode.elm = elm;

      if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
        vnode.isAsyncPlaceholder = true;
        return true
      }
      // assert node match
      {
        if (!assertNodeMatch(elm, vnode, inVPre)) {
          return false
        }
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
        if (isDef(i = vnode.componentInstance)) {
          // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);
          return true
        }
      }
      if (isDef(tag)) {
        if (isDef(children)) {
          // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            // v-html and domProps: innerHTML
            if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
              if (i !== elm.innerHTML) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' &&
                  !hydrationBailed
                ) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('server innerHTML: ', i);
                  console.warn('client innerHTML: ', elm.innerHTML);
                }
                return false
              }
            } else {
              // iterate and compare children lists
              var childrenMatch = true;
              var childNode = elm.firstChild;
              for (var i$1 = 0; i$1 < children.length; i$1++) {
                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                  childrenMatch = false;
                  break
                }
                childNode = childNode.nextSibling;
              }
              // if childNode is not null, it means the actual childNodes list is
              // longer than the virtual children list.
              if (!childrenMatch || childNode) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' &&
                  !hydrationBailed
                ) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                }
                return false
              }
            }
          }
        }
        if (isDef(data)) {
          var fullInvoke = false;
          for (var key in data) {
            if (!isRenderedModule(key)) {
              fullInvoke = true;
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break
            }
          }
          if (!fullInvoke && data['class']) {
            // ensure collecting deps for deep class bindings for future updates
            traverse(data['class']);
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }
      return true
    }

    function assertNodeMatch (node, vnode, inVPre) {
      if (isDef(vnode.tag)) {
        return vnode.tag.indexOf('vue-component') === 0 || (
          !isUnknownElement$$1(vnode, inVPre) &&
          vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
        )
      } else {
        return node.nodeType === (vnode.isComment ? 8 : 3)
      }
    }

    return function patch (oldVnode, vnode, hydrating, removeOnly) {
      if (isUndef(vnode)) {
        if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
        return
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue);
      } else {
        var isRealElement = isDef(oldVnode.nodeType);
        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
        } else {
          if (isRealElement) {
            // mounting to a real element
            // check if this is server-rendered content and if we can perform
            // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }
            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return oldVnode
              } else {
                warn(
                  'The client-side rendered virtual DOM tree is not matching ' +
                  'server-rendered content. This is likely caused by incorrect ' +
                  'HTML markup, for example nesting block-level elements inside ' +
                  '<p>, or missing <tbody>. Bailing hydration and performing ' +
                  'full client-side render.'
                );
              }
            }
            // either not server-rendered, or hydration failed.
            // create an empty node and replace it
            oldVnode = emptyNodeAt(oldVnode);
          }

          // replacing existing element
          var oldElm = oldVnode.elm;
          var parentElm = nodeOps.parentNode(oldElm);

          // create new node
          createElm(
            vnode,
            insertedVnodeQueue,
            // extremely rare edge case: do not insert if old element is in a
            // leaving transition. Only happens when combining transition +
            // keep-alive + HOCs. (#4590)
            oldElm._leaveCb ? null : parentElm,
            nodeOps.nextSibling(oldElm)
          );

          // update parent placeholder node element, recursively
          if (isDef(vnode.parent)) {
            var ancestor = vnode.parent;
            var patchable = isPatchable(vnode);
            while (ancestor) {
              for (var i = 0; i < cbs.destroy.length; ++i) {
                cbs.destroy[i](ancestor);
              }
              ancestor.elm = vnode.elm;
              if (patchable) {
                for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                  cbs.create[i$1](emptyNode, ancestor);
                }
                // #6513
                // invoke insert hooks that may have been merged by create hooks.
                // e.g. for directives that uses the "inserted" hook.
                var insert = ancestor.data.hook.insert;
                if (insert.merged) {
                  // start at index 1 to avoid re-invoking component mounted hook
                  for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                    insert.fns[i$2]();
                  }
                }
              } else {
                registerRef(ancestor);
              }
              ancestor = ancestor.parent;
            }
          }

          // destroy old node
          if (isDef(parentElm)) {
            removeVnodes([oldVnode], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return vnode.elm
    }
  }

  /*  */

  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives (vnode) {
      updateDirectives(vnode, emptyNode);
    }
  };

  function updateDirectives (oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update (oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

    var dirsWithInsert = [];
    var dirsWithPostpatch = [];

    var key, oldDir, dir;
    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];
      if (!oldDir) {
        // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);
        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        // existing directive, update
        dir.oldValue = oldDir.value;
        dir.oldArg = oldDir.arg;
        callHook$1(dir, 'update', vnode, oldVnode);
        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function () {
        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };
      if (isCreate) {
        mergeVNodeHook(vnode, 'insert', callInsert);
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode, 'postpatch', function () {
        for (var i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      });
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  var emptyModifiers = Object.create(null);

  function normalizeDirectives$1 (
    dirs,
    vm
  ) {
    var res = Object.create(null);
    if (!dirs) {
      // $flow-disable-line
      return res
    }
    var i, dir;
    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];
      if (!dir.modifiers) {
        // $flow-disable-line
        dir.modifiers = emptyModifiers;
      }
      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
    }
    // $flow-disable-line
    return res
  }

  function getRawDirName (dir) {
    return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
  }

  function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];
    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
      }
    }
  }

  var baseModules = [
    ref,
    directives
  ];

  /*  */

  function updateAttrs (oldVnode, vnode) {
    var opts = vnode.componentOptions;
    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
      return
    }
    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
      return
    }
    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(attrs.__ob__)) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];
      if (old !== cur) {
        setAttr(elm, key, cur);
      }
    }
    // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max
    /* istanbul ignore if */
    if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
      setAttr(elm, 'value', attrs.value);
    }
    for (key in oldAttrs) {
      if (isUndef(attrs[key])) {
        if (isXlink(key)) {
          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else if (!isEnumeratedAttr(key)) {
          elm.removeAttribute(key);
        }
      }
    }
  }

  function setAttr (el, key, value) {
    if (el.tagName.indexOf('-') > -1) {
      baseSetAttr(el, key, value);
    } else if (isBooleanAttr(key)) {
      // set attribute for blank value
      // e.g. <option disabled>Select one</option>
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // technically allowfullscreen is a boolean attribute for <iframe>,
        // but Flash expects a value of "true" when used on <embed> tag
        value = key === 'allowfullscreen' && el.tagName === 'EMBED'
          ? 'true'
          : key;
        el.setAttribute(key, value);
      }
    } else if (isEnumeratedAttr(key)) {
      el.setAttribute(key, convertEnumeratedValue(key, value));
    } else if (isXlink(key)) {
      if (isFalsyAttrValue(value)) {
        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      baseSetAttr(el, key, value);
    }
  }

  function baseSetAttr (el, key, value) {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.
      /* istanbul ignore if */
      if (
        isIE && !isIE9 &&
        el.tagName === 'TEXTAREA' &&
        key === 'placeholder' && value !== '' && !el.__ieph
      ) {
        var blocker = function (e) {
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };
        el.addEventListener('input', blocker);
        // $flow-disable-line
        el.__ieph = true; /* IE placeholder patched */
      }
      el.setAttribute(key, value);
    }
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs
  };

  /*  */

  function updateClass (oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (
      isUndef(data.staticClass) &&
      isUndef(data.class) && (
        isUndef(oldData) || (
          isUndef(oldData.staticClass) &&
          isUndef(oldData.class)
        )
      )
    ) {
      return
    }

    var cls = genClassForVnode(vnode);

    // handle transition classes
    var transitionClass = el._transitionClasses;
    if (isDef(transitionClass)) {
      cls = concat(cls, stringifyClass(transitionClass));
    }

    // set the class
    if (cls !== el._prevClass) {
      el.setAttribute('class', cls);
      el._prevClass = cls;
    }
  }

  var klass = {
    create: updateClass,
    update: updateClass
  };

  /*  */

  var validDivisionCharRE = /[\w).+\-_$\]]/;

  function parseFilters (exp) {
    var inSingle = false;
    var inDouble = false;
    var inTemplateString = false;
    var inRegex = false;
    var curly = 0;
    var square = 0;
    var paren = 0;
    var lastFilterIndex = 0;
    var c, prev, i, expression, filters;

    for (i = 0; i < exp.length; i++) {
      prev = c;
      c = exp.charCodeAt(i);
      if (inSingle) {
        if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
      } else if (inDouble) {
        if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
      } else if (inTemplateString) {
        if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
      } else if (inRegex) {
        if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
      } else if (
        c === 0x7C && // pipe
        exp.charCodeAt(i + 1) !== 0x7C &&
        exp.charCodeAt(i - 1) !== 0x7C &&
        !curly && !square && !paren
      ) {
        if (expression === undefined) {
          // first filter, end of expression
          lastFilterIndex = i + 1;
          expression = exp.slice(0, i).trim();
        } else {
          pushFilter();
        }
      } else {
        switch (c) {
          case 0x22: inDouble = true; break         // "
          case 0x27: inSingle = true; break         // '
          case 0x60: inTemplateString = true; break // `
          case 0x28: paren++; break                 // (
          case 0x29: paren--; break                 // )
          case 0x5B: square++; break                // [
          case 0x5D: square--; break                // ]
          case 0x7B: curly++; break                 // {
          case 0x7D: curly--; break                 // }
        }
        if (c === 0x2f) { // /
          var j = i - 1;
          var p = (void 0);
          // find first non-whitespace prev char
          for (; j >= 0; j--) {
            p = exp.charAt(j);
            if (p !== ' ') { break }
          }
          if (!p || !validDivisionCharRE.test(p)) {
            inRegex = true;
          }
        }
      }
    }

    if (expression === undefined) {
      expression = exp.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }

    function pushFilter () {
      (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
      lastFilterIndex = i + 1;
    }

    if (filters) {
      for (i = 0; i < filters.length; i++) {
        expression = wrapFilter(expression, filters[i]);
      }
    }

    return expression
  }

  function wrapFilter (exp, filter) {
    var i = filter.indexOf('(');
    if (i < 0) {
      // _f: resolveFilter
      return ("_f(\"" + filter + "\")(" + exp + ")")
    } else {
      var name = filter.slice(0, i);
      var args = filter.slice(i + 1);
      return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
    }
  }

  /*  */



  /* eslint-disable no-unused-vars */
  function baseWarn (msg, range) {
    console.error(("[Vue compiler]: " + msg));
  }
  /* eslint-enable no-unused-vars */

  function pluckModuleFunction (
    modules,
    key
  ) {
    return modules
      ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
      : []
  }

  function addProp (el, name, value, range, dynamic) {
    (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
  }

  function addAttr (el, name, value, range, dynamic) {
    var attrs = dynamic
      ? (el.dynamicAttrs || (el.dynamicAttrs = []))
      : (el.attrs || (el.attrs = []));
    attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
  }

  // add a raw attr (use this in preTransforms)
  function addRawAttr (el, name, value, range) {
    el.attrsMap[name] = value;
    el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
  }

  function addDirective (
    el,
    name,
    rawName,
    value,
    arg,
    isDynamicArg,
    modifiers,
    range
  ) {
    (el.directives || (el.directives = [])).push(rangeSetItem({
      name: name,
      rawName: rawName,
      value: value,
      arg: arg,
      isDynamicArg: isDynamicArg,
      modifiers: modifiers
    }, range));
    el.plain = false;
  }

  function prependModifierMarker (symbol, name, dynamic) {
    return dynamic
      ? ("_p(" + name + ",\"" + symbol + "\")")
      : symbol + name // mark the event as captured
  }

  function addHandler (
    el,
    name,
    value,
    modifiers,
    important,
    warn,
    range,
    dynamic
  ) {
    modifiers = modifiers || emptyObject;
    // warn prevent and passive modifier
    /* istanbul ignore if */
    if (
      warn &&
      modifiers.prevent && modifiers.passive
    ) {
      warn(
        'passive and prevent can\'t be used together. ' +
        'Passive handler can\'t prevent default event.',
        range
      );
    }

    // normalize click.right and click.middle since they don't actually fire
    // this is technically browser-specific, but at least for now browsers are
    // the only target envs that have right/middle clicks.
    if (modifiers.right) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
      } else if (name === 'click') {
        name = 'contextmenu';
        delete modifiers.right;
      }
    } else if (modifiers.middle) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
      } else if (name === 'click') {
        name = 'mouseup';
      }
    }

    // check capture modifier
    if (modifiers.capture) {
      delete modifiers.capture;
      name = prependModifierMarker('!', name, dynamic);
    }
    if (modifiers.once) {
      delete modifiers.once;
      name = prependModifierMarker('~', name, dynamic);
    }
    /* istanbul ignore if */
    if (modifiers.passive) {
      delete modifiers.passive;
      name = prependModifierMarker('&', name, dynamic);
    }

    var events;
    if (modifiers.native) {
      delete modifiers.native;
      events = el.nativeEvents || (el.nativeEvents = {});
    } else {
      events = el.events || (el.events = {});
    }

    var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
    if (modifiers !== emptyObject) {
      newHandler.modifiers = modifiers;
    }

    var handlers = events[name];
    /* istanbul ignore if */
    if (Array.isArray(handlers)) {
      important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    } else if (handlers) {
      events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
    } else {
      events[name] = newHandler;
    }

    el.plain = false;
  }

  function getRawBindingAttr (
    el,
    name
  ) {
    return el.rawAttrsMap[':' + name] ||
      el.rawAttrsMap['v-bind:' + name] ||
      el.rawAttrsMap[name]
  }

  function getBindingAttr (
    el,
    name,
    getStatic
  ) {
    var dynamicValue =
      getAndRemoveAttr(el, ':' + name) ||
      getAndRemoveAttr(el, 'v-bind:' + name);
    if (dynamicValue != null) {
      return parseFilters(dynamicValue)
    } else if (getStatic !== false) {
      var staticValue = getAndRemoveAttr(el, name);
      if (staticValue != null) {
        return JSON.stringify(staticValue)
      }
    }
  }

  // note: this only removes the attr from the Array (attrsList) so that it
  // doesn't get processed by processAttrs.
  // By default it does NOT remove it from the map (attrsMap) because the map is
  // needed during codegen.
  function getAndRemoveAttr (
    el,
    name,
    removeFromMap
  ) {
    var val;
    if ((val = el.attrsMap[name]) != null) {
      var list = el.attrsList;
      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i].name === name) {
          list.splice(i, 1);
          break
        }
      }
    }
    if (removeFromMap) {
      delete el.attrsMap[name];
    }
    return val
  }

  function getAndRemoveAttrByRegex (
    el,
    name
  ) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      var attr = list[i];
      if (name.test(attr.name)) {
        list.splice(i, 1);
        return attr
      }
    }
  }

  function rangeSetItem (
    item,
    range
  ) {
    if (range) {
      if (range.start != null) {
        item.start = range.start;
      }
      if (range.end != null) {
        item.end = range.end;
      }
    }
    return item
  }

  /*  */

  /**
   * Cross-platform code generation for component v-model
   */
  function genComponentModel (
    el,
    value,
    modifiers
  ) {
    var ref = modifiers || {};
    var number = ref.number;
    var trim = ref.trim;

    var baseValueExpression = '$$v';
    var valueExpression = baseValueExpression;
    if (trim) {
      valueExpression =
        "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }
    var assignment = genAssignmentCode(value, valueExpression);

    el.model = {
      value: ("(" + value + ")"),
      expression: JSON.stringify(value),
      callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
    };
  }

  /**
   * Cross-platform codegen helper for generating v-model value assignment code.
   */
  function genAssignmentCode (
    value,
    assignment
  ) {
    var res = parseModel(value);
    if (res.key === null) {
      return (value + "=" + assignment)
    } else {
      return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
    }
  }

  /**
   * Parse a v-model expression into a base path and a final key segment.
   * Handles both dot-path and possible square brackets.
   *
   * Possible cases:
   *
   * - test
   * - test[key]
   * - test[test1[key]]
   * - test["a"][key]
   * - xxx.test[a[a].test1[key]]
   * - test.xxx.a["asa"][test1[key]]
   *
   */

  var len, str, chr, index$1, expressionPos, expressionEndPos;



  function parseModel (val) {
    // Fix https://github.com/vuejs/vue/pull/7730
    // allow v-model="obj.val " (trailing whitespace)
    val = val.trim();
    len = val.length;

    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
      index$1 = val.lastIndexOf('.');
      if (index$1 > -1) {
        return {
          exp: val.slice(0, index$1),
          key: '"' + val.slice(index$1 + 1) + '"'
        }
      } else {
        return {
          exp: val,
          key: null
        }
      }
    }

    str = val;
    index$1 = expressionPos = expressionEndPos = 0;

    while (!eof()) {
      chr = next();
      /* istanbul ignore if */
      if (isStringStart(chr)) {
        parseString(chr);
      } else if (chr === 0x5B) {
        parseBracket(chr);
      }
    }

    return {
      exp: val.slice(0, expressionPos),
      key: val.slice(expressionPos + 1, expressionEndPos)
    }
  }

  function next () {
    return str.charCodeAt(++index$1)
  }

  function eof () {
    return index$1 >= len
  }

  function isStringStart (chr) {
    return chr === 0x22 || chr === 0x27
  }

  function parseBracket (chr) {
    var inBracket = 1;
    expressionPos = index$1;
    while (!eof()) {
      chr = next();
      if (isStringStart(chr)) {
        parseString(chr);
        continue
      }
      if (chr === 0x5B) { inBracket++; }
      if (chr === 0x5D) { inBracket--; }
      if (inBracket === 0) {
        expressionEndPos = index$1;
        break
      }
    }
  }

  function parseString (chr) {
    var stringQuote = chr;
    while (!eof()) {
      chr = next();
      if (chr === stringQuote) {
        break
      }
    }
  }

  /*  */

  var warn$1;

  // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.
  var RANGE_TOKEN = '__r';
  var CHECKBOX_RADIO_TOKEN = '__c';

  function model (
    el,
    dir,
    _warn
  ) {
    warn$1 = _warn;
    var value = dir.value;
    var modifiers = dir.modifiers;
    var tag = el.tag;
    var type = el.attrsMap.type;

    {
      // inputs with type="file" are read only and setting the input's
      // value will throw an error.
      if (tag === 'input' && type === 'file') {
        warn$1(
          "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
          "File inputs are read only. Use a v-on:change listener instead.",
          el.rawAttrsMap['v-model']
        );
      }
    }

    if (el.component) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false
    } else if (tag === 'select') {
      genSelect(el, value, modifiers);
    } else if (tag === 'input' && type === 'checkbox') {
      genCheckboxModel(el, value, modifiers);
    } else if (tag === 'input' && type === 'radio') {
      genRadioModel(el, value, modifiers);
    } else if (tag === 'input' || tag === 'textarea') {
      genDefaultModel(el, value, modifiers);
    } else if (!config.isReservedTag(tag)) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false
    } else {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "v-model is not supported on this element type. " +
        'If you are working with contenteditable, it\'s recommended to ' +
        'wrap a library dedicated for that purpose inside a custom component.',
        el.rawAttrsMap['v-model']
      );
    }

    // ensure runtime directive metadata
    return true
  }

  function genCheckboxModel (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
    var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
    addProp(el, 'checked',
      "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
    );
    addHandler(el, 'change',
      "var $$a=" + value + "," +
          '$$el=$event.target,' +
          "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
      'if(Array.isArray($$a)){' +
        "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
            '$$i=_i($$a,$$v);' +
        "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
        "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
      "}else{" + (genAssignmentCode(value, '$$c')) + "}",
      null, true
    );
  }

  function genRadioModel (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
    addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
    addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
  }

  function genSelect (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var selectedVal = "Array.prototype.filter" +
      ".call($event.target.options,function(o){return o.selected})" +
      ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
      "return " + (number ? '_n(val)' : 'val') + "})";

    var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
    var code = "var $$selectedVal = " + selectedVal + ";";
    code = code + " " + (genAssignmentCode(value, assignment));
    addHandler(el, 'change', code, null, true);
  }

  function genDefaultModel (
    el,
    value,
    modifiers
  ) {
    var type = el.attrsMap.type;

    // warn if v-bind:value conflicts with v-model
    // except for inputs with v-bind:type
    {
      var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
      var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
      if (value$1 && !typeBinding) {
        var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
        warn$1(
          binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
          'because the latter already expands to a value binding internally',
          el.rawAttrsMap[binding]
        );
      }
    }

    var ref = modifiers || {};
    var lazy = ref.lazy;
    var number = ref.number;
    var trim = ref.trim;
    var needCompositionGuard = !lazy && type !== 'range';
    var event = lazy
      ? 'change'
      : type === 'range'
        ? RANGE_TOKEN
        : 'input';

    var valueExpression = '$event.target.value';
    if (trim) {
      valueExpression = "$event.target.value.trim()";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }

    var code = genAssignmentCode(value, valueExpression);
    if (needCompositionGuard) {
      code = "if($event.target.composing)return;" + code;
    }

    addProp(el, 'value', ("(" + value + ")"));
    addHandler(el, event, code, null, true);
    if (trim || number) {
      addHandler(el, 'blur', '$forceUpdate()');
    }
  }

  /*  */

  // normalize v-model event tokens that can only be determined at runtime.
  // it's important to place the event as the first in the array because
  // the whole point is ensuring the v-model callback gets called before
  // user-attached handlers.
  function normalizeEvents (on) {
    /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
      // IE input[type=range] only supports `change` event
      var event = isIE ? 'change' : 'input';
      on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
      delete on[RANGE_TOKEN];
    }
    // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4
    /* istanbul ignore if */
    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
      on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
      delete on[CHECKBOX_RADIO_TOKEN];
    }
  }

  var target$1;

  function createOnceHandler$1 (event, handler, capture) {
    var _target = target$1; // save current target element in closure
    return function onceHandler () {
      var res = handler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, onceHandler, capture, _target);
      }
    }
  }

  // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
  // implementation and does not fire microtasks in between event propagation, so
  // safe to exclude.
  var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

  function add$1 (
    name,
    handler,
    capture,
    passive
  ) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    if (useMicrotaskFix) {
      var attachedTimestamp = currentFlushTimestamp;
      var original = handler;
      handler = original._wrapper = function (e) {
        if (
          // no bubbling, should always fire.
          // this is just a safety net in case event.timeStamp is unreliable in
          // certain weird environments...
          e.target === e.currentTarget ||
          // event is fired after handler attachment
          e.timeStamp >= attachedTimestamp ||
          // bail for environments that have buggy event.timeStamp implementations
          // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
          // #9681 QtWebEngine event.timeStamp is negative value
          e.timeStamp <= 0 ||
          // #9448 bail if event is fired in another document in a multi-page
          // electron/nw.js app, since event.timeStamp will be using a different
          // starting reference
          e.target.ownerDocument !== document
        ) {
          return original.apply(this, arguments)
        }
      };
    }
    target$1.addEventListener(
      name,
      handler,
      supportsPassive
        ? { capture: capture, passive: passive }
        : capture
    );
  }

  function remove$2 (
    name,
    handler,
    capture,
    _target
  ) {
    (_target || target$1).removeEventListener(
      name,
      handler._wrapper || handler,
      capture
    );
  }

  function updateDOMListeners (oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
      return
    }
    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
    target$1 = undefined;
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners
  };

  /*  */

  var svgContainer;

  function updateDOMProps (oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
      return
    }
    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(props.__ob__)) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (!(key in props)) {
        elm[key] = '';
      }
    }

    for (key in props) {
      cur = props[key];
      // ignore children if the node has textContent or innerHTML,
      // as these will throw away existing DOM nodes and cause removal errors
      // on subsequent patches (#3360)
      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) { vnode.children.length = 0; }
        if (cur === oldProps[key]) { continue }
        // #6601 work around Chrome version <= 55 bug where single textNode
        // replaced by innerHTML/textContent retains its parentNode property
        if (elm.childNodes.length === 1) {
          elm.removeChild(elm.childNodes[0]);
        }
      }

      if (key === 'value' && elm.tagName !== 'PROGRESS') {
        // store value as _value as well since
        // non-string values will be stringified
        elm._value = cur;
        // avoid resetting cursor position when value is the same
        var strCur = isUndef(cur) ? '' : String(cur);
        if (shouldUpdateValue(elm, strCur)) {
          elm.value = strCur;
        }
      } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
        // IE doesn't support innerHTML for SVG elements
        svgContainer = svgContainer || document.createElement('div');
        svgContainer.innerHTML = "<svg>" + cur + "</svg>";
        var svg = svgContainer.firstChild;
        while (elm.firstChild) {
          elm.removeChild(elm.firstChild);
        }
        while (svg.firstChild) {
          elm.appendChild(svg.firstChild);
        }
      } else if (
        // skip the update if old and new VDOM state is the same.
        // `value` is handled separately because the DOM value may be temporarily
        // out of sync with VDOM state due to focus, composition and modifiers.
        // This  #4521 by skipping the unnecesarry `checked` update.
        cur !== oldProps[key]
      ) {
        // some property updates can throw
        // e.g. `value` on <progress> w/ non-finite value
        try {
          elm[key] = cur;
        } catch (e) {}
      }
    }
  }

  // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue (elm, checkVal) {
    return (!elm.composing && (
      elm.tagName === 'OPTION' ||
      isNotInFocusAndDirty(elm, checkVal) ||
      isDirtyWithModifiers(elm, checkVal)
    ))
  }

  function isNotInFocusAndDirty (elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    var notInFocus = true;
    // #6157
    // work around IE bug when accessing document.activeElement in an iframe
    try { notInFocus = document.activeElement !== elm; } catch (e) {}
    return notInFocus && elm.value !== checkVal
  }

  function isDirtyWithModifiers (elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime
    if (isDef(modifiers)) {
      if (modifiers.number) {
        return toNumber(value) !== toNumber(newVal)
      }
      if (modifiers.trim) {
        return value.trim() !== newVal.trim()
      }
    }
    return value !== newVal
  }

  var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
  };

  /*  */

  var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
      if (item) {
        var tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return res
  });

  // merge static and dynamic style data on the same vnode
  function normalizeStyleData (data) {
    var style = normalizeStyleBinding(data.style);
    // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it
    return data.staticStyle
      ? extend(data.staticStyle, style)
      : style
  }

  // normalize possible array / string values into Object
  function normalizeStyleBinding (bindingStyle) {
    if (Array.isArray(bindingStyle)) {
      return toObject(bindingStyle)
    }
    if (typeof bindingStyle === 'string') {
      return parseStyleText(bindingStyle)
    }
    return bindingStyle
  }

  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */
  function getStyle (vnode, checkChild) {
    var res = {};
    var styleData;

    if (checkChild) {
      var childNode = vnode;
      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;
        if (
          childNode && childNode.data &&
          (styleData = normalizeStyleData(childNode.data))
        ) {
          extend(res, styleData);
        }
      }
    }

    if ((styleData = normalizeStyleData(vnode.data))) {
      extend(res, styleData);
    }

    var parentNode = vnode;
    while ((parentNode = parentNode.parent)) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }
    return res
  }

  /*  */

  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/;
  var setProp = function (el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
      el.style.setProperty(name, val);
    } else if (importantRE.test(val)) {
      el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
    } else {
      var normalizedName = normalize(name);
      if (Array.isArray(val)) {
        // Support values array created by autoprefixer, e.g.
        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
        // Set them one by one, and the browser will only set those it can recognize
        for (var i = 0, len = val.length; i < len; i++) {
          el.style[normalizedName] = val[i];
        }
      } else {
        el.style[normalizedName] = val;
      }
    }
  };

  var vendorNames = ['Webkit', 'Moz', 'ms'];

  var emptyStyle;
  var normalize = cached(function (prop) {
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);
    if (prop !== 'filter' && (prop in emptyStyle)) {
      return prop
    }
    var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (var i = 0; i < vendorNames.length; i++) {
      var name = vendorNames[i] + capName;
      if (name in emptyStyle) {
        return name
      }
    }
  });

  function updateStyle (oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) &&
      isUndef(oldData.staticStyle) && isUndef(oldData.style)
    ) {
      return
    }

    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    var oldStyle = oldStaticStyle || oldStyleBinding;

    var style = normalizeStyleBinding(vnode.data.style) || {};

    // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.
    vnode.data.normalizedStyle = isDef(style.__ob__)
      ? extend({}, style)
      : style;

    var newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
      if (isUndef(newStyle[name])) {
        setProp(el, name, '');
      }
    }
    for (name in newStyle) {
      cur = newStyle[name];
      if (cur !== oldStyle[name]) {
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
      }
    }
  }

  var style = {
    create: updateStyle,
    update: updateStyle
  };

  /*  */

  var whitespaceRE = /\s+/;

  /**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function addClass (el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
      } else {
        el.classList.add(cls);
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      if (cur.indexOf(' ' + cls + ' ') < 0) {
        el.setAttribute('class', (cur + cls).trim());
      }
    }
  }

  /**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function removeClass (el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
      } else {
        el.classList.remove(cls);
      }
      if (!el.classList.length) {
        el.removeAttribute('class');
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      var tar = ' ' + cls + ' ';
      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }
      cur = cur.trim();
      if (cur) {
        el.setAttribute('class', cur);
      } else {
        el.removeAttribute('class');
      }
    }
  }

  /*  */

  function resolveTransition (def$$1) {
    if (!def$$1) {
      return
    }
    /* istanbul ignore else */
    if (typeof def$$1 === 'object') {
      var res = {};
      if (def$$1.css !== false) {
        extend(res, autoCssTransition(def$$1.name || 'v'));
      }
      extend(res, def$$1);
      return res
    } else if (typeof def$$1 === 'string') {
      return autoCssTransition(def$$1)
    }
  }

  var autoCssTransition = cached(function (name) {
    return {
      enterClass: (name + "-enter"),
      enterToClass: (name + "-enter-to"),
      enterActiveClass: (name + "-enter-active"),
      leaveClass: (name + "-leave"),
      leaveToClass: (name + "-leave-to"),
      leaveActiveClass: (name + "-leave-active")
    }
  });

  var hasTransition = inBrowser && !isIE9;
  var TRANSITION = 'transition';
  var ANIMATION = 'animation';

  // Transition property/event sniffing
  var transitionProp = 'transition';
  var transitionEndEvent = 'transitionend';
  var animationProp = 'animation';
  var animationEndEvent = 'animationend';
  if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined &&
      window.onwebkittransitionend !== undefined
    ) {
      transitionProp = 'WebkitTransition';
      transitionEndEvent = 'webkitTransitionEnd';
    }
    if (window.onanimationend === undefined &&
      window.onwebkitanimationend !== undefined
    ) {
      animationProp = 'WebkitAnimation';
      animationEndEvent = 'webkitAnimationEnd';
    }
  }

  // binding to window is necessary to make hot reload work in IE in strict mode
  var raf = inBrowser
    ? window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : setTimeout
    : /* istanbul ignore next */ function (fn) { return fn(); };

  function nextFrame (fn) {
    raf(function () {
      raf(fn);
    });
  }

  function addTransitionClass (el, cls) {
    var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
    if (transitionClasses.indexOf(cls) < 0) {
      transitionClasses.push(cls);
      addClass(el, cls);
    }
  }

  function removeTransitionClass (el, cls) {
    if (el._transitionClasses) {
      remove(el._transitionClasses, cls);
    }
    removeClass(el, cls);
  }

  function whenTransitionEnds (
    el,
    expectedType,
    cb
  ) {
    var ref = getTransitionInfo(el, expectedType);
    var type = ref.type;
    var timeout = ref.timeout;
    var propCount = ref.propCount;
    if (!type) { return cb() }
    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;
    var end = function () {
      el.removeEventListener(event, onEnd);
      cb();
    };
    var onEnd = function (e) {
      if (e.target === el) {
        if (++ended >= propCount) {
          end();
        }
      }
    };
    setTimeout(function () {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
  }

  var transformRE = /\b(transform|all)(,|$)/;

  function getTransitionInfo (el, expectedType) {
    var styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
    var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
    var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);

    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0
        ? transitionTimeout > animationTimeout
          ? TRANSITION
          : ANIMATION
        : null;
      propCount = type
        ? type === TRANSITION
          ? transitionDurations.length
          : animationDurations.length
        : 0;
    }
    var hasTransform =
      type === TRANSITION &&
      transformRE.test(styles[transitionProp + 'Property']);
    return {
      type: type,
      timeout: timeout,
      propCount: propCount,
      hasTransform: hasTransform
    }
  }

  function getTimeout (delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }

    return Math.max.apply(null, durations.map(function (d, i) {
      return toMs(d) + toMs(delays[i])
    }))
  }

  // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
  // in a locale-dependent way, using a comma instead of a dot.
  // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
  // as a floor function) causing unexpected behaviors
  function toMs (s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000
  }

  /*  */

  function enter (vnode, toggleDisplay) {
    var el = vnode.elm;

    // call leave callback now
    if (isDef(el._leaveCb)) {
      el._leaveCb.cancelled = true;
      el._leaveCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
      return
    }

    /* istanbul ignore if */
    if (isDef(el._enterCb) || el.nodeType !== 1) {
      return
    }

    var css = data.css;
    var type = data.type;
    var enterClass = data.enterClass;
    var enterToClass = data.enterToClass;
    var enterActiveClass = data.enterActiveClass;
    var appearClass = data.appearClass;
    var appearToClass = data.appearToClass;
    var appearActiveClass = data.appearActiveClass;
    var beforeEnter = data.beforeEnter;
    var enter = data.enter;
    var afterEnter = data.afterEnter;
    var enterCancelled = data.enterCancelled;
    var beforeAppear = data.beforeAppear;
    var appear = data.appear;
    var afterAppear = data.afterAppear;
    var appearCancelled = data.appearCancelled;
    var duration = data.duration;

    // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.
    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;
    while (transitionNode && transitionNode.parent) {
      context = transitionNode.context;
      transitionNode = transitionNode.parent;
    }

    var isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== '') {
      return
    }

    var startClass = isAppear && appearClass
      ? appearClass
      : enterClass;
    var activeClass = isAppear && appearActiveClass
      ? appearActiveClass
      : enterActiveClass;
    var toClass = isAppear && appearToClass
      ? appearToClass
      : enterToClass;

    var beforeEnterHook = isAppear
      ? (beforeAppear || beforeEnter)
      : beforeEnter;
    var enterHook = isAppear
      ? (typeof appear === 'function' ? appear : enter)
      : enter;
    var afterEnterHook = isAppear
      ? (afterAppear || afterEnter)
      : afterEnter;
    var enterCancelledHook = isAppear
      ? (appearCancelled || enterCancelled)
      : enterCancelled;

    var explicitEnterDuration = toNumber(
      isObject(duration)
        ? duration.enter
        : duration
    );

    if (explicitEnterDuration != null) {
      checkDuration(explicitEnterDuration, 'enter', vnode);
    }

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);

    var cb = el._enterCb = once(function () {
      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }
        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }
      el._enterCb = null;
    });

    if (!vnode.data.show) {
      // remove pending leave element on enter by injecting an insert hook
      mergeVNodeHook(vnode, 'insert', function () {
        var parent = el.parentNode;
        var pendingNode = parent && parent._pending && parent._pending[vnode.key];
        if (pendingNode &&
          pendingNode.tag === vnode.tag &&
          pendingNode.elm._leaveCb
        ) {
          pendingNode.elm._leaveCb();
        }
        enterHook && enterHook(el, cb);
      });
    }

    // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function () {
        removeTransitionClass(el, startClass);
        if (!cb.cancelled) {
          addTransitionClass(el, toClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitEnterDuration)) {
              setTimeout(cb, explicitEnterDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    if (vnode.data.show) {
      toggleDisplay && toggleDisplay();
      enterHook && enterHook(el, cb);
    }

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }

  function leave (vnode, rm) {
    var el = vnode.elm;

    // call enter callback now
    if (isDef(el._enterCb)) {
      el._enterCb.cancelled = true;
      el._enterCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data) || el.nodeType !== 1) {
      return rm()
    }

    /* istanbul ignore if */
    if (isDef(el._leaveCb)) {
      return
    }

    var css = data.css;
    var type = data.type;
    var leaveClass = data.leaveClass;
    var leaveToClass = data.leaveToClass;
    var leaveActiveClass = data.leaveActiveClass;
    var beforeLeave = data.beforeLeave;
    var leave = data.leave;
    var afterLeave = data.afterLeave;
    var leaveCancelled = data.leaveCancelled;
    var delayLeave = data.delayLeave;
    var duration = data.duration;

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);

    var explicitLeaveDuration = toNumber(
      isObject(duration)
        ? duration.leave
        : duration
    );

    if (isDef(explicitLeaveDuration)) {
      checkDuration(explicitLeaveDuration, 'leave', vnode);
    }

    var cb = el._leaveCb = once(function () {
      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }
      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }
        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }
      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave () {
      // the delayed leave may have already been cancelled
      if (cb.cancelled) {
        return
      }
      // record leaving element
      if (!vnode.data.show && el.parentNode) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
      }
      beforeLeave && beforeLeave(el);
      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function () {
          removeTransitionClass(el, leaveClass);
          if (!cb.cancelled) {
            addTransitionClass(el, leaveToClass);
            if (!userWantsControl) {
              if (isValidDuration(explicitLeaveDuration)) {
                setTimeout(cb, explicitLeaveDuration);
              } else {
                whenTransitionEnds(el, type, cb);
              }
            }
          }
        });
      }
      leave && leave(el, cb);
      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
  }

  // only used in dev mode
  function checkDuration (val, name, vnode) {
    if (typeof val !== 'number') {
      warn(
        "<transition> explicit " + name + " duration is not a valid number - " +
        "got " + (JSON.stringify(val)) + ".",
        vnode.context
      );
    } else if (isNaN(val)) {
      warn(
        "<transition> explicit " + name + " duration is NaN - " +
        'the duration expression might be incorrect.',
        vnode.context
      );
    }
  }

  function isValidDuration (val) {
    return typeof val === 'number' && !isNaN(val)
  }

  /**
   * Normalize a transition hook's argument length. The hook may be:
   * - a merged hook (invoker) with the original in .fns
   * - a wrapped component method (check ._length)
   * - a plain function (.length)
   */
  function getHookArgumentsLength (fn) {
    if (isUndef(fn)) {
      return false
    }
    var invokerFns = fn.fns;
    if (isDef(invokerFns)) {
      // invoker
      return getHookArgumentsLength(
        Array.isArray(invokerFns)
          ? invokerFns[0]
          : invokerFns
      )
    } else {
      return (fn._length || fn.length) > 1
    }
  }

  function _enter (_, vnode) {
    if (vnode.data.show !== true) {
      enter(vnode);
    }
  }

  var transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove: function remove$$1 (vnode, rm) {
      /* istanbul ignore else */
      if (vnode.data.show !== true) {
        leave(vnode, rm);
      } else {
        rm();
      }
    }
  } : {};

  var platformModules = [
    attrs,
    klass,
    events,
    domProps,
    style,
    transition
  ];

  /*  */

  // the directive module should be applied last, after all
  // built-in modules have been applied.
  var modules = platformModules.concat(baseModules);

  var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

  /**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */

  /* istanbul ignore if */
  if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
      var el = document.activeElement;
      if (el && el.vmodel) {
        trigger(el, 'input');
      }
    });
  }

  var directive = {
    inserted: function inserted (el, binding, vnode, oldVnode) {
      if (vnode.tag === 'select') {
        // #6903
        if (oldVnode.elm && !oldVnode.elm._vOptions) {
          mergeVNodeHook(vnode, 'postpatch', function () {
            directive.componentUpdated(el, binding, vnode);
          });
        } else {
          setSelected(el, binding, vnode.context);
        }
        el._vOptions = [].map.call(el.options, getValue);
      } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
        el._vModifiers = binding.modifiers;
        if (!binding.modifiers.lazy) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
          // Safari < 10.2 & UIWebView doesn't fire compositionend when
          // switching focus before confirming composition choice
          // this also fixes the issue where some browsers e.g. iOS Chrome
          // fires "change" instead of "input" on autocomplete.
          el.addEventListener('change', onCompositionEnd);
          /* istanbul ignore if */
          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    },

    componentUpdated: function componentUpdated (el, binding, vnode) {
      if (vnode.tag === 'select') {
        setSelected(el, binding, vnode.context);
        // in case the options rendered by v-for have changed,
        // it's possible that the value is out-of-sync with the rendered options.
        // detect such cases and filter out values that no longer has a matching
        // option in the DOM.
        var prevOptions = el._vOptions;
        var curOptions = el._vOptions = [].map.call(el.options, getValue);
        if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
          // trigger change event if
          // no matching option found for at least one value
          var needReset = el.multiple
            ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
            : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
          if (needReset) {
            trigger(el, 'change');
          }
        }
      }
    }
  };

  function setSelected (el, binding, vm) {
    actuallySetSelected(el, binding, vm);
    /* istanbul ignore if */
    if (isIE || isEdge) {
      setTimeout(function () {
        actuallySetSelected(el, binding, vm);
      }, 0);
    }
  }

  function actuallySetSelected (el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
      warn(
        "<select multiple v-model=\"" + (binding.expression) + "\"> " +
        "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
        vm
      );
      return
    }
    var selected, option;
    for (var i = 0, l = el.options.length; i < l; i++) {
      option = el.options[i];
      if (isMultiple) {
        selected = looseIndexOf(value, getValue(option)) > -1;
        if (option.selected !== selected) {
          option.selected = selected;
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }
          return
        }
      }
    }
    if (!isMultiple) {
      el.selectedIndex = -1;
    }
  }

  function hasNoMatchingOption (value, options) {
    return options.every(function (o) { return !looseEqual(o, value); })
  }

  function getValue (option) {
    return '_value' in option
      ? option._value
      : option.value
  }

  function onCompositionStart (e) {
    e.target.composing = true;
  }

  function onCompositionEnd (e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing) { return }
    e.target.composing = false;
    trigger(e.target, 'input');
  }

  function trigger (el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  }

  /*  */

  // recursively search for possible transition defined inside the component root
  function locateNode (vnode) {
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
      ? locateNode(vnode.componentInstance._vnode)
      : vnode
  }

  var show = {
    bind: function bind (el, ref, vnode) {
      var value = ref.value;

      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      var originalDisplay = el.__vOriginalDisplay =
        el.style.display === 'none' ? '' : el.style.display;
      if (value && transition$$1) {
        vnode.data.show = true;
        enter(vnode, function () {
          el.style.display = originalDisplay;
        });
      } else {
        el.style.display = value ? originalDisplay : 'none';
      }
    },

    update: function update (el, ref, vnode) {
      var value = ref.value;
      var oldValue = ref.oldValue;

      /* istanbul ignore if */
      if (!value === !oldValue) { return }
      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      if (transition$$1) {
        vnode.data.show = true;
        if (value) {
          enter(vnode, function () {
            el.style.display = el.__vOriginalDisplay;
          });
        } else {
          leave(vnode, function () {
            el.style.display = 'none';
          });
        }
      } else {
        el.style.display = value ? el.__vOriginalDisplay : 'none';
      }
    },

    unbind: function unbind (
      el,
      binding,
      vnode,
      oldVnode,
      isDestroy
    ) {
      if (!isDestroy) {
        el.style.display = el.__vOriginalDisplay;
      }
    }
  };

  var platformDirectives = {
    model: directive,
    show: show
  };

  /*  */

  var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  };

  // in case the child is also an abstract component, e.g. <keep-alive>
  // we want to recursively retrieve the real component to be rendered
  function getRealChild (vnode) {
    var compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) {
      return getRealChild(getFirstComponentChild(compOptions.children))
    } else {
      return vnode
    }
  }

  function extractTransitionData (comp) {
    var data = {};
    var options = comp.$options;
    // props
    for (var key in options.propsData) {
      data[key] = comp[key];
    }
    // events.
    // extract listeners and pass them directly to the transition methods
    var listeners = options._parentListeners;
    for (var key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1];
    }
    return data
  }

  function placeholder (h, rawChild) {
    if (/\d-keep-alive$/.test(rawChild.tag)) {
      return h('keep-alive', {
        props: rawChild.componentOptions.propsData
      })
    }
  }

  function hasParentTransition (vnode) {
    while ((vnode = vnode.parent)) {
      if (vnode.data.transition) {
        return true
      }
    }
  }

  function isSameChild (child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag
  }

  var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

  var isVShowDirective = function (d) { return d.name === 'show'; };

  var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,

    render: function render (h) {
      var this$1 = this;

      var children = this.$slots.default;
      if (!children) {
        return
      }

      // filter out text nodes (possible whitespaces)
      children = children.filter(isNotTextNode);
      /* istanbul ignore if */
      if (!children.length) {
        return
      }

      // warn multiple elements
      if (children.length > 1) {
        warn(
          '<transition> can only be used on a single element. Use ' +
          '<transition-group> for lists.',
          this.$parent
        );
      }

      var mode = this.mode;

      // warn invalid mode
      if (mode && mode !== 'in-out' && mode !== 'out-in'
      ) {
        warn(
          'invalid <transition> mode: ' + mode,
          this.$parent
        );
      }

      var rawChild = children[0];

      // if this is a component root node and the component's
      // parent container node also has transition, skip.
      if (hasParentTransition(this.$vnode)) {
        return rawChild
      }

      // apply transition data to child
      // use getRealChild() to ignore abstract components e.g. keep-alive
      var child = getRealChild(rawChild);
      /* istanbul ignore if */
      if (!child) {
        return rawChild
      }

      if (this._leaving) {
        return placeholder(h, rawChild)
      }

      // ensure a key that is unique to the vnode type and to this transition
      // component instance. This key will be used to remove pending leaving nodes
      // during entering.
      var id = "__transition-" + (this._uid) + "-";
      child.key = child.key == null
        ? child.isComment
          ? id + 'comment'
          : id + child.tag
        : isPrimitive(child.key)
          ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
          : child.key;

      var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
      var oldRawChild = this._vnode;
      var oldChild = getRealChild(oldRawChild);

      // mark v-show
      // so that the transition module can hand over the control to the directive
      if (child.data.directives && child.data.directives.some(isVShowDirective)) {
        child.data.show = true;
      }

      if (
        oldChild &&
        oldChild.data &&
        !isSameChild(child, oldChild) &&
        !isAsyncPlaceholder(oldChild) &&
        // #6687 component root is a comment node
        !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
      ) {
        // replace old child transition data with fresh one
        // important for dynamic transitions!
        var oldData = oldChild.data.transition = extend({}, data);
        // handle transition mode
        if (mode === 'out-in') {
          // return placeholder node and queue update when leave finishes
          this._leaving = true;
          mergeVNodeHook(oldData, 'afterLeave', function () {
            this$1._leaving = false;
            this$1.$forceUpdate();
          });
          return placeholder(h, rawChild)
        } else if (mode === 'in-out') {
          if (isAsyncPlaceholder(child)) {
            return oldRawChild
          }
          var delayedLeave;
          var performLeave = function () { delayedLeave(); };
          mergeVNodeHook(data, 'afterEnter', performLeave);
          mergeVNodeHook(data, 'enterCancelled', performLeave);
          mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
        }
      }

      return rawChild
    }
  };

  /*  */

  var props = extend({
    tag: String,
    moveClass: String
  }, transitionProps);

  delete props.mode;

  var TransitionGroup = {
    props: props,

    beforeMount: function beforeMount () {
      var this$1 = this;

      var update = this._update;
      this._update = function (vnode, hydrating) {
        var restoreActiveInstance = setActiveInstance(this$1);
        // force removing pass
        this$1.__patch__(
          this$1._vnode,
          this$1.kept,
          false, // hydrating
          true // removeOnly (!important, avoids unnecessary moves)
        );
        this$1._vnode = this$1.kept;
        restoreActiveInstance();
        update.call(this$1, vnode, hydrating);
      };
    },

    render: function render (h) {
      var tag = this.tag || this.$vnode.data.tag || 'span';
      var map = Object.create(null);
      var prevChildren = this.prevChildren = this.children;
      var rawChildren = this.$slots.default || [];
      var children = this.children = [];
      var transitionData = extractTransitionData(this);

      for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];
        if (c.tag) {
          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
            children.push(c);
            map[c.key] = c
            ;(c.data || (c.data = {})).transition = transitionData;
          } else {
            var opts = c.componentOptions;
            var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
            warn(("<transition-group> children must be keyed: <" + name + ">"));
          }
        }
      }

      if (prevChildren) {
        var kept = [];
        var removed = [];
        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
          var c$1 = prevChildren[i$1];
          c$1.data.transition = transitionData;
          c$1.data.pos = c$1.elm.getBoundingClientRect();
          if (map[c$1.key]) {
            kept.push(c$1);
          } else {
            removed.push(c$1);
          }
        }
        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      return h(tag, null, children)
    },

    updated: function updated () {
      var children = this.prevChildren;
      var moveClass = this.moveClass || ((this.name || 'v') + '-move');
      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
        return
      }

      // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.
      children.forEach(callPendingCbs);
      children.forEach(recordPosition);
      children.forEach(applyTranslation);

      // force reflow to put everything in position
      // assign to this to avoid being removed in tree-shaking
      // $flow-disable-line
      this._reflow = document.body.offsetHeight;

      children.forEach(function (c) {
        if (c.data.moved) {
          var el = c.elm;
          var s = el.style;
          addTransitionClass(el, moveClass);
          s.transform = s.WebkitTransform = s.transitionDuration = '';
          el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
            if (e && e.target !== el) {
              return
            }
            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener(transitionEndEvent, cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
        }
      });
    },

    methods: {
      hasMove: function hasMove (el, moveClass) {
        /* istanbul ignore if */
        if (!hasTransition) {
          return false
        }
        /* istanbul ignore if */
        if (this._hasMove) {
          return this._hasMove
        }
        // Detect whether an element with the move class applied has
        // CSS transitions. Since the element may be inside an entering
        // transition at this very moment, we make a clone of it and remove
        // all other transition classes applied to ensure only the move class
        // is applied.
        var clone = el.cloneNode();
        if (el._transitionClasses) {
          el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
        }
        addClass(clone, moveClass);
        clone.style.display = 'none';
        this.$el.appendChild(clone);
        var info = getTransitionInfo(clone);
        this.$el.removeChild(clone);
        return (this._hasMove = info.hasTransform)
      }
    }
  };

  function callPendingCbs (c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
      c.elm._moveCb();
    }
    /* istanbul ignore if */
    if (c.elm._enterCb) {
      c.elm._enterCb();
    }
  }

  function recordPosition (c) {
    c.data.newPos = c.elm.getBoundingClientRect();
  }

  function applyTranslation (c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;
    if (dx || dy) {
      c.data.moved = true;
      var s = c.elm.style;
      s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
      s.transitionDuration = '0s';
    }
  }

  var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
  };

  /*  */

  // install platform specific utils
  Vue.config.mustUseProp = mustUseProp;
  Vue.config.isReservedTag = isReservedTag;
  Vue.config.isReservedAttr = isReservedAttr;
  Vue.config.getTagNamespace = getTagNamespace;
  Vue.config.isUnknownElement = isUnknownElement;

  // install platform runtime directives & components
  extend(Vue.options.directives, platformDirectives);
  extend(Vue.options.components, platformComponents);

  // install platform patch function
  Vue.prototype.__patch__ = inBrowser ? patch : noop;

  // public mount method
  Vue.prototype.$mount = function (
    el,
    hydrating
  ) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating)
  };

  // devtools global hook
  /* istanbul ignore next */
  if (inBrowser) {
    setTimeout(function () {
      if (config.devtools) {
        if (devtools) {
          devtools.emit('init', Vue);
        } else {
          console[console.info ? 'info' : 'log'](
            'Download the Vue Devtools extension for a better development experience:\n' +
            'https://github.com/vuejs/vue-devtools'
          );
        }
      }
      if (config.productionTip !== false &&
        typeof console !== 'undefined'
      ) {
        console[console.info ? 'info' : 'log'](
          "You are running Vue in development mode.\n" +
          "Make sure to turn on production mode when deploying for production.\n" +
          "See more tips at https://vuejs.org/guide/deployment.html"
        );
      }
    }, 0);
  }

  /*  */

  var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

  var buildRegex = cached(function (delimiters) {
    var open = delimiters[0].replace(regexEscapeRE, '\\$&');
    var close = delimiters[1].replace(regexEscapeRE, '\\$&');
    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
  });



  function parseText (
    text,
    delimiters
  ) {
    var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
    if (!tagRE.test(text)) {
      return
    }
    var tokens = [];
    var rawTokens = [];
    var lastIndex = tagRE.lastIndex = 0;
    var match, index, tokenValue;
    while ((match = tagRE.exec(text))) {
      index = match.index;
      // push text token
      if (index > lastIndex) {
        rawTokens.push(tokenValue = text.slice(lastIndex, index));
        tokens.push(JSON.stringify(tokenValue));
      }
      // tag token
      var exp = parseFilters(match[1].trim());
      tokens.push(("_s(" + exp + ")"));
      rawTokens.push({ '@binding': exp });
      lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
      rawTokens.push(tokenValue = text.slice(lastIndex));
      tokens.push(JSON.stringify(tokenValue));
    }
    return {
      expression: tokens.join('+'),
      tokens: rawTokens
    }
  }

  /*  */

  function transformNode (el, options) {
    var warn = options.warn || baseWarn;
    var staticClass = getAndRemoveAttr(el, 'class');
    if (staticClass) {
      var res = parseText(staticClass, options.delimiters);
      if (res) {
        warn(
          "class=\"" + staticClass + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div class="{{ val }}">, use <div :class="val">.',
          el.rawAttrsMap['class']
        );
      }
    }
    if (staticClass) {
      el.staticClass = JSON.stringify(staticClass);
    }
    var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
    if (classBinding) {
      el.classBinding = classBinding;
    }
  }

  function genData (el) {
    var data = '';
    if (el.staticClass) {
      data += "staticClass:" + (el.staticClass) + ",";
    }
    if (el.classBinding) {
      data += "class:" + (el.classBinding) + ",";
    }
    return data
  }

  var klass$1 = {
    staticKeys: ['staticClass'],
    transformNode: transformNode,
    genData: genData
  };

  /*  */

  function transformNode$1 (el, options) {
    var warn = options.warn || baseWarn;
    var staticStyle = getAndRemoveAttr(el, 'style');
    if (staticStyle) {
      /* istanbul ignore if */
      {
        var res = parseText(staticStyle, options.delimiters);
        if (res) {
          warn(
            "style=\"" + staticStyle + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div style="{{ val }}">, use <div :style="val">.',
            el.rawAttrsMap['style']
          );
        }
      }
      el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
    }

    var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
    if (styleBinding) {
      el.styleBinding = styleBinding;
    }
  }

  function genData$1 (el) {
    var data = '';
    if (el.staticStyle) {
      data += "staticStyle:" + (el.staticStyle) + ",";
    }
    if (el.styleBinding) {
      data += "style:(" + (el.styleBinding) + "),";
    }
    return data
  }

  var style$1 = {
    staticKeys: ['staticStyle'],
    transformNode: transformNode$1,
    genData: genData$1
  };

  /*  */

  var decoder;

  var he = {
    decode: function decode (html) {
      decoder = decoder || document.createElement('div');
      decoder.innerHTML = html;
      return decoder.textContent
    }
  };

  /*  */

  var isUnaryTag = makeMap(
    'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
    'link,meta,param,source,track,wbr'
  );

  // Elements that you can, intentionally, leave open
  // (and which close themselves)
  var canBeLeftOpenTag = makeMap(
    'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
  );

  // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
  // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
  var isNonPhrasingTag = makeMap(
    'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
    'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
    'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
    'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
    'title,tr,track'
  );

  /**
   * Not type-checking this file because it's mostly vendor code.
   */

  // Regular Expressions for parsing tags and attributes
  var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
  var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
  var startTagOpen = new RegExp(("^<" + qnameCapture));
  var startTagClose = /^\s*(\/?)>/;
  var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
  var doctype = /^<!DOCTYPE [^>]+>/i;
  // #7298: escape - to avoid being passed as HTML comment when inlined in page
  var comment = /^<!\--/;
  var conditionalComment = /^<!\[/;

  // Special Elements (can contain anything)
  var isPlainTextElement = makeMap('script,style,textarea', true);
  var reCache = {};

  var decodingMap = {
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&amp;': '&',
    '&#10;': '\n',
    '&#9;': '\t',
    '&#39;': "'"
  };
  var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
  var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

  // #5992
  var isIgnoreNewlineTag = makeMap('pre,textarea', true);
  var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

  function decodeAttr (value, shouldDecodeNewlines) {
    var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
    return value.replace(re, function (match) { return decodingMap[match]; })
  }

  function parseHTML (html, options) {
    var stack = [];
    var expectHTML = options.expectHTML;
    var isUnaryTag$$1 = options.isUnaryTag || no;
    var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
    var index = 0;
    var last, lastTag;
    while (html) {
      last = html;
      // Make sure we're not in a plaintext content element like script/style
      if (!lastTag || !isPlainTextElement(lastTag)) {
        var textEnd = html.indexOf('<');
        if (textEnd === 0) {
          // Comment:
          if (comment.test(html)) {
            var commentEnd = html.indexOf('-->');

            if (commentEnd >= 0) {
              if (options.shouldKeepComment) {
                options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
              }
              advance(commentEnd + 3);
              continue
            }
          }

          // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
          if (conditionalComment.test(html)) {
            var conditionalEnd = html.indexOf(']>');

            if (conditionalEnd >= 0) {
              advance(conditionalEnd + 2);
              continue
            }
          }

          // Doctype:
          var doctypeMatch = html.match(doctype);
          if (doctypeMatch) {
            advance(doctypeMatch[0].length);
            continue
          }

          // End tag:
          var endTagMatch = html.match(endTag);
          if (endTagMatch) {
            var curIndex = index;
            advance(endTagMatch[0].length);
            parseEndTag(endTagMatch[1], curIndex, index);
            continue
          }

          // Start tag:
          var startTagMatch = parseStartTag();
          if (startTagMatch) {
            handleStartTag(startTagMatch);
            if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
              advance(1);
            }
            continue
          }
        }

        var text = (void 0), rest = (void 0), next = (void 0);
        if (textEnd >= 0) {
          rest = html.slice(textEnd);
          while (
            !endTag.test(rest) &&
            !startTagOpen.test(rest) &&
            !comment.test(rest) &&
            !conditionalComment.test(rest)
          ) {
            // < in plain text, be forgiving and treat it as text
            next = rest.indexOf('<', 1);
            if (next < 0) { break }
            textEnd += next;
            rest = html.slice(textEnd);
          }
          text = html.substring(0, textEnd);
        }

        if (textEnd < 0) {
          text = html;
        }

        if (text) {
          advance(text.length);
        }

        if (options.chars && text) {
          options.chars(text, index - text.length, index);
        }
      } else {
        var endTagLength = 0;
        var stackedTag = lastTag.toLowerCase();
        var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
        var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
          endTagLength = endTag.length;
          if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
            text = text
              .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
              .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
          }
          if (shouldIgnoreFirstNewline(stackedTag, text)) {
            text = text.slice(1);
          }
          if (options.chars) {
            options.chars(text);
          }
          return ''
        });
        index += html.length - rest$1.length;
        html = rest$1;
        parseEndTag(stackedTag, index - endTagLength, index);
      }

      if (html === last) {
        options.chars && options.chars(html);
        if (!stack.length && options.warn) {
          options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
        }
        break
      }
    }

    // Clean up any remaining tags
    parseEndTag();

    function advance (n) {
      index += n;
      html = html.substring(n);
    }

    function parseStartTag () {
      var start = html.match(startTagOpen);
      if (start) {
        var match = {
          tagName: start[1],
          attrs: [],
          start: index
        };
        advance(start[0].length);
        var end, attr;
        while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
          attr.start = index;
          advance(attr[0].length);
          attr.end = index;
          match.attrs.push(attr);
        }
        if (end) {
          match.unarySlash = end[1];
          advance(end[0].length);
          match.end = index;
          return match
        }
      }
    }

    function handleStartTag (match) {
      var tagName = match.tagName;
      var unarySlash = match.unarySlash;

      if (expectHTML) {
        if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
          parseEndTag(lastTag);
        }
        if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
          parseEndTag(tagName);
        }
      }

      var unary = isUnaryTag$$1(tagName) || !!unarySlash;

      var l = match.attrs.length;
      var attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        var args = match.attrs[i];
        var value = args[3] || args[4] || args[5] || '';
        var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
          ? options.shouldDecodeNewlinesForHref
          : options.shouldDecodeNewlines;
        attrs[i] = {
          name: args[1],
          value: decodeAttr(value, shouldDecodeNewlines)
        };
        if (options.outputSourceRange) {
          attrs[i].start = args.start + args[0].match(/^\s*/).length;
          attrs[i].end = args.end;
        }
      }

      if (!unary) {
        stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
        lastTag = tagName;
      }

      if (options.start) {
        options.start(tagName, attrs, unary, match.start, match.end);
      }
    }

    function parseEndTag (tagName, start, end) {
      var pos, lowerCasedTagName;
      if (start == null) { start = index; }
      if (end == null) { end = index; }

      // Find the closest opened tag of the same type
      if (tagName) {
        lowerCasedTagName = tagName.toLowerCase();
        for (pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos].lowerCasedTag === lowerCasedTagName) {
            break
          }
        }
      } else {
        // If no tag name is provided, clean shop
        pos = 0;
      }

      if (pos >= 0) {
        // Close all the open elements, up the stack
        for (var i = stack.length - 1; i >= pos; i--) {
          if (i > pos || !tagName &&
            options.warn
          ) {
            options.warn(
              ("tag <" + (stack[i].tag) + "> has no matching end tag."),
              { start: stack[i].start, end: stack[i].end }
            );
          }
          if (options.end) {
            options.end(stack[i].tag, start, end);
          }
        }

        // Remove the open elements from the stack
        stack.length = pos;
        lastTag = pos && stack[pos - 1].tag;
      } else if (lowerCasedTagName === 'br') {
        if (options.start) {
          options.start(tagName, [], true, start, end);
        }
      } else if (lowerCasedTagName === 'p') {
        if (options.start) {
          options.start(tagName, [], false, start, end);
        }
        if (options.end) {
          options.end(tagName, start, end);
        }
      }
    }
  }

  /*  */

  var onRE = /^@|^v-on:/;
  var dirRE = /^v-|^@|^:|^#/;
  var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  var stripParensRE = /^\(|\)$/g;
  var dynamicArgRE = /^\[.*\]$/;

  var argRE = /:(.*)$/;
  var bindRE = /^:|^\.|^v-bind:/;
  var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

  var slotRE = /^v-slot(:|$)|^#/;

  var lineBreakRE = /[\r\n]/;
  var whitespaceRE$1 = /\s+/g;

  var invalidAttributeRE = /[\s"'<>\/=]/;

  var decodeHTMLCached = cached(he.decode);

  var emptySlotScopeToken = "_empty_";

  // configurable state
  var warn$2;
  var delimiters;
  var transforms;
  var preTransforms;
  var postTransforms;
  var platformIsPreTag;
  var platformMustUseProp;
  var platformGetTagNamespace;
  var maybeComponent;

  function createASTElement (
    tag,
    attrs,
    parent
  ) {
    return {
      type: 1,
      tag: tag,
      attrsList: attrs,
      attrsMap: makeAttrsMap(attrs),
      rawAttrsMap: {},
      parent: parent,
      children: []
    }
  }

  /**
   * Convert HTML string to AST.
   */
  function parse (
    template,
    options
  ) {
    warn$2 = options.warn || baseWarn;

    platformIsPreTag = options.isPreTag || no;
    platformMustUseProp = options.mustUseProp || no;
    platformGetTagNamespace = options.getTagNamespace || no;
    var isReservedTag = options.isReservedTag || no;
    maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };

    transforms = pluckModuleFunction(options.modules, 'transformNode');
    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

    delimiters = options.delimiters;

    var stack = [];
    var preserveWhitespace = options.preserveWhitespace !== false;
    var whitespaceOption = options.whitespace;
    var root;
    var currentParent;
    var inVPre = false;
    var inPre = false;
    var warned = false;

    function warnOnce (msg, range) {
      if (!warned) {
        warned = true;
        warn$2(msg, range);
      }
    }

    function closeElement (element) {
      trimEndingWhitespace(element);
      if (!inVPre && !element.processed) {
        element = processElement(element, options);
      }
      // tree management
      if (!stack.length && element !== root) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          {
            checkRootConstraints(element);
          }
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead.",
            { start: element.start }
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else {
          if (element.slotScope) {
            // scoped slot
            // keep it in the children list so that v-else(-if) conditions can
            // find it as the prev node.
            var name = element.slotTarget || '"default"'
            ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
          }
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }

      // final children cleanup
      // filter out scoped slots
      element.children = element.children.filter(function (c) { return !(c).slotScope; });
      // remove trailing whitespace node again
      trimEndingWhitespace(element);

      // check pre state
      if (element.pre) {
        inVPre = false;
      }
      if (platformIsPreTag(element.tag)) {
        inPre = false;
      }
      // apply post-transforms
      for (var i = 0; i < postTransforms.length; i++) {
        postTransforms[i](element, options);
      }
    }

    function trimEndingWhitespace (el) {
      // remove trailing whitespace node
      if (!inPre) {
        var lastNode;
        while (
          (lastNode = el.children[el.children.length - 1]) &&
          lastNode.type === 3 &&
          lastNode.text === ' '
        ) {
          el.children.pop();
        }
      }
    }

    function checkRootConstraints (el) {
      if (el.tag === 'slot' || el.tag === 'template') {
        warnOnce(
          "Cannot use <" + (el.tag) + "> as component root element because it may " +
          'contain multiple nodes.',
          { start: el.start }
        );
      }
      if (el.attrsMap.hasOwnProperty('v-for')) {
        warnOnce(
          'Cannot use v-for on stateful component root element because ' +
          'it renders multiple elements.',
          el.rawAttrsMap['v-for']
        );
      }
    }

    parseHTML(template, {
      warn: warn$2,
      expectHTML: options.expectHTML,
      isUnaryTag: options.isUnaryTag,
      canBeLeftOpenTag: options.canBeLeftOpenTag,
      shouldDecodeNewlines: options.shouldDecodeNewlines,
      shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
      shouldKeepComment: options.comments,
      outputSourceRange: options.outputSourceRange,
      start: function start (tag, attrs, unary, start$1, end) {
        // check namespace.
        // inherit parent ns if there is one
        var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

        // handle IE svg bug
        /* istanbul ignore if */
        if (isIE && ns === 'svg') {
          attrs = guardIESVGBug(attrs);
        }

        var element = createASTElement(tag, attrs, currentParent);
        if (ns) {
          element.ns = ns;
        }

        {
          if (options.outputSourceRange) {
            element.start = start$1;
            element.end = end;
            element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
              cumulated[attr.name] = attr;
              return cumulated
            }, {});
          }
          attrs.forEach(function (attr) {
            if (invalidAttributeRE.test(attr.name)) {
              warn$2(
                "Invalid dynamic argument expression: attribute names cannot contain " +
                "spaces, quotes, <, >, / or =.",
                {
                  start: attr.start + attr.name.indexOf("["),
                  end: attr.start + attr.name.length
                }
              );
            }
          });
        }

        if (isForbiddenTag(element) && !isServerRendering()) {
          element.forbidden = true;
          warn$2(
            'Templates should only be responsible for mapping the state to the ' +
            'UI. Avoid placing tags with side-effects in your templates, such as ' +
            "<" + tag + ">" + ', as they will not be parsed.',
            { start: element.start }
          );
        }

        // apply pre-transforms
        for (var i = 0; i < preTransforms.length; i++) {
          element = preTransforms[i](element, options) || element;
        }

        if (!inVPre) {
          processPre(element);
          if (element.pre) {
            inVPre = true;
          }
        }
        if (platformIsPreTag(element.tag)) {
          inPre = true;
        }
        if (inVPre) {
          processRawAttrs(element);
        } else if (!element.processed) {
          // structural directives
          processFor(element);
          processIf(element);
          processOnce(element);
        }

        if (!root) {
          root = element;
          {
            checkRootConstraints(root);
          }
        }

        if (!unary) {
          currentParent = element;
          stack.push(element);
        } else {
          closeElement(element);
        }
      },

      end: function end (tag, start, end$1) {
        var element = stack[stack.length - 1];
        // pop stack
        stack.length -= 1;
        currentParent = stack[stack.length - 1];
        if (options.outputSourceRange) {
          element.end = end$1;
        }
        closeElement(element);
      },

      chars: function chars (text, start, end) {
        if (!currentParent) {
          {
            if (text === template) {
              warnOnce(
                'Component template requires a root element, rather than just text.',
                { start: start }
              );
            } else if ((text = text.trim())) {
              warnOnce(
                ("text \"" + text + "\" outside root element will be ignored."),
                { start: start }
              );
            }
          }
          return
        }
        // IE textarea placeholder bug
        /* istanbul ignore if */
        if (isIE &&
          currentParent.tag === 'textarea' &&
          currentParent.attrsMap.placeholder === text
        ) {
          return
        }
        var children = currentParent.children;
        if (inPre || text.trim()) {
          text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
        } else if (!children.length) {
          // remove the whitespace-only node right after an opening tag
          text = '';
        } else if (whitespaceOption) {
          if (whitespaceOption === 'condense') {
            // in condense mode, remove the whitespace node if it contains
            // line break, otherwise condense to a single space
            text = lineBreakRE.test(text) ? '' : ' ';
          } else {
            text = ' ';
          }
        } else {
          text = preserveWhitespace ? ' ' : '';
        }
        if (text) {
          if (!inPre && whitespaceOption === 'condense') {
            // condense consecutive whitespaces into single space
            text = text.replace(whitespaceRE$1, ' ');
          }
          var res;
          var child;
          if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
            child = {
              type: 2,
              expression: res.expression,
              tokens: res.tokens,
              text: text
            };
          } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
            child = {
              type: 3,
              text: text
            };
          }
          if (child) {
            if (options.outputSourceRange) {
              child.start = start;
              child.end = end;
            }
            children.push(child);
          }
        }
      },
      comment: function comment (text, start, end) {
        // adding anyting as a sibling to the root node is forbidden
        // comments should still be allowed, but ignored
        if (currentParent) {
          var child = {
            type: 3,
            text: text,
            isComment: true
          };
          if (options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }
          currentParent.children.push(child);
        }
      }
    });
    return root
  }

  function processPre (el) {
    if (getAndRemoveAttr(el, 'v-pre') != null) {
      el.pre = true;
    }
  }

  function processRawAttrs (el) {
    var list = el.attrsList;
    var len = list.length;
    if (len) {
      var attrs = el.attrs = new Array(len);
      for (var i = 0; i < len; i++) {
        attrs[i] = {
          name: list[i].name,
          value: JSON.stringify(list[i].value)
        };
        if (list[i].start != null) {
          attrs[i].start = list[i].start;
          attrs[i].end = list[i].end;
        }
      }
    } else if (!el.pre) {
      // non root node in pre blocks with no attributes
      el.plain = true;
    }
  }

  function processElement (
    element,
    options
  ) {
    processKey(element);

    // determine whether this is a plain element after
    // removing structural attributes
    element.plain = (
      !element.key &&
      !element.scopedSlots &&
      !element.attrsList.length
    );

    processRef(element);
    processSlotContent(element);
    processSlotOutlet(element);
    processComponent(element);
    for (var i = 0; i < transforms.length; i++) {
      element = transforms[i](element, options) || element;
    }
    processAttrs(element);
    return element
  }

  function processKey (el) {
    var exp = getBindingAttr(el, 'key');
    if (exp) {
      {
        if (el.tag === 'template') {
          warn$2(
            "<template> cannot be keyed. Place the key on real elements instead.",
            getRawBindingAttr(el, 'key')
          );
        }
        if (el.for) {
          var iterator = el.iterator2 || el.iterator1;
          var parent = el.parent;
          if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
            warn$2(
              "Do not use v-for index as key on <transition-group> children, " +
              "this is the same as not using keys.",
              getRawBindingAttr(el, 'key'),
              true /* tip */
            );
          }
        }
      }
      el.key = exp;
    }
  }

  function processRef (el) {
    var ref = getBindingAttr(el, 'ref');
    if (ref) {
      el.ref = ref;
      el.refInFor = checkInFor(el);
    }
  }

  function processFor (el) {
    var exp;
    if ((exp = getAndRemoveAttr(el, 'v-for'))) {
      var res = parseFor(exp);
      if (res) {
        extend(el, res);
      } else {
        warn$2(
          ("Invalid v-for expression: " + exp),
          el.rawAttrsMap['v-for']
        );
      }
    }
  }



  function parseFor (exp) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) { return }
    var res = {};
    res.for = inMatch[2].trim();
    var alias = inMatch[1].trim().replace(stripParensRE, '');
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      res.alias = alias.replace(forIteratorRE, '').trim();
      res.iterator1 = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.iterator2 = iteratorMatch[2].trim();
      }
    } else {
      res.alias = alias;
    }
    return res
  }

  function processIf (el) {
    var exp = getAndRemoveAttr(el, 'v-if');
    if (exp) {
      el.if = exp;
      addIfCondition(el, {
        exp: exp,
        block: el
      });
    } else {
      if (getAndRemoveAttr(el, 'v-else') != null) {
        el.else = true;
      }
      var elseif = getAndRemoveAttr(el, 'v-else-if');
      if (elseif) {
        el.elseif = elseif;
      }
    }
  }

  function processIfConditions (el, parent) {
    var prev = findPrevElement(parent.children);
    if (prev && prev.if) {
      addIfCondition(prev, {
        exp: el.elseif,
        block: el
      });
    } else {
      warn$2(
        "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
        "used on element <" + (el.tag) + "> without corresponding v-if.",
        el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
      );
    }
  }

  function findPrevElement (children) {
    var i = children.length;
    while (i--) {
      if (children[i].type === 1) {
        return children[i]
      } else {
        if (children[i].text !== ' ') {
          warn$2(
            "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
            "will be ignored.",
            children[i]
          );
        }
        children.pop();
      }
    }
  }

  function addIfCondition (el, condition) {
    if (!el.ifConditions) {
      el.ifConditions = [];
    }
    el.ifConditions.push(condition);
  }

  function processOnce (el) {
    var once$$1 = getAndRemoveAttr(el, 'v-once');
    if (once$$1 != null) {
      el.once = true;
    }
  }

  // handle content being passed to a component as slot,
  // e.g. <template slot="xxx">, <div slot-scope="xxx">
  function processSlotContent (el) {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if (slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          el.rawAttrsMap['scope'],
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if (el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          el.rawAttrsMap['slot-scope'],
          true
        );
      }
      el.slotScope = slotScope;
    }

    // slot="xxx"
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
      }
    }

    // 2.6 v-slot syntax
    {
      if (el.tag === 'template') {
        // v-slot on <template>
        var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
        if (slotBinding) {
          {
            if (el.slotTarget || el.slotScope) {
              warn$2(
                "Unexpected mixed usage of different slot syntaxes.",
                el
              );
            }
            if (el.parent && !maybeComponent(el.parent)) {
              warn$2(
                "<template v-slot> can only appear at the root level inside " +
                "the receiving component",
                el
              );
            }
          }
          var ref = getSlotName(slotBinding);
          var name = ref.name;
          var dynamic = ref.dynamic;
          el.slotTarget = name;
          el.slotTargetDynamic = dynamic;
          el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
        }
      } else {
        // v-slot on component, denotes default slot
        var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
        if (slotBinding$1) {
          {
            if (!maybeComponent(el)) {
              warn$2(
                "v-slot can only be used on components or <template>.",
                slotBinding$1
              );
            }
            if (el.slotScope || el.slotTarget) {
              warn$2(
                "Unexpected mixed usage of different slot syntaxes.",
                el
              );
            }
            if (el.scopedSlots) {
              warn$2(
                "To avoid scope ambiguity, the default slot should also use " +
                "<template> syntax when there are other named slots.",
                slotBinding$1
              );
            }
          }
          // add the component's children to its default slot
          var slots = el.scopedSlots || (el.scopedSlots = {});
          var ref$1 = getSlotName(slotBinding$1);
          var name$1 = ref$1.name;
          var dynamic$1 = ref$1.dynamic;
          var slotContainer = slots[name$1] = createASTElement('template', [], el);
          slotContainer.slotTarget = name$1;
          slotContainer.slotTargetDynamic = dynamic$1;
          slotContainer.children = el.children.filter(function (c) {
            if (!c.slotScope) {
              c.parent = slotContainer;
              return true
            }
          });
          slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
          // remove children as they are returned from scopedSlots now
          el.children = [];
          // mark el non-plain so data gets generated
          el.plain = false;
        }
      }
    }
  }

  function getSlotName (binding) {
    var name = binding.name.replace(slotRE, '');
    if (!name) {
      if (binding.name[0] !== '#') {
        name = 'default';
      } else {
        warn$2(
          "v-slot shorthand syntax requires a slot name.",
          binding
        );
      }
    }
    return dynamicArgRE.test(name)
      // dynamic [name]
      ? { name: name.slice(1, -1), dynamic: true }
      // static name
      : { name: ("\"" + name + "\""), dynamic: false }
  }

  // handle <slot/> outlets
  function processSlotOutlet (el) {
    if (el.tag === 'slot') {
      el.slotName = getBindingAttr(el, 'name');
      if (el.key) {
        warn$2(
          "`key` does not work on <slot> because slots are abstract outlets " +
          "and can possibly expand into multiple elements. " +
          "Use the key on a wrapping element instead.",
          getRawBindingAttr(el, 'key')
        );
      }
    }
  }

  function processComponent (el) {
    var binding;
    if ((binding = getBindingAttr(el, 'is'))) {
      el.component = binding;
    }
    if (getAndRemoveAttr(el, 'inline-template') != null) {
      el.inlineTemplate = true;
    }
  }

  function processAttrs (el) {
    var list = el.attrsList;
    var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
    for (i = 0, l = list.length; i < l; i++) {
      name = rawName = list[i].name;
      value = list[i].value;
      if (dirRE.test(name)) {
        // mark element as dynamic
        el.hasBindings = true;
        // modifiers
        modifiers = parseModifiers(name.replace(dirRE, ''));
        // support .foo shorthand syntax for the .prop modifier
        if (modifiers) {
          name = name.replace(modifierRE, '');
        }
        if (bindRE.test(name)) { // v-bind
          name = name.replace(bindRE, '');
          value = parseFilters(value);
          isDynamic = dynamicArgRE.test(name);
          if (isDynamic) {
            name = name.slice(1, -1);
          }
          if (
            value.trim().length === 0
          ) {
            warn$2(
              ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
            );
          }
          if (modifiers) {
            if (modifiers.prop && !isDynamic) {
              name = camelize(name);
              if (name === 'innerHtml') { name = 'innerHTML'; }
            }
            if (modifiers.camel && !isDynamic) {
              name = camelize(name);
            }
            if (modifiers.sync) {
              syncGen = genAssignmentCode(value, "$event");
              if (!isDynamic) {
                addHandler(
                  el,
                  ("update:" + (camelize(name))),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i]
                );
                if (hyphenate(name) !== camelize(name)) {
                  addHandler(
                    el,
                    ("update:" + (hyphenate(name))),
                    syncGen,
                    null,
                    false,
                    warn$2,
                    list[i]
                  );
                }
              } else {
                // handler w/ dynamic event name
                addHandler(
                  el,
                  ("\"update:\"+(" + name + ")"),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i],
                  true // dynamic
                );
              }
            }
          }
          if ((modifiers && modifiers.prop) || (
            !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
          )) {
            addProp(el, name, value, list[i], isDynamic);
          } else {
            addAttr(el, name, value, list[i], isDynamic);
          }
        } else if (onRE.test(name)) { // v-on
          name = name.replace(onRE, '');
          isDynamic = dynamicArgRE.test(name);
          if (isDynamic) {
            name = name.slice(1, -1);
          }
          addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
        } else { // normal directives
          name = name.replace(dirRE, '');
          // parse arg
          var argMatch = name.match(argRE);
          var arg = argMatch && argMatch[1];
          isDynamic = false;
          if (arg) {
            name = name.slice(0, -(arg.length + 1));
            if (dynamicArgRE.test(arg)) {
              arg = arg.slice(1, -1);
              isDynamic = true;
            }
          }
          addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
          if (name === 'model') {
            checkForAliasModel(el, value);
          }
        }
      } else {
        // literal attribute
        {
          var res = parseText(value, delimiters);
          if (res) {
            warn$2(
              name + "=\"" + value + "\": " +
              'Interpolation inside attributes has been removed. ' +
              'Use v-bind or the colon shorthand instead. For example, ' +
              'instead of <div id="{{ val }}">, use <div :id="val">.',
              list[i]
            );
          }
        }
        addAttr(el, name, JSON.stringify(value), list[i]);
        // #6887 firefox doesn't update muted state if set via attribute
        // even immediately after element creation
        if (!el.component &&
            name === 'muted' &&
            platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, 'true', list[i]);
        }
      }
    }
  }

  function checkInFor (el) {
    var parent = el;
    while (parent) {
      if (parent.for !== undefined) {
        return true
      }
      parent = parent.parent;
    }
    return false
  }

  function parseModifiers (name) {
    var match = name.match(modifierRE);
    if (match) {
      var ret = {};
      match.forEach(function (m) { ret[m.slice(1)] = true; });
      return ret
    }
  }

  function makeAttrsMap (attrs) {
    var map = {};
    for (var i = 0, l = attrs.length; i < l; i++) {
      if (
        map[attrs[i].name] && !isIE && !isEdge
      ) {
        warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
      }
      map[attrs[i].name] = attrs[i].value;
    }
    return map
  }

  // for script (e.g. type="x/template") or style, do not decode content
  function isTextTag (el) {
    return el.tag === 'script' || el.tag === 'style'
  }

  function isForbiddenTag (el) {
    return (
      el.tag === 'style' ||
      (el.tag === 'script' && (
        !el.attrsMap.type ||
        el.attrsMap.type === 'text/javascript'
      ))
    )
  }

  var ieNSBug = /^xmlns:NS\d+/;
  var ieNSPrefix = /^NS\d+:/;

  /* istanbul ignore next */
  function guardIESVGBug (attrs) {
    var res = [];
    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];
      if (!ieNSBug.test(attr.name)) {
        attr.name = attr.name.replace(ieNSPrefix, '');
        res.push(attr);
      }
    }
    return res
  }

  function checkForAliasModel (el, value) {
    var _el = el;
    while (_el) {
      if (_el.for && _el.alias === value) {
        warn$2(
          "<" + (el.tag) + " v-model=\"" + value + "\">: " +
          "You are binding v-model directly to a v-for iteration alias. " +
          "This will not be able to modify the v-for source array because " +
          "writing to the alias is like modifying a function local variable. " +
          "Consider using an array of objects and use v-model on an object property instead.",
          el.rawAttrsMap['v-model']
        );
      }
      _el = _el.parent;
    }
  }

  /*  */

  function preTransformNode (el, options) {
    if (el.tag === 'input') {
      var map = el.attrsMap;
      if (!map['v-model']) {
        return
      }

      var typeBinding;
      if (map[':type'] || map['v-bind:type']) {
        typeBinding = getBindingAttr(el, 'type');
      }
      if (!map.type && !typeBinding && map['v-bind']) {
        typeBinding = "(" + (map['v-bind']) + ").type";
      }

      if (typeBinding) {
        var ifCondition = getAndRemoveAttr(el, 'v-if', true);
        var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
        var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
        var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
        // 1. checkbox
        var branch0 = cloneASTElement(el);
        // process for on the main node
        processFor(branch0);
        addRawAttr(branch0, 'type', 'checkbox');
        processElement(branch0, options);
        branch0.processed = true; // prevent it from double-processed
        branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
        addIfCondition(branch0, {
          exp: branch0.if,
          block: branch0
        });
        // 2. add radio else-if condition
        var branch1 = cloneASTElement(el);
        getAndRemoveAttr(branch1, 'v-for', true);
        addRawAttr(branch1, 'type', 'radio');
        processElement(branch1, options);
        addIfCondition(branch0, {
          exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
          block: branch1
        });
        // 3. other
        var branch2 = cloneASTElement(el);
        getAndRemoveAttr(branch2, 'v-for', true);
        addRawAttr(branch2, ':type', typeBinding);
        processElement(branch2, options);
        addIfCondition(branch0, {
          exp: ifCondition,
          block: branch2
        });

        if (hasElse) {
          branch0.else = true;
        } else if (elseIfCondition) {
          branch0.elseif = elseIfCondition;
        }

        return branch0
      }
    }
  }

  function cloneASTElement (el) {
    return createASTElement(el.tag, el.attrsList.slice(), el.parent)
  }

  var model$1 = {
    preTransformNode: preTransformNode
  };

  var modules$1 = [
    klass$1,
    style$1,
    model$1
  ];

  /*  */

  function text (el, dir) {
    if (dir.value) {
      addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
    }
  }

  /*  */

  function html (el, dir) {
    if (dir.value) {
      addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
    }
  }

  var directives$1 = {
    model: model,
    text: text,
    html: html
  };

  /*  */

  var baseOptions = {
    expectHTML: true,
    modules: modules$1,
    directives: directives$1,
    isPreTag: isPreTag,
    isUnaryTag: isUnaryTag,
    mustUseProp: mustUseProp,
    canBeLeftOpenTag: canBeLeftOpenTag,
    isReservedTag: isReservedTag,
    getTagNamespace: getTagNamespace,
    staticKeys: genStaticKeys(modules$1)
  };

  /*  */

  var isStaticKey;
  var isPlatformReservedTag;

  var genStaticKeysCached = cached(genStaticKeys$1);

  /**
   * Goal of the optimizer: walk the generated template AST tree
   * and detect sub-trees that are purely static, i.e. parts of
   * the DOM that never needs to change.
   *
   * Once we detect these sub-trees, we can:
   *
   * 1. Hoist them into constants, so that we no longer need to
   *    create fresh nodes for them on each re-render;
   * 2. Completely skip them in the patching process.
   */
  function optimize (root, options) {
    if (!root) { return }
    isStaticKey = genStaticKeysCached(options.staticKeys || '');
    isPlatformReservedTag = options.isReservedTag || no;
    // first pass: mark all non-static nodes.
    markStatic$1(root);
    // second pass: mark static roots.
    markStaticRoots(root, false);
  }

  function genStaticKeys$1 (keys) {
    return makeMap(
      'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
      (keys ? ',' + keys : '')
    )
  }

  function markStatic$1 (node) {
    node.static = isStatic(node);
    if (node.type === 1) {
      // do not make component slot content static. this avoids
      // 1. components not able to mutate slot nodes
      // 2. static slot content fails for hot-reloading
      if (
        !isPlatformReservedTag(node.tag) &&
        node.tag !== 'slot' &&
        node.attrsMap['inline-template'] == null
      ) {
        return
      }
      for (var i = 0, l = node.children.length; i < l; i++) {
        var child = node.children[i];
        markStatic$1(child);
        if (!child.static) {
          node.static = false;
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          var block = node.ifConditions[i$1].block;
          markStatic$1(block);
          if (!block.static) {
            node.static = false;
          }
        }
      }
    }
  }

  function markStaticRoots (node, isInFor) {
    if (node.type === 1) {
      if (node.static || node.once) {
        node.staticInFor = isInFor;
      }
      // For a node to qualify as a static root, it should have children that
      // are not just static text. Otherwise the cost of hoisting out will
      // outweigh the benefits and it's better off to just always render it fresh.
      if (node.static && node.children.length && !(
        node.children.length === 1 &&
        node.children[0].type === 3
      )) {
        node.staticRoot = true;
        return
      } else {
        node.staticRoot = false;
      }
      if (node.children) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          markStaticRoots(node.children[i], isInFor || !!node.for);
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          markStaticRoots(node.ifConditions[i$1].block, isInFor);
        }
      }
    }
  }

  function isStatic (node) {
    if (node.type === 2) { // expression
      return false
    }
    if (node.type === 3) { // text
      return true
    }
    return !!(node.pre || (
      !node.hasBindings && // no dynamic bindings
      !node.if && !node.for && // not v-if or v-for or v-else
      !isBuiltInTag(node.tag) && // not a built-in
      isPlatformReservedTag(node.tag) && // not a component
      !isDirectChildOfTemplateFor(node) &&
      Object.keys(node).every(isStaticKey)
    ))
  }

  function isDirectChildOfTemplateFor (node) {
    while (node.parent) {
      node = node.parent;
      if (node.tag !== 'template') {
        return false
      }
      if (node.for) {
        return true
      }
    }
    return false
  }

  /*  */

  var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
  var fnInvokeRE = /\([^)]*?\);*$/;
  var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

  // KeyboardEvent.keyCode aliases
  var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    'delete': [8, 46]
  };

  // KeyboardEvent.key aliases
  var keyNames = {
    // #7880: IE11 and Edge use `Esc` for Escape key name.
    esc: ['Esc', 'Escape'],
    tab: 'Tab',
    enter: 'Enter',
    // #9112: IE11 uses `Spacebar` for Space key name.
    space: [' ', 'Spacebar'],
    // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
    up: ['Up', 'ArrowUp'],
    left: ['Left', 'ArrowLeft'],
    right: ['Right', 'ArrowRight'],
    down: ['Down', 'ArrowDown'],
    // #9112: IE11 uses `Del` for Delete key name.
    'delete': ['Backspace', 'Delete', 'Del']
  };

  // #4868: modifiers that prevent the execution of the listener
  // need to explicitly return null so that we can determine whether to remove
  // the listener for .once
  var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

  var modifierCode = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: genGuard("$event.target !== $event.currentTarget"),
    ctrl: genGuard("!$event.ctrlKey"),
    shift: genGuard("!$event.shiftKey"),
    alt: genGuard("!$event.altKey"),
    meta: genGuard("!$event.metaKey"),
    left: genGuard("'button' in $event && $event.button !== 0"),
    middle: genGuard("'button' in $event && $event.button !== 1"),
    right: genGuard("'button' in $event && $event.button !== 2")
  };

  function genHandlers (
    events,
    isNative
  ) {
    var prefix = isNative ? 'nativeOn:' : 'on:';
    var staticHandlers = "";
    var dynamicHandlers = "";
    for (var name in events) {
      var handlerCode = genHandler(events[name]);
      if (events[name] && events[name].dynamic) {
        dynamicHandlers += name + "," + handlerCode + ",";
      } else {
        staticHandlers += "\"" + name + "\":" + handlerCode + ",";
      }
    }
    staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
    if (dynamicHandlers) {
      return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
    } else {
      return prefix + staticHandlers
    }
  }

  function genHandler (handler) {
    if (!handler) {
      return 'function(){}'
    }

    if (Array.isArray(handler)) {
      return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
    }

    var isMethodPath = simplePathRE.test(handler.value);
    var isFunctionExpression = fnExpRE.test(handler.value);
    var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

    if (!handler.modifiers) {
      if (isMethodPath || isFunctionExpression) {
        return handler.value
      }
      return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
    } else {
      var code = '';
      var genModifierCode = '';
      var keys = [];
      for (var key in handler.modifiers) {
        if (modifierCode[key]) {
          genModifierCode += modifierCode[key];
          // left/right
          if (keyCodes[key]) {
            keys.push(key);
          }
        } else if (key === 'exact') {
          var modifiers = (handler.modifiers);
          genModifierCode += genGuard(
            ['ctrl', 'shift', 'alt', 'meta']
              .filter(function (keyModifier) { return !modifiers[keyModifier]; })
              .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
              .join('||')
          );
        } else {
          keys.push(key);
        }
      }
      if (keys.length) {
        code += genKeyFilter(keys);
      }
      // Make sure modifiers like prevent and stop get executed after key filtering
      if (genModifierCode) {
        code += genModifierCode;
      }
      var handlerCode = isMethodPath
        ? ("return " + (handler.value) + "($event)")
        : isFunctionExpression
          ? ("return (" + (handler.value) + ")($event)")
          : isFunctionInvocation
            ? ("return " + (handler.value))
            : handler.value;
      return ("function($event){" + code + handlerCode + "}")
    }
  }

  function genKeyFilter (keys) {
    return (
      // make sure the key filters only apply to KeyboardEvents
      // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
      // key events that do not have keyCode property...
      "if(!$event.type.indexOf('key')&&" +
      (keys.map(genFilterCode).join('&&')) + ")return null;"
    )
  }

  function genFilterCode (key) {
    var keyVal = parseInt(key, 10);
    if (keyVal) {
      return ("$event.keyCode!==" + keyVal)
    }
    var keyCode = keyCodes[key];
    var keyName = keyNames[key];
    return (
      "_k($event.keyCode," +
      (JSON.stringify(key)) + "," +
      (JSON.stringify(keyCode)) + "," +
      "$event.key," +
      "" + (JSON.stringify(keyName)) +
      ")"
    )
  }

  /*  */

  function on (el, dir) {
    if (dir.modifiers) {
      warn("v-on without argument does not support modifiers.");
    }
    el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
  }

  /*  */

  function bind$1 (el, dir) {
    el.wrapData = function (code) {
      return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
    };
  }

  /*  */

  var baseDirectives = {
    on: on,
    bind: bind$1,
    cloak: noop
  };

  /*  */





  var CodegenState = function CodegenState (options) {
    this.options = options;
    this.warn = options.warn || baseWarn;
    this.transforms = pluckModuleFunction(options.modules, 'transformCode');
    this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
    this.directives = extend(extend({}, baseDirectives), options.directives);
    var isReservedTag = options.isReservedTag || no;
    this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
    this.onceId = 0;
    this.staticRenderFns = [];
    this.pre = false;
  };



  function generate (
    ast,
    options
  ) {
    var state = new CodegenState(options);
    var code = ast ? genElement(ast, state) : '_c("div")';
    return {
      render: ("with(this){return " + code + "}"),
      staticRenderFns: state.staticRenderFns
    }
  }

  function genElement (el, state) {
    if (el.parent) {
      el.pre = el.pre || el.parent.pre;
    }

    if (el.staticRoot && !el.staticProcessed) {
      return genStatic(el, state)
    } else if (el.once && !el.onceProcessed) {
      return genOnce(el, state)
    } else if (el.for && !el.forProcessed) {
      return genFor(el, state)
    } else if (el.if && !el.ifProcessed) {
      return genIf(el, state)
    } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
      return genChildren(el, state) || 'void 0'
    } else if (el.tag === 'slot') {
      return genSlot(el, state)
    } else {
      // component or element
      var code;
      if (el.component) {
        code = genComponent(el.component, el, state);
      } else {
        var data;
        if (!el.plain || (el.pre && state.maybeComponent(el))) {
          data = genData$2(el, state);
        }

        var children = el.inlineTemplate ? null : genChildren(el, state, true);
        code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
      }
      // module transforms
      for (var i = 0; i < state.transforms.length; i++) {
        code = state.transforms[i](el, code);
      }
      return code
    }
  }

  // hoist static sub-trees out
  function genStatic (el, state) {
    el.staticProcessed = true;
    // Some elements (templates) need to behave differently inside of a v-pre
    // node.  All pre nodes are static roots, so we can use this as a location to
    // wrap a state change and reset it upon exiting the pre node.
    var originalPreState = state.pre;
    if (el.pre) {
      state.pre = el.pre;
    }
    state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
    state.pre = originalPreState;
    return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
  }

  // v-once
  function genOnce (el, state) {
    el.onceProcessed = true;
    if (el.if && !el.ifProcessed) {
      return genIf(el, state)
    } else if (el.staticInFor) {
      var key = '';
      var parent = el.parent;
      while (parent) {
        if (parent.for) {
          key = parent.key;
          break
        }
        parent = parent.parent;
      }
      if (!key) {
        state.warn(
          "v-once can only be used inside v-for that is keyed. ",
          el.rawAttrsMap['v-once']
        );
        return genElement(el, state)
      }
      return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
    } else {
      return genStatic(el, state)
    }
  }

  function genIf (
    el,
    state,
    altGen,
    altEmpty
  ) {
    el.ifProcessed = true; // avoid recursion
    return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
  }

  function genIfConditions (
    conditions,
    state,
    altGen,
    altEmpty
  ) {
    if (!conditions.length) {
      return altEmpty || '_e()'
    }

    var condition = conditions.shift();
    if (condition.exp) {
      return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
    } else {
      return ("" + (genTernaryExp(condition.block)))
    }

    // v-if with v-once should generate code like (a)?_m(0):_m(1)
    function genTernaryExp (el) {
      return altGen
        ? altGen(el, state)
        : el.once
          ? genOnce(el, state)
          : genElement(el, state)
    }
  }

  function genFor (
    el,
    state,
    altGen,
    altHelper
  ) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
    var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

    if (state.maybeComponent(el) &&
      el.tag !== 'slot' &&
      el.tag !== 'template' &&
      !el.key
    ) {
      state.warn(
        "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
        "v-for should have explicit keys. " +
        "See https://vuejs.org/guide/list.html#key for more info.",
        el.rawAttrsMap['v-for'],
        true /* tip */
      );
    }

    el.forProcessed = true; // avoid recursion
    return (altHelper || '_l') + "((" + exp + ")," +
      "function(" + alias + iterator1 + iterator2 + "){" +
        "return " + ((altGen || genElement)(el, state)) +
      '})'
  }

  function genData$2 (el, state) {
    var data = '{';

    // directives first.
    // directives may mutate the el's other properties before they are generated.
    var dirs = genDirectives(el, state);
    if (dirs) { data += dirs + ','; }

    // key
    if (el.key) {
      data += "key:" + (el.key) + ",";
    }
    // ref
    if (el.ref) {
      data += "ref:" + (el.ref) + ",";
    }
    if (el.refInFor) {
      data += "refInFor:true,";
    }
    // pre
    if (el.pre) {
      data += "pre:true,";
    }
    // record original tag name for components using "is" attribute
    if (el.component) {
      data += "tag:\"" + (el.tag) + "\",";
    }
    // module data generation functions
    for (var i = 0; i < state.dataGenFns.length; i++) {
      data += state.dataGenFns[i](el);
    }
    // attributes
    if (el.attrs) {
      data += "attrs:" + (genProps(el.attrs)) + ",";
    }
    // DOM props
    if (el.props) {
      data += "domProps:" + (genProps(el.props)) + ",";
    }
    // event handlers
    if (el.events) {
      data += (genHandlers(el.events, false)) + ",";
    }
    if (el.nativeEvents) {
      data += (genHandlers(el.nativeEvents, true)) + ",";
    }
    // slot target
    // only for non-scoped slots
    if (el.slotTarget && !el.slotScope) {
      data += "slot:" + (el.slotTarget) + ",";
    }
    // scoped slots
    if (el.scopedSlots) {
      data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
    }
    // component v-model
    if (el.model) {
      data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
    }
    // inline-template
    if (el.inlineTemplate) {
      var inlineTemplate = genInlineTemplate(el, state);
      if (inlineTemplate) {
        data += inlineTemplate + ",";
      }
    }
    data = data.replace(/,$/, '') + '}';
    // v-bind dynamic argument wrap
    // v-bind with dynamic arguments must be applied using the same v-bind object
    // merge helper so that class/style/mustUseProp attrs are handled correctly.
    if (el.dynamicAttrs) {
      data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
    }
    // v-bind data wrap
    if (el.wrapData) {
      data = el.wrapData(data);
    }
    // v-on data wrap
    if (el.wrapListeners) {
      data = el.wrapListeners(data);
    }
    return data
  }

  function genDirectives (el, state) {
    var dirs = el.directives;
    if (!dirs) { return }
    var res = 'directives:[';
    var hasRuntime = false;
    var i, l, dir, needRuntime;
    for (i = 0, l = dirs.length; i < l; i++) {
      dir = dirs[i];
      needRuntime = true;
      var gen = state.directives[dir.name];
      if (gen) {
        // compile-time directive that manipulates AST.
        // returns true if it also needs a runtime counterpart.
        needRuntime = !!gen(el, dir, state.warn);
      }
      if (needRuntime) {
        hasRuntime = true;
        res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
      }
    }
    if (hasRuntime) {
      return res.slice(0, -1) + ']'
    }
  }

  function genInlineTemplate (el, state) {
    var ast = el.children[0];
    if (el.children.length !== 1 || ast.type !== 1) {
      state.warn(
        'Inline-template components must have exactly one child element.',
        { start: el.start }
      );
    }
    if (ast && ast.type === 1) {
      var inlineRenderFns = generate(ast, state.options);
      return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
    }
  }

  function genScopedSlots (
    el,
    slots,
    state
  ) {
    // by default scoped slots are considered "stable", this allows child
    // components with only scoped slots to skip forced updates from parent.
    // but in some cases we have to bail-out of this optimization
    // for example if the slot contains dynamic names, has v-if or v-for on them...
    var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
      var slot = slots[key];
      return (
        slot.slotTargetDynamic ||
        slot.if ||
        slot.for ||
        containsSlotChild(slot) // is passing down slot from parent which may be dynamic
      )
    });

    // #9534: if a component with scoped slots is inside a conditional branch,
    // it's possible for the same component to be reused but with different
    // compiled slot content. To avoid that, we generate a unique key based on
    // the generated code of all the slot contents.
    var needsKey = !!el.if;

    // OR when it is inside another scoped slot or v-for (the reactivity may be
    // disconnected due to the intermediate scope variable)
    // #9438, #9506
    // TODO: this can be further optimized by properly analyzing in-scope bindings
    // and skip force updating ones that do not actually use scope variables.
    if (!needsForceUpdate) {
      var parent = el.parent;
      while (parent) {
        if (
          (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
          parent.for
        ) {
          needsForceUpdate = true;
          break
        }
        if (parent.if) {
          needsKey = true;
        }
        parent = parent.parent;
      }
    }

    var generatedSlots = Object.keys(slots)
      .map(function (key) { return genScopedSlot(slots[key], state); })
      .join(',');

    return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
  }

  function hash(str) {
    var hash = 5381;
    var i = str.length;
    while(i) {
      hash = (hash * 33) ^ str.charCodeAt(--i);
    }
    return hash >>> 0
  }

  function containsSlotChild (el) {
    if (el.type === 1) {
      if (el.tag === 'slot') {
        return true
      }
      return el.children.some(containsSlotChild)
    }
    return false
  }

  function genScopedSlot (
    el,
    state
  ) {
    var isLegacySyntax = el.attrsMap['slot-scope'];
    if (el.if && !el.ifProcessed && !isLegacySyntax) {
      return genIf(el, state, genScopedSlot, "null")
    }
    if (el.for && !el.forProcessed) {
      return genFor(el, state, genScopedSlot)
    }
    var slotScope = el.slotScope === emptySlotScopeToken
      ? ""
      : String(el.slotScope);
    var fn = "function(" + slotScope + "){" +
      "return " + (el.tag === 'template'
        ? el.if && isLegacySyntax
          ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
          : genChildren(el, state) || 'undefined'
        : genElement(el, state)) + "}";
    // reverse proxy v-slot without scope on this.$slots
    var reverseProxy = slotScope ? "" : ",proxy:true";
    return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
  }

  function genChildren (
    el,
    state,
    checkSkip,
    altGenElement,
    altGenNode
  ) {
    var children = el.children;
    if (children.length) {
      var el$1 = children[0];
      // optimize single v-for
      if (children.length === 1 &&
        el$1.for &&
        el$1.tag !== 'template' &&
        el$1.tag !== 'slot'
      ) {
        var normalizationType = checkSkip
          ? state.maybeComponent(el$1) ? ",1" : ",0"
          : "";
        return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
      }
      var normalizationType$1 = checkSkip
        ? getNormalizationType(children, state.maybeComponent)
        : 0;
      var gen = altGenNode || genNode;
      return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
    }
  }

  // determine the normalization needed for the children array.
  // 0: no normalization needed
  // 1: simple normalization needed (possible 1-level deep nested array)
  // 2: full normalization needed
  function getNormalizationType (
    children,
    maybeComponent
  ) {
    var res = 0;
    for (var i = 0; i < children.length; i++) {
      var el = children[i];
      if (el.type !== 1) {
        continue
      }
      if (needsNormalization(el) ||
          (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
        res = 2;
        break
      }
      if (maybeComponent(el) ||
          (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
        res = 1;
      }
    }
    return res
  }

  function needsNormalization (el) {
    return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
  }

  function genNode (node, state) {
    if (node.type === 1) {
      return genElement(node, state)
    } else if (node.type === 3 && node.isComment) {
      return genComment(node)
    } else {
      return genText(node)
    }
  }

  function genText (text) {
    return ("_v(" + (text.type === 2
      ? text.expression // no need for () because already wrapped in _s()
      : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
  }

  function genComment (comment) {
    return ("_e(" + (JSON.stringify(comment.text)) + ")")
  }

  function genSlot (el, state) {
    var slotName = el.slotName || '"default"';
    var children = genChildren(el, state);
    var res = "_t(" + slotName + (children ? ("," + children) : '');
    var attrs = el.attrs || el.dynamicAttrs
      ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
          // slot props are camelized
          name: camelize(attr.name),
          value: attr.value,
          dynamic: attr.dynamic
        }); }))
      : null;
    var bind$$1 = el.attrsMap['v-bind'];
    if ((attrs || bind$$1) && !children) {
      res += ",null";
    }
    if (attrs) {
      res += "," + attrs;
    }
    if (bind$$1) {
      res += (attrs ? '' : ',null') + "," + bind$$1;
    }
    return res + ')'
  }

  // componentName is el.component, take it as argument to shun flow's pessimistic refinement
  function genComponent (
    componentName,
    el,
    state
  ) {
    var children = el.inlineTemplate ? null : genChildren(el, state, true);
    return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
  }

  function genProps (props) {
    var staticProps = "";
    var dynamicProps = "";
    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      var value = transformSpecialNewlines(prop.value);
      if (prop.dynamic) {
        dynamicProps += (prop.name) + "," + value + ",";
      } else {
        staticProps += "\"" + (prop.name) + "\":" + value + ",";
      }
    }
    staticProps = "{" + (staticProps.slice(0, -1)) + "}";
    if (dynamicProps) {
      return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
    } else {
      return staticProps
    }
  }

  // #3895, #4268
  function transformSpecialNewlines (text) {
    return text
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029')
  }

  /*  */



  // these keywords should not appear inside expressions, but operators like
  // typeof, instanceof and in are allowed
  var prohibitedKeywordRE = new RegExp('\\b' + (
    'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
    'super,throw,while,yield,delete,export,import,return,switch,default,' +
    'extends,finally,continue,debugger,function,arguments'
  ).split(',').join('\\b|\\b') + '\\b');

  // these unary operators should not be used as property/method names
  var unaryOperatorsRE = new RegExp('\\b' + (
    'delete,typeof,void'
  ).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

  // strip strings in expressions
  var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

  // detect problematic expressions in a template
  function detectErrors (ast, warn) {
    if (ast) {
      checkNode(ast, warn);
    }
  }

  function checkNode (node, warn) {
    if (node.type === 1) {
      for (var name in node.attrsMap) {
        if (dirRE.test(name)) {
          var value = node.attrsMap[name];
          if (value) {
            var range = node.rawAttrsMap[name];
            if (name === 'v-for') {
              checkFor(node, ("v-for=\"" + value + "\""), warn, range);
            } else if (name === 'v-slot' || name[0] === '#') {
              checkFunctionParameterExpression(value, (name + "=\"" + value + "\""), warn, range);
            } else if (onRE.test(name)) {
              checkEvent(value, (name + "=\"" + value + "\""), warn, range);
            } else {
              checkExpression(value, (name + "=\"" + value + "\""), warn, range);
            }
          }
        }
      }
      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          checkNode(node.children[i], warn);
        }
      }
    } else if (node.type === 2) {
      checkExpression(node.expression, node.text, warn, node);
    }
  }

  function checkEvent (exp, text, warn, range) {
    var stripped = exp.replace(stripStringRE, '');
    var keywordMatch = stripped.match(unaryOperatorsRE);
    if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
      warn(
        "avoid using JavaScript unary operator as property name: " +
        "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
        range
      );
    }
    checkExpression(exp, text, warn, range);
  }

  function checkFor (node, text, warn, range) {
    checkExpression(node.for || '', text, warn, range);
    checkIdentifier(node.alias, 'v-for alias', text, warn, range);
    checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
    checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
  }

  function checkIdentifier (
    ident,
    type,
    text,
    warn,
    range
  ) {
    if (typeof ident === 'string') {
      try {
        new Function(("var " + ident + "=_"));
      } catch (e) {
        warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
      }
    }
  }

  function checkExpression (exp, text, warn, range) {
    try {
      new Function(("return " + exp));
    } catch (e) {
      var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
      if (keywordMatch) {
        warn(
          "avoid using JavaScript keyword as property name: " +
          "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
          range
        );
      } else {
        warn(
          "invalid expression: " + (e.message) + " in\n\n" +
          "    " + exp + "\n\n" +
          "  Raw expression: " + (text.trim()) + "\n",
          range
        );
      }
    }
  }

  function checkFunctionParameterExpression (exp, text, warn, range) {
    try {
      new Function(exp, '');
    } catch (e) {
      warn(
        "invalid function parameter expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n",
        range
      );
    }
  }

  /*  */

  var range = 2;

  function generateCodeFrame (
    source,
    start,
    end
  ) {
    if ( start === void 0 ) start = 0;
    if ( end === void 0 ) end = source.length;

    var lines = source.split(/\r?\n/);
    var count = 0;
    var res = [];
    for (var i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;
      if (count >= start) {
        for (var j = i - range; j <= i + range || end > count; j++) {
          if (j < 0 || j >= lines.length) { continue }
          res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
          var lineLength = lines[j].length;
          if (j === i) {
            // push underline
            var pad = start - (count - lineLength) + 1;
            var length = end > count ? lineLength - pad : end - start;
            res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
          } else if (j > i) {
            if (end > count) {
              var length$1 = Math.min(end - count, lineLength);
              res.push("   |  " + repeat$1("^", length$1));
            }
            count += lineLength + 1;
          }
        }
        break
      }
    }
    return res.join('\n')
  }

  function repeat$1 (str, n) {
    var result = '';
    if (n > 0) {
      while (true) { // eslint-disable-line
        if (n & 1) { result += str; }
        n >>>= 1;
        if (n <= 0) { break }
        str += str;
      }
    }
    return result
  }

  /*  */



  function createFunction (code, errors) {
    try {
      return new Function(code)
    } catch (err) {
      errors.push({ err: err, code: code });
      return noop
    }
  }

  function createCompileToFunctionFn (compile) {
    var cache = Object.create(null);

    return function compileToFunctions (
      template,
      options,
      vm
    ) {
      options = extend({}, options);
      var warn$$1 = options.warn || warn;
      delete options.warn;

      /* istanbul ignore if */
      {
        // detect possible CSP restriction
        try {
          new Function('return 1');
        } catch (e) {
          if (e.toString().match(/unsafe-eval|CSP/)) {
            warn$$1(
              'It seems you are using the standalone build of Vue.js in an ' +
              'environment with Content Security Policy that prohibits unsafe-eval. ' +
              'The template compiler cannot work in this environment. Consider ' +
              'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
              'templates into render functions.'
            );
          }
        }
      }

      // check cache
      var key = options.delimiters
        ? String(options.delimiters) + template
        : template;
      if (cache[key]) {
        return cache[key]
      }

      // compile
      var compiled = compile(template, options);

      // check compilation errors/tips
      {
        if (compiled.errors && compiled.errors.length) {
          if (options.outputSourceRange) {
            compiled.errors.forEach(function (e) {
              warn$$1(
                "Error compiling template:\n\n" + (e.msg) + "\n\n" +
                generateCodeFrame(template, e.start, e.end),
                vm
              );
            });
          } else {
            warn$$1(
              "Error compiling template:\n\n" + template + "\n\n" +
              compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
              vm
            );
          }
        }
        if (compiled.tips && compiled.tips.length) {
          if (options.outputSourceRange) {
            compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
          } else {
            compiled.tips.forEach(function (msg) { return tip(msg, vm); });
          }
        }
      }

      // turn code into functions
      var res = {};
      var fnGenErrors = [];
      res.render = createFunction(compiled.render, fnGenErrors);
      res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
        return createFunction(code, fnGenErrors)
      });

      // check function generation errors.
      // this should only happen if there is a bug in the compiler itself.
      // mostly for codegen development use
      /* istanbul ignore if */
      {
        if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
          warn$$1(
            "Failed to generate render function:\n\n" +
            fnGenErrors.map(function (ref) {
              var err = ref.err;
              var code = ref.code;

              return ((err.toString()) + " in\n\n" + code + "\n");
          }).join('\n'),
            vm
          );
        }
      }

      return (cache[key] = res)
    }
  }

  /*  */

  function createCompilerCreator (baseCompile) {
    return function createCompiler (baseOptions) {
      function compile (
        template,
        options
      ) {
        var finalOptions = Object.create(baseOptions);
        var errors = [];
        var tips = [];

        var warn = function (msg, range, tip) {
          (tip ? tips : errors).push(msg);
        };

        if (options) {
          if (options.outputSourceRange) {
            // $flow-disable-line
            var leadingSpaceLength = template.match(/^\s*/)[0].length;

            warn = function (msg, range, tip) {
              var data = { msg: msg };
              if (range) {
                if (range.start != null) {
                  data.start = range.start + leadingSpaceLength;
                }
                if (range.end != null) {
                  data.end = range.end + leadingSpaceLength;
                }
              }
              (tip ? tips : errors).push(data);
            };
          }
          // merge custom modules
          if (options.modules) {
            finalOptions.modules =
              (baseOptions.modules || []).concat(options.modules);
          }
          // merge custom directives
          if (options.directives) {
            finalOptions.directives = extend(
              Object.create(baseOptions.directives || null),
              options.directives
            );
          }
          // copy other options
          for (var key in options) {
            if (key !== 'modules' && key !== 'directives') {
              finalOptions[key] = options[key];
            }
          }
        }

        finalOptions.warn = warn;

        var compiled = baseCompile(template.trim(), finalOptions);
        {
          detectErrors(compiled.ast, warn);
        }
        compiled.errors = errors;
        compiled.tips = tips;
        return compiled
      }

      return {
        compile: compile,
        compileToFunctions: createCompileToFunctionFn(compile)
      }
    }
  }

  /*  */

  // `createCompilerCreator` allows creating compilers that use alternative
  // parser/optimizer/codegen, e.g the SSR optimizing compiler.
  // Here we just export a default compiler using the default parts.
  var createCompiler = createCompilerCreator(function baseCompile (
    template,
    options
  ) {
    var ast = parse(template.trim(), options);
    if (options.optimize !== false) {
      optimize(ast, options);
    }
    var code = generate(ast, options);
    return {
      ast: ast,
      render: code.render,
      staticRenderFns: code.staticRenderFns
    }
  });

  /*  */

  var ref$1 = createCompiler(baseOptions);
  var compile = ref$1.compile;
  var compileToFunctions = ref$1.compileToFunctions;

  /*  */

  // check whether current browser encodes a char inside attribute values
  var div;
  function getShouldDecode (href) {
    div = div || document.createElement('div');
    div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
    return div.innerHTML.indexOf('&#10;') > 0
  }

  // #3663: IE encodes newlines inside attribute values while other browsers don't
  var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
  // #6828: chrome encodes content in a[href]
  var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

  /*  */

  var idToTemplate = cached(function (id) {
    var el = query(id);
    return el && el.innerHTML
  });

  var mount = Vue.prototype.$mount;
  Vue.prototype.$mount = function (
    el,
    hydrating
  ) {
    el = el && query(el);

    /* istanbul ignore if */
    if (el === document.body || el === document.documentElement) {
      warn(
        "Do not mount Vue to <html> or <body> - mount to normal elements instead."
      );
      return this
    }

    var options = this.$options;
    // resolve template/el and convert to render function
    if (!options.render) {
      var template = options.template;
      if (template) {
        if (typeof template === 'string') {
          if (template.charAt(0) === '#') {
            template = idToTemplate(template);
            /* istanbul ignore if */
            if (!template) {
              warn(
                ("Template element not found or is empty: " + (options.template)),
                this
              );
            }
          }
        } else if (template.nodeType) {
          template = template.innerHTML;
        } else {
          {
            warn('invalid template option:' + template, this);
          }
          return this
        }
      } else if (el) {
        template = getOuterHTML(el);
      }
      if (template) {
        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile');
        }

        var ref = compileToFunctions(template, {
          outputSourceRange: "development" !== 'production',
          shouldDecodeNewlines: shouldDecodeNewlines,
          shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments
        }, this);
        var render = ref.render;
        var staticRenderFns = ref.staticRenderFns;
        options.render = render;
        options.staticRenderFns = staticRenderFns;

        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile end');
          measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
        }
      }
    }
    return mount.call(this, el, hydrating)
  };

  /**
   * Get outerHTML of elements, taking care
   * of SVG elements in IE as well.
   */
  function getOuterHTML (el) {
    if (el.outerHTML) {
      return el.outerHTML
    } else {
      var container = document.createElement('div');
      container.appendChild(el.cloneNode(true));
      return container.innerHTML
    }
  }

  Vue.compile = compileToFunctions;

  return Vue;

}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = _interopRequireDefault(__webpack_require__(/*! vue/dist/vue.js */ "./node_modules/vue/dist/vue.js"));

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n      <div class=\"fms-control-bar\">\n        <button @click=\"enableWorkspaces = !enableWorkspaces\">\n          <span>Toggle</span>\n        </button>\n      </div>\n      <div v-for=\"workspace in workspaces\" \n        class=\"fms-workspace\"\n        v-if=\"enableWorkspaces\"\n        :class=\"{ 'fms-workspace--active': editing === workspace.key }\"\n        :fms-workspace-id=\"workspace.key\"\n        :style=\"workspace.style\"\n        :key=\"workspace.key\"\n      >\n\n        <header class=\"fms-workspace-toolbar\"  v-if=\"editing !== workspace.key\">\n          <!-- Edit -->\n          <button class=\"fms-workspace-toolbar-button\" @click=\"edit(workspace.key)\">\n            <i class=\"fms-icon\">edit</i>\n            <span>{{workspace.key}}</span>\n          </button>\n        </header>\n\n        <header class=\"fms-workspace-toolbar\"  v-if=\"editing === workspace.key\">\n          <!-- Accept change -->\n          <button class=\"fms-workspace-toolbar-button\" v-if=\"editing === workspace.key\" @click=\"acceptChange(workspace.key)\">\n            <i class=\"fms-icon\">done</i>\n          </button>\n          <!-- Discard change -->\n          <button class=\"fms-workspace-toolbar-button\" v-if=\"editing === workspace.key\" @click=\"discardChange(workspace.key)\">\n            <i class=\"fms-icon\">close</i>\n          </button>\n        </header>\n\n      </div>\n    "], ["\n      <div class=\"fms-control-bar\">\n        <button @click=\"enableWorkspaces = !enableWorkspaces\">\n          <span>Toggle</span>\n        </button>\n      </div>\n      <div v-for=\"workspace in workspaces\" \n        class=\"fms-workspace\"\n        v-if=\"enableWorkspaces\"\n        :class=\"{ 'fms-workspace--active': editing === workspace.key }\"\n        :fms-workspace-id=\"workspace.key\"\n        :style=\"workspace.style\"\n        :key=\"workspace.key\"\n      >\n\n        <header class=\"fms-workspace-toolbar\"  v-if=\"editing !== workspace.key\">\n          <!-- Edit -->\n          <button class=\"fms-workspace-toolbar-button\" @click=\"edit(workspace.key)\">\n            <i class=\"fms-icon\">edit</i>\n            <span>{{workspace.key}}</span>\n          </button>\n        </header>\n\n        <header class=\"fms-workspace-toolbar\"  v-if=\"editing === workspace.key\">\n          <!-- Accept change -->\n          <button class=\"fms-workspace-toolbar-button\" v-if=\"editing === workspace.key\" @click=\"acceptChange(workspace.key)\">\n            <i class=\"fms-icon\">done</i>\n          </button>\n          <!-- Discard change -->\n          <button class=\"fms-workspace-toolbar-button\" v-if=\"editing === workspace.key\" @click=\"discardChange(workspace.key)\">\n            <i class=\"fms-icon\">close</i>\n          </button>\n        </header>\n\n      </div>\n    "]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(function () {
  // eslint-disable-next-line no-unused-vars
  var initOverlay;

  function singleLineString(strings) {
    var output = '';

    for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      values[_key - 1] = arguments[_key];
    }

    for (var i = 0; i < values.length; i++) {
      output += strings[i] + values[i];
    }

    output += strings[values.length];
    var lines = output.split(/(?:\r\n|\n|\r)/);
    return lines.map(function (line) {
      return line.replace(/^\s+/gm, '');
    }).join(' ').trim();
  }

  function initOverlayTemplate() {
    var template = singleLineString
    /* html */
    (_templateObject);
    var overlay = document.createElement('div');
    overlay.id = 'fms-overlay';
    document.body.appendChild(overlay);
    overlay.innerHTML = template;
  }

  initOverlayTemplate();
  initOverlay = new _vue.default({
    el: '#fms-overlay',
    data: {
      enableWorkspaces: true,
      DOMChangesListener: null,
      cacheInnerHTML: '',
      editing: '',
      workspaces: []
    },
    created: function created() {
      var _this = this;

      this.DOMChangesListener = new MutationObserver(function (changes) {
        _this.calcWorkspaces();
      });
      this.DOMChangesListener.observe(document.body, {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
        attributeOldValue: true,
        characterDataOldValue: true
      });
      window.addEventListener('resize', function () {
        _this.calcWorkspaces();
      });
    },
    methods: {
      calcWorkspaces: function calcWorkspaces() {
        var nodes = document.querySelectorAll('[fms-key]') || [];
        this.workspaces = [].concat(_toConsumableArray(nodes)).map(function (el) {
          var rect = (el.getClientRects() || [])[0] || {};
          return {
            key: el.getAttribute('fms-key'),
            style: {
              width: rect.width + 'px',
              height: rect.height + 'px',
              transform: "translate(".concat(rect.x, "px, ").concat(rect.y, "px)")
            }
          };
        });
      },
      selectText: function selectText(ele) {
        var range = document.createRange();
        range.selectNodeContents(ele);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      },
      edit: function edit(key) {
        this.editing = key;
        var element = document.querySelector("[fms-key=\"".concat(key, "\"]"));
        this.cacheInnerHTML = element.innerHTML;
        console.log(this.cacheInnerHTML);
      },
      acceptChange: function acceptChange(key) {
        this.editing = '';
        this.cacheInnerHTML = '';
        window.getSelection().removeAllRanges();
      },
      discardChange: function discardChange(key) {
        this.editing = '';
        var element = document.querySelector("[fms-key=\"".concat(key, "\"]"));
        element.innerHTML = this.cacheInnerHTML;
        this.cacheInnerHTML = '';
        window.getSelection().removeAllRanges();
      },
      toggleEditing: function toggleEditing(elementKey) {
        var nodes = document.querySelectorAll('[fms-key]') || [];
        nodes.forEach(function (el) {
          el.contentEditable = false;
        });
        var element = document.querySelector("[fms-key=\"".concat(elementKey, "\"]"));

        if (element) {
          element.contentEditable = true;
          element.focus();
          this.selectText(element);
        }
      }
    },
    watch: {
      editing: function editing(val) {
        this.toggleEditing(val);
      }
    }
  });
})();

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbXMtb3ZlcmxheS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZm1zLW92ZXJsYXkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm1zLW92ZXJsYXkvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL2Ztcy1vdmVybGF5Ly4vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vZm1zLW92ZXJsYXkvLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly9mbXMtb3ZlcmxheS8uL25vZGVfbW9kdWxlcy92dWUvZGlzdC92dWUuanMiLCJ3ZWJwYWNrOi8vZm1zLW92ZXJsYXkvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2Ztcy1vdmVybGF5Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImluaXRPdmVybGF5Iiwic2luZ2xlTGluZVN0cmluZyIsInN0cmluZ3MiLCJvdXRwdXQiLCJ2YWx1ZXMiLCJpIiwibGVuZ3RoIiwibGluZXMiLCJzcGxpdCIsIm1hcCIsImxpbmUiLCJyZXBsYWNlIiwiam9pbiIsInRyaW0iLCJpbml0T3ZlcmxheVRlbXBsYXRlIiwidGVtcGxhdGUiLCJvdmVybGF5IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJpbm5lckhUTUwiLCJlbCIsImRhdGEiLCJlbmFibGVXb3Jrc3BhY2VzIiwiRE9NQ2hhbmdlc0xpc3RlbmVyIiwiY2FjaGVJbm5lckhUTUwiLCJlZGl0aW5nIiwid29ya3NwYWNlcyIsImNyZWF0ZWQiLCJNdXRhdGlvbk9ic2VydmVyIiwiY2hhbmdlcyIsImNhbGNXb3Jrc3BhY2VzIiwib2JzZXJ2ZSIsImF0dHJpYnV0ZXMiLCJjaGFyYWN0ZXJEYXRhIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImF0dHJpYnV0ZU9sZFZhbHVlIiwiY2hhcmFjdGVyRGF0YU9sZFZhbHVlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1ldGhvZHMiLCJub2RlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZWN0IiwiZ2V0Q2xpZW50UmVjdHMiLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNmb3JtIiwieCIsInkiLCJzZWxlY3RUZXh0IiwiZWxlIiwicmFuZ2UiLCJjcmVhdGVSYW5nZSIsInNlbGVjdE5vZGVDb250ZW50cyIsInNlbCIsImdldFNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZWRpdCIsImVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29uc29sZSIsImxvZyIsImFjY2VwdENoYW5nZSIsImRpc2NhcmRDaGFuZ2UiLCJ0b2dnbGVFZGl0aW5nIiwiZWxlbWVudEtleSIsImZvckVhY2giLCJjb250ZW50RWRpdGFibGUiLCJmb2N1cyIsIndhdGNoIiwidmFsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sR0FBRztBQUNWO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLHlDQUF5Qyx3QkFBd0IsRUFBRTtBQUNuRSw0QkFBNEI7O0FBRTVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFlBQVk7QUFDdEMsb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsMENBQTBDLEVBQUU7QUFDNUM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsb0JBQW9CLEVBQUU7QUFDdkQ7QUFDQSxvQ0FBb0MsT0FBTztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsU0FBUyxxQkFBcUI7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE9BQU87QUFDNUM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsT0FBTztBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsT0FBTztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxTQUFTO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtDQUErQyxxQ0FBcUMsRUFB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Q0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVGQUF1RjtBQUM5RjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QztBQUM1QyxtQkFBbUIseUJBQXlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLCtCQUErQjtBQUNwQyxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHNCQUFzQixvQkFBb0I7QUFDMUMsd0JBQXdCLDRCQUE0QjtBQUNwRDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQiwyQkFBMkI7QUFDM0I7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsNkNBQTZDO0FBQ2hGO0FBQ0E7QUFDQSwrQ0FBK0MsNENBQTRDOztBQUUzRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTywyQ0FBMkMsOEJBQThCLEVBQUU7O0FBRWxGO0FBQ0EsMENBQTBDLE9BQU87QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxTQUFTO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCOztBQUU1QixvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIseUJBQXlCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHlCQUF5QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxPQUFPO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBCQUEwQjtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msb0JBQW9CLEVBQUU7O0FBRXREO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hELHVCQUF1QiwrQkFBK0I7QUFDdEQ7QUFDQTtBQUNBLEtBQUs7QUFDTCwyQkFBMkI7QUFDM0I7QUFDQSx3QkFBd0IsaUNBQWlDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9CQUFvQjtBQUMzQztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RTtBQUN4RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMsMkJBQTJCLEVBQUU7QUFDekUsT0FBTztBQUNQO0FBQ0EsNENBQTRDLDRCQUE0QixFQUFFO0FBQzFFLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsc0JBQXNCOztBQUV2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDOztBQUVsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixhQUFhO0FBQ25DO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGVBQWUsa0JBQWtCO0FBQ2pDO0FBQ0EsaUJBQWlCLG9CQUFvQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkRBQTZEO0FBQzdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIseUJBQXlCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSw4QkFBOEIsNEJBQTRCO0FBQzFELDhCQUE4QixnQ0FBZ0M7QUFDOUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxvQkFBb0I7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELFVBQVU7QUFDckUsbUJBQW1CLHdCQUF3QixPQUFPLHVCQUF1QjtBQUN6RTtBQUNBO0FBQ0EsbUJBQW1CLDJCQUEyQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtDQUErQztBQUMvQyxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVMsa0RBQWtEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxrREFBa0Q7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscUNBQXFDLGdFQUFnRTtBQUNyRztBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLFNBQVM7QUFDbEM7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdUJBQXVCLE9BQU8sZ0NBQWdDO0FBQ2pGLDBEQUEwRCxvQkFBb0I7QUFDOUU7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGdFQUFnRTtBQUM3RixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGlDQUFpQztBQUN0RTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxvQkFBb0I7QUFDakY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxnQ0FBZ0M7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix1QkFBdUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4Qiw2QkFBNkI7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix3QkFBd0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMseUJBQXlCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMseUJBQXlCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1Qiw4QkFBOEI7QUFDckQ7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxnQkFBZ0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGtCQUFrQjtBQUM1RCxPQUFPO0FBQ1AsMENBQTBDLGtCQUFrQjtBQUM1RCxPQUFPO0FBQ1AsMENBQTBDLDBCQUEwQjtBQUNwRSxPQUFPO0FBQ1AsMENBQTBDLGlCQUFpQjtBQUMzRCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxxQ0FBcUM7QUFDckMscUNBQXFDO0FBQ3JDLDZDQUE2QztBQUM3Qyw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCLDhCQUE4QjtBQUM5Qiw4QkFBOEI7QUFDOUIsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3QjtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxlQUFlLEVBQUUsdUJBQXVCLFVBQVUsRUFBRTtBQUN0RjtBQUNBOztBQUVBO0FBQ0EscURBQXFELDZDQUE2QztBQUNsRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDZDQUE2QztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQywyQkFBMkI7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZELEtBQUs7QUFDTCwyQ0FBMkM7QUFDM0M7O0FBRUEsbUNBQW1DLHdDQUF3QztBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxPQUFPO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxPQUFPO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMERBQTBELG1CQUFtQjtBQUM3RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixhQUFhO0FBQ3RDLHlCQUF5QixhQUFhO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1GQUFtRjtBQUNuRiw4QkFBOEI7QUFDOUI7QUFDQSw2QkFBNkI7QUFDN0IsMEJBQTBCLGlFQUFpRTtBQUMzRixjQUFjLDBGQUEwRjtBQUN4RyxRQUFRLEtBQUssMENBQTBDO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGtCQUFrQjtBQUNqRSx3QkFBd0IsK0NBQStDO0FBQ3ZFLG1EQUFtRDs7QUFFbkQ7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDJCQUEyQjtBQUN4RCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNkNBQTZDLEVBQUU7QUFDeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSx5Q0FBeUMsU0FBUztBQUNsRDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCw0QkFBNEIsRUFBRTtBQUNwRixPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCwrQkFBK0IsRUFBRTtBQUN2RixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGFBQWE7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELHlCQUF5QixFQUFFO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBLHdCQUF3QixFQUFFLGlCQUFpQixFQUFFO0FBQzdDLGlDQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7O0FBSUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isa0JBQWtCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsT0FBTztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsT0FBTztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNULFNBQVM7QUFDVCxXQUFXO0FBQ1gsVUFBVTtBQUNWLFVBQVU7QUFDVixTQUFTO0FBQ1QsVUFBVTtBQUNWO0FBQ0EsNkNBQTZDO0FBQzdDLGdFQUFnRTs7QUFFaEU7QUFDQTtBQUNBLHVEQUF1RCwyREFBMkQ7O0FBRWxIO0FBQ0E7QUFDQSwrQ0FBK0MsMkJBQTJCLEVBQUU7QUFDNUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0YsNkJBQTZCO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QjtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRTtBQUNsRTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLE9BQU87QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxvQkFBb0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUyw0QkFBNEI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxPQUFPO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx3QkFBd0IsRUFBRTtBQUM1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsT0FBTztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxXQUFXO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzVyWEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7Ozs7Ozs7Ozs7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QW9CLEtBQUtLLGNBQXpCO0FBQ0EsYUFBS0EsY0FBTCxHQUFzQixFQUF0QjtBQUNBYyxjQUFNLENBQUNxQixZQUFQLEdBQXNCQyxlQUF0QjtBQUNELE9BakRNO0FBbURQUyxtQkFuRE8seUJBbURPQyxVQW5EUCxFQW1EbUI7QUFDeEIsWUFBTTdCLEtBQUssR0FBRzNCLFFBQVEsQ0FBQzRCLGdCQUFULENBQTBCLFdBQTFCLEtBQTBDLEVBQXhEO0FBRUFELGFBQUssQ0FBQzhCLE9BQU4sQ0FBYyxVQUFBbkQsRUFBRSxFQUFJO0FBQ2xCQSxZQUFFLENBQUNvRCxlQUFILEdBQXFCLEtBQXJCO0FBQ0QsU0FGRDtBQUdBLFlBQU1ULE9BQU8sR0FBR2pELFFBQVEsQ0FBQ2tELGFBQVQsc0JBQW9DTSxVQUFwQyxTQUFoQjs7QUFFQSxZQUFJUCxPQUFKLEVBQWE7QUFDWEEsaUJBQU8sQ0FBQ1MsZUFBUixHQUEwQixJQUExQjtBQUNBVCxpQkFBTyxDQUFDVSxLQUFSO0FBQ0EsZUFBS3BCLFVBQUwsQ0FBZ0JVLE9BQWhCO0FBQ0Q7QUFDRjtBQWhFTSxLQWhDVztBQW9HcEJXLFNBQUssRUFBRTtBQUNMakQsYUFBTyxFQUFFLGlCQUFVa0QsR0FBVixFQUFlO0FBQ3RCLGFBQUtOLGFBQUwsQ0FBbUJNLEdBQW5CO0FBQ0Q7QUFISTtBQXBHYSxHQUFSLENBQWQ7QUEyR0QsQ0E3S0QsSSIsImZpbGUiOiJmbXMtb3ZlcmxheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZm1zLW92ZXJsYXlcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZm1zLW92ZXJsYXlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZm1zLW92ZXJsYXlcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCIvKiFcbiAqIFZ1ZS5qcyB2Mi42LjExXG4gKiAoYykgMjAxNC0yMDE5IEV2YW4gWW91XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuVnVlID0gZmFjdG9yeSgpKTtcbn0odGhpcywgZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgLyogICovXG5cbiAgdmFyIGVtcHR5T2JqZWN0ID0gT2JqZWN0LmZyZWV6ZSh7fSk7XG5cbiAgLy8gVGhlc2UgaGVscGVycyBwcm9kdWNlIGJldHRlciBWTSBjb2RlIGluIEpTIGVuZ2luZXMgZHVlIHRvIHRoZWlyXG4gIC8vIGV4cGxpY2l0bmVzcyBhbmQgZnVuY3Rpb24gaW5saW5pbmcuXG4gIGZ1bmN0aW9uIGlzVW5kZWYgKHYpIHtcbiAgICByZXR1cm4gdiA9PT0gdW5kZWZpbmVkIHx8IHYgPT09IG51bGxcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRGVmICh2KSB7XG4gICAgcmV0dXJuIHYgIT09IHVuZGVmaW5lZCAmJiB2ICE9PSBudWxsXG4gIH1cblxuICBmdW5jdGlvbiBpc1RydWUgKHYpIHtcbiAgICByZXR1cm4gdiA9PT0gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gaXNGYWxzZSAodikge1xuICAgIHJldHVybiB2ID09PSBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHZhbHVlIGlzIHByaW1pdGl2ZS5cbiAgICovXG4gIGZ1bmN0aW9uIGlzUHJpbWl0aXZlICh2YWx1ZSkge1xuICAgIHJldHVybiAoXG4gICAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8XG4gICAgICB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8XG4gICAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCcgfHxcbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIFF1aWNrIG9iamVjdCBjaGVjayAtIHRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgdG8gdGVsbFxuICAgKiBPYmplY3RzIGZyb20gcHJpbWl0aXZlIHZhbHVlcyB3aGVuIHdlIGtub3cgdGhlIHZhbHVlXG4gICAqIGlzIGEgSlNPTi1jb21wbGlhbnQgdHlwZS5cbiAgICovXG4gIGZ1bmN0aW9uIGlzT2JqZWN0IChvYmopIHtcbiAgICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnXG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSByYXcgdHlwZSBzdHJpbmcgb2YgYSB2YWx1ZSwgZS5nLiwgW29iamVjdCBPYmplY3RdLlxuICAgKi9cbiAgdmFyIF90b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbiAgZnVuY3Rpb24gdG9SYXdUeXBlICh2YWx1ZSkge1xuICAgIHJldHVybiBfdG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpXG4gIH1cblxuICAvKipcbiAgICogU3RyaWN0IG9iamVjdCB0eXBlIGNoZWNrLiBPbmx5IHJldHVybnMgdHJ1ZVxuICAgKiBmb3IgcGxhaW4gSmF2YVNjcmlwdCBvYmplY3RzLlxuICAgKi9cbiAgZnVuY3Rpb24gaXNQbGFpbk9iamVjdCAob2JqKSB7XG4gICAgcmV0dXJuIF90b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IE9iamVjdF0nXG4gIH1cblxuICBmdW5jdGlvbiBpc1JlZ0V4cCAodikge1xuICAgIHJldHVybiBfdG9TdHJpbmcuY2FsbCh2KSA9PT0gJ1tvYmplY3QgUmVnRXhwXSdcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB2YWwgaXMgYSB2YWxpZCBhcnJheSBpbmRleC5cbiAgICovXG4gIGZ1bmN0aW9uIGlzVmFsaWRBcnJheUluZGV4ICh2YWwpIHtcbiAgICB2YXIgbiA9IHBhcnNlRmxvYXQoU3RyaW5nKHZhbCkpO1xuICAgIHJldHVybiBuID49IDAgJiYgTWF0aC5mbG9vcihuKSA9PT0gbiAmJiBpc0Zpbml0ZSh2YWwpXG4gIH1cblxuICBmdW5jdGlvbiBpc1Byb21pc2UgKHZhbCkge1xuICAgIHJldHVybiAoXG4gICAgICBpc0RlZih2YWwpICYmXG4gICAgICB0eXBlb2YgdmFsLnRoZW4gPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIHR5cGVvZiB2YWwuY2F0Y2ggPT09ICdmdW5jdGlvbidcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBhIHZhbHVlIHRvIGEgc3RyaW5nIHRoYXQgaXMgYWN0dWFsbHkgcmVuZGVyZWQuXG4gICAqL1xuICBmdW5jdGlvbiB0b1N0cmluZyAodmFsKSB7XG4gICAgcmV0dXJuIHZhbCA9PSBudWxsXG4gICAgICA/ICcnXG4gICAgICA6IEFycmF5LmlzQXJyYXkodmFsKSB8fCAoaXNQbGFpbk9iamVjdCh2YWwpICYmIHZhbC50b1N0cmluZyA9PT0gX3RvU3RyaW5nKVxuICAgICAgICA/IEpTT04uc3RyaW5naWZ5KHZhbCwgbnVsbCwgMilcbiAgICAgICAgOiBTdHJpbmcodmFsKVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgYW4gaW5wdXQgdmFsdWUgdG8gYSBudW1iZXIgZm9yIHBlcnNpc3RlbmNlLlxuICAgKiBJZiB0aGUgY29udmVyc2lvbiBmYWlscywgcmV0dXJuIG9yaWdpbmFsIHN0cmluZy5cbiAgICovXG4gIGZ1bmN0aW9uIHRvTnVtYmVyICh2YWwpIHtcbiAgICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsKTtcbiAgICByZXR1cm4gaXNOYU4obikgPyB2YWwgOiBuXG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIG1hcCBhbmQgcmV0dXJuIGEgZnVuY3Rpb24gZm9yIGNoZWNraW5nIGlmIGEga2V5XG4gICAqIGlzIGluIHRoYXQgbWFwLlxuICAgKi9cbiAgZnVuY3Rpb24gbWFrZU1hcCAoXG4gICAgc3RyLFxuICAgIGV4cGVjdHNMb3dlckNhc2VcbiAgKSB7XG4gICAgdmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdmFyIGxpc3QgPSBzdHIuc3BsaXQoJywnKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIG1hcFtsaXN0W2ldXSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBleHBlY3RzTG93ZXJDYXNlXG4gICAgICA/IGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIG1hcFt2YWwudG9Mb3dlckNhc2UoKV07IH1cbiAgICAgIDogZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gbWFwW3ZhbF07IH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHRhZyBpcyBhIGJ1aWx0LWluIHRhZy5cbiAgICovXG4gIHZhciBpc0J1aWx0SW5UYWcgPSBtYWtlTWFwKCdzbG90LGNvbXBvbmVudCcsIHRydWUpO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgaXMgYSByZXNlcnZlZCBhdHRyaWJ1dGUuXG4gICAqL1xuICB2YXIgaXNSZXNlcnZlZEF0dHJpYnV0ZSA9IG1ha2VNYXAoJ2tleSxyZWYsc2xvdCxzbG90LXNjb3BlLGlzJyk7XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbiBpdGVtIGZyb20gYW4gYXJyYXkuXG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmUgKGFyciwgaXRlbSkge1xuICAgIGlmIChhcnIubGVuZ3RoKSB7XG4gICAgICB2YXIgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIHJldHVybiBhcnIuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB3aGV0aGVyIGFuIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5LlxuICAgKi9cbiAgdmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgZnVuY3Rpb24gaGFzT3duIChvYmosIGtleSkge1xuICAgIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGNhY2hlZCB2ZXJzaW9uIG9mIGEgcHVyZSBmdW5jdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGNhY2hlZCAoZm4pIHtcbiAgICB2YXIgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiAoZnVuY3Rpb24gY2FjaGVkRm4gKHN0cikge1xuICAgICAgdmFyIGhpdCA9IGNhY2hlW3N0cl07XG4gICAgICByZXR1cm4gaGl0IHx8IChjYWNoZVtzdHJdID0gZm4oc3RyKSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIENhbWVsaXplIGEgaHlwaGVuLWRlbGltaXRlZCBzdHJpbmcuXG4gICAqL1xuICB2YXIgY2FtZWxpemVSRSA9IC8tKFxcdykvZztcbiAgdmFyIGNhbWVsaXplID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgZnVuY3Rpb24gKF8sIGMpIHsgcmV0dXJuIGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJzsgfSlcbiAgfSk7XG5cbiAgLyoqXG4gICAqIENhcGl0YWxpemUgYSBzdHJpbmcuXG4gICAqL1xuICB2YXIgY2FwaXRhbGl6ZSA9IGNhY2hlZChmdW5jdGlvbiAoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKVxuICB9KTtcblxuICAvKipcbiAgICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAgICovXG4gIHZhciBoeXBoZW5hdGVSRSA9IC9cXEIoW0EtWl0pL2c7XG4gIHZhciBoeXBoZW5hdGUgPSBjYWNoZWQoZnVuY3Rpb24gKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZShoeXBoZW5hdGVSRSwgJy0kMScpLnRvTG93ZXJDYXNlKClcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFNpbXBsZSBiaW5kIHBvbHlmaWxsIGZvciBlbnZpcm9ubWVudHMgdGhhdCBkbyBub3Qgc3VwcG9ydCBpdCxcbiAgICogZS5nLiwgUGhhbnRvbUpTIDEueC4gVGVjaG5pY2FsbHksIHdlIGRvbid0IG5lZWQgdGhpcyBhbnltb3JlXG4gICAqIHNpbmNlIG5hdGl2ZSBiaW5kIGlzIG5vdyBwZXJmb3JtYW50IGVub3VnaCBpbiBtb3N0IGJyb3dzZXJzLlxuICAgKiBCdXQgcmVtb3ZpbmcgaXQgd291bGQgbWVhbiBicmVha2luZyBjb2RlIHRoYXQgd2FzIGFibGUgdG8gcnVuIGluXG4gICAqIFBoYW50b21KUyAxLngsIHNvIHRoaXMgbXVzdCBiZSBrZXB0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LlxuICAgKi9cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBmdW5jdGlvbiBwb2x5ZmlsbEJpbmQgKGZuLCBjdHgpIHtcbiAgICBmdW5jdGlvbiBib3VuZEZuIChhKSB7XG4gICAgICB2YXIgbCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICByZXR1cm4gbFxuICAgICAgICA/IGwgPiAxXG4gICAgICAgICAgPyBmbi5hcHBseShjdHgsIGFyZ3VtZW50cylcbiAgICAgICAgICA6IGZuLmNhbGwoY3R4LCBhKVxuICAgICAgICA6IGZuLmNhbGwoY3R4KVxuICAgIH1cblxuICAgIGJvdW5kRm4uX2xlbmd0aCA9IGZuLmxlbmd0aDtcbiAgICByZXR1cm4gYm91bmRGblxuICB9XG5cbiAgZnVuY3Rpb24gbmF0aXZlQmluZCAoZm4sIGN0eCkge1xuICAgIHJldHVybiBmbi5iaW5kKGN0eClcbiAgfVxuXG4gIHZhciBiaW5kID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbiAgICA/IG5hdGl2ZUJpbmRcbiAgICA6IHBvbHlmaWxsQmluZDtcblxuICAvKipcbiAgICogQ29udmVydCBhbiBBcnJheS1saWtlIG9iamVjdCB0byBhIHJlYWwgQXJyYXkuXG4gICAqL1xuICBmdW5jdGlvbiB0b0FycmF5IChsaXN0LCBzdGFydCkge1xuICAgIHN0YXJ0ID0gc3RhcnQgfHwgMDtcbiAgICB2YXIgaSA9IGxpc3QubGVuZ3RoIC0gc3RhcnQ7XG4gICAgdmFyIHJldCA9IG5ldyBBcnJheShpKTtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICByZXRbaV0gPSBsaXN0W2kgKyBzdGFydF07XG4gICAgfVxuICAgIHJldHVybiByZXRcbiAgfVxuXG4gIC8qKlxuICAgKiBNaXggcHJvcGVydGllcyBpbnRvIHRhcmdldCBvYmplY3QuXG4gICAqL1xuICBmdW5jdGlvbiBleHRlbmQgKHRvLCBfZnJvbSkge1xuICAgIGZvciAodmFyIGtleSBpbiBfZnJvbSkge1xuICAgICAgdG9ba2V5XSA9IF9mcm9tW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0b1xuICB9XG5cbiAgLyoqXG4gICAqIE1lcmdlIGFuIEFycmF5IG9mIE9iamVjdHMgaW50byBhIHNpbmdsZSBPYmplY3QuXG4gICAqL1xuICBmdW5jdGlvbiB0b09iamVjdCAoYXJyKSB7XG4gICAgdmFyIHJlcyA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYXJyW2ldKSB7XG4gICAgICAgIGV4dGVuZChyZXMsIGFycltpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gbm8gb3BlcmF0aW9uLlxuICAgKiBTdHViYmluZyBhcmdzIHRvIG1ha2UgRmxvdyBoYXBweSB3aXRob3V0IGxlYXZpbmcgdXNlbGVzcyB0cmFuc3BpbGVkIGNvZGVcbiAgICogd2l0aCAuLi5yZXN0IChodHRwczovL2Zsb3cub3JnL2Jsb2cvMjAxNy8wNS8wNy9TdHJpY3QtRnVuY3Rpb24tQ2FsbC1Bcml0eS8pLlxuICAgKi9cbiAgZnVuY3Rpb24gbm9vcCAoYSwgYiwgYykge31cblxuICAvKipcbiAgICogQWx3YXlzIHJldHVybiBmYWxzZS5cbiAgICovXG4gIHZhciBubyA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7IHJldHVybiBmYWxzZTsgfTtcblxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgc2FtZSB2YWx1ZS5cbiAgICovXG4gIHZhciBpZGVudGl0eSA9IGZ1bmN0aW9uIChfKSB7IHJldHVybiBfOyB9O1xuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBhIHN0cmluZyBjb250YWluaW5nIHN0YXRpYyBrZXlzIGZyb20gY29tcGlsZXIgbW9kdWxlcy5cbiAgICovXG4gIGZ1bmN0aW9uIGdlblN0YXRpY0tleXMgKG1vZHVsZXMpIHtcbiAgICByZXR1cm4gbW9kdWxlcy5yZWR1Y2UoZnVuY3Rpb24gKGtleXMsIG0pIHtcbiAgICAgIHJldHVybiBrZXlzLmNvbmNhdChtLnN0YXRpY0tleXMgfHwgW10pXG4gICAgfSwgW10pLmpvaW4oJywnKVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHR3byB2YWx1ZXMgYXJlIGxvb3NlbHkgZXF1YWwgLSB0aGF0IGlzLFxuICAgKiBpZiB0aGV5IGFyZSBwbGFpbiBvYmplY3RzLCBkbyB0aGV5IGhhdmUgdGhlIHNhbWUgc2hhcGU/XG4gICAqL1xuICBmdW5jdGlvbiBsb29zZUVxdWFsIChhLCBiKSB7XG4gICAgaWYgKGEgPT09IGIpIHsgcmV0dXJuIHRydWUgfVxuICAgIHZhciBpc09iamVjdEEgPSBpc09iamVjdChhKTtcbiAgICB2YXIgaXNPYmplY3RCID0gaXNPYmplY3QoYik7XG4gICAgaWYgKGlzT2JqZWN0QSAmJiBpc09iamVjdEIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBpc0FycmF5QSA9IEFycmF5LmlzQXJyYXkoYSk7XG4gICAgICAgIHZhciBpc0FycmF5QiA9IEFycmF5LmlzQXJyYXkoYik7XG4gICAgICAgIGlmIChpc0FycmF5QSAmJiBpc0FycmF5Qikge1xuICAgICAgICAgIHJldHVybiBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgYS5ldmVyeShmdW5jdGlvbiAoZSwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIGxvb3NlRXF1YWwoZSwgYltpXSlcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKGEgaW5zdGFuY2VvZiBEYXRlICYmIGIgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKVxuICAgICAgICB9IGVsc2UgaWYgKCFpc0FycmF5QSAmJiAhaXNBcnJheUIpIHtcbiAgICAgICAgICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhhKTtcbiAgICAgICAgICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhiKTtcbiAgICAgICAgICByZXR1cm4ga2V5c0EubGVuZ3RoID09PSBrZXlzQi5sZW5ndGggJiYga2V5c0EuZXZlcnkoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGxvb3NlRXF1YWwoYVtrZXldLCBiW2tleV0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWlzT2JqZWN0QSAmJiAhaXNPYmplY3RCKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGEpID09PSBTdHJpbmcoYilcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgZmlyc3QgaW5kZXggYXQgd2hpY2ggYSBsb29zZWx5IGVxdWFsIHZhbHVlIGNhbiBiZVxuICAgKiBmb3VuZCBpbiB0aGUgYXJyYXkgKGlmIHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0LCB0aGUgYXJyYXkgbXVzdFxuICAgKiBjb250YWluIGFuIG9iamVjdCBvZiB0aGUgc2FtZSBzaGFwZSksIG9yIC0xIGlmIGl0IGlzIG5vdCBwcmVzZW50LlxuICAgKi9cbiAgZnVuY3Rpb24gbG9vc2VJbmRleE9mIChhcnIsIHZhbCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobG9vc2VFcXVhbChhcnJbaV0sIHZhbCkpIHsgcmV0dXJuIGkgfVxuICAgIH1cbiAgICByZXR1cm4gLTFcbiAgfVxuXG4gIC8qKlxuICAgKiBFbnN1cmUgYSBmdW5jdGlvbiBpcyBjYWxsZWQgb25seSBvbmNlLlxuICAgKi9cbiAgZnVuY3Rpb24gb25jZSAoZm4pIHtcbiAgICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIFNTUl9BVFRSID0gJ2RhdGEtc2VydmVyLXJlbmRlcmVkJztcblxuICB2YXIgQVNTRVRfVFlQRVMgPSBbXG4gICAgJ2NvbXBvbmVudCcsXG4gICAgJ2RpcmVjdGl2ZScsXG4gICAgJ2ZpbHRlcidcbiAgXTtcblxuICB2YXIgTElGRUNZQ0xFX0hPT0tTID0gW1xuICAgICdiZWZvcmVDcmVhdGUnLFxuICAgICdjcmVhdGVkJyxcbiAgICAnYmVmb3JlTW91bnQnLFxuICAgICdtb3VudGVkJyxcbiAgICAnYmVmb3JlVXBkYXRlJyxcbiAgICAndXBkYXRlZCcsXG4gICAgJ2JlZm9yZURlc3Ryb3knLFxuICAgICdkZXN0cm95ZWQnLFxuICAgICdhY3RpdmF0ZWQnLFxuICAgICdkZWFjdGl2YXRlZCcsXG4gICAgJ2Vycm9yQ2FwdHVyZWQnLFxuICAgICdzZXJ2ZXJQcmVmZXRjaCdcbiAgXTtcblxuICAvKiAgKi9cblxuXG5cbiAgdmFyIGNvbmZpZyA9ICh7XG4gICAgLyoqXG4gICAgICogT3B0aW9uIG1lcmdlIHN0cmF0ZWdpZXMgKHVzZWQgaW4gY29yZS91dGlsL29wdGlvbnMpXG4gICAgICovXG4gICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgb3B0aW9uTWVyZ2VTdHJhdGVnaWVzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byBzdXBwcmVzcyB3YXJuaW5ncy5cbiAgICAgKi9cbiAgICBzaWxlbnQ6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgICogU2hvdyBwcm9kdWN0aW9uIG1vZGUgdGlwIG1lc3NhZ2Ugb24gYm9vdD9cbiAgICAgKi9cbiAgICBwcm9kdWN0aW9uVGlwOiBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gZW5hYmxlIGRldnRvb2xzXG4gICAgICovXG4gICAgZGV2dG9vbHM6IFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nLFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byByZWNvcmQgcGVyZlxuICAgICAqL1xuICAgIHBlcmZvcm1hbmNlOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICAqIEVycm9yIGhhbmRsZXIgZm9yIHdhdGNoZXIgZXJyb3JzXG4gICAgICovXG4gICAgZXJyb3JIYW5kbGVyOiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogV2FybiBoYW5kbGVyIGZvciB3YXRjaGVyIHdhcm5zXG4gICAgICovXG4gICAgd2FybkhhbmRsZXI6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBJZ25vcmUgY2VydGFpbiBjdXN0b20gZWxlbWVudHNcbiAgICAgKi9cbiAgICBpZ25vcmVkRWxlbWVudHM6IFtdLFxuXG4gICAgLyoqXG4gICAgICogQ3VzdG9tIHVzZXIga2V5IGFsaWFzZXMgZm9yIHYtb25cbiAgICAgKi9cbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICBrZXlDb2RlczogT2JqZWN0LmNyZWF0ZShudWxsKSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGEgdGFnIGlzIHJlc2VydmVkIHNvIHRoYXQgaXQgY2Fubm90IGJlIHJlZ2lzdGVyZWQgYXMgYVxuICAgICAqIGNvbXBvbmVudC4gVGhpcyBpcyBwbGF0Zm9ybS1kZXBlbmRlbnQgYW5kIG1heSBiZSBvdmVyd3JpdHRlbi5cbiAgICAgKi9cbiAgICBpc1Jlc2VydmVkVGFnOiBubyxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBpcyByZXNlcnZlZCBzbyB0aGF0IGl0IGNhbm5vdCBiZSB1c2VkIGFzIGEgY29tcG9uZW50XG4gICAgICogcHJvcC4gVGhpcyBpcyBwbGF0Zm9ybS1kZXBlbmRlbnQgYW5kIG1heSBiZSBvdmVyd3JpdHRlbi5cbiAgICAgKi9cbiAgICBpc1Jlc2VydmVkQXR0cjogbm8sXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhIHRhZyBpcyBhbiB1bmtub3duIGVsZW1lbnQuXG4gICAgICogUGxhdGZvcm0tZGVwZW5kZW50LlxuICAgICAqL1xuICAgIGlzVW5rbm93bkVsZW1lbnQ6IG5vLFxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBuYW1lc3BhY2Ugb2YgYW4gZWxlbWVudFxuICAgICAqL1xuICAgIGdldFRhZ05hbWVzcGFjZTogbm9vcCxcblxuICAgIC8qKlxuICAgICAqIFBhcnNlIHRoZSByZWFsIHRhZyBuYW1lIGZvciB0aGUgc3BlY2lmaWMgcGxhdGZvcm0uXG4gICAgICovXG4gICAgcGFyc2VQbGF0Zm9ybVRhZ05hbWU6IGlkZW50aXR5LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG11c3QgYmUgYm91bmQgdXNpbmcgcHJvcGVydHksIGUuZy4gdmFsdWVcbiAgICAgKiBQbGF0Zm9ybS1kZXBlbmRlbnQuXG4gICAgICovXG4gICAgbXVzdFVzZVByb3A6IG5vLFxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybSB1cGRhdGVzIGFzeW5jaHJvbm91c2x5LiBJbnRlbmRlZCB0byBiZSB1c2VkIGJ5IFZ1ZSBUZXN0IFV0aWxzXG4gICAgICogVGhpcyB3aWxsIHNpZ25pZmljYW50bHkgcmVkdWNlIHBlcmZvcm1hbmNlIGlmIHNldCB0byBmYWxzZS5cbiAgICAgKi9cbiAgICBhc3luYzogdHJ1ZSxcblxuICAgIC8qKlxuICAgICAqIEV4cG9zZWQgZm9yIGxlZ2FjeSByZWFzb25zXG4gICAgICovXG4gICAgX2xpZmVjeWNsZUhvb2tzOiBMSUZFQ1lDTEVfSE9PS1NcbiAgfSk7XG5cbiAgLyogICovXG5cbiAgLyoqXG4gICAqIHVuaWNvZGUgbGV0dGVycyB1c2VkIGZvciBwYXJzaW5nIGh0bWwgdGFncywgY29tcG9uZW50IG5hbWVzIGFuZCBwcm9wZXJ0eSBwYXRocy5cbiAgICogdXNpbmcgaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1My9zZW1hbnRpY3Mtc2NyaXB0aW5nLmh0bWwjcG90ZW50aWFsY3VzdG9tZWxlbWVudG5hbWVcbiAgICogc2tpcHBpbmcgXFx1MTAwMDAtXFx1RUZGRkYgZHVlIHRvIGl0IGZyZWV6aW5nIHVwIFBoYW50b21KU1xuICAgKi9cbiAgdmFyIHVuaWNvZGVSZWdFeHAgPSAvYS16QS1aXFx1MDBCN1xcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwM0YtXFx1MjA0MFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRC87XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgc3RyaW5nIHN0YXJ0cyB3aXRoICQgb3IgX1xuICAgKi9cbiAgZnVuY3Rpb24gaXNSZXNlcnZlZCAoc3RyKSB7XG4gICAgdmFyIGMgPSAoc3RyICsgJycpLmNoYXJDb2RlQXQoMCk7XG4gICAgcmV0dXJuIGMgPT09IDB4MjQgfHwgYyA9PT0gMHg1RlxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZSBhIHByb3BlcnR5LlxuICAgKi9cbiAgZnVuY3Rpb24gZGVmIChvYmosIGtleSwgdmFsLCBlbnVtZXJhYmxlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsLFxuICAgICAgZW51bWVyYWJsZTogISFlbnVtZXJhYmxlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBzaW1wbGUgcGF0aC5cbiAgICovXG4gIHZhciBiYWlsUkUgPSBuZXcgUmVnRXhwKChcIlteXCIgKyAodW5pY29kZVJlZ0V4cC5zb3VyY2UpICsgXCIuJF9cXFxcZF1cIikpO1xuICBmdW5jdGlvbiBwYXJzZVBhdGggKHBhdGgpIHtcbiAgICBpZiAoYmFpbFJFLnRlc3QocGF0aCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgc2VnbWVudHMgPSBwYXRoLnNwbGl0KCcuJyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFvYmopIHsgcmV0dXJuIH1cbiAgICAgICAgb2JqID0gb2JqW3NlZ21lbnRzW2ldXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmpcbiAgICB9XG4gIH1cblxuICAvKiAgKi9cblxuICAvLyBjYW4gd2UgdXNlIF9fcHJvdG9fXz9cbiAgdmFyIGhhc1Byb3RvID0gJ19fcHJvdG9fXycgaW4ge307XG5cbiAgLy8gQnJvd3NlciBlbnZpcm9ubWVudCBzbmlmZmluZ1xuICB2YXIgaW5Ccm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG4gIHZhciBpbldlZXggPSB0eXBlb2YgV1hFbnZpcm9ubWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgISFXWEVudmlyb25tZW50LnBsYXRmb3JtO1xuICB2YXIgd2VleFBsYXRmb3JtID0gaW5XZWV4ICYmIFdYRW52aXJvbm1lbnQucGxhdGZvcm0udG9Mb3dlckNhc2UoKTtcbiAgdmFyIFVBID0gaW5Ccm93c2VyICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gIHZhciBpc0lFID0gVUEgJiYgL21zaWV8dHJpZGVudC8udGVzdChVQSk7XG4gIHZhciBpc0lFOSA9IFVBICYmIFVBLmluZGV4T2YoJ21zaWUgOS4wJykgPiAwO1xuICB2YXIgaXNFZGdlID0gVUEgJiYgVUEuaW5kZXhPZignZWRnZS8nKSA+IDA7XG4gIHZhciBpc0FuZHJvaWQgPSAoVUEgJiYgVUEuaW5kZXhPZignYW5kcm9pZCcpID4gMCkgfHwgKHdlZXhQbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnKTtcbiAgdmFyIGlzSU9TID0gKFVBICYmIC9pcGhvbmV8aXBhZHxpcG9kfGlvcy8udGVzdChVQSkpIHx8ICh3ZWV4UGxhdGZvcm0gPT09ICdpb3MnKTtcbiAgdmFyIGlzQ2hyb21lID0gVUEgJiYgL2Nocm9tZVxcL1xcZCsvLnRlc3QoVUEpICYmICFpc0VkZ2U7XG4gIHZhciBpc1BoYW50b21KUyA9IFVBICYmIC9waGFudG9tanMvLnRlc3QoVUEpO1xuICB2YXIgaXNGRiA9IFVBICYmIFVBLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLyk7XG5cbiAgLy8gRmlyZWZveCBoYXMgYSBcIndhdGNoXCIgZnVuY3Rpb24gb24gT2JqZWN0LnByb3RvdHlwZS4uLlxuICB2YXIgbmF0aXZlV2F0Y2ggPSAoe30pLndhdGNoO1xuXG4gIHZhciBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcbiAgaWYgKGluQnJvd3Nlcikge1xuICAgIHRyeSB7XG4gICAgICB2YXIgb3B0cyA9IHt9O1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9wdHMsICdwYXNzaXZlJywgKHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQgKCkge1xuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkpOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMjg1XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdC1wYXNzaXZlJywgbnVsbCwgb3B0cyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuXG4gIC8vIHRoaXMgbmVlZHMgdG8gYmUgbGF6eS1ldmFsZWQgYmVjYXVzZSB2dWUgbWF5IGJlIHJlcXVpcmVkIGJlZm9yZVxuICAvLyB2dWUtc2VydmVyLXJlbmRlcmVyIGNhbiBzZXQgVlVFX0VOVlxuICB2YXIgX2lzU2VydmVyO1xuICB2YXIgaXNTZXJ2ZXJSZW5kZXJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKF9pc1NlcnZlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghaW5Ccm93c2VyICYmICFpbldlZXggJiYgdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gZGV0ZWN0IHByZXNlbmNlIG9mIHZ1ZS1zZXJ2ZXItcmVuZGVyZXIgYW5kIGF2b2lkXG4gICAgICAgIC8vIFdlYnBhY2sgc2hpbW1pbmcgdGhlIHByb2Nlc3NcbiAgICAgICAgX2lzU2VydmVyID0gZ2xvYmFsWydwcm9jZXNzJ10gJiYgZ2xvYmFsWydwcm9jZXNzJ10uZW52LlZVRV9FTlYgPT09ICdzZXJ2ZXInO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2lzU2VydmVyID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBfaXNTZXJ2ZXJcbiAgfTtcblxuICAvLyBkZXRlY3QgZGV2dG9vbHNcbiAgdmFyIGRldnRvb2xzID0gaW5Ccm93c2VyICYmIHdpbmRvdy5fX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fO1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGZ1bmN0aW9uIGlzTmF0aXZlIChDdG9yKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBDdG9yID09PSAnZnVuY3Rpb24nICYmIC9uYXRpdmUgY29kZS8udGVzdChDdG9yLnRvU3RyaW5nKCkpXG4gIH1cblxuICB2YXIgaGFzU3ltYm9sID1cbiAgICB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShTeW1ib2wpICYmXG4gICAgdHlwZW9mIFJlZmxlY3QgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFJlZmxlY3Qub3duS2V5cyk7XG5cbiAgdmFyIF9TZXQ7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqLyAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGVvZiBTZXQgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFNldCkpIHtcbiAgICAvLyB1c2UgbmF0aXZlIFNldCB3aGVuIGF2YWlsYWJsZS5cbiAgICBfU2V0ID0gU2V0O1xuICB9IGVsc2Uge1xuICAgIC8vIGEgbm9uLXN0YW5kYXJkIFNldCBwb2x5ZmlsbCB0aGF0IG9ubHkgd29ya3Mgd2l0aCBwcmltaXRpdmUga2V5cy5cbiAgICBfU2V0ID0gLypAX19QVVJFX18qLyhmdW5jdGlvbiAoKSB7XG4gICAgICBmdW5jdGlvbiBTZXQgKCkge1xuICAgICAgICB0aGlzLnNldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICB9XG4gICAgICBTZXQucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIGhhcyAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFtrZXldID09PSB0cnVlXG4gICAgICB9O1xuICAgICAgU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQgKGtleSkge1xuICAgICAgICB0aGlzLnNldFtrZXldID0gdHJ1ZTtcbiAgICAgIH07XG4gICAgICBTZXQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIgKCkge1xuICAgICAgICB0aGlzLnNldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gU2V0O1xuICAgIH0oKSk7XG4gIH1cblxuICAvKiAgKi9cblxuICB2YXIgd2FybiA9IG5vb3A7XG4gIHZhciB0aXAgPSBub29wO1xuICB2YXIgZ2VuZXJhdGVDb21wb25lbnRUcmFjZSA9IChub29wKTsgLy8gd29yayBhcm91bmQgZmxvdyBjaGVja1xuICB2YXIgZm9ybWF0Q29tcG9uZW50TmFtZSA9IChub29wKTtcblxuICB7XG4gICAgdmFyIGhhc0NvbnNvbGUgPSB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgdmFyIGNsYXNzaWZ5UkUgPSAvKD86XnxbLV9dKShcXHcpL2c7XG4gICAgdmFyIGNsYXNzaWZ5ID0gZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gc3RyXG4gICAgICAucmVwbGFjZShjbGFzc2lmeVJFLCBmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50b1VwcGVyQ2FzZSgpOyB9KVxuICAgICAgLnJlcGxhY2UoL1stX10vZywgJycpOyB9O1xuXG4gICAgd2FybiA9IGZ1bmN0aW9uIChtc2csIHZtKSB7XG4gICAgICB2YXIgdHJhY2UgPSB2bSA/IGdlbmVyYXRlQ29tcG9uZW50VHJhY2Uodm0pIDogJyc7XG5cbiAgICAgIGlmIChjb25maWcud2FybkhhbmRsZXIpIHtcbiAgICAgICAgY29uZmlnLndhcm5IYW5kbGVyLmNhbGwobnVsbCwgbXNnLCB2bSwgdHJhY2UpO1xuICAgICAgfSBlbHNlIGlmIChoYXNDb25zb2xlICYmICghY29uZmlnLnNpbGVudCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcigoXCJbVnVlIHdhcm5dOiBcIiArIG1zZyArIHRyYWNlKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRpcCA9IGZ1bmN0aW9uIChtc2csIHZtKSB7XG4gICAgICBpZiAoaGFzQ29uc29sZSAmJiAoIWNvbmZpZy5zaWxlbnQpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIltWdWUgdGlwXTogXCIgKyBtc2cgKyAoXG4gICAgICAgICAgdm0gPyBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlKHZtKSA6ICcnXG4gICAgICAgICkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmb3JtYXRDb21wb25lbnROYW1lID0gZnVuY3Rpb24gKHZtLCBpbmNsdWRlRmlsZSkge1xuICAgICAgaWYgKHZtLiRyb290ID09PSB2bSkge1xuICAgICAgICByZXR1cm4gJzxSb290PidcbiAgICAgIH1cbiAgICAgIHZhciBvcHRpb25zID0gdHlwZW9mIHZtID09PSAnZnVuY3Rpb24nICYmIHZtLmNpZCAhPSBudWxsXG4gICAgICAgID8gdm0ub3B0aW9uc1xuICAgICAgICA6IHZtLl9pc1Z1ZVxuICAgICAgICAgID8gdm0uJG9wdGlvbnMgfHwgdm0uY29uc3RydWN0b3Iub3B0aW9uc1xuICAgICAgICAgIDogdm07XG4gICAgICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSB8fCBvcHRpb25zLl9jb21wb25lbnRUYWc7XG4gICAgICB2YXIgZmlsZSA9IG9wdGlvbnMuX19maWxlO1xuICAgICAgaWYgKCFuYW1lICYmIGZpbGUpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gZmlsZS5tYXRjaCgvKFteL1xcXFxdKylcXC52dWUkLyk7XG4gICAgICAgIG5hbWUgPSBtYXRjaCAmJiBtYXRjaFsxXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG5hbWUgPyAoXCI8XCIgKyAoY2xhc3NpZnkobmFtZSkpICsgXCI+XCIpIDogXCI8QW5vbnltb3VzPlwiKSArXG4gICAgICAgIChmaWxlICYmIGluY2x1ZGVGaWxlICE9PSBmYWxzZSA/IChcIiBhdCBcIiArIGZpbGUpIDogJycpXG4gICAgICApXG4gICAgfTtcblxuICAgIHZhciByZXBlYXQgPSBmdW5jdGlvbiAoc3RyLCBuKSB7XG4gICAgICB2YXIgcmVzID0gJyc7XG4gICAgICB3aGlsZSAobikge1xuICAgICAgICBpZiAobiAlIDIgPT09IDEpIHsgcmVzICs9IHN0cjsgfVxuICAgICAgICBpZiAobiA+IDEpIHsgc3RyICs9IHN0cjsgfVxuICAgICAgICBuID4+PSAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc1xuICAgIH07XG5cbiAgICBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlID0gZnVuY3Rpb24gKHZtKSB7XG4gICAgICBpZiAodm0uX2lzVnVlICYmIHZtLiRwYXJlbnQpIHtcbiAgICAgICAgdmFyIHRyZWUgPSBbXTtcbiAgICAgICAgdmFyIGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZSA9IDA7XG4gICAgICAgIHdoaWxlICh2bSkge1xuICAgICAgICAgIGlmICh0cmVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBsYXN0ID0gdHJlZVt0cmVlLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgaWYgKGxhc3QuY29uc3RydWN0b3IgPT09IHZtLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZSsrO1xuICAgICAgICAgICAgICB2bSA9IHZtLiRwYXJlbnQ7XG4gICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZSA+IDApIHtcbiAgICAgICAgICAgICAgdHJlZVt0cmVlLmxlbmd0aCAtIDFdID0gW2xhc3QsIGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZV07XG4gICAgICAgICAgICAgIGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRyZWUucHVzaCh2bSk7XG4gICAgICAgICAgdm0gPSB2bS4kcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnXFxuXFxuZm91bmQgaW5cXG5cXG4nICsgdHJlZVxuICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHZtLCBpKSB7IHJldHVybiAoXCJcIiArIChpID09PSAwID8gJy0tLT4gJyA6IHJlcGVhdCgnICcsIDUgKyBpICogMikpICsgKEFycmF5LmlzQXJyYXkodm0pXG4gICAgICAgICAgICAgID8gKChmb3JtYXRDb21wb25lbnROYW1lKHZtWzBdKSkgKyBcIi4uLiAoXCIgKyAodm1bMV0pICsgXCIgcmVjdXJzaXZlIGNhbGxzKVwiKVxuICAgICAgICAgICAgICA6IGZvcm1hdENvbXBvbmVudE5hbWUodm0pKSk7IH0pXG4gICAgICAgICAgLmpvaW4oJ1xcbicpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFwiXFxuXFxuKGZvdW5kIGluIFwiICsgKGZvcm1hdENvbXBvbmVudE5hbWUodm0pKSArIFwiKVwiKVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKiAgKi9cblxuICB2YXIgdWlkID0gMDtcblxuICAvKipcbiAgICogQSBkZXAgaXMgYW4gb2JzZXJ2YWJsZSB0aGF0IGNhbiBoYXZlIG11bHRpcGxlXG4gICAqIGRpcmVjdGl2ZXMgc3Vic2NyaWJpbmcgdG8gaXQuXG4gICAqL1xuICB2YXIgRGVwID0gZnVuY3Rpb24gRGVwICgpIHtcbiAgICB0aGlzLmlkID0gdWlkKys7XG4gICAgdGhpcy5zdWJzID0gW107XG4gIH07XG5cbiAgRGVwLnByb3RvdHlwZS5hZGRTdWIgPSBmdW5jdGlvbiBhZGRTdWIgKHN1Yikge1xuICAgIHRoaXMuc3Vicy5wdXNoKHN1Yik7XG4gIH07XG5cbiAgRGVwLnByb3RvdHlwZS5yZW1vdmVTdWIgPSBmdW5jdGlvbiByZW1vdmVTdWIgKHN1Yikge1xuICAgIHJlbW92ZSh0aGlzLnN1YnMsIHN1Yik7XG4gIH07XG5cbiAgRGVwLnByb3RvdHlwZS5kZXBlbmQgPSBmdW5jdGlvbiBkZXBlbmQgKCkge1xuICAgIGlmIChEZXAudGFyZ2V0KSB7XG4gICAgICBEZXAudGFyZ2V0LmFkZERlcCh0aGlzKTtcbiAgICB9XG4gIH07XG5cbiAgRGVwLnByb3RvdHlwZS5ub3RpZnkgPSBmdW5jdGlvbiBub3RpZnkgKCkge1xuICAgIC8vIHN0YWJpbGl6ZSB0aGUgc3Vic2NyaWJlciBsaXN0IGZpcnN0XG4gICAgdmFyIHN1YnMgPSB0aGlzLnN1YnMuc2xpY2UoKTtcbiAgICBpZiAoIWNvbmZpZy5hc3luYykge1xuICAgICAgLy8gc3VicyBhcmVuJ3Qgc29ydGVkIGluIHNjaGVkdWxlciBpZiBub3QgcnVubmluZyBhc3luY1xuICAgICAgLy8gd2UgbmVlZCB0byBzb3J0IHRoZW0gbm93IHRvIG1ha2Ugc3VyZSB0aGV5IGZpcmUgaW4gY29ycmVjdFxuICAgICAgLy8gb3JkZXJcbiAgICAgIHN1YnMuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5pZCAtIGIuaWQ7IH0pO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHN1YnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBzdWJzW2ldLnVwZGF0ZSgpO1xuICAgIH1cbiAgfTtcblxuICAvLyBUaGUgY3VycmVudCB0YXJnZXQgd2F0Y2hlciBiZWluZyBldmFsdWF0ZWQuXG4gIC8vIFRoaXMgaXMgZ2xvYmFsbHkgdW5pcXVlIGJlY2F1c2Ugb25seSBvbmUgd2F0Y2hlclxuICAvLyBjYW4gYmUgZXZhbHVhdGVkIGF0IGEgdGltZS5cbiAgRGVwLnRhcmdldCA9IG51bGw7XG4gIHZhciB0YXJnZXRTdGFjayA9IFtdO1xuXG4gIGZ1bmN0aW9uIHB1c2hUYXJnZXQgKHRhcmdldCkge1xuICAgIHRhcmdldFN0YWNrLnB1c2godGFyZ2V0KTtcbiAgICBEZXAudGFyZ2V0ID0gdGFyZ2V0O1xuICB9XG5cbiAgZnVuY3Rpb24gcG9wVGFyZ2V0ICgpIHtcbiAgICB0YXJnZXRTdGFjay5wb3AoKTtcbiAgICBEZXAudGFyZ2V0ID0gdGFyZ2V0U3RhY2tbdGFyZ2V0U3RhY2subGVuZ3RoIC0gMV07XG4gIH1cblxuICAvKiAgKi9cblxuICB2YXIgVk5vZGUgPSBmdW5jdGlvbiBWTm9kZSAoXG4gICAgdGFnLFxuICAgIGRhdGEsXG4gICAgY2hpbGRyZW4sXG4gICAgdGV4dCxcbiAgICBlbG0sXG4gICAgY29udGV4dCxcbiAgICBjb21wb25lbnRPcHRpb25zLFxuICAgIGFzeW5jRmFjdG9yeVxuICApIHtcbiAgICB0aGlzLnRhZyA9IHRhZztcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIHRoaXMuZWxtID0gZWxtO1xuICAgIHRoaXMubnMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmZuQ29udGV4dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZuT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZuU2NvcGVJZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmtleSA9IGRhdGEgJiYgZGF0YS5rZXk7XG4gICAgdGhpcy5jb21wb25lbnRPcHRpb25zID0gY29tcG9uZW50T3B0aW9ucztcbiAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucGFyZW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucmF3ID0gZmFsc2U7XG4gICAgdGhpcy5pc1N0YXRpYyA9IGZhbHNlO1xuICAgIHRoaXMuaXNSb290SW5zZXJ0ID0gdHJ1ZTtcbiAgICB0aGlzLmlzQ29tbWVudCA9IGZhbHNlO1xuICAgIHRoaXMuaXNDbG9uZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzT25jZSA9IGZhbHNlO1xuICAgIHRoaXMuYXN5bmNGYWN0b3J5ID0gYXN5bmNGYWN0b3J5O1xuICAgIHRoaXMuYXN5bmNNZXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaXNBc3luY1BsYWNlaG9sZGVyID0gZmFsc2U7XG4gIH07XG5cbiAgdmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgY2hpbGQ6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0gfTtcblxuICAvLyBERVBSRUNBVEVEOiBhbGlhcyBmb3IgY29tcG9uZW50SW5zdGFuY2UgZm9yIGJhY2t3YXJkcyBjb21wYXQuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHByb3RvdHlwZUFjY2Vzc29ycy5jaGlsZC5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50SW5zdGFuY2VcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyggVk5vZGUucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMgKTtcblxuICB2YXIgY3JlYXRlRW1wdHlWTm9kZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgaWYgKCB0ZXh0ID09PSB2b2lkIDAgKSB0ZXh0ID0gJyc7XG5cbiAgICB2YXIgbm9kZSA9IG5ldyBWTm9kZSgpO1xuICAgIG5vZGUudGV4dCA9IHRleHQ7XG4gICAgbm9kZS5pc0NvbW1lbnQgPSB0cnVlO1xuICAgIHJldHVybiBub2RlXG4gIH07XG5cbiAgZnVuY3Rpb24gY3JlYXRlVGV4dFZOb2RlICh2YWwpIHtcbiAgICByZXR1cm4gbmV3IFZOb2RlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFN0cmluZyh2YWwpKVxuICB9XG5cbiAgLy8gb3B0aW1pemVkIHNoYWxsb3cgY2xvbmVcbiAgLy8gdXNlZCBmb3Igc3RhdGljIG5vZGVzIGFuZCBzbG90IG5vZGVzIGJlY2F1c2UgdGhleSBtYXkgYmUgcmV1c2VkIGFjcm9zc1xuICAvLyBtdWx0aXBsZSByZW5kZXJzLCBjbG9uaW5nIHRoZW0gYXZvaWRzIGVycm9ycyB3aGVuIERPTSBtYW5pcHVsYXRpb25zIHJlbHlcbiAgLy8gb24gdGhlaXIgZWxtIHJlZmVyZW5jZS5cbiAgZnVuY3Rpb24gY2xvbmVWTm9kZSAodm5vZGUpIHtcbiAgICB2YXIgY2xvbmVkID0gbmV3IFZOb2RlKFxuICAgICAgdm5vZGUudGFnLFxuICAgICAgdm5vZGUuZGF0YSxcbiAgICAgIC8vICM3OTc1XG4gICAgICAvLyBjbG9uZSBjaGlsZHJlbiBhcnJheSB0byBhdm9pZCBtdXRhdGluZyBvcmlnaW5hbCBpbiBjYXNlIG9mIGNsb25pbmdcbiAgICAgIC8vIGEgY2hpbGQuXG4gICAgICB2bm9kZS5jaGlsZHJlbiAmJiB2bm9kZS5jaGlsZHJlbi5zbGljZSgpLFxuICAgICAgdm5vZGUudGV4dCxcbiAgICAgIHZub2RlLmVsbSxcbiAgICAgIHZub2RlLmNvbnRleHQsXG4gICAgICB2bm9kZS5jb21wb25lbnRPcHRpb25zLFxuICAgICAgdm5vZGUuYXN5bmNGYWN0b3J5XG4gICAgKTtcbiAgICBjbG9uZWQubnMgPSB2bm9kZS5ucztcbiAgICBjbG9uZWQuaXNTdGF0aWMgPSB2bm9kZS5pc1N0YXRpYztcbiAgICBjbG9uZWQua2V5ID0gdm5vZGUua2V5O1xuICAgIGNsb25lZC5pc0NvbW1lbnQgPSB2bm9kZS5pc0NvbW1lbnQ7XG4gICAgY2xvbmVkLmZuQ29udGV4dCA9IHZub2RlLmZuQ29udGV4dDtcbiAgICBjbG9uZWQuZm5PcHRpb25zID0gdm5vZGUuZm5PcHRpb25zO1xuICAgIGNsb25lZC5mblNjb3BlSWQgPSB2bm9kZS5mblNjb3BlSWQ7XG4gICAgY2xvbmVkLmFzeW5jTWV0YSA9IHZub2RlLmFzeW5jTWV0YTtcbiAgICBjbG9uZWQuaXNDbG9uZWQgPSB0cnVlO1xuICAgIHJldHVybiBjbG9uZWRcbiAgfVxuXG4gIC8qXG4gICAqIG5vdCB0eXBlIGNoZWNraW5nIHRoaXMgZmlsZSBiZWNhdXNlIGZsb3cgZG9lc24ndCBwbGF5IHdlbGwgd2l0aFxuICAgKiBkeW5hbWljYWxseSBhY2Nlc3NpbmcgbWV0aG9kcyBvbiBBcnJheSBwcm90b3R5cGVcbiAgICovXG5cbiAgdmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG4gIHZhciBhcnJheU1ldGhvZHMgPSBPYmplY3QuY3JlYXRlKGFycmF5UHJvdG8pO1xuXG4gIHZhciBtZXRob2RzVG9QYXRjaCA9IFtcbiAgICAncHVzaCcsXG4gICAgJ3BvcCcsXG4gICAgJ3NoaWZ0JyxcbiAgICAndW5zaGlmdCcsXG4gICAgJ3NwbGljZScsXG4gICAgJ3NvcnQnLFxuICAgICdyZXZlcnNlJ1xuICBdO1xuXG4gIC8qKlxuICAgKiBJbnRlcmNlcHQgbXV0YXRpbmcgbWV0aG9kcyBhbmQgZW1pdCBldmVudHNcbiAgICovXG4gIG1ldGhvZHNUb1BhdGNoLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIC8vIGNhY2hlIG9yaWdpbmFsIG1ldGhvZFxuICAgIHZhciBvcmlnaW5hbCA9IGFycmF5UHJvdG9bbWV0aG9kXTtcbiAgICBkZWYoYXJyYXlNZXRob2RzLCBtZXRob2QsIGZ1bmN0aW9uIG11dGF0b3IgKCkge1xuICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgIHZhciByZXN1bHQgPSBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgIHZhciBvYiA9IHRoaXMuX19vYl9fO1xuICAgICAgdmFyIGluc2VydGVkO1xuICAgICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgICAgY2FzZSAncHVzaCc6XG4gICAgICAgIGNhc2UgJ3Vuc2hpZnQnOlxuICAgICAgICAgIGluc2VydGVkID0gYXJncztcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdzcGxpY2UnOlxuICAgICAgICAgIGluc2VydGVkID0gYXJncy5zbGljZSgyKTtcbiAgICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgaWYgKGluc2VydGVkKSB7IG9iLm9ic2VydmVBcnJheShpbnNlcnRlZCk7IH1cbiAgICAgIC8vIG5vdGlmeSBjaGFuZ2VcbiAgICAgIG9iLmRlcC5ub3RpZnkoKTtcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9KTtcbiAgfSk7XG5cbiAgLyogICovXG5cbiAgdmFyIGFycmF5S2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGFycmF5TWV0aG9kcyk7XG5cbiAgLyoqXG4gICAqIEluIHNvbWUgY2FzZXMgd2UgbWF5IHdhbnQgdG8gZGlzYWJsZSBvYnNlcnZhdGlvbiBpbnNpZGUgYSBjb21wb25lbnQnc1xuICAgKiB1cGRhdGUgY29tcHV0YXRpb24uXG4gICAqL1xuICB2YXIgc2hvdWxkT2JzZXJ2ZSA9IHRydWU7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlT2JzZXJ2aW5nICh2YWx1ZSkge1xuICAgIHNob3VsZE9ic2VydmUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPYnNlcnZlciBjbGFzcyB0aGF0IGlzIGF0dGFjaGVkIHRvIGVhY2ggb2JzZXJ2ZWRcbiAgICogb2JqZWN0LiBPbmNlIGF0dGFjaGVkLCB0aGUgb2JzZXJ2ZXIgY29udmVydHMgdGhlIHRhcmdldFxuICAgKiBvYmplY3QncyBwcm9wZXJ0eSBrZXlzIGludG8gZ2V0dGVyL3NldHRlcnMgdGhhdFxuICAgKiBjb2xsZWN0IGRlcGVuZGVuY2llcyBhbmQgZGlzcGF0Y2ggdXBkYXRlcy5cbiAgICovXG4gIHZhciBPYnNlcnZlciA9IGZ1bmN0aW9uIE9ic2VydmVyICh2YWx1ZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmRlcCA9IG5ldyBEZXAoKTtcbiAgICB0aGlzLnZtQ291bnQgPSAwO1xuICAgIGRlZih2YWx1ZSwgJ19fb2JfXycsIHRoaXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgaWYgKGhhc1Byb3RvKSB7XG4gICAgICAgIHByb3RvQXVnbWVudCh2YWx1ZSwgYXJyYXlNZXRob2RzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvcHlBdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMsIGFycmF5S2V5cyk7XG4gICAgICB9XG4gICAgICB0aGlzLm9ic2VydmVBcnJheSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud2Fsayh2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBXYWxrIHRocm91Z2ggYWxsIHByb3BlcnRpZXMgYW5kIGNvbnZlcnQgdGhlbSBpbnRvXG4gICAqIGdldHRlci9zZXR0ZXJzLiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSBiZSBjYWxsZWQgd2hlblxuICAgKiB2YWx1ZSB0eXBlIGlzIE9iamVjdC5cbiAgICovXG4gIE9ic2VydmVyLnByb3RvdHlwZS53YWxrID0gZnVuY3Rpb24gd2FsayAob2JqKSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgZGVmaW5lUmVhY3RpdmUkJDEob2JqLCBrZXlzW2ldKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIE9ic2VydmUgYSBsaXN0IG9mIEFycmF5IGl0ZW1zLlxuICAgKi9cbiAgT2JzZXJ2ZXIucHJvdG90eXBlLm9ic2VydmVBcnJheSA9IGZ1bmN0aW9uIG9ic2VydmVBcnJheSAoaXRlbXMpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGl0ZW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgb2JzZXJ2ZShpdGVtc1tpXSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIGhlbHBlcnNcblxuICAvKipcbiAgICogQXVnbWVudCBhIHRhcmdldCBPYmplY3Qgb3IgQXJyYXkgYnkgaW50ZXJjZXB0aW5nXG4gICAqIHRoZSBwcm90b3R5cGUgY2hhaW4gdXNpbmcgX19wcm90b19fXG4gICAqL1xuICBmdW5jdGlvbiBwcm90b0F1Z21lbnQgKHRhcmdldCwgc3JjKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbiAgICB0YXJnZXQuX19wcm90b19fID0gc3JjO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tcHJvdG8gKi9cbiAgfVxuXG4gIC8qKlxuICAgKiBBdWdtZW50IGEgdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBkZWZpbmluZ1xuICAgKiBoaWRkZW4gcHJvcGVydGllcy5cbiAgICovXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGZ1bmN0aW9uIGNvcHlBdWdtZW50ICh0YXJnZXQsIHNyYywga2V5cykge1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgZGVmKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEF0dGVtcHQgdG8gY3JlYXRlIGFuIG9ic2VydmVyIGluc3RhbmNlIGZvciBhIHZhbHVlLFxuICAgKiByZXR1cm5zIHRoZSBuZXcgb2JzZXJ2ZXIgaWYgc3VjY2Vzc2Z1bGx5IG9ic2VydmVkLFxuICAgKiBvciB0aGUgZXhpc3Rpbmcgb2JzZXJ2ZXIgaWYgdGhlIHZhbHVlIGFscmVhZHkgaGFzIG9uZS5cbiAgICovXG4gIGZ1bmN0aW9uIG9ic2VydmUgKHZhbHVlLCBhc1Jvb3REYXRhKSB7XG4gICAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgdmFsdWUgaW5zdGFuY2VvZiBWTm9kZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHZhciBvYjtcbiAgICBpZiAoaGFzT3duKHZhbHVlLCAnX19vYl9fJykgJiYgdmFsdWUuX19vYl9fIGluc3RhbmNlb2YgT2JzZXJ2ZXIpIHtcbiAgICAgIG9iID0gdmFsdWUuX19vYl9fO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBzaG91bGRPYnNlcnZlICYmXG4gICAgICAhaXNTZXJ2ZXJSZW5kZXJpbmcoKSAmJlxuICAgICAgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IGlzUGxhaW5PYmplY3QodmFsdWUpKSAmJlxuICAgICAgT2JqZWN0LmlzRXh0ZW5zaWJsZSh2YWx1ZSkgJiZcbiAgICAgICF2YWx1ZS5faXNWdWVcbiAgICApIHtcbiAgICAgIG9iID0gbmV3IE9ic2VydmVyKHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGFzUm9vdERhdGEgJiYgb2IpIHtcbiAgICAgIG9iLnZtQ291bnQrKztcbiAgICB9XG4gICAgcmV0dXJuIG9iXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lIGEgcmVhY3RpdmUgcHJvcGVydHkgb24gYW4gT2JqZWN0LlxuICAgKi9cbiAgZnVuY3Rpb24gZGVmaW5lUmVhY3RpdmUkJDEgKFxuICAgIG9iaixcbiAgICBrZXksXG4gICAgdmFsLFxuICAgIGN1c3RvbVNldHRlcixcbiAgICBzaGFsbG93XG4gICkge1xuICAgIHZhciBkZXAgPSBuZXcgRGVwKCk7XG5cbiAgICB2YXIgcHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcbiAgICBpZiAocHJvcGVydHkgJiYgcHJvcGVydHkuY29uZmlndXJhYmxlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gY2F0ZXIgZm9yIHByZS1kZWZpbmVkIGdldHRlci9zZXR0ZXJzXG4gICAgdmFyIGdldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LmdldDtcbiAgICB2YXIgc2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuc2V0O1xuICAgIGlmICgoIWdldHRlciB8fCBzZXR0ZXIpICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgIHZhbCA9IG9ialtrZXldO1xuICAgIH1cblxuICAgIHZhciBjaGlsZE9iID0gIXNoYWxsb3cgJiYgb2JzZXJ2ZSh2YWwpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gcmVhY3RpdmVHZXR0ZXIgKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xuICAgICAgICBpZiAoRGVwLnRhcmdldCkge1xuICAgICAgICAgIGRlcC5kZXBlbmQoKTtcbiAgICAgICAgICBpZiAoY2hpbGRPYikge1xuICAgICAgICAgICAgY2hpbGRPYi5kZXAuZGVwZW5kKCk7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgZGVwZW5kQXJyYXkodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHJlYWN0aXZlU2V0dGVyIChuZXdWYWwpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbDtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlICovXG4gICAgICAgIGlmIChuZXdWYWwgPT09IHZhbHVlIHx8IChuZXdWYWwgIT09IG5ld1ZhbCAmJiB2YWx1ZSAhPT0gdmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUgKi9cbiAgICAgICAgaWYgKGN1c3RvbVNldHRlcikge1xuICAgICAgICAgIGN1c3RvbVNldHRlcigpO1xuICAgICAgICB9XG4gICAgICAgIC8vICM3OTgxOiBmb3IgYWNjZXNzb3IgcHJvcGVydGllcyB3aXRob3V0IHNldHRlclxuICAgICAgICBpZiAoZ2V0dGVyICYmICFzZXR0ZXIpIHsgcmV0dXJuIH1cbiAgICAgICAgaWYgKHNldHRlcikge1xuICAgICAgICAgIHNldHRlci5jYWxsKG9iaiwgbmV3VmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWwgPSBuZXdWYWw7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRPYiA9ICFzaGFsbG93ICYmIG9ic2VydmUobmV3VmFsKTtcbiAgICAgICAgZGVwLm5vdGlmeSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhIHByb3BlcnR5IG9uIGFuIG9iamVjdC4gQWRkcyB0aGUgbmV3IHByb3BlcnR5IGFuZFxuICAgKiB0cmlnZ2VycyBjaGFuZ2Ugbm90aWZpY2F0aW9uIGlmIHRoZSBwcm9wZXJ0eSBkb2Vzbid0XG4gICAqIGFscmVhZHkgZXhpc3QuXG4gICAqL1xuICBmdW5jdGlvbiBzZXQgKHRhcmdldCwga2V5LCB2YWwpIHtcbiAgICBpZiAoaXNVbmRlZih0YXJnZXQpIHx8IGlzUHJpbWl0aXZlKHRhcmdldClcbiAgICApIHtcbiAgICAgIHdhcm4oKFwiQ2Fubm90IHNldCByZWFjdGl2ZSBwcm9wZXJ0eSBvbiB1bmRlZmluZWQsIG51bGwsIG9yIHByaW1pdGl2ZSB2YWx1ZTogXCIgKyAoKHRhcmdldCkpKSk7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkgJiYgaXNWYWxpZEFycmF5SW5kZXgoa2V5KSkge1xuICAgICAgdGFyZ2V0Lmxlbmd0aCA9IE1hdGgubWF4KHRhcmdldC5sZW5ndGgsIGtleSk7XG4gICAgICB0YXJnZXQuc3BsaWNlKGtleSwgMSwgdmFsKTtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9XG4gICAgaWYgKGtleSBpbiB0YXJnZXQgJiYgIShrZXkgaW4gT2JqZWN0LnByb3RvdHlwZSkpIHtcbiAgICAgIHRhcmdldFtrZXldID0gdmFsO1xuICAgICAgcmV0dXJuIHZhbFxuICAgIH1cbiAgICB2YXIgb2IgPSAodGFyZ2V0KS5fX29iX187XG4gICAgaWYgKHRhcmdldC5faXNWdWUgfHwgKG9iICYmIG9iLnZtQ291bnQpKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAnQXZvaWQgYWRkaW5nIHJlYWN0aXZlIHByb3BlcnRpZXMgdG8gYSBWdWUgaW5zdGFuY2Ugb3IgaXRzIHJvb3QgJGRhdGEgJyArXG4gICAgICAgICdhdCBydW50aW1lIC0gZGVjbGFyZSBpdCB1cGZyb250IGluIHRoZSBkYXRhIG9wdGlvbi4nXG4gICAgICApO1xuICAgICAgcmV0dXJuIHZhbFxuICAgIH1cbiAgICBpZiAoIW9iKSB7XG4gICAgICB0YXJnZXRba2V5XSA9IHZhbDtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9XG4gICAgZGVmaW5lUmVhY3RpdmUkJDEob2IudmFsdWUsIGtleSwgdmFsKTtcbiAgICBvYi5kZXAubm90aWZ5KCk7XG4gICAgcmV0dXJuIHZhbFxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhIHByb3BlcnR5IGFuZCB0cmlnZ2VyIGNoYW5nZSBpZiBuZWNlc3NhcnkuXG4gICAqL1xuICBmdW5jdGlvbiBkZWwgKHRhcmdldCwga2V5KSB7XG4gICAgaWYgKGlzVW5kZWYodGFyZ2V0KSB8fCBpc1ByaW1pdGl2ZSh0YXJnZXQpXG4gICAgKSB7XG4gICAgICB3YXJuKChcIkNhbm5vdCBkZWxldGUgcmVhY3RpdmUgcHJvcGVydHkgb24gdW5kZWZpbmVkLCBudWxsLCBvciBwcmltaXRpdmUgdmFsdWU6IFwiICsgKCh0YXJnZXQpKSkpO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmIGlzVmFsaWRBcnJheUluZGV4KGtleSkpIHtcbiAgICAgIHRhcmdldC5zcGxpY2Uoa2V5LCAxKTtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgb2IgPSAodGFyZ2V0KS5fX29iX187XG4gICAgaWYgKHRhcmdldC5faXNWdWUgfHwgKG9iICYmIG9iLnZtQ291bnQpKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAnQXZvaWQgZGVsZXRpbmcgcHJvcGVydGllcyBvbiBhIFZ1ZSBpbnN0YW5jZSBvciBpdHMgcm9vdCAkZGF0YSAnICtcbiAgICAgICAgJy0ganVzdCBzZXQgaXQgdG8gbnVsbC4nXG4gICAgICApO1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICghaGFzT3duKHRhcmdldCwga2V5KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICBpZiAoIW9iKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgb2IuZGVwLm5vdGlmeSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3QgZGVwZW5kZW5jaWVzIG9uIGFycmF5IGVsZW1lbnRzIHdoZW4gdGhlIGFycmF5IGlzIHRvdWNoZWQsIHNpbmNlXG4gICAqIHdlIGNhbm5vdCBpbnRlcmNlcHQgYXJyYXkgZWxlbWVudCBhY2Nlc3MgbGlrZSBwcm9wZXJ0eSBnZXR0ZXJzLlxuICAgKi9cbiAgZnVuY3Rpb24gZGVwZW5kQXJyYXkgKHZhbHVlKSB7XG4gICAgZm9yICh2YXIgZSA9ICh2b2lkIDApLCBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZSA9IHZhbHVlW2ldO1xuICAgICAgZSAmJiBlLl9fb2JfXyAmJiBlLl9fb2JfXy5kZXAuZGVwZW5kKCk7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgICBkZXBlbmRBcnJheShlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiAgKi9cblxuICAvKipcbiAgICogT3B0aW9uIG92ZXJ3cml0aW5nIHN0cmF0ZWdpZXMgYXJlIGZ1bmN0aW9ucyB0aGF0IGhhbmRsZVxuICAgKiBob3cgdG8gbWVyZ2UgYSBwYXJlbnQgb3B0aW9uIHZhbHVlIGFuZCBhIGNoaWxkIG9wdGlvblxuICAgKiB2YWx1ZSBpbnRvIHRoZSBmaW5hbCB2YWx1ZS5cbiAgICovXG4gIHZhciBzdHJhdHMgPSBjb25maWcub3B0aW9uTWVyZ2VTdHJhdGVnaWVzO1xuXG4gIC8qKlxuICAgKiBPcHRpb25zIHdpdGggcmVzdHJpY3Rpb25zXG4gICAqL1xuICB7XG4gICAgc3RyYXRzLmVsID0gc3RyYXRzLnByb3BzRGF0YSA9IGZ1bmN0aW9uIChwYXJlbnQsIGNoaWxkLCB2bSwga2V5KSB7XG4gICAgICBpZiAoIXZtKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgXCJvcHRpb24gXFxcIlwiICsga2V5ICsgXCJcXFwiIGNhbiBvbmx5IGJlIHVzZWQgZHVyaW5nIGluc3RhbmNlIFwiICtcbiAgICAgICAgICAnY3JlYXRpb24gd2l0aCB0aGUgYG5ld2Aga2V5d29yZC4nXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVmYXVsdFN0cmF0KHBhcmVudCwgY2hpbGQpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgdGhhdCByZWN1cnNpdmVseSBtZXJnZXMgdHdvIGRhdGEgb2JqZWN0cyB0b2dldGhlci5cbiAgICovXG4gIGZ1bmN0aW9uIG1lcmdlRGF0YSAodG8sIGZyb20pIHtcbiAgICBpZiAoIWZyb20pIHsgcmV0dXJuIHRvIH1cbiAgICB2YXIga2V5LCB0b1ZhbCwgZnJvbVZhbDtcblxuICAgIHZhciBrZXlzID0gaGFzU3ltYm9sXG4gICAgICA/IFJlZmxlY3Qub3duS2V5cyhmcm9tKVxuICAgICAgOiBPYmplY3Qua2V5cyhmcm9tKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgIC8vIGluIGNhc2UgdGhlIG9iamVjdCBpcyBhbHJlYWR5IG9ic2VydmVkLi4uXG4gICAgICBpZiAoa2V5ID09PSAnX19vYl9fJykgeyBjb250aW51ZSB9XG4gICAgICB0b1ZhbCA9IHRvW2tleV07XG4gICAgICBmcm9tVmFsID0gZnJvbVtrZXldO1xuICAgICAgaWYgKCFoYXNPd24odG8sIGtleSkpIHtcbiAgICAgICAgc2V0KHRvLCBrZXksIGZyb21WYWwpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgdG9WYWwgIT09IGZyb21WYWwgJiZcbiAgICAgICAgaXNQbGFpbk9iamVjdCh0b1ZhbCkgJiZcbiAgICAgICAgaXNQbGFpbk9iamVjdChmcm9tVmFsKVxuICAgICAgKSB7XG4gICAgICAgIG1lcmdlRGF0YSh0b1ZhbCwgZnJvbVZhbCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0b1xuICB9XG5cbiAgLyoqXG4gICAqIERhdGFcbiAgICovXG4gIGZ1bmN0aW9uIG1lcmdlRGF0YU9yRm4gKFxuICAgIHBhcmVudFZhbCxcbiAgICBjaGlsZFZhbCxcbiAgICB2bVxuICApIHtcbiAgICBpZiAoIXZtKSB7XG4gICAgICAvLyBpbiBhIFZ1ZS5leHRlbmQgbWVyZ2UsIGJvdGggc2hvdWxkIGJlIGZ1bmN0aW9uc1xuICAgICAgaWYgKCFjaGlsZFZhbCkge1xuICAgICAgICByZXR1cm4gcGFyZW50VmFsXG4gICAgICB9XG4gICAgICBpZiAoIXBhcmVudFZhbCkge1xuICAgICAgICByZXR1cm4gY2hpbGRWYWxcbiAgICAgIH1cbiAgICAgIC8vIHdoZW4gcGFyZW50VmFsICYgY2hpbGRWYWwgYXJlIGJvdGggcHJlc2VudCxcbiAgICAgIC8vIHdlIG5lZWQgdG8gcmV0dXJuIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZVxuICAgICAgLy8gbWVyZ2VkIHJlc3VsdCBvZiBib3RoIGZ1bmN0aW9ucy4uLiBubyBuZWVkIHRvXG4gICAgICAvLyBjaGVjayBpZiBwYXJlbnRWYWwgaXMgYSBmdW5jdGlvbiBoZXJlIGJlY2F1c2VcbiAgICAgIC8vIGl0IGhhcyB0byBiZSBhIGZ1bmN0aW9uIHRvIHBhc3MgcHJldmlvdXMgbWVyZ2VzLlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlZERhdGFGbiAoKSB7XG4gICAgICAgIHJldHVybiBtZXJnZURhdGEoXG4gICAgICAgICAgdHlwZW9mIGNoaWxkVmFsID09PSAnZnVuY3Rpb24nID8gY2hpbGRWYWwuY2FsbCh0aGlzLCB0aGlzKSA6IGNoaWxkVmFsLFxuICAgICAgICAgIHR5cGVvZiBwYXJlbnRWYWwgPT09ICdmdW5jdGlvbicgPyBwYXJlbnRWYWwuY2FsbCh0aGlzLCB0aGlzKSA6IHBhcmVudFZhbFxuICAgICAgICApXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZWRJbnN0YW5jZURhdGFGbiAoKSB7XG4gICAgICAgIC8vIGluc3RhbmNlIG1lcmdlXG4gICAgICAgIHZhciBpbnN0YW5jZURhdGEgPSB0eXBlb2YgY2hpbGRWYWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICA/IGNoaWxkVmFsLmNhbGwodm0sIHZtKVxuICAgICAgICAgIDogY2hpbGRWYWw7XG4gICAgICAgIHZhciBkZWZhdWx0RGF0YSA9IHR5cGVvZiBwYXJlbnRWYWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICA/IHBhcmVudFZhbC5jYWxsKHZtLCB2bSlcbiAgICAgICAgICA6IHBhcmVudFZhbDtcbiAgICAgICAgaWYgKGluc3RhbmNlRGF0YSkge1xuICAgICAgICAgIHJldHVybiBtZXJnZURhdGEoaW5zdGFuY2VEYXRhLCBkZWZhdWx0RGF0YSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZGVmYXVsdERhdGFcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0cmF0cy5kYXRhID0gZnVuY3Rpb24gKFxuICAgIHBhcmVudFZhbCxcbiAgICBjaGlsZFZhbCxcbiAgICB2bVxuICApIHtcbiAgICBpZiAoIXZtKSB7XG4gICAgICBpZiAoY2hpbGRWYWwgJiYgdHlwZW9mIGNoaWxkVmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ1RoZSBcImRhdGFcIiBvcHRpb24gc2hvdWxkIGJlIGEgZnVuY3Rpb24gJyArXG4gICAgICAgICAgJ3RoYXQgcmV0dXJucyBhIHBlci1pbnN0YW5jZSB2YWx1ZSBpbiBjb21wb25lbnQgJyArXG4gICAgICAgICAgJ2RlZmluaXRpb25zLicsXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gcGFyZW50VmFsXG4gICAgICB9XG4gICAgICByZXR1cm4gbWVyZ2VEYXRhT3JGbihwYXJlbnRWYWwsIGNoaWxkVmFsKVxuICAgIH1cblxuICAgIHJldHVybiBtZXJnZURhdGFPckZuKHBhcmVudFZhbCwgY2hpbGRWYWwsIHZtKVxuICB9O1xuXG4gIC8qKlxuICAgKiBIb29rcyBhbmQgcHJvcHMgYXJlIG1lcmdlZCBhcyBhcnJheXMuXG4gICAqL1xuICBmdW5jdGlvbiBtZXJnZUhvb2sgKFxuICAgIHBhcmVudFZhbCxcbiAgICBjaGlsZFZhbFxuICApIHtcbiAgICB2YXIgcmVzID0gY2hpbGRWYWxcbiAgICAgID8gcGFyZW50VmFsXG4gICAgICAgID8gcGFyZW50VmFsLmNvbmNhdChjaGlsZFZhbClcbiAgICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkVmFsKVxuICAgICAgICAgID8gY2hpbGRWYWxcbiAgICAgICAgICA6IFtjaGlsZFZhbF1cbiAgICAgIDogcGFyZW50VmFsO1xuICAgIHJldHVybiByZXNcbiAgICAgID8gZGVkdXBlSG9va3MocmVzKVxuICAgICAgOiByZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlZHVwZUhvb2tzIChob29rcykge1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocmVzLmluZGV4T2YoaG9va3NbaV0pID09PSAtMSkge1xuICAgICAgICByZXMucHVzaChob29rc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfVxuXG4gIExJRkVDWUNMRV9IT09LUy5mb3JFYWNoKGZ1bmN0aW9uIChob29rKSB7XG4gICAgc3RyYXRzW2hvb2tdID0gbWVyZ2VIb29rO1xuICB9KTtcblxuICAvKipcbiAgICogQXNzZXRzXG4gICAqXG4gICAqIFdoZW4gYSB2bSBpcyBwcmVzZW50IChpbnN0YW5jZSBjcmVhdGlvbiksIHdlIG5lZWQgdG8gZG9cbiAgICogYSB0aHJlZS13YXkgbWVyZ2UgYmV0d2VlbiBjb25zdHJ1Y3RvciBvcHRpb25zLCBpbnN0YW5jZVxuICAgKiBvcHRpb25zIGFuZCBwYXJlbnQgb3B0aW9ucy5cbiAgICovXG4gIGZ1bmN0aW9uIG1lcmdlQXNzZXRzIChcbiAgICBwYXJlbnRWYWwsXG4gICAgY2hpbGRWYWwsXG4gICAgdm0sXG4gICAga2V5XG4gICkge1xuICAgIHZhciByZXMgPSBPYmplY3QuY3JlYXRlKHBhcmVudFZhbCB8fCBudWxsKTtcbiAgICBpZiAoY2hpbGRWYWwpIHtcbiAgICAgIGFzc2VydE9iamVjdFR5cGUoa2V5LCBjaGlsZFZhbCwgdm0pO1xuICAgICAgcmV0dXJuIGV4dGVuZChyZXMsIGNoaWxkVmFsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzXG4gICAgfVxuICB9XG5cbiAgQVNTRVRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgIHN0cmF0c1t0eXBlICsgJ3MnXSA9IG1lcmdlQXNzZXRzO1xuICB9KTtcblxuICAvKipcbiAgICogV2F0Y2hlcnMuXG4gICAqXG4gICAqIFdhdGNoZXJzIGhhc2hlcyBzaG91bGQgbm90IG92ZXJ3cml0ZSBvbmVcbiAgICogYW5vdGhlciwgc28gd2UgbWVyZ2UgdGhlbSBhcyBhcnJheXMuXG4gICAqL1xuICBzdHJhdHMud2F0Y2ggPSBmdW5jdGlvbiAoXG4gICAgcGFyZW50VmFsLFxuICAgIGNoaWxkVmFsLFxuICAgIHZtLFxuICAgIGtleVxuICApIHtcbiAgICAvLyB3b3JrIGFyb3VuZCBGaXJlZm94J3MgT2JqZWN0LnByb3RvdHlwZS53YXRjaC4uLlxuICAgIGlmIChwYXJlbnRWYWwgPT09IG5hdGl2ZVdhdGNoKSB7IHBhcmVudFZhbCA9IHVuZGVmaW5lZDsgfVxuICAgIGlmIChjaGlsZFZhbCA9PT0gbmF0aXZlV2F0Y2gpIHsgY2hpbGRWYWwgPSB1bmRlZmluZWQ7IH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWNoaWxkVmFsKSB7IHJldHVybiBPYmplY3QuY3JlYXRlKHBhcmVudFZhbCB8fCBudWxsKSB9XG4gICAge1xuICAgICAgYXNzZXJ0T2JqZWN0VHlwZShrZXksIGNoaWxkVmFsLCB2bSk7XG4gICAgfVxuICAgIGlmICghcGFyZW50VmFsKSB7IHJldHVybiBjaGlsZFZhbCB9XG4gICAgdmFyIHJldCA9IHt9O1xuICAgIGV4dGVuZChyZXQsIHBhcmVudFZhbCk7XG4gICAgZm9yICh2YXIga2V5JDEgaW4gY2hpbGRWYWwpIHtcbiAgICAgIHZhciBwYXJlbnQgPSByZXRba2V5JDFdO1xuICAgICAgdmFyIGNoaWxkID0gY2hpbGRWYWxba2V5JDFdO1xuICAgICAgaWYgKHBhcmVudCAmJiAhQXJyYXkuaXNBcnJheShwYXJlbnQpKSB7XG4gICAgICAgIHBhcmVudCA9IFtwYXJlbnRdO1xuICAgICAgfVxuICAgICAgcmV0W2tleSQxXSA9IHBhcmVudFxuICAgICAgICA/IHBhcmVudC5jb25jYXQoY2hpbGQpXG4gICAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZCkgPyBjaGlsZCA6IFtjaGlsZF07XG4gICAgfVxuICAgIHJldHVybiByZXRcbiAgfTtcblxuICAvKipcbiAgICogT3RoZXIgb2JqZWN0IGhhc2hlcy5cbiAgICovXG4gIHN0cmF0cy5wcm9wcyA9XG4gIHN0cmF0cy5tZXRob2RzID1cbiAgc3RyYXRzLmluamVjdCA9XG4gIHN0cmF0cy5jb21wdXRlZCA9IGZ1bmN0aW9uIChcbiAgICBwYXJlbnRWYWwsXG4gICAgY2hpbGRWYWwsXG4gICAgdm0sXG4gICAga2V5XG4gICkge1xuICAgIGlmIChjaGlsZFZhbCAmJiBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0T2JqZWN0VHlwZShrZXksIGNoaWxkVmFsLCB2bSk7XG4gICAgfVxuICAgIGlmICghcGFyZW50VmFsKSB7IHJldHVybiBjaGlsZFZhbCB9XG4gICAgdmFyIHJldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgZXh0ZW5kKHJldCwgcGFyZW50VmFsKTtcbiAgICBpZiAoY2hpbGRWYWwpIHsgZXh0ZW5kKHJldCwgY2hpbGRWYWwpOyB9XG4gICAgcmV0dXJuIHJldFxuICB9O1xuICBzdHJhdHMucHJvdmlkZSA9IG1lcmdlRGF0YU9yRm47XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgc3RyYXRlZ3kuXG4gICAqL1xuICB2YXIgZGVmYXVsdFN0cmF0ID0gZnVuY3Rpb24gKHBhcmVudFZhbCwgY2hpbGRWYWwpIHtcbiAgICByZXR1cm4gY2hpbGRWYWwgPT09IHVuZGVmaW5lZFxuICAgICAgPyBwYXJlbnRWYWxcbiAgICAgIDogY2hpbGRWYWxcbiAgfTtcblxuICAvKipcbiAgICogVmFsaWRhdGUgY29tcG9uZW50IG5hbWVzXG4gICAqL1xuICBmdW5jdGlvbiBjaGVja0NvbXBvbmVudHMgKG9wdGlvbnMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gb3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgICB2YWxpZGF0ZUNvbXBvbmVudE5hbWUoa2V5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB2YWxpZGF0ZUNvbXBvbmVudE5hbWUgKG5hbWUpIHtcbiAgICBpZiAoIW5ldyBSZWdFeHAoKFwiXlthLXpBLVpdW1xcXFwtXFxcXC4wLTlfXCIgKyAodW5pY29kZVJlZ0V4cC5zb3VyY2UpICsgXCJdKiRcIikpLnRlc3QobmFtZSkpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdJbnZhbGlkIGNvbXBvbmVudCBuYW1lOiBcIicgKyBuYW1lICsgJ1wiLiBDb21wb25lbnQgbmFtZXMgJyArXG4gICAgICAgICdzaG91bGQgY29uZm9ybSB0byB2YWxpZCBjdXN0b20gZWxlbWVudCBuYW1lIGluIGh0bWw1IHNwZWNpZmljYXRpb24uJ1xuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGlzQnVpbHRJblRhZyhuYW1lKSB8fCBjb25maWcuaXNSZXNlcnZlZFRhZyhuYW1lKSkge1xuICAgICAgd2FybihcbiAgICAgICAgJ0RvIG5vdCB1c2UgYnVpbHQtaW4gb3IgcmVzZXJ2ZWQgSFRNTCBlbGVtZW50cyBhcyBjb21wb25lbnQgJyArXG4gICAgICAgICdpZDogJyArIG5hbWVcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVuc3VyZSBhbGwgcHJvcHMgb3B0aW9uIHN5bnRheCBhcmUgbm9ybWFsaXplZCBpbnRvIHRoZVxuICAgKiBPYmplY3QtYmFzZWQgZm9ybWF0LlxuICAgKi9cbiAgZnVuY3Rpb24gbm9ybWFsaXplUHJvcHMgKG9wdGlvbnMsIHZtKSB7XG4gICAgdmFyIHByb3BzID0gb3B0aW9ucy5wcm9wcztcbiAgICBpZiAoIXByb3BzKSB7IHJldHVybiB9XG4gICAgdmFyIHJlcyA9IHt9O1xuICAgIHZhciBpLCB2YWwsIG5hbWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHMpKSB7XG4gICAgICBpID0gcHJvcHMubGVuZ3RoO1xuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICB2YWwgPSBwcm9wc1tpXTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgbmFtZSA9IGNhbWVsaXplKHZhbCk7XG4gICAgICAgICAgcmVzW25hbWVdID0geyB0eXBlOiBudWxsIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2FybigncHJvcHMgbXVzdCBiZSBzdHJpbmdzIHdoZW4gdXNpbmcgYXJyYXkgc3ludGF4LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHByb3BzKSkge1xuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICAgIHZhbCA9IHByb3BzW2tleV07XG4gICAgICAgIG5hbWUgPSBjYW1lbGl6ZShrZXkpO1xuICAgICAgICByZXNbbmFtZV0gPSBpc1BsYWluT2JqZWN0KHZhbClcbiAgICAgICAgICA/IHZhbFxuICAgICAgICAgIDogeyB0eXBlOiB2YWwgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgd2FybihcbiAgICAgICAgXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcInByb3BzXFxcIjogZXhwZWN0ZWQgYW4gQXJyYXkgb3IgYW4gT2JqZWN0LCBcIiArXG4gICAgICAgIFwiYnV0IGdvdCBcIiArICh0b1Jhd1R5cGUocHJvcHMpKSArIFwiLlwiLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9XG4gICAgb3B0aW9ucy5wcm9wcyA9IHJlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBOb3JtYWxpemUgYWxsIGluamVjdGlvbnMgaW50byBPYmplY3QtYmFzZWQgZm9ybWF0XG4gICAqL1xuICBmdW5jdGlvbiBub3JtYWxpemVJbmplY3QgKG9wdGlvbnMsIHZtKSB7XG4gICAgdmFyIGluamVjdCA9IG9wdGlvbnMuaW5qZWN0O1xuICAgIGlmICghaW5qZWN0KSB7IHJldHVybiB9XG4gICAgdmFyIG5vcm1hbGl6ZWQgPSBvcHRpb25zLmluamVjdCA9IHt9O1xuICAgIGlmIChBcnJheS5pc0FycmF5KGluamVjdCkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5qZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG5vcm1hbGl6ZWRbaW5qZWN0W2ldXSA9IHsgZnJvbTogaW5qZWN0W2ldIH07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KGluamVjdCkpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBpbmplY3QpIHtcbiAgICAgICAgdmFyIHZhbCA9IGluamVjdFtrZXldO1xuICAgICAgICBub3JtYWxpemVkW2tleV0gPSBpc1BsYWluT2JqZWN0KHZhbClcbiAgICAgICAgICA/IGV4dGVuZCh7IGZyb206IGtleSB9LCB2YWwpXG4gICAgICAgICAgOiB7IGZyb206IHZhbCB9O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB3YXJuKFxuICAgICAgICBcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwiaW5qZWN0XFxcIjogZXhwZWN0ZWQgYW4gQXJyYXkgb3IgYW4gT2JqZWN0LCBcIiArXG4gICAgICAgIFwiYnV0IGdvdCBcIiArICh0b1Jhd1R5cGUoaW5qZWN0KSkgKyBcIi5cIixcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZSByYXcgZnVuY3Rpb24gZGlyZWN0aXZlcyBpbnRvIG9iamVjdCBmb3JtYXQuXG4gICAqL1xuICBmdW5jdGlvbiBub3JtYWxpemVEaXJlY3RpdmVzIChvcHRpb25zKSB7XG4gICAgdmFyIGRpcnMgPSBvcHRpb25zLmRpcmVjdGl2ZXM7XG4gICAgaWYgKGRpcnMpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBkaXJzKSB7XG4gICAgICAgIHZhciBkZWYkJDEgPSBkaXJzW2tleV07XG4gICAgICAgIGlmICh0eXBlb2YgZGVmJCQxID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgZGlyc1trZXldID0geyBiaW5kOiBkZWYkJDEsIHVwZGF0ZTogZGVmJCQxIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhc3NlcnRPYmplY3RUeXBlIChuYW1lLCB2YWx1ZSwgdm0pIHtcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgICB3YXJuKFxuICAgICAgICBcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwiXCIgKyBuYW1lICsgXCJcXFwiOiBleHBlY3RlZCBhbiBPYmplY3QsIFwiICtcbiAgICAgICAgXCJidXQgZ290IFwiICsgKHRvUmF3VHlwZSh2YWx1ZSkpICsgXCIuXCIsXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXJnZSB0d28gb3B0aW9uIG9iamVjdHMgaW50byBhIG5ldyBvbmUuXG4gICAqIENvcmUgdXRpbGl0eSB1c2VkIGluIGJvdGggaW5zdGFudGlhdGlvbiBhbmQgaW5oZXJpdGFuY2UuXG4gICAqL1xuICBmdW5jdGlvbiBtZXJnZU9wdGlvbnMgKFxuICAgIHBhcmVudCxcbiAgICBjaGlsZCxcbiAgICB2bVxuICApIHtcbiAgICB7XG4gICAgICBjaGVja0NvbXBvbmVudHMoY2hpbGQpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkID0gY2hpbGQub3B0aW9ucztcbiAgICB9XG5cbiAgICBub3JtYWxpemVQcm9wcyhjaGlsZCwgdm0pO1xuICAgIG5vcm1hbGl6ZUluamVjdChjaGlsZCwgdm0pO1xuICAgIG5vcm1hbGl6ZURpcmVjdGl2ZXMoY2hpbGQpO1xuXG4gICAgLy8gQXBwbHkgZXh0ZW5kcyBhbmQgbWl4aW5zIG9uIHRoZSBjaGlsZCBvcHRpb25zLFxuICAgIC8vIGJ1dCBvbmx5IGlmIGl0IGlzIGEgcmF3IG9wdGlvbnMgb2JqZWN0IHRoYXQgaXNuJ3RcbiAgICAvLyB0aGUgcmVzdWx0IG9mIGFub3RoZXIgbWVyZ2VPcHRpb25zIGNhbGwuXG4gICAgLy8gT25seSBtZXJnZWQgb3B0aW9ucyBoYXMgdGhlIF9iYXNlIHByb3BlcnR5LlxuICAgIGlmICghY2hpbGQuX2Jhc2UpIHtcbiAgICAgIGlmIChjaGlsZC5leHRlbmRzKSB7XG4gICAgICAgIHBhcmVudCA9IG1lcmdlT3B0aW9ucyhwYXJlbnQsIGNoaWxkLmV4dGVuZHMsIHZtKTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGlsZC5taXhpbnMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZC5taXhpbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgcGFyZW50ID0gbWVyZ2VPcHRpb25zKHBhcmVudCwgY2hpbGQubWl4aW5zW2ldLCB2bSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgb3B0aW9ucyA9IHt9O1xuICAgIHZhciBrZXk7XG4gICAgZm9yIChrZXkgaW4gcGFyZW50KSB7XG4gICAgICBtZXJnZUZpZWxkKGtleSk7XG4gICAgfVxuICAgIGZvciAoa2V5IGluIGNoaWxkKSB7XG4gICAgICBpZiAoIWhhc093bihwYXJlbnQsIGtleSkpIHtcbiAgICAgICAgbWVyZ2VGaWVsZChrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBtZXJnZUZpZWxkIChrZXkpIHtcbiAgICAgIHZhciBzdHJhdCA9IHN0cmF0c1trZXldIHx8IGRlZmF1bHRTdHJhdDtcbiAgICAgIG9wdGlvbnNba2V5XSA9IHN0cmF0KHBhcmVudFtrZXldLCBjaGlsZFtrZXldLCB2bSwga2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnNcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIGFuIGFzc2V0LlxuICAgKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgYmVjYXVzZSBjaGlsZCBpbnN0YW5jZXMgbmVlZCBhY2Nlc3NcbiAgICogdG8gYXNzZXRzIGRlZmluZWQgaW4gaXRzIGFuY2VzdG9yIGNoYWluLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVzb2x2ZUFzc2V0IChcbiAgICBvcHRpb25zLFxuICAgIHR5cGUsXG4gICAgaWQsXG4gICAgd2Fybk1pc3NpbmdcbiAgKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKHR5cGVvZiBpZCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgYXNzZXRzID0gb3B0aW9uc1t0eXBlXTtcbiAgICAvLyBjaGVjayBsb2NhbCByZWdpc3RyYXRpb24gdmFyaWF0aW9ucyBmaXJzdFxuICAgIGlmIChoYXNPd24oYXNzZXRzLCBpZCkpIHsgcmV0dXJuIGFzc2V0c1tpZF0gfVxuICAgIHZhciBjYW1lbGl6ZWRJZCA9IGNhbWVsaXplKGlkKTtcbiAgICBpZiAoaGFzT3duKGFzc2V0cywgY2FtZWxpemVkSWQpKSB7IHJldHVybiBhc3NldHNbY2FtZWxpemVkSWRdIH1cbiAgICB2YXIgUGFzY2FsQ2FzZUlkID0gY2FwaXRhbGl6ZShjYW1lbGl6ZWRJZCk7XG4gICAgaWYgKGhhc093bihhc3NldHMsIFBhc2NhbENhc2VJZCkpIHsgcmV0dXJuIGFzc2V0c1tQYXNjYWxDYXNlSWRdIH1cbiAgICAvLyBmYWxsYmFjayB0byBwcm90b3R5cGUgY2hhaW5cbiAgICB2YXIgcmVzID0gYXNzZXRzW2lkXSB8fCBhc3NldHNbY2FtZWxpemVkSWRdIHx8IGFzc2V0c1tQYXNjYWxDYXNlSWRdO1xuICAgIGlmICh3YXJuTWlzc2luZyAmJiAhcmVzKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAnRmFpbGVkIHRvIHJlc29sdmUgJyArIHR5cGUuc2xpY2UoMCwgLTEpICsgJzogJyArIGlkLFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH1cblxuICAvKiAgKi9cblxuXG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVQcm9wIChcbiAgICBrZXksXG4gICAgcHJvcE9wdGlvbnMsXG4gICAgcHJvcHNEYXRhLFxuICAgIHZtXG4gICkge1xuICAgIHZhciBwcm9wID0gcHJvcE9wdGlvbnNba2V5XTtcbiAgICB2YXIgYWJzZW50ID0gIWhhc093bihwcm9wc0RhdGEsIGtleSk7XG4gICAgdmFyIHZhbHVlID0gcHJvcHNEYXRhW2tleV07XG4gICAgLy8gYm9vbGVhbiBjYXN0aW5nXG4gICAgdmFyIGJvb2xlYW5JbmRleCA9IGdldFR5cGVJbmRleChCb29sZWFuLCBwcm9wLnR5cGUpO1xuICAgIGlmIChib29sZWFuSW5kZXggPiAtMSkge1xuICAgICAgaWYgKGFic2VudCAmJiAhaGFzT3duKHByb3AsICdkZWZhdWx0JykpIHtcbiAgICAgICAgdmFsdWUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSBoeXBoZW5hdGUoa2V5KSkge1xuICAgICAgICAvLyBvbmx5IGNhc3QgZW1wdHkgc3RyaW5nIC8gc2FtZSBuYW1lIHRvIGJvb2xlYW4gaWZcbiAgICAgICAgLy8gYm9vbGVhbiBoYXMgaGlnaGVyIHByaW9yaXR5XG4gICAgICAgIHZhciBzdHJpbmdJbmRleCA9IGdldFR5cGVJbmRleChTdHJpbmcsIHByb3AudHlwZSk7XG4gICAgICAgIGlmIChzdHJpbmdJbmRleCA8IDAgfHwgYm9vbGVhbkluZGV4IDwgc3RyaW5nSW5kZXgpIHtcbiAgICAgICAgICB2YWx1ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY2hlY2sgZGVmYXVsdCB2YWx1ZVxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YWx1ZSA9IGdldFByb3BEZWZhdWx0VmFsdWUodm0sIHByb3AsIGtleSk7XG4gICAgICAvLyBzaW5jZSB0aGUgZGVmYXVsdCB2YWx1ZSBpcyBhIGZyZXNoIGNvcHksXG4gICAgICAvLyBtYWtlIHN1cmUgdG8gb2JzZXJ2ZSBpdC5cbiAgICAgIHZhciBwcmV2U2hvdWxkT2JzZXJ2ZSA9IHNob3VsZE9ic2VydmU7XG4gICAgICB0b2dnbGVPYnNlcnZpbmcodHJ1ZSk7XG4gICAgICBvYnNlcnZlKHZhbHVlKTtcbiAgICAgIHRvZ2dsZU9ic2VydmluZyhwcmV2U2hvdWxkT2JzZXJ2ZSk7XG4gICAgfVxuICAgIHtcbiAgICAgIGFzc2VydFByb3AocHJvcCwga2V5LCB2YWx1ZSwgdm0sIGFic2VudCk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGVmYXVsdCB2YWx1ZSBvZiBhIHByb3AuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRQcm9wRGVmYXVsdFZhbHVlICh2bSwgcHJvcCwga2V5KSB7XG4gICAgLy8gbm8gZGVmYXVsdCwgcmV0dXJuIHVuZGVmaW5lZFxuICAgIGlmICghaGFzT3duKHByb3AsICdkZWZhdWx0JykpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG4gICAgdmFyIGRlZiA9IHByb3AuZGVmYXVsdDtcbiAgICAvLyB3YXJuIGFnYWluc3Qgbm9uLWZhY3RvcnkgZGVmYXVsdHMgZm9yIE9iamVjdCAmIEFycmF5XG4gICAgaWYgKGlzT2JqZWN0KGRlZikpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdJbnZhbGlkIGRlZmF1bHQgdmFsdWUgZm9yIHByb3AgXCInICsga2V5ICsgJ1wiOiAnICtcbiAgICAgICAgJ1Byb3BzIHdpdGggdHlwZSBPYmplY3QvQXJyYXkgbXVzdCB1c2UgYSBmYWN0b3J5IGZ1bmN0aW9uICcgK1xuICAgICAgICAndG8gcmV0dXJuIHRoZSBkZWZhdWx0IHZhbHVlLicsXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH1cbiAgICAvLyB0aGUgcmF3IHByb3AgdmFsdWUgd2FzIGFsc28gdW5kZWZpbmVkIGZyb20gcHJldmlvdXMgcmVuZGVyLFxuICAgIC8vIHJldHVybiBwcmV2aW91cyBkZWZhdWx0IHZhbHVlIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHdhdGNoZXIgdHJpZ2dlclxuICAgIGlmICh2bSAmJiB2bS4kb3B0aW9ucy5wcm9wc0RhdGEgJiZcbiAgICAgIHZtLiRvcHRpb25zLnByb3BzRGF0YVtrZXldID09PSB1bmRlZmluZWQgJiZcbiAgICAgIHZtLl9wcm9wc1trZXldICE9PSB1bmRlZmluZWRcbiAgICApIHtcbiAgICAgIHJldHVybiB2bS5fcHJvcHNba2V5XVxuICAgIH1cbiAgICAvLyBjYWxsIGZhY3RvcnkgZnVuY3Rpb24gZm9yIG5vbi1GdW5jdGlvbiB0eXBlc1xuICAgIC8vIGEgdmFsdWUgaXMgRnVuY3Rpb24gaWYgaXRzIHByb3RvdHlwZSBpcyBmdW5jdGlvbiBldmVuIGFjcm9zcyBkaWZmZXJlbnQgZXhlY3V0aW9uIGNvbnRleHRcbiAgICByZXR1cm4gdHlwZW9mIGRlZiA9PT0gJ2Z1bmN0aW9uJyAmJiBnZXRUeXBlKHByb3AudHlwZSkgIT09ICdGdW5jdGlvbidcbiAgICAgID8gZGVmLmNhbGwodm0pXG4gICAgICA6IGRlZlxuICB9XG5cbiAgLyoqXG4gICAqIEFzc2VydCB3aGV0aGVyIGEgcHJvcCBpcyB2YWxpZC5cbiAgICovXG4gIGZ1bmN0aW9uIGFzc2VydFByb3AgKFxuICAgIHByb3AsXG4gICAgbmFtZSxcbiAgICB2YWx1ZSxcbiAgICB2bSxcbiAgICBhYnNlbnRcbiAgKSB7XG4gICAgaWYgKHByb3AucmVxdWlyZWQgJiYgYWJzZW50KSB7XG4gICAgICB3YXJuKFxuICAgICAgICAnTWlzc2luZyByZXF1aXJlZCBwcm9wOiBcIicgKyBuYW1lICsgJ1wiJyxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHZhbHVlID09IG51bGwgJiYgIXByb3AucmVxdWlyZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgdHlwZSA9IHByb3AudHlwZTtcbiAgICB2YXIgdmFsaWQgPSAhdHlwZSB8fCB0eXBlID09PSB0cnVlO1xuICAgIHZhciBleHBlY3RlZFR5cGVzID0gW107XG4gICAgaWYgKHR5cGUpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlID0gW3R5cGVdO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlLmxlbmd0aCAmJiAhdmFsaWQ7IGkrKykge1xuICAgICAgICB2YXIgYXNzZXJ0ZWRUeXBlID0gYXNzZXJ0VHlwZSh2YWx1ZSwgdHlwZVtpXSk7XG4gICAgICAgIGV4cGVjdGVkVHlwZXMucHVzaChhc3NlcnRlZFR5cGUuZXhwZWN0ZWRUeXBlIHx8ICcnKTtcbiAgICAgICAgdmFsaWQgPSBhc3NlcnRlZFR5cGUudmFsaWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgd2FybihcbiAgICAgICAgZ2V0SW52YWxpZFR5cGVNZXNzYWdlKG5hbWUsIHZhbHVlLCBleHBlY3RlZFR5cGVzKSxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIHZhbGlkYXRvciA9IHByb3AudmFsaWRhdG9yO1xuICAgIGlmICh2YWxpZGF0b3IpIHtcbiAgICAgIGlmICghdmFsaWRhdG9yKHZhbHVlKSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdJbnZhbGlkIHByb3A6IGN1c3RvbSB2YWxpZGF0b3IgY2hlY2sgZmFpbGVkIGZvciBwcm9wIFwiJyArIG5hbWUgKyAnXCIuJyxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBzaW1wbGVDaGVja1JFID0gL14oU3RyaW5nfE51bWJlcnxCb29sZWFufEZ1bmN0aW9ufFN5bWJvbCkkLztcblxuICBmdW5jdGlvbiBhc3NlcnRUeXBlICh2YWx1ZSwgdHlwZSkge1xuICAgIHZhciB2YWxpZDtcbiAgICB2YXIgZXhwZWN0ZWRUeXBlID0gZ2V0VHlwZSh0eXBlKTtcbiAgICBpZiAoc2ltcGxlQ2hlY2tSRS50ZXN0KGV4cGVjdGVkVHlwZSkpIHtcbiAgICAgIHZhciB0ID0gdHlwZW9mIHZhbHVlO1xuICAgICAgdmFsaWQgPSB0ID09PSBleHBlY3RlZFR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAgIC8vIGZvciBwcmltaXRpdmUgd3JhcHBlciBvYmplY3RzXG4gICAgICBpZiAoIXZhbGlkICYmIHQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHZhbGlkID0gdmFsdWUgaW5zdGFuY2VvZiB0eXBlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlID09PSAnT2JqZWN0Jykge1xuICAgICAgdmFsaWQgPSBpc1BsYWluT2JqZWN0KHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gJ0FycmF5Jykge1xuICAgICAgdmFsaWQgPSBBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWQgPSB2YWx1ZSBpbnN0YW5jZW9mIHR5cGU7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB2YWxpZDogdmFsaWQsXG4gICAgICBleHBlY3RlZFR5cGU6IGV4cGVjdGVkVHlwZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgZnVuY3Rpb24gc3RyaW5nIG5hbWUgdG8gY2hlY2sgYnVpbHQtaW4gdHlwZXMsXG4gICAqIGJlY2F1c2UgYSBzaW1wbGUgZXF1YWxpdHkgY2hlY2sgd2lsbCBmYWlsIHdoZW4gcnVubmluZ1xuICAgKiBhY3Jvc3MgZGlmZmVyZW50IHZtcyAvIGlmcmFtZXMuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRUeXBlIChmbikge1xuICAgIHZhciBtYXRjaCA9IGZuICYmIGZuLnRvU3RyaW5nKCkubWF0Y2goL15cXHMqZnVuY3Rpb24gKFxcdyspLyk7XG4gICAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0gOiAnJ1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTYW1lVHlwZSAoYSwgYikge1xuICAgIHJldHVybiBnZXRUeXBlKGEpID09PSBnZXRUeXBlKGIpXG4gIH1cblxuICBmdW5jdGlvbiBnZXRUeXBlSW5kZXggKHR5cGUsIGV4cGVjdGVkVHlwZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRUeXBlcykpIHtcbiAgICAgIHJldHVybiBpc1NhbWVUeXBlKGV4cGVjdGVkVHlwZXMsIHR5cGUpID8gMCA6IC0xXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBleHBlY3RlZFR5cGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAoaXNTYW1lVHlwZShleHBlY3RlZFR5cGVzW2ldLCB0eXBlKSkge1xuICAgICAgICByZXR1cm4gaVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTFcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEludmFsaWRUeXBlTWVzc2FnZSAobmFtZSwgdmFsdWUsIGV4cGVjdGVkVHlwZXMpIHtcbiAgICB2YXIgbWVzc2FnZSA9IFwiSW52YWxpZCBwcm9wOiB0eXBlIGNoZWNrIGZhaWxlZCBmb3IgcHJvcCBcXFwiXCIgKyBuYW1lICsgXCJcXFwiLlwiICtcbiAgICAgIFwiIEV4cGVjdGVkIFwiICsgKGV4cGVjdGVkVHlwZXMubWFwKGNhcGl0YWxpemUpLmpvaW4oJywgJykpO1xuICAgIHZhciBleHBlY3RlZFR5cGUgPSBleHBlY3RlZFR5cGVzWzBdO1xuICAgIHZhciByZWNlaXZlZFR5cGUgPSB0b1Jhd1R5cGUodmFsdWUpO1xuICAgIHZhciBleHBlY3RlZFZhbHVlID0gc3R5bGVWYWx1ZSh2YWx1ZSwgZXhwZWN0ZWRUeXBlKTtcbiAgICB2YXIgcmVjZWl2ZWRWYWx1ZSA9IHN0eWxlVmFsdWUodmFsdWUsIHJlY2VpdmVkVHlwZSk7XG4gICAgLy8gY2hlY2sgaWYgd2UgbmVlZCB0byBzcGVjaWZ5IGV4cGVjdGVkIHZhbHVlXG4gICAgaWYgKGV4cGVjdGVkVHlwZXMubGVuZ3RoID09PSAxICYmXG4gICAgICAgIGlzRXhwbGljYWJsZShleHBlY3RlZFR5cGUpICYmXG4gICAgICAgICFpc0Jvb2xlYW4oZXhwZWN0ZWRUeXBlLCByZWNlaXZlZFR5cGUpKSB7XG4gICAgICBtZXNzYWdlICs9IFwiIHdpdGggdmFsdWUgXCIgKyBleHBlY3RlZFZhbHVlO1xuICAgIH1cbiAgICBtZXNzYWdlICs9IFwiLCBnb3QgXCIgKyByZWNlaXZlZFR5cGUgKyBcIiBcIjtcbiAgICAvLyBjaGVjayBpZiB3ZSBuZWVkIHRvIHNwZWNpZnkgcmVjZWl2ZWQgdmFsdWVcbiAgICBpZiAoaXNFeHBsaWNhYmxlKHJlY2VpdmVkVHlwZSkpIHtcbiAgICAgIG1lc3NhZ2UgKz0gXCJ3aXRoIHZhbHVlIFwiICsgcmVjZWl2ZWRWYWx1ZSArIFwiLlwiO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZVxuICB9XG5cbiAgZnVuY3Rpb24gc3R5bGVWYWx1ZSAodmFsdWUsIHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ1N0cmluZycpIHtcbiAgICAgIHJldHVybiAoXCJcXFwiXCIgKyB2YWx1ZSArIFwiXFxcIlwiKVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ051bWJlcicpIHtcbiAgICAgIHJldHVybiAoXCJcIiArIChOdW1iZXIodmFsdWUpKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcIlwiICsgdmFsdWUpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNFeHBsaWNhYmxlICh2YWx1ZSkge1xuICAgIHZhciBleHBsaWNpdFR5cGVzID0gWydzdHJpbmcnLCAnbnVtYmVyJywgJ2Jvb2xlYW4nXTtcbiAgICByZXR1cm4gZXhwbGljaXRUeXBlcy5zb21lKGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBlbGVtOyB9KVxuICB9XG5cbiAgZnVuY3Rpb24gaXNCb29sZWFuICgpIHtcbiAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICByZXR1cm4gYXJncy5zb21lKGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBlbGVtLnRvTG93ZXJDYXNlKCkgPT09ICdib29sZWFuJzsgfSlcbiAgfVxuXG4gIC8qICAqL1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUVycm9yIChlcnIsIHZtLCBpbmZvKSB7XG4gICAgLy8gRGVhY3RpdmF0ZSBkZXBzIHRyYWNraW5nIHdoaWxlIHByb2Nlc3NpbmcgZXJyb3IgaGFuZGxlciB0byBhdm9pZCBwb3NzaWJsZSBpbmZpbml0ZSByZW5kZXJpbmcuXG4gICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVleC9pc3N1ZXMvMTUwNVxuICAgIHB1c2hUYXJnZXQoKTtcbiAgICB0cnkge1xuICAgICAgaWYgKHZtKSB7XG4gICAgICAgIHZhciBjdXIgPSB2bTtcbiAgICAgICAgd2hpbGUgKChjdXIgPSBjdXIuJHBhcmVudCkpIHtcbiAgICAgICAgICB2YXIgaG9va3MgPSBjdXIuJG9wdGlvbnMuZXJyb3JDYXB0dXJlZDtcbiAgICAgICAgICBpZiAoaG9va3MpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgY2FwdHVyZSA9IGhvb2tzW2ldLmNhbGwoY3VyLCBlcnIsIHZtLCBpbmZvKSA9PT0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGNhcHR1cmUpIHsgcmV0dXJuIH1cbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGdsb2JhbEhhbmRsZUVycm9yKGUsIGN1ciwgJ2Vycm9yQ2FwdHVyZWQgaG9vaycpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBnbG9iYWxIYW5kbGVFcnJvcihlcnIsIHZtLCBpbmZvKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgcG9wVGFyZ2V0KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlV2l0aEVycm9ySGFuZGxpbmcgKFxuICAgIGhhbmRsZXIsXG4gICAgY29udGV4dCxcbiAgICBhcmdzLFxuICAgIHZtLFxuICAgIGluZm9cbiAgKSB7XG4gICAgdmFyIHJlcztcbiAgICB0cnkge1xuICAgICAgcmVzID0gYXJncyA/IGhhbmRsZXIuYXBwbHkoY29udGV4dCwgYXJncykgOiBoYW5kbGVyLmNhbGwoY29udGV4dCk7XG4gICAgICBpZiAocmVzICYmICFyZXMuX2lzVnVlICYmIGlzUHJvbWlzZShyZXMpICYmICFyZXMuX2hhbmRsZWQpIHtcbiAgICAgICAgcmVzLmNhdGNoKGZ1bmN0aW9uIChlKSB7IHJldHVybiBoYW5kbGVFcnJvcihlLCB2bSwgaW5mbyArIFwiIChQcm9taXNlL2FzeW5jKVwiKTsgfSk7XG4gICAgICAgIC8vIGlzc3VlICM5NTExXG4gICAgICAgIC8vIGF2b2lkIGNhdGNoIHRyaWdnZXJpbmcgbXVsdGlwbGUgdGltZXMgd2hlbiBuZXN0ZWQgY2FsbHNcbiAgICAgICAgcmVzLl9oYW5kbGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBoYW5kbGVFcnJvcihlLCB2bSwgaW5mbyk7XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIGdsb2JhbEhhbmRsZUVycm9yIChlcnIsIHZtLCBpbmZvKSB7XG4gICAgaWYgKGNvbmZpZy5lcnJvckhhbmRsZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBjb25maWcuZXJyb3JIYW5kbGVyLmNhbGwobnVsbCwgZXJyLCB2bSwgaW5mbylcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaWYgdGhlIHVzZXIgaW50ZW50aW9uYWxseSB0aHJvd3MgdGhlIG9yaWdpbmFsIGVycm9yIGluIHRoZSBoYW5kbGVyLFxuICAgICAgICAvLyBkbyBub3QgbG9nIGl0IHR3aWNlXG4gICAgICAgIGlmIChlICE9PSBlcnIpIHtcbiAgICAgICAgICBsb2dFcnJvcihlLCBudWxsLCAnY29uZmlnLmVycm9ySGFuZGxlcicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGxvZ0Vycm9yKGVyciwgdm0sIGluZm8pO1xuICB9XG5cbiAgZnVuY3Rpb24gbG9nRXJyb3IgKGVyciwgdm0sIGluZm8pIHtcbiAgICB7XG4gICAgICB3YXJuKChcIkVycm9yIGluIFwiICsgaW5mbyArIFwiOiBcXFwiXCIgKyAoZXJyLnRvU3RyaW5nKCkpICsgXCJcXFwiXCIpLCB2bSk7XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKChpbkJyb3dzZXIgfHwgaW5XZWV4KSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgLyogICovXG5cbiAgdmFyIGlzVXNpbmdNaWNyb1Rhc2sgPSBmYWxzZTtcblxuICB2YXIgY2FsbGJhY2tzID0gW107XG4gIHZhciBwZW5kaW5nID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZmx1c2hDYWxsYmFja3MgKCkge1xuICAgIHBlbmRpbmcgPSBmYWxzZTtcbiAgICB2YXIgY29waWVzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xuICAgIGNhbGxiYWNrcy5sZW5ndGggPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29waWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb3BpZXNbaV0oKTtcbiAgICB9XG4gIH1cblxuICAvLyBIZXJlIHdlIGhhdmUgYXN5bmMgZGVmZXJyaW5nIHdyYXBwZXJzIHVzaW5nIG1pY3JvdGFza3MuXG4gIC8vIEluIDIuNSB3ZSB1c2VkIChtYWNybykgdGFza3MgKGluIGNvbWJpbmF0aW9uIHdpdGggbWljcm90YXNrcykuXG4gIC8vIEhvd2V2ZXIsIGl0IGhhcyBzdWJ0bGUgcHJvYmxlbXMgd2hlbiBzdGF0ZSBpcyBjaGFuZ2VkIHJpZ2h0IGJlZm9yZSByZXBhaW50XG4gIC8vIChlLmcuICM2ODEzLCBvdXQtaW4gdHJhbnNpdGlvbnMpLlxuICAvLyBBbHNvLCB1c2luZyAobWFjcm8pIHRhc2tzIGluIGV2ZW50IGhhbmRsZXIgd291bGQgY2F1c2Ugc29tZSB3ZWlyZCBiZWhhdmlvcnNcbiAgLy8gdGhhdCBjYW5ub3QgYmUgY2lyY3VtdmVudGVkIChlLmcuICM3MTA5LCAjNzE1MywgIzc1NDYsICM3ODM0LCAjODEwOSkuXG4gIC8vIFNvIHdlIG5vdyB1c2UgbWljcm90YXNrcyBldmVyeXdoZXJlLCBhZ2Fpbi5cbiAgLy8gQSBtYWpvciBkcmF3YmFjayBvZiB0aGlzIHRyYWRlb2ZmIGlzIHRoYXQgdGhlcmUgYXJlIHNvbWUgc2NlbmFyaW9zXG4gIC8vIHdoZXJlIG1pY3JvdGFza3MgaGF2ZSB0b28gaGlnaCBhIHByaW9yaXR5IGFuZCBmaXJlIGluIGJldHdlZW4gc3VwcG9zZWRseVxuICAvLyBzZXF1ZW50aWFsIGV2ZW50cyAoZS5nLiAjNDUyMSwgIzY2OTAsIHdoaWNoIGhhdmUgd29ya2Fyb3VuZHMpXG4gIC8vIG9yIGV2ZW4gYmV0d2VlbiBidWJibGluZyBvZiB0aGUgc2FtZSBldmVudCAoIzY1NjYpLlxuICB2YXIgdGltZXJGdW5jO1xuXG4gIC8vIFRoZSBuZXh0VGljayBiZWhhdmlvciBsZXZlcmFnZXMgdGhlIG1pY3JvdGFzayBxdWV1ZSwgd2hpY2ggY2FuIGJlIGFjY2Vzc2VkXG4gIC8vIHZpYSBlaXRoZXIgbmF0aXZlIFByb21pc2UudGhlbiBvciBNdXRhdGlvbk9ic2VydmVyLlxuICAvLyBNdXRhdGlvbk9ic2VydmVyIGhhcyB3aWRlciBzdXBwb3J0LCBob3dldmVyIGl0IGlzIHNlcmlvdXNseSBidWdnZWQgaW5cbiAgLy8gVUlXZWJWaWV3IGluIGlPUyA+PSA5LjMuMyB3aGVuIHRyaWdnZXJlZCBpbiB0b3VjaCBldmVudCBoYW5kbGVycy4gSXRcbiAgLy8gY29tcGxldGVseSBzdG9wcyB3b3JraW5nIGFmdGVyIHRyaWdnZXJpbmcgYSBmZXcgdGltZXMuLi4gc28sIGlmIG5hdGl2ZVxuICAvLyBQcm9taXNlIGlzIGF2YWlsYWJsZSwgd2Ugd2lsbCB1c2UgaXQ6XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0LCAkZmxvdy1kaXNhYmxlLWxpbmUgKi9cbiAgaWYgKHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShQcm9taXNlKSkge1xuICAgIHZhciBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgdGltZXJGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgcC50aGVuKGZsdXNoQ2FsbGJhY2tzKTtcbiAgICAgIC8vIEluIHByb2JsZW1hdGljIFVJV2ViVmlld3MsIFByb21pc2UudGhlbiBkb2Vzbid0IGNvbXBsZXRlbHkgYnJlYWssIGJ1dFxuICAgICAgLy8gaXQgY2FuIGdldCBzdHVjayBpbiBhIHdlaXJkIHN0YXRlIHdoZXJlIGNhbGxiYWNrcyBhcmUgcHVzaGVkIGludG8gdGhlXG4gICAgICAvLyBtaWNyb3Rhc2sgcXVldWUgYnV0IHRoZSBxdWV1ZSBpc24ndCBiZWluZyBmbHVzaGVkLCB1bnRpbCB0aGUgYnJvd3NlclxuICAgICAgLy8gbmVlZHMgdG8gZG8gc29tZSBvdGhlciB3b3JrLCBlLmcuIGhhbmRsZSBhIHRpbWVyLiBUaGVyZWZvcmUgd2UgY2FuXG4gICAgICAvLyBcImZvcmNlXCIgdGhlIG1pY3JvdGFzayBxdWV1ZSB0byBiZSBmbHVzaGVkIGJ5IGFkZGluZyBhbiBlbXB0eSB0aW1lci5cbiAgICAgIGlmIChpc0lPUykgeyBzZXRUaW1lb3V0KG5vb3ApOyB9XG4gICAgfTtcbiAgICBpc1VzaW5nTWljcm9UYXNrID0gdHJ1ZTtcbiAgfSBlbHNlIGlmICghaXNJRSAmJiB0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgKFxuICAgIGlzTmF0aXZlKE11dGF0aW9uT2JzZXJ2ZXIpIHx8XG4gICAgLy8gUGhhbnRvbUpTIGFuZCBpT1MgNy54XG4gICAgTXV0YXRpb25PYnNlcnZlci50b1N0cmluZygpID09PSAnW29iamVjdCBNdXRhdGlvbk9ic2VydmVyQ29uc3RydWN0b3JdJ1xuICApKSB7XG4gICAgLy8gVXNlIE11dGF0aW9uT2JzZXJ2ZXIgd2hlcmUgbmF0aXZlIFByb21pc2UgaXMgbm90IGF2YWlsYWJsZSxcbiAgICAvLyBlLmcuIFBoYW50b21KUywgaU9TNywgQW5kcm9pZCA0LjRcbiAgICAvLyAoIzY0NjYgTXV0YXRpb25PYnNlcnZlciBpcyB1bnJlbGlhYmxlIGluIElFMTEpXG4gICAgdmFyIGNvdW50ZXIgPSAxO1xuICAgIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZsdXNoQ2FsbGJhY2tzKTtcbiAgICB2YXIgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcoY291bnRlcikpO1xuICAgIG9ic2VydmVyLm9ic2VydmUodGV4dE5vZGUsIHtcbiAgICAgIGNoYXJhY3RlckRhdGE6IHRydWVcbiAgICB9KTtcbiAgICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb3VudGVyID0gKGNvdW50ZXIgKyAxKSAlIDI7XG4gICAgICB0ZXh0Tm9kZS5kYXRhID0gU3RyaW5nKGNvdW50ZXIpO1xuICAgIH07XG4gICAgaXNVc2luZ01pY3JvVGFzayA9IHRydWU7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHNldEltbWVkaWF0ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoc2V0SW1tZWRpYXRlKSkge1xuICAgIC8vIEZhbGxiYWNrIHRvIHNldEltbWVkaWF0ZS5cbiAgICAvLyBUZWNobmljYWxseSBpdCBsZXZlcmFnZXMgdGhlIChtYWNybykgdGFzayBxdWV1ZSxcbiAgICAvLyBidXQgaXQgaXMgc3RpbGwgYSBiZXR0ZXIgY2hvaWNlIHRoYW4gc2V0VGltZW91dC5cbiAgICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRJbW1lZGlhdGUoZmx1c2hDYWxsYmFja3MpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2sgdG8gc2V0VGltZW91dC5cbiAgICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRUaW1lb3V0KGZsdXNoQ2FsbGJhY2tzLCAwKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbmV4dFRpY2sgKGNiLCBjdHgpIHtcbiAgICB2YXIgX3Jlc29sdmU7XG4gICAgY2FsbGJhY2tzLnB1c2goZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGNiKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY2IuY2FsbChjdHgpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgaGFuZGxlRXJyb3IoZSwgY3R4LCAnbmV4dFRpY2snKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChfcmVzb2x2ZSkge1xuICAgICAgICBfcmVzb2x2ZShjdHgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghcGVuZGluZykge1xuICAgICAgcGVuZGluZyA9IHRydWU7XG4gICAgICB0aW1lckZ1bmMoKTtcbiAgICB9XG4gICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgaWYgKCFjYiAmJiB0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICBfcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qICAqL1xuXG4gIHZhciBtYXJrO1xuICB2YXIgbWVhc3VyZTtcblxuICB7XG4gICAgdmFyIHBlcmYgPSBpbkJyb3dzZXIgJiYgd2luZG93LnBlcmZvcm1hbmNlO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChcbiAgICAgIHBlcmYgJiZcbiAgICAgIHBlcmYubWFyayAmJlxuICAgICAgcGVyZi5tZWFzdXJlICYmXG4gICAgICBwZXJmLmNsZWFyTWFya3MgJiZcbiAgICAgIHBlcmYuY2xlYXJNZWFzdXJlc1xuICAgICkge1xuICAgICAgbWFyayA9IGZ1bmN0aW9uICh0YWcpIHsgcmV0dXJuIHBlcmYubWFyayh0YWcpOyB9O1xuICAgICAgbWVhc3VyZSA9IGZ1bmN0aW9uIChuYW1lLCBzdGFydFRhZywgZW5kVGFnKSB7XG4gICAgICAgIHBlcmYubWVhc3VyZShuYW1lLCBzdGFydFRhZywgZW5kVGFnKTtcbiAgICAgICAgcGVyZi5jbGVhck1hcmtzKHN0YXJ0VGFnKTtcbiAgICAgICAgcGVyZi5jbGVhck1hcmtzKGVuZFRhZyk7XG4gICAgICAgIC8vIHBlcmYuY2xlYXJNZWFzdXJlcyhuYW1lKVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICAvKiBub3QgdHlwZSBjaGVja2luZyB0aGlzIGZpbGUgYmVjYXVzZSBmbG93IGRvZXNuJ3QgcGxheSB3ZWxsIHdpdGggUHJveHkgKi9cblxuICB2YXIgaW5pdFByb3h5O1xuXG4gIHtcbiAgICB2YXIgYWxsb3dlZEdsb2JhbHMgPSBtYWtlTWFwKFxuICAgICAgJ0luZmluaXR5LHVuZGVmaW5lZCxOYU4saXNGaW5pdGUsaXNOYU4sJyArXG4gICAgICAncGFyc2VGbG9hdCxwYXJzZUludCxkZWNvZGVVUkksZGVjb2RlVVJJQ29tcG9uZW50LGVuY29kZVVSSSxlbmNvZGVVUklDb21wb25lbnQsJyArXG4gICAgICAnTWF0aCxOdW1iZXIsRGF0ZSxBcnJheSxPYmplY3QsQm9vbGVhbixTdHJpbmcsUmVnRXhwLE1hcCxTZXQsSlNPTixJbnRsLCcgK1xuICAgICAgJ3JlcXVpcmUnIC8vIGZvciBXZWJwYWNrL0Jyb3dzZXJpZnlcbiAgICApO1xuXG4gICAgdmFyIHdhcm5Ob25QcmVzZW50ID0gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7XG4gICAgICB3YXJuKFxuICAgICAgICBcIlByb3BlcnR5IG9yIG1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaXMgbm90IGRlZmluZWQgb24gdGhlIGluc3RhbmNlIGJ1dCBcIiArXG4gICAgICAgICdyZWZlcmVuY2VkIGR1cmluZyByZW5kZXIuIE1ha2Ugc3VyZSB0aGF0IHRoaXMgcHJvcGVydHkgaXMgcmVhY3RpdmUsICcgK1xuICAgICAgICAnZWl0aGVyIGluIHRoZSBkYXRhIG9wdGlvbiwgb3IgZm9yIGNsYXNzLWJhc2VkIGNvbXBvbmVudHMsIGJ5ICcgK1xuICAgICAgICAnaW5pdGlhbGl6aW5nIHRoZSBwcm9wZXJ0eS4gJyArXG4gICAgICAgICdTZWU6IGh0dHBzOi8vdnVlanMub3JnL3YyL2d1aWRlL3JlYWN0aXZpdHkuaHRtbCNEZWNsYXJpbmctUmVhY3RpdmUtUHJvcGVydGllcy4nLFxuICAgICAgICB0YXJnZXRcbiAgICAgICk7XG4gICAgfTtcblxuICAgIHZhciB3YXJuUmVzZXJ2ZWRQcmVmaXggPSBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgIFwiUHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIG11c3QgYmUgYWNjZXNzZWQgd2l0aCBcXFwiJGRhdGEuXCIgKyBrZXkgKyBcIlxcXCIgYmVjYXVzZSBcIiArXG4gICAgICAgICdwcm9wZXJ0aWVzIHN0YXJ0aW5nIHdpdGggXCIkXCIgb3IgXCJfXCIgYXJlIG5vdCBwcm94aWVkIGluIHRoZSBWdWUgaW5zdGFuY2UgdG8gJyArXG4gICAgICAgICdwcmV2ZW50IGNvbmZsaWN0cyB3aXRoIFZ1ZSBpbnRlcm5hbHMuICcgK1xuICAgICAgICAnU2VlOiBodHRwczovL3Z1ZWpzLm9yZy92Mi9hcGkvI2RhdGEnLFxuICAgICAgICB0YXJnZXRcbiAgICAgICk7XG4gICAgfTtcblxuICAgIHZhciBoYXNQcm94eSA9XG4gICAgICB0eXBlb2YgUHJveHkgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFByb3h5KTtcblxuICAgIGlmIChoYXNQcm94eSkge1xuICAgICAgdmFyIGlzQnVpbHRJbk1vZGlmaWVyID0gbWFrZU1hcCgnc3RvcCxwcmV2ZW50LHNlbGYsY3RybCxzaGlmdCxhbHQsbWV0YSxleGFjdCcpO1xuICAgICAgY29uZmlnLmtleUNvZGVzID0gbmV3IFByb3h5KGNvbmZpZy5rZXlDb2Rlcywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCAodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGlzQnVpbHRJbk1vZGlmaWVyKGtleSkpIHtcbiAgICAgICAgICAgIHdhcm4oKFwiQXZvaWQgb3ZlcndyaXRpbmcgYnVpbHQtaW4gbW9kaWZpZXIgaW4gY29uZmlnLmtleUNvZGVzOiAuXCIgKyBrZXkpKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBoYXNIYW5kbGVyID0ge1xuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMgKHRhcmdldCwga2V5KSB7XG4gICAgICAgIHZhciBoYXMgPSBrZXkgaW4gdGFyZ2V0O1xuICAgICAgICB2YXIgaXNBbGxvd2VkID0gYWxsb3dlZEdsb2JhbHMoa2V5KSB8fFxuICAgICAgICAgICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBrZXkuY2hhckF0KDApID09PSAnXycgJiYgIShrZXkgaW4gdGFyZ2V0LiRkYXRhKSk7XG4gICAgICAgIGlmICghaGFzICYmICFpc0FsbG93ZWQpIHtcbiAgICAgICAgICBpZiAoa2V5IGluIHRhcmdldC4kZGF0YSkgeyB3YXJuUmVzZXJ2ZWRQcmVmaXgodGFyZ2V0LCBrZXkpOyB9XG4gICAgICAgICAgZWxzZSB7IHdhcm5Ob25QcmVzZW50KHRhcmdldCwga2V5KTsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoYXMgfHwgIWlzQWxsb3dlZFxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZ2V0SGFuZGxlciA9IHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0ICh0YXJnZXQsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYgIShrZXkgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgIGlmIChrZXkgaW4gdGFyZ2V0LiRkYXRhKSB7IHdhcm5SZXNlcnZlZFByZWZpeCh0YXJnZXQsIGtleSk7IH1cbiAgICAgICAgICBlbHNlIHsgd2Fybk5vblByZXNlbnQodGFyZ2V0LCBrZXkpOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldXG4gICAgICB9XG4gICAgfTtcblxuICAgIGluaXRQcm94eSA9IGZ1bmN0aW9uIGluaXRQcm94eSAodm0pIHtcbiAgICAgIGlmIChoYXNQcm94eSkge1xuICAgICAgICAvLyBkZXRlcm1pbmUgd2hpY2ggcHJveHkgaGFuZGxlciB0byB1c2VcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB2bS4kb3B0aW9ucztcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gb3B0aW9ucy5yZW5kZXIgJiYgb3B0aW9ucy5yZW5kZXIuX3dpdGhTdHJpcHBlZFxuICAgICAgICAgID8gZ2V0SGFuZGxlclxuICAgICAgICAgIDogaGFzSGFuZGxlcjtcbiAgICAgICAgdm0uX3JlbmRlclByb3h5ID0gbmV3IFByb3h5KHZtLCBoYW5kbGVycyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2bS5fcmVuZGVyUHJveHkgPSB2bTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyogICovXG5cbiAgdmFyIHNlZW5PYmplY3RzID0gbmV3IF9TZXQoKTtcblxuICAvKipcbiAgICogUmVjdXJzaXZlbHkgdHJhdmVyc2UgYW4gb2JqZWN0IHRvIGV2b2tlIGFsbCBjb252ZXJ0ZWRcbiAgICogZ2V0dGVycywgc28gdGhhdCBldmVyeSBuZXN0ZWQgcHJvcGVydHkgaW5zaWRlIHRoZSBvYmplY3RcbiAgICogaXMgY29sbGVjdGVkIGFzIGEgXCJkZWVwXCIgZGVwZW5kZW5jeS5cbiAgICovXG4gIGZ1bmN0aW9uIHRyYXZlcnNlICh2YWwpIHtcbiAgICBfdHJhdmVyc2UodmFsLCBzZWVuT2JqZWN0cyk7XG4gICAgc2Vlbk9iamVjdHMuY2xlYXIoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90cmF2ZXJzZSAodmFsLCBzZWVuKSB7XG4gICAgdmFyIGksIGtleXM7XG4gICAgdmFyIGlzQSA9IEFycmF5LmlzQXJyYXkodmFsKTtcbiAgICBpZiAoKCFpc0EgJiYgIWlzT2JqZWN0KHZhbCkpIHx8IE9iamVjdC5pc0Zyb3plbih2YWwpIHx8IHZhbCBpbnN0YW5jZW9mIFZOb2RlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHZhbC5fX29iX18pIHtcbiAgICAgIHZhciBkZXBJZCA9IHZhbC5fX29iX18uZGVwLmlkO1xuICAgICAgaWYgKHNlZW4uaGFzKGRlcElkKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHNlZW4uYWRkKGRlcElkKTtcbiAgICB9XG4gICAgaWYgKGlzQSkge1xuICAgICAgaSA9IHZhbC5sZW5ndGg7XG4gICAgICB3aGlsZSAoaS0tKSB7IF90cmF2ZXJzZSh2YWxbaV0sIHNlZW4pOyB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpO1xuICAgICAgaSA9IGtleXMubGVuZ3RoO1xuICAgICAgd2hpbGUgKGktLSkgeyBfdHJhdmVyc2UodmFsW2tleXNbaV1dLCBzZWVuKTsgfVxuICAgIH1cbiAgfVxuXG4gIC8qICAqL1xuXG4gIHZhciBub3JtYWxpemVFdmVudCA9IGNhY2hlZChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBwYXNzaXZlID0gbmFtZS5jaGFyQXQoMCkgPT09ICcmJztcbiAgICBuYW1lID0gcGFzc2l2ZSA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lO1xuICAgIHZhciBvbmNlJCQxID0gbmFtZS5jaGFyQXQoMCkgPT09ICd+JzsgLy8gUHJlZml4ZWQgbGFzdCwgY2hlY2tlZCBmaXJzdFxuICAgIG5hbWUgPSBvbmNlJCQxID8gbmFtZS5zbGljZSgxKSA6IG5hbWU7XG4gICAgdmFyIGNhcHR1cmUgPSBuYW1lLmNoYXJBdCgwKSA9PT0gJyEnO1xuICAgIG5hbWUgPSBjYXB0dXJlID8gbmFtZS5zbGljZSgxKSA6IG5hbWU7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBvbmNlOiBvbmNlJCQxLFxuICAgICAgY2FwdHVyZTogY2FwdHVyZSxcbiAgICAgIHBhc3NpdmU6IHBhc3NpdmVcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUZuSW52b2tlciAoZm5zLCB2bSkge1xuICAgIGZ1bmN0aW9uIGludm9rZXIgKCkge1xuICAgICAgdmFyIGFyZ3VtZW50cyQxID0gYXJndW1lbnRzO1xuXG4gICAgICB2YXIgZm5zID0gaW52b2tlci5mbnM7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShmbnMpKSB7XG4gICAgICAgIHZhciBjbG9uZWQgPSBmbnMuc2xpY2UoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbG9uZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhjbG9uZWRbaV0sIG51bGwsIGFyZ3VtZW50cyQxLCB2bSwgXCJ2LW9uIGhhbmRsZXJcIik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJldHVybiBoYW5kbGVyIHJldHVybiB2YWx1ZSBmb3Igc2luZ2xlIGhhbmRsZXJzXG4gICAgICAgIHJldHVybiBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhmbnMsIG51bGwsIGFyZ3VtZW50cywgdm0sIFwidi1vbiBoYW5kbGVyXCIpXG4gICAgICB9XG4gICAgfVxuICAgIGludm9rZXIuZm5zID0gZm5zO1xuICAgIHJldHVybiBpbnZva2VyXG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVMaXN0ZW5lcnMgKFxuICAgIG9uLFxuICAgIG9sZE9uLFxuICAgIGFkZCxcbiAgICByZW1vdmUkJDEsXG4gICAgY3JlYXRlT25jZUhhbmRsZXIsXG4gICAgdm1cbiAgKSB7XG4gICAgdmFyIG5hbWUsIGRlZiQkMSwgY3VyLCBvbGQsIGV2ZW50O1xuICAgIGZvciAobmFtZSBpbiBvbikge1xuICAgICAgZGVmJCQxID0gY3VyID0gb25bbmFtZV07XG4gICAgICBvbGQgPSBvbGRPbltuYW1lXTtcbiAgICAgIGV2ZW50ID0gbm9ybWFsaXplRXZlbnQobmFtZSk7XG4gICAgICBpZiAoaXNVbmRlZihjdXIpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgXCJJbnZhbGlkIGhhbmRsZXIgZm9yIGV2ZW50IFxcXCJcIiArIChldmVudC5uYW1lKSArIFwiXFxcIjogZ290IFwiICsgU3RyaW5nKGN1ciksXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNVbmRlZihvbGQpKSB7XG4gICAgICAgIGlmIChpc1VuZGVmKGN1ci5mbnMpKSB7XG4gICAgICAgICAgY3VyID0gb25bbmFtZV0gPSBjcmVhdGVGbkludm9rZXIoY3VyLCB2bSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzVHJ1ZShldmVudC5vbmNlKSkge1xuICAgICAgICAgIGN1ciA9IG9uW25hbWVdID0gY3JlYXRlT25jZUhhbmRsZXIoZXZlbnQubmFtZSwgY3VyLCBldmVudC5jYXB0dXJlKTtcbiAgICAgICAgfVxuICAgICAgICBhZGQoZXZlbnQubmFtZSwgY3VyLCBldmVudC5jYXB0dXJlLCBldmVudC5wYXNzaXZlLCBldmVudC5wYXJhbXMpO1xuICAgICAgfSBlbHNlIGlmIChjdXIgIT09IG9sZCkge1xuICAgICAgICBvbGQuZm5zID0gY3VyO1xuICAgICAgICBvbltuYW1lXSA9IG9sZDtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChuYW1lIGluIG9sZE9uKSB7XG4gICAgICBpZiAoaXNVbmRlZihvbltuYW1lXSkpIHtcbiAgICAgICAgZXZlbnQgPSBub3JtYWxpemVFdmVudChuYW1lKTtcbiAgICAgICAgcmVtb3ZlJCQxKGV2ZW50Lm5hbWUsIG9sZE9uW25hbWVdLCBldmVudC5jYXB0dXJlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiAgKi9cblxuICBmdW5jdGlvbiBtZXJnZVZOb2RlSG9vayAoZGVmLCBob29rS2V5LCBob29rKSB7XG4gICAgaWYgKGRlZiBpbnN0YW5jZW9mIFZOb2RlKSB7XG4gICAgICBkZWYgPSBkZWYuZGF0YS5ob29rIHx8IChkZWYuZGF0YS5ob29rID0ge30pO1xuICAgIH1cbiAgICB2YXIgaW52b2tlcjtcbiAgICB2YXIgb2xkSG9vayA9IGRlZltob29rS2V5XTtcblxuICAgIGZ1bmN0aW9uIHdyYXBwZWRIb29rICgpIHtcbiAgICAgIGhvb2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIC8vIGltcG9ydGFudDogcmVtb3ZlIG1lcmdlZCBob29rIHRvIGVuc3VyZSBpdCdzIGNhbGxlZCBvbmx5IG9uY2VcbiAgICAgIC8vIGFuZCBwcmV2ZW50IG1lbW9yeSBsZWFrXG4gICAgICByZW1vdmUoaW52b2tlci5mbnMsIHdyYXBwZWRIb29rKTtcbiAgICB9XG5cbiAgICBpZiAoaXNVbmRlZihvbGRIb29rKSkge1xuICAgICAgLy8gbm8gZXhpc3RpbmcgaG9va1xuICAgICAgaW52b2tlciA9IGNyZWF0ZUZuSW52b2tlcihbd3JhcHBlZEhvb2tdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoaXNEZWYob2xkSG9vay5mbnMpICYmIGlzVHJ1ZShvbGRIb29rLm1lcmdlZCkpIHtcbiAgICAgICAgLy8gYWxyZWFkeSBhIG1lcmdlZCBpbnZva2VyXG4gICAgICAgIGludm9rZXIgPSBvbGRIb29rO1xuICAgICAgICBpbnZva2VyLmZucy5wdXNoKHdyYXBwZWRIb29rKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGV4aXN0aW5nIHBsYWluIGhvb2tcbiAgICAgICAgaW52b2tlciA9IGNyZWF0ZUZuSW52b2tlcihbb2xkSG9vaywgd3JhcHBlZEhvb2tdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbnZva2VyLm1lcmdlZCA9IHRydWU7XG4gICAgZGVmW2hvb2tLZXldID0gaW52b2tlcjtcbiAgfVxuXG4gIC8qICAqL1xuXG4gIGZ1bmN0aW9uIGV4dHJhY3RQcm9wc0Zyb21WTm9kZURhdGEgKFxuICAgIGRhdGEsXG4gICAgQ3RvcixcbiAgICB0YWdcbiAgKSB7XG4gICAgLy8gd2UgYXJlIG9ubHkgZXh0cmFjdGluZyByYXcgdmFsdWVzIGhlcmUuXG4gICAgLy8gdmFsaWRhdGlvbiBhbmQgZGVmYXVsdCB2YWx1ZXMgYXJlIGhhbmRsZWQgaW4gdGhlIGNoaWxkXG4gICAgLy8gY29tcG9uZW50IGl0c2VsZi5cbiAgICB2YXIgcHJvcE9wdGlvbnMgPSBDdG9yLm9wdGlvbnMucHJvcHM7XG4gICAgaWYgKGlzVW5kZWYocHJvcE9wdGlvbnMpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIHJlcyA9IHt9O1xuICAgIHZhciBhdHRycyA9IGRhdGEuYXR0cnM7XG4gICAgdmFyIHByb3BzID0gZGF0YS5wcm9wcztcbiAgICBpZiAoaXNEZWYoYXR0cnMpIHx8IGlzRGVmKHByb3BzKSkge1xuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BPcHRpb25zKSB7XG4gICAgICAgIHZhciBhbHRLZXkgPSBoeXBoZW5hdGUoa2V5KTtcbiAgICAgICAge1xuICAgICAgICAgIHZhciBrZXlJbkxvd2VyQ2FzZSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGtleSAhPT0ga2V5SW5Mb3dlckNhc2UgJiZcbiAgICAgICAgICAgIGF0dHJzICYmIGhhc093bihhdHRycywga2V5SW5Mb3dlckNhc2UpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aXAoXG4gICAgICAgICAgICAgIFwiUHJvcCBcXFwiXCIgKyBrZXlJbkxvd2VyQ2FzZSArIFwiXFxcIiBpcyBwYXNzZWQgdG8gY29tcG9uZW50IFwiICtcbiAgICAgICAgICAgICAgKGZvcm1hdENvbXBvbmVudE5hbWUodGFnIHx8IEN0b3IpKSArIFwiLCBidXQgdGhlIGRlY2xhcmVkIHByb3AgbmFtZSBpc1wiICtcbiAgICAgICAgICAgICAgXCIgXFxcIlwiICsga2V5ICsgXCJcXFwiLiBcIiArXG4gICAgICAgICAgICAgIFwiTm90ZSB0aGF0IEhUTUwgYXR0cmlidXRlcyBhcmUgY2FzZS1pbnNlbnNpdGl2ZSBhbmQgY2FtZWxDYXNlZCBcIiArXG4gICAgICAgICAgICAgIFwicHJvcHMgbmVlZCB0byB1c2UgdGhlaXIga2ViYWItY2FzZSBlcXVpdmFsZW50cyB3aGVuIHVzaW5nIGluLURPTSBcIiArXG4gICAgICAgICAgICAgIFwidGVtcGxhdGVzLiBZb3Ugc2hvdWxkIHByb2JhYmx5IHVzZSBcXFwiXCIgKyBhbHRLZXkgKyBcIlxcXCIgaW5zdGVhZCBvZiBcXFwiXCIgKyBrZXkgKyBcIlxcXCIuXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNoZWNrUHJvcChyZXMsIHByb3BzLCBrZXksIGFsdEtleSwgdHJ1ZSkgfHxcbiAgICAgICAgY2hlY2tQcm9wKHJlcywgYXR0cnMsIGtleSwgYWx0S2V5LCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrUHJvcCAoXG4gICAgcmVzLFxuICAgIGhhc2gsXG4gICAga2V5LFxuICAgIGFsdEtleSxcbiAgICBwcmVzZXJ2ZVxuICApIHtcbiAgICBpZiAoaXNEZWYoaGFzaCkpIHtcbiAgICAgIGlmIChoYXNPd24oaGFzaCwga2V5KSkge1xuICAgICAgICByZXNba2V5XSA9IGhhc2hba2V5XTtcbiAgICAgICAgaWYgKCFwcmVzZXJ2ZSkge1xuICAgICAgICAgIGRlbGV0ZSBoYXNoW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gZWxzZSBpZiAoaGFzT3duKGhhc2gsIGFsdEtleSkpIHtcbiAgICAgICAgcmVzW2tleV0gPSBoYXNoW2FsdEtleV07XG4gICAgICAgIGlmICghcHJlc2VydmUpIHtcbiAgICAgICAgICBkZWxldGUgaGFzaFthbHRLZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLyogICovXG5cbiAgLy8gVGhlIHRlbXBsYXRlIGNvbXBpbGVyIGF0dGVtcHRzIHRvIG1pbmltaXplIHRoZSBuZWVkIGZvciBub3JtYWxpemF0aW9uIGJ5XG4gIC8vIHN0YXRpY2FsbHkgYW5hbHl6aW5nIHRoZSB0ZW1wbGF0ZSBhdCBjb21waWxlIHRpbWUuXG4gIC8vXG4gIC8vIEZvciBwbGFpbiBIVE1MIG1hcmt1cCwgbm9ybWFsaXphdGlvbiBjYW4gYmUgY29tcGxldGVseSBza2lwcGVkIGJlY2F1c2UgdGhlXG4gIC8vIGdlbmVyYXRlZCByZW5kZXIgZnVuY3Rpb24gaXMgZ3VhcmFudGVlZCB0byByZXR1cm4gQXJyYXk8Vk5vZGU+LiBUaGVyZSBhcmVcbiAgLy8gdHdvIGNhc2VzIHdoZXJlIGV4dHJhIG5vcm1hbGl6YXRpb24gaXMgbmVlZGVkOlxuXG4gIC8vIDEuIFdoZW4gdGhlIGNoaWxkcmVuIGNvbnRhaW5zIGNvbXBvbmVudHMgLSBiZWNhdXNlIGEgZnVuY3Rpb25hbCBjb21wb25lbnRcbiAgLy8gbWF5IHJldHVybiBhbiBBcnJheSBpbnN0ZWFkIG9mIGEgc2luZ2xlIHJvb3QuIEluIHRoaXMgY2FzZSwganVzdCBhIHNpbXBsZVxuICAvLyBub3JtYWxpemF0aW9uIGlzIG5lZWRlZCAtIGlmIGFueSBjaGlsZCBpcyBhbiBBcnJheSwgd2UgZmxhdHRlbiB0aGUgd2hvbGVcbiAgLy8gdGhpbmcgd2l0aCBBcnJheS5wcm90b3R5cGUuY29uY2F0LiBJdCBpcyBndWFyYW50ZWVkIHRvIGJlIG9ubHkgMS1sZXZlbCBkZWVwXG4gIC8vIGJlY2F1c2UgZnVuY3Rpb25hbCBjb21wb25lbnRzIGFscmVhZHkgbm9ybWFsaXplIHRoZWlyIG93biBjaGlsZHJlbi5cbiAgZnVuY3Rpb24gc2ltcGxlTm9ybWFsaXplQ2hpbGRyZW4gKGNoaWxkcmVuKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW5baV0pKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBjaGlsZHJlbilcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkcmVuXG4gIH1cblxuICAvLyAyLiBXaGVuIHRoZSBjaGlsZHJlbiBjb250YWlucyBjb25zdHJ1Y3RzIHRoYXQgYWx3YXlzIGdlbmVyYXRlZCBuZXN0ZWQgQXJyYXlzLFxuICAvLyBlLmcuIDx0ZW1wbGF0ZT4sIDxzbG90Piwgdi1mb3IsIG9yIHdoZW4gdGhlIGNoaWxkcmVuIGlzIHByb3ZpZGVkIGJ5IHVzZXJcbiAgLy8gd2l0aCBoYW5kLXdyaXR0ZW4gcmVuZGVyIGZ1bmN0aW9ucyAvIEpTWC4gSW4gc3VjaCBjYXNlcyBhIGZ1bGwgbm9ybWFsaXphdGlvblxuICAvLyBpcyBuZWVkZWQgdG8gY2F0ZXIgdG8gYWxsIHBvc3NpYmxlIHR5cGVzIG9mIGNoaWxkcmVuIHZhbHVlcy5cbiAgZnVuY3Rpb24gbm9ybWFsaXplQ2hpbGRyZW4gKGNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGlzUHJpbWl0aXZlKGNoaWxkcmVuKVxuICAgICAgPyBbY3JlYXRlVGV4dFZOb2RlKGNoaWxkcmVuKV1cbiAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZHJlbilcbiAgICAgICAgPyBub3JtYWxpemVBcnJheUNoaWxkcmVuKGNoaWxkcmVuKVxuICAgICAgICA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZnVuY3Rpb24gaXNUZXh0Tm9kZSAobm9kZSkge1xuICAgIHJldHVybiBpc0RlZihub2RlKSAmJiBpc0RlZihub2RlLnRleHQpICYmIGlzRmFsc2Uobm9kZS5pc0NvbW1lbnQpXG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVBcnJheUNoaWxkcmVuIChjaGlsZHJlbiwgbmVzdGVkSW5kZXgpIHtcbiAgICB2YXIgcmVzID0gW107XG4gICAgdmFyIGksIGMsIGxhc3RJbmRleCwgbGFzdDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGMgPSBjaGlsZHJlbltpXTtcbiAgICAgIGlmIChpc1VuZGVmKGMpIHx8IHR5cGVvZiBjID09PSAnYm9vbGVhbicpIHsgY29udGludWUgfVxuICAgICAgbGFzdEluZGV4ID0gcmVzLmxlbmd0aCAtIDE7XG4gICAgICBsYXN0ID0gcmVzW2xhc3RJbmRleF07XG4gICAgICAvLyAgbmVzdGVkXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjKSkge1xuICAgICAgICBpZiAoYy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgYyA9IG5vcm1hbGl6ZUFycmF5Q2hpbGRyZW4oYywgKChuZXN0ZWRJbmRleCB8fCAnJykgKyBcIl9cIiArIGkpKTtcbiAgICAgICAgICAvLyBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzXG4gICAgICAgICAgaWYgKGlzVGV4dE5vZGUoY1swXSkgJiYgaXNUZXh0Tm9kZShsYXN0KSkge1xuICAgICAgICAgICAgcmVzW2xhc3RJbmRleF0gPSBjcmVhdGVUZXh0Vk5vZGUobGFzdC50ZXh0ICsgKGNbMF0pLnRleHQpO1xuICAgICAgICAgICAgYy5zaGlmdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXMucHVzaC5hcHBseShyZXMsIGMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzUHJpbWl0aXZlKGMpKSB7XG4gICAgICAgIGlmIChpc1RleHROb2RlKGxhc3QpKSB7XG4gICAgICAgICAgLy8gbWVyZ2UgYWRqYWNlbnQgdGV4dCBub2Rlc1xuICAgICAgICAgIC8vIHRoaXMgaXMgbmVjZXNzYXJ5IGZvciBTU1IgaHlkcmF0aW9uIGJlY2F1c2UgdGV4dCBub2RlcyBhcmVcbiAgICAgICAgICAvLyBlc3NlbnRpYWxseSBtZXJnZWQgd2hlbiByZW5kZXJlZCB0byBIVE1MIHN0cmluZ3NcbiAgICAgICAgICByZXNbbGFzdEluZGV4XSA9IGNyZWF0ZVRleHRWTm9kZShsYXN0LnRleHQgKyBjKTtcbiAgICAgICAgfSBlbHNlIGlmIChjICE9PSAnJykge1xuICAgICAgICAgIC8vIGNvbnZlcnQgcHJpbWl0aXZlIHRvIHZub2RlXG4gICAgICAgICAgcmVzLnB1c2goY3JlYXRlVGV4dFZOb2RlKGMpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzVGV4dE5vZGUoYykgJiYgaXNUZXh0Tm9kZShsYXN0KSkge1xuICAgICAgICAgIC8vIG1lcmdlIGFkamFjZW50IHRleHQgbm9kZXNcbiAgICAgICAgICByZXNbbGFzdEluZGV4XSA9IGNyZWF0ZVRleHRWTm9kZShsYXN0LnRleHQgKyBjLnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGRlZmF1bHQga2V5IGZvciBuZXN0ZWQgYXJyYXkgY2hpbGRyZW4gKGxpa2VseSBnZW5lcmF0ZWQgYnkgdi1mb3IpXG4gICAgICAgICAgaWYgKGlzVHJ1ZShjaGlsZHJlbi5faXNWTGlzdCkgJiZcbiAgICAgICAgICAgIGlzRGVmKGMudGFnKSAmJlxuICAgICAgICAgICAgaXNVbmRlZihjLmtleSkgJiZcbiAgICAgICAgICAgIGlzRGVmKG5lc3RlZEluZGV4KSkge1xuICAgICAgICAgICAgYy5rZXkgPSBcIl9fdmxpc3RcIiArIG5lc3RlZEluZGV4ICsgXCJfXCIgKyBpICsgXCJfX1wiO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXMucHVzaChjKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH1cblxuICAvKiAgKi9cblxuICBmdW5jdGlvbiBpbml0UHJvdmlkZSAodm0pIHtcbiAgICB2YXIgcHJvdmlkZSA9IHZtLiRvcHRpb25zLnByb3ZpZGU7XG4gICAgaWYgKHByb3ZpZGUpIHtcbiAgICAgIHZtLl9wcm92aWRlZCA9IHR5cGVvZiBwcm92aWRlID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvdmlkZS5jYWxsKHZtKVxuICAgICAgICA6IHByb3ZpZGU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdEluamVjdGlvbnMgKHZtKSB7XG4gICAgdmFyIHJlc3VsdCA9IHJlc29sdmVJbmplY3Qodm0uJG9wdGlvbnMuaW5qZWN0LCB2bSk7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgdG9nZ2xlT2JzZXJ2aW5nKGZhbHNlKTtcbiAgICAgIE9iamVjdC5rZXlzKHJlc3VsdCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgIHtcbiAgICAgICAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwga2V5LCByZXN1bHRba2V5XSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgd2FybihcbiAgICAgICAgICAgICAgXCJBdm9pZCBtdXRhdGluZyBhbiBpbmplY3RlZCB2YWx1ZSBkaXJlY3RseSBzaW5jZSB0aGUgY2hhbmdlcyB3aWxsIGJlIFwiICtcbiAgICAgICAgICAgICAgXCJvdmVyd3JpdHRlbiB3aGVuZXZlciB0aGUgcHJvdmlkZWQgY29tcG9uZW50IHJlLXJlbmRlcnMuIFwiICtcbiAgICAgICAgICAgICAgXCJpbmplY3Rpb24gYmVpbmcgbXV0YXRlZDogXFxcIlwiICsga2V5ICsgXCJcXFwiXCIsXG4gICAgICAgICAgICAgIHZtXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNvbHZlSW5qZWN0IChpbmplY3QsIHZtKSB7XG4gICAgaWYgKGluamVjdCkge1xuICAgICAgLy8gaW5qZWN0IGlzIDphbnkgYmVjYXVzZSBmbG93IGlzIG5vdCBzbWFydCBlbm91Z2ggdG8gZmlndXJlIG91dCBjYWNoZWRcbiAgICAgIHZhciByZXN1bHQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgdmFyIGtleXMgPSBoYXNTeW1ib2xcbiAgICAgICAgPyBSZWZsZWN0Lm93bktleXMoaW5qZWN0KVxuICAgICAgICA6IE9iamVjdC5rZXlzKGluamVjdCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgLy8gIzY1NzQgaW4gY2FzZSB0aGUgaW5qZWN0IG9iamVjdCBpcyBvYnNlcnZlZC4uLlxuICAgICAgICBpZiAoa2V5ID09PSAnX19vYl9fJykgeyBjb250aW51ZSB9XG4gICAgICAgIHZhciBwcm92aWRlS2V5ID0gaW5qZWN0W2tleV0uZnJvbTtcbiAgICAgICAgdmFyIHNvdXJjZSA9IHZtO1xuICAgICAgICB3aGlsZSAoc291cmNlKSB7XG4gICAgICAgICAgaWYgKHNvdXJjZS5fcHJvdmlkZWQgJiYgaGFzT3duKHNvdXJjZS5fcHJvdmlkZWQsIHByb3ZpZGVLZXkpKSB7XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IHNvdXJjZS5fcHJvdmlkZWRbcHJvdmlkZUtleV07XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICBzb3VyY2UgPSBzb3VyY2UuJHBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICAgIGlmICgnZGVmYXVsdCcgaW4gaW5qZWN0W2tleV0pIHtcbiAgICAgICAgICAgIHZhciBwcm92aWRlRGVmYXVsdCA9IGluamVjdFtrZXldLmRlZmF1bHQ7XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IHR5cGVvZiBwcm92aWRlRGVmYXVsdCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICA/IHByb3ZpZGVEZWZhdWx0LmNhbGwodm0pXG4gICAgICAgICAgICAgIDogcHJvdmlkZURlZmF1bHQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdhcm4oKFwiSW5qZWN0aW9uIFxcXCJcIiArIGtleSArIFwiXFxcIiBub3QgZm91bmRcIiksIHZtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gIH1cblxuICAvKiAgKi9cblxuXG5cbiAgLyoqXG4gICAqIFJ1bnRpbWUgaGVscGVyIGZvciByZXNvbHZpbmcgcmF3IGNoaWxkcmVuIFZOb2RlcyBpbnRvIGEgc2xvdCBvYmplY3QuXG4gICAqL1xuICBmdW5jdGlvbiByZXNvbHZlU2xvdHMgKFxuICAgIGNoaWxkcmVuLFxuICAgIGNvbnRleHRcbiAgKSB7XG4gICAgaWYgKCFjaGlsZHJlbiB8fCAhY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9XG4gICAgdmFyIHNsb3RzID0ge307XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgdmFyIGRhdGEgPSBjaGlsZC5kYXRhO1xuICAgICAgLy8gcmVtb3ZlIHNsb3QgYXR0cmlidXRlIGlmIHRoZSBub2RlIGlzIHJlc29sdmVkIGFzIGEgVnVlIHNsb3Qgbm9kZVxuICAgICAgaWYgKGRhdGEgJiYgZGF0YS5hdHRycyAmJiBkYXRhLmF0dHJzLnNsb3QpIHtcbiAgICAgICAgZGVsZXRlIGRhdGEuYXR0cnMuc2xvdDtcbiAgICAgIH1cbiAgICAgIC8vIG5hbWVkIHNsb3RzIHNob3VsZCBvbmx5IGJlIHJlc3BlY3RlZCBpZiB0aGUgdm5vZGUgd2FzIHJlbmRlcmVkIGluIHRoZVxuICAgICAgLy8gc2FtZSBjb250ZXh0LlxuICAgICAgaWYgKChjaGlsZC5jb250ZXh0ID09PSBjb250ZXh0IHx8IGNoaWxkLmZuQ29udGV4dCA9PT0gY29udGV4dCkgJiZcbiAgICAgICAgZGF0YSAmJiBkYXRhLnNsb3QgIT0gbnVsbFxuICAgICAgKSB7XG4gICAgICAgIHZhciBuYW1lID0gZGF0YS5zbG90O1xuICAgICAgICB2YXIgc2xvdCA9IChzbG90c1tuYW1lXSB8fCAoc2xvdHNbbmFtZV0gPSBbXSkpO1xuICAgICAgICBpZiAoY2hpbGQudGFnID09PSAndGVtcGxhdGUnKSB7XG4gICAgICAgICAgc2xvdC5wdXNoLmFwcGx5KHNsb3QsIGNoaWxkLmNoaWxkcmVuIHx8IFtdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzbG90LnB1c2goY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoc2xvdHMuZGVmYXVsdCB8fCAoc2xvdHMuZGVmYXVsdCA9IFtdKSkucHVzaChjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGlnbm9yZSBzbG90cyB0aGF0IGNvbnRhaW5zIG9ubHkgd2hpdGVzcGFjZVxuICAgIGZvciAodmFyIG5hbWUkMSBpbiBzbG90cykge1xuICAgICAgaWYgKHNsb3RzW25hbWUkMV0uZXZlcnkoaXNXaGl0ZXNwYWNlKSkge1xuICAgICAgICBkZWxldGUgc2xvdHNbbmFtZSQxXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNsb3RzXG4gIH1cblxuICBmdW5jdGlvbiBpc1doaXRlc3BhY2UgKG5vZGUpIHtcbiAgICByZXR1cm4gKG5vZGUuaXNDb21tZW50ICYmICFub2RlLmFzeW5jRmFjdG9yeSkgfHwgbm9kZS50ZXh0ID09PSAnICdcbiAgfVxuXG4gIC8qICAqL1xuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVNjb3BlZFNsb3RzIChcbiAgICBzbG90cyxcbiAgICBub3JtYWxTbG90cyxcbiAgICBwcmV2U2xvdHNcbiAgKSB7XG4gICAgdmFyIHJlcztcbiAgICB2YXIgaGFzTm9ybWFsU2xvdHMgPSBPYmplY3Qua2V5cyhub3JtYWxTbG90cykubGVuZ3RoID4gMDtcbiAgICB2YXIgaXNTdGFibGUgPSBzbG90cyA/ICEhc2xvdHMuJHN0YWJsZSA6ICFoYXNOb3JtYWxTbG90cztcbiAgICB2YXIga2V5ID0gc2xvdHMgJiYgc2xvdHMuJGtleTtcbiAgICBpZiAoIXNsb3RzKSB7XG4gICAgICByZXMgPSB7fTtcbiAgICB9IGVsc2UgaWYgKHNsb3RzLl9ub3JtYWxpemVkKSB7XG4gICAgICAvLyBmYXN0IHBhdGggMTogY2hpbGQgY29tcG9uZW50IHJlLXJlbmRlciBvbmx5LCBwYXJlbnQgZGlkIG5vdCBjaGFuZ2VcbiAgICAgIHJldHVybiBzbG90cy5fbm9ybWFsaXplZFxuICAgIH0gZWxzZSBpZiAoXG4gICAgICBpc1N0YWJsZSAmJlxuICAgICAgcHJldlNsb3RzICYmXG4gICAgICBwcmV2U2xvdHMgIT09IGVtcHR5T2JqZWN0ICYmXG4gICAgICBrZXkgPT09IHByZXZTbG90cy4ka2V5ICYmXG4gICAgICAhaGFzTm9ybWFsU2xvdHMgJiZcbiAgICAgICFwcmV2U2xvdHMuJGhhc05vcm1hbFxuICAgICkge1xuICAgICAgLy8gZmFzdCBwYXRoIDI6IHN0YWJsZSBzY29wZWQgc2xvdHMgdy8gbm8gbm9ybWFsIHNsb3RzIHRvIHByb3h5LFxuICAgICAgLy8gb25seSBuZWVkIHRvIG5vcm1hbGl6ZSBvbmNlXG4gICAgICByZXR1cm4gcHJldlNsb3RzXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcyA9IHt9O1xuICAgICAgZm9yICh2YXIga2V5JDEgaW4gc2xvdHMpIHtcbiAgICAgICAgaWYgKHNsb3RzW2tleSQxXSAmJiBrZXkkMVswXSAhPT0gJyQnKSB7XG4gICAgICAgICAgcmVzW2tleSQxXSA9IG5vcm1hbGl6ZVNjb3BlZFNsb3Qobm9ybWFsU2xvdHMsIGtleSQxLCBzbG90c1trZXkkMV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGV4cG9zZSBub3JtYWwgc2xvdHMgb24gc2NvcGVkU2xvdHNcbiAgICBmb3IgKHZhciBrZXkkMiBpbiBub3JtYWxTbG90cykge1xuICAgICAgaWYgKCEoa2V5JDIgaW4gcmVzKSkge1xuICAgICAgICByZXNba2V5JDJdID0gcHJveHlOb3JtYWxTbG90KG5vcm1hbFNsb3RzLCBrZXkkMik7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGF2b3JpYXogc2VlbXMgdG8gbW9jayBhIG5vbi1leHRlbnNpYmxlICRzY29wZWRTbG90cyBvYmplY3RcbiAgICAvLyBhbmQgd2hlbiB0aGF0IGlzIHBhc3NlZCBkb3duIHRoaXMgd291bGQgY2F1c2UgYW4gZXJyb3JcbiAgICBpZiAoc2xvdHMgJiYgT2JqZWN0LmlzRXh0ZW5zaWJsZShzbG90cykpIHtcbiAgICAgIChzbG90cykuX25vcm1hbGl6ZWQgPSByZXM7XG4gICAgfVxuICAgIGRlZihyZXMsICckc3RhYmxlJywgaXNTdGFibGUpO1xuICAgIGRlZihyZXMsICcka2V5Jywga2V5KTtcbiAgICBkZWYocmVzLCAnJGhhc05vcm1hbCcsIGhhc05vcm1hbFNsb3RzKTtcbiAgICByZXR1cm4gcmVzXG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVTY29wZWRTbG90KG5vcm1hbFNsb3RzLCBrZXksIGZuKSB7XG4gICAgdmFyIG5vcm1hbGl6ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcmVzID0gYXJndW1lbnRzLmxlbmd0aCA/IGZuLmFwcGx5KG51bGwsIGFyZ3VtZW50cykgOiBmbih7fSk7XG4gICAgICByZXMgPSByZXMgJiYgdHlwZW9mIHJlcyA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkocmVzKVxuICAgICAgICA/IFtyZXNdIC8vIHNpbmdsZSB2bm9kZVxuICAgICAgICA6IG5vcm1hbGl6ZUNoaWxkcmVuKHJlcyk7XG4gICAgICByZXR1cm4gcmVzICYmIChcbiAgICAgICAgcmVzLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgICAocmVzLmxlbmd0aCA9PT0gMSAmJiByZXNbMF0uaXNDb21tZW50KSAvLyAjOTY1OFxuICAgICAgKSA/IHVuZGVmaW5lZFxuICAgICAgICA6IHJlc1xuICAgIH07XG4gICAgLy8gdGhpcyBpcyBhIHNsb3QgdXNpbmcgdGhlIG5ldyB2LXNsb3Qgc3ludGF4IHdpdGhvdXQgc2NvcGUuIGFsdGhvdWdoIGl0IGlzXG4gICAgLy8gY29tcGlsZWQgYXMgYSBzY29wZWQgc2xvdCwgcmVuZGVyIGZuIHVzZXJzIHdvdWxkIGV4cGVjdCBpdCB0byBiZSBwcmVzZW50XG4gICAgLy8gb24gdGhpcy4kc2xvdHMgYmVjYXVzZSB0aGUgdXNhZ2UgaXMgc2VtYW50aWNhbGx5IGEgbm9ybWFsIHNsb3QuXG4gICAgaWYgKGZuLnByb3h5KSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobm9ybWFsU2xvdHMsIGtleSwge1xuICAgICAgICBnZXQ6IG5vcm1hbGl6ZWQsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBub3JtYWxpemVkXG4gIH1cblxuICBmdW5jdGlvbiBwcm94eU5vcm1hbFNsb3Qoc2xvdHMsIGtleSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBzbG90c1trZXldOyB9XG4gIH1cblxuICAvKiAgKi9cblxuICAvKipcbiAgICogUnVudGltZSBoZWxwZXIgZm9yIHJlbmRlcmluZyB2LWZvciBsaXN0cy5cbiAgICovXG4gIGZ1bmN0aW9uIHJlbmRlckxpc3QgKFxuICAgIHZhbCxcbiAgICByZW5kZXJcbiAgKSB7XG4gICAgdmFyIHJldCwgaSwgbCwga2V5cywga2V5O1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkgfHwgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldCA9IG5ldyBBcnJheSh2YWwubGVuZ3RoKTtcbiAgICAgIGZvciAoaSA9IDAsIGwgPSB2YWwubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHJldFtpXSA9IHJlbmRlcih2YWxbaV0sIGkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldCA9IG5ldyBBcnJheSh2YWwpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IHZhbDsgaSsrKSB7XG4gICAgICAgIHJldFtpXSA9IHJlbmRlcihpICsgMSwgaSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc09iamVjdCh2YWwpKSB7XG4gICAgICBpZiAoaGFzU3ltYm9sICYmIHZhbFtTeW1ib2wuaXRlcmF0b3JdKSB7XG4gICAgICAgIHJldCA9IFtdO1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSB2YWxbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICB3aGlsZSAoIXJlc3VsdC5kb25lKSB7XG4gICAgICAgICAgcmV0LnB1c2gocmVuZGVyKHJlc3VsdC52YWx1ZSwgcmV0Lmxlbmd0aCkpO1xuICAgICAgICAgIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKHZhbCk7XG4gICAgICAgIHJldCA9IG5ldyBBcnJheShrZXlzLmxlbmd0aCk7XG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgcmV0W2ldID0gcmVuZGVyKHZhbFtrZXldLCBrZXksIGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghaXNEZWYocmV0KSkge1xuICAgICAgcmV0ID0gW107XG4gICAgfVxuICAgIChyZXQpLl9pc1ZMaXN0ID0gdHJ1ZTtcbiAgICByZXR1cm4gcmV0XG4gIH1cblxuICAvKiAgKi9cblxuICAvKipcbiAgICogUnVudGltZSBoZWxwZXIgZm9yIHJlbmRlcmluZyA8c2xvdD5cbiAgICovXG4gIGZ1bmN0aW9uIHJlbmRlclNsb3QgKFxuICAgIG5hbWUsXG4gICAgZmFsbGJhY2ssXG4gICAgcHJvcHMsXG4gICAgYmluZE9iamVjdFxuICApIHtcbiAgICB2YXIgc2NvcGVkU2xvdEZuID0gdGhpcy4kc2NvcGVkU2xvdHNbbmFtZV07XG4gICAgdmFyIG5vZGVzO1xuICAgIGlmIChzY29wZWRTbG90Rm4pIHsgLy8gc2NvcGVkIHNsb3RcbiAgICAgIHByb3BzID0gcHJvcHMgfHwge307XG4gICAgICBpZiAoYmluZE9iamVjdCkge1xuICAgICAgICBpZiAoIWlzT2JqZWN0KGJpbmRPYmplY3QpKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgICdzbG90IHYtYmluZCB3aXRob3V0IGFyZ3VtZW50IGV4cGVjdHMgYW4gT2JqZWN0JyxcbiAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHByb3BzID0gZXh0ZW5kKGV4dGVuZCh7fSwgYmluZE9iamVjdCksIHByb3BzKTtcbiAgICAgIH1cbiAgICAgIG5vZGVzID0gc2NvcGVkU2xvdEZuKHByb3BzKSB8fCBmYWxsYmFjaztcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZXMgPSB0aGlzLiRzbG90c1tuYW1lXSB8fCBmYWxsYmFjaztcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0ID0gcHJvcHMgJiYgcHJvcHMuc2xvdDtcbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnLCB7IHNsb3Q6IHRhcmdldCB9LCBub2RlcylcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5vZGVzXG4gICAgfVxuICB9XG5cbiAgLyogICovXG5cbiAgLyoqXG4gICAqIFJ1bnRpbWUgaGVscGVyIGZvciByZXNvbHZpbmcgZmlsdGVyc1xuICAgKi9cbiAgZnVuY3Rpb24gcmVzb2x2ZUZpbHRlciAoaWQpIHtcbiAgICByZXR1cm4gcmVzb2x2ZUFzc2V0KHRoaXMuJG9wdGlvbnMsICdmaWx0ZXJzJywgaWQsIHRydWUpIHx8IGlkZW50aXR5XG4gIH1cblxuICAvKiAgKi9cblxuICBmdW5jdGlvbiBpc0tleU5vdE1hdGNoIChleHBlY3QsIGFjdHVhbCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGV4cGVjdCkpIHtcbiAgICAgIHJldHVybiBleHBlY3QuaW5kZXhPZihhY3R1YWwpID09PSAtMVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZXhwZWN0ICE9PSBhY3R1YWxcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUnVudGltZSBoZWxwZXIgZm9yIGNoZWNraW5nIGtleUNvZGVzIGZyb20gY29uZmlnLlxuICAgKiBleHBvc2VkIGFzIFZ1ZS5wcm90b3R5cGUuX2tcbiAgICogcGFzc2luZyBpbiBldmVudEtleU5hbWUgYXMgbGFzdCBhcmd1bWVudCBzZXBhcmF0ZWx5IGZvciBiYWNrd2FyZHMgY29tcGF0XG4gICAqL1xuICBmdW5jdGlvbiBjaGVja0tleUNvZGVzIChcbiAgICBldmVudEtleUNvZGUsXG4gICAga2V5LFxuICAgIGJ1aWx0SW5LZXlDb2RlLFxuICAgIGV2ZW50S2V5TmFtZSxcbiAgICBidWlsdEluS2V5TmFtZVxuICApIHtcbiAgICB2YXIgbWFwcGVkS2V5Q29kZSA9IGNvbmZpZy5rZXlDb2Rlc1trZXldIHx8IGJ1aWx0SW5LZXlDb2RlO1xuICAgIGlmIChidWlsdEluS2V5TmFtZSAmJiBldmVudEtleU5hbWUgJiYgIWNvbmZpZy5rZXlDb2Rlc1trZXldKSB7XG4gICAgICByZXR1cm4gaXNLZXlOb3RNYXRjaChidWlsdEluS2V5TmFtZSwgZXZlbnRLZXlOYW1lKVxuICAgIH0gZWxzZSBpZiAobWFwcGVkS2V5Q29kZSkge1xuICAgICAgcmV0dXJuIGlzS2V5Tm90TWF0Y2gobWFwcGVkS2V5Q29kZSwgZXZlbnRLZXlDb2RlKVxuICAgIH0gZWxzZSBpZiAoZXZlbnRLZXlOYW1lKSB7XG4gICAgICByZXR1cm4gaHlwaGVuYXRlKGV2ZW50S2V5TmFtZSkgIT09IGtleVxuICAgIH1cbiAgfVxuXG4gIC8qICAqL1xuXG4gIC8qKlxuICAgKiBSdW50aW1lIGhlbHBlciBmb3IgbWVyZ2luZyB2LWJpbmQ9XCJvYmplY3RcIiBpbnRvIGEgVk5vZGUncyBkYXRhLlxuICAgKi9cbiAgZnVuY3Rpb24gYmluZE9iamVjdFByb3BzIChcbiAgICBkYXRhLFxuICAgIHRhZyxcbiAgICB2YWx1ZSxcbiAgICBhc1Byb3AsXG4gICAgaXNTeW5jXG4gICkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAndi1iaW5kIHdpdGhvdXQgYXJndW1lbnQgZXhwZWN0cyBhbiBPYmplY3Qgb3IgQXJyYXkgdmFsdWUnLFxuICAgICAgICAgIHRoaXNcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIHZhbHVlID0gdG9PYmplY3QodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoYXNoO1xuICAgICAgICB2YXIgbG9vcCA9IGZ1bmN0aW9uICgga2V5ICkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGtleSA9PT0gJ2NsYXNzJyB8fFxuICAgICAgICAgICAga2V5ID09PSAnc3R5bGUnIHx8XG4gICAgICAgICAgICBpc1Jlc2VydmVkQXR0cmlidXRlKGtleSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGhhc2ggPSBkYXRhO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdHlwZSA9IGRhdGEuYXR0cnMgJiYgZGF0YS5hdHRycy50eXBlO1xuICAgICAgICAgICAgaGFzaCA9IGFzUHJvcCB8fCBjb25maWcubXVzdFVzZVByb3AodGFnLCB0eXBlLCBrZXkpXG4gICAgICAgICAgICAgID8gZGF0YS5kb21Qcm9wcyB8fCAoZGF0YS5kb21Qcm9wcyA9IHt9KVxuICAgICAgICAgICAgICA6IGRhdGEuYXR0cnMgfHwgKGRhdGEuYXR0cnMgPSB7fSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBjYW1lbGl6ZWRLZXkgPSBjYW1lbGl6ZShrZXkpO1xuICAgICAgICAgIHZhciBoeXBoZW5hdGVkS2V5ID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICAgICAgaWYgKCEoY2FtZWxpemVkS2V5IGluIGhhc2gpICYmICEoaHlwaGVuYXRlZEtleSBpbiBoYXNoKSkge1xuICAgICAgICAgICAgaGFzaFtrZXldID0gdmFsdWVba2V5XTtcblxuICAgICAgICAgICAgaWYgKGlzU3luYykge1xuICAgICAgICAgICAgICB2YXIgb24gPSBkYXRhLm9uIHx8IChkYXRhLm9uID0ge30pO1xuICAgICAgICAgICAgICBvblsoXCJ1cGRhdGU6XCIgKyBrZXkpXSA9IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVtrZXldID0gJGV2ZW50O1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIGxvb3AoIGtleSApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgLyogICovXG5cbiAgLyoqXG4gICAqIFJ1bnRpbWUgaGVscGVyIGZvciByZW5kZXJpbmcgc3RhdGljIHRyZWVzLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVuZGVyU3RhdGljIChcbiAgICBpbmRleCxcbiAgICBpc0luRm9yXG4gICkge1xuICAgIHZhciBjYWNoZWQgPSB0aGlzLl9zdGF0aWNUcmVlcyB8fCAodGhpcy5fc3RhdGljVHJlZXMgPSBbXSk7XG4gICAgdmFyIHRyZWUgPSBjYWNoZWRbaW5kZXhdO1xuICAgIC8vIGlmIGhhcyBhbHJlYWR5LXJlbmRlcmVkIHN0YXRpYyB0cmVlIGFuZCBub3QgaW5zaWRlIHYtZm9yLFxuICAgIC8vIHdlIGNhbiByZXVzZSB0aGUgc2FtZSB0cmVlLlxuICAgIGlmICh0cmVlICYmICFpc0luRm9yKSB7XG4gICAgICByZXR1cm4gdHJlZVxuICAgIH1cbiAgICAvLyBvdGhlcndpc2UsIHJlbmRlciBhIGZyZXNoIHRyZWUuXG4gICAgdHJlZSA9IGNhY2hlZFtpbmRleF0gPSB0aGlzLiRvcHRpb25zLnN0YXRpY1JlbmRlckZuc1tpbmRleF0uY2FsbChcbiAgICAgIHRoaXMuX3JlbmRlclByb3h5LFxuICAgICAgbnVsbCxcbiAgICAgIHRoaXMgLy8gZm9yIHJlbmRlciBmbnMgZ2VuZXJhdGVkIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCB0ZW1wbGF0ZXNcbiAgICApO1xuICAgIG1hcmtTdGF0aWModHJlZSwgKFwiX19zdGF0aWNfX1wiICsgaW5kZXgpLCBmYWxzZSk7XG4gICAgcmV0dXJuIHRyZWVcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW50aW1lIGhlbHBlciBmb3Igdi1vbmNlLlxuICAgKiBFZmZlY3RpdmVseSBpdCBtZWFucyBtYXJraW5nIHRoZSBub2RlIGFzIHN0YXRpYyB3aXRoIGEgdW5pcXVlIGtleS5cbiAgICovXG4gIGZ1bmN0aW9uIG1hcmtPbmNlIChcbiAgICB0cmVlLFxuICAgIGluZGV4LFxuICAgIGtleVxuICApIHtcbiAgICBtYXJrU3RhdGljKHRyZWUsIChcIl9fb25jZV9fXCIgKyBpbmRleCArIChrZXkgPyAoXCJfXCIgKyBrZXkpIDogXCJcIikpLCB0cnVlKTtcbiAgICByZXR1cm4gdHJlZVxuICB9XG5cbiAgZnVuY3Rpb24gbWFya1N0YXRpYyAoXG4gICAgdHJlZSxcbiAgICBrZXksXG4gICAgaXNPbmNlXG4gICkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRyZWUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyZWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRyZWVbaV0gJiYgdHlwZW9mIHRyZWVbaV0gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgbWFya1N0YXRpY05vZGUodHJlZVtpXSwgKGtleSArIFwiX1wiICsgaSksIGlzT25jZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWFya1N0YXRpY05vZGUodHJlZSwga2V5LCBpc09uY2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1hcmtTdGF0aWNOb2RlIChub2RlLCBrZXksIGlzT25jZSkge1xuICAgIG5vZGUuaXNTdGF0aWMgPSB0cnVlO1xuICAgIG5vZGUua2V5ID0ga2V5O1xuICAgIG5vZGUuaXNPbmNlID0gaXNPbmNlO1xuICB9XG5cbiAgLyogICovXG5cbiAgZnVuY3Rpb24gYmluZE9iamVjdExpc3RlbmVycyAoZGF0YSwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAndi1vbiB3aXRob3V0IGFyZ3VtZW50IGV4cGVjdHMgYW4gT2JqZWN0IHZhbHVlJyxcbiAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgb24gPSBkYXRhLm9uID0gZGF0YS5vbiA/IGV4dGVuZCh7fSwgZGF0YS5vbikgOiB7fTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgICAgICAgdmFyIGV4aXN0aW5nID0gb25ba2V5XTtcbiAgICAgICAgICB2YXIgb3VycyA9IHZhbHVlW2tleV07XG4gICAgICAgICAgb25ba2V5XSA9IGV4aXN0aW5nID8gW10uY29uY2F0KGV4aXN0aW5nLCBvdXJzKSA6IG91cnM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuXG4gIC8qICAqL1xuXG4gIGZ1bmN0aW9uIHJlc29sdmVTY29wZWRTbG90cyAoXG4gICAgZm5zLCAvLyBzZWUgZmxvdy92bm9kZVxuICAgIHJlcyxcbiAgICAvLyB0aGUgZm9sbG93aW5nIGFyZSBhZGRlZCBpbiAyLjZcbiAgICBoYXNEeW5hbWljS2V5cyxcbiAgICBjb250ZW50SGFzaEtleVxuICApIHtcbiAgICByZXMgPSByZXMgfHwgeyAkc3RhYmxlOiAhaGFzRHluYW1pY0tleXMgfTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZucy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNsb3QgPSBmbnNbaV07XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzbG90KSkge1xuICAgICAgICByZXNvbHZlU2NvcGVkU2xvdHMoc2xvdCwgcmVzLCBoYXNEeW5hbWljS2V5cyk7XG4gICAgICB9IGVsc2UgaWYgKHNsb3QpIHtcbiAgICAgICAgLy8gbWFya2VyIGZvciByZXZlcnNlIHByb3h5aW5nIHYtc2xvdCB3aXRob3V0IHNjb3BlIG9uIHRoaXMuJHNsb3RzXG4gICAgICAgIGlmIChzbG90LnByb3h5KSB7XG4gICAgICAgICAgc2xvdC5mbi5wcm94eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVzW3Nsb3Qua2V5XSA9IHNsb3QuZm47XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjb250ZW50SGFzaEtleSkge1xuICAgICAgKHJlcykuJGtleSA9IGNvbnRlbnRIYXNoS2V5O1xuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH1cblxuICAvKiAgKi9cblxuICBmdW5jdGlvbiBiaW5kRHluYW1pY0tleXMgKGJhc2VPYmosIHZhbHVlcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICB2YXIga2V5ID0gdmFsdWVzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIGtleSkge1xuICAgICAgICBiYXNlT2JqW3ZhbHVlc1tpXV0gPSB2YWx1ZXNbaSArIDFdO1xuICAgICAgfSBlbHNlIGlmIChrZXkgIT09ICcnICYmIGtleSAhPT0gbnVsbCkge1xuICAgICAgICAvLyBudWxsIGlzIGEgc3BlY2lhbCB2YWx1ZSBmb3IgZXhwbGljaXRseSByZW1vdmluZyBhIGJpbmRpbmdcbiAgICAgICAgd2FybihcbiAgICAgICAgICAoXCJJbnZhbGlkIHZhbHVlIGZvciBkeW5hbWljIGRpcmVjdGl2ZSBhcmd1bWVudCAoZXhwZWN0ZWQgc3RyaW5nIG9yIG51bGwpOiBcIiArIGtleSksXG4gICAgICAgICAgdGhpc1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYmFzZU9ialxuICB9XG5cbiAgLy8gaGVscGVyIHRvIGR5bmFtaWNhbGx5IGFwcGVuZCBtb2RpZmllciBydW50aW1lIG1hcmtlcnMgdG8gZXZlbnQgbmFtZXMuXG4gIC8vIGVuc3VyZSBvbmx5IGFwcGVuZCB3aGVuIHZhbHVlIGlzIGFscmVhZHkgc3RyaW5nLCBvdGhlcndpc2UgaXQgd2lsbCBiZSBjYXN0XG4gIC8vIHRvIHN0cmluZyBhbmQgY2F1c2UgdGhlIHR5cGUgY2hlY2sgdG8gbWlzcy5cbiAgZnVuY3Rpb24gcHJlcGVuZE1vZGlmaWVyICh2YWx1ZSwgc3ltYm9sKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBzeW1ib2wgKyB2YWx1ZSA6IHZhbHVlXG4gIH1cblxuICAvKiAgKi9cblxuICBmdW5jdGlvbiBpbnN0YWxsUmVuZGVySGVscGVycyAodGFyZ2V0KSB7XG4gICAgdGFyZ2V0Ll9vID0gbWFya09uY2U7XG4gICAgdGFyZ2V0Ll9uID0gdG9OdW1iZXI7XG4gICAgdGFyZ2V0Ll9zID0gdG9TdHJpbmc7XG4gICAgdGFyZ2V0Ll9sID0gcmVuZGVyTGlzdDtcbiAgICB0YXJnZXQuX3QgPSByZW5kZXJTbG90O1xuICAgIHRhcmdldC5fcSA9IGxvb3NlRXF1YWw7XG4gICAgdGFyZ2V0Ll9pID0gbG9vc2VJbmRleE9mO1xuICAgIHRhcmdldC5fbSA9IHJlbmRlclN0YXRpYztcbiAgICB0YXJnZXQuX2YgPSByZXNvbHZlRmlsdGVyO1xuICAgIHRhcmdldC5fayA9IGNoZWNrS2V5Q29kZXM7XG4gICAgdGFyZ2V0Ll9iID0gYmluZE9iamVjdFByb3BzO1xuICAgIHRhcmdldC5fdiA9IGNyZWF0ZVRleHRWTm9kZTtcbiAgICB0YXJnZXQuX2UgPSBjcmVhdGVFbXB0eVZOb2RlO1xuICAgIHRhcmdldC5fdSA9IHJlc29sdmVTY29wZWRTbG90cztcbiAgICB0YXJnZXQuX2cgPSBiaW5kT2JqZWN0TGlzdGVuZXJzO1xuICAgIHRhcmdldC5fZCA9IGJpbmREeW5hbWljS2V5cztcbiAgICB0YXJnZXQuX3AgPSBwcmVwZW5kTW9kaWZpZXI7XG4gIH1cblxuICAvKiAgKi9cblxuICBmdW5jdGlvbiBGdW5jdGlvbmFsUmVuZGVyQ29udGV4dCAoXG4gICAgZGF0YSxcbiAgICBwcm9wcyxcbiAgICBjaGlsZHJlbixcbiAgICBwYXJlbnQsXG4gICAgQ3RvclxuICApIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciBvcHRpb25zID0gQ3Rvci5vcHRpb25zO1xuICAgIC8vIGVuc3VyZSB0aGUgY3JlYXRlRWxlbWVudCBmdW5jdGlvbiBpbiBmdW5jdGlvbmFsIGNvbXBvbmVudHNcbiAgICAvLyBnZXRzIGEgdW5pcXVlIGNvbnRleHQgLSB0aGlzIGlzIG5lY2Vzc2FyeSBmb3IgY29ycmVjdCBuYW1lZCBzbG90IGNoZWNrXG4gICAgdmFyIGNvbnRleHRWbTtcbiAgICBpZiAoaGFzT3duKHBhcmVudCwgJ191aWQnKSkge1xuICAgICAgY29udGV4dFZtID0gT2JqZWN0LmNyZWF0ZShwYXJlbnQpO1xuICAgICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgICBjb250ZXh0Vm0uX29yaWdpbmFsID0gcGFyZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGUgY29udGV4dCB2bSBwYXNzZWQgaW4gaXMgYSBmdW5jdGlvbmFsIGNvbnRleHQgYXMgd2VsbC5cbiAgICAgIC8vIGluIHRoaXMgY2FzZSB3ZSB3YW50IHRvIG1ha2Ugc3VyZSB3ZSBhcmUgYWJsZSB0byBnZXQgYSBob2xkIHRvIHRoZVxuICAgICAgLy8gcmVhbCBjb250ZXh0IGluc3RhbmNlLlxuICAgICAgY29udGV4dFZtID0gcGFyZW50O1xuICAgICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgICBwYXJlbnQgPSBwYXJlbnQuX29yaWdpbmFsO1xuICAgIH1cbiAgICB2YXIgaXNDb21waWxlZCA9IGlzVHJ1ZShvcHRpb25zLl9jb21waWxlZCk7XG4gICAgdmFyIG5lZWROb3JtYWxpemF0aW9uID0gIWlzQ29tcGlsZWQ7XG5cbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBkYXRhLm9uIHx8IGVtcHR5T2JqZWN0O1xuICAgIHRoaXMuaW5qZWN0aW9ucyA9IHJlc29sdmVJbmplY3Qob3B0aW9ucy5pbmplY3QsIHBhcmVudCk7XG4gICAgdGhpcy5zbG90cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghdGhpcyQxLiRzbG90cykge1xuICAgICAgICBub3JtYWxpemVTY29wZWRTbG90cyhcbiAgICAgICAgICBkYXRhLnNjb3BlZFNsb3RzLFxuICAgICAgICAgIHRoaXMkMS4kc2xvdHMgPSByZXNvbHZlU2xvdHMoY2hpbGRyZW4sIHBhcmVudClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzJDEuJHNsb3RzXG4gICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnc2NvcGVkU2xvdHMnLCAoe1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0ICgpIHtcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZVNjb3BlZFNsb3RzKGRhdGEuc2NvcGVkU2xvdHMsIHRoaXMuc2xvdHMoKSlcbiAgICAgIH1cbiAgICB9KSk7XG5cbiAgICAvLyBzdXBwb3J0IGZvciBjb21waWxlZCBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gICAgaWYgKGlzQ29tcGlsZWQpIHtcbiAgICAgIC8vIGV4cG9zaW5nICRvcHRpb25zIGZvciByZW5kZXJTdGF0aWMoKVxuICAgICAgdGhpcy4kb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAvLyBwcmUtcmVzb2x2ZSBzbG90cyBmb3IgcmVuZGVyU2xvdCgpXG4gICAgICB0aGlzLiRzbG90cyA9IHRoaXMuc2xvdHMoKTtcbiAgICAgIHRoaXMuJHNjb3BlZFNsb3RzID0gbm9ybWFsaXplU2NvcGVkU2xvdHMoZGF0YS5zY29wZWRTbG90cywgdGhpcy4kc2xvdHMpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLl9zY29wZUlkKSB7XG4gICAgICB0aGlzLl9jID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcbiAgICAgICAgdmFyIHZub2RlID0gY3JlYXRlRWxlbWVudChjb250ZXh0Vm0sIGEsIGIsIGMsIGQsIG5lZWROb3JtYWxpemF0aW9uKTtcbiAgICAgICAgaWYgKHZub2RlICYmICFBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgICAgICAgIHZub2RlLmZuU2NvcGVJZCA9IG9wdGlvbnMuX3Njb3BlSWQ7XG4gICAgICAgICAgdm5vZGUuZm5Db250ZXh0ID0gcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2bm9kZVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYyA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7IHJldHVybiBjcmVhdGVFbGVtZW50KGNvbnRleHRWbSwgYSwgYiwgYywgZCwgbmVlZE5vcm1hbGl6YXRpb24pOyB9O1xuICAgIH1cbiAgfVxuXG4gIGluc3RhbGxSZW5kZXJIZWxwZXJzKEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0LnByb3RvdHlwZSk7XG5cbiAgZnVuY3Rpb24gY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudCAoXG4gICAgQ3RvcixcbiAgICBwcm9wc0RhdGEsXG4gICAgZGF0YSxcbiAgICBjb250ZXh0Vm0sXG4gICAgY2hpbGRyZW5cbiAgKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnM7XG4gICAgdmFyIHByb3BzID0ge307XG4gICAgdmFyIHByb3BPcHRpb25zID0gb3B0aW9ucy5wcm9wcztcbiAgICBpZiAoaXNEZWYocHJvcE9wdGlvbnMpKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcE9wdGlvbnMpIHtcbiAgICAgICAgcHJvcHNba2V5XSA9IHZhbGlkYXRlUHJvcChrZXksIHByb3BPcHRpb25zLCBwcm9wc0RhdGEgfHwgZW1wdHlPYmplY3QpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaXNEZWYoZGF0YS5hdHRycykpIHsgbWVyZ2VQcm9wcyhwcm9wcywgZGF0YS5hdHRycyk7IH1cbiAgICAgIGlmIChpc0RlZihkYXRhLnByb3BzKSkgeyBtZXJnZVByb3BzKHByb3BzLCBkYXRhLnByb3BzKTsgfVxuICAgIH1cblxuICAgIHZhciByZW5kZXJDb250ZXh0ID0gbmV3IEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0KFxuICAgICAgZGF0YSxcbiAgICAgIHByb3BzLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBjb250ZXh0Vm0sXG4gICAgICBDdG9yXG4gICAgKTtcblxuICAgIHZhciB2bm9kZSA9IG9wdGlvbnMucmVuZGVyLmNhbGwobnVsbCwgcmVuZGVyQ29udGV4dC5fYywgcmVuZGVyQ29udGV4dCk7XG5cbiAgICBpZiAodm5vZGUgaW5zdGFuY2VvZiBWTm9kZSkge1xuICAgICAgcmV0dXJuIGNsb25lQW5kTWFya0Z1bmN0aW9uYWxSZXN1bHQodm5vZGUsIGRhdGEsIHJlbmRlckNvbnRleHQucGFyZW50LCBvcHRpb25zLCByZW5kZXJDb250ZXh0KVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2bm9kZSkpIHtcbiAgICAgIHZhciB2bm9kZXMgPSBub3JtYWxpemVDaGlsZHJlbih2bm9kZSkgfHwgW107XG4gICAgICB2YXIgcmVzID0gbmV3IEFycmF5KHZub2Rlcy5sZW5ndGgpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2bm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzW2ldID0gY2xvbmVBbmRNYXJrRnVuY3Rpb25hbFJlc3VsdCh2bm9kZXNbaV0sIGRhdGEsIHJlbmRlckNvbnRleHQucGFyZW50LCBvcHRpb25zLCByZW5kZXJDb250ZXh0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXNcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbG9uZUFuZE1hcmtGdW5jdGlvbmFsUmVzdWx0ICh2bm9kZSwgZGF0YSwgY29udGV4dFZtLCBvcHRpb25zLCByZW5kZXJDb250ZXh0KSB7XG4gICAgLy8gIzc4MTcgY2xvbmUgbm9kZSBiZWZvcmUgc2V0dGluZyBmbkNvbnRleHQsIG90aGVyd2lzZSBpZiB0aGUgbm9kZSBpcyByZXVzZWRcbiAgICAvLyAoZS5nLiBpdCB3YXMgZnJvbSBhIGNhY2hlZCBub3JtYWwgc2xvdCkgdGhlIGZuQ29udGV4dCBjYXVzZXMgbmFtZWQgc2xvdHNcbiAgICAvLyB0aGF0IHNob3VsZCBub3QgYmUgbWF0Y2hlZCB0byBtYXRjaC5cbiAgICB2YXIgY2xvbmUgPSBjbG9uZVZOb2RlKHZub2RlKTtcbiAgICBjbG9uZS5mbkNvbnRleHQgPSBjb250ZXh0Vm07XG4gICAgY2xvbmUuZm5PcHRpb25zID0gb3B0aW9ucztcbiAgICB7XG4gICAgICAoY2xvbmUuZGV2dG9vbHNNZXRhID0gY2xvbmUuZGV2dG9vbHNNZXRhIHx8IHt9KS5yZW5kZXJDb250ZXh0ID0gcmVuZGVyQ29udGV4dDtcbiAgICB9XG4gICAgaWYgKGRhdGEuc2xvdCkge1xuICAgICAgKGNsb25lLmRhdGEgfHwgKGNsb25lLmRhdGEgPSB7fSkpLnNsb3QgPSBkYXRhLnNsb3Q7XG4gICAgfVxuICAgIHJldHVybiBjbG9uZVxuICB9XG5cbiAgZnVuY3Rpb24gbWVyZ2VQcm9wcyAodG8sIGZyb20pIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuICAgICAgdG9bY2FtZWxpemUoa2V5KV0gPSBmcm9tW2tleV07XG4gICAgfVxuICB9XG5cbiAgLyogICovXG5cbiAgLyogICovXG5cbiAgLyogICovXG5cbiAgLyogICovXG5cbiAgLy8gaW5saW5lIGhvb2tzIHRvIGJlIGludm9rZWQgb24gY29tcG9uZW50IFZOb2RlcyBkdXJpbmcgcGF0Y2hcbiAgdmFyIGNvbXBvbmVudFZOb2RlSG9va3MgPSB7XG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdCAodm5vZGUsIGh5ZHJhdGluZykge1xuICAgICAgaWYgKFxuICAgICAgICB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSAmJlxuICAgICAgICAhdm5vZGUuY29tcG9uZW50SW5zdGFuY2UuX2lzRGVzdHJveWVkICYmXG4gICAgICAgIHZub2RlLmRhdGEua2VlcEFsaXZlXG4gICAgICApIHtcbiAgICAgICAgLy8ga2VwdC1hbGl2ZSBjb21wb25lbnRzLCB0cmVhdCBhcyBhIHBhdGNoXG4gICAgICAgIHZhciBtb3VudGVkTm9kZSA9IHZub2RlOyAvLyB3b3JrIGFyb3VuZCBmbG93XG4gICAgICAgIGNvbXBvbmVudFZOb2RlSG9va3MucHJlcGF0Y2gobW91bnRlZE5vZGUsIG1vdW50ZWROb2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjaGlsZCA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlID0gY3JlYXRlQ29tcG9uZW50SW5zdGFuY2VGb3JWbm9kZShcbiAgICAgICAgICB2bm9kZSxcbiAgICAgICAgICBhY3RpdmVJbnN0YW5jZVxuICAgICAgICApO1xuICAgICAgICBjaGlsZC4kbW91bnQoaHlkcmF0aW5nID8gdm5vZGUuZWxtIDogdW5kZWZpbmVkLCBoeWRyYXRpbmcpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBwcmVwYXRjaDogZnVuY3Rpb24gcHJlcGF0Y2ggKG9sZFZub2RlLCB2bm9kZSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB2bm9kZS5jb21wb25lbnRPcHRpb25zO1xuICAgICAgdmFyIGNoaWxkID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgPSBvbGRWbm9kZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICAgIHVwZGF0ZUNoaWxkQ29tcG9uZW50KFxuICAgICAgICBjaGlsZCxcbiAgICAgICAgb3B0aW9ucy5wcm9wc0RhdGEsIC8vIHVwZGF0ZWQgcHJvcHNcbiAgICAgICAgb3B0aW9ucy5saXN0ZW5lcnMsIC8vIHVwZGF0ZWQgbGlzdGVuZXJzXG4gICAgICAgIHZub2RlLCAvLyBuZXcgcGFyZW50IHZub2RlXG4gICAgICAgIG9wdGlvbnMuY2hpbGRyZW4gLy8gbmV3IGNoaWxkcmVuXG4gICAgICApO1xuICAgIH0sXG5cbiAgICBpbnNlcnQ6IGZ1bmN0aW9uIGluc2VydCAodm5vZGUpIHtcbiAgICAgIHZhciBjb250ZXh0ID0gdm5vZGUuY29udGV4dDtcbiAgICAgIHZhciBjb21wb25lbnRJbnN0YW5jZSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgICAgaWYgKCFjb21wb25lbnRJbnN0YW5jZS5faXNNb3VudGVkKSB7XG4gICAgICAgIGNvbXBvbmVudEluc3RhbmNlLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgICBjYWxsSG9vayhjb21wb25lbnRJbnN0YW5jZSwgJ21vdW50ZWQnKTtcbiAgICAgIH1cbiAgICAgIGlmICh2bm9kZS5kYXRhLmtlZXBBbGl2ZSkge1xuICAgICAgICBpZiAoY29udGV4dC5faXNNb3VudGVkKSB7XG4gICAgICAgICAgLy8gdnVlLXJvdXRlciMxMjEyXG4gICAgICAgICAgLy8gRHVyaW5nIHVwZGF0ZXMsIGEga2VwdC1hbGl2ZSBjb21wb25lbnQncyBjaGlsZCBjb21wb25lbnRzIG1heVxuICAgICAgICAgIC8vIGNoYW5nZSwgc28gZGlyZWN0bHkgd2Fsa2luZyB0aGUgdHJlZSBoZXJlIG1heSBjYWxsIGFjdGl2YXRlZCBob29rc1xuICAgICAgICAgIC8vIG9uIGluY29ycmVjdCBjaGlsZHJlbi4gSW5zdGVhZCB3ZSBwdXNoIHRoZW0gaW50byBhIHF1ZXVlIHdoaWNoIHdpbGxcbiAgICAgICAgICAvLyBiZSBwcm9jZXNzZWQgYWZ0ZXIgdGhlIHdob2xlIHBhdGNoIHByb2Nlc3MgZW5kZWQuXG4gICAgICAgICAgcXVldWVBY3RpdmF0ZWRDb21wb25lbnQoY29tcG9uZW50SW5zdGFuY2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFjdGl2YXRlQ2hpbGRDb21wb25lbnQoY29tcG9uZW50SW5zdGFuY2UsIHRydWUgLyogZGlyZWN0ICovKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95ICh2bm9kZSkge1xuICAgICAgdmFyIGNvbXBvbmVudEluc3RhbmNlID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgICBpZiAoIWNvbXBvbmVudEluc3RhbmNlLl9pc0Rlc3Ryb3llZCkge1xuICAgICAgICBpZiAoIXZub2RlLmRhdGEua2VlcEFsaXZlKSB7XG4gICAgICAgICAgY29tcG9uZW50SW5zdGFuY2UuJGRlc3Ryb3koKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWFjdGl2YXRlQ2hpbGRDb21wb25lbnQoY29tcG9uZW50SW5zdGFuY2UsIHRydWUgLyogZGlyZWN0ICovKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgaG9va3NUb01lcmdlID0gT2JqZWN0LmtleXMoY29tcG9uZW50Vk5vZGVIb29rcyk7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50IChcbiAgICBDdG9yLFxuICAgIGRhdGEsXG4gICAgY29udGV4dCxcbiAgICBjaGlsZHJlbixcbiAgICB0YWdcbiAgKSB7XG4gICAgaWYgKGlzVW5kZWYoQ3RvcikpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciBiYXNlQ3RvciA9IGNvbnRleHQuJG9wdGlvbnMuX2Jhc2U7XG5cbiAgICAvLyBwbGFpbiBvcHRpb25zIG9iamVjdDogdHVybiBpdCBpbnRvIGEgY29uc3RydWN0b3JcbiAgICBpZiAoaXNPYmplY3QoQ3RvcikpIHtcbiAgICAgIEN0b3IgPSBiYXNlQ3Rvci5leHRlbmQoQ3Rvcik7XG4gICAgfVxuXG4gICAgLy8gaWYgYXQgdGhpcyBzdGFnZSBpdCdzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIGFuIGFzeW5jIGNvbXBvbmVudCBmYWN0b3J5LFxuICAgIC8vIHJlamVjdC5cbiAgICBpZiAodHlwZW9mIEN0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHtcbiAgICAgICAgd2FybigoXCJJbnZhbGlkIENvbXBvbmVudCBkZWZpbml0aW9uOiBcIiArIChTdHJpbmcoQ3RvcikpKSwgY29udGV4dCk7XG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBhc3luYyBjb21wb25lbnRcbiAgICB2YXIgYXN5bmNGYWN0b3J5O1xuICAgIGlmIChpc1VuZGVmKEN0b3IuY2lkKSkge1xuICAgICAgYXN5bmNGYWN0b3J5ID0gQ3RvcjtcbiAgICAgIEN0b3IgPSByZXNvbHZlQXN5bmNDb21wb25lbnQoYXN5bmNGYWN0b3J5LCBiYXNlQ3Rvcik7XG4gICAgICBpZiAoQ3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIHJldHVybiBhIHBsYWNlaG9sZGVyIG5vZGUgZm9yIGFzeW5jIGNvbXBvbmVudCwgd2hpY2ggaXMgcmVuZGVyZWRcbiAgICAgICAgLy8gYXMgYSBjb21tZW50IG5vZGUgYnV0IHByZXNlcnZlcyBhbGwgdGhlIHJhdyBpbmZvcm1hdGlvbiBmb3IgdGhlIG5vZGUuXG4gICAgICAgIC8vIHRoZSBpbmZvcm1hdGlvbiB3aWxsIGJlIHVzZWQgZm9yIGFzeW5jIHNlcnZlci1yZW5kZXJpbmcgYW5kIGh5ZHJhdGlvbi5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZUFzeW5jUGxhY2Vob2xkZXIoXG4gICAgICAgICAgYXN5bmNGYWN0b3J5LFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICB0YWdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEgPSBkYXRhIHx8IHt9O1xuXG4gICAgLy8gcmVzb2x2ZSBjb25zdHJ1Y3RvciBvcHRpb25zIGluIGNhc2UgZ2xvYmFsIG1peGlucyBhcmUgYXBwbGllZCBhZnRlclxuICAgIC8vIGNvbXBvbmVudCBjb25zdHJ1Y3RvciBjcmVhdGlvblxuICAgIHJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnMoQ3Rvcik7XG5cbiAgICAvLyB0cmFuc2Zvcm0gY29tcG9uZW50IHYtbW9kZWwgZGF0YSBpbnRvIHByb3BzICYgZXZlbnRzXG4gICAgaWYgKGlzRGVmKGRhdGEubW9kZWwpKSB7XG4gICAgICB0cmFuc2Zvcm1Nb2RlbChDdG9yLm9wdGlvbnMsIGRhdGEpO1xuICAgIH1cblxuICAgIC8vIGV4dHJhY3QgcHJvcHNcbiAgICB2YXIgcHJvcHNEYXRhID0gZXh0cmFjdFByb3BzRnJvbVZOb2RlRGF0YShkYXRhLCBDdG9yLCB0YWcpO1xuXG4gICAgLy8gZnVuY3Rpb25hbCBjb21wb25lbnRcbiAgICBpZiAoaXNUcnVlKEN0b3Iub3B0aW9ucy5mdW5jdGlvbmFsKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnQoQ3RvciwgcHJvcHNEYXRhLCBkYXRhLCBjb250ZXh0LCBjaGlsZHJlbilcbiAgICB9XG5cbiAgICAvLyBleHRyYWN0IGxpc3RlbmVycywgc2luY2UgdGhlc2UgbmVlZHMgdG8gYmUgdHJlYXRlZCBhc1xuICAgIC8vIGNoaWxkIGNvbXBvbmVudCBsaXN0ZW5lcnMgaW5zdGVhZCBvZiBET00gbGlzdGVuZXJzXG4gICAgdmFyIGxpc3RlbmVycyA9IGRhdGEub247XG4gICAgLy8gcmVwbGFjZSB3aXRoIGxpc3RlbmVycyB3aXRoIC5uYXRpdmUgbW9kaWZpZXJcbiAgICAvLyBzbyBpdCBnZXRzIHByb2Nlc3NlZCBkdXJpbmcgcGFyZW50IGNvbXBvbmVudCBwYXRjaC5cbiAgICBkYXRhLm9uID0gZGF0YS5uYXRpdmVPbjtcblxuICAgIGlmIChpc1RydWUoQ3Rvci5vcHRpb25zLmFic3RyYWN0KSkge1xuICAgICAgLy8gYWJzdHJhY3QgY29tcG9uZW50cyBkbyBub3Qga2VlcCBhbnl0aGluZ1xuICAgICAgLy8gb3RoZXIgdGhhbiBwcm9wcyAmIGxpc3RlbmVycyAmIHNsb3RcblxuICAgICAgLy8gd29yayBhcm91bmQgZmxvd1xuICAgICAgdmFyIHNsb3QgPSBkYXRhLnNsb3Q7XG4gICAgICBkYXRhID0ge307XG4gICAgICBpZiAoc2xvdCkge1xuICAgICAgICBkYXRhLnNsb3QgPSBzbG90O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGluc3RhbGwgY29tcG9uZW50IG1hbmFnZW1lbnQgaG9va3Mgb250byB0aGUgcGxhY2Vob2xkZXIgbm9kZVxuICAgIGluc3RhbGxDb21wb25lbnRIb29rcyhkYXRhKTtcblxuICAgIC8vIHJldHVybiBhIHBsYWNlaG9sZGVyIHZub2RlXG4gICAgdmFyIG5hbWUgPSBDdG9yLm9wdGlvbnMubmFtZSB8fCB0YWc7XG4gICAgdmFyIHZub2RlID0gbmV3IFZOb2RlKFxuICAgICAgKFwidnVlLWNvbXBvbmVudC1cIiArIChDdG9yLmNpZCkgKyAobmFtZSA/IChcIi1cIiArIG5hbWUpIDogJycpKSxcbiAgICAgIGRhdGEsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNvbnRleHQsXG4gICAgICB7IEN0b3I6IEN0b3IsIHByb3BzRGF0YTogcHJvcHNEYXRhLCBsaXN0ZW5lcnM6IGxpc3RlbmVycywgdGFnOiB0YWcsIGNoaWxkcmVuOiBjaGlsZHJlbiB9LFxuICAgICAgYXN5bmNGYWN0b3J5XG4gICAgKTtcblxuICAgIHJldHVybiB2bm9kZVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50SW5zdGFuY2VGb3JWbm9kZSAoXG4gICAgdm5vZGUsIC8vIHdlIGtub3cgaXQncyBNb3VudGVkQ29tcG9uZW50Vk5vZGUgYnV0IGZsb3cgZG9lc24ndFxuICAgIHBhcmVudCAvLyBhY3RpdmVJbnN0YW5jZSBpbiBsaWZlY3ljbGUgc3RhdGVcbiAgKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICBfaXNDb21wb25lbnQ6IHRydWUsXG4gICAgICBfcGFyZW50Vm5vZGU6IHZub2RlLFxuICAgICAgcGFyZW50OiBwYXJlbnRcbiAgICB9O1xuICAgIC8vIGNoZWNrIGlubGluZS10ZW1wbGF0ZSByZW5kZXIgZnVuY3Rpb25zXG4gICAgdmFyIGlubGluZVRlbXBsYXRlID0gdm5vZGUuZGF0YS5pbmxpbmVUZW1wbGF0ZTtcbiAgICBpZiAoaXNEZWYoaW5saW5lVGVtcGxhdGUpKSB7XG4gICAgICBvcHRpb25zLnJlbmRlciA9IGlubGluZVRlbXBsYXRlLnJlbmRlcjtcbiAgICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gaW5saW5lVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IHZub2RlLmNvbXBvbmVudE9wdGlvbnMuQ3RvcihvcHRpb25zKVxuICB9XG5cbiAgZnVuY3Rpb24gaW5zdGFsbENvbXBvbmVudEhvb2tzIChkYXRhKSB7XG4gICAgdmFyIGhvb2tzID0gZGF0YS5ob29rIHx8IChkYXRhLmhvb2sgPSB7fSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBob29rc1RvTWVyZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBob29rc1RvTWVyZ2VbaV07XG4gICAgICB2YXIgZXhpc3RpbmcgPSBob29rc1trZXldO1xuICAgICAgdmFyIHRvTWVyZ2UgPSBjb21wb25lbnRWTm9kZUhvb2tzW2tleV07XG4gICAgICBpZiAoZXhpc3RpbmcgIT09IHRvTWVyZ2UgJiYgIShleGlzdGluZyAmJiBleGlzdGluZy5fbWVyZ2VkKSkge1xuICAgICAgICBob29rc1trZXldID0gZXhpc3RpbmcgPyBtZXJnZUhvb2skMSh0b01lcmdlLCBleGlzdGluZykgOiB0b01lcmdlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1lcmdlSG9vayQxIChmMSwgZjIpIHtcbiAgICB2YXIgbWVyZ2VkID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIC8vIGZsb3cgY29tcGxhaW5zIGFib3V0IGV4dHJhIGFyZ3Mgd2hpY2ggaXMgd2h5IHdlIHVzZSBhbnlcbiAgICAgIGYxKGEsIGIpO1xuICAgICAgZjIoYSwgYik7XG4gICAgfTtcbiAgICBtZXJnZWQuX21lcmdlZCA9IHRydWU7XG4gICAgcmV0dXJuIG1lcmdlZFxuICB9XG5cbiAgLy8gdHJhbnNmb3JtIGNvbXBvbmVudCB2LW1vZGVsIGluZm8gKHZhbHVlIGFuZCBjYWxsYmFjaykgaW50b1xuICAvLyBwcm9wIGFuZCBldmVudCBoYW5kbGVyIHJlc3BlY3RpdmVseS5cbiAgZnVuY3Rpb24gdHJhbnNmb3JtTW9kZWwgKG9wdGlvbnMsIGRhdGEpIHtcbiAgICB2YXIgcHJvcCA9IChvcHRpb25zLm1vZGVsICYmIG9wdGlvbnMubW9kZWwucHJvcCkgfHwgJ3ZhbHVlJztcbiAgICB2YXIgZXZlbnQgPSAob3B0aW9ucy5tb2RlbCAmJiBvcHRpb25zLm1vZGVsLmV2ZW50KSB8fCAnaW5wdXQnXG4gICAgOyhkYXRhLmF0dHJzIHx8IChkYXRhLmF0dHJzID0ge30pKVtwcm9wXSA9IGRhdGEubW9kZWwudmFsdWU7XG4gICAgdmFyIG9uID0gZGF0YS5vbiB8fCAoZGF0YS5vbiA9IHt9KTtcbiAgICB2YXIgZXhpc3RpbmcgPSBvbltldmVudF07XG4gICAgdmFyIGNhbGxiYWNrID0gZGF0YS5tb2RlbC5jYWxsYmFjaztcbiAgICBpZiAoaXNEZWYoZXhpc3RpbmcpKSB7XG4gICAgICBpZiAoXG4gICAgICAgIEFycmF5LmlzQXJyYXkoZXhpc3RpbmcpXG4gICAgICAgICAgPyBleGlzdGluZy5pbmRleE9mKGNhbGxiYWNrKSA9PT0gLTFcbiAgICAgICAgICA6IGV4aXN0aW5nICE9PSBjYWxsYmFja1xuICAgICAgKSB7XG4gICAgICAgIG9uW2V2ZW50XSA9IFtjYWxsYmFja10uY29uY2F0KGV4aXN0aW5nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgb25bZXZlbnRdID0gY2FsbGJhY2s7XG4gICAgfVxuICB9XG5cbiAgLyogICovXG5cbiAgdmFyIFNJTVBMRV9OT1JNQUxJWkUgPSAxO1xuICB2YXIgQUxXQVlTX05PUk1BTElaRSA9IDI7XG5cbiAgLy8gd3JhcHBlciBmdW5jdGlvbiBmb3IgcHJvdmlkaW5nIGEgbW9yZSBmbGV4aWJsZSBpbnRlcmZhY2VcbiAgLy8gd2l0aG91dCBnZXR0aW5nIHllbGxlZCBhdCBieSBmbG93XG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKFxuICAgIGNvbnRleHQsXG4gICAgdGFnLFxuICAgIGRhdGEsXG4gICAgY2hpbGRyZW4sXG4gICAgbm9ybWFsaXphdGlvblR5cGUsXG4gICAgYWx3YXlzTm9ybWFsaXplXG4gICkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpIHx8IGlzUHJpbWl0aXZlKGRhdGEpKSB7XG4gICAgICBub3JtYWxpemF0aW9uVHlwZSA9IGNoaWxkcmVuO1xuICAgICAgY2hpbGRyZW4gPSBkYXRhO1xuICAgICAgZGF0YSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKGlzVHJ1ZShhbHdheXNOb3JtYWxpemUpKSB7XG4gICAgICBub3JtYWxpemF0aW9uVHlwZSA9IEFMV0FZU19OT1JNQUxJWkU7XG4gICAgfVxuICAgIHJldHVybiBfY3JlYXRlRWxlbWVudChjb250ZXh0LCB0YWcsIGRhdGEsIGNoaWxkcmVuLCBub3JtYWxpemF0aW9uVHlwZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVFbGVtZW50IChcbiAgICBjb250ZXh0LFxuICAgIHRhZyxcbiAgICBkYXRhLFxuICAgIGNoaWxkcmVuLFxuICAgIG5vcm1hbGl6YXRpb25UeXBlXG4gICkge1xuICAgIGlmIChpc0RlZihkYXRhKSAmJiBpc0RlZigoZGF0YSkuX19vYl9fKSkge1xuICAgICAgd2FybihcbiAgICAgICAgXCJBdm9pZCB1c2luZyBvYnNlcnZlZCBkYXRhIG9iamVjdCBhcyB2bm9kZSBkYXRhOiBcIiArIChKU09OLnN0cmluZ2lmeShkYXRhKSkgKyBcIlxcblwiICtcbiAgICAgICAgJ0Fsd2F5cyBjcmVhdGUgZnJlc2ggdm5vZGUgZGF0YSBvYmplY3RzIGluIGVhY2ggcmVuZGVyIScsXG4gICAgICAgIGNvbnRleHRcbiAgICAgICk7XG4gICAgICByZXR1cm4gY3JlYXRlRW1wdHlWTm9kZSgpXG4gICAgfVxuICAgIC8vIG9iamVjdCBzeW50YXggaW4gdi1iaW5kXG4gICAgaWYgKGlzRGVmKGRhdGEpICYmIGlzRGVmKGRhdGEuaXMpKSB7XG4gICAgICB0YWcgPSBkYXRhLmlzO1xuICAgIH1cbiAgICBpZiAoIXRhZykge1xuICAgICAgLy8gaW4gY2FzZSBvZiBjb21wb25lbnQgOmlzIHNldCB0byBmYWxzeSB2YWx1ZVxuICAgICAgcmV0dXJuIGNyZWF0ZUVtcHR5Vk5vZGUoKVxuICAgIH1cbiAgICAvLyB3YXJuIGFnYWluc3Qgbm9uLXByaW1pdGl2ZSBrZXlcbiAgICBpZiAoaXNEZWYoZGF0YSkgJiYgaXNEZWYoZGF0YS5rZXkpICYmICFpc1ByaW1pdGl2ZShkYXRhLmtleSlcbiAgICApIHtcbiAgICAgIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnQXZvaWQgdXNpbmcgbm9uLXByaW1pdGl2ZSB2YWx1ZSBhcyBrZXksICcgK1xuICAgICAgICAgICd1c2Ugc3RyaW5nL251bWJlciB2YWx1ZSBpbnN0ZWFkLicsXG4gICAgICAgICAgY29udGV4dFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBzdXBwb3J0IHNpbmdsZSBmdW5jdGlvbiBjaGlsZHJlbiBhcyBkZWZhdWx0IHNjb3BlZCBzbG90XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pICYmXG4gICAgICB0eXBlb2YgY2hpbGRyZW5bMF0gPT09ICdmdW5jdGlvbidcbiAgICApIHtcbiAgICAgIGRhdGEgPSBkYXRhIHx8IHt9O1xuICAgICAgZGF0YS5zY29wZWRTbG90cyA9IHsgZGVmYXVsdDogY2hpbGRyZW5bMF0gfTtcbiAgICAgIGNoaWxkcmVuLmxlbmd0aCA9IDA7XG4gICAgfVxuICAgIGlmIChub3JtYWxpemF0aW9uVHlwZSA9PT0gQUxXQVlTX05PUk1BTElaRSkge1xuICAgICAgY2hpbGRyZW4gPSBub3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbik7XG4gICAgfSBlbHNlIGlmIChub3JtYWxpemF0aW9uVHlwZSA9PT0gU0lNUExFX05PUk1BTElaRSkge1xuICAgICAgY2hpbGRyZW4gPSBzaW1wbGVOb3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbik7XG4gICAgfVxuICAgIHZhciB2bm9kZSwgbnM7XG4gICAgaWYgKHR5cGVvZiB0YWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgQ3RvcjtcbiAgICAgIG5zID0gKGNvbnRleHQuJHZub2RlICYmIGNvbnRleHQuJHZub2RlLm5zKSB8fCBjb25maWcuZ2V0VGFnTmFtZXNwYWNlKHRhZyk7XG4gICAgICBpZiAoY29uZmlnLmlzUmVzZXJ2ZWRUYWcodGFnKSkge1xuICAgICAgICAvLyBwbGF0Zm9ybSBidWlsdC1pbiBlbGVtZW50c1xuICAgICAgICBpZiAoaXNEZWYoZGF0YSkgJiYgaXNEZWYoZGF0YS5uYXRpdmVPbikpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgKFwiVGhlIC5uYXRpdmUgbW9kaWZpZXIgZm9yIHYtb24gaXMgb25seSB2YWxpZCBvbiBjb21wb25lbnRzIGJ1dCBpdCB3YXMgdXNlZCBvbiA8XCIgKyB0YWcgKyBcIj4uXCIpLFxuICAgICAgICAgICAgY29udGV4dFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdm5vZGUgPSBuZXcgVk5vZGUoXG4gICAgICAgICAgY29uZmlnLnBhcnNlUGxhdGZvcm1UYWdOYW1lKHRhZyksIGRhdGEsIGNoaWxkcmVuLFxuICAgICAgICAgIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb250ZXh0XG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKCghZGF0YSB8fCAhZGF0YS5wcmUpICYmIGlzRGVmKEN0b3IgPSByZXNvbHZlQXNzZXQoY29udGV4dC4kb3B0aW9ucywgJ2NvbXBvbmVudHMnLCB0YWcpKSkge1xuICAgICAgICAvLyBjb21wb25lbnRcbiAgICAgICAgdm5vZGUgPSBjcmVhdGVDb21wb25lbnQoQ3RvciwgZGF0YSwgY29udGV4dCwgY2hpbGRyZW4sIHRhZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1bmtub3duIG9yIHVubGlzdGVkIG5hbWVzcGFjZWQgZWxlbWVudHNcbiAgICAgICAgLy8gY2hlY2sgYXQgcnVudGltZSBiZWNhdXNlIGl0IG1heSBnZXQgYXNzaWduZWQgYSBuYW1lc3BhY2Ugd2hlbiBpdHNcbiAgICAgICAgLy8gcGFyZW50IG5vcm1hbGl6ZXMgY2hpbGRyZW5cbiAgICAgICAgdm5vZGUgPSBuZXcgVk5vZGUoXG4gICAgICAgICAgdGFnLCBkYXRhLCBjaGlsZHJlbixcbiAgICAgICAgICB1bmRlZmluZWQsIHVuZGVmaW5lZCwgY29udGV4dFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBkaXJlY3QgY29tcG9uZW50IG9wdGlvbnMgLyBjb25zdHJ1Y3RvclxuICAgICAgdm5vZGUgPSBjcmVhdGVDb21wb25lbnQodGFnLCBkYXRhLCBjb250ZXh0LCBjaGlsZHJlbik7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgICAgcmV0dXJuIHZub2RlXG4gICAgfSBlbHNlIGlmIChpc0RlZih2bm9kZSkpIHtcbiAgICAgIGlmIChpc0RlZihucykpIHsgYXBwbHlOUyh2bm9kZSwgbnMpOyB9XG4gICAgICBpZiAoaXNEZWYoZGF0YSkpIHsgcmVnaXN0ZXJEZWVwQmluZGluZ3MoZGF0YSk7IH1cbiAgICAgIHJldHVybiB2bm9kZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3JlYXRlRW1wdHlWTm9kZSgpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlOUyAodm5vZGUsIG5zLCBmb3JjZSkge1xuICAgIHZub2RlLm5zID0gbnM7XG4gICAgaWYgKHZub2RlLnRhZyA9PT0gJ2ZvcmVpZ25PYmplY3QnKSB7XG4gICAgICAvLyB1c2UgZGVmYXVsdCBuYW1lc3BhY2UgaW5zaWRlIGZvcmVpZ25PYmplY3RcbiAgICAgIG5zID0gdW5kZWZpbmVkO1xuICAgICAgZm9yY2UgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoaXNEZWYodm5vZGUuY2hpbGRyZW4pKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHZub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSB2bm9kZS5jaGlsZHJlbltpXTtcbiAgICAgICAgaWYgKGlzRGVmKGNoaWxkLnRhZykgJiYgKFxuICAgICAgICAgIGlzVW5kZWYoY2hpbGQubnMpIHx8IChpc1RydWUoZm9yY2UpICYmIGNoaWxkLnRhZyAhPT0gJ3N2ZycpKSkge1xuICAgICAgICAgIGFwcGx5TlMoY2hpbGQsIG5zLCBmb3JjZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyByZWYgIzUzMThcbiAgLy8gbmVjZXNzYXJ5IHRvIGVuc3VyZSBwYXJlbnQgcmUtcmVuZGVyIHdoZW4gZGVlcCBiaW5kaW5ncyBsaWtlIDpzdHlsZSBhbmRcbiAgLy8gOmNsYXNzIGFyZSB1c2VkIG9uIHNsb3Qgbm9kZXNcbiAgZnVuY3Rpb24gcmVnaXN0ZXJEZWVwQmluZGluZ3MgKGRhdGEpIHtcbiAgICBpZiAoaXNPYmplY3QoZGF0YS5zdHlsZSkpIHtcbiAgICAgIHRyYXZlcnNlKGRhdGEuc3R5bGUpO1xuICAgIH1cbiAgICBpZiAoaXNPYmplY3QoZGF0YS5jbGFzcykpIHtcbiAgICAgIHRyYXZlcnNlKGRhdGEuY2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIC8qICAqL1xuXG4gIGZ1bmN0aW9uIGluaXRSZW5kZXIgKHZtKSB7XG4gICAgdm0uX3Zub2RlID0gbnVsbDsgLy8gdGhlIHJvb3Qgb2YgdGhlIGNoaWxkIHRyZWVcbiAgICB2bS5fc3RhdGljVHJlZXMgPSBudWxsOyAvLyB2LW9uY2UgY2FjaGVkIHRyZWVzXG4gICAgdmFyIG9wdGlvbnMgPSB2bS4kb3B0aW9ucztcbiAgICB2YXIgcGFyZW50Vm5vZGUgPSB2bS4kdm5vZGUgPSBvcHRpb25zLl9wYXJlbnRWbm9kZTsgLy8gdGhlIHBsYWNlaG9sZGVyIG5vZGUgaW4gcGFyZW50IHRyZWVcbiAgICB2YXIgcmVuZGVyQ29udGV4dCA9IHBhcmVudFZub2RlICYmIHBhcmVudFZub2RlLmNvbnRleHQ7XG4gICAgdm0uJHNsb3RzID0gcmVzb2x2ZVNsb3RzKG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuLCByZW5kZXJDb250ZXh0KTtcbiAgICB2bS4kc2NvcGVkU2xvdHMgPSBlbXB0eU9iamVjdDtcbiAgICAvLyBiaW5kIHRoZSBjcmVhdGVFbGVtZW50IGZuIHRvIHRoaXMgaW5zdGFuY2VcbiAgICAvLyBzbyB0aGF0IHdlIGdldCBwcm9wZXIgcmVuZGVyIGNvbnRleHQgaW5zaWRlIGl0LlxuICAgIC8vIGFyZ3Mgb3JkZXI6IHRhZywgZGF0YSwgY2hpbGRyZW4sIG5vcm1hbGl6YXRpb25UeXBlLCBhbHdheXNOb3JtYWxpemVcbiAgICAvLyBpbnRlcm5hbCB2ZXJzaW9uIGlzIHVzZWQgYnkgcmVuZGVyIGZ1bmN0aW9ucyBjb21waWxlZCBmcm9tIHRlbXBsYXRlc1xuICAgIHZtLl9jID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHsgcmV0dXJuIGNyZWF0ZUVsZW1lbnQodm0sIGEsIGIsIGMsIGQsIGZhbHNlKTsgfTtcbiAgICAvLyBub3JtYWxpemF0aW9uIGlzIGFsd2F5cyBhcHBsaWVkIGZvciB0aGUgcHVibGljIHZlcnNpb24sIHVzZWQgaW5cbiAgICAvLyB1c2VyLXdyaXR0ZW4gcmVuZGVyIGZ1bmN0aW9ucy5cbiAgICB2bS4kY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7IHJldHVybiBjcmVhdGVFbGVtZW50KHZtLCBhLCBiLCBjLCBkLCB0cnVlKTsgfTtcblxuICAgIC8vICRhdHRycyAmICRsaXN0ZW5lcnMgYXJlIGV4cG9zZWQgZm9yIGVhc2llciBIT0MgY3JlYXRpb24uXG4gICAgLy8gdGhleSBuZWVkIHRvIGJlIHJlYWN0aXZlIHNvIHRoYXQgSE9DcyB1c2luZyB0aGVtIGFyZSBhbHdheXMgdXBkYXRlZFxuICAgIHZhciBwYXJlbnREYXRhID0gcGFyZW50Vm5vZGUgJiYgcGFyZW50Vm5vZGUuZGF0YTtcblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAge1xuICAgICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sICckYXR0cnMnLCBwYXJlbnREYXRhICYmIHBhcmVudERhdGEuYXR0cnMgfHwgZW1wdHlPYmplY3QsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgIWlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCAmJiB3YXJuKFwiJGF0dHJzIGlzIHJlYWRvbmx5LlwiLCB2bSk7XG4gICAgICB9LCB0cnVlKTtcbiAgICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCAnJGxpc3RlbmVycycsIG9wdGlvbnMuX3BhcmVudExpc3RlbmVycyB8fCBlbXB0eU9iamVjdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAhaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ICYmIHdhcm4oXCIkbGlzdGVuZXJzIGlzIHJlYWRvbmx5LlwiLCB2bSk7XG4gICAgICB9LCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgY3VycmVudFJlbmRlcmluZ0luc3RhbmNlID0gbnVsbDtcblxuICBmdW5jdGlvbiByZW5kZXJNaXhpbiAoVnVlKSB7XG4gICAgLy8gaW5zdGFsbCBydW50aW1lIGNvbnZlbmllbmNlIGhlbHBlcnNcbiAgICBpbnN0YWxsUmVuZGVySGVscGVycyhWdWUucHJvdG90eXBlKTtcblxuICAgIFZ1ZS5wcm90b3R5cGUuJG5leHRUaWNrID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICByZXR1cm4gbmV4dFRpY2soZm4sIHRoaXMpXG4gICAgfTtcblxuICAgIFZ1ZS5wcm90b3R5cGUuX3JlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2bSA9IHRoaXM7XG4gICAgICB2YXIgcmVmID0gdm0uJG9wdGlvbnM7XG4gICAgICB2YXIgcmVuZGVyID0gcmVmLnJlbmRlcjtcbiAgICAgIHZhciBfcGFyZW50Vm5vZGUgPSByZWYuX3BhcmVudFZub2RlO1xuXG4gICAgICBpZiAoX3BhcmVudFZub2RlKSB7XG4gICAgICAgIHZtLiRzY29wZWRTbG90cyA9IG5vcm1hbGl6ZVNjb3BlZFNsb3RzKFxuICAgICAgICAgIF9wYXJlbnRWbm9kZS5kYXRhLnNjb3BlZFNsb3RzLFxuICAgICAgICAgIHZtLiRzbG90cyxcbiAgICAgICAgICB2bS4kc2NvcGVkU2xvdHNcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gc2V0IHBhcmVudCB2bm9kZS4gdGhpcyBhbGxvd3MgcmVuZGVyIGZ1bmN0aW9ucyB0byBoYXZlIGFjY2Vzc1xuICAgICAgLy8gdG8gdGhlIGRhdGEgb24gdGhlIHBsYWNlaG9sZGVyIG5vZGUuXG4gICAgICB2bS4kdm5vZGUgPSBfcGFyZW50Vm5vZGU7XG4gICAgICAvLyByZW5kZXIgc2VsZlxuICAgICAgdmFyIHZub2RlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhlcmUncyBubyBuZWVkIHRvIG1haW50YWluIGEgc3RhY2sgYmVjYXVzZSBhbGwgcmVuZGVyIGZucyBhcmUgY2FsbGVkXG4gICAgICAgIC8vIHNlcGFyYXRlbHkgZnJvbSBvbmUgYW5vdGhlci4gTmVzdGVkIGNvbXBvbmVudCdzIHJlbmRlciBmbnMgYXJlIGNhbGxlZFxuICAgICAgICAvLyB3aGVuIHBhcmVudCBjb21wb25lbnQgaXMgcGF0Y2hlZC5cbiAgICAgICAgY3VycmVudFJlbmRlcmluZ0luc3RhbmNlID0gdm07XG4gICAgICAgIHZub2RlID0gcmVuZGVyLmNhbGwodm0uX3JlbmRlclByb3h5LCB2bS4kY3JlYXRlRWxlbWVudCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGhhbmRsZUVycm9yKGUsIHZtLCBcInJlbmRlclwiKTtcbiAgICAgICAgLy8gcmV0dXJuIGVycm9yIHJlbmRlciByZXN1bHQsXG4gICAgICAgIC8vIG9yIHByZXZpb3VzIHZub2RlIHRvIHByZXZlbnQgcmVuZGVyIGVycm9yIGNhdXNpbmcgYmxhbmsgY29tcG9uZW50XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgIGlmICh2bS4kb3B0aW9ucy5yZW5kZXJFcnJvcikge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2bm9kZSA9IHZtLiRvcHRpb25zLnJlbmRlckVycm9yLmNhbGwodm0uX3JlbmRlclByb3h5LCB2bS4kY3JlYXRlRWxlbWVudCwgZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaGFuZGxlRXJyb3IoZSwgdm0sIFwicmVuZGVyRXJyb3JcIik7XG4gICAgICAgICAgICB2bm9kZSA9IHZtLl92bm9kZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdm5vZGUgPSB2bS5fdm5vZGU7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSA9IG51bGw7XG4gICAgICB9XG4gICAgICAvLyBpZiB0aGUgcmV0dXJuZWQgYXJyYXkgY29udGFpbnMgb25seSBhIHNpbmdsZSBub2RlLCBhbGxvdyBpdFxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodm5vZGUpICYmIHZub2RlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB2bm9kZSA9IHZub2RlWzBdO1xuICAgICAgfVxuICAgICAgLy8gcmV0dXJuIGVtcHR5IHZub2RlIGluIGNhc2UgdGhlIHJlbmRlciBmdW5jdGlvbiBlcnJvcmVkIG91dFxuICAgICAgaWYgKCEodm5vZGUgaW5zdGFuY2VvZiBWTm9kZSkpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodm5vZGUpKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgICdNdWx0aXBsZSByb290IG5vZGVzIHJldHVybmVkIGZyb20gcmVuZGVyIGZ1bmN0aW9uLiBSZW5kZXIgZnVuY3Rpb24gJyArXG4gICAgICAgICAgICAnc2hvdWxkIHJldHVybiBhIHNpbmdsZSByb290IG5vZGUuJyxcbiAgICAgICAgICAgIHZtXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2bm9kZSA9IGNyZWF0ZUVtcHR5Vk5vZGUoKTtcbiAgICAgIH1cbiAgICAgIC8vIHNldCBwYXJlbnRcbiAgICAgIHZub2RlLnBhcmVudCA9IF9wYXJlbnRWbm9kZTtcbiAgICAgIHJldHVybiB2bm9kZVxuICAgIH07XG4gIH1cblxuICAvKiAgKi9cblxuICBmdW5jdGlvbiBlbnN1cmVDdG9yIChjb21wLCBiYXNlKSB7XG4gICAgaWYgKFxuICAgICAgY29tcC5fX2VzTW9kdWxlIHx8XG4gICAgICAoaGFzU3ltYm9sICYmIGNvbXBbU3ltYm9sLnRvU3RyaW5nVGFnXSA9PT0gJ01vZHVsZScpXG4gICAgKSB7XG4gICAgICBjb21wID0gY29tcC5kZWZhdWx0O1xuICAgIH1cbiAgICByZXR1cm4gaXNPYmplY3QoY29tcClcbiAgICAgID8gYmFzZS5leHRlbmQoY29tcClcbiAgICAgIDogY29tcFxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXN5bmNQbGFjZWhvbGRlciAoXG4gICAgZmFjdG9yeSxcbiAgICBkYXRhLFxuICAgIGNvbnRleHQsXG4gICAgY2hpbGRyZW4sXG4gICAgdGFnXG4gICkge1xuICAgIHZhciBub2RlID0gY3JlYXRlRW1wdHlWTm9kZSgpO1xuICAgIG5vZGUuYXN5bmNGYWN0b3J5ID0gZmFjdG9yeTtcbiAgICBub2RlLmFzeW5jTWV0YSA9IHsgZGF0YTogZGF0YSwgY29udGV4dDogY29udGV4dCwgY2hpbGRyZW46IGNoaWxkcmVuLCB0YWc6IHRhZyB9O1xuICAgIHJldHVybiBub2RlXG4gIH1cblxuICBmdW5jdGlvbiByZXNvbHZlQXN5bmNDb21wb25lbnQgKFxuICAgIGZhY3RvcnksXG4gICAgYmFzZUN0b3JcbiAgKSB7XG4gICAgaWYgKGlzVHJ1ZShmYWN0b3J5LmVycm9yKSAmJiBpc0RlZihmYWN0b3J5LmVycm9yQ29tcCkpIHtcbiAgICAgIHJldHVybiBmYWN0b3J5LmVycm9yQ29tcFxuICAgIH1cblxuICAgIGlmIChpc0RlZihmYWN0b3J5LnJlc29sdmVkKSkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkucmVzb2x2ZWRcbiAgICB9XG5cbiAgICB2YXIgb3duZXIgPSBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2U7XG4gICAgaWYgKG93bmVyICYmIGlzRGVmKGZhY3Rvcnkub3duZXJzKSAmJiBmYWN0b3J5Lm93bmVycy5pbmRleE9mKG93bmVyKSA9PT0gLTEpIHtcbiAgICAgIC8vIGFscmVhZHkgcGVuZGluZ1xuICAgICAgZmFjdG9yeS5vd25lcnMucHVzaChvd25lcik7XG4gICAgfVxuXG4gICAgaWYgKGlzVHJ1ZShmYWN0b3J5LmxvYWRpbmcpICYmIGlzRGVmKGZhY3RvcnkubG9hZGluZ0NvbXApKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeS5sb2FkaW5nQ29tcFxuICAgIH1cblxuICAgIGlmIChvd25lciAmJiAhaXNEZWYoZmFjdG9yeS5vd25lcnMpKSB7XG4gICAgICB2YXIgb3duZXJzID0gZmFjdG9yeS5vd25lcnMgPSBbb3duZXJdO1xuICAgICAgdmFyIHN5bmMgPSB0cnVlO1xuICAgICAgdmFyIHRpbWVyTG9hZGluZyA9IG51bGw7XG4gICAgICB2YXIgdGltZXJUaW1lb3V0ID0gbnVsbFxuXG4gICAgICA7KG93bmVyKS4kb24oJ2hvb2s6ZGVzdHJveWVkJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVtb3ZlKG93bmVycywgb3duZXIpOyB9KTtcblxuICAgICAgdmFyIGZvcmNlUmVuZGVyID0gZnVuY3Rpb24gKHJlbmRlckNvbXBsZXRlZCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IG93bmVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAob3duZXJzW2ldKS4kZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZW5kZXJDb21wbGV0ZWQpIHtcbiAgICAgICAgICBvd25lcnMubGVuZ3RoID0gMDtcbiAgICAgICAgICBpZiAodGltZXJMb2FkaW5nICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXJMb2FkaW5nKTtcbiAgICAgICAgICAgIHRpbWVyTG9hZGluZyA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aW1lclRpbWVvdXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lclRpbWVvdXQpO1xuICAgICAgICAgICAgdGltZXJUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciByZXNvbHZlID0gb25jZShmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIC8vIGNhY2hlIHJlc29sdmVkXG4gICAgICAgIGZhY3RvcnkucmVzb2x2ZWQgPSBlbnN1cmVDdG9yKHJlcywgYmFzZUN0b3IpO1xuICAgICAgICAvLyBpbnZva2UgY2FsbGJhY2tzIG9ubHkgaWYgdGhpcyBpcyBub3QgYSBzeW5jaHJvbm91cyByZXNvbHZlXG4gICAgICAgIC8vIChhc3luYyByZXNvbHZlcyBhcmUgc2hpbW1lZCBhcyBzeW5jaHJvbm91cyBkdXJpbmcgU1NSKVxuICAgICAgICBpZiAoIXN5bmMpIHtcbiAgICAgICAgICBmb3JjZVJlbmRlcih0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvd25lcnMubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHZhciByZWplY3QgPSBvbmNlKGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICBcIkZhaWxlZCB0byByZXNvbHZlIGFzeW5jIGNvbXBvbmVudDogXCIgKyAoU3RyaW5nKGZhY3RvcnkpKSArXG4gICAgICAgICAgKHJlYXNvbiA/IChcIlxcblJlYXNvbjogXCIgKyByZWFzb24pIDogJycpXG4gICAgICAgICk7XG4gICAgICAgIGlmIChpc0RlZihmYWN0b3J5LmVycm9yQ29tcCkpIHtcbiAgICAgICAgICBmYWN0b3J5LmVycm9yID0gdHJ1ZTtcbiAgICAgICAgICBmb3JjZVJlbmRlcih0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHZhciByZXMgPSBmYWN0b3J5KHJlc29sdmUsIHJlamVjdCk7XG5cbiAgICAgIGlmIChpc09iamVjdChyZXMpKSB7XG4gICAgICAgIGlmIChpc1Byb21pc2UocmVzKSkge1xuICAgICAgICAgIC8vICgpID0+IFByb21pc2VcbiAgICAgICAgICBpZiAoaXNVbmRlZihmYWN0b3J5LnJlc29sdmVkKSkge1xuICAgICAgICAgICAgcmVzLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaXNQcm9taXNlKHJlcy5jb21wb25lbnQpKSB7XG4gICAgICAgICAgcmVzLmNvbXBvbmVudC50aGVuKHJlc29sdmUsIHJlamVjdCk7XG5cbiAgICAgICAgICBpZiAoaXNEZWYocmVzLmVycm9yKSkge1xuICAgICAgICAgICAgZmFjdG9yeS5lcnJvckNvbXAgPSBlbnN1cmVDdG9yKHJlcy5lcnJvciwgYmFzZUN0b3IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpc0RlZihyZXMubG9hZGluZykpIHtcbiAgICAgICAgICAgIGZhY3RvcnkubG9hZGluZ0NvbXAgPSBlbnN1cmVDdG9yKHJlcy5sb2FkaW5nLCBiYXNlQ3Rvcik7XG4gICAgICAgICAgICBpZiAocmVzLmRlbGF5ID09PSAwKSB7XG4gICAgICAgICAgICAgIGZhY3RvcnkubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aW1lckxvYWRpbmcgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aW1lckxvYWRpbmcgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChpc1VuZGVmKGZhY3RvcnkucmVzb2x2ZWQpICYmIGlzVW5kZWYoZmFjdG9yeS5lcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgIGZhY3RvcnkubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBmb3JjZVJlbmRlcihmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCByZXMuZGVsYXkgfHwgMjAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaXNEZWYocmVzLnRpbWVvdXQpKSB7XG4gICAgICAgICAgICB0aW1lclRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdGltZXJUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgaWYgKGlzVW5kZWYoZmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoXG4gICAgICAgICAgICAgICAgICBcInRpbWVvdXQgKFwiICsgKHJlcy50aW1lb3V0KSArIFwibXMpXCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCByZXMudGltZW91dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN5bmMgPSBmYWxzZTtcbiAgICAgIC8vIHJldHVybiBpbiBjYXNlIHJlc29sdmVkIHN5bmNocm9ub3VzbHlcbiAgICAgIHJldHVybiBmYWN0b3J5LmxvYWRpbmdcbiAgICAgICAgPyBmYWN0b3J5LmxvYWRpbmdDb21wXG4gICAgICAgIDogZmFjdG9yeS5yZXNvbHZlZFxuICAgIH1cbiAgfVxuXG4gIC8qICAqL1xuXG4gIGZ1bmN0aW9uIGlzQXN5bmNQbGFjZWhvbGRlciAobm9kZSkge1xuICAgIHJldHVybiBub2RlLmlzQ29tbWVudCAmJiBub2RlLmFzeW5jRmFjdG9yeVxuICB9XG5cbiAgLyogICovXG5cbiAgZnVuY3Rpb24gZ2V0Rmlyc3RDb21wb25lbnRDaGlsZCAoY2hpbGRyZW4pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGMgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgaWYgKGlzRGVmKGMpICYmIChpc0RlZihjLmNvbXBvbmVudE9wdGlvbnMpIHx8IGlzQXN5bmNQbGFjZWhvbGRlcihjKSkpIHtcbiAgICAgICAgICByZXR1cm4gY1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyogICovXG5cbiAgLyogICovXG5cbiAgZnVuY3Rpb24gaW5pdEV2ZW50cyAodm0pIHtcbiAgICB2bS5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB2bS5faGFzSG9va0V2ZW50ID0gZmFsc2U7XG4gICAgLy8gaW5pdCBwYXJlbnQgYXR0YWNoZWQgZXZlbnRzXG4gICAgdmFyIGxpc3RlbmVycyA9IHZtLiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM7XG4gICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgdXBkYXRlQ29tcG9uZW50TGlzdGVuZXJzKHZtLCBsaXN0ZW5lcnMpO1xuICAgIH1cbiAgfVxuXG4gIHZhciB0YXJnZXQ7XG5cbiAgZnVuY3Rpb24gYWRkIChldmVudCwgZm4pIHtcbiAgICB0YXJnZXQuJG9uKGV2ZW50LCBmbik7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmUkMSAoZXZlbnQsIGZuKSB7XG4gICAgdGFyZ2V0LiRvZmYoZXZlbnQsIGZuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9uY2VIYW5kbGVyIChldmVudCwgZm4pIHtcbiAgICB2YXIgX3RhcmdldCA9IHRhcmdldDtcbiAgICByZXR1cm4gZnVuY3Rpb24gb25jZUhhbmRsZXIgKCkge1xuICAgICAgdmFyIHJlcyA9IGZuLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICBpZiAocmVzICE9PSBudWxsKSB7XG4gICAgICAgIF90YXJnZXQuJG9mZihldmVudCwgb25jZUhhbmRsZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUNvbXBvbmVudExpc3RlbmVycyAoXG4gICAgdm0sXG4gICAgbGlzdGVuZXJzLFxuICAgIG9sZExpc3RlbmVyc1xuICApIHtcbiAgICB0YXJnZXQgPSB2bTtcbiAgICB1cGRhdGVMaXN0ZW5lcnMobGlzdGVuZXJzLCBvbGRMaXN0ZW5lcnMgfHwge30sIGFkZCwgcmVtb3ZlJDEsIGNyZWF0ZU9uY2VIYW5kbGVyLCB2bSk7XG4gICAgdGFyZ2V0ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZXZlbnRzTWl4aW4gKFZ1ZSkge1xuICAgIHZhciBob29rUkUgPSAvXmhvb2s6LztcbiAgICBWdWUucHJvdG90eXBlLiRvbiA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICAgIHZhciB2bSA9IHRoaXM7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBldmVudC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICB2bS4kb24oZXZlbnRbaV0sIGZuKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKHZtLl9ldmVudHNbZXZlbnRdIHx8ICh2bS5fZXZlbnRzW2V2ZW50XSA9IFtdKSkucHVzaChmbik7XG4gICAgICAgIC8vIG9wdGltaXplIGhvb2s6ZXZlbnQgY29zdCBieSB1c2luZyBhIGJvb2xlYW4gZmxhZyBtYXJrZWQgYXQgcmVnaXN0cmF0aW9uXG4gICAgICAgIC8vIGluc3RlYWQgb2YgYSBoYXNoIGxvb2t1cFxuICAgICAgICBpZiAoaG9va1JFLnRlc3QoZXZlbnQpKSB7XG4gICAgICAgICAgdm0uX2hhc0hvb2tFdmVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB2bVxuICAgIH07XG5cbiAgICBWdWUucHJvdG90eXBlLiRvbmNlID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIG9uICgpIHtcbiAgICAgICAgdm0uJG9mZihldmVudCwgb24pO1xuICAgICAgICBmbi5hcHBseSh2bSwgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIG9uLmZuID0gZm47XG4gICAgICB2bS4kb24oZXZlbnQsIG9uKTtcbiAgICAgIHJldHVybiB2bVxuICAgIH07XG5cbiAgICBWdWUucHJvdG90eXBlLiRvZmYgPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XG4gICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgLy8gYWxsXG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgdm0uX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHJldHVybiB2bVxuICAgICAgfVxuICAgICAgLy8gYXJyYXkgb2YgZXZlbnRzXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcbiAgICAgICAgZm9yICh2YXIgaSQxID0gMCwgbCA9IGV2ZW50Lmxlbmd0aDsgaSQxIDwgbDsgaSQxKyspIHtcbiAgICAgICAgICB2bS4kb2ZmKGV2ZW50W2kkMV0sIGZuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdm1cbiAgICAgIH1cbiAgICAgIC8vIHNwZWNpZmljIGV2ZW50XG4gICAgICB2YXIgY2JzID0gdm0uX2V2ZW50c1tldmVudF07XG4gICAgICBpZiAoIWNicykge1xuICAgICAgICByZXR1cm4gdm1cbiAgICAgIH1cbiAgICAgIGlmICghZm4pIHtcbiAgICAgICAgdm0uX2V2ZW50c1tldmVudF0gPSBudWxsO1xuICAgICAgICByZXR1cm4gdm1cbiAgICAgIH1cbiAgICAgIC8vIHNwZWNpZmljIGhhbmRsZXJcbiAgICAgIHZhciBjYjtcbiAgICAgIHZhciBpID0gY2JzLmxlbmd0aDtcbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgY2IgPSBjYnNbaV07XG4gICAgICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XG4gICAgICAgICAgY2JzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdm1cbiAgICB9O1xuXG4gICAgVnVlLnByb3RvdHlwZS4kZW1pdCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgIHtcbiAgICAgICAgdmFyIGxvd2VyQ2FzZUV2ZW50ID0gZXZlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGxvd2VyQ2FzZUV2ZW50ICE9PSBldmVudCAmJiB2bS5fZXZlbnRzW2xvd2VyQ2FzZUV2ZW50XSkge1xuICAgICAgICAgIHRpcChcbiAgICAgICAgICAgIFwiRXZlbnQgXFxcIlwiICsgbG93ZXJDYXNlRXZlbnQgKyBcIlxcXCIgaXMgZW1pdHRlZCBpbiBjb21wb25lbnQgXCIgK1xuICAgICAgICAgICAgKGZvcm1hdENvbXBvbmVudE5hbWUodm0pKSArIFwiIGJ1dCB0aGUgaGFuZGxlciBpcyByZWdpc3RlcmVkIGZvciBcXFwiXCIgKyBldmVudCArIFwiXFxcIi4gXCIgK1xuICAgICAgICAgICAgXCJOb3RlIHRoYXQgSFRNTCBhdHRyaWJ1dGVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlIGFuZCB5b3UgY2Fubm90IHVzZSBcIiArXG4gICAgICAgICAgICBcInYtb24gdG8gbGlzdGVuIHRvIGNhbWVsQ2FzZSBldmVudHMgd2hlbiB1c2luZyBpbi1ET00gdGVtcGxhdGVzLiBcIiArXG4gICAgICAgICAgICBcIllvdSBzaG91bGQgcHJvYmFibHkgdXNlIFxcXCJcIiArIChoeXBoZW5hdGUoZXZlbnQpKSArIFwiXFxcIiBpbnN0ZWFkIG9mIFxcXCJcIiArIGV2ZW50ICsgXCJcXFwiLlwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGNicyA9IHZtLl9ldmVudHNbZXZlbnRdO1xuICAgICAgaWYgKGNicykge1xuICAgICAgICBjYnMgPSBjYnMubGVuZ3RoID4gMSA/IHRvQXJyYXkoY2JzKSA6IGNicztcbiAgICAgICAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cywgMSk7XG4gICAgICAgIHZhciBpbmZvID0gXCJldmVudCBoYW5kbGVyIGZvciBcXFwiXCIgKyBldmVudCArIFwiXFxcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNicy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhjYnNbaV0sIHZtLCBhcmdzLCB2bSwgaW5mbyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB2bVxuICAgIH07XG4gIH1cblxuICAvKiAgKi9cblxuICB2YXIgYWN0aXZlSW5zdGFuY2UgPSBudWxsO1xuICB2YXIgaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gc2V0QWN0aXZlSW5zdGFuY2Uodm0pIHtcbiAgICB2YXIgcHJldkFjdGl2ZUluc3RhbmNlID0gYWN0aXZlSW5zdGFuY2U7XG4gICAgYWN0aXZlSW5zdGFuY2UgPSB2bTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgYWN0aXZlSW5zdGFuY2UgPSBwcmV2QWN0aXZlSW5zdGFuY2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdExpZmVjeWNsZSAodm0pIHtcbiAgICB2YXIgb3B0aW9ucyA9IHZtLiRvcHRpb25zO1xuXG4gICAgLy8gbG9jYXRlIGZpcnN0IG5vbi1hYnN0cmFjdCBwYXJlbnRcbiAgICB2YXIgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQ7XG4gICAgaWYgKHBhcmVudCAmJiAhb3B0aW9ucy5hYnN0cmFjdCkge1xuICAgICAgd2hpbGUgKHBhcmVudC4kb3B0aW9ucy5hYnN0cmFjdCAmJiBwYXJlbnQuJHBhcmVudCkge1xuICAgICAgICBwYXJlbnQgPSBwYXJlbnQuJHBhcmVudDtcbiAgICAgIH1cbiAgICAgIHBhcmVudC4kY2hpbGRyZW4ucHVzaCh2bSk7XG4gICAgfVxuXG4gICAgdm0uJHBhcmVudCA9IHBhcmVudDtcbiAgICB2bS4kcm9vdCA9IHBhcmVudCA/IHBhcmVudC4kcm9vdCA6IHZtO1xuXG4gICAgdm0uJGNoaWxkcmVuID0gW107XG4gICAgdm0uJHJlZnMgPSB7fTtcblxuICAgIHZtLl93YXRjaGVyID0gbnVsbDtcbiAgICB2bS5faW5hY3RpdmUgPSBudWxsO1xuICAgIHZtLl9kaXJlY3RJbmFjdGl2ZSA9IGZhbHNlO1xuICAgIHZtLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB2bS5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB2bS5faXNCZWluZ0Rlc3Ryb3llZCA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gbGlmZWN5Y2xlTWl4aW4gKFZ1ZSkge1xuICAgIFZ1ZS5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uICh2bm9kZSwgaHlkcmF0aW5nKSB7XG4gICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgdmFyIHByZXZFbCA9IHZtLiRlbDtcbiAgICAgIHZhciBwcmV2Vm5vZGUgPSB2bS5fdm5vZGU7XG4gICAgICB2YXIgcmVzdG9yZUFjdGl2ZUluc3RhbmNlID0gc2V0QWN0aXZlSW5zdGFuY2Uodm0pO1xuICAgICAgdm0uX3Zub2RlID0gdm5vZGU7XG4gICAgICAvLyBWdWUucHJvdG90eXBlLl9fcGF0Y2hfXyBpcyBpbmplY3RlZCBpbiBlbnRyeSBwb2ludHNcbiAgICAgIC8vIGJhc2VkIG9uIHRoZSByZW5kZXJpbmcgYmFja2VuZCB1c2VkLlxuICAgICAgaWYgKCFwcmV2Vm5vZGUpIHtcbiAgICAgICAgLy8gaW5pdGlhbCByZW5kZXJcbiAgICAgICAgdm0uJGVsID0gdm0uX19wYXRjaF9fKHZtLiRlbCwgdm5vZGUsIGh5ZHJhdGluZywgZmFsc2UgLyogcmVtb3ZlT25seSAqLyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1cGRhdGVzXG4gICAgICAgIHZtLiRlbCA9IHZtLl9fcGF0Y2hfXyhwcmV2Vm5vZGUsIHZub2RlKTtcbiAgICAgIH1cbiAgICAgIHJlc3RvcmVBY3RpdmVJbnN0YW5jZSgpO1xuICAgICAgLy8gdXBkYXRlIF9fdnVlX18gcmVmZXJlbmNlXG4gICAgICBpZiAocHJldkVsKSB7XG4gICAgICAgIHByZXZFbC5fX3Z1ZV9fID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmICh2bS4kZWwpIHtcbiAgICAgICAgdm0uJGVsLl9fdnVlX18gPSB2bTtcbiAgICAgIH1cbiAgICAgIC8vIGlmIHBhcmVudCBpcyBhbiBIT0MsIHVwZGF0ZSBpdHMgJGVsIGFzIHdlbGxcbiAgICAgIGlmICh2bS4kdm5vZGUgJiYgdm0uJHBhcmVudCAmJiB2bS4kdm5vZGUgPT09IHZtLiRwYXJlbnQuX3Zub2RlKSB7XG4gICAgICAgIHZtLiRwYXJlbnQuJGVsID0gdm0uJGVsO1xuICAgICAgfVxuICAgICAgLy8gdXBkYXRlZCBob29rIGlzIGNhbGxlZCBieSB0aGUgc2NoZWR1bGVyIHRvIGVuc3VyZSB0aGF0IGNoaWxkcmVuIGFyZVxuICAgICAgLy8gdXBkYXRlZCBpbiBhIHBhcmVudCdzIHVwZGF0ZWQgaG9vay5cbiAgICB9O1xuXG4gICAgVnVlLnByb3RvdHlwZS4kZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgaWYgKHZtLl93YXRjaGVyKSB7XG4gICAgICAgIHZtLl93YXRjaGVyLnVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBWdWUucHJvdG90eXBlLiRkZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgIGlmICh2bS5faXNCZWluZ0Rlc3Ryb3llZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNhbGxIb29rKHZtLCAnYmVmb3JlRGVzdHJveScpO1xuICAgICAgdm0uX2lzQmVpbmdEZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSBwYXJlbnRcbiAgICAgIHZhciBwYXJlbnQgPSB2bS4kcGFyZW50O1xuICAgICAgaWYgKHBhcmVudCAmJiAhcGFyZW50Ll9pc0JlaW5nRGVzdHJveWVkICYmICF2bS4kb3B0aW9ucy5hYnN0cmFjdCkge1xuICAgICAgICByZW1vdmUocGFyZW50LiRjaGlsZHJlbiwgdm0pO1xuICAgICAgfVxuICAgICAgLy8gdGVhcmRvd24gd2F0Y2hlcnNcbiAgICAgIGlmICh2bS5fd2F0Y2hlcikge1xuICAgICAgICB2bS5fd2F0Y2hlci50ZWFyZG93bigpO1xuICAgICAgfVxuICAgICAgdmFyIGkgPSB2bS5fd2F0Y2hlcnMubGVuZ3RoO1xuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICB2bS5fd2F0Y2hlcnNbaV0udGVhcmRvd24oKTtcbiAgICAgIH1cbiAgICAgIC8vIHJlbW92ZSByZWZlcmVuY2UgZnJvbSBkYXRhIG9iXG4gICAgICAvLyBmcm96ZW4gb2JqZWN0IG1heSBub3QgaGF2ZSBvYnNlcnZlci5cbiAgICAgIGlmICh2bS5fZGF0YS5fX29iX18pIHtcbiAgICAgICAgdm0uX2RhdGEuX19vYl9fLnZtQ291bnQtLTtcbiAgICAgIH1cbiAgICAgIC8vIGNhbGwgdGhlIGxhc3QgaG9vay4uLlxuICAgICAgdm0uX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgIC8vIGludm9rZSBkZXN0cm95IGhvb2tzIG9uIGN1cnJlbnQgcmVuZGVyZWQgdHJlZVxuICAgICAgdm0uX19wYXRjaF9fKHZtLl92bm9kZSwgbnVsbCk7XG4gICAgICAvLyBmaXJlIGRlc3Ryb3llZCBob29rXG4gICAgICBjYWxsSG9vayh2bSwgJ2Rlc3Ryb3llZCcpO1xuICAgICAgLy8gdHVybiBvZmYgYWxsIGluc3RhbmNlIGxpc3RlbmVycy5cbiAgICAgIHZtLiRvZmYoKTtcbiAgICAgIC8vIHJlbW92ZSBfX3Z1ZV9fIHJlZmVyZW5jZVxuICAgICAgaWYgKHZtLiRlbCkge1xuICAgICAgICB2bS4kZWwuX192dWVfXyA9IG51bGw7XG4gICAgICB9XG4gICAgICAvLyByZWxlYXNlIGNpcmN1bGFyIHJlZmVyZW5jZSAoIzY3NTkpXG4gICAgICBpZiAodm0uJHZub2RlKSB7XG4gICAgICAgIHZtLiR2bm9kZS5wYXJlbnQgPSBudWxsO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBtb3VudENvbXBvbmVudCAoXG4gICAgdm0sXG4gICAgZWwsXG4gICAgaHlkcmF0aW5nXG4gICkge1xuICAgIHZtLiRlbCA9IGVsO1xuICAgIGlmICghdm0uJG9wdGlvbnMucmVuZGVyKSB7XG4gICAgICB2bS4kb3B0aW9ucy5yZW5kZXIgPSBjcmVhdGVFbXB0eVZOb2RlO1xuICAgICAge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKCh2bS4kb3B0aW9ucy50ZW1wbGF0ZSAmJiB2bS4kb3B0aW9ucy50ZW1wbGF0ZS5jaGFyQXQoMCkgIT09ICcjJykgfHxcbiAgICAgICAgICB2bS4kb3B0aW9ucy5lbCB8fCBlbCkge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICAnWW91IGFyZSB1c2luZyB0aGUgcnVudGltZS1vbmx5IGJ1aWxkIG9mIFZ1ZSB3aGVyZSB0aGUgdGVtcGxhdGUgJyArXG4gICAgICAgICAgICAnY29tcGlsZXIgaXMgbm90IGF2YWlsYWJsZS4gRWl0aGVyIHByZS1jb21waWxlIHRoZSB0ZW1wbGF0ZXMgaW50byAnICtcbiAgICAgICAgICAgICdyZW5kZXIgZnVuY3Rpb25zLCBvciB1c2UgdGhlIGNvbXBpbGVyLWluY2x1ZGVkIGJ1aWxkLicsXG4gICAgICAgICAgICB2bVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgICdGYWlsZWQgdG8gbW91bnQgY29tcG9uZW50OiB0ZW1wbGF0ZSBvciByZW5kZXIgZnVuY3Rpb24gbm90IGRlZmluZWQuJyxcbiAgICAgICAgICAgIHZtXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjYWxsSG9vayh2bSwgJ2JlZm9yZU1vdW50Jyk7XG5cbiAgICB2YXIgdXBkYXRlQ29tcG9uZW50O1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChjb25maWcucGVyZm9ybWFuY2UgJiYgbWFyaykge1xuICAgICAgdXBkYXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbmFtZSA9IHZtLl9uYW1lO1xuICAgICAgICB2YXIgaWQgPSB2bS5fdWlkO1xuICAgICAgICB2YXIgc3RhcnRUYWcgPSBcInZ1ZS1wZXJmLXN0YXJ0OlwiICsgaWQ7XG4gICAgICAgIHZhciBlbmRUYWcgPSBcInZ1ZS1wZXJmLWVuZDpcIiArIGlkO1xuXG4gICAgICAgIG1hcmsoc3RhcnRUYWcpO1xuICAgICAgICB2YXIgdm5vZGUgPSB2bS5fcmVuZGVyKCk7XG4gICAgICAgIG1hcmsoZW5kVGFnKTtcbiAgICAgICAgbWVhc3VyZSgoXCJ2dWUgXCIgKyBuYW1lICsgXCIgcmVuZGVyXCIpLCBzdGFydFRhZywgZW5kVGFnKTtcblxuICAgICAgICBtYXJrKHN0YXJ0VGFnKTtcbiAgICAgICAgdm0uX3VwZGF0ZSh2bm9kZSwgaHlkcmF0aW5nKTtcbiAgICAgICAgbWFyayhlbmRUYWcpO1xuICAgICAgICBtZWFzdXJlKChcInZ1ZSBcIiArIG5hbWUgKyBcIiBwYXRjaFwiKSwgc3RhcnRUYWcsIGVuZFRhZyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVDb21wb25lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZtLl91cGRhdGUodm0uX3JlbmRlcigpLCBoeWRyYXRpbmcpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyB3ZSBzZXQgdGhpcyB0byB2bS5fd2F0Y2hlciBpbnNpZGUgdGhlIHdhdGNoZXIncyBjb25zdHJ1Y3RvclxuICAgIC8vIHNpbmNlIHRoZSB3YXRjaGVyJ3MgaW5pdGlhbCBwYXRjaCBtYXkgY2FsbCAkZm9yY2VVcGRhdGUgKGUuZy4gaW5zaWRlIGNoaWxkXG4gICAgLy8gY29tcG9uZW50J3MgbW91bnRlZCBob29rKSwgd2hpY2ggcmVsaWVzIG9uIHZtLl93YXRjaGVyIGJlaW5nIGFscmVhZHkgZGVmaW5lZFxuICAgIG5ldyBXYXRjaGVyKHZtLCB1cGRhdGVDb21wb25lbnQsIG5vb3AsIHtcbiAgICAgIGJlZm9yZTogZnVuY3Rpb24gYmVmb3JlICgpIHtcbiAgICAgICAgaWYgKHZtLl9pc01vdW50ZWQgJiYgIXZtLl9pc0Rlc3Ryb3llZCkge1xuICAgICAgICAgIGNhbGxIb29rKHZtLCAnYmVmb3JlVXBkYXRlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB0cnVlIC8qIGlzUmVuZGVyV2F0Y2hlciAqLyk7XG4gICAgaHlkcmF0aW5nID0gZmFsc2U7XG5cbiAgICAvLyBtYW51YWxseSBtb3VudGVkIGluc3RhbmNlLCBjYWxsIG1vdW50ZWQgb24gc2VsZlxuICAgIC8vIG1vdW50ZWQgaXMgY2FsbGVkIGZvciByZW5kZXItY3JlYXRlZCBjaGlsZCBjb21wb25lbnRzIGluIGl0cyBpbnNlcnRlZCBob29rXG4gICAgaWYgKHZtLiR2bm9kZSA9PSBudWxsKSB7XG4gICAgICB2bS5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICAgIGNhbGxIb29rKHZtLCAnbW91bnRlZCcpO1xuICAgIH1cbiAgICByZXR1cm4gdm1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUNoaWxkQ29tcG9uZW50IChcbiAgICB2bSxcbiAgICBwcm9wc0RhdGEsXG4gICAgbGlzdGVuZXJzLFxuICAgIHBhcmVudFZub2RlLFxuICAgIHJlbmRlckNoaWxkcmVuXG4gICkge1xuICAgIHtcbiAgICAgIGlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gZGV0ZXJtaW5lIHdoZXRoZXIgY29tcG9uZW50IGhhcyBzbG90IGNoaWxkcmVuXG4gICAgLy8gd2UgbmVlZCB0byBkbyB0aGlzIGJlZm9yZSBvdmVyd3JpdGluZyAkb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4uXG5cbiAgICAvLyBjaGVjayBpZiB0aGVyZSBhcmUgZHluYW1pYyBzY29wZWRTbG90cyAoaGFuZC13cml0dGVuIG9yIGNvbXBpbGVkIGJ1dCB3aXRoXG4gICAgLy8gZHluYW1pYyBzbG90IG5hbWVzKS4gU3RhdGljIHNjb3BlZCBzbG90cyBjb21waWxlZCBmcm9tIHRlbXBsYXRlIGhhcyB0aGVcbiAgICAvLyBcIiRzdGFibGVcIiBtYXJrZXIuXG4gICAgdmFyIG5ld1Njb3BlZFNsb3RzID0gcGFyZW50Vm5vZGUuZGF0YS5zY29wZWRTbG90cztcbiAgICB2YXIgb2xkU2NvcGVkU2xvdHMgPSB2bS4kc2NvcGVkU2xvdHM7XG4gICAgdmFyIGhhc0R5bmFtaWNTY29wZWRTbG90ID0gISEoXG4gICAgICAobmV3U2NvcGVkU2xvdHMgJiYgIW5ld1Njb3BlZFNsb3RzLiRzdGFibGUpIHx8XG4gICAgICAob2xkU2NvcGVkU2xvdHMgIT09IGVtcHR5T2JqZWN0ICYmICFvbGRTY29wZWRTbG90cy4kc3RhYmxlKSB8fFxuICAgICAgKG5ld1Njb3BlZFNsb3RzICYmIHZtLiRzY29wZWRTbG90cy4ka2V5ICE9PSBuZXdTY29wZWRTbG90cy4ka2V5KVxuICAgICk7XG5cbiAgICAvLyBBbnkgc3RhdGljIHNsb3QgY2hpbGRyZW4gZnJvbSB0aGUgcGFyZW50IG1heSBoYXZlIGNoYW5nZWQgZHVyaW5nIHBhcmVudCdzXG4gICAgLy8gdXBkYXRlLiBEeW5hbWljIHNjb3BlZCBzbG90cyBtYXkgYWxzbyBoYXZlIGNoYW5nZWQuIEluIHN1Y2ggY2FzZXMsIGEgZm9yY2VkXG4gICAgLy8gdXBkYXRlIGlzIG5lY2Vzc2FyeSB0byBlbnN1cmUgY29ycmVjdG5lc3MuXG4gICAgdmFyIG5lZWRzRm9yY2VVcGRhdGUgPSAhIShcbiAgICAgIHJlbmRlckNoaWxkcmVuIHx8ICAgICAgICAgICAgICAgLy8gaGFzIG5ldyBzdGF0aWMgc2xvdHNcbiAgICAgIHZtLiRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbiB8fCAgLy8gaGFzIG9sZCBzdGF0aWMgc2xvdHNcbiAgICAgIGhhc0R5bmFtaWNTY29wZWRTbG90XG4gICAgKTtcblxuICAgIHZtLiRvcHRpb25zLl9wYXJlbnRWbm9kZSA9IHBhcmVudFZub2RlO1xuICAgIHZtLiR2bm9kZSA9IHBhcmVudFZub2RlOyAvLyB1cGRhdGUgdm0ncyBwbGFjZWhvbGRlciBub2RlIHdpdGhvdXQgcmUtcmVuZGVyXG5cbiAgICBpZiAodm0uX3Zub2RlKSB7IC8vIHVwZGF0ZSBjaGlsZCB0cmVlJ3MgcGFyZW50XG4gICAgICB2bS5fdm5vZGUucGFyZW50ID0gcGFyZW50Vm5vZGU7XG4gICAgfVxuICAgIHZtLiRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbiA9IHJlbmRlckNoaWxkcmVuO1xuXG4gICAgLy8gdXBkYXRlICRhdHRycyBhbmQgJGxpc3RlbmVycyBoYXNoXG4gICAgLy8gdGhlc2UgYXJlIGFsc28gcmVhY3RpdmUgc28gdGhleSBtYXkgdHJpZ2dlciBjaGlsZCB1cGRhdGUgaWYgdGhlIGNoaWxkXG4gICAgLy8gdXNlZCB0aGVtIGR1cmluZyByZW5kZXJcbiAgICB2bS4kYXR0cnMgPSBwYXJlbnRWbm9kZS5kYXRhLmF0dHJzIHx8IGVtcHR5T2JqZWN0O1xuICAgIHZtLiRsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3Q7XG5cbiAgICAvLyB1cGRhdGUgcHJvcHNcbiAgICBpZiAocHJvcHNEYXRhICYmIHZtLiRvcHRpb25zLnByb3BzKSB7XG4gICAgICB0b2dnbGVPYnNlcnZpbmcoZmFsc2UpO1xuICAgICAgdmFyIHByb3BzID0gdm0uX3Byb3BzO1xuICAgICAgdmFyIHByb3BLZXlzID0gdm0uJG9wdGlvbnMuX3Byb3BLZXlzIHx8IFtdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIga2V5ID0gcHJvcEtleXNbaV07XG4gICAgICAgIHZhciBwcm9wT3B0aW9ucyA9IHZtLiRvcHRpb25zLnByb3BzOyAvLyB3dGYgZmxvdz9cbiAgICAgICAgcHJvcHNba2V5XSA9IHZhbGlkYXRlUHJvcChrZXksIHByb3BPcHRpb25zLCBwcm9wc0RhdGEsIHZtKTtcbiAgICAgIH1cbiAgICAgIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcbiAgICAgIC8vIGtlZXAgYSBjb3B5IG9mIHJhdyBwcm9wc0RhdGFcbiAgICAgIHZtLiRvcHRpb25zLnByb3BzRGF0YSA9IHByb3BzRGF0YTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgbGlzdGVuZXJzXG4gICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0O1xuICAgIHZhciBvbGRMaXN0ZW5lcnMgPSB2bS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzO1xuICAgIHZtLiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnMgPSBsaXN0ZW5lcnM7XG4gICAgdXBkYXRlQ29tcG9uZW50TGlzdGVuZXJzKHZtLCBsaXN0ZW5lcnMsIG9sZExpc3RlbmVycyk7XG5cbiAgICAvLyByZXNvbHZlIHNsb3RzICsgZm9yY2UgdXBkYXRlIGlmIGhhcyBjaGlsZHJlblxuICAgIGlmIChuZWVkc0ZvcmNlVXBkYXRlKSB7XG4gICAgICB2bS4kc2xvdHMgPSByZXNvbHZlU2xvdHMocmVuZGVyQ2hpbGRyZW4sIHBhcmVudFZub2RlLmNvbnRleHQpO1xuICAgICAgdm0uJGZvcmNlVXBkYXRlKCk7XG4gICAgfVxuXG4gICAge1xuICAgICAgaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNJbkluYWN0aXZlVHJlZSAodm0pIHtcbiAgICB3aGlsZSAodm0gJiYgKHZtID0gdm0uJHBhcmVudCkpIHtcbiAgICAgIGlmICh2bS5faW5hY3RpdmUpIHsgcmV0dXJuIHRydWUgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlQ2hpbGRDb21wb25lbnQgKHZtLCBkaXJlY3QpIHtcbiAgICBpZiAoZGlyZWN0KSB7XG4gICAgICB2bS5fZGlyZWN0SW5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGlmIChpc0luSW5hY3RpdmVUcmVlKHZtKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZtLl9kaXJlY3RJbmFjdGl2ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh2bS5faW5hY3RpdmUgfHwgdm0uX2luYWN0aXZlID09PSBudWxsKSB7XG4gICAgICB2bS5faW5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdm0uJGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFjdGl2YXRlQ2hpbGRDb21wb25lbnQodm0uJGNoaWxkcmVuW2ldKTtcbiAgICAgIH1cbiAgICAgIGNhbGxIb29rKHZtLCAnYWN0aXZhdGVkJyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVhY3RpdmF0ZUNoaWxkQ29tcG9uZW50ICh2bSwgZGlyZWN0KSB7XG4gICAgaWYgKGRpcmVjdCkge1xuICAgICAgdm0uX2RpcmVjdEluYWN0aXZlID0gdHJ1ZTtcbiAgICAgIGlmIChpc0luSW5hY3RpdmVUcmVlKHZtKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF2bS5faW5hY3RpdmUpIHtcbiAgICAgIHZtLl9pbmFjdGl2ZSA9IHRydWU7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZtLiRjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBkZWFjdGl2YXRlQ2hpbGRDb21wb25lbnQodm0uJGNoaWxkcmVuW2ldKTtcbiAgICAgIH1cbiAgICAgIGNhbGxIb29rKHZtLCAnZGVhY3RpdmF0ZWQnKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjYWxsSG9vayAodm0sIGhvb2spIHtcbiAgICAvLyAjNzU3MyBkaXNhYmxlIGRlcCBjb2xsZWN0aW9uIHdoZW4gaW52b2tpbmcgbGlmZWN5Y2xlIGhvb2tzXG4gICAgcHVzaFRhcmdldCgpO1xuICAgIHZhciBoYW5kbGVycyA9IHZtLiRvcHRpb25zW2hvb2tdO1xuICAgIHZhciBpbmZvID0gaG9vayArIFwiIGhvb2tcIjtcbiAgICBpZiAoaGFuZGxlcnMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgIGludm9rZVdpdGhFcnJvckhhbmRsaW5nKGhhbmRsZXJzW2ldLCB2bSwgbnVsbCwgdm0sIGluZm8pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodm0uX2hhc0hvb2tFdmVudCkge1xuICAgICAgdm0uJGVtaXQoJ2hvb2s6JyArIGhvb2spO1xuICAgIH1cbiAgICBwb3BUYXJnZXQoKTtcbiAgfVxuXG4gIC8qICAqL1xuXG4gIHZhciBNQVhfVVBEQVRFX0NPVU5UID0gMTAwO1xuXG4gIHZhciBxdWV1ZSA9IFtdO1xuICB2YXIgYWN0aXZhdGVkQ2hpbGRyZW4gPSBbXTtcbiAgdmFyIGhhcyA9IHt9O1xuICB2YXIgY2lyY3VsYXIgPSB7fTtcbiAgdmFyIHdhaXRpbmcgPSBmYWxzZTtcbiAgdmFyIGZsdXNoaW5nID0gZmFsc2U7XG4gIHZhciBpbmRleCA9IDA7XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBzY2hlZHVsZXIncyBzdGF0ZS5cbiAgICovXG4gIGZ1bmN0aW9uIHJlc2V0U2NoZWR1bGVyU3RhdGUgKCkge1xuICAgIGluZGV4ID0gcXVldWUubGVuZ3RoID0gYWN0aXZhdGVkQ2hpbGRyZW4ubGVuZ3RoID0gMDtcbiAgICBoYXMgPSB7fTtcbiAgICB7XG4gICAgICBjaXJjdWxhciA9IHt9O1xuICAgIH1cbiAgICB3YWl0aW5nID0gZmx1c2hpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIEFzeW5jIGVkZ2UgY2FzZSAjNjU2NiByZXF1aXJlcyBzYXZpbmcgdGhlIHRpbWVzdGFtcCB3aGVuIGV2ZW50IGxpc3RlbmVycyBhcmVcbiAgLy8gYXR0YWNoZWQuIEhvd2V2ZXIsIGNhbGxpbmcgcGVyZm9ybWFuY2Uubm93KCkgaGFzIGEgcGVyZiBvdmVyaGVhZCBlc3BlY2lhbGx5XG4gIC8vIGlmIHRoZSBwYWdlIGhhcyB0aG91c2FuZHMgb2YgZXZlbnQgbGlzdGVuZXJzLiBJbnN0ZWFkLCB3ZSB0YWtlIGEgdGltZXN0YW1wXG4gIC8vIGV2ZXJ5IHRpbWUgdGhlIHNjaGVkdWxlciBmbHVzaGVzIGFuZCB1c2UgdGhhdCBmb3IgYWxsIGV2ZW50IGxpc3RlbmVyc1xuICAvLyBhdHRhY2hlZCBkdXJpbmcgdGhhdCBmbHVzaC5cbiAgdmFyIGN1cnJlbnRGbHVzaFRpbWVzdGFtcCA9IDA7XG5cbiAgLy8gQXN5bmMgZWRnZSBjYXNlIGZpeCByZXF1aXJlcyBzdG9yaW5nIGFuIGV2ZW50IGxpc3RlbmVyJ3MgYXR0YWNoIHRpbWVzdGFtcC5cbiAgdmFyIGdldE5vdyA9IERhdGUubm93O1xuXG4gIC8vIERldGVybWluZSB3aGF0IGV2ZW50IHRpbWVzdGFtcCB0aGUgYnJvd3NlciBpcyB1c2luZy4gQW5ub3lpbmdseSwgdGhlXG4gIC8vIHRpbWVzdGFtcCBjYW4gZWl0aGVyIGJlIGhpLXJlcyAocmVsYXRpdmUgdG8gcGFnZSBsb2FkKSBvciBsb3ctcmVzXG4gIC8vIChyZWxhdGl2ZSB0byBVTklYIGVwb2NoKSwgc28gaW4gb3JkZXIgdG8gY29tcGFyZSB0aW1lIHdlIGhhdmUgdG8gdXNlIHRoZVxuICAvLyBzYW1lIHRpbWVzdGFtcCB0eXBlIHdoZW4gc2F2aW5nIHRoZSBmbHVzaCB0aW1lc3RhbXAuXG4gIC8vIEFsbCBJRSB2ZXJzaW9ucyB1c2UgbG93LXJlcyBldmVudCB0aW1lc3RhbXBzLCBhbmQgaGF2ZSBwcm9ibGVtYXRpYyBjbG9ja1xuICAvLyBpbXBsZW1lbnRhdGlvbnMgKCM5NjMyKVxuICBpZiAoaW5Ccm93c2VyICYmICFpc0lFKSB7XG4gICAgdmFyIHBlcmZvcm1hbmNlID0gd2luZG93LnBlcmZvcm1hbmNlO1xuICAgIGlmIChcbiAgICAgIHBlcmZvcm1hbmNlICYmXG4gICAgICB0eXBlb2YgcGVyZm9ybWFuY2Uubm93ID09PSAnZnVuY3Rpb24nICYmXG4gICAgICBnZXROb3coKSA+IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpLnRpbWVTdGFtcFxuICAgICkge1xuICAgICAgLy8gaWYgdGhlIGV2ZW50IHRpbWVzdGFtcCwgYWx0aG91Z2ggZXZhbHVhdGVkIEFGVEVSIHRoZSBEYXRlLm5vdygpLCBpc1xuICAgICAgLy8gc21hbGxlciB0aGFuIGl0LCBpdCBtZWFucyB0aGUgZXZlbnQgaXMgdXNpbmcgYSBoaS1yZXMgdGltZXN0YW1wLFxuICAgICAgLy8gYW5kIHdlIG5lZWQgdG8gdXNlIHRoZSBoaS1yZXMgdmVyc2lvbiBmb3IgZXZlbnQgbGlzdGVuZXIgdGltZXN0YW1wcyBhc1xuICAgICAgLy8gd2VsbC5cbiAgICAgIGdldE5vdyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpOyB9O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGbHVzaCBib3RoIHF1ZXVlcyBhbmQgcnVuIHRoZSB3YXRjaGVycy5cbiAgICovXG4gIGZ1bmN0aW9uIGZsdXNoU2NoZWR1bGVyUXVldWUgKCkge1xuICAgIGN1cnJlbnRGbHVzaFRpbWVzdGFtcCA9IGdldE5vdygpO1xuICAgIGZsdXNoaW5nID0gdHJ1ZTtcbiAgICB2YXIgd2F0Y2hlciwgaWQ7XG5cbiAgICAvLyBTb3J0IHF1ZXVlIGJlZm9yZSBmbHVzaC5cbiAgICAvLyBUaGlzIGVuc3VyZXMgdGhhdDpcbiAgICAvLyAxLiBDb21wb25lbnRzIGFyZSB1cGRhdGVkIGZyb20gcGFyZW50IHRvIGNoaWxkLiAoYmVjYXVzZSBwYXJlbnQgaXMgYWx3YXlzXG4gICAgLy8gICAgY3JlYXRlZCBiZWZvcmUgdGhlIGNoaWxkKVxuICAgIC8vIDIuIEEgY29tcG9uZW50J3MgdXNlciB3YXRjaGVycyBhcmUgcnVuIGJlZm9yZSBpdHMgcmVuZGVyIHdhdGNoZXIgKGJlY2F1c2VcbiAgICAvLyAgICB1c2VyIHdhdGNoZXJzIGFyZSBjcmVhdGVkIGJlZm9yZSB0aGUgcmVuZGVyIHdhdGNoZXIpXG4gICAgLy8gMy4gSWYgYSBjb21wb25lbnQgaXMgZGVzdHJveWVkIGR1cmluZyBhIHBhcmVudCBjb21wb25lbnQncyB3YXRjaGVyIHJ1bixcbiAgICAvLyAgICBpdHMgd2F0Y2hlcnMgY2FuIGJlIHNraXBwZWQuXG4gICAgcXVldWUuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5pZCAtIGIuaWQ7IH0pO1xuXG4gICAgLy8gZG8gbm90IGNhY2hlIGxlbmd0aCBiZWNhdXNlIG1vcmUgd2F0Y2hlcnMgbWlnaHQgYmUgcHVzaGVkXG4gICAgLy8gYXMgd2UgcnVuIGV4aXN0aW5nIHdhdGNoZXJzXG4gICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgcXVldWUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB3YXRjaGVyID0gcXVldWVbaW5kZXhdO1xuICAgICAgaWYgKHdhdGNoZXIuYmVmb3JlKSB7XG4gICAgICAgIHdhdGNoZXIuYmVmb3JlKCk7XG4gICAgICB9XG4gICAgICBpZCA9IHdhdGNoZXIuaWQ7XG4gICAgICBoYXNbaWRdID0gbnVsbDtcbiAgICAgIHdhdGNoZXIucnVuKCk7XG4gICAgICAvLyBpbiBkZXYgYnVpbGQsIGNoZWNrIGFuZCBzdG9wIGNpcmN1bGFyIHVwZGF0ZXMuXG4gICAgICBpZiAoaGFzW2lkXSAhPSBudWxsKSB7XG4gICAgICAgIGNpcmN1bGFyW2lkXSA9IChjaXJjdWxhcltpZF0gfHwgMCkgKyAxO1xuICAgICAgICBpZiAoY2lyY3VsYXJbaWRdID4gTUFYX1VQREFURV9DT1VOVCkge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGFuIGluZmluaXRlIHVwZGF0ZSBsb29wICcgKyAoXG4gICAgICAgICAgICAgIHdhdGNoZXIudXNlclxuICAgICAgICAgICAgICAgID8gKFwiaW4gd2F0Y2hlciB3aXRoIGV4cHJlc3Npb24gXFxcIlwiICsgKHdhdGNoZXIuZXhwcmVzc2lvbikgKyBcIlxcXCJcIilcbiAgICAgICAgICAgICAgICA6IFwiaW4gYSBjb21wb25lbnQgcmVuZGVyIGZ1bmN0aW9uLlwiXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgd2F0Y2hlci52bVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGtlZXAgY29waWVzIG9mIHBvc3QgcXVldWVzIGJlZm9yZSByZXNldHRpbmcgc3RhdGVcbiAgICB2YXIgYWN0aXZhdGVkUXVldWUgPSBhY3RpdmF0ZWRDaGlsZHJlbi5zbGljZSgpO1xuICAgIHZhciB1cGRhdGVkUXVldWUgPSBxdWV1ZS5zbGljZSgpO1xuXG4gICAgcmVzZXRTY2hlZHVsZXJTdGF0ZSgpO1xuXG4gICAgLy8gY2FsbCBjb21wb25lbnQgdXBkYXRlZCBhbmQgYWN0aXZhdGVkIGhvb2tzXG4gICAgY2FsbEFjdGl2YXRlZEhvb2tzKGFjdGl2YXRlZFF1ZXVlKTtcbiAgICBjYWxsVXBkYXRlZEhvb2tzKHVwZGF0ZWRRdWV1ZSk7XG5cbiAgICAvLyBkZXZ0b29sIGhvb2tcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoZGV2dG9vbHMgJiYgY29uZmlnLmRldnRvb2xzKSB7XG4gICAgICBkZXZ0b29scy5lbWl0KCdmbHVzaCcpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGxVcGRhdGVkSG9va3MgKHF1ZXVlKSB7XG4gICAgdmFyIGkgPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFyIHdhdGNoZXIgPSBxdWV1ZVtpXTtcbiAgICAgIHZhciB2bSA9IHdhdGNoZXIudm07XG4gICAgICBpZiAodm0uX3dhdGNoZXIgPT09IHdhdGNoZXIgJiYgdm0uX2lzTW91bnRlZCAmJiAhdm0uX2lzRGVzdHJveWVkKSB7XG4gICAgICAgIGNhbGxIb29rKHZtLCAndXBkYXRlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBRdWV1ZSBhIGtlcHQtYWxpdmUgY29tcG9uZW50IHRoYXQgd2FzIGFjdGl2YXRlZCBkdXJpbmcgcGF0Y2guXG4gICAqIFRoZSBxdWV1ZSB3aWxsIGJlIHByb2Nlc3NlZCBhZnRlciB0aGUgZW50aXJlIHRyZWUgaGFzIGJlZW4gcGF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIHF1ZXVlQWN0aXZhdGVkQ29tcG9uZW50ICh2bSkge1xuICAgIC8vIHNldHRpbmcgX2luYWN0aXZlIHRvIGZhbHNlIGhlcmUgc28gdGhhdCBhIHJlbmRlciBmdW5jdGlvbiBjYW5cbiAgICAvLyByZWx5IG9uIGNoZWNraW5nIHdoZXRoZXIgaXQncyBpbiBhbiBpbmFjdGl2ZSB0cmVlIChlLmcuIHJvdXRlci12aWV3KVxuICAgIHZtLl9pbmFjdGl2ZSA9IGZhbHNlO1xuICAgIGFjdGl2YXRlZENoaWxkcmVuLnB1c2godm0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FsbEFjdGl2YXRlZEhvb2tzIChxdWV1ZSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHF1ZXVlW2ldLl9pbmFjdGl2ZSA9IHRydWU7XG4gICAgICBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KHF1ZXVlW2ldLCB0cnVlIC8qIHRydWUgKi8pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQdXNoIGEgd2F0Y2hlciBpbnRvIHRoZSB3YXRjaGVyIHF1ZXVlLlxuICAgKiBKb2JzIHdpdGggZHVwbGljYXRlIElEcyB3aWxsIGJlIHNraXBwZWQgdW5sZXNzIGl0J3NcbiAgICogcHVzaGVkIHdoZW4gdGhlIHF1ZXVlIGlzIGJlaW5nIGZsdXNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBxdWV1ZVdhdGNoZXIgKHdhdGNoZXIpIHtcbiAgICB2YXIgaWQgPSB3YXRjaGVyLmlkO1xuICAgIGlmIChoYXNbaWRdID09IG51bGwpIHtcbiAgICAgIGhhc1tpZF0gPSB0cnVlO1xuICAgICAgaWYgKCFmbHVzaGluZykge1xuICAgICAgICBxdWV1ZS5wdXNoKHdhdGNoZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgYWxyZWFkeSBmbHVzaGluZywgc3BsaWNlIHRoZSB3YXRjaGVyIGJhc2VkIG9uIGl0cyBpZFxuICAgICAgICAvLyBpZiBhbHJlYWR5IHBhc3QgaXRzIGlkLCBpdCB3aWxsIGJlIHJ1biBuZXh0IGltbWVkaWF0ZWx5LlxuICAgICAgICB2YXIgaSA9IHF1ZXVlLmxlbmd0aCAtIDE7XG4gICAgICAgIHdoaWxlIChpID4gaW5kZXggJiYgcXVldWVbaV0uaWQgPiB3YXRjaGVyLmlkKSB7XG4gICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgICAgIHF1ZXVlLnNwbGljZShpICsgMSwgMCwgd2F0Y2hlcik7XG4gICAgICB9XG4gICAgICAvLyBxdWV1ZSB0aGUgZmx1c2hcbiAgICAgIGlmICghd2FpdGluZykge1xuICAgICAgICB3YWl0aW5nID0gdHJ1ZTtcblxuICAgICAgICBpZiAoIWNvbmZpZy5hc3luYykge1xuICAgICAgICAgIGZsdXNoU2NoZWR1bGVyUXVldWUoKTtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBuZXh0VGljayhmbHVzaFNjaGVkdWxlclF1ZXVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiAgKi9cblxuXG5cbiAgdmFyIHVpZCQyID0gMDtcblxuICAvKipcbiAgICogQSB3YXRjaGVyIHBhcnNlcyBhbiBleHByZXNzaW9uLCBjb2xsZWN0cyBkZXBlbmRlbmNpZXMsXG4gICAqIGFuZCBmaXJlcyBjYWxsYmFjayB3aGVuIHRoZSBleHByZXNzaW9uIHZhbHVlIGNoYW5nZXMuXG4gICAqIFRoaXMgaXMgdXNlZCBmb3IgYm90aCB0aGUgJHdhdGNoKCkgYXBpIGFuZCBkaXJlY3RpdmVzLlxuICAgKi9cbiAgdmFyIFdhdGNoZXIgPSBmdW5jdGlvbiBXYXRjaGVyIChcbiAgICB2bSxcbiAgICBleHBPckZuLFxuICAgIGNiLFxuICAgIG9wdGlvbnMsXG4gICAgaXNSZW5kZXJXYXRjaGVyXG4gICkge1xuICAgIHRoaXMudm0gPSB2bTtcbiAgICBpZiAoaXNSZW5kZXJXYXRjaGVyKSB7XG4gICAgICB2bS5fd2F0Y2hlciA9IHRoaXM7XG4gICAgfVxuICAgIHZtLl93YXRjaGVycy5wdXNoKHRoaXMpO1xuICAgIC8vIG9wdGlvbnNcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgdGhpcy5kZWVwID0gISFvcHRpb25zLmRlZXA7XG4gICAgICB0aGlzLnVzZXIgPSAhIW9wdGlvbnMudXNlcjtcbiAgICAgIHRoaXMubGF6eSA9ICEhb3B0aW9ucy5sYXp5O1xuICAgICAgdGhpcy5zeW5jID0gISFvcHRpb25zLnN5bmM7XG4gICAgICB0aGlzLmJlZm9yZSA9IG9wdGlvbnMuYmVmb3JlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlZXAgPSB0aGlzLnVzZXIgPSB0aGlzLmxhenkgPSB0aGlzLnN5bmMgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5jYiA9IGNiO1xuICAgIHRoaXMuaWQgPSArK3VpZCQyOyAvLyB1aWQgZm9yIGJhdGNoaW5nXG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuZGlydHkgPSB0aGlzLmxhenk7IC8vIGZvciBsYXp5IHdhdGNoZXJzXG4gICAgdGhpcy5kZXBzID0gW107XG4gICAgdGhpcy5uZXdEZXBzID0gW107XG4gICAgdGhpcy5kZXBJZHMgPSBuZXcgX1NldCgpO1xuICAgIHRoaXMubmV3RGVwSWRzID0gbmV3IF9TZXQoKTtcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHBPckZuLnRvU3RyaW5nKCk7XG4gICAgLy8gcGFyc2UgZXhwcmVzc2lvbiBmb3IgZ2V0dGVyXG4gICAgaWYgKHR5cGVvZiBleHBPckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLmdldHRlciA9IGV4cE9yRm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ2V0dGVyID0gcGFyc2VQYXRoKGV4cE9yRm4pO1xuICAgICAgaWYgKCF0aGlzLmdldHRlcikge1xuICAgICAgICB0aGlzLmdldHRlciA9IG5vb3A7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgXCJGYWlsZWQgd2F0Y2hpbmcgcGF0aDogXFxcIlwiICsgZXhwT3JGbiArIFwiXFxcIiBcIiArXG4gICAgICAgICAgJ1dhdGNoZXIgb25seSBhY2NlcHRzIHNpbXBsZSBkb3QtZGVsaW1pdGVkIHBhdGhzLiAnICtcbiAgICAgICAgICAnRm9yIGZ1bGwgY29udHJvbCwgdXNlIGEgZnVuY3Rpb24gaW5zdGVhZC4nLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSB0aGlzLmxhenlcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IHRoaXMuZ2V0KCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHRoZSBnZXR0ZXIsIGFuZCByZS1jb2xsZWN0IGRlcGVuZGVuY2llcy5cbiAgICovXG4gIFdhdGNoZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCAoKSB7XG4gICAgcHVzaFRhcmdldCh0aGlzKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFyIHZtID0gdGhpcy52bTtcbiAgICB0cnkge1xuICAgICAgdmFsdWUgPSB0aGlzLmdldHRlci5jYWxsKHZtLCB2bSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKHRoaXMudXNlcikge1xuICAgICAgICBoYW5kbGVFcnJvcihlLCB2bSwgKFwiZ2V0dGVyIGZvciB3YXRjaGVyIFxcXCJcIiArICh0aGlzLmV4cHJlc3Npb24pICsgXCJcXFwiXCIpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGVcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgLy8gXCJ0b3VjaFwiIGV2ZXJ5IHByb3BlcnR5IHNvIHRoZXkgYXJlIGFsbCB0cmFja2VkIGFzXG4gICAgICAvLyBkZXBlbmRlbmNpZXMgZm9yIGRlZXAgd2F0Y2hpbmdcbiAgICAgIGlmICh0aGlzLmRlZXApIHtcbiAgICAgICAgdHJhdmVyc2UodmFsdWUpO1xuICAgICAgfVxuICAgICAgcG9wVGFyZ2V0KCk7XG4gICAgICB0aGlzLmNsZWFudXBEZXBzKCk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgYSBkZXBlbmRlbmN5IHRvIHRoaXMgZGlyZWN0aXZlLlxuICAgKi9cbiAgV2F0Y2hlci5wcm90b3R5cGUuYWRkRGVwID0gZnVuY3Rpb24gYWRkRGVwIChkZXApIHtcbiAgICB2YXIgaWQgPSBkZXAuaWQ7XG4gICAgaWYgKCF0aGlzLm5ld0RlcElkcy5oYXMoaWQpKSB7XG4gICAgICB0aGlzLm5ld0RlcElkcy5hZGQoaWQpO1xuICAgICAgdGhpcy5uZXdEZXBzLnB1c2goZGVwKTtcbiAgICAgIGlmICghdGhpcy5kZXBJZHMuaGFzKGlkKSkge1xuICAgICAgICBkZXAuYWRkU3ViKHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ2xlYW4gdXAgZm9yIGRlcGVuZGVuY3kgY29sbGVjdGlvbi5cbiAgICovXG4gIFdhdGNoZXIucHJvdG90eXBlLmNsZWFudXBEZXBzID0gZnVuY3Rpb24gY2xlYW51cERlcHMgKCkge1xuICAgIHZhciBpID0gdGhpcy5kZXBzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2YXIgZGVwID0gdGhpcy5kZXBzW2ldO1xuICAgICAgaWYgKCF0aGlzLm5ld0RlcElkcy5oYXMoZGVwLmlkKSkge1xuICAgICAgICBkZXAucmVtb3ZlU3ViKHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgdG1wID0gdGhpcy5kZXBJZHM7XG4gICAgdGhpcy5kZXBJZHMgPSB0aGlzLm5ld0RlcElkcztcbiAgICB0aGlzLm5ld0RlcElkcyA9IHRtcDtcbiAgICB0aGlzLm5ld0RlcElkcy5jbGVhcigpO1xuICAgIHRtcCA9IHRoaXMuZGVwcztcbiAgICB0aGlzLmRlcHMgPSB0aGlzLm5ld0RlcHM7XG4gICAgdGhpcy5uZXdEZXBzID0gdG1wO1xuICAgIHRoaXMubmV3RGVwcy5sZW5ndGggPSAwO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmVyIGludGVyZmFjZS5cbiAgICogV2lsbCBiZSBjYWxsZWQgd2hlbiBhIGRlcGVuZGVuY3kgY2hhbmdlcy5cbiAgICovXG4gIFdhdGNoZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAodGhpcy5sYXp5KSB7XG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3luYykge1xuICAgICAgdGhpcy5ydW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcXVldWVXYXRjaGVyKHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogU2NoZWR1bGVyIGpvYiBpbnRlcmZhY2UuXG4gICAqIFdpbGwgYmUgY2FsbGVkIGJ5IHRoZSBzY2hlZHVsZXIuXG4gICAqL1xuICBXYXRjaGVyLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiBydW4gKCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5nZXQoKTtcbiAgICAgIGlmIChcbiAgICAgICAgdmFsdWUgIT09IHRoaXMudmFsdWUgfHxcbiAgICAgICAgLy8gRGVlcCB3YXRjaGVycyBhbmQgd2F0Y2hlcnMgb24gT2JqZWN0L0FycmF5cyBzaG91bGQgZmlyZSBldmVuXG4gICAgICAgIC8vIHdoZW4gdGhlIHZhbHVlIGlzIHRoZSBzYW1lLCBiZWNhdXNlIHRoZSB2YWx1ZSBtYXlcbiAgICAgICAgLy8gaGF2ZSBtdXRhdGVkLlxuICAgICAgICBpc09iamVjdCh2YWx1ZSkgfHxcbiAgICAgICAgdGhpcy5kZWVwXG4gICAgICApIHtcbiAgICAgICAgLy8gc2V0IG5ldyB2YWx1ZVxuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLnVzZXIpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jYi5jYWxsKHRoaXMudm0sIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaGFuZGxlRXJyb3IoZSwgdGhpcy52bSwgKFwiY2FsbGJhY2sgZm9yIHdhdGNoZXIgXFxcIlwiICsgKHRoaXMuZXhwcmVzc2lvbikgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNiLmNhbGwodGhpcy52bSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRXZhbHVhdGUgdGhlIHZhbHVlIG9mIHRoZSB3YXRjaGVyLlxuICAgKiBUaGlzIG9ubHkgZ2V0cyBjYWxsZWQgZm9yIGxhenkgd2F0Y2hlcnMuXG4gICAqL1xuICBXYXRjaGVyLnByb3RvdHlwZS5ldmFsdWF0ZSA9IGZ1bmN0aW9uIGV2YWx1YXRlICgpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5nZXQoKTtcbiAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlcGVuZCBvbiBhbGwgZGVwcyBjb2xsZWN0ZWQgYnkgdGhpcyB3YXRjaGVyLlxuICAgKi9cbiAgV2F0Y2hlci5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gZGVwZW5kICgpIHtcbiAgICB2YXIgaSA9IHRoaXMuZGVwcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdGhpcy5kZXBzW2ldLmRlcGVuZCgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIHNlbGYgZnJvbSBhbGwgZGVwZW5kZW5jaWVzJyBzdWJzY3JpYmVyIGxpc3QuXG4gICAqL1xuICBXYXRjaGVyLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uIHRlYXJkb3duICgpIHtcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgIC8vIHJlbW92ZSBzZWxmIGZyb20gdm0ncyB3YXRjaGVyIGxpc3RcbiAgICAgIC8vIHRoaXMgaXMgYSBzb21ld2hhdCBleHBlbnNpdmUgb3BlcmF0aW9uIHNvIHdlIHNraXAgaXRcbiAgICAgIC8vIGlmIHRoZSB2bSBpcyBiZWluZyBkZXN0cm95ZWQuXG4gICAgICBpZiAoIXRoaXMudm0uX2lzQmVpbmdEZXN0cm95ZWQpIHtcbiAgICAgICAgcmVtb3ZlKHRoaXMudm0uX3dhdGNoZXJzLCB0aGlzKTtcbiAgICAgIH1cbiAgICAgIHZhciBpID0gdGhpcy5kZXBzLmxlbmd0aDtcbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgdGhpcy5kZXBzW2ldLnJlbW92ZVN1Yih0aGlzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIC8qICAqL1xuXG4gIHZhciBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24gPSB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBub29wLFxuICAgIHNldDogbm9vcFxuICB9O1xuXG4gIGZ1bmN0aW9uIHByb3h5ICh0YXJnZXQsIHNvdXJjZUtleSwga2V5KSB7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLmdldCA9IGZ1bmN0aW9uIHByb3h5R2V0dGVyICgpIHtcbiAgICAgIHJldHVybiB0aGlzW3NvdXJjZUtleV1ba2V5XVxuICAgIH07XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IGZ1bmN0aW9uIHByb3h5U2V0dGVyICh2YWwpIHtcbiAgICAgIHRoaXNbc291cmNlS2V5XVtrZXldID0gdmFsO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFN0YXRlICh2bSkge1xuICAgIHZtLl93YXRjaGVycyA9IFtdO1xuICAgIHZhciBvcHRzID0gdm0uJG9wdGlvbnM7XG4gICAgaWYgKG9wdHMucHJvcHMpIHsgaW5pdFByb3BzKHZtLCBvcHRzLnByb3BzKTsgfVxuICAgIGlmIChvcHRzLm1ldGhvZHMpIHsgaW5pdE1ldGhvZHModm0sIG9wdHMubWV0aG9kcyk7IH1cbiAgICBpZiAob3B0cy5kYXRhKSB7XG4gICAgICBpbml0RGF0YSh2bSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ic2VydmUodm0uX2RhdGEgPSB7fSwgdHJ1ZSAvKiBhc1Jvb3REYXRhICovKTtcbiAgICB9XG4gICAgaWYgKG9wdHMuY29tcHV0ZWQpIHsgaW5pdENvbXB1dGVkKHZtLCBvcHRzLmNvbXB1dGVkKTsgfVxuICAgIGlmIChvcHRzLndhdGNoICYmIG9wdHMud2F0Y2ggIT09IG5hdGl2ZVdhdGNoKSB7XG4gICAgICBpbml0V2F0Y2godm0sIG9wdHMud2F0Y2gpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRQcm9wcyAodm0sIHByb3BzT3B0aW9ucykge1xuICAgIHZhciBwcm9wc0RhdGEgPSB2bS4kb3B0aW9ucy5wcm9wc0RhdGEgfHwge307XG4gICAgdmFyIHByb3BzID0gdm0uX3Byb3BzID0ge307XG4gICAgLy8gY2FjaGUgcHJvcCBrZXlzIHNvIHRoYXQgZnV0dXJlIHByb3BzIHVwZGF0ZXMgY2FuIGl0ZXJhdGUgdXNpbmcgQXJyYXlcbiAgICAvLyBpbnN0ZWFkIG9mIGR5bmFtaWMgb2JqZWN0IGtleSBlbnVtZXJhdGlvbi5cbiAgICB2YXIga2V5cyA9IHZtLiRvcHRpb25zLl9wcm9wS2V5cyA9IFtdO1xuICAgIHZhciBpc1Jvb3QgPSAhdm0uJHBhcmVudDtcbiAgICAvLyByb290IGluc3RhbmNlIHByb3BzIHNob3VsZCBiZSBjb252ZXJ0ZWRcbiAgICBpZiAoIWlzUm9vdCkge1xuICAgICAgdG9nZ2xlT2JzZXJ2aW5nKGZhbHNlKTtcbiAgICB9XG4gICAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoIGtleSApIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgdmFyIHZhbHVlID0gdmFsaWRhdGVQcm9wKGtleSwgcHJvcHNPcHRpb25zLCBwcm9wc0RhdGEsIHZtKTtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICB7XG4gICAgICAgIHZhciBoeXBoZW5hdGVkS2V5ID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICAgIGlmIChpc1Jlc2VydmVkQXR0cmlidXRlKGh5cGhlbmF0ZWRLZXkpIHx8XG4gICAgICAgICAgICBjb25maWcuaXNSZXNlcnZlZEF0dHIoaHlwaGVuYXRlZEtleSkpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgKFwiXFxcIlwiICsgaHlwaGVuYXRlZEtleSArIFwiXFxcIiBpcyBhIHJlc2VydmVkIGF0dHJpYnV0ZSBhbmQgY2Fubm90IGJlIHVzZWQgYXMgY29tcG9uZW50IHByb3AuXCIpLFxuICAgICAgICAgICAgdm1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGRlZmluZVJlYWN0aXZlJCQxKHByb3BzLCBrZXksIHZhbHVlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFpc1Jvb3QgJiYgIWlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCkge1xuICAgICAgICAgICAgd2FybihcbiAgICAgICAgICAgICAgXCJBdm9pZCBtdXRhdGluZyBhIHByb3AgZGlyZWN0bHkgc2luY2UgdGhlIHZhbHVlIHdpbGwgYmUgXCIgK1xuICAgICAgICAgICAgICBcIm92ZXJ3cml0dGVuIHdoZW5ldmVyIHRoZSBwYXJlbnQgY29tcG9uZW50IHJlLXJlbmRlcnMuIFwiICtcbiAgICAgICAgICAgICAgXCJJbnN0ZWFkLCB1c2UgYSBkYXRhIG9yIGNvbXB1dGVkIHByb3BlcnR5IGJhc2VkIG9uIHRoZSBwcm9wJ3MgXCIgK1xuICAgICAgICAgICAgICBcInZhbHVlLiBQcm9wIGJlaW5nIG11dGF0ZWQ6IFxcXCJcIiArIGtleSArIFwiXFxcIlwiLFxuICAgICAgICAgICAgICB2bVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLy8gc3RhdGljIHByb3BzIGFyZSBhbHJlYWR5IHByb3hpZWQgb24gdGhlIGNvbXBvbmVudCdzIHByb3RvdHlwZVxuICAgICAgLy8gZHVyaW5nIFZ1ZS5leHRlbmQoKS4gV2Ugb25seSBuZWVkIHRvIHByb3h5IHByb3BzIGRlZmluZWQgYXRcbiAgICAgIC8vIGluc3RhbnRpYXRpb24gaGVyZS5cbiAgICAgIGlmICghKGtleSBpbiB2bSkpIHtcbiAgICAgICAgcHJveHkodm0sIFwiX3Byb3BzXCIsIGtleSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAodmFyIGtleSBpbiBwcm9wc09wdGlvbnMpIGxvb3AoIGtleSApO1xuICAgIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXREYXRhICh2bSkge1xuICAgIHZhciBkYXRhID0gdm0uJG9wdGlvbnMuZGF0YTtcbiAgICBkYXRhID0gdm0uX2RhdGEgPSB0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgPyBnZXREYXRhKGRhdGEsIHZtKVxuICAgICAgOiBkYXRhIHx8IHt9O1xuICAgIGlmICghaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgICAgZGF0YSA9IHt9O1xuICAgICAgd2FybihcbiAgICAgICAgJ2RhdGEgZnVuY3Rpb25zIHNob3VsZCByZXR1cm4gYW4gb2JqZWN0OlxcbicgK1xuICAgICAgICAnaHR0cHM6Ly92dWVqcy5vcmcvdjIvZ3VpZGUvY29tcG9uZW50cy5odG1sI2RhdGEtTXVzdC1CZS1hLUZ1bmN0aW9uJyxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuICAgIC8vIHByb3h5IGRhdGEgb24gaW5zdGFuY2VcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuICAgIHZhciBwcm9wcyA9IHZtLiRvcHRpb25zLnByb3BzO1xuICAgIHZhciBtZXRob2RzID0gdm0uJG9wdGlvbnMubWV0aG9kcztcbiAgICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAge1xuICAgICAgICBpZiAobWV0aG9kcyAmJiBoYXNPd24obWV0aG9kcywga2V5KSkge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICAoXCJNZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZCBhcyBhIGRhdGEgcHJvcGVydHkuXCIpLFxuICAgICAgICAgICAgdm1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHMgJiYgaGFzT3duKHByb3BzLCBrZXkpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgXCJUaGUgZGF0YSBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaXMgYWxyZWFkeSBkZWNsYXJlZCBhcyBhIHByb3AuIFwiICtcbiAgICAgICAgICBcIlVzZSBwcm9wIGRlZmF1bHQgdmFsdWUgaW5zdGVhZC5cIixcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmICghaXNSZXNlcnZlZChrZXkpKSB7XG4gICAgICAgIHByb3h5KHZtLCBcIl9kYXRhXCIsIGtleSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIG9ic2VydmUgZGF0YVxuICAgIG9ic2VydmUoZGF0YSwgdHJ1ZSAvKiBhc1Jvb3REYXRhICovKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERhdGEgKGRhdGEsIHZtKSB7XG4gICAgLy8gIzc1NzMgZGlzYWJsZSBkZXAgY29sbGVjdGlvbiB3aGVuIGludm9raW5nIGRhdGEgZ2V0dGVyc1xuICAgIHB1c2hUYXJnZXQoKTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGRhdGEuY2FsbCh2bSwgdm0pXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaGFuZGxlRXJyb3IoZSwgdm0sIFwiZGF0YSgpXCIpO1xuICAgICAgcmV0dXJuIHt9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHBvcFRhcmdldCgpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb21wdXRlZFdhdGNoZXJPcHRpb25zID0geyBsYXp5OiB0cnVlIH07XG5cbiAgZnVuY3Rpb24gaW5pdENvbXB1dGVkICh2bSwgY29tcHV0ZWQpIHtcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICB2YXIgd2F0Y2hlcnMgPSB2bS5fY29tcHV0ZWRXYXRjaGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgLy8gY29tcHV0ZWQgcHJvcGVydGllcyBhcmUganVzdCBnZXR0ZXJzIGR1cmluZyBTU1JcbiAgICB2YXIgaXNTU1IgPSBpc1NlcnZlclJlbmRlcmluZygpO1xuXG4gICAgZm9yICh2YXIga2V5IGluIGNvbXB1dGVkKSB7XG4gICAgICB2YXIgdXNlckRlZiA9IGNvbXB1dGVkW2tleV07XG4gICAgICB2YXIgZ2V0dGVyID0gdHlwZW9mIHVzZXJEZWYgPT09ICdmdW5jdGlvbicgPyB1c2VyRGVmIDogdXNlckRlZi5nZXQ7XG4gICAgICBpZiAoZ2V0dGVyID09IG51bGwpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAoXCJHZXR0ZXIgaXMgbWlzc2luZyBmb3IgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiLlwiKSxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzU1NSKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBpbnRlcm5hbCB3YXRjaGVyIGZvciB0aGUgY29tcHV0ZWQgcHJvcGVydHkuXG4gICAgICAgIHdhdGNoZXJzW2tleV0gPSBuZXcgV2F0Y2hlcihcbiAgICAgICAgICB2bSxcbiAgICAgICAgICBnZXR0ZXIgfHwgbm9vcCxcbiAgICAgICAgICBub29wLFxuICAgICAgICAgIGNvbXB1dGVkV2F0Y2hlck9wdGlvbnNcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gY29tcG9uZW50LWRlZmluZWQgY29tcHV0ZWQgcHJvcGVydGllcyBhcmUgYWxyZWFkeSBkZWZpbmVkIG9uIHRoZVxuICAgICAgLy8gY29tcG9uZW50IHByb3RvdHlwZS4gV2Ugb25seSBuZWVkIHRvIGRlZmluZSBjb21wdXRlZCBwcm9wZXJ0aWVzIGRlZmluZWRcbiAgICAgIC8vIGF0IGluc3RhbnRpYXRpb24gaGVyZS5cbiAgICAgIGlmICghKGtleSBpbiB2bSkpIHtcbiAgICAgICAgZGVmaW5lQ29tcHV0ZWQodm0sIGtleSwgdXNlckRlZik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoa2V5IGluIHZtLiRkYXRhKSB7XG4gICAgICAgICAgd2FybigoXCJUaGUgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIGFscmVhZHkgZGVmaW5lZCBpbiBkYXRhLlwiKSwgdm0pO1xuICAgICAgICB9IGVsc2UgaWYgKHZtLiRvcHRpb25zLnByb3BzICYmIGtleSBpbiB2bS4kb3B0aW9ucy5wcm9wcykge1xuICAgICAgICAgIHdhcm4oKFwiVGhlIGNvbXB1dGVkIHByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIiBpcyBhbHJlYWR5IGRlZmluZWQgYXMgYSBwcm9wLlwiKSwgdm0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVmaW5lQ29tcHV0ZWQgKFxuICAgIHRhcmdldCxcbiAgICBrZXksXG4gICAgdXNlckRlZlxuICApIHtcbiAgICB2YXIgc2hvdWxkQ2FjaGUgPSAhaXNTZXJ2ZXJSZW5kZXJpbmcoKTtcbiAgICBpZiAodHlwZW9mIHVzZXJEZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5nZXQgPSBzaG91bGRDYWNoZVxuICAgICAgICA/IGNyZWF0ZUNvbXB1dGVkR2V0dGVyKGtleSlcbiAgICAgICAgOiBjcmVhdGVHZXR0ZXJJbnZva2VyKHVzZXJEZWYpO1xuICAgICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IG5vb3A7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5nZXQgPSB1c2VyRGVmLmdldFxuICAgICAgICA/IHNob3VsZENhY2hlICYmIHVzZXJEZWYuY2FjaGUgIT09IGZhbHNlXG4gICAgICAgICAgPyBjcmVhdGVDb21wdXRlZEdldHRlcihrZXkpXG4gICAgICAgICAgOiBjcmVhdGVHZXR0ZXJJbnZva2VyKHVzZXJEZWYuZ2V0KVxuICAgICAgICA6IG5vb3A7XG4gICAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gdXNlckRlZi5zZXQgfHwgbm9vcDtcbiAgICB9XG4gICAgaWYgKHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPT09IG5vb3ApIHtcbiAgICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgKFwiQ29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIHdhcyBhc3NpZ25lZCB0byBidXQgaXQgaGFzIG5vIHNldHRlci5cIiksXG4gICAgICAgICAgdGhpc1xuICAgICAgICApO1xuICAgICAgfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZWRHZXR0ZXIgKGtleSkge1xuICAgIHJldHVybiBmdW5jdGlvbiBjb21wdXRlZEdldHRlciAoKSB7XG4gICAgICB2YXIgd2F0Y2hlciA9IHRoaXMuX2NvbXB1dGVkV2F0Y2hlcnMgJiYgdGhpcy5fY29tcHV0ZWRXYXRjaGVyc1trZXldO1xuICAgICAgaWYgKHdhdGNoZXIpIHtcbiAgICAgICAgaWYgKHdhdGNoZXIuZGlydHkpIHtcbiAgICAgICAgICB3YXRjaGVyLmV2YWx1YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKERlcC50YXJnZXQpIHtcbiAgICAgICAgICB3YXRjaGVyLmRlcGVuZCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3YXRjaGVyLnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlR2V0dGVySW52b2tlcihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiBjb21wdXRlZEdldHRlciAoKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCB0aGlzKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRNZXRob2RzICh2bSwgbWV0aG9kcykge1xuICAgIHZhciBwcm9wcyA9IHZtLiRvcHRpb25zLnByb3BzO1xuICAgIGZvciAodmFyIGtleSBpbiBtZXRob2RzKSB7XG4gICAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgbWV0aG9kc1trZXldICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBoYXMgdHlwZSBcXFwiXCIgKyAodHlwZW9mIG1ldGhvZHNba2V5XSkgKyBcIlxcXCIgaW4gdGhlIGNvbXBvbmVudCBkZWZpbml0aW9uLiBcIiArXG4gICAgICAgICAgICBcIkRpZCB5b3UgcmVmZXJlbmNlIHRoZSBmdW5jdGlvbiBjb3JyZWN0bHk/XCIsXG4gICAgICAgICAgICB2bVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzICYmIGhhc093bihwcm9wcywga2V5KSkge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICAoXCJNZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZCBhcyBhIHByb3AuXCIpLFxuICAgICAgICAgICAgdm1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoa2V5IGluIHZtKSAmJiBpc1Jlc2VydmVkKGtleSkpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgXCJNZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGNvbmZsaWN0cyB3aXRoIGFuIGV4aXN0aW5nIFZ1ZSBpbnN0YW5jZSBtZXRob2QuIFwiICtcbiAgICAgICAgICAgIFwiQXZvaWQgZGVmaW5pbmcgY29tcG9uZW50IG1ldGhvZHMgdGhhdCBzdGFydCB3aXRoIF8gb3IgJC5cIlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZtW2tleV0gPSB0eXBlb2YgbWV0aG9kc1trZXldICE9PSAnZnVuY3Rpb24nID8gbm9vcCA6IGJpbmQobWV0aG9kc1trZXldLCB2bSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFdhdGNoICh2bSwgd2F0Y2gpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gd2F0Y2gpIHtcbiAgICAgIHZhciBoYW5kbGVyID0gd2F0Y2hba2V5XTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGhhbmRsZXIpKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGFuZGxlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNyZWF0ZVdhdGNoZXIodm0sIGtleSwgaGFuZGxlcltpXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNyZWF0ZVdhdGNoZXIodm0sIGtleSwgaGFuZGxlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlV2F0Y2hlciAoXG4gICAgdm0sXG4gICAgZXhwT3JGbixcbiAgICBoYW5kbGVyLFxuICAgIG9wdGlvbnNcbiAgKSB7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QoaGFuZGxlcikpIHtcbiAgICAgIG9wdGlvbnMgPSBoYW5kbGVyO1xuICAgICAgaGFuZGxlciA9IGhhbmRsZXIuaGFuZGxlcjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnc3RyaW5nJykge1xuICAgICAgaGFuZGxlciA9IHZtW2hhbmRsZXJdO1xuICAgIH1cbiAgICByZXR1cm4gdm0uJHdhdGNoKGV4cE9yRm4sIGhhbmRsZXIsIG9wdGlvbnMpXG4gIH1cblxuICBmdW5jdGlvbiBzdGF0ZU1peGluIChWdWUpIHtcbiAgICAvLyBmbG93IHNvbWVob3cgaGFzIHByb2JsZW1zIHdpdGggZGlyZWN0bHkgZGVjbGFyZWQgZGVmaW5pdGlvbiBvYmplY3RcbiAgICAvLyB3aGVuIHVzaW5nIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSwgc28gd2UgaGF2ZSB0byBwcm9jZWR1cmFsbHkgYnVpbGQgdXBcbiAgICAvLyB0aGUgb2JqZWN0IGhlcmUuXG4gICAgdmFyIGRhdGFEZWYgPSB7fTtcbiAgICBkYXRhRGVmLmdldCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2RhdGEgfTtcbiAgICB2YXIgcHJvcHNEZWYgPSB7fTtcbiAgICBwcm9wc0RlZi5nZXQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9wcm9wcyB9O1xuICAgIHtcbiAgICAgIGRhdGFEZWYuc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdBdm9pZCByZXBsYWNpbmcgaW5zdGFuY2Ugcm9vdCAkZGF0YS4gJyArXG4gICAgICAgICAgJ1VzZSBuZXN0ZWQgZGF0YSBwcm9wZXJ0aWVzIGluc3RlYWQuJyxcbiAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG4gICAgICB9O1xuICAgICAgcHJvcHNEZWYuc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKFwiJHByb3BzIGlzIHJlYWRvbmx5LlwiLCB0aGlzKTtcbiAgICAgIH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJGRhdGEnLCBkYXRhRGVmKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRwcm9wcycsIHByb3BzRGVmKTtcblxuICAgIFZ1ZS5wcm90b3R5cGUuJHNldCA9IHNldDtcbiAgICBWdWUucHJvdG90eXBlLiRkZWxldGUgPSBkZWw7XG5cbiAgICBWdWUucHJvdG90eXBlLiR3YXRjaCA9IGZ1bmN0aW9uIChcbiAgICAgIGV4cE9yRm4sXG4gICAgICBjYixcbiAgICAgIG9wdGlvbnNcbiAgICApIHtcbiAgICAgIHZhciB2bSA9IHRoaXM7XG4gICAgICBpZiAoaXNQbGFpbk9iamVjdChjYikpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVdhdGNoZXIodm0sIGV4cE9yRm4sIGNiLCBvcHRpb25zKVxuICAgICAgfVxuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICBvcHRpb25zLnVzZXIgPSB0cnVlO1xuICAgICAgdmFyIHdhdGNoZXIgPSBuZXcgV2F0Y2hlcih2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpO1xuICAgICAgaWYgKG9wdGlvbnMuaW1tZWRpYXRlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY2IuY2FsbCh2bSwgd2F0Y2hlci52YWx1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgaGFuZGxlRXJyb3IoZXJyb3IsIHZtLCAoXCJjYWxsYmFjayBmb3IgaW1tZWRpYXRlIHdhdGNoZXIgXFxcIlwiICsgKHdhdGNoZXIuZXhwcmVzc2lvbikgKyBcIlxcXCJcIikpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gdW53YXRjaEZuICgpIHtcbiAgICAgICAgd2F0Y2hlci50ZWFyZG93bigpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKiAgKi9cblxuICB2YXIgdWlkJDMgPSAwO1xuXG4gIGZ1bmN0aW9uIGluaXRNaXhpbiAoVnVlKSB7XG4gICAgVnVlLnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgLy8gYSB1aWRcbiAgICAgIHZtLl91aWQgPSB1aWQkMysrO1xuXG4gICAgICB2YXIgc3RhcnRUYWcsIGVuZFRhZztcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKGNvbmZpZy5wZXJmb3JtYW5jZSAmJiBtYXJrKSB7XG4gICAgICAgIHN0YXJ0VGFnID0gXCJ2dWUtcGVyZi1zdGFydDpcIiArICh2bS5fdWlkKTtcbiAgICAgICAgZW5kVGFnID0gXCJ2dWUtcGVyZi1lbmQ6XCIgKyAodm0uX3VpZCk7XG4gICAgICAgIG1hcmsoc3RhcnRUYWcpO1xuICAgICAgfVxuXG4gICAgICAvLyBhIGZsYWcgdG8gYXZvaWQgdGhpcyBiZWluZyBvYnNlcnZlZFxuICAgICAgdm0uX2lzVnVlID0gdHJ1ZTtcbiAgICAgIC8vIG1lcmdlIG9wdGlvbnNcbiAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuX2lzQ29tcG9uZW50KSB7XG4gICAgICAgIC8vIG9wdGltaXplIGludGVybmFsIGNvbXBvbmVudCBpbnN0YW50aWF0aW9uXG4gICAgICAgIC8vIHNpbmNlIGR5bmFtaWMgb3B0aW9ucyBtZXJnaW5nIGlzIHByZXR0eSBzbG93LCBhbmQgbm9uZSBvZiB0aGVcbiAgICAgICAgLy8gaW50ZXJuYWwgY29tcG9uZW50IG9wdGlvbnMgbmVlZHMgc3BlY2lhbCB0cmVhdG1lbnQuXG4gICAgICAgIGluaXRJbnRlcm5hbENvbXBvbmVudCh2bSwgb3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2bS4kb3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhcbiAgICAgICAgICByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKHZtLmNvbnN0cnVjdG9yKSxcbiAgICAgICAgICBvcHRpb25zIHx8IHt9LFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAge1xuICAgICAgICBpbml0UHJveHkodm0pO1xuICAgICAgfVxuICAgICAgLy8gZXhwb3NlIHJlYWwgc2VsZlxuICAgICAgdm0uX3NlbGYgPSB2bTtcbiAgICAgIGluaXRMaWZlY3ljbGUodm0pO1xuICAgICAgaW5pdEV2ZW50cyh2bSk7XG4gICAgICBpbml0UmVuZGVyKHZtKTtcbiAgICAgIGNhbGxIb29rKHZtLCAnYmVmb3JlQ3JlYXRlJyk7XG4gICAgICBpbml0SW5qZWN0aW9ucyh2bSk7IC8vIHJlc29sdmUgaW5qZWN0aW9ucyBiZWZvcmUgZGF0YS9wcm9wc1xuICAgICAgaW5pdFN0YXRlKHZtKTtcbiAgICAgIGluaXRQcm92aWRlKHZtKTsgLy8gcmVzb2x2ZSBwcm92aWRlIGFmdGVyIGRhdGEvcHJvcHNcbiAgICAgIGNhbGxIb29rKHZtLCAnY3JlYXRlZCcpO1xuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmIChjb25maWcucGVyZm9ybWFuY2UgJiYgbWFyaykge1xuICAgICAgICB2bS5fbmFtZSA9IGZvcm1hdENvbXBvbmVudE5hbWUodm0sIGZhbHNlKTtcbiAgICAgICAgbWFyayhlbmRUYWcpO1xuICAgICAgICBtZWFzdXJlKChcInZ1ZSBcIiArICh2bS5fbmFtZSkgKyBcIiBpbml0XCIpLCBzdGFydFRhZywgZW5kVGFnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZtLiRvcHRpb25zLmVsKSB7XG4gICAgICAgIHZtLiRtb3VudCh2bS4kb3B0aW9ucy5lbCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRJbnRlcm5hbENvbXBvbmVudCAodm0sIG9wdGlvbnMpIHtcbiAgICB2YXIgb3B0cyA9IHZtLiRvcHRpb25zID0gT2JqZWN0LmNyZWF0ZSh2bS5jb25zdHJ1Y3Rvci5vcHRpb25zKTtcbiAgICAvLyBkb2luZyB0aGlzIGJlY2F1c2UgaXQncyBmYXN0ZXIgdGhhbiBkeW5hbWljIGVudW1lcmF0aW9uLlxuICAgIHZhciBwYXJlbnRWbm9kZSA9IG9wdGlvbnMuX3BhcmVudFZub2RlO1xuICAgIG9wdHMucGFyZW50ID0gb3B0aW9ucy5wYXJlbnQ7XG4gICAgb3B0cy5fcGFyZW50Vm5vZGUgPSBwYXJlbnRWbm9kZTtcblxuICAgIHZhciB2bm9kZUNvbXBvbmVudE9wdGlvbnMgPSBwYXJlbnRWbm9kZS5jb21wb25lbnRPcHRpb25zO1xuICAgIG9wdHMucHJvcHNEYXRhID0gdm5vZGVDb21wb25lbnRPcHRpb25zLnByb3BzRGF0YTtcbiAgICBvcHRzLl9wYXJlbnRMaXN0ZW5lcnMgPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMubGlzdGVuZXJzO1xuICAgIG9wdHMuX3JlbmRlckNoaWxkcmVuID0gdm5vZGVDb21wb25lbnRPcHRpb25zLmNoaWxkcmVuO1xuICAgIG9wdHMuX2NvbXBvbmVudFRhZyA9IHZub2RlQ29tcG9uZW50T3B0aW9ucy50YWc7XG5cbiAgICBpZiAob3B0aW9ucy5yZW5kZXIpIHtcbiAgICAgIG9wdHMucmVuZGVyID0gb3B0aW9ucy5yZW5kZXI7XG4gICAgICBvcHRzLnN0YXRpY1JlbmRlckZucyA9IG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnMgKEN0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucztcbiAgICBpZiAoQ3Rvci5zdXBlcikge1xuICAgICAgdmFyIHN1cGVyT3B0aW9ucyA9IHJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnMoQ3Rvci5zdXBlcik7XG4gICAgICB2YXIgY2FjaGVkU3VwZXJPcHRpb25zID0gQ3Rvci5zdXBlck9wdGlvbnM7XG4gICAgICBpZiAoc3VwZXJPcHRpb25zICE9PSBjYWNoZWRTdXBlck9wdGlvbnMpIHtcbiAgICAgICAgLy8gc3VwZXIgb3B0aW9uIGNoYW5nZWQsXG4gICAgICAgIC8vIG5lZWQgdG8gcmVzb2x2ZSBuZXcgb3B0aW9ucy5cbiAgICAgICAgQ3Rvci5zdXBlck9wdGlvbnMgPSBzdXBlck9wdGlvbnM7XG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBhbnkgbGF0ZS1tb2RpZmllZC9hdHRhY2hlZCBvcHRpb25zICgjNDk3NilcbiAgICAgICAgdmFyIG1vZGlmaWVkT3B0aW9ucyA9IHJlc29sdmVNb2RpZmllZE9wdGlvbnMoQ3Rvcik7XG4gICAgICAgIC8vIHVwZGF0ZSBiYXNlIGV4dGVuZCBvcHRpb25zXG4gICAgICAgIGlmIChtb2RpZmllZE9wdGlvbnMpIHtcbiAgICAgICAgICBleHRlbmQoQ3Rvci5leHRlbmRPcHRpb25zLCBtb2RpZmllZE9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoc3VwZXJPcHRpb25zLCBDdG9yLmV4dGVuZE9wdGlvbnMpO1xuICAgICAgICBpZiAob3B0aW9ucy5uYW1lKSB7XG4gICAgICAgICAgb3B0aW9ucy5jb21wb25lbnRzW29wdGlvbnMubmFtZV0gPSBDdG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zXG4gIH1cblxuICBmdW5jdGlvbiByZXNvbHZlTW9kaWZpZWRPcHRpb25zIChDdG9yKSB7XG4gICAgdmFyIG1vZGlmaWVkO1xuICAgIHZhciBsYXRlc3QgPSBDdG9yLm9wdGlvbnM7XG4gICAgdmFyIHNlYWxlZCA9IEN0b3Iuc2VhbGVkT3B0aW9ucztcbiAgICBmb3IgKHZhciBrZXkgaW4gbGF0ZXN0KSB7XG4gICAgICBpZiAobGF0ZXN0W2tleV0gIT09IHNlYWxlZFtrZXldKSB7XG4gICAgICAgIGlmICghbW9kaWZpZWQpIHsgbW9kaWZpZWQgPSB7fTsgfVxuICAgICAgICBtb2RpZmllZFtrZXldID0gbGF0ZXN0W2tleV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtb2RpZmllZFxuICB9XG5cbiAgZnVuY3Rpb24gVnVlIChvcHRpb25zKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZ1ZSlcbiAgICApIHtcbiAgICAgIHdhcm4oJ1Z1ZSBpcyBhIGNvbnN0cnVjdG9yIGFuZCBzaG91bGQgYmUgY2FsbGVkIHdpdGggdGhlIGBuZXdgIGtleXdvcmQnKTtcbiAgICB9XG4gICAgdGhpcy5faW5pdChvcHRpb25zKTtcbiAgfVxuXG4gIGluaXRNaXhpbihWdWUpO1xuICBzdGF0ZU1peGluKFZ1ZSk7XG4gIGV2ZW50c01peGluKFZ1ZSk7XG4gIGxpZmVjeWNsZU1peGluKFZ1ZSk7XG4gIHJlbmRlck1peGluKFZ1ZSk7XG5cbiAgLyogICovXG5cbiAgZnVuY3Rpb24gaW5pdFVzZSAoVnVlKSB7XG4gICAgVnVlLnVzZSA9IGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgIHZhciBpbnN0YWxsZWRQbHVnaW5zID0gKHRoaXMuX2luc3RhbGxlZFBsdWdpbnMgfHwgKHRoaXMuX2luc3RhbGxlZFBsdWdpbnMgPSBbXSkpO1xuICAgICAgaWYgKGluc3RhbGxlZFBsdWdpbnMuaW5kZXhPZihwbHVnaW4pID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgIH1cblxuICAgICAgLy8gYWRkaXRpb25hbCBwYXJhbWV0ZXJzXG4gICAgICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzLCAxKTtcbiAgICAgIGFyZ3MudW5zaGlmdCh0aGlzKTtcbiAgICAgIGlmICh0eXBlb2YgcGx1Z2luLmluc3RhbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcGx1Z2luLmluc3RhbGwuYXBwbHkocGx1Z2luLCBhcmdzKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBsdWdpbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwbHVnaW4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICB9XG4gICAgICBpbnN0YWxsZWRQbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfTtcbiAgfVxuXG4gIC8qICAqL1xuXG4gIGZ1bmN0aW9uIGluaXRNaXhpbiQxIChWdWUpIHtcbiAgICBWdWUubWl4aW4gPSBmdW5jdGlvbiAobWl4aW4pIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyh0aGlzLm9wdGlvbnMsIG1peGluKTtcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfTtcbiAgfVxuXG4gIC8qICAqL1xuXG4gIGZ1bmN0aW9uIGluaXRFeHRlbmQgKFZ1ZSkge1xuICAgIC8qKlxuICAgICAqIEVhY2ggaW5zdGFuY2UgY29uc3RydWN0b3IsIGluY2x1ZGluZyBWdWUsIGhhcyBhIHVuaXF1ZVxuICAgICAqIGNpZC4gVGhpcyBlbmFibGVzIHVzIHRvIGNyZWF0ZSB3cmFwcGVkIFwiY2hpbGRcbiAgICAgKiBjb25zdHJ1Y3RvcnNcIiBmb3IgcHJvdG90eXBhbCBpbmhlcml0YW5jZSBhbmQgY2FjaGUgdGhlbS5cbiAgICAgKi9cbiAgICBWdWUuY2lkID0gMDtcbiAgICB2YXIgY2lkID0gMTtcblxuICAgIC8qKlxuICAgICAqIENsYXNzIGluaGVyaXRhbmNlXG4gICAgICovXG4gICAgVnVlLmV4dGVuZCA9IGZ1bmN0aW9uIChleHRlbmRPcHRpb25zKSB7XG4gICAgICBleHRlbmRPcHRpb25zID0gZXh0ZW5kT3B0aW9ucyB8fCB7fTtcbiAgICAgIHZhciBTdXBlciA9IHRoaXM7XG4gICAgICB2YXIgU3VwZXJJZCA9IFN1cGVyLmNpZDtcbiAgICAgIHZhciBjYWNoZWRDdG9ycyA9IGV4dGVuZE9wdGlvbnMuX0N0b3IgfHwgKGV4dGVuZE9wdGlvbnMuX0N0b3IgPSB7fSk7XG4gICAgICBpZiAoY2FjaGVkQ3RvcnNbU3VwZXJJZF0pIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZEN0b3JzW1N1cGVySWRdXG4gICAgICB9XG5cbiAgICAgIHZhciBuYW1lID0gZXh0ZW5kT3B0aW9ucy5uYW1lIHx8IFN1cGVyLm9wdGlvbnMubmFtZTtcbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHZhbGlkYXRlQ29tcG9uZW50TmFtZShuYW1lKTtcbiAgICAgIH1cblxuICAgICAgdmFyIFN1YiA9IGZ1bmN0aW9uIFZ1ZUNvbXBvbmVudCAob3B0aW9ucykge1xuICAgICAgICB0aGlzLl9pbml0KG9wdGlvbnMpO1xuICAgICAgfTtcbiAgICAgIFN1Yi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFN1cGVyLnByb3RvdHlwZSk7XG4gICAgICBTdWIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3ViO1xuICAgICAgU3ViLmNpZCA9IGNpZCsrO1xuICAgICAgU3ViLm9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoXG4gICAgICAgIFN1cGVyLm9wdGlvbnMsXG4gICAgICAgIGV4dGVuZE9wdGlvbnNcbiAgICAgICk7XG4gICAgICBTdWJbJ3N1cGVyJ10gPSBTdXBlcjtcblxuICAgICAgLy8gRm9yIHByb3BzIGFuZCBjb21wdXRlZCBwcm9wZXJ0aWVzLCB3ZSBkZWZpbmUgdGhlIHByb3h5IGdldHRlcnMgb25cbiAgICAgIC8vIHRoZSBWdWUgaW5zdGFuY2VzIGF0IGV4dGVuc2lvbiB0aW1lLCBvbiB0aGUgZXh0ZW5kZWQgcHJvdG90eXBlLiBUaGlzXG4gICAgICAvLyBhdm9pZHMgT2JqZWN0LmRlZmluZVByb3BlcnR5IGNhbGxzIGZvciBlYWNoIGluc3RhbmNlIGNyZWF0ZWQuXG4gICAgICBpZiAoU3ViLm9wdGlvbnMucHJvcHMpIHtcbiAgICAgICAgaW5pdFByb3BzJDEoU3ViKTtcbiAgICAgIH1cbiAgICAgIGlmIChTdWIub3B0aW9ucy5jb21wdXRlZCkge1xuICAgICAgICBpbml0Q29tcHV0ZWQkMShTdWIpO1xuICAgICAgfVxuXG4gICAgICAvLyBhbGxvdyBmdXJ0aGVyIGV4dGVuc2lvbi9taXhpbi9wbHVnaW4gdXNhZ2VcbiAgICAgIFN1Yi5leHRlbmQgPSBTdXBlci5leHRlbmQ7XG4gICAgICBTdWIubWl4aW4gPSBTdXBlci5taXhpbjtcbiAgICAgIFN1Yi51c2UgPSBTdXBlci51c2U7XG5cbiAgICAgIC8vIGNyZWF0ZSBhc3NldCByZWdpc3RlcnMsIHNvIGV4dGVuZGVkIGNsYXNzZXNcbiAgICAgIC8vIGNhbiBoYXZlIHRoZWlyIHByaXZhdGUgYXNzZXRzIHRvby5cbiAgICAgIEFTU0VUX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgU3ViW3R5cGVdID0gU3VwZXJbdHlwZV07XG4gICAgICB9KTtcbiAgICAgIC8vIGVuYWJsZSByZWN1cnNpdmUgc2VsZi1sb29rdXBcbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIFN1Yi5vcHRpb25zLmNvbXBvbmVudHNbbmFtZV0gPSBTdWI7XG4gICAgICB9XG5cbiAgICAgIC8vIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIHN1cGVyIG9wdGlvbnMgYXQgZXh0ZW5zaW9uIHRpbWUuXG4gICAgICAvLyBsYXRlciBhdCBpbnN0YW50aWF0aW9uIHdlIGNhbiBjaGVjayBpZiBTdXBlcidzIG9wdGlvbnMgaGF2ZVxuICAgICAgLy8gYmVlbiB1cGRhdGVkLlxuICAgICAgU3ViLnN1cGVyT3B0aW9ucyA9IFN1cGVyLm9wdGlvbnM7XG4gICAgICBTdWIuZXh0ZW5kT3B0aW9ucyA9IGV4dGVuZE9wdGlvbnM7XG4gICAgICBTdWIuc2VhbGVkT3B0aW9ucyA9IGV4dGVuZCh7fSwgU3ViLm9wdGlvbnMpO1xuXG4gICAgICAvLyBjYWNoZSBjb25zdHJ1Y3RvclxuICAgICAgY2FjaGVkQ3RvcnNbU3VwZXJJZF0gPSBTdWI7XG4gICAgICByZXR1cm4gU3ViXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRQcm9wcyQxIChDb21wKSB7XG4gICAgdmFyIHByb3BzID0gQ29tcC5vcHRpb25zLnByb3BzO1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgcHJveHkoQ29tcC5wcm90b3R5cGUsIFwiX3Byb3BzXCIsIGtleSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdENvbXB1dGVkJDEgKENvbXApIHtcbiAgICB2YXIgY29tcHV0ZWQgPSBDb21wLm9wdGlvbnMuY29tcHV0ZWQ7XG4gICAgZm9yICh2YXIga2V5IGluIGNvbXB1dGVkKSB7XG4gICAgICBkZWZpbmVDb21wdXRlZChDb21wLnByb3RvdHlwZSwga2V5LCBjb21wdXRlZFtrZXldKTtcbiAgICB9XG4gIH1cblxuICAvKiAgKi9cblxuICBmdW5jdGlvbiBpbml0QXNzZXRSZWdpc3RlcnMgKFZ1ZSkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhc3NldCByZWdpc3RyYXRpb24gbWV0aG9kcy5cbiAgICAgKi9cbiAgICBBU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICBWdWVbdHlwZV0gPSBmdW5jdGlvbiAoXG4gICAgICAgIGlkLFxuICAgICAgICBkZWZpbml0aW9uXG4gICAgICApIHtcbiAgICAgICAgaWYgKCFkZWZpbml0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc1t0eXBlICsgJ3MnXVtpZF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ2NvbXBvbmVudCcpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlQ29tcG9uZW50TmFtZShpZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlID09PSAnY29tcG9uZW50JyAmJiBpc1BsYWluT2JqZWN0KGRlZmluaXRpb24pKSB7XG4gICAgICAgICAgICBkZWZpbml0aW9uLm5hbWUgPSBkZWZpbml0aW9uLm5hbWUgfHwgaWQ7XG4gICAgICAgICAgICBkZWZpbml0aW9uID0gdGhpcy5vcHRpb25zLl9iYXNlLmV4dGVuZChkZWZpbml0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGUgPT09ICdkaXJlY3RpdmUnICYmIHR5cGVvZiBkZWZpbml0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBkZWZpbml0aW9uID0geyBiaW5kOiBkZWZpbml0aW9uLCB1cGRhdGU6IGRlZmluaXRpb24gfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5vcHRpb25zW3R5cGUgKyAncyddW2lkXSA9IGRlZmluaXRpb247XG4gICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qICAqL1xuXG5cblxuICBmdW5jdGlvbiBnZXRDb21wb25lbnROYW1lIChvcHRzKSB7XG4gICAgcmV0dXJuIG9wdHMgJiYgKG9wdHMuQ3Rvci5vcHRpb25zLm5hbWUgfHwgb3B0cy50YWcpXG4gIH1cblxuICBmdW5jdGlvbiBtYXRjaGVzIChwYXR0ZXJuLCBuYW1lKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0dGVybikpIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLmluZGV4T2YobmFtZSkgPiAtMVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhdHRlcm4gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi5zcGxpdCgnLCcpLmluZGV4T2YobmFtZSkgPiAtMVxuICAgIH0gZWxzZSBpZiAoaXNSZWdFeHAocGF0dGVybikpIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobmFtZSlcbiAgICB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHBydW5lQ2FjaGUgKGtlZXBBbGl2ZUluc3RhbmNlLCBmaWx0ZXIpIHtcbiAgICB2YXIgY2FjaGUgPSBrZWVwQWxpdmVJbnN0YW5jZS5jYWNoZTtcbiAgICB2YXIga2V5cyA9IGtlZXBBbGl2ZUluc3RhbmNlLmtleXM7XG4gICAgdmFyIF92bm9kZSA9IGtlZXBBbGl2ZUluc3RhbmNlLl92bm9kZTtcbiAgICBmb3IgKHZhciBrZXkgaW4gY2FjaGUpIHtcbiAgICAgIHZhciBjYWNoZWROb2RlID0gY2FjaGVba2V5XTtcbiAgICAgIGlmIChjYWNoZWROb2RlKSB7XG4gICAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShjYWNoZWROb2RlLmNvbXBvbmVudE9wdGlvbnMpO1xuICAgICAgICBpZiAobmFtZSAmJiAhZmlsdGVyKG5hbWUpKSB7XG4gICAgICAgICAgcHJ1bmVDYWNoZUVudHJ5KGNhY2hlLCBrZXksIGtleXMsIF92bm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcnVuZUNhY2hlRW50cnkgKFxuICAgIGNhY2hlLFxuICAgIGtleSxcbiAgICBrZXlzLFxuICAgIGN1cnJlbnRcbiAgKSB7XG4gICAgdmFyIGNhY2hlZCQkMSA9IGNhY2hlW2tleV07XG4gICAgaWYgKGNhY2hlZCQkMSAmJiAoIWN1cnJlbnQgfHwgY2FjaGVkJCQxLnRhZyAhPT0gY3VycmVudC50YWcpKSB7XG4gICAgICBjYWNoZWQkJDEuY29tcG9uZW50SW5zdGFuY2UuJGRlc3Ryb3koKTtcbiAgICB9XG4gICAgY2FjaGVba2V5XSA9IG51bGw7XG4gICAgcmVtb3ZlKGtleXMsIGtleSk7XG4gIH1cblxuICB2YXIgcGF0dGVyblR5cGVzID0gW1N0cmluZywgUmVnRXhwLCBBcnJheV07XG5cbiAgdmFyIEtlZXBBbGl2ZSA9IHtcbiAgICBuYW1lOiAna2VlcC1hbGl2ZScsXG4gICAgYWJzdHJhY3Q6IHRydWUsXG5cbiAgICBwcm9wczoge1xuICAgICAgaW5jbHVkZTogcGF0dGVyblR5cGVzLFxuICAgICAgZXhjbHVkZTogcGF0dGVyblR5cGVzLFxuICAgICAgbWF4OiBbU3RyaW5nLCBOdW1iZXJdXG4gICAgfSxcblxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uIGNyZWF0ZWQgKCkge1xuICAgICAgdGhpcy5jYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICB0aGlzLmtleXMgPSBbXTtcbiAgICB9LFxuXG4gICAgZGVzdHJveWVkOiBmdW5jdGlvbiBkZXN0cm95ZWQgKCkge1xuICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuY2FjaGUpIHtcbiAgICAgICAgcHJ1bmVDYWNoZUVudHJ5KHRoaXMuY2FjaGUsIGtleSwgdGhpcy5rZXlzKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCAoKSB7XG4gICAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgICAgdGhpcy4kd2F0Y2goJ2luY2x1ZGUnLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHBydW5lQ2FjaGUodGhpcyQxLCBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gbWF0Y2hlcyh2YWwsIG5hbWUpOyB9KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy4kd2F0Y2goJ2V4Y2x1ZGUnLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHBydW5lQ2FjaGUodGhpcyQxLCBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gIW1hdGNoZXModmFsLCBuYW1lKTsgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIgKCkge1xuICAgICAgdmFyIHNsb3QgPSB0aGlzLiRzbG90cy5kZWZhdWx0O1xuICAgICAgdmFyIHZub2RlID0gZ2V0Rmlyc3RDb21wb25lbnRDaGlsZChzbG90KTtcbiAgICAgIHZhciBjb21wb25lbnRPcHRpb25zID0gdm5vZGUgJiYgdm5vZGUuY29tcG9uZW50T3B0aW9ucztcbiAgICAgIGlmIChjb21wb25lbnRPcHRpb25zKSB7XG4gICAgICAgIC8vIGNoZWNrIHBhdHRlcm5cbiAgICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGNvbXBvbmVudE9wdGlvbnMpO1xuICAgICAgICB2YXIgcmVmID0gdGhpcztcbiAgICAgICAgdmFyIGluY2x1ZGUgPSByZWYuaW5jbHVkZTtcbiAgICAgICAgdmFyIGV4Y2x1ZGUgPSByZWYuZXhjbHVkZTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIC8vIG5vdCBpbmNsdWRlZFxuICAgICAgICAgIChpbmNsdWRlICYmICghbmFtZSB8fCAhbWF0Y2hlcyhpbmNsdWRlLCBuYW1lKSkpIHx8XG4gICAgICAgICAgLy8gZXhjbHVkZWRcbiAgICAgICAgICAoZXhjbHVkZSAmJiBuYW1lICYmIG1hdGNoZXMoZXhjbHVkZSwgbmFtZSkpXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB2bm9kZVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlZiQxID0gdGhpcztcbiAgICAgICAgdmFyIGNhY2hlID0gcmVmJDEuY2FjaGU7XG4gICAgICAgIHZhciBrZXlzID0gcmVmJDEua2V5cztcbiAgICAgICAgdmFyIGtleSA9IHZub2RlLmtleSA9PSBudWxsXG4gICAgICAgICAgLy8gc2FtZSBjb25zdHJ1Y3RvciBtYXkgZ2V0IHJlZ2lzdGVyZWQgYXMgZGlmZmVyZW50IGxvY2FsIGNvbXBvbmVudHNcbiAgICAgICAgICAvLyBzbyBjaWQgYWxvbmUgaXMgbm90IGVub3VnaCAoIzMyNjkpXG4gICAgICAgICAgPyBjb21wb25lbnRPcHRpb25zLkN0b3IuY2lkICsgKGNvbXBvbmVudE9wdGlvbnMudGFnID8gKFwiOjpcIiArIChjb21wb25lbnRPcHRpb25zLnRhZykpIDogJycpXG4gICAgICAgICAgOiB2bm9kZS5rZXk7XG4gICAgICAgIGlmIChjYWNoZVtrZXldKSB7XG4gICAgICAgICAgdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgPSBjYWNoZVtrZXldLmNvbXBvbmVudEluc3RhbmNlO1xuICAgICAgICAgIC8vIG1ha2UgY3VycmVudCBrZXkgZnJlc2hlc3RcbiAgICAgICAgICByZW1vdmUoa2V5cywga2V5KTtcbiAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWNoZVtrZXldID0gdm5vZGU7XG4gICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgLy8gcHJ1bmUgb2xkZXN0IGVudHJ5XG4gICAgICAgICAgaWYgKHRoaXMubWF4ICYmIGtleXMubGVuZ3RoID4gcGFyc2VJbnQodGhpcy5tYXgpKSB7XG4gICAgICAgICAgICBwcnVuZUNhY2hlRW50cnkoY2FjaGUsIGtleXNbMF0sIGtleXMsIHRoaXMuX3Zub2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2bm9kZS5kYXRhLmtlZXBBbGl2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdm5vZGUgfHwgKHNsb3QgJiYgc2xvdFswXSlcbiAgICB9XG4gIH07XG5cbiAgdmFyIGJ1aWx0SW5Db21wb25lbnRzID0ge1xuICAgIEtlZXBBbGl2ZTogS2VlcEFsaXZlXG4gIH07XG5cbiAgLyogICovXG5cbiAgZnVuY3Rpb24gaW5pdEdsb2JhbEFQSSAoVnVlKSB7XG4gICAgLy8gY29uZmlnXG4gICAgdmFyIGNvbmZpZ0RlZiA9IHt9O1xuICAgIGNvbmZpZ0RlZi5nZXQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBjb25maWc7IH07XG4gICAge1xuICAgICAgY29uZmlnRGVmLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnRG8gbm90IHJlcGxhY2UgdGhlIFZ1ZS5jb25maWcgb2JqZWN0LCBzZXQgaW5kaXZpZHVhbCBmaWVsZHMgaW5zdGVhZC4nXG4gICAgICAgICk7XG4gICAgICB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLCAnY29uZmlnJywgY29uZmlnRGVmKTtcblxuICAgIC8vIGV4cG9zZWQgdXRpbCBtZXRob2RzLlxuICAgIC8vIE5PVEU6IHRoZXNlIGFyZSBub3QgY29uc2lkZXJlZCBwYXJ0IG9mIHRoZSBwdWJsaWMgQVBJIC0gYXZvaWQgcmVseWluZyBvblxuICAgIC8vIHRoZW0gdW5sZXNzIHlvdSBhcmUgYXdhcmUgb2YgdGhlIHJpc2suXG4gICAgVnVlLnV0aWwgPSB7XG4gICAgICB3YXJuOiB3YXJuLFxuICAgICAgZXh0ZW5kOiBleHRlbmQsXG4gICAgICBtZXJnZU9wdGlvbnM6IG1lcmdlT3B0aW9ucyxcbiAgICAgIGRlZmluZVJlYWN0aXZlOiBkZWZpbmVSZWFjdGl2ZSQkMVxuICAgIH07XG5cbiAgICBWdWUuc2V0ID0gc2V0O1xuICAgIFZ1ZS5kZWxldGUgPSBkZWw7XG4gICAgVnVlLm5leHRUaWNrID0gbmV4dFRpY2s7XG5cbiAgICAvLyAyLjYgZXhwbGljaXQgb2JzZXJ2YWJsZSBBUElcbiAgICBWdWUub2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIG9ic2VydmUob2JqKTtcbiAgICAgIHJldHVybiBvYmpcbiAgICB9O1xuXG4gICAgVnVlLm9wdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIEFTU0VUX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIFZ1ZS5vcHRpb25zW3R5cGUgKyAncyddID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9KTtcblxuICAgIC8vIHRoaXMgaXMgdXNlZCB0byBpZGVudGlmeSB0aGUgXCJiYXNlXCIgY29uc3RydWN0b3IgdG8gZXh0ZW5kIGFsbCBwbGFpbi1vYmplY3RcbiAgICAvLyBjb21wb25lbnRzIHdpdGggaW4gV2VleCdzIG11bHRpLWluc3RhbmNlIHNjZW5hcmlvcy5cbiAgICBWdWUub3B0aW9ucy5fYmFzZSA9IFZ1ZTtcblxuICAgIGV4dGVuZChWdWUub3B0aW9ucy5jb21wb25lbnRzLCBidWlsdEluQ29tcG9uZW50cyk7XG5cbiAgICBpbml0VXNlKFZ1ZSk7XG4gICAgaW5pdE1peGluJDEoVnVlKTtcbiAgICBpbml0RXh0ZW5kKFZ1ZSk7XG4gICAgaW5pdEFzc2V0UmVnaXN0ZXJzKFZ1ZSk7XG4gIH1cblxuICBpbml0R2xvYmFsQVBJKFZ1ZSk7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckaXNTZXJ2ZXInLCB7XG4gICAgZ2V0OiBpc1NlcnZlclJlbmRlcmluZ1xuICB9KTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRzc3JDb250ZXh0Jywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0ICgpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICByZXR1cm4gdGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dFxuICAgIH1cbiAgfSk7XG5cbiAgLy8gZXhwb3NlIEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0IGZvciBzc3IgcnVudGltZSBoZWxwZXIgaW5zdGFsbGF0aW9uXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUsICdGdW5jdGlvbmFsUmVuZGVyQ29udGV4dCcsIHtcbiAgICB2YWx1ZTogRnVuY3Rpb25hbFJlbmRlckNvbnRleHRcbiAgfSk7XG5cbiAgVnVlLnZlcnNpb24gPSAnMi42LjExJztcblxuICAvKiAgKi9cblxuICAvLyB0aGVzZSBhcmUgcmVzZXJ2ZWQgZm9yIHdlYiBiZWNhdXNlIHRoZXkgYXJlIGRpcmVjdGx5IGNvbXBpbGVkIGF3YXlcbiAgLy8gZHVyaW5nIHRlbXBsYXRlIGNvbXBpbGF0aW9uXG4gIHZhciBpc1Jlc2VydmVkQXR0ciA9IG1ha2VNYXAoJ3N0eWxlLGNsYXNzJyk7XG5cbiAgLy8gYXR0cmlidXRlcyB0aGF0IHNob3VsZCBiZSB1c2luZyBwcm9wcyBmb3IgYmluZGluZ1xuICB2YXIgYWNjZXB0VmFsdWUgPSBtYWtlTWFwKCdpbnB1dCx0ZXh0YXJlYSxvcHRpb24sc2VsZWN0LHByb2dyZXNzJyk7XG4gIHZhciBtdXN0VXNlUHJvcCA9IGZ1bmN0aW9uICh0YWcsIHR5cGUsIGF0dHIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgKGF0dHIgPT09ICd2YWx1ZScgJiYgYWNjZXB0VmFsdWUodGFnKSkgJiYgdHlwZSAhPT0gJ2J1dHRvbicgfHxcbiAgICAgIChhdHRyID09PSAnc2VsZWN0ZWQnICYmIHRhZyA9PT0gJ29wdGlvbicpIHx8XG4gICAgICAoYXR0ciA9PT0gJ2NoZWNrZWQnICYmIHRhZyA9PT0gJ2lucHV0JykgfHxcbiAgICAgIChhdHRyID09PSAnbXV0ZWQnICYmIHRhZyA9PT0gJ3ZpZGVvJylcbiAgICApXG4gIH07XG5cbiAgdmFyIGlzRW51bWVyYXRlZEF0dHIgPSBtYWtlTWFwKCdjb250ZW50ZWRpdGFibGUsZHJhZ2dhYmxlLHNwZWxsY2hlY2snKTtcblxuICB2YXIgaXNWYWxpZENvbnRlbnRFZGl0YWJsZVZhbHVlID0gbWFrZU1hcCgnZXZlbnRzLGNhcmV0LHR5cGluZyxwbGFpbnRleHQtb25seScpO1xuXG4gIHZhciBjb252ZXJ0RW51bWVyYXRlZFZhbHVlID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gaXNGYWxzeUF0dHJWYWx1ZSh2YWx1ZSkgfHwgdmFsdWUgPT09ICdmYWxzZSdcbiAgICAgID8gJ2ZhbHNlJ1xuICAgICAgLy8gYWxsb3cgYXJiaXRyYXJ5IHN0cmluZyB2YWx1ZSBmb3IgY29udGVudGVkaXRhYmxlXG4gICAgICA6IGtleSA9PT0gJ2NvbnRlbnRlZGl0YWJsZScgJiYgaXNWYWxpZENvbnRlbnRFZGl0YWJsZVZhbHVlKHZhbHVlKVxuICAgICAgICA/IHZhbHVlXG4gICAgICAgIDogJ3RydWUnXG4gIH07XG5cbiAgdmFyIGlzQm9vbGVhbkF0dHIgPSBtYWtlTWFwKFxuICAgICdhbGxvd2Z1bGxzY3JlZW4sYXN5bmMsYXV0b2ZvY3VzLGF1dG9wbGF5LGNoZWNrZWQsY29tcGFjdCxjb250cm9scyxkZWNsYXJlLCcgK1xuICAgICdkZWZhdWx0LGRlZmF1bHRjaGVja2VkLGRlZmF1bHRtdXRlZCxkZWZhdWx0c2VsZWN0ZWQsZGVmZXIsZGlzYWJsZWQsJyArXG4gICAgJ2VuYWJsZWQsZm9ybW5vdmFsaWRhdGUsaGlkZGVuLGluZGV0ZXJtaW5hdGUsaW5lcnQsaXNtYXAsaXRlbXNjb3BlLGxvb3AsbXVsdGlwbGUsJyArXG4gICAgJ211dGVkLG5vaHJlZixub3Jlc2l6ZSxub3NoYWRlLG5vdmFsaWRhdGUsbm93cmFwLG9wZW4scGF1c2VvbmV4aXQscmVhZG9ubHksJyArXG4gICAgJ3JlcXVpcmVkLHJldmVyc2VkLHNjb3BlZCxzZWFtbGVzcyxzZWxlY3RlZCxzb3J0YWJsZSx0cmFuc2xhdGUsJyArXG4gICAgJ3RydWVzcGVlZCx0eXBlbXVzdG1hdGNoLHZpc2libGUnXG4gICk7XG5cbiAgdmFyIHhsaW5rTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc7XG5cbiAgdmFyIGlzWGxpbmsgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBuYW1lLmNoYXJBdCg1KSA9PT0gJzonICYmIG5hbWUuc2xpY2UoMCwgNSkgPT09ICd4bGluaydcbiAgfTtcblxuICB2YXIgZ2V0WGxpbmtQcm9wID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gaXNYbGluayhuYW1lKSA/IG5hbWUuc2xpY2UoNiwgbmFtZS5sZW5ndGgpIDogJydcbiAgfTtcblxuICB2YXIgaXNGYWxzeUF0dHJWYWx1ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gdmFsID09IG51bGwgfHwgdmFsID09PSBmYWxzZVxuICB9O1xuXG4gIC8qICAqL1xuXG4gIGZ1bmN0aW9uIGdlbkNsYXNzRm9yVm5vZGUgKHZub2RlKSB7XG4gICAgdmFyIGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgIHZhciBwYXJlbnROb2RlID0gdm5vZGU7XG4gICAgdmFyIGNoaWxkTm9kZSA9IHZub2RlO1xuICAgIHdoaWxlIChpc0RlZihjaGlsZE5vZGUuY29tcG9uZW50SW5zdGFuY2UpKSB7XG4gICAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGUuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlO1xuICAgICAgaWYgKGNoaWxkTm9kZSAmJiBjaGlsZE5vZGUuZGF0YSkge1xuICAgICAgICBkYXRhID0gbWVyZ2VDbGFzc0RhdGEoY2hpbGROb2RlLmRhdGEsIGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgICB3aGlsZSAoaXNEZWYocGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50KSkge1xuICAgICAgaWYgKHBhcmVudE5vZGUgJiYgcGFyZW50Tm9kZS5kYXRhKSB7XG4gICAgICAgIGRhdGEgPSBtZXJnZUNsYXNzRGF0YShkYXRhLCBwYXJlbnROb2RlLmRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVuZGVyQ2xhc3MoZGF0YS5zdGF0aWNDbGFzcywgZGF0YS5jbGFzcylcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lcmdlQ2xhc3NEYXRhIChjaGlsZCwgcGFyZW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBjb25jYXQoY2hpbGQuc3RhdGljQ2xhc3MsIHBhcmVudC5zdGF0aWNDbGFzcyksXG4gICAgICBjbGFzczogaXNEZWYoY2hpbGQuY2xhc3MpXG4gICAgICAgID8gW2NoaWxkLmNsYXNzLCBwYXJlbnQuY2xhc3NdXG4gICAgICAgIDogcGFyZW50LmNsYXNzXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyQ2xhc3MgKFxuICAgIHN0YXRpY0NsYXNzLFxuICAgIGR5bmFtaWNDbGFzc1xuICApIHtcbiAgICBpZiAoaXNEZWYoc3RhdGljQ2xhc3MpIHx8IGlzRGVmKGR5bmFtaWNDbGFzcykpIHtcbiAgICAgIHJldHVybiBjb25jYXQoc3RhdGljQ2xhc3MsIHN0cmluZ2lmeUNsYXNzKGR5bmFtaWNDbGFzcykpXG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBmdW5jdGlvbiBjb25jYXQgKGEsIGIpIHtcbiAgICByZXR1cm4gYSA/IGIgPyAoYSArICcgJyArIGIpIDogYSA6IChiIHx8ICcnKVxuICB9XG5cbiAgZnVuY3Rpb24gc3RyaW5naWZ5Q2xhc3MgKHZhbHVlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gc3RyaW5naWZ5QXJyYXkodmFsdWUpXG4gICAgfVxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBzdHJpbmdpZnlPYmplY3QodmFsdWUpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0cmluZ2lmeUFycmF5ICh2YWx1ZSkge1xuICAgIHZhciByZXMgPSAnJztcbiAgICB2YXIgc3RyaW5naWZpZWQ7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChpc0RlZihzdHJpbmdpZmllZCA9IHN0cmluZ2lmeUNsYXNzKHZhbHVlW2ldKSkgJiYgc3RyaW5naWZpZWQgIT09ICcnKSB7XG4gICAgICAgIGlmIChyZXMpIHsgcmVzICs9ICcgJzsgfVxuICAgICAgICByZXMgKz0gc3RyaW5naWZpZWQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0cmluZ2lmeU9iamVjdCAodmFsdWUpIHtcbiAgICB2YXIgcmVzID0gJyc7XG4gICAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWVba2V5XSkge1xuICAgICAgICBpZiAocmVzKSB7IHJlcyArPSAnICc7IH1cbiAgICAgICAgcmVzICs9IGtleTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9XG5cbiAgLyogICovXG5cbiAgdmFyIG5hbWVzcGFjZU1hcCA9IHtcbiAgICBzdmc6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG4gICAgbWF0aDogJ2h0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUwnXG4gIH07XG5cbiAgdmFyIGlzSFRNTFRhZyA9IG1ha2VNYXAoXG4gICAgJ2h0bWwsYm9keSxiYXNlLGhlYWQsbGluayxtZXRhLHN0eWxlLHRpdGxlLCcgK1xuICAgICdhZGRyZXNzLGFydGljbGUsYXNpZGUsZm9vdGVyLGhlYWRlcixoMSxoMixoMyxoNCxoNSxoNixoZ3JvdXAsbmF2LHNlY3Rpb24sJyArXG4gICAgJ2RpdixkZCxkbCxkdCxmaWdjYXB0aW9uLGZpZ3VyZSxwaWN0dXJlLGhyLGltZyxsaSxtYWluLG9sLHAscHJlLHVsLCcgK1xuICAgICdhLGIsYWJicixiZGksYmRvLGJyLGNpdGUsY29kZSxkYXRhLGRmbixlbSxpLGtiZCxtYXJrLHEscnAscnQscnRjLHJ1YnksJyArXG4gICAgJ3Msc2FtcCxzbWFsbCxzcGFuLHN0cm9uZyxzdWIsc3VwLHRpbWUsdSx2YXIsd2JyLGFyZWEsYXVkaW8sbWFwLHRyYWNrLHZpZGVvLCcgK1xuICAgICdlbWJlZCxvYmplY3QscGFyYW0sc291cmNlLGNhbnZhcyxzY3JpcHQsbm9zY3JpcHQsZGVsLGlucywnICtcbiAgICAnY2FwdGlvbixjb2wsY29sZ3JvdXAsdGFibGUsdGhlYWQsdGJvZHksdGQsdGgsdHIsJyArXG4gICAgJ2J1dHRvbixkYXRhbGlzdCxmaWVsZHNldCxmb3JtLGlucHV0LGxhYmVsLGxlZ2VuZCxtZXRlcixvcHRncm91cCxvcHRpb24sJyArXG4gICAgJ291dHB1dCxwcm9ncmVzcyxzZWxlY3QsdGV4dGFyZWEsJyArXG4gICAgJ2RldGFpbHMsZGlhbG9nLG1lbnUsbWVudWl0ZW0sc3VtbWFyeSwnICtcbiAgICAnY29udGVudCxlbGVtZW50LHNoYWRvdyx0ZW1wbGF0ZSxibG9ja3F1b3RlLGlmcmFtZSx0Zm9vdCdcbiAgKTtcblxuICAvLyB0aGlzIG1hcCBpcyBpbnRlbnRpb25hbGx5IHNlbGVjdGl2ZSwgb25seSBjb3ZlcmluZyBTVkcgZWxlbWVudHMgdGhhdCBtYXlcbiAgLy8gY29udGFpbiBjaGlsZCBlbGVtZW50cy5cbiAgdmFyIGlzU1ZHID0gbWFrZU1hcChcbiAgICAnc3ZnLGFuaW1hdGUsY2lyY2xlLGNsaXBwYXRoLGN1cnNvcixkZWZzLGRlc2MsZWxsaXBzZSxmaWx0ZXIsZm9udC1mYWNlLCcgK1xuICAgICdmb3JlaWduT2JqZWN0LGcsZ2x5cGgsaW1hZ2UsbGluZSxtYXJrZXIsbWFzayxtaXNzaW5nLWdseXBoLHBhdGgscGF0dGVybiwnICtcbiAgICAncG9seWdvbixwb2x5bGluZSxyZWN0LHN3aXRjaCxzeW1ib2wsdGV4dCx0ZXh0cGF0aCx0c3Bhbix1c2UsdmlldycsXG4gICAgdHJ1ZVxuICApO1xuXG4gIHZhciBpc1ByZVRhZyA9IGZ1bmN0aW9uICh0YWcpIHsgcmV0dXJuIHRhZyA9PT0gJ3ByZSc7IH07XG5cbiAgdmFyIGlzUmVzZXJ2ZWRUYWcgPSBmdW5jdGlvbiAodGFnKSB7XG4gICAgcmV0dXJuIGlzSFRNTFRhZyh0YWcpIHx8IGlzU1ZHKHRhZylcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRUYWdOYW1lc3BhY2UgKHRhZykge1xuICAgIGlmIChpc1NWRyh0YWcpKSB7XG4gICAgICByZXR1cm4gJ3N2ZydcbiAgICB9XG4gICAgLy8gYmFzaWMgc3VwcG9ydCBmb3IgTWF0aE1MXG4gICAgLy8gbm90ZSBpdCBkb2Vzbid0IHN1cHBvcnQgb3RoZXIgTWF0aE1MIGVsZW1lbnRzIGJlaW5nIGNvbXBvbmVudCByb290c1xuICAgIGlmICh0YWcgPT09ICdtYXRoJykge1xuICAgICAgcmV0dXJuICdtYXRoJ1xuICAgIH1cbiAgfVxuXG4gIHZhciB1bmtub3duRWxlbWVudENhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgZnVuY3Rpb24gaXNVbmtub3duRWxlbWVudCAodGFnKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFpbkJyb3dzZXIpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIGlmIChpc1Jlc2VydmVkVGFnKHRhZykpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICB0YWcgPSB0YWcudG9Mb3dlckNhc2UoKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAodW5rbm93bkVsZW1lbnRDYWNoZVt0YWddICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB1bmtub3duRWxlbWVudENhY2hlW3RhZ11cbiAgICB9XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGlmICh0YWcuaW5kZXhPZignLScpID4gLTEpIHtcbiAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI4MjEwMzY0LzEwNzAyNDRcbiAgICAgIHJldHVybiAodW5rbm93bkVsZW1lbnRDYWNoZVt0YWddID0gKFxuICAgICAgICBlbC5jb25zdHJ1Y3RvciA9PT0gd2luZG93LkhUTUxVbmtub3duRWxlbWVudCB8fFxuICAgICAgICBlbC5jb25zdHJ1Y3RvciA9PT0gd2luZG93LkhUTUxFbGVtZW50XG4gICAgICApKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKHVua25vd25FbGVtZW50Q2FjaGVbdGFnXSA9IC9IVE1MVW5rbm93bkVsZW1lbnQvLnRlc3QoZWwudG9TdHJpbmcoKSkpXG4gICAgfVxuICB9XG5cbiAgdmFyIGlzVGV4dElucHV0VHlwZSA9IG1ha2VNYXAoJ3RleHQsbnVtYmVyLHBhc3N3b3JkLHNlYXJjaCxlbWFpbCx0ZWwsdXJsJyk7XG5cbiAgLyogICovXG5cbiAgLyoqXG4gICAqIFF1ZXJ5IGFuIGVsZW1lbnQgc2VsZWN0b3IgaWYgaXQncyBub3QgYW4gZWxlbWVudCBhbHJlYWR5LlxuICAgKi9cbiAgZnVuY3Rpb24gcXVlcnkgKGVsKSB7XG4gICAgaWYgKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpO1xuICAgICAgaWYgKCFzZWxlY3RlZCkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdDYW5ub3QgZmluZCBlbGVtZW50OiAnICsgZWxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB9XG4gICAgICByZXR1cm4gc2VsZWN0ZWRcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVsXG4gICAgfVxuICB9XG5cbiAgLyogICovXG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCQxICh0YWdOYW1lLCB2bm9kZSkge1xuICAgIHZhciBlbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgIGlmICh0YWdOYW1lICE9PSAnc2VsZWN0Jykge1xuICAgICAgcmV0dXJuIGVsbVxuICAgIH1cbiAgICAvLyBmYWxzZSBvciBudWxsIHdpbGwgcmVtb3ZlIHRoZSBhdHRyaWJ1dGUgYnV0IHVuZGVmaW5lZCB3aWxsIG5vdFxuICAgIGlmICh2bm9kZS5kYXRhICYmIHZub2RlLmRhdGEuYXR0cnMgJiYgdm5vZGUuZGF0YS5hdHRycy5tdWx0aXBsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbG0uc2V0QXR0cmlidXRlKCdtdWx0aXBsZScsICdtdWx0aXBsZScpO1xuICAgIH1cbiAgICByZXR1cm4gZWxtXG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50TlMgKG5hbWVzcGFjZSwgdGFnTmFtZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlTWFwW25hbWVzcGFjZV0sIHRhZ05hbWUpXG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVUZXh0Tm9kZSAodGV4dCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ29tbWVudCAodGV4dCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRleHQpXG4gIH1cblxuICBmdW5jdGlvbiBpbnNlcnRCZWZvcmUgKHBhcmVudE5vZGUsIG5ld05vZGUsIHJlZmVyZW5jZU5vZGUpIHtcbiAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZlcmVuY2VOb2RlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUNoaWxkIChub2RlLCBjaGlsZCkge1xuICAgIG5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwZW5kQ2hpbGQgKG5vZGUsIGNoaWxkKSB7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJlbnROb2RlIChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUucGFyZW50Tm9kZVxuICB9XG5cbiAgZnVuY3Rpb24gbmV4dFNpYmxpbmcgKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5uZXh0U2libGluZ1xuICB9XG5cbiAgZnVuY3Rpb24gdGFnTmFtZSAobm9kZSkge1xuICAgIHJldHVybiBub2RlLnRhZ05hbWVcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFRleHRDb250ZW50IChub2RlLCB0ZXh0KSB7XG4gICAgbm9kZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRTdHlsZVNjb3BlIChub2RlLCBzY29wZUlkKSB7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoc2NvcGVJZCwgJycpO1xuICB9XG5cbiAgdmFyIG5vZGVPcHMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgY3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudCQxLFxuICAgIGNyZWF0ZUVsZW1lbnROUzogY3JlYXRlRWxlbWVudE5TLFxuICAgIGNyZWF0ZVRleHROb2RlOiBjcmVhdGVUZXh0Tm9kZSxcbiAgICBjcmVhdGVDb21tZW50OiBjcmVhdGVDb21tZW50LFxuICAgIGluc2VydEJlZm9yZTogaW5zZXJ0QmVmb3JlLFxuICAgIHJlbW92ZUNoaWxkOiByZW1vdmVDaGlsZCxcbiAgICBhcHBlbmRDaGlsZDogYXBwZW5kQ2hpbGQsXG4gICAgcGFyZW50Tm9kZTogcGFyZW50Tm9kZSxcbiAgICBuZXh0U2libGluZzogbmV4dFNpYmxpbmcsXG4gICAgdGFnTmFtZTogdGFnTmFtZSxcbiAgICBzZXRUZXh0Q29udGVudDogc2V0VGV4dENvbnRlbnQsXG4gICAgc2V0U3R5bGVTY29wZTogc2V0U3R5bGVTY29wZVxuICB9KTtcblxuICAvKiAgKi9cblxuICB2YXIgcmVmID0ge1xuICAgIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlIChfLCB2bm9kZSkge1xuICAgICAgcmVnaXN0ZXJSZWYodm5vZGUpO1xuICAgIH0sXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUgKG9sZFZub2RlLCB2bm9kZSkge1xuICAgICAgaWYgKG9sZFZub2RlLmRhdGEucmVmICE9PSB2bm9kZS5kYXRhLnJlZikge1xuICAgICAgICByZWdpc3RlclJlZihvbGRWbm9kZSwgdHJ1ZSk7XG4gICAgICAgIHJlZ2lzdGVyUmVmKHZub2RlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3kgKHZub2RlKSB7XG4gICAgICByZWdpc3RlclJlZih2bm9kZSwgdHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyUmVmICh2bm9kZSwgaXNSZW1vdmFsKSB7XG4gICAgdmFyIGtleSA9IHZub2RlLmRhdGEucmVmO1xuICAgIGlmICghaXNEZWYoa2V5KSkgeyByZXR1cm4gfVxuXG4gICAgdmFyIHZtID0gdm5vZGUuY29udGV4dDtcbiAgICB2YXIgcmVmID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgfHwgdm5vZGUuZWxtO1xuICAgIHZhciByZWZzID0gdm0uJHJlZnM7XG4gICAgaWYgKGlzUmVtb3ZhbCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVmc1trZXldKSkge1xuICAgICAgICByZW1vdmUocmVmc1trZXldLCByZWYpO1xuICAgICAgfSBlbHNlIGlmIChyZWZzW2tleV0gPT09IHJlZikge1xuICAgICAgICByZWZzW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2bm9kZS5kYXRhLnJlZkluRm9yKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyZWZzW2tleV0pKSB7XG4gICAgICAgICAgcmVmc1trZXldID0gW3JlZl07XG4gICAgICAgIH0gZWxzZSBpZiAocmVmc1trZXldLmluZGV4T2YocmVmKSA8IDApIHtcbiAgICAgICAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICAgICAgICByZWZzW2tleV0ucHVzaChyZWYpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWZzW2tleV0gPSByZWY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZpcnR1YWwgRE9NIHBhdGNoaW5nIGFsZ29yaXRobSBiYXNlZCBvbiBTbmFiYmRvbSBieVxuICAgKiBTaW1vbiBGcmlpcyBWaW5kdW0gKEBwYWxkZXBpbmQpXG4gICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vcGFsZGVwaW5kL3NuYWJiZG9tL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAgICpcbiAgICogbW9kaWZpZWQgYnkgRXZhbiBZb3UgKEB5eXg5OTA4MDMpXG4gICAqXG4gICAqIE5vdCB0eXBlLWNoZWNraW5nIHRoaXMgYmVjYXVzZSB0aGlzIGZpbGUgaXMgcGVyZi1jcml0aWNhbCBhbmQgdGhlIGNvc3RcbiAgICogb2YgbWFraW5nIGZsb3cgdW5kZXJzdGFuZCBpdCBpcyBub3Qgd29ydGggaXQuXG4gICAqL1xuXG4gIHZhciBlbXB0eU5vZGUgPSBuZXcgVk5vZGUoJycsIHt9LCBbXSk7XG5cbiAgdmFyIGhvb2tzID0gWydjcmVhdGUnLCAnYWN0aXZhdGUnLCAndXBkYXRlJywgJ3JlbW92ZScsICdkZXN0cm95J107XG5cbiAgZnVuY3Rpb24gc2FtZVZub2RlIChhLCBiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGEua2V5ID09PSBiLmtleSAmJiAoXG4gICAgICAgIChcbiAgICAgICAgICBhLnRhZyA9PT0gYi50YWcgJiZcbiAgICAgICAgICBhLmlzQ29tbWVudCA9PT0gYi5pc0NvbW1lbnQgJiZcbiAgICAgICAgICBpc0RlZihhLmRhdGEpID09PSBpc0RlZihiLmRhdGEpICYmXG4gICAgICAgICAgc2FtZUlucHV0VHlwZShhLCBiKVxuICAgICAgICApIHx8IChcbiAgICAgICAgICBpc1RydWUoYS5pc0FzeW5jUGxhY2Vob2xkZXIpICYmXG4gICAgICAgICAgYS5hc3luY0ZhY3RvcnkgPT09IGIuYXN5bmNGYWN0b3J5ICYmXG4gICAgICAgICAgaXNVbmRlZihiLmFzeW5jRmFjdG9yeS5lcnJvcilcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIGZ1bmN0aW9uIHNhbWVJbnB1dFR5cGUgKGEsIGIpIHtcbiAgICBpZiAoYS50YWcgIT09ICdpbnB1dCcpIHsgcmV0dXJuIHRydWUgfVxuICAgIHZhciBpO1xuICAgIHZhciB0eXBlQSA9IGlzRGVmKGkgPSBhLmRhdGEpICYmIGlzRGVmKGkgPSBpLmF0dHJzKSAmJiBpLnR5cGU7XG4gICAgdmFyIHR5cGVCID0gaXNEZWYoaSA9IGIuZGF0YSkgJiYgaXNEZWYoaSA9IGkuYXR0cnMpICYmIGkudHlwZTtcbiAgICByZXR1cm4gdHlwZUEgPT09IHR5cGVCIHx8IGlzVGV4dElucHV0VHlwZSh0eXBlQSkgJiYgaXNUZXh0SW5wdXRUeXBlKHR5cGVCKVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlS2V5VG9PbGRJZHggKGNoaWxkcmVuLCBiZWdpbklkeCwgZW5kSWR4KSB7XG4gICAgdmFyIGksIGtleTtcbiAgICB2YXIgbWFwID0ge307XG4gICAgZm9yIChpID0gYmVnaW5JZHg7IGkgPD0gZW5kSWR4OyArK2kpIHtcbiAgICAgIGtleSA9IGNoaWxkcmVuW2ldLmtleTtcbiAgICAgIGlmIChpc0RlZihrZXkpKSB7IG1hcFtrZXldID0gaTsgfVxuICAgIH1cbiAgICByZXR1cm4gbWFwXG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQYXRjaEZ1bmN0aW9uIChiYWNrZW5kKSB7XG4gICAgdmFyIGksIGo7XG4gICAgdmFyIGNicyA9IHt9O1xuXG4gICAgdmFyIG1vZHVsZXMgPSBiYWNrZW5kLm1vZHVsZXM7XG4gICAgdmFyIG5vZGVPcHMgPSBiYWNrZW5kLm5vZGVPcHM7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyArK2kpIHtcbiAgICAgIGNic1tob29rc1tpXV0gPSBbXTtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBtb2R1bGVzLmxlbmd0aDsgKytqKSB7XG4gICAgICAgIGlmIChpc0RlZihtb2R1bGVzW2pdW2hvb2tzW2ldXSkpIHtcbiAgICAgICAgICBjYnNbaG9va3NbaV1dLnB1c2gobW9kdWxlc1tqXVtob29rc1tpXV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW1wdHlOb2RlQXQgKGVsbSkge1xuICAgICAgcmV0dXJuIG5ldyBWTm9kZShub2RlT3BzLnRhZ05hbWUoZWxtKS50b0xvd2VyQ2FzZSgpLCB7fSwgW10sIHVuZGVmaW5lZCwgZWxtKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJtQ2IgKGNoaWxkRWxtLCBsaXN0ZW5lcnMpIHtcbiAgICAgIGZ1bmN0aW9uIHJlbW92ZSQkMSAoKSB7XG4gICAgICAgIGlmICgtLXJlbW92ZSQkMS5saXN0ZW5lcnMgPT09IDApIHtcbiAgICAgICAgICByZW1vdmVOb2RlKGNoaWxkRWxtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVtb3ZlJCQxLmxpc3RlbmVycyA9IGxpc3RlbmVycztcbiAgICAgIHJldHVybiByZW1vdmUkJDFcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVOb2RlIChlbCkge1xuICAgICAgdmFyIHBhcmVudCA9IG5vZGVPcHMucGFyZW50Tm9kZShlbCk7XG4gICAgICAvLyBlbGVtZW50IG1heSBoYXZlIGFscmVhZHkgYmVlbiByZW1vdmVkIGR1ZSB0byB2LWh0bWwgLyB2LXRleHRcbiAgICAgIGlmIChpc0RlZihwYXJlbnQpKSB7XG4gICAgICAgIG5vZGVPcHMucmVtb3ZlQ2hpbGQocGFyZW50LCBlbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNVbmtub3duRWxlbWVudCQkMSAodm5vZGUsIGluVlByZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgIWluVlByZSAmJlxuICAgICAgICAhdm5vZGUubnMgJiZcbiAgICAgICAgIShcbiAgICAgICAgICBjb25maWcuaWdub3JlZEVsZW1lbnRzLmxlbmd0aCAmJlxuICAgICAgICAgIGNvbmZpZy5pZ25vcmVkRWxlbWVudHMuc29tZShmdW5jdGlvbiAoaWdub3JlKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNSZWdFeHAoaWdub3JlKVxuICAgICAgICAgICAgICA/IGlnbm9yZS50ZXN0KHZub2RlLnRhZylcbiAgICAgICAgICAgICAgOiBpZ25vcmUgPT09IHZub2RlLnRhZ1xuICAgICAgICAgIH0pXG4gICAgICAgICkgJiZcbiAgICAgICAgY29uZmlnLmlzVW5rbm93bkVsZW1lbnQodm5vZGUudGFnKVxuICAgICAgKVxuICAgIH1cblxuICAgIHZhciBjcmVhdGluZ0VsbUluVlByZSA9IDA7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVFbG0gKFxuICAgICAgdm5vZGUsXG4gICAgICBpbnNlcnRlZFZub2RlUXVldWUsXG4gICAgICBwYXJlbnRFbG0sXG4gICAgICByZWZFbG0sXG4gICAgICBuZXN0ZWQsXG4gICAgICBvd25lckFycmF5LFxuICAgICAgaW5kZXhcbiAgICApIHtcbiAgICAgIGlmIChpc0RlZih2bm9kZS5lbG0pICYmIGlzRGVmKG93bmVyQXJyYXkpKSB7XG4gICAgICAgIC8vIFRoaXMgdm5vZGUgd2FzIHVzZWQgaW4gYSBwcmV2aW91cyByZW5kZXIhXG4gICAgICAgIC8vIG5vdyBpdCdzIHVzZWQgYXMgYSBuZXcgbm9kZSwgb3ZlcndyaXRpbmcgaXRzIGVsbSB3b3VsZCBjYXVzZVxuICAgICAgICAvLyBwb3RlbnRpYWwgcGF0Y2ggZXJyb3JzIGRvd24gdGhlIHJvYWQgd2hlbiBpdCdzIHVzZWQgYXMgYW4gaW5zZXJ0aW9uXG4gICAgICAgIC8vIHJlZmVyZW5jZSBub2RlLiBJbnN0ZWFkLCB3ZSBjbG9uZSB0aGUgbm9kZSBvbi1kZW1hbmQgYmVmb3JlIGNyZWF0aW5nXG4gICAgICAgIC8vIGFzc29jaWF0ZWQgRE9NIGVsZW1lbnQgZm9yIGl0LlxuICAgICAgICB2bm9kZSA9IG93bmVyQXJyYXlbaW5kZXhdID0gY2xvbmVWTm9kZSh2bm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHZub2RlLmlzUm9vdEluc2VydCA9ICFuZXN0ZWQ7IC8vIGZvciB0cmFuc2l0aW9uIGVudGVyIGNoZWNrXG4gICAgICBpZiAoY3JlYXRlQ29tcG9uZW50KHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgcmVmRWxtKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdmFyIGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgICAgdmFyIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW47XG4gICAgICB2YXIgdGFnID0gdm5vZGUudGFnO1xuICAgICAgaWYgKGlzRGVmKHRhZykpIHtcbiAgICAgICAge1xuICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEucHJlKSB7XG4gICAgICAgICAgICBjcmVhdGluZ0VsbUluVlByZSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXNVbmtub3duRWxlbWVudCQkMSh2bm9kZSwgY3JlYXRpbmdFbG1JblZQcmUpKSB7XG4gICAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgICAnVW5rbm93biBjdXN0b20gZWxlbWVudDogPCcgKyB0YWcgKyAnPiAtIGRpZCB5b3UgJyArXG4gICAgICAgICAgICAgICdyZWdpc3RlciB0aGUgY29tcG9uZW50IGNvcnJlY3RseT8gRm9yIHJlY3Vyc2l2ZSBjb21wb25lbnRzLCAnICtcbiAgICAgICAgICAgICAgJ21ha2Ugc3VyZSB0byBwcm92aWRlIHRoZSBcIm5hbWVcIiBvcHRpb24uJyxcbiAgICAgICAgICAgICAgdm5vZGUuY29udGV4dFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2bm9kZS5lbG0gPSB2bm9kZS5uc1xuICAgICAgICAgID8gbm9kZU9wcy5jcmVhdGVFbGVtZW50TlModm5vZGUubnMsIHRhZylcbiAgICAgICAgICA6IG5vZGVPcHMuY3JlYXRlRWxlbWVudCh0YWcsIHZub2RlKTtcbiAgICAgICAgc2V0U2NvcGUodm5vZGUpO1xuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICB7XG4gICAgICAgICAgY3JlYXRlQ2hpbGRyZW4odm5vZGUsIGNoaWxkcmVuLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICAgIGlmIChpc0RlZihkYXRhKSkge1xuICAgICAgICAgICAgaW52b2tlQ3JlYXRlSG9va3Modm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGluc2VydChwYXJlbnRFbG0sIHZub2RlLmVsbSwgcmVmRWxtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEucHJlKSB7XG4gICAgICAgICAgY3JlYXRpbmdFbG1JblZQcmUtLTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc1RydWUodm5vZGUuaXNDb21tZW50KSkge1xuICAgICAgICB2bm9kZS5lbG0gPSBub2RlT3BzLmNyZWF0ZUNvbW1lbnQodm5vZGUudGV4dCk7XG4gICAgICAgIGluc2VydChwYXJlbnRFbG0sIHZub2RlLmVsbSwgcmVmRWxtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZub2RlLmVsbSA9IG5vZGVPcHMuY3JlYXRlVGV4dE5vZGUodm5vZGUudGV4dCk7XG4gICAgICAgIGluc2VydChwYXJlbnRFbG0sIHZub2RlLmVsbSwgcmVmRWxtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDb21wb25lbnQgKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgcmVmRWxtKSB7XG4gICAgICB2YXIgaSA9IHZub2RlLmRhdGE7XG4gICAgICBpZiAoaXNEZWYoaSkpIHtcbiAgICAgICAgdmFyIGlzUmVhY3RpdmF0ZWQgPSBpc0RlZih2bm9kZS5jb21wb25lbnRJbnN0YW5jZSkgJiYgaS5rZWVwQWxpdmU7XG4gICAgICAgIGlmIChpc0RlZihpID0gaS5ob29rKSAmJiBpc0RlZihpID0gaS5pbml0KSkge1xuICAgICAgICAgIGkodm5vZGUsIGZhbHNlIC8qIGh5ZHJhdGluZyAqLyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWZ0ZXIgY2FsbGluZyB0aGUgaW5pdCBob29rLCBpZiB0aGUgdm5vZGUgaXMgYSBjaGlsZCBjb21wb25lbnRcbiAgICAgICAgLy8gaXQgc2hvdWxkJ3ZlIGNyZWF0ZWQgYSBjaGlsZCBpbnN0YW5jZSBhbmQgbW91bnRlZCBpdC4gdGhlIGNoaWxkXG4gICAgICAgIC8vIGNvbXBvbmVudCBhbHNvIGhhcyBzZXQgdGhlIHBsYWNlaG9sZGVyIHZub2RlJ3MgZWxtLlxuICAgICAgICAvLyBpbiB0aGF0IGNhc2Ugd2UgY2FuIGp1c3QgcmV0dXJuIHRoZSBlbGVtZW50IGFuZCBiZSBkb25lLlxuICAgICAgICBpZiAoaXNEZWYodm5vZGUuY29tcG9uZW50SW5zdGFuY2UpKSB7XG4gICAgICAgICAgaW5pdENvbXBvbmVudCh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgICBpbnNlcnQocGFyZW50RWxtLCB2bm9kZS5lbG0sIHJlZkVsbSk7XG4gICAgICAgICAgaWYgKGlzVHJ1ZShpc1JlYWN0aXZhdGVkKSkge1xuICAgICAgICAgICAgcmVhY3RpdmF0ZUNvbXBvbmVudCh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIHJlZkVsbSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0Q29tcG9uZW50ICh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSB7XG4gICAgICBpZiAoaXNEZWYodm5vZGUuZGF0YS5wZW5kaW5nSW5zZXJ0KSkge1xuICAgICAgICBpbnNlcnRlZFZub2RlUXVldWUucHVzaC5hcHBseShpbnNlcnRlZFZub2RlUXVldWUsIHZub2RlLmRhdGEucGVuZGluZ0luc2VydCk7XG4gICAgICAgIHZub2RlLmRhdGEucGVuZGluZ0luc2VydCA9IG51bGw7XG4gICAgICB9XG4gICAgICB2bm9kZS5lbG0gPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZS4kZWw7XG4gICAgICBpZiAoaXNQYXRjaGFibGUodm5vZGUpKSB7XG4gICAgICAgIGludm9rZUNyZWF0ZUhvb2tzKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICBzZXRTY29wZSh2bm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlbXB0eSBjb21wb25lbnQgcm9vdC5cbiAgICAgICAgLy8gc2tpcCBhbGwgZWxlbWVudC1yZWxhdGVkIG1vZHVsZXMgZXhjZXB0IGZvciByZWYgKCMzNDU1KVxuICAgICAgICByZWdpc3RlclJlZih2bm9kZSk7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpbnZva2UgdGhlIGluc2VydCBob29rXG4gICAgICAgIGluc2VydGVkVm5vZGVRdWV1ZS5wdXNoKHZub2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWFjdGl2YXRlQ29tcG9uZW50ICh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIHJlZkVsbSkge1xuICAgICAgdmFyIGk7XG4gICAgICAvLyBoYWNrIGZvciAjNDMzOTogYSByZWFjdGl2YXRlZCBjb21wb25lbnQgd2l0aCBpbm5lciB0cmFuc2l0aW9uXG4gICAgICAvLyBkb2VzIG5vdCB0cmlnZ2VyIGJlY2F1c2UgdGhlIGlubmVyIG5vZGUncyBjcmVhdGVkIGhvb2tzIGFyZSBub3QgY2FsbGVkXG4gICAgICAvLyBhZ2Fpbi4gSXQncyBub3QgaWRlYWwgdG8gaW52b2x2ZSBtb2R1bGUtc3BlY2lmaWMgbG9naWMgaW4gaGVyZSBidXRcbiAgICAgIC8vIHRoZXJlIGRvZXNuJ3Qgc2VlbSB0byBiZSBhIGJldHRlciB3YXkgdG8gZG8gaXQuXG4gICAgICB2YXIgaW5uZXJOb2RlID0gdm5vZGU7XG4gICAgICB3aGlsZSAoaW5uZXJOb2RlLmNvbXBvbmVudEluc3RhbmNlKSB7XG4gICAgICAgIGlubmVyTm9kZSA9IGlubmVyTm9kZS5jb21wb25lbnRJbnN0YW5jZS5fdm5vZGU7XG4gICAgICAgIGlmIChpc0RlZihpID0gaW5uZXJOb2RlLmRhdGEpICYmIGlzRGVmKGkgPSBpLnRyYW5zaXRpb24pKSB7XG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNicy5hY3RpdmF0ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgY2JzLmFjdGl2YXRlW2ldKGVtcHR5Tm9kZSwgaW5uZXJOb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5zZXJ0ZWRWbm9kZVF1ZXVlLnB1c2goaW5uZXJOb2RlKTtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyB1bmxpa2UgYSBuZXdseSBjcmVhdGVkIGNvbXBvbmVudCxcbiAgICAgIC8vIGEgcmVhY3RpdmF0ZWQga2VlcC1hbGl2ZSBjb21wb25lbnQgZG9lc24ndCBpbnNlcnQgaXRzZWxmXG4gICAgICBpbnNlcnQocGFyZW50RWxtLCB2bm9kZS5lbG0sIHJlZkVsbSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zZXJ0IChwYXJlbnQsIGVsbSwgcmVmJCQxKSB7XG4gICAgICBpZiAoaXNEZWYocGFyZW50KSkge1xuICAgICAgICBpZiAoaXNEZWYocmVmJCQxKSkge1xuICAgICAgICAgIGlmIChub2RlT3BzLnBhcmVudE5vZGUocmVmJCQxKSA9PT0gcGFyZW50KSB7XG4gICAgICAgICAgICBub2RlT3BzLmluc2VydEJlZm9yZShwYXJlbnQsIGVsbSwgcmVmJCQxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZU9wcy5hcHBlbmRDaGlsZChwYXJlbnQsIGVsbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDaGlsZHJlbiAodm5vZGUsIGNoaWxkcmVuLCBpbnNlcnRlZFZub2RlUXVldWUpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICB7XG4gICAgICAgICAgY2hlY2tEdXBsaWNhdGVLZXlzKGNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgY3JlYXRlRWxtKGNoaWxkcmVuW2ldLCBpbnNlcnRlZFZub2RlUXVldWUsIHZub2RlLmVsbSwgbnVsbCwgdHJ1ZSwgY2hpbGRyZW4sIGkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzUHJpbWl0aXZlKHZub2RlLnRleHQpKSB7XG4gICAgICAgIG5vZGVPcHMuYXBwZW5kQ2hpbGQodm5vZGUuZWxtLCBub2RlT3BzLmNyZWF0ZVRleHROb2RlKFN0cmluZyh2bm9kZS50ZXh0KSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzUGF0Y2hhYmxlICh2bm9kZSkge1xuICAgICAgd2hpbGUgKHZub2RlLmNvbXBvbmVudEluc3RhbmNlKSB7XG4gICAgICAgIHZub2RlID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlzRGVmKHZub2RlLnRhZylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnZva2VDcmVhdGVIb29rcyAodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSkge1xuICAgICAgZm9yICh2YXIgaSQxID0gMDsgaSQxIDwgY2JzLmNyZWF0ZS5sZW5ndGg7ICsraSQxKSB7XG4gICAgICAgIGNicy5jcmVhdGVbaSQxXShlbXB0eU5vZGUsIHZub2RlKTtcbiAgICAgIH1cbiAgICAgIGkgPSB2bm9kZS5kYXRhLmhvb2s7IC8vIFJldXNlIHZhcmlhYmxlXG4gICAgICBpZiAoaXNEZWYoaSkpIHtcbiAgICAgICAgaWYgKGlzRGVmKGkuY3JlYXRlKSkgeyBpLmNyZWF0ZShlbXB0eU5vZGUsIHZub2RlKTsgfVxuICAgICAgICBpZiAoaXNEZWYoaS5pbnNlcnQpKSB7IGluc2VydGVkVm5vZGVRdWV1ZS5wdXNoKHZub2RlKTsgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNldCBzY29wZSBpZCBhdHRyaWJ1dGUgZm9yIHNjb3BlZCBDU1MuXG4gICAgLy8gdGhpcyBpcyBpbXBsZW1lbnRlZCBhcyBhIHNwZWNpYWwgY2FzZSB0byBhdm9pZCB0aGUgb3ZlcmhlYWRcbiAgICAvLyBvZiBnb2luZyB0aHJvdWdoIHRoZSBub3JtYWwgYXR0cmlidXRlIHBhdGNoaW5nIHByb2Nlc3MuXG4gICAgZnVuY3Rpb24gc2V0U2NvcGUgKHZub2RlKSB7XG4gICAgICB2YXIgaTtcbiAgICAgIGlmIChpc0RlZihpID0gdm5vZGUuZm5TY29wZUlkKSkge1xuICAgICAgICBub2RlT3BzLnNldFN0eWxlU2NvcGUodm5vZGUuZWxtLCBpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBhbmNlc3RvciA9IHZub2RlO1xuICAgICAgICB3aGlsZSAoYW5jZXN0b3IpIHtcbiAgICAgICAgICBpZiAoaXNEZWYoaSA9IGFuY2VzdG9yLmNvbnRleHQpICYmIGlzRGVmKGkgPSBpLiRvcHRpb25zLl9zY29wZUlkKSkge1xuICAgICAgICAgICAgbm9kZU9wcy5zZXRTdHlsZVNjb3BlKHZub2RlLmVsbSwgaSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFuY2VzdG9yID0gYW5jZXN0b3IucGFyZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBmb3Igc2xvdCBjb250ZW50IHRoZXkgc2hvdWxkIGFsc28gZ2V0IHRoZSBzY29wZUlkIGZyb20gdGhlIGhvc3QgaW5zdGFuY2UuXG4gICAgICBpZiAoaXNEZWYoaSA9IGFjdGl2ZUluc3RhbmNlKSAmJlxuICAgICAgICBpICE9PSB2bm9kZS5jb250ZXh0ICYmXG4gICAgICAgIGkgIT09IHZub2RlLmZuQ29udGV4dCAmJlxuICAgICAgICBpc0RlZihpID0gaS4kb3B0aW9ucy5fc2NvcGVJZClcbiAgICAgICkge1xuICAgICAgICBub2RlT3BzLnNldFN0eWxlU2NvcGUodm5vZGUuZWxtLCBpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRWbm9kZXMgKHBhcmVudEVsbSwgcmVmRWxtLCB2bm9kZXMsIHN0YXJ0SWR4LCBlbmRJZHgsIGluc2VydGVkVm5vZGVRdWV1ZSkge1xuICAgICAgZm9yICg7IHN0YXJ0SWR4IDw9IGVuZElkeDsgKytzdGFydElkeCkge1xuICAgICAgICBjcmVhdGVFbG0odm5vZGVzW3N0YXJ0SWR4XSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIHJlZkVsbSwgZmFsc2UsIHZub2Rlcywgc3RhcnRJZHgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGludm9rZURlc3Ryb3lIb29rICh2bm9kZSkge1xuICAgICAgdmFyIGksIGo7XG4gICAgICB2YXIgZGF0YSA9IHZub2RlLmRhdGE7XG4gICAgICBpZiAoaXNEZWYoZGF0YSkpIHtcbiAgICAgICAgaWYgKGlzRGVmKGkgPSBkYXRhLmhvb2spICYmIGlzRGVmKGkgPSBpLmRlc3Ryb3kpKSB7IGkodm5vZGUpOyB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjYnMuZGVzdHJveS5sZW5ndGg7ICsraSkgeyBjYnMuZGVzdHJveVtpXSh2bm9kZSk7IH1cbiAgICAgIH1cbiAgICAgIGlmIChpc0RlZihpID0gdm5vZGUuY2hpbGRyZW4pKSB7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCB2bm9kZS5jaGlsZHJlbi5sZW5ndGg7ICsraikge1xuICAgICAgICAgIGludm9rZURlc3Ryb3lIb29rKHZub2RlLmNoaWxkcmVuW2pdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVZub2RlcyAodm5vZGVzLCBzdGFydElkeCwgZW5kSWR4KSB7XG4gICAgICBmb3IgKDsgc3RhcnRJZHggPD0gZW5kSWR4OyArK3N0YXJ0SWR4KSB7XG4gICAgICAgIHZhciBjaCA9IHZub2Rlc1tzdGFydElkeF07XG4gICAgICAgIGlmIChpc0RlZihjaCkpIHtcbiAgICAgICAgICBpZiAoaXNEZWYoY2gudGFnKSkge1xuICAgICAgICAgICAgcmVtb3ZlQW5kSW52b2tlUmVtb3ZlSG9vayhjaCk7XG4gICAgICAgICAgICBpbnZva2VEZXN0cm95SG9vayhjaCk7XG4gICAgICAgICAgfSBlbHNlIHsgLy8gVGV4dCBub2RlXG4gICAgICAgICAgICByZW1vdmVOb2RlKGNoLmVsbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQW5kSW52b2tlUmVtb3ZlSG9vayAodm5vZGUsIHJtKSB7XG4gICAgICBpZiAoaXNEZWYocm0pIHx8IGlzRGVmKHZub2RlLmRhdGEpKSB7XG4gICAgICAgIHZhciBpO1xuICAgICAgICB2YXIgbGlzdGVuZXJzID0gY2JzLnJlbW92ZS5sZW5ndGggKyAxO1xuICAgICAgICBpZiAoaXNEZWYocm0pKSB7XG4gICAgICAgICAgLy8gd2UgaGF2ZSBhIHJlY3Vyc2l2ZWx5IHBhc3NlZCBkb3duIHJtIGNhbGxiYWNrXG4gICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGxpc3RlbmVycyBjb3VudFxuICAgICAgICAgIHJtLmxpc3RlbmVycyArPSBsaXN0ZW5lcnM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZGlyZWN0bHkgcmVtb3ZpbmdcbiAgICAgICAgICBybSA9IGNyZWF0ZVJtQ2Iodm5vZGUuZWxtLCBsaXN0ZW5lcnMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlY3Vyc2l2ZWx5IGludm9rZSBob29rcyBvbiBjaGlsZCBjb21wb25lbnQgcm9vdCBub2RlXG4gICAgICAgIGlmIChpc0RlZihpID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UpICYmIGlzRGVmKGkgPSBpLl92bm9kZSkgJiYgaXNEZWYoaS5kYXRhKSkge1xuICAgICAgICAgIHJlbW92ZUFuZEludm9rZVJlbW92ZUhvb2soaSwgcm0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjYnMucmVtb3ZlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgY2JzLnJlbW92ZVtpXSh2bm9kZSwgcm0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0RlZihpID0gdm5vZGUuZGF0YS5ob29rKSAmJiBpc0RlZihpID0gaS5yZW1vdmUpKSB7XG4gICAgICAgICAgaSh2bm9kZSwgcm0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJtKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbW92ZU5vZGUodm5vZGUuZWxtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVDaGlsZHJlbiAocGFyZW50RWxtLCBvbGRDaCwgbmV3Q2gsIGluc2VydGVkVm5vZGVRdWV1ZSwgcmVtb3ZlT25seSkge1xuICAgICAgdmFyIG9sZFN0YXJ0SWR4ID0gMDtcbiAgICAgIHZhciBuZXdTdGFydElkeCA9IDA7XG4gICAgICB2YXIgb2xkRW5kSWR4ID0gb2xkQ2gubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBvbGRTdGFydFZub2RlID0gb2xkQ2hbMF07XG4gICAgICB2YXIgb2xkRW5kVm5vZGUgPSBvbGRDaFtvbGRFbmRJZHhdO1xuICAgICAgdmFyIG5ld0VuZElkeCA9IG5ld0NoLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWzBdO1xuICAgICAgdmFyIG5ld0VuZFZub2RlID0gbmV3Q2hbbmV3RW5kSWR4XTtcbiAgICAgIHZhciBvbGRLZXlUb0lkeCwgaWR4SW5PbGQsIHZub2RlVG9Nb3ZlLCByZWZFbG07XG5cbiAgICAgIC8vIHJlbW92ZU9ubHkgaXMgYSBzcGVjaWFsIGZsYWcgdXNlZCBvbmx5IGJ5IDx0cmFuc2l0aW9uLWdyb3VwPlxuICAgICAgLy8gdG8gZW5zdXJlIHJlbW92ZWQgZWxlbWVudHMgc3RheSBpbiBjb3JyZWN0IHJlbGF0aXZlIHBvc2l0aW9uc1xuICAgICAgLy8gZHVyaW5nIGxlYXZpbmcgdHJhbnNpdGlvbnNcbiAgICAgIHZhciBjYW5Nb3ZlID0gIXJlbW92ZU9ubHk7XG5cbiAgICAgIHtcbiAgICAgICAgY2hlY2tEdXBsaWNhdGVLZXlzKG5ld0NoKTtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKG9sZFN0YXJ0SWR4IDw9IG9sZEVuZElkeCAmJiBuZXdTdGFydElkeCA8PSBuZXdFbmRJZHgpIHtcbiAgICAgICAgaWYgKGlzVW5kZWYob2xkU3RhcnRWbm9kZSkpIHtcbiAgICAgICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07IC8vIFZub2RlIGhhcyBiZWVuIG1vdmVkIGxlZnRcbiAgICAgICAgfSBlbHNlIGlmIChpc1VuZGVmKG9sZEVuZFZub2RlKSkge1xuICAgICAgICAgIG9sZEVuZFZub2RlID0gb2xkQ2hbLS1vbGRFbmRJZHhdO1xuICAgICAgICB9IGVsc2UgaWYgKHNhbWVWbm9kZShvbGRTdGFydFZub2RlLCBuZXdTdGFydFZub2RlKSkge1xuICAgICAgICAgIHBhdGNoVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBuZXdDaCwgbmV3U3RhcnRJZHgpO1xuICAgICAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTtcbiAgICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICAgIH0gZWxzZSBpZiAoc2FtZVZub2RlKG9sZEVuZFZub2RlLCBuZXdFbmRWbm9kZSkpIHtcbiAgICAgICAgICBwYXRjaFZub2RlKG9sZEVuZFZub2RlLCBuZXdFbmRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBuZXdDaCwgbmV3RW5kSWR4KTtcbiAgICAgICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICAgICAgfSBlbHNlIGlmIChzYW1lVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3RW5kVm5vZGUpKSB7IC8vIFZub2RlIG1vdmVkIHJpZ2h0XG4gICAgICAgICAgcGF0Y2hWbm9kZShvbGRTdGFydFZub2RlLCBuZXdFbmRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBuZXdDaCwgbmV3RW5kSWR4KTtcbiAgICAgICAgICBjYW5Nb3ZlICYmIG5vZGVPcHMuaW5zZXJ0QmVmb3JlKHBhcmVudEVsbSwgb2xkU3RhcnRWbm9kZS5lbG0sIG5vZGVPcHMubmV4dFNpYmxpbmcob2xkRW5kVm5vZGUuZWxtKSk7XG4gICAgICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdO1xuICAgICAgICAgIG5ld0VuZFZub2RlID0gbmV3Q2hbLS1uZXdFbmRJZHhdO1xuICAgICAgICB9IGVsc2UgaWYgKHNhbWVWbm9kZShvbGRFbmRWbm9kZSwgbmV3U3RhcnRWbm9kZSkpIHsgLy8gVm5vZGUgbW92ZWQgbGVmdFxuICAgICAgICAgIHBhdGNoVm5vZGUob2xkRW5kVm5vZGUsIG5ld1N0YXJ0Vm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgbmV3Q2gsIG5ld1N0YXJ0SWR4KTtcbiAgICAgICAgICBjYW5Nb3ZlICYmIG5vZGVPcHMuaW5zZXJ0QmVmb3JlKHBhcmVudEVsbSwgb2xkRW5kVm5vZGUuZWxtLCBvbGRTdGFydFZub2RlLmVsbSk7XG4gICAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChpc1VuZGVmKG9sZEtleVRvSWR4KSkgeyBvbGRLZXlUb0lkeCA9IGNyZWF0ZUtleVRvT2xkSWR4KG9sZENoLCBvbGRTdGFydElkeCwgb2xkRW5kSWR4KTsgfVxuICAgICAgICAgIGlkeEluT2xkID0gaXNEZWYobmV3U3RhcnRWbm9kZS5rZXkpXG4gICAgICAgICAgICA/IG9sZEtleVRvSWR4W25ld1N0YXJ0Vm5vZGUua2V5XVxuICAgICAgICAgICAgOiBmaW5kSWR4SW5PbGQobmV3U3RhcnRWbm9kZSwgb2xkQ2gsIG9sZFN0YXJ0SWR4LCBvbGRFbmRJZHgpO1xuICAgICAgICAgIGlmIChpc1VuZGVmKGlkeEluT2xkKSkgeyAvLyBOZXcgZWxlbWVudFxuICAgICAgICAgICAgY3JlYXRlRWxtKG5ld1N0YXJ0Vm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgcGFyZW50RWxtLCBvbGRTdGFydFZub2RlLmVsbSwgZmFsc2UsIG5ld0NoLCBuZXdTdGFydElkeCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZub2RlVG9Nb3ZlID0gb2xkQ2hbaWR4SW5PbGRdO1xuICAgICAgICAgICAgaWYgKHNhbWVWbm9kZSh2bm9kZVRvTW92ZSwgbmV3U3RhcnRWbm9kZSkpIHtcbiAgICAgICAgICAgICAgcGF0Y2hWbm9kZSh2bm9kZVRvTW92ZSwgbmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBuZXdDaCwgbmV3U3RhcnRJZHgpO1xuICAgICAgICAgICAgICBvbGRDaFtpZHhJbk9sZF0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgIGNhbk1vdmUgJiYgbm9kZU9wcy5pbnNlcnRCZWZvcmUocGFyZW50RWxtLCB2bm9kZVRvTW92ZS5lbG0sIG9sZFN0YXJ0Vm5vZGUuZWxtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIHNhbWUga2V5IGJ1dCBkaWZmZXJlbnQgZWxlbWVudC4gdHJlYXQgYXMgbmV3IGVsZW1lbnRcbiAgICAgICAgICAgICAgY3JlYXRlRWxtKG5ld1N0YXJ0Vm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgcGFyZW50RWxtLCBvbGRTdGFydFZub2RlLmVsbSwgZmFsc2UsIG5ld0NoLCBuZXdTdGFydElkeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG9sZFN0YXJ0SWR4ID4gb2xkRW5kSWR4KSB7XG4gICAgICAgIHJlZkVsbSA9IGlzVW5kZWYobmV3Q2hbbmV3RW5kSWR4ICsgMV0pID8gbnVsbCA6IG5ld0NoW25ld0VuZElkeCArIDFdLmVsbTtcbiAgICAgICAgYWRkVm5vZGVzKHBhcmVudEVsbSwgcmVmRWxtLCBuZXdDaCwgbmV3U3RhcnRJZHgsIG5ld0VuZElkeCwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgIH0gZWxzZSBpZiAobmV3U3RhcnRJZHggPiBuZXdFbmRJZHgpIHtcbiAgICAgICAgcmVtb3ZlVm5vZGVzKG9sZENoLCBvbGRTdGFydElkeCwgb2xkRW5kSWR4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0R1cGxpY2F0ZUtleXMgKGNoaWxkcmVuKSB7XG4gICAgICB2YXIgc2VlbktleXMgPSB7fTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHZub2RlID0gY2hpbGRyZW5baV07XG4gICAgICAgIHZhciBrZXkgPSB2bm9kZS5rZXk7XG4gICAgICAgIGlmIChpc0RlZihrZXkpKSB7XG4gICAgICAgICAgaWYgKHNlZW5LZXlzW2tleV0pIHtcbiAgICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICAgIChcIkR1cGxpY2F0ZSBrZXlzIGRldGVjdGVkOiAnXCIgKyBrZXkgKyBcIicuIFRoaXMgbWF5IGNhdXNlIGFuIHVwZGF0ZSBlcnJvci5cIiksXG4gICAgICAgICAgICAgIHZub2RlLmNvbnRleHRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlZW5LZXlzW2tleV0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbmRJZHhJbk9sZCAobm9kZSwgb2xkQ2gsIHN0YXJ0LCBlbmQpIHtcbiAgICAgIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgIHZhciBjID0gb2xkQ2hbaV07XG4gICAgICAgIGlmIChpc0RlZihjKSAmJiBzYW1lVm5vZGUobm9kZSwgYykpIHsgcmV0dXJuIGkgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhdGNoVm5vZGUgKFxuICAgICAgb2xkVm5vZGUsXG4gICAgICB2bm9kZSxcbiAgICAgIGluc2VydGVkVm5vZGVRdWV1ZSxcbiAgICAgIG93bmVyQXJyYXksXG4gICAgICBpbmRleCxcbiAgICAgIHJlbW92ZU9ubHlcbiAgICApIHtcbiAgICAgIGlmIChvbGRWbm9kZSA9PT0gdm5vZGUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0RlZih2bm9kZS5lbG0pICYmIGlzRGVmKG93bmVyQXJyYXkpKSB7XG4gICAgICAgIC8vIGNsb25lIHJldXNlZCB2bm9kZVxuICAgICAgICB2bm9kZSA9IG93bmVyQXJyYXlbaW5kZXhdID0gY2xvbmVWTm9kZSh2bm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBlbG0gPSB2bm9kZS5lbG0gPSBvbGRWbm9kZS5lbG07XG5cbiAgICAgIGlmIChpc1RydWUob2xkVm5vZGUuaXNBc3luY1BsYWNlaG9sZGVyKSkge1xuICAgICAgICBpZiAoaXNEZWYodm5vZGUuYXN5bmNGYWN0b3J5LnJlc29sdmVkKSkge1xuICAgICAgICAgIGh5ZHJhdGUob2xkVm5vZGUuZWxtLCB2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2bm9kZS5pc0FzeW5jUGxhY2Vob2xkZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyByZXVzZSBlbGVtZW50IGZvciBzdGF0aWMgdHJlZXMuXG4gICAgICAvLyBub3RlIHdlIG9ubHkgZG8gdGhpcyBpZiB0aGUgdm5vZGUgaXMgY2xvbmVkIC1cbiAgICAgIC8vIGlmIHRoZSBuZXcgbm9kZSBpcyBub3QgY2xvbmVkIGl0IG1lYW5zIHRoZSByZW5kZXIgZnVuY3Rpb25zIGhhdmUgYmVlblxuICAgICAgLy8gcmVzZXQgYnkgdGhlIGhvdC1yZWxvYWQtYXBpIGFuZCB3ZSBuZWVkIHRvIGRvIGEgcHJvcGVyIHJlLXJlbmRlci5cbiAgICAgIGlmIChpc1RydWUodm5vZGUuaXNTdGF0aWMpICYmXG4gICAgICAgIGlzVHJ1ZShvbGRWbm9kZS5pc1N0YXRpYykgJiZcbiAgICAgICAgdm5vZGUua2V5ID09PSBvbGRWbm9kZS5rZXkgJiZcbiAgICAgICAgKGlzVHJ1ZSh2bm9kZS5pc0Nsb25lZCkgfHwgaXNUcnVlKHZub2RlLmlzT25jZSkpXG4gICAgICApIHtcbiAgICAgICAgdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgPSBvbGRWbm9kZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHZhciBpO1xuICAgICAgdmFyIGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgICAgaWYgKGlzRGVmKGRhdGEpICYmIGlzRGVmKGkgPSBkYXRhLmhvb2spICYmIGlzRGVmKGkgPSBpLnByZXBhdGNoKSkge1xuICAgICAgICBpKG9sZFZub2RlLCB2bm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBvbGRDaCA9IG9sZFZub2RlLmNoaWxkcmVuO1xuICAgICAgdmFyIGNoID0gdm5vZGUuY2hpbGRyZW47XG4gICAgICBpZiAoaXNEZWYoZGF0YSkgJiYgaXNQYXRjaGFibGUodm5vZGUpKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjYnMudXBkYXRlLmxlbmd0aDsgKytpKSB7IGNicy51cGRhdGVbaV0ob2xkVm5vZGUsIHZub2RlKTsgfVxuICAgICAgICBpZiAoaXNEZWYoaSA9IGRhdGEuaG9vaykgJiYgaXNEZWYoaSA9IGkudXBkYXRlKSkgeyBpKG9sZFZub2RlLCB2bm9kZSk7IH1cbiAgICAgIH1cbiAgICAgIGlmIChpc1VuZGVmKHZub2RlLnRleHQpKSB7XG4gICAgICAgIGlmIChpc0RlZihvbGRDaCkgJiYgaXNEZWYoY2gpKSB7XG4gICAgICAgICAgaWYgKG9sZENoICE9PSBjaCkgeyB1cGRhdGVDaGlsZHJlbihlbG0sIG9sZENoLCBjaCwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCByZW1vdmVPbmx5KTsgfVxuICAgICAgICB9IGVsc2UgaWYgKGlzRGVmKGNoKSkge1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNoZWNrRHVwbGljYXRlS2V5cyhjaCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc0RlZihvbGRWbm9kZS50ZXh0KSkgeyBub2RlT3BzLnNldFRleHRDb250ZW50KGVsbSwgJycpOyB9XG4gICAgICAgICAgYWRkVm5vZGVzKGVsbSwgbnVsbCwgY2gsIDAsIGNoLmxlbmd0aCAtIDEsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNEZWYob2xkQ2gpKSB7XG4gICAgICAgICAgcmVtb3ZlVm5vZGVzKG9sZENoLCAwLCBvbGRDaC5sZW5ndGggLSAxKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0RlZihvbGRWbm9kZS50ZXh0KSkge1xuICAgICAgICAgIG5vZGVPcHMuc2V0VGV4dENvbnRlbnQoZWxtLCAnJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAob2xkVm5vZGUudGV4dCAhPT0gdm5vZGUudGV4dCkge1xuICAgICAgICBub2RlT3BzLnNldFRleHRDb250ZW50KGVsbSwgdm5vZGUudGV4dCk7XG4gICAgICB9XG4gICAgICBpZiAoaXNEZWYoZGF0YSkpIHtcbiAgICAgICAgaWYgKGlzRGVmKGkgPSBkYXRhLmhvb2spICYmIGlzRGVmKGkgPSBpLnBvc3RwYXRjaCkpIHsgaShvbGRWbm9kZSwgdm5vZGUpOyB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW52b2tlSW5zZXJ0SG9vayAodm5vZGUsIHF1ZXVlLCBpbml0aWFsKSB7XG4gICAgICAvLyBkZWxheSBpbnNlcnQgaG9va3MgZm9yIGNvbXBvbmVudCByb290IG5vZGVzLCBpbnZva2UgdGhlbSBhZnRlciB0aGVcbiAgICAgIC8vIGVsZW1lbnQgaXMgcmVhbGx5IGluc2VydGVkXG4gICAgICBpZiAoaXNUcnVlKGluaXRpYWwpICYmIGlzRGVmKHZub2RlLnBhcmVudCkpIHtcbiAgICAgICAgdm5vZGUucGFyZW50LmRhdGEucGVuZGluZ0luc2VydCA9IHF1ZXVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIHF1ZXVlW2ldLmRhdGEuaG9vay5pbnNlcnQocXVldWVbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGh5ZHJhdGlvbkJhaWxlZCA9IGZhbHNlO1xuICAgIC8vIGxpc3Qgb2YgbW9kdWxlcyB0aGF0IGNhbiBza2lwIGNyZWF0ZSBob29rIGR1cmluZyBoeWRyYXRpb24gYmVjYXVzZSB0aGV5XG4gICAgLy8gYXJlIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIGNsaWVudCBvciBoYXMgbm8gbmVlZCBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICAvLyBOb3RlOiBzdHlsZSBpcyBleGNsdWRlZCBiZWNhdXNlIGl0IHJlbGllcyBvbiBpbml0aWFsIGNsb25lIGZvciBmdXR1cmVcbiAgICAvLyBkZWVwIHVwZGF0ZXMgKCM3MDYzKS5cbiAgICB2YXIgaXNSZW5kZXJlZE1vZHVsZSA9IG1ha2VNYXAoJ2F0dHJzLGNsYXNzLHN0YXRpY0NsYXNzLHN0YXRpY1N0eWxlLGtleScpO1xuXG4gICAgLy8gTm90ZTogdGhpcyBpcyBhIGJyb3dzZXItb25seSBmdW5jdGlvbiBzbyB3ZSBjYW4gYXNzdW1lIGVsbXMgYXJlIERPTSBub2Rlcy5cbiAgICBmdW5jdGlvbiBoeWRyYXRlIChlbG0sIHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIGluVlByZSkge1xuICAgICAgdmFyIGk7XG4gICAgICB2YXIgdGFnID0gdm5vZGUudGFnO1xuICAgICAgdmFyIGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgICAgdmFyIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW47XG4gICAgICBpblZQcmUgPSBpblZQcmUgfHwgKGRhdGEgJiYgZGF0YS5wcmUpO1xuICAgICAgdm5vZGUuZWxtID0gZWxtO1xuXG4gICAgICBpZiAoaXNUcnVlKHZub2RlLmlzQ29tbWVudCkgJiYgaXNEZWYodm5vZGUuYXN5bmNGYWN0b3J5KSkge1xuICAgICAgICB2bm9kZS5pc0FzeW5jUGxhY2Vob2xkZXIgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgLy8gYXNzZXJ0IG5vZGUgbWF0Y2hcbiAgICAgIHtcbiAgICAgICAgaWYgKCFhc3NlcnROb2RlTWF0Y2goZWxtLCB2bm9kZSwgaW5WUHJlKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXNEZWYoZGF0YSkpIHtcbiAgICAgICAgaWYgKGlzRGVmKGkgPSBkYXRhLmhvb2spICYmIGlzRGVmKGkgPSBpLmluaXQpKSB7IGkodm5vZGUsIHRydWUgLyogaHlkcmF0aW5nICovKTsgfVxuICAgICAgICBpZiAoaXNEZWYoaSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlKSkge1xuICAgICAgICAgIC8vIGNoaWxkIGNvbXBvbmVudC4gaXQgc2hvdWxkIGhhdmUgaHlkcmF0ZWQgaXRzIG93biB0cmVlLlxuICAgICAgICAgIGluaXRDb21wb25lbnQodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlzRGVmKHRhZykpIHtcbiAgICAgICAgaWYgKGlzRGVmKGNoaWxkcmVuKSkge1xuICAgICAgICAgIC8vIGVtcHR5IGVsZW1lbnQsIGFsbG93IGNsaWVudCB0byBwaWNrIHVwIGFuZCBwb3B1bGF0ZSBjaGlsZHJlblxuICAgICAgICAgIGlmICghZWxtLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgY3JlYXRlQ2hpbGRyZW4odm5vZGUsIGNoaWxkcmVuLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB2LWh0bWwgYW5kIGRvbVByb3BzOiBpbm5lckhUTUxcbiAgICAgICAgICAgIGlmIChpc0RlZihpID0gZGF0YSkgJiYgaXNEZWYoaSA9IGkuZG9tUHJvcHMpICYmIGlzRGVmKGkgPSBpLmlubmVySFRNTCkpIHtcbiAgICAgICAgICAgICAgaWYgKGkgIT09IGVsbS5pbm5lckhUTUwpIHtcbiAgICAgICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICAgICAgICAhaHlkcmF0aW9uQmFpbGVkXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICBoeWRyYXRpb25CYWlsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdQYXJlbnQ6ICcsIGVsbSk7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3NlcnZlciBpbm5lckhUTUw6ICcsIGkpO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdjbGllbnQgaW5uZXJIVE1MOiAnLCBlbG0uaW5uZXJIVE1MKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIGl0ZXJhdGUgYW5kIGNvbXBhcmUgY2hpbGRyZW4gbGlzdHNcbiAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICB2YXIgY2hpbGROb2RlID0gZWxtLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICAgIGZvciAodmFyIGkkMSA9IDA7IGkkMSA8IGNoaWxkcmVuLmxlbmd0aDsgaSQxKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNoaWxkTm9kZSB8fCAhaHlkcmF0ZShjaGlsZE5vZGUsIGNoaWxkcmVuW2kkMV0sIGluc2VydGVkVm5vZGVRdWV1ZSwgaW5WUHJlKSkge1xuICAgICAgICAgICAgICAgICAgY2hpbGRyZW5NYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hpbGROb2RlID0gY2hpbGROb2RlLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIGlmIGNoaWxkTm9kZSBpcyBub3QgbnVsbCwgaXQgbWVhbnMgdGhlIGFjdHVhbCBjaGlsZE5vZGVzIGxpc3QgaXNcbiAgICAgICAgICAgICAgLy8gbG9uZ2VyIHRoYW4gdGhlIHZpcnR1YWwgY2hpbGRyZW4gbGlzdC5cbiAgICAgICAgICAgICAgaWYgKCFjaGlsZHJlbk1hdGNoIHx8IGNoaWxkTm9kZSkge1xuICAgICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgICAgICAgICFoeWRyYXRpb25CYWlsZWRcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIGh5ZHJhdGlvbkJhaWxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1BhcmVudDogJywgZWxtKTtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignTWlzbWF0Y2hpbmcgY2hpbGROb2RlcyB2cy4gVk5vZGVzOiAnLCBlbG0uY2hpbGROb2RlcywgY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEZWYoZGF0YSkpIHtcbiAgICAgICAgICB2YXIgZnVsbEludm9rZSA9IGZhbHNlO1xuICAgICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoIWlzUmVuZGVyZWRNb2R1bGUoa2V5KSkge1xuICAgICAgICAgICAgICBmdWxsSW52b2tlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgaW52b2tlQ3JlYXRlSG9va3Modm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghZnVsbEludm9rZSAmJiBkYXRhWydjbGFzcyddKSB7XG4gICAgICAgICAgICAvLyBlbnN1cmUgY29sbGVjdGluZyBkZXBzIGZvciBkZWVwIGNsYXNzIGJpbmRpbmdzIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgICAgICAgICAgdHJhdmVyc2UoZGF0YVsnY2xhc3MnXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVsbS5kYXRhICE9PSB2bm9kZS50ZXh0KSB7XG4gICAgICAgIGVsbS5kYXRhID0gdm5vZGUudGV4dDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXNzZXJ0Tm9kZU1hdGNoIChub2RlLCB2bm9kZSwgaW5WUHJlKSB7XG4gICAgICBpZiAoaXNEZWYodm5vZGUudGFnKSkge1xuICAgICAgICByZXR1cm4gdm5vZGUudGFnLmluZGV4T2YoJ3Z1ZS1jb21wb25lbnQnKSA9PT0gMCB8fCAoXG4gICAgICAgICAgIWlzVW5rbm93bkVsZW1lbnQkJDEodm5vZGUsIGluVlByZSkgJiZcbiAgICAgICAgICB2bm9kZS50YWcudG9Mb3dlckNhc2UoKSA9PT0gKG5vZGUudGFnTmFtZSAmJiBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5vZGUubm9kZVR5cGUgPT09ICh2bm9kZS5pc0NvbW1lbnQgPyA4IDogMylcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gcGF0Y2ggKG9sZFZub2RlLCB2bm9kZSwgaHlkcmF0aW5nLCByZW1vdmVPbmx5KSB7XG4gICAgICBpZiAoaXNVbmRlZih2bm9kZSkpIHtcbiAgICAgICAgaWYgKGlzRGVmKG9sZFZub2RlKSkgeyBpbnZva2VEZXN0cm95SG9vayhvbGRWbm9kZSk7IH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHZhciBpc0luaXRpYWxQYXRjaCA9IGZhbHNlO1xuICAgICAgdmFyIGluc2VydGVkVm5vZGVRdWV1ZSA9IFtdO1xuXG4gICAgICBpZiAoaXNVbmRlZihvbGRWbm9kZSkpIHtcbiAgICAgICAgLy8gZW1wdHkgbW91bnQgKGxpa2VseSBhcyBjb21wb25lbnQpLCBjcmVhdGUgbmV3IHJvb3QgZWxlbWVudFxuICAgICAgICBpc0luaXRpYWxQYXRjaCA9IHRydWU7XG4gICAgICAgIGNyZWF0ZUVsbSh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBpc1JlYWxFbGVtZW50ID0gaXNEZWYob2xkVm5vZGUubm9kZVR5cGUpO1xuICAgICAgICBpZiAoIWlzUmVhbEVsZW1lbnQgJiYgc2FtZVZub2RlKG9sZFZub2RlLCB2bm9kZSkpIHtcbiAgICAgICAgICAvLyBwYXRjaCBleGlzdGluZyByb290IG5vZGVcbiAgICAgICAgICBwYXRjaFZub2RlKG9sZFZub2RlLCB2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBudWxsLCBudWxsLCByZW1vdmVPbmx5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaXNSZWFsRWxlbWVudCkge1xuICAgICAgICAgICAgLy8gbW91bnRpbmcgdG8gYSByZWFsIGVsZW1lbnRcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoaXMgaXMgc2VydmVyLXJlbmRlcmVkIGNvbnRlbnQgYW5kIGlmIHdlIGNhbiBwZXJmb3JtXG4gICAgICAgICAgICAvLyBhIHN1Y2Nlc3NmdWwgaHlkcmF0aW9uLlxuICAgICAgICAgICAgaWYgKG9sZFZub2RlLm5vZGVUeXBlID09PSAxICYmIG9sZFZub2RlLmhhc0F0dHJpYnV0ZShTU1JfQVRUUikpIHtcbiAgICAgICAgICAgICAgb2xkVm5vZGUucmVtb3ZlQXR0cmlidXRlKFNTUl9BVFRSKTtcbiAgICAgICAgICAgICAgaHlkcmF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1RydWUoaHlkcmF0aW5nKSkge1xuICAgICAgICAgICAgICBpZiAoaHlkcmF0ZShvbGRWbm9kZSwgdm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSkpIHtcbiAgICAgICAgICAgICAgICBpbnZva2VJbnNlcnRIb29rKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvbGRWbm9kZVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICAgICAgICAnVGhlIGNsaWVudC1zaWRlIHJlbmRlcmVkIHZpcnR1YWwgRE9NIHRyZWUgaXMgbm90IG1hdGNoaW5nICcgK1xuICAgICAgICAgICAgICAgICAgJ3NlcnZlci1yZW5kZXJlZCBjb250ZW50LiBUaGlzIGlzIGxpa2VseSBjYXVzZWQgYnkgaW5jb3JyZWN0ICcgK1xuICAgICAgICAgICAgICAgICAgJ0hUTUwgbWFya3VwLCBmb3IgZXhhbXBsZSBuZXN0aW5nIGJsb2NrLWxldmVsIGVsZW1lbnRzIGluc2lkZSAnICtcbiAgICAgICAgICAgICAgICAgICc8cD4sIG9yIG1pc3NpbmcgPHRib2R5Pi4gQmFpbGluZyBoeWRyYXRpb24gYW5kIHBlcmZvcm1pbmcgJyArXG4gICAgICAgICAgICAgICAgICAnZnVsbCBjbGllbnQtc2lkZSByZW5kZXIuJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGVpdGhlciBub3Qgc2VydmVyLXJlbmRlcmVkLCBvciBoeWRyYXRpb24gZmFpbGVkLlxuICAgICAgICAgICAgLy8gY3JlYXRlIGFuIGVtcHR5IG5vZGUgYW5kIHJlcGxhY2UgaXRcbiAgICAgICAgICAgIG9sZFZub2RlID0gZW1wdHlOb2RlQXQob2xkVm5vZGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHJlcGxhY2luZyBleGlzdGluZyBlbGVtZW50XG4gICAgICAgICAgdmFyIG9sZEVsbSA9IG9sZFZub2RlLmVsbTtcbiAgICAgICAgICB2YXIgcGFyZW50RWxtID0gbm9kZU9wcy5wYXJlbnROb2RlKG9sZEVsbSk7XG5cbiAgICAgICAgICAvLyBjcmVhdGUgbmV3IG5vZGVcbiAgICAgICAgICBjcmVhdGVFbG0oXG4gICAgICAgICAgICB2bm9kZSxcbiAgICAgICAgICAgIGluc2VydGVkVm5vZGVRdWV1ZSxcbiAgICAgICAgICAgIC8vIGV4dHJlbWVseSByYXJlIGVkZ2UgY2FzZTogZG8gbm90IGluc2VydCBpZiBvbGQgZWxlbWVudCBpcyBpbiBhXG4gICAgICAgICAgICAvLyBsZWF2aW5nIHRyYW5zaXRpb24uIE9ubHkgaGFwcGVucyB3aGVuIGNvbWJpbmluZyB0cmFuc2l0aW9uICtcbiAgICAgICAgICAgIC8vIGtlZXAtYWxpdmUgKyBIT0NzLiAoIzQ1OTApXG4gICAgICAgICAgICBvbGRFbG0uX2xlYXZlQ2IgPyBudWxsIDogcGFyZW50RWxtLFxuICAgICAgICAgICAgbm9kZU9wcy5uZXh0U2libGluZyhvbGRFbG0pXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIC8vIHVwZGF0ZSBwYXJlbnQgcGxhY2Vob2xkZXIgbm9kZSBlbGVtZW50LCByZWN1cnNpdmVseVxuICAgICAgICAgIGlmIChpc0RlZih2bm9kZS5wYXJlbnQpKSB7XG4gICAgICAgICAgICB2YXIgYW5jZXN0b3IgPSB2bm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICB2YXIgcGF0Y2hhYmxlID0gaXNQYXRjaGFibGUodm5vZGUpO1xuICAgICAgICAgICAgd2hpbGUgKGFuY2VzdG9yKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2JzLmRlc3Ryb3kubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBjYnMuZGVzdHJveVtpXShhbmNlc3Rvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYW5jZXN0b3IuZWxtID0gdm5vZGUuZWxtO1xuICAgICAgICAgICAgICBpZiAocGF0Y2hhYmxlKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSQxID0gMDsgaSQxIDwgY2JzLmNyZWF0ZS5sZW5ndGg7ICsraSQxKSB7XG4gICAgICAgICAgICAgICAgICBjYnMuY3JlYXRlW2kkMV0oZW1wdHlOb2RlLCBhbmNlc3Rvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICM2NTEzXG4gICAgICAgICAgICAgICAgLy8gaW52b2tlIGluc2VydCBob29rcyB0aGF0IG1heSBoYXZlIGJlZW4gbWVyZ2VkIGJ5IGNyZWF0ZSBob29rcy5cbiAgICAgICAgICAgICAgICAvLyBlLmcuIGZvciBkaXJlY3RpdmVzIHRoYXQgdXNlcyB0aGUgXCJpbnNlcnRlZFwiIGhvb2suXG4gICAgICAgICAgICAgICAgdmFyIGluc2VydCA9IGFuY2VzdG9yLmRhdGEuaG9vay5pbnNlcnQ7XG4gICAgICAgICAgICAgICAgaWYgKGluc2VydC5tZXJnZWQpIHtcbiAgICAgICAgICAgICAgICAgIC8vIHN0YXJ0IGF0IGluZGV4IDEgdG8gYXZvaWQgcmUtaW52b2tpbmcgY29tcG9uZW50IG1vdW50ZWQgaG9va1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSQyID0gMTsgaSQyIDwgaW5zZXJ0LmZucy5sZW5ndGg7IGkkMisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydC5mbnNbaSQyXSgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWdpc3RlclJlZihhbmNlc3Rvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gZGVzdHJveSBvbGQgbm9kZVxuICAgICAgICAgIGlmIChpc0RlZihwYXJlbnRFbG0pKSB7XG4gICAgICAgICAgICByZW1vdmVWbm9kZXMoW29sZFZub2RlXSwgMCwgMCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc0RlZihvbGRWbm9kZS50YWcpKSB7XG4gICAgICAgICAgICBpbnZva2VEZXN0cm95SG9vayhvbGRWbm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGludm9rZUluc2VydEhvb2sodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgaXNJbml0aWFsUGF0Y2gpO1xuICAgICAgcmV0dXJuIHZub2RlLmVsbVxuICAgIH1cbiAgfVxuXG4gIC8qICAqL1xuXG4gIHZhciBkaXJlY3RpdmVzID0ge1xuICAgIGNyZWF0ZTogdXBkYXRlRGlyZWN0aXZlcyxcbiAgICB1cGRhdGU6IHVwZGF0ZURpcmVjdGl2ZXMsXG4gICAgZGVzdHJveTogZnVuY3Rpb24gdW5iaW5kRGlyZWN0aXZlcyAodm5vZGUpIHtcbiAgICAgIHVwZGF0ZURpcmVjdGl2ZXModm5vZGUsIGVtcHR5Tm9kZSk7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZURpcmVjdGl2ZXMgKG9sZFZub2RlLCB2bm9kZSkge1xuICAgIGlmIChvbGRWbm9kZS5kYXRhLmRpcmVjdGl2ZXMgfHwgdm5vZGUuZGF0YS5kaXJlY3RpdmVzKSB7XG4gICAgICBfdXBkYXRlKG9sZFZub2RlLCB2bm9kZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX3VwZGF0ZSAob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgdmFyIGlzQ3JlYXRlID0gb2xkVm5vZGUgPT09IGVtcHR5Tm9kZTtcbiAgICB2YXIgaXNEZXN0cm95ID0gdm5vZGUgPT09IGVtcHR5Tm9kZTtcbiAgICB2YXIgb2xkRGlycyA9IG5vcm1hbGl6ZURpcmVjdGl2ZXMkMShvbGRWbm9kZS5kYXRhLmRpcmVjdGl2ZXMsIG9sZFZub2RlLmNvbnRleHQpO1xuICAgIHZhciBuZXdEaXJzID0gbm9ybWFsaXplRGlyZWN0aXZlcyQxKHZub2RlLmRhdGEuZGlyZWN0aXZlcywgdm5vZGUuY29udGV4dCk7XG5cbiAgICB2YXIgZGlyc1dpdGhJbnNlcnQgPSBbXTtcbiAgICB2YXIgZGlyc1dpdGhQb3N0cGF0Y2ggPSBbXTtcblxuICAgIHZhciBrZXksIG9sZERpciwgZGlyO1xuICAgIGZvciAoa2V5IGluIG5ld0RpcnMpIHtcbiAgICAgIG9sZERpciA9IG9sZERpcnNba2V5XTtcbiAgICAgIGRpciA9IG5ld0RpcnNba2V5XTtcbiAgICAgIGlmICghb2xkRGlyKSB7XG4gICAgICAgIC8vIG5ldyBkaXJlY3RpdmUsIGJpbmRcbiAgICAgICAgY2FsbEhvb2skMShkaXIsICdiaW5kJywgdm5vZGUsIG9sZFZub2RlKTtcbiAgICAgICAgaWYgKGRpci5kZWYgJiYgZGlyLmRlZi5pbnNlcnRlZCkge1xuICAgICAgICAgIGRpcnNXaXRoSW5zZXJ0LnB1c2goZGlyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZXhpc3RpbmcgZGlyZWN0aXZlLCB1cGRhdGVcbiAgICAgICAgZGlyLm9sZFZhbHVlID0gb2xkRGlyLnZhbHVlO1xuICAgICAgICBkaXIub2xkQXJnID0gb2xkRGlyLmFyZztcbiAgICAgICAgY2FsbEhvb2skMShkaXIsICd1cGRhdGUnLCB2bm9kZSwgb2xkVm5vZGUpO1xuICAgICAgICBpZiAoZGlyLmRlZiAmJiBkaXIuZGVmLmNvbXBvbmVudFVwZGF0ZWQpIHtcbiAgICAgICAgICBkaXJzV2l0aFBvc3RwYXRjaC5wdXNoKGRpcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGlyc1dpdGhJbnNlcnQubGVuZ3RoKSB7XG4gICAgICB2YXIgY2FsbEluc2VydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXJzV2l0aEluc2VydC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNhbGxIb29rJDEoZGlyc1dpdGhJbnNlcnRbaV0sICdpbnNlcnRlZCcsIHZub2RlLCBvbGRWbm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBpZiAoaXNDcmVhdGUpIHtcbiAgICAgICAgbWVyZ2VWTm9kZUhvb2sodm5vZGUsICdpbnNlcnQnLCBjYWxsSW5zZXJ0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxJbnNlcnQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGlyc1dpdGhQb3N0cGF0Y2gubGVuZ3RoKSB7XG4gICAgICBtZXJnZVZOb2RlSG9vayh2bm9kZSwgJ3Bvc3RwYXRjaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXJzV2l0aFBvc3RwYXRjaC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNhbGxIb29rJDEoZGlyc1dpdGhQb3N0cGF0Y2hbaV0sICdjb21wb25lbnRVcGRhdGVkJywgdm5vZGUsIG9sZFZub2RlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFpc0NyZWF0ZSkge1xuICAgICAgZm9yIChrZXkgaW4gb2xkRGlycykge1xuICAgICAgICBpZiAoIW5ld0RpcnNba2V5XSkge1xuICAgICAgICAgIC8vIG5vIGxvbmdlciBwcmVzZW50LCB1bmJpbmRcbiAgICAgICAgICBjYWxsSG9vayQxKG9sZERpcnNba2V5XSwgJ3VuYmluZCcsIG9sZFZub2RlLCBvbGRWbm9kZSwgaXNEZXN0cm95KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBlbXB0eU1vZGlmaWVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplRGlyZWN0aXZlcyQxIChcbiAgICBkaXJzLFxuICAgIHZtXG4gICkge1xuICAgIHZhciByZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIGlmICghZGlycykge1xuICAgICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgICByZXR1cm4gcmVzXG4gICAgfVxuICAgIHZhciBpLCBkaXI7XG4gICAgZm9yIChpID0gMDsgaSA8IGRpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRpciA9IGRpcnNbaV07XG4gICAgICBpZiAoIWRpci5tb2RpZmllcnMpIHtcbiAgICAgICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgICAgIGRpci5tb2RpZmllcnMgPSBlbXB0eU1vZGlmaWVycztcbiAgICAgIH1cbiAgICAgIHJlc1tnZXRSYXdEaXJOYW1lKGRpcildID0gZGlyO1xuICAgICAgZGlyLmRlZiA9IHJlc29sdmVBc3NldCh2bS4kb3B0aW9ucywgJ2RpcmVjdGl2ZXMnLCBkaXIubmFtZSwgdHJ1ZSk7XG4gICAgfVxuICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgIHJldHVybiByZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJhd0Rpck5hbWUgKGRpcikge1xuICAgIHJldHVybiBkaXIucmF3TmFtZSB8fCAoKGRpci5uYW1lKSArIFwiLlwiICsgKE9iamVjdC5rZXlzKGRpci5tb2RpZmllcnMgfHwge30pLmpvaW4oJy4nKSkpXG4gIH1cblxuICBmdW5jdGlvbiBjYWxsSG9vayQxIChkaXIsIGhvb2ssIHZub2RlLCBvbGRWbm9kZSwgaXNEZXN0cm95KSB7XG4gICAgdmFyIGZuID0gZGlyLmRlZiAmJiBkaXIuZGVmW2hvb2tdO1xuICAgIGlmIChmbikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4odm5vZGUuZWxtLCBkaXIsIHZub2RlLCBvbGRWbm9kZSwgaXNEZXN0cm95KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaGFuZGxlRXJyb3IoZSwgdm5vZGUuY29udGV4dCwgKFwiZGlyZWN0aXZlIFwiICsgKGRpci5uYW1lKSArIFwiIFwiICsgaG9vayArIFwiIGhvb2tcIikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBiYXNlTW9kdWxlcyA9IFtcbiAgICByZWYsXG4gICAgZGlyZWN0aXZlc1xuICBdO1xuXG4gIC8qICAqL1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZUF0dHJzIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgICB2YXIgb3B0cyA9IHZub2RlLmNvbXBvbmVudE9wdGlvbnM7XG4gICAgaWYgKGlzRGVmKG9wdHMpICYmIG9wdHMuQ3Rvci5vcHRpb25zLmluaGVyaXRBdHRycyA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoaXNVbmRlZihvbGRWbm9kZS5kYXRhLmF0dHJzKSAmJiBpc1VuZGVmKHZub2RlLmRhdGEuYXR0cnMpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIGtleSwgY3VyLCBvbGQ7XG4gICAgdmFyIGVsbSA9IHZub2RlLmVsbTtcbiAgICB2YXIgb2xkQXR0cnMgPSBvbGRWbm9kZS5kYXRhLmF0dHJzIHx8IHt9O1xuICAgIHZhciBhdHRycyA9IHZub2RlLmRhdGEuYXR0cnMgfHwge307XG4gICAgLy8gY2xvbmUgb2JzZXJ2ZWQgb2JqZWN0cywgYXMgdGhlIHVzZXIgcHJvYmFibHkgd2FudHMgdG8gbXV0YXRlIGl0XG4gICAgaWYgKGlzRGVmKGF0dHJzLl9fb2JfXykpIHtcbiAgICAgIGF0dHJzID0gdm5vZGUuZGF0YS5hdHRycyA9IGV4dGVuZCh7fSwgYXR0cnMpO1xuICAgIH1cblxuICAgIGZvciAoa2V5IGluIGF0dHJzKSB7XG4gICAgICBjdXIgPSBhdHRyc1trZXldO1xuICAgICAgb2xkID0gb2xkQXR0cnNba2V5XTtcbiAgICAgIGlmIChvbGQgIT09IGN1cikge1xuICAgICAgICBzZXRBdHRyKGVsbSwga2V5LCBjdXIpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyAjNDM5MTogaW4gSUU5LCBzZXR0aW5nIHR5cGUgY2FuIHJlc2V0IHZhbHVlIGZvciBpbnB1dFt0eXBlPXJhZGlvXVxuICAgIC8vICM2NjY2OiBJRS9FZGdlIGZvcmNlcyBwcm9ncmVzcyB2YWx1ZSBkb3duIHRvIDEgYmVmb3JlIHNldHRpbmcgYSBtYXhcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoKGlzSUUgfHwgaXNFZGdlKSAmJiBhdHRycy52YWx1ZSAhPT0gb2xkQXR0cnMudmFsdWUpIHtcbiAgICAgIHNldEF0dHIoZWxtLCAndmFsdWUnLCBhdHRycy52YWx1ZSk7XG4gICAgfVxuICAgIGZvciAoa2V5IGluIG9sZEF0dHJzKSB7XG4gICAgICBpZiAoaXNVbmRlZihhdHRyc1trZXldKSkge1xuICAgICAgICBpZiAoaXNYbGluayhrZXkpKSB7XG4gICAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZU5TKHhsaW5rTlMsIGdldFhsaW5rUHJvcChrZXkpKTtcbiAgICAgICAgfSBlbHNlIGlmICghaXNFbnVtZXJhdGVkQXR0cihrZXkpKSB7XG4gICAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0QXR0ciAoZWwsIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoZWwudGFnTmFtZS5pbmRleE9mKCctJykgPiAtMSkge1xuICAgICAgYmFzZVNldEF0dHIoZWwsIGtleSwgdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoaXNCb29sZWFuQXR0cihrZXkpKSB7XG4gICAgICAvLyBzZXQgYXR0cmlidXRlIGZvciBibGFuayB2YWx1ZVxuICAgICAgLy8gZS5nLiA8b3B0aW9uIGRpc2FibGVkPlNlbGVjdCBvbmU8L29wdGlvbj5cbiAgICAgIGlmIChpc0ZhbHN5QXR0clZhbHVlKHZhbHVlKSkge1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRlY2huaWNhbGx5IGFsbG93ZnVsbHNjcmVlbiBpcyBhIGJvb2xlYW4gYXR0cmlidXRlIGZvciA8aWZyYW1lPixcbiAgICAgICAgLy8gYnV0IEZsYXNoIGV4cGVjdHMgYSB2YWx1ZSBvZiBcInRydWVcIiB3aGVuIHVzZWQgb24gPGVtYmVkPiB0YWdcbiAgICAgICAgdmFsdWUgPSBrZXkgPT09ICdhbGxvd2Z1bGxzY3JlZW4nICYmIGVsLnRhZ05hbWUgPT09ICdFTUJFRCdcbiAgICAgICAgICA/ICd0cnVlJ1xuICAgICAgICAgIDoga2V5O1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc0VudW1lcmF0ZWRBdHRyKGtleSkpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIGNvbnZlcnRFbnVtZXJhdGVkVmFsdWUoa2V5LCB2YWx1ZSkpO1xuICAgIH0gZWxzZSBpZiAoaXNYbGluayhrZXkpKSB7XG4gICAgICBpZiAoaXNGYWxzeUF0dHJWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlTlMoeGxpbmtOUywgZ2V0WGxpbmtQcm9wKGtleSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlTlMoeGxpbmtOUywga2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhc2VTZXRBdHRyKGVsLCBrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBiYXNlU2V0QXR0ciAoZWwsIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoaXNGYWxzeUF0dHJWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAjNzEzODogSUUxMCAmIDExIGZpcmVzIGlucHV0IGV2ZW50IHdoZW4gc2V0dGluZyBwbGFjZWhvbGRlciBvblxuICAgICAgLy8gPHRleHRhcmVhPi4uLiBibG9jayB0aGUgZmlyc3QgaW5wdXQgZXZlbnQgYW5kIHJlbW92ZSB0aGUgYmxvY2tlclxuICAgICAgLy8gaW1tZWRpYXRlbHkuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmIChcbiAgICAgICAgaXNJRSAmJiAhaXNJRTkgJiZcbiAgICAgICAgZWwudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJyAmJlxuICAgICAgICBrZXkgPT09ICdwbGFjZWhvbGRlcicgJiYgdmFsdWUgIT09ICcnICYmICFlbC5fX2llcGhcbiAgICAgICkge1xuICAgICAgICB2YXIgYmxvY2tlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIGJsb2NrZXIpO1xuICAgICAgICB9O1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGJsb2NrZXIpO1xuICAgICAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICAgICAgZWwuX19pZXBoID0gdHJ1ZTsgLyogSUUgcGxhY2Vob2xkZXIgcGF0Y2hlZCAqL1xuICAgICAgfVxuICAgICAgZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBhdHRycyA9IHtcbiAgICBjcmVhdGU6IHVwZGF0ZUF0dHJzLFxuICAgIHVwZGF0ZTogdXBkYXRlQXR0cnNcbiAgfTtcblxuICAvKiAgKi9cblxuICBmdW5jdGlvbiB1cGRhdGVDbGFzcyAob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgdmFyIGVsID0gdm5vZGUuZWxtO1xuICAgIHZhciBkYXRhID0gdm5vZGUuZGF0YTtcbiAgICB2YXIgb2xkRGF0YSA9IG9sZFZub2RlLmRhdGE7XG4gICAgaWYgKFxuICAgICAgaXNVbmRlZihkYXRhLnN0YXRpY0NsYXNzKSAmJlxuICAgICAgaXNVbmRlZihkYXRhLmNsYXNzKSAmJiAoXG4gICAgICAgIGlzVW5kZWYob2xkRGF0YSkgfHwgKFxuICAgICAgICAgIGlzVW5kZWYob2xkRGF0YS5zdGF0aWNDbGFzcykgJiZcbiAgICAgICAgICBpc1VuZGVmKG9sZERhdGEuY2xhc3MpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciBjbHMgPSBnZW5DbGFzc0ZvclZub2RlKHZub2RlKTtcblxuICAgIC8vIGhhbmRsZSB0cmFuc2l0aW9uIGNsYXNzZXNcbiAgICB2YXIgdHJhbnNpdGlvbkNsYXNzID0gZWwuX3RyYW5zaXRpb25DbGFzc2VzO1xuICAgIGlmIChpc0RlZih0cmFuc2l0aW9uQ2xhc3MpKSB7XG4gICAgICBjbHMgPSBjb25jYXQoY2xzLCBzdHJpbmdpZnlDbGFzcyh0cmFuc2l0aW9uQ2xhc3MpKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgdGhlIGNsYXNzXG4gICAgaWYgKGNscyAhPT0gZWwuX3ByZXZDbGFzcykge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNscyk7XG4gICAgICBlbC5fcHJldkNsYXNzID0gY2xzO1xuICAgIH1cbiAgfVxuXG4gIHZhciBrbGFzcyA9IHtcbiAgICBjcmVhdGU6IHVwZGF0ZUNsYXNzLFxuICAgIHVwZGF0ZTogdXBkYXRlQ2xhc3NcbiAgfTtcblxuICAvKiAgKi9cblxuICB2YXIgdmFsaWREaXZpc2lvbkNoYXJSRSA9IC9bXFx3KS4rXFwtXyRcXF1dLztcblxuICBmdW5jdGlvbiBwYXJzZUZpbHRlcnMgKGV4cCkge1xuICAgIHZhciBpblNpbmdsZSA9IGZhbHNlO1xuICAgIHZhciBpbkRvdWJsZSA9IGZhbHNlO1xuICAgIHZhciBpblRlbXBsYXRlU3RyaW5nID0gZmFsc2U7XG4gICAgdmFyIGluUmVnZXggPSBmYWxzZTtcbiAgICB2YXIgY3VybHkgPSAwO1xuICAgIHZhciBzcXVhcmUgPSAwO1xuICAgIHZhciBwYXJlbiA9IDA7XG4gICAgdmFyIGxhc3RGaWx0ZXJJbmRleCA9IDA7XG4gICAgdmFyIGMsIHByZXYsIGksIGV4cHJlc3Npb24sIGZpbHRlcnM7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgZXhwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwcmV2ID0gYztcbiAgICAgIGMgPSBleHAuY2hhckNvZGVBdChpKTtcbiAgICAgIGlmIChpblNpbmdsZSkge1xuICAgICAgICBpZiAoYyA9PT0gMHgyNyAmJiBwcmV2ICE9PSAweDVDKSB7IGluU2luZ2xlID0gZmFsc2U7IH1cbiAgICAgIH0gZWxzZSBpZiAoaW5Eb3VibGUpIHtcbiAgICAgICAgaWYgKGMgPT09IDB4MjIgJiYgcHJldiAhPT0gMHg1QykgeyBpbkRvdWJsZSA9IGZhbHNlOyB9XG4gICAgICB9IGVsc2UgaWYgKGluVGVtcGxhdGVTdHJpbmcpIHtcbiAgICAgICAgaWYgKGMgPT09IDB4NjAgJiYgcHJldiAhPT0gMHg1QykgeyBpblRlbXBsYXRlU3RyaW5nID0gZmFsc2U7IH1cbiAgICAgIH0gZWxzZSBpZiAoaW5SZWdleCkge1xuICAgICAgICBpZiAoYyA9PT0gMHgyZiAmJiBwcmV2ICE9PSAweDVDKSB7IGluUmVnZXggPSBmYWxzZTsgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgYyA9PT0gMHg3QyAmJiAvLyBwaXBlXG4gICAgICAgIGV4cC5jaGFyQ29kZUF0KGkgKyAxKSAhPT0gMHg3QyAmJlxuICAgICAgICBleHAuY2hhckNvZGVBdChpIC0gMSkgIT09IDB4N0MgJiZcbiAgICAgICAgIWN1cmx5ICYmICFzcXVhcmUgJiYgIXBhcmVuXG4gICAgICApIHtcbiAgICAgICAgaWYgKGV4cHJlc3Npb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIGZpcnN0IGZpbHRlciwgZW5kIG9mIGV4cHJlc3Npb25cbiAgICAgICAgICBsYXN0RmlsdGVySW5kZXggPSBpICsgMTtcbiAgICAgICAgICBleHByZXNzaW9uID0gZXhwLnNsaWNlKDAsIGkpLnRyaW0oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwdXNoRmlsdGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXRjaCAoYykge1xuICAgICAgICAgIGNhc2UgMHgyMjogaW5Eb3VibGUgPSB0cnVlOyBicmVhayAgICAgICAgIC8vIFwiXG4gICAgICAgICAgY2FzZSAweDI3OiBpblNpbmdsZSA9IHRydWU7IGJyZWFrICAgICAgICAgLy8gJ1xuICAgICAgICAgIGNhc2UgMHg2MDogaW5UZW1wbGF0ZVN0cmluZyA9IHRydWU7IGJyZWFrIC8vIGBcbiAgICAgICAgICBjYXNlIDB4Mjg6IHBhcmVuKys7IGJyZWFrICAgICAgICAgICAgICAgICAvLyAoXG4gICAgICAgICAgY2FzZSAweDI5OiBwYXJlbi0tOyBicmVhayAgICAgICAgICAgICAgICAgLy8gKVxuICAgICAgICAgIGNhc2UgMHg1Qjogc3F1YXJlKys7IGJyZWFrICAgICAgICAgICAgICAgIC8vIFtcbiAgICAgICAgICBjYXNlIDB4NUQ6IHNxdWFyZS0tOyBicmVhayAgICAgICAgICAgICAgICAvLyBdXG4gICAgICAgICAgY2FzZSAweDdCOiBjdXJseSsrOyBicmVhayAgICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgIGNhc2UgMHg3RDogY3VybHktLTsgYnJlYWsgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYyA9PT0gMHgyZikgeyAvLyAvXG4gICAgICAgICAgdmFyIGogPSBpIC0gMTtcbiAgICAgICAgICB2YXIgcCA9ICh2b2lkIDApO1xuICAgICAgICAgIC8vIGZpbmQgZmlyc3Qgbm9uLXdoaXRlc3BhY2UgcHJldiBjaGFyXG4gICAgICAgICAgZm9yICg7IGogPj0gMDsgai0tKSB7XG4gICAgICAgICAgICBwID0gZXhwLmNoYXJBdChqKTtcbiAgICAgICAgICAgIGlmIChwICE9PSAnICcpIHsgYnJlYWsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXAgfHwgIXZhbGlkRGl2aXNpb25DaGFyUkUudGVzdChwKSkge1xuICAgICAgICAgICAgaW5SZWdleCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGV4cHJlc3Npb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXhwcmVzc2lvbiA9IGV4cC5zbGljZSgwLCBpKS50cmltKCk7XG4gICAgfSBlbHNlIGlmIChsYXN0RmlsdGVySW5kZXggIT09IDApIHtcbiAgICAgIHB1c2hGaWx0ZXIoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwdXNoRmlsdGVyICgpIHtcbiAgICAgIChmaWx0ZXJzIHx8IChmaWx0ZXJzID0gW10pKS5wdXNoKGV4cC5zbGljZShsYXN0RmlsdGVySW5kZXgsIGkpLnRyaW0oKSk7XG4gICAgICBsYXN0RmlsdGVySW5kZXggPSBpICsgMTtcbiAgICB9XG5cbiAgICBpZiAoZmlsdGVycykge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGZpbHRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZXhwcmVzc2lvbiA9IHdyYXBGaWx0ZXIoZXhwcmVzc2lvbiwgZmlsdGVyc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cHJlc3Npb25cbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXBGaWx0ZXIgKGV4cCwgZmlsdGVyKSB7XG4gICAgdmFyIGkgPSBmaWx0ZXIuaW5kZXhPZignKCcpO1xuICAgIGlmIChpIDwgMCkge1xuICAgICAgLy8gX2Y6IHJlc29sdmVGaWx0ZXJcbiAgICAgIHJldHVybiAoXCJfZihcXFwiXCIgKyBmaWx0ZXIgKyBcIlxcXCIpKFwiICsgZXhwICsgXCIpXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBuYW1lID0gZmlsdGVyLnNsaWNlKDAsIGkpO1xuICAgICAgdmFyIGFyZ3MgPSBmaWx0ZXIuc2xpY2UoaSArIDEpO1xuICAgICAgcmV0dXJuIChcIl9mKFxcXCJcIiArIG5hbWUgKyBcIlxcXCIpKFwiICsgZXhwICsgKGFyZ3MgIT09ICcpJyA/ICcsJyArIGFyZ3MgOiBhcmdzKSlcbiAgICB9XG4gIH1cblxuICAvKiAgKi9cblxuXG5cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgZnVuY3Rpb24gYmFzZVdhcm4gKG1zZywgcmFuZ2UpIHtcbiAgICBjb25zb2xlLmVycm9yKChcIltWdWUgY29tcGlsZXJdOiBcIiArIG1zZykpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuICBmdW5jdGlvbiBwbHVja01vZHVsZUZ1bmN0aW9uIChcbiAgICBtb2R1bGVzLFxuICAgIGtleVxuICApIHtcbiAgICByZXR1cm4gbW9kdWxlc1xuICAgICAgPyBtb2R1bGVzLm1hcChmdW5jdGlvbiAobSkgeyByZXR1cm4gbVtrZXldOyB9KS5maWx0ZXIoZnVuY3Rpb24gKF8pIHsgcmV0dXJuIF87IH0pXG4gICAgICA6IFtdXG4gIH1cblxuICBmdW5jdGlvbiBhZGRQcm9wIChlbCwgbmFtZSwgdmFsdWUsIHJhbmdlLCBkeW5hbWljKSB7XG4gICAgKGVsLnByb3BzIHx8IChlbC5wcm9wcyA9IFtdKSkucHVzaChyYW5nZVNldEl0ZW0oeyBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUsIGR5bmFtaWM6IGR5bmFtaWMgfSwgcmFuZ2UpKTtcbiAgICBlbC5wbGFpbiA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQXR0ciAoZWwsIG5hbWUsIHZhbHVlLCByYW5nZSwgZHluYW1pYykge1xuICAgIHZhciBhdHRycyA9IGR5bmFtaWNcbiAgICAgID8gKGVsLmR5bmFtaWNBdHRycyB8fCAoZWwuZHluYW1pY0F0dHJzID0gW10pKVxuICAgICAgOiAoZWwuYXR0cnMgfHwgKGVsLmF0dHJzID0gW10pKTtcbiAgICBhdHRycy5wdXNoKHJhbmdlU2V0SXRlbSh7IG5hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZSwgZHluYW1pYzogZHluYW1pYyB9LCByYW5nZSkpO1xuICAgIGVsLnBsYWluID0gZmFsc2U7XG4gIH1cblxuICAvLyBhZGQgYSByYXcgYXR0ciAodXNlIHRoaXMgaW4gcHJlVHJhbnNmb3JtcylcbiAgZnVuY3Rpb24gYWRkUmF3QXR0ciAoZWwsIG5hbWUsIHZhbHVlLCByYW5nZSkge1xuICAgIGVsLmF0dHJzTWFwW25hbWVdID0gdmFsdWU7XG4gICAgZWwuYXR0cnNMaXN0LnB1c2gocmFuZ2VTZXRJdGVtKHsgbmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlIH0sIHJhbmdlKSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGREaXJlY3RpdmUgKFxuICAgIGVsLFxuICAgIG5hbWUsXG4gICAgcmF3TmFtZSxcbiAgICB2YWx1ZSxcbiAgICBhcmcsXG4gICAgaXNEeW5hbWljQXJnLFxuICAgIG1vZGlmaWVycyxcbiAgICByYW5nZVxuICApIHtcbiAgICAoZWwuZGlyZWN0aXZlcyB8fCAoZWwuZGlyZWN0aXZlcyA9IFtdKSkucHVzaChyYW5nZVNldEl0ZW0oe1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIHJhd05hbWU6IHJhd05hbWUsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBhcmc6IGFyZyxcbiAgICAgIGlzRHluYW1pY0FyZzogaXNEeW5hbWljQXJnLFxuICAgICAgbW9kaWZpZXJzOiBtb2RpZmllcnNcbiAgICB9LCByYW5nZSkpO1xuICAgIGVsLnBsYWluID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBwcmVwZW5kTW9kaWZpZXJNYXJrZXIgKHN5bWJvbCwgbmFtZSwgZHluYW1pYykge1xuICAgIHJldHVybiBkeW5hbWljXG4gICAgICA/IChcIl9wKFwiICsgbmFtZSArIFwiLFxcXCJcIiArIHN5bWJvbCArIFwiXFxcIilcIilcbiAgICAgIDogc3ltYm9sICsgbmFtZSAvLyBtYXJrIHRoZSBldmVudCBhcyBjYXB0dXJlZFxuICB9XG5cbiAgZnVuY3Rpb24gYWRkSGFuZGxlciAoXG4gICAgZWwsXG4gICAgbmFtZSxcbiAgICB2YWx1ZSxcbiAgICBtb2RpZmllcnMsXG4gICAgaW1wb3J0YW50LFxuICAgIHdhcm4sXG4gICAgcmFuZ2UsXG4gICAgZHluYW1pY1xuICApIHtcbiAgICBtb2RpZmllcnMgPSBtb2RpZmllcnMgfHwgZW1wdHlPYmplY3Q7XG4gICAgLy8gd2FybiBwcmV2ZW50IGFuZCBwYXNzaXZlIG1vZGlmaWVyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKFxuICAgICAgd2FybiAmJlxuICAgICAgbW9kaWZpZXJzLnByZXZlbnQgJiYgbW9kaWZpZXJzLnBhc3NpdmVcbiAgICApIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdwYXNzaXZlIGFuZCBwcmV2ZW50IGNhblxcJ3QgYmUgdXNlZCB0b2dldGhlci4gJyArXG4gICAgICAgICdQYXNzaXZlIGhhbmRsZXIgY2FuXFwndCBwcmV2ZW50IGRlZmF1bHQgZXZlbnQuJyxcbiAgICAgICAgcmFuZ2VcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gbm9ybWFsaXplIGNsaWNrLnJpZ2h0IGFuZCBjbGljay5taWRkbGUgc2luY2UgdGhleSBkb24ndCBhY3R1YWxseSBmaXJlXG4gICAgLy8gdGhpcyBpcyB0ZWNobmljYWxseSBicm93c2VyLXNwZWNpZmljLCBidXQgYXQgbGVhc3QgZm9yIG5vdyBicm93c2VycyBhcmVcbiAgICAvLyB0aGUgb25seSB0YXJnZXQgZW52cyB0aGF0IGhhdmUgcmlnaHQvbWlkZGxlIGNsaWNrcy5cbiAgICBpZiAobW9kaWZpZXJzLnJpZ2h0KSB7XG4gICAgICBpZiAoZHluYW1pYykge1xuICAgICAgICBuYW1lID0gXCIoXCIgKyBuYW1lICsgXCIpPT09J2NsaWNrJz8nY29udGV4dG1lbnUnOihcIiArIG5hbWUgKyBcIilcIjtcbiAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICBuYW1lID0gJ2NvbnRleHRtZW51JztcbiAgICAgICAgZGVsZXRlIG1vZGlmaWVycy5yaWdodDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1vZGlmaWVycy5taWRkbGUpIHtcbiAgICAgIGlmIChkeW5hbWljKSB7XG4gICAgICAgIG5hbWUgPSBcIihcIiArIG5hbWUgKyBcIik9PT0nY2xpY2snPydtb3VzZXVwJzooXCIgKyBuYW1lICsgXCIpXCI7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdjbGljaycpIHtcbiAgICAgICAgbmFtZSA9ICdtb3VzZXVwJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjaGVjayBjYXB0dXJlIG1vZGlmaWVyXG4gICAgaWYgKG1vZGlmaWVycy5jYXB0dXJlKSB7XG4gICAgICBkZWxldGUgbW9kaWZpZXJzLmNhcHR1cmU7XG4gICAgICBuYW1lID0gcHJlcGVuZE1vZGlmaWVyTWFya2VyKCchJywgbmFtZSwgZHluYW1pYyk7XG4gICAgfVxuICAgIGlmIChtb2RpZmllcnMub25jZSkge1xuICAgICAgZGVsZXRlIG1vZGlmaWVycy5vbmNlO1xuICAgICAgbmFtZSA9IHByZXBlbmRNb2RpZmllck1hcmtlcignficsIG5hbWUsIGR5bmFtaWMpO1xuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAobW9kaWZpZXJzLnBhc3NpdmUpIHtcbiAgICAgIGRlbGV0ZSBtb2RpZmllcnMucGFzc2l2ZTtcbiAgICAgIG5hbWUgPSBwcmVwZW5kTW9kaWZpZXJNYXJrZXIoJyYnLCBuYW1lLCBkeW5hbWljKTtcbiAgICB9XG5cbiAgICB2YXIgZXZlbnRzO1xuICAgIGlmIChtb2RpZmllcnMubmF0aXZlKSB7XG4gICAgICBkZWxldGUgbW9kaWZpZXJzLm5hdGl2ZTtcbiAgICAgIGV2ZW50cyA9IGVsLm5hdGl2ZUV2ZW50cyB8fCAoZWwubmF0aXZlRXZlbnRzID0ge30pO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmVudHMgPSBlbC5ldmVudHMgfHwgKGVsLmV2ZW50cyA9IHt9KTtcbiAgICB9XG5cbiAgICB2YXIgbmV3SGFuZGxlciA9IHJhbmdlU2V0SXRlbSh7IHZhbHVlOiB2YWx1ZS50cmltKCksIGR5bmFtaWM6IGR5bmFtaWMgfSwgcmFuZ2UpO1xuICAgIGlmIChtb2RpZmllcnMgIT09IGVtcHR5T2JqZWN0KSB7XG4gICAgICBuZXdIYW5kbGVyLm1vZGlmaWVycyA9IG1vZGlmaWVycztcbiAgICB9XG5cbiAgICB2YXIgaGFuZGxlcnMgPSBldmVudHNbbmFtZV07XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaGFuZGxlcnMpKSB7XG4gICAgICBpbXBvcnRhbnQgPyBoYW5kbGVycy51bnNoaWZ0KG5ld0hhbmRsZXIpIDogaGFuZGxlcnMucHVzaChuZXdIYW5kbGVyKTtcbiAgICB9IGVsc2UgaWYgKGhhbmRsZXJzKSB7XG4gICAgICBldmVudHNbbmFtZV0gPSBpbXBvcnRhbnQgPyBbbmV3SGFuZGxlciwgaGFuZGxlcnNdIDogW2hhbmRsZXJzLCBuZXdIYW5kbGVyXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnRzW25hbWVdID0gbmV3SGFuZGxlcjtcbiAgICB9XG5cbiAgICBlbC5wbGFpbiA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmF3QmluZGluZ0F0dHIgKFxuICAgIGVsLFxuICAgIG5hbWVcbiAgKSB7XG4gICAgcmV0dXJuIGVsLnJhd0F0dHJzTWFwWyc6JyArIG5hbWVdIHx8XG4gICAgICBlbC5yYXdBdHRyc01hcFsndi1iaW5kOicgKyBuYW1lXSB8fFxuICAgICAgZWwucmF3QXR0cnNNYXBbbmFtZV1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEJpbmRpbmdBdHRyIChcbiAgICBlbCxcbiAgICBuYW1lLFxuICAgIGdldFN0YXRpY1xuICApIHtcbiAgICB2YXIgZHluYW1pY1ZhbHVlID1cbiAgICAgIGdldEFuZFJlbW92ZUF0dHIoZWwsICc6JyArIG5hbWUpIHx8XG4gICAgICBnZXRBbmRSZW1vdmVBdHRyKGVsLCAndi1iaW5kOicgKyBuYW1lKTtcbiAgICBpZiAoZHluYW1pY1ZhbHVlICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBwYXJzZUZpbHRlcnMoZHluYW1pY1ZhbHVlKVxuICAgIH0gZWxzZSBpZiAoZ2V0U3RhdGljICE9PSBmYWxzZSkge1xuICAgICAgdmFyIHN0YXRpY1ZhbHVlID0gZ2V0QW5kUmVtb3ZlQXR0cihlbCwgbmFtZSk7XG4gICAgICBpZiAoc3RhdGljVmFsdWUgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc3RhdGljVmFsdWUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gbm90ZTogdGhpcyBvbmx5IHJlbW92ZXMgdGhlIGF0dHIgZnJvbSB0aGUgQXJyYXkgKGF0dHJzTGlzdCkgc28gdGhhdCBpdFxuICAvLyBkb2Vzbid0IGdldCBwcm9jZXNzZWQgYnkgcHJvY2Vzc0F0dHJzLlxuICAvLyBCeSBkZWZhdWx0IGl0IGRvZXMgTk9UIHJlbW92ZSBpdCBmcm9tIHRoZSBtYXAgKGF0dHJzTWFwKSBiZWNhdXNlIHRoZSBtYXAgaXNcbiAgLy8gbmVlZGVkIGR1cmluZyBjb2RlZ2VuLlxuICBmdW5jdGlvbiBnZXRBbmRSZW1vdmVBdHRyIChcbiAgICBlbCxcbiAgICBuYW1lLFxuICAgIHJlbW92ZUZyb21NYXBcbiAgKSB7XG4gICAgdmFyIHZhbDtcbiAgICBpZiAoKHZhbCA9IGVsLmF0dHJzTWFwW25hbWVdKSAhPSBudWxsKSB7XG4gICAgICB2YXIgbGlzdCA9IGVsLmF0dHJzTGlzdDtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbGlzdC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGxpc3RbaV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgIGxpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJlbW92ZUZyb21NYXApIHtcbiAgICAgIGRlbGV0ZSBlbC5hdHRyc01hcFtuYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbFxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QW5kUmVtb3ZlQXR0ckJ5UmVnZXggKFxuICAgIGVsLFxuICAgIG5hbWVcbiAgKSB7XG4gICAgdmFyIGxpc3QgPSBlbC5hdHRyc0xpc3Q7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBsaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIGF0dHIgPSBsaXN0W2ldO1xuICAgICAgaWYgKG5hbWUudGVzdChhdHRyLm5hbWUpKSB7XG4gICAgICAgIGxpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICByZXR1cm4gYXR0clxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJhbmdlU2V0SXRlbSAoXG4gICAgaXRlbSxcbiAgICByYW5nZVxuICApIHtcbiAgICBpZiAocmFuZ2UpIHtcbiAgICAgIGlmIChyYW5nZS5zdGFydCAhPSBudWxsKSB7XG4gICAgICAgIGl0ZW0uc3RhcnQgPSByYW5nZS5zdGFydDtcbiAgICAgIH1cbiAgICAgIGlmIChyYW5nZS5lbmQgIT0gbnVsbCkge1xuICAgICAgICBpdGVtLmVuZCA9IHJhbmdlLmVuZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGl0ZW1cbiAgfVxuXG4gIC8qICAqL1xuXG4gIC8qKlxuICAgKiBDcm9zcy1wbGF0Zm9ybSBjb2RlIGdlbmVyYXRpb24gZm9yIGNvbXBvbmVudCB2LW1vZGVsXG4gICAqL1xuICBmdW5jdGlvbiBnZW5Db21wb25lbnRNb2RlbCAoXG4gICAgZWwsXG4gICAgdmFsdWUsXG4gICAgbW9kaWZpZXJzXG4gICkge1xuICAgIHZhciByZWYgPSBtb2RpZmllcnMgfHwge307XG4gICAgdmFyIG51bWJlciA9IHJlZi5udW1iZXI7XG4gICAgdmFyIHRyaW0gPSByZWYudHJpbTtcblxuICAgIHZhciBiYXNlVmFsdWVFeHByZXNzaW9uID0gJyQkdic7XG4gICAgdmFyIHZhbHVlRXhwcmVzc2lvbiA9IGJhc2VWYWx1ZUV4cHJlc3Npb247XG4gICAgaWYgKHRyaW0pIHtcbiAgICAgIHZhbHVlRXhwcmVzc2lvbiA9XG4gICAgICAgIFwiKHR5cGVvZiBcIiArIGJhc2VWYWx1ZUV4cHJlc3Npb24gKyBcIiA9PT0gJ3N0cmluZydcIiArXG4gICAgICAgIFwiPyBcIiArIGJhc2VWYWx1ZUV4cHJlc3Npb24gKyBcIi50cmltKClcIiArXG4gICAgICAgIFwiOiBcIiArIGJhc2VWYWx1ZUV4cHJlc3Npb24gKyBcIilcIjtcbiAgICB9XG4gICAgaWYgKG51bWJlcikge1xuICAgICAgdmFsdWVFeHByZXNzaW9uID0gXCJfbihcIiArIHZhbHVlRXhwcmVzc2lvbiArIFwiKVwiO1xuICAgIH1cbiAgICB2YXIgYXNzaWdubWVudCA9IGdlbkFzc2lnbm1lbnRDb2RlKHZhbHVlLCB2YWx1ZUV4cHJlc3Npb24pO1xuXG4gICAgZWwubW9kZWwgPSB7XG4gICAgICB2YWx1ZTogKFwiKFwiICsgdmFsdWUgKyBcIilcIiksXG4gICAgICBleHByZXNzaW9uOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSksXG4gICAgICBjYWxsYmFjazogKFwiZnVuY3Rpb24gKFwiICsgYmFzZVZhbHVlRXhwcmVzc2lvbiArIFwiKSB7XCIgKyBhc3NpZ25tZW50ICsgXCJ9XCIpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcm9zcy1wbGF0Zm9ybSBjb2RlZ2VuIGhlbHBlciBmb3IgZ2VuZXJhdGluZyB2LW1vZGVsIHZhbHVlIGFzc2lnbm1lbnQgY29kZS5cbiAgICovXG4gIGZ1bmN0aW9uIGdlbkFzc2lnbm1lbnRDb2RlIChcbiAgICB2YWx1ZSxcbiAgICBhc3NpZ25tZW50XG4gICkge1xuICAgIHZhciByZXMgPSBwYXJzZU1vZGVsKHZhbHVlKTtcbiAgICBpZiAocmVzLmtleSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICh2YWx1ZSArIFwiPVwiICsgYXNzaWdubWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcIiRzZXQoXCIgKyAocmVzLmV4cCkgKyBcIiwgXCIgKyAocmVzLmtleSkgKyBcIiwgXCIgKyBhc3NpZ25tZW50ICsgXCIpXCIpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIGEgdi1tb2RlbCBleHByZXNzaW9uIGludG8gYSBiYXNlIHBhdGggYW5kIGEgZmluYWwga2V5IHNlZ21lbnQuXG4gICAqIEhhbmRsZXMgYm90aCBkb3QtcGF0aCBhbmQgcG9zc2libGUgc3F1YXJlIGJyYWNrZXRzLlxuICAgKlxuICAgKiBQb3NzaWJsZSBjYXNlczpcbiAgICpcbiAgICogLSB0ZXN0XG4gICAqIC0gdGVzdFtrZXldXG4gICAqIC0gdGVzdFt0ZXN0MVtrZXldXVxuICAgKiAtIHRlc3RbXCJhXCJdW2tleV1cbiAgICogLSB4eHgudGVzdFthW2FdLnRlc3QxW2tleV1dXG4gICAqIC0gdGVzdC54eHguYVtcImFzYVwiXVt0ZXN0MVtrZXldXVxuICAgKlxuICAgKi9cblxuICB2YXIgbGVuLCBzdHIsIGNociwgaW5kZXgkMSwgZXhwcmVzc2lvblBvcywgZXhwcmVzc2lvbkVuZFBvcztcblxuXG5cbiAgZnVuY3Rpb24gcGFyc2VNb2RlbCAodmFsKSB7XG4gICAgLy8gRml4IGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWUvcHVsbC83NzMwXG4gICAgLy8gYWxsb3cgdi1tb2RlbD1cIm9iai52YWwgXCIgKHRyYWlsaW5nIHdoaXRlc3BhY2UpXG4gICAgdmFsID0gdmFsLnRyaW0oKTtcbiAgICBsZW4gPSB2YWwubGVuZ3RoO1xuXG4gICAgaWYgKHZhbC5pbmRleE9mKCdbJykgPCAwIHx8IHZhbC5sYXN0SW5kZXhPZignXScpIDwgbGVuIC0gMSkge1xuICAgICAgaW5kZXgkMSA9IHZhbC5sYXN0SW5kZXhPZignLicpO1xuICAgICAgaWYgKGluZGV4JDEgPiAtMSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV4cDogdmFsLnNsaWNlKDAsIGluZGV4JDEpLFxuICAgICAgICAgIGtleTogJ1wiJyArIHZhbC5zbGljZShpbmRleCQxICsgMSkgKyAnXCInXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXhwOiB2YWwsXG4gICAgICAgICAga2V5OiBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdHIgPSB2YWw7XG4gICAgaW5kZXgkMSA9IGV4cHJlc3Npb25Qb3MgPSBleHByZXNzaW9uRW5kUG9zID0gMDtcblxuICAgIHdoaWxlICghZW9mKCkpIHtcbiAgICAgIGNociA9IG5leHQoKTtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKGlzU3RyaW5nU3RhcnQoY2hyKSkge1xuICAgICAgICBwYXJzZVN0cmluZyhjaHIpO1xuICAgICAgfSBlbHNlIGlmIChjaHIgPT09IDB4NUIpIHtcbiAgICAgICAgcGFyc2VCcmFja2V0KGNocik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGV4cDogdmFsLnNsaWNlKDAsIGV4cHJlc3Npb25Qb3MpLFxuICAgICAga2V5OiB2YWwuc2xpY2UoZXhwcmVzc2lvblBvcyArIDEsIGV4cHJlc3Npb25FbmRQb3MpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbmV4dCAoKSB7XG4gICAgcmV0dXJuIHN0ci5jaGFyQ29kZUF0KCsraW5kZXgkMSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGVvZiAoKSB7XG4gICAgcmV0dXJuIGluZGV4JDEgPj0gbGVuXG4gIH1cblxuICBmdW5jdGlvbiBpc1N0cmluZ1N0YXJ0IChjaHIpIHtcbiAgICByZXR1cm4gY2hyID09PSAweDIyIHx8IGNociA9PT0gMHgyN1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VCcmFja2V0IChjaHIpIHtcbiAgICB2YXIgaW5CcmFja2V0ID0gMTtcbiAgICBleHByZXNzaW9uUG9zID0gaW5kZXgkMTtcbiAgICB3aGlsZSAoIWVvZigpKSB7XG4gICAgICBjaHIgPSBuZXh0KCk7XG4gICAgICBpZiAoaXNTdHJpbmdTdGFydChjaHIpKSB7XG4gICAgICAgIHBhcnNlU3RyaW5nKGNocik7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBpZiAoY2hyID09PSAweDVCKSB7IGluQnJhY2tldCsrOyB9XG4gICAgICBpZiAoY2hyID09PSAweDVEKSB7IGluQnJhY2tldC0tOyB9XG4gICAgICBpZiAoaW5CcmFja2V0ID09PSAwKSB7XG4gICAgICAgIGV4cHJlc3Npb25FbmRQb3MgPSBpbmRleCQxO1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlU3RyaW5nIChjaHIpIHtcbiAgICB2YXIgc3RyaW5nUXVvdGUgPSBjaHI7XG4gICAgd2hpbGUgKCFlb2YoKSkge1xuICAgICAgY2hyID0gbmV4dCgpO1xuICAgICAgaWYgKGNociA9PT0gc3RyaW5nUXVvdGUpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiAgKi9cblxuICB2YXIgd2FybiQxO1xuXG4gIC8vIGluIHNvbWUgY2FzZXMsIHRoZSBldmVudCB1c2VkIGhhcyB0byBiZSBkZXRlcm1pbmVkIGF0IHJ1bnRpbWVcbiAgLy8gc28gd2UgdXNlZCBzb21lIHJlc2VydmVkIHRva2VucyBkdXJpbmcgY29tcGlsZS5cbiAgdmFyIFJBTkdFX1RPS0VOID0gJ19fcic7XG4gIHZhciBDSEVDS0JPWF9SQURJT19UT0tFTiA9ICdfX2MnO1xuXG4gIGZ1bmN0aW9uIG1vZGVsIChcbiAgICBlbCxcbiAgICBkaXIsXG4gICAgX3dhcm5cbiAgKSB7XG4gICAgd2FybiQxID0gX3dhcm47XG4gICAgdmFyIHZhbHVlID0gZGlyLnZhbHVlO1xuICAgIHZhciBtb2RpZmllcnMgPSBkaXIubW9kaWZpZXJzO1xuICAgIHZhciB0YWcgPSBlbC50YWc7XG4gICAgdmFyIHR5cGUgPSBlbC5hdHRyc01hcC50eXBlO1xuXG4gICAge1xuICAgICAgLy8gaW5wdXRzIHdpdGggdHlwZT1cImZpbGVcIiBhcmUgcmVhZCBvbmx5IGFuZCBzZXR0aW5nIHRoZSBpbnB1dCdzXG4gICAgICAvLyB2YWx1ZSB3aWxsIHRocm93IGFuIGVycm9yLlxuICAgICAgaWYgKHRhZyA9PT0gJ2lucHV0JyAmJiB0eXBlID09PSAnZmlsZScpIHtcbiAgICAgICAgd2FybiQxKFxuICAgICAgICAgIFwiPFwiICsgKGVsLnRhZykgKyBcIiB2LW1vZGVsPVxcXCJcIiArIHZhbHVlICsgXCJcXFwiIHR5cGU9XFxcImZpbGVcXFwiPjpcXG5cIiArXG4gICAgICAgICAgXCJGaWxlIGlucHV0cyBhcmUgcmVhZCBvbmx5LiBVc2UgYSB2LW9uOmNoYW5nZSBsaXN0ZW5lciBpbnN0ZWFkLlwiLFxuICAgICAgICAgIGVsLnJhd0F0dHJzTWFwWyd2LW1vZGVsJ11cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZWwuY29tcG9uZW50KSB7XG4gICAgICBnZW5Db21wb25lbnRNb2RlbChlbCwgdmFsdWUsIG1vZGlmaWVycyk7XG4gICAgICAvLyBjb21wb25lbnQgdi1tb2RlbCBkb2Vzbid0IG5lZWQgZXh0cmEgcnVudGltZVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSBlbHNlIGlmICh0YWcgPT09ICdzZWxlY3QnKSB7XG4gICAgICBnZW5TZWxlY3QoZWwsIHZhbHVlLCBtb2RpZmllcnMpO1xuICAgIH0gZWxzZSBpZiAodGFnID09PSAnaW5wdXQnICYmIHR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIGdlbkNoZWNrYm94TW9kZWwoZWwsIHZhbHVlLCBtb2RpZmllcnMpO1xuICAgIH0gZWxzZSBpZiAodGFnID09PSAnaW5wdXQnICYmIHR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIGdlblJhZGlvTW9kZWwoZWwsIHZhbHVlLCBtb2RpZmllcnMpO1xuICAgIH0gZWxzZSBpZiAodGFnID09PSAnaW5wdXQnIHx8IHRhZyA9PT0gJ3RleHRhcmVhJykge1xuICAgICAgZ2VuRGVmYXVsdE1vZGVsKGVsLCB2YWx1ZSwgbW9kaWZpZXJzKTtcbiAgICB9IGVsc2UgaWYgKCFjb25maWcuaXNSZXNlcnZlZFRhZyh0YWcpKSB7XG4gICAgICBnZW5Db21wb25lbnRNb2RlbChlbCwgdmFsdWUsIG1vZGlmaWVycyk7XG4gICAgICAvLyBjb21wb25lbnQgdi1tb2RlbCBkb2Vzbid0IG5lZWQgZXh0cmEgcnVudGltZVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm4kMShcbiAgICAgICAgXCI8XCIgKyAoZWwudGFnKSArIFwiIHYtbW9kZWw9XFxcIlwiICsgdmFsdWUgKyBcIlxcXCI+OiBcIiArXG4gICAgICAgIFwidi1tb2RlbCBpcyBub3Qgc3VwcG9ydGVkIG9uIHRoaXMgZWxlbWVudCB0eXBlLiBcIiArXG4gICAgICAgICdJZiB5b3UgYXJlIHdvcmtpbmcgd2l0aCBjb250ZW50ZWRpdGFibGUsIGl0XFwncyByZWNvbW1lbmRlZCB0byAnICtcbiAgICAgICAgJ3dyYXAgYSBsaWJyYXJ5IGRlZGljYXRlZCBmb3IgdGhhdCBwdXJwb3NlIGluc2lkZSBhIGN1c3RvbSBjb21wb25lbnQuJyxcbiAgICAgICAgZWwucmF3QXR0cnNNYXBbJ3YtbW9kZWwnXVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBlbnN1cmUgcnVudGltZSBkaXJlY3RpdmUgbWV0YWRhdGFcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VuQ2hlY2tib3hNb2RlbCAoXG4gICAgZWwsXG4gICAgdmFsdWUsXG4gICAgbW9kaWZpZXJzXG4gICkge1xuICAgIHZhciBudW1iZXIgPSBtb2RpZmllcnMgJiYgbW9kaWZpZXJzLm51bWJlcjtcbiAgICB2YXIgdmFsdWVCaW5kaW5nID0gZ2V0QmluZGluZ0F0dHIoZWwsICd2YWx1ZScpIHx8ICdudWxsJztcbiAgICB2YXIgdHJ1ZVZhbHVlQmluZGluZyA9IGdldEJpbmRpbmdBdHRyKGVsLCAndHJ1ZS12YWx1ZScpIHx8ICd0cnVlJztcbiAgICB2YXIgZmFsc2VWYWx1ZUJpbmRpbmcgPSBnZXRCaW5kaW5nQXR0cihlbCwgJ2ZhbHNlLXZhbHVlJykgfHwgJ2ZhbHNlJztcbiAgICBhZGRQcm9wKGVsLCAnY2hlY2tlZCcsXG4gICAgICBcIkFycmF5LmlzQXJyYXkoXCIgKyB2YWx1ZSArIFwiKVwiICtcbiAgICAgIFwiP19pKFwiICsgdmFsdWUgKyBcIixcIiArIHZhbHVlQmluZGluZyArIFwiKT4tMVwiICsgKFxuICAgICAgICB0cnVlVmFsdWVCaW5kaW5nID09PSAndHJ1ZSdcbiAgICAgICAgICA/IChcIjooXCIgKyB2YWx1ZSArIFwiKVwiKVxuICAgICAgICAgIDogKFwiOl9xKFwiICsgdmFsdWUgKyBcIixcIiArIHRydWVWYWx1ZUJpbmRpbmcgKyBcIilcIilcbiAgICAgIClcbiAgICApO1xuICAgIGFkZEhhbmRsZXIoZWwsICdjaGFuZ2UnLFxuICAgICAgXCJ2YXIgJCRhPVwiICsgdmFsdWUgKyBcIixcIiArXG4gICAgICAgICAgJyQkZWw9JGV2ZW50LnRhcmdldCwnICtcbiAgICAgICAgICBcIiQkYz0kJGVsLmNoZWNrZWQ/KFwiICsgdHJ1ZVZhbHVlQmluZGluZyArIFwiKTooXCIgKyBmYWxzZVZhbHVlQmluZGluZyArIFwiKTtcIiArXG4gICAgICAnaWYoQXJyYXkuaXNBcnJheSgkJGEpKXsnICtcbiAgICAgICAgXCJ2YXIgJCR2PVwiICsgKG51bWJlciA/ICdfbignICsgdmFsdWVCaW5kaW5nICsgJyknIDogdmFsdWVCaW5kaW5nKSArIFwiLFwiICtcbiAgICAgICAgICAgICckJGk9X2koJCRhLCQkdik7JyArXG4gICAgICAgIFwiaWYoJCRlbC5jaGVja2VkKXskJGk8MCYmKFwiICsgKGdlbkFzc2lnbm1lbnRDb2RlKHZhbHVlLCAnJCRhLmNvbmNhdChbJCR2XSknKSkgKyBcIil9XCIgK1xuICAgICAgICBcImVsc2V7JCRpPi0xJiYoXCIgKyAoZ2VuQXNzaWdubWVudENvZGUodmFsdWUsICckJGEuc2xpY2UoMCwkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpKzEpKScpKSArIFwiKX1cIiArXG4gICAgICBcIn1lbHNle1wiICsgKGdlbkFzc2lnbm1lbnRDb2RlKHZhbHVlLCAnJCRjJykpICsgXCJ9XCIsXG4gICAgICBudWxsLCB0cnVlXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlblJhZGlvTW9kZWwgKFxuICAgIGVsLFxuICAgIHZhbHVlLFxuICAgIG1vZGlmaWVyc1xuICApIHtcbiAgICB2YXIgbnVtYmVyID0gbW9kaWZpZXJzICYmIG1vZGlmaWVycy5udW1iZXI7XG4gICAgdmFyIHZhbHVlQmluZGluZyA9IGdldEJpbmRpbmdBdHRyKGVsLCAndmFsdWUnKSB8fCAnbnVsbCc7XG4gICAgdmFsdWVCaW5kaW5nID0gbnVtYmVyID8gKFwiX24oXCIgKyB2YWx1ZUJpbmRpbmcgKyBcIilcIikgOiB2YWx1ZUJpbmRpbmc7XG4gICAgYWRkUHJvcChlbCwgJ2NoZWNrZWQnLCAoXCJfcShcIiArIHZhbHVlICsgXCIsXCIgKyB2YWx1ZUJpbmRpbmcgKyBcIilcIikpO1xuICAgIGFkZEhhbmRsZXIoZWwsICdjaGFuZ2UnLCBnZW5Bc3NpZ25tZW50Q29kZSh2YWx1ZSwgdmFsdWVCaW5kaW5nKSwgbnVsbCwgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZW5TZWxlY3QgKFxuICAgIGVsLFxuICAgIHZhbHVlLFxuICAgIG1vZGlmaWVyc1xuICApIHtcbiAgICB2YXIgbnVtYmVyID0gbW9kaWZpZXJzICYmIG1vZGlmaWVycy5udW1iZXI7XG4gICAgdmFyIHNlbGVjdGVkVmFsID0gXCJBcnJheS5wcm90b3R5cGUuZmlsdGVyXCIgK1xuICAgICAgXCIuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsZnVuY3Rpb24obyl7cmV0dXJuIG8uc2VsZWN0ZWR9KVwiICtcbiAgICAgIFwiLm1hcChmdW5jdGlvbihvKXt2YXIgdmFsID0gXFxcIl92YWx1ZVxcXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZTtcIiArXG4gICAgICBcInJldHVybiBcIiArIChudW1iZXIgPyAnX24odmFsKScgOiAndmFsJykgKyBcIn0pXCI7XG5cbiAgICB2YXIgYXNzaWdubWVudCA9ICckZXZlbnQudGFyZ2V0Lm11bHRpcGxlID8gJCRzZWxlY3RlZFZhbCA6ICQkc2VsZWN0ZWRWYWxbMF0nO1xuICAgIHZhciBjb2RlID0gXCJ2YXIgJCRzZWxlY3RlZFZhbCA9IFwiICsgc2VsZWN0ZWRWYWwgKyBcIjtcIjtcbiAgICBjb2RlID0gY29kZSArIFwiIFwiICsgKGdlbkFzc2lnbm1lbnRDb2RlKHZhbHVlLCBhc3NpZ25tZW50KSk7XG4gICAgYWRkSGFuZGxlcihlbCwgJ2NoYW5nZScsIGNvZGUsIG51bGwsIHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2VuRGVmYXVsdE1vZGVsIChcbiAgICBlbCxcbiAgICB2YWx1ZSxcbiAgICBtb2RpZmllcnNcbiAgKSB7XG4gICAgdmFyIHR5cGUgPSBlbC5hdHRyc01hcC50eXBlO1xuXG4gICAgLy8gd2FybiBpZiB2LWJpbmQ6dmFsdWUgY29uZmxpY3RzIHdpdGggdi1tb2RlbFxuICAgIC8vIGV4Y2VwdCBmb3IgaW5wdXRzIHdpdGggdi1iaW5kOnR5cGVcbiAgICB7XG4gICAgICB2YXIgdmFsdWUkMSA9IGVsLmF0dHJzTWFwWyd2LWJpbmQ6dmFsdWUnXSB8fCBlbC5hdHRyc01hcFsnOnZhbHVlJ107XG4gICAgICB2YXIgdHlwZUJpbmRpbmcgPSBlbC5hdHRyc01hcFsndi1iaW5kOnR5cGUnXSB8fCBlbC5hdHRyc01hcFsnOnR5cGUnXTtcbiAgICAgIGlmICh2YWx1ZSQxICYmICF0eXBlQmluZGluZykge1xuICAgICAgICB2YXIgYmluZGluZyA9IGVsLmF0dHJzTWFwWyd2LWJpbmQ6dmFsdWUnXSA/ICd2LWJpbmQ6dmFsdWUnIDogJzp2YWx1ZSc7XG4gICAgICAgIHdhcm4kMShcbiAgICAgICAgICBiaW5kaW5nICsgXCI9XFxcIlwiICsgdmFsdWUkMSArIFwiXFxcIiBjb25mbGljdHMgd2l0aCB2LW1vZGVsIG9uIHRoZSBzYW1lIGVsZW1lbnQgXCIgK1xuICAgICAgICAgICdiZWNhdXNlIHRoZSBsYXR0ZXIgYWxyZWFkeSBleHBhbmRzIHRvIGEgdmFsdWUgYmluZGluZyBpbnRlcm5hbGx5JyxcbiAgICAgICAgICBlbC5yYXdBdHRyc01hcFtiaW5kaW5nXVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciByZWYgPSBtb2RpZmllcnMgfHwge307XG4gICAgdmFyIGxhenkgPSByZWYubGF6eTtcbiAgICB2YXIgbnVtYmVyID0gcmVmLm51bWJlcjtcbiAgICB2YXIgdHJpbSA9IHJlZi50cmltO1xuICAgIHZhciBuZWVkQ29tcG9zaXRpb25HdWFyZCA9ICFsYXp5ICYmIHR5cGUgIT09ICdyYW5nZSc7XG4gICAgdmFyIGV2ZW50ID0gbGF6eVxuICAgICAgPyAnY2hhbmdlJ1xuICAgICAgOiB0eXBlID09PSAncmFuZ2UnXG4gICAgICAgID8gUkFOR0VfVE9LRU5cbiAgICAgICAgOiAnaW5wdXQnO1xuXG4gICAgdmFyIHZhbHVlRXhwcmVzc2lvbiA9ICckZXZlbnQudGFyZ2V0LnZhbHVlJztcbiAgICBpZiAodHJpbSkge1xuICAgICAgdmFsdWVFeHByZXNzaW9uID0gXCIkZXZlbnQudGFyZ2V0LnZhbHVlLnRyaW0oKVwiO1xuICAgIH1cbiAgICBpZiAobnVtYmVyKSB7XG4gICAgICB2YWx1ZUV4cHJlc3Npb24gPSBcIl9uKFwiICsgdmFsdWVFeHByZXNzaW9uICsgXCIpXCI7XG4gICAgfVxuXG4gICAgdmFyIGNvZGUgPSBnZW5Bc3NpZ25tZW50Q29kZSh2YWx1ZSwgdmFsdWVFeHByZXNzaW9uKTtcbiAgICBpZiAobmVlZENvbXBvc2l0aW9uR3VhcmQpIHtcbiAgICAgIGNvZGUgPSBcImlmKCRldmVudC50YXJnZXQuY29tcG9zaW5nKXJldHVybjtcIiArIGNvZGU7XG4gICAgfVxuXG4gICAgYWRkUHJvcChlbCwgJ3ZhbHVlJywgKFwiKFwiICsgdmFsdWUgKyBcIilcIikpO1xuICAgIGFkZEhhbmRsZXIoZWwsIGV2ZW50LCBjb2RlLCBudWxsLCB0cnVlKTtcbiAgICBpZiAodHJpbSB8fCBudW1iZXIpIHtcbiAgICAgIGFkZEhhbmRsZXIoZWwsICdibHVyJywgJyRmb3JjZVVwZGF0ZSgpJyk7XG4gICAgfVxuICB9XG5cbiAgLyogICovXG5cbiAgLy8gbm9ybWFsaXplIHYtbW9kZWwgZXZlbnQgdG9rZW5zIHRoYXQgY2FuIG9ubHkgYmUgZGV0ZXJtaW5lZCBhdCBydW50aW1lLlxuICAvLyBpdCdzIGltcG9ydGFudCB0byBwbGFjZSB0aGUgZXZlbnQgYXMgdGhlIGZpcnN0IGluIHRoZSBhcnJheSBiZWNhdXNlXG4gIC8vIHRoZSB3aG9sZSBwb2ludCBpcyBlbnN1cmluZyB0aGUgdi1tb2RlbCBjYWxsYmFjayBnZXRzIGNhbGxlZCBiZWZvcmVcbiAgLy8gdXNlci1hdHRhY2hlZCBoYW5kbGVycy5cbiAgZnVuY3Rpb24gbm9ybWFsaXplRXZlbnRzIChvbikge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChpc0RlZihvbltSQU5HRV9UT0tFTl0pKSB7XG4gICAgICAvLyBJRSBpbnB1dFt0eXBlPXJhbmdlXSBvbmx5IHN1cHBvcnRzIGBjaGFuZ2VgIGV2ZW50XG4gICAgICB2YXIgZXZlbnQgPSBpc0lFID8gJ2NoYW5nZScgOiAnaW5wdXQnO1xuICAgICAgb25bZXZlbnRdID0gW10uY29uY2F0KG9uW1JBTkdFX1RPS0VOXSwgb25bZXZlbnRdIHx8IFtdKTtcbiAgICAgIGRlbGV0ZSBvbltSQU5HRV9UT0tFTl07XG4gICAgfVxuICAgIC8vIFRoaXMgd2FzIG9yaWdpbmFsbHkgaW50ZW5kZWQgdG8gZml4ICM0NTIxIGJ1dCBubyBsb25nZXIgbmVjZXNzYXJ5XG4gICAgLy8gYWZ0ZXIgMi41LiBLZWVwaW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0IHdpdGggZ2VuZXJhdGVkIGNvZGUgZnJvbSA8IDIuNFxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChpc0RlZihvbltDSEVDS0JPWF9SQURJT19UT0tFTl0pKSB7XG4gICAgICBvbi5jaGFuZ2UgPSBbXS5jb25jYXQob25bQ0hFQ0tCT1hfUkFESU9fVE9LRU5dLCBvbi5jaGFuZ2UgfHwgW10pO1xuICAgICAgZGVsZXRlIG9uW0NIRUNLQk9YX1JBRElPX1RPS0VOXTtcbiAgICB9XG4gIH1cblxuICB2YXIgdGFyZ2V0JDE7XG5cbiAgZnVuY3Rpb24gY3JlYXRlT25jZUhhbmRsZXIkMSAoZXZlbnQsIGhhbmRsZXIsIGNhcHR1cmUpIHtcbiAgICB2YXIgX3RhcmdldCA9IHRhcmdldCQxOyAvLyBzYXZlIGN1cnJlbnQgdGFyZ2V0IGVsZW1lbnQgaW4gY2xvc3VyZVxuICAgIHJldHVybiBmdW5jdGlvbiBvbmNlSGFuZGxlciAoKSB7XG4gICAgICB2YXIgcmVzID0gaGFuZGxlci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgaWYgKHJlcyAhPT0gbnVsbCkge1xuICAgICAgICByZW1vdmUkMihldmVudCwgb25jZUhhbmRsZXIsIGNhcHR1cmUsIF90YXJnZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vICM5NDQ2OiBGaXJlZm94IDw9IDUzIChpbiBwYXJ0aWN1bGFyLCBFU1IgNTIpIGhhcyBpbmNvcnJlY3QgRXZlbnQudGltZVN0YW1wXG4gIC8vIGltcGxlbWVudGF0aW9uIGFuZCBkb2VzIG5vdCBmaXJlIG1pY3JvdGFza3MgaW4gYmV0d2VlbiBldmVudCBwcm9wYWdhdGlvbiwgc29cbiAgLy8gc2FmZSB0byBleGNsdWRlLlxuICB2YXIgdXNlTWljcm90YXNrRml4ID0gaXNVc2luZ01pY3JvVGFzayAmJiAhKGlzRkYgJiYgTnVtYmVyKGlzRkZbMV0pIDw9IDUzKTtcblxuICBmdW5jdGlvbiBhZGQkMSAoXG4gICAgbmFtZSxcbiAgICBoYW5kbGVyLFxuICAgIGNhcHR1cmUsXG4gICAgcGFzc2l2ZVxuICApIHtcbiAgICAvLyBhc3luYyBlZGdlIGNhc2UgIzY1NjY6IGlubmVyIGNsaWNrIGV2ZW50IHRyaWdnZXJzIHBhdGNoLCBldmVudCBoYW5kbGVyXG4gICAgLy8gYXR0YWNoZWQgdG8gb3V0ZXIgZWxlbWVudCBkdXJpbmcgcGF0Y2gsIGFuZCB0cmlnZ2VyZWQgYWdhaW4uIFRoaXNcbiAgICAvLyBoYXBwZW5zIGJlY2F1c2UgYnJvd3NlcnMgZmlyZSBtaWNyb3Rhc2sgdGlja3MgYmV0d2VlbiBldmVudCBwcm9wYWdhdGlvbi5cbiAgICAvLyB0aGUgc29sdXRpb24gaXMgc2ltcGxlOiB3ZSBzYXZlIHRoZSB0aW1lc3RhbXAgd2hlbiBhIGhhbmRsZXIgaXMgYXR0YWNoZWQsXG4gICAgLy8gYW5kIHRoZSBoYW5kbGVyIHdvdWxkIG9ubHkgZmlyZSBpZiB0aGUgZXZlbnQgcGFzc2VkIHRvIGl0IHdhcyBmaXJlZFxuICAgIC8vIEFGVEVSIGl0IHdhcyBhdHRhY2hlZC5cbiAgICBpZiAodXNlTWljcm90YXNrRml4KSB7XG4gICAgICB2YXIgYXR0YWNoZWRUaW1lc3RhbXAgPSBjdXJyZW50Rmx1c2hUaW1lc3RhbXA7XG4gICAgICB2YXIgb3JpZ2luYWwgPSBoYW5kbGVyO1xuICAgICAgaGFuZGxlciA9IG9yaWdpbmFsLl93cmFwcGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIC8vIG5vIGJ1YmJsaW5nLCBzaG91bGQgYWx3YXlzIGZpcmUuXG4gICAgICAgICAgLy8gdGhpcyBpcyBqdXN0IGEgc2FmZXR5IG5ldCBpbiBjYXNlIGV2ZW50LnRpbWVTdGFtcCBpcyB1bnJlbGlhYmxlIGluXG4gICAgICAgICAgLy8gY2VydGFpbiB3ZWlyZCBlbnZpcm9ubWVudHMuLi5cbiAgICAgICAgICBlLnRhcmdldCA9PT0gZS5jdXJyZW50VGFyZ2V0IHx8XG4gICAgICAgICAgLy8gZXZlbnQgaXMgZmlyZWQgYWZ0ZXIgaGFuZGxlciBhdHRhY2htZW50XG4gICAgICAgICAgZS50aW1lU3RhbXAgPj0gYXR0YWNoZWRUaW1lc3RhbXAgfHxcbiAgICAgICAgICAvLyBiYWlsIGZvciBlbnZpcm9ubWVudHMgdGhhdCBoYXZlIGJ1Z2d5IGV2ZW50LnRpbWVTdGFtcCBpbXBsZW1lbnRhdGlvbnNcbiAgICAgICAgICAvLyAjOTQ2MiBpT1MgOSBidWc6IGV2ZW50LnRpbWVTdGFtcCBpcyAwIGFmdGVyIGhpc3RvcnkucHVzaFN0YXRlXG4gICAgICAgICAgLy8gIzk2ODEgUXRXZWJFbmdpbmUgZXZlbnQudGltZVN0YW1wIGlzIG5lZ2F0aXZlIHZhbHVlXG4gICAgICAgICAgZS50aW1lU3RhbXAgPD0gMCB8fFxuICAgICAgICAgIC8vICM5NDQ4IGJhaWwgaWYgZXZlbnQgaXMgZmlyZWQgaW4gYW5vdGhlciBkb2N1bWVudCBpbiBhIG11bHRpLXBhZ2VcbiAgICAgICAgICAvLyBlbGVjdHJvbi9udy5qcyBhcHAsIHNpbmNlIGV2ZW50LnRpbWVTdGFtcCB3aWxsIGJlIHVzaW5nIGEgZGlmZmVyZW50XG4gICAgICAgICAgLy8gc3RhcnRpbmcgcmVmZXJlbmNlXG4gICAgICAgICAgZS50YXJnZXQub3duZXJEb2N1bWVudCAhPT0gZG9jdW1lbnRcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgdGFyZ2V0JDEuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIG5hbWUsXG4gICAgICBoYW5kbGVyLFxuICAgICAgc3VwcG9ydHNQYXNzaXZlXG4gICAgICAgID8geyBjYXB0dXJlOiBjYXB0dXJlLCBwYXNzaXZlOiBwYXNzaXZlIH1cbiAgICAgICAgOiBjYXB0dXJlXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZSQyIChcbiAgICBuYW1lLFxuICAgIGhhbmRsZXIsXG4gICAgY2FwdHVyZSxcbiAgICBfdGFyZ2V0XG4gICkge1xuICAgIChfdGFyZ2V0IHx8IHRhcmdldCQxKS5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgbmFtZSxcbiAgICAgIGhhbmRsZXIuX3dyYXBwZXIgfHwgaGFuZGxlcixcbiAgICAgIGNhcHR1cmVcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlRE9NTGlzdGVuZXJzIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgICBpZiAoaXNVbmRlZihvbGRWbm9kZS5kYXRhLm9uKSAmJiBpc1VuZGVmKHZub2RlLmRhdGEub24pKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIG9uID0gdm5vZGUuZGF0YS5vbiB8fCB7fTtcbiAgICB2YXIgb2xkT24gPSBvbGRWbm9kZS5kYXRhLm9uIHx8IHt9O1xuICAgIHRhcmdldCQxID0gdm5vZGUuZWxtO1xuICAgIG5vcm1hbGl6ZUV2ZW50cyhvbik7XG4gICAgdXBkYXRlTGlzdGVuZXJzKG9uLCBvbGRPbiwgYWRkJDEsIHJlbW92ZSQyLCBjcmVhdGVPbmNlSGFuZGxlciQxLCB2bm9kZS5jb250ZXh0KTtcbiAgICB0YXJnZXQkMSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHZhciBldmVudHMgPSB7XG4gICAgY3JlYXRlOiB1cGRhdGVET01MaXN0ZW5lcnMsXG4gICAgdXBkYXRlOiB1cGRhdGVET01MaXN0ZW5lcnNcbiAgfTtcblxuICAvKiAgKi9cblxuICB2YXIgc3ZnQ29udGFpbmVyO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZURPTVByb3BzIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgICBpZiAoaXNVbmRlZihvbGRWbm9kZS5kYXRhLmRvbVByb3BzKSAmJiBpc1VuZGVmKHZub2RlLmRhdGEuZG9tUHJvcHMpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIGtleSwgY3VyO1xuICAgIHZhciBlbG0gPSB2bm9kZS5lbG07XG4gICAgdmFyIG9sZFByb3BzID0gb2xkVm5vZGUuZGF0YS5kb21Qcm9wcyB8fCB7fTtcbiAgICB2YXIgcHJvcHMgPSB2bm9kZS5kYXRhLmRvbVByb3BzIHx8IHt9O1xuICAgIC8vIGNsb25lIG9ic2VydmVkIG9iamVjdHMsIGFzIHRoZSB1c2VyIHByb2JhYmx5IHdhbnRzIHRvIG11dGF0ZSBpdFxuICAgIGlmIChpc0RlZihwcm9wcy5fX29iX18pKSB7XG4gICAgICBwcm9wcyA9IHZub2RlLmRhdGEuZG9tUHJvcHMgPSBleHRlbmQoe30sIHByb3BzKTtcbiAgICB9XG5cbiAgICBmb3IgKGtleSBpbiBvbGRQcm9wcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3BzKSkge1xuICAgICAgICBlbG1ba2V5XSA9ICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoa2V5IGluIHByb3BzKSB7XG4gICAgICBjdXIgPSBwcm9wc1trZXldO1xuICAgICAgLy8gaWdub3JlIGNoaWxkcmVuIGlmIHRoZSBub2RlIGhhcyB0ZXh0Q29udGVudCBvciBpbm5lckhUTUwsXG4gICAgICAvLyBhcyB0aGVzZSB3aWxsIHRocm93IGF3YXkgZXhpc3RpbmcgRE9NIG5vZGVzIGFuZCBjYXVzZSByZW1vdmFsIGVycm9yc1xuICAgICAgLy8gb24gc3Vic2VxdWVudCBwYXRjaGVzICgjMzM2MClcbiAgICAgIGlmIChrZXkgPT09ICd0ZXh0Q29udGVudCcgfHwga2V5ID09PSAnaW5uZXJIVE1MJykge1xuICAgICAgICBpZiAodm5vZGUuY2hpbGRyZW4pIHsgdm5vZGUuY2hpbGRyZW4ubGVuZ3RoID0gMDsgfVxuICAgICAgICBpZiAoY3VyID09PSBvbGRQcm9wc1trZXldKSB7IGNvbnRpbnVlIH1cbiAgICAgICAgLy8gIzY2MDEgd29yayBhcm91bmQgQ2hyb21lIHZlcnNpb24gPD0gNTUgYnVnIHdoZXJlIHNpbmdsZSB0ZXh0Tm9kZVxuICAgICAgICAvLyByZXBsYWNlZCBieSBpbm5lckhUTUwvdGV4dENvbnRlbnQgcmV0YWlucyBpdHMgcGFyZW50Tm9kZSBwcm9wZXJ0eVxuICAgICAgICBpZiAoZWxtLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgZWxtLnJlbW92ZUNoaWxkKGVsbS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoa2V5ID09PSAndmFsdWUnICYmIGVsbS50YWdOYW1lICE9PSAnUFJPR1JFU1MnKSB7XG4gICAgICAgIC8vIHN0b3JlIHZhbHVlIGFzIF92YWx1ZSBhcyB3ZWxsIHNpbmNlXG4gICAgICAgIC8vIG5vbi1zdHJpbmcgdmFsdWVzIHdpbGwgYmUgc3RyaW5naWZpZWRcbiAgICAgICAgZWxtLl92YWx1ZSA9IGN1cjtcbiAgICAgICAgLy8gYXZvaWQgcmVzZXR0aW5nIGN1cnNvciBwb3NpdGlvbiB3aGVuIHZhbHVlIGlzIHRoZSBzYW1lXG4gICAgICAgIHZhciBzdHJDdXIgPSBpc1VuZGVmKGN1cikgPyAnJyA6IFN0cmluZyhjdXIpO1xuICAgICAgICBpZiAoc2hvdWxkVXBkYXRlVmFsdWUoZWxtLCBzdHJDdXIpKSB7XG4gICAgICAgICAgZWxtLnZhbHVlID0gc3RyQ3VyO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2lubmVySFRNTCcgJiYgaXNTVkcoZWxtLnRhZ05hbWUpICYmIGlzVW5kZWYoZWxtLmlubmVySFRNTCkpIHtcbiAgICAgICAgLy8gSUUgZG9lc24ndCBzdXBwb3J0IGlubmVySFRNTCBmb3IgU1ZHIGVsZW1lbnRzXG4gICAgICAgIHN2Z0NvbnRhaW5lciA9IHN2Z0NvbnRhaW5lciB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3ZnQ29udGFpbmVyLmlubmVySFRNTCA9IFwiPHN2Zz5cIiArIGN1ciArIFwiPC9zdmc+XCI7XG4gICAgICAgIHZhciBzdmcgPSBzdmdDb250YWluZXIuZmlyc3RDaGlsZDtcbiAgICAgICAgd2hpbGUgKGVsbS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgZWxtLnJlbW92ZUNoaWxkKGVsbS5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoc3ZnLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICBlbG0uYXBwZW5kQ2hpbGQoc3ZnLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAvLyBza2lwIHRoZSB1cGRhdGUgaWYgb2xkIGFuZCBuZXcgVkRPTSBzdGF0ZSBpcyB0aGUgc2FtZS5cbiAgICAgICAgLy8gYHZhbHVlYCBpcyBoYW5kbGVkIHNlcGFyYXRlbHkgYmVjYXVzZSB0aGUgRE9NIHZhbHVlIG1heSBiZSB0ZW1wb3JhcmlseVxuICAgICAgICAvLyBvdXQgb2Ygc3luYyB3aXRoIFZET00gc3RhdGUgZHVlIHRvIGZvY3VzLCBjb21wb3NpdGlvbiBhbmQgbW9kaWZpZXJzLlxuICAgICAgICAvLyBUaGlzICAjNDUyMSBieSBza2lwcGluZyB0aGUgdW5uZWNlc2FycnkgYGNoZWNrZWRgIHVwZGF0ZS5cbiAgICAgICAgY3VyICE9PSBvbGRQcm9wc1trZXldXG4gICAgICApIHtcbiAgICAgICAgLy8gc29tZSBwcm9wZXJ0eSB1cGRhdGVzIGNhbiB0aHJvd1xuICAgICAgICAvLyBlLmcuIGB2YWx1ZWAgb24gPHByb2dyZXNzPiB3LyBub24tZmluaXRlIHZhbHVlXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZWxtW2tleV0gPSBjdXI7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gY2hlY2sgcGxhdGZvcm1zL3dlYi91dGlsL2F0dHJzLmpzIGFjY2VwdFZhbHVlXG5cblxuICBmdW5jdGlvbiBzaG91bGRVcGRhdGVWYWx1ZSAoZWxtLCBjaGVja1ZhbCkge1xuICAgIHJldHVybiAoIWVsbS5jb21wb3NpbmcgJiYgKFxuICAgICAgZWxtLnRhZ05hbWUgPT09ICdPUFRJT04nIHx8XG4gICAgICBpc05vdEluRm9jdXNBbmREaXJ0eShlbG0sIGNoZWNrVmFsKSB8fFxuICAgICAgaXNEaXJ0eVdpdGhNb2RpZmllcnMoZWxtLCBjaGVja1ZhbClcbiAgICApKVxuICB9XG5cbiAgZnVuY3Rpb24gaXNOb3RJbkZvY3VzQW5kRGlydHkgKGVsbSwgY2hlY2tWYWwpIHtcbiAgICAvLyByZXR1cm4gdHJ1ZSB3aGVuIHRleHRib3ggKC5udW1iZXIgYW5kIC50cmltKSBsb3NlcyBmb2N1cyBhbmQgaXRzIHZhbHVlIGlzXG4gICAgLy8gbm90IGVxdWFsIHRvIHRoZSB1cGRhdGVkIHZhbHVlXG4gICAgdmFyIG5vdEluRm9jdXMgPSB0cnVlO1xuICAgIC8vICM2MTU3XG4gICAgLy8gd29yayBhcm91bmQgSUUgYnVnIHdoZW4gYWNjZXNzaW5nIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgaW4gYW4gaWZyYW1lXG4gICAgdHJ5IHsgbm90SW5Gb2N1cyA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGVsbTsgfSBjYXRjaCAoZSkge31cbiAgICByZXR1cm4gbm90SW5Gb2N1cyAmJiBlbG0udmFsdWUgIT09IGNoZWNrVmFsXG4gIH1cblxuICBmdW5jdGlvbiBpc0RpcnR5V2l0aE1vZGlmaWVycyAoZWxtLCBuZXdWYWwpIHtcbiAgICB2YXIgdmFsdWUgPSBlbG0udmFsdWU7XG4gICAgdmFyIG1vZGlmaWVycyA9IGVsbS5fdk1vZGlmaWVyczsgLy8gaW5qZWN0ZWQgYnkgdi1tb2RlbCBydW50aW1lXG4gICAgaWYgKGlzRGVmKG1vZGlmaWVycykpIHtcbiAgICAgIGlmIChtb2RpZmllcnMubnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0b051bWJlcih2YWx1ZSkgIT09IHRvTnVtYmVyKG5ld1ZhbClcbiAgICAgIH1cbiAgICAgIGlmIChtb2RpZmllcnMudHJpbSkge1xuICAgICAgICByZXR1cm4gdmFsdWUudHJpbSgpICE9PSBuZXdWYWwudHJpbSgpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZSAhPT0gbmV3VmFsXG4gIH1cblxuICB2YXIgZG9tUHJvcHMgPSB7XG4gICAgY3JlYXRlOiB1cGRhdGVET01Qcm9wcyxcbiAgICB1cGRhdGU6IHVwZGF0ZURPTVByb3BzXG4gIH07XG5cbiAgLyogICovXG5cbiAgdmFyIHBhcnNlU3R5bGVUZXh0ID0gY2FjaGVkKGZ1bmN0aW9uIChjc3NUZXh0KSB7XG4gICAgdmFyIHJlcyA9IHt9O1xuICAgIHZhciBsaXN0RGVsaW1pdGVyID0gLzsoPyFbXihdKlxcKSkvZztcbiAgICB2YXIgcHJvcGVydHlEZWxpbWl0ZXIgPSAvOiguKykvO1xuICAgIGNzc1RleHQuc3BsaXQobGlzdERlbGltaXRlcikuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgdmFyIHRtcCA9IGl0ZW0uc3BsaXQocHJvcGVydHlEZWxpbWl0ZXIpO1xuICAgICAgICB0bXAubGVuZ3RoID4gMSAmJiAocmVzW3RtcFswXS50cmltKCldID0gdG1wWzFdLnRyaW0oKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc1xuICB9KTtcblxuICAvLyBtZXJnZSBzdGF0aWMgYW5kIGR5bmFtaWMgc3R5bGUgZGF0YSBvbiB0aGUgc2FtZSB2bm9kZVxuICBmdW5jdGlvbiBub3JtYWxpemVTdHlsZURhdGEgKGRhdGEpIHtcbiAgICB2YXIgc3R5bGUgPSBub3JtYWxpemVTdHlsZUJpbmRpbmcoZGF0YS5zdHlsZSk7XG4gICAgLy8gc3RhdGljIHN0eWxlIGlzIHByZS1wcm9jZXNzZWQgaW50byBhbiBvYmplY3QgZHVyaW5nIGNvbXBpbGF0aW9uXG4gICAgLy8gYW5kIGlzIGFsd2F5cyBhIGZyZXNoIG9iamVjdCwgc28gaXQncyBzYWZlIHRvIG1lcmdlIGludG8gaXRcbiAgICByZXR1cm4gZGF0YS5zdGF0aWNTdHlsZVxuICAgICAgPyBleHRlbmQoZGF0YS5zdGF0aWNTdHlsZSwgc3R5bGUpXG4gICAgICA6IHN0eWxlXG4gIH1cblxuICAvLyBub3JtYWxpemUgcG9zc2libGUgYXJyYXkgLyBzdHJpbmcgdmFsdWVzIGludG8gT2JqZWN0XG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlQmluZGluZyAoYmluZGluZ1N0eWxlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYmluZGluZ1N0eWxlKSkge1xuICAgICAgcmV0dXJuIHRvT2JqZWN0KGJpbmRpbmdTdHlsZSlcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBiaW5kaW5nU3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gcGFyc2VTdHlsZVRleHQoYmluZGluZ1N0eWxlKVxuICAgIH1cbiAgICByZXR1cm4gYmluZGluZ1N0eWxlXG4gIH1cblxuICAvKipcbiAgICogcGFyZW50IGNvbXBvbmVudCBzdHlsZSBzaG91bGQgYmUgYWZ0ZXIgY2hpbGQnc1xuICAgKiBzbyB0aGF0IHBhcmVudCBjb21wb25lbnQncyBzdHlsZSBjb3VsZCBvdmVycmlkZSBpdFxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U3R5bGUgKHZub2RlLCBjaGVja0NoaWxkKSB7XG4gICAgdmFyIHJlcyA9IHt9O1xuICAgIHZhciBzdHlsZURhdGE7XG5cbiAgICBpZiAoY2hlY2tDaGlsZCkge1xuICAgICAgdmFyIGNoaWxkTm9kZSA9IHZub2RlO1xuICAgICAgd2hpbGUgKGNoaWxkTm9kZS5jb21wb25lbnRJbnN0YW5jZSkge1xuICAgICAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGUuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY2hpbGROb2RlICYmIGNoaWxkTm9kZS5kYXRhICYmXG4gICAgICAgICAgKHN0eWxlRGF0YSA9IG5vcm1hbGl6ZVN0eWxlRGF0YShjaGlsZE5vZGUuZGF0YSkpXG4gICAgICAgICkge1xuICAgICAgICAgIGV4dGVuZChyZXMsIHN0eWxlRGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoKHN0eWxlRGF0YSA9IG5vcm1hbGl6ZVN0eWxlRGF0YSh2bm9kZS5kYXRhKSkpIHtcbiAgICAgIGV4dGVuZChyZXMsIHN0eWxlRGF0YSk7XG4gICAgfVxuXG4gICAgdmFyIHBhcmVudE5vZGUgPSB2bm9kZTtcbiAgICB3aGlsZSAoKHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLnBhcmVudCkpIHtcbiAgICAgIGlmIChwYXJlbnROb2RlLmRhdGEgJiYgKHN0eWxlRGF0YSA9IG5vcm1hbGl6ZVN0eWxlRGF0YShwYXJlbnROb2RlLmRhdGEpKSkge1xuICAgICAgICBleHRlbmQocmVzLCBzdHlsZURhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH1cblxuICAvKiAgKi9cblxuICB2YXIgY3NzVmFyUkUgPSAvXi0tLztcbiAgdmFyIGltcG9ydGFudFJFID0gL1xccyohaW1wb3J0YW50JC87XG4gIHZhciBzZXRQcm9wID0gZnVuY3Rpb24gKGVsLCBuYW1lLCB2YWwpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoY3NzVmFyUkUudGVzdChuYW1lKSkge1xuICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGltcG9ydGFudFJFLnRlc3QodmFsKSkge1xuICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoaHlwaGVuYXRlKG5hbWUpLCB2YWwucmVwbGFjZShpbXBvcnRhbnRSRSwgJycpLCAnaW1wb3J0YW50Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBub3JtYWxpemVkTmFtZSA9IG5vcm1hbGl6ZShuYW1lKTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgLy8gU3VwcG9ydCB2YWx1ZXMgYXJyYXkgY3JlYXRlZCBieSBhdXRvcHJlZml4ZXIsIGUuZy5cbiAgICAgICAgLy8ge2Rpc3BsYXk6IFtcIi13ZWJraXQtYm94XCIsIFwiLW1zLWZsZXhib3hcIiwgXCJmbGV4XCJdfVxuICAgICAgICAvLyBTZXQgdGhlbSBvbmUgYnkgb25lLCBhbmQgdGhlIGJyb3dzZXIgd2lsbCBvbmx5IHNldCB0aG9zZSBpdCBjYW4gcmVjb2duaXplXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB2YWwubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBlbC5zdHlsZVtub3JtYWxpemVkTmFtZV0gPSB2YWxbaV07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnN0eWxlW25vcm1hbGl6ZWROYW1lXSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIHZlbmRvck5hbWVzID0gWydXZWJraXQnLCAnTW96JywgJ21zJ107XG5cbiAgdmFyIGVtcHR5U3R5bGU7XG4gIHZhciBub3JtYWxpemUgPSBjYWNoZWQoZnVuY3Rpb24gKHByb3ApIHtcbiAgICBlbXB0eVN0eWxlID0gZW1wdHlTdHlsZSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKS5zdHlsZTtcbiAgICBwcm9wID0gY2FtZWxpemUocHJvcCk7XG4gICAgaWYgKHByb3AgIT09ICdmaWx0ZXInICYmIChwcm9wIGluIGVtcHR5U3R5bGUpKSB7XG4gICAgICByZXR1cm4gcHJvcFxuICAgIH1cbiAgICB2YXIgY2FwTmFtZSA9IHByb3AuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wLnNsaWNlKDEpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVuZG9yTmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBuYW1lID0gdmVuZG9yTmFtZXNbaV0gKyBjYXBOYW1lO1xuICAgICAgaWYgKG5hbWUgaW4gZW1wdHlTdHlsZSkge1xuICAgICAgICByZXR1cm4gbmFtZVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG9sZFZub2RlLCB2bm9kZSkge1xuICAgIHZhciBkYXRhID0gdm5vZGUuZGF0YTtcbiAgICB2YXIgb2xkRGF0YSA9IG9sZFZub2RlLmRhdGE7XG5cbiAgICBpZiAoaXNVbmRlZihkYXRhLnN0YXRpY1N0eWxlKSAmJiBpc1VuZGVmKGRhdGEuc3R5bGUpICYmXG4gICAgICBpc1VuZGVmKG9sZERhdGEuc3RhdGljU3R5bGUpICYmIGlzVW5kZWYob2xkRGF0YS5zdHlsZSlcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciBjdXIsIG5hbWU7XG4gICAgdmFyIGVsID0gdm5vZGUuZWxtO1xuICAgIHZhciBvbGRTdGF0aWNTdHlsZSA9IG9sZERhdGEuc3RhdGljU3R5bGU7XG4gICAgdmFyIG9sZFN0eWxlQmluZGluZyA9IG9sZERhdGEubm9ybWFsaXplZFN0eWxlIHx8IG9sZERhdGEuc3R5bGUgfHwge307XG5cbiAgICAvLyBpZiBzdGF0aWMgc3R5bGUgZXhpc3RzLCBzdHlsZWJpbmRpbmcgYWxyZWFkeSBtZXJnZWQgaW50byBpdCB3aGVuIGRvaW5nIG5vcm1hbGl6ZVN0eWxlRGF0YVxuICAgIHZhciBvbGRTdHlsZSA9IG9sZFN0YXRpY1N0eWxlIHx8IG9sZFN0eWxlQmluZGluZztcblxuICAgIHZhciBzdHlsZSA9IG5vcm1hbGl6ZVN0eWxlQmluZGluZyh2bm9kZS5kYXRhLnN0eWxlKSB8fCB7fTtcblxuICAgIC8vIHN0b3JlIG5vcm1hbGl6ZWQgc3R5bGUgdW5kZXIgYSBkaWZmZXJlbnQga2V5IGZvciBuZXh0IGRpZmZcbiAgICAvLyBtYWtlIHN1cmUgdG8gY2xvbmUgaXQgaWYgaXQncyByZWFjdGl2ZSwgc2luY2UgdGhlIHVzZXIgbGlrZWx5IHdhbnRzXG4gICAgLy8gdG8gbXV0YXRlIGl0LlxuICAgIHZub2RlLmRhdGEubm9ybWFsaXplZFN0eWxlID0gaXNEZWYoc3R5bGUuX19vYl9fKVxuICAgICAgPyBleHRlbmQoe30sIHN0eWxlKVxuICAgICAgOiBzdHlsZTtcblxuICAgIHZhciBuZXdTdHlsZSA9IGdldFN0eWxlKHZub2RlLCB0cnVlKTtcblxuICAgIGZvciAobmFtZSBpbiBvbGRTdHlsZSkge1xuICAgICAgaWYgKGlzVW5kZWYobmV3U3R5bGVbbmFtZV0pKSB7XG4gICAgICAgIHNldFByb3AoZWwsIG5hbWUsICcnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChuYW1lIGluIG5ld1N0eWxlKSB7XG4gICAgICBjdXIgPSBuZXdTdHlsZVtuYW1lXTtcbiAgICAgIGlmIChjdXIgIT09IG9sZFN0eWxlW25hbWVdKSB7XG4gICAgICAgIC8vIGllOSBzZXR0aW5nIHRvIG51bGwgaGFzIG5vIGVmZmVjdCwgbXVzdCB1c2UgZW1wdHkgc3RyaW5nXG4gICAgICAgIHNldFByb3AoZWwsIG5hbWUsIGN1ciA9PSBudWxsID8gJycgOiBjdXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBzdHlsZSA9IHtcbiAgICBjcmVhdGU6IHVwZGF0ZVN0eWxlLFxuICAgIHVwZGF0ZTogdXBkYXRlU3R5bGVcbiAgfTtcblxuICAvKiAgKi9cblxuICB2YXIgd2hpdGVzcGFjZVJFID0gL1xccysvO1xuXG4gIC8qKlxuICAgKiBBZGQgY2xhc3Mgd2l0aCBjb21wYXRpYmlsaXR5IGZvciBTVkcgc2luY2UgY2xhc3NMaXN0IGlzIG5vdCBzdXBwb3J0ZWQgb25cbiAgICogU1ZHIGVsZW1lbnRzIGluIElFXG4gICAqL1xuICBmdW5jdGlvbiBhZGRDbGFzcyAoZWwsIGNscykge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghY2xzIHx8ICEoY2xzID0gY2xzLnRyaW0oKSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgICBjbHMuc3BsaXQod2hpdGVzcGFjZVJFKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7IHJldHVybiBlbC5jbGFzc0xpc3QuYWRkKGMpOyB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGN1ciA9IFwiIFwiICsgKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykgKyBcIiBcIjtcbiAgICAgIGlmIChjdXIuaW5kZXhPZignICcgKyBjbHMgKyAnICcpIDwgMCkge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgKGN1ciArIGNscykudHJpbSgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGNsYXNzIHdpdGggY29tcGF0aWJpbGl0eSBmb3IgU1ZHIHNpbmNlIGNsYXNzTGlzdCBpcyBub3Qgc3VwcG9ydGVkIG9uXG4gICAqIFNWRyBlbGVtZW50cyBpbiBJRVxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MgKGVsLCBjbHMpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWNscyB8fCAhKGNscyA9IGNscy50cmltKCkpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgIGlmIChjbHMuaW5kZXhPZignICcpID4gLTEpIHtcbiAgICAgICAgY2xzLnNwbGl0KHdoaXRlc3BhY2VSRSkuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gZWwuY2xhc3NMaXN0LnJlbW92ZShjKTsgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XG4gICAgICB9XG4gICAgICBpZiAoIWVsLmNsYXNzTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY3VyID0gXCIgXCIgKyAoZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnKSArIFwiIFwiO1xuICAgICAgdmFyIHRhciA9ICcgJyArIGNscyArICcgJztcbiAgICAgIHdoaWxlIChjdXIuaW5kZXhPZih0YXIpID49IDApIHtcbiAgICAgICAgY3VyID0gY3VyLnJlcGxhY2UodGFyLCAnICcpO1xuICAgICAgfVxuICAgICAgY3VyID0gY3VyLnRyaW0oKTtcbiAgICAgIGlmIChjdXIpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIGN1cik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyogICovXG5cbiAgZnVuY3Rpb24gcmVzb2x2ZVRyYW5zaXRpb24gKGRlZiQkMSkge1xuICAgIGlmICghZGVmJCQxKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAodHlwZW9mIGRlZiQkMSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciByZXMgPSB7fTtcbiAgICAgIGlmIChkZWYkJDEuY3NzICE9PSBmYWxzZSkge1xuICAgICAgICBleHRlbmQocmVzLCBhdXRvQ3NzVHJhbnNpdGlvbihkZWYkJDEubmFtZSB8fCAndicpKTtcbiAgICAgIH1cbiAgICAgIGV4dGVuZChyZXMsIGRlZiQkMSk7XG4gICAgICByZXR1cm4gcmVzXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGVmJCQxID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGF1dG9Dc3NUcmFuc2l0aW9uKGRlZiQkMSlcbiAgICB9XG4gIH1cblxuICB2YXIgYXV0b0Nzc1RyYW5zaXRpb24gPSBjYWNoZWQoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZW50ZXJDbGFzczogKG5hbWUgKyBcIi1lbnRlclwiKSxcbiAgICAgIGVudGVyVG9DbGFzczogKG5hbWUgKyBcIi1lbnRlci10b1wiKSxcbiAgICAgIGVudGVyQWN0aXZlQ2xhc3M6IChuYW1lICsgXCItZW50ZXItYWN0aXZlXCIpLFxuICAgICAgbGVhdmVDbGFzczogKG5hbWUgKyBcIi1sZWF2ZVwiKSxcbiAgICAgIGxlYXZlVG9DbGFzczogKG5hbWUgKyBcIi1sZWF2ZS10b1wiKSxcbiAgICAgIGxlYXZlQWN0aXZlQ2xhc3M6IChuYW1lICsgXCItbGVhdmUtYWN0aXZlXCIpXG4gICAgfVxuICB9KTtcblxuICB2YXIgaGFzVHJhbnNpdGlvbiA9IGluQnJvd3NlciAmJiAhaXNJRTk7XG4gIHZhciBUUkFOU0lUSU9OID0gJ3RyYW5zaXRpb24nO1xuICB2YXIgQU5JTUFUSU9OID0gJ2FuaW1hdGlvbic7XG5cbiAgLy8gVHJhbnNpdGlvbiBwcm9wZXJ0eS9ldmVudCBzbmlmZmluZ1xuICB2YXIgdHJhbnNpdGlvblByb3AgPSAndHJhbnNpdGlvbic7XG4gIHZhciB0cmFuc2l0aW9uRW5kRXZlbnQgPSAndHJhbnNpdGlvbmVuZCc7XG4gIHZhciBhbmltYXRpb25Qcm9wID0gJ2FuaW1hdGlvbic7XG4gIHZhciBhbmltYXRpb25FbmRFdmVudCA9ICdhbmltYXRpb25lbmQnO1xuICBpZiAoaGFzVHJhbnNpdGlvbikge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICh3aW5kb3cub250cmFuc2l0aW9uZW5kID09PSB1bmRlZmluZWQgJiZcbiAgICAgIHdpbmRvdy5vbndlYmtpdHRyYW5zaXRpb25lbmQgIT09IHVuZGVmaW5lZFxuICAgICkge1xuICAgICAgdHJhbnNpdGlvblByb3AgPSAnV2Via2l0VHJhbnNpdGlvbic7XG4gICAgICB0cmFuc2l0aW9uRW5kRXZlbnQgPSAnd2Via2l0VHJhbnNpdGlvbkVuZCc7XG4gICAgfVxuICAgIGlmICh3aW5kb3cub25hbmltYXRpb25lbmQgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgd2luZG93Lm9ud2Via2l0YW5pbWF0aW9uZW5kICE9PSB1bmRlZmluZWRcbiAgICApIHtcbiAgICAgIGFuaW1hdGlvblByb3AgPSAnV2Via2l0QW5pbWF0aW9uJztcbiAgICAgIGFuaW1hdGlvbkVuZEV2ZW50ID0gJ3dlYmtpdEFuaW1hdGlvbkVuZCc7XG4gICAgfVxuICB9XG5cbiAgLy8gYmluZGluZyB0byB3aW5kb3cgaXMgbmVjZXNzYXJ5IHRvIG1ha2UgaG90IHJlbG9hZCB3b3JrIGluIElFIGluIHN0cmljdCBtb2RlXG4gIHZhciByYWYgPSBpbkJyb3dzZXJcbiAgICA/IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgID8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdylcbiAgICAgIDogc2V0VGltZW91dFxuICAgIDogLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gZnVuY3Rpb24gKGZuKSB7IHJldHVybiBmbigpOyB9O1xuXG4gIGZ1bmN0aW9uIG5leHRGcmFtZSAoZm4pIHtcbiAgICByYWYoZnVuY3Rpb24gKCkge1xuICAgICAgcmFmKGZuKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRyYW5zaXRpb25DbGFzcyAoZWwsIGNscykge1xuICAgIHZhciB0cmFuc2l0aW9uQ2xhc3NlcyA9IGVsLl90cmFuc2l0aW9uQ2xhc3NlcyB8fCAoZWwuX3RyYW5zaXRpb25DbGFzc2VzID0gW10pO1xuICAgIGlmICh0cmFuc2l0aW9uQ2xhc3Nlcy5pbmRleE9mKGNscykgPCAwKSB7XG4gICAgICB0cmFuc2l0aW9uQ2xhc3Nlcy5wdXNoKGNscyk7XG4gICAgICBhZGRDbGFzcyhlbCwgY2xzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVUcmFuc2l0aW9uQ2xhc3MgKGVsLCBjbHMpIHtcbiAgICBpZiAoZWwuX3RyYW5zaXRpb25DbGFzc2VzKSB7XG4gICAgICByZW1vdmUoZWwuX3RyYW5zaXRpb25DbGFzc2VzLCBjbHMpO1xuICAgIH1cbiAgICByZW1vdmVDbGFzcyhlbCwgY2xzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdoZW5UcmFuc2l0aW9uRW5kcyAoXG4gICAgZWwsXG4gICAgZXhwZWN0ZWRUeXBlLFxuICAgIGNiXG4gICkge1xuICAgIHZhciByZWYgPSBnZXRUcmFuc2l0aW9uSW5mbyhlbCwgZXhwZWN0ZWRUeXBlKTtcbiAgICB2YXIgdHlwZSA9IHJlZi50eXBlO1xuICAgIHZhciB0aW1lb3V0ID0gcmVmLnRpbWVvdXQ7XG4gICAgdmFyIHByb3BDb3VudCA9IHJlZi5wcm9wQ291bnQ7XG4gICAgaWYgKCF0eXBlKSB7IHJldHVybiBjYigpIH1cbiAgICB2YXIgZXZlbnQgPSB0eXBlID09PSBUUkFOU0lUSU9OID8gdHJhbnNpdGlvbkVuZEV2ZW50IDogYW5pbWF0aW9uRW5kRXZlbnQ7XG4gICAgdmFyIGVuZGVkID0gMDtcbiAgICB2YXIgZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgb25FbmQpO1xuICAgICAgY2IoKTtcbiAgICB9O1xuICAgIHZhciBvbkVuZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS50YXJnZXQgPT09IGVsKSB7XG4gICAgICAgIGlmICgrK2VuZGVkID49IHByb3BDb3VudCkge1xuICAgICAgICAgIGVuZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChlbmRlZCA8IHByb3BDb3VudCkge1xuICAgICAgICBlbmQoKTtcbiAgICAgIH1cbiAgICB9LCB0aW1lb3V0ICsgMSk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgb25FbmQpO1xuICB9XG5cbiAgdmFyIHRyYW5zZm9ybVJFID0gL1xcYih0cmFuc2Zvcm18YWxsKSgsfCQpLztcblxuICBmdW5jdGlvbiBnZXRUcmFuc2l0aW9uSW5mbyAoZWwsIGV4cGVjdGVkVHlwZSkge1xuICAgIHZhciBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gICAgLy8gSlNET00gbWF5IHJldHVybiB1bmRlZmluZWQgZm9yIHRyYW5zaXRpb24gcHJvcGVydGllc1xuICAgIHZhciB0cmFuc2l0aW9uRGVsYXlzID0gKHN0eWxlc1t0cmFuc2l0aW9uUHJvcCArICdEZWxheSddIHx8ICcnKS5zcGxpdCgnLCAnKTtcbiAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9ucyA9IChzdHlsZXNbdHJhbnNpdGlvblByb3AgKyAnRHVyYXRpb24nXSB8fCAnJykuc3BsaXQoJywgJyk7XG4gICAgdmFyIHRyYW5zaXRpb25UaW1lb3V0ID0gZ2V0VGltZW91dCh0cmFuc2l0aW9uRGVsYXlzLCB0cmFuc2l0aW9uRHVyYXRpb25zKTtcbiAgICB2YXIgYW5pbWF0aW9uRGVsYXlzID0gKHN0eWxlc1thbmltYXRpb25Qcm9wICsgJ0RlbGF5J10gfHwgJycpLnNwbGl0KCcsICcpO1xuICAgIHZhciBhbmltYXRpb25EdXJhdGlvbnMgPSAoc3R5bGVzW2FuaW1hdGlvblByb3AgKyAnRHVyYXRpb24nXSB8fCAnJykuc3BsaXQoJywgJyk7XG4gICAgdmFyIGFuaW1hdGlvblRpbWVvdXQgPSBnZXRUaW1lb3V0KGFuaW1hdGlvbkRlbGF5cywgYW5pbWF0aW9uRHVyYXRpb25zKTtcblxuICAgIHZhciB0eXBlO1xuICAgIHZhciB0aW1lb3V0ID0gMDtcbiAgICB2YXIgcHJvcENvdW50ID0gMDtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoZXhwZWN0ZWRUeXBlID09PSBUUkFOU0lUSU9OKSB7XG4gICAgICBpZiAodHJhbnNpdGlvblRpbWVvdXQgPiAwKSB7XG4gICAgICAgIHR5cGUgPSBUUkFOU0lUSU9OO1xuICAgICAgICB0aW1lb3V0ID0gdHJhbnNpdGlvblRpbWVvdXQ7XG4gICAgICAgIHByb3BDb3VudCA9IHRyYW5zaXRpb25EdXJhdGlvbnMubGVuZ3RoO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlID09PSBBTklNQVRJT04pIHtcbiAgICAgIGlmIChhbmltYXRpb25UaW1lb3V0ID4gMCkge1xuICAgICAgICB0eXBlID0gQU5JTUFUSU9OO1xuICAgICAgICB0aW1lb3V0ID0gYW5pbWF0aW9uVGltZW91dDtcbiAgICAgICAgcHJvcENvdW50ID0gYW5pbWF0aW9uRHVyYXRpb25zLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGltZW91dCA9IE1hdGgubWF4KHRyYW5zaXRpb25UaW1lb3V0LCBhbmltYXRpb25UaW1lb3V0KTtcbiAgICAgIHR5cGUgPSB0aW1lb3V0ID4gMFxuICAgICAgICA/IHRyYW5zaXRpb25UaW1lb3V0ID4gYW5pbWF0aW9uVGltZW91dFxuICAgICAgICAgID8gVFJBTlNJVElPTlxuICAgICAgICAgIDogQU5JTUFUSU9OXG4gICAgICAgIDogbnVsbDtcbiAgICAgIHByb3BDb3VudCA9IHR5cGVcbiAgICAgICAgPyB0eXBlID09PSBUUkFOU0lUSU9OXG4gICAgICAgICAgPyB0cmFuc2l0aW9uRHVyYXRpb25zLmxlbmd0aFxuICAgICAgICAgIDogYW5pbWF0aW9uRHVyYXRpb25zLmxlbmd0aFxuICAgICAgICA6IDA7XG4gICAgfVxuICAgIHZhciBoYXNUcmFuc2Zvcm0gPVxuICAgICAgdHlwZSA9PT0gVFJBTlNJVElPTiAmJlxuICAgICAgdHJhbnNmb3JtUkUudGVzdChzdHlsZXNbdHJhbnNpdGlvblByb3AgKyAnUHJvcGVydHknXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICB0aW1lb3V0OiB0aW1lb3V0LFxuICAgICAgcHJvcENvdW50OiBwcm9wQ291bnQsXG4gICAgICBoYXNUcmFuc2Zvcm06IGhhc1RyYW5zZm9ybVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRpbWVvdXQgKGRlbGF5cywgZHVyYXRpb25zKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICB3aGlsZSAoZGVsYXlzLmxlbmd0aCA8IGR1cmF0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGRlbGF5cyA9IGRlbGF5cy5jb25jYXQoZGVsYXlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgZHVyYXRpb25zLm1hcChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgcmV0dXJuIHRvTXMoZCkgKyB0b01zKGRlbGF5c1tpXSlcbiAgICB9KSlcbiAgfVxuXG4gIC8vIE9sZCB2ZXJzaW9ucyBvZiBDaHJvbWl1bSAoYmVsb3cgNjEuMC4zMTYzLjEwMCkgZm9ybWF0cyBmbG9hdGluZyBwb2ludGVyIG51bWJlcnNcbiAgLy8gaW4gYSBsb2NhbGUtZGVwZW5kZW50IHdheSwgdXNpbmcgYSBjb21tYSBpbnN0ZWFkIG9mIGEgZG90LlxuICAvLyBJZiBjb21tYSBpcyBub3QgcmVwbGFjZWQgd2l0aCBhIGRvdCwgdGhlIGlucHV0IHdpbGwgYmUgcm91bmRlZCBkb3duIChpLmUuIGFjdGluZ1xuICAvLyBhcyBhIGZsb29yIGZ1bmN0aW9uKSBjYXVzaW5nIHVuZXhwZWN0ZWQgYmVoYXZpb3JzXG4gIGZ1bmN0aW9uIHRvTXMgKHMpIHtcbiAgICByZXR1cm4gTnVtYmVyKHMuc2xpY2UoMCwgLTEpLnJlcGxhY2UoJywnLCAnLicpKSAqIDEwMDBcbiAgfVxuXG4gIC8qICAqL1xuXG4gIGZ1bmN0aW9uIGVudGVyICh2bm9kZSwgdG9nZ2xlRGlzcGxheSkge1xuICAgIHZhciBlbCA9IHZub2RlLmVsbTtcblxuICAgIC8vIGNhbGwgbGVhdmUgY2FsbGJhY2sgbm93XG4gICAgaWYgKGlzRGVmKGVsLl9sZWF2ZUNiKSkge1xuICAgICAgZWwuX2xlYXZlQ2IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgIGVsLl9sZWF2ZUNiKCk7XG4gICAgfVxuXG4gICAgdmFyIGRhdGEgPSByZXNvbHZlVHJhbnNpdGlvbih2bm9kZS5kYXRhLnRyYW5zaXRpb24pO1xuICAgIGlmIChpc1VuZGVmKGRhdGEpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoaXNEZWYoZWwuX2VudGVyQ2IpIHx8IGVsLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgY3NzID0gZGF0YS5jc3M7XG4gICAgdmFyIHR5cGUgPSBkYXRhLnR5cGU7XG4gICAgdmFyIGVudGVyQ2xhc3MgPSBkYXRhLmVudGVyQ2xhc3M7XG4gICAgdmFyIGVudGVyVG9DbGFzcyA9IGRhdGEuZW50ZXJUb0NsYXNzO1xuICAgIHZhciBlbnRlckFjdGl2ZUNsYXNzID0gZGF0YS5lbnRlckFjdGl2ZUNsYXNzO1xuICAgIHZhciBhcHBlYXJDbGFzcyA9IGRhdGEuYXBwZWFyQ2xhc3M7XG4gICAgdmFyIGFwcGVhclRvQ2xhc3MgPSBkYXRhLmFwcGVhclRvQ2xhc3M7XG4gICAgdmFyIGFwcGVhckFjdGl2ZUNsYXNzID0gZGF0YS5hcHBlYXJBY3RpdmVDbGFzcztcbiAgICB2YXIgYmVmb3JlRW50ZXIgPSBkYXRhLmJlZm9yZUVudGVyO1xuICAgIHZhciBlbnRlciA9IGRhdGEuZW50ZXI7XG4gICAgdmFyIGFmdGVyRW50ZXIgPSBkYXRhLmFmdGVyRW50ZXI7XG4gICAgdmFyIGVudGVyQ2FuY2VsbGVkID0gZGF0YS5lbnRlckNhbmNlbGxlZDtcbiAgICB2YXIgYmVmb3JlQXBwZWFyID0gZGF0YS5iZWZvcmVBcHBlYXI7XG4gICAgdmFyIGFwcGVhciA9IGRhdGEuYXBwZWFyO1xuICAgIHZhciBhZnRlckFwcGVhciA9IGRhdGEuYWZ0ZXJBcHBlYXI7XG4gICAgdmFyIGFwcGVhckNhbmNlbGxlZCA9IGRhdGEuYXBwZWFyQ2FuY2VsbGVkO1xuICAgIHZhciBkdXJhdGlvbiA9IGRhdGEuZHVyYXRpb247XG5cbiAgICAvLyBhY3RpdmVJbnN0YW5jZSB3aWxsIGFsd2F5cyBiZSB0aGUgPHRyYW5zaXRpb24+IGNvbXBvbmVudCBtYW5hZ2luZyB0aGlzXG4gICAgLy8gdHJhbnNpdGlvbi4gT25lIGVkZ2UgY2FzZSB0byBjaGVjayBpcyB3aGVuIHRoZSA8dHJhbnNpdGlvbj4gaXMgcGxhY2VkXG4gICAgLy8gYXMgdGhlIHJvb3Qgbm9kZSBvZiBhIGNoaWxkIGNvbXBvbmVudC4gSW4gdGhhdCBjYXNlIHdlIG5lZWQgdG8gY2hlY2tcbiAgICAvLyA8dHJhbnNpdGlvbj4ncyBwYXJlbnQgZm9yIGFwcGVhciBjaGVjay5cbiAgICB2YXIgY29udGV4dCA9IGFjdGl2ZUluc3RhbmNlO1xuICAgIHZhciB0cmFuc2l0aW9uTm9kZSA9IGFjdGl2ZUluc3RhbmNlLiR2bm9kZTtcbiAgICB3aGlsZSAodHJhbnNpdGlvbk5vZGUgJiYgdHJhbnNpdGlvbk5vZGUucGFyZW50KSB7XG4gICAgICBjb250ZXh0ID0gdHJhbnNpdGlvbk5vZGUuY29udGV4dDtcbiAgICAgIHRyYW5zaXRpb25Ob2RlID0gdHJhbnNpdGlvbk5vZGUucGFyZW50O1xuICAgIH1cblxuICAgIHZhciBpc0FwcGVhciA9ICFjb250ZXh0Ll9pc01vdW50ZWQgfHwgIXZub2RlLmlzUm9vdEluc2VydDtcblxuICAgIGlmIChpc0FwcGVhciAmJiAhYXBwZWFyICYmIGFwcGVhciAhPT0gJycpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciBzdGFydENsYXNzID0gaXNBcHBlYXIgJiYgYXBwZWFyQ2xhc3NcbiAgICAgID8gYXBwZWFyQ2xhc3NcbiAgICAgIDogZW50ZXJDbGFzcztcbiAgICB2YXIgYWN0aXZlQ2xhc3MgPSBpc0FwcGVhciAmJiBhcHBlYXJBY3RpdmVDbGFzc1xuICAgICAgPyBhcHBlYXJBY3RpdmVDbGFzc1xuICAgICAgOiBlbnRlckFjdGl2ZUNsYXNzO1xuICAgIHZhciB0b0NsYXNzID0gaXNBcHBlYXIgJiYgYXBwZWFyVG9DbGFzc1xuICAgICAgPyBhcHBlYXJUb0NsYXNzXG4gICAgICA6IGVudGVyVG9DbGFzcztcblxuICAgIHZhciBiZWZvcmVFbnRlckhvb2sgPSBpc0FwcGVhclxuICAgICAgPyAoYmVmb3JlQXBwZWFyIHx8IGJlZm9yZUVudGVyKVxuICAgICAgOiBiZWZvcmVFbnRlcjtcbiAgICB2YXIgZW50ZXJIb29rID0gaXNBcHBlYXJcbiAgICAgID8gKHR5cGVvZiBhcHBlYXIgPT09ICdmdW5jdGlvbicgPyBhcHBlYXIgOiBlbnRlcilcbiAgICAgIDogZW50ZXI7XG4gICAgdmFyIGFmdGVyRW50ZXJIb29rID0gaXNBcHBlYXJcbiAgICAgID8gKGFmdGVyQXBwZWFyIHx8IGFmdGVyRW50ZXIpXG4gICAgICA6IGFmdGVyRW50ZXI7XG4gICAgdmFyIGVudGVyQ2FuY2VsbGVkSG9vayA9IGlzQXBwZWFyXG4gICAgICA/IChhcHBlYXJDYW5jZWxsZWQgfHwgZW50ZXJDYW5jZWxsZWQpXG4gICAgICA6IGVudGVyQ2FuY2VsbGVkO1xuXG4gICAgdmFyIGV4cGxpY2l0RW50ZXJEdXJhdGlvbiA9IHRvTnVtYmVyKFxuICAgICAgaXNPYmplY3QoZHVyYXRpb24pXG4gICAgICAgID8gZHVyYXRpb24uZW50ZXJcbiAgICAgICAgOiBkdXJhdGlvblxuICAgICk7XG5cbiAgICBpZiAoZXhwbGljaXRFbnRlckR1cmF0aW9uICE9IG51bGwpIHtcbiAgICAgIGNoZWNrRHVyYXRpb24oZXhwbGljaXRFbnRlckR1cmF0aW9uLCAnZW50ZXInLCB2bm9kZSk7XG4gICAgfVxuXG4gICAgdmFyIGV4cGVjdHNDU1MgPSBjc3MgIT09IGZhbHNlICYmICFpc0lFOTtcbiAgICB2YXIgdXNlcldhbnRzQ29udHJvbCA9IGdldEhvb2tBcmd1bWVudHNMZW5ndGgoZW50ZXJIb29rKTtcblxuICAgIHZhciBjYiA9IGVsLl9lbnRlckNiID0gb25jZShmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZXhwZWN0c0NTUykge1xuICAgICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIHRvQ2xhc3MpO1xuICAgICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIGFjdGl2ZUNsYXNzKTtcbiAgICAgIH1cbiAgICAgIGlmIChjYi5jYW5jZWxsZWQpIHtcbiAgICAgICAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICAgICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIHN0YXJ0Q2xhc3MpO1xuICAgICAgICB9XG4gICAgICAgIGVudGVyQ2FuY2VsbGVkSG9vayAmJiBlbnRlckNhbmNlbGxlZEhvb2soZWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWZ0ZXJFbnRlckhvb2sgJiYgYWZ0ZXJFbnRlckhvb2soZWwpO1xuICAgICAgfVxuICAgICAgZWwuX2VudGVyQ2IgPSBudWxsO1xuICAgIH0pO1xuXG4gICAgaWYgKCF2bm9kZS5kYXRhLnNob3cpIHtcbiAgICAgIC8vIHJlbW92ZSBwZW5kaW5nIGxlYXZlIGVsZW1lbnQgb24gZW50ZXIgYnkgaW5qZWN0aW5nIGFuIGluc2VydCBob29rXG4gICAgICBtZXJnZVZOb2RlSG9vayh2bm9kZSwgJ2luc2VydCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudE5vZGU7XG4gICAgICAgIHZhciBwZW5kaW5nTm9kZSA9IHBhcmVudCAmJiBwYXJlbnQuX3BlbmRpbmcgJiYgcGFyZW50Ll9wZW5kaW5nW3Zub2RlLmtleV07XG4gICAgICAgIGlmIChwZW5kaW5nTm9kZSAmJlxuICAgICAgICAgIHBlbmRpbmdOb2RlLnRhZyA9PT0gdm5vZGUudGFnICYmXG4gICAgICAgICAgcGVuZGluZ05vZGUuZWxtLl9sZWF2ZUNiXG4gICAgICAgICkge1xuICAgICAgICAgIHBlbmRpbmdOb2RlLmVsbS5fbGVhdmVDYigpO1xuICAgICAgICB9XG4gICAgICAgIGVudGVySG9vayAmJiBlbnRlckhvb2soZWwsIGNiKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHN0YXJ0IGVudGVyIHRyYW5zaXRpb25cbiAgICBiZWZvcmVFbnRlckhvb2sgJiYgYmVmb3JlRW50ZXJIb29rKGVsKTtcbiAgICBpZiAoZXhwZWN0c0NTUykge1xuICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBzdGFydENsYXNzKTtcbiAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgYWN0aXZlQ2xhc3MpO1xuICAgICAgbmV4dEZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBzdGFydENsYXNzKTtcbiAgICAgICAgaWYgKCFjYi5jYW5jZWxsZWQpIHtcbiAgICAgICAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIHRvQ2xhc3MpO1xuICAgICAgICAgIGlmICghdXNlcldhbnRzQ29udHJvbCkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWREdXJhdGlvbihleHBsaWNpdEVudGVyRHVyYXRpb24pKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoY2IsIGV4cGxpY2l0RW50ZXJEdXJhdGlvbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3aGVuVHJhbnNpdGlvbkVuZHMoZWwsIHR5cGUsIGNiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh2bm9kZS5kYXRhLnNob3cpIHtcbiAgICAgIHRvZ2dsZURpc3BsYXkgJiYgdG9nZ2xlRGlzcGxheSgpO1xuICAgICAgZW50ZXJIb29rICYmIGVudGVySG9vayhlbCwgY2IpO1xuICAgIH1cblxuICAgIGlmICghZXhwZWN0c0NTUyAmJiAhdXNlcldhbnRzQ29udHJvbCkge1xuICAgICAgY2IoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsZWF2ZSAodm5vZGUsIHJtKSB7XG4gICAgdmFyIGVsID0gdm5vZGUuZWxtO1xuXG4gICAgLy8gY2FsbCBlbnRlciBjYWxsYmFjayBub3dcbiAgICBpZiAoaXNEZWYoZWwuX2VudGVyQ2IpKSB7XG4gICAgICBlbC5fZW50ZXJDYi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgZWwuX2VudGVyQ2IoKTtcbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IHJlc29sdmVUcmFuc2l0aW9uKHZub2RlLmRhdGEudHJhbnNpdGlvbik7XG4gICAgaWYgKGlzVW5kZWYoZGF0YSkgfHwgZWwubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgIHJldHVybiBybSgpXG4gICAgfVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKGlzRGVmKGVsLl9sZWF2ZUNiKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFyIGNzcyA9IGRhdGEuY3NzO1xuICAgIHZhciB0eXBlID0gZGF0YS50eXBlO1xuICAgIHZhciBsZWF2ZUNsYXNzID0gZGF0YS5sZWF2ZUNsYXNzO1xuICAgIHZhciBsZWF2ZVRvQ2xhc3MgPSBkYXRhLmxlYXZlVG9DbGFzcztcbiAgICB2YXIgbGVhdmVBY3RpdmVDbGFzcyA9IGRhdGEubGVhdmVBY3RpdmVDbGFzcztcbiAgICB2YXIgYmVmb3JlTGVhdmUgPSBkYXRhLmJlZm9yZUxlYXZlO1xuICAgIHZhciBsZWF2ZSA9IGRhdGEubGVhdmU7XG4gICAgdmFyIGFmdGVyTGVhdmUgPSBkYXRhLmFmdGVyTGVhdmU7XG4gICAgdmFyIGxlYXZlQ2FuY2VsbGVkID0gZGF0YS5sZWF2ZUNhbmNlbGxlZDtcbiAgICB2YXIgZGVsYXlMZWF2ZSA9IGRhdGEuZGVsYXlMZWF2ZTtcbiAgICB2YXIgZHVyYXRpb24gPSBkYXRhLmR1cmF0aW9uO1xuXG4gICAgdmFyIGV4cGVjdHNDU1MgPSBjc3MgIT09IGZhbHNlICYmICFpc0lFOTtcbiAgICB2YXIgdXNlcldhbnRzQ29udHJvbCA9IGdldEhvb2tBcmd1bWVudHNMZW5ndGgobGVhdmUpO1xuXG4gICAgdmFyIGV4cGxpY2l0TGVhdmVEdXJhdGlvbiA9IHRvTnVtYmVyKFxuICAgICAgaXNPYmplY3QoZHVyYXRpb24pXG4gICAgICAgID8gZHVyYXRpb24ubGVhdmVcbiAgICAgICAgOiBkdXJhdGlvblxuICAgICk7XG5cbiAgICBpZiAoaXNEZWYoZXhwbGljaXRMZWF2ZUR1cmF0aW9uKSkge1xuICAgICAgY2hlY2tEdXJhdGlvbihleHBsaWNpdExlYXZlRHVyYXRpb24sICdsZWF2ZScsIHZub2RlKTtcbiAgICB9XG5cbiAgICB2YXIgY2IgPSBlbC5fbGVhdmVDYiA9IG9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGVsLnBhcmVudE5vZGUgJiYgZWwucGFyZW50Tm9kZS5fcGVuZGluZykge1xuICAgICAgICBlbC5wYXJlbnROb2RlLl9wZW5kaW5nW3Zub2RlLmtleV0gPSBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZVRvQ2xhc3MpO1xuICAgICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlQWN0aXZlQ2xhc3MpO1xuICAgICAgfVxuICAgICAgaWYgKGNiLmNhbmNlbGxlZCkge1xuICAgICAgICBpZiAoZXhwZWN0c0NTUykge1xuICAgICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgbGVhdmVDYW5jZWxsZWQgJiYgbGVhdmVDYW5jZWxsZWQoZWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm0oKTtcbiAgICAgICAgYWZ0ZXJMZWF2ZSAmJiBhZnRlckxlYXZlKGVsKTtcbiAgICAgIH1cbiAgICAgIGVsLl9sZWF2ZUNiID0gbnVsbDtcbiAgICB9KTtcblxuICAgIGlmIChkZWxheUxlYXZlKSB7XG4gICAgICBkZWxheUxlYXZlKHBlcmZvcm1MZWF2ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBlcmZvcm1MZWF2ZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlcmZvcm1MZWF2ZSAoKSB7XG4gICAgICAvLyB0aGUgZGVsYXllZCBsZWF2ZSBtYXkgaGF2ZSBhbHJlYWR5IGJlZW4gY2FuY2VsbGVkXG4gICAgICBpZiAoY2IuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgLy8gcmVjb3JkIGxlYXZpbmcgZWxlbWVudFxuICAgICAgaWYgKCF2bm9kZS5kYXRhLnNob3cgJiYgZWwucGFyZW50Tm9kZSkge1xuICAgICAgICAoZWwucGFyZW50Tm9kZS5fcGVuZGluZyB8fCAoZWwucGFyZW50Tm9kZS5fcGVuZGluZyA9IHt9KSlbKHZub2RlLmtleSldID0gdm5vZGU7XG4gICAgICB9XG4gICAgICBiZWZvcmVMZWF2ZSAmJiBiZWZvcmVMZWF2ZShlbCk7XG4gICAgICBpZiAoZXhwZWN0c0NTUykge1xuICAgICAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlQ2xhc3MpO1xuICAgICAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlQWN0aXZlQ2xhc3MpO1xuICAgICAgICBuZXh0RnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVDbGFzcyk7XG4gICAgICAgICAgaWYgKCFjYi5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVUb0NsYXNzKTtcbiAgICAgICAgICAgIGlmICghdXNlcldhbnRzQ29udHJvbCkge1xuICAgICAgICAgICAgICBpZiAoaXNWYWxpZER1cmF0aW9uKGV4cGxpY2l0TGVhdmVEdXJhdGlvbikpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGNiLCBleHBsaWNpdExlYXZlRHVyYXRpb24pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdoZW5UcmFuc2l0aW9uRW5kcyhlbCwgdHlwZSwgY2IpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGxlYXZlICYmIGxlYXZlKGVsLCBjYik7XG4gICAgICBpZiAoIWV4cGVjdHNDU1MgJiYgIXVzZXJXYW50c0NvbnRyb2wpIHtcbiAgICAgICAgY2IoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBvbmx5IHVzZWQgaW4gZGV2IG1vZGVcbiAgZnVuY3Rpb24gY2hlY2tEdXJhdGlvbiAodmFsLCBuYW1lLCB2bm9kZSkge1xuICAgIGlmICh0eXBlb2YgdmFsICE9PSAnbnVtYmVyJykge1xuICAgICAgd2FybihcbiAgICAgICAgXCI8dHJhbnNpdGlvbj4gZXhwbGljaXQgXCIgKyBuYW1lICsgXCIgZHVyYXRpb24gaXMgbm90IGEgdmFsaWQgbnVtYmVyIC0gXCIgK1xuICAgICAgICBcImdvdCBcIiArIChKU09OLnN0cmluZ2lmeSh2YWwpKSArIFwiLlwiLFxuICAgICAgICB2bm9kZS5jb250ZXh0XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoaXNOYU4odmFsKSkge1xuICAgICAgd2FybihcbiAgICAgICAgXCI8dHJhbnNpdGlvbj4gZXhwbGljaXQgXCIgKyBuYW1lICsgXCIgZHVyYXRpb24gaXMgTmFOIC0gXCIgK1xuICAgICAgICAndGhlIGR1cmF0aW9uIGV4cHJlc3Npb24gbWlnaHQgYmUgaW5jb3JyZWN0LicsXG4gICAgICAgIHZub2RlLmNvbnRleHRcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNWYWxpZER1cmF0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHZhbClcbiAgfVxuXG4gIC8qKlxuICAgKiBOb3JtYWxpemUgYSB0cmFuc2l0aW9uIGhvb2sncyBhcmd1bWVudCBsZW5ndGguIFRoZSBob29rIG1heSBiZTpcbiAgICogLSBhIG1lcmdlZCBob29rIChpbnZva2VyKSB3aXRoIHRoZSBvcmlnaW5hbCBpbiAuZm5zXG4gICAqIC0gYSB3cmFwcGVkIGNvbXBvbmVudCBtZXRob2QgKGNoZWNrIC5fbGVuZ3RoKVxuICAgKiAtIGEgcGxhaW4gZnVuY3Rpb24gKC5sZW5ndGgpXG4gICAqL1xuICBmdW5jdGlvbiBnZXRIb29rQXJndW1lbnRzTGVuZ3RoIChmbikge1xuICAgIGlmIChpc1VuZGVmKGZuKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHZhciBpbnZva2VyRm5zID0gZm4uZm5zO1xuICAgIGlmIChpc0RlZihpbnZva2VyRm5zKSkge1xuICAgICAgLy8gaW52b2tlclxuICAgICAgcmV0dXJuIGdldEhvb2tBcmd1bWVudHNMZW5ndGgoXG4gICAgICAgIEFycmF5LmlzQXJyYXkoaW52b2tlckZucylcbiAgICAgICAgICA/IGludm9rZXJGbnNbMF1cbiAgICAgICAgICA6IGludm9rZXJGbnNcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChmbi5fbGVuZ3RoIHx8IGZuLmxlbmd0aCkgPiAxXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2VudGVyIChfLCB2bm9kZSkge1xuICAgIGlmICh2bm9kZS5kYXRhLnNob3cgIT09IHRydWUpIHtcbiAgICAgIGVudGVyKHZub2RlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgdHJhbnNpdGlvbiA9IGluQnJvd3NlciA/IHtcbiAgICBjcmVhdGU6IF9lbnRlcixcbiAgICBhY3RpdmF0ZTogX2VudGVyLFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlJCQxICh2bm9kZSwgcm0pIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAodm5vZGUuZGF0YS5zaG93ICE9PSB0cnVlKSB7XG4gICAgICAgIGxlYXZlKHZub2RlLCBybSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBybSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSA6IHt9O1xuXG4gIHZhciBwbGF0Zm9ybU1vZHVsZXMgPSBbXG4gICAgYXR0cnMsXG4gICAga2xhc3MsXG4gICAgZXZlbnRzLFxuICAgIGRvbVByb3BzLFxuICAgIHN0eWxlLFxuICAgIHRyYW5zaXRpb25cbiAgXTtcblxuICAvKiAgKi9cblxuICAvLyB0aGUgZGlyZWN0aXZlIG1vZHVsZSBzaG91bGQgYmUgYXBwbGllZCBsYXN0LCBhZnRlciBhbGxcbiAgLy8gYnVpbHQtaW4gbW9kdWxlcyBoYXZlIGJlZW4gYXBwbGllZC5cbiAgdmFyIG1vZHVsZXMgPSBwbGF0Zm9ybU1vZHVsZXMuY29uY2F0KGJhc2VNb2R1bGVzKTtcblxuICB2YXIgcGF0Y2ggPSBjcmVhdGVQYXRjaEZ1bmN0aW9uKHsgbm9kZU9wczogbm9kZU9wcywgbW9kdWxlczogbW9kdWxlcyB9KTtcblxuICAvKipcbiAgICogTm90IHR5cGUgY2hlY2tpbmcgdGhpcyBmaWxlIGJlY2F1c2UgZmxvdyBkb2Vzbid0IGxpa2UgYXR0YWNoaW5nXG4gICAqIHByb3BlcnRpZXMgdG8gRWxlbWVudHMuXG4gICAqL1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoaXNJRTkpIHtcbiAgICAvLyBodHRwOi8vd3d3Lm1hdHRzNDExLmNvbS9wb3N0L2ludGVybmV0LWV4cGxvcmVyLTktb25pbnB1dC9cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3Rpb25jaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgaWYgKGVsICYmIGVsLnZtb2RlbCkge1xuICAgICAgICB0cmlnZ2VyKGVsLCAnaW5wdXQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgaW5zZXJ0ZWQ6IGZ1bmN0aW9uIGluc2VydGVkIChlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKSB7XG4gICAgICBpZiAodm5vZGUudGFnID09PSAnc2VsZWN0Jykge1xuICAgICAgICAvLyAjNjkwM1xuICAgICAgICBpZiAob2xkVm5vZGUuZWxtICYmICFvbGRWbm9kZS5lbG0uX3ZPcHRpb25zKSB7XG4gICAgICAgICAgbWVyZ2VWTm9kZUhvb2sodm5vZGUsICdwb3N0cGF0Y2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkaXJlY3RpdmUuY29tcG9uZW50VXBkYXRlZChlbCwgYmluZGluZywgdm5vZGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFNlbGVjdGVkKGVsLCBiaW5kaW5nLCB2bm9kZS5jb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBlbC5fdk9wdGlvbnMgPSBbXS5tYXAuY2FsbChlbC5vcHRpb25zLCBnZXRWYWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHZub2RlLnRhZyA9PT0gJ3RleHRhcmVhJyB8fCBpc1RleHRJbnB1dFR5cGUoZWwudHlwZSkpIHtcbiAgICAgICAgZWwuX3ZNb2RpZmllcnMgPSBiaW5kaW5nLm1vZGlmaWVycztcbiAgICAgICAgaWYgKCFiaW5kaW5nLm1vZGlmaWVycy5sYXp5KSB7XG4gICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25zdGFydCcsIG9uQ29tcG9zaXRpb25TdGFydCk7XG4gICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25lbmQnLCBvbkNvbXBvc2l0aW9uRW5kKTtcbiAgICAgICAgICAvLyBTYWZhcmkgPCAxMC4yICYgVUlXZWJWaWV3IGRvZXNuJ3QgZmlyZSBjb21wb3NpdGlvbmVuZCB3aGVuXG4gICAgICAgICAgLy8gc3dpdGNoaW5nIGZvY3VzIGJlZm9yZSBjb25maXJtaW5nIGNvbXBvc2l0aW9uIGNob2ljZVxuICAgICAgICAgIC8vIHRoaXMgYWxzbyBmaXhlcyB0aGUgaXNzdWUgd2hlcmUgc29tZSBicm93c2VycyBlLmcuIGlPUyBDaHJvbWVcbiAgICAgICAgICAvLyBmaXJlcyBcImNoYW5nZVwiIGluc3RlYWQgb2YgXCJpbnB1dFwiIG9uIGF1dG9jb21wbGV0ZS5cbiAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBvbkNvbXBvc2l0aW9uRW5kKTtcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgICBpZiAoaXNJRTkpIHtcbiAgICAgICAgICAgIGVsLnZtb2RlbCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFVwZGF0ZWQ6IGZ1bmN0aW9uIGNvbXBvbmVudFVwZGF0ZWQgKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuICAgICAgaWYgKHZub2RlLnRhZyA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgc2V0U2VsZWN0ZWQoZWwsIGJpbmRpbmcsIHZub2RlLmNvbnRleHQpO1xuICAgICAgICAvLyBpbiBjYXNlIHRoZSBvcHRpb25zIHJlbmRlcmVkIGJ5IHYtZm9yIGhhdmUgY2hhbmdlZCxcbiAgICAgICAgLy8gaXQncyBwb3NzaWJsZSB0aGF0IHRoZSB2YWx1ZSBpcyBvdXQtb2Ytc3luYyB3aXRoIHRoZSByZW5kZXJlZCBvcHRpb25zLlxuICAgICAgICAvLyBkZXRlY3Qgc3VjaCBjYXNlcyBhbmQgZmlsdGVyIG91dCB2YWx1ZXMgdGhhdCBubyBsb25nZXIgaGFzIGEgbWF0Y2hpbmdcbiAgICAgICAgLy8gb3B0aW9uIGluIHRoZSBET00uXG4gICAgICAgIHZhciBwcmV2T3B0aW9ucyA9IGVsLl92T3B0aW9ucztcbiAgICAgICAgdmFyIGN1ck9wdGlvbnMgPSBlbC5fdk9wdGlvbnMgPSBbXS5tYXAuY2FsbChlbC5vcHRpb25zLCBnZXRWYWx1ZSk7XG4gICAgICAgIGlmIChjdXJPcHRpb25zLnNvbWUoZnVuY3Rpb24gKG8sIGkpIHsgcmV0dXJuICFsb29zZUVxdWFsKG8sIHByZXZPcHRpb25zW2ldKTsgfSkpIHtcbiAgICAgICAgICAvLyB0cmlnZ2VyIGNoYW5nZSBldmVudCBpZlxuICAgICAgICAgIC8vIG5vIG1hdGNoaW5nIG9wdGlvbiBmb3VuZCBmb3IgYXQgbGVhc3Qgb25lIHZhbHVlXG4gICAgICAgICAgdmFyIG5lZWRSZXNldCA9IGVsLm11bHRpcGxlXG4gICAgICAgICAgICA/IGJpbmRpbmcudmFsdWUuc29tZShmdW5jdGlvbiAodikgeyByZXR1cm4gaGFzTm9NYXRjaGluZ09wdGlvbih2LCBjdXJPcHRpb25zKTsgfSlcbiAgICAgICAgICAgIDogYmluZGluZy52YWx1ZSAhPT0gYmluZGluZy5vbGRWYWx1ZSAmJiBoYXNOb01hdGNoaW5nT3B0aW9uKGJpbmRpbmcudmFsdWUsIGN1ck9wdGlvbnMpO1xuICAgICAgICAgIGlmIChuZWVkUmVzZXQpIHtcbiAgICAgICAgICAgIHRyaWdnZXIoZWwsICdjaGFuZ2UnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gc2V0U2VsZWN0ZWQgKGVsLCBiaW5kaW5nLCB2bSkge1xuICAgIGFjdHVhbGx5U2V0U2VsZWN0ZWQoZWwsIGJpbmRpbmcsIHZtKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoaXNJRSB8fCBpc0VkZ2UpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBhY3R1YWxseVNldFNlbGVjdGVkKGVsLCBiaW5kaW5nLCB2bSk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhY3R1YWxseVNldFNlbGVjdGVkIChlbCwgYmluZGluZywgdm0pIHtcbiAgICB2YXIgdmFsdWUgPSBiaW5kaW5nLnZhbHVlO1xuICAgIHZhciBpc011bHRpcGxlID0gZWwubXVsdGlwbGU7XG4gICAgaWYgKGlzTXVsdGlwbGUgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB3YXJuKFxuICAgICAgICBcIjxzZWxlY3QgbXVsdGlwbGUgdi1tb2RlbD1cXFwiXCIgKyAoYmluZGluZy5leHByZXNzaW9uKSArIFwiXFxcIj4gXCIgK1xuICAgICAgICBcImV4cGVjdHMgYW4gQXJyYXkgdmFsdWUgZm9yIGl0cyBiaW5kaW5nLCBidXQgZ290IFwiICsgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpKSxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIHNlbGVjdGVkLCBvcHRpb247XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBlbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgb3B0aW9uID0gZWwub3B0aW9uc1tpXTtcbiAgICAgIGlmIChpc011bHRpcGxlKSB7XG4gICAgICAgIHNlbGVjdGVkID0gbG9vc2VJbmRleE9mKHZhbHVlLCBnZXRWYWx1ZShvcHRpb24pKSA+IC0xO1xuICAgICAgICBpZiAob3B0aW9uLnNlbGVjdGVkICE9PSBzZWxlY3RlZCkge1xuICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobG9vc2VFcXVhbChnZXRWYWx1ZShvcHRpb24pLCB2YWx1ZSkpIHtcbiAgICAgICAgICBpZiAoZWwuc2VsZWN0ZWRJbmRleCAhPT0gaSkge1xuICAgICAgICAgICAgZWwuc2VsZWN0ZWRJbmRleCA9IGk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghaXNNdWx0aXBsZSkge1xuICAgICAgZWwuc2VsZWN0ZWRJbmRleCA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc05vTWF0Y2hpbmdPcHRpb24gKHZhbHVlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuZXZlcnkoZnVuY3Rpb24gKG8pIHsgcmV0dXJuICFsb29zZUVxdWFsKG8sIHZhbHVlKTsgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFZhbHVlIChvcHRpb24pIHtcbiAgICByZXR1cm4gJ192YWx1ZScgaW4gb3B0aW9uXG4gICAgICA/IG9wdGlvbi5fdmFsdWVcbiAgICAgIDogb3B0aW9uLnZhbHVlXG4gIH1cblxuICBmdW5jdGlvbiBvbkNvbXBvc2l0aW9uU3RhcnQgKGUpIHtcbiAgICBlLnRhcmdldC5jb21wb3NpbmcgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Db21wb3NpdGlvbkVuZCAoZSkge1xuICAgIC8vIHByZXZlbnQgdHJpZ2dlcmluZyBhbiBpbnB1dCBldmVudCBmb3Igbm8gcmVhc29uXG4gICAgaWYgKCFlLnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuIH1cbiAgICBlLnRhcmdldC5jb21wb3NpbmcgPSBmYWxzZTtcbiAgICB0cmlnZ2VyKGUudGFyZ2V0LCAnaW5wdXQnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyaWdnZXIgKGVsLCB0eXBlKSB7XG4gICAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpO1xuICAgIGUuaW5pdEV2ZW50KHR5cGUsIHRydWUsIHRydWUpO1xuICAgIGVsLmRpc3BhdGNoRXZlbnQoZSk7XG4gIH1cblxuICAvKiAgKi9cblxuICAvLyByZWN1cnNpdmVseSBzZWFyY2ggZm9yIHBvc3NpYmxlIHRyYW5zaXRpb24gZGVmaW5lZCBpbnNpZGUgdGhlIGNvbXBvbmVudCByb290XG4gIGZ1bmN0aW9uIGxvY2F0ZU5vZGUgKHZub2RlKSB7XG4gICAgcmV0dXJuIHZub2RlLmNvbXBvbmVudEluc3RhbmNlICYmICghdm5vZGUuZGF0YSB8fCAhdm5vZGUuZGF0YS50cmFuc2l0aW9uKVxuICAgICAgPyBsb2NhdGVOb2RlKHZub2RlLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZSlcbiAgICAgIDogdm5vZGVcbiAgfVxuXG4gIHZhciBzaG93ID0ge1xuICAgIGJpbmQ6IGZ1bmN0aW9uIGJpbmQgKGVsLCByZWYsIHZub2RlKSB7XG4gICAgICB2YXIgdmFsdWUgPSByZWYudmFsdWU7XG5cbiAgICAgIHZub2RlID0gbG9jYXRlTm9kZSh2bm9kZSk7XG4gICAgICB2YXIgdHJhbnNpdGlvbiQkMSA9IHZub2RlLmRhdGEgJiYgdm5vZGUuZGF0YS50cmFuc2l0aW9uO1xuICAgICAgdmFyIG9yaWdpbmFsRGlzcGxheSA9IGVsLl9fdk9yaWdpbmFsRGlzcGxheSA9XG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyA/ICcnIDogZWwuc3R5bGUuZGlzcGxheTtcbiAgICAgIGlmICh2YWx1ZSAmJiB0cmFuc2l0aW9uJCQxKSB7XG4gICAgICAgIHZub2RlLmRhdGEuc2hvdyA9IHRydWU7XG4gICAgICAgIGVudGVyKHZub2RlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IG9yaWdpbmFsRGlzcGxheTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gdmFsdWUgPyBvcmlnaW5hbERpc3BsYXkgOiAnbm9uZSc7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlIChlbCwgcmVmLCB2bm9kZSkge1xuICAgICAgdmFyIHZhbHVlID0gcmVmLnZhbHVlO1xuICAgICAgdmFyIG9sZFZhbHVlID0gcmVmLm9sZFZhbHVlO1xuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghdmFsdWUgPT09ICFvbGRWYWx1ZSkgeyByZXR1cm4gfVxuICAgICAgdm5vZGUgPSBsb2NhdGVOb2RlKHZub2RlKTtcbiAgICAgIHZhciB0cmFuc2l0aW9uJCQxID0gdm5vZGUuZGF0YSAmJiB2bm9kZS5kYXRhLnRyYW5zaXRpb247XG4gICAgICBpZiAodHJhbnNpdGlvbiQkMSkge1xuICAgICAgICB2bm9kZS5kYXRhLnNob3cgPSB0cnVlO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICBlbnRlcih2bm9kZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IGVsLl9fdk9yaWdpbmFsRGlzcGxheTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZWF2ZSh2bm9kZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IHZhbHVlID8gZWwuX192T3JpZ2luYWxEaXNwbGF5IDogJ25vbmUnO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCAoXG4gICAgICBlbCxcbiAgICAgIGJpbmRpbmcsXG4gICAgICB2bm9kZSxcbiAgICAgIG9sZFZub2RlLFxuICAgICAgaXNEZXN0cm95XG4gICAgKSB7XG4gICAgICBpZiAoIWlzRGVzdHJveSkge1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gZWwuX192T3JpZ2luYWxEaXNwbGF5O1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgcGxhdGZvcm1EaXJlY3RpdmVzID0ge1xuICAgIG1vZGVsOiBkaXJlY3RpdmUsXG4gICAgc2hvdzogc2hvd1xuICB9O1xuXG4gIC8qICAqL1xuXG4gIHZhciB0cmFuc2l0aW9uUHJvcHMgPSB7XG4gICAgbmFtZTogU3RyaW5nLFxuICAgIGFwcGVhcjogQm9vbGVhbixcbiAgICBjc3M6IEJvb2xlYW4sXG4gICAgbW9kZTogU3RyaW5nLFxuICAgIHR5cGU6IFN0cmluZyxcbiAgICBlbnRlckNsYXNzOiBTdHJpbmcsXG4gICAgbGVhdmVDbGFzczogU3RyaW5nLFxuICAgIGVudGVyVG9DbGFzczogU3RyaW5nLFxuICAgIGxlYXZlVG9DbGFzczogU3RyaW5nLFxuICAgIGVudGVyQWN0aXZlQ2xhc3M6IFN0cmluZyxcbiAgICBsZWF2ZUFjdGl2ZUNsYXNzOiBTdHJpbmcsXG4gICAgYXBwZWFyQ2xhc3M6IFN0cmluZyxcbiAgICBhcHBlYXJBY3RpdmVDbGFzczogU3RyaW5nLFxuICAgIGFwcGVhclRvQ2xhc3M6IFN0cmluZyxcbiAgICBkdXJhdGlvbjogW051bWJlciwgU3RyaW5nLCBPYmplY3RdXG4gIH07XG5cbiAgLy8gaW4gY2FzZSB0aGUgY2hpbGQgaXMgYWxzbyBhbiBhYnN0cmFjdCBjb21wb25lbnQsIGUuZy4gPGtlZXAtYWxpdmU+XG4gIC8vIHdlIHdhbnQgdG8gcmVjdXJzaXZlbHkgcmV0cmlldmUgdGhlIHJlYWwgY29tcG9uZW50IHRvIGJlIHJlbmRlcmVkXG4gIGZ1bmN0aW9uIGdldFJlYWxDaGlsZCAodm5vZGUpIHtcbiAgICB2YXIgY29tcE9wdGlvbnMgPSB2bm9kZSAmJiB2bm9kZS5jb21wb25lbnRPcHRpb25zO1xuICAgIGlmIChjb21wT3B0aW9ucyAmJiBjb21wT3B0aW9ucy5DdG9yLm9wdGlvbnMuYWJzdHJhY3QpIHtcbiAgICAgIHJldHVybiBnZXRSZWFsQ2hpbGQoZ2V0Rmlyc3RDb21wb25lbnRDaGlsZChjb21wT3B0aW9ucy5jaGlsZHJlbikpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2bm9kZVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGV4dHJhY3RUcmFuc2l0aW9uRGF0YSAoY29tcCkge1xuICAgIHZhciBkYXRhID0ge307XG4gICAgdmFyIG9wdGlvbnMgPSBjb21wLiRvcHRpb25zO1xuICAgIC8vIHByb3BzXG4gICAgZm9yICh2YXIga2V5IGluIG9wdGlvbnMucHJvcHNEYXRhKSB7XG4gICAgICBkYXRhW2tleV0gPSBjb21wW2tleV07XG4gICAgfVxuICAgIC8vIGV2ZW50cy5cbiAgICAvLyBleHRyYWN0IGxpc3RlbmVycyBhbmQgcGFzcyB0aGVtIGRpcmVjdGx5IHRvIHRoZSB0cmFuc2l0aW9uIG1ldGhvZHNcbiAgICB2YXIgbGlzdGVuZXJzID0gb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzO1xuICAgIGZvciAodmFyIGtleSQxIGluIGxpc3RlbmVycykge1xuICAgICAgZGF0YVtjYW1lbGl6ZShrZXkkMSldID0gbGlzdGVuZXJzW2tleSQxXTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlaG9sZGVyIChoLCByYXdDaGlsZCkge1xuICAgIGlmICgvXFxkLWtlZXAtYWxpdmUkLy50ZXN0KHJhd0NoaWxkLnRhZykpIHtcbiAgICAgIHJldHVybiBoKCdrZWVwLWFsaXZlJywge1xuICAgICAgICBwcm9wczogcmF3Q2hpbGQuY29tcG9uZW50T3B0aW9ucy5wcm9wc0RhdGFcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFzUGFyZW50VHJhbnNpdGlvbiAodm5vZGUpIHtcbiAgICB3aGlsZSAoKHZub2RlID0gdm5vZGUucGFyZW50KSkge1xuICAgICAgaWYgKHZub2RlLmRhdGEudHJhbnNpdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU2FtZUNoaWxkIChjaGlsZCwgb2xkQ2hpbGQpIHtcbiAgICByZXR1cm4gb2xkQ2hpbGQua2V5ID09PSBjaGlsZC5rZXkgJiYgb2xkQ2hpbGQudGFnID09PSBjaGlsZC50YWdcbiAgfVxuXG4gIHZhciBpc05vdFRleHROb2RlID0gZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMudGFnIHx8IGlzQXN5bmNQbGFjZWhvbGRlcihjKTsgfTtcblxuICB2YXIgaXNWU2hvd0RpcmVjdGl2ZSA9IGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLm5hbWUgPT09ICdzaG93JzsgfTtcblxuICB2YXIgVHJhbnNpdGlvbiA9IHtcbiAgICBuYW1lOiAndHJhbnNpdGlvbicsXG4gICAgcHJvcHM6IHRyYW5zaXRpb25Qcm9wcyxcbiAgICBhYnN0cmFjdDogdHJ1ZSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyIChoKSB7XG4gICAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy4kc2xvdHMuZGVmYXVsdDtcbiAgICAgIGlmICghY2hpbGRyZW4pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIGZpbHRlciBvdXQgdGV4dCBub2RlcyAocG9zc2libGUgd2hpdGVzcGFjZXMpXG4gICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLmZpbHRlcihpc05vdFRleHROb2RlKTtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIHdhcm4gbXVsdGlwbGUgZWxlbWVudHNcbiAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJzx0cmFuc2l0aW9uPiBjYW4gb25seSBiZSB1c2VkIG9uIGEgc2luZ2xlIGVsZW1lbnQuIFVzZSAnICtcbiAgICAgICAgICAnPHRyYW5zaXRpb24tZ3JvdXA+IGZvciBsaXN0cy4nLFxuICAgICAgICAgIHRoaXMuJHBhcmVudFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB2YXIgbW9kZSA9IHRoaXMubW9kZTtcblxuICAgICAgLy8gd2FybiBpbnZhbGlkIG1vZGVcbiAgICAgIGlmIChtb2RlICYmIG1vZGUgIT09ICdpbi1vdXQnICYmIG1vZGUgIT09ICdvdXQtaW4nXG4gICAgICApIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnaW52YWxpZCA8dHJhbnNpdGlvbj4gbW9kZTogJyArIG1vZGUsXG4gICAgICAgICAgdGhpcy4kcGFyZW50XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHZhciByYXdDaGlsZCA9IGNoaWxkcmVuWzBdO1xuXG4gICAgICAvLyBpZiB0aGlzIGlzIGEgY29tcG9uZW50IHJvb3Qgbm9kZSBhbmQgdGhlIGNvbXBvbmVudCdzXG4gICAgICAvLyBwYXJlbnQgY29udGFpbmVyIG5vZGUgYWxzbyBoYXMgdHJhbnNpdGlvbiwgc2tpcC5cbiAgICAgIGlmIChoYXNQYXJlbnRUcmFuc2l0aW9uKHRoaXMuJHZub2RlKSkge1xuICAgICAgICByZXR1cm4gcmF3Q2hpbGRcbiAgICAgIH1cblxuICAgICAgLy8gYXBwbHkgdHJhbnNpdGlvbiBkYXRhIHRvIGNoaWxkXG4gICAgICAvLyB1c2UgZ2V0UmVhbENoaWxkKCkgdG8gaWdub3JlIGFic3RyYWN0IGNvbXBvbmVudHMgZS5nLiBrZWVwLWFsaXZlXG4gICAgICB2YXIgY2hpbGQgPSBnZXRSZWFsQ2hpbGQocmF3Q2hpbGQpO1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgIHJldHVybiByYXdDaGlsZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fbGVhdmluZykge1xuICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXIoaCwgcmF3Q2hpbGQpXG4gICAgICB9XG5cbiAgICAgIC8vIGVuc3VyZSBhIGtleSB0aGF0IGlzIHVuaXF1ZSB0byB0aGUgdm5vZGUgdHlwZSBhbmQgdG8gdGhpcyB0cmFuc2l0aW9uXG4gICAgICAvLyBjb21wb25lbnQgaW5zdGFuY2UuIFRoaXMga2V5IHdpbGwgYmUgdXNlZCB0byByZW1vdmUgcGVuZGluZyBsZWF2aW5nIG5vZGVzXG4gICAgICAvLyBkdXJpbmcgZW50ZXJpbmcuXG4gICAgICB2YXIgaWQgPSBcIl9fdHJhbnNpdGlvbi1cIiArICh0aGlzLl91aWQpICsgXCItXCI7XG4gICAgICBjaGlsZC5rZXkgPSBjaGlsZC5rZXkgPT0gbnVsbFxuICAgICAgICA/IGNoaWxkLmlzQ29tbWVudFxuICAgICAgICAgID8gaWQgKyAnY29tbWVudCdcbiAgICAgICAgICA6IGlkICsgY2hpbGQudGFnXG4gICAgICAgIDogaXNQcmltaXRpdmUoY2hpbGQua2V5KVxuICAgICAgICAgID8gKFN0cmluZyhjaGlsZC5rZXkpLmluZGV4T2YoaWQpID09PSAwID8gY2hpbGQua2V5IDogaWQgKyBjaGlsZC5rZXkpXG4gICAgICAgICAgOiBjaGlsZC5rZXk7XG5cbiAgICAgIHZhciBkYXRhID0gKGNoaWxkLmRhdGEgfHwgKGNoaWxkLmRhdGEgPSB7fSkpLnRyYW5zaXRpb24gPSBleHRyYWN0VHJhbnNpdGlvbkRhdGEodGhpcyk7XG4gICAgICB2YXIgb2xkUmF3Q2hpbGQgPSB0aGlzLl92bm9kZTtcbiAgICAgIHZhciBvbGRDaGlsZCA9IGdldFJlYWxDaGlsZChvbGRSYXdDaGlsZCk7XG5cbiAgICAgIC8vIG1hcmsgdi1zaG93XG4gICAgICAvLyBzbyB0aGF0IHRoZSB0cmFuc2l0aW9uIG1vZHVsZSBjYW4gaGFuZCBvdmVyIHRoZSBjb250cm9sIHRvIHRoZSBkaXJlY3RpdmVcbiAgICAgIGlmIChjaGlsZC5kYXRhLmRpcmVjdGl2ZXMgJiYgY2hpbGQuZGF0YS5kaXJlY3RpdmVzLnNvbWUoaXNWU2hvd0RpcmVjdGl2ZSkpIHtcbiAgICAgICAgY2hpbGQuZGF0YS5zaG93ID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBvbGRDaGlsZCAmJlxuICAgICAgICBvbGRDaGlsZC5kYXRhICYmXG4gICAgICAgICFpc1NhbWVDaGlsZChjaGlsZCwgb2xkQ2hpbGQpICYmXG4gICAgICAgICFpc0FzeW5jUGxhY2Vob2xkZXIob2xkQ2hpbGQpICYmXG4gICAgICAgIC8vICM2Njg3IGNvbXBvbmVudCByb290IGlzIGEgY29tbWVudCBub2RlXG4gICAgICAgICEob2xkQ2hpbGQuY29tcG9uZW50SW5zdGFuY2UgJiYgb2xkQ2hpbGQuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlLmlzQ29tbWVudClcbiAgICAgICkge1xuICAgICAgICAvLyByZXBsYWNlIG9sZCBjaGlsZCB0cmFuc2l0aW9uIGRhdGEgd2l0aCBmcmVzaCBvbmVcbiAgICAgICAgLy8gaW1wb3J0YW50IGZvciBkeW5hbWljIHRyYW5zaXRpb25zIVxuICAgICAgICB2YXIgb2xkRGF0YSA9IG9sZENoaWxkLmRhdGEudHJhbnNpdGlvbiA9IGV4dGVuZCh7fSwgZGF0YSk7XG4gICAgICAgIC8vIGhhbmRsZSB0cmFuc2l0aW9uIG1vZGVcbiAgICAgICAgaWYgKG1vZGUgPT09ICdvdXQtaW4nKSB7XG4gICAgICAgICAgLy8gcmV0dXJuIHBsYWNlaG9sZGVyIG5vZGUgYW5kIHF1ZXVlIHVwZGF0ZSB3aGVuIGxlYXZlIGZpbmlzaGVzXG4gICAgICAgICAgdGhpcy5fbGVhdmluZyA9IHRydWU7XG4gICAgICAgICAgbWVyZ2VWTm9kZUhvb2sob2xkRGF0YSwgJ2FmdGVyTGVhdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzJDEuX2xlYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMkMS4kZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXIoaCwgcmF3Q2hpbGQpXG4gICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ2luLW91dCcpIHtcbiAgICAgICAgICBpZiAoaXNBc3luY1BsYWNlaG9sZGVyKGNoaWxkKSkge1xuICAgICAgICAgICAgcmV0dXJuIG9sZFJhd0NoaWxkXG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBkZWxheWVkTGVhdmU7XG4gICAgICAgICAgdmFyIHBlcmZvcm1MZWF2ZSA9IGZ1bmN0aW9uICgpIHsgZGVsYXllZExlYXZlKCk7IH07XG4gICAgICAgICAgbWVyZ2VWTm9kZUhvb2soZGF0YSwgJ2FmdGVyRW50ZXInLCBwZXJmb3JtTGVhdmUpO1xuICAgICAgICAgIG1lcmdlVk5vZGVIb29rKGRhdGEsICdlbnRlckNhbmNlbGxlZCcsIHBlcmZvcm1MZWF2ZSk7XG4gICAgICAgICAgbWVyZ2VWTm9kZUhvb2sob2xkRGF0YSwgJ2RlbGF5TGVhdmUnLCBmdW5jdGlvbiAobGVhdmUpIHsgZGVsYXllZExlYXZlID0gbGVhdmU7IH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByYXdDaGlsZFxuICAgIH1cbiAgfTtcblxuICAvKiAgKi9cblxuICB2YXIgcHJvcHMgPSBleHRlbmQoe1xuICAgIHRhZzogU3RyaW5nLFxuICAgIG1vdmVDbGFzczogU3RyaW5nXG4gIH0sIHRyYW5zaXRpb25Qcm9wcyk7XG5cbiAgZGVsZXRlIHByb3BzLm1vZGU7XG5cbiAgdmFyIFRyYW5zaXRpb25Hcm91cCA9IHtcbiAgICBwcm9wczogcHJvcHMsXG5cbiAgICBiZWZvcmVNb3VudDogZnVuY3Rpb24gYmVmb3JlTW91bnQgKCkge1xuICAgICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICAgIHZhciB1cGRhdGUgPSB0aGlzLl91cGRhdGU7XG4gICAgICB0aGlzLl91cGRhdGUgPSBmdW5jdGlvbiAodm5vZGUsIGh5ZHJhdGluZykge1xuICAgICAgICB2YXIgcmVzdG9yZUFjdGl2ZUluc3RhbmNlID0gc2V0QWN0aXZlSW5zdGFuY2UodGhpcyQxKTtcbiAgICAgICAgLy8gZm9yY2UgcmVtb3ZpbmcgcGFzc1xuICAgICAgICB0aGlzJDEuX19wYXRjaF9fKFxuICAgICAgICAgIHRoaXMkMS5fdm5vZGUsXG4gICAgICAgICAgdGhpcyQxLmtlcHQsXG4gICAgICAgICAgZmFsc2UsIC8vIGh5ZHJhdGluZ1xuICAgICAgICAgIHRydWUgLy8gcmVtb3ZlT25seSAoIWltcG9ydGFudCwgYXZvaWRzIHVubmVjZXNzYXJ5IG1vdmVzKVxuICAgICAgICApO1xuICAgICAgICB0aGlzJDEuX3Zub2RlID0gdGhpcyQxLmtlcHQ7XG4gICAgICAgIHJlc3RvcmVBY3RpdmVJbnN0YW5jZSgpO1xuICAgICAgICB1cGRhdGUuY2FsbCh0aGlzJDEsIHZub2RlLCBoeWRyYXRpbmcpO1xuICAgICAgfTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIgKGgpIHtcbiAgICAgIHZhciB0YWcgPSB0aGlzLnRhZyB8fCB0aGlzLiR2bm9kZS5kYXRhLnRhZyB8fCAnc3Bhbic7XG4gICAgICB2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIHZhciBwcmV2Q2hpbGRyZW4gPSB0aGlzLnByZXZDaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW47XG4gICAgICB2YXIgcmF3Q2hpbGRyZW4gPSB0aGlzLiRzbG90cy5kZWZhdWx0IHx8IFtdO1xuICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgICAgdmFyIHRyYW5zaXRpb25EYXRhID0gZXh0cmFjdFRyYW5zaXRpb25EYXRhKHRoaXMpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhd0NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjID0gcmF3Q2hpbGRyZW5baV07XG4gICAgICAgIGlmIChjLnRhZykge1xuICAgICAgICAgIGlmIChjLmtleSAhPSBudWxsICYmIFN0cmluZyhjLmtleSkuaW5kZXhPZignX192bGlzdCcpICE9PSAwKSB7XG4gICAgICAgICAgICBjaGlsZHJlbi5wdXNoKGMpO1xuICAgICAgICAgICAgbWFwW2Mua2V5XSA9IGNcbiAgICAgICAgICAgIDsoYy5kYXRhIHx8IChjLmRhdGEgPSB7fSkpLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uRGF0YTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG9wdHMgPSBjLmNvbXBvbmVudE9wdGlvbnM7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IG9wdHMgPyAob3B0cy5DdG9yLm9wdGlvbnMubmFtZSB8fCBvcHRzLnRhZyB8fCAnJykgOiBjLnRhZztcbiAgICAgICAgICAgIHdhcm4oKFwiPHRyYW5zaXRpb24tZ3JvdXA+IGNoaWxkcmVuIG11c3QgYmUga2V5ZWQ6IDxcIiArIG5hbWUgKyBcIj5cIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJldkNoaWxkcmVuKSB7XG4gICAgICAgIHZhciBrZXB0ID0gW107XG4gICAgICAgIHZhciByZW1vdmVkID0gW107XG4gICAgICAgIGZvciAodmFyIGkkMSA9IDA7IGkkMSA8IHByZXZDaGlsZHJlbi5sZW5ndGg7IGkkMSsrKSB7XG4gICAgICAgICAgdmFyIGMkMSA9IHByZXZDaGlsZHJlbltpJDFdO1xuICAgICAgICAgIGMkMS5kYXRhLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uRGF0YTtcbiAgICAgICAgICBjJDEuZGF0YS5wb3MgPSBjJDEuZWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGlmIChtYXBbYyQxLmtleV0pIHtcbiAgICAgICAgICAgIGtlcHQucHVzaChjJDEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW1vdmVkLnB1c2goYyQxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rZXB0ID0gaCh0YWcsIG51bGwsIGtlcHQpO1xuICAgICAgICB0aGlzLnJlbW92ZWQgPSByZW1vdmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCh0YWcsIG51bGwsIGNoaWxkcmVuKVxuICAgIH0sXG5cbiAgICB1cGRhdGVkOiBmdW5jdGlvbiB1cGRhdGVkICgpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJldkNoaWxkcmVuO1xuICAgICAgdmFyIG1vdmVDbGFzcyA9IHRoaXMubW92ZUNsYXNzIHx8ICgodGhpcy5uYW1lIHx8ICd2JykgKyAnLW1vdmUnKTtcbiAgICAgIGlmICghY2hpbGRyZW4ubGVuZ3RoIHx8ICF0aGlzLmhhc01vdmUoY2hpbGRyZW5bMF0uZWxtLCBtb3ZlQ2xhc3MpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyB3ZSBkaXZpZGUgdGhlIHdvcmsgaW50byB0aHJlZSBsb29wcyB0byBhdm9pZCBtaXhpbmcgRE9NIHJlYWRzIGFuZCB3cml0ZXNcbiAgICAgIC8vIGluIGVhY2ggaXRlcmF0aW9uIC0gd2hpY2ggaGVscHMgcHJldmVudCBsYXlvdXQgdGhyYXNoaW5nLlxuICAgICAgY2hpbGRyZW4uZm9yRWFjaChjYWxsUGVuZGluZ0Nicyk7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKHJlY29yZFBvc2l0aW9uKTtcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goYXBwbHlUcmFuc2xhdGlvbik7XG5cbiAgICAgIC8vIGZvcmNlIHJlZmxvdyB0byBwdXQgZXZlcnl0aGluZyBpbiBwb3NpdGlvblxuICAgICAgLy8gYXNzaWduIHRvIHRoaXMgdG8gYXZvaWQgYmVpbmcgcmVtb3ZlZCBpbiB0cmVlLXNoYWtpbmdcbiAgICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgICAgdGhpcy5fcmVmbG93ID0gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMuZGF0YS5tb3ZlZCkge1xuICAgICAgICAgIHZhciBlbCA9IGMuZWxtO1xuICAgICAgICAgIHZhciBzID0gZWwuc3R5bGU7XG4gICAgICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBtb3ZlQ2xhc3MpO1xuICAgICAgICAgIHMudHJhbnNmb3JtID0gcy5XZWJraXRUcmFuc2Zvcm0gPSBzLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcnO1xuICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkVuZEV2ZW50LCBlbC5fbW92ZUNiID0gZnVuY3Rpb24gY2IgKGUpIHtcbiAgICAgICAgICAgIGlmIChlICYmIGUudGFyZ2V0ICE9PSBlbCkge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZSB8fCAvdHJhbnNmb3JtJC8udGVzdChlLnByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRW5kRXZlbnQsIGNiKTtcbiAgICAgICAgICAgICAgZWwuX21vdmVDYiA9IG51bGw7XG4gICAgICAgICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbW92ZUNsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGhhc01vdmU6IGZ1bmN0aW9uIGhhc01vdmUgKGVsLCBtb3ZlQ2xhc3MpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmICghaGFzVHJhbnNpdGlvbikge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAodGhpcy5faGFzTW92ZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9oYXNNb3ZlXG4gICAgICAgIH1cbiAgICAgICAgLy8gRGV0ZWN0IHdoZXRoZXIgYW4gZWxlbWVudCB3aXRoIHRoZSBtb3ZlIGNsYXNzIGFwcGxpZWQgaGFzXG4gICAgICAgIC8vIENTUyB0cmFuc2l0aW9ucy4gU2luY2UgdGhlIGVsZW1lbnQgbWF5IGJlIGluc2lkZSBhbiBlbnRlcmluZ1xuICAgICAgICAvLyB0cmFuc2l0aW9uIGF0IHRoaXMgdmVyeSBtb21lbnQsIHdlIG1ha2UgYSBjbG9uZSBvZiBpdCBhbmQgcmVtb3ZlXG4gICAgICAgIC8vIGFsbCBvdGhlciB0cmFuc2l0aW9uIGNsYXNzZXMgYXBwbGllZCB0byBlbnN1cmUgb25seSB0aGUgbW92ZSBjbGFzc1xuICAgICAgICAvLyBpcyBhcHBsaWVkLlxuICAgICAgICB2YXIgY2xvbmUgPSBlbC5jbG9uZU5vZGUoKTtcbiAgICAgICAgaWYgKGVsLl90cmFuc2l0aW9uQ2xhc3Nlcykge1xuICAgICAgICAgIGVsLl90cmFuc2l0aW9uQ2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uIChjbHMpIHsgcmVtb3ZlQ2xhc3MoY2xvbmUsIGNscyk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIGFkZENsYXNzKGNsb25lLCBtb3ZlQ2xhc3MpO1xuICAgICAgICBjbG9uZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLiRlbC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgICAgIHZhciBpbmZvID0gZ2V0VHJhbnNpdGlvbkluZm8oY2xvbmUpO1xuICAgICAgICB0aGlzLiRlbC5yZW1vdmVDaGlsZChjbG9uZSk7XG4gICAgICAgIHJldHVybiAodGhpcy5faGFzTW92ZSA9IGluZm8uaGFzVHJhbnNmb3JtKVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBjYWxsUGVuZGluZ0NicyAoYykge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChjLmVsbS5fbW92ZUNiKSB7XG4gICAgICBjLmVsbS5fbW92ZUNiKCk7XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChjLmVsbS5fZW50ZXJDYikge1xuICAgICAgYy5lbG0uX2VudGVyQ2IoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWNvcmRQb3NpdGlvbiAoYykge1xuICAgIGMuZGF0YS5uZXdQb3MgPSBjLmVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5VHJhbnNsYXRpb24gKGMpIHtcbiAgICB2YXIgb2xkUG9zID0gYy5kYXRhLnBvcztcbiAgICB2YXIgbmV3UG9zID0gYy5kYXRhLm5ld1BvcztcbiAgICB2YXIgZHggPSBvbGRQb3MubGVmdCAtIG5ld1Bvcy5sZWZ0O1xuICAgIHZhciBkeSA9IG9sZFBvcy50b3AgLSBuZXdQb3MudG9wO1xuICAgIGlmIChkeCB8fCBkeSkge1xuICAgICAgYy5kYXRhLm1vdmVkID0gdHJ1ZTtcbiAgICAgIHZhciBzID0gYy5lbG0uc3R5bGU7XG4gICAgICBzLnRyYW5zZm9ybSA9IHMuV2Via2l0VHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoXCIgKyBkeCArIFwicHgsXCIgKyBkeSArIFwicHgpXCI7XG4gICAgICBzLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwcyc7XG4gICAgfVxuICB9XG5cbiAgdmFyIHBsYXRmb3JtQ29tcG9uZW50cyA9IHtcbiAgICBUcmFuc2l0aW9uOiBUcmFuc2l0aW9uLFxuICAgIFRyYW5zaXRpb25Hcm91cDogVHJhbnNpdGlvbkdyb3VwXG4gIH07XG5cbiAgLyogICovXG5cbiAgLy8gaW5zdGFsbCBwbGF0Zm9ybSBzcGVjaWZpYyB1dGlsc1xuICBWdWUuY29uZmlnLm11c3RVc2VQcm9wID0gbXVzdFVzZVByb3A7XG4gIFZ1ZS5jb25maWcuaXNSZXNlcnZlZFRhZyA9IGlzUmVzZXJ2ZWRUYWc7XG4gIFZ1ZS5jb25maWcuaXNSZXNlcnZlZEF0dHIgPSBpc1Jlc2VydmVkQXR0cjtcbiAgVnVlLmNvbmZpZy5nZXRUYWdOYW1lc3BhY2UgPSBnZXRUYWdOYW1lc3BhY2U7XG4gIFZ1ZS5jb25maWcuaXNVbmtub3duRWxlbWVudCA9IGlzVW5rbm93bkVsZW1lbnQ7XG5cbiAgLy8gaW5zdGFsbCBwbGF0Zm9ybSBydW50aW1lIGRpcmVjdGl2ZXMgJiBjb21wb25lbnRzXG4gIGV4dGVuZChWdWUub3B0aW9ucy5kaXJlY3RpdmVzLCBwbGF0Zm9ybURpcmVjdGl2ZXMpO1xuICBleHRlbmQoVnVlLm9wdGlvbnMuY29tcG9uZW50cywgcGxhdGZvcm1Db21wb25lbnRzKTtcblxuICAvLyBpbnN0YWxsIHBsYXRmb3JtIHBhdGNoIGZ1bmN0aW9uXG4gIFZ1ZS5wcm90b3R5cGUuX19wYXRjaF9fID0gaW5Ccm93c2VyID8gcGF0Y2ggOiBub29wO1xuXG4gIC8vIHB1YmxpYyBtb3VudCBtZXRob2RcbiAgVnVlLnByb3RvdHlwZS4kbW91bnQgPSBmdW5jdGlvbiAoXG4gICAgZWwsXG4gICAgaHlkcmF0aW5nXG4gICkge1xuICAgIGVsID0gZWwgJiYgaW5Ccm93c2VyID8gcXVlcnkoZWwpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBtb3VudENvbXBvbmVudCh0aGlzLCBlbCwgaHlkcmF0aW5nKVxuICB9O1xuXG4gIC8vIGRldnRvb2xzIGdsb2JhbCBob29rXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGlmIChpbkJyb3dzZXIpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjb25maWcuZGV2dG9vbHMpIHtcbiAgICAgICAgaWYgKGRldnRvb2xzKSB7XG4gICAgICAgICAgZGV2dG9vbHMuZW1pdCgnaW5pdCcsIFZ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZVtjb25zb2xlLmluZm8gPyAnaW5mbycgOiAnbG9nJ10oXG4gICAgICAgICAgICAnRG93bmxvYWQgdGhlIFZ1ZSBEZXZ0b29scyBleHRlbnNpb24gZm9yIGEgYmV0dGVyIGRldmVsb3BtZW50IGV4cGVyaWVuY2U6XFxuJyArXG4gICAgICAgICAgICAnaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3Z1ZS1kZXZ0b29scydcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY29uZmlnLnByb2R1Y3Rpb25UaXAgIT09IGZhbHNlICYmXG4gICAgICAgIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIGNvbnNvbGVbY29uc29sZS5pbmZvID8gJ2luZm8nIDogJ2xvZyddKFxuICAgICAgICAgIFwiWW91IGFyZSBydW5uaW5nIFZ1ZSBpbiBkZXZlbG9wbWVudCBtb2RlLlxcblwiICtcbiAgICAgICAgICBcIk1ha2Ugc3VyZSB0byB0dXJuIG9uIHByb2R1Y3Rpb24gbW9kZSB3aGVuIGRlcGxveWluZyBmb3IgcHJvZHVjdGlvbi5cXG5cIiArXG4gICAgICAgICAgXCJTZWUgbW9yZSB0aXBzIGF0IGh0dHBzOi8vdnVlanMub3JnL2d1aWRlL2RlcGxveW1lbnQuaHRtbFwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH1cblxuICAvKiAgKi9cblxuICB2YXIgZGVmYXVsdFRhZ1JFID0gL1xce1xceygoPzoufFxccj9cXG4pKz8pXFx9XFx9L2c7XG4gIHZhciByZWdleEVzY2FwZVJFID0gL1stLiorP14ke30oKXxbXFxdXFwvXFxcXF0vZztcblxuICB2YXIgYnVpbGRSZWdleCA9IGNhY2hlZChmdW5jdGlvbiAoZGVsaW1pdGVycykge1xuICAgIHZhciBvcGVuID0gZGVsaW1pdGVyc1swXS5yZXBsYWNlKHJlZ2V4RXNjYXBlUkUsICdcXFxcJCYnKTtcbiAgICB2YXIgY2xvc2UgPSBkZWxpbWl0ZXJzWzFdLnJlcGxhY2UocmVnZXhFc2NhcGVSRSwgJ1xcXFwkJicpO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKG9wZW4gKyAnKCg/Oi58XFxcXG4pKz8pJyArIGNsb3NlLCAnZycpXG4gIH0pO1xuXG5cblxuICBmdW5jdGlvbiBwYXJzZVRleHQgKFxuICAgIHRleHQsXG4gICAgZGVsaW1pdGVyc1xuICApIHtcbiAgICB2YXIgdGFnUkUgPSBkZWxpbWl0ZXJzID8gYnVpbGRSZWdleChkZWxpbWl0ZXJzKSA6IGRlZmF1bHRUYWdSRTtcbiAgICBpZiAoIXRhZ1JFLnRlc3QodGV4dCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIHJhd1Rva2VucyA9IFtdO1xuICAgIHZhciBsYXN0SW5kZXggPSB0YWdSRS5sYXN0SW5kZXggPSAwO1xuICAgIHZhciBtYXRjaCwgaW5kZXgsIHRva2VuVmFsdWU7XG4gICAgd2hpbGUgKChtYXRjaCA9IHRhZ1JFLmV4ZWModGV4dCkpKSB7XG4gICAgICBpbmRleCA9IG1hdGNoLmluZGV4O1xuICAgICAgLy8gcHVzaCB0ZXh0IHRva2VuXG4gICAgICBpZiAoaW5kZXggPiBsYXN0SW5kZXgpIHtcbiAgICAgICAgcmF3VG9rZW5zLnB1c2godG9rZW5WYWx1ZSA9IHRleHQuc2xpY2UobGFzdEluZGV4LCBpbmRleCkpO1xuICAgICAgICB0b2tlbnMucHVzaChKU09OLnN0cmluZ2lmeSh0b2tlblZhbHVlKSk7XG4gICAgICB9XG4gICAgICAvLyB0YWcgdG9rZW5cbiAgICAgIHZhciBleHAgPSBwYXJzZUZpbHRlcnMobWF0Y2hbMV0udHJpbSgpKTtcbiAgICAgIHRva2Vucy5wdXNoKChcIl9zKFwiICsgZXhwICsgXCIpXCIpKTtcbiAgICAgIHJhd1Rva2Vucy5wdXNoKHsgJ0BiaW5kaW5nJzogZXhwIH0pO1xuICAgICAgbGFzdEluZGV4ID0gaW5kZXggKyBtYXRjaFswXS5sZW5ndGg7XG4gICAgfVxuICAgIGlmIChsYXN0SW5kZXggPCB0ZXh0Lmxlbmd0aCkge1xuICAgICAgcmF3VG9rZW5zLnB1c2godG9rZW5WYWx1ZSA9IHRleHQuc2xpY2UobGFzdEluZGV4KSk7XG4gICAgICB0b2tlbnMucHVzaChKU09OLnN0cmluZ2lmeSh0b2tlblZhbHVlKSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBleHByZXNzaW9uOiB0b2tlbnMuam9pbignKycpLFxuICAgICAgdG9rZW5zOiByYXdUb2tlbnNcbiAgICB9XG4gIH1cblxuICAvKiAgKi9cblxuICBmdW5jdGlvbiB0cmFuc2Zvcm1Ob2RlIChlbCwgb3B0aW9ucykge1xuICAgIHZhciB3YXJuID0gb3B0aW9ucy53YXJuIHx8IGJhc2VXYXJuO1xuICAgIHZhciBzdGF0aWNDbGFzcyA9IGdldEFuZFJlbW92ZUF0dHIoZWwsICdjbGFzcycpO1xuICAgIGlmIChzdGF0aWNDbGFzcykge1xuICAgICAgdmFyIHJlcyA9IHBhcnNlVGV4dChzdGF0aWNDbGFzcywgb3B0aW9ucy5kZWxpbWl0ZXJzKTtcbiAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICBcImNsYXNzPVxcXCJcIiArIHN0YXRpY0NsYXNzICsgXCJcXFwiOiBcIiArXG4gICAgICAgICAgJ0ludGVycG9sYXRpb24gaW5zaWRlIGF0dHJpYnV0ZXMgaGFzIGJlZW4gcmVtb3ZlZC4gJyArXG4gICAgICAgICAgJ1VzZSB2LWJpbmQgb3IgdGhlIGNvbG9uIHNob3J0aGFuZCBpbnN0ZWFkLiBGb3IgZXhhbXBsZSwgJyArXG4gICAgICAgICAgJ2luc3RlYWQgb2YgPGRpdiBjbGFzcz1cInt7IHZhbCB9fVwiPiwgdXNlIDxkaXYgOmNsYXNzPVwidmFsXCI+LicsXG4gICAgICAgICAgZWwucmF3QXR0cnNNYXBbJ2NsYXNzJ11cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHN0YXRpY0NsYXNzKSB7XG4gICAgICBlbC5zdGF0aWNDbGFzcyA9IEpTT04uc3RyaW5naWZ5KHN0YXRpY0NsYXNzKTtcbiAgICB9XG4gICAgdmFyIGNsYXNzQmluZGluZyA9IGdldEJpbmRpbmdBdHRyKGVsLCAnY2xhc3MnLCBmYWxzZSAvKiBnZXRTdGF0aWMgKi8pO1xuICAgIGlmIChjbGFzc0JpbmRpbmcpIHtcbiAgICAgIGVsLmNsYXNzQmluZGluZyA9IGNsYXNzQmluZGluZztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZW5EYXRhIChlbCkge1xuICAgIHZhciBkYXRhID0gJyc7XG4gICAgaWYgKGVsLnN0YXRpY0NsYXNzKSB7XG4gICAgICBkYXRhICs9IFwic3RhdGljQ2xhc3M6XCIgKyAoZWwuc3RhdGljQ2xhc3MpICsgXCIsXCI7XG4gICAgfVxuICAgIGlmIChlbC5jbGFzc0JpbmRpbmcpIHtcbiAgICAgIGRhdGEgKz0gXCJjbGFzczpcIiArIChlbC5jbGFzc0JpbmRpbmcpICsgXCIsXCI7XG4gICAgfVxuICAgIHJldHVybiBkYXRhXG4gIH1cblxuICB2YXIga2xhc3MkMSA9IHtcbiAgICBzdGF0aWNLZXlzOiBbJ3N0YXRpY0NsYXNzJ10sXG4gICAgdHJhbnNmb3JtTm9kZTogdHJhbnNmb3JtTm9kZSxcbiAgICBnZW5EYXRhOiBnZW5EYXRhXG4gIH07XG5cbiAgLyogICovXG5cbiAgZnVuY3Rpb24gdHJhbnNmb3JtTm9kZSQxIChlbCwgb3B0aW9ucykge1xuICAgIHZhciB3YXJuID0gb3B0aW9ucy53YXJuIHx8IGJhc2VXYXJuO1xuICAgIHZhciBzdGF0aWNTdHlsZSA9IGdldEFuZFJlbW92ZUF0dHIoZWwsICdzdHlsZScpO1xuICAgIGlmIChzdGF0aWNTdHlsZSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICB7XG4gICAgICAgIHZhciByZXMgPSBwYXJzZVRleHQoc3RhdGljU3R5bGUsIG9wdGlvbnMuZGVsaW1pdGVycyk7XG4gICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgXCJzdHlsZT1cXFwiXCIgKyBzdGF0aWNTdHlsZSArIFwiXFxcIjogXCIgK1xuICAgICAgICAgICAgJ0ludGVycG9sYXRpb24gaW5zaWRlIGF0dHJpYnV0ZXMgaGFzIGJlZW4gcmVtb3ZlZC4gJyArXG4gICAgICAgICAgICAnVXNlIHYtYmluZCBvciB0aGUgY29sb24gc2hvcnRoYW5kIGluc3RlYWQuIEZvciBleGFtcGxlLCAnICtcbiAgICAgICAgICAgICdpbnN0ZWFkIG9mIDxkaXYgc3R5bGU9XCJ7eyB2YWwgfX1cIj4sIHVzZSA8ZGl2IDpzdHlsZT1cInZhbFwiPi4nLFxuICAgICAgICAgICAgZWwucmF3QXR0cnNNYXBbJ3N0eWxlJ11cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbC5zdGF0aWNTdHlsZSA9IEpTT04uc3RyaW5naWZ5KHBhcnNlU3R5bGVUZXh0KHN0YXRpY1N0eWxlKSk7XG4gICAgfVxuXG4gICAgdmFyIHN0eWxlQmluZGluZyA9IGdldEJpbmRpbmdBdHRyKGVsLCAnc3R5bGUnLCBmYWxzZSAvKiBnZXRTdGF0aWMgKi8pO1xuICAgIGlmIChzdHlsZUJpbmRpbmcpIHtcbiAgICAgIGVsLnN0eWxlQmluZGluZyA9IHN0eWxlQmluZGluZztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZW5EYXRhJDEgKGVsKSB7XG4gICAgdmFyIGRhdGEgPSAnJztcbiAgICBpZiAoZWwuc3RhdGljU3R5bGUpIHtcbiAgICAgIGRhdGEgKz0gXCJzdGF0aWNTdHlsZTpcIiArIChlbC5zdGF0aWNTdHlsZSkgKyBcIixcIjtcbiAgICB9XG4gICAgaWYgKGVsLnN0eWxlQmluZGluZykge1xuICAgICAgZGF0YSArPSBcInN0eWxlOihcIiArIChlbC5zdHlsZUJpbmRpbmcpICsgXCIpLFwiO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgdmFyIHN0eWxlJDEgPSB7XG4gICAgc3RhdGljS2V5czogWydzdGF0aWNTdHlsZSddLFxuICAgIHRyYW5zZm9ybU5vZGU6IHRyYW5zZm9ybU5vZGUkMSxcbiAgICBnZW5EYXRhOiBnZW5EYXRhJDFcbiAgfTtcblxuICAvKiAgKi9cblxuICB2YXIgZGVjb2RlcjtcblxuICB2YXIgaGUgPSB7XG4gICAgZGVjb2RlOiBmdW5jdGlvbiBkZWNvZGUgKGh0bWwpIHtcbiAgICAgIGRlY29kZXIgPSBkZWNvZGVyIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGVjb2Rlci5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgcmV0dXJuIGRlY29kZXIudGV4dENvbnRlbnRcbiAgICB9XG4gIH07XG5cbiAgLyogICovXG5cbiAgdmFyIGlzVW5hcnlUYWcgPSBtYWtlTWFwKFxuICAgICdhcmVhLGJhc2UsYnIsY29sLGVtYmVkLGZyYW1lLGhyLGltZyxpbnB1dCxpc2luZGV4LGtleWdlbiwnICtcbiAgICAnbGluayxtZXRhLHBhcmFtLHNvdXJjZSx0cmFjayx3YnInXG4gICk7XG5cbiAgLy8gRWxlbWVudHMgdGhhdCB5b3UgY2FuLCBpbnRlbnRpb25hbGx5LCBsZWF2ZSBvcGVuXG4gIC8vIChhbmQgd2hpY2ggY2xvc2UgdGhlbXNlbHZlcylcbiAgdmFyIGNhbkJlTGVmdE9wZW5UYWcgPSBtYWtlTWFwKFxuICAgICdjb2xncm91cCxkZCxkdCxsaSxvcHRpb25zLHAsdGQsdGZvb3QsdGgsdGhlYWQsdHIsc291cmNlJ1xuICApO1xuXG4gIC8vIEhUTUw1IHRhZ3MgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW5kaWNlcy5odG1sI2VsZW1lbnRzLTNcbiAgLy8gUGhyYXNpbmcgQ29udGVudCBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9kb20uaHRtbCNwaHJhc2luZy1jb250ZW50XG4gIHZhciBpc05vblBocmFzaW5nVGFnID0gbWFrZU1hcChcbiAgICAnYWRkcmVzcyxhcnRpY2xlLGFzaWRlLGJhc2UsYmxvY2txdW90ZSxib2R5LGNhcHRpb24sY29sLGNvbGdyb3VwLGRkLCcgK1xuICAgICdkZXRhaWxzLGRpYWxvZyxkaXYsZGwsZHQsZmllbGRzZXQsZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGZvcm0sJyArXG4gICAgJ2gxLGgyLGgzLGg0LGg1LGg2LGhlYWQsaGVhZGVyLGhncm91cCxocixodG1sLGxlZ2VuZCxsaSxtZW51aXRlbSxtZXRhLCcgK1xuICAgICdvcHRncm91cCxvcHRpb24scGFyYW0scnAscnQsc291cmNlLHN0eWxlLHN1bW1hcnksdGJvZHksdGQsdGZvb3QsdGgsdGhlYWQsJyArXG4gICAgJ3RpdGxlLHRyLHRyYWNrJ1xuICApO1xuXG4gIC8qKlxuICAgKiBOb3QgdHlwZS1jaGVja2luZyB0aGlzIGZpbGUgYmVjYXVzZSBpdCdzIG1vc3RseSB2ZW5kb3IgY29kZS5cbiAgICovXG5cbiAgLy8gUmVndWxhciBFeHByZXNzaW9ucyBmb3IgcGFyc2luZyB0YWdzIGFuZCBhdHRyaWJ1dGVzXG4gIHZhciBhdHRyaWJ1dGUgPSAvXlxccyooW15cXHNcIic8PlxcLz1dKykoPzpcXHMqKD0pXFxzKig/OlwiKFteXCJdKilcIit8JyhbXiddKiknK3woW15cXHNcIic9PD5gXSspKSk/LztcbiAgdmFyIGR5bmFtaWNBcmdBdHRyaWJ1dGUgPSAvXlxccyooKD86di1bXFx3LV0rOnxAfDp8IylcXFtbXj1dK1xcXVteXFxzXCInPD5cXC89XSopKD86XFxzKig9KVxccyooPzpcIihbXlwiXSopXCIrfCcoW14nXSopJyt8KFteXFxzXCInPTw+YF0rKSkpPy87XG4gIHZhciBuY25hbWUgPSBcIlthLXpBLVpfXVtcXFxcLVxcXFwuMC05X2EtekEtWlwiICsgKHVuaWNvZGVSZWdFeHAuc291cmNlKSArIFwiXSpcIjtcbiAgdmFyIHFuYW1lQ2FwdHVyZSA9IFwiKCg/OlwiICsgbmNuYW1lICsgXCJcXFxcOik/XCIgKyBuY25hbWUgKyBcIilcIjtcbiAgdmFyIHN0YXJ0VGFnT3BlbiA9IG5ldyBSZWdFeHAoKFwiXjxcIiArIHFuYW1lQ2FwdHVyZSkpO1xuICB2YXIgc3RhcnRUYWdDbG9zZSA9IC9eXFxzKihcXC8/KT4vO1xuICB2YXIgZW5kVGFnID0gbmV3IFJlZ0V4cCgoXCJePFxcXFwvXCIgKyBxbmFtZUNhcHR1cmUgKyBcIltePl0qPlwiKSk7XG4gIHZhciBkb2N0eXBlID0gL148IURPQ1RZUEUgW14+XSs+L2k7XG4gIC8vICM3Mjk4OiBlc2NhcGUgLSB0byBhdm9pZCBiZWluZyBwYXNzZWQgYXMgSFRNTCBjb21tZW50IHdoZW4gaW5saW5lZCBpbiBwYWdlXG4gIHZhciBjb21tZW50ID0gL148IVxcLS0vO1xuICB2YXIgY29uZGl0aW9uYWxDb21tZW50ID0gL148IVxcWy87XG5cbiAgLy8gU3BlY2lhbCBFbGVtZW50cyAoY2FuIGNvbnRhaW4gYW55dGhpbmcpXG4gIHZhciBpc1BsYWluVGV4dEVsZW1lbnQgPSBtYWtlTWFwKCdzY3JpcHQsc3R5bGUsdGV4dGFyZWEnLCB0cnVlKTtcbiAgdmFyIHJlQ2FjaGUgPSB7fTtcblxuICB2YXIgZGVjb2RpbmdNYXAgPSB7XG4gICAgJyZsdDsnOiAnPCcsXG4gICAgJyZndDsnOiAnPicsXG4gICAgJyZxdW90Oyc6ICdcIicsXG4gICAgJyZhbXA7JzogJyYnLFxuICAgICcmIzEwOyc6ICdcXG4nLFxuICAgICcmIzk7JzogJ1xcdCcsXG4gICAgJyYjMzk7JzogXCInXCJcbiAgfTtcbiAgdmFyIGVuY29kZWRBdHRyID0gLyYoPzpsdHxndHxxdW90fGFtcHwjMzkpOy9nO1xuICB2YXIgZW5jb2RlZEF0dHJXaXRoTmV3TGluZXMgPSAvJig/Omx0fGd0fHF1b3R8YW1wfCMzOXwjMTB8IzkpOy9nO1xuXG4gIC8vICM1OTkyXG4gIHZhciBpc0lnbm9yZU5ld2xpbmVUYWcgPSBtYWtlTWFwKCdwcmUsdGV4dGFyZWEnLCB0cnVlKTtcbiAgdmFyIHNob3VsZElnbm9yZUZpcnN0TmV3bGluZSA9IGZ1bmN0aW9uICh0YWcsIGh0bWwpIHsgcmV0dXJuIHRhZyAmJiBpc0lnbm9yZU5ld2xpbmVUYWcodGFnKSAmJiBodG1sWzBdID09PSAnXFxuJzsgfTtcblxuICBmdW5jdGlvbiBkZWNvZGVBdHRyICh2YWx1ZSwgc2hvdWxkRGVjb2RlTmV3bGluZXMpIHtcbiAgICB2YXIgcmUgPSBzaG91bGREZWNvZGVOZXdsaW5lcyA/IGVuY29kZWRBdHRyV2l0aE5ld0xpbmVzIDogZW5jb2RlZEF0dHI7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UocmUsIGZ1bmN0aW9uIChtYXRjaCkgeyByZXR1cm4gZGVjb2RpbmdNYXBbbWF0Y2hdOyB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VIVE1MIChodG1sLCBvcHRpb25zKSB7XG4gICAgdmFyIHN0YWNrID0gW107XG4gICAgdmFyIGV4cGVjdEhUTUwgPSBvcHRpb25zLmV4cGVjdEhUTUw7XG4gICAgdmFyIGlzVW5hcnlUYWckJDEgPSBvcHRpb25zLmlzVW5hcnlUYWcgfHwgbm87XG4gICAgdmFyIGNhbkJlTGVmdE9wZW5UYWckJDEgPSBvcHRpb25zLmNhbkJlTGVmdE9wZW5UYWcgfHwgbm87XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgbGFzdCwgbGFzdFRhZztcbiAgICB3aGlsZSAoaHRtbCkge1xuICAgICAgbGFzdCA9IGh0bWw7XG4gICAgICAvLyBNYWtlIHN1cmUgd2UncmUgbm90IGluIGEgcGxhaW50ZXh0IGNvbnRlbnQgZWxlbWVudCBsaWtlIHNjcmlwdC9zdHlsZVxuICAgICAgaWYgKCFsYXN0VGFnIHx8ICFpc1BsYWluVGV4dEVsZW1lbnQobGFzdFRhZykpIHtcbiAgICAgICAgdmFyIHRleHRFbmQgPSBodG1sLmluZGV4T2YoJzwnKTtcbiAgICAgICAgaWYgKHRleHRFbmQgPT09IDApIHtcbiAgICAgICAgICAvLyBDb21tZW50OlxuICAgICAgICAgIGlmIChjb21tZW50LnRlc3QoaHRtbCkpIHtcbiAgICAgICAgICAgIHZhciBjb21tZW50RW5kID0gaHRtbC5pbmRleE9mKCctLT4nKTtcblxuICAgICAgICAgICAgaWYgKGNvbW1lbnRFbmQgPj0gMCkge1xuICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zaG91bGRLZWVwQ29tbWVudCkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuY29tbWVudChodG1sLnN1YnN0cmluZyg0LCBjb21tZW50RW5kKSwgaW5kZXgsIGluZGV4ICsgY29tbWVudEVuZCArIDMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGFkdmFuY2UoY29tbWVudEVuZCArIDMpO1xuICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29uZGl0aW9uYWxfY29tbWVudCNEb3dubGV2ZWwtcmV2ZWFsZWRfY29uZGl0aW9uYWxfY29tbWVudFxuICAgICAgICAgIGlmIChjb25kaXRpb25hbENvbW1lbnQudGVzdChodG1sKSkge1xuICAgICAgICAgICAgdmFyIGNvbmRpdGlvbmFsRW5kID0gaHRtbC5pbmRleE9mKCddPicpO1xuXG4gICAgICAgICAgICBpZiAoY29uZGl0aW9uYWxFbmQgPj0gMCkge1xuICAgICAgICAgICAgICBhZHZhbmNlKGNvbmRpdGlvbmFsRW5kICsgMik7XG4gICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRG9jdHlwZTpcbiAgICAgICAgICB2YXIgZG9jdHlwZU1hdGNoID0gaHRtbC5tYXRjaChkb2N0eXBlKTtcbiAgICAgICAgICBpZiAoZG9jdHlwZU1hdGNoKSB7XG4gICAgICAgICAgICBhZHZhbmNlKGRvY3R5cGVNYXRjaFswXS5sZW5ndGgpO1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBFbmQgdGFnOlxuICAgICAgICAgIHZhciBlbmRUYWdNYXRjaCA9IGh0bWwubWF0Y2goZW5kVGFnKTtcbiAgICAgICAgICBpZiAoZW5kVGFnTWF0Y2gpIHtcbiAgICAgICAgICAgIHZhciBjdXJJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgYWR2YW5jZShlbmRUYWdNYXRjaFswXS5sZW5ndGgpO1xuICAgICAgICAgICAgcGFyc2VFbmRUYWcoZW5kVGFnTWF0Y2hbMV0sIGN1ckluZGV4LCBpbmRleCk7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFN0YXJ0IHRhZzpcbiAgICAgICAgICB2YXIgc3RhcnRUYWdNYXRjaCA9IHBhcnNlU3RhcnRUYWcoKTtcbiAgICAgICAgICBpZiAoc3RhcnRUYWdNYXRjaCkge1xuICAgICAgICAgICAgaGFuZGxlU3RhcnRUYWcoc3RhcnRUYWdNYXRjaCk7XG4gICAgICAgICAgICBpZiAoc2hvdWxkSWdub3JlRmlyc3ROZXdsaW5lKHN0YXJ0VGFnTWF0Y2gudGFnTmFtZSwgaHRtbCkpIHtcbiAgICAgICAgICAgICAgYWR2YW5jZSgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRleHQgPSAodm9pZCAwKSwgcmVzdCA9ICh2b2lkIDApLCBuZXh0ID0gKHZvaWQgMCk7XG4gICAgICAgIGlmICh0ZXh0RW5kID49IDApIHtcbiAgICAgICAgICByZXN0ID0gaHRtbC5zbGljZSh0ZXh0RW5kKTtcbiAgICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICAhZW5kVGFnLnRlc3QocmVzdCkgJiZcbiAgICAgICAgICAgICFzdGFydFRhZ09wZW4udGVzdChyZXN0KSAmJlxuICAgICAgICAgICAgIWNvbW1lbnQudGVzdChyZXN0KSAmJlxuICAgICAgICAgICAgIWNvbmRpdGlvbmFsQ29tbWVudC50ZXN0KHJlc3QpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyA8IGluIHBsYWluIHRleHQsIGJlIGZvcmdpdmluZyBhbmQgdHJlYXQgaXQgYXMgdGV4dFxuICAgICAgICAgICAgbmV4dCA9IHJlc3QuaW5kZXhPZignPCcsIDEpO1xuICAgICAgICAgICAgaWYgKG5leHQgPCAwKSB7IGJyZWFrIH1cbiAgICAgICAgICAgIHRleHRFbmQgKz0gbmV4dDtcbiAgICAgICAgICAgIHJlc3QgPSBodG1sLnNsaWNlKHRleHRFbmQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ZXh0ID0gaHRtbC5zdWJzdHJpbmcoMCwgdGV4dEVuZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGV4dEVuZCA8IDApIHtcbiAgICAgICAgICB0ZXh0ID0gaHRtbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgYWR2YW5jZSh0ZXh0Lmxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5jaGFycyAmJiB0ZXh0KSB7XG4gICAgICAgICAgb3B0aW9ucy5jaGFycyh0ZXh0LCBpbmRleCAtIHRleHQubGVuZ3RoLCBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBlbmRUYWdMZW5ndGggPSAwO1xuICAgICAgICB2YXIgc3RhY2tlZFRhZyA9IGxhc3RUYWcudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdmFyIHJlU3RhY2tlZFRhZyA9IHJlQ2FjaGVbc3RhY2tlZFRhZ10gfHwgKHJlQ2FjaGVbc3RhY2tlZFRhZ10gPSBuZXcgUmVnRXhwKCcoW1xcXFxzXFxcXFNdKj8pKDwvJyArIHN0YWNrZWRUYWcgKyAnW14+XSo+KScsICdpJykpO1xuICAgICAgICB2YXIgcmVzdCQxID0gaHRtbC5yZXBsYWNlKHJlU3RhY2tlZFRhZywgZnVuY3Rpb24gKGFsbCwgdGV4dCwgZW5kVGFnKSB7XG4gICAgICAgICAgZW5kVGFnTGVuZ3RoID0gZW5kVGFnLmxlbmd0aDtcbiAgICAgICAgICBpZiAoIWlzUGxhaW5UZXh0RWxlbWVudChzdGFja2VkVGFnKSAmJiBzdGFja2VkVGFnICE9PSAnbm9zY3JpcHQnKSB7XG4gICAgICAgICAgICB0ZXh0ID0gdGV4dFxuICAgICAgICAgICAgICAucmVwbGFjZSgvPCFcXC0tKFtcXHNcXFNdKj8pLS0+L2csICckMScpIC8vICM3Mjk4XG4gICAgICAgICAgICAgIC5yZXBsYWNlKC88IVxcW0NEQVRBXFxbKFtcXHNcXFNdKj8pXV0+L2csICckMScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2hvdWxkSWdub3JlRmlyc3ROZXdsaW5lKHN0YWNrZWRUYWcsIHRleHQpKSB7XG4gICAgICAgICAgICB0ZXh0ID0gdGV4dC5zbGljZSgxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG9wdGlvbnMuY2hhcnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuY2hhcnModGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICB9KTtcbiAgICAgICAgaW5kZXggKz0gaHRtbC5sZW5ndGggLSByZXN0JDEubGVuZ3RoO1xuICAgICAgICBodG1sID0gcmVzdCQxO1xuICAgICAgICBwYXJzZUVuZFRhZyhzdGFja2VkVGFnLCBpbmRleCAtIGVuZFRhZ0xlbmd0aCwgaW5kZXgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaHRtbCA9PT0gbGFzdCkge1xuICAgICAgICBvcHRpb25zLmNoYXJzICYmIG9wdGlvbnMuY2hhcnMoaHRtbCk7XG4gICAgICAgIGlmICghc3RhY2subGVuZ3RoICYmIG9wdGlvbnMud2Fybikge1xuICAgICAgICAgIG9wdGlvbnMud2FybigoXCJNYWwtZm9ybWF0dGVkIHRhZyBhdCBlbmQgb2YgdGVtcGxhdGU6IFxcXCJcIiArIGh0bWwgKyBcIlxcXCJcIiksIHsgc3RhcnQ6IGluZGV4ICsgaHRtbC5sZW5ndGggfSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDbGVhbiB1cCBhbnkgcmVtYWluaW5nIHRhZ3NcbiAgICBwYXJzZUVuZFRhZygpO1xuXG4gICAgZnVuY3Rpb24gYWR2YW5jZSAobikge1xuICAgICAgaW5kZXggKz0gbjtcbiAgICAgIGh0bWwgPSBodG1sLnN1YnN0cmluZyhuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZVN0YXJ0VGFnICgpIHtcbiAgICAgIHZhciBzdGFydCA9IGh0bWwubWF0Y2goc3RhcnRUYWdPcGVuKTtcbiAgICAgIGlmIChzdGFydCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB7XG4gICAgICAgICAgdGFnTmFtZTogc3RhcnRbMV0sXG4gICAgICAgICAgYXR0cnM6IFtdLFxuICAgICAgICAgIHN0YXJ0OiBpbmRleFxuICAgICAgICB9O1xuICAgICAgICBhZHZhbmNlKHN0YXJ0WzBdLmxlbmd0aCk7XG4gICAgICAgIHZhciBlbmQsIGF0dHI7XG4gICAgICAgIHdoaWxlICghKGVuZCA9IGh0bWwubWF0Y2goc3RhcnRUYWdDbG9zZSkpICYmIChhdHRyID0gaHRtbC5tYXRjaChkeW5hbWljQXJnQXR0cmlidXRlKSB8fCBodG1sLm1hdGNoKGF0dHJpYnV0ZSkpKSB7XG4gICAgICAgICAgYXR0ci5zdGFydCA9IGluZGV4O1xuICAgICAgICAgIGFkdmFuY2UoYXR0clswXS5sZW5ndGgpO1xuICAgICAgICAgIGF0dHIuZW5kID0gaW5kZXg7XG4gICAgICAgICAgbWF0Y2guYXR0cnMucHVzaChhdHRyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW5kKSB7XG4gICAgICAgICAgbWF0Y2gudW5hcnlTbGFzaCA9IGVuZFsxXTtcbiAgICAgICAgICBhZHZhbmNlKGVuZFswXS5sZW5ndGgpO1xuICAgICAgICAgIG1hdGNoLmVuZCA9IGluZGV4O1xuICAgICAgICAgIHJldHVybiBtYXRjaFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3RhcnRUYWcgKG1hdGNoKSB7XG4gICAgICB2YXIgdGFnTmFtZSA9IG1hdGNoLnRhZ05hbWU7XG4gICAgICB2YXIgdW5hcnlTbGFzaCA9IG1hdGNoLnVuYXJ5U2xhc2g7XG5cbiAgICAgIGlmIChleHBlY3RIVE1MKSB7XG4gICAgICAgIGlmIChsYXN0VGFnID09PSAncCcgJiYgaXNOb25QaHJhc2luZ1RhZyh0YWdOYW1lKSkge1xuICAgICAgICAgIHBhcnNlRW5kVGFnKGxhc3RUYWcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5CZUxlZnRPcGVuVGFnJCQxKHRhZ05hbWUpICYmIGxhc3RUYWcgPT09IHRhZ05hbWUpIHtcbiAgICAgICAgICBwYXJzZUVuZFRhZyh0YWdOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdW5hcnkgPSBpc1VuYXJ5VGFnJCQxKHRhZ05hbWUpIHx8ICEhdW5hcnlTbGFzaDtcblxuICAgICAgdmFyIGwgPSBtYXRjaC5hdHRycy5sZW5ndGg7XG4gICAgICB2YXIgYXR0cnMgPSBuZXcgQXJyYXkobCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgYXJncyA9IG1hdGNoLmF0dHJzW2ldO1xuICAgICAgICB2YXIgdmFsdWUgPSBhcmdzWzNdIHx8IGFyZ3NbNF0gfHwgYXJnc1s1XSB8fCAnJztcbiAgICAgICAgdmFyIHNob3VsZERlY29kZU5ld2xpbmVzID0gdGFnTmFtZSA9PT0gJ2EnICYmIGFyZ3NbMV0gPT09ICdocmVmJ1xuICAgICAgICAgID8gb3B0aW9ucy5zaG91bGREZWNvZGVOZXdsaW5lc0ZvckhyZWZcbiAgICAgICAgICA6IG9wdGlvbnMuc2hvdWxkRGVjb2RlTmV3bGluZXM7XG4gICAgICAgIGF0dHJzW2ldID0ge1xuICAgICAgICAgIG5hbWU6IGFyZ3NbMV0sXG4gICAgICAgICAgdmFsdWU6IGRlY29kZUF0dHIodmFsdWUsIHNob3VsZERlY29kZU5ld2xpbmVzKVxuICAgICAgICB9O1xuICAgICAgICBpZiAob3B0aW9ucy5vdXRwdXRTb3VyY2VSYW5nZSkge1xuICAgICAgICAgIGF0dHJzW2ldLnN0YXJ0ID0gYXJncy5zdGFydCArIGFyZ3NbMF0ubWF0Y2goL15cXHMqLykubGVuZ3RoO1xuICAgICAgICAgIGF0dHJzW2ldLmVuZCA9IGFyZ3MuZW5kO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghdW5hcnkpIHtcbiAgICAgICAgc3RhY2sucHVzaCh7IHRhZzogdGFnTmFtZSwgbG93ZXJDYXNlZFRhZzogdGFnTmFtZS50b0xvd2VyQ2FzZSgpLCBhdHRyczogYXR0cnMsIHN0YXJ0OiBtYXRjaC5zdGFydCwgZW5kOiBtYXRjaC5lbmQgfSk7XG4gICAgICAgIGxhc3RUYWcgPSB0YWdOYW1lO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5zdGFydCkge1xuICAgICAgICBvcHRpb25zLnN0YXJ0KHRhZ05hbWUsIGF0dHJzLCB1bmFyeSwgbWF0Y2guc3RhcnQsIG1hdGNoLmVuZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VFbmRUYWcgKHRhZ05hbWUsIHN0YXJ0LCBlbmQpIHtcbiAgICAgIHZhciBwb3MsIGxvd2VyQ2FzZWRUYWdOYW1lO1xuICAgICAgaWYgKHN0YXJ0ID09IG51bGwpIHsgc3RhcnQgPSBpbmRleDsgfVxuICAgICAgaWYgKGVuZCA9PSBudWxsKSB7IGVuZCA9IGluZGV4OyB9XG5cbiAgICAgIC8vIEZpbmQgdGhlIGNsb3Nlc3Qgb3BlbmVkIHRhZyBvZiB0aGUgc2FtZSB0eXBlXG4gICAgICBpZiAodGFnTmFtZSkge1xuICAgICAgICBsb3dlckNhc2VkVGFnTmFtZSA9IHRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgZm9yIChwb3MgPSBzdGFjay5sZW5ndGggLSAxOyBwb3MgPj0gMDsgcG9zLS0pIHtcbiAgICAgICAgICBpZiAoc3RhY2tbcG9zXS5sb3dlckNhc2VkVGFnID09PSBsb3dlckNhc2VkVGFnTmFtZSkge1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIG5vIHRhZyBuYW1lIGlzIHByb3ZpZGVkLCBjbGVhbiBzaG9wXG4gICAgICAgIHBvcyA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChwb3MgPj0gMCkge1xuICAgICAgICAvLyBDbG9zZSBhbGwgdGhlIG9wZW4gZWxlbWVudHMsIHVwIHRoZSBzdGFja1xuICAgICAgICBmb3IgKHZhciBpID0gc3RhY2subGVuZ3RoIC0gMTsgaSA+PSBwb3M7IGktLSkge1xuICAgICAgICAgIGlmIChpID4gcG9zIHx8ICF0YWdOYW1lICYmXG4gICAgICAgICAgICBvcHRpb25zLndhcm5cbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIG9wdGlvbnMud2FybihcbiAgICAgICAgICAgICAgKFwidGFnIDxcIiArIChzdGFja1tpXS50YWcpICsgXCI+IGhhcyBubyBtYXRjaGluZyBlbmQgdGFnLlwiKSxcbiAgICAgICAgICAgICAgeyBzdGFydDogc3RhY2tbaV0uc3RhcnQsIGVuZDogc3RhY2tbaV0uZW5kIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvcHRpb25zLmVuZCkge1xuICAgICAgICAgICAgb3B0aW9ucy5lbmQoc3RhY2tbaV0udGFnLCBzdGFydCwgZW5kKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgdGhlIG9wZW4gZWxlbWVudHMgZnJvbSB0aGUgc3RhY2tcbiAgICAgICAgc3RhY2subGVuZ3RoID0gcG9zO1xuICAgICAgICBsYXN0VGFnID0gcG9zICYmIHN0YWNrW3BvcyAtIDFdLnRhZztcbiAgICAgIH0gZWxzZSBpZiAobG93ZXJDYXNlZFRhZ05hbWUgPT09ICdicicpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuc3RhcnQpIHtcbiAgICAgICAgICBvcHRpb25zLnN0YXJ0KHRhZ05hbWUsIFtdLCB0cnVlLCBzdGFydCwgZW5kKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsb3dlckNhc2VkVGFnTmFtZSA9PT0gJ3AnKSB7XG4gICAgICAgIGlmIChvcHRpb25zLnN0YXJ0KSB7XG4gICAgICAgICAgb3B0aW9ucy5zdGFydCh0YWdOYW1lLCBbXSwgZmFsc2UsIHN0YXJ0LCBlbmQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmVuZCkge1xuICAgICAgICAgIG9wdGlvbnMuZW5kKHRhZ05hbWUsIHN0YXJ0LCBlbmQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyogICovXG5cbiAgdmFyIG9uUkUgPSAvXkB8XnYtb246LztcbiAgdmFyIGRpclJFID0gL152LXxeQHxeOnxeIy87XG4gIHZhciBmb3JBbGlhc1JFID0gLyhbXFxzXFxTXSo/KVxccysoPzppbnxvZilcXHMrKFtcXHNcXFNdKikvO1xuICB2YXIgZm9ySXRlcmF0b3JSRSA9IC8sKFteLFxcfVxcXV0qKSg/OiwoW14sXFx9XFxdXSopKT8kLztcbiAgdmFyIHN0cmlwUGFyZW5zUkUgPSAvXlxcKHxcXCkkL2c7XG4gIHZhciBkeW5hbWljQXJnUkUgPSAvXlxcWy4qXFxdJC87XG5cbiAgdmFyIGFyZ1JFID0gLzooLiopJC87XG4gIHZhciBiaW5kUkUgPSAvXjp8XlxcLnxedi1iaW5kOi87XG4gIHZhciBtb2RpZmllclJFID0gL1xcLlteLlxcXV0rKD89W15cXF1dKiQpL2c7XG5cbiAgdmFyIHNsb3RSRSA9IC9edi1zbG90KDp8JCl8XiMvO1xuXG4gIHZhciBsaW5lQnJlYWtSRSA9IC9bXFxyXFxuXS87XG4gIHZhciB3aGl0ZXNwYWNlUkUkMSA9IC9cXHMrL2c7XG5cbiAgdmFyIGludmFsaWRBdHRyaWJ1dGVSRSA9IC9bXFxzXCInPD5cXC89XS87XG5cbiAgdmFyIGRlY29kZUhUTUxDYWNoZWQgPSBjYWNoZWQoaGUuZGVjb2RlKTtcblxuICB2YXIgZW1wdHlTbG90U2NvcGVUb2tlbiA9IFwiX2VtcHR5X1wiO1xuXG4gIC8vIGNvbmZpZ3VyYWJsZSBzdGF0ZVxuICB2YXIgd2FybiQyO1xuICB2YXIgZGVsaW1pdGVycztcbiAgdmFyIHRyYW5zZm9ybXM7XG4gIHZhciBwcmVUcmFuc2Zvcm1zO1xuICB2YXIgcG9zdFRyYW5zZm9ybXM7XG4gIHZhciBwbGF0Zm9ybUlzUHJlVGFnO1xuICB2YXIgcGxhdGZvcm1NdXN0VXNlUHJvcDtcbiAgdmFyIHBsYXRmb3JtR2V0VGFnTmFtZXNwYWNlO1xuICB2YXIgbWF5YmVDb21wb25lbnQ7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQVNURWxlbWVudCAoXG4gICAgdGFnLFxuICAgIGF0dHJzLFxuICAgIHBhcmVudFxuICApIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogMSxcbiAgICAgIHRhZzogdGFnLFxuICAgICAgYXR0cnNMaXN0OiBhdHRycyxcbiAgICAgIGF0dHJzTWFwOiBtYWtlQXR0cnNNYXAoYXR0cnMpLFxuICAgICAgcmF3QXR0cnNNYXA6IHt9LFxuICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICBjaGlsZHJlbjogW11cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBIVE1MIHN0cmluZyB0byBBU1QuXG4gICAqL1xuICBmdW5jdGlvbiBwYXJzZSAoXG4gICAgdGVtcGxhdGUsXG4gICAgb3B0aW9uc1xuICApIHtcbiAgICB3YXJuJDIgPSBvcHRpb25zLndhcm4gfHwgYmFzZVdhcm47XG5cbiAgICBwbGF0Zm9ybUlzUHJlVGFnID0gb3B0aW9ucy5pc1ByZVRhZyB8fCBubztcbiAgICBwbGF0Zm9ybU11c3RVc2VQcm9wID0gb3B0aW9ucy5tdXN0VXNlUHJvcCB8fCBubztcbiAgICBwbGF0Zm9ybUdldFRhZ05hbWVzcGFjZSA9IG9wdGlvbnMuZ2V0VGFnTmFtZXNwYWNlIHx8IG5vO1xuICAgIHZhciBpc1Jlc2VydmVkVGFnID0gb3B0aW9ucy5pc1Jlc2VydmVkVGFnIHx8IG5vO1xuICAgIG1heWJlQ29tcG9uZW50ID0gZnVuY3Rpb24gKGVsKSB7IHJldHVybiAhIWVsLmNvbXBvbmVudCB8fCAhaXNSZXNlcnZlZFRhZyhlbC50YWcpOyB9O1xuXG4gICAgdHJhbnNmb3JtcyA9IHBsdWNrTW9kdWxlRnVuY3Rpb24ob3B0aW9ucy5tb2R1bGVzLCAndHJhbnNmb3JtTm9kZScpO1xuICAgIHByZVRyYW5zZm9ybXMgPSBwbHVja01vZHVsZUZ1bmN0aW9uKG9wdGlvbnMubW9kdWxlcywgJ3ByZVRyYW5zZm9ybU5vZGUnKTtcbiAgICBwb3N0VHJhbnNmb3JtcyA9IHBsdWNrTW9kdWxlRnVuY3Rpb24ob3B0aW9ucy5tb2R1bGVzLCAncG9zdFRyYW5zZm9ybU5vZGUnKTtcblxuICAgIGRlbGltaXRlcnMgPSBvcHRpb25zLmRlbGltaXRlcnM7XG5cbiAgICB2YXIgc3RhY2sgPSBbXTtcbiAgICB2YXIgcHJlc2VydmVXaGl0ZXNwYWNlID0gb3B0aW9ucy5wcmVzZXJ2ZVdoaXRlc3BhY2UgIT09IGZhbHNlO1xuICAgIHZhciB3aGl0ZXNwYWNlT3B0aW9uID0gb3B0aW9ucy53aGl0ZXNwYWNlO1xuICAgIHZhciByb290O1xuICAgIHZhciBjdXJyZW50UGFyZW50O1xuICAgIHZhciBpblZQcmUgPSBmYWxzZTtcbiAgICB2YXIgaW5QcmUgPSBmYWxzZTtcbiAgICB2YXIgd2FybmVkID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiB3YXJuT25jZSAobXNnLCByYW5nZSkge1xuICAgICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgICAgd2FybmVkID0gdHJ1ZTtcbiAgICAgICAgd2FybiQyKG1zZywgcmFuZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlRWxlbWVudCAoZWxlbWVudCkge1xuICAgICAgdHJpbUVuZGluZ1doaXRlc3BhY2UoZWxlbWVudCk7XG4gICAgICBpZiAoIWluVlByZSAmJiAhZWxlbWVudC5wcm9jZXNzZWQpIHtcbiAgICAgICAgZWxlbWVudCA9IHByb2Nlc3NFbGVtZW50KGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgLy8gdHJlZSBtYW5hZ2VtZW50XG4gICAgICBpZiAoIXN0YWNrLmxlbmd0aCAmJiBlbGVtZW50ICE9PSByb290KSB7XG4gICAgICAgIC8vIGFsbG93IHJvb3QgZWxlbWVudHMgd2l0aCB2LWlmLCB2LWVsc2UtaWYgYW5kIHYtZWxzZVxuICAgICAgICBpZiAocm9vdC5pZiAmJiAoZWxlbWVudC5lbHNlaWYgfHwgZWxlbWVudC5lbHNlKSkge1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNoZWNrUm9vdENvbnN0cmFpbnRzKGVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhZGRJZkNvbmRpdGlvbihyb290LCB7XG4gICAgICAgICAgICBleHA6IGVsZW1lbnQuZWxzZWlmLFxuICAgICAgICAgICAgYmxvY2s6IGVsZW1lbnRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3YXJuT25jZShcbiAgICAgICAgICAgIFwiQ29tcG9uZW50IHRlbXBsYXRlIHNob3VsZCBjb250YWluIGV4YWN0bHkgb25lIHJvb3QgZWxlbWVudC4gXCIgK1xuICAgICAgICAgICAgXCJJZiB5b3UgYXJlIHVzaW5nIHYtaWYgb24gbXVsdGlwbGUgZWxlbWVudHMsIFwiICtcbiAgICAgICAgICAgIFwidXNlIHYtZWxzZS1pZiB0byBjaGFpbiB0aGVtIGluc3RlYWQuXCIsXG4gICAgICAgICAgICB7IHN0YXJ0OiBlbGVtZW50LnN0YXJ0IH1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudFBhcmVudCAmJiAhZWxlbWVudC5mb3JiaWRkZW4pIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuZWxzZWlmIHx8IGVsZW1lbnQuZWxzZSkge1xuICAgICAgICAgIHByb2Nlc3NJZkNvbmRpdGlvbnMoZWxlbWVudCwgY3VycmVudFBhcmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGVsZW1lbnQuc2xvdFNjb3BlKSB7XG4gICAgICAgICAgICAvLyBzY29wZWQgc2xvdFxuICAgICAgICAgICAgLy8ga2VlcCBpdCBpbiB0aGUgY2hpbGRyZW4gbGlzdCBzbyB0aGF0IHYtZWxzZSgtaWYpIGNvbmRpdGlvbnMgY2FuXG4gICAgICAgICAgICAvLyBmaW5kIGl0IGFzIHRoZSBwcmV2IG5vZGUuXG4gICAgICAgICAgICB2YXIgbmFtZSA9IGVsZW1lbnQuc2xvdFRhcmdldCB8fCAnXCJkZWZhdWx0XCInXG4gICAgICAgICAgICA7KGN1cnJlbnRQYXJlbnQuc2NvcGVkU2xvdHMgfHwgKGN1cnJlbnRQYXJlbnQuc2NvcGVkU2xvdHMgPSB7fSkpW25hbWVdID0gZWxlbWVudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3VycmVudFBhcmVudC5jaGlsZHJlbi5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgIGVsZW1lbnQucGFyZW50ID0gY3VycmVudFBhcmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBmaW5hbCBjaGlsZHJlbiBjbGVhbnVwXG4gICAgICAvLyBmaWx0ZXIgb3V0IHNjb3BlZCBzbG90c1xuICAgICAgZWxlbWVudC5jaGlsZHJlbiA9IGVsZW1lbnQuY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiAhKGMpLnNsb3RTY29wZTsgfSk7XG4gICAgICAvLyByZW1vdmUgdHJhaWxpbmcgd2hpdGVzcGFjZSBub2RlIGFnYWluXG4gICAgICB0cmltRW5kaW5nV2hpdGVzcGFjZShlbGVtZW50KTtcblxuICAgICAgLy8gY2hlY2sgcHJlIHN0YXRlXG4gICAgICBpZiAoZWxlbWVudC5wcmUpIHtcbiAgICAgICAgaW5WUHJlID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAocGxhdGZvcm1Jc1ByZVRhZyhlbGVtZW50LnRhZykpIHtcbiAgICAgICAgaW5QcmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIGFwcGx5IHBvc3QtdHJhbnNmb3Jtc1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3N0VHJhbnNmb3Jtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3N0VHJhbnNmb3Jtc1tpXShlbGVtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmltRW5kaW5nV2hpdGVzcGFjZSAoZWwpIHtcbiAgICAgIC8vIHJlbW92ZSB0cmFpbGluZyB3aGl0ZXNwYWNlIG5vZGVcbiAgICAgIGlmICghaW5QcmUpIHtcbiAgICAgICAgdmFyIGxhc3ROb2RlO1xuICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgKGxhc3ROb2RlID0gZWwuY2hpbGRyZW5bZWwuY2hpbGRyZW4ubGVuZ3RoIC0gMV0pICYmXG4gICAgICAgICAgbGFzdE5vZGUudHlwZSA9PT0gMyAmJlxuICAgICAgICAgIGxhc3ROb2RlLnRleHQgPT09ICcgJ1xuICAgICAgICApIHtcbiAgICAgICAgICBlbC5jaGlsZHJlbi5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrUm9vdENvbnN0cmFpbnRzIChlbCkge1xuICAgICAgaWYgKGVsLnRhZyA9PT0gJ3Nsb3QnIHx8IGVsLnRhZyA9PT0gJ3RlbXBsYXRlJykge1xuICAgICAgICB3YXJuT25jZShcbiAgICAgICAgICBcIkNhbm5vdCB1c2UgPFwiICsgKGVsLnRhZykgKyBcIj4gYXMgY29tcG9uZW50IHJvb3QgZWxlbWVudCBiZWNhdXNlIGl0IG1heSBcIiArXG4gICAgICAgICAgJ2NvbnRhaW4gbXVsdGlwbGUgbm9kZXMuJyxcbiAgICAgICAgICB7IHN0YXJ0OiBlbC5zdGFydCB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoZWwuYXR0cnNNYXAuaGFzT3duUHJvcGVydHkoJ3YtZm9yJykpIHtcbiAgICAgICAgd2Fybk9uY2UoXG4gICAgICAgICAgJ0Nhbm5vdCB1c2Ugdi1mb3Igb24gc3RhdGVmdWwgY29tcG9uZW50IHJvb3QgZWxlbWVudCBiZWNhdXNlICcgK1xuICAgICAgICAgICdpdCByZW5kZXJzIG11bHRpcGxlIGVsZW1lbnRzLicsXG4gICAgICAgICAgZWwucmF3QXR0cnNNYXBbJ3YtZm9yJ11cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJzZUhUTUwodGVtcGxhdGUsIHtcbiAgICAgIHdhcm46IHdhcm4kMixcbiAgICAgIGV4cGVjdEhUTUw6IG9wdGlvbnMuZXhwZWN0SFRNTCxcbiAgICAgIGlzVW5hcnlUYWc6IG9wdGlvbnMuaXNVbmFyeVRhZyxcbiAgICAgIGNhbkJlTGVmdE9wZW5UYWc6IG9wdGlvbnMuY2FuQmVMZWZ0T3BlblRhZyxcbiAgICAgIHNob3VsZERlY29kZU5ld2xpbmVzOiBvcHRpb25zLnNob3VsZERlY29kZU5ld2xpbmVzLFxuICAgICAgc2hvdWxkRGVjb2RlTmV3bGluZXNGb3JIcmVmOiBvcHRpb25zLnNob3VsZERlY29kZU5ld2xpbmVzRm9ySHJlZixcbiAgICAgIHNob3VsZEtlZXBDb21tZW50OiBvcHRpb25zLmNvbW1lbnRzLFxuICAgICAgb3V0cHV0U291cmNlUmFuZ2U6IG9wdGlvbnMub3V0cHV0U291cmNlUmFuZ2UsXG4gICAgICBzdGFydDogZnVuY3Rpb24gc3RhcnQgKHRhZywgYXR0cnMsIHVuYXJ5LCBzdGFydCQxLCBlbmQpIHtcbiAgICAgICAgLy8gY2hlY2sgbmFtZXNwYWNlLlxuICAgICAgICAvLyBpbmhlcml0IHBhcmVudCBucyBpZiB0aGVyZSBpcyBvbmVcbiAgICAgICAgdmFyIG5zID0gKGN1cnJlbnRQYXJlbnQgJiYgY3VycmVudFBhcmVudC5ucykgfHwgcGxhdGZvcm1HZXRUYWdOYW1lc3BhY2UodGFnKTtcblxuICAgICAgICAvLyBoYW5kbGUgSUUgc3ZnIGJ1Z1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKGlzSUUgJiYgbnMgPT09ICdzdmcnKSB7XG4gICAgICAgICAgYXR0cnMgPSBndWFyZElFU1ZHQnVnKGF0dHJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBlbGVtZW50ID0gY3JlYXRlQVNURWxlbWVudCh0YWcsIGF0dHJzLCBjdXJyZW50UGFyZW50KTtcbiAgICAgICAgaWYgKG5zKSB7XG4gICAgICAgICAgZWxlbWVudC5ucyA9IG5zO1xuICAgICAgICB9XG5cbiAgICAgICAge1xuICAgICAgICAgIGlmIChvcHRpb25zLm91dHB1dFNvdXJjZVJhbmdlKSB7XG4gICAgICAgICAgICBlbGVtZW50LnN0YXJ0ID0gc3RhcnQkMTtcbiAgICAgICAgICAgIGVsZW1lbnQuZW5kID0gZW5kO1xuICAgICAgICAgICAgZWxlbWVudC5yYXdBdHRyc01hcCA9IGVsZW1lbnQuYXR0cnNMaXN0LnJlZHVjZShmdW5jdGlvbiAoY3VtdWxhdGVkLCBhdHRyKSB7XG4gICAgICAgICAgICAgIGN1bXVsYXRlZFthdHRyLm5hbWVdID0gYXR0cjtcbiAgICAgICAgICAgICAgcmV0dXJuIGN1bXVsYXRlZFxuICAgICAgICAgICAgfSwge30pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhdHRycy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICBpZiAoaW52YWxpZEF0dHJpYnV0ZVJFLnRlc3QoYXR0ci5uYW1lKSkge1xuICAgICAgICAgICAgICB3YXJuJDIoXG4gICAgICAgICAgICAgICAgXCJJbnZhbGlkIGR5bmFtaWMgYXJndW1lbnQgZXhwcmVzc2lvbjogYXR0cmlidXRlIG5hbWVzIGNhbm5vdCBjb250YWluIFwiICtcbiAgICAgICAgICAgICAgICBcInNwYWNlcywgcXVvdGVzLCA8LCA+LCAvIG9yID0uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhcnQ6IGF0dHIuc3RhcnQgKyBhdHRyLm5hbWUuaW5kZXhPZihcIltcIiksXG4gICAgICAgICAgICAgICAgICBlbmQ6IGF0dHIuc3RhcnQgKyBhdHRyLm5hbWUubGVuZ3RoXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRm9yYmlkZGVuVGFnKGVsZW1lbnQpICYmICFpc1NlcnZlclJlbmRlcmluZygpKSB7XG4gICAgICAgICAgZWxlbWVudC5mb3JiaWRkZW4gPSB0cnVlO1xuICAgICAgICAgIHdhcm4kMihcbiAgICAgICAgICAgICdUZW1wbGF0ZXMgc2hvdWxkIG9ubHkgYmUgcmVzcG9uc2libGUgZm9yIG1hcHBpbmcgdGhlIHN0YXRlIHRvIHRoZSAnICtcbiAgICAgICAgICAgICdVSS4gQXZvaWQgcGxhY2luZyB0YWdzIHdpdGggc2lkZS1lZmZlY3RzIGluIHlvdXIgdGVtcGxhdGVzLCBzdWNoIGFzICcgK1xuICAgICAgICAgICAgXCI8XCIgKyB0YWcgKyBcIj5cIiArICcsIGFzIHRoZXkgd2lsbCBub3QgYmUgcGFyc2VkLicsXG4gICAgICAgICAgICB7IHN0YXJ0OiBlbGVtZW50LnN0YXJ0IH1cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXBwbHkgcHJlLXRyYW5zZm9ybXNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmVUcmFuc2Zvcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZWxlbWVudCA9IHByZVRyYW5zZm9ybXNbaV0oZWxlbWVudCwgb3B0aW9ucykgfHwgZWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaW5WUHJlKSB7XG4gICAgICAgICAgcHJvY2Vzc1ByZShlbGVtZW50KTtcbiAgICAgICAgICBpZiAoZWxlbWVudC5wcmUpIHtcbiAgICAgICAgICAgIGluVlByZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwbGF0Zm9ybUlzUHJlVGFnKGVsZW1lbnQudGFnKSkge1xuICAgICAgICAgIGluUHJlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5WUHJlKSB7XG4gICAgICAgICAgcHJvY2Vzc1Jhd0F0dHJzKGVsZW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKCFlbGVtZW50LnByb2Nlc3NlZCkge1xuICAgICAgICAgIC8vIHN0cnVjdHVyYWwgZGlyZWN0aXZlc1xuICAgICAgICAgIHByb2Nlc3NGb3IoZWxlbWVudCk7XG4gICAgICAgICAgcHJvY2Vzc0lmKGVsZW1lbnQpO1xuICAgICAgICAgIHByb2Nlc3NPbmNlKGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgcm9vdCA9IGVsZW1lbnQ7XG4gICAgICAgICAge1xuICAgICAgICAgICAgY2hlY2tSb290Q29uc3RyYWludHMocm9vdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF1bmFyeSkge1xuICAgICAgICAgIGN1cnJlbnRQYXJlbnQgPSBlbGVtZW50O1xuICAgICAgICAgIHN0YWNrLnB1c2goZWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xvc2VFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBlbmQ6IGZ1bmN0aW9uIGVuZCAodGFnLCBzdGFydCwgZW5kJDEpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcbiAgICAgICAgLy8gcG9wIHN0YWNrXG4gICAgICAgIHN0YWNrLmxlbmd0aCAtPSAxO1xuICAgICAgICBjdXJyZW50UGFyZW50ID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChvcHRpb25zLm91dHB1dFNvdXJjZVJhbmdlKSB7XG4gICAgICAgICAgZWxlbWVudC5lbmQgPSBlbmQkMTtcbiAgICAgICAgfVxuICAgICAgICBjbG9zZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICB9LFxuXG4gICAgICBjaGFyczogZnVuY3Rpb24gY2hhcnMgKHRleHQsIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgaWYgKCFjdXJyZW50UGFyZW50KSB7XG4gICAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRleHQgPT09IHRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgIHdhcm5PbmNlKFxuICAgICAgICAgICAgICAgICdDb21wb25lbnQgdGVtcGxhdGUgcmVxdWlyZXMgYSByb290IGVsZW1lbnQsIHJhdGhlciB0aGFuIGp1c3QgdGV4dC4nLFxuICAgICAgICAgICAgICAgIHsgc3RhcnQ6IHN0YXJ0IH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHRleHQgPSB0ZXh0LnRyaW0oKSkpIHtcbiAgICAgICAgICAgICAgd2Fybk9uY2UoXG4gICAgICAgICAgICAgICAgKFwidGV4dCBcXFwiXCIgKyB0ZXh0ICsgXCJcXFwiIG91dHNpZGUgcm9vdCBlbGVtZW50IHdpbGwgYmUgaWdub3JlZC5cIiksXG4gICAgICAgICAgICAgICAgeyBzdGFydDogc3RhcnQgfVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICAvLyBJRSB0ZXh0YXJlYSBwbGFjZWhvbGRlciBidWdcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChpc0lFICYmXG4gICAgICAgICAgY3VycmVudFBhcmVudC50YWcgPT09ICd0ZXh0YXJlYScgJiZcbiAgICAgICAgICBjdXJyZW50UGFyZW50LmF0dHJzTWFwLnBsYWNlaG9sZGVyID09PSB0ZXh0XG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IGN1cnJlbnRQYXJlbnQuY2hpbGRyZW47XG4gICAgICAgIGlmIChpblByZSB8fCB0ZXh0LnRyaW0oKSkge1xuICAgICAgICAgIHRleHQgPSBpc1RleHRUYWcoY3VycmVudFBhcmVudCkgPyB0ZXh0IDogZGVjb2RlSFRNTENhY2hlZCh0ZXh0KTtcbiAgICAgICAgfSBlbHNlIGlmICghY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gcmVtb3ZlIHRoZSB3aGl0ZXNwYWNlLW9ubHkgbm9kZSByaWdodCBhZnRlciBhbiBvcGVuaW5nIHRhZ1xuICAgICAgICAgIHRleHQgPSAnJztcbiAgICAgICAgfSBlbHNlIGlmICh3aGl0ZXNwYWNlT3B0aW9uKSB7XG4gICAgICAgICAgaWYgKHdoaXRlc3BhY2VPcHRpb24gPT09ICdjb25kZW5zZScpIHtcbiAgICAgICAgICAgIC8vIGluIGNvbmRlbnNlIG1vZGUsIHJlbW92ZSB0aGUgd2hpdGVzcGFjZSBub2RlIGlmIGl0IGNvbnRhaW5zXG4gICAgICAgICAgICAvLyBsaW5lIGJyZWFrLCBvdGhlcndpc2UgY29uZGVuc2UgdG8gYSBzaW5nbGUgc3BhY2VcbiAgICAgICAgICAgIHRleHQgPSBsaW5lQnJlYWtSRS50ZXN0KHRleHQpID8gJycgOiAnICc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRleHQgPSAnICc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRleHQgPSBwcmVzZXJ2ZVdoaXRlc3BhY2UgPyAnICcgOiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGV4dCkge1xuICAgICAgICAgIGlmICghaW5QcmUgJiYgd2hpdGVzcGFjZU9wdGlvbiA9PT0gJ2NvbmRlbnNlJykge1xuICAgICAgICAgICAgLy8gY29uZGVuc2UgY29uc2VjdXRpdmUgd2hpdGVzcGFjZXMgaW50byBzaW5nbGUgc3BhY2VcbiAgICAgICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2Uod2hpdGVzcGFjZVJFJDEsICcgJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciByZXM7XG4gICAgICAgICAgdmFyIGNoaWxkO1xuICAgICAgICAgIGlmICghaW5WUHJlICYmIHRleHQgIT09ICcgJyAmJiAocmVzID0gcGFyc2VUZXh0KHRleHQsIGRlbGltaXRlcnMpKSkge1xuICAgICAgICAgICAgY2hpbGQgPSB7XG4gICAgICAgICAgICAgIHR5cGU6IDIsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IHJlcy5leHByZXNzaW9uLFxuICAgICAgICAgICAgICB0b2tlbnM6IHJlcy50b2tlbnMsXG4gICAgICAgICAgICAgIHRleHQ6IHRleHRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIGlmICh0ZXh0ICE9PSAnICcgfHwgIWNoaWxkcmVuLmxlbmd0aCB8fCBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGggLSAxXS50ZXh0ICE9PSAnICcpIHtcbiAgICAgICAgICAgIGNoaWxkID0ge1xuICAgICAgICAgICAgICB0eXBlOiAzLFxuICAgICAgICAgICAgICB0ZXh0OiB0ZXh0XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLm91dHB1dFNvdXJjZVJhbmdlKSB7XG4gICAgICAgICAgICAgIGNoaWxkLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgICAgICAgIGNoaWxkLmVuZCA9IGVuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbW1lbnQ6IGZ1bmN0aW9uIGNvbW1lbnQgKHRleHQsIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgLy8gYWRkaW5nIGFueXRpbmcgYXMgYSBzaWJsaW5nIHRvIHRoZSByb290IG5vZGUgaXMgZm9yYmlkZGVuXG4gICAgICAgIC8vIGNvbW1lbnRzIHNob3VsZCBzdGlsbCBiZSBhbGxvd2VkLCBidXQgaWdub3JlZFxuICAgICAgICBpZiAoY3VycmVudFBhcmVudCkge1xuICAgICAgICAgIHZhciBjaGlsZCA9IHtcbiAgICAgICAgICAgIHR5cGU6IDMsXG4gICAgICAgICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgICAgICAgaXNDb21tZW50OiB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAob3B0aW9ucy5vdXRwdXRTb3VyY2VSYW5nZSkge1xuICAgICAgICAgICAgY2hpbGQuc3RhcnQgPSBzdGFydDtcbiAgICAgICAgICAgIGNoaWxkLmVuZCA9IGVuZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3VycmVudFBhcmVudC5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByb290XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUHJlIChlbCkge1xuICAgIGlmIChnZXRBbmRSZW1vdmVBdHRyKGVsLCAndi1wcmUnKSAhPSBudWxsKSB7XG4gICAgICBlbC5wcmUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSYXdBdHRycyAoZWwpIHtcbiAgICB2YXIgbGlzdCA9IGVsLmF0dHJzTGlzdDtcbiAgICB2YXIgbGVuID0gbGlzdC5sZW5ndGg7XG4gICAgaWYgKGxlbikge1xuICAgICAgdmFyIGF0dHJzID0gZWwuYXR0cnMgPSBuZXcgQXJyYXkobGVuKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgYXR0cnNbaV0gPSB7XG4gICAgICAgICAgbmFtZTogbGlzdFtpXS5uYW1lLFxuICAgICAgICAgIHZhbHVlOiBKU09OLnN0cmluZ2lmeShsaXN0W2ldLnZhbHVlKVxuICAgICAgICB9O1xuICAgICAgICBpZiAobGlzdFtpXS5zdGFydCAhPSBudWxsKSB7XG4gICAgICAgICAgYXR0cnNbaV0uc3RhcnQgPSBsaXN0W2ldLnN0YXJ0O1xuICAgICAgICAgIGF0dHJzW2ldLmVuZCA9IGxpc3RbaV0uZW5kO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghZWwucHJlKSB7XG4gICAgICAvLyBub24gcm9vdCBub2RlIGluIHByZSBibG9ja3Mgd2l0aCBubyBhdHRyaWJ1dGVzXG4gICAgICBlbC5wbGFpbiA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0VsZW1lbnQgKFxuICAgIGVsZW1lbnQsXG4gICAgb3B0aW9uc1xuICApIHtcbiAgICBwcm9jZXNzS2V5KGVsZW1lbnQpO1xuXG4gICAgLy8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBpcyBhIHBsYWluIGVsZW1lbnQgYWZ0ZXJcbiAgICAvLyByZW1vdmluZyBzdHJ1Y3R1cmFsIGF0dHJpYnV0ZXNcbiAgICBlbGVtZW50LnBsYWluID0gKFxuICAgICAgIWVsZW1lbnQua2V5ICYmXG4gICAgICAhZWxlbWVudC5zY29wZWRTbG90cyAmJlxuICAgICAgIWVsZW1lbnQuYXR0cnNMaXN0Lmxlbmd0aFxuICAgICk7XG5cbiAgICBwcm9jZXNzUmVmKGVsZW1lbnQpO1xuICAgIHByb2Nlc3NTbG90Q29udGVudChlbGVtZW50KTtcbiAgICBwcm9jZXNzU2xvdE91dGxldChlbGVtZW50KTtcbiAgICBwcm9jZXNzQ29tcG9uZW50KGVsZW1lbnQpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJhbnNmb3Jtcy5sZW5ndGg7IGkrKykge1xuICAgICAgZWxlbWVudCA9IHRyYW5zZm9ybXNbaV0oZWxlbWVudCwgb3B0aW9ucykgfHwgZWxlbWVudDtcbiAgICB9XG4gICAgcHJvY2Vzc0F0dHJzKGVsZW1lbnQpO1xuICAgIHJldHVybiBlbGVtZW50XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzS2V5IChlbCkge1xuICAgIHZhciBleHAgPSBnZXRCaW5kaW5nQXR0cihlbCwgJ2tleScpO1xuICAgIGlmIChleHApIHtcbiAgICAgIHtcbiAgICAgICAgaWYgKGVsLnRhZyA9PT0gJ3RlbXBsYXRlJykge1xuICAgICAgICAgIHdhcm4kMihcbiAgICAgICAgICAgIFwiPHRlbXBsYXRlPiBjYW5ub3QgYmUga2V5ZWQuIFBsYWNlIHRoZSBrZXkgb24gcmVhbCBlbGVtZW50cyBpbnN0ZWFkLlwiLFxuICAgICAgICAgICAgZ2V0UmF3QmluZGluZ0F0dHIoZWwsICdrZXknKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsLmZvcikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGVsLml0ZXJhdG9yMiB8fCBlbC5pdGVyYXRvcjE7XG4gICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3IgJiYgaXRlcmF0b3IgPT09IGV4cCAmJiBwYXJlbnQgJiYgcGFyZW50LnRhZyA9PT0gJ3RyYW5zaXRpb24tZ3JvdXAnKSB7XG4gICAgICAgICAgICB3YXJuJDIoXG4gICAgICAgICAgICAgIFwiRG8gbm90IHVzZSB2LWZvciBpbmRleCBhcyBrZXkgb24gPHRyYW5zaXRpb24tZ3JvdXA+IGNoaWxkcmVuLCBcIiArXG4gICAgICAgICAgICAgIFwidGhpcyBpcyB0aGUgc2FtZSBhcyBub3QgdXNpbmcga2V5cy5cIixcbiAgICAgICAgICAgICAgZ2V0UmF3QmluZGluZ0F0dHIoZWwsICdrZXknKSxcbiAgICAgICAgICAgICAgdHJ1ZSAvKiB0aXAgKi9cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbC5rZXkgPSBleHA7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1JlZiAoZWwpIHtcbiAgICB2YXIgcmVmID0gZ2V0QmluZGluZ0F0dHIoZWwsICdyZWYnKTtcbiAgICBpZiAocmVmKSB7XG4gICAgICBlbC5yZWYgPSByZWY7XG4gICAgICBlbC5yZWZJbkZvciA9IGNoZWNrSW5Gb3IoZWwpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGb3IgKGVsKSB7XG4gICAgdmFyIGV4cDtcbiAgICBpZiAoKGV4cCA9IGdldEFuZFJlbW92ZUF0dHIoZWwsICd2LWZvcicpKSkge1xuICAgICAgdmFyIHJlcyA9IHBhcnNlRm9yKGV4cCk7XG4gICAgICBpZiAocmVzKSB7XG4gICAgICAgIGV4dGVuZChlbCwgcmVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4kMihcbiAgICAgICAgICAoXCJJbnZhbGlkIHYtZm9yIGV4cHJlc3Npb246IFwiICsgZXhwKSxcbiAgICAgICAgICBlbC5yYXdBdHRyc01hcFsndi1mb3InXVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cblxuICBmdW5jdGlvbiBwYXJzZUZvciAoZXhwKSB7XG4gICAgdmFyIGluTWF0Y2ggPSBleHAubWF0Y2goZm9yQWxpYXNSRSk7XG4gICAgaWYgKCFpbk1hdGNoKSB7IHJldHVybiB9XG4gICAgdmFyIHJlcyA9IHt9O1xuICAgIHJlcy5mb3IgPSBpbk1hdGNoWzJdLnRyaW0oKTtcbiAgICB2YXIgYWxpYXMgPSBpbk1hdGNoWzFdLnRyaW0oKS5yZXBsYWNlKHN0cmlwUGFyZW5zUkUsICcnKTtcbiAgICB2YXIgaXRlcmF0b3JNYXRjaCA9IGFsaWFzLm1hdGNoKGZvckl0ZXJhdG9yUkUpO1xuICAgIGlmIChpdGVyYXRvck1hdGNoKSB7XG4gICAgICByZXMuYWxpYXMgPSBhbGlhcy5yZXBsYWNlKGZvckl0ZXJhdG9yUkUsICcnKS50cmltKCk7XG4gICAgICByZXMuaXRlcmF0b3IxID0gaXRlcmF0b3JNYXRjaFsxXS50cmltKCk7XG4gICAgICBpZiAoaXRlcmF0b3JNYXRjaFsyXSkge1xuICAgICAgICByZXMuaXRlcmF0b3IyID0gaXRlcmF0b3JNYXRjaFsyXS50cmltKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy5hbGlhcyA9IGFsaWFzO1xuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzSWYgKGVsKSB7XG4gICAgdmFyIGV4cCA9IGdldEFuZFJlbW92ZUF0dHIoZWwsICd2LWlmJyk7XG4gICAgaWYgKGV4cCkge1xuICAgICAgZWwuaWYgPSBleHA7XG4gICAgICBhZGRJZkNvbmRpdGlvbihlbCwge1xuICAgICAgICBleHA6IGV4cCxcbiAgICAgICAgYmxvY2s6IGVsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGdldEFuZFJlbW92ZUF0dHIoZWwsICd2LWVsc2UnKSAhPSBudWxsKSB7XG4gICAgICAgIGVsLmVsc2UgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdmFyIGVsc2VpZiA9IGdldEFuZFJlbW92ZUF0dHIoZWwsICd2LWVsc2UtaWYnKTtcbiAgICAgIGlmIChlbHNlaWYpIHtcbiAgICAgICAgZWwuZWxzZWlmID0gZWxzZWlmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NJZkNvbmRpdGlvbnMgKGVsLCBwYXJlbnQpIHtcbiAgICB2YXIgcHJldiA9IGZpbmRQcmV2RWxlbWVudChwYXJlbnQuY2hpbGRyZW4pO1xuICAgIGlmIChwcmV2ICYmIHByZXYuaWYpIHtcbiAgICAgIGFkZElmQ29uZGl0aW9uKHByZXYsIHtcbiAgICAgICAgZXhwOiBlbC5lbHNlaWYsXG4gICAgICAgIGJsb2NrOiBlbFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm4kMihcbiAgICAgICAgXCJ2LVwiICsgKGVsLmVsc2VpZiA/ICgnZWxzZS1pZj1cIicgKyBlbC5lbHNlaWYgKyAnXCInKSA6ICdlbHNlJykgKyBcIiBcIiArXG4gICAgICAgIFwidXNlZCBvbiBlbGVtZW50IDxcIiArIChlbC50YWcpICsgXCI+IHdpdGhvdXQgY29ycmVzcG9uZGluZyB2LWlmLlwiLFxuICAgICAgICBlbC5yYXdBdHRyc01hcFtlbC5lbHNlaWYgPyAndi1lbHNlLWlmJyA6ICd2LWVsc2UnXVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kUHJldkVsZW1lbnQgKGNoaWxkcmVuKSB7XG4gICAgdmFyIGkgPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgaWYgKGNoaWxkcmVuW2ldLnR5cGUgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuW2ldXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY2hpbGRyZW5baV0udGV4dCAhPT0gJyAnKSB7XG4gICAgICAgICAgd2FybiQyKFxuICAgICAgICAgICAgXCJ0ZXh0IFxcXCJcIiArIChjaGlsZHJlbltpXS50ZXh0LnRyaW0oKSkgKyBcIlxcXCIgYmV0d2VlbiB2LWlmIGFuZCB2LWVsc2UoLWlmKSBcIiArXG4gICAgICAgICAgICBcIndpbGwgYmUgaWdub3JlZC5cIixcbiAgICAgICAgICAgIGNoaWxkcmVuW2ldXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjaGlsZHJlbi5wb3AoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRJZkNvbmRpdGlvbiAoZWwsIGNvbmRpdGlvbikge1xuICAgIGlmICghZWwuaWZDb25kaXRpb25zKSB7XG4gICAgICBlbC5pZkNvbmRpdGlvbnMgPSBbXTtcbiAgICB9XG4gICAgZWwuaWZDb25kaXRpb25zLnB1c2goY29uZGl0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NPbmNlIChlbCkge1xuICAgIHZhciBvbmNlJCQxID0gZ2V0QW5kUmVtb3ZlQXR0cihlbCwgJ3Ytb25jZScpO1xuICAgIGlmIChvbmNlJCQxICE9IG51bGwpIHtcbiAgICAgIGVsLm9uY2UgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGhhbmRsZSBjb250ZW50IGJlaW5nIHBhc3NlZCB0byBhIGNvbXBvbmVudCBhcyBzbG90LFxuICAvLyBlLmcuIDx0ZW1wbGF0ZSBzbG90PVwieHh4XCI+LCA8ZGl2IHNsb3Qtc2NvcGU9XCJ4eHhcIj5cbiAgZnVuY3Rpb24gcHJvY2Vzc1Nsb3RDb250ZW50IChlbCkge1xuICAgIHZhciBzbG90U2NvcGU7XG4gICAgaWYgKGVsLnRhZyA9PT0gJ3RlbXBsYXRlJykge1xuICAgICAgc2xvdFNjb3BlID0gZ2V0QW5kUmVtb3ZlQXR0cihlbCwgJ3Njb3BlJyk7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmIChzbG90U2NvcGUpIHtcbiAgICAgICAgd2FybiQyKFxuICAgICAgICAgIFwidGhlIFxcXCJzY29wZVxcXCIgYXR0cmlidXRlIGZvciBzY29wZWQgc2xvdHMgaGF2ZSBiZWVuIGRlcHJlY2F0ZWQgYW5kIFwiICtcbiAgICAgICAgICBcInJlcGxhY2VkIGJ5IFxcXCJzbG90LXNjb3BlXFxcIiBzaW5jZSAyLjUuIFRoZSBuZXcgXFxcInNsb3Qtc2NvcGVcXFwiIGF0dHJpYnV0ZSBcIiArXG4gICAgICAgICAgXCJjYW4gYWxzbyBiZSB1c2VkIG9uIHBsYWluIGVsZW1lbnRzIGluIGFkZGl0aW9uIHRvIDx0ZW1wbGF0ZT4gdG8gXCIgK1xuICAgICAgICAgIFwiZGVub3RlIHNjb3BlZCBzbG90cy5cIixcbiAgICAgICAgICBlbC5yYXdBdHRyc01hcFsnc2NvcGUnXSxcbiAgICAgICAgICB0cnVlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBlbC5zbG90U2NvcGUgPSBzbG90U2NvcGUgfHwgZ2V0QW5kUmVtb3ZlQXR0cihlbCwgJ3Nsb3Qtc2NvcGUnKTtcbiAgICB9IGVsc2UgaWYgKChzbG90U2NvcGUgPSBnZXRBbmRSZW1vdmVBdHRyKGVsLCAnc2xvdC1zY29wZScpKSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoZWwuYXR0cnNNYXBbJ3YtZm9yJ10pIHtcbiAgICAgICAgd2FybiQyKFxuICAgICAgICAgIFwiQW1iaWd1b3VzIGNvbWJpbmVkIHVzYWdlIG9mIHNsb3Qtc2NvcGUgYW5kIHYtZm9yIG9uIDxcIiArIChlbC50YWcpICsgXCI+IFwiICtcbiAgICAgICAgICBcIih2LWZvciB0YWtlcyBoaWdoZXIgcHJpb3JpdHkpLiBVc2UgYSB3cmFwcGVyIDx0ZW1wbGF0ZT4gZm9yIHRoZSBcIiArXG4gICAgICAgICAgXCJzY29wZWQgc2xvdCB0byBtYWtlIGl0IGNsZWFyZXIuXCIsXG4gICAgICAgICAgZWwucmF3QXR0cnNNYXBbJ3Nsb3Qtc2NvcGUnXSxcbiAgICAgICAgICB0cnVlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBlbC5zbG90U2NvcGUgPSBzbG90U2NvcGU7XG4gICAgfVxuXG4gICAgLy8gc2xvdD1cInh4eFwiXG4gICAgdmFyIHNsb3RUYXJnZXQgPSBnZXRCaW5kaW5nQXR0cihlbCwgJ3Nsb3QnKTtcbiAgICBpZiAoc2xvdFRhcmdldCkge1xuICAgICAgZWwuc2xvdFRhcmdldCA9IHNsb3RUYXJnZXQgPT09ICdcIlwiJyA/ICdcImRlZmF1bHRcIicgOiBzbG90VGFyZ2V0O1xuICAgICAgZWwuc2xvdFRhcmdldER5bmFtaWMgPSAhIShlbC5hdHRyc01hcFsnOnNsb3QnXSB8fCBlbC5hdHRyc01hcFsndi1iaW5kOnNsb3QnXSk7XG4gICAgICAvLyBwcmVzZXJ2ZSBzbG90IGFzIGFuIGF0dHJpYnV0ZSBmb3IgbmF0aXZlIHNoYWRvdyBET00gY29tcGF0XG4gICAgICAvLyBvbmx5IGZvciBub24tc2NvcGVkIHNsb3RzLlxuICAgICAgaWYgKGVsLnRhZyAhPT0gJ3RlbXBsYXRlJyAmJiAhZWwuc2xvdFNjb3BlKSB7XG4gICAgICAgIGFkZEF0dHIoZWwsICdzbG90Jywgc2xvdFRhcmdldCwgZ2V0UmF3QmluZGluZ0F0dHIoZWwsICdzbG90JykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDIuNiB2LXNsb3Qgc3ludGF4XG4gICAge1xuICAgICAgaWYgKGVsLnRhZyA9PT0gJ3RlbXBsYXRlJykge1xuICAgICAgICAvLyB2LXNsb3Qgb24gPHRlbXBsYXRlPlxuICAgICAgICB2YXIgc2xvdEJpbmRpbmcgPSBnZXRBbmRSZW1vdmVBdHRyQnlSZWdleChlbCwgc2xvdFJFKTtcbiAgICAgICAgaWYgKHNsb3RCaW5kaW5nKSB7XG4gICAgICAgICAge1xuICAgICAgICAgICAgaWYgKGVsLnNsb3RUYXJnZXQgfHwgZWwuc2xvdFNjb3BlKSB7XG4gICAgICAgICAgICAgIHdhcm4kMihcbiAgICAgICAgICAgICAgICBcIlVuZXhwZWN0ZWQgbWl4ZWQgdXNhZ2Ugb2YgZGlmZmVyZW50IHNsb3Qgc3ludGF4ZXMuXCIsXG4gICAgICAgICAgICAgICAgZWxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbC5wYXJlbnQgJiYgIW1heWJlQ29tcG9uZW50KGVsLnBhcmVudCkpIHtcbiAgICAgICAgICAgICAgd2FybiQyKFxuICAgICAgICAgICAgICAgIFwiPHRlbXBsYXRlIHYtc2xvdD4gY2FuIG9ubHkgYXBwZWFyIGF0IHRoZSByb290IGxldmVsIGluc2lkZSBcIiArXG4gICAgICAgICAgICAgICAgXCJ0aGUgcmVjZWl2aW5nIGNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgIGVsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciByZWYgPSBnZXRTbG90TmFtZShzbG90QmluZGluZyk7XG4gICAgICAgICAgdmFyIG5hbWUgPSByZWYubmFtZTtcbiAgICAgICAgICB2YXIgZHluYW1pYyA9IHJlZi5keW5hbWljO1xuICAgICAgICAgIGVsLnNsb3RUYXJnZXQgPSBuYW1lO1xuICAgICAgICAgIGVsLnNsb3RUYXJnZXREeW5hbWljID0gZHluYW1pYztcbiAgICAgICAgICBlbC5zbG90U2NvcGUgPSBzbG90QmluZGluZy52YWx1ZSB8fCBlbXB0eVNsb3RTY29wZVRva2VuOyAvLyBmb3JjZSBpdCBpbnRvIGEgc2NvcGVkIHNsb3QgZm9yIHBlcmZcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdi1zbG90IG9uIGNvbXBvbmVudCwgZGVub3RlcyBkZWZhdWx0IHNsb3RcbiAgICAgICAgdmFyIHNsb3RCaW5kaW5nJDEgPSBnZXRBbmRSZW1vdmVBdHRyQnlSZWdleChlbCwgc2xvdFJFKTtcbiAgICAgICAgaWYgKHNsb3RCaW5kaW5nJDEpIHtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZiAoIW1heWJlQ29tcG9uZW50KGVsKSkge1xuICAgICAgICAgICAgICB3YXJuJDIoXG4gICAgICAgICAgICAgICAgXCJ2LXNsb3QgY2FuIG9ubHkgYmUgdXNlZCBvbiBjb21wb25lbnRzIG9yIDx0ZW1wbGF0ZT4uXCIsXG4gICAgICAgICAgICAgICAgc2xvdEJpbmRpbmckMVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsLnNsb3RTY29wZSB8fCBlbC5zbG90VGFyZ2V0KSB7XG4gICAgICAgICAgICAgIHdhcm4kMihcbiAgICAgICAgICAgICAgICBcIlVuZXhwZWN0ZWQgbWl4ZWQgdXNhZ2Ugb2YgZGlmZmVyZW50IHNsb3Qgc3ludGF4ZXMuXCIsXG4gICAgICAgICAgICAgICAgZWxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbC5zY29wZWRTbG90cykge1xuICAgICAgICAgICAgICB3YXJuJDIoXG4gICAgICAgICAgICAgICAgXCJUbyBhdm9pZCBzY29wZSBhbWJpZ3VpdHksIHRoZSBkZWZhdWx0IHNsb3Qgc2hvdWxkIGFsc28gdXNlIFwiICtcbiAgICAgICAgICAgICAgICBcIjx0ZW1wbGF0ZT4gc3ludGF4IHdoZW4gdGhlcmUgYXJlIG90aGVyIG5hbWVkIHNsb3RzLlwiLFxuICAgICAgICAgICAgICAgIHNsb3RCaW5kaW5nJDFcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gYWRkIHRoZSBjb21wb25lbnQncyBjaGlsZHJlbiB0byBpdHMgZGVmYXVsdCBzbG90XG4gICAgICAgICAgdmFyIHNsb3RzID0gZWwuc2NvcGVkU2xvdHMgfHwgKGVsLnNjb3BlZFNsb3RzID0ge30pO1xuICAgICAgICAgIHZhciByZWYkMSA9IGdldFNsb3ROYW1lKHNsb3RCaW5kaW5nJDEpO1xuICAgICAgICAgIHZhciBuYW1lJDEgPSByZWYkMS5uYW1lO1xuICAgICAgICAgIHZhciBkeW5hbWljJDEgPSByZWYkMS5keW5hbWljO1xuICAgICAgICAgIHZhciBzbG90Q29udGFpbmVyID0gc2xvdHNbbmFtZSQxXSA9IGNyZWF0ZUFTVEVsZW1lbnQoJ3RlbXBsYXRlJywgW10sIGVsKTtcbiAgICAgICAgICBzbG90Q29udGFpbmVyLnNsb3RUYXJnZXQgPSBuYW1lJDE7XG4gICAgICAgICAgc2xvdENvbnRhaW5lci5zbG90VGFyZ2V0RHluYW1pYyA9IGR5bmFtaWMkMTtcbiAgICAgICAgICBzbG90Q29udGFpbmVyLmNoaWxkcmVuID0gZWwuY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICBpZiAoIWMuc2xvdFNjb3BlKSB7XG4gICAgICAgICAgICAgIGMucGFyZW50ID0gc2xvdENvbnRhaW5lcjtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzbG90Q29udGFpbmVyLnNsb3RTY29wZSA9IHNsb3RCaW5kaW5nJDEudmFsdWUgfHwgZW1wdHlTbG90U2NvcGVUb2tlbjtcbiAgICAgICAgICAvLyByZW1vdmUgY2hpbGRyZW4gYXMgdGhleSBhcmUgcmV0dXJuZWQgZnJvbSBzY29wZWRTbG90cyBub3dcbiAgICAgICAgICBlbC5jaGlsZHJlbiA9IFtdO1xuICAgICAgICAgIC8vIG1hcmsgZWwgbm9uLXBsYWluIHNvIGRhdGEgZ2V0cyBnZW5lcmF0ZWRcbiAgICAgICAgICBlbC5wbGFpbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2xvdE5hbWUgKGJpbmRpbmcpIHtcbiAgICB2YXIgbmFtZSA9IGJpbmRpbmcubmFtZS5yZXBsYWNlKHNsb3RSRSwgJycpO1xuICAgIGlmICghbmFtZSkge1xuICAgICAgaWYgKGJpbmRpbmcubmFtZVswXSAhPT0gJyMnKSB7XG4gICAgICAgIG5hbWUgPSAnZGVmYXVsdCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuJDIoXG4gICAgICAgICAgXCJ2LXNsb3Qgc2hvcnRoYW5kIHN5bnRheCByZXF1aXJlcyBhIHNsb3QgbmFtZS5cIixcbiAgICAgICAgICBiaW5kaW5nXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkeW5hbWljQXJnUkUudGVzdChuYW1lKVxuICAgICAgLy8gZHluYW1pYyBbbmFtZV1cbiAgICAgID8geyBuYW1lOiBuYW1lLnNsaWNlKDEsIC0xKSwgZHluYW1pYzogdHJ1ZSB9XG4gICAgICAvLyBzdGF0aWMgbmFtZVxuICAgICAgOiB7IG5hbWU6IChcIlxcXCJcIiArIG5hbWUgKyBcIlxcXCJcIiksIGR5bmFtaWM6IGZhbHNlIH1cbiAgfVxuXG4gIC8vIGhhbmRsZSA8c2xvdC8+IG91dGxldHNcbiAgZnVuY3Rpb24gcHJvY2Vzc1Nsb3RPdXRsZXQgKGVsKSB7XG4gICAgaWYgKGVsLnRhZyA9PT0gJ3Nsb3QnKSB7XG4gICAgICBlbC5zbG90TmFtZSA9IGdldEJpbmRpbmdBdHRyKGVsLCAnbmFtZScpO1xuICAgICAgaWYgKGVsLmtleSkge1xuICAgICAgICB3YXJuJDIoXG4gICAgICAgICAgXCJga2V5YCBkb2VzIG5vdCB3b3JrIG9uIDxzbG90PiBiZWNhdXNlIHNsb3RzIGFyZSBhYnN0cmFjdCBvdXRsZXRzIFwiICtcbiAgICAgICAgICBcImFuZCBjYW4gcG9zc2libHkgZXhwYW5kIGludG8gbXVsdGlwbGUgZWxlbWVudHMuIFwiICtcbiAgICAgICAgICBcIlVzZSB0aGUga2V5IG9uIGEgd3JhcHBpbmcgZWxlbWVudCBpbnN0ZWFkLlwiLFxuICAgICAgICAgIGdldFJhd0JpbmRpbmdBdHRyKGVsLCAna2V5JylcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ29tcG9uZW50IChlbCkge1xuICAgIHZhciBiaW5kaW5nO1xuICAgIGlmICgoYmluZGluZyA9IGdldEJpbmRpbmdBdHRyKGVsLCAnaXMnKSkpIHtcbiAgICAgIGVsLmNvbXBvbmVudCA9IGJpbmRpbmc7XG4gICAgfVxuICAgIGlmIChnZXRBbmRSZW1vdmVBdHRyKGVsLCAnaW5saW5lLXRlbXBsYXRlJykgIT0gbnVsbCkge1xuICAgICAgZWwuaW5saW5lVGVtcGxhdGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NBdHRycyAoZWwpIHtcbiAgICB2YXIgbGlzdCA9IGVsLmF0dHJzTGlzdDtcbiAgICB2YXIgaSwgbCwgbmFtZSwgcmF3TmFtZSwgdmFsdWUsIG1vZGlmaWVycywgc3luY0dlbiwgaXNEeW5hbWljO1xuICAgIGZvciAoaSA9IDAsIGwgPSBsaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbmFtZSA9IHJhd05hbWUgPSBsaXN0W2ldLm5hbWU7XG4gICAgICB2YWx1ZSA9IGxpc3RbaV0udmFsdWU7XG4gICAgICBpZiAoZGlyUkUudGVzdChuYW1lKSkge1xuICAgICAgICAvLyBtYXJrIGVsZW1lbnQgYXMgZHluYW1pY1xuICAgICAgICBlbC5oYXNCaW5kaW5ncyA9IHRydWU7XG4gICAgICAgIC8vIG1vZGlmaWVyc1xuICAgICAgICBtb2RpZmllcnMgPSBwYXJzZU1vZGlmaWVycyhuYW1lLnJlcGxhY2UoZGlyUkUsICcnKSk7XG4gICAgICAgIC8vIHN1cHBvcnQgLmZvbyBzaG9ydGhhbmQgc3ludGF4IGZvciB0aGUgLnByb3AgbW9kaWZpZXJcbiAgICAgICAgaWYgKG1vZGlmaWVycykge1xuICAgICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UobW9kaWZpZXJSRSwgJycpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiaW5kUkUudGVzdChuYW1lKSkgeyAvLyB2LWJpbmRcbiAgICAgICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKGJpbmRSRSwgJycpO1xuICAgICAgICAgIHZhbHVlID0gcGFyc2VGaWx0ZXJzKHZhbHVlKTtcbiAgICAgICAgICBpc0R5bmFtaWMgPSBkeW5hbWljQXJnUkUudGVzdChuYW1lKTtcbiAgICAgICAgICBpZiAoaXNEeW5hbWljKSB7XG4gICAgICAgICAgICBuYW1lID0gbmFtZS5zbGljZSgxLCAtMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHZhbHVlLnRyaW0oKS5sZW5ndGggPT09IDBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHdhcm4kMihcbiAgICAgICAgICAgICAgKFwiVGhlIHZhbHVlIGZvciBhIHYtYmluZCBleHByZXNzaW9uIGNhbm5vdCBiZSBlbXB0eS4gRm91bmQgaW4gXFxcInYtYmluZDpcIiArIG5hbWUgKyBcIlxcXCJcIilcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChtb2RpZmllcnMpIHtcbiAgICAgICAgICAgIGlmIChtb2RpZmllcnMucHJvcCAmJiAhaXNEeW5hbWljKSB7XG4gICAgICAgICAgICAgIG5hbWUgPSBjYW1lbGl6ZShuYW1lKTtcbiAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdpbm5lckh0bWwnKSB7IG5hbWUgPSAnaW5uZXJIVE1MJzsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1vZGlmaWVycy5jYW1lbCAmJiAhaXNEeW5hbWljKSB7XG4gICAgICAgICAgICAgIG5hbWUgPSBjYW1lbGl6ZShuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtb2RpZmllcnMuc3luYykge1xuICAgICAgICAgICAgICBzeW5jR2VuID0gZ2VuQXNzaWdubWVudENvZGUodmFsdWUsIFwiJGV2ZW50XCIpO1xuICAgICAgICAgICAgICBpZiAoIWlzRHluYW1pYykge1xuICAgICAgICAgICAgICAgIGFkZEhhbmRsZXIoXG4gICAgICAgICAgICAgICAgICBlbCxcbiAgICAgICAgICAgICAgICAgIChcInVwZGF0ZTpcIiArIChjYW1lbGl6ZShuYW1lKSkpLFxuICAgICAgICAgICAgICAgICAgc3luY0dlbixcbiAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIHdhcm4kMixcbiAgICAgICAgICAgICAgICAgIGxpc3RbaV1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChoeXBoZW5hdGUobmFtZSkgIT09IGNhbWVsaXplKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICBhZGRIYW5kbGVyKFxuICAgICAgICAgICAgICAgICAgICBlbCxcbiAgICAgICAgICAgICAgICAgICAgKFwidXBkYXRlOlwiICsgKGh5cGhlbmF0ZShuYW1lKSkpLFxuICAgICAgICAgICAgICAgICAgICBzeW5jR2VuLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgd2FybiQyLFxuICAgICAgICAgICAgICAgICAgICBsaXN0W2ldXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGVyIHcvIGR5bmFtaWMgZXZlbnQgbmFtZVxuICAgICAgICAgICAgICAgIGFkZEhhbmRsZXIoXG4gICAgICAgICAgICAgICAgICBlbCxcbiAgICAgICAgICAgICAgICAgIChcIlxcXCJ1cGRhdGU6XFxcIisoXCIgKyBuYW1lICsgXCIpXCIpLFxuICAgICAgICAgICAgICAgICAgc3luY0dlbixcbiAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIHdhcm4kMixcbiAgICAgICAgICAgICAgICAgIGxpc3RbaV0sXG4gICAgICAgICAgICAgICAgICB0cnVlIC8vIGR5bmFtaWNcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgobW9kaWZpZXJzICYmIG1vZGlmaWVycy5wcm9wKSB8fCAoXG4gICAgICAgICAgICAhZWwuY29tcG9uZW50ICYmIHBsYXRmb3JtTXVzdFVzZVByb3AoZWwudGFnLCBlbC5hdHRyc01hcC50eXBlLCBuYW1lKVxuICAgICAgICAgICkpIHtcbiAgICAgICAgICAgIGFkZFByb3AoZWwsIG5hbWUsIHZhbHVlLCBsaXN0W2ldLCBpc0R5bmFtaWMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZGRBdHRyKGVsLCBuYW1lLCB2YWx1ZSwgbGlzdFtpXSwgaXNEeW5hbWljKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAob25SRS50ZXN0KG5hbWUpKSB7IC8vIHYtb25cbiAgICAgICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKG9uUkUsICcnKTtcbiAgICAgICAgICBpc0R5bmFtaWMgPSBkeW5hbWljQXJnUkUudGVzdChuYW1lKTtcbiAgICAgICAgICBpZiAoaXNEeW5hbWljKSB7XG4gICAgICAgICAgICBuYW1lID0gbmFtZS5zbGljZSgxLCAtMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFkZEhhbmRsZXIoZWwsIG5hbWUsIHZhbHVlLCBtb2RpZmllcnMsIGZhbHNlLCB3YXJuJDIsIGxpc3RbaV0sIGlzRHluYW1pYyk7XG4gICAgICAgIH0gZWxzZSB7IC8vIG5vcm1hbCBkaXJlY3RpdmVzXG4gICAgICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZShkaXJSRSwgJycpO1xuICAgICAgICAgIC8vIHBhcnNlIGFyZ1xuICAgICAgICAgIHZhciBhcmdNYXRjaCA9IG5hbWUubWF0Y2goYXJnUkUpO1xuICAgICAgICAgIHZhciBhcmcgPSBhcmdNYXRjaCAmJiBhcmdNYXRjaFsxXTtcbiAgICAgICAgICBpc0R5bmFtaWMgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoYXJnKSB7XG4gICAgICAgICAgICBuYW1lID0gbmFtZS5zbGljZSgwLCAtKGFyZy5sZW5ndGggKyAxKSk7XG4gICAgICAgICAgICBpZiAoZHluYW1pY0FyZ1JFLnRlc3QoYXJnKSkge1xuICAgICAgICAgICAgICBhcmcgPSBhcmcuc2xpY2UoMSwgLTEpO1xuICAgICAgICAgICAgICBpc0R5bmFtaWMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBhZGREaXJlY3RpdmUoZWwsIG5hbWUsIHJhd05hbWUsIHZhbHVlLCBhcmcsIGlzRHluYW1pYywgbW9kaWZpZXJzLCBsaXN0W2ldKTtcbiAgICAgICAgICBpZiAobmFtZSA9PT0gJ21vZGVsJykge1xuICAgICAgICAgICAgY2hlY2tGb3JBbGlhc01vZGVsKGVsLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBsaXRlcmFsIGF0dHJpYnV0ZVxuICAgICAgICB7XG4gICAgICAgICAgdmFyIHJlcyA9IHBhcnNlVGV4dCh2YWx1ZSwgZGVsaW1pdGVycyk7XG4gICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgd2FybiQyKFxuICAgICAgICAgICAgICBuYW1lICsgXCI9XFxcIlwiICsgdmFsdWUgKyBcIlxcXCI6IFwiICtcbiAgICAgICAgICAgICAgJ0ludGVycG9sYXRpb24gaW5zaWRlIGF0dHJpYnV0ZXMgaGFzIGJlZW4gcmVtb3ZlZC4gJyArXG4gICAgICAgICAgICAgICdVc2Ugdi1iaW5kIG9yIHRoZSBjb2xvbiBzaG9ydGhhbmQgaW5zdGVhZC4gRm9yIGV4YW1wbGUsICcgK1xuICAgICAgICAgICAgICAnaW5zdGVhZCBvZiA8ZGl2IGlkPVwie3sgdmFsIH19XCI+LCB1c2UgPGRpdiA6aWQ9XCJ2YWxcIj4uJyxcbiAgICAgICAgICAgICAgbGlzdFtpXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYWRkQXR0cihlbCwgbmFtZSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpLCBsaXN0W2ldKTtcbiAgICAgICAgLy8gIzY4ODcgZmlyZWZveCBkb2Vzbid0IHVwZGF0ZSBtdXRlZCBzdGF0ZSBpZiBzZXQgdmlhIGF0dHJpYnV0ZVxuICAgICAgICAvLyBldmVuIGltbWVkaWF0ZWx5IGFmdGVyIGVsZW1lbnQgY3JlYXRpb25cbiAgICAgICAgaWYgKCFlbC5jb21wb25lbnQgJiZcbiAgICAgICAgICAgIG5hbWUgPT09ICdtdXRlZCcgJiZcbiAgICAgICAgICAgIHBsYXRmb3JtTXVzdFVzZVByb3AoZWwudGFnLCBlbC5hdHRyc01hcC50eXBlLCBuYW1lKSkge1xuICAgICAgICAgIGFkZFByb3AoZWwsIG5hbWUsICd0cnVlJywgbGlzdFtpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0luRm9yIChlbCkge1xuICAgIHZhciBwYXJlbnQgPSBlbDtcbiAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICBpZiAocGFyZW50LmZvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlTW9kaWZpZXJzIChuYW1lKSB7XG4gICAgdmFyIG1hdGNoID0gbmFtZS5tYXRjaChtb2RpZmllclJFKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIHZhciByZXQgPSB7fTtcbiAgICAgIG1hdGNoLmZvckVhY2goZnVuY3Rpb24gKG0pIHsgcmV0W20uc2xpY2UoMSldID0gdHJ1ZTsgfSk7XG4gICAgICByZXR1cm4gcmV0XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbWFrZUF0dHJzTWFwIChhdHRycykge1xuICAgIHZhciBtYXAgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGF0dHJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICBtYXBbYXR0cnNbaV0ubmFtZV0gJiYgIWlzSUUgJiYgIWlzRWRnZVxuICAgICAgKSB7XG4gICAgICAgIHdhcm4kMignZHVwbGljYXRlIGF0dHJpYnV0ZTogJyArIGF0dHJzW2ldLm5hbWUsIGF0dHJzW2ldKTtcbiAgICAgIH1cbiAgICAgIG1hcFthdHRyc1tpXS5uYW1lXSA9IGF0dHJzW2ldLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gbWFwXG4gIH1cblxuICAvLyBmb3Igc2NyaXB0IChlLmcuIHR5cGU9XCJ4L3RlbXBsYXRlXCIpIG9yIHN0eWxlLCBkbyBub3QgZGVjb2RlIGNvbnRlbnRcbiAgZnVuY3Rpb24gaXNUZXh0VGFnIChlbCkge1xuICAgIHJldHVybiBlbC50YWcgPT09ICdzY3JpcHQnIHx8IGVsLnRhZyA9PT0gJ3N0eWxlJ1xuICB9XG5cbiAgZnVuY3Rpb24gaXNGb3JiaWRkZW5UYWcgKGVsKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGVsLnRhZyA9PT0gJ3N0eWxlJyB8fFxuICAgICAgKGVsLnRhZyA9PT0gJ3NjcmlwdCcgJiYgKFxuICAgICAgICAhZWwuYXR0cnNNYXAudHlwZSB8fFxuICAgICAgICBlbC5hdHRyc01hcC50eXBlID09PSAndGV4dC9qYXZhc2NyaXB0J1xuICAgICAgKSlcbiAgICApXG4gIH1cblxuICB2YXIgaWVOU0J1ZyA9IC9eeG1sbnM6TlNcXGQrLztcbiAgdmFyIGllTlNQcmVmaXggPSAvXk5TXFxkKzovO1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGZ1bmN0aW9uIGd1YXJkSUVTVkdCdWcgKGF0dHJzKSB7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXR0cnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBhdHRyID0gYXR0cnNbaV07XG4gICAgICBpZiAoIWllTlNCdWcudGVzdChhdHRyLm5hbWUpKSB7XG4gICAgICAgIGF0dHIubmFtZSA9IGF0dHIubmFtZS5yZXBsYWNlKGllTlNQcmVmaXgsICcnKTtcbiAgICAgICAgcmVzLnB1c2goYXR0cik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrRm9yQWxpYXNNb2RlbCAoZWwsIHZhbHVlKSB7XG4gICAgdmFyIF9lbCA9IGVsO1xuICAgIHdoaWxlIChfZWwpIHtcbiAgICAgIGlmIChfZWwuZm9yICYmIF9lbC5hbGlhcyA9PT0gdmFsdWUpIHtcbiAgICAgICAgd2FybiQyKFxuICAgICAgICAgIFwiPFwiICsgKGVsLnRhZykgKyBcIiB2LW1vZGVsPVxcXCJcIiArIHZhbHVlICsgXCJcXFwiPjogXCIgK1xuICAgICAgICAgIFwiWW91IGFyZSBiaW5kaW5nIHYtbW9kZWwgZGlyZWN0bHkgdG8gYSB2LWZvciBpdGVyYXRpb24gYWxpYXMuIFwiICtcbiAgICAgICAgICBcIlRoaXMgd2lsbCBub3QgYmUgYWJsZSB0byBtb2RpZnkgdGhlIHYtZm9yIHNvdXJjZSBhcnJheSBiZWNhdXNlIFwiICtcbiAgICAgICAgICBcIndyaXRpbmcgdG8gdGhlIGFsaWFzIGlzIGxpa2UgbW9kaWZ5aW5nIGEgZnVuY3Rpb24gbG9jYWwgdmFyaWFibGUuIFwiICtcbiAgICAgICAgICBcIkNvbnNpZGVyIHVzaW5nIGFuIGFycmF5IG9mIG9iamVjdHMgYW5kIHVzZSB2LW1vZGVsIG9uIGFuIG9iamVjdCBwcm9wZXJ0eSBpbnN0ZWFkLlwiLFxuICAgICAgICAgIGVsLnJhd0F0dHJzTWFwWyd2LW1vZGVsJ11cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIF9lbCA9IF9lbC5wYXJlbnQ7XG4gICAgfVxuICB9XG5cbiAgLyogICovXG5cbiAgZnVuY3Rpb24gcHJlVHJhbnNmb3JtTm9kZSAoZWwsIG9wdGlvbnMpIHtcbiAgICBpZiAoZWwudGFnID09PSAnaW5wdXQnKSB7XG4gICAgICB2YXIgbWFwID0gZWwuYXR0cnNNYXA7XG4gICAgICBpZiAoIW1hcFsndi1tb2RlbCddKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZUJpbmRpbmc7XG4gICAgICBpZiAobWFwWyc6dHlwZSddIHx8IG1hcFsndi1iaW5kOnR5cGUnXSkge1xuICAgICAgICB0eXBlQmluZGluZyA9IGdldEJpbmRpbmdBdHRyKGVsLCAndHlwZScpO1xuICAgICAgfVxuICAgICAgaWYgKCFtYXAudHlwZSAmJiAhdHlwZUJpbmRpbmcgJiYgbWFwWyd2LWJpbmQnXSkge1xuICAgICAgICB0eXBlQmluZGluZyA9IFwiKFwiICsgKG1hcFsndi1iaW5kJ10pICsgXCIpLnR5cGVcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVCaW5kaW5nKSB7XG4gICAgICAgIHZhciBpZkNvbmRpdGlvbiA9IGdldEFuZFJlbW92ZUF0dHIoZWwsICd2LWlmJywgdHJ1ZSk7XG4gICAgICAgIHZhciBpZkNvbmRpdGlvbkV4dHJhID0gaWZDb25kaXRpb24gPyAoXCImJihcIiArIGlmQ29uZGl0aW9uICsgXCIpXCIpIDogXCJcIjtcbiAgICAgICAgdmFyIGhhc0Vsc2UgPSBnZXRBbmRSZW1vdmVBdHRyKGVsLCAndi1lbHNlJywgdHJ1ZSkgIT0gbnVsbDtcbiAgICAgICAgdmFyIGVsc2VJZkNvbmRpdGlvbiA9IGdldEFuZFJlbW92ZUF0dHIoZWwsICd2LWVsc2UtaWYnLCB0cnVlKTtcbiAgICAgICAgLy8gMS4gY2hlY2tib3hcbiAgICAgICAgdmFyIGJyYW5jaDAgPSBjbG9uZUFTVEVsZW1lbnQoZWwpO1xuICAgICAgICAvLyBwcm9jZXNzIGZvciBvbiB0aGUgbWFpbiBub2RlXG4gICAgICAgIHByb2Nlc3NGb3IoYnJhbmNoMCk7XG4gICAgICAgIGFkZFJhd0F0dHIoYnJhbmNoMCwgJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgcHJvY2Vzc0VsZW1lbnQoYnJhbmNoMCwgb3B0aW9ucyk7XG4gICAgICAgIGJyYW5jaDAucHJvY2Vzc2VkID0gdHJ1ZTsgLy8gcHJldmVudCBpdCBmcm9tIGRvdWJsZS1wcm9jZXNzZWRcbiAgICAgICAgYnJhbmNoMC5pZiA9IFwiKFwiICsgdHlwZUJpbmRpbmcgKyBcIik9PT0nY2hlY2tib3gnXCIgKyBpZkNvbmRpdGlvbkV4dHJhO1xuICAgICAgICBhZGRJZkNvbmRpdGlvbihicmFuY2gwLCB7XG4gICAgICAgICAgZXhwOiBicmFuY2gwLmlmLFxuICAgICAgICAgIGJsb2NrOiBicmFuY2gwXG4gICAgICAgIH0pO1xuICAgICAgICAvLyAyLiBhZGQgcmFkaW8gZWxzZS1pZiBjb25kaXRpb25cbiAgICAgICAgdmFyIGJyYW5jaDEgPSBjbG9uZUFTVEVsZW1lbnQoZWwpO1xuICAgICAgICBnZXRBbmRSZW1vdmVBdHRyKGJyYW5jaDEsICd2LWZvcicsIHRydWUpO1xuICAgICAgICBhZGRSYXdBdHRyKGJyYW5jaDEsICd0eXBlJywgJ3JhZGlvJyk7XG4gICAgICAgIHByb2Nlc3NFbGVtZW50KGJyYW5jaDEsIG9wdGlvbnMpO1xuICAgICAgICBhZGRJZkNvbmRpdGlvbihicmFuY2gwLCB7XG4gICAgICAgICAgZXhwOiBcIihcIiArIHR5cGVCaW5kaW5nICsgXCIpPT09J3JhZGlvJ1wiICsgaWZDb25kaXRpb25FeHRyYSxcbiAgICAgICAgICBibG9jazogYnJhbmNoMVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gMy4gb3RoZXJcbiAgICAgICAgdmFyIGJyYW5jaDIgPSBjbG9uZUFTVEVsZW1lbnQoZWwpO1xuICAgICAgICBnZXRBbmRSZW1vdmVBdHRyKGJyYW5jaDIsICd2LWZvcicsIHRydWUpO1xuICAgICAgICBhZGRSYXdBdHRyKGJyYW5jaDIsICc6dHlwZScsIHR5cGVCaW5kaW5nKTtcbiAgICAgICAgcHJvY2Vzc0VsZW1lbnQoYnJhbmNoMiwgb3B0aW9ucyk7XG4gICAgICAgIGFkZElmQ29uZGl0aW9uKGJyYW5jaDAsIHtcbiAgICAgICAgICBleHA6IGlmQ29uZGl0aW9uLFxuICAgICAgICAgIGJsb2NrOiBicmFuY2gyXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChoYXNFbHNlKSB7XG4gICAgICAgICAgYnJhbmNoMC5lbHNlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChlbHNlSWZDb25kaXRpb24pIHtcbiAgICAgICAgICBicmFuY2gwLmVsc2VpZiA9IGVsc2VJZkNvbmRpdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBicmFuY2gwXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xvbmVBU1RFbGVtZW50IChlbCkge1xuICAgIHJldHVybiBjcmVhdGVBU1RFbGVtZW50KGVsLnRhZywgZWwuYXR0cnNMaXN0LnNsaWNlKCksIGVsLnBhcmVudClcbiAgfVxuXG4gIHZhciBtb2RlbCQxID0ge1xuICAgIHByZVRyYW5zZm9ybU5vZGU6IHByZVRyYW5zZm9ybU5vZGVcbiAgfTtcblxuICB2YXIgbW9kdWxlcyQxID0gW1xuICAgIGtsYXNzJDEsXG4gICAgc3R5bGUkMSxcbiAgICBtb2RlbCQxXG4gIF07XG5cbiAgLyogICovXG5cbiAgZnVuY3Rpb24gdGV4dCAoZWwsIGRpcikge1xuICAgIGlmIChkaXIudmFsdWUpIHtcbiAgICAgIGFkZFByb3AoZWwsICd0ZXh0Q29udGVudCcsIChcIl9zKFwiICsgKGRpci52YWx1ZSkgKyBcIilcIiksIGRpcik7XG4gICAgfVxuICB9XG5cbiAgLyogICovXG5cbiAgZnVuY3Rpb24gaHRtbCAoZWwsIGRpcikge1xuICAgIGlmIChkaXIudmFsdWUpIHtcbiAgICAgIGFkZFByb3AoZWwsICdpbm5lckhUTUwnLCAoXCJfcyhcIiArIChkaXIudmFsdWUpICsgXCIpXCIpLCBkaXIpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBkaXJlY3RpdmVzJDEgPSB7XG4gICAgbW9kZWw6IG1vZGVsLFxuICAgIHRleHQ6IHRleHQsXG4gICAgaHRtbDogaHRtbFxuICB9O1xuXG4gIC8qICAqL1xuXG4gIHZhciBiYXNlT3B0aW9ucyA9IHtcbiAgICBleHBlY3RIVE1MOiB0cnVlLFxuICAgIG1vZHVsZXM6IG1vZHVsZXMkMSxcbiAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzJDEsXG4gICAgaXNQcmVUYWc6IGlzUHJlVGFnLFxuICAgIGlzVW5hcnlUYWc6IGlzVW5hcnlUYWcsXG4gICAgbXVzdFVzZVByb3A6IG11c3RVc2VQcm9wLFxuICAgIGNhbkJlTGVmdE9wZW5UYWc6IGNhbkJlTGVmdE9wZW5UYWcsXG4gICAgaXNSZXNlcnZlZFRhZzogaXNSZXNlcnZlZFRhZyxcbiAgICBnZXRUYWdOYW1lc3BhY2U6IGdldFRhZ05hbWVzcGFjZSxcbiAgICBzdGF0aWNLZXlzOiBnZW5TdGF0aWNLZXlzKG1vZHVsZXMkMSlcbiAgfTtcblxuICAvKiAgKi9cblxuICB2YXIgaXNTdGF0aWNLZXk7XG4gIHZhciBpc1BsYXRmb3JtUmVzZXJ2ZWRUYWc7XG5cbiAgdmFyIGdlblN0YXRpY0tleXNDYWNoZWQgPSBjYWNoZWQoZ2VuU3RhdGljS2V5cyQxKTtcblxuICAvKipcbiAgICogR29hbCBvZiB0aGUgb3B0aW1pemVyOiB3YWxrIHRoZSBnZW5lcmF0ZWQgdGVtcGxhdGUgQVNUIHRyZWVcbiAgICogYW5kIGRldGVjdCBzdWItdHJlZXMgdGhhdCBhcmUgcHVyZWx5IHN0YXRpYywgaS5lLiBwYXJ0cyBvZlxuICAgKiB0aGUgRE9NIHRoYXQgbmV2ZXIgbmVlZHMgdG8gY2hhbmdlLlxuICAgKlxuICAgKiBPbmNlIHdlIGRldGVjdCB0aGVzZSBzdWItdHJlZXMsIHdlIGNhbjpcbiAgICpcbiAgICogMS4gSG9pc3QgdGhlbSBpbnRvIGNvbnN0YW50cywgc28gdGhhdCB3ZSBubyBsb25nZXIgbmVlZCB0b1xuICAgKiAgICBjcmVhdGUgZnJlc2ggbm9kZXMgZm9yIHRoZW0gb24gZWFjaCByZS1yZW5kZXI7XG4gICAqIDIuIENvbXBsZXRlbHkgc2tpcCB0aGVtIGluIHRoZSBwYXRjaGluZyBwcm9jZXNzLlxuICAgKi9cbiAgZnVuY3Rpb24gb3B0aW1pemUgKHJvb3QsIG9wdGlvbnMpIHtcbiAgICBpZiAoIXJvb3QpIHsgcmV0dXJuIH1cbiAgICBpc1N0YXRpY0tleSA9IGdlblN0YXRpY0tleXNDYWNoZWQob3B0aW9ucy5zdGF0aWNLZXlzIHx8ICcnKTtcbiAgICBpc1BsYXRmb3JtUmVzZXJ2ZWRUYWcgPSBvcHRpb25zLmlzUmVzZXJ2ZWRUYWcgfHwgbm87XG4gICAgLy8gZmlyc3QgcGFzczogbWFyayBhbGwgbm9uLXN0YXRpYyBub2Rlcy5cbiAgICBtYXJrU3RhdGljJDEocm9vdCk7XG4gICAgLy8gc2Vjb25kIHBhc3M6IG1hcmsgc3RhdGljIHJvb3RzLlxuICAgIG1hcmtTdGF0aWNSb290cyhyb290LCBmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZW5TdGF0aWNLZXlzJDEgKGtleXMpIHtcbiAgICByZXR1cm4gbWFrZU1hcChcbiAgICAgICd0eXBlLHRhZyxhdHRyc0xpc3QsYXR0cnNNYXAscGxhaW4scGFyZW50LGNoaWxkcmVuLGF0dHJzLHN0YXJ0LGVuZCxyYXdBdHRyc01hcCcgK1xuICAgICAgKGtleXMgPyAnLCcgKyBrZXlzIDogJycpXG4gICAgKVxuICB9XG5cbiAgZnVuY3Rpb24gbWFya1N0YXRpYyQxIChub2RlKSB7XG4gICAgbm9kZS5zdGF0aWMgPSBpc1N0YXRpYyhub2RlKTtcbiAgICBpZiAobm9kZS50eXBlID09PSAxKSB7XG4gICAgICAvLyBkbyBub3QgbWFrZSBjb21wb25lbnQgc2xvdCBjb250ZW50IHN0YXRpYy4gdGhpcyBhdm9pZHNcbiAgICAgIC8vIDEuIGNvbXBvbmVudHMgbm90IGFibGUgdG8gbXV0YXRlIHNsb3Qgbm9kZXNcbiAgICAgIC8vIDIuIHN0YXRpYyBzbG90IGNvbnRlbnQgZmFpbHMgZm9yIGhvdC1yZWxvYWRpbmdcbiAgICAgIGlmIChcbiAgICAgICAgIWlzUGxhdGZvcm1SZXNlcnZlZFRhZyhub2RlLnRhZykgJiZcbiAgICAgICAgbm9kZS50YWcgIT09ICdzbG90JyAmJlxuICAgICAgICBub2RlLmF0dHJzTWFwWydpbmxpbmUtdGVtcGxhdGUnXSA9PSBudWxsXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGUuY2hpbGRyZW5baV07XG4gICAgICAgIG1hcmtTdGF0aWMkMShjaGlsZCk7XG4gICAgICAgIGlmICghY2hpbGQuc3RhdGljKSB7XG4gICAgICAgICAgbm9kZS5zdGF0aWMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG5vZGUuaWZDb25kaXRpb25zKSB7XG4gICAgICAgIGZvciAodmFyIGkkMSA9IDEsIGwkMSA9IG5vZGUuaWZDb25kaXRpb25zLmxlbmd0aDsgaSQxIDwgbCQxOyBpJDErKykge1xuICAgICAgICAgIHZhciBibG9jayA9IG5vZGUuaWZDb25kaXRpb25zW2kkMV0uYmxvY2s7XG4gICAgICAgICAgbWFya1N0YXRpYyQxKGJsb2NrKTtcbiAgICAgICAgICBpZiAoIWJsb2NrLnN0YXRpYykge1xuICAgICAgICAgICAgbm9kZS5zdGF0aWMgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtYXJrU3RhdGljUm9vdHMgKG5vZGUsIGlzSW5Gb3IpIHtcbiAgICBpZiAobm9kZS50eXBlID09PSAxKSB7XG4gICAgICBpZiAobm9kZS5zdGF0aWMgfHwgbm9kZS5vbmNlKSB7XG4gICAgICAgIG5vZGUuc3RhdGljSW5Gb3IgPSBpc0luRm9yO1xuICAgICAgfVxuICAgICAgLy8gRm9yIGEgbm9kZSB0byBxdWFsaWZ5IGFzIGEgc3RhdGljIHJvb3QsIGl0IHNob3VsZCBoYXZlIGNoaWxkcmVuIHRoYXRcbiAgICAgIC8vIGFyZSBub3QganVzdCBzdGF0aWMgdGV4dC4gT3RoZXJ3aXNlIHRoZSBjb3N0IG9mIGhvaXN0aW5nIG91dCB3aWxsXG4gICAgICAvLyBvdXR3ZWlnaCB0aGUgYmVuZWZpdHMgYW5kIGl0J3MgYmV0dGVyIG9mZiB0byBqdXN0IGFsd2F5cyByZW5kZXIgaXQgZnJlc2guXG4gICAgICBpZiAobm9kZS5zdGF0aWMgJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggJiYgIShcbiAgICAgICAgbm9kZS5jaGlsZHJlbi5sZW5ndGggPT09IDEgJiZcbiAgICAgICAgbm9kZS5jaGlsZHJlblswXS50eXBlID09PSAzXG4gICAgICApKSB7XG4gICAgICAgIG5vZGUuc3RhdGljUm9vdCA9IHRydWU7XG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS5zdGF0aWNSb290ID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgbWFya1N0YXRpY1Jvb3RzKG5vZGUuY2hpbGRyZW5baV0sIGlzSW5Gb3IgfHwgISFub2RlLmZvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChub2RlLmlmQ29uZGl0aW9ucykge1xuICAgICAgICBmb3IgKHZhciBpJDEgPSAxLCBsJDEgPSBub2RlLmlmQ29uZGl0aW9ucy5sZW5ndGg7IGkkMSA8IGwkMTsgaSQxKyspIHtcbiAgICAgICAgICBtYXJrU3RhdGljUm9vdHMobm9kZS5pZkNvbmRpdGlvbnNbaSQxXS5ibG9jaywgaXNJbkZvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N0YXRpYyAobm9kZSkge1xuICAgIGlmIChub2RlLnR5cGUgPT09IDIpIHsgLy8gZXhwcmVzc2lvblxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGlmIChub2RlLnR5cGUgPT09IDMpIHsgLy8gdGV4dFxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuICEhKG5vZGUucHJlIHx8IChcbiAgICAgICFub2RlLmhhc0JpbmRpbmdzICYmIC8vIG5vIGR5bmFtaWMgYmluZGluZ3NcbiAgICAgICFub2RlLmlmICYmICFub2RlLmZvciAmJiAvLyBub3Qgdi1pZiBvciB2LWZvciBvciB2LWVsc2VcbiAgICAgICFpc0J1aWx0SW5UYWcobm9kZS50YWcpICYmIC8vIG5vdCBhIGJ1aWx0LWluXG4gICAgICBpc1BsYXRmb3JtUmVzZXJ2ZWRUYWcobm9kZS50YWcpICYmIC8vIG5vdCBhIGNvbXBvbmVudFxuICAgICAgIWlzRGlyZWN0Q2hpbGRPZlRlbXBsYXRlRm9yKG5vZGUpICYmXG4gICAgICBPYmplY3Qua2V5cyhub2RlKS5ldmVyeShpc1N0YXRpY0tleSlcbiAgICApKVxuICB9XG5cbiAgZnVuY3Rpb24gaXNEaXJlY3RDaGlsZE9mVGVtcGxhdGVGb3IgKG5vZGUpIHtcbiAgICB3aGlsZSAobm9kZS5wYXJlbnQpIHtcbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudDtcbiAgICAgIGlmIChub2RlLnRhZyAhPT0gJ3RlbXBsYXRlJykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLmZvcikge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8qICAqL1xuXG4gIHZhciBmbkV4cFJFID0gL14oW1xcdyRfXSt8XFwoW14pXSo/XFwpKVxccyo9PnxeZnVuY3Rpb24oPzpcXHMrW1xcdyRdKyk/XFxzKlxcKC87XG4gIHZhciBmbkludm9rZVJFID0gL1xcKFteKV0qP1xcKTsqJC87XG4gIHZhciBzaW1wbGVQYXRoUkUgPSAvXltBLVphLXpfJF1bXFx3JF0qKD86XFwuW0EtWmEtel8kXVtcXHckXSp8XFxbJ1teJ10qPyddfFxcW1wiW15cIl0qP1wiXXxcXFtcXGQrXXxcXFtbQS1aYS16XyRdW1xcdyRdKl0pKiQvO1xuXG4gIC8vIEtleWJvYXJkRXZlbnQua2V5Q29kZSBhbGlhc2VzXG4gIHZhciBrZXlDb2RlcyA9IHtcbiAgICBlc2M6IDI3LFxuICAgIHRhYjogOSxcbiAgICBlbnRlcjogMTMsXG4gICAgc3BhY2U6IDMyLFxuICAgIHVwOiAzOCxcbiAgICBsZWZ0OiAzNyxcbiAgICByaWdodDogMzksXG4gICAgZG93bjogNDAsXG4gICAgJ2RlbGV0ZSc6IFs4LCA0Nl1cbiAgfTtcblxuICAvLyBLZXlib2FyZEV2ZW50LmtleSBhbGlhc2VzXG4gIHZhciBrZXlOYW1lcyA9IHtcbiAgICAvLyAjNzg4MDogSUUxMSBhbmQgRWRnZSB1c2UgYEVzY2AgZm9yIEVzY2FwZSBrZXkgbmFtZS5cbiAgICBlc2M6IFsnRXNjJywgJ0VzY2FwZSddLFxuICAgIHRhYjogJ1RhYicsXG4gICAgZW50ZXI6ICdFbnRlcicsXG4gICAgLy8gIzkxMTI6IElFMTEgdXNlcyBgU3BhY2ViYXJgIGZvciBTcGFjZSBrZXkgbmFtZS5cbiAgICBzcGFjZTogWycgJywgJ1NwYWNlYmFyJ10sXG4gICAgLy8gIzc4MDY6IElFMTEgdXNlcyBrZXkgbmFtZXMgd2l0aG91dCBgQXJyb3dgIHByZWZpeCBmb3IgYXJyb3cga2V5cy5cbiAgICB1cDogWydVcCcsICdBcnJvd1VwJ10sXG4gICAgbGVmdDogWydMZWZ0JywgJ0Fycm93TGVmdCddLFxuICAgIHJpZ2h0OiBbJ1JpZ2h0JywgJ0Fycm93UmlnaHQnXSxcbiAgICBkb3duOiBbJ0Rvd24nLCAnQXJyb3dEb3duJ10sXG4gICAgLy8gIzkxMTI6IElFMTEgdXNlcyBgRGVsYCBmb3IgRGVsZXRlIGtleSBuYW1lLlxuICAgICdkZWxldGUnOiBbJ0JhY2tzcGFjZScsICdEZWxldGUnLCAnRGVsJ11cbiAgfTtcblxuICAvLyAjNDg2ODogbW9kaWZpZXJzIHRoYXQgcHJldmVudCB0aGUgZXhlY3V0aW9uIG9mIHRoZSBsaXN0ZW5lclxuICAvLyBuZWVkIHRvIGV4cGxpY2l0bHkgcmV0dXJuIG51bGwgc28gdGhhdCB3ZSBjYW4gZGV0ZXJtaW5lIHdoZXRoZXIgdG8gcmVtb3ZlXG4gIC8vIHRoZSBsaXN0ZW5lciBmb3IgLm9uY2VcbiAgdmFyIGdlbkd1YXJkID0gZnVuY3Rpb24gKGNvbmRpdGlvbikgeyByZXR1cm4gKFwiaWYoXCIgKyBjb25kaXRpb24gKyBcIilyZXR1cm4gbnVsbDtcIik7IH07XG5cbiAgdmFyIG1vZGlmaWVyQ29kZSA9IHtcbiAgICBzdG9wOiAnJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOycsXG4gICAgcHJldmVudDogJyRldmVudC5wcmV2ZW50RGVmYXVsdCgpOycsXG4gICAgc2VsZjogZ2VuR3VhcmQoXCIkZXZlbnQudGFyZ2V0ICE9PSAkZXZlbnQuY3VycmVudFRhcmdldFwiKSxcbiAgICBjdHJsOiBnZW5HdWFyZChcIiEkZXZlbnQuY3RybEtleVwiKSxcbiAgICBzaGlmdDogZ2VuR3VhcmQoXCIhJGV2ZW50LnNoaWZ0S2V5XCIpLFxuICAgIGFsdDogZ2VuR3VhcmQoXCIhJGV2ZW50LmFsdEtleVwiKSxcbiAgICBtZXRhOiBnZW5HdWFyZChcIiEkZXZlbnQubWV0YUtleVwiKSxcbiAgICBsZWZ0OiBnZW5HdWFyZChcIididXR0b24nIGluICRldmVudCAmJiAkZXZlbnQuYnV0dG9uICE9PSAwXCIpLFxuICAgIG1pZGRsZTogZ2VuR3VhcmQoXCInYnV0dG9uJyBpbiAkZXZlbnQgJiYgJGV2ZW50LmJ1dHRvbiAhPT0gMVwiKSxcbiAgICByaWdodDogZ2VuR3VhcmQoXCInYnV0dG9uJyBpbiAkZXZlbnQgJiYgJGV2ZW50LmJ1dHRvbiAhPT0gMlwiKVxuICB9O1xuXG4gIGZ1bmN0aW9uIGdlbkhhbmRsZXJzIChcbiAgICBldmVudHMsXG4gICAgaXNOYXRpdmVcbiAgKSB7XG4gICAgdmFyIHByZWZpeCA9IGlzTmF0aXZlID8gJ25hdGl2ZU9uOicgOiAnb246JztcbiAgICB2YXIgc3RhdGljSGFuZGxlcnMgPSBcIlwiO1xuICAgIHZhciBkeW5hbWljSGFuZGxlcnMgPSBcIlwiO1xuICAgIGZvciAodmFyIG5hbWUgaW4gZXZlbnRzKSB7XG4gICAgICB2YXIgaGFuZGxlckNvZGUgPSBnZW5IYW5kbGVyKGV2ZW50c1tuYW1lXSk7XG4gICAgICBpZiAoZXZlbnRzW25hbWVdICYmIGV2ZW50c1tuYW1lXS5keW5hbWljKSB7XG4gICAgICAgIGR5bmFtaWNIYW5kbGVycyArPSBuYW1lICsgXCIsXCIgKyBoYW5kbGVyQ29kZSArIFwiLFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGljSGFuZGxlcnMgKz0gXCJcXFwiXCIgKyBuYW1lICsgXCJcXFwiOlwiICsgaGFuZGxlckNvZGUgKyBcIixcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljSGFuZGxlcnMgPSBcIntcIiArIChzdGF0aWNIYW5kbGVycy5zbGljZSgwLCAtMSkpICsgXCJ9XCI7XG4gICAgaWYgKGR5bmFtaWNIYW5kbGVycykge1xuICAgICAgcmV0dXJuIHByZWZpeCArIFwiX2QoXCIgKyBzdGF0aWNIYW5kbGVycyArIFwiLFtcIiArIChkeW5hbWljSGFuZGxlcnMuc2xpY2UoMCwgLTEpKSArIFwiXSlcIlxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJlZml4ICsgc3RhdGljSGFuZGxlcnNcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZW5IYW5kbGVyIChoYW5kbGVyKSB7XG4gICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gJ2Z1bmN0aW9uKCl7fSdcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShoYW5kbGVyKSkge1xuICAgICAgcmV0dXJuIChcIltcIiArIChoYW5kbGVyLm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyByZXR1cm4gZ2VuSGFuZGxlcihoYW5kbGVyKTsgfSkuam9pbignLCcpKSArIFwiXVwiKVxuICAgIH1cblxuICAgIHZhciBpc01ldGhvZFBhdGggPSBzaW1wbGVQYXRoUkUudGVzdChoYW5kbGVyLnZhbHVlKTtcbiAgICB2YXIgaXNGdW5jdGlvbkV4cHJlc3Npb24gPSBmbkV4cFJFLnRlc3QoaGFuZGxlci52YWx1ZSk7XG4gICAgdmFyIGlzRnVuY3Rpb25JbnZvY2F0aW9uID0gc2ltcGxlUGF0aFJFLnRlc3QoaGFuZGxlci52YWx1ZS5yZXBsYWNlKGZuSW52b2tlUkUsICcnKSk7XG5cbiAgICBpZiAoIWhhbmRsZXIubW9kaWZpZXJzKSB7XG4gICAgICBpZiAoaXNNZXRob2RQYXRoIHx8IGlzRnVuY3Rpb25FeHByZXNzaW9uKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVyLnZhbHVlXG4gICAgICB9XG4gICAgICByZXR1cm4gKFwiZnVuY3Rpb24oJGV2ZW50KXtcIiArIChpc0Z1bmN0aW9uSW52b2NhdGlvbiA/IChcInJldHVybiBcIiArIChoYW5kbGVyLnZhbHVlKSkgOiBoYW5kbGVyLnZhbHVlKSArIFwifVwiKSAvLyBpbmxpbmUgc3RhdGVtZW50XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjb2RlID0gJyc7XG4gICAgICB2YXIgZ2VuTW9kaWZpZXJDb2RlID0gJyc7XG4gICAgICB2YXIga2V5cyA9IFtdO1xuICAgICAgZm9yICh2YXIga2V5IGluIGhhbmRsZXIubW9kaWZpZXJzKSB7XG4gICAgICAgIGlmIChtb2RpZmllckNvZGVba2V5XSkge1xuICAgICAgICAgIGdlbk1vZGlmaWVyQ29kZSArPSBtb2RpZmllckNvZGVba2V5XTtcbiAgICAgICAgICAvLyBsZWZ0L3JpZ2h0XG4gICAgICAgICAgaWYgKGtleUNvZGVzW2tleV0pIHtcbiAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdleGFjdCcpIHtcbiAgICAgICAgICB2YXIgbW9kaWZpZXJzID0gKGhhbmRsZXIubW9kaWZpZXJzKTtcbiAgICAgICAgICBnZW5Nb2RpZmllckNvZGUgKz0gZ2VuR3VhcmQoXG4gICAgICAgICAgICBbJ2N0cmwnLCAnc2hpZnQnLCAnYWx0JywgJ21ldGEnXVxuICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChrZXlNb2RpZmllcikgeyByZXR1cm4gIW1vZGlmaWVyc1trZXlNb2RpZmllcl07IH0pXG4gICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGtleU1vZGlmaWVyKSB7IHJldHVybiAoXCIkZXZlbnQuXCIgKyBrZXlNb2RpZmllciArIFwiS2V5XCIpOyB9KVxuICAgICAgICAgICAgICAuam9pbignfHwnKVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChrZXlzLmxlbmd0aCkge1xuICAgICAgICBjb2RlICs9IGdlbktleUZpbHRlcihrZXlzKTtcbiAgICAgIH1cbiAgICAgIC8vIE1ha2Ugc3VyZSBtb2RpZmllcnMgbGlrZSBwcmV2ZW50IGFuZCBzdG9wIGdldCBleGVjdXRlZCBhZnRlciBrZXkgZmlsdGVyaW5nXG4gICAgICBpZiAoZ2VuTW9kaWZpZXJDb2RlKSB7XG4gICAgICAgIGNvZGUgKz0gZ2VuTW9kaWZpZXJDb2RlO1xuICAgICAgfVxuICAgICAgdmFyIGhhbmRsZXJDb2RlID0gaXNNZXRob2RQYXRoXG4gICAgICAgID8gKFwicmV0dXJuIFwiICsgKGhhbmRsZXIudmFsdWUpICsgXCIoJGV2ZW50KVwiKVxuICAgICAgICA6IGlzRnVuY3Rpb25FeHByZXNzaW9uXG4gICAgICAgICAgPyAoXCJyZXR1cm4gKFwiICsgKGhhbmRsZXIudmFsdWUpICsgXCIpKCRldmVudClcIilcbiAgICAgICAgICA6IGlzRnVuY3Rpb25JbnZvY2F0aW9uXG4gICAgICAgICAgICA/IChcInJldHVybiBcIiArIChoYW5kbGVyLnZhbHVlKSlcbiAgICAgICAgICAgIDogaGFuZGxlci52YWx1ZTtcbiAgICAgIHJldHVybiAoXCJmdW5jdGlvbigkZXZlbnQpe1wiICsgY29kZSArIGhhbmRsZXJDb2RlICsgXCJ9XCIpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VuS2V5RmlsdGVyIChrZXlzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIC8vIG1ha2Ugc3VyZSB0aGUga2V5IGZpbHRlcnMgb25seSBhcHBseSB0byBLZXlib2FyZEV2ZW50c1xuICAgICAgLy8gIzk0NDE6IGNhbid0IHVzZSAna2V5Q29kZScgaW4gJGV2ZW50IGJlY2F1c2UgQ2hyb21lIGF1dG9maWxsIGZpcmVzIGZha2VcbiAgICAgIC8vIGtleSBldmVudHMgdGhhdCBkbyBub3QgaGF2ZSBrZXlDb2RlIHByb3BlcnR5Li4uXG4gICAgICBcImlmKCEkZXZlbnQudHlwZS5pbmRleE9mKCdrZXknKSYmXCIgK1xuICAgICAgKGtleXMubWFwKGdlbkZpbHRlckNvZGUpLmpvaW4oJyYmJykpICsgXCIpcmV0dXJuIG51bGw7XCJcbiAgICApXG4gIH1cblxuICBmdW5jdGlvbiBnZW5GaWx0ZXJDb2RlIChrZXkpIHtcbiAgICB2YXIga2V5VmFsID0gcGFyc2VJbnQoa2V5LCAxMCk7XG4gICAgaWYgKGtleVZhbCkge1xuICAgICAgcmV0dXJuIChcIiRldmVudC5rZXlDb2RlIT09XCIgKyBrZXlWYWwpXG4gICAgfVxuICAgIHZhciBrZXlDb2RlID0ga2V5Q29kZXNba2V5XTtcbiAgICB2YXIga2V5TmFtZSA9IGtleU5hbWVzW2tleV07XG4gICAgcmV0dXJuIChcbiAgICAgIFwiX2soJGV2ZW50LmtleUNvZGUsXCIgK1xuICAgICAgKEpTT04uc3RyaW5naWZ5KGtleSkpICsgXCIsXCIgK1xuICAgICAgKEpTT04uc3RyaW5naWZ5KGtleUNvZGUpKSArIFwiLFwiICtcbiAgICAgIFwiJGV2ZW50LmtleSxcIiArXG4gICAgICBcIlwiICsgKEpTT04uc3RyaW5naWZ5KGtleU5hbWUpKSArXG4gICAgICBcIilcIlxuICAgIClcbiAgfVxuXG4gIC8qICAqL1xuXG4gIGZ1bmN0aW9uIG9uIChlbCwgZGlyKSB7XG4gICAgaWYgKGRpci5tb2RpZmllcnMpIHtcbiAgICAgIHdhcm4oXCJ2LW9uIHdpdGhvdXQgYXJndW1lbnQgZG9lcyBub3Qgc3VwcG9ydCBtb2RpZmllcnMuXCIpO1xuICAgIH1cbiAgICBlbC53cmFwTGlzdGVuZXJzID0gZnVuY3Rpb24gKGNvZGUpIHsgcmV0dXJuIChcIl9nKFwiICsgY29kZSArIFwiLFwiICsgKGRpci52YWx1ZSkgKyBcIilcIik7IH07XG4gIH1cblxuICAvKiAgKi9cblxuICBmdW5jdGlvbiBiaW5kJDEgKGVsLCBkaXIpIHtcbiAgICBlbC53cmFwRGF0YSA9IGZ1bmN0aW9uIChjb2RlKSB7XG4gICAgICByZXR1cm4gKFwiX2IoXCIgKyBjb2RlICsgXCIsJ1wiICsgKGVsLnRhZykgKyBcIicsXCIgKyAoZGlyLnZhbHVlKSArIFwiLFwiICsgKGRpci5tb2RpZmllcnMgJiYgZGlyLm1vZGlmaWVycy5wcm9wID8gJ3RydWUnIDogJ2ZhbHNlJykgKyAoZGlyLm1vZGlmaWVycyAmJiBkaXIubW9kaWZpZXJzLnN5bmMgPyAnLHRydWUnIDogJycpICsgXCIpXCIpXG4gICAgfTtcbiAgfVxuXG4gIC8qICAqL1xuXG4gIHZhciBiYXNlRGlyZWN0aXZlcyA9IHtcbiAgICBvbjogb24sXG4gICAgYmluZDogYmluZCQxLFxuICAgIGNsb2FrOiBub29wXG4gIH07XG5cbiAgLyogICovXG5cblxuXG5cblxuICB2YXIgQ29kZWdlblN0YXRlID0gZnVuY3Rpb24gQ29kZWdlblN0YXRlIChvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLndhcm4gPSBvcHRpb25zLndhcm4gfHwgYmFzZVdhcm47XG4gICAgdGhpcy50cmFuc2Zvcm1zID0gcGx1Y2tNb2R1bGVGdW5jdGlvbihvcHRpb25zLm1vZHVsZXMsICd0cmFuc2Zvcm1Db2RlJyk7XG4gICAgdGhpcy5kYXRhR2VuRm5zID0gcGx1Y2tNb2R1bGVGdW5jdGlvbihvcHRpb25zLm1vZHVsZXMsICdnZW5EYXRhJyk7XG4gICAgdGhpcy5kaXJlY3RpdmVzID0gZXh0ZW5kKGV4dGVuZCh7fSwgYmFzZURpcmVjdGl2ZXMpLCBvcHRpb25zLmRpcmVjdGl2ZXMpO1xuICAgIHZhciBpc1Jlc2VydmVkVGFnID0gb3B0aW9ucy5pc1Jlc2VydmVkVGFnIHx8IG5vO1xuICAgIHRoaXMubWF5YmVDb21wb25lbnQgPSBmdW5jdGlvbiAoZWwpIHsgcmV0dXJuICEhZWwuY29tcG9uZW50IHx8ICFpc1Jlc2VydmVkVGFnKGVsLnRhZyk7IH07XG4gICAgdGhpcy5vbmNlSWQgPSAwO1xuICAgIHRoaXMuc3RhdGljUmVuZGVyRm5zID0gW107XG4gICAgdGhpcy5wcmUgPSBmYWxzZTtcbiAgfTtcblxuXG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGUgKFxuICAgIGFzdCxcbiAgICBvcHRpb25zXG4gICkge1xuICAgIHZhciBzdGF0ZSA9IG5ldyBDb2RlZ2VuU3RhdGUob3B0aW9ucyk7XG4gICAgdmFyIGNvZGUgPSBhc3QgPyBnZW5FbGVtZW50KGFzdCwgc3RhdGUpIDogJ19jKFwiZGl2XCIpJztcbiAgICByZXR1cm4ge1xuICAgICAgcmVuZGVyOiAoXCJ3aXRoKHRoaXMpe3JldHVybiBcIiArIGNvZGUgKyBcIn1cIiksXG4gICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRlLnN0YXRpY1JlbmRlckZuc1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbkVsZW1lbnQgKGVsLCBzdGF0ZSkge1xuICAgIGlmIChlbC5wYXJlbnQpIHtcbiAgICAgIGVsLnByZSA9IGVsLnByZSB8fCBlbC5wYXJlbnQucHJlO1xuICAgIH1cblxuICAgIGlmIChlbC5zdGF0aWNSb290ICYmICFlbC5zdGF0aWNQcm9jZXNzZWQpIHtcbiAgICAgIHJldHVybiBnZW5TdGF0aWMoZWwsIHN0YXRlKVxuICAgIH0gZWxzZSBpZiAoZWwub25jZSAmJiAhZWwub25jZVByb2Nlc3NlZCkge1xuICAgICAgcmV0dXJuIGdlbk9uY2UoZWwsIHN0YXRlKVxuICAgIH0gZWxzZSBpZiAoZWwuZm9yICYmICFlbC5mb3JQcm9jZXNzZWQpIHtcbiAgICAgIHJldHVybiBnZW5Gb3IoZWwsIHN0YXRlKVxuICAgIH0gZWxzZSBpZiAoZWwuaWYgJiYgIWVsLmlmUHJvY2Vzc2VkKSB7XG4gICAgICByZXR1cm4gZ2VuSWYoZWwsIHN0YXRlKVxuICAgIH0gZWxzZSBpZiAoZWwudGFnID09PSAndGVtcGxhdGUnICYmICFlbC5zbG90VGFyZ2V0ICYmICFzdGF0ZS5wcmUpIHtcbiAgICAgIHJldHVybiBnZW5DaGlsZHJlbihlbCwgc3RhdGUpIHx8ICd2b2lkIDAnXG4gICAgfSBlbHNlIGlmIChlbC50YWcgPT09ICdzbG90Jykge1xuICAgICAgcmV0dXJuIGdlblNsb3QoZWwsIHN0YXRlKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb21wb25lbnQgb3IgZWxlbWVudFxuICAgICAgdmFyIGNvZGU7XG4gICAgICBpZiAoZWwuY29tcG9uZW50KSB7XG4gICAgICAgIGNvZGUgPSBnZW5Db21wb25lbnQoZWwuY29tcG9uZW50LCBlbCwgc3RhdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGRhdGE7XG4gICAgICAgIGlmICghZWwucGxhaW4gfHwgKGVsLnByZSAmJiBzdGF0ZS5tYXliZUNvbXBvbmVudChlbCkpKSB7XG4gICAgICAgICAgZGF0YSA9IGdlbkRhdGEkMihlbCwgc3RhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoaWxkcmVuID0gZWwuaW5saW5lVGVtcGxhdGUgPyBudWxsIDogZ2VuQ2hpbGRyZW4oZWwsIHN0YXRlLCB0cnVlKTtcbiAgICAgICAgY29kZSA9IFwiX2MoJ1wiICsgKGVsLnRhZykgKyBcIidcIiArIChkYXRhID8gKFwiLFwiICsgZGF0YSkgOiAnJykgKyAoY2hpbGRyZW4gPyAoXCIsXCIgKyBjaGlsZHJlbikgOiAnJykgKyBcIilcIjtcbiAgICAgIH1cbiAgICAgIC8vIG1vZHVsZSB0cmFuc2Zvcm1zXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YXRlLnRyYW5zZm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29kZSA9IHN0YXRlLnRyYW5zZm9ybXNbaV0oZWwsIGNvZGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvZGVcbiAgICB9XG4gIH1cblxuICAvLyBob2lzdCBzdGF0aWMgc3ViLXRyZWVzIG91dFxuICBmdW5jdGlvbiBnZW5TdGF0aWMgKGVsLCBzdGF0ZSkge1xuICAgIGVsLnN0YXRpY1Byb2Nlc3NlZCA9IHRydWU7XG4gICAgLy8gU29tZSBlbGVtZW50cyAodGVtcGxhdGVzKSBuZWVkIHRvIGJlaGF2ZSBkaWZmZXJlbnRseSBpbnNpZGUgb2YgYSB2LXByZVxuICAgIC8vIG5vZGUuICBBbGwgcHJlIG5vZGVzIGFyZSBzdGF0aWMgcm9vdHMsIHNvIHdlIGNhbiB1c2UgdGhpcyBhcyBhIGxvY2F0aW9uIHRvXG4gICAgLy8gd3JhcCBhIHN0YXRlIGNoYW5nZSBhbmQgcmVzZXQgaXQgdXBvbiBleGl0aW5nIHRoZSBwcmUgbm9kZS5cbiAgICB2YXIgb3JpZ2luYWxQcmVTdGF0ZSA9IHN0YXRlLnByZTtcbiAgICBpZiAoZWwucHJlKSB7XG4gICAgICBzdGF0ZS5wcmUgPSBlbC5wcmU7XG4gICAgfVxuICAgIHN0YXRlLnN0YXRpY1JlbmRlckZucy5wdXNoKChcIndpdGgodGhpcyl7cmV0dXJuIFwiICsgKGdlbkVsZW1lbnQoZWwsIHN0YXRlKSkgKyBcIn1cIikpO1xuICAgIHN0YXRlLnByZSA9IG9yaWdpbmFsUHJlU3RhdGU7XG4gICAgcmV0dXJuIChcIl9tKFwiICsgKHN0YXRlLnN0YXRpY1JlbmRlckZucy5sZW5ndGggLSAxKSArIChlbC5zdGF0aWNJbkZvciA/ICcsdHJ1ZScgOiAnJykgKyBcIilcIilcbiAgfVxuXG4gIC8vIHYtb25jZVxuICBmdW5jdGlvbiBnZW5PbmNlIChlbCwgc3RhdGUpIHtcbiAgICBlbC5vbmNlUHJvY2Vzc2VkID0gdHJ1ZTtcbiAgICBpZiAoZWwuaWYgJiYgIWVsLmlmUHJvY2Vzc2VkKSB7XG4gICAgICByZXR1cm4gZ2VuSWYoZWwsIHN0YXRlKVxuICAgIH0gZWxzZSBpZiAoZWwuc3RhdGljSW5Gb3IpIHtcbiAgICAgIHZhciBrZXkgPSAnJztcbiAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnQ7XG4gICAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnQuZm9yKSB7XG4gICAgICAgICAga2V5ID0gcGFyZW50LmtleTtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgICB9XG4gICAgICBpZiAoIWtleSkge1xuICAgICAgICBzdGF0ZS53YXJuKFxuICAgICAgICAgIFwidi1vbmNlIGNhbiBvbmx5IGJlIHVzZWQgaW5zaWRlIHYtZm9yIHRoYXQgaXMga2V5ZWQuIFwiLFxuICAgICAgICAgIGVsLnJhd0F0dHJzTWFwWyd2LW9uY2UnXVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZ2VuRWxlbWVudChlbCwgc3RhdGUpXG4gICAgICB9XG4gICAgICByZXR1cm4gKFwiX28oXCIgKyAoZ2VuRWxlbWVudChlbCwgc3RhdGUpKSArIFwiLFwiICsgKHN0YXRlLm9uY2VJZCsrKSArIFwiLFwiICsga2V5ICsgXCIpXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZW5TdGF0aWMoZWwsIHN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbklmIChcbiAgICBlbCxcbiAgICBzdGF0ZSxcbiAgICBhbHRHZW4sXG4gICAgYWx0RW1wdHlcbiAgKSB7XG4gICAgZWwuaWZQcm9jZXNzZWQgPSB0cnVlOyAvLyBhdm9pZCByZWN1cnNpb25cbiAgICByZXR1cm4gZ2VuSWZDb25kaXRpb25zKGVsLmlmQ29uZGl0aW9ucy5zbGljZSgpLCBzdGF0ZSwgYWx0R2VuLCBhbHRFbXB0eSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbklmQ29uZGl0aW9ucyAoXG4gICAgY29uZGl0aW9ucyxcbiAgICBzdGF0ZSxcbiAgICBhbHRHZW4sXG4gICAgYWx0RW1wdHlcbiAgKSB7XG4gICAgaWYgKCFjb25kaXRpb25zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGFsdEVtcHR5IHx8ICdfZSgpJ1xuICAgIH1cblxuICAgIHZhciBjb25kaXRpb24gPSBjb25kaXRpb25zLnNoaWZ0KCk7XG4gICAgaWYgKGNvbmRpdGlvbi5leHApIHtcbiAgICAgIHJldHVybiAoXCIoXCIgKyAoY29uZGl0aW9uLmV4cCkgKyBcIik/XCIgKyAoZ2VuVGVybmFyeUV4cChjb25kaXRpb24uYmxvY2spKSArIFwiOlwiICsgKGdlbklmQ29uZGl0aW9ucyhjb25kaXRpb25zLCBzdGF0ZSwgYWx0R2VuLCBhbHRFbXB0eSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFwiXCIgKyAoZ2VuVGVybmFyeUV4cChjb25kaXRpb24uYmxvY2spKSlcbiAgICB9XG5cbiAgICAvLyB2LWlmIHdpdGggdi1vbmNlIHNob3VsZCBnZW5lcmF0ZSBjb2RlIGxpa2UgKGEpP19tKDApOl9tKDEpXG4gICAgZnVuY3Rpb24gZ2VuVGVybmFyeUV4cCAoZWwpIHtcbiAgICAgIHJldHVybiBhbHRHZW5cbiAgICAgICAgPyBhbHRHZW4oZWwsIHN0YXRlKVxuICAgICAgICA6IGVsLm9uY2VcbiAgICAgICAgICA/IGdlbk9uY2UoZWwsIHN0YXRlKVxuICAgICAgICAgIDogZ2VuRWxlbWVudChlbCwgc3RhdGUpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VuRm9yIChcbiAgICBlbCxcbiAgICBzdGF0ZSxcbiAgICBhbHRHZW4sXG4gICAgYWx0SGVscGVyXG4gICkge1xuICAgIHZhciBleHAgPSBlbC5mb3I7XG4gICAgdmFyIGFsaWFzID0gZWwuYWxpYXM7XG4gICAgdmFyIGl0ZXJhdG9yMSA9IGVsLml0ZXJhdG9yMSA/IChcIixcIiArIChlbC5pdGVyYXRvcjEpKSA6ICcnO1xuICAgIHZhciBpdGVyYXRvcjIgPSBlbC5pdGVyYXRvcjIgPyAoXCIsXCIgKyAoZWwuaXRlcmF0b3IyKSkgOiAnJztcblxuICAgIGlmIChzdGF0ZS5tYXliZUNvbXBvbmVudChlbCkgJiZcbiAgICAgIGVsLnRhZyAhPT0gJ3Nsb3QnICYmXG4gICAgICBlbC50YWcgIT09ICd0ZW1wbGF0ZScgJiZcbiAgICAgICFlbC5rZXlcbiAgICApIHtcbiAgICAgIHN0YXRlLndhcm4oXG4gICAgICAgIFwiPFwiICsgKGVsLnRhZykgKyBcIiB2LWZvcj1cXFwiXCIgKyBhbGlhcyArIFwiIGluIFwiICsgZXhwICsgXCJcXFwiPjogY29tcG9uZW50IGxpc3RzIHJlbmRlcmVkIHdpdGggXCIgK1xuICAgICAgICBcInYtZm9yIHNob3VsZCBoYXZlIGV4cGxpY2l0IGtleXMuIFwiICtcbiAgICAgICAgXCJTZWUgaHR0cHM6Ly92dWVqcy5vcmcvZ3VpZGUvbGlzdC5odG1sI2tleSBmb3IgbW9yZSBpbmZvLlwiLFxuICAgICAgICBlbC5yYXdBdHRyc01hcFsndi1mb3InXSxcbiAgICAgICAgdHJ1ZSAvKiB0aXAgKi9cbiAgICAgICk7XG4gICAgfVxuXG4gICAgZWwuZm9yUHJvY2Vzc2VkID0gdHJ1ZTsgLy8gYXZvaWQgcmVjdXJzaW9uXG4gICAgcmV0dXJuIChhbHRIZWxwZXIgfHwgJ19sJykgKyBcIigoXCIgKyBleHAgKyBcIiksXCIgK1xuICAgICAgXCJmdW5jdGlvbihcIiArIGFsaWFzICsgaXRlcmF0b3IxICsgaXRlcmF0b3IyICsgXCIpe1wiICtcbiAgICAgICAgXCJyZXR1cm4gXCIgKyAoKGFsdEdlbiB8fCBnZW5FbGVtZW50KShlbCwgc3RhdGUpKSArXG4gICAgICAnfSknXG4gIH1cblxuICBmdW5jdGlvbiBnZW5EYXRhJDIgKGVsLCBzdGF0ZSkge1xuICAgIHZhciBkYXRhID0gJ3snO1xuXG4gICAgLy8gZGlyZWN0aXZlcyBmaXJzdC5cbiAgICAvLyBkaXJlY3RpdmVzIG1heSBtdXRhdGUgdGhlIGVsJ3Mgb3RoZXIgcHJvcGVydGllcyBiZWZvcmUgdGhleSBhcmUgZ2VuZXJhdGVkLlxuICAgIHZhciBkaXJzID0gZ2VuRGlyZWN0aXZlcyhlbCwgc3RhdGUpO1xuICAgIGlmIChkaXJzKSB7IGRhdGEgKz0gZGlycyArICcsJzsgfVxuXG4gICAgLy8ga2V5XG4gICAgaWYgKGVsLmtleSkge1xuICAgICAgZGF0YSArPSBcImtleTpcIiArIChlbC5rZXkpICsgXCIsXCI7XG4gICAgfVxuICAgIC8vIHJlZlxuICAgIGlmIChlbC5yZWYpIHtcbiAgICAgIGRhdGEgKz0gXCJyZWY6XCIgKyAoZWwucmVmKSArIFwiLFwiO1xuICAgIH1cbiAgICBpZiAoZWwucmVmSW5Gb3IpIHtcbiAgICAgIGRhdGEgKz0gXCJyZWZJbkZvcjp0cnVlLFwiO1xuICAgIH1cbiAgICAvLyBwcmVcbiAgICBpZiAoZWwucHJlKSB7XG4gICAgICBkYXRhICs9IFwicHJlOnRydWUsXCI7XG4gICAgfVxuICAgIC8vIHJlY29yZCBvcmlnaW5hbCB0YWcgbmFtZSBmb3IgY29tcG9uZW50cyB1c2luZyBcImlzXCIgYXR0cmlidXRlXG4gICAgaWYgKGVsLmNvbXBvbmVudCkge1xuICAgICAgZGF0YSArPSBcInRhZzpcXFwiXCIgKyAoZWwudGFnKSArIFwiXFxcIixcIjtcbiAgICB9XG4gICAgLy8gbW9kdWxlIGRhdGEgZ2VuZXJhdGlvbiBmdW5jdGlvbnNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YXRlLmRhdGFHZW5GbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRhdGEgKz0gc3RhdGUuZGF0YUdlbkZuc1tpXShlbCk7XG4gICAgfVxuICAgIC8vIGF0dHJpYnV0ZXNcbiAgICBpZiAoZWwuYXR0cnMpIHtcbiAgICAgIGRhdGEgKz0gXCJhdHRyczpcIiArIChnZW5Qcm9wcyhlbC5hdHRycykpICsgXCIsXCI7XG4gICAgfVxuICAgIC8vIERPTSBwcm9wc1xuICAgIGlmIChlbC5wcm9wcykge1xuICAgICAgZGF0YSArPSBcImRvbVByb3BzOlwiICsgKGdlblByb3BzKGVsLnByb3BzKSkgKyBcIixcIjtcbiAgICB9XG4gICAgLy8gZXZlbnQgaGFuZGxlcnNcbiAgICBpZiAoZWwuZXZlbnRzKSB7XG4gICAgICBkYXRhICs9IChnZW5IYW5kbGVycyhlbC5ldmVudHMsIGZhbHNlKSkgKyBcIixcIjtcbiAgICB9XG4gICAgaWYgKGVsLm5hdGl2ZUV2ZW50cykge1xuICAgICAgZGF0YSArPSAoZ2VuSGFuZGxlcnMoZWwubmF0aXZlRXZlbnRzLCB0cnVlKSkgKyBcIixcIjtcbiAgICB9XG4gICAgLy8gc2xvdCB0YXJnZXRcbiAgICAvLyBvbmx5IGZvciBub24tc2NvcGVkIHNsb3RzXG4gICAgaWYgKGVsLnNsb3RUYXJnZXQgJiYgIWVsLnNsb3RTY29wZSkge1xuICAgICAgZGF0YSArPSBcInNsb3Q6XCIgKyAoZWwuc2xvdFRhcmdldCkgKyBcIixcIjtcbiAgICB9XG4gICAgLy8gc2NvcGVkIHNsb3RzXG4gICAgaWYgKGVsLnNjb3BlZFNsb3RzKSB7XG4gICAgICBkYXRhICs9IChnZW5TY29wZWRTbG90cyhlbCwgZWwuc2NvcGVkU2xvdHMsIHN0YXRlKSkgKyBcIixcIjtcbiAgICB9XG4gICAgLy8gY29tcG9uZW50IHYtbW9kZWxcbiAgICBpZiAoZWwubW9kZWwpIHtcbiAgICAgIGRhdGEgKz0gXCJtb2RlbDp7dmFsdWU6XCIgKyAoZWwubW9kZWwudmFsdWUpICsgXCIsY2FsbGJhY2s6XCIgKyAoZWwubW9kZWwuY2FsbGJhY2spICsgXCIsZXhwcmVzc2lvbjpcIiArIChlbC5tb2RlbC5leHByZXNzaW9uKSArIFwifSxcIjtcbiAgICB9XG4gICAgLy8gaW5saW5lLXRlbXBsYXRlXG4gICAgaWYgKGVsLmlubGluZVRlbXBsYXRlKSB7XG4gICAgICB2YXIgaW5saW5lVGVtcGxhdGUgPSBnZW5JbmxpbmVUZW1wbGF0ZShlbCwgc3RhdGUpO1xuICAgICAgaWYgKGlubGluZVRlbXBsYXRlKSB7XG4gICAgICAgIGRhdGEgKz0gaW5saW5lVGVtcGxhdGUgKyBcIixcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZGF0YSA9IGRhdGEucmVwbGFjZSgvLCQvLCAnJykgKyAnfSc7XG4gICAgLy8gdi1iaW5kIGR5bmFtaWMgYXJndW1lbnQgd3JhcFxuICAgIC8vIHYtYmluZCB3aXRoIGR5bmFtaWMgYXJndW1lbnRzIG11c3QgYmUgYXBwbGllZCB1c2luZyB0aGUgc2FtZSB2LWJpbmQgb2JqZWN0XG4gICAgLy8gbWVyZ2UgaGVscGVyIHNvIHRoYXQgY2xhc3Mvc3R5bGUvbXVzdFVzZVByb3AgYXR0cnMgYXJlIGhhbmRsZWQgY29ycmVjdGx5LlxuICAgIGlmIChlbC5keW5hbWljQXR0cnMpIHtcbiAgICAgIGRhdGEgPSBcIl9iKFwiICsgZGF0YSArIFwiLFxcXCJcIiArIChlbC50YWcpICsgXCJcXFwiLFwiICsgKGdlblByb3BzKGVsLmR5bmFtaWNBdHRycykpICsgXCIpXCI7XG4gICAgfVxuICAgIC8vIHYtYmluZCBkYXRhIHdyYXBcbiAgICBpZiAoZWwud3JhcERhdGEpIHtcbiAgICAgIGRhdGEgPSBlbC53cmFwRGF0YShkYXRhKTtcbiAgICB9XG4gICAgLy8gdi1vbiBkYXRhIHdyYXBcbiAgICBpZiAoZWwud3JhcExpc3RlbmVycykge1xuICAgICAgZGF0YSA9IGVsLndyYXBMaXN0ZW5lcnMoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhXG4gIH1cblxuICBmdW5jdGlvbiBnZW5EaXJlY3RpdmVzIChlbCwgc3RhdGUpIHtcbiAgICB2YXIgZGlycyA9IGVsLmRpcmVjdGl2ZXM7XG4gICAgaWYgKCFkaXJzKSB7IHJldHVybiB9XG4gICAgdmFyIHJlcyA9ICdkaXJlY3RpdmVzOlsnO1xuICAgIHZhciBoYXNSdW50aW1lID0gZmFsc2U7XG4gICAgdmFyIGksIGwsIGRpciwgbmVlZFJ1bnRpbWU7XG4gICAgZm9yIChpID0gMCwgbCA9IGRpcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBkaXIgPSBkaXJzW2ldO1xuICAgICAgbmVlZFJ1bnRpbWUgPSB0cnVlO1xuICAgICAgdmFyIGdlbiA9IHN0YXRlLmRpcmVjdGl2ZXNbZGlyLm5hbWVdO1xuICAgICAgaWYgKGdlbikge1xuICAgICAgICAvLyBjb21waWxlLXRpbWUgZGlyZWN0aXZlIHRoYXQgbWFuaXB1bGF0ZXMgQVNULlxuICAgICAgICAvLyByZXR1cm5zIHRydWUgaWYgaXQgYWxzbyBuZWVkcyBhIHJ1bnRpbWUgY291bnRlcnBhcnQuXG4gICAgICAgIG5lZWRSdW50aW1lID0gISFnZW4oZWwsIGRpciwgc3RhdGUud2Fybik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZFJ1bnRpbWUpIHtcbiAgICAgICAgaGFzUnVudGltZSA9IHRydWU7XG4gICAgICAgIHJlcyArPSBcIntuYW1lOlxcXCJcIiArIChkaXIubmFtZSkgKyBcIlxcXCIscmF3TmFtZTpcXFwiXCIgKyAoZGlyLnJhd05hbWUpICsgXCJcXFwiXCIgKyAoZGlyLnZhbHVlID8gKFwiLHZhbHVlOihcIiArIChkaXIudmFsdWUpICsgXCIpLGV4cHJlc3Npb246XCIgKyAoSlNPTi5zdHJpbmdpZnkoZGlyLnZhbHVlKSkpIDogJycpICsgKGRpci5hcmcgPyAoXCIsYXJnOlwiICsgKGRpci5pc0R5bmFtaWNBcmcgPyBkaXIuYXJnIDogKFwiXFxcIlwiICsgKGRpci5hcmcpICsgXCJcXFwiXCIpKSkgOiAnJykgKyAoZGlyLm1vZGlmaWVycyA/IChcIixtb2RpZmllcnM6XCIgKyAoSlNPTi5zdHJpbmdpZnkoZGlyLm1vZGlmaWVycykpKSA6ICcnKSArIFwifSxcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhhc1J1bnRpbWUpIHtcbiAgICAgIHJldHVybiByZXMuc2xpY2UoMCwgLTEpICsgJ10nXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VuSW5saW5lVGVtcGxhdGUgKGVsLCBzdGF0ZSkge1xuICAgIHZhciBhc3QgPSBlbC5jaGlsZHJlblswXTtcbiAgICBpZiAoZWwuY2hpbGRyZW4ubGVuZ3RoICE9PSAxIHx8IGFzdC50eXBlICE9PSAxKSB7XG4gICAgICBzdGF0ZS53YXJuKFxuICAgICAgICAnSW5saW5lLXRlbXBsYXRlIGNvbXBvbmVudHMgbXVzdCBoYXZlIGV4YWN0bHkgb25lIGNoaWxkIGVsZW1lbnQuJyxcbiAgICAgICAgeyBzdGFydDogZWwuc3RhcnQgfVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGFzdCAmJiBhc3QudHlwZSA9PT0gMSkge1xuICAgICAgdmFyIGlubGluZVJlbmRlckZucyA9IGdlbmVyYXRlKGFzdCwgc3RhdGUub3B0aW9ucyk7XG4gICAgICByZXR1cm4gKFwiaW5saW5lVGVtcGxhdGU6e3JlbmRlcjpmdW5jdGlvbigpe1wiICsgKGlubGluZVJlbmRlckZucy5yZW5kZXIpICsgXCJ9LHN0YXRpY1JlbmRlckZuczpbXCIgKyAoaW5saW5lUmVuZGVyRm5zLnN0YXRpY1JlbmRlckZucy5tYXAoZnVuY3Rpb24gKGNvZGUpIHsgcmV0dXJuIChcImZ1bmN0aW9uKCl7XCIgKyBjb2RlICsgXCJ9XCIpOyB9KS5qb2luKCcsJykpICsgXCJdfVwiKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdlblNjb3BlZFNsb3RzIChcbiAgICBlbCxcbiAgICBzbG90cyxcbiAgICBzdGF0ZVxuICApIHtcbiAgICAvLyBieSBkZWZhdWx0IHNjb3BlZCBzbG90cyBhcmUgY29uc2lkZXJlZCBcInN0YWJsZVwiLCB0aGlzIGFsbG93cyBjaGlsZFxuICAgIC8vIGNvbXBvbmVudHMgd2l0aCBvbmx5IHNjb3BlZCBzbG90cyB0byBza2lwIGZvcmNlZCB1cGRhdGVzIGZyb20gcGFyZW50LlxuICAgIC8vIGJ1dCBpbiBzb21lIGNhc2VzIHdlIGhhdmUgdG8gYmFpbC1vdXQgb2YgdGhpcyBvcHRpbWl6YXRpb25cbiAgICAvLyBmb3IgZXhhbXBsZSBpZiB0aGUgc2xvdCBjb250YWlucyBkeW5hbWljIG5hbWVzLCBoYXMgdi1pZiBvciB2LWZvciBvbiB0aGVtLi4uXG4gICAgdmFyIG5lZWRzRm9yY2VVcGRhdGUgPSBlbC5mb3IgfHwgT2JqZWN0LmtleXMoc2xvdHMpLnNvbWUoZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIHNsb3QgPSBzbG90c1trZXldO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgc2xvdC5zbG90VGFyZ2V0RHluYW1pYyB8fFxuICAgICAgICBzbG90LmlmIHx8XG4gICAgICAgIHNsb3QuZm9yIHx8XG4gICAgICAgIGNvbnRhaW5zU2xvdENoaWxkKHNsb3QpIC8vIGlzIHBhc3NpbmcgZG93biBzbG90IGZyb20gcGFyZW50IHdoaWNoIG1heSBiZSBkeW5hbWljXG4gICAgICApXG4gICAgfSk7XG5cbiAgICAvLyAjOTUzNDogaWYgYSBjb21wb25lbnQgd2l0aCBzY29wZWQgc2xvdHMgaXMgaW5zaWRlIGEgY29uZGl0aW9uYWwgYnJhbmNoLFxuICAgIC8vIGl0J3MgcG9zc2libGUgZm9yIHRoZSBzYW1lIGNvbXBvbmVudCB0byBiZSByZXVzZWQgYnV0IHdpdGggZGlmZmVyZW50XG4gICAgLy8gY29tcGlsZWQgc2xvdCBjb250ZW50LiBUbyBhdm9pZCB0aGF0LCB3ZSBnZW5lcmF0ZSBhIHVuaXF1ZSBrZXkgYmFzZWQgb25cbiAgICAvLyB0aGUgZ2VuZXJhdGVkIGNvZGUgb2YgYWxsIHRoZSBzbG90IGNvbnRlbnRzLlxuICAgIHZhciBuZWVkc0tleSA9ICEhZWwuaWY7XG5cbiAgICAvLyBPUiB3aGVuIGl0IGlzIGluc2lkZSBhbm90aGVyIHNjb3BlZCBzbG90IG9yIHYtZm9yICh0aGUgcmVhY3Rpdml0eSBtYXkgYmVcbiAgICAvLyBkaXNjb25uZWN0ZWQgZHVlIHRvIHRoZSBpbnRlcm1lZGlhdGUgc2NvcGUgdmFyaWFibGUpXG4gICAgLy8gIzk0MzgsICM5NTA2XG4gICAgLy8gVE9ETzogdGhpcyBjYW4gYmUgZnVydGhlciBvcHRpbWl6ZWQgYnkgcHJvcGVybHkgYW5hbHl6aW5nIGluLXNjb3BlIGJpbmRpbmdzXG4gICAgLy8gYW5kIHNraXAgZm9yY2UgdXBkYXRpbmcgb25lcyB0aGF0IGRvIG5vdCBhY3R1YWxseSB1c2Ugc2NvcGUgdmFyaWFibGVzLlxuICAgIGlmICghbmVlZHNGb3JjZVVwZGF0ZSkge1xuICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudDtcbiAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIChwYXJlbnQuc2xvdFNjb3BlICYmIHBhcmVudC5zbG90U2NvcGUgIT09IGVtcHR5U2xvdFNjb3BlVG9rZW4pIHx8XG4gICAgICAgICAgcGFyZW50LmZvclxuICAgICAgICApIHtcbiAgICAgICAgICBuZWVkc0ZvcmNlVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJlbnQuaWYpIHtcbiAgICAgICAgICBuZWVkc0tleSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZ2VuZXJhdGVkU2xvdHMgPSBPYmplY3Qua2V5cyhzbG90cylcbiAgICAgIC5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gZ2VuU2NvcGVkU2xvdChzbG90c1trZXldLCBzdGF0ZSk7IH0pXG4gICAgICAuam9pbignLCcpO1xuXG4gICAgcmV0dXJuIChcInNjb3BlZFNsb3RzOl91KFtcIiArIGdlbmVyYXRlZFNsb3RzICsgXCJdXCIgKyAobmVlZHNGb3JjZVVwZGF0ZSA/IFwiLG51bGwsdHJ1ZVwiIDogXCJcIikgKyAoIW5lZWRzRm9yY2VVcGRhdGUgJiYgbmVlZHNLZXkgPyAoXCIsbnVsbCxmYWxzZSxcIiArIChoYXNoKGdlbmVyYXRlZFNsb3RzKSkpIDogXCJcIikgKyBcIilcIilcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc2goc3RyKSB7XG4gICAgdmFyIGhhc2ggPSA1MzgxO1xuICAgIHZhciBpID0gc3RyLmxlbmd0aDtcbiAgICB3aGlsZShpKSB7XG4gICAgICBoYXNoID0gKGhhc2ggKiAzMykgXiBzdHIuY2hhckNvZGVBdCgtLWkpO1xuICAgIH1cbiAgICByZXR1cm4gaGFzaCA+Pj4gMFxuICB9XG5cbiAgZnVuY3Rpb24gY29udGFpbnNTbG90Q2hpbGQgKGVsKSB7XG4gICAgaWYgKGVsLnR5cGUgPT09IDEpIHtcbiAgICAgIGlmIChlbC50YWcgPT09ICdzbG90Jykge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVsLmNoaWxkcmVuLnNvbWUoY29udGFpbnNTbG90Q2hpbGQpXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VuU2NvcGVkU2xvdCAoXG4gICAgZWwsXG4gICAgc3RhdGVcbiAgKSB7XG4gICAgdmFyIGlzTGVnYWN5U3ludGF4ID0gZWwuYXR0cnNNYXBbJ3Nsb3Qtc2NvcGUnXTtcbiAgICBpZiAoZWwuaWYgJiYgIWVsLmlmUHJvY2Vzc2VkICYmICFpc0xlZ2FjeVN5bnRheCkge1xuICAgICAgcmV0dXJuIGdlbklmKGVsLCBzdGF0ZSwgZ2VuU2NvcGVkU2xvdCwgXCJudWxsXCIpXG4gICAgfVxuICAgIGlmIChlbC5mb3IgJiYgIWVsLmZvclByb2Nlc3NlZCkge1xuICAgICAgcmV0dXJuIGdlbkZvcihlbCwgc3RhdGUsIGdlblNjb3BlZFNsb3QpXG4gICAgfVxuICAgIHZhciBzbG90U2NvcGUgPSBlbC5zbG90U2NvcGUgPT09IGVtcHR5U2xvdFNjb3BlVG9rZW5cbiAgICAgID8gXCJcIlxuICAgICAgOiBTdHJpbmcoZWwuc2xvdFNjb3BlKTtcbiAgICB2YXIgZm4gPSBcImZ1bmN0aW9uKFwiICsgc2xvdFNjb3BlICsgXCIpe1wiICtcbiAgICAgIFwicmV0dXJuIFwiICsgKGVsLnRhZyA9PT0gJ3RlbXBsYXRlJ1xuICAgICAgICA/IGVsLmlmICYmIGlzTGVnYWN5U3ludGF4XG4gICAgICAgICAgPyAoXCIoXCIgKyAoZWwuaWYpICsgXCIpP1wiICsgKGdlbkNoaWxkcmVuKGVsLCBzdGF0ZSkgfHwgJ3VuZGVmaW5lZCcpICsgXCI6dW5kZWZpbmVkXCIpXG4gICAgICAgICAgOiBnZW5DaGlsZHJlbihlbCwgc3RhdGUpIHx8ICd1bmRlZmluZWQnXG4gICAgICAgIDogZ2VuRWxlbWVudChlbCwgc3RhdGUpKSArIFwifVwiO1xuICAgIC8vIHJldmVyc2UgcHJveHkgdi1zbG90IHdpdGhvdXQgc2NvcGUgb24gdGhpcy4kc2xvdHNcbiAgICB2YXIgcmV2ZXJzZVByb3h5ID0gc2xvdFNjb3BlID8gXCJcIiA6IFwiLHByb3h5OnRydWVcIjtcbiAgICByZXR1cm4gKFwie2tleTpcIiArIChlbC5zbG90VGFyZ2V0IHx8IFwiXFxcImRlZmF1bHRcXFwiXCIpICsgXCIsZm46XCIgKyBmbiArIHJldmVyc2VQcm94eSArIFwifVwiKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VuQ2hpbGRyZW4gKFxuICAgIGVsLFxuICAgIHN0YXRlLFxuICAgIGNoZWNrU2tpcCxcbiAgICBhbHRHZW5FbGVtZW50LFxuICAgIGFsdEdlbk5vZGVcbiAgKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gZWwuY2hpbGRyZW47XG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgdmFyIGVsJDEgPSBjaGlsZHJlblswXTtcbiAgICAgIC8vIG9wdGltaXplIHNpbmdsZSB2LWZvclxuICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJlxuICAgICAgICBlbCQxLmZvciAmJlxuICAgICAgICBlbCQxLnRhZyAhPT0gJ3RlbXBsYXRlJyAmJlxuICAgICAgICBlbCQxLnRhZyAhPT0gJ3Nsb3QnXG4gICAgICApIHtcbiAgICAgICAgdmFyIG5vcm1hbGl6YXRpb25UeXBlID0gY2hlY2tTa2lwXG4gICAgICAgICAgPyBzdGF0ZS5tYXliZUNvbXBvbmVudChlbCQxKSA/IFwiLDFcIiA6IFwiLDBcIlxuICAgICAgICAgIDogXCJcIjtcbiAgICAgICAgcmV0dXJuIChcIlwiICsgKChhbHRHZW5FbGVtZW50IHx8IGdlbkVsZW1lbnQpKGVsJDEsIHN0YXRlKSkgKyBub3JtYWxpemF0aW9uVHlwZSlcbiAgICAgIH1cbiAgICAgIHZhciBub3JtYWxpemF0aW9uVHlwZSQxID0gY2hlY2tTa2lwXG4gICAgICAgID8gZ2V0Tm9ybWFsaXphdGlvblR5cGUoY2hpbGRyZW4sIHN0YXRlLm1heWJlQ29tcG9uZW50KVxuICAgICAgICA6IDA7XG4gICAgICB2YXIgZ2VuID0gYWx0R2VuTm9kZSB8fCBnZW5Ob2RlO1xuICAgICAgcmV0dXJuIChcIltcIiArIChjaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGdlbihjLCBzdGF0ZSk7IH0pLmpvaW4oJywnKSkgKyBcIl1cIiArIChub3JtYWxpemF0aW9uVHlwZSQxID8gKFwiLFwiICsgbm9ybWFsaXphdGlvblR5cGUkMSkgOiAnJykpXG4gICAgfVxuICB9XG5cbiAgLy8gZGV0ZXJtaW5lIHRoZSBub3JtYWxpemF0aW9uIG5lZWRlZCBmb3IgdGhlIGNoaWxkcmVuIGFycmF5LlxuICAvLyAwOiBubyBub3JtYWxpemF0aW9uIG5lZWRlZFxuICAvLyAxOiBzaW1wbGUgbm9ybWFsaXphdGlvbiBuZWVkZWQgKHBvc3NpYmxlIDEtbGV2ZWwgZGVlcCBuZXN0ZWQgYXJyYXkpXG4gIC8vIDI6IGZ1bGwgbm9ybWFsaXphdGlvbiBuZWVkZWRcbiAgZnVuY3Rpb24gZ2V0Tm9ybWFsaXphdGlvblR5cGUgKFxuICAgIGNoaWxkcmVuLFxuICAgIG1heWJlQ29tcG9uZW50XG4gICkge1xuICAgIHZhciByZXMgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBlbCA9IGNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGVsLnR5cGUgIT09IDEpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkc05vcm1hbGl6YXRpb24oZWwpIHx8XG4gICAgICAgICAgKGVsLmlmQ29uZGl0aW9ucyAmJiBlbC5pZkNvbmRpdGlvbnMuc29tZShmdW5jdGlvbiAoYykgeyByZXR1cm4gbmVlZHNOb3JtYWxpemF0aW9uKGMuYmxvY2spOyB9KSkpIHtcbiAgICAgICAgcmVzID0gMjtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGlmIChtYXliZUNvbXBvbmVudChlbCkgfHxcbiAgICAgICAgICAoZWwuaWZDb25kaXRpb25zICYmIGVsLmlmQ29uZGl0aW9ucy5zb21lKGZ1bmN0aW9uIChjKSB7IHJldHVybiBtYXliZUNvbXBvbmVudChjLmJsb2NrKTsgfSkpKSB7XG4gICAgICAgIHJlcyA9IDE7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIG5lZWRzTm9ybWFsaXphdGlvbiAoZWwpIHtcbiAgICByZXR1cm4gZWwuZm9yICE9PSB1bmRlZmluZWQgfHwgZWwudGFnID09PSAndGVtcGxhdGUnIHx8IGVsLnRhZyA9PT0gJ3Nsb3QnXG4gIH1cblxuICBmdW5jdGlvbiBnZW5Ob2RlIChub2RlLCBzdGF0ZSkge1xuICAgIGlmIChub2RlLnR5cGUgPT09IDEpIHtcbiAgICAgIHJldHVybiBnZW5FbGVtZW50KG5vZGUsIHN0YXRlKVxuICAgIH0gZWxzZSBpZiAobm9kZS50eXBlID09PSAzICYmIG5vZGUuaXNDb21tZW50KSB7XG4gICAgICByZXR1cm4gZ2VuQ29tbWVudChub2RlKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZ2VuVGV4dChub2RlKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdlblRleHQgKHRleHQpIHtcbiAgICByZXR1cm4gKFwiX3YoXCIgKyAodGV4dC50eXBlID09PSAyXG4gICAgICA/IHRleHQuZXhwcmVzc2lvbiAvLyBubyBuZWVkIGZvciAoKSBiZWNhdXNlIGFscmVhZHkgd3JhcHBlZCBpbiBfcygpXG4gICAgICA6IHRyYW5zZm9ybVNwZWNpYWxOZXdsaW5lcyhKU09OLnN0cmluZ2lmeSh0ZXh0LnRleHQpKSkgKyBcIilcIilcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbkNvbW1lbnQgKGNvbW1lbnQpIHtcbiAgICByZXR1cm4gKFwiX2UoXCIgKyAoSlNPTi5zdHJpbmdpZnkoY29tbWVudC50ZXh0KSkgKyBcIilcIilcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlblNsb3QgKGVsLCBzdGF0ZSkge1xuICAgIHZhciBzbG90TmFtZSA9IGVsLnNsb3ROYW1lIHx8ICdcImRlZmF1bHRcIic7XG4gICAgdmFyIGNoaWxkcmVuID0gZ2VuQ2hpbGRyZW4oZWwsIHN0YXRlKTtcbiAgICB2YXIgcmVzID0gXCJfdChcIiArIHNsb3ROYW1lICsgKGNoaWxkcmVuID8gKFwiLFwiICsgY2hpbGRyZW4pIDogJycpO1xuICAgIHZhciBhdHRycyA9IGVsLmF0dHJzIHx8IGVsLmR5bmFtaWNBdHRyc1xuICAgICAgPyBnZW5Qcm9wcygoZWwuYXR0cnMgfHwgW10pLmNvbmNhdChlbC5keW5hbWljQXR0cnMgfHwgW10pLm1hcChmdW5jdGlvbiAoYXR0cikgeyByZXR1cm4gKHtcbiAgICAgICAgICAvLyBzbG90IHByb3BzIGFyZSBjYW1lbGl6ZWRcbiAgICAgICAgICBuYW1lOiBjYW1lbGl6ZShhdHRyLm5hbWUpLFxuICAgICAgICAgIHZhbHVlOiBhdHRyLnZhbHVlLFxuICAgICAgICAgIGR5bmFtaWM6IGF0dHIuZHluYW1pY1xuICAgICAgICB9KTsgfSkpXG4gICAgICA6IG51bGw7XG4gICAgdmFyIGJpbmQkJDEgPSBlbC5hdHRyc01hcFsndi1iaW5kJ107XG4gICAgaWYgKChhdHRycyB8fCBiaW5kJCQxKSAmJiAhY2hpbGRyZW4pIHtcbiAgICAgIHJlcyArPSBcIixudWxsXCI7XG4gICAgfVxuICAgIGlmIChhdHRycykge1xuICAgICAgcmVzICs9IFwiLFwiICsgYXR0cnM7XG4gICAgfVxuICAgIGlmIChiaW5kJCQxKSB7XG4gICAgICByZXMgKz0gKGF0dHJzID8gJycgOiAnLG51bGwnKSArIFwiLFwiICsgYmluZCQkMTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcyArICcpJ1xuICB9XG5cbiAgLy8gY29tcG9uZW50TmFtZSBpcyBlbC5jb21wb25lbnQsIHRha2UgaXQgYXMgYXJndW1lbnQgdG8gc2h1biBmbG93J3MgcGVzc2ltaXN0aWMgcmVmaW5lbWVudFxuICBmdW5jdGlvbiBnZW5Db21wb25lbnQgKFxuICAgIGNvbXBvbmVudE5hbWUsXG4gICAgZWwsXG4gICAgc3RhdGVcbiAgKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gZWwuaW5saW5lVGVtcGxhdGUgPyBudWxsIDogZ2VuQ2hpbGRyZW4oZWwsIHN0YXRlLCB0cnVlKTtcbiAgICByZXR1cm4gKFwiX2MoXCIgKyBjb21wb25lbnROYW1lICsgXCIsXCIgKyAoZ2VuRGF0YSQyKGVsLCBzdGF0ZSkpICsgKGNoaWxkcmVuID8gKFwiLFwiICsgY2hpbGRyZW4pIDogJycpICsgXCIpXCIpXG4gIH1cblxuICBmdW5jdGlvbiBnZW5Qcm9wcyAocHJvcHMpIHtcbiAgICB2YXIgc3RhdGljUHJvcHMgPSBcIlwiO1xuICAgIHZhciBkeW5hbWljUHJvcHMgPSBcIlwiO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwcm9wID0gcHJvcHNbaV07XG4gICAgICB2YXIgdmFsdWUgPSB0cmFuc2Zvcm1TcGVjaWFsTmV3bGluZXMocHJvcC52YWx1ZSk7XG4gICAgICBpZiAocHJvcC5keW5hbWljKSB7XG4gICAgICAgIGR5bmFtaWNQcm9wcyArPSAocHJvcC5uYW1lKSArIFwiLFwiICsgdmFsdWUgKyBcIixcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRpY1Byb3BzICs9IFwiXFxcIlwiICsgKHByb3AubmFtZSkgKyBcIlxcXCI6XCIgKyB2YWx1ZSArIFwiLFwiO1xuICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWNQcm9wcyA9IFwie1wiICsgKHN0YXRpY1Byb3BzLnNsaWNlKDAsIC0xKSkgKyBcIn1cIjtcbiAgICBpZiAoZHluYW1pY1Byb3BzKSB7XG4gICAgICByZXR1cm4gKFwiX2QoXCIgKyBzdGF0aWNQcm9wcyArIFwiLFtcIiArIChkeW5hbWljUHJvcHMuc2xpY2UoMCwgLTEpKSArIFwiXSlcIilcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN0YXRpY1Byb3BzXG4gICAgfVxuICB9XG5cbiAgLy8gIzM4OTUsICM0MjY4XG4gIGZ1bmN0aW9uIHRyYW5zZm9ybVNwZWNpYWxOZXdsaW5lcyAodGV4dCkge1xuICAgIHJldHVybiB0ZXh0XG4gICAgICAucmVwbGFjZSgvXFx1MjAyOC9nLCAnXFxcXHUyMDI4JylcbiAgICAgIC5yZXBsYWNlKC9cXHUyMDI5L2csICdcXFxcdTIwMjknKVxuICB9XG5cbiAgLyogICovXG5cblxuXG4gIC8vIHRoZXNlIGtleXdvcmRzIHNob3VsZCBub3QgYXBwZWFyIGluc2lkZSBleHByZXNzaW9ucywgYnV0IG9wZXJhdG9ycyBsaWtlXG4gIC8vIHR5cGVvZiwgaW5zdGFuY2VvZiBhbmQgaW4gYXJlIGFsbG93ZWRcbiAgdmFyIHByb2hpYml0ZWRLZXl3b3JkUkUgPSBuZXcgUmVnRXhwKCdcXFxcYicgKyAoXG4gICAgJ2RvLGlmLGZvcixsZXQsbmV3LHRyeSx2YXIsY2FzZSxlbHNlLHdpdGgsYXdhaXQsYnJlYWssY2F0Y2gsY2xhc3MsY29uc3QsJyArXG4gICAgJ3N1cGVyLHRocm93LHdoaWxlLHlpZWxkLGRlbGV0ZSxleHBvcnQsaW1wb3J0LHJldHVybixzd2l0Y2gsZGVmYXVsdCwnICtcbiAgICAnZXh0ZW5kcyxmaW5hbGx5LGNvbnRpbnVlLGRlYnVnZ2VyLGZ1bmN0aW9uLGFyZ3VtZW50cydcbiAgKS5zcGxpdCgnLCcpLmpvaW4oJ1xcXFxifFxcXFxiJykgKyAnXFxcXGInKTtcblxuICAvLyB0aGVzZSB1bmFyeSBvcGVyYXRvcnMgc2hvdWxkIG5vdCBiZSB1c2VkIGFzIHByb3BlcnR5L21ldGhvZCBuYW1lc1xuICB2YXIgdW5hcnlPcGVyYXRvcnNSRSA9IG5ldyBSZWdFeHAoJ1xcXFxiJyArIChcbiAgICAnZGVsZXRlLHR5cGVvZix2b2lkJ1xuICApLnNwbGl0KCcsJykuam9pbignXFxcXHMqXFxcXChbXlxcXFwpXSpcXFxcKXxcXFxcYicpICsgJ1xcXFxzKlxcXFwoW15cXFxcKV0qXFxcXCknKTtcblxuICAvLyBzdHJpcCBzdHJpbmdzIGluIGV4cHJlc3Npb25zXG4gIHZhciBzdHJpcFN0cmluZ1JFID0gLycoPzpbXidcXFxcXXxcXFxcLikqJ3xcIig/OlteXCJcXFxcXXxcXFxcLikqXCJ8YCg/OlteYFxcXFxdfFxcXFwuKSpcXCRcXHt8XFx9KD86W15gXFxcXF18XFxcXC4pKmB8YCg/OlteYFxcXFxdfFxcXFwuKSpgL2c7XG5cbiAgLy8gZGV0ZWN0IHByb2JsZW1hdGljIGV4cHJlc3Npb25zIGluIGEgdGVtcGxhdGVcbiAgZnVuY3Rpb24gZGV0ZWN0RXJyb3JzIChhc3QsIHdhcm4pIHtcbiAgICBpZiAoYXN0KSB7XG4gICAgICBjaGVja05vZGUoYXN0LCB3YXJuKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja05vZGUgKG5vZGUsIHdhcm4pIHtcbiAgICBpZiAobm9kZS50eXBlID09PSAxKSB7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG5vZGUuYXR0cnNNYXApIHtcbiAgICAgICAgaWYgKGRpclJFLnRlc3QobmFtZSkpIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBub2RlLmF0dHJzTWFwW25hbWVdO1xuICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIHJhbmdlID0gbm9kZS5yYXdBdHRyc01hcFtuYW1lXTtcbiAgICAgICAgICAgIGlmIChuYW1lID09PSAndi1mb3InKSB7XG4gICAgICAgICAgICAgIGNoZWNrRm9yKG5vZGUsIChcInYtZm9yPVxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCIpLCB3YXJuLCByYW5nZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICd2LXNsb3QnIHx8IG5hbWVbMF0gPT09ICcjJykge1xuICAgICAgICAgICAgICBjaGVja0Z1bmN0aW9uUGFyYW1ldGVyRXhwcmVzc2lvbih2YWx1ZSwgKG5hbWUgKyBcIj1cXFwiXCIgKyB2YWx1ZSArIFwiXFxcIlwiKSwgd2FybiwgcmFuZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvblJFLnRlc3QobmFtZSkpIHtcbiAgICAgICAgICAgICAgY2hlY2tFdmVudCh2YWx1ZSwgKG5hbWUgKyBcIj1cXFwiXCIgKyB2YWx1ZSArIFwiXFxcIlwiKSwgd2FybiwgcmFuZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2hlY2tFeHByZXNzaW9uKHZhbHVlLCAobmFtZSArIFwiPVxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCIpLCB3YXJuLCByYW5nZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjaGVja05vZGUobm9kZS5jaGlsZHJlbltpXSwgd2Fybik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUudHlwZSA9PT0gMikge1xuICAgICAgY2hlY2tFeHByZXNzaW9uKG5vZGUuZXhwcmVzc2lvbiwgbm9kZS50ZXh0LCB3YXJuLCBub2RlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0V2ZW50IChleHAsIHRleHQsIHdhcm4sIHJhbmdlKSB7XG4gICAgdmFyIHN0cmlwcGVkID0gZXhwLnJlcGxhY2Uoc3RyaXBTdHJpbmdSRSwgJycpO1xuICAgIHZhciBrZXl3b3JkTWF0Y2ggPSBzdHJpcHBlZC5tYXRjaCh1bmFyeU9wZXJhdG9yc1JFKTtcbiAgICBpZiAoa2V5d29yZE1hdGNoICYmIHN0cmlwcGVkLmNoYXJBdChrZXl3b3JkTWF0Y2guaW5kZXggLSAxKSAhPT0gJyQnKSB7XG4gICAgICB3YXJuKFxuICAgICAgICBcImF2b2lkIHVzaW5nIEphdmFTY3JpcHQgdW5hcnkgb3BlcmF0b3IgYXMgcHJvcGVydHkgbmFtZTogXCIgK1xuICAgICAgICBcIlxcXCJcIiArIChrZXl3b3JkTWF0Y2hbMF0pICsgXCJcXFwiIGluIGV4cHJlc3Npb24gXCIgKyAodGV4dC50cmltKCkpLFxuICAgICAgICByYW5nZVxuICAgICAgKTtcbiAgICB9XG4gICAgY2hlY2tFeHByZXNzaW9uKGV4cCwgdGV4dCwgd2FybiwgcmFuZ2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tGb3IgKG5vZGUsIHRleHQsIHdhcm4sIHJhbmdlKSB7XG4gICAgY2hlY2tFeHByZXNzaW9uKG5vZGUuZm9yIHx8ICcnLCB0ZXh0LCB3YXJuLCByYW5nZSk7XG4gICAgY2hlY2tJZGVudGlmaWVyKG5vZGUuYWxpYXMsICd2LWZvciBhbGlhcycsIHRleHQsIHdhcm4sIHJhbmdlKTtcbiAgICBjaGVja0lkZW50aWZpZXIobm9kZS5pdGVyYXRvcjEsICd2LWZvciBpdGVyYXRvcicsIHRleHQsIHdhcm4sIHJhbmdlKTtcbiAgICBjaGVja0lkZW50aWZpZXIobm9kZS5pdGVyYXRvcjIsICd2LWZvciBpdGVyYXRvcicsIHRleHQsIHdhcm4sIHJhbmdlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrSWRlbnRpZmllciAoXG4gICAgaWRlbnQsXG4gICAgdHlwZSxcbiAgICB0ZXh0LFxuICAgIHdhcm4sXG4gICAgcmFuZ2VcbiAgKSB7XG4gICAgaWYgKHR5cGVvZiBpZGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ldyBGdW5jdGlvbigoXCJ2YXIgXCIgKyBpZGVudCArIFwiPV9cIikpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB3YXJuKChcImludmFsaWQgXCIgKyB0eXBlICsgXCIgXFxcIlwiICsgaWRlbnQgKyBcIlxcXCIgaW4gZXhwcmVzc2lvbjogXCIgKyAodGV4dC50cmltKCkpKSwgcmFuZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrRXhwcmVzc2lvbiAoZXhwLCB0ZXh0LCB3YXJuLCByYW5nZSkge1xuICAgIHRyeSB7XG4gICAgICBuZXcgRnVuY3Rpb24oKFwicmV0dXJuIFwiICsgZXhwKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdmFyIGtleXdvcmRNYXRjaCA9IGV4cC5yZXBsYWNlKHN0cmlwU3RyaW5nUkUsICcnKS5tYXRjaChwcm9oaWJpdGVkS2V5d29yZFJFKTtcbiAgICAgIGlmIChrZXl3b3JkTWF0Y2gpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICBcImF2b2lkIHVzaW5nIEphdmFTY3JpcHQga2V5d29yZCBhcyBwcm9wZXJ0eSBuYW1lOiBcIiArXG4gICAgICAgICAgXCJcXFwiXCIgKyAoa2V5d29yZE1hdGNoWzBdKSArIFwiXFxcIlxcbiAgUmF3IGV4cHJlc3Npb246IFwiICsgKHRleHQudHJpbSgpKSxcbiAgICAgICAgICByYW5nZVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICBcImludmFsaWQgZXhwcmVzc2lvbjogXCIgKyAoZS5tZXNzYWdlKSArIFwiIGluXFxuXFxuXCIgK1xuICAgICAgICAgIFwiICAgIFwiICsgZXhwICsgXCJcXG5cXG5cIiArXG4gICAgICAgICAgXCIgIFJhdyBleHByZXNzaW9uOiBcIiArICh0ZXh0LnRyaW0oKSkgKyBcIlxcblwiLFxuICAgICAgICAgIHJhbmdlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tGdW5jdGlvblBhcmFtZXRlckV4cHJlc3Npb24gKGV4cCwgdGV4dCwgd2FybiwgcmFuZ2UpIHtcbiAgICB0cnkge1xuICAgICAgbmV3IEZ1bmN0aW9uKGV4cCwgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgIFwiaW52YWxpZCBmdW5jdGlvbiBwYXJhbWV0ZXIgZXhwcmVzc2lvbjogXCIgKyAoZS5tZXNzYWdlKSArIFwiIGluXFxuXFxuXCIgK1xuICAgICAgICBcIiAgICBcIiArIGV4cCArIFwiXFxuXFxuXCIgK1xuICAgICAgICBcIiAgUmF3IGV4cHJlc3Npb246IFwiICsgKHRleHQudHJpbSgpKSArIFwiXFxuXCIsXG4gICAgICAgIHJhbmdlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qICAqL1xuXG4gIHZhciByYW5nZSA9IDI7XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVDb2RlRnJhbWUgKFxuICAgIHNvdXJjZSxcbiAgICBzdGFydCxcbiAgICBlbmRcbiAgKSB7XG4gICAgaWYgKCBzdGFydCA9PT0gdm9pZCAwICkgc3RhcnQgPSAwO1xuICAgIGlmICggZW5kID09PSB2b2lkIDAgKSBlbmQgPSBzb3VyY2UubGVuZ3RoO1xuXG4gICAgdmFyIGxpbmVzID0gc291cmNlLnNwbGl0KC9cXHI/XFxuLyk7XG4gICAgdmFyIGNvdW50ID0gMDtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgY291bnQgKz0gbGluZXNbaV0ubGVuZ3RoICsgMTtcbiAgICAgIGlmIChjb3VudCA+PSBzdGFydCkge1xuICAgICAgICBmb3IgKHZhciBqID0gaSAtIHJhbmdlOyBqIDw9IGkgKyByYW5nZSB8fCBlbmQgPiBjb3VudDsgaisrKSB7XG4gICAgICAgICAgaWYgKGogPCAwIHx8IGogPj0gbGluZXMubGVuZ3RoKSB7IGNvbnRpbnVlIH1cbiAgICAgICAgICByZXMucHVzaCgoXCJcIiArIChqICsgMSkgKyAocmVwZWF0JDEoXCIgXCIsIDMgLSBTdHJpbmcoaiArIDEpLmxlbmd0aCkpICsgXCJ8ICBcIiArIChsaW5lc1tqXSkpKTtcbiAgICAgICAgICB2YXIgbGluZUxlbmd0aCA9IGxpbmVzW2pdLmxlbmd0aDtcbiAgICAgICAgICBpZiAoaiA9PT0gaSkge1xuICAgICAgICAgICAgLy8gcHVzaCB1bmRlcmxpbmVcbiAgICAgICAgICAgIHZhciBwYWQgPSBzdGFydCAtIChjb3VudCAtIGxpbmVMZW5ndGgpICsgMTtcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSBlbmQgPiBjb3VudCA/IGxpbmVMZW5ndGggLSBwYWQgOiBlbmQgLSBzdGFydDtcbiAgICAgICAgICAgIHJlcy5wdXNoKFwiICAgfCAgXCIgKyByZXBlYXQkMShcIiBcIiwgcGFkKSArIHJlcGVhdCQxKFwiXlwiLCBsZW5ndGgpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGogPiBpKSB7XG4gICAgICAgICAgICBpZiAoZW5kID4gY291bnQpIHtcbiAgICAgICAgICAgICAgdmFyIGxlbmd0aCQxID0gTWF0aC5taW4oZW5kIC0gY291bnQsIGxpbmVMZW5ndGgpO1xuICAgICAgICAgICAgICByZXMucHVzaChcIiAgIHwgIFwiICsgcmVwZWF0JDEoXCJeXCIsIGxlbmd0aCQxKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudCArPSBsaW5lTGVuZ3RoICsgMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qb2luKCdcXG4nKVxuICB9XG5cbiAgZnVuY3Rpb24gcmVwZWF0JDEgKHN0ciwgbikge1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICBpZiAobiA+IDApIHtcbiAgICAgIHdoaWxlICh0cnVlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgaWYgKG4gJiAxKSB7IHJlc3VsdCArPSBzdHI7IH1cbiAgICAgICAgbiA+Pj49IDE7XG4gICAgICAgIGlmIChuIDw9IDApIHsgYnJlYWsgfVxuICAgICAgICBzdHIgKz0gc3RyO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICAvKiAgKi9cblxuXG5cbiAgZnVuY3Rpb24gY3JlYXRlRnVuY3Rpb24gKGNvZGUsIGVycm9ycykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKGNvZGUpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBlcnJvcnMucHVzaCh7IGVycjogZXJyLCBjb2RlOiBjb2RlIH0pO1xuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVDb21waWxlVG9GdW5jdGlvbkZuIChjb21waWxlKSB7XG4gICAgdmFyIGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiBjb21waWxlVG9GdW5jdGlvbnMgKFxuICAgICAgdGVtcGxhdGUsXG4gICAgICBvcHRpb25zLFxuICAgICAgdm1cbiAgICApIHtcbiAgICAgIG9wdGlvbnMgPSBleHRlbmQoe30sIG9wdGlvbnMpO1xuICAgICAgdmFyIHdhcm4kJDEgPSBvcHRpb25zLndhcm4gfHwgd2FybjtcbiAgICAgIGRlbGV0ZSBvcHRpb25zLndhcm47XG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAge1xuICAgICAgICAvLyBkZXRlY3QgcG9zc2libGUgQ1NQIHJlc3RyaWN0aW9uXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gMScpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgaWYgKGUudG9TdHJpbmcoKS5tYXRjaCgvdW5zYWZlLWV2YWx8Q1NQLykpIHtcbiAgICAgICAgICAgIHdhcm4kJDEoXG4gICAgICAgICAgICAgICdJdCBzZWVtcyB5b3UgYXJlIHVzaW5nIHRoZSBzdGFuZGFsb25lIGJ1aWxkIG9mIFZ1ZS5qcyBpbiBhbiAnICtcbiAgICAgICAgICAgICAgJ2Vudmlyb25tZW50IHdpdGggQ29udGVudCBTZWN1cml0eSBQb2xpY3kgdGhhdCBwcm9oaWJpdHMgdW5zYWZlLWV2YWwuICcgK1xuICAgICAgICAgICAgICAnVGhlIHRlbXBsYXRlIGNvbXBpbGVyIGNhbm5vdCB3b3JrIGluIHRoaXMgZW52aXJvbm1lbnQuIENvbnNpZGVyICcgK1xuICAgICAgICAgICAgICAncmVsYXhpbmcgdGhlIHBvbGljeSB0byBhbGxvdyB1bnNhZmUtZXZhbCBvciBwcmUtY29tcGlsaW5nIHlvdXIgJyArXG4gICAgICAgICAgICAgICd0ZW1wbGF0ZXMgaW50byByZW5kZXIgZnVuY3Rpb25zLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGNoZWNrIGNhY2hlXG4gICAgICB2YXIga2V5ID0gb3B0aW9ucy5kZWxpbWl0ZXJzXG4gICAgICAgID8gU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVycykgKyB0ZW1wbGF0ZVxuICAgICAgICA6IHRlbXBsYXRlO1xuICAgICAgaWYgKGNhY2hlW2tleV0pIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlW2tleV1cbiAgICAgIH1cblxuICAgICAgLy8gY29tcGlsZVxuICAgICAgdmFyIGNvbXBpbGVkID0gY29tcGlsZSh0ZW1wbGF0ZSwgb3B0aW9ucyk7XG5cbiAgICAgIC8vIGNoZWNrIGNvbXBpbGF0aW9uIGVycm9ycy90aXBzXG4gICAgICB7XG4gICAgICAgIGlmIChjb21waWxlZC5lcnJvcnMgJiYgY29tcGlsZWQuZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChvcHRpb25zLm91dHB1dFNvdXJjZVJhbmdlKSB7XG4gICAgICAgICAgICBjb21waWxlZC5lcnJvcnMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICB3YXJuJCQxKFxuICAgICAgICAgICAgICAgIFwiRXJyb3IgY29tcGlsaW5nIHRlbXBsYXRlOlxcblxcblwiICsgKGUubXNnKSArIFwiXFxuXFxuXCIgK1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlQ29kZUZyYW1lKHRlbXBsYXRlLCBlLnN0YXJ0LCBlLmVuZCksXG4gICAgICAgICAgICAgICAgdm1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3YXJuJCQxKFxuICAgICAgICAgICAgICBcIkVycm9yIGNvbXBpbGluZyB0ZW1wbGF0ZTpcXG5cXG5cIiArIHRlbXBsYXRlICsgXCJcXG5cXG5cIiArXG4gICAgICAgICAgICAgIGNvbXBpbGVkLmVycm9ycy5tYXAoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIChcIi0gXCIgKyBlKTsgfSkuam9pbignXFxuJykgKyAnXFxuJyxcbiAgICAgICAgICAgICAgdm1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb21waWxlZC50aXBzICYmIGNvbXBpbGVkLnRpcHMubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMub3V0cHV0U291cmNlUmFuZ2UpIHtcbiAgICAgICAgICAgIGNvbXBpbGVkLnRpcHMuZm9yRWFjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gdGlwKGUubXNnLCB2bSk7IH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb21waWxlZC50aXBzLmZvckVhY2goZnVuY3Rpb24gKG1zZykgeyByZXR1cm4gdGlwKG1zZywgdm0pOyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gdHVybiBjb2RlIGludG8gZnVuY3Rpb25zXG4gICAgICB2YXIgcmVzID0ge307XG4gICAgICB2YXIgZm5HZW5FcnJvcnMgPSBbXTtcbiAgICAgIHJlcy5yZW5kZXIgPSBjcmVhdGVGdW5jdGlvbihjb21waWxlZC5yZW5kZXIsIGZuR2VuRXJyb3JzKTtcbiAgICAgIHJlcy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZC5zdGF0aWNSZW5kZXJGbnMubWFwKGZ1bmN0aW9uIChjb2RlKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVGdW5jdGlvbihjb2RlLCBmbkdlbkVycm9ycylcbiAgICAgIH0pO1xuXG4gICAgICAvLyBjaGVjayBmdW5jdGlvbiBnZW5lcmF0aW9uIGVycm9ycy5cbiAgICAgIC8vIHRoaXMgc2hvdWxkIG9ubHkgaGFwcGVuIGlmIHRoZXJlIGlzIGEgYnVnIGluIHRoZSBjb21waWxlciBpdHNlbGYuXG4gICAgICAvLyBtb3N0bHkgZm9yIGNvZGVnZW4gZGV2ZWxvcG1lbnQgdXNlXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIHtcbiAgICAgICAgaWYgKCghY29tcGlsZWQuZXJyb3JzIHx8ICFjb21waWxlZC5lcnJvcnMubGVuZ3RoKSAmJiBmbkdlbkVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICB3YXJuJCQxKFxuICAgICAgICAgICAgXCJGYWlsZWQgdG8gZ2VuZXJhdGUgcmVuZGVyIGZ1bmN0aW9uOlxcblxcblwiICtcbiAgICAgICAgICAgIGZuR2VuRXJyb3JzLm1hcChmdW5jdGlvbiAocmVmKSB7XG4gICAgICAgICAgICAgIHZhciBlcnIgPSByZWYuZXJyO1xuICAgICAgICAgICAgICB2YXIgY29kZSA9IHJlZi5jb2RlO1xuXG4gICAgICAgICAgICAgIHJldHVybiAoKGVyci50b1N0cmluZygpKSArIFwiIGluXFxuXFxuXCIgKyBjb2RlICsgXCJcXG5cIik7XG4gICAgICAgICAgfSkuam9pbignXFxuJyksXG4gICAgICAgICAgICB2bVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChjYWNoZVtrZXldID0gcmVzKVxuICAgIH1cbiAgfVxuXG4gIC8qICAqL1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNvbXBpbGVyQ3JlYXRvciAoYmFzZUNvbXBpbGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlQ29tcGlsZXIgKGJhc2VPcHRpb25zKSB7XG4gICAgICBmdW5jdGlvbiBjb21waWxlIChcbiAgICAgICAgdGVtcGxhdGUsXG4gICAgICAgIG9wdGlvbnNcbiAgICAgICkge1xuICAgICAgICB2YXIgZmluYWxPcHRpb25zID0gT2JqZWN0LmNyZWF0ZShiYXNlT3B0aW9ucyk7XG4gICAgICAgIHZhciBlcnJvcnMgPSBbXTtcbiAgICAgICAgdmFyIHRpcHMgPSBbXTtcblxuICAgICAgICB2YXIgd2FybiA9IGZ1bmN0aW9uIChtc2csIHJhbmdlLCB0aXApIHtcbiAgICAgICAgICAodGlwID8gdGlwcyA6IGVycm9ycykucHVzaChtc2cpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMub3V0cHV0U291cmNlUmFuZ2UpIHtcbiAgICAgICAgICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgdmFyIGxlYWRpbmdTcGFjZUxlbmd0aCA9IHRlbXBsYXRlLm1hdGNoKC9eXFxzKi8pWzBdLmxlbmd0aDtcblxuICAgICAgICAgICAgd2FybiA9IGZ1bmN0aW9uIChtc2csIHJhbmdlLCB0aXApIHtcbiAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7IG1zZzogbXNnIH07XG4gICAgICAgICAgICAgIGlmIChyYW5nZSkge1xuICAgICAgICAgICAgICAgIGlmIChyYW5nZS5zdGFydCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICBkYXRhLnN0YXJ0ID0gcmFuZ2Uuc3RhcnQgKyBsZWFkaW5nU3BhY2VMZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyYW5nZS5lbmQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgZGF0YS5lbmQgPSByYW5nZS5lbmQgKyBsZWFkaW5nU3BhY2VMZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICh0aXAgPyB0aXBzIDogZXJyb3JzKS5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gbWVyZ2UgY3VzdG9tIG1vZHVsZXNcbiAgICAgICAgICBpZiAob3B0aW9ucy5tb2R1bGVzKSB7XG4gICAgICAgICAgICBmaW5hbE9wdGlvbnMubW9kdWxlcyA9XG4gICAgICAgICAgICAgIChiYXNlT3B0aW9ucy5tb2R1bGVzIHx8IFtdKS5jb25jYXQob3B0aW9ucy5tb2R1bGVzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gbWVyZ2UgY3VzdG9tIGRpcmVjdGl2ZXNcbiAgICAgICAgICBpZiAob3B0aW9ucy5kaXJlY3RpdmVzKSB7XG4gICAgICAgICAgICBmaW5hbE9wdGlvbnMuZGlyZWN0aXZlcyA9IGV4dGVuZChcbiAgICAgICAgICAgICAgT2JqZWN0LmNyZWF0ZShiYXNlT3B0aW9ucy5kaXJlY3RpdmVzIHx8IG51bGwpLFxuICAgICAgICAgICAgICBvcHRpb25zLmRpcmVjdGl2ZXNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGNvcHkgb3RoZXIgb3B0aW9uc1xuICAgICAgICAgIGZvciAodmFyIGtleSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAoa2V5ICE9PSAnbW9kdWxlcycgJiYga2V5ICE9PSAnZGlyZWN0aXZlcycpIHtcbiAgICAgICAgICAgICAgZmluYWxPcHRpb25zW2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZmluYWxPcHRpb25zLndhcm4gPSB3YXJuO1xuXG4gICAgICAgIHZhciBjb21waWxlZCA9IGJhc2VDb21waWxlKHRlbXBsYXRlLnRyaW0oKSwgZmluYWxPcHRpb25zKTtcbiAgICAgICAge1xuICAgICAgICAgIGRldGVjdEVycm9ycyhjb21waWxlZC5hc3QsIHdhcm4pO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBpbGVkLmVycm9ycyA9IGVycm9ycztcbiAgICAgICAgY29tcGlsZWQudGlwcyA9IHRpcHM7XG4gICAgICAgIHJldHVybiBjb21waWxlZFxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb21waWxlOiBjb21waWxlLFxuICAgICAgICBjb21waWxlVG9GdW5jdGlvbnM6IGNyZWF0ZUNvbXBpbGVUb0Z1bmN0aW9uRm4oY29tcGlsZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiAgKi9cblxuICAvLyBgY3JlYXRlQ29tcGlsZXJDcmVhdG9yYCBhbGxvd3MgY3JlYXRpbmcgY29tcGlsZXJzIHRoYXQgdXNlIGFsdGVybmF0aXZlXG4gIC8vIHBhcnNlci9vcHRpbWl6ZXIvY29kZWdlbiwgZS5nIHRoZSBTU1Igb3B0aW1pemluZyBjb21waWxlci5cbiAgLy8gSGVyZSB3ZSBqdXN0IGV4cG9ydCBhIGRlZmF1bHQgY29tcGlsZXIgdXNpbmcgdGhlIGRlZmF1bHQgcGFydHMuXG4gIHZhciBjcmVhdGVDb21waWxlciA9IGNyZWF0ZUNvbXBpbGVyQ3JlYXRvcihmdW5jdGlvbiBiYXNlQ29tcGlsZSAoXG4gICAgdGVtcGxhdGUsXG4gICAgb3B0aW9uc1xuICApIHtcbiAgICB2YXIgYXN0ID0gcGFyc2UodGVtcGxhdGUudHJpbSgpLCBvcHRpb25zKTtcbiAgICBpZiAob3B0aW9ucy5vcHRpbWl6ZSAhPT0gZmFsc2UpIHtcbiAgICAgIG9wdGltaXplKGFzdCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHZhciBjb2RlID0gZ2VuZXJhdGUoYXN0LCBvcHRpb25zKTtcbiAgICByZXR1cm4ge1xuICAgICAgYXN0OiBhc3QsXG4gICAgICByZW5kZXI6IGNvZGUucmVuZGVyLFxuICAgICAgc3RhdGljUmVuZGVyRm5zOiBjb2RlLnN0YXRpY1JlbmRlckZuc1xuICAgIH1cbiAgfSk7XG5cbiAgLyogICovXG5cbiAgdmFyIHJlZiQxID0gY3JlYXRlQ29tcGlsZXIoYmFzZU9wdGlvbnMpO1xuICB2YXIgY29tcGlsZSA9IHJlZiQxLmNvbXBpbGU7XG4gIHZhciBjb21waWxlVG9GdW5jdGlvbnMgPSByZWYkMS5jb21waWxlVG9GdW5jdGlvbnM7XG5cbiAgLyogICovXG5cbiAgLy8gY2hlY2sgd2hldGhlciBjdXJyZW50IGJyb3dzZXIgZW5jb2RlcyBhIGNoYXIgaW5zaWRlIGF0dHJpYnV0ZSB2YWx1ZXNcbiAgdmFyIGRpdjtcbiAgZnVuY3Rpb24gZ2V0U2hvdWxkRGVjb2RlIChocmVmKSB7XG4gICAgZGl2ID0gZGl2IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBocmVmID8gXCI8YSBocmVmPVxcXCJcXG5cXFwiLz5cIiA6IFwiPGRpdiBhPVxcXCJcXG5cXFwiLz5cIjtcbiAgICByZXR1cm4gZGl2LmlubmVySFRNTC5pbmRleE9mKCcmIzEwOycpID4gMFxuICB9XG5cbiAgLy8gIzM2NjM6IElFIGVuY29kZXMgbmV3bGluZXMgaW5zaWRlIGF0dHJpYnV0ZSB2YWx1ZXMgd2hpbGUgb3RoZXIgYnJvd3NlcnMgZG9uJ3RcbiAgdmFyIHNob3VsZERlY29kZU5ld2xpbmVzID0gaW5Ccm93c2VyID8gZ2V0U2hvdWxkRGVjb2RlKGZhbHNlKSA6IGZhbHNlO1xuICAvLyAjNjgyODogY2hyb21lIGVuY29kZXMgY29udGVudCBpbiBhW2hyZWZdXG4gIHZhciBzaG91bGREZWNvZGVOZXdsaW5lc0ZvckhyZWYgPSBpbkJyb3dzZXIgPyBnZXRTaG91bGREZWNvZGUodHJ1ZSkgOiBmYWxzZTtcblxuICAvKiAgKi9cblxuICB2YXIgaWRUb1RlbXBsYXRlID0gY2FjaGVkKGZ1bmN0aW9uIChpZCkge1xuICAgIHZhciBlbCA9IHF1ZXJ5KGlkKTtcbiAgICByZXR1cm4gZWwgJiYgZWwuaW5uZXJIVE1MXG4gIH0pO1xuXG4gIHZhciBtb3VudCA9IFZ1ZS5wcm90b3R5cGUuJG1vdW50O1xuICBWdWUucHJvdG90eXBlLiRtb3VudCA9IGZ1bmN0aW9uIChcbiAgICBlbCxcbiAgICBoeWRyYXRpbmdcbiAgKSB7XG4gICAgZWwgPSBlbCAmJiBxdWVyeShlbCk7XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoZWwgPT09IGRvY3VtZW50LmJvZHkgfHwgZWwgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgd2FybihcbiAgICAgICAgXCJEbyBub3QgbW91bnQgVnVlIHRvIDxodG1sPiBvciA8Ym9keT4gLSBtb3VudCB0byBub3JtYWwgZWxlbWVudHMgaW5zdGVhZC5cIlxuICAgICAgKTtcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLiRvcHRpb25zO1xuICAgIC8vIHJlc29sdmUgdGVtcGxhdGUvZWwgYW5kIGNvbnZlcnQgdG8gcmVuZGVyIGZ1bmN0aW9uXG4gICAgaWYgKCFvcHRpb25zLnJlbmRlcikge1xuICAgICAgdmFyIHRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZTtcbiAgICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHRlbXBsYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmICh0ZW1wbGF0ZS5jaGFyQXQoMCkgPT09ICcjJykge1xuICAgICAgICAgICAgdGVtcGxhdGUgPSBpZFRvVGVtcGxhdGUodGVtcGxhdGUpO1xuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgICAgICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICAgICAgKFwiVGVtcGxhdGUgZWxlbWVudCBub3QgZm91bmQgb3IgaXMgZW1wdHk6IFwiICsgKG9wdGlvbnMudGVtcGxhdGUpKSxcbiAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRlbXBsYXRlLm5vZGVUeXBlKSB7XG4gICAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5pbm5lckhUTUw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAge1xuICAgICAgICAgICAgd2FybignaW52YWxpZCB0ZW1wbGF0ZSBvcHRpb246JyArIHRlbXBsYXRlLCB0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbCkge1xuICAgICAgICB0ZW1wbGF0ZSA9IGdldE91dGVySFRNTChlbCk7XG4gICAgICB9XG4gICAgICBpZiAodGVtcGxhdGUpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChjb25maWcucGVyZm9ybWFuY2UgJiYgbWFyaykge1xuICAgICAgICAgIG1hcmsoJ2NvbXBpbGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZWYgPSBjb21waWxlVG9GdW5jdGlvbnModGVtcGxhdGUsIHtcbiAgICAgICAgICBvdXRwdXRTb3VyY2VSYW5nZTogXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicsXG4gICAgICAgICAgc2hvdWxkRGVjb2RlTmV3bGluZXM6IHNob3VsZERlY29kZU5ld2xpbmVzLFxuICAgICAgICAgIHNob3VsZERlY29kZU5ld2xpbmVzRm9ySHJlZjogc2hvdWxkRGVjb2RlTmV3bGluZXNGb3JIcmVmLFxuICAgICAgICAgIGRlbGltaXRlcnM6IG9wdGlvbnMuZGVsaW1pdGVycyxcbiAgICAgICAgICBjb21tZW50czogb3B0aW9ucy5jb21tZW50c1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgdmFyIHJlbmRlciA9IHJlZi5yZW5kZXI7XG4gICAgICAgIHZhciBzdGF0aWNSZW5kZXJGbnMgPSByZWYuc3RhdGljUmVuZGVyRm5zO1xuICAgICAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlcjtcbiAgICAgICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnM7XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChjb25maWcucGVyZm9ybWFuY2UgJiYgbWFyaykge1xuICAgICAgICAgIG1hcmsoJ2NvbXBpbGUgZW5kJyk7XG4gICAgICAgICAgbWVhc3VyZSgoXCJ2dWUgXCIgKyAodGhpcy5fbmFtZSkgKyBcIiBjb21waWxlXCIpLCAnY29tcGlsZScsICdjb21waWxlIGVuZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtb3VudC5jYWxsKHRoaXMsIGVsLCBoeWRyYXRpbmcpXG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBvdXRlckhUTUwgb2YgZWxlbWVudHMsIHRha2luZyBjYXJlXG4gICAqIG9mIFNWRyBlbGVtZW50cyBpbiBJRSBhcyB3ZWxsLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0T3V0ZXJIVE1MIChlbCkge1xuICAgIGlmIChlbC5vdXRlckhUTUwpIHtcbiAgICAgIHJldHVybiBlbC5vdXRlckhUTUxcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICByZXR1cm4gY29udGFpbmVyLmlubmVySFRNTFxuICAgIH1cbiAgfVxuXG4gIFZ1ZS5jb21waWxlID0gY29tcGlsZVRvRnVuY3Rpb25zO1xuXG4gIHJldHVybiBWdWU7XG5cbn0pKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLCBldmFsKShcInRoaXNcIik7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZS9kaXN0L3Z1ZS5qcyc7XG5cbihmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgaW5pdE92ZXJsYXk7XG5cbiAgZnVuY3Rpb24gc2luZ2xlTGluZVN0cmluZyhzdHJpbmdzLCAuLi52YWx1ZXMpIHtcbiAgICBsZXQgb3V0cHV0ID0gJyc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgb3V0cHV0ICs9IHN0cmluZ3NbaV0gKyB2YWx1ZXNbaV07XG4gICAgfVxuXG4gICAgb3V0cHV0ICs9IHN0cmluZ3NbdmFsdWVzLmxlbmd0aF07XG4gICAgbGV0IGxpbmVzID0gb3V0cHV0LnNwbGl0KC8oPzpcXHJcXG58XFxufFxccikvKTtcblxuICAgIHJldHVybiBsaW5lcy5tYXAoKGxpbmUpID0+IHtcbiAgICAgIHJldHVybiBsaW5lLnJlcGxhY2UoL15cXHMrL2dtLCAnJyk7XG4gICAgfSkuam9pbignICcpLnRyaW0oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRPdmVybGF5VGVtcGxhdGUoKSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBzaW5nbGVMaW5lU3RyaW5nLyogaHRtbCAqL2BcbiAgICAgIDxkaXYgY2xhc3M9XCJmbXMtY29udHJvbC1iYXJcIj5cbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJlbmFibGVXb3Jrc3BhY2VzID0gIWVuYWJsZVdvcmtzcGFjZXNcIj5cbiAgICAgICAgICA8c3Bhbj5Ub2dnbGU8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHYtZm9yPVwid29ya3NwYWNlIGluIHdvcmtzcGFjZXNcIiBcbiAgICAgICAgY2xhc3M9XCJmbXMtd29ya3NwYWNlXCJcbiAgICAgICAgdi1pZj1cImVuYWJsZVdvcmtzcGFjZXNcIlxuICAgICAgICA6Y2xhc3M9XCJ7ICdmbXMtd29ya3NwYWNlLS1hY3RpdmUnOiBlZGl0aW5nID09PSB3b3Jrc3BhY2Uua2V5IH1cIlxuICAgICAgICA6Zm1zLXdvcmtzcGFjZS1pZD1cIndvcmtzcGFjZS5rZXlcIlxuICAgICAgICA6c3R5bGU9XCJ3b3Jrc3BhY2Uuc3R5bGVcIlxuICAgICAgICA6a2V5PVwid29ya3NwYWNlLmtleVwiXG4gICAgICA+XG5cbiAgICAgICAgPGhlYWRlciBjbGFzcz1cImZtcy13b3Jrc3BhY2UtdG9vbGJhclwiICB2LWlmPVwiZWRpdGluZyAhPT0gd29ya3NwYWNlLmtleVwiPlxuICAgICAgICAgIDwhLS0gRWRpdCAtLT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZm1zLXdvcmtzcGFjZS10b29sYmFyLWJ1dHRvblwiIEBjbGljaz1cImVkaXQod29ya3NwYWNlLmtleSlcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZm1zLWljb25cIj5lZGl0PC9pPlxuICAgICAgICAgICAgPHNwYW4+e3t3b3Jrc3BhY2Uua2V5fX08L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJmbXMtd29ya3NwYWNlLXRvb2xiYXJcIiAgdi1pZj1cImVkaXRpbmcgPT09IHdvcmtzcGFjZS5rZXlcIj5cbiAgICAgICAgICA8IS0tIEFjY2VwdCBjaGFuZ2UgLS0+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImZtcy13b3Jrc3BhY2UtdG9vbGJhci1idXR0b25cIiB2LWlmPVwiZWRpdGluZyA9PT0gd29ya3NwYWNlLmtleVwiIEBjbGljaz1cImFjY2VwdENoYW5nZSh3b3Jrc3BhY2Uua2V5KVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmbXMtaWNvblwiPmRvbmU8L2k+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPCEtLSBEaXNjYXJkIGNoYW5nZSAtLT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZm1zLXdvcmtzcGFjZS10b29sYmFyLWJ1dHRvblwiIHYtaWY9XCJlZGl0aW5nID09PSB3b3Jrc3BhY2Uua2V5XCIgQGNsaWNrPVwiZGlzY2FyZENoYW5nZSh3b3Jrc3BhY2Uua2V5KVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmbXMtaWNvblwiPmNsb3NlPC9pPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIG92ZXJsYXkuaWQgPSAnZm1zLW92ZXJsYXknO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgb3ZlcmxheS5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGluaXRPdmVybGF5VGVtcGxhdGUoKTtcblxuICBpbml0T3ZlcmxheSA9IG5ldyBWdWUoe1xuICAgIGVsOiAnI2Ztcy1vdmVybGF5JyxcblxuICAgIGRhdGE6IHtcbiAgICAgIGVuYWJsZVdvcmtzcGFjZXM6IHRydWUsXG4gICAgICBET01DaGFuZ2VzTGlzdGVuZXI6IG51bGwsXG4gICAgICBjYWNoZUlubmVySFRNTDogJycsXG4gICAgICBlZGl0aW5nOiAnJyxcbiAgICAgIHdvcmtzcGFjZXM6IFtdXG4gICAgfSxcblxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgdGhpcy5ET01DaGFuZ2VzTGlzdGVuZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoY2hhbmdlcykgPT4ge1xuICAgICAgICB0aGlzLmNhbGNXb3Jrc3BhY2VzKCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5ET01DaGFuZ2VzTGlzdGVuZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgYXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG4gICAgICAgIGNoYXJhY3RlckRhdGFPbGRWYWx1ZTogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2FsY1dvcmtzcGFjZXMoKTtcbiAgICAgIH0pO1xuXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgY2FsY1dvcmtzcGFjZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZm1zLWtleV0nKSB8fCBbXTtcblxuICAgICAgICB0aGlzLndvcmtzcGFjZXMgPSBbLi4ubm9kZXNdLm1hcChlbCA9PiB7XG4gICAgICAgICAgY29uc3QgcmVjdCA9IChlbC5nZXRDbGllbnRSZWN0cygpIHx8IFtdKVswXSB8fCB7fTtcblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6IGVsLmdldEF0dHJpYnV0ZSgnZm1zLWtleScpLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgd2lkdGg6IHJlY3Qud2lkdGggKyAncHgnLFxuICAgICAgICAgICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0ICsgJ3B4JyxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7cmVjdC54fXB4LCAke3JlY3QueX1weClgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBzZWxlY3RUZXh0OiBmdW5jdGlvbiAoZWxlKSB7XG4gICAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcblxuICAgICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoZWxlKTtcbiAgICAgICAgY29uc3Qgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuXG4gICAgICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgICAgc2VsLmFkZFJhbmdlKHJhbmdlKTtcbiAgICAgIH0sXG5cbiAgICAgIGVkaXQ6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdGhpcy5lZGl0aW5nID0ga2V5O1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2Ztcy1rZXk9XCIke2tleX1cIl1gKTtcblxuICAgICAgICB0aGlzLmNhY2hlSW5uZXJIVE1MID0gZWxlbWVudC5pbm5lckhUTUw7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2FjaGVJbm5lckhUTUwpO1xuICAgICAgfSxcblxuICAgICAgYWNjZXB0Q2hhbmdlOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHRoaXMuZWRpdGluZyA9ICcnO1xuICAgICAgICB0aGlzLmNhY2hlSW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgIH0sXG5cbiAgICAgIGRpc2NhcmRDaGFuZ2U6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdGhpcy5lZGl0aW5nID0gJyc7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZm1zLWtleT1cIiR7a2V5fVwiXWApO1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuY2FjaGVJbm5lckhUTUw7XG4gICAgICAgIHRoaXMuY2FjaGVJbm5lckhUTUwgPSAnJztcbiAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgfSxcblxuICAgICAgdG9nZ2xlRWRpdGluZyhlbGVtZW50S2V5KSB7XG4gICAgICAgIGNvbnN0IG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2Ztcy1rZXldJykgfHwgW107XG5cbiAgICAgICAgbm9kZXMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgZWwuY29udGVudEVkaXRhYmxlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2Ztcy1rZXk9XCIke2VsZW1lbnRLZXl9XCJdYCk7XG5cbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgIHRoaXMuc2VsZWN0VGV4dChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG4gICAgICBlZGl0aW5nOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlRWRpdGluZyh2YWwpO1xuICAgICAgfVxuICAgIH1cblxuICB9KTtcbn0pKCk7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=