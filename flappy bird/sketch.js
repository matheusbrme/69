var bgimg , bg , bird , bi , g , gi , c , ci
var GS = 1 //0 lobby 1 play 2 and

function preload(){
bgimg = loadImage("bg.png")
bi = loadAnimation("b1.png","b2.png","b3.png")
gi = loadImage("g.png")
ci = loadImage("c.png")

}

function setup(){
createCanvas(600,400)
//imagem de fundo
  bg = createSprite(300,200);
  bg.addImage(bgimg);

  g = createSprite(300,410);
  g.addImage(gi)
  g.scale = 0.5
  

  bird = createSprite(60,200)
  bird.addAnimation("bird",bi)
  bird.scale = 0.2


 
  




}

function draw() {
  
  background("black");
          bird.velocityY = bird.velocityY + 1
          if (keyWentDown("space"))
            {
            bird.velocityY = -10
            }
            
            if (frameCount % 60 === 0)
            {
              spawnPipes()
            
            
            }
        drawSprites();
        
}


function  spawnPipes(){}