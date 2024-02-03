/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

function getRandomIndex(){
    let random = Math.floor(Math.random()*100);
    return random < 10 ? "0" + random : random.toString();
}
/////////////////AUDIO/////////////////

const cannon1 = document.getElementById('cannonAudio1');
const cannon2 = document.getElementById('cannonAudio2');
const cannon3 = document.getElementById('cannonAudio3');
const splash1 = document.getElementById('waterSplashAudio1');
const splash2 = document.getElementById('waterSplashAudio2');
const splahs3 = document.getElementById('waterSplashAudio3');
const splash4 = document.getElementById('waterSplashAudio4');
const splash5 = document.getElementById('waterSplashAudio5');

function playCannon() {
  cannon1.play();
  // let random = Math.floor(Math.random() * 3);
  // if(random == 1){
  //   cannon1.play();
  // } else if (random == 2){
  //   cannon2.play();
  // } else {
  //   cannon3.play();
  // }
}

function playSplash() {
  let random = Math.floor(Math.random() * 5);
}

/////////////////FOOTER/////////////////

const toggleFooterButton = document.getElementById("footer-toggle");
const footer = document.getElementById("hiddenFooter");

function toggleFooter() {
  footer.classList.toggle("hidden");
  footer.classList.toggle("show");
}

toggleFooterButton.addEventListener("click", toggleFooter);

/////////////////FOOTER/////////////////

module.exports = {
    getRandomIndex,
    playCannon,
    playSplash,
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/utils.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0UmFuZG9tSW5kZXgoKXtcbiAgICBsZXQgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwMCk7XG4gICAgcmV0dXJuIHJhbmRvbSA8IDEwID8gXCIwXCIgKyByYW5kb20gOiByYW5kb20udG9TdHJpbmcoKTtcbn1cbi8vLy8vLy8vLy8vLy8vLy8vQVVESU8vLy8vLy8vLy8vLy8vLy8vL1xuXG5jb25zdCBjYW5ub24xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhbm5vbkF1ZGlvMScpO1xuY29uc3QgY2Fubm9uMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5ub25BdWRpbzInKTtcbmNvbnN0IGNhbm5vbjMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2Fubm9uQXVkaW8zJyk7XG5jb25zdCBzcGxhc2gxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dhdGVyU3BsYXNoQXVkaW8xJyk7XG5jb25zdCBzcGxhc2gyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dhdGVyU3BsYXNoQXVkaW8yJyk7XG5jb25zdCBzcGxhaHMzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dhdGVyU3BsYXNoQXVkaW8zJyk7XG5jb25zdCBzcGxhc2g0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dhdGVyU3BsYXNoQXVkaW80Jyk7XG5jb25zdCBzcGxhc2g1ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dhdGVyU3BsYXNoQXVkaW81Jyk7XG5cbmZ1bmN0aW9uIHBsYXlDYW5ub24oKSB7XG4gIGNhbm5vbjEucGxheSgpO1xuICAvLyBsZXQgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyk7XG4gIC8vIGlmKHJhbmRvbSA9PSAxKXtcbiAgLy8gICBjYW5ub24xLnBsYXkoKTtcbiAgLy8gfSBlbHNlIGlmIChyYW5kb20gPT0gMil7XG4gIC8vICAgY2Fubm9uMi5wbGF5KCk7XG4gIC8vIH0gZWxzZSB7XG4gIC8vICAgY2Fubm9uMy5wbGF5KCk7XG4gIC8vIH1cbn1cblxuZnVuY3Rpb24gcGxheVNwbGFzaCgpIHtcbiAgbGV0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vL0ZPT1RFUi8vLy8vLy8vLy8vLy8vLy8vXG5cbmNvbnN0IHRvZ2dsZUZvb3RlckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vdGVyLXRvZ2dsZVwiKTtcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlkZGVuRm9vdGVyXCIpO1xuXG5mdW5jdGlvbiB0b2dnbGVGb290ZXIoKSB7XG4gIGZvb3Rlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICBmb290ZXIuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG59XG5cbnRvZ2dsZUZvb3RlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlRm9vdGVyKTtcblxuLy8vLy8vLy8vLy8vLy8vLy9GT09URVIvLy8vLy8vLy8vLy8vLy8vL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBnZXRSYW5kb21JbmRleCxcbiAgICBwbGF5Q2Fubm9uLFxuICAgIHBsYXlTcGxhc2gsXG4gIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3V0aWxzLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9