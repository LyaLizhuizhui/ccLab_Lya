let particles = [];

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");
  //generate particle

}

function draw() {
  background(200);
  particles.push(new Particle(random(width), height / 2, random(10, 20)));
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.move();
    p.display();
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
    this.ySpd = random(-3, 3);
    this.rad = _rad;
    this.isOutOfCanvas = false;
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  checkBoundaries() {
    if (this.y < 0 || this.y > height) {
      this.isOutOfCanvas = true;
    }
  }
  display() {
    push();
    translate(this.x, this.y);

    if (this.isOutOfCanvas) {
      fill(255, 0, 0);
    }
    circle(0, 0, this.rad * 2);
    pop();
  }
}