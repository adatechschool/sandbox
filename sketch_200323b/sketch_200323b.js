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
  sliderAngle.position(10, 10);
  sliderAngle.style('background-color', "#000000");
  sliderLen = createSlider(10, 400, 100, 1);
  sliderLen.position(10, 40);
  sliderStroke = createSlider(4, 50, 10, 1);
  sliderStroke.position(10, 70);
  sliderLeft = createSlider(0.4, 0.8, 0.67, 0.01);
  sliderLeft.position(10, 100);
  sliderRight = createSlider(0.4, 0.8, 0.67, 0.01);
  sliderRight.position(10, 130);
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
    pop();
    push();
    rotate(-angle);
    branch(coefRight*len, coefRight*stroke);
    pop();
  }
}
