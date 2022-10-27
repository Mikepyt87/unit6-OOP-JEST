export default class Vehicle {
  xPosition: number = 0;
  moveForward(distance: number) {
    this.xPosition += distance;
  }
}
