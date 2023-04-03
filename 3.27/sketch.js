var font1

function preload() {
  font1 = loadFont("test.ttf");
  img = loadImage("test.png");
}

function setup() {
  createCanvas(1000, 1000);
  image(img, 0, 0, 1000, 1000);
  
  var tSize = 15;
  var max = 1000/tSize;
  let co = [];
  co[0] = [];
  textSize(tSize*1.2);
  textFont(font1);

  let i = 0;
  for(var col = 0; col < max; col++) {
    for(var row = 0; row < max; row++) {  
        co[i] = get(0+row*tSize, 0+col*tSize);
        console.log(co[i]);
        i++;
    }
  }

  background(0);

  i = 0;
  for(var col = 0; col < max; col++) {
    for(var row = 0; row < max; row++) {
        fill(co[i]);
        text("L", 1+(row*tSize), (tSize*0.85)+(col*tSize));
        i++;
    }
  }
}

function draw() {
  
}