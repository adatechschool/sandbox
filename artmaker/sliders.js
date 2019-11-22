var speed = document.getElementById("myRange");
let blueSlider = document.getElementById("Blue");
let redSlider = document.getElementById("Red");
let greenSlider = document.getElementById("Green");
let aSlider = document.getElementById("a");
let bSlider = document.getElementById("b");
let cSlider = document.getElementById("c");
// Update the current slider value (each time you drag the slider handle)
speed.oninput = function() 
{
  currentspeed = 1000 - this.value;
  console.log(currentspeed);
  setSpeed();
}

redSlider.oninput = function()
{
    red = this.value;
}

greenSlider.oninput = function()
{
    green = this.value;
}

blueSlider.oninput = function()
{
    blue = this.value;
}

aSlider.oninput = function()
{
    a = this.value;
}

bSlider.oninput = function()
{
    b = this.value;
}

cSlider.oninput = function()
{
    c = this.value;
}

