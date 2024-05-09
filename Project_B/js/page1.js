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

  xSlider = createSlider(0, 255, 155);
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
      img.pixels[index + 0] = r * 0.9;
      img.pixels[index + 1] = g * 1.1;
      img.pixels[index + 2] = b * 0.8;
      img.pixels[index + 3] = 255;
    }
  }
  img.updatePixels();

  image(img, 0, 0);

  let x = xSlider.value();

  cam.loadPixels();
  background(115, 161, 105, x);
  let gridSize = 120; //floor(map(mouseX, 0, width, 10, 40));\
  for (let y = 0; y < cam.height; y += gridSize) {
    let c = floor(map(y, 0, cam.height, 0, 90));
    stroke(62 + c, 102 + c, 53 + c, x);
    strokeWeight(35);
    fill(81 + c, 117 + c, 73 + c, x * 1.5);
    beginShape();
    for (let x = -100; x < cam.width + 130; x += gridSize) {
      // each pixel's index
      let index = (x + y * cam.width) * 4;

      // get color data from each pixel
      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];
      let a = cam.pixels[index + 3];

      let avg = (r + g + b) / 3;

      let yAdj = map(avg, 0, 255, 1, gridSize * 3);
      curveVertex(x, y + yAdj - 100);
    }
    endShape();
  }
}