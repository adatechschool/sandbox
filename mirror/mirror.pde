void setup()
{
  size(500, 500);
  background(30);
}

void draw()
{
  stroke(random(25, 125), random(150), random(20, 200));
  if (mousePressed)
  {
    line(mouseX, mouseY, pmouseX, pmouseY);
    line(500 - mouseX, mouseY, 500 - pmouseX, pmouseY);
    line(500 - mouseX, 500 - mouseY, 500 - pmouseX, 500 - pmouseY);
    line(mouseX, 500 - mouseY, pmouseX, 500 - pmouseY);
  } 
  
  if(keyPressed && key == 'd')
  {
    clear();
    background(30);
  }
}
