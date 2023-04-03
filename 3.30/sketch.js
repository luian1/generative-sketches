var font1
var off=0;

function preload() {
  font1 = loadFont("test.ttf");
  img = loadImage("test.png");
}

function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB);
}

function draw() { 
  frameRate(60);
  off++;
  background(0, 0, 0);
  var tSize = 100;
  var max = floor(1000/tSize);
  textAlign(CENTER);
  textSize(tSize);
  textFont(font1);
  for(var j = 0; j <= 20; j++) {
    for(var i = 0; i <= 20; i++) {
      fill(260+i*4, 200, 50);
      text("L", 28+(i*48.9), -823+(45.5*i)+(90*j));
      fill(260+i*4, 200, 100);
      text("L", 0+(i*48.9), -823+(45.5*i)+(90*j));
    }
  }
  if (off >= 2552) {
    off = 0;
  }
}