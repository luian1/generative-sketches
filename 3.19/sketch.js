function setup() {
  createCanvas(1000, 1000);
  slider = createSlider(1, 100, 1);
  slider.position(10, 10);
  slider.style('width', '80px');
  slider2 = createSlider(1, 5, 1);
  slider2.position(10, 30);
  slider2.style('width', '80px');
}

function draw() {
  background(200);
  var max = 100;
  var rand = 0;
  var maxR = 1;

  frameRate(slider2.value());
  
  for(var col = 0; col < max; col++) {
    for(var row = 0; row < max; row++) {
      rand = round(random(0,slider.value()));
      if (rand === 1) {     
        text("L", 2+(row*10), 10+(col*10));
      }
    }
  }

}