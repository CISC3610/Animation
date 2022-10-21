
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800
canvas.height = 600


let backPic = new Image()
backPic.src = "back.jpg"

let bubble = new Image()
bubble.src = "bubble .png"

let bubble2 = new Image()
bubble2.src = "bubble2.png"




const subZeroSpriteSheet = new Image()
subZeroSpriteSheet.src = "subZeroSpriteSheet.png"
subZeroSpriteSheet.onload = loadImages

let cols = 7
let rows = 2

let spriteWidth = subZeroSpriteSheet.width / cols
let spriteHeight = subZeroSpriteSheet.height / rows

ctx.webkitImageSmoothingEnabled = false
ctx.imageSmoothingEnabled = false

let totalFrames = 7
let CurrentFrame = 0

let srcX = 0
let srcY = 0
let srcY2 = 1 * spriteHeight

let framesDrawn = 0

let movement = 0

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.drawImage(backPic,0,0,canvas.width,canvas.height)
    ctx.drawImage(bubble,70 + (movement * 2.5),140,150,150)
    ctx.drawImage(bubble2,550 + (movement *- 2.5),250,150,150)

    requestAnimationFrame(animate)

    CurrentFrame = CurrentFrame % totalFrames
    srcX = CurrentFrame * spriteWidth

    ctx.save()
    resizeImage()
    ctx.drawImage(subZeroSpriteSheet,srcX,srcY,spriteWidth,spriteHeight,0 + movement,120,spriteWidth,spriteHeight)
    ctx.drawImage(subZeroSpriteSheet,srcX,srcY2,spriteWidth,spriteHeight,275 - movement,120,spriteWidth,spriteHeight)
    ctx.restore()

    framesDrawn++
    if(framesDrawn >= 20){
        CurrentFrame++
        framesDrawn = 0
    }
    movement+= 0.3
    if(movement >=100){
        movement = 0
    }
    
}

function resizeImage(){
    let scaleFactor = 2.5
    let midXPos = 0
    let midYPos = 300
    // ctx.translate(midXPos + movement ,midYPos)
    ctx.scale(scaleFactor,scaleFactor)
}


let numOfImages = 1
function loadImages() {
    if(--numOfImages > 0) return
    animate()
}