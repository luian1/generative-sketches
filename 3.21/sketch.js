function setup() {
  createCanvas(1000, 1000);
  noStroke();
}

  var xOff = 0;

function draw() {
  background(200);
  
  xOff++;
  if(xOff >= 650) {
    xOff = -650;
  }
  
  for (let i = 0; i <= 10; i++) {
    L(xOff, 0.5 + i*0.5, 15+(15*i));
    El(xOff, 0.25 + i*0.5, 7.5+(15*i));
  }

}

function L (xOff, mult, col) {
    fill(col);
    for (let i = 0; i < 5; i++) {
    push();
    square(350+(xOff*mult), 300+(i*100), 50);   
    pop();
    square(400+(i*50)+(xOff*mult), 750, 25);
    square(425+(i*50)+(xOff*mult), 775, 25);
  }

  for (let i = 0; i < 5; i++) {
    fill(col);
    square(350-(xOff*mult), 350+(i*100), 50);   
    square(425+(i*50)-(xOff*mult), 750, 25);
    square(400+(i*50)-(xOff*mult), 775, 25);
  }
}

function El (xOff, mult, col) {
  fill(col);
    for (let i = 0; i < 5; i++) {
    square(350-(xOff*mult), 300+(i*100), 50);   
    square(400+(i*50)-(xOff*mult), 750, 25);
    square(425+(i*50)-(xOff*mult), 775, 25);
  }

  for (let i = 0; i < 5; i++) {
    square(350+(xOff*mult), 350+(i*100), 50);   
    square(425+(i*50)+(xOff*mult), 750, 25);
    square(400+(i*50)+(xOff*mult), 775, 25);
  }
}