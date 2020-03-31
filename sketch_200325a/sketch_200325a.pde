float x = 0.01;
float y = 0; 
float z = 0;

float constA = 10;
float constB = 28;
float constC = 8.0/3.0;

ArrayList<PVector> points = new ArrayList<PVector>();


void setup()
{
  size(800, 600, P3D);
  background(51);
}

void draw()
{
  float dt = 0.01;
  float dx = (constA*(y -x))*dt;
  float dy = (x*(constB - z) - y)*dt;
  float dz = (x*y - constC*z)*dt;
  x =  x + dx;
  y = y + dy;
  z = z + dz;
  
  points.add(new PVector(x, y, y));
  
  translate(width/2, height - 150, -80);
  stroke((frameCount%2550)/10, 100, 50);
  scale(5);
  noFill();
  beginShape();
  for (PVector v : points)
  {
    vertex(v.x, v.y, v.z);
  }
  endShape();
}
