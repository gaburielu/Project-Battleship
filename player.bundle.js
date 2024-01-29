/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module) => {

// const { ship } = require("./ship");
// const { player } = require("./player");

// const player = document.getElementById("player1");

class gameboard {
  constructor() {
    this.gameboard = this.makeGameboard();
  }

  makeGameboard() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let newNode = new node(i, j);
        arr.push(newNode);
      }
    }
    return arr;
  }

  _getNodeAtCoordinates(x, y) {
    return this.gameboard.find((node) => node.x === x && node.y === y);
  }

  receiveAttack(x, y) {
    const node = this._getNodeAtCoordinates(x, y);
    if (node) {
      node.hit = true;
    }
  }

//   insertShip(x,y){
//   }
}

class node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.coordinate = [x, y];
    this.hit = false;
    this.ship = false;
    this.nodeIndex = parseFloat(x.toString() + y.toString());
  }
}

module.exports = {
  gameboard,
  node,
};


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { gameboard, node } = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
const { ship } = __webpack_require__(/*! ./ship */ "./src/ship.js");

class player {
  constructor() {
    this.board = new gameboard();
    this.ships = this.makeShips();
    this.computer = false;
  }

  makeShips() {
    return [
      (this.warship = new ship(4)),
      (this.longship = new ship(3)),
      (this.longship2 = new ship(3)),
      (this.scout = new ship(2)),
      (this.scout2 = new ship(2)),
      (this.galley = new ship(1)),
      (this.galley2 = new ship(1)),
      (this.galley3 = new ship(1)),
    ];
  }

  insertShip(x,y){

  }
}

module.exports = {
  player,
};

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { gameboard, node } = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
// const { player } = require("./player");

class ship {
  constructor(length) {
    this.length = length;
    this.hitpoint = 0;
    this.sunk = this.isSunk();
    this.ship = new Array(this.length);
  }
  hit() {
    this.hitpoint++;
    this.sunk = this.isSunk();
  }

  isSunk() {
    if (this.hitpoint == this.length) {
      return true;
    } else {
      return false;
    }
  }
}


module.exports = {
  ship,
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/player.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTOztBQUVwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2xEQSxRQUFRLGtCQUFrQixFQUFFLG1CQUFPLENBQUMsdUNBQWE7QUFDakQsUUFBUSxPQUFPLEVBQUUsbUJBQU8sQ0FBQyw2QkFBUTs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzlCQSxRQUFRLGtCQUFrQixFQUFFLG1CQUFPLENBQUMsdUNBQWE7QUFDakQsV0FBVyxTQUFTOztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7O1VDM0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCB7IHNoaXAgfSA9IHJlcXVpcmUoXCIuL3NoaXBcIik7XG4vLyBjb25zdCB7IHBsYXllciB9ID0gcmVxdWlyZShcIi4vcGxheWVyXCIpO1xuXG4vLyBjb25zdCBwbGF5ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjFcIik7XG5cbmNsYXNzIGdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gdGhpcy5tYWtlR2FtZWJvYXJkKCk7XG4gIH1cblxuICBtYWtlR2FtZWJvYXJkKCkge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBsZXQgbmV3Tm9kZSA9IG5ldyBub2RlKGksIGopO1xuICAgICAgICBhcnIucHVzaChuZXdOb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIF9nZXROb2RlQXRDb29yZGluYXRlcyh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZWJvYXJkLmZpbmQoKG5vZGUpID0+IG5vZGUueCA9PT0geCAmJiBub2RlLnkgPT09IHkpO1xuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuX2dldE5vZGVBdENvb3JkaW5hdGVzKHgsIHkpO1xuICAgIGlmIChub2RlKSB7XG4gICAgICBub2RlLmhpdCA9IHRydWU7XG4gICAgfVxuICB9XG5cbi8vICAgaW5zZXJ0U2hpcCh4LHkpe1xuLy8gICB9XG59XG5cbmNsYXNzIG5vZGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuY29vcmRpbmF0ZSA9IFt4LCB5XTtcbiAgICB0aGlzLmhpdCA9IGZhbHNlO1xuICAgIHRoaXMuc2hpcCA9IGZhbHNlO1xuICAgIHRoaXMubm9kZUluZGV4ID0gcGFyc2VGbG9hdCh4LnRvU3RyaW5nKCkgKyB5LnRvU3RyaW5nKCkpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnYW1lYm9hcmQsXG4gIG5vZGUsXG59O1xuIiwiY29uc3QgeyBnYW1lYm9hcmQsIG5vZGUgfSA9IHJlcXVpcmUoXCIuL2dhbWVib2FyZFwiKTtcbmNvbnN0IHsgc2hpcCB9ID0gcmVxdWlyZShcIi4vc2hpcFwiKTtcblxuY2xhc3MgcGxheWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IG5ldyBnYW1lYm9hcmQoKTtcbiAgICB0aGlzLnNoaXBzID0gdGhpcy5tYWtlU2hpcHMoKTtcbiAgICB0aGlzLmNvbXB1dGVyID0gZmFsc2U7XG4gIH1cblxuICBtYWtlU2hpcHMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICh0aGlzLndhcnNoaXAgPSBuZXcgc2hpcCg0KSksXG4gICAgICAodGhpcy5sb25nc2hpcCA9IG5ldyBzaGlwKDMpKSxcbiAgICAgICh0aGlzLmxvbmdzaGlwMiA9IG5ldyBzaGlwKDMpKSxcbiAgICAgICh0aGlzLnNjb3V0ID0gbmV3IHNoaXAoMikpLFxuICAgICAgKHRoaXMuc2NvdXQyID0gbmV3IHNoaXAoMikpLFxuICAgICAgKHRoaXMuZ2FsbGV5ID0gbmV3IHNoaXAoMSkpLFxuICAgICAgKHRoaXMuZ2FsbGV5MiA9IG5ldyBzaGlwKDEpKSxcbiAgICAgICh0aGlzLmdhbGxleTMgPSBuZXcgc2hpcCgxKSksXG4gICAgXTtcbiAgfVxuXG4gIGluc2VydFNoaXAoeCx5KXtcblxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwbGF5ZXIsXG59OyIsImNvbnN0IHsgZ2FtZWJvYXJkLCBub2RlIH0gPSByZXF1aXJlKFwiLi9nYW1lYm9hcmRcIik7XG4vLyBjb25zdCB7IHBsYXllciB9ID0gcmVxdWlyZShcIi4vcGxheWVyXCIpO1xuXG5jbGFzcyBzaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRwb2ludCA9IDA7XG4gICAgdGhpcy5zdW5rID0gdGhpcy5pc1N1bmsoKTtcbiAgICB0aGlzLnNoaXAgPSBuZXcgQXJyYXkodGhpcy5sZW5ndGgpO1xuICB9XG4gIGhpdCgpIHtcbiAgICB0aGlzLmhpdHBvaW50Kys7XG4gICAgdGhpcy5zdW5rID0gdGhpcy5pc1N1bmsoKTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5oaXRwb2ludCA9PSB0aGlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2hpcCxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGxheWVyLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9