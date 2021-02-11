var backgroundImg , bg1;
function preload(){
    backgroundImg = loadImage("download.jpg")
}
function setup(){
    createCanvas(700,600)

}
function draw(){
    background(0);
    bg1 = createSprite(200,310,20,20)
    bg1.addImage(backgroundImg)
    bg1.scale=3.5
    drawSprites()
}