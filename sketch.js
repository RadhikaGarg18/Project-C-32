const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,platform;
var pin1,pin2,pin3,pin4,pin5,pin6,pin7,pin8,pin9,pin10;
var slingShot;

function preload() {
    backgroundImg = loadImage("bowling.jpg");
}

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500,380,1000,20);
    platform = new Ground(100,290,350,170);

    pin1 = new Pin(680,360,100,80);
    pin2 = new Pin(760,360,100,80);
    pin3 = new Pin(840,360,100,80);
    pin4 = new Pin(900,360,100,80);
    pin5 = new Pin(750,260,100,80);
    pin6 = new Pin(790,260,100,80);
    pin7 = new Pin(830,260,100,80);
    pin8 = new Pin(730,160,100,80);
    pin9 = new Pin(850,160,100,80);
    pin10 = new Pin(790,60,100,80);
    ball = new Ball(200,200);
    slingShot =new SlingShot(ball.body,{x: 150 , y: 100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    fill("pink")
    stroke("black");
    strokeWeight(5);
    text("Press space bar to redo",50,50)
    ground.display();
    platform.display();
    pin1.display();
    pin2.display();
    pin3.display();
    pin4.display();
    pin5.display();
    pin6.display();
    pin7.display();
    pin8.display();
    pin9.display();
    pin10.display();
    slingShot.display();
    ball.display();
    
    
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}
function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(ball.body);
    }
}