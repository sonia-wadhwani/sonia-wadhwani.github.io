/*Animation and interaction assigment 
 By Sonia Wadhwani

The objective of this assignment is to demonstrate the use of animation and user interaction in a simple p5.js program. This is achieved through the depiction of a house adorned with decorative lights on a twinkling starry night.

The animation includes three main interactions. The first is a welcome page, where the initial user interaction takes place, leading to the main page. On the main page, the stars in the sky twinkle, and the lights on the house change color in response to user interaction. The user can toggle the color of the lights or navigate to an exit page that features a beautifully animated Diwali diya.

The program utilizes various drawing functions, such as rect, ellipse, line, bezier, and arc, and effectively organizes functionality into separate methods. For instance, house is used for drawing the house, createStar for generating stars, and printLight for displaying the house lights and handling user interactions via mouse clicks, by handling mouse clicks in mousePressed method.
*/


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
	
	// Initialize image variable based on default selection
	currentImage = 'images/aihuman.png';
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
	
	// Update image based on radio button selection
	if (aiHumanRadio.value() === 'AI vs Human') {
	  currentImage = '/images/aihuman.png';
	} else if (aiHumanRadio.value() === 'Negative') {
	  currentImage = '/images/negative.png';
	} else if (aiHumanRadio.value() === 'Dots') {
	  currentImage = '/images/dots.png';
	} else if (aiHumanRadio.value() === 'Colours') {
	  currentImage = '/images/colours.png';
	}
	
	// Display image
	image(loadImage(currentImage), width / 2, height / 2, 200, 200);
  }