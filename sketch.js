const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var bgimg;
var snow=[];
var snow1img,snow2img;

function preload(){
  bgimg=loadImage("snow2.jpg");
  
}
function setup() {
  engine=Engine.create();
  world=engine.world;

  createCanvas(800,400);

  if(frameCount % 100 === 0){

    for(var i=0; i<200; i++){
      snow.push(new Snow(random(0,800), random(0,800)));
      
    }

  }
 

}

function draw() {
  background(bgimg);  
  Engine.update(engine);
  
  for(var i = 0; i<200; i++){
        snow[i].show_snow();
        snow[i].updateY()
  }
   
  drawSprites();
}