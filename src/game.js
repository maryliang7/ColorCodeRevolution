import StaticArrow from "./static_arrow";
import Arrow from './arrow';

export default class Game {
  constructor(numColors, difficulty) {
    this.numColors = numColors;
    this.difficulty = difficulty || 6;

    this.arrows = []
    this.staticArrows = new StaticArrow(Game.ARROW_COORDS, this);

    this.start()
    this.paused = false;
  }

  start() {
    this.score = 0;
  }

  addArrows() {
    setInterval(() => {
      this.createArrow();
    }, 500)

  }  

  createArrow() {
    let type = Game.ARROWS[Math.floor(Math.random()*4)];
    let color = Game.COLORS[Math.floor(Math.random()*2)];
    let arrow = new Arrow(color, type, Game.ARROW_COORDS, Game.COLORS_RGB, this);

    this.arrows.push(arrow);
  }



  draw(ctx) {
    ctx.clearRect(0, 0, 1000, 650);
    this.allObjects().forEach(obj => {
      obj.draw(ctx);
    })
    // ctx.beginPath();
    // ctx.fillStyle = "rgb(221, 162, 246)"
    // ctx.moveTo(250, 50);
    // ctx.lineTo(304, 82);
    // ctx.lineTo(285, 50);
    // ctx.lineTo(304, 18);
    // ctx.closePath();
    // ctx.fill();
    // ctx.lineWidth = 2;
    // ctx.strokeStyle = "rgb(255, 255, 255)";
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.fillStyle = 'rgb(127, 179, 225)'
    // ctx.moveTo(400 + 40, 120);
    // ctx.lineTo(400 + 8, 120 + 54);
    // ctx.lineTo(400 + 40, 120 + 35);
    // ctx.lineTo(400 + 72, 120 + 54);
    // ctx.closePath();
    // ctx.fill();
    // ctx.lineWidth = 2;
    // ctx.strokeStyle = "rgb(255, 255, 255)";
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.fillStyle = 'rgb(221, 162, 246)'
    // ctx.moveTo(550 + 40, 320 + 54);
    // ctx.lineTo(550 + 8, 320);
    // ctx.lineTo(550 + 40, 320 + 20);
    // ctx.lineTo(550 + 72, 320);
    // ctx.closePath();
    // ctx.fill();
    // ctx.lineWidth = 2;
    // ctx.strokeStyle = "rgb(255, 255, 255)";
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.fillStyle = "rgb(127, 179, 225)"
    // ctx.moveTo(758, 150);
    // ctx.lineTo(704, 118);
    // ctx.lineTo(723, 150);
    // ctx.lineTo(704, 182);
    // ctx.closePath();
    // ctx.fill();
    // ctx.lineWidth = 2;
    // ctx.strokeStyle = "rgb(255, 255, 255)";
    // ctx.stroke();


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
  x: 1000,
  y: 650
}
Game.COLORS = ['blue', 'purple', 'navy'];
Game.ARROWS = ['left', 'up', 'down', 'right'];
Game.ARROW_COORDS = {
  "left" : {
    x: 250,
    y: 550
  },
  "up" : {
    x: 400,
    y: 550
  },
  "down" : {
    x: 550,
    y: 550
  },
  "right" : {
    x: 700,
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
