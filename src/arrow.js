export default class Arrow {
  constructor (color, type, coords, rgbColors) {
    this.color = color;
    this.type = type;
    this.coords = coords;
    this.rgbColors = rgbColors;
    this.horiHeight = 50;
    this.vertHeight = 20;
  }

  draw(ctx) {
    switch(this.type) {
      case "left":
        let startL = this.coords[this.type];
        ctx.beginPath();
        ctx.fillStyle = this.rgbColors[this.color];
        ctx.moveTo(startL.x, this.horiHeight);
        ctx.lineTo(startL.x + 54, this.horiHeight - 32);
        ctx.lineTo(startL.x + 35, this.horiHeight);
        ctx.lineTo(startL.x + 54, this.horiHeight + 32);
        ctx.closePath();
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgb(255, 255, 255)";
        ctx.stroke();
        break;
      case "up":
        let startU = this.coords[this.type];
        ctx.beginPath();
        ctx.fillStyle = this.rgbColors[this.color];
        ctx.moveTo(startU.x + 40, this.vertHeight);
        ctx.lineTo(startU.x + 8, this.vertHeight + 54);
        ctx.lineTo(startU.x + 40, this.vertHeight + 35);
        ctx.lineTo(startU.x + 72, this.vertHeight + 54);
        ctx.closePath();
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgb(255, 255, 255)";
        ctx.stroke();
        break;
      case "down":
        let startD = this.coords[this.type];
        ctx.beginPath();
        ctx.fillStyle = this.rgbColors[this.color];
        ctx.moveTo(startD.x + 40, this.vertHeight + 54);
        ctx.lineTo(startD.x + 8, this.vertHeight);
        ctx.lineTo(startD.x + 40, this.vertHeight + 20);
        ctx.lineTo(startD.x + 72, this.vertHeight);
        ctx.closePath();
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgb(255, 255, 255)";
        ctx.stroke();
        break;
      case "right":
        let startR = this.coords[this.type];
        ctx.beginPath();
        ctx.fillStyle = this.rgbColors[this.color];
        ctx.moveTo(startR.x + 73, this.horiHeight);
        ctx.lineTo(startR.x + 19, this.horiHeight - 32);
        ctx.lineTo(startR.x + 40, this.horiHeight);
        ctx.lineTo(startR.x + 19, this.horiHeight + 32);
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
    this.horiHeight += 50 / deltaTime;
    this.vertHeight += 50 / deltaTime;
  }

}