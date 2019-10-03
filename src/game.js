import StaticArrow from "./static_arrow";
import Arrow from './arrow';

export default class Game {
  constructor(numColors, difficulty) {
    this.numColors = numColors;
    this.difficulty = difficulty || 6;

    this.leftArrows = [];
    this.upArrows = [];
    this.downArrows = [];
    this.rightArrows = [];
    this.staticArrows = new StaticArrow(Game.ARROW_COORDS, this);

    this.start()

  }

  start() {
    this.score = 0;
  }

  addArrows() {
    setInterval(() => {
      this.createArrow();
    }, 900)

  }  

  createArrow() {
    let type = Game.ARROWS[Math.floor(Math.random()*4)];
    let color = Game.COLORS[Math.floor(Math.random()*3)];
    let arrow = new Arrow(color, type, Game.ARROW_COORDS, Game.COLORS_RGB);

    switch (type) {
      case "left":
        this.leftArrows.push(arrow)
        break;
      case "up":
        this.upArrows.push(arrow)
        break;
      case "down":
        this.downArrows.push(arrow)
        break;
      case "right":
        this.rightArrows.push(arrow)
        break;
    }
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
    return this.leftArrows.concat(this.upArrows, this.downArrows, this.rightArrows, this.staticArrows)
  }

  allArrows() {
    return this.leftArrows.concat(this.upArrows, this.downArrows, this.rightArrows)
  }

  moveObjects(delta) {
    this.allArrows().forEach((object) => {
      object.move(delta);
    });
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
