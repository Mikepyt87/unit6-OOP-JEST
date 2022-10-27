import Vehicle from "./Vehicle";

export default class AirVehicle extends Vehicle {
  yPostion: number;
  constructor(yPosition: number) {
    super();
    this.yPostion = this.xPosition = yPosition;
  }

  moveUp() {
    if (this.yPostion < 10) {
      this.yPostion++;
    } else {
      this.yPostion;
    }
  }
}
