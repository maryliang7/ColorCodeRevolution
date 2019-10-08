# Color Code Revolution

## Description
> Color Code Revolution is a remix of Dance Dance Revolution, users must hit the arrows as it falls but also hit the corresponding color to the arrows. 

## Play!
[Color Code Revolution](https://maryliang7.github.io/ColorCodeRevolution/)


## Site Features
---
### Start Page
![Arrow Animations](/assets/readme/start-screen.png)
> Users can choose different levels of difficulty, different number of colors, and what song to play.


### Arrow Animations
![Arrow Animations](/assets/readme/arrow-animations.gif)

> Animations are shown upon hit, and change color depending on which color is pressed.

## Code Highlights

### Only allowing one color press

```javascript
case 76:
  staticA.pressDown("up");
  if (this.keys[67] ^ this.keys[88] ^ this.keys[90]) {
    game.checkTarget("up", this.keys);
  }
  break;
```
> Used XOR operator in order to ensure that only one color is selected at a time, else the score won't count.

## Built With 

* JavaScript
* Canvas

## Future Goals

* Arrows speeding up as time goes by
* Arrows rendering according to beat
* High Score list

