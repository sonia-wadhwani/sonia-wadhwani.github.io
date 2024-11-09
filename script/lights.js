/*Animation and interaction assigment 
 By Sonia Wadhwani

The objective of this assignment is to demonstrate the use of animation and user interaction in a simple p5.js program. This is achieved through the depiction of a house adorned with decorative lights on a twinkling starry night.

The animation includes three main interactions. The first is a welcome page, where the initial user interaction takes place, leading to the main page. On the main page, the stars in the sky twinkle, and the lights on the house change color in response to user interaction. The user can toggle the color of the lights or navigate to an exit page that features a beautifully animated Diwali diya.

The program utilizes various drawing functions, such as rect, ellipse, line, bezier, and arc, and effectively organizes functionality into separate methods. For instance, house is used for drawing the house, createStar for generating stars, and printLight for displaying the house lights and handling user interactions via mouse clicks, by handling mouse clicks in mousePressed method.
*/


let stage=1;
let circleColor = "blue";
let circleColor1="red";
let circleColor2="black"
let switchClicked="red";
let colorChangeTimer = 0;
let blueText="OFF";
let redText="ON";
const colorChangeDelay = 20; // Adjust the delay in milliseconds
const numberOfStars=50;
let starsX=[];
let starsY=[];
let starsSize=[];
let exitClicked="No";


function setup() 
{
	createCanvas(800, 650);
}

function draw()
{
    console.log(stage);
	if(stage===1)
	{
		openingScreen();
	}
	else if(stage===3)
	{
		closingScreen();
	}  
	else  //Means the stage is 2
	{

		background(76, 81, 88);  // Set the background color

		fill(100, 200, 250);  // Set fill color for the trapezium
		stroke(0);  // Set outline color
		strokeWeight(2);  // Set the thickness of the outline
		createStar();
		house();
		houseLights(circleColor);
		createSwitch();

		colorChangeTimer++;
		if (colorChangeTimer >= colorChangeDelay) 
		{
			colorChangeTimer = 0;
			if (circleColor === circleColor1) 
			{
				circleColor = circleColor2;
			} 
			else 
			{
				circleColor = circleColor1;
			}
		}

			
	}
}	
 
function openingScreen()
{
  if(frameCount===1)
  {
	for(let i=0;i<numberOfStars;i++) //Initialize the star positions
	{

	starsX[i]= floor(random(10, 800));
	starsY[i]= floor(random(10,400));
	starsSize[i]=floor(random(2,4));
	}
  } 
  fill("white");
  rect(0,0,800,650);
  textSize(100);
  fill(0);
  text("Click to Start",125,240);
  noFill();
  rect(325,345,200,100,10);
  textSize(50);
  fill(0);
  text("Start",360,410);
  fill(100, 200, 250);
}



function createStar()
{
	if(frameCount%20===1) //Do this every 20th frame to give the blink effect
	{
		fill(76, 81, 88);
		stroke(76, 81, 88);

	}
	else
	{
        	fill("white");
		stroke(255);
	}
	

  	for(let i=0;i<numberOfStars;i++)
  	{
    	  ellipse(starsX[i],starsY[i], starsSize[i],starsSize[i]);
  	}  
  	stroke(0);
}


function house()
{
	//background
	fill(19,109,21); //floor
	rect(0, 420, 800, 230);

	fill(255,241,208); //floor
	rect(120, 330, 560, 220);

	fill(150, 75, 0); //floor bottom
	rect(80, 550, 640, 30);

	fill(175, 111, 70); 
	beginShape();//roof
	vertex(80, 330);  // Bottom left point
	vertex(720, 330);  // Bottom right point
	vertex(620, 185);  // Top right point
	vertex(180, 185);  // Top left point
	endShape(CLOSE);
	fill(205, 149, 117);
	rect(80,330,640,10)



	fill(175, 111, 70); 
	beginShape();//door
	vertex(480, 550);  // Bottom left point
	vertex(590, 550);  // Bottom right point
	vertex(590, 400);  // Top right point
	vertex(480, 400);  // Top left point
	endShape(CLOSE);

	fill(0)
	ellipse(565, 480, 10, 10);//door handle

	fill(255,241,208); 
	rect(210, 110, 380, 120);//house

	fill(175, 111, 70); 
	beginShape();//roof up
	vertex(195, 110);  // Bottom left point
	vertex(605, 110);  // Bottom right point
	vertex(590, 75);  // Top right point
	vertex(210, 75);  // Top left point
	endShape(CLOSE);
	fill(205, 149, 117);
	rect(195,110,410,10)


	fill(225); 

	fill(120, 184, 232);
	beginShape();//window1
	vertex(230, 215);  // Bottom left point
	vertex(330, 215);  // Bottom right point
	vertex(330, 135);  // Top right point
	vertex(230, 135);  // Top left point
	endShape(CLOSE);
	line(280, 135, 280, 215);


	beginShape();//window2
	vertex(350, 215);  // Bottom left point
	vertex(450, 215);  // Bottom right point
	vertex(450, 135);  // Top right point
	vertex(350, 135);  // Top left point
	endShape(CLOSE);
	line(400, 135, 400, 215);


	beginShape();//window3
	vertex(470, 215);  // Bottom left point
	vertex(570, 215);  // Bottom right point
	vertex(570, 135);  // Top right point
	vertex(470, 135);  // Top left point
	endShape(CLOSE);
	line(520, 135, 520, 215);


	beginShape();//window down
	vertex(170, 490);  // Bottom left point
	vertex(400, 490);  // Bottom right point
	vertex(400, 360);  // Top right point
	vertex(170, 360);  // Top left point
	endShape(CLOSE);
	line(170, 425, 400, 425);//horizontal
	line(285, 360, 285, 490);//horizontal

	fill(150, 75, 0);
	rect(80, 465, 395, 5); //  Railing left

	rect(100,470,5,80);
	rect(140,470,5,80);
	rect(180,470,5,80);
	rect(220,470,5,80);
	rect(260,470,5,80);
	rect(300,470,5,80);
	rect(340,470,5,80);
	rect(380,470,5,80);
	rect(420,470,5,80);
	rect(460,470,5,80);

	rect(595, 465, 120, 5); //  Railing right

	rect(610,470,5,80);
	rect(650,470,5,80);
	rect(690,470,5,80);
	
}

function houseLights(circleColor)
{
	//fill(0,0,255);
	fill(circleColor);
  
	//1 big curve

	let x=108;
	let y= 345;
	printBigLight(x,y);

	//big curve 2 curve

	x= 225;
	y= 345;
	printBigLight(x,y);
  
  	//big curve 3 curve

	x= 345;
	y= 345;
	printBigLight(x,y);
  
  	//big curve 4 curve

	x= 465;
	y= 345;
	printBigLight(x,y);
  
  	//big curve 5 curve

	x= 585
	y= 345
	printBigLight(x,y);

	//floor 2 curve 1 

	let a=198;
	let b=125;
	printSmallLight(a,b);


	//floor 2 curve 2 
	a=281;
	b=125;
	printSmallLight(a,b);

	//floor 2 curve 3 
	a=364;
	b=125;
	printSmallLight(a,b);
  
  	//floor 2 curve 4
	a= 447;
	b=125;
	printSmallLight(a,b);
  
  	//floor 2 curve 5
	a=530;
	b=125;
	printSmallLight(a,b);

	//star
     	triangle(640, 140, 668, 170, 610, 170);//tri1
     	triangle(640,180,610,150,668,150 );//tri2
  
    	line(600, 120, 640, 140); // Draw a diagonal line
}

function printBigLight(x,y)
{
	for(let i=0; i<13;i++)
	{
		if(i<6)
		{
			ellipse(x,y,9,9);
			x=x+9;
			y=y+7;    
		}  
		else
		{  
			if(i>6)
			{
				ellipse(x,y,9,9);
				x=x+9;
				y=y-7;
			}  
			else
			{
				y=y-2;
				ellipse(x,y,9,9);
				x=x+9;
				y=y-4;        
			}    
		}
	} 
}

function printSmallLight(a,b)
{
	for(let j=0; j<9;j++)
	{

		if(j<4)
		{
			ellipse(a,b,9,9);
			a=a+9;
			b=b+7;    
		}  
		else
		{  
			if(j>4)
			{
				ellipse(a,b,9,9);
				a=a+9;
				b=b-7;
			}  
			else
			{
				b=b-2;
				ellipse(a,b,9,9);
				a=a+9;
				b=b-5;        
			}    
		}
	} 
}

function diya() //Draw a Diya
{
  //shadow
  fill(129, 133, 137);
  strokeWeight(0);
  ellipse(142,260,250,40);
  // Fill the crescent with white
  strokeWeight(1);
  fill("brown");
  //noFill();

  // Draw a crescent shape
  bezier(20, 180, 70, 280, 220, 280, 270, 180);
  bezier(20, 180, 70, 200, 220, 200, 270, 180);
  bezier(20, 180, 70, 160, 220, 160, 270, 180);

  if(frameCount%15===0)
  {  
    fill("yellow");
    bezier(270, 180, 250, 155, 250, 105, 270, 80);
    bezier(270, 180, 290, 155, 270, 105, 270, 80);
  
  }
  else
  {  
    fill("orange");  
    bezier(270, 180, 250, 155, 250, 105, 270, 80);
    bezier(270, 180, 290, 155, 270, 105, 270, 80);   

  } 
}


function createSwitch()
{
    textSize(12);
    strokeWeight(2);
    fill("red");
    rect(20,20,50,20,90);//red Switch
    fill("blue");
    rect(20,50,50,20,90);//blue Switch
    fill("white")
    rect(20,80,50,20,90);
    fill(0);
    fill("black");
    strokeWeight(1);
    text("EXIT",32,94);
    if(switchClicked==="red")
    {  
        fill("white");
        ellipse(30,30,17,17);//Create toggle for red
        text("ON",42,34); //Write text on Red
        ellipse(60,60,17,17);//Create toggle for blue
        text("OFF",25,64); //write text on blue
    }
    if(switchClicked==="blue")
    {
        fill("white");
        ellipse(60,30,17,17);
        text("OFF",25,34);
        ellipse(30,60,17,17);
        text("ON",42,64) 
    }  
}

function closingScreen()
{
 
  fill(247, 208, 138);
  rect(0,0,800,650);

  // Load the font you want to use
  //myFont = loadFont('Arial.ttf');
  textSize(100);
  fill("brown");
  text("Happy",135,390);
  text("Diwali",440,390);
  fill("brown");
  rect(580,520,200,100,10);
  textSize(30);
  fill(247, 208, 138);
  text("Start Over",610,580);
   if (stage===3) {
    diya();
  }
}

function mousePressed() 
{
  // Toggle lights on and off when the switch is clicked

	if (mouseX > 20 && mouseX < 70 && ((mouseY > 20 && mouseY < 40)||(mouseY > 50 && mouseY < 70)))   
	{
	        stage=2;
		if(circleColor1==="red")
		{
		  	circleColor1="blue";
		  	switchClicked="blue"
		}  
        	else  //means the colour is blue, change the colour to red
         	{
         	 	circleColor1="red";
         	 	switchClicked="red"
        	}         
	}

	else if (mouseX > 20 && mouseX < 70 && mouseY > 80 && mouseY < 100)   
	{
		stage=3;
	} 
  	else if (mouseX > 325 && mouseX < 525 && mouseY > 345 && mouseY < 445)   
	{
		stage=2;
	}
   	else if (mouseX > 580 && mouseX < 780 && mouseY > 520 && mouseY < 620 && stage===3) 
	{
		stage=1;
	}
	else
	{
		stage=2;
	}

	//window.alert("Mouse pressed"+mouseX+ ":"+mouseY);
	//will tell mouse's x and y position
}