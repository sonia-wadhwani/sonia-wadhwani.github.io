function setup() {
	createCanvas(750, 400);
  
	// Create radio buttons with initial selection
	aiHumanRadio = createRadio('radio');
	aiHumanRadio.option('AI vs Human');
	aiHumanRadio.option('Negative');
	aiHumanRadio.option('Dots');
	aiHumanRadio.option('Colours');
	aiHumanRadio.selected('AI vs Human');
	aiHumanRadio.position(100, 100);
  
	// Load images and handle errors
	aiHumanImage = loadImage('images/aihuman.png', imageLoaded);
	negativeImage = loadImage('images/negative.png', imageLoaded);
	dotsImage = loadImage('images/dots.png', imageLoaded);
	coloursImage = loadImage('images/colours.png', imageLoaded);
  }
  
  function imageLoaded() {
	if (this.error) {
	  alert('Error loading image');
	}
  }
  
  function draw() {
	background(255);
  
	// Display title
	textFont('DM Serif Display');
	textSize(32);
	textAlign(CENTER);
	text('Elements of Design', width / 2, 50);
  
	// Display radio buttons
	aiHumanRadio.display();
  
	// Display the image only if it's loaded successfully
	if (aiHumanImage.isLoaded()) {
	  if (aiHumanRadio.value() === 'AI vs Human') {
		image(aiHumanImage, width / 2, height / 2, 200, 200);
	  } else if (aiHumanRadio.value() === 'Negative') {
		image(negativeImage, width / 2, height / 2, 200, 200);
	  } else if (aiHumanRadio.value() === 'Dots') {
		image(dotsImage, width / 2, height / 2, 200, 200);
	  } else if (aiHumanRadio.value() === 'Colours') {
		image(coloursImage, width / 2, height / 2, 200, 200);
	  }
	}
  }