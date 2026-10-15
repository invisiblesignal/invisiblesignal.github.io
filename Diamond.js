class Diamond{

  constructor(x,y,size,speed){
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
  }

  move(){
    this.x += random(-2,2);
    this.y += random(-2,2); 
  }

  show(){
    push();
    rectMode(CENTER);
    translate(this.x,this.y);
    rotate(PI/4);
    stroke(255);
    noFill();
    line(-2,-2,2,2);
    line(-2,2,2,-2);
    fill(230,40,20,100);
    strokeWeight(1);
    stroke(230,40,20);
    square(0,0,this.size);
    pop();
  }
 
}