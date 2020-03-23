Pixel[] tab = new Pixel[14400];
Mouse Mouse1 = new Mouse();
Ground Ground1 = new Ground(30);
Sky Sky1 = new Sky(0);

void setup()
{
  
  size(1600, 900);
  colorMode(HSB, 360, 100, 100);
  for (int i = 0; i < 160; i++)
  {
    for (int j = 0; j < 90; j++)
    {
      tab[i + j*160] = new Pixel(i, j);
    }
  }
}

void draw()
{
  Mouse1.fulldegraded(160, 220);
  //Sky1.drawsky();
  Ground1.drawground();
  Mouse1.light();
  //for (int i = 0; i < 10000; i++)
  //{
    //if (i%12 == 0 || i%17 == 0)
    //{
      //tab[i].crazy();
    //}
  //}
}
