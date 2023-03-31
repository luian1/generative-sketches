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
  fill(noise(f)*255, 50, 200);
  points = font1.textToPoints("hoLd this", 150, 300, 150);
  
  for(var i = 0; i < points.length; i++) {
    console.log(points[i]);
    square(points[i].x, points[i].y, 16);
  }

  points = font1.textToPoints("L", 300, 750, 500);
  
  for(var i = 0; i < points.length; i++) {
    console.log(points[i]);
    square(points[i].x, points[i].y, noise(f)*75);
  }
}