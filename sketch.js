
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var rope1,rope2;
var bobDiameter=200;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob1(300,380, 20)
	bob2=new Bob1(340,380, 20)
	bob3=new Bob1(259,380, 20)
	bob4=new Bob1(220,380, 20)
	bob5=new Bob1(380,380, 20)
	roof=new Roof(300,200,200,20);
rope1=new Rope(bob1.body,roof.body,-bobDiameter*-0.01, 0)
rope2=new Rope(bob3.body,roof.body,-bobDiameter*0.20, 0)
rope3=new Rope(bob2.body,roof.body,-bobDiameter*-0.2, 0)
rope4=new Rope(bob4.body,roof.body,-bobDiameter*0.38, 0)
rope5=new Rope(bob5.body,roof.body,-bobDiameter*-0.40, 0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();





}
function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:70,y:70});
		
	}
}



