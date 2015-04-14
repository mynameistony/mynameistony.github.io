int TILE_WIDTH = 40;
int TILE_HEIGHT = 40;

int BOARD_WIDTH = 10;
int BOARD_HEIGHT = 10;

int SCREEN_WIDTH = 400;
int SCREEN_HEIGHT = 400;

Space[][] board = new Space[10][10];

int r = 255;
int g = 255;
int b = 255;

int numToggled = 0;
int level = 1;

int rainbow;

int currRainbowPosition = 0;

void setup() {
  //For some reason this breaks it
  //size(SCREEN_WIDTH, SCREEN_HEIGHT);
  size(400, 400);
  background(0);

  rainbow = 0;
  for (int r = 0; r < BOARD_HEIGHT; r++) {
    for (int c = 0; c < BOARD_WIDTH; c++) {
      board[r][c] = new Space(r * TILE_HEIGHT, c * TILE_WIDTH, (r * 100) + c); 
      board[r][c].show();
    }
  }
   
  randomSpaces(level);
}

void draw() {
    
  if(rainbow == 1){
    
    switch(currRainbowPosition){
       //r -> b
      case 0:
        r--;
        b++;
        
        if(r < 0 || b > 255)
          currRainbowPosition = 1;
      break;
      
      //b -> g
      case 1:
        b--;
        g++;
        
        if(b < 0 || g > 255)
          currRainbowPosition = 2;
      break;

      //g -> r
      case 2:
        g--;
        r++;
        
        if(g < 0 || r > 255)
          currRainbowPosition = 0;
      break;

      default:
        print("RRRR");
      break;
  
    }    
  }
  
  for (int r = 0; r < BOARD_HEIGHT; r++) {
    for (int c = 0; c < BOARD_WIDTH; c++) { 
      board[r][c].show();
    }
  }

  if(numToggled == 0)
    randomSpaces(level++);
    
  printInfo(numToggled,level);
}

void keyPressed() {
  switch(key){
    case 'r':
      if(rainbow == 1)
        rainbow = 0;
      else
        rainbow = 1;
    break; 
  }
  
}

void mousePressed() {
  
  //print(mouseX);
  //print(":");
  //print(mouseY);
  
  int thisX = int(mouseX/(SCREEN_WIDTH/BOARD_WIDTH));
  int thisY = int(mouseY/(SCREEN_HEIGHT/BOARD_HEIGHT));

//  alert(r);
//  alert(g);
  //alert(b);  
  if(thisX < 10-1)
    board[thisX + 1][thisY].toggle();
  
  if(thisX > 0)
    board[thisX - 1][thisY].toggle();
    
  if(thisY < 10-1)
    board[thisX][thisY + 1].toggle();
  
  if(thisY > 0)
    board[thisX][thisY - 1].toggle();
  
  //print(thisX);
  //print(":");
  //print(thisY);
}  

void randomSpaces(int currLevel){
  
  for(int i = 0; i < currLevel; i++){
    board[int(random(0,BOARD_HEIGHT))][int(random(0,BOARD_WIDTH))].toggle();
  }  
  
}

class Space {
  int id, x, y, colour;

  boolean isToggled = true;

  Space(int newX, int newY, int newId) {
    id = newId;
    x = newX;
    y = newY;
  };

  void show() {
    if (isToggled)
      fill(r,g,b);
    else
      fill(255-r,255-g,255-b);

    rect(x, y, TILE_WIDTH, TILE_HEIGHT);
  };

  void toggle() {
        
    //print("Space #" + id + " is now "); 
    if (isToggled) {
      numToggled++;
      //print("off");
      isToggled = false;
    } else {
      numToggled--;
      //print("on");
      isToggled = true;
    }
    this.show();
  };

};


