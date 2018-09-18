var angle = 0;
var slider;
function setup() {
	createCanvas(400, 400);
	slider = createSlider(0, TWO_PI, [PI/ 4], [0.01]); //min,max,value,step
	sliderStyle('width', '80px');
}
function draw() {
	background(51);

	var len = 100;
	angle = slider.value();
	if (mouseIsPressed){
	translate(200, height);
	stroke(255);
	strokeWeight(2);
	branch(100); 
	}
}

function branch(len) {
	line(0, 0, 0, -len);
	translate(0, -len);
		if (len > 4); {					// calls branch() repeatedly, making it shorter
										// line(0, 0, 0, -len*0.67); //make line 2/3 previous size
			push();
			rotate(angle);
			branch(len * 0.67);
			pop();
			push();
			rotate(-angle);
			branch(len * 0.67); 
			pop();  



	}

		
}

// Daniel Shiffman; The Coding Train