import Game from './game';
import InputHandler from "./input";

export default class Gameview {
  constructor(ctx) {
    this.ctx = ctx;

    this.game = new Game()
    new InputHandler(this.game.staticArrows, this.game, this.ctx);
  }

  start() {
    this.game.draw(this.ctx);
  }



}