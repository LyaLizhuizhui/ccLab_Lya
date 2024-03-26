let balls = [];

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);
  for (let i = 0; i <= 30; i++) {
    let x = width / 2;
    let y = height / 2;
    let dia = random(20, 50);
    balls.push(new Ball(x, y, dia));
  }
}

function draw() {
  // background(220);
  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    b.move();
    b.display();
  }
}

class Ball {
  constructor(_x, _y, _dia) {
    this.x = _x;
    this.y = _y;
    this.dia = _dia;
    this.xSpd = random(-3, 3);
    this.ySpd = random(-3, 3);
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  display() {
    push();
    circle(this.x, this.y, this.dia);
    pop();
  }
}