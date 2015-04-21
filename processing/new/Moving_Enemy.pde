int numEnemies;
int level;
Enemy[] enemy = new Enemy[20];

void setup(){
  size(400,400);
  background(0);
  
  currEnemy = 0;

  numEnemies = 1;
  
  level = 1;
   
  enemy[0] = new Enemy(0, width/2,height/2, int(random(0,4)), 5);
 
}

void draw(){
  background(0);
  
  if(numEnemies <= 0){
    level++;
    numEnemies = level;
    
    for(int i = 0; i < numEnemies; i++)
      enemy[i] = new Enemy(i,int(random(0,width)),int(random(0,height)),int(random(0,4)),int(random(1, 5*level)));
      
      
  }
  for(int i = 0; i < numEnemies; i++){
     enemy[i].move();
  }
  
}

void mouseClicked(){
  
  //rect(mouseX,mouseY,50,50);

  for(int i = 0; i < numEnemies; i++){
    if(enemy[i].isClicked(mouseX,mouseY)){  
      enemy[i].hit();            
    }
  }

}

class Enemy{
  int id;
  int x;
  int y;
  int dir;
  int speed;
  
  int w;
  int h;
  
  boolean isAlive;
  
  Enemy(int newId, int startX,int startY,int startDir, int newSpeed){
    id = newId;
    x = startX;
    y = startY;
    dir = startDir;
    w = 50;
    h = 50;
    speed = newSpeed;
    
    isAlive = true;
    
  };
  
  void show(){
    if(isAlive){
      fill(255);   
      rect(x,y,h,w);
    }
  };
  
  void move(){
    if(x < 0)
      dir = 0;
      
    if(x > (width - (w)))
      dir = 1;
      
    if(y < 0)
      dir = 2;
      
    if(y > (height - (h)))
      dir = 3;
    
    switch(dir){
      case 0:
        x+=speed;
      break;
      case 1:
        x-=speed;
      break;
      case 2:
        y+=speed;
      break;
      case 3:
        y-=speed;
      break;     
      default:
       alert("FUCK");
      break; 
    } 
    
    
    print("Moving #");
    print(id);
    print(" to ");
    print(x);
    print(", ");
    print(y);
    print(" in dir: ");
    print(dir);
    show();
  };
  
  boolean isClicked(int clickX, int clickY){
    if(((clickX > x) && (clickX < (x + w))) && ((clickY > y) && (clickY < (y + h))))
      return true;
    else
      return false;
   
  };
  
  void changeDir(int newDir){
    dir = newDir;
  };
  
  void hit(){
    x = random(0,width);
    y = random(0,height);

    h -= 5;
    w -= 5;

    if((h <= 10) || (w <= 10))
      kill();    
  };
  
  void kill(){
    isAlive = false;
    numEnemies--;    
  };
  
};

