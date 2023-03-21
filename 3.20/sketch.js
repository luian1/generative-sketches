function setup() {
  createCanvas(1000, 1000, WEBGL);
  noStroke();
}

function draw() {
  background(200);
  
  angleMode(DEGREES);
  push()
  translate(-250, 0);
  rotateX(-15);
  rotateY(75);
  box(100, 750, 100);
  pop()
  translate(0, 325);
  rotateX(-15);
  rotateY(164);
  box(500, 100, 100);
}