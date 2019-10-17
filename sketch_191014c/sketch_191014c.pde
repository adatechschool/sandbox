/**
 * Saturation. 
 * 
 * Saturation is the strength or purity of the color and represents the 
 * amount of gray in proportion to the hue. A "saturated" color is pure 
 * and an "unsaturated" color has a large percentage of gray. 
 * Move the cursor vertically over each bar to alter its saturation. 
 */
 
PImage img;
PImage img2;
PImage img3;
PImage img4;

void setup() {
  size(600, 600);
  img = loadImage("../images2/pikachu.png");
  img2 = loadImage("bulbizarre.png");
  img3 = loadImage("tiplouf.png");
  img4 = loadImage("images/poussifeu.png");
  
  imageMode(CENTER);
  noStroke();
}


void draw() {
  if(keyPressed && mousePressed)
  image(img4, mouseX, mouseY, 100, 100);
  else if (mousePressed)
  image(img, mouseX, mouseY, 100, 100);
  else if(keyPressed)
  image(img3, mouseX, mouseY, 100, 100);

  else
  image(img2, mouseX, mouseY, 100, 100);
}
