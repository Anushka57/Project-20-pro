var bg,bgImg;
var cat,catImg,catImg2,catImg3;
var mouse,mouseImg,mouseImg2,mouseImg3

function preload(){

bgImg=loadImage("garden.png")
catImg=loadImage("cat1.png")  
catImg2=loadAnimation("cat2.png","cat3.png");  
catImg3=loadImage("cat3.png"); 
mouseImg=loadImage("mouse1.png");
mouseImg2=loadAnimation("mouse2.png","mouse3.png");
mouseImg3=loadImage("mouse4.png")  
}

function setup() {
  createCanvas(1000,800)
     
  bg=createSprite(300,200)
  bg.addImage(bgImg)
  bg.scale=1
  background("white")
  mouse=createSprite(100,300);
  mouse.addImage("mouseEat",mouseImg)
  mouse.scale=0.1
  mouse.debug=true
  cat= createSprite(500,300);
  cat.addImage("catSitting",catImg);
  cat.scale=0.07; 
  cat.debug=true;
  
  }

function draw() {
  text(mouseX+','+mouseY,10,45)
  edges= createEdgeSprites();
   cat .collide(edges);
 if(cat.x-mouse.x<(cat.width-mouse.width)/2)    
    {
      touched();
      
    }
 touched(); 
 keyPressed();  
 drawSprites();
}
function keyPressed(){
  if(keyCode===LEFT_ARROW){
    cat.velocityX=-5
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");
    mouse.addAnimation("mouseTease",mouseImg2);
    mouse.changeAnimation("mouseTease");
  }
}
function touched(){
  cat.velocityX=0
  cat.addAnimation("Last",catImg3)
  cat.changeAnimation("Last")
}