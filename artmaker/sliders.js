var speed = document.getElementById("myRange");
let blue = document.getElementById("Blue");
let red = document.getElementById("Red");
let green = document.getElementById("Green");

// Update the current slider value (each time you drag the slider handle)
speed.oninput = function() 
{
  currentspeed = 1000 - this.value;
  console.log(currentspeed);
  setSpeed();
}

red.oninput = function()
{
    a = this.value;
}

green.oninput = function()
{
    b = this.value;
}

blue.oninput = function()
{
    c = this.value;
}
