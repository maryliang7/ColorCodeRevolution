import StaticArrow from "./static_arrow";
import Arrow from './arrow';
import Music from './music'
import Effects from "./effects";

const STATE = {
  START: 0,
  PLAYING: 1,
  PAUSED: 2,
  GAMEOVER: 3,
};

export default class Game {
  constructor(gameSet) {
    this.gameSet = gameSet;
    this.arrows = []
    this.staticArrows = new StaticArrow(Game.ARROW_COORDS, this);
    this.effects = new Effects(Game.ARROW_COORDS, this);
    // this.music = new Music(1, this);
    this.gamestate = STATE.START;
    this.start()
  }

  start() {
    this.score = document.getElementById('score');
    this.currentScore = 0;
    this.score.innerHTML = this.currentScore;
    this.miss = false;
  }

  addArrows() {
    setInterval(() => {
      if (this.gamestate !== STATE.PLAYING || this.gamestate === STATE.GAMEOVER) return;
      this.createArrow();
    }, 700)

  }  

  createArrow() {
    let type = Game.ARROWS[Math.floor(Math.random()*4)];
    let color = Game.COLORS[Math.floor(Math.random()*2)];
    let arrow = new Arrow(color, type, Game.ARROW_COORDS, Game.COLORS_RGB, this);

    this.arrows.push(arrow);
  }

  missed() {
    this.effects.toggleMiss();
  }

  draw(ctx) {
    ctx.clearRect(0, 0, 625, 650);

    this.allObjects().forEach(obj => {
      obj.draw(ctx);
    });

    
    if (this.gamestate === STATE.START) {
      ctx.font = "30px Mitr";
      ctx.fillStyle = "white";
      ctx.fillText("Press SPACEBAR to start", 130, 225);
      return;
    } 

    if (this.gamestate === STATE.PAUSED) {
      ctx.font = "40px Mitr";
      ctx.fillStyle = "white";
      ctx.fillText("PAUSED", 240, 225);
    } 

    if (!this.arrows.length && this.gamestate === STATE.GAMEOVER) {
      ctx.font = "50px Mitr";
      ctx.fillStyle = "white";
      ctx.fillText(`Your Score: ${this.currentScore}`, 100, 225);
    }

  }

  allObjects() {
    return this.arrows.concat(this.staticArrows, this.effects)
  }

  checkTarget(arrowType, keys) {
    switch (arrowType) {
      case "left":
        this.arrows.forEach(arrow => {
          if ((arrow.start === Game.ARROW_COORDS.left.x) &&
              (arrow.horiHeight > 540 && arrow.horiHeight < 635) &&
              (keys[Game.CKC[arrow.color]] === true)) {
                this.remove(arrow);
                this.effects.changeHit('left');
                this.updateScore(arrow.horiHeight - 540);
          } 
        });
        break;
      case "up":
        this.arrows.forEach(arrow => {
          if ((arrow.start === Game.ARROW_COORDS.up.x) &&
              (arrow.vertHeight > 510 && arrow.vertHeight < 600) &&
              (keys[Game.CKC[arrow.color]] === true)) {
                this.remove(arrow);
                this.effects.changeHit('up');
                this.updateScore(arrow.horiHeight - 535);
          } 
        });
        break;
      case "down":
        this.arrows.forEach(arrow => {
          if ((arrow.start === Game.ARROW_COORDS.down.x) &&
              (arrow.vertHeight > 515 && arrow.vertHeight < 610) && 
              (keys[Game.CKC[arrow.color]] === true)) {
                this.remove(arrow);
                this.effects.changeHit('down');
                this.updateScore(arrow.vertHeight - 520);
          } 
        });
        break;
      case "right":
        this.arrows.forEach(arrow => {
          if ((arrow.start === Game.ARROW_COORDS.right.x) &&
              (arrow.horiHeight > 540 && arrow.horiHeight < 635) &&
              (keys[Game.CKC[arrow.color]] === true)) {
                this.remove(arrow);
                this.effects.changeHit('right');
                this.updateScore(arrow.horiHeight - 540);
          } 
        });
        break;
    }
  }

  updateScore(accuracy) {
    if (accuracy > 45 && accuracy < 55){
      this.currentScore += 100;
      this.effects.changeMessage('Perfect!')
    } else if (accuracy > 30 && accuracy < 70) {
      this.currentScore += 75;
      this.effects.changeMessage('Good')
    } else {
      this.currentScore += 50;
      this.effects.changeMessage('Okay')
    }
    this.score.innerHTML = this.currentScore;
  }

  moveObjects(delta) {
    if (this.gamestate !== STATE.PLAYING && this.gamestate !== STATE.GAMEOVER) return;
    this.arrows.forEach((object) => {
      object.move(delta);
    });
  }

  remove(object) {
    this.arrows.splice(this.arrows.indexOf(object), 1);
  }

  pause() {
    // debugger
    if (this.gamestate != STATE.PLAYING) {
      this.gamestate = STATE.PLAYING;
    } else {
      this.gamestate = STATE.PAUSED;
    }
  }

  gameover() {
    this.gamestate = STATE.GAMEOVER;
  }
}


Game.DIMS = {
  x: 600,
  y: 650
}
Game.COLORS = ['blue', 'purple', 'navy'];
Game.ARROWS = ['left', 'up', 'down', 'right'];
Game.ARROW_COORDS = {
  "left" : {
    x: 50,
    y: 550
  },
  "up" : {
    x: 200,
    y: 550
  },
  "down" : {
    x: 350,
    y: 550
  },
  "right" : {
    x: 500,
    y: 550
  }
}
Game.COLORS_RGB = {
  'blue': 'rgb(138, 241, 234',
  'purple': 'rgb(221, 162, 246)',
  'navy': 'rgb(127, 179, 225)'
} 

Game.CKC = {
  'blue': 67,
  'purple': 88,
  'navy': 90
} 

Game.difficulty = {
  'hard': {
    interval: 500,
    speed: 90
  },
  'medium': {
    interval: 700,
    speed: 70
  },
  'easy': {
    interval: 900,
    speed: 50
  }
}
