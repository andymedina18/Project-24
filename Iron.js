class Iron {
    constructor(x, y) {

        var options = {
            restitution: 0.8, 
            friction: 3,
            density: 30
        }

        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 97;
        this. height = 35;
        World.add(world, this.body);
        
    }

    display() {
        var ironPos = this.body.position;

        push();
        translate(ironPos.x, ironPos.y);
        rectMode(CENTER);
        strokeWeight(4);
		stroke("darkgreen");
		fill(148, 198, 115);

        rect(0, 0, this.width, this.height);

        pop();
    }
}