var canvas = document.getElementById('canvas');
var sliders = document.getElementById('sliders');
var ctx = canvas.getContext('2d');
let h = canvas.height = 0.85*window.innerHeight;
let w = canvas.width = window.innerWidth;
let currentspeed = 150;
let interval;
let red = rand(255);
let green = rand(255);
let blue = rand(200);
let a = rand(400);
let b = rand(400);
let c = rand(400);
let z = Math.random(2);

function rand(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function draw2(red, green, blue, b, c, z)
{
    let y = Math.random(1);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(w/2, h/2, rand(300), rand(300), Math.PI*2);
    ctx.fill();
    document.addEventListener('keydown', randcolors);
    ctx.fillStyle = "rgba(" + red + "," + blue + ", " + green +", "+ y +")";
    ctx.arc(rand(w), rand(h), rand(a), 0, Math.PI*2);
    ctx.fill();
    ctx.clearRect(rand(w), rand(h), b, c);
    ctx.fillStyle = "white";
    ctx.arc(w/2, h/2, rand(300), rand(300), Math.PI*2);
}

function setSpeed()
{
    clearInterval(interval);
    interval = setInterval(function() {draw2(red, green, blue, a, b, c, z);}, currentspeed);
}

function randcolors()
{
    red = rand(255);
    green = rand(255);
    blue = rand(255);
}
