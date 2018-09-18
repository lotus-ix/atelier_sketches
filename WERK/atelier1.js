var value

function setup()
{
	createCanvas(1000,1000);
	background(255,0,0);
}

function mouseClicked(){

}
	
function draw()
{
	value = color(random (0,255), random(0,255), random(0,255));
	fill(value);
	stroke(value);
	strokeWeight(2);
	ellipse(mouseX,mouseY,100,100,100,100);
}


