class Bubble{

  constructor(x,y,size,speed){
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
  }

  move(){
    this.x = width*noise(frameCount*this.speed);
    this.y = height*noise(frameCount*this.speed+137);
  }

  show(){
    stroke(20,40,230);
    noFill();
    circle(this.x, this.y, 5);
    fill(255,100);
    strokeWeight(2);
    stroke(255);
    circle(this.x,this.y,this.size);
  }
 
}