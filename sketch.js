let numthingies = 10;
let dmin = 10;
let dmax = 100;

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(1);
  angleMode(DEGREES);

  for(i=0;i<numthingies;i++){
    my_angle = random(360);
    my_x = random(width/2)+width/4;
    my_y = random(height/2)+height/4;
    my_d = random(dmin,dmax);
    my_length = random(my_d/2+5,my_d+20)
    thingy(my_angle,my_x,my_y,my_d,my_length);
  }
  
}

function thingy(angle,x,y,d,length) {
  push();
  translate(x,y);
  rotate(angle);
  fill(0,200);
  circle(0,0,d);
  line(0,0,length,0);
  circle(length+5,0,10);
  fill(255);
  circle(0,0,5);
  pop();
}