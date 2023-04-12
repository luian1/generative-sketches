var font1
var f = 0;

function preload() {
  font1 = loadFont("test.ttf");
}

function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB);
}

function draw() {
  background(0, 0, 0);
  var tSize = 18;
  var max = 1000/tSize;
  textSize(tSize*1.2);
  textFont(font1); 

  f+=0.1;

  var a = 0.0;
  var inc = TWO_PI / 25.0;
  var row = 0;
}