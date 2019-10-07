export default class Effects {
  constructor() {
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
    if (obj.counter > 2) {
      obj.counter = 0;
      obj.effect = false;
    } else {
      obj.counter += 1;
    }
  }

  changeMessage(message) {
    this.message.effect = message;
  }

  changeHit(target) {
    this.hit.effect = target;
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
      ctx.font = "30px Varela Round";
      ctx.fillStyle = "white";
      ctx.fillText(this.message.effect, 130, 225);
      this.checkCounter(this.message);
    }
    if (this.missed.effect) {
      ctx.font = "30px Varela Round";
      ctx.fillStyle = "white";
      ctx.fillText(this.missed.effect, 130, 225);
      this.checkCounter(this.missed);
    }
    if (this.hit.effect) {
      // Draw circle
      this.checkCounter(this.hit);
    }
 
  }
}