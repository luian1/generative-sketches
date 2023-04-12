var f = 0;
var off = 100; off2 = 200;

function setup() {
  createCanvas(1000, 1000);
  blendMode(SCREEN);
}

function draw() { 
  frameRate(24);
  clear();
  background(0);
  f+=0.1;
  noStroke();
  L(255, 0, 0, 0);
  L(0, 255, 0, 110);
  L(0, 0, 255, 220);
}

function L(r, g, b, off) {
  fill(r, g, b);
  quad(190-(noise(f+off+10)*50), 115-(noise(f+off+20)*50), 515+(noise(f+off+30)*50), 115-(noise(f+off+40)*50),
  515+(noise(f+off+50)*50), 160+(noise(f+off+60)*50), 190-(noise(f+off+70)*50), 160+(noise(f+off+80)*50));
  quad(301-(noise(f+off+12.5)*25), 115, 398+(noise(f+off+22.5)*25), 115, 398+(noise(f+off+32.5)*25), 850, 301-(noise(f+off+42.5)*25), 850);
  quad(190-(noise(f+off+15)*50), 805-(noise(f+off+25)*50), 810, 805-(noise(f+off+45)*50),
  810+(noise(f+off+55)*50), 850+(noise(f+off+65)*50), 190-(noise(f+off+75)*50), 850+(noise(f+off+85)*50));
  quad(765-(noise(f+off+17.5)*50), 670-(noise(f+off+27.5)*50), 810+(noise(f+off+37.5)*50), 670-(noise(f+off+47.5)*50),
  810+(noise(f+off+55)*50), 850+(noise(f+off+65)*50), 765-(noise(f+off+77.5)*50), 850);
}