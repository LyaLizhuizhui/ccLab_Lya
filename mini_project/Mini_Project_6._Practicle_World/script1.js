let flowers = [];

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(130, 200, 130);
  if (mouseIsPressed) {
    flowers.push(new Flower(mouseX, mouseY, random(10, 15), random(150, 255), random(150, 255), random(150, 255)))
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
    this.xSpd = random(-2, 2);
    this.ySpd = random(-2, 2);
    this.degree = 0;
  }
  move() {
    this.degree += 0.05;
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
    rotate(this.degree)
    stroke(255);
    fill(this.r, this.g, this.b, 200);
    circle(this.distance, this.distance, this.dia);
    circle(-this.distance, this.distance, this.dia);
    circle(this.distance, -this.distance, this.dia);
    circle(-this.distance, -this.distance, this.dia);
    fill(this.r, this.g, this.b);
    circle(this.dia, 0, this.dia);
    circle(-this.dia, 0, this.dia);
    circle(0, this.dia, this.dia);
    circle(0, -this.dia, this.dia);
    fill(255, 197, 102);
    circle(0, 0, this.dia + 2);
    pop();

  }
}