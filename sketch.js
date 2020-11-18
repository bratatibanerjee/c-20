var movingrect, fixedrect ;

function setup() {
  createCanvas(800,400);
 movingrect= createSprite(400, 200, 80, 50);
movingrect.shapeColor="blue";
movingrect.debug=true;

fixedrect= createSprite(600, 200, 50, 80);
fixedrect.shapeColor="blue";
fixedrect.debug=true;
}

function draw() {
  background(255,255,255);  
 
movingrect.x=World.mouseX;
movingrect.y=World.mouseY;

if((movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2)&&
(fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2)&&
(movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2)&&
(fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2)){
  movingrect.shapeColor="aqua";
  fixedrect.shapeColor="aqua";  
}
else{
  movingrect.shapeColor="blue";
  fixedrect.shapeColor="blue";  
}
  drawSprites();
}