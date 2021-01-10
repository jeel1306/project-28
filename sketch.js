
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
var mango1,mango2;
var groundObject;
function preload()
{
	
}

function setup() {
	createCanvas(1300,600);


	engine = Engine.create();
	world = engine.world;
	mango1=new mango(1000,100,30)

	

	//Create the Bodies Here.

	groundObject=new ground(width/2,600,width,20);

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObject.display();
  mango1.display();
  drawSprites();
 
}



