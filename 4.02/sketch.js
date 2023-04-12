var font1

function preload() {
  font1 = loadFont("test.ttf");
}

function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB);

  background(0, 0, 0);

  var tSize = 20;
  var max = 1000/tSize;
  textSize(tSize*1.2);
  textFont(font1); 

  var a = 0.0;
  var inc = TWO_PI / 25.0;
  var row = 0;

    for(var col = 0; col < max*1.1; col++) {    
      for (var wav = 0; wav < 20; wav++) {
        fill(260+row*(tSize*0.075), 100, 30+wav*3.3);
        text("L", -150+(row*tSize)+wav*6, 500+tan(a)*(100+wav*8));
      }
      a = a + inc;
      row++;
    }
  
}

function draw() {

}