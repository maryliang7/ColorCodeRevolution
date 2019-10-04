// Entry File
import GameView from './game_view';
console.log("webpack is working??")

document.addEventListener('DOMContentLoaded', (event) => {
  changeVideo();  

  let canvas = document.getElementById("game-canvas");
  let ctx = canvas.getContext("2d");
  let ccr = new GameView(ctx);
  ccr.start();
  window.ctx = ctx;
  window.ccr = ccr;
});

function changeVideo() {
  let video = document.getElementById('bg-vid');
  let source = document.createElement('source');
  source.setAttribute('src', "file:///Users/maryliang/Desktop/ColorCodeRevolution/assets/videos/yellow-lights.mp4");
  video.appendChild(source);

  document.getElementById('change-bg').onclick = function changeVid() {
    video.pause();
    if (video.children[0].src.includes("yellow")) {
      source.setAttribute('src', "file:///Users/maryliang/Desktop/ColorCodeRevolution/assets/videos/purple-wave.mp4");
    } else {
      source.setAttribute('src', "file:///Users/maryliang/Desktop/ColorCodeRevolution/assets/videos/yellow-lights.mp4");
    }
    video.load();
    video.play();
  }
}