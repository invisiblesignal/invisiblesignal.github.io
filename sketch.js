let bubbles = [];
let diamonds = [];
let numbubbles = 10;
let numdiamonds = 10;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);

  for(i=0;i<numbubbles;i++){
    let x = width/2;
    let y = height/2;
    let size = random(10,100);
    let speed = random(.001,.01);
    let bubble = new Bubble(x,y,size,speed);
    bubbles.push(bubble);
  }

  for(i=0;i<numdiamonds;i++){
    let x = round(random(1)) * (windowWidth-windowWidth/2) + windowWidth/4;
    let y = random(windowHeight-windowHeight/2)+windowHeight/4;
    let size = random(10,30);
    let speed = 1;
    let diamond = new Diamond(x,y,size,speed);
    diamonds.push(diamond);  
  }
}

function draw() {
  background(0);
  for(let bubble of bubbles){
    bubble.move();
    bubble.show();
  }
  for(let diamond of diamonds){
    diamond.move();
    diamond.show();
  }
}