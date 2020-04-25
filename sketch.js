function setup() {
  createCanvas(1200, 400);
}

function draw() {
  r =map(mouseX,0,1200,150,250);
  g =map(mouseX,0,1200,80,250);
  b =map(mouseX,0,1200,80,250);
  background(r,g,b);
ellipse(mouseX,mouseY,25);
 
}
