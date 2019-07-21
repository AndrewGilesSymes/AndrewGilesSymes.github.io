pieces = []
MovingPiece = null;
a = false
s = false
w = false
d = false
q = false
e = false
pause = false
space = false
esc = false
zoom = 1
zoomwant = 1
camX = 0
camY = 0
maxBound = 720-70
function preload(){
    background1 = loadImage("https://i.imgur.com/MUufvfk.jpg")
}

function setup(){
    canvas = createCanvas(1280,720);
    engine = Matter.Engine.create();
    engine.positionIterations = 10
    //engine.velocityIterations = 10
    world = engine.world;
    Matter.Engine.run(engine);
    platform = new BOX({x: 1280/2, y: 700, w: 400, h: 100},{isStatic: true});
    CreatePiece()
}

function CreatePiece(){
    
    rand = Math.random()*5
    rand = Math.floor(rand)
    RGS = Math.random()*255
    RGS = RGS * 2

    if(rand == 0){
        MovingPiece = new Tee({x:1280/2,y:maxBound - 400, gs: RGS},{friction: .8,restitution: .01});
    }else if(rand == 1){
        MovingPiece = new Zee({x:1280/2,y:maxBound - 400, gs: RGS},{friction: .8, restitution: .01});
    }else if(rand == 2){
        MovingPiece = new BOX({x:1280/2,y:maxBound - 400, gs: RGS},{friction: .8,restitution: .01});
    }else if(rand == 3){
        MovingPiece = new Tall({x:1280/2,y:maxBound - 400, gs: RGS},{friction: .8,restitution: .01});
    }else if(rand == 4){
        MovingPiece = new Lshape({x:1280/2 - 13,y:maxBound - 400, gs: RGS},{friction: .8,restitution: .01});
    }
    //Matter.Body.setStatic(MovingPiece.body, true)
    pieces.push(MovingPiece);
}

function ClearPieces(){
    for(var i = pieces.length - 1; i >= 0;i--){
        Matter.World.remove(world, pieces[i].body)
    }
    pieces = [];
}

function Touch(){
    t = false;
    if(Matter.SAT.collides(MovingPiece.body, platform.body).collided){t=true}
        for(var i = pieces.length - 1; i >= 0;i--){
            if(pieces[i]){
                if(pieces[i].body.id != MovingPiece.body.id){
                if(Matter.SAT.collides(MovingPiece.body, pieces[i].body).collided){t=true}
            }
            }
        }
    return t;
}

document.onkeydown = function(key){
    if(MovingPiece){
        switch(key.key){
        case "a":
        case "r":
        case "R":
        if(pause == true){
            ClearPieces()
            CreatePiece()
            MovingPiece.body.isStatic = true
        }
        
        case "A":
        if(space == true){
            Matter.Body.setPosition(MovingPiece.body, {y:MovingPiece.body.position.y, x: MovingPiece.body.position.x - 25/2})
        }else{
            Matter.Body.setPosition(MovingPiece.body, {y:MovingPiece.body.position.y, x: MovingPiece.body.position.x - 25})
        }
        break;
        case "d":
        case "D":
        d = true;
        if(space == true){
            Matter.Body.setPosition(MovingPiece.body, {y:MovingPiece.body.position.y, x: MovingPiece.body.position.x + 25/2})
        }else{
            Matter.Body.setPosition(MovingPiece.body, {y:MovingPiece.body.position.y, x: MovingPiece.body.position.x + 25})
        }
        break;
        case "w":
        case "W":
        w = true;
        break;
        case "s": 
        case "S":
        s = true;
        break;
        case "q":
        case "Q":
        q = true;
        if(space == true){
            Matter.Body.setAngle(MovingPiece.body, MovingPiece.body.angle -45*(Math.PI/180))
        }else{
            Matter.Body.setAngle(MovingPiece.body, MovingPiece.body.angle -90*(Math.PI/180))
        }
        break;
        case "e":
        case "E":
        e = true;
        if(space){
            Matter.Body.setAngle(MovingPiece.body, MovingPiece.body.angle +45*(Math.PI/180))
        }else{
            Matter.Body.setAngle(MovingPiece.body, MovingPiece.body.angle +90*(Math.PI/180))
        }
        break;
        case " ": space = true;
        break;
        case "Escape": esc = true;
        break;
    }
    }
    
};

document.onkeyup = function(key){
    switch(key.key){
        case "a":
        case "A":
        a = false;
        break;
        case "d":
        case "D":
        d = false;
        break;
        case "w":
        case "W":
        w = false;
        break;
        case "s":
        case "S":
        s = false;
        break;
        case "q":
        case "Q":
        q = false;
        break;
        case "e":
        case "E":
        e = false;
        break;
        case " ": space = false;
        break;
        case "Escape": esc = false;
        if(pause == false){
            pause = true
            for(var i = pieces.length - 1; i >= 0;i--){
                pieces[i].body.isStatic = true
            }
        }else{
            pause = false
            for(var i = pieces.length - 1; i >= 0;i--){
                pieces[i].body.isStatic = false
            }
        }
        break;
    }
};


function draw(){
    //background(100)
    image(background1, 0,0,)
    if(platform){platform.show()}
    for(var i = pieces.length - 1; i >= 0;i--){
        if(pieces[i]){
            pieces[i].show()
        }
    }
    if(MovingPiece){
        Matter.Body.applyForce(MovingPiece.body, MovingPiece.body.position, {x: 0, y: -MovingPiece.body.mass*.00095})
        //Matter.Body.setPosition(MovingPiece.body, {x: MovingPiece.body.position.x, y: MovingPiece.body.position.y+1})
        //if(a == true){Matter.Body.applyForce(MovingPiece.body, MovingPiece.body.position, {x: -MovingPiece.body.mass*.0008, y: 0})}
        // if(d == true){Matter.Body.applyForce(MovingPiece.body, MovingPiece.body.position, {x: MovingPiece.body.mass*.0008, y: 0})}
        if(s == true){Matter.Body.applyForce(MovingPiece.body, MovingPiece.body.position, {x: 0, y: MovingPiece.body.mass*.0008})}
        //if(q == true){Matter.Body.setAngle(MovingPiece.body, MovingPiece.body.angle -.05)}
        //if(e == true){Matter.Body.setAngle(MovingPiece.body, MovingPiece.body.angle +.05)}
        if(Touch()){
            Matter.Body.setStatic(MovingPiece.body, false)
            MovingPiece.body.velocity = {x: 0, y: 0}
            MovingPiece = null;
            CreatePiece()
        }
    }
    maxBound = 720-70;
    for(var x = pieces.length - 1; x >= 0;x--){
        if(pieces[x]){
                if(pieces[x].body.bounds.min.y < maxBound && pieces[x].body.id != MovingPiece.body.id){
                maxBound = pieces[x].body.bounds.min.y
            }
            if(pieces[x].body.position.y >  740){
                if(pieces[x].body.id == MovingPiece.body.id){
                    Matter.Body.setPosition(pieces[x].body, {x:1280/2, y:0})
                    Matter.Body.setVelocity(pieces[x].body, {x:0,y:0})
                }else{
                    Matter.World.remove(world, pieces[x].body)
                    pieces.splice(x, 1)
                }
            }
        }
        
    }
    
    camX = -((1280*zoom)-1280)/2
    camY = 720*(1-zoom)
    zoomwant = ((1/zoom)*720 - 400)/((1/zoom)*720)*(1/((-(maxBound - 720))/720))
    if(pause == false){
        if(zoomwant == -Infinity || zoomwant >= 1){
        zoomwant = 1
    }
    if(zoom - .01 > zoomwant){
        zoom = zoom - .001
    }else if(zoom < zoomwant){
            zoom = zoom + .001
    }
    }

    push();
    noStroke()
    fill(255,254,254);
    textSize(64)
    if(Math.round(Math.abs((maxBound-720+70)/50)*10)/10 == Math.round(Math.round(Math.abs((maxBound-720+70)/50)*10)/10)){
        t = Math.round(Math.abs((maxBound-720+70)/50)*10)/10 + '.0'
    }else{
        t = (Math.round(Math.abs((maxBound-720+70)/50)*10)/10)
    }
    t = t + ' m'
    text(t, 1280*(1/3)-50,maxBound*zoom+camY-10)
    rect(0,maxBound*zoom+camY,1280,-5*zoom)
    pop()
    if(pause == true){
        menu()
    }
}