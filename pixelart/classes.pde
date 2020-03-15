class Pixel
{
  int posX, posY, index, size, Hue, Sat, Bri;
  Pixel(int a, int b)
  {
    posX = a;
    posY = b;
    index = a + b*100;
    size = 10;
    Hue = int(random(360));
    Sat = 100;
    Bri = 100;
  }
  
  
  void colorize(int a, int b, int c)
  {
    this.Hue = a;
    this.Sat = b;
    this.Bri = c;
    fill(Hue, Sat, Bri);
    rect(this.posX*size, this.posY*size, size, size);
  }
  
  void crazy()
  {
    fill(random(360), random(100), random(100));
    rect(this.posX*size, this.posY*size, size, size);
  }
  
  void printpos() // cassé
  {
    blendMode(NORMAL);
    fill(0);
    String number = str(this.index);
    text(number, this.posX, this.posY, this.posX + 1, this.posY + 1);
    blendMode(NORMAL);
  }
}

class Ground
{
  int level;
  Ground(int a)
  {
    level = 100 - a;
  }
  
  void drawground()
  {
    for (int i = 0; i < 10000; i++)
    {
      if (i%100 > level)
      { 
        int shine1 = int(mouseX/50);
        int shine2 = int(mouseY/50);
        tab[i].colorize(i/2000 * 10 + 90, 100 - shine1, 80 + shine2);
      }
      if (i%100 == level)
      {
        tab[i].colorize(30, 45, 50);
      }
    }
  }
}

class Mouse
{
  int posX, posY, index;
  Mouse()
  {
    posX = int(mouseX/10);
    posY = int(mouseY/10);
    index = posY + posX*100;
  }
  
  void updatepos()
  {
    this.posX = int(mouseX/10);
    this.posY = int(mouseY/10);
    this.index = this.posY + this.posX*100;
  }
  
  void hoversquare(int sizeX, int sizeY)
  {
     this.updatepos();
     blendMode(SUBTRACT);

    for (int j = constrain(this.posX - sizeX/2, 0, 100); j < constrain(this.posX + sizeX/2, 0, 100); j++)
    {
      for (int k = constrain(this.posY - sizeY/2, 0, 100); k < constrain(this.posY + sizeY/2, 0, 100); k++)
      {
        if (tab[j*100 +k].index%3 == 0)
        {
          blendMode(MULTIPLY);
        }
        if (tab[j*100 +k].index%5 == 0)
        {
          blendMode(SCREEN);
        }
        tab[j*100 + k].colorize(j+k, 100 - j, k);
        blendMode(SUBTRACT);
      }
    }
     blendMode(NORMAL);
  } 
  
  void fulldegraded(int min, int max)
  {
    this.updatepos();
    for (int i = 0; i < 10000; i++)
    {
      tab[i].colorize(constrain(int(i/30), min, max), this.posY, (this.posX + this.posY)/2);
    }
  }
  
  void light()
  {
    this.updatepos();
    int index = this.index;
    int Hue = tab[index].Hue;
    int Sat = tab[index].Sat;
    int Bri = constrain(tab[index].Hue + 50, tab[index].Hue + 50, 100);
    tab[index].colorize(Hue, Sat, Bri);
    if (mousePressed)
    {
      String number = str(this.index);
      fill(200, 100, 100);
      textSize(30);
      text("le pixel numéro " + number + " est éclairé", 200, 200);
    }
  }
}
