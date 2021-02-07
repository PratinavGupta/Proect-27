function setup() {
	createCanvas(800, 700);
	engine = Matter.Engine.create();
	world = engine.world;

	ball1 = new BALL(300, 400);
	ball2 = new BALL(350, 400);
	ball3 = new BALL(400, 400);
	ball4 = new BALL(450, 400);
	ball5 = new BALL(500, 400);

	ground = new GROUND(400, 100, 400, 10);

	rope = new ROPE(ball1.body, { x: 300, y: 100 });
	rope2 = new ROPE(ball2.body, { x: 350, y: 100 });
	rope3 = new ROPE(ball3.body, { x: 400, y: 100 });
	rope4 = new ROPE(ball4.body, { x: 450, y: 100 });
	rope5 = new ROPE(ball5.body, { x: 500, y: 100 });

	Matter.Engine.run(engine);
}

function draw() {
	background("red");

	Matter.Engine.update(engine);

	rectMode(CENTER);

	ground.display();
	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();

	rope.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	release();

	drawSprites();
}

function release() {

	if (keyIsDown(UP_ARROW))
		Matter.Body.applyForce(ball1.body, ball1.body.position, { x: -85, y: -85 });


}