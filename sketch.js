var movingRect,fixedRect;
function setup() {
  createCanvas(800,900);
 movingRect=createSprite(200,100,100,10);
 movingRect.shapeColor="red";
 movingRect.debug=true;
 fixedRect=createSprite(200,600,10,100);
 fixedRect.shapeColor="red";
 fixedRect.debug=true;
 movingRect.velocityY=2;
 fixedRect.velocityY=-2;
}

function draw() {
  background(255,255,255);  
 // movingRect.x=World.mouseX;
  //movingRect.y=World.mouseY;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
    &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
    {
movingRect.shapeColor="blue";
fixedRect.shapeColor="blue";
    }
else{
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}
if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
  &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2)
  {
    movingRect.velocityX=movingRect.velocityX*(-1)
    fixedRect.velocityX=fixedRect.velocityX*(-1)
    
  }
  if (movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
    &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2) {
    movingRect.velocityY=movingRect.velocityY*(-1)
    fixedRect.velocityY=fixedRect.velocityY*(-1)
  }
  drawSprites();
}