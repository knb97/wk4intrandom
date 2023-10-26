let x, y;
let bgColor = 0;
let ellipseColor= 0;

function setup() {
  createCanvas(500, 500);
 x = width/2;
  y = height/2;
}

function draw() {
  background(bgColor);
  
  ellipse(150,500,400,400)
  ellipse(400,500,300,300)
  
  
  //dots background
  noStroke();
  	for (var i = 0; i <= width; i += 15) {
		for (var j = 0; j <= height; j += 30) {
	var d = dist(mouseX, mouseY, i, j);
			d = map(d, 0, 150, 20, 0);
      fill(0, d*10);
			ellipse(i, j, d, d);
		}
  
  //main mouse
  x = mouseX;
  y = mouseY;
  
 let colorX = map( mouseX, 0, width, 0, 255);
let colorY = map(mouseY, 0, height, 0, 255);
 noStroke();
	fill(ellipseColor);
	ellipse(x, y, 60, 60);
  
  //mouse pressed
    if (mouseIsPressed) {
    bgColor = color(random(255), random(255), random(255));
		ellipseColor = color(random(255), random(255), random(255));
  }
  
}
}