
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone1;
var boy;
var mango1;
var tree;

function preload(){
boy.image = loadImage("Plucking mangoes/boy.png");
tree.image = loadImage("Plucking mangoes/tree.png");	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone1 = new Stone(200,200);
	chain = new Chain(boy.body,{x:200, y:30});
	mango1 = new Mango(290,220);
	mango2 = new Mango(300,230);
	mango2 = new Mango(310,220);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  var tree = createSprite(300,250,80,30);
  var boy = createSprite(210,250,50,30);

  
 detetollision(stoneObj,mango1);
 detetollision(stoneObj,mango2);
 detetollision(stoneObj,mango3);
 
 
 
  stone.display();
 mango1.display();
 mango2.display();
 mango3.display();
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain.fly();
}

function keyPressed(){
	if (keyCode === 32){
Matter.body.setPosition(stoneObj.body,{x:235,y:420})
launcherObject.attach(stoneObj,body);	
}
}
