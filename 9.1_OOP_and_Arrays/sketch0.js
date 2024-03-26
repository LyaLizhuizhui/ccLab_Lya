let names = [
  "what",
  "the",
  "hell",
]
function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);
  // add elements
  names.push("oh");
  names.push("okay");
  //remove elements
  names.splice(2, 1);//(index,howMany)
}

function draw() {
  let firstIndex = 0;
  let lastIndex = names.length - 1;
  // text(names[lastIndex], 100, 100);
  for (let i = 0; i < names.length; i++) {
    let x = 120;
    let y = 100 + i * 30;
    text(i + ": " + names[i], x, y);
  }
}