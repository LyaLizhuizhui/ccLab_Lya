let particles = [];

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);
  //generate particle
  particles.push(new Particle(width / 2, height / 2, 30));
}

function draw() {
  background(200);
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.display();
  }
}

class Particle {
  constructor(_x, _y, _rad) {
    this.x = _x;
    this.y = _y;
    this.rad = _rad;
  }
  dispay() {
    push();
    translate(this.x, this.y);
    circle(0, 0, this.rad * 2);
    pop();
  }
}