let balls = [];

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  for (let i = 0; i <= width; i++) {
    let x = i;
    let y = 100;
    let dia = random(5, 10);
    balls.push(new Ball(x, y, dia));
  }
}

function draw() {
  background(0, 20);
  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    b.move();
    b.fall();
    b.checkBottom();
    b.display();
  }
}

class Ball {
  constructor(_x, _y, _dia) {
    this.x = _x;
    this.y = _y;
    this.dia = _dia;
    this.xSpd = 0;
    // this.xSpd = random(-3, 3);
    this.ySpd = random(3);
    this.yAcc = 0.23;
    this.r = random(70, 170);
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  fall() {
    this.ySpd += this.yAcc;
  }
  checkBottom() {
    if (this.y > height) {
      this.ySpd *= -1;
      // this.yAcc *= -1;
    }
  }
  display() {
    push();
    noStroke();
    fill(this.r, 0, 0);
    circle(this.x, this.y, this.dia);
    pop();
  }
}