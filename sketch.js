
/* const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; */

// variables

var bg , bgImg ;
var ninja , ninjaImg ;
var bird , birdImg ;
var enemy1 , enemy1Img  , enemy2 , enemy2Img , enemy3 , enemy3Img ;
var weapon , weaponImg ;


function preload()
{
	bgImg = loadImage("bg.jpg");
	ninjaImg = loadAnimation("ninja1.png","ninja2.png","ninja3.png","ninja4.png","ninja5.png","ninja6.png");
	birdImg = loadAnimation("bird1.png","bird2.png","bird3.png","bird4.png","bird5.png","bird6.png","bird7.png","bird8.png");
	enemy1Img = loadImage("enemy1.png");
	enemy2Img = loadImage("enemy2.png");
	weaponImg = loadImage("weapon.png");
	
}

function setup() {

	createCanvas(700, 360);

	//engine = Engine.create();
	//world = engine.world;
	//Create the Bodies Here.

	//Engine.run(engine);

	// moving background 

	bg = createSprite(500,180);
	bg.addImage(bgImg);
	bg.velocityX = -5;

	// creating ninja
	ninja = createSprite(150 , 240 , 50 ,50);
	ninja.scale = 0.8
	ninja.addAnimation("ninja",ninjaImg);
	//ninja.velocityX = 2 ;

	// creating bird
	bird = createSprite(150 , 130 , 20 , 20);
	bird.addAnimation("bird",birdImg);
	bird.scale = 0.5
	//bird.velocityX = 2 ;
	bird.x = ninja.x ;
	//bird.y = ninja.y ;

	// creating enemies
	enemy1 = createSprite(700 , 255 , 40 , 40);
	enemy1.scale = 0.5;
	enemy1.addImage(enemy1Img);
	enemy1.velocityX = -1 ;
  
	enemy2 = createSprite(600 , 255 , 40 , 40);
	enemy2.scale = 0.4;
	enemy2.addImage(enemy2Img);
	enemy2.velocityX = -1 ;
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  //code to reset the background
  if(bg.x < 290 ){
    bg.x = width/2;
  }

  // creating weapon
  if(keyDown(32)){
  weapon = createSprite(150 , 240 , 20 , 20);
  weapon.addImage(weaponImg);
  weapon.scale = 0.2 ;
  weapon.velocityX = 4 ;
  weapon.x = ninja.x ;
  weapon.y = ninja.y ;

  }

   // text
   textSize(40)
   fill("red");
   text("ZOOM '175' FOR THE BEST EXPERIANCE", 30 , 20)


  drawSprites();
 
}

/*	function spawnEnemies(){

		if(frameCount % 60 === 0 ){
			obstacle = createSprite ( random ( 600 , 950 ) , random ( 500 , -4000 )) ;
			var rand = Math.round(random(1,5));
			switch(rand) {
			  case 1: obstacle.addImage(obs1Img);
					  obstacle.scale = 0.5
					  break;
			  case 2: obstacle.addImage(obs2Img);
					  obstacle.scale = 0.4
					  break;
			  case 3: obstacle.addImage(obs3Img);
					  obstacle.scale = 0.9
					  break;
			  case 4: obstacle.addImage(obs4Img);
					  obstacle.scale = 0.2 ;
					  break;
			  case 5: obstacle.addImage(obs5Img);
					  obstacle.scale = 0.2 ;
					  break;
			  default: break;
			}
			}
			}

			*/