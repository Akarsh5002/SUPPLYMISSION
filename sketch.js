var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1, box2, box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	

	helicopterSprite=createSprite(10, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite.velocityX = 4;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0,density:1.0,friction:0.1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	invi = Bodies.rectangle(350,650,200,20, {isStatic:true} );
 	World.add(world, invi);
	 box1 = new Box(350,650,200,20);
	 box2 = new Box(260,610, 20, 100);
	 box3 = new Box(440, 610, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  packageSprite.x = helicopterSprite.x
  
  
  textSize(26);
  fill("red");
  textFont("Segoe Script")
  text ("drop the package for needy safely on the ground",100,300)

  textSize(26);
  fill("red");
  textFont("Segoe Script")
  text ("press down arrow to drop the package ",100,340)

  textSize(26);
  fill("red");
  textFont("Segoe Script")
  text ("Drop the package  in the Red area only",100,380)

  box1.display();
  box2.display();
  box3.display();
  
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
	helicopterSprite.velocityX = 0;
  }


}
function collide(object1, object2){
    object1RightEdge= object1.x + object1.width;
    object2LeftEdge = object2.x;
    if (object1RightEdge>=object2LeftEdge){
       return true;
    }
    else{
      return false;
    }
  }
  function isTouching(object3, object4){
    if(object3.x-object4.x < object4.width/2 +object3.width/2
        && object4.x- object3.x < object4.width/2 +object3.width/2
        && object3.y-object4.y < object4.height/2 +object3.height/2
        && object4.y- object3.y < object4.height/2 +object3.height/2 ){
            return true;
        } 
         else {
            return false;
  }
}