let flowers = [];

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(30, 100, 250);
  if (mouseIsPressed) {
    flowers.push(new Flower(mouseX, mouseY, random(10, 15), random(100, 255), random(100, 255), random(100, 255)))
  }
  for (let i = 0; i < flowers.length; i++) {
    let b = flowers[i];
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
  if (flowers.length > 100) {
    flowers.splice(0, 1);
  }
  text(frameRate().toFixed(2), 10, 20)
  push();
  translate(mouseX, mouseY);
  beginShape();
  noStroke();
  fill(250, 216, 109);
  vertex(-19, 0);
  vertex(24, -6);
  vertex(20, 18);
  endShape();
  pop();
}

class Flower {
  constructor(_X, _Y, _dia, _r, _g, _b) {
    this.x = _X;
    this.y = _Y;
    this.dia = _dia;
    this.r = _r;
    this.g = _g;
    this.b = _b;
    this.distance = this.dia / sqrt(2)
    this.xSpd = random(2, 4);
    this.ySpd = random(0, 2);
    this.yAcc = 1.02;
    this.degree = 0;
  }
  move() {
    this.degree += 0.05;
    this.x += this.xSpd;
    this.ySpd *= this.yAcc;
    this.y += this.ySpd;
  }
  slowDown() {
    this.xSpd *= 0.97;
    this.ySpd *= 0.97;
  }
  speedUp() {
    this.xSpd *= 1.02;
    this.ySpd *= 1.02;
  }
  display() {
    push();
    translate(this.x, this.y);
    rotate(this.degree);
    noStroke();
    fill(this.r, this.g, this.b);
    rect(0, 0, 10, 7)
    pop();

  }
}