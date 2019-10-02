/******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _static_arrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static_arrow */ \"./src/static_arrow.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n\n\n\nclass Game {\n  constructor(numColors, difficulty) {\n    this.numColors = numColors;\n    this.difficulty = difficulty;\n    this.leftArrows = [];\n    this.upArrows = [];\n    this.downArrows = [];\n    this.rightArrows = [];\n    this.staticArrows = new _static_arrow__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n    this.start()\n\n  }\n\n  start() {\n    this.score = 0;\n  }\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, 1000, 650);\n    this.allObjects().forEach(obj => {\n      obj.draw(ctx);\n    })\n  }\n\n  allObjects() {\n    return this.leftArrows.concat(this.upArrows, this.downArrows, this.rightArrows, this.staticArrows)\n  }\n\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Gameview; });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n\n\n\nclass Gameview {\n  constructor(ctx) {\n    this.ctx = ctx;\n\n    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n    new _input__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.game.staticArrows, this.game, this.ctx);\n  }\n\n  start() {\n    this.game.draw(this.ctx);\n  }\n\n\n\n}\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n// Entry File\n\nconsole.log(\"webpack is working??\")\n\ndocument.addEventListener('DOMContentLoaded', (event) => {\n  let canvas = document.getElementById(\"game-canvas\");\n  let ctx = canvas.getContext(\"2d\");\n  let ccr = new _game_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n  ccr.start();\n  window.ctx = ctx;\n  window.ccr = ccr;\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputHandler; });\nclass InputHandler {\n  constructor(staticA, game) {\n    document.addEventListener(\"keydown\", event => {\n      // debugger;\n      switch (event.keyCode) {\n        case 188:\n          staticA.pressDown(\"left\");\n          break; \n        case 76:\n          staticA.pressDown(\"up\");\n          break; \n        case 190:\n          staticA.pressDown(\"down\");\n          break; \n        case 191:\n          staticA.pressDown(\"right\")\n          break; \n        case 32:\n          // game.pause();\n          break;\n      }\n    })\n    document.addEventListener(\"keyup\", event => {\n      // debugger\n      switch (event.keyCode) {\n        case 188:\n          staticA.pressUp(\"left\");\n          break; \n        case 76:\n          staticA.pressUp(\"up\");\n          break; \n        case 190:\n          staticA.pressUp(\"down\");\n          break; \n        case 191:\n          staticA.pressUp(\"right\")\n          break; \n      }\n    })\n  }\n}\n\n//# sourceURL=webpack:///./src/input.js?");

/***/ }),

/***/ "./src/static_arrow.js":
/*!*****************************!*\
  !*** ./src/static_arrow.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StaticArrow; });\nclass StaticArrow {\n  constructor(game) {\n    this.leftImage = new Image;\n    this.upImage = new Image;\n    this.downImage = new Image;\n    this.rightImage = new Image;\n\n    this.leftImage.src = '../assets/images/left-static-arrow.png';\n    this.upImage.src = '../assets/images/up-static-arrow.png';\n    this.downImage.src = '../assets/images/down-static-arrow.png';\n    this.rightImage.src = '../assets/images/right-static-arrow.png';\n    this.game = game;\n  }\n\n  pressDown(arrow) {\n    switch (arrow) {\n      case \"left\":\n        this.leftImage.src = '../assets/images/p-left-static-arrow.png';\n        break;\n      case \"up\":\n        this.upImage.src = '../assets/images/p-up-static-arrow.png';\n        break;\n      case \"down\":\n        this.downImage.src = '../assets/images/p-down-static-arrow.png';\n        break;\n      case \"right\":\n        this.rightImage.src = '../assets/images/p-right-static-arrow.png';\n        break;\n    }\n  }\n\n  pressUp (arrow) {\n    switch (arrow) {\n      case \"left\":\n        this.leftImage.src = '../assets/images/left-static-arrow.png';\n        break;\n      case \"up\":\n        this.upImage.src = '../assets/images/up-static-arrow.png';\n        break;\n      case \"down\":\n        this.downImage.src = '../assets/images/down-static-arrow.png';\n        break;\n      case \"right\":\n        this.rightImage.src = '../assets/images/right-static-arrow.png';\n        break;\n    }\n  }\n\n  draw(ctx) {\n    this.leftImage.onload = () => {\n      ctx.clearRect(250, 550, 75, 75);\n      ctx.drawImage(this.leftImage, 250, 550, 75, 75);\n    }\n    this.upImage.onload = () => {\n      ctx.clearRect(400, 550, 75, 75);\n      ctx.drawImage(this.upImage, 400, 550, 75, 75);\n    }\n    this.downImage.onload = () => {\n      ctx.clearRect(550, 550, 75, 75);\n      ctx.drawImage(this.downImage, 550, 550, 75, 75);\n    }\n    this.rightImage.onload = () => {\n      ctx.clearRect(700, 550, 75, 75);\n      ctx.drawImage(this.rightImage, 700, 550, 75, 75);\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/static_arrow.js?");

/***/ })

/******/ });