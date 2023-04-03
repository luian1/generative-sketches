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

function draw() { //wip
  frameRate(60);
  off++;
  background(220, 100, 30);
  var tSize = 100;
  var max = floor(1000/tSize);
  textAlign(CENTER);
  textSize(tSize);
  textFont(font1);
  for(var j = 0; j <= 20; j++) {
    for(var i = 0; i <= 20; i++) {
      fill(240+i*5, 200, 100);
      text("L", 20+(i*48.9), -820+(45.5*i)+(90*j));
      //text("L", 962-(i*50), 90+50*i);
    }
  }
  if (off >= 2552) {
    off = 0;
  }
}