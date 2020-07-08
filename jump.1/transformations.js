let W = window.innerWidth;
let H = window.innerHeight;
let porygon;
let imgPorygon;
let color1; 
let color2;

function setup() 
{
    createCanvas(W, H);
    color1 = color(0, 0, 60);
    color2 = color(180, 100, 255);
    porygon = new Porygon();
    imageMode(CENTER);
    imgPorygon = loadImage("https://vignette.wikia.nocookie.net/kingdomhearts/images/1/10/Mushu.png/revision/latest/top-crop/width/360/height/450?cb=20120512105550&path-prefix=fr");
}


function draw() 
{
    setGradient(color1, color2);
    translate(-porygon.x + W/2, -porygon.y + H/2);
    fill(255);
    rect(-5000, H/2 - 175, 10000, H/2);
    fill(120, 110, 244);
    for (i = 1; i < 120; i++)
    {
        rect(i * 100, -i * 200, 100, 30);
    }
    rect(400, 100, 200, 20);

    porygon.move();
    porygon.show();
    console.log(porygon.y);
}

function keyPressed()
{
    if (key == "z")
    {
        porygon.jump();
    }
    if (key == "d")
    {
        porygon.turn_right();
    }
    if (key == "q")
    {
        //scale(-1, 1);
        porygon.turn_left();
    }
}

function setGradient(c1, c2) {
    // noprotect
    noFill();
    for (var y = 0; y < height; y++) {
      var inter = map(y, 0, height, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(0, y, width, y);
    }
  }

class Porygon
{
    constructor()
    {
        this.x = W/2;
        this.y = H/2;
        this.bounce = 0;
        this.xMove = 0;
        this.gravity = 0.5;
    }
    jump()
    {
        this.bounce = -15;
    }
    turn_left()
    {
        this.xMove = -10;
    }
    turn_right()
    {
        this.xMove = 10;
    }
    move()
    {
        this.x += this.xMove;
        this.y += this.bounce;
        this.bounce += this.gravity;
        if (this.xMove < 0)
        {
            this.xMove += 0.1;
        }
        else if (this.xMove > 0)
        {
            this.xMove -= 0.1;
        }
        this.y = constrain(this.y, -10000, 150);
    }
    show()
    {
        fill(246, 105, 109);
        rect(this.x, this.y, 50, 50);
    }
}

class Platform
{
    constructor()
    {
        this.x = random(W);
        this.y = random(H);
        this.width = random(100, 200);
        this.height = 20;
    }
}
