let particles = [];

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(0);
  let xValue = width / 2 * (1 + cos(frameCount / 100));
  let yValue = height / 2 + 50 * sin(xValue / 50);
  particles.push(new Particle(xValue, yValue, random(10, 20)));
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.move();
    p.checkBoundaries();
    p.age();
    p.display();
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    if (p.isDone) {
      // let's remove!
      let index = i;
      particles.splice(index, 1);
    }
  }
  while (particles.length > 500) {
    let index = 0;
    particles.splice(index, 1);
  }
  text(particles.length, 10, 20);
}

class Particle {
  constructor(_x, _y, _rad) {
    this.x = _x;
    this.y = _y;
    this.xSpd = 0;
    this.ySpd = random(-1, 1);
    this.rad = _rad;
    this.isDone = false;
    this.lifespan = 1.00;
    this.lifeDecrease = random(0.02, 0.03);
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  age() {
    this.lifespan -= this.lifeDecrease;
    if (this.lifespan < 0) {
      this.lifespan = 0;
      this.isDone = true;
    }
  }
  checkBoundaries() {
    if (this.y < 0 || this.y > height) {
      this.isDone = true;
    }
  }
  display() {
    push();
    translate(this.x, this.y);

    if (this.isDone) {

    }
    stroke(0, 255 * this.lifespan);
    fill(205, 255 * (1 - this.lifespan), 255 * (1 - this.lifespan), 255 * this.lifespan);
    circle(0, 0, this.rad * 2);
    pop();
  }
}