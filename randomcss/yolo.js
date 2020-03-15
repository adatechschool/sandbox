function rand(max) 
{
    return Math.floor(Math.random() * Math.floor(max));
}

let xpos;
let ypos;

function constrain(value, max1, max2)
{
    return Math.floor((value/max1) * max2);
}

function findMousePos(mouseEvent)
{
    xpos = mouseEvent.screenX;
    ypos = mouseEvent.screenY - 70;
}

function randpos(point, variance)
{
    return point + rand(variance) - rand(variance);
}

let canvas = document.getElementById("lecanvas");
let ctx = canvas.getContext("2d");
let H = window.innerHeight;
let W = window.innerWidth;
console.log(H, W)
canvas.width = W;
canvas.height = H;
let red = rand(30, 255);
let green = rand(0, 255);
let blue = rand(0, 255);
let opacity = Math.random(1);
canvas.onmousemove = findMousePos;

function draw()
{
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      ctx.fillStyle = 'rgba(' + Math.floor(255 - rand(42.5 * i)) + ',' +
                       Math.floor(255 - rand(42.5 * j)) + ',' + xpos/90 +','+ ypos/1000 + ')';
      ctx.fillRect(j * W/6, i * H/6, W/6, H/6);
    }
  }
  console.log(ypos);
}

function draw2()
{
  for (var i = 1; i < 7; i++) {
    for (var j = 1; j < 7; j++) {
      ctx.fillStyle = 'rgba(' + constrain(xpos, W, 255)/i + ',' +
                       constrain(ypos, H, 255)/j + ',' + 20 +','+ 1 + ')';
      ctx.fillRect((j - 1) * W/6, (i - 1) * H/6, W/6, H/6);
    }
  }
  console.log(ypos);
}

function draw3()
{
  for (var i = 1; i < 7; i++) {
    for (var j = 1; j < 7; j++) {
      ctx.fillStyle = 'rgba(' + constrain(xpos, W, 255)/i + ',' +
                       constrain(ypos, H, 255)/j + ',' + 200 +','+ 1 + ')';
      ctx.fillRect((j - 1) * W/6, (i - 1) * H/6, W/6, H/6);
    }
  }
  console.log(ypos);
}
//ctx.onmousemove = draw;
//setInterval(draw, 50);
setInterval(draw2, 100);
//draw();
