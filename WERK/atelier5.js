var spot = {
	x: 100,
	y: 50
}

var col = {
	r: 255,
	g: 0,
	b: 25
}
function setup() {
	createCanvas(1000,1000);
	background(0);
}

function draw() {
	col.r = random(0,255);
	col.g = random(0, 255);
	col.b = random(0, 255);
	spot.x = random(0, width);
	spot.y = random(0, height);
	noStroke();
	rotate(random(0, 270));
	fill(col.r, col.g, col.b, 80);
	ellipse(spot.x, spot.y, random(4,287), random(0,287), 100);


}
