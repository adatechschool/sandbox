let w = window.innerWidth;
let h = window.innerHeight;
let count = 0;
let starArray = [];

function setup() {
  createCanvas(w, h);
  //middle()
}

x = 0;
y = 100;

function draw() {
  background(0);
  if (count < 400) {
    let star = new Star();
    starArray.push(star);
    count++;
  }
  starArray.forEach(function(item){
    item.create();
  })
  ship();
  move();
}

function middle() {
  x = width/2;
  y = height/2;
}

function move() {
  if((x+300) < width){
    x += 3;
  } else {
    x += 0;
    starArray.forEach(function(item){
      item.sMove();
    })
  }
}

function ship() {
  fill(220);
  triangle(x, y, x, y + 100, x + 130, y +100);
  triangle(x, y+200, x, y + 300, x + 130, y + 200);
  triangle(x, y + 50, x, y+250, x + 300, y + 150);
}