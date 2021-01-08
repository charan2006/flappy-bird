
var backgroundImg, back;
var block1, block2, block3, block4, block5, block6, block7, block8, blockImg;
var bird, birdImg;
var gameState = 0;
var blockGroup;
var inv;
var gameover,gameoverImg,reset,resetImg;
var score = 0;


function preload() {
    backgroundImg = loadImage("background.png");
    blockImg = loadImage("rod1.png");
    block2Img = loadImage("rod5.png");
    block3Img = loadImage("rod3.png");
    block4Img = loadImage("rod4.png");
    birdImg = loadImage("flappybird.png");
    gameoverImg = loadImage("gameover.png");
    resetImg = loadImage("reset1.png");
    blockGroup = new Group();

}

function setup() {
    createCanvas(600, 450);
    back = createSprite(250, 200, 50, 400);
    back.addImage(backgroundImg)
    back.scale = 0.7;
    bird = createSprite(100, 100, 50, 50);
    bird.addImage(birdImg);
    bird.scale = 0.2;
    inv = createSprite(300,450,600,50);
    inv.visible = false;
    gameover = createSprite(280,225,30,30);
    gameover.addImage(gameoverImg);
    gameover.scale = 0.2;
    gameover.visible = false;
    reset = createSprite(280,270,30,30);
    reset.addImage(resetImg);
    reset.scale = 0.1;
    reset.visible = false;
    


}

function draw() {
    background("black")
    
    bird.collide(inv);
    rand = Math.round(random(1, 5));
    if (rand === 1) {
        blocks1();
    }
    if (rand === 2) {
        blocks2();
    }
    if (rand === 3) {
        blocks3();
    }
    if (rand === 4) {
        blocks4();
    }
    if (rand === 5) {
        blocks5();
    }
    if(bird.isTouching(blockGroup)){
        gameState = 2;
    }
    if(bird.isTouching(inv)&& gameState === 1){
        gameState = 2;
    }
    if(gameState === 2){
        blockGroup.setVelocityXEach(0);
        blockGroup.destroyEach();
        gameover.visible = true;
        reset.visible = true;

    }
   

   
    // if (gameState === 1) {
    //     blocks();
    // }
    if(mousePressedOver(reset)){
        reste1();
    }
    drawSprites();
    if(gameState === 1){
        fill("black");
        textSize(20)
        text("score = "+score,80,50);
        score = score + Math.round(getFrameRate()/50 );
        bird.velocityY = bird.velocityY + 0.8;
    }

    if (gameState === 0) {
        fill("black")
        textSize(20)
        text("Press Space To Start", 210, 200);
        gameover.visible = false;
        reset.visible = false;

    }
    

}

function blocks1() {

    if (frameCount % 40 === 0 && gameState === 1) {
   
        block1 = createSprite(600, 325, 30, 200);
        block1.velocityX = -5;
        block1.shapeColor = "green";
        block5 = createSprite(600, 50, 30, 150);
        block5.velocityX = -5;
        block5.shapeColor = "green";
        blockGroup.add(block1);
        blockGroup.add(block5);
    }
}
function blocks2() {

    if (frameCount % 40 === 0 && gameState === 1) {
        block2 = createSprite(600, 380, 30, 100);
        block2.velocityX = -5;
        block2.shapeColor = "green";
        block6 = createSprite(600, 100, 30, 250);
        block6.velocityX = -5;
        block6.shapeColor = "green";
        blockGroup.add(block2);
        blockGroup.add(block6);
    }
}
function blocks3() {

    if (frameCount % 40 === 0 && gameState === 1) {

        block3 = createSprite(600, 300, 30, 250);
        block3.velocityX = -5;
        block3.shapeColor = "green";
        block7 = createSprite(600, 50, 30, 100);
        block7.velocityX = -5;
        block7.shapeColor = "green";
        blockGroup.add(block3);
        blockGroup.add(block7);
    }
}
function blocks4() {

    if (frameCount % 40 === 0 && gameState === 1) {
        block4 = createSprite(600, 350, 30, 150);
        block4.velocityX = -5;
        block4.shapeColor = "green";
        block8 = createSprite(600, 90, 30, 200);
        block8.velocityX = -5;
        block8.shapeColor = "green";
        blockGroup.add(block4);
        blockGroup.add(block8);
    }


}
function blocks5() {

    if (frameCount % 40 === 0 && gameState === 1) {
        block9 = createSprite(600, 290, 30, 300);
        block9.velocityX = -5;
        block9.shapeColor = "green";
        block10 = createSprite(600, 20, 30, 80);
        block10.velocityX = -5;
        block10.shapeColor = "green";
        blockGroup.add(block9);
        blockGroup.add(block10);
    }


}


function keyPressed() {
    if (keyCode === 32 && gameState===0) {
        gameState = 1;
    }
    if (keyCode === 32 && gameState === 1) {
        bird.velocityY = -7;
    }
}
function reste1(){
    gameState = 0;
    bird.x = 100;
    bird.y = 100;
    blockGroup.destroyEach();
    score = 0
}
