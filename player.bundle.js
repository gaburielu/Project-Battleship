/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module) => {

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

const { gameboard } = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
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
/***/ ((module) => {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BEQSxRQUFRLFlBQVksRUFBRSxtQkFBTyxDQUFDLHVDQUFhO0FBQzNDLFFBQVEsT0FBTyxFQUFFLG1CQUFPLENBQUMsNkJBQVE7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN4QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIGdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gdGhpcy5tYWtlR2FtZWJvYXJkKCk7XG4gIH1cblxuICBtYWtlR2FtZWJvYXJkKCkge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBsZXQgbmV3Tm9kZSA9IG5ldyBub2RlKGksIGopO1xuICAgICAgICBhcnIucHVzaChuZXdOb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIF9nZXROb2RlQXRDb29yZGluYXRlcyh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZWJvYXJkLmZpbmQoKG5vZGUpID0+IG5vZGUueCA9PT0geCAmJiBub2RlLnkgPT09IHkpO1xuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuX2dldE5vZGVBdENvb3JkaW5hdGVzKHgsIHkpO1xuICAgIGlmIChub2RlKSB7XG4gICAgICBub2RlLmhpdCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaW5zZXJ0U2hpcChub2RlKSB7XG4gICAgbm9kZS5zaGlwID0gdHJ1ZTtcbiAgfVxuXG4gIGdldFJhbmRvbU5vZGUoKXtcbiAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgIHJldHVybiB0aGlzLl9nZXROb2RlQXRDb29yZGluYXRlcyh4LHkpO1xuICB9XG59XG5cbmNsYXNzIG5vZGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuY29vcmRpbmF0ZSA9IFt4LCB5XTtcbiAgICB0aGlzLmhpdCA9IGZhbHNlO1xuICAgIHRoaXMuc2hpcCA9IGZhbHNlO1xuICAgIHRoaXMubm9kZUluZGV4ID0gcGFyc2VGbG9hdCh4LnRvU3RyaW5nKCkgKyB5LnRvU3RyaW5nKCkpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnYW1lYm9hcmQsXG4gIG5vZGUsXG59OyIsImNvbnN0IHsgZ2FtZWJvYXJkIH0gPSByZXF1aXJlKFwiLi9nYW1lYm9hcmRcIik7XG5jb25zdCB7IHNoaXAgfSA9IHJlcXVpcmUoXCIuL3NoaXBcIik7XG5cbmNsYXNzIHBsYXllciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSBuZXcgZ2FtZWJvYXJkKCk7XG4gICAgdGhpcy5zaGlwcyA9IHRoaXMubWFrZVNoaXBzKCk7XG4gICAgdGhpcy5jb21wdXRlciA9IGZhbHNlO1xuICAgIHRoaXMuaGl0cG9pbnRzID0gMDtcbiAgICB0aGlzLnNoaXBJbnNlcnRlZCA9IDA7XG4gIH1cblxuICBtYWtlU2hpcHMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICh0aGlzLndhcnNoaXAgPSBuZXcgc2hpcCg0KSksXG4gICAgICAodGhpcy5sb25nc2hpcCA9IG5ldyBzaGlwKDMpKSxcbiAgICAgICh0aGlzLmxvbmdzaGlwMiA9IG5ldyBzaGlwKDMpKSxcbiAgICAgICh0aGlzLnNjb3V0ID0gbmV3IHNoaXAoMikpLFxuICAgICAgKHRoaXMuc2NvdXQyID0gbmV3IHNoaXAoMikpLFxuICAgICAgKHRoaXMuZ2FsbGV5ID0gbmV3IHNoaXAoMSkpLFxuICAgICAgKHRoaXMuZ2FsbGV5MiA9IG5ldyBzaGlwKDEpKSxcbiAgICAgICh0aGlzLmdhbGxleTMgPSBuZXcgc2hpcCgxKSksXG4gICAgXTtcbiAgfVxuXG4gIGFkZEhpdHBvaW50cygpe1xuICAgIHRoaXMuaGl0cG9pbnRzKys7XG4gIH1cblxuICByZW1vdmVIaXRwb2ludHMoKXtcbiAgICB0aGlzLmhpdHBvaW50cy0tO1xuICB9XG5cbiAgc2hpcEFkZGVkKCl7XG4gICAgdGhpcy5zaGlwSW5zZXJ0ZWQrKztcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwbGF5ZXIsXG59O1xuXG4vLyBsZXQgeiA9IG5ldyBwbGF5ZXIoKTtcbi8vIGNvbnNvbGUubG9nKHouYWRkSGl0cG9pbnRzKCkpO1xuLy8gY29uc29sZS5sb2coei5hZGRIaXRwb2ludHMoKSk7XG4vLyBjb25zb2xlLmxvZyh6LnJlbW92ZUhpdHBvaW50cygpKTtcbi8vIGNvbnNvbGUubG9nKHouaGl0cG9pbnRzKTsiLCJjbGFzcyBzaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRwb2ludCA9IDA7XG4gICAgdGhpcy5zdW5rID0gdGhpcy5pc1N1bmsoKTtcbiAgICBcbiAgfVxuICBoaXQoKSB7XG4gICAgdGhpcy5oaXRwb2ludCsrO1xuICAgIHRoaXMuc3VuayA9IHRoaXMuaXNTdW5rKCk7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaGl0cG9pbnQgPT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNoaXAsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BsYXllci5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==