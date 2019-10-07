export default class Effects {
  constructor(coords, game) {
    this.coords = coords;
    this.game = game;

    this.message = {
      effect: false,
      counter: 0
    };
    this.missed = {
      effect: false,
      counter: 0
    };
    this.hit = {
      effect: false,
      counter: 0
    };
  }

  checkCounter(obj) {
    if (obj.counter > 20) {
      obj.counter = 0;
      obj.effect = false;
    } else {
      obj.counter += 1;
    }
  }

  changeMessage(message) {
    this.message.effect = message;
    this.message.counter = 0;
  }

  changeHit(target) {
    this.hit.effect = target;
    this.hit.counter = 0;
  }

  toggleMiss() {
    if (this.missed.effect) {
      this.missed.effect = false;
    } else {
      this.missed.effect = true;
    }
  }

  draw(ctx) {
    if (this.message.effect) {
      ctx.font = "bold 50px Mitr";
      ctx.fillStyle = 'rgb(119,221,119)';
      ctx.fillText(this.message.effect, 240, 200);
      ctx.font = "50px Mitr";
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgb(255, 255, 255)";
      ctx.strokeText(this.message.effect, 240, 200);
      this.checkCounter(this.message);
    }
    if (this.missed.effect) {
      ctx.font = "bold 50px Mitr";
      ctx.fillStyle = 'rgb(255,105,97)';
      ctx.fillText('Miss', 260, 245);
      ctx.font = "50px Mitr";
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgb(255, 255, 255)";
      ctx.strokeText('Miss', 260, 245);
      this.checkCounter(this.missed);
    }

    if (this.hit.effect) {
      let pos = this.coords[this.hit.effect];
      let opacity = 1 / this.hit.counter;
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.arc(pos.x + 37, pos.y + 37, 50 + this.hit.counter, 0, 2 * Math.PI);
      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.stroke();
      this.checkCounter(this.hit);
    }
  }
}