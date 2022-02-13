 var wee


function setup() {
  createCanvas(500,500);
  wee = createSprite(250,250,60,60)
}

function draw() 
{
  background(30);
drawSprites()
if (keyDown("w")){
wee.velocityY = -3
wee.velocityX = 0
}
if (keyDown("s")){
  wee.velocityY = 3
  wee.velocityX = 0
  }
  if (keyDown("d")){
    wee.velocityX = 3
    wee.velocityY = 0
    }
    if (keyDown("a")){
      wee.velocityX = -3
      wee.velocityY = 0
      }
}




