function Random(max) 
{
    return Math.floor(Math.random() * Math.floor(max));
}

var bouton = document.getElementById("bouton");
var link = document.getElementById("link");
var n = 1;


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

function draw1()
{
  for (var i = 0; i < 33; i++)
  {
    if (i%5 == 0)
    {
      for (var j = 0; j < 33; j++) 
      {
        ctx.fillStyle = 'rgba(' + 0 + ',' +
        constrain(xpos, W, 255) + ',' + constrain(xpos, W, 155) +','+ 1 + ')';
        ctx.fillRect(j * W/33, i * H/33, W/33, H/33);
      }
    }
    else if (i%6 == 0)
    {
      for (var j = 0; j < 33; j++)
      {
      ctx.fillStyle = 'rgba(' + rand(100) - rand(80) + ',' +
      constrain(ypos, W, 255) + ',' + constrain(ypos, W, 155) +','+ 1 + ')';
      ctx.fillRect(j * W/33, i * H/33, W/33, H/33);
      }
    }
    else 
    {
      for (var j = 0; j < 33; j++)
      {
        ctx.fillStyle = "black";
        ctx.fillRect(j * W/33, i * H/33, W/33, H/33);
      }
    }
    for (var j = 0; j < 33; j +=3) 
        {
          if (j%2 == i%3)
          {
          ctx.fillStyle = 'rgba(' + 255 + ',' +
          constrain(ypos, H, 255) + ',' + constrain(xpos, W, 255) +','+ 0.2 + ')';
          ctx.fillRect(j * W/33, i * H/33, W/33, H/33);
          }
          else if (j+1 != i%3 )
          {
          ctx.fillStyle = 'rgba(' + 0 + ',' +
          0 + ',' + constrain(xpos, W, 255) +','+ 0.1 + ')';
          ctx.fillRect(j * W/33, i * H/33, W/33, H/33);
          }
          else if (j%2 == 0 && i%3 == 0)
          {
          ctx.fillStyle = 'white';
          ctx.fillRect(j * W/33, i * H/33, W/33, H/33);
          }
        } 
  }
  console.log(ypos);
}

function draw2()
{
  for (var i = 1; i < 49; i++) {
    for (var j = 1; j < 49; j++) {
      ctx.fillStyle = 'rgba(' + constrain(xpos, W, 255)/i*2 + ',' +
                       constrain(ypos, H, 255)/j*2 + ',' + constrain(xpos, W, 255)/i*2 +','+ 1 + ')';
      ctx.fillRect((j - 1) * W/48, (i - 1) * H/48, W/48, H/48);
    }
  }
  console.log(ypos);
}

function draw3()
{
  for (var i = 1; i < 7; i++) {
    for (var j = 1; j < 7; j++) {
      ctx.fillStyle = 'rgba(' + constrain(xpos, W, 255)/i + ',' +
                       constrain(ypos, H, 255)/j + ',' + rand(20) +','+ 1 + ')';
      ctx.fillRect((j - 1) * W/6, (i - 1) * H/6, W/6, H/6);
    }
  }
  console.log(ypos);
}
//ctx.onmousemove = draw;
//setInterval(draw, 50);
var interval = setInterval(draw1, 100);
//draw();

bouton.onclick = function()
{
    n++;
    if (n == 4) n = 1;
    var css = "style" + n + ".css";
    link.href = css;
    clearInterval(interval);
    if (n == 1)
    {
        interval = setInterval(draw1, 100);
    }
    if (n == 2)
    {
        interval = setInterval(draw2, 100);
    }
    if (n == 3)
    {
        interval = setInterval(draw3, 100);
    }

};