let W = window.innerWidth;
let H = window.innerHeight;
let xoff = [];
let L1, H1, C1, C2, C3, C4;

function setup() 
{
  createCanvas(W, H);
  for (let i = 0; i < 150; i++)
  {
    xoff[i] = random(184651116);
  }
   V1 = new VerticalLine();
   H1 = new HorizontalLine();
   C1 = new WanderingCircle(random(400));
   C2 = new WanderingCircle(random(500));
   C3 = new WanderingCircle(random(200));
   C4 = new WanderingCircle(random(300));
}


function draw() 
{
  for (let i = 0; i < 150; i++)
  {
    xoff[i] += 0.01;
  }
  greyBackground();
  blendMode(MULTIPLY);
  V1.display();
  H1.display();
  blendMode(ADD);
  C1.display();
  blendMode(DIFFERENCE);
  C2.display();
  C3.display();
  blendMode(SUBTRACT);
  C4.display();
  blendMode(BLEND);
  //blendMode(EXCLUSION);
  centerSquare(200);
}

class VerticalLine
{
  constructor()
  {
    this.xoff = random(5556987);
    this.lineX = noise(this.xoff) * W;
    this.R = random(255);
    this.V = random(255);
    this.B = random(255);
  }
  
  display()
  {
    this.move();
    stroke(this.R, this.V, this.B);
    strokeWeight(1);
    line(this.lineX, 0, this.lineX, H);
  }
  move()
  {
   this.xoff += 0.01;
   this.lineX = noise(this.xoff) * W;
  }
}

class HorizontalLine
{
  constructor()
  {
    this.xoff = random(5556987);
    this.lineY = noise(this.xoff) * H;
    this.R = random(255);
    this.V = random(255);
    this.B = random(255);
  }
  
  display()
  {
    this.move();
    stroke(this.R, this.V, this.B);
    strokeWeight(1);
    line(0, this.lineY, W, this.lineY);
  }
  move()
  {
   this.xoff += 0.01;
   this.lineY = noise(this.xoff) * H;
  }
}

class WanderingCircle
{
  constructor(size)
  {
    this.size = size;
    this.xoff = random(574000);
    this.yoff = this.xoff + 20;
    this.zoff = random(87510);
    this.Xpos = noise(this.xoff)*W;
    this.Ypos = noise(this.yoff)*H;
    this.R = 255;
    this.V = 255;
    this.B = 255;
  }
  
  move()
  {
    this.xoff += 0.001;
    this.yoff += 0.001;
    this.zoff += 0.001;
    this.Xpos = noise(this.xoff)*W;
    this.Ypos = noise(this.yoff)*H;
  }
  vary()
  {
    this.size += noise(this.zoff);
    this.size -= noise(this.yoff);
  }
  display()
  {
    this.move();
    this.vary();
    noStroke();
    fill(noise(this.xoff)*this.R, noise(this.yoff)*this.V, noise(this.zoff)*this.B);
    circle(this.Xpos, this.Ypos, this.size);
  }
}


function centerSquare(size)
{
  size = noise(xoff[1]) * (H/2) + size;
  let colorVar = noise(xoff[2]);
  rectMode(CENTER);
  noStroke();
  fill(int(colorVar*255), 51, 255 - int(noise(xoff[1]) * 200), 60);
  rect(W/2, H/2, size, size);
}

function greyBackground()
{
  background(51);
}
