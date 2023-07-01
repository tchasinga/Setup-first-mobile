/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Modules/Cards.js":
/*!******************************!*\
  !*** ./src/Modules/Cards.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animationCode: () => (/* binding */ animationCode)\n/* harmony export */ });\nconst animationCode =() => {\r\n    const tl = gsap.timeline({ defaults: { duration: 1.75, ease: \"elastic.out(1, 0.3)\" } });\r\n\r\ntl.fromTo('.containerCards', { scale: 0 }, { scale: 1 });\r\ntl.fromTo('.svgImgDesign', { opacity: 0, x: -50, rotation: \"-55deg\", transform: \"scale(1.1)\" }, { opacity: 1, x: 0, rotation: '0deg' });\r\ntl.fromTo('.getLearn', { opacity: 0 }, { opacity: 1 });\r\n\r\ntl.fromTo('.element1', { opacity: 0, x: -100 }, { opacity: 1, x: 0 });\r\ntl.fromTo('.element2', { opacity: 0, y: 100 }, { opacity: 1, y: 0 });\r\ntl.fromTo('.element3', { opacity: 0, rotation: \"-90deg\" }, { opacity: 1, rotation: '0deg' });\r\ntl.fromTo('.element4', { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1 });\r\ntl.fromTo('.element5', { opacity: 0, y: 50 }, { opacity: 1, y: 0 });\r\n\r\ngsap.to('.pageReact', { rotation: '360', duration: 20, repeat: -1, ease: 'linear' });\r\n\r\n\r\n}\n\n//# sourceURL=webpack://setup-first-mobile/./src/Modules/Cards.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules_Cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/Cards.js */ \"./src/Modules/Cards.js\");\n\r\n(0,_Modules_Cards_js__WEBPACK_IMPORTED_MODULE_0__.animationCode)()\r\n\r\nconst menuHamberger = document.querySelector('.menu-hamberger')\r\nconst navMenu = document.querySelector('.nav-links')\r\n\r\nmenuHamberger.addEventListener('click', () =>{\r\n    navMenu.classList.toggle('mobile-menu')\r\n})\r\n\r\n// Change image Using JavaScript\r\n\r\nlet getImg = document.querySelector('.imgChange')\r\ngetImg.innerHTML = `\r\n<img id=\"image\" src=\"img/MrTwo.jpg\" alt=\"\">\r\n`;\r\n\r\nconst image = document.getElementById('image')\r\nlet images = [\r\n    'img/MrFive.jpg',\r\n    'img/MrTwo.jpg',\r\n    'img/MrThree.jpg',\r\n    'img/MrFour.jpg',\r\n    'img/MrFive.jpg',\r\n    'img/MrSix.jpg',\r\n    'img/MrSeven.jpg',\r\n]\r\n\r\nsetInterval(function(){  \r\n    let random = Math.floor(Math.random() * images.length)\r\n    image.src = images[random]\r\n}, 10000);\r\n\r\n\n\n//# sourceURL=webpack://setup-first-mobile/./src/index.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;