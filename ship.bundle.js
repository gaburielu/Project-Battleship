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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ship.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUzs7QUFFcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6REEsUUFBUSxrQkFBa0IsRUFBRSxtQkFBTyxDQUFDLHVDQUFhO0FBQ2pELFdBQVcsU0FBUzs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7OztVQzNCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IHsgc2hpcCB9ID0gcmVxdWlyZShcIi4vc2hpcFwiKTtcbi8vIGNvbnN0IHsgcGxheWVyIH0gPSByZXF1aXJlKFwiLi9wbGF5ZXJcIik7XG5cbi8vIGNvbnN0IHBsYXllciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyMVwiKTtcblxuY2xhc3MgZ2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSB0aGlzLm1ha2VHYW1lYm9hcmQoKTtcbiAgfVxuXG4gIG1ha2VHYW1lYm9hcmQoKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGxldCBuZXdOb2RlID0gbmV3IG5vZGUoaSwgaik7XG4gICAgICAgIGFyci5wdXNoKG5ld05vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgX2dldE5vZGVBdENvb3JkaW5hdGVzKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy5nYW1lYm9hcmQuZmluZCgobm9kZSkgPT4gbm9kZS54ID09PSB4ICYmIG5vZGUueSA9PT0geSk7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5fZ2V0Tm9kZUF0Q29vcmRpbmF0ZXMoeCwgeSk7XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIG5vZGUuaGl0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpbnNlcnRTaGlwKG5vZGUpIHtcbiAgICBub2RlLnNoaXAgPSB0cnVlO1xuICB9XG5cbiAgZ2V0UmFuZG9tTm9kZSgpe1xuICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgcmV0dXJuIHRoaXMuX2dldE5vZGVBdENvb3JkaW5hdGVzKHgseSk7XG4gIH1cbn1cblxuY2xhc3Mgbm9kZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5jb29yZGluYXRlID0gW3gsIHldO1xuICAgIHRoaXMuaGl0ID0gZmFsc2U7XG4gICAgdGhpcy5zaGlwID0gZmFsc2U7XG4gICAgdGhpcy5ub2RlSW5kZXggPSBwYXJzZUZsb2F0KHgudG9TdHJpbmcoKSArIHkudG9TdHJpbmcoKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdhbWVib2FyZCxcbiAgbm9kZSxcbn07IiwiY29uc3QgeyBnYW1lYm9hcmQsIG5vZGUgfSA9IHJlcXVpcmUoXCIuL2dhbWVib2FyZFwiKTtcbi8vIGNvbnN0IHsgcGxheWVyIH0gPSByZXF1aXJlKFwiLi9wbGF5ZXJcIik7XG5cbmNsYXNzIHNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhpdHBvaW50ID0gMDtcbiAgICB0aGlzLnN1bmsgPSB0aGlzLmlzU3VuaygpO1xuICAgIFxuICB9XG4gIGhpdCgpIHtcbiAgICB0aGlzLmhpdHBvaW50Kys7XG4gICAgdGhpcy5zdW5rID0gdGhpcy5pc1N1bmsoKTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5oaXRwb2ludCA9PSB0aGlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2hpcCxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2hpcC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==