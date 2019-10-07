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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Arrow; });\nclass Arrow {\n  constructor (color, type, coords, rgbColors, game, speed) {\n    this.color = color;\n    this.type = type;\n    this.coords = coords;\n    this.rgbColors = rgbColors;\n    this.game = game;\n    this.speed = speed;\n    this.start = this.coords[this.type].x;\n    this.horiHeight = 50;\n    this.vertHeight = 20;\n  }\n\n  draw(ctx) {\n    switch(this.type) {\n      case \"left\":\n        ctx.beginPath();\n        ctx.fillStyle = this.rgbColors[this.color];\n        ctx.moveTo(this.start, this.horiHeight);\n        ctx.lineTo(this.start + 54, this.horiHeight - 32);\n        ctx.lineTo(this.start + 35, this.horiHeight);\n        ctx.lineTo(this.start + 54, this.horiHeight + 32);\n        ctx.closePath();\n        ctx.fill();\n        ctx.lineWidth = 2;\n        ctx.strokeStyle = \"rgb(255, 255, 255)\";\n        ctx.stroke();\n        break;\n      case \"up\":\n        ctx.beginPath();\n        ctx.fillStyle = this.rgbColors[this.color];\n        ctx.moveTo(this.start + 37, this.vertHeight);\n        ctx.lineTo(this.start + 5, this.vertHeight + 54);\n        ctx.lineTo(this.start + 37, this.vertHeight + 35);\n        ctx.lineTo(this.start + 70, this.vertHeight + 54);\n        ctx.closePath();\n        ctx.fill();\n        ctx.lineWidth = 2;\n        ctx.strokeStyle = \"rgb(255, 255, 255)\";\n        ctx.stroke();\n        break;\n      case \"down\":\n        ctx.beginPath();\n        ctx.fillStyle = this.rgbColors[this.color];\n        ctx.moveTo(this.start + 37, this.vertHeight + 54);\n        ctx.lineTo(this.start + 5, this.vertHeight);\n        ctx.lineTo(this.start + 37, this.vertHeight + 20);\n        ctx.lineTo(this.start + 70, this.vertHeight);\n        ctx.closePath();\n        ctx.fill();\n        ctx.lineWidth = 2;\n        ctx.strokeStyle = \"rgb(255, 255, 255)\";\n        ctx.stroke();\n        break;\n      case \"right\":\n        ctx.beginPath();\n        ctx.fillStyle = this.rgbColors[this.color];\n        ctx.moveTo(this.start + 73, this.horiHeight);\n        ctx.lineTo(this.start + 19, this.horiHeight - 32);\n        ctx.lineTo(this.start + 40, this.horiHeight);\n        ctx.lineTo(this.start + 19, this.horiHeight + 32);\n        ctx.closePath();\n        ctx.fill();\n        ctx.lineWidth = 2;\n        ctx.strokeStyle = \"rgb(255, 255, 255)\";\n        ctx.stroke();\n        break;\n    }\n  }\n\n  move(deltaTime) {\n    if (!deltaTime) return;\n    this.horiHeight += this.speed / deltaTime;\n    this.vertHeight += this.speed / deltaTime;\n\n    if (this.horiHeight > 750 || this.vertHeight > 750) {\n      this.remove(this);\n      this.game.missed();\n    }\n  }\n\n  remove() {\n    this.game.remove(this);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/arrow.js?");

/***/ }),

/***/ "./src/effects.js":
/*!************************!*\
  !*** ./src/effects.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Effects; });\nclass Effects {\n  constructor(coords, game) {\n    this.coords = coords;\n    this.game = game;\n\n    this.message = {\n      effect: false,\n      counter: 0\n    };\n    this.missed = {\n      effect: false,\n      counter: 0\n    };\n    this.hit = {\n      effect: false,\n      counter: 0\n    };\n  }\n\n  checkCounter(obj) {\n    if (obj.counter > 20) {\n      obj.counter = 0;\n      obj.effect = false;\n    } else {\n      obj.counter += 1;\n    }\n  }\n\n  changeMessage(message) {\n    this.message.effect = message;\n    this.message.counter = 0;\n  }\n\n  changeHit(target) {\n    this.hit.effect = target;\n    this.hit.counter = 0;\n  }\n\n  toggleMiss() {\n    if (this.missed.effect) {\n      this.missed.effect = false;\n    } else {\n      this.missed.effect = true;\n    }\n  }\n\n  draw(ctx) {\n    if (this.message.effect) {\n      ctx.font = \"bold 50px Mitr\";\n      ctx.fillStyle = 'rgb(119,221,119)';\n      ctx.fillText(this.message.effect, 240, 200);\n      ctx.font = \"50px Mitr\";\n      ctx.lineWidth = 1;\n      ctx.strokeStyle = \"rgb(255, 255, 255)\";\n      ctx.strokeText(this.message.effect, 240, 200);\n      this.checkCounter(this.message);\n    }\n    if (this.missed.effect) {\n      ctx.font = \"bold 50px Mitr\";\n      ctx.fillStyle = 'rgb(255,105,97)';\n      ctx.fillText('Miss', 260, 245);\n      ctx.font = \"50px Mitr\";\n      ctx.lineWidth = 1;\n      ctx.strokeStyle = \"rgb(255, 255, 255)\";\n      ctx.strokeText('Miss', 260, 245);\n      this.checkCounter(this.missed);\n    }\n\n    if (this.hit.effect) {\n      let pos = this.coords[this.hit.effect];\n      let opacity = 1 / this.hit.counter;\n      ctx.beginPath();\n      ctx.lineWidth = 3;\n      ctx.arc(pos.x + 37, pos.y + 37, 50 + this.hit.counter, 0, 2 * Math.PI);\n      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;\n      ctx.stroke();\n      this.checkCounter(this.hit);\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/effects.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _static_arrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static_arrow */ \"./src/static_arrow.js\");\n/* harmony import */ var _arrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow */ \"./src/arrow.js\");\n/* harmony import */ var _music__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music */ \"./src/music.js\");\n/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./effects */ \"./src/effects.js\");\n\n\n\n\n\nconst STATE = {\n  START: 0,\n  PLAYING: 1,\n  PAUSED: 2,\n  GAMEOVER: 3,\n};\n\nclass Game {\n  constructor(options) {\n    this.numCol = options.numCol;\n    this.level = options.level;\n  \n    this.arrows = []\n    this.staticArrows = new _static_arrow__WEBPACK_IMPORTED_MODULE_0__[\"default\"](Game.ARROW_COORDS, this);\n    this.effects = new _effects__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Game.ARROW_COORDS, this);\n    this.music = new _music__WEBPACK_IMPORTED_MODULE_2__[\"default\"](options.song, this);\n    this.gamestate = STATE.START;\n    this.start()\n  }\n\n  start() {\n    this.score = document.getElementById('score');\n    this.currentScore = 0;\n    this.score.innerHTML = this.currentScore;\n    this.targetTally = {\n      'perfect': 0,\n      'good': 0,\n      'okay': 0,\n      'miss': 0\n    }\n    this.miss = false;\n  }\n\n  addArrows() {\n    setInterval(() => {\n      if (this.gamestate !== STATE.PLAYING || this.gamestate === STATE.GAMEOVER) return;\n      this.createArrow();\n    }, Game.difficulty[this.level].interval)\n  }  \n\n  createArrow() {\n    let type = Game.ARROWS[Math.floor(Math.random()*4)];\n    let color = Game.COLORS[Math.floor(Math.random()*this.numCol)];\n    let arrow = new _arrow__WEBPACK_IMPORTED_MODULE_1__[\"default\"](color, type, Game.ARROW_COORDS, Game.COLORS_RGB, this, Game.difficulty[this.level].speed);\n\n    this.arrows.push(arrow);\n  }\n\n  missed() {\n    this.effects.toggleMiss();\n    this.targetTally.miss += 1;\n  }\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, 625, 650);\n\n    this.allObjects().forEach(obj => {\n      obj.draw(ctx);\n    });\n\n    \n    if (this.gamestate === STATE.START) {\n      ctx.font = \"30px Mitr\";\n      ctx.fillStyle = \"white\";\n      ctx.fillText(\"Press SPACEBAR to start\", 130, 225);\n      return;\n    } \n\n    if (this.gamestate === STATE.PAUSED) {\n      ctx.font = \"40px Mitr\";\n      ctx.fillStyle = \"white\";\n      ctx.fillText(\"PAUSED\", 240, 225);\n    } \n\n    if (!this.arrows.length && this.gamestate === STATE.GAMEOVER) {\n      ctx.font = \"50px Mitr\";\n      ctx.fillStyle = \"white\";\n      ctx.fillText(`Your Score: ${this.currentScore}`, 100, 225);\n      ctx.font = \"20px Mitr\";\n      ctx.fillStyle = \"white\";\n      ctx.fillText(`Perfect: ${this.targetTally.perfect}`, 255, 275);\n      ctx.fillText(`Good: ${this.targetTally.good}`, 255, 295);\n      ctx.fillText(`Okay: ${this.targetTally.okay}`, 255, 315);\n      ctx.fillText(`Miss: ${this.targetTally.miss}`, 255, 335);\n\n    }\n\n  }\n\n  allObjects() {\n    return this.arrows.concat(this.staticArrows, this.effects)\n  }\n\n  checkTarget(arrowType, keys) {\n    switch (arrowType) {\n      case \"left\":\n        this.arrows.forEach(arrow => {\n          if ((arrow.start === Game.ARROW_COORDS.left.x) &&\n              (arrow.horiHeight > 540 && arrow.horiHeight < 635) &&\n              (keys[Game.CKC[arrow.color]] === true)) {\n                this.remove(arrow);\n                this.effects.changeHit('left');\n                this.updateScore(arrow.horiHeight - 540);\n          } \n        });\n        break;\n      case \"up\":\n        this.arrows.forEach(arrow => {\n          if ((arrow.start === Game.ARROW_COORDS.up.x) &&\n              (arrow.vertHeight > 510 && arrow.vertHeight < 600) &&\n              (keys[Game.CKC[arrow.color]] === true)) {\n                this.remove(arrow);\n                this.effects.changeHit('up');\n                this.updateScore(arrow.horiHeight - 535);\n          } \n        });\n        break;\n      case \"down\":\n        this.arrows.forEach(arrow => {\n          if ((arrow.start === Game.ARROW_COORDS.down.x) &&\n              (arrow.vertHeight > 515 && arrow.vertHeight < 610) && \n              (keys[Game.CKC[arrow.color]] === true)) {\n                this.remove(arrow);\n                this.effects.changeHit('down');\n                this.updateScore(arrow.vertHeight - 520);\n          } \n        });\n        break;\n      case \"right\":\n        this.arrows.forEach(arrow => {\n          if ((arrow.start === Game.ARROW_COORDS.right.x) &&\n              (arrow.horiHeight > 540 && arrow.horiHeight < 635) &&\n              (keys[Game.CKC[arrow.color]] === true)) {\n                this.remove(arrow);\n                this.effects.changeHit('right');\n                this.updateScore(arrow.horiHeight - 540);\n          } \n        });\n        break;\n    }\n  }\n\n  updateScore(accuracy) {\n    if (accuracy > 45 && accuracy < 55){\n      this.currentScore += 100;\n      this.effects.changeMessage('Perfect!')\n      this.targetTally.perfect += 1;\n    } else if (accuracy > 30 && accuracy < 70) {\n      this.currentScore += 75;\n      this.effects.changeMessage('Good')\n      this.targetTally.good += 1;\n    } else {\n      this.currentScore += 50;\n      this.effects.changeMessage('Okay')\n      this.targetTally.okay += 1;\n    }\n    this.score.innerHTML = this.currentScore;\n  }\n\n  moveObjects(delta) {\n    if (this.gamestate !== STATE.PLAYING && this.gamestate !== STATE.GAMEOVER) return;\n    this.arrows.forEach((object) => {\n      object.move(delta);\n    });\n  }\n\n  remove(object) {\n    this.arrows.splice(this.arrows.indexOf(object), 1);\n  }\n\n  pause() {\n    if (this.gamestate != STATE.PLAYING) {\n      this.gamestate = STATE.PLAYING;\n    } else {\n      this.gamestate = STATE.PAUSED;\n    }\n  }\n\n  gameover() {\n    this.gamestate = STATE.GAMEOVER;\n  }\n}\n\n\nGame.DIMS = {\n  x: 600,\n  y: 650\n}\nGame.COLORS = ['blue', 'purple', 'navy'];\nGame.ARROWS = ['left', 'up', 'down', 'right'];\nGame.ARROW_COORDS = {\n  \"left\" : {\n    x: 50,\n    y: 550\n  },\n  \"up\" : {\n    x: 200,\n    y: 550\n  },\n  \"down\" : {\n    x: 350,\n    y: 550\n  },\n  \"right\" : {\n    x: 500,\n    y: 550\n  }\n}\nGame.COLORS_RGB = {\n  'blue': 'rgb(138, 241, 234',\n  'purple': 'rgb(221, 162, 246)',\n  'navy': 'rgb(127, 179, 225)'\n} \n\nGame.CKC = {\n  'blue': 67,\n  'purple': 88,\n  'navy': 90\n} \n\nGame.difficulty = {\n  'very hard': {\n    interval: 300,\n    speed: 110\n  },\n  'hard': {\n    interval: 500,\n    speed: 90\n  },\n  'medium': {\n    interval: 700,\n    speed: 70\n  },\n  'easy': {\n    interval: 900,\n    speed: 50\n  },\n  'beginner': {\n    interval: 1000,\n    speed: 40\n  }\n}\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Gameview; });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n\n\n\nclass Gameview {\n  constructor(ctx, options) {\n    this.ctx = ctx;\n\n    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](options);\n    new _input__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.game.staticArrows, this.game);\n    this.lastTime = 0;\n  }\n\n  start() {\n    this.game.draw(this.ctx);\n    this.game.addArrows();\n\n    requestAnimationFrame(this.animate.bind(this));\n  }\n\n  \n  animate(time) {\n    let delta = time - this.lastTime;\n    \n    this.game.moveObjects(delta);\n    this.game.draw(this.ctx)\n\n    this.lastTime = time;\n\n    requestAnimationFrame(this.animate.bind(this));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n// Entry File\n\nconsole.log(\"webpack is working??\")\n\ndocument.addEventListener('DOMContentLoaded', (event) => {\n  changeVideo();  \n\n  let canvas = document.getElementById(\"game-canvas\");\n  let ctx = canvas.getContext(\"2d\");\n  let startButton = document.getElementById('start-game');\n  startButton.onclick = function startGame() {\n    let startModal = document.getElementById('start-screen');\n    startModal.classList.add('hidden');\n    let songChoices = document.getElementById('song-choices');\n\n    let options = {\n      numCol: document.querySelector('input[name=\"numColors\"]:checked').value,\n      level: document.querySelector('input[name=\"difficulty\"]:checked').value,\n      song: songChoices.options[songChoices.selectedIndex].value\n    }\n    \n    let ccr = new _game_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, options);\n    ccr.start();\n    window.ctx = ctx;\n    window.ccr = ccr;\n  }\n});\n\nfunction changeVideo() {\n  let video = document.getElementById('bg-vid');\n  let source = document.createElement('source');\n  source.setAttribute('src', \"file:///Users/maryliang/Desktop/ColorCodeRevolution/assets/videos/yellow-lights.mp4\");\n  video.appendChild(source);\n\n  document.getElementById('change-bg').onclick = function changeVid() {\n    video.pause();\n    if (video.children[0].src.includes(\"yellow\")) {\n      source.setAttribute('src', \"file:///Users/maryliang/Desktop/ColorCodeRevolution/assets/videos/purple-wave.mp4\");\n    } else {\n      source.setAttribute('src', \"file:///Users/maryliang/Desktop/ColorCodeRevolution/assets/videos/yellow-lights.mp4\");\n    }\n    video.load();\n    video.play();\n  }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputHandler; });\nclass InputHandler {\n  constructor(staticA, game) {\n    this.keys = {\n      67: false,\n      88: false,\n      90: false\n    }\n    this.keysColor = {\n      67: 'blue',\n      88: 'purple',\n      90: 'navy'\n    }\n    document.addEventListener(\"keydown\", event => {\n      switch (event.keyCode) {\n        case 188:\n          staticA.pressDown(\"left\");\n          if (this.keys[67] ^ this.keys[88] ^ this.keys[90]) {\n            game.checkTarget(\"left\", this.keys);\n          }\n          break; \n        case 76:\n          staticA.pressDown(\"up\");\n          if (this.keys[67] ^ this.keys[88] ^ this.keys[90]) {\n            game.checkTarget(\"up\", this.keys);\n          }\n          break; \n        case 190:\n          staticA.pressDown(\"down\");\n          if (this.keys[67] ^ this.keys[88] ^ this.keys[90]) {\n            game.checkTarget(\"down\", this.keys);\n          }\n          break; \n        case 191:\n          staticA.pressDown(\"right\");\n          if (this.keys[67] ^ this.keys[88] ^ this.keys[90]) {\n            game.checkTarget(\"right\", this.keys);\n          }\n          break;\n        case 67:\n          this.keys[67] = true;\n          staticA.pressDownColor(\"blue\");\n          staticA.changeCurrentColor('blue');\n          break;\n        case 88:\n          this.keys[88] = true;\n          staticA.pressDownColor(\"purple\");\n          staticA.changeCurrentColor('purple');\n          break;\n        case 90:\n          this.keys[90] = true;\n          staticA.pressDownColor(\"navy\");\n          staticA.changeCurrentColor('navy');\n          break;\n        case 32:\n          game.pause();\n          game.music.toggleSong()\n          break;\n      }\n    })\n    document.addEventListener(\"keyup\", event => {\n      switch (event.keyCode) {\n        case 188:\n          staticA.pressUp(\"left\");\n          break; \n        case 76:\n          staticA.pressUp(\"up\");\n          break; \n        case 190:\n          staticA.pressUp(\"down\");\n          break; \n        case 191:\n          staticA.pressUp(\"right\")\n          break; \n        case 67:\n          this.keys[67] = false;\n          break;\n        case 88:\n          this.keys[88] = false;\n          break;\n        case 90:\n          this.keys[90] = false;\n          break;\n      }\n      if (this.keys[67] ^ this.keys[88] ^ this.keys[90]) {\n        for (let color in this.keys) {\n          if (this.keys[color]) {\n            staticA.changeCurrentColor(this.keysColor[color]);\n            staticA.pressUp();\n            break;\n          }\n        }\n      }\n      if (!this.keys[67] && !this.keys[88] && !this.keys[90]) {\n        staticA.changeCurrentColor(false);        \n        staticA.pressUp(\"all\");\n      }\n    })\n  }\n}\n\n//# sourceURL=webpack:///./src/input.js?");

/***/ }),

/***/ "./src/music.js":
/*!**********************!*\
  !*** ./src/music.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Music; });\nclass Music {\n  constructor(songChoice, game) {\n    this.music = document.getElementById(\"audio\");\n    this.muteButton = document.getElementById('volume-button');\n    this.songChoice = songChoice;\n    this.addSong();\n    \n    this.music.addEventListener(\"ended\", () => {\n      this.music.currentTime = 0;\n      game.gameover();\n    })\n\n    this.muteButton.onclick = () => {\n      if (this.music.muted) {\n        this.muteButton.classList.remove(\"fa-volume-off\");\n        this.muteButton.classList.add(\"fa-volume-up\");\n        this.music.muted = false;\n      } else {\n        this.muteButton.classList.remove(\"fa-volume-up\");\n        this.muteButton.classList.add(\"fa-volume-off\");\n        this.music.muted = true;\n      }\n    }\n  }\n\n  addSong() {\n    let source = document.createElement('source');\n    source.setAttribute('src', `file:///Users/maryliang/Desktop/ColorCodeRevolution/assets/audio/${this.songChoice}`);\n    this.music.appendChild(source);\n    this.playing = false;\n  }\n\n  toggleSong() {\n    if (!this.playing) {\n      this.music.play();\n      this.playing = true;\n    } else {\n      this.music.pause();\n      this.playing = false;\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/music.js?");

/***/ }),

/***/ "./src/static_arrow.js":
/*!*****************************!*\
  !*** ./src/static_arrow.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StaticArrow; });\nclass StaticArrow {\n  constructor(coords, game) {\n    this.coords = coords;\n\n    this.leftImage = document.getElementById(\"left-static-arrow\")\n    this.upImage = document.getElementById(\"up-static-arrow\")\n    this.downImage = document.getElementById(\"down-static-arrow\")\n    this.rightImage = document.getElementById(\"right-static-arrow\")\n\n    this.game = game;\n    this.currentColor = {color: false};\n  }\n\n  changeCurrentColor(color) {\n    this.currentColor.color = color;\n  }\n\n  pressDownColor(color) {\n    this.leftImage.src = `./assets/images/${color}-left-circle.png`;\n    this.upImage.src = `./assets/images/${color}-up-circle.png`;\n    this.downImage.src = `./assets/images/${color}-down-circle.png`;\n    this.rightImage.src = `./assets/images/${color}-right-circle.png`;\n  }\n\n  pressDown(arrow) {\n    switch (arrow) {\n      case \"left\":\n        this.leftImage.src = './assets/images/empty.png';\n        break;\n      case \"up\":\n        this.upImage.src = './assets/images/empty.png';\n        break;\n      case \"down\":\n        this.downImage.src = './assets/images/empty.png';\n        break;\n      case \"right\":\n        this.rightImage.src = './assets/images/empty.png';\n        break;\n    }\n  }\n\n  pressUp (arrow) {\n    if (this.currentColor.color) {\n      this.pressDownColor(this.currentColor.color);\n      return;\n    }\n    switch (arrow) {\n      case \"left\":\n        this.leftImage.src = './assets/images/left-static-arrow.png';\n        break;\n      case \"up\":\n        this.upImage.src = './assets/images/up-static-arrow.png';\n        break;\n      case \"down\":\n        this.downImage.src = './assets/images/down-static-arrow.png';\n        break;\n      case \"right\":\n        this.rightImage.src = './assets/images/right-static-arrow.png';\n        break;\n      case \"all\":\n        this.leftImage.src = './assets/images/left-static-arrow.png';\n        this.upImage.src = './assets/images/up-static-arrow.png';\n        this.downImage.src = './assets/images/down-static-arrow.png';\n        this.rightImage.src = './assets/images/right-static-arrow.png';\n        break;\n    }\n  }\n\n  draw(ctx) {\n    ctx.drawImage(this.leftImage, this.coords.left.x, this.coords.left.y, 75, 75);\n    ctx.drawImage(this.upImage, this.coords.up.x, this.coords.up.y, 75, 75);\n    ctx.drawImage(this.downImage, this.coords.down.x, this.coords.down.y, 75, 75);\n    ctx.drawImage(this.rightImage, this.coords.right.x, this.coords.right.y, 75, 75);\n  }\n}\n\n//# sourceURL=webpack:///./src/static_arrow.js?");

/***/ })

/******/ });