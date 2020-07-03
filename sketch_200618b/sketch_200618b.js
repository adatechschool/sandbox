let H = window.innerHeight;
let W = window.innerWidth;
let division = 12;
let xoff = 0;

function setup() {
  createCanvas(W, H);
  background(0);
  angleMode(DEGREES);
  colorMode(HSB, 255, 255, 255);
}


function draw() {
  xoff += 0.01;
  translate(W/2, H/2);
  let mx = mouseX - W/2;
  let my = mouseY - H/2;
  let pmx = pmouseX - W/2;
  let pmy = pmouseY - H/2;

  if(mouseIsPressed)
  {
    let angle = 360 / 12;
    let hu = noise(xoff) * 60;
    for (let i = 0; i<division; i++)
    {
      push();
      if (i % 2 == 1)
      {
        scale(-1, 1); 
      }
      stroke(hu, 255, 255, 100);
      rotate(i*angle);
      let d = dist(mx, my, pmx, pmy);
      let strokeW = map(d, 0, 20, 10, 1);
      strokeWeight(strokeW);
      line(mx, my, pmx, pmy);
      pop();
    }
  }
}
