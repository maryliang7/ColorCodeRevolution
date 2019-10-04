import StaticArrow from "./static_arrow";
import Arrow from './arrow';
import { analyze } from 'web-audio-beat-detector';

export default class Game {
  constructor(numColors, difficulty) {
    this.numColors = numColors;
    this.difficulty = difficulty || 6;

    this.arrows = []
    this.staticArrows = new StaticArrow(Game.ARROW_COORDS, this);

    this.start()
    this.paused = false;
    this.miss = false;
  }

  start() {
    this.score = 0;
  }

  addArrows() {
    setInterval(() => {
      this.createArrow();
    }, 800)

  }  

  createArrow() {
    let type = Game.ARROWS[Math.floor(Math.random()*4)];
    let color = Game.COLORS[Math.floor(Math.random()*2)];
    let arrow = new Arrow(color, type, Game.ARROW_COORDS, Game.COLORS_RGB, this);

    this.arrows.push(arrow);
  }

  missed() {
    this.miss = !this.miss
  }

  draw(ctx) {
    ctx.clearRect(0, 0, 625, 650);
    this.allObjects().forEach(obj => {
      obj.draw(ctx);
    })
    let image;
    if (this.miss) {
      image = document.getElementById('miss-arrow');
      this.miss = !this.miss;
    } else {
      image = document.getElementById('arrow');
    }
    ctx.drawImage(image, 295, 225, 75, 75);

  }

  allObjects() {
    return this.arrows.concat(this.staticArrows)
  }

  checkTarget(arrowType, keys) {
    switch (arrowType) {
      case "left":
        this.arrows.forEach(arrow => {
          if ((arrow.start === Game.ARROW_COORDS.left.x) &&
              (arrow.horiHeight > 540 && arrow.horiHeight < 635) &&
              (keys[Game.CKC[arrow.color]] === true)) {
                this.remove(arrow);
          } 
        });
        break;
      case "up":
        this.arrows.forEach(arrow => {
          if ((arrow.start === Game.ARROW_COORDS.up.x) &&
              (arrow.vertHeight > 510 && arrow.vertHeight < 585) &&
              (keys[Game.CKC[arrow.color]] === true)) {
                this.remove(arrow);
          } 
        });
        break;
      case "down":
        this.arrows.forEach(arrow => {
          if ((arrow.start === Game.ARROW_COORDS.down.x) &&
              (arrow.vertHeight > 515 && arrow.vertHeight < 610) && 
              (keys[Game.CKC[arrow.color]] === true)) {
                this.remove(arrow);
          } 
        });
        break;
      case "right":
        this.arrows.forEach(arrow => {
          if ((arrow.start === Game.ARROW_COORDS.right.x) &&
              (arrow.horiHeight > 540 && arrow.horiHeight < 635) &&
              (keys[Game.CKC[arrow.color]] === true)) {
                this.remove(arrow);
          } 
        });
        break;
    }
  }


  moveObjects(delta) {
    this.arrows.forEach((object) => {
      object.move(delta);
    });
  }

  remove(object) {
    this.arrows.splice(this.arrows.indexOf(object), 1);
  }

  pause() {
    debugger
    this.paused = !this.paused;
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
