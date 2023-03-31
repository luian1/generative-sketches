var font1, dir
var f=0; offset = 0;

function preload() {
  font1 = loadFont("test.ttf");
}

function setup() {
  createCanvas(1000, 1000);
  textFont(font1);
  textSize(20);
  text("Click (or hold) to reset past frames. Use the slider to adjust frame rate", 20, 20);
  slider = createSlider(1, 30, 1);
  slider.position(900, 900);
  slider.style('width', '80px');
}

function draw() {
  frameRate(slider.value());
  f+=0.1;
  noStroke();
  fill(noise(f)*255, 50, 200);

  if(mouseIsPressed === true) {
    background(255);
  }

  points = font1.textToPoints("L", 160, 725, 800);
  for(let i = 0; i < points.length; i++) {
    square(points[i].x, points[i].y, noise(f)*160);
  }

  points1 = font1.textToPoints("L", 160, 725, 800);
  for(let i = 0; i < points1.length; i++) {
    offset++;
    square(points1[i].x+(offset*random(-1, 1)), points1[i].y+(offset*random(-1, 1)), 80);
    if (offset > 100) {
      offset=0;
    }
  }

}