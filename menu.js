function menu(){
    push()
        noStroke()
        rectMode(CENTER)
        fill(255,200,200, 50)
        rect(1280/2,720/2,1280,720)
        fill(200,200,255, 225)
        rect(1280/2,720/2,500,500, 10)
        imageMode(CENTER)
        fill(255,255,255)
        textSize(50)
        text("Controls:",1280/2-225,720/2-150)
        textSize(40)
        text("Movement: A S W D",1280/2-200,720/2-100)
        text("Rotation: Q E",1280/2-200,720/2-50)
        text("Precision: SPACEBAR",1280/2-200,720/2)
        text("Restart: R",1280/2-200,720/2+50)
    pop()
}