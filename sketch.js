var space, spacebg;
var rocket, rocketimg;
var planet, planetimg
var laser1,laser2, laser3, laser4, laser5, laser6, laser7, laser8,laser9, laserimg;
var gameState, PLAY, END;
var score = 0;
function preload(){
 spacebg=loadImage("images/spacebg.jpeg");
 rocketimg=loadImage("images/spaceship.png");
 laserimg=loadImage("images/laserbeam2.png");
 planetimg=loadImage("images/planet.png");
}
function setup(){
  createCanvas(600,600);
  gameState === PLAY;
  rocket=createSprite(402,330, 50, 50);
  rocket.addImage(rocketimg);
  rocket.scale=0.2;
  rocket.velocityY=0.5;
  planet=createSprite(114,30, 50, 50);
  planet.addImage(planetimg);
  planet.scale=0.3;
  laser1=createSprite(230,100,50,50);
  laser1.addImage(laserimg);
  laser1.scale=0.5;
  laser2=createSprite(100,160,50,50);
  laser2.addImage(laserimg);
  laser2.scale=0.5;
  laser3=createSprite(200,220,50,50);
  laser3.addImage(laserimg);
  laser3.scale=0.5;
  laser4=createSprite(320,280,50,50);
  laser4.addImage(laserimg);
  laser4.scale=0.5;
  laser5=createSprite(450,340,50,50);
  laser5.addImage(laserimg);
  laser5.scale=0.5;
  laser6=createSprite(600,400,50,50);
  laser6.addImage(laserimg);
  laser6.scale=0.5;
  laser7=createSprite(450,460,50,50);
  laser7.addImage(laserimg);
  laser7.scale=0.5;
  laser8=createSprite(320,510,50,50);
  laser8.addImage(laserimg);
  laser8.scale=0.5;
  laser9=createSprite(200,570,50,50);
  laser9.addImage(laserimg);
  laser9.scale=0.5;
}

function draw() {
  background(spacebg); 

  if(keyDown("left_arrow")){
    rocket.x=rocket.x-2;
  }
  if(keyDown("right_arrow")){
    rocket.x=rocket.x+2;
  }
  if(keyDown("space")){
    rocket.velocityY=-2;
  }
  if(rocket.isTouching(laser1)||
  rocket.isTouching(laser2)||
rocket.isTouching(laser3)||
  rocket.isTouching(laser4)||
  rocket.isTouching(laser5)||
  rocket.isTouching(laser6)||
 rocket.isTouching(laser7)||
  rocket.isTouching(laser8)||
  rocket.isTouching(laser9)){
    rocket.x=402;
    rocket.y=330;
  }
  if(rocket.isTouching(planet)){
    text("YOU WON!! GREAT GOING!", 300,300);
    textColor("white");
  }
  rocket.velocityY=rocket.velocityY+1;
  drawSprites();
}