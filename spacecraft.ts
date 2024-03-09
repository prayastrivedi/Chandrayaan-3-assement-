class Spacecraft {
  position: { x: any; y: any; z: any };
  direction: any;
  constructor(x, y, z, direction) {
    this.position = { x, y, z };
    this.direction = direction;
  }
  moveForward() {}

  moveBackward() {}

  turnLeft() {}

  turnRight() {}

  turnUp() {}

  turnDown() {}
}
