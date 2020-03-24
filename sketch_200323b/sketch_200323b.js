// un petit tas de variables globales

var W = window.innerWidth;
var H = window.innerHeight;
var sliderAngle;
var sliderLen;
var sliderStroke;
var sliderLeft;
var sliderRight;
var sliderTimes;
var sliderBack;
var sliderColor;
var sliderBackSat;
var sliderBackBri;
var sliderTreeSat;
var sliderTreeBri;

// je pense que c'est pas la peine d'initialiser celles là, mais bon, j'aime pas les déclarer dans la draw alors voilà :

var angle = PI/4;
var len = 100;
var strokeValue = 12;
var coefLeft = 0.67;
var coefRight = 0.67;
var backColor = 51;
var backSat = 50;
var backBri = 75;
var treeColor = 255;
var treeSat = 25;
var treeBri = 100;

function setup() 
{
  // Je passe en HSB par ce que c'est la tendance du moment et que ça m'économise 1 curseur
  colorMode(HSB, 360, 100, 100);
  createCanvas(W, H);
  
  //tout ça est très répetitif, mais ça sert juste à créer les sliders
  sliderAngle = createSlider(0, TWO_PI, PI/4, 0.01);// createSlider(minimum, maximum, valeur de départ, pas) <---- SUPER PRATIQUE
  sliderAngle.position(10, 10);
  sliderLen = createSlider(10, 400, 100, 1);
  sliderLen.position(10, 40);
  sliderStroke = createSlider(4, 50, 10, 1);
  sliderStroke.position(10, 70);
  sliderLeft = createSlider(0.4, 0.8, 0.67, 0.01);
  sliderLeft.position(10, 100);
  sliderRight = createSlider(0.4, 0.8, 0.67, 0.01);
  sliderRight.position(10, 130);
  sliderTimes = createSlider(0, 11, 4, 1);
  sliderTimes.position(10, 160);
  sliderTree = createSlider(0, 360, 0, 1);
  sliderTree.position(W - 230, 10);
  sliderTreeSat = createSlider(0, 100, 0, 1);
  sliderTreeSat.position(W - 230, 40);
  sliderTreeBri = createSlider(0, 100, 100, 1);
  sliderTreeBri.position(W - 230, 70);
  sliderBack = createSlider(0, 360, 0, 1);
  sliderBack.position(W - 230, 140);
  sliderBackSat = createSlider(0, 100, 0, 1);
  sliderBackSat.position(W - 230, 170);
  sliderBackBri = createSlider(0, 100, 9, 1);
  sliderBackBri.position(W - 230, 200);
}


function draw() 
{
  // on récupère les valeurs de chaque slider à chaque appel de la draw
  angle = sliderAngle.value();
  len = sliderLen.value();
  strokeValue = sliderStroke.value();
  coefRight = sliderRight.value();
  coefLeft = sliderLeft.value();
  Times = sliderTimes.value();
  backColor = sliderBack.value();
  backSat = sliderBackSat.value();
  backBri = sliderBackBri.value();
  treeColor = sliderTree.value();
  treeSat = sliderTreeSat.value();
  treeBri = sliderTreeBri.value();
  
  
  background(backColor, backSat, backBri);
  stroke(treeColor, treeSat, treeBri);
  translate(W/2, H);
  branch(len, strokeValue, Times);  
}

function branch(len, strokeW, times)
{
  strokeWeight(strokeW);
  line(0, 0, 0, - len);
  translate(0, - len);
  while (times-- > 0)
  {
    push();
    rotate(angle);
    branch(coefLeft * len, coefLeft*strokeW, times); //récursion
    pop();
    push();
    rotate(-angle);
    branch(coefRight*len, coefRight*strokeW, times); // deuxième récursion
    pop();
  }
}
