let flowers = [];
let range = 400;
let size;

function setup() {
    let canvas = createCanvas(displayWidth, displayHeight);
    canvas.parent("p5-canvas-container");
    noCursor();
}

function draw() {
    // background
    for (let i = 0; i < displayHeight; i++) {
        g = map(i, 0, displayHeight, 100, 155);
        stroke(175 - g, g - 40, 235 - g);
        line(0, i, displayWidth, i);
    }

    //stars
    push();
    translate(170, 200);
    size = 25;
    beginShape();
    vertex(0, -size);
    vertex(size / 4, -size / 4);
    vertex(size, 0);
    vertex(size / 4, size / 4);
    vertex(0, size);
    vertex(-size / 4, size / 4);
    vertex(-size, 0);
    vertex(-size / 4, -size / 4);
    endShape(CLOSE);
    pop();

    push();
    translate(350, 300);
    size = 20;
    beginShape();
    vertex(0, -size);
    vertex(size / 4, -size / 4);
    vertex(size, 0);
    vertex(size / 4, size / 4);
    vertex(0, size);
    vertex(-size / 4, size / 4);
    vertex(-size, 0);
    vertex(-size / 4, -size / 4);
    endShape(CLOSE);
    pop();

    push();
    translate(600, 200);
    size = 40;
    beginShape();
    vertex(0, -size);
    vertex(size / 4, -size / 4);
    vertex(size, 0);
    vertex(size / 4, size / 4);
    vertex(0, size);
    vertex(-size / 4, size / 4);
    vertex(-size, 0);
    vertex(-size / 4, -size / 4);
    endShape(CLOSE);
    pop();

    push();
    translate(900, 250);
    size = 30;
    beginShape();
    vertex(0, -size);
    vertex(size / 4, -size / 4);
    vertex(size, 0);
    vertex(size / 4, size / 4);
    vertex(0, size);
    vertex(-size / 4, size / 4);
    vertex(-size, 0);
    vertex(-size / 4, -size / 4);
    endShape(CLOSE);
    pop();

    push();
    translate(1130, 150);
    size = 20;
    beginShape();
    vertex(0, -size);
    vertex(size / 4, -size / 4);
    vertex(size, 0);
    vertex(size / 4, size / 4);
    vertex(0, size);
    vertex(-size / 4, size / 4);
    vertex(-size, 0);
    vertex(-size / 4, -size / 4);
    endShape(CLOSE);
    pop();

    push();
    translate(1230, 350);
    size = 30;
    beginShape();
    vertex(0, -size);
    vertex(size / 4, -size / 4);
    vertex(size, 0);
    vertex(size / 4, size / 4);
    vertex(0, size);
    vertex(-size / 4, size / 4);
    vertex(-size, 0);
    vertex(-size / 4, -size / 4);
    endShape(CLOSE);
    pop();

    push();
    translate(1480, 250);
    size = 35;
    beginShape();
    vertex(0, -size);
    vertex(size / 4, -size / 4);
    vertex(size, 0);
    vertex(size / 4, size / 4);
    vertex(0, size);
    vertex(-size / 4, size / 4);
    vertex(-size, 0);
    vertex(-size / 4, -size / 4);
    endShape(CLOSE);
    pop();

    //mountains
    push();
    noStroke();
    beginShape();
    fill(71, 150, 125);
    vertex(-100, displayHeight);
    vertex(1 * displayWidth / 4 + 100, displayHeight - 400);
    vertex(3 * displayWidth / 5, displayHeight);
    endShape(CLOSE);
    beginShape();
    fill(79, 168, 140);
    vertex(displayWidth + 200, displayHeight - 100);
    vertex(2 * displayWidth / 5, displayHeight - 100);
    vertex(5 * displayWidth / 7, displayHeight - 450);
    endShape(CLOSE);
    fill(119, 179, 93);
    ellipse(3 * displayWidth / 4, displayHeight - 30, 3 * displayWidth / 4, 300);
    fill(106, 168, 79);
    ellipse(displayWidth / 4, displayHeight, 3 * displayWidth / 4, 300);
    pop();

    //sparkles
    flowers.push(new Flower(mouseX, mouseY, random(10, 15), random(200, 255), random(200, 255), random(200, 255)));
    for (let i = 0; i < flowers.length; i++) {
        let b = flowers[i];
        b.move();
        if (mouseY < range || mouseY > displayHeight - range) {
            b.speedUp();
        }
        b.display();
    }
    if (flowers.length > 100) {
        flowers.splice(0, 1);
    }

    // circle(displayWidth, displayHeight, 50);
    // circle(1700, 1050, 50);
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
        this.xSpd = random(-1, 1);
        this.ySpd = random(-1, 1);
        this.degree = 0;
        this.rectScale = 1;
    }
    move() {
        this.degree += 0.05;
        this.x += this.xSpd;
        this.y += this.ySpd;
    }
    speedUp() {
        this.xSpd *= 1.02;
        this.ySpd *= 1.02;
        this.rectScale *= 1.005;
    }
    display() {
        push();
        translate(this.x, this.y);
        rotate(this.degree);
        noStroke();
        fill(this.r, this.g, this.b);
        rect(0, 0, 5 * this.rectScale, 3 * this.rectScale)
        pop();
    }
}