
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var world,boy,stone;
var detectollision;

function preload(){
	boy=loadImage("images/boy.png");
	stone=loadImage("images/stone.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1099,100,30);
	mango2=new mango(1200,200,40);
	mango3=new mango(1085,300,50);
    mango4=new mango(1235,320,39);
	mango5=new mango(1015,150,43);
	mango6=new mango(900,185,45);
	mango7=new mango(950,250,45);




	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function KeyPressed(){
	if (KeyCode === 32) {
		Matter.Body.setPosition(stoneObj.body, {x:235,y:420})
		launcherObject.attach(stoneObj.body);
	}
}

function detectollision(Lstone,Lmango){
	mangoBodyPosition=Imango.body.Position
	stoneBodyPosition=dist(Istone.body.PositiontoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=imango.r+Istone.r)
  {
   Matter.Body.setStatic(Imango.body,false);
  }
} 

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  image(stone,200,390,70,30);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  groundObject.display();
}
