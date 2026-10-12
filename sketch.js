let img;
let tx, ty, r;
let target_tx, target_ty;
let counter = 0;
let speed = .1;
let rspeed = .02;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

async function setup() {
  createCanvas(windowWidth, windowHeight);
  cell = await loadImage("ArcellaDiscoides01.png");
  tx = random(100, width-100);
  ty = random(100, height-100);
  r = 0;
  target_tx = tx;
  target_ty = ty;
  target_r = r;
}

function draw() {
  background(0);
  imageMode(CENTER);

  push();
  tx = lerp(tx,target_tx, speed);
  ty = lerp(ty,target_ty, speed);
  r = lerp(r,target_r, rspeed);
  s = map(sin(frameCount*.1), -1, 1, .98, 1.02);
  translate(tx, ty);
  rotate(r);
  scale(s)
  image(cell, 0, 0);
  pop();

  counter++;

  if (counter>100){
    counter=0;
    target_tx = random(100,width-100);
    target_ty = random(100,height-100);
    target_r = random(TWO_PI);
  }
}