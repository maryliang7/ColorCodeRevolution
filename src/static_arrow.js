export default class StaticArrow {
  constructor(coords, game) {
    this.coords = coords;

    this.leftImage = document.getElementById("left-static-arrow")
    this.upImage = document.getElementById("up-static-arrow")
    this.downImage = document.getElementById("down-static-arrow")
    this.rightImage = document.getElementById("right-static-arrow")

    this.game = game;
    this.currentColor = {color: false};
  }

  changeCurrentColor(color) {
    this.currentColor.color = color;
  }

  pressDownColor(color) {
    this.leftImage.src = `../assets/images/${color}-left-circle.png`;
    this.upImage.src = `../assets/images/${color}-up-circle.png`;
    this.downImage.src = `../assets/images/${color}-down-circle.png`;
    this.rightImage.src = `../assets/images/${color}-right-circle.png`;
  }

  pressDown(arrow) {
    switch (arrow) {
      case "left":
        this.leftImage.src = '../assets/images/empty.png';
        break;
      case "up":
        this.upImage.src = '../assets/images/empty.png';
        break;
      case "down":
        this.downImage.src = '../assets/images/empty.png';
        break;
      case "right":
        this.rightImage.src = '../assets/images/empty.png';
        break;
    }
  }

  pressUp (arrow) {
    if (this.currentColor.color) {
      this.pressDownColor(this.currentColor.color);
      return;
    }
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
      case "all":
        this.leftImage.src = '../assets/images/left-static-arrow.png';
        this.upImage.src = '../assets/images/up-static-arrow.png';
        this.downImage.src = '../assets/images/down-static-arrow.png';
        this.rightImage.src = '../assets/images/right-static-arrow.png';
        break;
    }
  }

  draw(ctx) {
    ctx.drawImage(this.leftImage, this.coords.left.x, this.coords.left.y, 75, 75);
    ctx.drawImage(this.upImage, this.coords.up.x, this.coords.up.y, 75, 75);
    ctx.drawImage(this.downImage, this.coords.down.x, this.coords.down.y, 75, 75);
    ctx.drawImage(this.rightImage, this.coords.right.x, this.coords.right.y, 75, 75);
  }
}