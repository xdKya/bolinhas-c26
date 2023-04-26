//namespacing
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;

var chao;

var bola;

var corda;

function setup() {
  createCanvas(500, 600);

  engine = Engine.create();
  world = engine.world;

  chao = Bodies.rectangle(250, 590, 500, 20, { isStatic: true });
  World.add(world, chao);

  bola = Bodies.circle(350, 350, 30, { restitution: 0 });
  World.add(world, bola);

  bola2 = Bodies.circle(350, 350, 30, { restitution: 0 });
  World.add(world, bola2);

  console.log(chao);

  corda = Constraint.create({
    pointA: { x: 250, y: 150 },
    bodyB: bola,
    length: 200,
    stiffness: 0.1,
  });
  World.add(world, corda);

  corda2 = Constraint.create({
    pointA: { x: 250, y: 150 },
    bodyB: bola2,
    length: 200,
    stiffness: 0.1,
  });
  World.add(world, corda2);
}

function draw() {
  background("black");
  Engine.update(engine);

  fill("yellow");
  rectMode(CENTER);
  rect(chao.position.x, chao.position.y, 500, 20);

  push();
  stroke("white");
  strokeWeight(3);
  line(corda.pointA.x, corda.pointA.y, bola.position.x, bola.position.y);
  line(corda2.pointA.x, corda2.pointA.y, bola2.position.x, bola2.position.y);
  pop();

  fill("green");
  ellipseMode(RADIUS);
  ellipse(bola.position.x, bola.position.y, 30);
  ellipse(bola2.position.x, bola2.position.y, 30);
}

function mouseDragged() {
  bola.position.x = mouseX;
  bola.position.y = mouseY;
}
