var obs
var score=5
var PLAY=1
var END=2
var START=0
var gameState=START
var sad="You are slain"
var tutorial="this is the tutorial"
//preload the images here
function preload (){
BgImage=loadImage("quidditch.jpg")
h=loadImage("harry.png")
r=loadImage("ron.png")
d=loadImage("draco.png")
dementor1=loadImage("dementor.png")
snitch2= loadImage("snitch.png")
patronus1= loadImage("patronus.png")
patronus2=loadImage("dog.png")
patronus3=loadImage("dragon.png")
bludger2= loadImage("bludger.png")
gameover=loadImage("game boi.png")
restart=loadImage("restart.png")

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  bg= createSprite(windowWidth/2+30,windowHeight/2,windowWidth,windowHeight)
bg.addImage(BgImage)
bg.scale=2
g= createSprite(200,500,20,20)
boi=createSprite(windowWidth/2,windowHeight/2-70,20,20)
res=createSprite(windowWidth/2,windowHeight/2,20,20)

g.addImage(h)
g.scale=0.3
ground= createSprite(windowWidth/2,windowHeight,windowWidth,40)
ground.visible=false
Pgrp=new Group();
snitchgrp= new Group();
bludgergrp=new Group();
dementorgrp=new Group();
bg.velocityX=(score+2)*-3

res.addImage(restart)

}

function draw() {
  background("green");


 if(gameState===PLAY){
if(bg.x<300){
  bg.x=windowWidth/2
}
boi.visible=false
res.visible=false
g.visible=true
bludgers();
dementors()
bg.velocityX=-4
if(Pgrp.isTouching(dementorgrp)){
  dementorgrp.setVelocityXEach(4)
  Pgrp.destroyEach();
}
g.y=mouseY
g.collide(ground)
if(keyDown("p")){
  Patronus();
}
if(snitchgrp.isTouching(g)){
  score+=0.5
  snitchgrp.destroyEach();
}

Snitch();
if(bludgergrp.isTouching(g)){
score-=1.5
bludgergrp.destroyEach();
}
if(dementorgrp.isTouching(g)){
  score-=0.5
  }
 
 }



//box11.display();
drawSprites();
if(gameState===PLAY){


}
if(score<=0){
 
  score=0
  gameState=END
}
 if(gameState===END){
  bg.velocityX=0
  dementorgrp.setVelocityXEach(0)
  snitchgrp.setVelocityXEach(0)
  Pgrp.setVelocityXEach(0)
  bludgergrp.setVelocityXEach(0)
 
  boi.visible=true
  boi.addImage(gameover)
  boi.scale=0.2
  res.visible=true;

 
  dementorgrp.setLifetimeEach(-1)
  snitchgrp.setLifetimeEach(-1)
 Pgrp.setLifetimeEach(-1)
  bludgergrp.setLifetimeEach(-1)
  if(mousePressedOver(res)){
reset();
  }
}
fill("white")
textSize(30)
textFont("jokerman")
text("Health: "+score,100,100)
  if(gameState===START){
    textSize(20)
    fill("azure")
    //swastikaria59@gmail.com
    text("press H to become Harry",600,200)
    text("press R to become Ron",600,250)
    text("press D to become Draco",600,300)
    text("press P to become Play",600,350)
    text("Press P and r to get patronus Stag",200,200)
    text("Press P to get patronus Dog",200,250)
    text("Press P and d to get patronus Dragon",200,300)
  boi.visible=false
  res.visible=false
    fill("red")
    text("your avatar",170,430)
    bg.velocityX=0
    g.collide(ground)
   

if(keyDown("h")){
  g.addImage(h)
  g.scale=0.3
 
}
 if(keyDown("r")){
  g.addImage(r)
  g.scale=0.3
 
} if(keyDown("d")){
  g.addImage(d)
  g.scale=0.3
}

    if(keyDown("p")){
      gameState=PLAY
    }
  }
}
function bludgers(){
  if(frameCount%200===0){
  bludger=createSprite(200,200,20,20)

  bludger.y=Math.round(random(300,400))
  bludgergrp.add(bludger)
bludger.addImage(bludger2)
bludger.scale=0.2

  position=Math.round(random(1,2))
  if(position===1){
    bludger.x=1200
    bludger.velocityX=-15
    bludger.lifetime=200
   
  }
  if(position===2){
    bludger.x=0
    bludger.velocityX=15
    bludger.lifetime=240
  }
}

}
function dementors(){
  if(frameCount%250===0){
    dementor=createSprite(windowWidth,200,60,60)
  dementorgrp.add(dementor)
  dementor.lifetime=900
 if(dementor.y>300){
  dementor.lifetime=5
 }

    dementor.velocityX=-4
    dementor.addImage(dementor1)
    dementor.y=Math.round(random(100,400))
  }
}
function Snitch(){
  if(frameCount%100===0){
    
    snitch=createSprite(windowWidth,200,60,60)
    snitch.addImage(snitch2)
    snitch.scale=0.1
    snitchgrp.add(snitch)
    snitch.lifetime=50
    snitch.y=Math.round(random(80,800))
    snitch.shapeColor="red"
    snitch.velocityX=-50
   
  }
}
function Patronus(){
  if(frameCount%100===0){
    
    patronus=createSprite(200,200,60,60)
   patronus.y=g.y
   patronus.addImage(patronus2)
   patronus.scale=0.2
   Pgrp.add(patronus)

  if(keyDown("r")){
    patronus.addImage(patronus1)
    patronus.scale=0.2
  }
  if(keyDown("d")){
    patronus.addImage(patronus3)
    patronus.scale=0.2
  } 
patronus.lifetime=300
    patronus.velocityX=20
    
  }
}
function reset(){
  gameState=START
  res.visible=false
  boi.visible=false
  dementorgrp.destroyEach();
  snitchgrp.destroyEach();
  bludgergrp.destroyEach();
  Pgrp.destroyEach();
  g.x=200
  g.y=500
  score=5
}