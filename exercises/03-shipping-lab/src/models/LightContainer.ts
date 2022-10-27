import ShippingContainer from "./ShippingContainer";

export default class LightContainer implements ShippingContainer {
  destination: string;
  cargoWeight: number;
  // constructor
  constructor(inputDestination: string, inputCargoWeight: number = 0) {
    this.destination = inputDestination;
    this.cargoWeight = inputCargoWeight;
  }
  // method **note syntax
  getGrossWeight(): number {
    return this.cargoWeight;
  }
}
