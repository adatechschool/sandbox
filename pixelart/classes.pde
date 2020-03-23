class Pixel
{
  int posX, posY, index, size, Hue, Sat, Bri;
  Pixel(int a, int b)
  {
    posX = a;
    posY = b;
    index = a + b*160;
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
    fill(random(360), random(30, 100), random(30, 100));
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

class Sky
{
  int rate;
  Sky(int a)
  {
    rate = a;
  }

  void drawsky()
  {
    int j;
    for (int i = 0; i < 14400; i++)
    {
      j = int(i/100);
      tab[i].colorize(180 + j, 100, 50);
    }
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
    for (int i = 14399; i > level*160 - 1; i--)
    {
       int shine1 = int(mouseX/50);
       int shine2 = int(mouseY/50);
       tab[i].colorize(100, 100 - shine1, 80 + shine2);
    }
    for (int i = level*160; i < level*160 + 160; i++)
    {
      tab[i].colorize(250, 30, 30);
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
    index = posX + posY*160;
  }
  
  void updatepos()
  {
    this.posX = int(mouseX/10);
    this.posY = int(mouseY/10);
    this.index = this.posX + (this.posY*160);
  }
  
  void hoversquare(int sizeX, int sizeY)
  {
     this.updatepos();
     blendMode(SUBTRACT);

    for (int j = constrain(this.posX - sizeX/2, 0, 100); j < constrain(this.posX + sizeX/2, 0, 160); j++)
    {
      for (int k = constrain(this.posY - sizeY/2, 0, 100); k < constrain(this.posY + sizeY/2, 0, 90); k++)
      {
        if (tab[k*160 + j].index%3 == 0)
        {
          blendMode(MULTIPLY);
        }
        if (tab[k*160 +j].index%5 == 0)
        {
          blendMode(SCREEN);
        }
        tab[k*100 + j].colorize(j+k, 100 - j, k);
        blendMode(SUBTRACT);
      }
    }
     blendMode(NORMAL);
  } 
  
  void fulldegraded(int min, int max)
  {
    this.updatepos();
    for (int i = 0; i < 14400; i++)
    {
      tab[i].colorize(constrain(int(i/40), min, max), this.posY, (this.posX + this.posY)/2);
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
      fill(0, 100, 100);
      textSize(30);
      text("le pixel numéro " + number + " est éclairé", 200, 200);
    }
  }
}
