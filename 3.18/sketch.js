function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(200);
  var max = 100;
  var rand = 0;

  frameRate(1);
  
  for(var col = 0; col < max; col++) {
    for(var row = 0; row < max; row++) {
      rand = round(random(0,1));
      if (rand === 1) {     
        text("L", 2+(row*10), 10+(col*10));
      }
    }
  }

}