import Game from './game';
import InputHandler from "./input";

export default class Gameview {
  constructor(ctx, options) {
    this.ctx = ctx;

    this.game = new Game(options);
    new InputHandler(this.game.staticArrows, this.game);
    this.lastTime = 0;
  }

  start() {
    this.game.draw(this.ctx);
    this.game.addArrows();

    requestAnimationFrame(this.animate.bind(this));
  }

  
  animate(time) {
    let delta = time - this.lastTime;
    
    this.game.moveObjects(delta);
    this.game.draw(this.ctx)

    this.lastTime = time;

    requestAnimationFrame(this.animate.bind(this));
  }

}