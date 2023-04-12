var font1


function preload() {
  font1 = loadFont("test.ttf");
  img = loadImage("test.png");
}

function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB);
  background(260, 200, 100);
}

function draw() { 
  frameRate(2);
  var tSize = 100;
  textAlign(CENTER);
  textSize(tSize);
  textFont(font1);
  for(var k = 0; k <= 5; k++) {
  for(var j = 0; j <= 17; j++) {
    for(var i = 0; i <= 30; i++) {
      fill(260+i*2.1, 200, 100);
      text("L", 30-(i*2)+(j*62), 200+(i*3)-(j*20)+(k*170));
    }
  }
}
}