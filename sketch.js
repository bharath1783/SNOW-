const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var background ;

function preload(){
  bgImg= loadImage("snow3.jpg")
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  createSprite(400, 200, 50, 50);
}

function draw() {
  background = (255,255,255,255);  
  drawSprites();
}