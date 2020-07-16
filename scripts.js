// // this initializes all the systems in Matter.js
// var Engine = Matter.Engine,
// 	Render = Matter.Render,
// 	Runner = Matter.Runner,
// 	Composites = Matter.Composites,
// 	Composite = Matter.Composite,
// 	MouseConstraint = Matter.MouseConstraint,
// 	Mouse = Matter.Mouse,
// 	World = Matter.World,
// 	Constraint = Matter.Constraint,
// 	Bodies = Matter.Bodies;

// 	// this takes a settings argument similar to the render function below that 
// 	// changes or modifies the physics of the engines
// 	engine = Engine.create(), world = engine.world;

// 	var render = Render.create({
// 		// I can use the element key or the canvas key to declare where the canvas is
// 		// supposed to render.  This is similar to ReactDOM.render
// 		element: document.body,
// 		engine: engine,
// 		options: {
// 			width: 1200,
// 			height: 1200,
// 			wireframes: false,
// 		}
// 	});

//     function Particle(x, y, life, angle, speed) {
// 		this.position = {
// 			x: x,
// 			y: y
// 		};
	
// 		this.life = life;

// 		var angleInRadians = angle * Math.PI / 180;
// 		this.velocity = {
// 			x: speed * Math.cos(angleInRadians),
// 			y: -speed * Math.sin(angleInRadians),
// 		};
// 		this.color = 'blue';
// 	}
	

//     Particle.prototype.update = function(dt) {
// 		this.life -= dt;
	
// 		if(this.life > 0) {
//     		this.position.x += this.velocity.x * dt;
//     		this.position.y += this.velocity.y * dt;
// 		}
		
// 		for(var i = 0, l = particles.length; i < l; ++i) {
// 			particles[i].update(delta);
// 		}
	
//     };
// 	// var particleOptions = { 
//     //     friction: 0.05,
//     //     frictionStatic: 0.1,
//     //     render: { visible: true } 
//     // };

// 	// var constraintOptions = { 
//     //     render: { visible: false } 
//     // };
// 	// // softBody(xx, yy, columns, rows, colGap, rowGap, crossBrace, pRadius, pOptions, cOptions)
// 	// var softBody = Composites.softBody(450, 200, 6, 6, 2, 2, true, 6, particleOptions, constraintOptions);



// 	// var boxes = Composites.stack(500, 80, 5, 1, 10, 0, function(x, y) {
//     //     return Bodies.rectangle(x, y, 15, 15);
//     // });
 
// 	// var chain = Composites.chain(boxes, 0.5, 0, -0.5, 0, { stiffness: 1});
 
// 	// Composite.add(boxes, Constraint.create({ 
//     //     bodyA: boxes.bodies[0],
//     //     pointB: { x: 500, y: 70},
//     //     stiffness: 2.0
//     // }));
// 	// // var car = Composites.car(300, 100, 100, 45, 30);
// 	// // var topWall = Bodies.rectangle(400, 0, 810, 30, { isStatic: true });
// 	// // var leftWall = Bodies.rectangle(0, 200, 30, 420, { isStatic: true });
// 	// // var ball = Bodies.circle(460, 10, 40, 10);
// 	// var bottomWall = Bodies.rectangle(400, 400, 810, 30, { isStatic: true });
// 	// // var spyramid = Composites.pyramid(0, 220, 11, 6, 0, 0, function(x, y) {
// 	// // 	return Bodies.rectangle(x, y, 30, 30, {
// 	// // 	  render: {
// 	// // 		fillStyle: 'cornflowerblue',
// 	// // 		strokeStyle: 'black'
// 	// // 	  }
// 	// // 	});
// 	// //   });

// 	// // topWall, leftWall, ball, bottomWall, spyramid, car, boxes, 
// 	// World.add(engine.world, [chain, softBody, bottomWall]);

// 	// var addCircle = function() {
// 	//  return Bodies.circle(Math.random() * 400 + 30, 30, 30);
// 	// };

// 	// // $('.add-circle').on('click', function() {
// 	// // 	World.add(engine.world, addCircle());
// 	// // });

// 	// // World.remove(engine.world, [topWall, leftWall]);
// 	// // Matter.Composite.rotate( engine.world, Math.PI/4, {x: 400, y: 200});
// 	// Matter.Composite.scale( engine.world, 0.5, 0.7, {x: 400, y: 200});
// 	// // world.gravity.x(1)



// 	// Engine.run(engine);
// 	// Render.run(render);



// ? Fresh start with matter.js

// these initiate matter.js systems
var Engine = Matter.Engine,
	Render = Matter.Render,
	World = Matter.World,
	Bodies = Matter.Bodies;

// actually create the physics engine
var engine = Engine.create();
// create the renderer
var render = Render.create({
	// what we are rendering to 
	element: document.body,
	engine: engine,
	// how large do we want our display
	// do we want to show the shapes wireframes
	options: {
		width: 1200,
		height: 1200,
		wireframes: false,
	}
});

// shapes we could add to the world array
var boxA = Bodies.rectangle(400, 400, 80, 80);
var ground = Bodies.rectangle(600, 1100, 1200, 300, {isStatic: true});

// where we actually add the shapes to the world
World.add(engine.world, [boxA, ground]);

Engine.run(engine);
Render.run(render);