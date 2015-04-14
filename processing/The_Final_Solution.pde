int TILE_WIDTH = 20;
int TILE_HEIGHT = 20;

int BOARD_WIDTH = 20;
int BOARD_HEIGHT = 20;

int SCREEN_WIDTH = 400;
int SCREEN_HEIGHT = 400;

Space[][] board = new Space[20][20];

int r = 255;
int g = 255;
int b = 255;

int numToggled = 0;
int level = 0;
boolean rainbow = false;

int currRainbowPosition = 0;

void setup() {
  //For some reason this breaks it
  //size(SCREEN_WIDTH, SCREEN_HEIGHT);
  
  size(400, 400);
  background(0);

  for (int r = 0; r < BOARD_HEIGHT; r++) {
    for (int c = 0; c < BOARD_WIDTH; c++) {
      board[r][c] = new Space(r * TILE_HEIGHT, c * TILE_WIDTH, (r * 100) + c); 
      board[r][c].show();
    }
  }
   
  randomSpaces();
}

void draw() {
    
  if(rainbow){
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
}

void keyPressed() {
  switch(key){
    case 'r':
      if(rainbow)
        rainbow = false;
      else
        rainbow = true;
    break; 
  }
  
}

void mousePressed() {
  
  print(mouseX , ":" , mouseY);
  
  int thisX = int(mouseX/BOARD_HEIGHT);
  int thisY = int(mouseY/BOARD_WIDTH);


  if(thisX < BOARD_HEIGHT-1)
    board[thisX + 1][thisY].toggle();
  
  if(thisX > 0)
    board[thisX - 1][thisY].toggle();
    
  if(thisY < BOARD_WIDTH-1)
    board[thisX][thisY + 1].toggle();
  
  if(thisY > 0)
    board[thisX][thisY - 1].toggle();
    
  /*for (int r = 0; r < 40; r++) {
    for (int c = 0; c < 40; c++) {
      if (board[r][c].checkIfWithin(mouseX, mouseY)) {
        board[r][c].toggle();
      }
    }
  }
  */
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
    
    // print("Space #" + id + " is now "); 
    if (isToggled) {
      numToggled--;
      print("off");
      isToggled = false;
    } else {
      numToggled++;
      print("on");
      isToggled = true;
    }

    this.show();
  };

};


