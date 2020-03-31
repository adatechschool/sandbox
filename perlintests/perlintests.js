let W = window.innerWidth;
let H = window.innerHeight;
let xoff = 0.0;
let yoff = 3000.0;

function setup() 
{
  createCanvas(W, H);
}


function draw() 
{
  xoff += 0.01;
  yoff += 0.01;
  greyBackground();
  verticalLine(251, 51, 251, 3);
  wanderingCircle(255, 4);
  centerSquare(200);
  //wanderingCircle(125, 1);
}

function verticalLine(r, v, b, weight)
{
  stroke(r, v, b);
  strokeWeight(weight);
  let lineX = noise(xoff) * W;
  line(lineX, 0, lineX, H);
}

function wanderingCircle(size)
{
  let Xpos = noise(xoff)*W;
  let Ypos = noise(yoff)*H;
  let varSize = noise(xoff);
  fill(int(noise(yoff) * 255), int(noise(xoff) * 230), int(noise(xoff) * 195)); 
  blendMode(ADD);
  noStroke();
  circle(Xpos, Ypos, size*varSize);
  blendMode(NORMAL);
}

function centerSquare(size)
{
  size = noise(xoff) * (H/2) + size;
  let colorVar = noise(yoff);
  rectMode(CENTER);
  noStroke();
  fill(int(colorVar*255), 51, 255 - int(noise(xoff) * 200), 60);
  blendMode(BLEND);
  rect(W/2, H/2, size, size);
  blendMode(NORMAL);
}

function greyBackground()
{
  background(51);
}
