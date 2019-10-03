export default class InputHandler {
  constructor(staticA, game) {
    this.keys = {
      67: false,
      88: false,
      90: false,
    }
    document.addEventListener("keydown", event => {
      // debugger;
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
          break;
        case 88:
          this.keys[88] = true;
          break;
        case 90:
          this.keys[90] = true;
          break;
        case 32:
          // debugger
          game.pause();
          break;
      }
    })
    document.addEventListener("keyup", event => {
      // debugger
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
    })
  }
}