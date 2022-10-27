import ShippingContainer from "./ShippingContainer";
// In its own file, create a class named HeavyContainer and export it.
//                                  Implements the ShippingContainer interface.
export default class HeavyContainer implements ShippingContainer {
  // Properties:
  // tareWeight (a number) - this is the weight of the container when empty
  tareWeight: number;
  // destination (a string)
  destination: string;
  // cargoWeight (a number) - the weight of the cargo inside the container
  cargoWeight: number;

  // Constructor Parameters:
  constructor(
    // tareWeight (a number) sets the tareWeight property
    inputTareWeight: number,
    // destination (a string) sets the destination property
    inputDestination: string,
    // cargoWeight (a number) sets the cargoWeight property. This parameter is optional and has a default value of 0.
    inputCargoWeight: number = 0
  ) {
    this.tareWeight = inputTareWeight;
    this.destination = inputDestination;
    this.cargoWeight = inputCargoWeight;
  }
  //method
  // getGrossWeight: No parameters.
  getGrossWeight(): number {
    // Returns the tareWeight plus cargoWeight.
    return this.tareWeight + this.cargoWeight;
  }
}
