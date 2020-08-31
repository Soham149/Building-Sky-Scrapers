var b,b1, b2, b3, b4, b5, b6, b7, b8, b9, b10;

function setup() {
  createCanvas(400, 400);
  b=new Building();
  b.position=2;
  b.floor=17;
  
  b1=new Building();
  b1.position=3;
  b1.floors=23;
  
  b2=new Building();
  b2.position=0;
  b2.floors=27;
  
  b3=new Building();
  b3.position=1;
  b3.floors=13;
 
  b4=new Building();
  b4.position=4;
  b4.floors=19;
  
  b5=new Building();
  b5.position=5;
  b5.floors=16;
  
  b6=new Building();
  b6.position=6
  b6.floors=14;
 
  b7=new Building();
  b7. position=7
  b7. floors=12;
  
  b8=new Building();
  b8.position=8;
  b8.floor=15;
  
  b9=new Building();
  b9.position=9;
  b9.floor=12;
  
  b10=new Building();
  b10.position=10;
  b10.floor=12;
}

function draw() 
{
  background(0);
  b.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  
}