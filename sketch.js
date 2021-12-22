/*
Crie uma classe papel, com:
- um corpo matter.js circular
- densidade 1.2
- imagem de papel amassado - para isso, usar a função image() dentro do display()
*/
//var papel;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Bodies;
const Render = Matter.Render;
var dustbinObj,groundObject;	
var world;
var a;
var papel,papelObj

function preload(){
	papelObj = loadImage("papel.png");
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	// crie o objeto da classe papel
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	//papel = new Papel(500,650,20,20);
	papelObj = new Papel(200,200,20,20);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
	//mostre o objeto da classe papel
  groundObject.display();
  
  papelObj.display();

  dustbinObj.display();
}

/*
Quando a seta para cima for apertada, aplique forças ao papel para que ele caia na lixeira
Para aplicar as forças, utilize o seguinte código:
Body.applyForce(papel.body,papel.body.position,{x:130,y:-145});
ajuste x e y caso o seu papel não caia na lixeira
*/
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(papelObj.body,papelObj.body.position,{x:90,y:-105});
	}
}