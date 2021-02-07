class ROPE {
    constructor(a, b) {
        var options = { bodyA: a, pointB: b, stiffness: 0.1, length: 300 }
        this.chain = Matter.Constraint.create(options);
        Matter.World.add(world, this.chain);
    }

    display() {
        var A = this.chain.bodyA.position;
        var B = this.chain.pointB;
        strokeWeight(2);
        line(A.x, A.y, B.x, B.y);
    }
}