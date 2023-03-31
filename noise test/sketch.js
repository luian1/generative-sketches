var f=0;

function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB);
}

function draw() {
  background(255);
  f+=0.1;
  ellipse(200, 500, random(400));
  ellipse(800, 500, noise(f)*400);
}