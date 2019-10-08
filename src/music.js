export default class Music {
  constructor(songChoice, game) {
    this.music = document.getElementById("audio");
    this.muteButton = document.getElementById('volume-button');
    this.songChoice = songChoice;
    this.addSong();
    
    this.music.addEventListener("ended", () => {
      this.music.currentTime = 0;
      game.gameover();
    })

    this.muteButton.onclick = () => {
      if (this.music.muted) {
        this.muteButton.classList.remove("fa-volume-off");
        this.muteButton.classList.add("fa-volume-up");
        this.music.muted = false;
      } else {
        this.muteButton.classList.remove("fa-volume-up");
        this.muteButton.classList.add("fa-volume-off");
        this.music.muted = true;
      }
    }
  }

  addSong() {
    let source = document.createElement('source');
    source.setAttribute('src', `./assets/audio/${this.songChoice}`);
    this.music.appendChild(source);
    this.playing = false;
  }

  toggleSong() {
    if (!this.playing) {
      this.music.play();
      this.playing = true;
    } else {
      this.music.pause();
      this.playing = false;
    }
  }
}
