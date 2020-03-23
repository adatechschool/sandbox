var W = window.innerWidth;
var H = window.innerHeight;
var sliderAngle;
var sliderLen;
var sliderStroke;
var sliderLeft;
var sliderRight;
var angle = PI/4;
var len = 100;
var strokeValue = 12;
var coefLeft = 0.67;
var coefRight = 0.67;

function setup() 
{
  createCanvas(W, H);
  sliderAngle = createSlider(0, TWO_PI, PI/4, 0.01);
  sliderLen = createSlider(10, 400, 100, 1);
  sliderStroke = createSlider(4, 50, 10, 1);
  sliderLeft = createSlider(0.4, 0.8, 0.67, 0.01);
  sliderRight = createSlider(0.4, 0.8, 0.67, 0.01);
}


function draw() 
{
  background(51);
  stroke(255);
  angle = sliderAngle.value();
  len = sliderLen.value();
  strokeValue = sliderStroke.value();
  coefRight = sliderRight.value();
  coefLeft = sliderLeft.value();
  translate(W/2, H);
  branch(len, strokeValue);  
}

function branch(len, stroke)
{
  strokeWeight(stroke);
  line(0, 0, 0, - len);
  translate(0, - len);
  if (len > 4)
  {
    push();
    rotate(angle);
    branch(coefLeft*len, coefLeft*stroke);
    console.log(coefLeft);
    pop();
    push();
    rotate(-angle);
    branch(coefRight*len, coefRight*stroke);
    pop();
  }
}
