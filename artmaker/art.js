var canvas = document.getElementById('canvas');
var sliders = document.getElementById('sliders');
var ctx = canvas.getContext('2d');
let h = canvas.height = 0.8*window.innerHeight;
let w = canvas.width = window.innerWidth;
let currentspeed = 150;
let interval;
let a = rand(255);
let b = rand(255);
let c = rand(200);
let y = Math.random(1);
let z = Math.random(2);


function rand(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function draw2(a, b, c, y, z)
{
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(w/2, h/2, rand(450), (b*c)/2, Math.PI*2);
    ctx.fill();
    ctx.fillStyle = "rgba(" + a + "," + b + ", " + c +", "+ y +")";
    ctx.arc(rand(w), rand(h), (a + b + c)/3, 0, Math.PI*2);
    ctx.fill();
    ctx.clearRect(rand(w), rand(h), (a + b)/2, c);
    ctx.fillStyle = "white";
    ctx.arc(w/2, h/2, rand(450), (a*c)/2, Math.PI*2);
}

function setSpeed()
{
    clearInterval(interval);
    interval = setInterval(function() {draw2(a, b, c, y, z);}, currentspeed);
}
