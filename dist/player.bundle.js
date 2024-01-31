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

  insertShip(node) {
    node.ship = true;
  }

  getRandomNode(){
    let x = Math.floor(Math.random()*10);
    let y = Math.floor(Math.random()*10);
    return this._getNodeAtCoordinates(x,y);
  }
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
    this.hitpoints = 0;
    this.shipInserted = 0;
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

  addHitpoints(){
    this.hitpoints++;
  }

  removeHitpoints(){
    this.hitpoints--;
  }

  shipAdded(){
    this.shipInserted++;
  }

}

module.exports = {
  player,
};

// let z = new player();
// console.log(z.addHitpoints());
// console.log(z.addHitpoints());
// console.log(z.removeHitpoints());
// console.log(z.hitpoints);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTOztBQUVwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pEQSxRQUFRLGtCQUFrQixFQUFFLG1CQUFPLENBQUMsdUNBQWE7QUFDakQsUUFBUSxPQUFPLEVBQUUsbUJBQU8sQ0FBQyw2QkFBUTs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUMvQ0EsUUFBUSxrQkFBa0IsRUFBRSxtQkFBTyxDQUFDLHVDQUFhO0FBQ2pELFdBQVcsU0FBUzs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7OztVQzNCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgeyBzaGlwIH0gPSByZXF1aXJlKFwiLi9zaGlwXCIpO1xuLy8gY29uc3QgeyBwbGF5ZXIgfSA9IHJlcXVpcmUoXCIuL3BsYXllclwiKTtcblxuLy8gY29uc3QgcGxheWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXIxXCIpO1xuXG5jbGFzcyBnYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdhbWVib2FyZCA9IHRoaXMubWFrZUdhbWVib2FyZCgpO1xuICB9XG5cbiAgbWFrZUdhbWVib2FyZCgpIHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgbGV0IG5ld05vZGUgPSBuZXcgbm9kZShpLCBqKTtcbiAgICAgICAgYXJyLnB1c2gobmV3Tm9kZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICBfZ2V0Tm9kZUF0Q29vcmRpbmF0ZXMoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmdhbWVib2FyZC5maW5kKChub2RlKSA9PiBub2RlLnggPT09IHggJiYgbm9kZS55ID09PSB5KTtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLl9nZXROb2RlQXRDb29yZGluYXRlcyh4LCB5KTtcbiAgICBpZiAobm9kZSkge1xuICAgICAgbm9kZS5oaXQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGluc2VydFNoaXAobm9kZSkge1xuICAgIG5vZGUuc2hpcCA9IHRydWU7XG4gIH1cblxuICBnZXRSYW5kb21Ob2RlKCl7XG4gICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICByZXR1cm4gdGhpcy5fZ2V0Tm9kZUF0Q29vcmRpbmF0ZXMoeCx5KTtcbiAgfVxufVxuXG5jbGFzcyBub2RlIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmNvb3JkaW5hdGUgPSBbeCwgeV07XG4gICAgdGhpcy5oaXQgPSBmYWxzZTtcbiAgICB0aGlzLnNoaXAgPSBmYWxzZTtcbiAgICB0aGlzLm5vZGVJbmRleCA9IHBhcnNlRmxvYXQoeC50b1N0cmluZygpICsgeS50b1N0cmluZygpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2FtZWJvYXJkLFxuICBub2RlLFxufTsiLCJjb25zdCB7IGdhbWVib2FyZCwgbm9kZSB9ID0gcmVxdWlyZShcIi4vZ2FtZWJvYXJkXCIpO1xuY29uc3QgeyBzaGlwIH0gPSByZXF1aXJlKFwiLi9zaGlwXCIpO1xuXG5jbGFzcyBwbGF5ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gbmV3IGdhbWVib2FyZCgpO1xuICAgIHRoaXMuc2hpcHMgPSB0aGlzLm1ha2VTaGlwcygpO1xuICAgIHRoaXMuY29tcHV0ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmhpdHBvaW50cyA9IDA7XG4gICAgdGhpcy5zaGlwSW5zZXJ0ZWQgPSAwO1xuICB9XG5cbiAgbWFrZVNoaXBzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAodGhpcy53YXJzaGlwID0gbmV3IHNoaXAoNCkpLFxuICAgICAgKHRoaXMubG9uZ3NoaXAgPSBuZXcgc2hpcCgzKSksXG4gICAgICAodGhpcy5sb25nc2hpcDIgPSBuZXcgc2hpcCgzKSksXG4gICAgICAodGhpcy5zY291dCA9IG5ldyBzaGlwKDIpKSxcbiAgICAgICh0aGlzLnNjb3V0MiA9IG5ldyBzaGlwKDIpKSxcbiAgICAgICh0aGlzLmdhbGxleSA9IG5ldyBzaGlwKDEpKSxcbiAgICAgICh0aGlzLmdhbGxleTIgPSBuZXcgc2hpcCgxKSksXG4gICAgICAodGhpcy5nYWxsZXkzID0gbmV3IHNoaXAoMSkpLFxuICAgIF07XG4gIH1cblxuICBhZGRIaXRwb2ludHMoKXtcbiAgICB0aGlzLmhpdHBvaW50cysrO1xuICB9XG5cbiAgcmVtb3ZlSGl0cG9pbnRzKCl7XG4gICAgdGhpcy5oaXRwb2ludHMtLTtcbiAgfVxuXG4gIHNoaXBBZGRlZCgpe1xuICAgIHRoaXMuc2hpcEluc2VydGVkKys7XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGxheWVyLFxufTtcblxuLy8gbGV0IHogPSBuZXcgcGxheWVyKCk7XG4vLyBjb25zb2xlLmxvZyh6LmFkZEhpdHBvaW50cygpKTtcbi8vIGNvbnNvbGUubG9nKHouYWRkSGl0cG9pbnRzKCkpO1xuLy8gY29uc29sZS5sb2coei5yZW1vdmVIaXRwb2ludHMoKSk7XG4vLyBjb25zb2xlLmxvZyh6LmhpdHBvaW50cyk7IiwiY29uc3QgeyBnYW1lYm9hcmQsIG5vZGUgfSA9IHJlcXVpcmUoXCIuL2dhbWVib2FyZFwiKTtcbi8vIGNvbnN0IHsgcGxheWVyIH0gPSByZXF1aXJlKFwiLi9wbGF5ZXJcIik7XG5cbmNsYXNzIHNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhpdHBvaW50ID0gMDtcbiAgICB0aGlzLnN1bmsgPSB0aGlzLmlzU3VuaygpO1xuICAgIFxuICB9XG4gIGhpdCgpIHtcbiAgICB0aGlzLmhpdHBvaW50Kys7XG4gICAgdGhpcy5zdW5rID0gdGhpcy5pc1N1bmsoKTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5oaXRwb2ludCA9PSB0aGlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2hpcCxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGxheWVyLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9