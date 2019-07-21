
function ball(myoptions, matteroptions){
    if(myoptions.x){this.x = myoptions.x}else{this.x = 0};
    if(myoptions.y){this.y = myoptions.y}else{this.y = 0};
    if(myoptions.r){this.r = myoptions.r}else{this.r = 50};
    if(myoptions.gs){this.gs = myoptions.gs}else{this.gs = 150};
    if(myoptions.pic){this.pic = myoptions.pic}else{this.pic = null}

    this.body = Matter.Bodies.circle(this.x,this.y,this.r,matteroptions);
    Matter.World.add(world, this.body);
    
    this.show = function(){
        push();
            noStroke()
            translate(this.body.position.x*zoom+camX,this.body.position.y*zoom+camY);
            rotate(this.body.angle);
            fill(this.gs,this.gs,this.gs)
            rectMode(CENTER);
            ellipse(0,0,this.body.circleRadius*2)    
        pop();
    }
}

function BOX(myoptions, matteroptions){
    if(myoptions.x){this.x = myoptions.x}else{this.x = 100};
    if(myoptions.y){this.y = myoptions.y}else{this.y = 0};
    if(myoptions.w){this.w = myoptions.w}else{this.w = 100};
    if(myoptions.h){this.h = myoptions.h}else{this.h = 100};
    if(myoptions.gs){this.gs = myoptions.gs}else{this.gs = 150};
    if(myoptions.pic){this.pic = myoptions.pic}else{this.pic = null}

    this.body = Matter.Bodies.rectangle(this.x,this.y,this.w,this.h,matteroptions);
    Matter.World.add(world, this.body);
    
    this.show = function(){
        push();
            noStroke()
            translate(this.body.position.x*zoom+camX,this.body.position.y*zoom+camY);
            rotate(this.body.angle);
            fill(this.gs,this.gs,this.gs)
            rectMode(CENTER);
            rect(0,0,this.w*zoom,this.h*zoom)  
        pop();
    }
}

function Tall(myoptions, matteroptions){
    if(myoptions.x){this.x = myoptions.x}else{this.x = 100};
    if(myoptions.y){this.y = myoptions.y}else{this.y = 0};
    if(myoptions.w){this.w = myoptions.x}else{this.w = 50};
    if(myoptions.h){this.h = myoptions.y}else{this.h = 150};
    if(myoptions.gs){this.gs = myoptions.gs}else{this.gs = 150};
    if(myoptions.pic){this.pic = myoptions.pic}else{this.pic = null}

    this.body = Matter.Bodies.rectangle(this.x,this.y,this.w,this.h,matteroptions);
    Matter.World.add(world, this.body);
    
    this.show = function(){
        push();
            noStroke()
            translate(this.body.position.x*zoom+camX,this.body.position.y*zoom+camY);
            rotate(this.body.angle);
            fill(this.gs,this.gs,this.gs)
            rectMode(CENTER);
            rect(0,0,this.w*zoom,this.h*zoom)  
        pop();
    }
}

function Zee(myoptions, matteroptions){
    if(myoptions.x){this.x = myoptions.x}else{this.x = 100};
    if(myoptions.y){this.y = myoptions.y}else{this.y = 0};
    if(myoptions.w){this.w = myoptions.x}else{this.w = 100};
    if(myoptions.h){this.h = myoptions.y}else{this.h = 100};
    if(myoptions.gs){this.gs = myoptions.gs}else{this.gs = 150};
    if(myoptions.pic){this.pic = myoptions.pic}else{this.pic = null}

    vert = [
        {x:0,y:0},
        {x:-100,y:0},
        {x:-100,y:50},
        {x:-150,y:50},
        {x:-150,y:100},
        {x:-50,y:100},
        {x:-50,y:50},
        {x:0,y:50}
]
    this.body = Matter.Bodies.fromVertices(this.x, this.y,vert,matteroptions)
    Matter.World.add(world, this.body);
    
    this.show = function(){
        push();
            noStroke()
            translate(this.body.vertices[0].x*zoom+camX,this.body.vertices[0].y*zoom+camY);
            rotate(this.body.angle);
            fill(this.gs,this.gs,this.gs)
            rectMode(CENTER);
            rect(-50*zoom,-25*zoom,100*zoom,50*zoom)
            rect(-100*zoom,25*zoom,100*zoom,50*zoom)
        pop();
    }
}

function Tee(myoptions, matteroptions){
    if(myoptions.x){this.x = myoptions.x}else{this.x = 100};
    if(myoptions.y){this.y = myoptions.y}else{this.y = 0};
    if(myoptions.w){this.w = myoptions.x}else{this.w = 100};
    if(myoptions.h){this.h = myoptions.y}else{this.h = 100};
    if(myoptions.gs){this.gs = myoptions.gs}else{this.gs = 150};
    if(myoptions.pic){this.pic = myoptions.pic}else{this.pic = null}

    vert = [
        {x : 0 , y : 0},
        {x : -150 , y : 0},
        {x : -150 , y : -50},
        {x : -100, y : -50},
        {x : -100 , y : -100},
        {x : -50, y : -100},
        {x: -50, y: -50},
        {x: 0, y: -50}
]
    this.body = Matter.Bodies.fromVertices(this.x, this.y,vert,matteroptions)
    Matter.World.add(world, this.body);
    
    this.show = function(){
        push();
            noStroke()
            translate(this.body.vertices[0].x*zoom+camX,this.body.vertices[0].y*zoom+camY);
            rotate(this.body.angle);
            fill(this.gs,this.gs,this.gs)
            rectMode(CENTER);
            rect(-150/2*zoom,-25*zoom,150*zoom,50*zoom)
            rect(-150/2*zoom, -75*zoom, 50*zoom,50*zoom)
        pop();
    }
}

function Lshape(myoptions, matteroptions){
    if(myoptions.x){this.x = myoptions.x}else{this.x = 100};
    if(myoptions.y){this.y = myoptions.y}else{this.y = 0};
    if(myoptions.w){this.w = myoptions.x}else{this.w = 100};
    if(myoptions.h){this.h = myoptions.y}else{this.h = 100};
    if(myoptions.gs){this.gs = myoptions.gs}else{this.gs = 150};
    if(myoptions.pic){this.pic = myoptions.pic}else{this.pic = null}

    vert = [
        {x : 0 , y : 0},
        {x : -100 , y : 0},
        {x : -100 , y : -150},
        {x : -50, y : -150},
        {x : -50 , y : -50},
        {x : 0, y : -50}
]
    this.body = Matter.Bodies.fromVertices(this.x, this.y,vert,matteroptions)
    Matter.World.add(world, this.body);
    
    this.show = function(){
        push();
            noStroke()
            translate(this.body.vertices[0].x*zoom+camX,this.body.vertices[0].y*zoom+camY);
            rotate(this.body.angle);
            fill(this.gs,this.gs,this.gs)
            rectMode(CENTER);
            rect(-50*zoom,-25*zoom,100*zoom,50*zoom)
            rect(-75*zoom,-100*zoom,50*zoom,100*zoom)
        pop();
    }
}