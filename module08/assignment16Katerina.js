let xPos;
let yPos;
function setup() {
  // create canvas
  createCanvas(600,400);
  // set background color
  background('purple');
}
function draw () {
  for (xPos = 20; xPos<width; xPos = xPos +40) {
    for (yPos = 50; yPos<height; yPos = yPos+100) {
			fill(xPos/3,yPos/2,(xPos+yPos)/4);
      ellipse (xPos,yPos,20);
			if(yPos==250) {
				 fill(250,250,0)
				ellipse(xPos,yPos,5)
		};
    }
  }
}