let balls = [];

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(0);
  if (mouseIsPressed) {
    balls.push(new Ball(mouseX, mouseY, random(3, 6)))
  }
  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    b.move();
    if (keyIsPressed) {
      if (key == 'a') {
        b.speedUp();
      }
      if (key == 'd') {
        b.slowDown();
      }
    }
    b.display();
  }
  if (balls.length > 100) {
    balls.splice(0, 1);
  }
  text(frameRate().toFixed(2), 10, 20)
}

class Ball {
  constructor(_X, _Y, _dia) {
    this.x = _X;
    this.y = _Y;
    this.dia = _dia;
    this.xSpd = random(-2, 2);
    this.ySpd = random(-2, 2);
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  slowDown() {
    this.xSpd *= 0.94;
    this.ySpd *= 0.94;
  }
  speedUp() {
    this.xSpd *= 1.02;
    this.ySpd *= 1.02;
  }
  display() {
    push();
    translate(this.x, this.y);
    fill(148, 78, 167, 150);
    rect(0, 0, this.dia, this.dia);
    rect(2, 2, this.dia, this.dia);
    rect(3, 0, this.dia, this.dia);
    rect(-3, -4, this.dia, this.dia);
    rect(-2, 3, this.dia, this.dia);
    pop();

  }
}