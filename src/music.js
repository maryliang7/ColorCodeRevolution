import { analyze, guess } from 'web-audio-beat-detector';

export default class Music {
  constructor(songChoice, game) {
    this.music = document.getElementById("audio");
    this.muteButton = document.getElementById('volume-button');

    this.addSong();
    
    this.music.addEventListener("ended", () => {
      this.music.currentTime = 0;
      game.gameover();
    })

    this.muteButton.onclick = function toggleMute() {
      debugger

      if (!this.music.muted) {
        this.muteButton.classList.remove("fa-volume-off");
        this.muteButton.classList.add("fa-volume-up");
        this.music.muted = true;
      } else {
        this.muteButton.classList.remove("fa-volume-up");
        this.muteButton.classList.add("fa-volume-off");
        this.music.muted = false;

      }
    }

  }

  addSong() {
    let source = document.createElement('source');
    source.setAttribute('src', Music.SONGS['Kill This Love - BLACKPINK']);
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

  // toggleMute() {
  //   if (!this.music.muted) {
  //     this.muteButton.classList.remove("fa-volume-off");
  //     this.muteButton.classList.add("fa-volume-up");
  //     this.music.muted = true;
  //   } else {
  //     this.muteButton.classList.remove("fa-volume-up");
  //     this.muteButton.classList.add("fa-volume-off");
  //     this.music.muted = false;

  //   }
  // }

}

Music.SONGS = {
  'BOOMBAYAH - BLACKPINK': 'file:///Users/maryliang/Desktop/ColorCodeRevolution/assets/audio/boombayah.mp3',
  'DDU-DU DDU-DU REMIX - BLACKPINK': 'file:///Users/maryliang/Desktop/ColorCodeRevolution/assets/audio/ddd-remix.mp3',
  'Kill This Love - BLACKPINK':'file:///Users/maryliang/Desktop/ColorCodeRevolution/assets/audio/boombayah.mp3',
  'Kiss and Make Up - Dua Lipa, BLACKPINK':'file:///Users/maryliang/Desktop/ColorCodeRevolution/assets/audio/boombayah.mp3',
}




// export default class Music {
//   constructor(game) {
//     window.AudioContext = window.AudioContext || window.webkitAudioContext;
//     this.context = new AudioContext();
//     this.analyzer = this.context.createAnalyser();

//     this.analyzer.fftSize = 2048;
//     this.bufferLength = this.analyzer.frequencyBinCount;
//     this.dataArray = new Uint8Array(this.bufferLength);
//     console.log(this.dataArray)

//     this.game = game;
//     this.songBuffer;

//     document.addEventListener('click', () => {
//       this.context.resume();
//     })
//     this.analyzer.getByteTimeDomainData(this.dataArray)
//   }

//   loadSong(url) {
//     let request = new XMLHttpRequest();
//     request.open('GET', url, true);

//     request.responseType = 'arraybuffer';
//     // debugger        
//     request.onload = () => {
//       this.context.decodeAudioData(request.response, (buffer) => {
//         this.songBuffer = buffer;
//         this.playSong(buffer);
//       });
//     }
//     request.send();
//   }

//   // draw() {
//   //   let drawVisual = requestAnimationFrame(this.draw.bind(this));

//   //   this.analyzer.getByteTimeDomainData(this.dataArray);
//   //   console.log(this.dataArray);
//   // }

//   playSong(buffer) {
//     this.source = this.context.createBufferSource(); 
//     this.source.buffer = buffer;
//     this.source.connect(this.context.destination);
//     this.source.start(0);
//     guess(buffer).then(({ bpm, offset }) => {
//       console.log(bpm, offset);
//     })
//     console.log(this.dataArray)
//     // for (let i = 0; i < 50; i++) {
//     //   console.log(this.dataArray[i]);
//     // }
//     // this.draw();
//   }
// }