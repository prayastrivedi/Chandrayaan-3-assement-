class Spacecraft {
  position: { x: any; y: any; z: any };
  direction: any;
  constructor(x, y, z, direction) {
    this.position = { x, y, z };
    this.direction = direction;
  }

  executeCommands(commands: string[]): void {
    for (const command of commands) {
      if (command === "f") {
        this.moveForward();
      } else if (command === "b") {
        this.moveBackward();
      } else if (command === "r") {
        this.turnRight();
      } else if (command === "l") {
        this.turnLeft();
      } else if (command === "u") {
        this.turnUp();
      } else if (command === "d") {
        this.turnDown();
      }
    }
  }
  moveForward() {}

  moveBackward() {}

  turnLeft() {}

  turnRight() {}

  turnUp() {}

  turnDown() {}
}
