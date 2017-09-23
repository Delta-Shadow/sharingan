function setup() {
	createCanvas(320, 380);
	stroke(0);
	noFill();
	strokeWeight(2);
	translate(0, -56);
	
	// Main
	ellipse(160, 250, 240);
	// Ring
	arc(160, 250, 130, 130, PI*-0.4, 0); // North East Part
	arc(160, 250, 130, 130, PI*-1.1, PI*-0.64); // North West Part
	arc(160, 250, 110, 110, PI*-1.72, PI*-1.28); // South Part
	// Central
	ellipse(160, 250, 40);
	// First Tomoe
	tomoe(160, 180, 0);
	// Second Tomoe
	tomoe(220, 280, PI/2);
	// Third Tomoe
	tomoe(100, 280, PI/-4);
}

function tomoe(x, y, r) {
	translate(x, y);
	rotate(r);
	arc(0, 0, 60, 60, PI*0.5, PI*-0.5); // Outer Curve
	arc(10, -10, 44, 44, PI*0.95, PI*-0.65); // Inner Curve
	arc(0, 10, 40, 40, PI*1.3, PI*0.5); // Front Curve
	rotate(-r);
	translate(-x, -y);
};