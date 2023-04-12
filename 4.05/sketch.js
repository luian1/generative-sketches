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
  var x = 1; y = 1; reps = 10; mult = 1.02; xx = 0; yy = 0;
  textSize(tSize*1.2);
  textFont(font1); 

  for(var sus = 0; sus <= 1; sus++) {
    for(var rep1 = 0; rep1 <= reps; rep1++) {
      x/=mult;
    }
    for(var rep = 0; rep <= reps+1; rep++) {
      fill(335, 100, 60+rep*(40/reps));
      L(x, -x, xx, yy);
      altL(x, x, xx, yy);
      x*=mult;
    }
    x*=-0.58;
    xx-=345;
    yy+=345;
  }
  
  x = 1; xx = 0; yy = 0;
  for(var sus = 0; sus <= 1; sus++) {
    for(var rep1 = 0; rep1 <= reps; rep1++) {
      x/=mult;
    }
    for(var rep = 0; rep <= reps+1; rep++) {
      fill(335, 100, 60+rep*(40/reps));
      L(x*0.435, -x*0.435, xx*2.3, yy*2.3);
      altL(x*0.435, x*0.435, xx*2.3, yy*2.3);
      x*=mult;
    }
    x*=-0.58;
    xx-=345;
    yy+=345;
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