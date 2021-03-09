var dog,dogImg,happyDog,dataBase,foodS,foodStock;
var feed, addfood,feedDog;
var addFoods;
var fedTime, lastFed;
var foodObj;
var milkBottle;
function preload(){
  dogImg=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {

  dataBase=firebase.database();

  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

  feed=createButton("Feed the Dog");
  feed.position(300,100);
  feed.mousePressed(feedDog);

  addfood=createButton("Add Food");
  addfood.position(500,100);
  addfood.mousePressed(addFoods);

  milkBottle=new Food();
}

function draw() {
  background(46,139,87);
  drawSprites();
  milkBottle.display();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
