var font1;
var f=0;

function preload() {
  font1 = loadFont("test.ttf");
}

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  f+=0.1;
  noStroke();
  textFont(font1);
  fill(noise(f)*200, 50, 200);

  points = font1.textToPoints("L", 160, 725, 800);
  for(var i = 0; i < points.length; i++) {
    square(points[i].x, points[i].y, noise(f)*160);
  }

  points1 = font1.textToPoints("L", 160, 725, 800);
  for(var i = 0; i < points1.length; i++) {
    fill(noise(f)*200, 50, 200);
    square(points1[i].x, points1[i].y, 80);
    if(mouseX > points1[i].x-100 &&  mouseY > points1[i].y-100
      && mouseX < points1[i].x+100 && mouseY < points1[i].y+100) {
        fill(200, 50, 200);
      square(points1[i].x, points1[i].y, 100);
    }
  }
}