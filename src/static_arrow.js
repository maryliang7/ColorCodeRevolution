export default class StaticArrow {
  constructor(game) {
    this.leftImage = new Image;
    this.upImage = new Image;
    this.downImage = new Image;
    this.rightImage = new Image;

    this.leftImage.src = '../assets/images/left-static-arrow.png';
    this.upImage.src = '../assets/images/up-static-arrow.png';
    this.downImage.src = '../assets/images/down-static-arrow.png';
    this.rightImage.src = '../assets/images/right-static-arrow.png';
    this.game = game;
  }

  pressDown(arrow) {
    switch (arrow) {
      case "left":
        this.leftImage.src = '../assets/images/p-left-static-arrow.png';
        break;
      case "up":
        this.upImage.src = '../assets/images/p-up-static-arrow.png';
        break;
      case "down":
        this.downImage.src = '../assets/images/p-down-static-arrow.png';
        break;
      case "right":
        this.rightImage.src = '../assets/images/p-right-static-arrow.png';
        break;
    }
  }

  pressUp (arrow) {
    switch (arrow) {
      case "left":
        this.leftImage.src = '../assets/images/left-static-arrow.png';
        break;
      case "up":
        this.upImage.src = '../assets/images/up-static-arrow.png';
        break;
      case "down":
        this.downImage.src = '../assets/images/down-static-arrow.png';
        break;
      case "right":
        this.rightImage.src = '../assets/images/right-static-arrow.png';
        break;
    }
  }

  draw(ctx) {
    this.leftImage.onload = () => {
      ctx.clearRect(250, 550, 75, 75);
      ctx.drawImage(this.leftImage, 250, 550, 75, 75);
    }
    this.upImage.onload = () => {
      ctx.clearRect(400, 550, 75, 75);
      ctx.drawImage(this.upImage, 400, 550, 75, 75);
    }
    this.downImage.onload = () => {
      ctx.clearRect(550, 550, 75, 75);
      ctx.drawImage(this.downImage, 550, 550, 75, 75);
    }
    this.rightImage.onload = () => {
      ctx.clearRect(700, 550, 75, 75);
      ctx.drawImage(this.rightImage, 700, 550, 75, 75);
    }
  }
}