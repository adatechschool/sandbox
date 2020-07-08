let Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

let engine; 
let world;
let boxes = [];
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
    ground = Bodies.rectangle(0, H - 20, W*2, 10, {isStatic : true});
    World.add(myWorld, ground);
}

function mouseDragged()
{
    boxes.push(new makeBox(mouseX, mouseY, 20 + random(20), 2 + random(38)));
}

function draw()
{
    background(0);
    
    for (i in boxes)
    {
        fill(i%255, 10 + i%100, 10 + boxes[i].w%255);
        boxes[i].show();
    }
}