class Particle{
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.body = Bodies.circle(x, y, (r-5)/2 ,options);    
        this.r = r;   
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(this.color)
        ellipse(0, 0, this.r,this.r);
        pop();
    }

};