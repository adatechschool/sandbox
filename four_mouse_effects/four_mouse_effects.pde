void setup() 
{
  size(800, 800);
  background(255);
  frameRate(60);
}

int i = 0;

void draw()
{
  i++;
  float taille = random(10);
  if ((mouseY < 400) && (mouseX < 400))
  {
    fill(random(100), random(255), random(150, 255));
    blendMode(DIFFERENCE);
    triangle(mouseX, mouseY, around_m(mouseX), around_m(mouseY), around_m(mouseX), around_m(mouseY));
    blendMode(ADD);
    ellipse(around_m(mouseX), around_m(mouseY), taille + 3, taille + 3);
  }
  else if ((mouseX < 400) && (mouseY >= 400))
  {
    fill(random(255), random(100), random(150, 255));
    blendMode(DIFFERENCE);
    taille = random(20);
    ellipse(around_m(mouseX), around_m(mouseY), taille, taille);
    blendMode(MULTIPLY);
    triangle(mouseX, mouseY, around_s(mouseX), around_s(mouseY), around_s(mouseX), around_s(mouseY));
  }
  else if ((mouseX >= 400) && (mouseY >= 400))
  {
    fill(random(150, 255), random(255), random(100));
    blendMode(DIFFERENCE);
    bezier(around_l(mouseX), around_l(mouseY), around_m(mouseX), around_m(mouseY), around_l(mouseX), around_l(mouseY), mouseX, mouseY);
    blendMode(ADD);
    ellipse(around_m(mouseX), around_m(mouseY), taille, taille);
  }
  else
  {
    blendMode(NORMAL);
    for (int j = 0; j < 22; j++)
    {
    line(around_s(mouseX), around_s(mouseY), around_m(mouseX), around_m(mouseY));
    }
  }
  
  if (i%12 == 0)
  {
    blendMode(SCREEN);
    rect(0, 0, 800, 800);
  }
}

float around_s(float position) {
  return position + random( -15, 15 );
}

float around_m(float position) {
  return position + random( -40, 40 );
  
}float around_l(float position) {
  return position + random( -65, 65 );
}
