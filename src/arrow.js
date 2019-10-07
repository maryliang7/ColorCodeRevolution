export default class Arrow {
  constructor (color, type, coords, rgbColors, game, speed) {
    this.color = color;
    this.type = type;
    this.coords = coords;
    this.rgbColors = rgbColors;
    this.game = game;
    this.speed = speed;
    this.start = this.coords[this.type].x;
    this.horiHeight = 50;
    this.vertHeight = 20;
  }

  draw(ctx) {
    switch(this.type) {
      case "left":
        ctx.beginPath();
        ctx.fillStyle = this.rgbColors[this.color];
        ctx.moveTo(this.start, this.horiHeight);
        ctx.lineTo(this.start + 54, this.horiHeight - 32);
        ctx.lineTo(this.start + 35, this.horiHeight);
        ctx.lineTo(this.start + 54, this.horiHeight + 32);
        ctx.closePath();
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgb(255, 255, 255)";
        ctx.stroke();
        break;
      case "up":
        ctx.beginPath();
        ctx.fillStyle = this.rgbColors[this.color];
        ctx.moveTo(this.start + 37, this.vertHeight);
        ctx.lineTo(this.start + 5, this.vertHeight + 54);
        ctx.lineTo(this.start + 37, this.vertHeight + 35);
        ctx.lineTo(this.start + 70, this.vertHeight + 54);
        ctx.closePath();
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgb(255, 255, 255)";
        ctx.stroke();
        break;
      case "down":
        ctx.beginPath();
        ctx.fillStyle = this.rgbColors[this.color];
        ctx.moveTo(this.start + 37, this.vertHeight + 54);
        ctx.lineTo(this.start + 5, this.vertHeight);
        ctx.lineTo(this.start + 37, this.vertHeight + 20);
        ctx.lineTo(this.start + 70, this.vertHeight);
        ctx.closePath();
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgb(255, 255, 255)";
        ctx.stroke();
        break;
      case "right":
        ctx.beginPath();
        ctx.fillStyle = this.rgbColors[this.color];
        ctx.moveTo(this.start + 73, this.horiHeight);
        ctx.lineTo(this.start + 19, this.horiHeight - 32);
        ctx.lineTo(this.start + 40, this.horiHeight);
        ctx.lineTo(this.start + 19, this.horiHeight + 32);
        ctx.closePath();
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgb(255, 255, 255)";
        ctx.stroke();
        break;
    }
  }

  move(deltaTime) {
    if (!deltaTime) return;
    this.horiHeight += this.speed / deltaTime;
    this.vertHeight += this.speed / deltaTime;

    if (this.horiHeight > 750 || this.vertHeight > 750) {
      this.remove(this);
      this.game.missed();
    }
  }

  remove() {
    this.game.remove(this);
  }

}