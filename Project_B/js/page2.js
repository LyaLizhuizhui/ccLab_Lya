let cam_origin;
let img;
let cam;
let xSlider;

function setup() {
  let canvas = createCanvas(displayWidth, displayHeight);
  canvas.parent("p5-canvas-container");
  background(220);

  cam_origin = createCapture(VIDEO);
  cam = createCapture(VIDEO);
  cam_origin.size(displayWidth, displayHeight);
  cam.size(displayWidth, displayHeight);
  cam_origin.hide();
  cam.hide();
  img = createImage(displayWidth, displayHeight);

  xSlider = createSlider(0, 65025, 40000);
  xSlider.position((windowWidth - displayWidth) / 2, 200);
  xSlider.size(displayWidth, 20);
}

function draw() {
  cam_origin.loadPixels();
  img.loadPixels();
  // now we can access the cam.pixels and img.pixels arrays!
  for (let y = 0; y < cam_origin.height; y++) {
    for (let x = 0; x < cam_origin.width; x++) {
      // each pixel's index
      let index = (x + y * cam_origin.width) * 4;

      // get color data from each pixel
      let r = cam_origin.pixels[index + 0];
      let g = cam_origin.pixels[index + 1];
      let b = cam_origin.pixels[index + 2];
      let a = cam_origin.pixels[index + 3];

      // manipulate and apply it to the image "img"
      img.pixels[index + 0] = r * 0.3;
      img.pixels[index + 1] = g * 0.4;
      img.pixels[index + 2] = b * 1.0;
      img.pixels[index + 3] = 255;
    }
  }
  img.updatePixels();

  image(img, 0, 0);

  let al = sqrt(xSlider.value());

  cam.loadPixels();
  background(0, al);
  let gridSize = 60;
  let level = 15;
  for (let y = 0; y < cam.height; y += gridSize * 0.5) {
    for (let x = 0; x < cam.width + 50; x += gridSize * 0.5) {
      push();
      let distance = sqrt(sq(mouseX - x) + sq(mouseY - y));
      translate(x, y);
      let red = map(distance, 0, 1000, 25, 0) + random(-20, 20);
      noStroke();
      fill(7 + red, 25, 59, al);
      rect(0, 0, gridSize * 0.5, gridSize * 0.5);
      pop();
    }
  }
  for (let y = 0; y < cam.height; y += gridSize * 1.9) {
    let y_r = level * random(-1, 1);
    for (let x = 0; x < cam.width + 100; x += gridSize * 1.9) {
      let x_r = level * random(-1, 1);
      // each pixel's index
      let index = (x + y * cam.width) * 4;

      // get color data from each pixel
      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];
      let a = cam.pixels[index + 3];

      let avg = (r + g + b) / 3;

      push();
      translate(x + x_r, y + y_r + 50);
      noStroke();
      let color = random(240, 255);
      fill(255, color, color - 20, al);
      let size = (70 - map(avg, 0, 255, 1, gridSize) + random(-10, 0)) / 2;
      beginShape();
      vertex(0, -size);
      vertex(size / 4, -size / 4);
      vertex(size, 0);
      vertex(size / 4, size / 4);
      vertex(0, size);
      vertex(-size / 4, size / 4);
      vertex(-size, 0);
      vertex(-size / 4, -size / 4);
      endShape();
      pop();
    }
  }
}