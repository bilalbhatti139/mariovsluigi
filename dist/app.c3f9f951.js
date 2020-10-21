// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/player.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Player = function Player(name, image, weapon) {
  var _this = this;

  var lastId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  _classCallCheck(this, Player);

  _defineProperty(this, "generate", function () {
    return {
      id: _this.id,
      name: _this.name,
      image: "<img src=\"".concat(_this.image, "\" alt=\"").concat(_this.name, "\" width=\"70\"/>"),
      health: 100,
      weapon: {
        image: "<img src=\"".concat(_this.weapon, "\" alt=\"").concat(_this.name, "\" width=\"70\"/>"),
        damage: 10
      },
      location: {
        row: 0,
        column: 0
      },
      shield: false
    };
  });

  this.id = lastId + 1;
  this.name = name;
  this.image = image;
  this.weapon = weapon;
};

var _default = Player;
exports.default = _default;
},{}],"images/mario.png":[function(require,module,exports) {
module.exports = "/mario.9c32583d.png";
},{}],"images/luigi.png":[function(require,module,exports) {
module.exports = "/luigi.b970e971.png";
},{}],"images/fire.png":[function(require,module,exports) {
module.exports = "/fire.c12083a8.png";
},{}],"images/shield.png":[function(require,module,exports) {
module.exports = "/shield.5136560e.png";
},{}],"images/gun.png":[function(require,module,exports) {
module.exports = "/gun.e67c6bf4.png";
},{}],"images/bomb.png":[function(require,module,exports) {
module.exports = "/bomb.1f6209a2.png";
},{}],"images/knife.png":[function(require,module,exports) {
module.exports = "/knife.8568e698.png";
},{}],"images/health.png":[function(require,module,exports) {
module.exports = "/health.9af5620c.png";
},{}],"images/goomba.png":[function(require,module,exports) {
module.exports = "/goomba.7038ca82.png";
},{}],"js/assets.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "mario", {
  enumerable: true,
  get: function () {
    return _mario.default;
  }
});
Object.defineProperty(exports, "luigi", {
  enumerable: true,
  get: function () {
    return _luigi.default;
  }
});
Object.defineProperty(exports, "fire", {
  enumerable: true,
  get: function () {
    return _fire.default;
  }
});
Object.defineProperty(exports, "shield", {
  enumerable: true,
  get: function () {
    return _shield.default;
  }
});
Object.defineProperty(exports, "gun", {
  enumerable: true,
  get: function () {
    return _gun.default;
  }
});
Object.defineProperty(exports, "bomb", {
  enumerable: true,
  get: function () {
    return _bomb.default;
  }
});
Object.defineProperty(exports, "knife", {
  enumerable: true,
  get: function () {
    return _knife.default;
  }
});
Object.defineProperty(exports, "health", {
  enumerable: true,
  get: function () {
    return _health.default;
  }
});
Object.defineProperty(exports, "goomba", {
  enumerable: true,
  get: function () {
    return _goomba.default;
  }
});

var _mario = _interopRequireDefault(require("../images/mario.png"));

var _luigi = _interopRequireDefault(require("../images/luigi.png"));

var _fire = _interopRequireDefault(require("../images/fire.png"));

var _shield = _interopRequireDefault(require("../images/shield.png"));

var _gun = _interopRequireDefault(require("../images/gun.png"));

var _bomb = _interopRequireDefault(require("../images/bomb.png"));

var _knife = _interopRequireDefault(require("../images/knife.png"));

var _health = _interopRequireDefault(require("../images/health.png"));

var _goomba = _interopRequireDefault(require("../images/goomba.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"../images/mario.png":"images/mario.png","../images/luigi.png":"images/luigi.png","../images/fire.png":"images/fire.png","../images/shield.png":"images/shield.png","../images/gun.png":"images/gun.png","../images/bomb.png":"images/bomb.png","../images/knife.png":"images/knife.png","../images/health.png":"images/health.png","../images/goomba.png":"images/goomba.png"}],"js/game.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assets = require("./assets");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Game = function Game(players) {
  var _this = this;

  _classCallCheck(this, Game);

  _defineProperty(this, "reset", function () {
    var _iterator = _createForOfIteratorHelper(_this.gridSquares),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var tile = _step.value;
        tile.innerHTML = "";
        tile.removeAttribute("class");
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    _this.players.map(function (player) {
      document.querySelector("#p".concat(player.id, "-name")).innerHTML = "";
      document.querySelector("#p".concat(player.id, "-name")).innerHTML = player.name;
      document.querySelector("#p".concat(player.id, "-image")).innerHTML = "";
      document.querySelector("#p".concat(player.id, "-image")).innerHTML = player.image;
      document.querySelector("#p".concat(player.id, "-health-image")).innerHTML = "";
      document.querySelector("#p".concat(player.id, "-health-image")).innerHTML = "<img src=\"".concat(_assets.health, "\" width=\"70\" />");
      document.querySelector("#p".concat(player.id, "-health")).innerHTML = "";
      document.querySelector("#p".concat(player.id, "-health")).innerHTML = player.health;
      document.querySelector("#p".concat(player.id, "-weapon")).innerHTML = "";
      document.querySelector("#p".concat(player.id, "-weapon")).innerHTML = player.weapon.image;
      document.querySelector("#p".concat(player.id, "-damage")).innerHTML = "";
      document.querySelector("#p".concat(player.id, "-damage")).innerHTML = player.weapon.damage;
      document.querySelector("#p".concat(player.id, "-shield")).innerHTML = player.shield ? "Protected" : "Unprotected";
      document.querySelector("#p".concat(player.id, "-shield-image")).innerHTML = "<img src=\"".concat(_assets.shield, "\" width=\"70\" />");

      _this.placeItem(player, "player");
    });

    for (var i = 0; i < 15; i++) {
      _this.placeItem("<img src=\"".concat(_assets.goomba, "\" width=\"70\" />"), "obstacle");
    }

    _this.placeItem("<img src=\"".concat(_assets.knife, "\" width=\"70\" />"), "weapon");

    _this.placeItem("<img src=\"".concat(_assets.bomb, "\" width=\"70\" />"), "weapon");

    _this.currentPlayer = _this.players[Math.floor(Math.random() * _this.players.length)];

    _this.detectTurn();
  });

  _defineProperty(this, "init", function () {
    _this.reset();
  });

  _defineProperty(this, "placeItem", function (item, type) {
    var randomSquare = Math.floor(Math.random() * _this.gridSquares.length);
    var objClass = _this.gridSquares[randomSquare].classList;

    if (objClass.contains("weapon") || objClass.contains("player") || objClass.contains("obstacle")) {
      _this.placeItem(item, type);
    } else {
      if (type === "player") {
        _this.gridSquares[randomSquare].innerHTML = item.image;
        var _this$gridSquares$ran = _this.gridSquares[randomSquare].dataset,
            row = _this$gridSquares$ran.row,
            column = _this$gridSquares$ran.column;
        _this.players[item.id - 1].location = {
          row: row,
          column: column
        };
      } else {
        _this.gridSquares[randomSquare].innerHTML = item;
      }

      _this.gridSquares[randomSquare].classList.add(type);
    }
  });

  _defineProperty(this, "detectTurn", function () {
    var panel = document.querySelector("#player".concat(_this.currentPlayer.id));
    console.log(panel);
    panel.classList.add("active");

    _this.playerMoves();
  });

  _defineProperty(this, "playerMoves", function () {
    var north1 = document.querySelector("[data-row=\"".concat(_this.currentPlayer.location.row - 1, "\"][data-column=\"").concat(_this.currentPlayer.location.column, "\"]"));
    var north2 = document.querySelector("[data-row=\"".concat(_this.currentPlayer.location.row - 2, "\"][data-column=\"").concat(_this.currentPlayer.location.column, "\"]"));
    var north3 = document.querySelector("[data-row=\"".concat(_this.currentPlayer.location.row - 3, "\"][data-column=\"").concat(_this.currentPlayer.location.column, "\"]"));
    north1.classList.add("highlight");
    north2.classList.add("highlight");
    north3.classList.add("highlight");
  });

  this.players = players;
  this.gridSquares = document.querySelectorAll("#mapBox > div");
  this.currentPlayer = null;
};

exports.default = Game;

_defineProperty(Game, "map", function (selector, tiles) {
  var column = 0;
  var row = 1;

  for (var tile = 0; tile < tiles; tile++) {
    column++;
    document.querySelector(selector).innerHTML += "<div data-row=\"".concat(row, "\" data-column=\"").concat(column, "\"></div>");

    if (column === 9) {
      row++;
      column = 0;
    }
  }
});
},{"./assets":"js/assets.js"}],"js/app.js":[function(require,module,exports) {
"use strict";

var _player = _interopRequireDefault(require("./player"));

var _game = _interopRequireDefault(require("./game"));

var _assets = require("./assets");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_game.default.map("#mapBox", 81);

var player1 = new _player.default("Mario", _assets.mario, _assets.fire).generate();
var player2 = new _player.default("Luigi", _assets.luigi, _assets.gun, player1.id).generate();
var game = new _game.default([player1, player2]);
document.querySelector("#newGame").addEventListener("click", game.init);
game.reset();
},{"./player":"js/player.js","./game":"js/game.js","./assets":"js/assets.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "40401" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map