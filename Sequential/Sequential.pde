/**
 * Sequential
 * by James Paterson.  
 * 
 * Displaying a sequence of images creates the illusion of motion. 
 * Twelve images are loaded and each is displayed individually in a loop. 
 */

int numFrames = 9;  // The number of frames in the animation
int currentFrame = 0;
PImage[] images = new PImage[numFrames];

    
void setup() {
  

  size(1600, 1100);
  frameRate(12);
  imageMode(CENTER);
  noStroke();
  
  images[0]  = loadImage("marine.png");
  images[1]  = loadImage("marine.png"); 
  images[1].filter(INVERT);
  images[2]  = loadImage("marine.png");
  images[2].filter(THRESHOLD, 0.5);
  images[3]  = loadImage("marine.png"); 
  images[3].filter(POSTERIZE, 5); 
  images[4]  = loadImage("marine.png");
  images[4].filter(DILATE); 
  images[5]  = loadImage("marine.png");
  images[5].filter(INVERT);
  images[6]  = loadImage("marine.png");
  images[6].filter(GRAY);
  images[7]  = loadImage("marine.png"); 
  images[7].filter(THRESHOLD, 0.5);
  images[7].filter(INVERT);
  images[8]  = loadImage("marine.png");
  images[8].filter(ERODE);
  
  // If you don't want to load each image separately
  // and you know how many frames you have, you
  // can create the filenames as the program runs.
  // The nf() command does number formatting, which will
  // ensure that the number is (in this case) 4 digits.
  //for (int i = 0; i < numFrames; i++) {
  //  String imageName = "PT_anim" + nf(i, 4) + ".gif";
  //  images[i] = loadImage(imageName);
  //}
} 
 
void draw() { 
  background(0);
  currentFrame = (currentFrame+1) % numFrames;  // Use % to cycle through frames
  int offset = 0;
  for (int x = -100; x < width; x += images[0].width) { 
    image(images[(currentFrame+offset) % numFrames], 1000, 400);
    offset+=2;
    //image(images[(currentFrame+offset) % numFrames], x, height/2);
    //offset+=2;
  }
}
