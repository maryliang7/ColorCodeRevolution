// Entry File
import GameView from './game_view';
console.log("webpack is working??")

document.addEventListener('DOMContentLoaded', (event) => {
  let canvas = document.getElementById("game-canvas");
  let ctx = canvas.getContext("2d");
  let ccr = new GameView(ctx);
  ccr.start();
  window.ctx = ctx;
  window.ccr = ccr;
});