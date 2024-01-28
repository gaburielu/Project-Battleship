/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module) => {

// const { ship } = require("./ship");
// const { player } = require("./player");

const player = document.getElementById("player1");

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
  }
}

// let board = new gameboard();
// board.receiveAttack(2,3);
// console.log(board.gameboard);

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

let play = new player();
console.log(play.board._getNodeAtCoordinates(2, 4));
play.galley.hit++;
console.log(play.ships);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTOztBQUVwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDckRBLFFBQVEsa0JBQWtCLEVBQUUsbUJBQU8sQ0FBQyx1Q0FBYTtBQUNqRCxRQUFRLE9BQU8sRUFBRSxtQkFBTyxDQUFDLDZCQUFROztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbENBLFFBQVEsa0JBQWtCLEVBQUUsbUJBQU8sQ0FBQyx1Q0FBYTtBQUNqRCxXQUFXLFNBQVM7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7VUMzQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IHsgc2hpcCB9ID0gcmVxdWlyZShcIi4vc2hpcFwiKTtcbi8vIGNvbnN0IHsgcGxheWVyIH0gPSByZXF1aXJlKFwiLi9wbGF5ZXJcIik7XG5cbmNvbnN0IHBsYXllciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyMVwiKTtcblxuY2xhc3MgZ2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSB0aGlzLm1ha2VHYW1lYm9hcmQoKTtcbiAgfVxuXG4gIG1ha2VHYW1lYm9hcmQoKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGxldCBuZXdOb2RlID0gbmV3IG5vZGUoaSwgaik7XG4gICAgICAgIGFyci5wdXNoKG5ld05vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgX2dldE5vZGVBdENvb3JkaW5hdGVzKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy5nYW1lYm9hcmQuZmluZCgobm9kZSkgPT4gbm9kZS54ID09PSB4ICYmIG5vZGUueSA9PT0geSk7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5fZ2V0Tm9kZUF0Q29vcmRpbmF0ZXMoeCwgeSk7XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIG5vZGUuaGl0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuLy8gICBpbnNlcnRTaGlwKHgseSl7XG4vLyAgIH1cbn1cblxuY2xhc3Mgbm9kZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5jb29yZGluYXRlID0gW3gsIHldO1xuICAgIHRoaXMuaGl0ID0gZmFsc2U7XG4gICAgdGhpcy5zaGlwID0gZmFsc2U7XG4gIH1cbn1cblxuLy8gbGV0IGJvYXJkID0gbmV3IGdhbWVib2FyZCgpO1xuLy8gYm9hcmQucmVjZWl2ZUF0dGFjaygyLDMpO1xuLy8gY29uc29sZS5sb2coYm9hcmQuZ2FtZWJvYXJkKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdhbWVib2FyZCxcbiAgbm9kZSxcbn07XG4iLCJjb25zdCB7IGdhbWVib2FyZCwgbm9kZSB9ID0gcmVxdWlyZShcIi4vZ2FtZWJvYXJkXCIpO1xuY29uc3QgeyBzaGlwIH0gPSByZXF1aXJlKFwiLi9zaGlwXCIpO1xuXG5jbGFzcyBwbGF5ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gbmV3IGdhbWVib2FyZCgpO1xuICAgIHRoaXMuc2hpcHMgPSB0aGlzLm1ha2VTaGlwcygpO1xuICB9XG5cbiAgbWFrZVNoaXBzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAodGhpcy53YXJzaGlwID0gbmV3IHNoaXAoNCkpLFxuICAgICAgKHRoaXMubG9uZ3NoaXAgPSBuZXcgc2hpcCgzKSksXG4gICAgICAodGhpcy5sb25nc2hpcDIgPSBuZXcgc2hpcCgzKSksXG4gICAgICAodGhpcy5zY291dCA9IG5ldyBzaGlwKDIpKSxcbiAgICAgICh0aGlzLnNjb3V0MiA9IG5ldyBzaGlwKDIpKSxcbiAgICAgICh0aGlzLmdhbGxleSA9IG5ldyBzaGlwKDEpKSxcbiAgICAgICh0aGlzLmdhbGxleTIgPSBuZXcgc2hpcCgxKSksXG4gICAgICAodGhpcy5nYWxsZXkzID0gbmV3IHNoaXAoMSkpLFxuICAgIF07XG4gIH1cblxuICBpbnNlcnRTaGlwKHgseSl7XG4gICAgXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBsYXllcixcbn07XG5cbmxldCBwbGF5ID0gbmV3IHBsYXllcigpO1xuY29uc29sZS5sb2cocGxheS5ib2FyZC5fZ2V0Tm9kZUF0Q29vcmRpbmF0ZXMoMiwgNCkpO1xucGxheS5nYWxsZXkuaGl0Kys7XG5jb25zb2xlLmxvZyhwbGF5LnNoaXBzKTtcbiIsImNvbnN0IHsgZ2FtZWJvYXJkLCBub2RlIH0gPSByZXF1aXJlKFwiLi9nYW1lYm9hcmRcIik7XG4vLyBjb25zdCB7IHBsYXllciB9ID0gcmVxdWlyZShcIi4vcGxheWVyXCIpO1xuXG5jbGFzcyBzaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRwb2ludCA9IDA7XG4gICAgdGhpcy5zdW5rID0gdGhpcy5pc1N1bmsoKTtcbiAgICB0aGlzLnNoaXAgPSBuZXcgQXJyYXkodGhpcy5sZW5ndGgpO1xuICB9XG4gIGhpdCgpIHtcbiAgICB0aGlzLmhpdHBvaW50Kys7XG4gICAgdGhpcy5zdW5rID0gdGhpcy5pc1N1bmsoKTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5oaXRwb2ludCA9PSB0aGlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2hpcCxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGxheWVyLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9