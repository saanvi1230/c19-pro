var galaxy,galaxyImg;
var rock, rockImg, rocksGroup;
var star, starImg, starsGroup;
var rocket,rocketImg;
var gameState = "play";

function preload(){
 galaxyImg = loadImage("galaxy.png");
 rockImg = loadImage("rock.png");
 rocketImg = loadImage("rocket.png")
 starImg = loadImage("star.png");

}



function setup(){
  createCanvas(600,600);
  
  galaxy = createSprite(300,400);
  galaxy.addImage("galaxy",galaxyImg);
  galaxy.scale=3
  galaxy.y=galaxy.height/2;

  

  
  rocket = createSprite(200,200,50,50);
  rocket.scale = 0.1;
  rocket.addImage("rocket", rocketImg);

  starsGroup = new Group();
  rocksGroup= new Group();

}

function draw(){
  //background(0);

  
  if (gameState === "play") {
   
    if (gameState==="play") {
      galaxy.velocityY=1;

    if (galaxy.y>400) {
      galaxy.y=200
    }
   
   
   
    if(keyDown("left_arrow")){
      rocket.x = rocket.x - 3;
    }
    
    if(keyDown("right_arrow")){
      rocket.x = rocket.x + 3;
    }
    
    if(keyDown("space")){
      rocket.velocityY = 10;
    }
  
   
    spawnRocks();
  }
   else if (gameState === "end"){
      stroke("yellow");
      fill("yellow");
      textSize(30);
      text("Game Over", 230,250)
      }
  

drawSprites();
}





function spawnRocks () {
if (frameCount% 240===0) {
  var star=createSprite(200,-50);
  var rock=createSprite(200,100);
  rock.addImage(rockImg);

  star.addImage(starImg);

  star.scale=0.2;
  rock.scale=0.2;
  

rock.x=Math.round(random(120,400));
star.x=rock.x;

rock.addImage(rockImg);
star.addImage(starImg);

rock.velocityY=1;
star.velocityY=1;

star.lifetime=800;
rock.lifetime=800;


//rocket.depth=door.depth;
//ghost.depth+=1;

rocksGroup.add(rock);
starsGroup.add(star);
}}}