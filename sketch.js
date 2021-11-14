function preload(){
wasdImg=loadImage("WASD.png");
arrowsImg=loadImage("ARROW-Keys.png");
bgImg=loadImage("Bg.png");
playImg=loadImage("play.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  bg=createSprite(windowWidth/2,windowHeight/2);
  bg.addImage(bgImg)
  bg.scale=0.38
  
  wasd=createSprite(width/2-500,height/2)
  wasd.addImage(wasdImg)
  wasd.scale=1.2

  arrows=createSprite(width/2+500,height/2)
  arrows.addImage(arrowsImg)
  arrows.scale=0.2

  play=createSprite(width/2+30,height/2+50)
  play.addImage(playImg)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}