void setup()
{
  size(800, 400);
  background(249, 218, 219);
}

void draw()
{
  rondRouge(150, 250);
  barreVerticale(250, 250, 150);
  rondRouge(400, 250);
  barreVerticale(500, 200, 250);
  rondRouge(650, 250);
  barreVerticale(750, 250, 150);
}

void rondRouge(int posX, int posY)
{
  stroke(231, 79, 60);
  fill(249, 218, 219);
  strokeWeight(25);
  ellipse(posX, posY, 150, 150);
}

void barreVerticale(int posX, int posY, int hauteur)
{
  fill(231, 79, 60);
  rectMode(CENTER);
  rect(posX, posY, 2, hauteur);
}
