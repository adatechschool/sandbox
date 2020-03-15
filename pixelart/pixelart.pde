Pixel[] tab = new Pixel[10000];
Mouse Mouse1 = new Mouse();
Ground Ground1 = new Ground(20);
Sky Sky1 = new Sky(0);

void setup()
{
  
  size(1000, 1000);
  colorMode(HSB, 360, 100, 100);
  for (int i = 0; i < 100; i++)
  {
    for (int j = 0; j < 100; j++)
    {
      tab[j*100 + i] = new Pixel(i, j);
    }
  }
}

void draw()
{
  Sky1.drawsky();
  Ground1.drawground();
  Mouse1.light();
}
