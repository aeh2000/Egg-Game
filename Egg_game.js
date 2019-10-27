var screen = 0;
var y=-20;
var x=200;
var speed = 2;
var score= 0;
var sound 


function preload(){
  
  sound = loadSound('Ding.wav');
  img = loadImage('IMG_4274.JPG');
  
}

function setup() {
  createCanvas(600, 400);
  
  
  c = color(100, 50, 0);
  d = color('#0f0');
  e = color(250);
}

function draw() {
	if(screen == 0){
    startScreen()
  }else if(screen == 1){
  	gameOn()
  }else if(screen==2){
  	endScreen()
  }	
}

function startScreen(){
		background(96, 157, 255)
		
  fill(300);
        textAlign(CENTER);
        textSize(40);
		text('EGG GAME', width / 2 , height / 2 )
        textSize(20);
		text('click to start :]', width / 2 , height / 2 + 40 );
		reset();
  
  
}

function gameOn(){
	background(96, 157, 255)
  image(img, 0, 0);
  
  fill(255)
  textSize(14);
  text("score = " + score, 30,20)
    fill(e);
    ellipse(x, y, 20, 30)
  rectMode(CENTER)
  
  //Basket
  fill(c);
  noStroke();
  arc(mouseX, 325, 100, 90, 0, PI, CHORD);
  
  //sound
  
  
  //grass
  fill(d);
  noStroke();
  rect(300, 390, 600, 40);

  
	y+= speed;
  if(y>height){
  	screen =2
	 }
  if(y>height-10 && x>mouseX-20 && x<mouseX+20){
  	y=-20
    speed+=.5
    score+= 1
  }
	if(y==-20){
  	pickRandom();
  }
}

function pickRandom(){
	x= random(20,width-20)
}


function endScreen(){
		background(96, 157, 255)
        fill(255)
		textAlign(CENTER);
        textSize(40);
		text('YOU LOSE :[', width / 2, height / 2)
    textSize(16);
  	text("SCORE = " + score, width / 2, height / 2 + 20)
		text('click to play again', width / 2, height / 2 + 40);
  
  //grass
        fill(d);
        noStroke();
        rect(300, 390, 600, 40);
}

function mousePressed(){
	if(screen==0){
  	screen=1
  }else if(screen==2){
  	screen=0
  }
  
    sound.play()
  
  
}

function reset(){
	  score=0;
  	speed=2;
  	y=-20;
}
