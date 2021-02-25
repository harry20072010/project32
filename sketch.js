const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgimg;
var maincar;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11;
var slingShot;

function preload() {
    bgimg = loadImage("race track.jpg");
}

function setup() {
  createCanvas(1000,800);

    engine = Engine.create();
    world = engine.world;

  maincar = new Maincar(600,600,200,200);
  box1 = new Block(300,500,50,50);
  box2 = new Block(400,500,50,50);
  box3 = new Block(200,500,50,50);
  box4 = new Block(250,450,50,50);
  box5 = new Block(280,400,50,50);
  box6 = new Block(320,400,50,50);
  box7 = new Block(250,500,50,50);
  box8 = new Block(350,500,50,50);
  box9 = new Block(350,450,50,50);
  box10 = new Block(300,450,50,50);
  box11 = new Block(300,350,50,50);
slingShot = new Slingshot(maincar.body,{x:600,y:600});
}

function draw() {
  background(bgimg);
    Engine.update(engine);  

    maincar.display();
    fill("lightblue")
    box1.display();
    box2.display();
    fill("blue")
    box3.display();
    box4.display();
    fill("purple")
    box5.display();
    box6.display();
    fill("green")
    box7.display();
    box8.display();
    fill("pink")
    box9.display();
    box10.display();
    fill("red");
    box11.display();
    
    slingShot.display();
  drawSprites();
}
function mouseDragged(){ 
  Matter.Body.setPosition(maincar.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed() {
   if (keyCode === 32) {
     slingShot.attach(maincar.body);
   }
}