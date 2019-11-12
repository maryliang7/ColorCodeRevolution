import GameView from './game_view';


document.addEventListener('DOMContentLoaded', (event) => {
  changeVideo();  

  let canvas = document.getElementById("game-canvas");
  let ctx = canvas.getContext("2d");
  let startButton = document.getElementById('start-game');

  startButton.onclick = function startGame() {
    let startModal = document.getElementById('start-screen');
    startModal.classList.add('hidden');
    let songChoices = document.getElementById('song-choices');

    let options = {
      numCol: document.querySelector('input[name="numColors"]:checked').value,
      level: document.querySelector('input[name="difficulty"]:checked').value,
      song: songChoices.options[songChoices.selectedIndex].value
    }

    let ccr = new GameView(ctx, options);
    ccr.start();
    window.ctx = ctx;
    window.ccr = ccr;
  }

  let restart = document.getElementById('restart-button');
  restart.onclick = function reload() {
    location.reload()
  }
});

function changeVideo() {
  let video = document.getElementById('bg-vid');
  let source = document.createElement('source');
  source.setAttribute('src', "./assets/videos/yellow-lights.mp4");
  video.appendChild(source);

  document.getElementById('change-bg').onclick = function changeVid() {
    video.pause();
    if (video.children[0].src.includes("yellow")) {
      source.setAttribute('src', "./assets/videos/purple-wave.mp4");
    } else {
      source.setAttribute('src', "./assets/videos/yellow-lights.mp4");
    }
    video.load();
    video.play();
  }
}