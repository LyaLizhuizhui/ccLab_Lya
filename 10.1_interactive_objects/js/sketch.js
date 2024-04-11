let sound1;
let sound2;

let buttons = [];
function preload() {
  sound1 = loadSound("assets/beat.mp3");
  sound2 = loadSound("assets/kick.mp3");
}

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);
  for (let x = 100; x <= 400; x += 50) {
    for (let y = 100; y <= 400; y += 50) {
      buttons.push(new Button(x, y, ranodm(50, 80)));
    }
  }
}

function draw() {
  background(220);
  for (let i = 0; i < buttons.length; i++) {
    let btn = buttons[i];
    btn.move();
    btn.fall();
    btn.checkMouse();
    btn.display();
  }
  for (let i = buttons.length - 1; i >= 0; i--) {
    let btn = buttons[i];
    if (btn.isDone) {
      btn.splice(i, 1);
    }
  }
}

class Button {
  constructor(_X, _Y, _RAD) {
    this.x = _X;
    this.y = _Y;
    this.xSpd = random(-1, 1);
    this.ySpd = random(-8, 8);
    this.rad = _RAD;
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.isDone = false;
  }
  move() {
    this.x += this.xSpd;
  }
  fall() {
    this.y += this.ySpd;
  }
  checkMouse() {
    let distance = dist(this.x, this.y, mouseX, mouseY);
    if (distance < this.rad) {
      this.r = 255;
      this.g = 255;
      this.b = 0;
      if (mouseIsPressed) {
        this.r = 255;
        this.g = 0;
        this.b = 0;
        if (sound1.isPlaying() == false) {
          sound1.play();
        }
        this.isDone = true;
      }
    } else {
      this.r = 255;
      this.g = 255;
      this.b = 255;
    }
  }
  display() {
    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.rad * 2);
    text("Done!", this.x + 15, this.y);
  }
}