 class Spaceship {
   position ;
   direction;

  constructor(initialPosition, initialDirection) {
    this.position = initialPosition;
    this.direction = initialDirection;
  }

  executeCommands(commands) {
    for (const command of commands) {
      if (command === 'f') {
        this.moveForward();
      } else if (command === 'b') {
        this.moveBackward();
      } else if (command === 'r') {
        this.turnRight();
      } else if (command === 'l') {
        this.turnLeft();
      } else if (command === 'u') {
        this.turnUp();
      } else if (command === 'd') {
        this.turnDown();
      }
    }
  }

   moveForward() {
    // Implement move forward logic based on the current direction
  }

   moveBackward() {
    // Implement move backward logic based on the current direction
  }

   turnRight() {
    // Implement turn right logic based on the current direction
  }

   turnLeft() {
    // Implement turn left logic based on the current direction
  }

   turnUp() {
    // Implement turn up logic based on the current direction
  }

   turnDown() {
    // Implement turn down logic based on the current direction
  }

  getPosition() {
    return this.position;
  }

  getDirection() {
    return this.direction;
  }
}

module.exports =Spaceship

 