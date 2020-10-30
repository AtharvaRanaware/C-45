var king,kingImg,soldierImg,soldier;//scene 1

var backgroundImg;

var gameState=0;

var nextButton;

function preload (){

backgroundImg=loadImage("images/war background 2.jpg");

kingImg=loadImage("images/King1.jpg")

soldierImg=loadImage("images/Soldier 2.png")

nextImg=loadImage("images/nextButton.png")
}

function setup (){

canvas=createCanvas(1400,800);

scene1=createSprite(700,400,1400,800);
scene1.addImage(backgroundImg)
scene1.scale=1

king=createSprite(690,610,10,10);
king.addImage(kingImg);
king.scale=0.3

nextButton=createSprite(690,730,10,10)
nextButton.addImage(nextImg);
nextButton.scale=0.5

//soldier1=new Soldier(780,610,40,40);
soldier1=createSprite(790,610,40,40);
soldier1.addImage(soldierImg)
soldier1.scale=0.36

soldier2=createSprite(890,610,40,40);
soldier2.addImage(soldierImg)
soldier2.scale=0.36

soldier3=createSprite(990,610,40,40);
soldier3.addImage(soldierImg)
soldier3.scale=0.36

soldier4=createSprite(1090,610,40,40);
soldier4.addImage(soldierImg)
soldier4.scale=0.36

soldier5=createSprite(590,610,40,40);
soldier5.addImage(soldierImg)
soldier5.scale=0.36

soldier6=createSprite(490,610,40,40);
soldier6.addImage(soldierImg)
soldier6.scale=0.36

soldier7=createSprite(390,610,40,40);
soldier7.addImage(soldierImg)
soldier7.scale=0.36

soldier8=createSprite(290,610,40,40);
soldier8.addImage(soldierImg)
soldier8.scale=0.36
}

function draw(){


  background(255)

if(gameState===0){

 // scene1.addImage(backgroundImg)

}

//soldier1.display();
//imageMode(CENTER);

//image(soldierImg,770,610,100,100);

drawSprites();

text(mouseX+","+mouseY,mouseX,mouseY);


stroke("red")
strokeWeight(2)
fill("purple")
textSize(30)
text("War was at its peak......",500,80)

if(mousePressedOver()){}

}



