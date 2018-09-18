var col;
var opp;

function setup() {
	createCanvas(700, 400);
}

function draw() {
	col = map(mouseX, 0, 600, 0, 255);
	background(col);

	opp = map(mouseX, 0, 600, 255, 0);
	noStroke();
	ellipse(mouseX, height/2, 88, 88);
	fill(opp);
}