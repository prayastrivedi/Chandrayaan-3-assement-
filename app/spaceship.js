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
  turnRight() {
   
    const currentIdx = this.directions.indexOf(this.currentDirection);
     console.log(this.currentDirection,currentIdx, this.directions[(currentIdx + 1) % 6],'turn right');
    this.currentDirection = this.directions[(currentIdx + 1) % 6];
  }

  // logic to turn left
   turnLeft() {
    const currentIdx = this.directions.indexOf(this.currentDirection);
    console.log(currentIdx, 'turn left',this.directions[(currentIdx + 3) % 6]);
    this.currentDirection = this.directions[(currentIdx + 3) % 6]; // Rotate 90 degrees left
  }

  // login to turn up and down
  // assumtion made spacecraft can manocer up and down if  north and south
  turnUp(){
   if (this.currentDirection == 'N' ||this.currentDirection == 'S') {
    this.currentDirection = 'Up';
  }
}

   turnDown() {
     if (this.currentDirection == 'N' ||this.currentDirection == 'S') {
    this.currentDirection = 'Down';
  }
  }

  getPosition() {
   console.log("fianl postion",this.position)
    return this.position;
  }

  getDirection() {
console.log("fianl direction",this.currentDirection)
    return this.currentDirection;
  }
}

module.exports =Spaceship

 