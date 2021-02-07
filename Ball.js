class BALL {
    constructor(x, y) {
        var prop = { restitution: 0.3, density: 1.2, friction: 1 }
        this.body = Matter.Bodies.circle(x, y, 25, prop);
        Matter.World.add(world, this.body);
    }

    display() {
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, 25);
    }
}