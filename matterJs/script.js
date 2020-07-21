let Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

let engine; 
let world;
let boxes = [];
let bubbles = [];
let ground;

let W = window.innerWidth;
let H = window.innerHeight;

function setup()
{
    engine = Engine.create();
    myWorld = engine.world;
    createCanvas(W, H);
    Engine.run(engine);
    console.log(myWorld);
    ground = Bodies.rectangle(0, H - 100, W*2, 10, {isStatic : true});
    World.add(myWorld, ground);
    strokeWeight(0);
    noStroke();
}

function mouseDragged()
{
    boxes.push(new makeBox(mouseX, mouseY, 20 + random(20), 2 + random(38)));
    bubbles.push(new makeBubble(mouseX, mouseY, 10 + random(10)));
}

function draw()
{
    background(0);
    fill(255);
    rect(0, H - 100, W, 10)
    for (i in boxes)
    {
        fill(i%255, 10 + i%100, 10 + boxes[i].w%255);
        boxes[i].show();
    }
    for (j in bubbles)
    {
        fill(j%150, 10 + j%245, 10 + j%50);
        bubbles[j].show();
    }
}