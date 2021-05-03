/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(100);
  frameRate(60); // default value = display refresh rate
}

function draw() {
  //fill(random(255), random(255), random(255));
  //rect(5, 5, random(395), random(395));

  //Stunden
  let winkel = (hour() / 12.0) * TWO_PI;
  fill(255, 255, 0);
  arc(200, 200, 350, 350, 0 - HALF_PI, winkel - HALF_PI);

  fill(255, 120, 0);
  arc(200, 200, 350, 350, winkel - HALF_PI, TWO_PI - HALF_PI);

  //Minuten
  winkel = (minute() / 60.0) * TWO_PI;
  fill(0, 255, 255);
  arc(200, 200, 250, 250, 0 - HALF_PI, winkel - HALF_PI);

  fill(0, 120, 255);
  arc(200, 200, 250, 250, winkel - HALF_PI, TWO_PI - HALF_PI);

  //Sekunden
  winkel = (second() / 60.0) * TWO_PI;
  fill(150, 255, 200);
  arc(200, 200, 150, 150, 0 - HALF_PI, winkel - HALF_PI);

  fill(100, 120, 255);
  arc(200, 200, 150, 150, winkel - HALF_PI, TWO_PI - HALF_PI);

  //Millisekunden
  winkel = ((millis() % 1000) / 1000.0) * TWO_PI;
  fill(230, 255, 100);
  arc(200, 200, 100, 100, 0 - HALF_PI, winkel - HALF_PI);

  fill(150, 120, 80);
  arc(200, 200, 100, 100, winkel - HALF_PI, TWO_PI - HALF_PI);
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
