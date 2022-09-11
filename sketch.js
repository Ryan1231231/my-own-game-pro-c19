var carImg, car
var streetImg, street
var bikerImg, biker, biker1
var invisibleBlockGroup, invisibleBlock, invisibleBlock1;
var gameState = "play"
var gameOver,gameOverImg

function preload(){
carImg = loadImage("car.png")
streetImg = loadImage("ground.jpeg")
bikerImg = loadImage("biker.png")
gameOverImg = loadImage("gameover.png")
}

function setup() {
 createCanvas(800,500)
 street = createSprite(400,250,800,800)
 street.addImage ("street",streetImg)

 invisibleBlockGroup = new Group();
gameOver = createSprite(400,250,150,150)
gameOver.addImage("gameOver",gameOverImg)
gameOver.visible = false
 car = createSprite(400,250)
 car.addImage ("car",carImg)
 car.scale = 0.13
 car.rotation = - 90
}

function draw() {
    if (street.y > 500){
        street.y = 230
    }
    if (gameState === "play"){
    if (keyDown("right_arrow")){
        car.x=car.x + 9
    }
    if (keyDown("left_arrow")){
        car.x=car.x - 9
    }
    if (keyDown("up_arrow")){
        car.y=car.y - 9
    }
    if (keyDown("down_arrow")){
        car.y=car.y  +4
    }
street.depth = - 10
  if (invisibleBlockGroup.isTouching(car)||car.y>500||car.y<0){
    gameState = "end"
  }

    street.velocityY = street.velocityY + 0.01
    car.velocityY = car.velocityY + 0.005
    if (car.velocityY > 7){
      car.velocityY = 7
    }
    spawnBike()
}
  if (car.x > 700){
    car.x = 700
  }
  if (car.x < 100){
    car.x = 100 
  }
  if (gameState === "end"){
   gameOver.visible = true
    street.velocityY=0
    car.velocityY=0
    
  } 

 drawSprites();
}
function spawnBike(){
  
if (frameCount % 75 === 0) {
biker1 = createSprite(400,0)
biker1.x=Math.round(random(100,700))
invisibleBlock1 = createSprite(400,0);
invisibleBlock1.x = biker1.x
invisibleBlock1.lifeTime = 800
invisibleBlock1.velocityY = 5
biker1.addImage(bikerImg)
invisibleBlock1.width = 59;
invisibleBlock1.height = 118;
invisibleBlock1.visible = false
invisibleBlockGroup.add(invisibleBlock1)


biker = createSprite(400,0)
biker.x=Math.round(random(100,700))
invisibleBlock = createSprite(400,0);
invisibleBlock.x = biker.x
invisibleBlock.lifeTime = 800
invisibleBlock.velocityY = 5
biker.addImage(bikerImg)
invisibleBlock.width = 59;
invisibleBlock.height = 118;

car.depth = biker.depth;
car.depth +=1;
biker1.lifeTime = 800
biker.velocityY = 5
biker1.velocityY = 5
biker.scale = 0.35
biker1.scale = 0.35

invisibleBlock.visible = false
biker.lifeTime = 800
invisibleBlockGroup.add(invisibleBlock)

    }
    if(gameState === "end"){
      biker.velocityY=0
      biker1.velocityY=0

    } 
                }
