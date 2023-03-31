var font1

function preload() {
  font1 = loadFont("test.ttf");
}

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(0);
  textSize(10);
  textFont(font1);
  var max = 100;
  
  for(var col = 0; col < max; col++) {
    for(var row = 0; row < max; row++) {  
      fill(row*col/4);
      text("L", 1+(row*10), 9+(col*10));
    }
  }
}