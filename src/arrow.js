export default class Arrow {
  constructor (color, type) {
    this.color = color;
    this.type = type;

    switch(this.type) {
      case 'left':
        this.pos = {
          x: 10,
          y: 20
        };
      case 'up':
        this.pos = {
          x: 10,
          y: 40
        };
      case 'down': 
        this.pos = {
          x: 10,
          y: 60
        };;
      case 'right':
        this.post = {
          x: 10,
          y: 80
        };
    }

  }

  draw(ctx) {
    
  }

}