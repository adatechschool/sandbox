Pixel[] tab = new Pixel[10000];
Mouse Mouse1 = new Mouse();
Ground Ground1 = new Ground(20);

void setup()
{
  
  size(1000, 1000);
  colorMode(HSB, 360, 100, 100);
  for (int i = 0; i < 100; i++)
  {
    for (int j = 0; j < 100; j++)
    {
      tab[i*100 + j] = new Pixel(i, j);
    }
  }
}

void draw()
{
  //Mouse1.fulldegraded(0, 360); 
  for (int i = 0; i < 10000; i++)
  {
     tab[i].colorize(int(random(100, 150)), 40, 40); 
  }
  Ground1.drawground();
  Mouse1.light();

}
