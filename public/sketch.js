
function setup() {
		// Create the canvas
	   //p.createCanvas(p.windowWidth, p.windowHeight);
	   createCanvas(500, 500);
		noLoop();
};

function draw() {
		background(200);

		// Set colors
		fill(204, 101, 192, 127);
		stroke(127, 63, 120);

		// A rectangle
		//rect(40, 120, 120, 40);
		// An ellipse
		//ellipse(240, 240, 80, 80);
		// A triangle
		//triangle(300, 100, 320, 100, 310, 80);

		// A design for a simple flower
		translate(width/2, height/2);
		noStroke();
		for (var i = 0; i < 10; i ++) {
			ellipse(0, 30, 20, 80);
			rotate(PI / 5);
		}
	};

