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

/***/ "./src/arrow.js":
/*!**********************!*\
  !*** ./src/arrow.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Arrow; });\nclass Arrow {\n  constructor (color, type, coords, rgbColors, game) {\n    this.color = color;\n    this.type = type;\n    this.coords = coords;\n    this.rgbColors = rgbColors;\n    this.game = game;\n    this.start = this.coords[this.type].x;\n    this.horiHeight = 50;\n    this.vertHeight = 20;\n  }\n\n  draw(ctx) {\n    switch(this.type) {\n      case \"left\":\n        ctx.beginPath();\n        ctx.fillStyle = this.rgbColors[this.color];\n        ctx.moveTo(this.start, this.horiHeight);\n        ctx.lineTo(this.start + 54, this.horiHeight - 32);\n        ctx.lineTo(this.start + 35, this.horiHeight);\n        ctx.lineTo(this.start + 54, this.horiHeight + 32);\n        ctx.closePath();\n        ctx.fill();\n        ctx.lineWidth = 2;\n        ctx.strokeStyle = \"rgb(255, 255, 255)\";\n        ctx.stroke();\n        break;\n      case \"up\":\n        ctx.beginPath();\n        ctx.fillStyle = this.rgbColors[this.color];\n        ctx.moveTo(this.start + 40, this.vertHeight);\n        ctx.lineTo(this.start + 8, this.vertHeight + 54);\n        ctx.lineTo(this.start + 40, this.vertHeight + 35);\n        ctx.lineTo(this.start + 72, this.vertHeight + 54);\n        ctx.closePath();\n        ctx.fill();\n        ctx.lineWidth = 2;\n        ctx.strokeStyle = \"rgb(255, 255, 255)\";\n        ctx.stroke();\n        break;\n      case \"down\":\n        ctx.beginPath();\n        ctx.fillStyle = this.rgbColors[this.color];\n        ctx.moveTo(this.start + 40, this.vertHeight + 54);\n        ctx.lineTo(this.start + 8, this.vertHeight);\n        ctx.lineTo(this.start + 40, this.vertHeight + 20);\n        ctx.lineTo(this.start + 72, this.vertHeight);\n        ctx.closePath();\n        ctx.fill();\n        ctx.lineWidth = 2;\n        ctx.strokeStyle = \"rgb(255, 255, 255)\";\n        ctx.stroke();\n        break;\n      case \"right\":\n        ctx.beginPath();\n        ctx.fillStyle = this.rgbColors[this.color];\n        ctx.moveTo(this.start + 73, this.horiHeight);\n        ctx.lineTo(this.start + 19, this.horiHeight - 32);\n        ctx.lineTo(this.start + 40, this.horiHeight);\n        ctx.lineTo(this.start + 19, this.horiHeight + 32);\n        ctx.closePath();\n        ctx.fill();\n        ctx.lineWidth = 2;\n        ctx.strokeStyle = \"rgb(255, 255, 255)\";\n        ctx.stroke();\n        break;\n    }\n  }\n\n\n  move(deltaTime) {\n    if (!deltaTime) return;\n    this.horiHeight += 90 / deltaTime;\n    this.vertHeight += 90 / deltaTime;\n\n    if (this.horiHeight > 650 || this.vertHeight > 650) {\n      this.remove(this)\n    }\n  }\n\n  remove() {\n    this.game.remove(this);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/arrow.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _static_arrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static_arrow */ \"./src/static_arrow.js\");\n/* harmony import */ var _arrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow */ \"./src/arrow.js\");\n\n\n\nclass Game {\n  constructor(numColors, difficulty) {\n    this.numColors = numColors;\n    this.difficulty = difficulty || 6;\n\n    this.arrows = []\n    this.staticArrows = new _static_arrow__WEBPACK_IMPORTED_MODULE_0__[\"default\"](Game.ARROW_COORDS, this);\n\n    this.start()\n    this.paused = false;\n  }\n\n  start() {\n    this.score = 0;\n  }\n\n  addArrows() {\n    setInterval(() => {\n      this.createArrow();\n    }, 500)\n\n  }  \n\n  createArrow() {\n    let type = Game.ARROWS[Math.floor(Math.random()*4)];\n    let color = Game.COLORS[Math.floor(Math.random()*2)];\n    let arrow = new _arrow__WEBPACK_IMPORTED_MODULE_1__[\"default\"](color, type, Game.ARROW_COORDS, Game.COLORS_RGB, this);\n\n    this.arrows.push(arrow);\n  }\n\n\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, 1000, 650);\n    this.allObjects().forEach(obj => {\n      obj.draw(ctx);\n    })\n    // ctx.beginPath();\n    // ctx.fillStyle = \"rgb(221, 162, 246)\"\n    // ctx.moveTo(250, 50);\n    // ctx.lineTo(304, 82);\n    // ctx.lineTo(285, 50);\n    // ctx.lineTo(304, 18);\n    // ctx.closePath();\n    // ctx.fill();\n    // ctx.lineWidth = 2;\n    // ctx.strokeStyle = \"rgb(255, 255, 255)\";\n    // ctx.stroke();\n\n    // ctx.beginPath();\n    // ctx.fillStyle = 'rgb(127, 179, 225)'\n    // ctx.moveTo(400 + 40, 120);\n    // ctx.lineTo(400 + 8, 120 + 54);\n    // ctx.lineTo(400 + 40, 120 + 35);\n    // ctx.lineTo(400 + 72, 120 + 54);\n    // ctx.closePath();\n    // ctx.fill();\n    // ctx.lineWidth = 2;\n    // ctx.strokeStyle = \"rgb(255, 255, 255)\";\n    // ctx.stroke();\n\n    // ctx.beginPath();\n    // ctx.fillStyle = 'rgb(221, 162, 246)'\n    // ctx.moveTo(550 + 40, 320 + 54);\n    // ctx.lineTo(550 + 8, 320);\n    // ctx.lineTo(550 + 40, 320 + 20);\n    // ctx.lineTo(550 + 72, 320);\n    // ctx.closePath();\n    // ctx.fill();\n    // ctx.lineWidth = 2;\n    // ctx.strokeStyle = \"rgb(255, 255, 255)\";\n    // ctx.stroke();\n\n    // ctx.beginPath();\n    // ctx.fillStyle = \"rgb(127, 179, 225)\"\n    // ctx.moveTo(758, 150);\n    // ctx.lineTo(704, 118);\n    // ctx.lineTo(723, 150);\n    // ctx.lineTo(704, 182);\n    // ctx.closePath();\n    // ctx.fill();\n    // ctx.lineWidth = 2;\n    // ctx.strokeStyle = \"rgb(255, 255, 255)\";\n    // ctx.stroke();\n\n\n  }\n\n  allObjects() {\n    return this.arrows.concat(this.staticArrows)\n  }\n\n  checkTarget(arrowType, keys) {\n    switch (arrowType) {\n      case \"left\":\n        this.arrows.forEach(arrow => {\n          if ((arrow.start === Game.ARROW_COORDS.left.x) &&\n              (arrow.horiHeight > 540 && arrow.horiHeight < 635) &&\n              (keys[Game.CKC[arrow.color]] === true)) {\n                this.remove(arrow);\n          } \n        });\n        break;\n      case \"up\":\n        this.arrows.forEach(arrow => {\n          if ((arrow.start === Game.ARROW_COORDS.up.x) &&\n              (arrow.vertHeight > 510 && arrow.vertHeight < 585) &&\n              (keys[Game.CKC[arrow.color]] === true)) {\n                this.remove(arrow);\n          } \n        });\n        break;\n      case \"down\":\n        this.arrows.forEach(arrow => {\n          if ((arrow.start === Game.ARROW_COORDS.down.x) &&\n              (arrow.vertHeight > 515 && arrow.vertHeight < 610) && \n              (keys[Game.CKC[arrow.color]] === true)) {\n                this.remove(arrow);\n          } \n        });\n        break;\n      case \"right\":\n        this.arrows.forEach(arrow => {\n          if ((arrow.start === Game.ARROW_COORDS.right.x) &&\n              (arrow.horiHeight > 540 && arrow.horiHeight < 635) &&\n              (keys[Game.CKC[arrow.color]] === true)) {\n                this.remove(arrow);\n          } \n        });\n        break;\n    }\n  }\n\n\n  moveObjects(delta) {\n    this.arrows.forEach((object) => {\n      object.move(delta);\n    });\n  }\n\n  remove(object) {\n    this.arrows.splice(this.arrows.indexOf(object), 1);\n  }\n\n  pause() {\n    debugger\n    this.paused = !this.paused;\n  }\n}\n\n\nGame.DIMS = {\n  x: 1000,\n  y: 650\n}\nGame.COLORS = ['blue', 'purple', 'navy'];\nGame.ARROWS = ['left', 'up', 'down', 'right'];\nGame.ARROW_COORDS = {\n  \"left\" : {\n    x: 250,\n    y: 550\n  },\n  \"up\" : {\n    x: 400,\n    y: 550\n  },\n  \"down\" : {\n    x: 550,\n    y: 550\n  },\n  \"right\" : {\n    x: 700,\n    y: 550\n  }\n}\nGame.COLORS_RGB = {\n  'blue': 'rgb(138, 241, 234',\n  'purple': 'rgb(221, 162, 246)',\n  'navy': 'rgb(127, 179, 225)'\n} \n\nGame.CKC = {\n  'blue': 67,\n  'purple': 88,\n  'navy': 90\n} \n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Gameview; });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n\n\n\n\nclass Gameview {\n  constructor(ctx) {\n    this.ctx = ctx;\n\n    // this.menu = new Menu()\n    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n    new _input__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.game.staticArrows, this.game, this.ctx);\n    this.lastTime = 0;\n  }\n\n  start() {\n    this.game.draw(this.ctx);\n    this.game.addArrows();\n\n    requestAnimationFrame(this.animate.bind(this));\n  }\n\n  \n  animate(time) {\n    let delta = time - this.lastTime;\n    \n    this.game.moveObjects(delta);\n    this.game.draw(this.ctx)\n\n    this.lastTime = time;\n\n    requestAnimationFrame(this.animate.bind(this));\n    // this.game.draw(this.ctx)\n\n  }\n\n\n\n}\n\n//# sourceURL=webpack:///./src/game_view.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputHandler; });\nclass InputHandler {\n  constructor(staticA, game) {\n    this.keys = {\n      67: false,\n      88: false,\n      90: false,\n    }\n    document.addEventListener(\"keydown\", event => {\n      // debugger;\n      switch (event.keyCode) {\n        case 188:\n          staticA.pressDown(\"left\");\n          if (this.keys[67] ^ this.keys[88] ^ this.keys[90]) {\n            game.checkTarget(\"left\", this.keys);\n          }\n          break; \n        case 76:\n          staticA.pressDown(\"up\");\n          if (this.keys[67] ^ this.keys[88] ^ this.keys[90]) {\n            game.checkTarget(\"up\", this.keys);\n          }\n          break; \n        case 190:\n          staticA.pressDown(\"down\");\n          if (this.keys[67] ^ this.keys[88] ^ this.keys[90]) {\n            game.checkTarget(\"down\", this.keys);\n          }\n          break; \n        case 191:\n          staticA.pressDown(\"right\");\n          if (this.keys[67] ^ this.keys[88] ^ this.keys[90]) {\n            game.checkTarget(\"right\", this.keys);\n          }\n          break;\n        case 67:\n          this.keys[67] = true;\n          break;\n        case 88:\n          this.keys[88] = true;\n          break;\n        case 90:\n          this.keys[90] = true;\n          break;\n        case 32:\n          // debugger\n          game.pause();\n          break;\n      }\n    })\n    document.addEventListener(\"keyup\", event => {\n      // debugger\n      switch (event.keyCode) {\n        case 188:\n          staticA.pressUp(\"left\");\n          break; \n        case 76:\n          staticA.pressUp(\"up\");\n          break; \n        case 190:\n          staticA.pressUp(\"down\");\n          break; \n        case 191:\n          staticA.pressUp(\"right\")\n          break; \n        case 67:\n          this.keys[67] = false;\n          break;\n        case 88:\n          this.keys[88] = false;\n          break;\n        case 90:\n          this.keys[90] = false;\n          break;\n      }\n    })\n  }\n}\n\n//# sourceURL=webpack:///./src/input.js?");

/***/ }),

/***/ "./src/static_arrow.js":
/*!*****************************!*\
  !*** ./src/static_arrow.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StaticArrow; });\nclass StaticArrow {\n  constructor(coords, game) {\n    this.coords = coords;\n\n    // this.leftImage = new Image;\n    // this.upImage = new Image;\n    // this.downImage = new Image;\n    // this.rightImage = new Image;\n    this.leftImage = document.getElementById(\"left-static-arrow\")\n    this.upImage = document.getElementById(\"up-static-arrow\")\n    this.downImage = document.getElementById(\"down-static-arrow\")\n    this.rightImage = document.getElementById(\"right-static-arrow\")\n\n    // this.leftImage.src = '../assets/images/left-static-arrow.png';\n    // this.upImage.src = '../assets/images/up-static-arrow.png';\n    // this.downImage.src = '../assets/images/down-static-arrow.png';\n    // this.rightImage.src = '../assets/images/right-static-arrow.png';\n    this.game = game;\n  }\n\n  pressDown(arrow) {\n    switch (arrow) {\n      case \"left\":\n        this.leftImage.src = '../assets/images/empty.png';\n        break;\n      case \"up\":\n        this.upImage.src = '../assets/images/empty.png';\n        break;\n      case \"down\":\n        this.downImage.src = '../assets/images/empty.png';\n        break;\n      case \"right\":\n        this.rightImage.src = '../assets/images/empty.png';\n        break;\n    }\n  }\n\n  pressUp (arrow) {\n    switch (arrow) {\n      case \"left\":\n        this.leftImage.src = '../assets/images/left-static-arrow.png';\n        break;\n      case \"up\":\n        this.upImage.src = '../assets/images/up-static-arrow.png';\n        break;\n      case \"down\":\n        this.downImage.src = '../assets/images/down-static-arrow.png';\n        break;\n      case \"right\":\n        this.rightImage.src = '../assets/images/right-static-arrow.png';\n        break;\n    }\n  }\n\n  draw(ctx) {\n    // this.leftImage.onload = () => {\n    //   // debugger\n    //   ctx.clearRect(this.coords.left.x, this.coords.left.y, 75, 75);\n    //   ctx.drawImage(this.leftImage, this.coords.left.x, this.coords.left.y, 75, 75);\n    // }\n\n    // this.upImage.onload = () => {\n    //   ctx.clearRect(this.coords.up.x, this.coords.up.y, 75, 75);\n    //   ctx.drawImage(this.upImage, this.coords.up.x, this.coords.up.y, 75, 75);\n    // }\n    // this.downImage.onload = () => {\n    //   ctx.clearRect(this.coords.down.x, this.coords.down.y, 75, 75);\n    //   ctx.drawImage(this.downImage, this.coords.down.x, this.coords.down.y, 75, 75);\n    // }\n    // this.rightImage.onload = () => {\n    //   ctx.clearRect(this.coords.right.x, this.coords.right.y, 75, 75);\n    //   ctx.drawImage(this.rightImage, this.coords.right.x, this.coords.right.y, 75, 75);\n    // }\n\n    ctx.drawImage(this.leftImage, this.coords.left.x, this.coords.left.y, 75, 75);\n    ctx.drawImage(this.upImage, this.coords.up.x, this.coords.up.y, 75, 75);\n    ctx.drawImage(this.downImage, this.coords.down.x, this.coords.down.y, 75, 75);\n    ctx.drawImage(this.rightImage, this.coords.right.x, this.coords.right.y, 75, 75);\n  }\n}\n\n//# sourceURL=webpack:///./src/static_arrow.js?");

/***/ })

/******/ });