var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
let h = canvas.height = window.innerHeight;
let w = canvas.width = window.innerWidth;

function sleep(milliseconds) 
{
  var start = new Date().getTime();
  while (canvas) 
    {
    if ((new Date().getTime() - start) > milliseconds)
    {
      break;
    }
  }
}

function rand(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function rectangle()
{
    let a = rand(255);
    let b = rand(255);
    let c = rand(200);
    let y = Math.random(1);

    ctx.fillStyle = "rgba(" + a + "," + b + ", " + c +", "+ y +")";
    ctx.fillRect(rand(w), rand(h), a, b);
    ctx.fillRect(rand(w), rand(h), c, (a + b)/2);
    ctx.clearRect(rand(w), rand(h), (a + b)/2, c);
}

function ellipse()
{
    let a = rand(255);
    let b = rand(255);
    let c = rand(200);
    let y = Math.random(1);
    let z = Math.random(2)

    ctx.beginPath();
    ctx.ellipse(rand(w), rand(h), a, b, y*Math.PI, Math.PI, Math.PI/z);
    ctx.stroke();
}

function generate()
{
    let a = rand(255);
    let b = rand(255);
    let c = rand(200);
    let y = Math.random(1);
    let z = Math.random(2)
    
    ctx.beginPath();
    ctx.arc(rand(w), rand(h), c/10, a/b, Math.PI*2, true);
    ctx.arc(rand(w), rand(h), b/a, (c + a)/10, Math.PI*z, true);
    ctx.clearRect(rand(w), rand(h), h, (a + b + c)/9);
    ctx.stroke();
}

function draw()
{
    let a = rand(255);
    let b = rand(255);
    let c = rand(200);
    let y = Math.random(1);
    let z = Math.random(2)

    ctx.strokeStyle = "rgba(" + a + "," + b + ", " + c +", "+ y +")";
    ctx.beginPath();
    moveTo(b/a, (h + w)/(a + b + c));
    ctx.bezierCurveTo(rand(w), rand(h), c, a, b, c)
    ctx.stroke();
}

function draw2()
{
    let a = rand(255);
    let b = rand(255);
    let c = rand(200);
    let y = Math.random(1);
    let z = Math.random(2);

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(w/2, h/2, rand(450), (b*c)/2, Math.PI*2);
    ctx.fill();
    ctx.fillStyle = "rgba(" + a + "," + b + ", " + c +", "+ y +")";
    ctx.arc(rand(w), rand(h), (a + b + c)/3, 0, Math.PI*2);
    ctx.fill();
    ctx.clearRect(rand(w), rand(h), (a + b)/2, c);
    cctx.fillStyle = "white";
    ctx.arc(w/2, h/2, rand(450), (a*c)/2, Math.PI*2);
}


//commentez et décommentez ces lignes pour appeler les différentes fonctions
//setInterval(draw, 4);
setInterval(draw2, 30);
//setInterval(generate, 3);
//setInterval(rectangle, 2);
//setInterval(ellipse, 1);
