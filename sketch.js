var graveYardImg,graveYard;
var obstaclesGroup , obstacle1 , obstacle2 , obstacle3,obstacle4;
var primisImg,primis;

function preload(){
  graveYardImg = loadImage("background2.png")

  obstacle1 = loadImage("obstacle 1.png");
  obstacle2 = loadImage("obstacle 2.png");
  obstacle3 = loadImage("obstacle 3.png");
  obstacle4 = loadImage("obstacle 4.png");

  primisImg = loadImage("primisCharacter.png")
}

function setup() {
  createCanvas(820, 480);

  graveYard=createSprite(300,100)
  graveYard.addImage("graveYard",graveYardImg)
 // graveYard.x = graveYard.width/2
  graveYard.velocityX = -3

  primis = createSprite(150,290)
  primis.addImage("character",primisImg)
  primis.velocityX = 3
  primis.scale = 0.5

 obstaclesGroup = new Group()




 



}

function draw() {
  background(180);

if(keyDown("space"))
{
   primis.velocityY = -13
}

if(graveYard.x < 140)
{
 graveYard.x = graveYard.width/2
}  

primis.velocityY = primis.velocityY +0.09




spawnObstacles();
  


  drawSprites();
}

function spawnObstacles()
{
  if (frameCount % 120 === 0){
    obstacle = createSprite(620,320,10,40);
    obstacle.velocityX = -3

     //generate random obstacles
     var rand = Math.round(random(1,4));
     switch(rand) {
       case 1: obstacle.addImage(obstacle1);
               break;
       case 2: obstacle.addImage(obstacle2);
               break;
       case 3: obstacle.addImage(obstacle3);
               break;
       case 4: obstacle.addImage(obstacle4);
               break;
     default:break      
              }
    obstacle.scale = 1.0;
    obstacle.lifetime = 300;
   //add each obstacle to the group
   obstaclesGroup.add(obstacle);
    
  }
 }














