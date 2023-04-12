var font1

function preload() {
  font1 = loadFont("test.ttf");
}

function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB);
  angleMode(DEGREES);

  background(0, 0, 0);
  var tSize = 1133;
  var max = 1000/tSize;
  var x = 1; y = 1; reps = 10; mult = 1.02;
  textSize(tSize*1.2);
  textFont(font1); 

  for(var rep = 0; rep <= reps; rep++) {
    x/=mult;
  }

  for(var rep = 0; rep <= reps+1; rep++) {
    fill(335, 100, 60+rep*(40/reps));
    L(x, -x, 0, 0);
    altL(x, x, 0, 0);
    L(x*0.435, -x*0.435, 0, 0);
    altL(x*0.435, x*0.435, 0, 0);
    L(-x*0.6, x*0.6, -334, 334);
    altL(-x*0.6, -x*0.6, -334, 334);
    L(-x*0.261, x*0.261, -740, 740);
    altL(-x*0.261, -x*0.261, -740, 740);
    x*=mult;
  }

}

function draw() {

}

function L(xR, yR, xx, yy) {
  push();
  translate (width/2, height/2);
  scale(xR, yR);
  text("L", -553+xx, 500+yy);
  pop();
} 

function altL(xR, yR, xx, yy) {
  push();
  translate (width/2, height/2);
  rotate(90);
  scale(xR, yR);
  text("L", -553+xx, 500+yy);
  pop();
} 