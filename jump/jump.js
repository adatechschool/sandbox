let W = window.innerWidth;
let H = window.innerHeight;
let porygon;

function setup() 
{
    createCanvas(W, H);
    porygon = new Porygon();
}


function draw() 
{
    background(0);
    //translate(porygon.x, porygon.y);
    fill(15, 200, 167);
    rect(0, H - H/6, W, H/6);
    porygon.move();
    porygon.show();
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
        porygon.turn_left();
    }
}

class Porygon
{
    constructor()
    {
        this.x = W/2;
        this.y = H - (H/3);
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
        this.y = constrain(this.y, -200, H - H/6 -50);
        this.x = constrain(this.x, 0, W - 50);
    }
    show()
    {
        fill(241, 78, 101);
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
