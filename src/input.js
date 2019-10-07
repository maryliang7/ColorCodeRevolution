export default class InputHandler {
  constructor(staticA, game) {
    this.keys = {
      67: false,
      88: false,
      90: false
    }
    this.keysColor = {
      67: 'blue',
      88: 'purple',
      90: 'navy'
    }
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 188:
          staticA.pressDown("left");
          if (this.keys[67] ^ this.keys[88] ^ this.keys[90]) {
            game.checkTarget("left", this.keys);
          }
          break; 
        case 76:
          staticA.pressDown("up");
          if (this.keys[67] ^ this.keys[88] ^ this.keys[90]) {
            game.checkTarget("up", this.keys);
          }
          break; 
        case 190:
          staticA.pressDown("down");
          if (this.keys[67] ^ this.keys[88] ^ this.keys[90]) {
            game.checkTarget("down", this.keys);
          }
          break; 
        case 191:
          staticA.pressDown("right");
          if (this.keys[67] ^ this.keys[88] ^ this.keys[90]) {
            game.checkTarget("right", this.keys);
          }
          break;
        case 67:
          this.keys[67] = true;
          staticA.pressDownColor("blue");
          staticA.changeCurrentColor('blue');
          break;
        case 88:
          this.keys[88] = true;
          staticA.pressDownColor("purple");
          staticA.changeCurrentColor('purple');
          break;
        case 90:
          this.keys[90] = true;
          staticA.pressDownColor("navy");
          staticA.changeCurrentColor('navy');
          break;
        case 32:
          game.pause();
          // game.music.toggleSong()
          break;
      }
    })
    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 188:
          staticA.pressUp("left");
          break; 
        case 76:
          staticA.pressUp("up");
          break; 
        case 190:
          staticA.pressUp("down");
          break; 
        case 191:
          staticA.pressUp("right")
          break; 
        case 67:
          this.keys[67] = false;
          break;
        case 88:
          this.keys[88] = false;
          break;
        case 90:
          this.keys[90] = false;
          break;
      }
      if (this.keys[67] ^ this.keys[88] ^ this.keys[90]) {
        for (let color in this.keys) {
          if (this.keys[color]) {
            staticA.changeCurrentColor(this.keysColor[color]);
            staticA.pressUp();
            break;
          }
        }
      }
      if (!this.keys[67] && !this.keys[88] && !this.keys[90]) {
        staticA.changeCurrentColor(false);        
        staticA.pressUp("all");
      }
    })
  }
}