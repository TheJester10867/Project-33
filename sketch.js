const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score = 0;
var count = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 5; k <=width; k = k + 113) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

   for (var j = 75; j <=width; j=j+50) 
   {
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width-10; j=j+50) 
   {
      plinkos.push(new Plinko(j,175));
   }

   for (var j = 75; j <=width; j=j+50) 
   {
      plinkos.push(new Plinko(j,275));
   }

   for (var j = 50; j <=width-10; j=j+50) 
   {
      plinkos.push(new Plinko(j,375));
   }    
}


function draw() {
  background("black");
  textSize(25)
  Engine.update(engine);

  /*if (gameState =="end"){
    textSize(90);
    text("GameOver", 150, 300);
  }*/

  console.log(count);

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display(); 
  }
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }

  startText();
}

function mousePressed(){
  particle = new Particle(mouseX, -10, 10, 10);
  particle.display();
  count = count + 1;
}

function startText(){
  text("Score = " + score, 25, 42);
}