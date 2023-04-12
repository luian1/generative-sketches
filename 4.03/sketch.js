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
  for(var col = 0; col < max*1.1; col++) {    
    fill(260+col*(tSize*0.075), 100, 40);
    text("L", (row*tSize), 500+sin(a)*(noise(f)*100));
    text("L", (row*tSize), 500+cos(a)*(noise(f+3)*100));
    fill(260+col*(tSize*0.075), 100, 60);
    text("L", (row*tSize), 500+sin(a)*(noise(f)*150));
    text("L", (row*tSize), 500+cos(a)*(noise(f+3)*150));
    fill(260+col*(tSize*0.075), 100, 80);
    text("L", (row*tSize), 500+sin(a)*(noise(f)*200));
    text("L", (row*tSize), 500+cos(a)*(noise(f+3)*200));
    fill(260+col*(tSize*0.075), 100, 100);
    text("L", (row*tSize), 500+sin(a)*(noise(f)*250));
    text("L", (row*tSize), 500+cos(a)*(noise(f+3)*250));
    a = a + inc;
    row++;
  }
}