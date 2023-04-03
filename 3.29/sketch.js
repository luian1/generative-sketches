var font1
var off=0;

function preload() {
  font1 = loadFont("test.ttf");
  img = loadImage("test.png");
}

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  frameRate(60);
  off++;
  var tSize = 120;
  var max = floor(1000/tSize);
  textAlign(CENTER);
  textSize(tSize);
  textFont(font1);
  for(var i = 0; i <= 5; i++) {
    fill(0);
    text("L", -538+off+(i*100), 90+182*i);
    text("L", 1538-off-(i*100), 181+182*i);
    fill(255);
    text("L", -1538+off+(i*100), 90+182*i);
    text("L", 2538-off-(i*100), 181+182*i);
  }
  if (off >= 2552) {
    off = 0;
  }
}