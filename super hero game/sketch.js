var Hero, HeroImage;
var Obstacle, ObstacleImage;
var StandingPoint, StandingPointImage;
var background, backgroundImage;
var gameState = "play";

function preload(){
HeroImage = loadImage("sprites/Superman_image_1.png");
ObstacleImage = loadImage("sprites/Obstacle_blade.png");
StandingPointImage = loadImage("sprites/Standing_area.png");
backgroundImage = loadImage("sprites/sky_background_image.png");
}

function setup(){
    createCanvas(600,600)
Hero = createSprite(200,200,20,20);
Hero.addImage(HeroImage);

Obstacle = createSprite(250,300);
Obstacle.addImage(ObstacleImage);

StandingPoint = createSprite(150,170);
StandingPoint.addImage(StandingPointImage);

background = createSprite(300,300);
background.addImage(backgroundImage);
background.velocityY = 3;

}

function draw(){
background(0);
if (gameState=== "play"){
    if (keyDown("space")){
        Hero.velocityY = Hero. velocityY+ 3;
    }

    if(keyDown("left_arrow")){
        Hero.x = Hero.x - 3;
    }

    if(keyDown("right_arrow")){
        Hero.x = Hero.x + 3;
    }

}
drawSprites();
}