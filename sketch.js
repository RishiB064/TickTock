var hr,mn,sc;

function setup() 
{
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() 
{
  background(255,255,255); 

  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);

  scAngle = map(sc,0,60,0,360);
  translate(0,0);
  stroke(225,0,0);
  strokeWeight(7);
  line(0,0,100,0);

  drawSprites();
}

