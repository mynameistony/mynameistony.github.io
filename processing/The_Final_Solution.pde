//Variable storing the desired sized
//You should be able to change these to make 
//a custom size but...don't
int TILE_WIDTH = 20;
int TILE_HEIGHT = 20;

int BOARD_WIDTH = 20;
int BOARD_HEIGHT = 20;

int SCREEN_WIDTH = 400;
int SCREEN_HEIGHT = 400;

//A 20 x 20 array of "Spaces" defined below
Space[][] board = new Space[20][20];

//Starting colors
int r = 255;
int g = 255;
int b = 255;

//Count number of toggled
int numToggled = 0;

//What level are we on?
int level = 0;

//Rainbow mode?
boolean rainbow = false;

//Which part of the rainbow cycle?
int currRainbowPosition = 0;

//This is the start of the program this runs first
//and once.
void setup() {
  //For some reason this breaks it
  //size(SCREEN_WIDTH, SCREEN_HEIGHT);

  //Create the canvas 400px X 400px
  size(400, 400);

  //No background
  background(0);

  //Initialize board
  for (int r = 0; r < BOARD_HEIGHT; r++) {
    for (int c = 0; c < BOARD_WIDTH; c++) {
      board[r][c] = new Space(r * TILE_HEIGHT, c * TILE_WIDTH, (r * 100) + c); 
      board[r][c].show();
    }
  }
  
  //Start with one random tile toggled
  randomSpaces(1);
}

//This run after setup() and infinitely
void draw() {
  
  //If we're in rainbow mode...  
  if(rainbow){
    switch(currRainbowPosition){
       //r -> b
      case 0:
        //Decrease Red value
        r--;
        //Increase Blue value
        b++;
        
        //If we reach the end move to the next
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
        //Shit's on fire yo
        print("RRRR");
      break;
  
    }    
  }
  
  //Refresh the board
  for (int r = 0; r < BOARD_HEIGHT; r++) {
    for (int c = 0; c < BOARD_WIDTH; c++) { 
      board[r][c].show();
    }
  }

  //Make it harder if they win
  if(numToggled == 0)
    randomSpaces(level++);
}

//This gets called when a key is pressed
void keyPressed() {

  //Check what key
  switch(key){

    //If its 'r' toggle rainbow mode
    case 'r':
      if(rainbow)
        rainbow = false;
      else
        rainbow = true;
    break; 
  }
  
}

//This gets called when the mouse is clicked
void mousePressed() {
  
  //print(mouseX , ":" , mouseY);
  
  //Get which tile is clicked
  int thisX = int(mouseX/BOARD_HEIGHT);
  int thisY = int(mouseY/BOARD_WIDTH);


  //First make sure it's there
  //then toggle adjacent tile
  if(thisX < BOARD_HEIGHT-1)
    board[thisX + 1][thisY].toggle();

  if(thisX > 0)
    board[thisX - 1][thisY].toggle();
    
  if(thisY < BOARD_WIDTH-1)
    board[thisX][thisY + 1].toggle();
  
  if(thisY > 0)
    board[thisX][thisY - 1].toggle();
}  

//Generate random spaces
void randomSpaces(int currLevel){
  
  //Toggle a random tile for each "level"
  for(int i = 0; i < currLevel; i++){
    board[int(random(0,BOARD_HEIGHT))][int(random(0,BOARD_WIDTH))].toggle();
  }  
  
}

// "Space" object
class Space {

  //Variables holding info
  int id, x, y, colour;

  boolean isToggled = true;

  //Initializer
  Space(int newX, int newY, int newId) {
    id = newId;
    x = newX;
    y = newY;
  };

  //Render the tile
  void show() {
    if (isToggled)
      fill(r,g,b);
    else
      fill(255-r,255-g,255-b);

    rect(x, y, TILE_WIDTH, TILE_HEIGHT);
  };

  //Toggle the tile
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


