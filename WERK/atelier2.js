function setup() {
	createCanvas(700, 700);

}

function draw() {
	background(0);


	let hr = hour();
	let min = minute();
	let sec = second();
	
	stroke(199, 3, 34);
	strokeWeight(8);
	noFill();
	let secAngle = map(sec, 0, 60, 0, 360);
	arc(200, 200, 300, 300, 0, secAngle);


	stroke(0, 100, 255);
	let minuteAngle = map(min, 0, 60, 0, 360);
	arc(200, 200, 280, 280, 0, minuteAngle);

	stroke(255, 280, 120);
	let hourAngle = map(hr % 12, 0, 12, 0, 360);
	arc(200, 200, 260, 260, 0, hourAngle);


	push();
	translate(200,200);
	rotate(secAngle);
	noFill();
	strokeWeight(4);
	stroke(255);
	line(0,0,100,0);
	pop();
	

}

// based off of "Clock with p5.js" by Daniel Shiffman

		//var value = color(random(0,255), random (0,255), random (0,255));
	/* noStroke();
	textSize(80);
	text(hr + ':' + min + ': ' + sec, width/2, height/2); */ // basic digital clock
