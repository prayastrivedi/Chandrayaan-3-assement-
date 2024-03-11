 class Spaceship {
   position ;
   direction;
   directions;

  constructor(x, y, z, initialDirection) {
 this.position = { x, y, z };
    this.directions = ['N', 'E', 'S', 'W', 'Up', 'Down'];
    this.currentDirection = this.validateDirection(initialDirection) ? initialDirection : 'N';
  }

  // TO VALIDATE DIRECTION IF DIRECTION EXISTS OR NOT 
   validateDirection(direction) {
    return this.directions.includes(direction);
  }

  // TO EXECUTE COMMANDS IN SAME ORDER AS PROVIDED 
executeCommands(commands) {
    for (const command of commands) {
      switch (command) {
        case 'f':
          this.moveForward();
          break;
        case 'b':
          this.moveBackward();
          break;
        case 'l':
          this.turnLeft();
          break;
        case 'r':
          this.turnRight();
          break;
        case 'u':
          this.turnUp();
          break;
        case 'd':
          this.turnDown();
          break;
        default:
          console.log(`Invalid command: ${command}`);
      }
    }

  }
// considering starting point to 0,0,s0
// move forward logic if regarding currentDirection
 moveForward() {
    switch (this.currentDirection) {
      case 'N':
        this.position.y++;
        break;
      case 'S':
        this.position.y--;
        break;
      case 'E':
        this.position.x++;
        break;
      case 'W':
        this.position.x--;
        break;
      case 'Up':
        this.position.z++;
        break;
      case 'Down':
        this.position.z--;
        break;
    }
    console.log("Move forward Current Direction: " ,this.currentDirection+""+ this.position.x + " " + this.position.y + " "+this.position.z);
  }
// added logic gor backward movement
  moveBackward() {
    switch (this.currentDirection) {
      case 'N':
        this.position.y--;
        break;
      case 'S':
        this.position.y++;
        break;
      case 'E':
        this.position.x--;
        break;
      case 'W':
        this.position.x++;
        break;
      case 'Up':
        this.position.z--;
        break;
      case 'Down':
        this.position.z++;
        break;
    }
  }

  // logic to turn right 
  // asumtion made from if the direction is up turn left  
  //will make it north  and turn right   will be south  
  // asumtion made from if the direction is down  turn   right will be south 
  // and turn right will be north
  turnRight() {
        if (this.currentDirection === 'N') {
            this.currentDirection = 'E';
        } else if (this.currentDirection === 'S') {
            this.currentDirection = 'W';
        } else if (this.currentDirection === 'E') {
            this.currentDirection = 'S';
        } else if (this.currentDirection === 'W') {
            this.currentDirection = 'N';
        }else if (this.currentDirection === 'Up') {
            this.currentDirection = 'N';
        } else if (this.currentDirection === 'Down') {
            this.currentDirection = 's';
        }
    }

  // logic to turn left
  turnLeft() {
        if (this.currentDirection === 'N') {
            this.currentDirection = 'W';
        } else if (this.currentDirection === 'S') {
            this.currentDirection = 'E';
        } else if (this.currentDirection === 'E') {
            this.currentDirection = 'N';
        } else if (this.currentDirection === 'W') {
            this.currentDirection = 'S';
        }
          else if (this.currentDirection === 'Up') {
            this.currentDirection = 'N';
          }
          else if (this.currentDirection === 'Down') {
            this.currentDirection = 'S';
        }

    }


  // login to turn up and down can move from any direction 
  turnUp(){
  if (this.currentDirection !=='Up') {
    this.currentDirection = 'Up';
  }
}

   turnDown() {
     if  (this.currentDirection !=='Down'){
    this.currentDirection = 'Down';
  }
  }

  getPosition() {
    return this.position;
  }

  getDirection() {
    return this.currentDirection;
  }
}

module.exports =Spaceship

 