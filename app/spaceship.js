 class Spaceship {
   position ;
   direction;
   directions;

  constructor(x, y, z, initialDirection) {
 this.position = { x, y, z };
    this.directions = ['N', 'E', 'S', 'W', 'Up', 'Down'];
    this.direction = this.validateDirection(initialDirection) ? initialDirection : 'N';
  }

  // TO VALIDATE DIRECTION IF DIRECTION EXISTS OR NOT 
   validateDirection(direction) {
    return this.directions.includes(direction);
  }

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

   moveForward() {
     
  }

   moveBackward() {
     
  }

   turnRight() {
   
  }

   turnLeft() {
 
  }

   turnUp() {
    
  }

   turnDown() {
    
  }

  getPosition() {
    return this.position;
  }

  getDirection() {
    return this.direction;
  }
}

module.exports =Spaceship

 