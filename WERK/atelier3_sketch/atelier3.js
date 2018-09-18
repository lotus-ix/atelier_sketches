var angle = 3.14/4;
var slider;
function setup() {
	createCanvas(400, 400);
	slider = createSlider(0, TWO_PI, PI/ 4, 0.01);
}


function draw() {
	background(51);

	var len = 100;
	angle = slider.value();
	stroke(255);
	strokeWeight(2);
	translate(200,height);
	branch(100); 
}

function branch(len) {
	line(0,0,0, -len);
	translate(0, -len);
	if (len > 4) {
		rotate(angle);
		branch(len*0.67);
		rotate(-angle);
		branch(len*0.67);
	
	}
	
	 // calls branch() repeatedly, making it shorter
	// line(0, 0, 0, -len*0.67); //make line 2/3 previous size

}
