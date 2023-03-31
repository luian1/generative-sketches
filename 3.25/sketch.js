var font1

function preload() {
  font1 = loadFont("test.ttf");
}

function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES)
  slider = createSlider(0, 255, 255);
  slider.position(900, 900);
  slider.style('width', '80px');
}

function draw() {
  background(255, 255, 255, slider.value());
  translate (width/2, height/2);
  rotate(millis() / 100);
  
  textSize(10);
  textFont(font1);
  for (let i = 0; i < 12; i++) {
    points = font1.textToPoints("L", 0, 0, 600);
    for(let i = 0; i < points.length; i++) {
      text("L", points[i].x, points[i].y);
    }
    rotate(30);
  }

}