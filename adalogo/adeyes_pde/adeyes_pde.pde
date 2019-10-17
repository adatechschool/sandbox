void setup()
{
size(640, 360);
background(234, 149, 197);
noStroke();
}

void draw()
{
  
background(234, 149, 197);
  
//le premier a

//la lettre 
fill(150, 35, 35);
ellipse(100, 230, 150, 150);

fill(150, 35, 35);
rect(170, 150, 20, 150);

// yeux fermés 
if (mousePressed)
{
  fill(234, 149, 197);
  ellipse(100, 230, 110, 110);
  fill(150, 35, 35);
  arc(100, 220, 120, 50, 0, PI);
  fill(234, 149, 197);
  arc(100, 220, 108, 25, 0, PI);
  
  //cils 
  fill(150, 35, 35); 
}

//yeux ouverts
else
{
fill(255);
ellipse(100, 230 , 110, 110);

fill(150, 35, 35);
rect(170, 150, 20, 150);

fill(28, 116, 0);
ellipse(60 + mouseX/8, 190 + mouseY/5, 40, 40);

fill(0);
ellipse(60 + mouseX/8, 190 + mouseY/5, 20, 20);
}

//le d

fill(150, 35, 35);
ellipse(300, 230, 150, 150);

fill(234, 149, 197);
ellipse(300, 230, 110, 110);

fill(150, 35, 35);
rect(370, 40, 20, 260);

//le deuxième a
  
fill(150, 35, 35);
ellipse(500, 230, 150, 150);

if (mousePressed)
{
  fill(234, 149, 197);
  ellipse(500, 230, 110, 110);
  fill(150, 35, 35);
  arc(500, 220, 120, 50, 0, PI);
  fill(234, 149, 197);
  arc(500, 220, 108, 25, 0, PI);
}
else
{
fill(255);
ellipse(500, 230, 110, 110);

  fill(136, 78, 0);
//ellipse(100, 230, 20, 20);
ellipse(460 + mouseX/8, 190 + mouseY/5, 40, 40);

  fill(0);
//ellipse(100, 230, 20, 20);
ellipse(460 + mouseX/8, 190 + mouseY/5, 20, 20);
}

fill(150, 35, 35);
rect(570, 150, 20, 150);

}
