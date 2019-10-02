import StaticArrow from "./static_arrow";
import InputHandler from "./input";

export default class Game {
  constructor(numColors, difficulty) {
    this.numColors = numColors;
    this.difficulty = difficulty;
    this.leftArrows = [];
    this.upArrows = [];
    this.downArrows = [];
    this.rightArrows = [];
    this.staticArrows = new StaticArrow();

    this.start()

  }

  start() {
    this.score = 0;
  }

  draw(ctx) {
    ctx.clearRect(0, 0, 1000, 650);
    this.allObjects().forEach(obj => {
      obj.draw(ctx);
    })
  }

  allObjects() {
    return this.leftArrows.concat(this.upArrows, this.downArrows, this.rightArrows, this.staticArrows)
  }

}