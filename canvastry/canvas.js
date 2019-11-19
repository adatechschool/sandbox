var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
let h = canvas.height = window.innerHeight;
let w = canvas.width = window.innerWidth;

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
    ctx.fillRect(rand(w), rand(h), rand(200), rand(200));
    console.log(a);
    console.log(b);
    console.log(c);
}

setInterval(rectangle, 20);
