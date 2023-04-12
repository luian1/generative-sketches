var font1

function preload() {
  font1 = loadFont("test.ttf");
}

function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB);
  angleMode(DEGREES);
  blendMode(DIFFERENCE);

  background(0, 0, 0);
  var tSize = 1133;
  var max = 1000/tSize;
  var x = 1; y = 1;
  textSize(tSize*1.2);
  textFont(font1); 

  for(var rep = 0; rep < 6; rep++) {
    fill(270, 100, 100-(rep*10));
    L(x, -y);
    altL(x, y);
  
    L(-x, y);
    altL(-x, -y);
    x*=0.433;
    y*=0.433;
  }
}

function draw() {

}

function L(xR, yR) {
  push();
  translate (width/2, height/2);
  scale(xR, yR);
  text("L", -553, 500);
  pop();
} 

function altL(xR, yR) {
  push();
  translate (width/2, height/2);
  rotate(90);
  scale(xR, yR);
  text("L", -553, 500);
  pop();
} 