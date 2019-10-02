export default class InputHandler {
  constructor(staticA, game) {
    document.addEventListener("keydown", event => {
      // debugger;
      switch (event.keyCode) {
        case 188:
          staticA.pressDown("left");
          break; 
        case 76:
          staticA.pressDown("up");
          break; 
        case 190:
          staticA.pressDown("down");
          break; 
        case 191:
          staticA.pressDown("right")
          break; 
        case 32:
          // game.pause();
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
      }
    })
  }
}