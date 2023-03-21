function setup() {
    createCanvas(1000, 1000);
  }
  
  function draw() {
    background(200);
    var max = 100;

    for(var col = 0; col < max; col++) {
      for(var row = 0; row < max; row++) {
        if (col > max*0.8 && row < max*0.7) {     
          text("L", 2+(row*10), 10+(col*10));
        } else if (row < max*0.2) {
          text("L", 2+(row*10), 10+(col*10));
        }
      }
    }

  }