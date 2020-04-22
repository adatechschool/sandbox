let W = window.innerWidth;
let H = window.innerHeight;
let circles = [15];

function setup()
{
    createCanvas(W, H);
}

function draw()
{
    loadPixels();
    for (let x = 0; x < W; x++)
    {
        for (let y = 0; y < H; y++)
        {
            set(x, y, color(x, y , map(mouseX + mouseY, 0, W + H, 0, 255)));
        }
    }
    updatePixels();
}