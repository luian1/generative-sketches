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
  var off = 0;

  let a = 0.0;
  let inc = TWO_PI / 25.0;
  var row = 0;

    for(var col = 0; col < max*1.1; col++) {    
      for (var wav = 0; wav < 5; wav++) {
        fill(260+row*(tSize*0.075), 100, 60);
        text("L", -50+(row*tSize)+wav*10, 500+sin(a)*(100+wav*50));
        fill(260+row*(tSize*0.075), 100, 100);
        text("L", -50+(row*tSize)+wav*10, 500+cos(a)*(100+wav*50));
      }
      a = a + inc;
      row++;
    }
  
}

function draw() {

}