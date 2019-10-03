import Game from './game';
import InputHandler from "./input";


export default class Gameview {
  constructor(ctx) {
    this.ctx = ctx;

    // this.menu = new Menu()
    this.game = new Game()
    new InputHandler(this.game.staticArrows, this.game, this.ctx);
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
    // this.game.draw(this.ctx)

  }



}