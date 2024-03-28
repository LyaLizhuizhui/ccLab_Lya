let balls = [];

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(220);
  balls.push(new Ball(mouseX, mouseY, random(-5, 5)))
  for (let i = 0; i <= balls.length; i++) {
    let b = balls[i];
    b.move();
    b.display();
  }
}

class Ball {
  constructor(_X, _Y, _dia) {
    this.x = _X;
    this.y = _Y;
    this.dia = _dia;
    this.xSpd = random(-1, 2);
    this.ySpd = random(-2, 4);
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  display() {
    push();
    translate(this.x, this.y);
    circle(0, 0, this.dia)
    pop();

  }
}