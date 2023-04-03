var font1
var f=0;

function preload() {
  font1 = loadFont("test.ttf");
  img = loadImage("test.png");
}

function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB);
}

function draw() {
  frameRate(10);
  f+=0.1;
  var tSize = random(20, 100);
  var max = floor(1000/tSize);
  textSize(tSize*1.2);
  textFont(font1);
  fill(noise(f)*255, 200, 100);
  text("L", noise(f)*920, random(90, 999));
}