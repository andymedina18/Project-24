class Stone {
    constructor(x, y) {

        var options = {
            restitution: 0.8, 
            friction: 0.9,
            density: 12
        }

        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 80; 
        this. height = 55;
        World.add(world, this.body);

    }

    display() {

        var stonePos = this.body.position

        push();
        translate(stonePos.x, stonePos.y);
        rectMode(CENTER);
        strokeWeight(4);
		stroke("purple");
		fill(191, 148, 228);

        rect(0, 0, this.width, this.height);

        pop();

    }
}
