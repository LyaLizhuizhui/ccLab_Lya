let range = 300;
let time = 7;

function setup() {
    let canvas = createCanvas(displayWidth, displayHeight);
    // canvas.parent("p5-canvas-container");

    // rectMode(CENTER);
}

function draw() {
    if (frameCount < time * 60) {
        let time1 = map(frameCount, 0, time * 60, 1, 0);
        for (let i = 0; i < displayHeight; i++) {
            let c = 125 + time1 * random(-75, 75);

            y = random(displayHeight);
            stroke(c);
            line(0, i, displayWidth, y);
        }
        fill(140, 0, 0);
        textFont("Long Cang");
        textSize(70);
        text("天地混沌，盘古生其中。", displayWidth / 4 + 70, displayHeight / 2 - 50);
        textSize(50);
        text("The heaven and earth were in chaos, and Pangu was born in it. ", displayWidth / 8, displayHeight / 2 + 50);
    } else if (frameCount < (time + 3) * 60 * 2) {
        let time2 = map(frameCount, time * 60, time * 60 * 2, 0, 1);
        for (let i = 0; i < displayHeight; i++) {
            g = 125 + time2 * map(i, 0, displayHeight, -25, 25);
            y = random(displayHeight);
            stroke(175 - g, g - 40, 235 - g);
            line(0, i, displayWidth, y);
        }
        fill(255, 140, 140);
        textSize(70);
        text("天日高一丈，地日厚一丈，盘古亦长一丈，", displayWidth / 8, displayHeight / 2 - 50);
        textSize(50);
        text("Each day, the sky is ten feet taller, the earth is ten feet thicker,", displayWidth / 9, displayHeight / 2 + 50);
        text("so Pangu is also ten feet taller,", displayWidth / 3 - 50, displayHeight / 2 + 100);
    } else {
        // background
        for (let i = 0; i < displayHeight; i++) {
            g = map(i, 0, displayHeight, 100, 155);
            stroke(175 - g, g - 40, 235 - g);
            line(0, i, displayWidth, i);
        }
        let al = map(frameCount, (time + 3) * 60 * 2, 1500, 0, 255);

        //stars
        push();
        fill(255, al);
        noStroke();
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
        fill(255, al);
        noStroke();
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
        fill(255, al);
        noStroke();
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
        fill(255, al);
        noStroke();
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
        fill(255, al);
        noStroke();
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
        fill(255, al);
        noStroke();
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
        fill(255, al);
        noStroke();
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
        fill(71, 150, 125, al);
        vertex(-100, displayHeight);
        vertex((1 * displayWidth) / 4 + 100, displayHeight - 400);
        vertex((3 * displayWidth) / 5, displayHeight);
        endShape(CLOSE);
        beginShape();
        fill(79, 168, 140, al);
        vertex(displayWidth + 200, displayHeight - 100);
        vertex((2 * displayWidth) / 5, displayHeight - 100);
        vertex((5 * displayWidth) / 7, displayHeight - 450);
        endShape(CLOSE);
        fill(119, 179, 93, al);
        ellipse(
            (3 * displayWidth) / 4,
            displayHeight - 30,
            (3 * displayWidth) / 4,
            300
        );
        fill(106, 168, 79, al);
        ellipse(displayWidth / 4, displayHeight, (3 * displayWidth) / 4, 300);
        pop();

        fill(255);
        textSize(70);
        text("如此万八千年，然後天地开辟。", displayWidth / 6 + 100, displayHeight / 2 - 50);
        textSize(50);
        text("and so on for 8000 years, then the heaven and the earth are separated.", displayWidth / 10, displayHeight / 2 + 50);
    }
}
