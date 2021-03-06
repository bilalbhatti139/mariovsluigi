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
      image: "<img src=\"".concat(_this.image, "\" alt=\"").concat(_this.name, "\" width=\"50\"/>"),
      health: 100,
      weapon: {
        image: "<img src=\"".concat(_this.weapon, "\" alt=\"").concat(_this.name, "\" width=\"70\" data-damage=\"10\" />"),
        damage: 10,
        old: null
      },
      location: {
        row: 0,
        column: 0
      }
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

    for (var i = 0; i < 10; i++) {
      _this.placeItem("<img src=\"".concat(_assets.goomba, "\" width=\"50\" />"), "obstacle");
    }

    _this.players.map(function (player) {
      // document.querySelector(`#p${player.id}-name`).innerHTML = "";
      document.querySelector("#p".concat(player.id, "-name")).innerHTML = player.name; // document.querySelector(`#p${player.id}-image`).innerHTML = "";

      document.querySelector("#p".concat(player.id, "-image")).innerHTML = player.image; // document.querySelector(`#p${player.id}-health-image`).innerHTML = "";

      document.querySelector("#p".concat(player.id, "-health-image")).innerHTML = "<img src=\"".concat(_assets.health, "\" width=\"70\" />"); // document.querySelector(`#p${player.id}-health`).innerHTML = "";

      document.querySelector("#p".concat(player.id, "-health")).innerHTML = player.health; // document.querySelector(`#p${player.id}-weapon`).innerHTML = "";

      document.querySelector("#p".concat(player.id, "-weapon")).innerHTML = player.weapon.image; // document.querySelector(`#p${player.id}-damage`).innerHTML = "";

      document.querySelector("#p".concat(player.id, "-damage")).innerHTML = player.weapon.damage;
      document.querySelector("#p".concat(player.id, "-shield")).innerHTML = player.shield ? "Protected" : "Unprotected";
      document.querySelector("#p".concat(player.id, "-shield-image")).innerHTML = "<img src=\"".concat(_assets.shield, "\" width=\"70\" />");

      _this.placeItem(player, "player");
    });

    _this.placeItem("<img src=\"".concat(_assets.knife, "\" width=\"50\" data-damage=\"15\" />"), "weapon");

    _this.placeItem("<img src=\"".concat(_assets.bomb, "\" width=\"50\" data-damage=\"20\" />"), "weapon");
  });

  _defineProperty(this, "init", function () {
    _this.reset();

    _this.currentPlayer = _this.players[Math.floor(Math.random() * _this.players.length)];

    _this.detectTurn();

    _this.playerMoves();
  });

  _defineProperty(this, "placeItem", function (item, type) {
    var randomSquare = Math.floor(Math.random() * _this.gridSquares.length);
    var _this$gridSquares$ran = _this.gridSquares[randomSquare].dataset,
        row = _this$gridSquares$ran.row,
        column = _this$gridSquares$ran.column;

    var getPlayerDistance = function getPlayerDistance(row, column) {
      if (_this.players[0].location.row > 0) {
        var p1c = +_this.players[0].location.column;
        var p1r = +_this.players[0].location.row;
        var yDistance = Math.abs(p1r - row);
        var xDistance = Math.abs(p1c - column); // Check if P1 is in same column and less than 4 steps away from P2

        if (p1c === column && yDistance <= 4) {
          // Check if there's a barrier between two players
          for (var i = 1; i <= yDistance; i++) {
            if (p1r > row) {
              var y = document.querySelector("[data-row=\"".concat(p1r - i, "\"][data-column=\"").concat(p1c, "\"]"));
              if (y && y.classList.contains("obstacle")) return false;
            } else {
              var _y = document.querySelector("[data-row=\"".concat(p1r + i, "\"][data-column=\"").concat(p1c, "\"]"));

              if (_y && _y.classList.contains("obstacle")) return false;
            }
          }

          return true;
        } // Check if P1 is in same row and less than 4 steps away from P2


        if (p1r === row && xDistance <= 4) {
          // Check if there's a obstacle between two players
          for (var _i = 1; _i <= xDistance; _i++) {
            if (p1c > column) {
              var x = document.querySelector("[data-row=\"".concat(p1r, "\"][data-column=\"").concat(p1c - _i, "\"]"));
              if (x && x.classList.contains("obstacle")) return false;
            } else {
              var _x = document.querySelector("[data-row=\"".concat(p1r, "\"][data-column=\"").concat(p1c + _i, "\"]"));

              if (_x && _x.classList.contains("obstacle")) return false;
            }
          }

          return true;
        }

        if (xDistance === 1 && yDistance <= 4 || yDistance === 1 && xDistance <= 4) return true;
      }
    };

    var getObstacleDistance = function getObstacleDistance(row, column) {
      var r1 = document.querySelector("[data-row=\"".concat(row - 1, "\"][data-column=\"").concat(column, "\"]"));
      var r2 = document.querySelector("[data-row=\"".concat(row - 2, "\"][data-column=\"").concat(column, "\"]"));
      var r3 = document.querySelector("[data-row=\"".concat(row + 1, "\"][data-column=\"").concat(column, "\"]"));
      var r4 = document.querySelector("[data-row=\"".concat(row + 2, "\"][data-column=\"").concat(column, "\"]"));
      var c1 = document.querySelector("[data-column=\"".concat(column - 1, "\"][data-row=\"").concat(row, "\"]"));
      var c2 = document.querySelector("[data-column=\"".concat(column - 2, "\"][data-row=\"").concat(row, "\"]"));
      var c3 = document.querySelector("[data-column=\"".concat(column + 1, "\"][data-row=\"").concat(row, "\"]"));
      var c4 = document.querySelector("[data-column=\"".concat(column + 2, "\"][data-row=\"").concat(row, "\"]"));
      if (r1 && r1.classList.contains("obstacle")) return true;
      if (r2 && r2.classList.contains("obstacle")) return true;
      if (r3 && r3.classList.contains("obstacle")) return true;
      if (r4 && r4.classList.contains("obstacle")) return true;
      if (c1 && c1.classList.contains("obstacle")) return true;
      if (c2 && c2.classList.contains("obstacle")) return true;
      if (c3 && c3.classList.contains("obstacle")) return true;
      if (c4 && c4.classList.contains("obstacle")) return true;
      var r1c1 = document.querySelector("[data-row=\"".concat(row - 1, "\"][data-column=\"").concat(column - 1, "\"]"));
      var r2c2 = document.querySelector("[data-row=\"".concat(row - 1, "\"][data-column=\"").concat(column + 1, "\"]"));
      var r3c3 = document.querySelector("[data-row=\"".concat(row + 1, "\"][data-column=\"").concat(column - 1, "\"]"));
      var r4c4 = document.querySelector("[data-row=\"".concat(row + 1, "\"][data-column=\"").concat(column + 1, "\"]"));
      if (r1c1 && r1c1.classList.contains("obstacle")) return true;
      if (r2c2 && r2c2.classList.contains("obstacle")) return true;
      if (r3c3 && r3c3.classList.contains("obstacle")) return true;
      if (r4c4 && r4c4.classList.contains("obstacle")) return true;
    };

    if (_this.gridSquares[randomSquare].classList.contains("full")) return _this.placeItem(item, type);

    if (type === "player") {
      if (getPlayerDistance(Number(row), Number(column))) return _this.placeItem(item, type);
      _this.gridSquares[randomSquare].innerHTML = item.image;
      _this.players[item.id - 1].location = {
        row: row,
        column: column
      };
    } else if (type === "obstacle" && getObstacleDistance(+row, +column)) {
      return _this.placeItem(item, type);
    } else {
      _this.gridSquares[randomSquare].innerHTML = item;
    }

    _this.gridSquares[randomSquare].classList.add(type);

    _this.gridSquares[randomSquare].classList.add("full");
  });

  _defineProperty(this, "playerMoves", function () {
    // north direction
    var north1 = document.querySelector("[data-row=\"".concat(_this.currentPlayer.location.row - 1, "\"][data-column=\"").concat(_this.currentPlayer.location.column, "\"]"));
    var north2 = document.querySelector("[data-row=\"".concat(_this.currentPlayer.location.row - 2, "\"][data-column=\"").concat(_this.currentPlayer.location.column, "\"]"));
    var north3 = document.querySelector("[data-row=\"".concat(_this.currentPlayer.location.row - 3, "\"][data-column=\"").concat(_this.currentPlayer.location.column, "\"]")); // south direction

    var south1 = document.querySelector("[data-row=\"".concat(Number(_this.currentPlayer.location.row) + 1, "\"][data-column=\"").concat(_this.currentPlayer.location.column, "\"]"));
    var south2 = document.querySelector("[data-row=\"".concat(Number(_this.currentPlayer.location.row) + 2, "\"][data-column=\"").concat(_this.currentPlayer.location.column, "\"]"));
    var south3 = document.querySelector("[data-row=\"".concat(Number(_this.currentPlayer.location.row) + 3, "\"][data-column=\"").concat(_this.currentPlayer.location.column, "\"]")); // west direction

    var west1 = document.querySelector("[data-row=\"".concat(_this.currentPlayer.location.row, "\"][data-column=\"").concat(_this.currentPlayer.location.column - 1, "\"]"));
    var west2 = document.querySelector("[data-row=\"".concat(_this.currentPlayer.location.row, "\"][data-column=\"").concat(_this.currentPlayer.location.column - 2, "\"]"));
    var west3 = document.querySelector("[data-row=\"".concat(_this.currentPlayer.location.row, "\"][data-column=\"").concat(_this.currentPlayer.location.column - 3, "\"]")); // east direction

    var east1 = document.querySelector("[data-row=\"".concat(_this.currentPlayer.location.row, "\"][data-column=\"").concat(Number(_this.currentPlayer.location.column) + 1, "\"]"));
    var east2 = document.querySelector("[data-row=\"".concat(_this.currentPlayer.location.row, "\"][data-column=\"").concat(Number(_this.currentPlayer.location.column) + 2, "\"]"));
    var east3 = document.querySelector("[data-row=\"".concat(_this.currentPlayer.location.row, "\"][data-column=\"").concat(Number(_this.currentPlayer.location.column) + 3, "\"]"));

    if (north1 && !north1.classList.contains("obstacle") && !north1.classList.contains("player")) {
      north1.classList.add("highlight");
      north1.addEventListener("click", _this.movePlayer);

      if (north2 && !north2.classList.contains("obstacle") && !north2.classList.contains("player")) {
        north2.classList.add("highlight");
        north2.addEventListener("click", _this.movePlayer);

        if (north3 && !north3.classList.contains("obstacle") && !north3.classList.contains("player")) {
          north3.classList.add("highlight");
          north3.addEventListener("click", _this.movePlayer);
        }
      }
    }

    if (south1 && !south1.classList.contains("obstacle") && !south1.classList.contains("player")) {
      south1.classList.add("highlight");
      south1.addEventListener("click", _this.movePlayer);

      if (south2 && !south2.classList.contains("obstacle") && !south2.classList.contains("player")) {
        south2.classList.add("highlight");
        south2.addEventListener("click", _this.movePlayer);

        if (south3 && !south3.classList.contains("obstacle") && !south3.classList.contains("player")) {
          south3.classList.add("highlight");
          south3.addEventListener("click", _this.movePlayer);
        }
      }
    }

    if (east1 && !east1.classList.contains("obstacle") && !east1.classList.contains("player")) {
      east1.classList.add("highlight");
      east1.addEventListener("click", _this.movePlayer);

      if (east2 && !east2.classList.contains("obstacle") && !east2.classList.contains("player")) {
        east2.classList.add("highlight");
        east2.addEventListener("click", _this.movePlayer);

        if (east3 && !east3.classList.contains("obstacle") && !east3.classList.contains("player")) {
          east3.classList.add("highlight");
          east3.addEventListener("click", _this.movePlayer);
        }
      }
    }

    if (west1 && !west1.classList.contains("obstacle") && !west1.classList.contains("player")) {
      west1.classList.add("highlight");
      west1.addEventListener("click", _this.movePlayer);

      if (west2 && !west2.classList.contains("obstacle") && !west2.classList.contains("player")) {
        west2.classList.add("highlight");
        west2.addEventListener("click", _this.movePlayer);

        if (west3 && !west3.classList.contains("obstacle") && !west3.classList.contains("player")) {
          west3.classList.add("highlight");
          west3.addEventListener("click", _this.movePlayer);
        }
      }
    }
  });

  _defineProperty(this, "movePlayer", function (e) {
    // Remove player image from old position
    var oldPos = document.querySelector("[data-row=\"".concat(_this.currentPlayer.location.row, "\"][data-column=\"").concat(_this.currentPlayer.location.column, "\"]"));
    var newPos = e.target.nodeName === "IMG" ? e.path[1] : e.target; // Check if any weapon is in memory

    if (_this.currentPlayer.weapon.old) {
      oldPos.innerHTML = _this.currentPlayer.weapon.old;
      _this.players[_this.currentPlayer.id - 1].weapon.old = null;
    } else {
      oldPos.innerHTML = "";
    }

    oldPos.classList.remove("player"); // Update new player position

    _this.players[_this.currentPlayer.id - 1].location = {
      row: newPos.dataset.row,
      column: newPos.dataset.column
    };

    if (newPos.classList.contains("weapon")) {
      _this.players[_this.currentPlayer.id - 1].weapon.old = _this.currentPlayer.weapon.image;
      _this.players[_this.currentPlayer.id - 1].weapon.image = newPos.innerHTML;
      _this.players[_this.currentPlayer.id - 1].weapon.damage = e.target.dataset.damage;
      document.querySelector("#p".concat(_this.currentPlayer.id, "-weapon")).innerHTML = newPos.innerHTML;
      document.querySelector("#p".concat(_this.currentPlayer.id, "-damage")).innerHTML = e.target.dataset.damage;
    } // Add player image to new position


    newPos.innerHTML = _this.currentPlayer.image;
    newPos.classList.add("player"); // Remove highlights

    var _iterator2 = _createForOfIteratorHelper(document.querySelectorAll(".highlight")),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var tile = _step2.value;
        tile.classList.remove("highlight");
        tile.removeEventListener("click", _this.movePlayer);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    var isFighting = !!_this.detectFight();

    if (isFighting) {
      _this.retaliation();
    } else {
      _this.changeTurn();
    }
  });

  _defineProperty(this, "detectFight", function () {
    var north = document.querySelector("[data-row=\"".concat(_this.currentPlayer.location.row - 1, "\"][data-column=\"").concat(_this.currentPlayer.location.column, "\"]"));
    var west = document.querySelector("[data-row=\"".concat(_this.currentPlayer.location.row, "\"][data-column=\"").concat(_this.currentPlayer.location.column - 1, "\"]"));
    var east = document.querySelector("[data-row=\"".concat(_this.currentPlayer.location.row, "\"][data-column=\"").concat(Number(_this.currentPlayer.location.column) + 1, "\"]"));
    var south = document.querySelector("[data-row=\"".concat(Number(_this.currentPlayer.location.row) + 1, "\"][data-column=\"").concat(_this.currentPlayer.location.column, "\"]"));
    if (north && north.classList.contains("player")) return true;
    if (south && south.classList.contains("player")) return true;
    if (east && east.classList.contains("player")) return true;
    if (west && west.classList.contains("player")) return true;
  });

  _defineProperty(this, "retaliation", function () {
    var attacker = _this.currentPlayer;
    _this.currentPlayer = _this.currentPlayer.id === 1 ? _this.players[1] : _this.players[0]; // await this.asyncDelay(500);

    var opponent = _this.currentPlayer; // Update player panels highlight

    document.querySelector("#player".concat(attacker.id)).classList.remove("active");
    document.querySelector("#player".concat(opponent.id)).classList.add("active"); // console.log("Lets start a fight...", opponent.id);
    // 1. Display retaliation modal

    setTimeout(function () {
      document.querySelector("#fightModal").classList.add("open");
    }, 500);
    document.querySelector("#avatar").innerHTML = opponent.image; // 2. Decreasing health of opposite member

    var protect = function protect() {
      document.querySelector("#attack").removeEventListener("click", attack);
      var newHealth = opponent.health - attacker.weapon.damage / 2;
      _this.players[opponent.id - 1].health = newHealth;
      document.querySelector("#p".concat(opponent.id, "-health")).innerHTML = newHealth;
      document.querySelector("#p".concat(opponent.id, "-shield")).innerHTML = "Protected";
      document.querySelector("#p".concat(opponent.id, "-shield-image")).classList.add("protected");
      document.querySelector("#fightModal").classList.remove("open");
      if (_this.gameOver(opponent, attacker)) return;

      _this.retaliation();
    };

    var attack = function attack() {
      document.querySelector("#protect").removeEventListener("click", protect);
      var newHealth = opponent.health - attacker.weapon.damage;
      _this.players[opponent.id - 1].health = newHealth;
      document.querySelector("#p".concat(opponent.id, "-health")).innerHTML = newHealth;
      document.querySelector("#p".concat(opponent.id, "-shield")).innerHTML = "Unprotected";
      document.querySelector("#p".concat(opponent.id, "-shield-image")).classList.remove("protected");
      document.querySelector("#fightModal").classList.remove("open"); // Remove highlights

      var _iterator3 = _createForOfIteratorHelper(document.querySelectorAll(".highlight")),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var tile = _step3.value;
          tile.classList.remove("highlight");
          tile.removeEventListener("click", _this.movePlayer);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      if (_this.gameOver(opponent, attacker)) return;

      _this.retaliation();
    };

    document.querySelector("#protect").addEventListener("click", protect, {
      once: true
    });
    document.querySelector("#attack").addEventListener("click", attack, {
      once: true
    });
  });

  _defineProperty(this, "gameOver", function (opponent, attacker) {
    if (opponent.health <= 0) {
      document.querySelector(".modal-window").classList.remove("open");
      document.querySelector("#gameOverModal").classList.add("open");
      document.querySelector("#gameOverModal p:first-of-type").innerHTML = "".concat(attacker.name, ", you have won the game :)");
      document.querySelector("#gameOverModal p:last-of-type").innerHTML = "".concat(opponent.name, ", you have lost the game :(");
      document.querySelector("#gameOverModal button").addEventListener("click", function () {
        document.querySelector("#gameOverModal").classList.remove("open");
      });
      return true;
    }
  });

  _defineProperty(this, "detectTurn", function () {
    var panel = document.querySelector("#player".concat(_this.currentPlayer.id));

    var _iterator4 = _createForOfIteratorHelper(document.querySelectorAll(".scoreBoard")),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var scoreBoard = _step4.value;
        scoreBoard.classList.remove("active");
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    panel.classList.add("active");
  });

  _defineProperty(this, "changeTurn", function () {
    if (_this.currentPlayer.id === 1) {
      _this.currentPlayer = _this.players[1];
    } else {
      _this.currentPlayer = _this.players[0];
    }

    _this.detectTurn();

    _this.playerMoves();
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

// import 'regenerator-runtime/runtime'
_game.default.map("#mapBox", 81);

var newGame = function newGame() {
  var player1 = new _player.default("Mario", _assets.mario, _assets.fire).generate();
  var player2 = new _player.default("Luigi", _assets.luigi, _assets.gun, player1.id).generate();
  var game = new _game.default([player1, player2]);
  game.init();
};

document.querySelector("#newGame").addEventListener("click", newGame);
document.querySelector("#newGame2").addEventListener("click", newGame);
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "33075" + '/');

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