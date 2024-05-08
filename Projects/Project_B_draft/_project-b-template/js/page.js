let img;
let cam;

function preload() {
  img = loadImage("assets/emoji.png");
}

function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent("p5-canvas-container");
  background(255, 255, 255);
  // noCursor();
  cam = createCapture(VIDEO);
  cam.hide();
}

function draw() {
  // background(255, 255, 220);
  // image(img, width / 2, height / 2);
  for (let i = 0; i < 50; i++) {
    let x = floor(random(width));
    let y = floor(random(height));
    let c = cam.get(x, y);
    let dia = random(3, 30);

    let r = red(c);
    let g = green(c);
    let b = blue(c);
    let a = alpha(c);
    noStroke();
    fill(r + 30, g - 10, b, a);
    circle(x, y, dia);
  }

}