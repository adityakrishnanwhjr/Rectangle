var fr,mr
function setup() {
   createCanvas(1200,800);
   fr=createSprite(200,200,50,80);
   mr=createSprite(400,200,80,30);
}

function draw() {
  background(0,0,0);
  mr.x=World.mouseX;
  mr.y=World.mouseY;
  fr.shapeColor="green";
  mr.shapeColor="green";
  if(mr.x-fr.x<fr.width/2+mr.width/2 && fr.x-mr.x<fr.width/2+mr.width/2 && mr.y-fr.y<fr.height/2+mr.height/2 && fr.y-mr.y<fr.height/2+mr.height/2){
    fr.shapeColor="red";
    mr.shapeColor="red";
  }else{
    fr.shapeColor="green";
  mr.shapeColor="green";
  }
  drawSprites();
}