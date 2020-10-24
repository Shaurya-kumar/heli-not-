var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rect1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

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

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 rect1 = new Box(400,200,200,10,"red");


	Engine.run(engine);
  
}


function draw() {

	rectMode(CENTER);
	background(0);

	Engine.update(engine);
	
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	
	 
	
	fill("white");
	 text("Hey Soldier,",100,40);
	 text("There is a special task for you, Are you ready for that",100,60);
	 text("There is an Zombie apoclypse in a City you have to drop some food for the survivors in the city Park ",100,80);
     text("Press & Hold 'Down' key to Drop the Supplies",100,100);


	  
	if(keyDown(DOWN_ARROW)) {
	  Matter.Body.setStatic(packageBody,false);

      textSize(70);
	text("YOU DID IT",200,300);
	  }	
	  
	  rect1.display();

  
	

	drawSprites();
  }






